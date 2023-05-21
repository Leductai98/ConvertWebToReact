import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/help.css";
import Container from "react-bootstrap/Container";
import DetailHeader from "./DetailComponent/DetailHeader";
import DetailPicture from "./DetailComponent/DetailPicture";
import DetailInfo from "./DetailComponent/DetailInfo";
import { DetailProvider } from "./DetailComponent/DetailContext&Reducer";
import "../assets/css/swiper.css";

import DetailComment from "./DetailComponent/DetailComment";
import DetailMap from "./DetailComponent/DetailMap";
import Toast from "./DetailComponent/Toast";

const urlRoomInfoPicture = `https://api-sandy-zeta.vercel.app`;
export default function Detail() {
 
  const { roomId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [roomInfo, setRoomInfo] = useState({});
  const [picture, setPicture] = useState([]);
  useEffect(() => {
    const getRoomInfo = async () => {
      const res = await fetch(
        `https://api-sandy-zeta.vercel.app/room-list?id=${roomId}`
      );
      const data = await res.json();
      const data2 = Array.from(data)[0];

      setRoomInfo(data2);
      setPicture(data2.picture);
      setIsLoading(false);
    };
    getRoomInfo();
  }, []);
  document.title = roomInfo.name;
  if (isLoading)
    return (
      <div className="detail--loading--img">
        <img src="/Spinner-1s-200px.svg" alt="" />
      </div>
    );
  return (
    <>
      <DetailProvider>
        <Container>
          <div className="room-wrap">
            <DetailHeader data={roomInfo} />
            <DetailPicture data={picture} url={urlRoomInfoPicture} />
            <DetailInfo data={roomInfo} url={urlRoomInfoPicture} />
          </div>
        </Container>
        <Container>
          <DetailComment data={roomInfo} url={urlRoomInfoPicture} />
          <DetailMap data={roomInfo} />
        </Container>
        <Toast />
      </DetailProvider>
    </>
  );
}
