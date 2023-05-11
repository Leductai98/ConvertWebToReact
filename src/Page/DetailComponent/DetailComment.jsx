import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
export default function DetailComment({ data, url }) {
  return (
    <Row>
      <Col xs={12}>
        <div className="info-rating">
          <div className="rating-header">
            <div className="rating-header-icon">
              <img src="/Star (1).png" alt="" />
            </div>
            <div className="rating-header-des">{data.rate}</div>
          </div>
          <div className="rating-list">
            <Row className="gy-5">
              {data.comments.map((item, index) => (
                <Col xs={12} md={6} key={index}>
                  <div className="rating-item">
                    <div className="rating-item-user">
                      <div className="rating-item-user-avatar">
                        <img src={url + item.avatar} />
                      </div>
                      <div className="rating-item-user-name">
                        <span>{item.name}</span>
                        <div className="rating-item-user-date">{item.date}</div>
                      </div>
                    </div>
                    <div className="rating-item-content">{item.content}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
}
