import React from "react";
import "../assets/css/user_info.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import UserItem from "./UserComponent/UserItem";
export default function User() {
  return (
    <Container className="manage__content">
      <Row>
        <Col xs={12} className="manage-wrap">
          <div className="manage-header">Tài khoản</div>
          <div className="manage-content">
            <div
              className="manage-content-header"
              style={{ textAlign: "center" }}
            >
              Thông tin tài khoản
            </div>
            <div className="manage-list">
              <UserItem />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
