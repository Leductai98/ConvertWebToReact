import React from "react";
import RoomFilter from "./RoomFilter";
import { useEffect, useState } from "react";
import RoomItem from "./RoomItem";
const urlImage = `https://api-git-main-leductai98.vercel.app`;
const getRoom = async () => {
  const res = await fetch("https://api-sandy-zeta.vercel.app/room-list");
  return res.json();
};
const promise = getRoom();
export default function Room() {
  const [roomList, setRoomList] = useState([]);
  useEffect(() => {
    promise.then((data) => {
      setRoomList(data);
    });
  }, []);
  return (
    <section className="booking__room">
      <RoomFilter />
      <div className="booking__room--list grid">
        <div className="row-index">
          {roomList.map((item) => (
            <RoomItem key={item.id} data={item} urlImage={urlImage} />
          ))}
        </div>
      </div>
    </section>
  );
}
