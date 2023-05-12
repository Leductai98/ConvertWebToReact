import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
export default function FavoriteItem() {
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
            </div>
          </Link>
        </Col>
        <Col xs={12} lg={3}>
          <div className="date">
            <div className="date-header">Địa điểm</div>
            <div className="date-des">
              ${"{"}item.location{"}"}
            </div>
          </div>
        </Col>
        <Col xs={12} lg={3} className="col-12 col-lg-3">
          <div className="price">
            <div className="price-header">Giá</div>
            <div className="price-des">
              đ ${"{"}item.price{"}"}/đêm
            </div>
          </div>
        </Col>
        <Col xs={12} lg={2} className="col-12 col-lg-2">
          <div className="delete">
            <img src="/trash-outline.svg" alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
