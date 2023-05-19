import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { FavoriteProvider } from "./FavoriteComponent/FavoriteContext&Reducer";
import FavoriteList from "./FavoriteComponent/FavoriteList";
export default function Favorite() {
  return (
    <FavoriteProvider>
      <Container className="manage__content">
        <Row>
          <Col xs={12} className="manage-wrap">
            <div className="manage-header">Yêu thích</div>
            <div className="manage-content">
              <div className="manage-content-header">Danh sách yêu thích</div>
              <FavoriteList />
            </div>
          </Col>
        </Row>
      </Container>
    </FavoriteProvider>
  );
}
