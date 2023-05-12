import React from "react";
import "../assets/css/manage.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ManageItem from "./ManageComponent/ManageItem";
export default function Manage() {
  document.title = "Chuyến đi của bạn - Tai";
  return (
    <Container className="manage__content">
      <Row>
        <Col xs={12} className="manage-wrap">
          <div className="manage-header">Chuyến đi</div>
          <div className="manage-content">
            <div className="manage-content-header">Danh sách chuyến đi</div>
            <div className="manage-list">
              <ManageItem />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
