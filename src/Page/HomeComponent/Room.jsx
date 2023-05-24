import React from "react";
import RoomFilter from "./RoomFilter";
import { useEffect, useState, useContext } from "react";
import { HomeContext } from "./HomeContext&Reducer";
import { actions } from "./HomeContext&Reducer";
import RoomItem from "./RoomItem";

export default function Room({ urlImage, homeRoomList }) {
  const [state, dispatch] = useContext(HomeContext);
  const {
    roomList,
    roomListAfterFilter,
    roomListAfterFilterDetail,
    activeFilterType,
    roomListAfterFilterLength,
    numberRoomRender,
  } = state;
  useEffect(() => {
    dispatch(actions.setRoomList(homeRoomList));
    dispatch(actions.setRoomListAfterFilter(homeRoomList));
    dispatch(actions.setRoomListAfterFilterDetail(homeRoomList));
  }, [homeRoomList]);
  let list = [];
  if (activeFilterType == "Tất cả nhà") {
    list = roomListAfterFilterDetail;
  } else {
    list = roomListAfterFilterDetail.filter(
      (item) => item.type == activeFilterType
    );
  }

  let number = list.length > 12 ? 12 : list.length;
  if (numberRoomRender > 12) {
    number = list.length > numberRoomRender ? numberRoomRender : list.length;
  }
  let listLength = list.length;
  useEffect(() => {
    dispatch(actions.setRoomAfterFilter(listLength));
    dispatch(actions.setRoomRender(number));
  }, [number, listLength]);

  let arrayRender = [];
  for (let i = 0; i < number; i++) {
    arrayRender.push(list[i]);
  }
 
  return (
    <section className="booking__room">
      <RoomFilter />
      <div className="booking__room--list grid">
        <div className="row-index">
          {arrayRender.length === 0 ? (
            <div className="no-room">Không có phòng phù hợp</div>
          ) : (
            arrayRender.map((item) => (
              <RoomItem key={item.id} data={item} urlImage={urlImage} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
