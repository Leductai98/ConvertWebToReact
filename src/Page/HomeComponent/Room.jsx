import React from "react";
import RoomFilter from "./RoomFilter";
import { useEffect, useState, useContext } from "react";
import { HomeContext } from "./HomeContext&Reducer";
import { actions } from "./HomeContext&Reducer";
import RoomItem from "./RoomItem";
const urlImage = `https://api-git-main-leductai98.vercel.app`;
const getRoom = async () => {
  const res = await fetch("https://api-sandy-zeta.vercel.app/room-list");
  return res.json();
};
const promise = getRoom();
export default function Room() {
  const [roomList, setRoomList] = useState([]);
  const [state, dispatch] = useContext(HomeContext);
  const { FilterTypeActive, roomListAfterFilterLength, numberRoomRender } =
    state;
  useEffect(() => {
    promise.then((data) => {
      setRoomList(data);
    });
  }, []);
  let roomListAfterFilter = [];
  if (FilterTypeActive.name == "Tất cả nhà") {
    roomListAfterFilter = roomList;
  } else {
    roomListAfterFilter = roomList.filter(
      (item) => item.type == FilterTypeActive.name
    );
  }

  let number =
    roomListAfterFilter.length > 12 ? 12 : roomListAfterFilter.length;
  if (numberRoomRender > 12) {
    number =
      roomListAfterFilter.length > numberRoomRender
        ? numberRoomRender
        : roomListAfterFilter.length;
  }

  useEffect(() => {
    dispatch(actions.setRoomAfterFilter(roomListAfterFilter.length));
    dispatch(actions.setRoomRender(number));
  }, [number]);

  let arrayRender = [];
  for (let i = 0; i < number; i++) {
    arrayRender.push(roomListAfterFilter[i]);
  }

  return (
    <section className="booking__room">
      <RoomFilter />
      <div className="booking__room--list grid">
        <div className="row-index">
          {arrayRender.map((item) => (
            <RoomItem key={item.id} data={item} urlImage={urlImage} />
          ))}
        </div>
      </div>
    </section>
  );
}
