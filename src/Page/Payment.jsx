import React from "react";
import "../assets/css/payment.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import PaymentComfirm from "./PaymentComponent/PaymentComfirm";
import PaymentInfoMenu from "./PaymentComponent/PaymentInfoMenu";
import PaymentPopUp from "./PaymentComponent/PaymentPopUp";
import PaymentToast from "./PaymentComponent/PaymentToast";

export default function Payment() {
  document.title = "Đặt phòng - Tai";
  return (
    <>
      <Container className="payment__wrap">
        <Row>
          <Col xs={12} lg={7}>
            <PaymentComfirm />
          </Col>
          <Col xs={12} lg={5}>
            <PaymentInfoMenu />
          </Col>
        </Row>
      </Container>
      <PaymentPopUp />
      <PaymentToast />
    </>
  );
}