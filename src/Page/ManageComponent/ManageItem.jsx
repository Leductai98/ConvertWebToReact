import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
export default function ManageItem() {
  return (
    <div className="manage-item" data-name="${item.name}">
      <Row>
        <Col xs={12} lg={4}>
          <Link to="${item.link}" className="room-info">
            <div className="room-picture">
              <img src="${item.picture}" alt="" />
            </div>
            <div className="room-text">
              <div className="room-name">
                ${"{"}item.name{"}"}
              </div>
              <div className="room-status">
                ${"{"}item.status{"}"}
              </div>
              <div className="room-location">
                ${"{"}item.location{"}"}
              </div>
            </div>
          </Link>
        </Col>
        <Col xs={12} lg={3}>
          <div className="date">
            <div className="date-header">Thời gian</div>
            <div className="date-des">
              ${"{"}item.date{"}"}
            </div>
          </div>
        </Col>
        <Col xs={12} lg={3}>
          <div className="price">
            <div className="price-header">Tổng</div>
            <div className="price-des">
              ${"{"}item.price{"}"}
            </div>
            <div className="price-way">
              ${"{"}item.way{"}"}
            </div>
          </div>
        </Col>
        <Col xs={12} lg={2}>
          <div className="delete">
            <img src="/trash-outline.svg" alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
