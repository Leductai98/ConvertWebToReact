import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import FavoriteItem from "./FavoriteComponent/FavoriteItem";
export default function Favorite() {
  return (
    <Container className="manage__content">
      <Row>
        <Col xs={12} className="manage-wrap">
          <div className="manage-header">Yêu thích</div>
          <div className="manage-content">
            <div className="manage-content-header">Danh sách yêu thích</div>
            <div className="manage-list">
              <FavoriteItem />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
