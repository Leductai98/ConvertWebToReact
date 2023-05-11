import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
export default function DetailMap({ data }) {
  return (
    <Row>
      <Col xs={12}>
        <div className="info-map">
          <div className="map-text">
            <div className="map-header">Nơi bạn sẽ đến</div>
            <div className="map-des">{data.location}</div>
          </div>
          <div className="map">
            <iframe
              src={`https://www.google.com/maps/embed?${data.map}`}
              width={1000}
              height={500}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Col>
    </Row>
  );
}
