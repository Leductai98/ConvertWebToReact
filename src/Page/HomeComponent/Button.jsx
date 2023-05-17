import React, { useContext } from "react";
import { HomeContext } from "./HomeContext&Reducer";
import { actions } from "./HomeContext&Reducer";
export default function Button() {
  const [state, dispatch] = useContext(HomeContext);
  const { numberRoomRender, roomListAfterFilterLength } = state;

  return (
    <div
      className="btn__moreroom"
      style={{
        display: `${
          numberRoomRender >= roomListAfterFilterLength ? "none" : "flex"
        }`,
      }}
    >
      <button
        onClick={() => {
         
          dispatch(actions.setRoomRender(numberRoomRender + 4));
        }}
      >
        Thêm nữa
      </button>
    </div>
  );
}
