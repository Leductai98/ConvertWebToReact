import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function DetailHeader({ data }) {
  return (
    <div className="room__des-header">
      <div className="header-name">
        <p>{data.name}</p>
      </div>
      <div className="header-info">
        <Row className="g-0 align-items-end">
          <Col
            xs={10}
            md={2}
            className=" d-flex align-items-end justify-content-start"
          >
            <div className="rating d-flex gap-2 align-items-end justify-content-start">
              <div className="rating-icon d-flex align-items-center">
                <img src="/Star.jpg" alt="" />
              </div>
              <div className="rating-text">{data.rate}</div>
            </div>
          </Col>
          <Col
            xs={0}
            md={6}
            className=" d-none d-md-block d-flex align-items-end justify-content-start"
          >
            <div className="info-status">
              <span className="house">{data.status} |</span>
              <span className="location">{data.location}</span>
            </div>
          </Col>
          <Col
            xs={1}
            md={2}
            className="d-flex align-items-end justify-content-end"
          >
            <div className="share">
              <div className="share-icon">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    fill: "none",
                    height: 16,
                    width: 16,
                    stroke: "currentcolor",
                    strokeWidth: 2,
                    overflow: "visible",
                  }}
                >
                  <g fill="none">
                    <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9" />
                    <path d="M16 3v23V3z" />
                    <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13" />
                  </g>
                </svg>
              </div>
              <div className="share-text d-none d-md-block">Chia sẻ</div>
            </div>
          </Col>
          <Col
            xs={1}
            md={2}
            className="d-flex align-items-end justify-content-end"
          >
            <div className="save">
              <div className="save-icon" style={{ color: "none" }}>
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    fill: "none",
                    height: 16,
                    width: 16,
                    stroke: "currentcolor",
                    strokeWidth: 2,
                    overflow: "visible",
                  }}
                >
                  <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
                </svg>
              </div>
              <div className="save-text d-none d-md-block">Lưu</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}