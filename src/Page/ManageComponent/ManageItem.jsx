import React, { useContext } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import { ManageContext } from "./ManageContext&Reducer";
import { actions } from "./ManageContext&Reducer";
export default function ManageItem({ data }) {
  const [state, dispatch] = useContext(ManageContext);
  const { paymentList } = state;
  const handleDeletePayment = (id) => {
    let result = paymentList.filter((item) => item.name !== id);
    let result2 = JSON.parse(localStorage.getItem("payment"));
    result2 = result2.filter((item) => item.id !== id);
    localStorage.setItem("payment", JSON.stringify(result2));
    dispatch(actions.setPaymentList(result));
  };
  return (
    <div className="manage-item" data-name={data.name}>
      <Row>
        <Col xs={12} lg={4}>
          <Link to={data.link} className="room-info">
            <div className="room-picture">
              <img src={data.picture} alt="" />
            </div>
            <div className="room-text">
              <div className="room-name">{data.name}</div>
              <div className="room-status">{data.status}</div>
              <div className="room-location">{data.location}</div>
            </div>
          </Link>
        </Col>
        <Col xs={12} lg={3}>
          <div className="date">
            <div className="date-header">Thời gian</div>
            <div className="date-des">{data.date}</div>
          </div>
        </Col>
        <Col xs={12} lg={3}>
          <div className="price">
            <div className="price-header">Tổng</div>
            <div className="price-des">đ {data.price.toLocaleString()}</div>
            <div className="price-way">{data.way}</div>
          </div>
        </Col>
        <Col xs={12} lg={2}>
          <div
            className="delete"
            onClick={() => {
              handleDeletePayment(data.id);
            }}
          >
            <img src="/trash-outline.svg" alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
