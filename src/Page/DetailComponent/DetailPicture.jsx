import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PictureSlide from "./PictureSlide";

export default function DetailPicture({ data, url }) {
  return (
    <div className="room__picture">
      <input type="checkbox" id="picture-list" />
      <PictureSlide data={data} url={url} />
      <div className="row g-1">
        <div htmlFor="picture-list" className="col-12 col-md-6 picture-right">
          <label htmlFor="picture-list" className="picture-big">
            <img src={url + data[0].link} alt="" />
          </label>
        </div>
        <div className="col-6 d-none d-md-block picture-left">
          <div className="row g-1">
            <div className="col-lg-6 d-none d-lg-block">
              <label htmlFor="picture-list" className="picture-small">
                <img src={url + data[1].link} alt="" />
              </label>
            </div>
            <div className="col-md-12 col-lg-6">
              <label
                htmlFor="picture-list"
                className="picture-small border-picture-top"
              >
                <img src={url + data[2].link} alt="" />
              </label>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <label htmlFor="picture-list" className="picture-small">
                <img src={url + data[3].link} alt="" />
              </label>
            </div>
            <div className="col-md-12 col-lg-6">
              <label
                htmlFor="picture-list"
                className="picture-small border-picture-bot"
              >
                <img src={url + data[4].link} alt="" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
