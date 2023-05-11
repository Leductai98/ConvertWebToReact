import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
export default function SignInContent() {
  return (
    <>
      <Container>
        <Row className="signin-wrap justify-content-center justify-content-lg-end">
          <Col xs={12} lg={5} className=" signin-content">
            <div className="signin-header">Đăng nhập</div>
            <div className="signin-form-wrap">
              <form action="" className="signin-form">
                <div className="input-mail">
                  <label htmlFor="email">
                    Địa chỉ email <span />
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Nhập địa chỉ email"
                  />
                </div>
                <div className="input-pass">
                  <label htmlFor="new-password">
                    Mật khẩu <span />
                  </label>
                  <div className="input-wrap">
                    <input
                      type="password"
                      id="new-password"
                      placeholder="Nhập mật khẩu"
                      autoComplete="off"
                    />
                    <div className="icon-password">
                      <ion-icon name="eye-outline" />
                      <ion-icon name="eye-off-outline" className="active" />
                    </div>
                  </div>
                </div>
                <button type="submit">Đăng nhập</button>
              </form>
            </div>
            <div className="have-acount">
              <div className="acount-text">Chưa có tài khoản?</div>
              <a
                href="/signup
          "
                className="acount-btn"
              >
                Đăng ký
              </a>
            </div>
          </Col>
          <div className="background-signin d-none d-lg-block">
            <img src="/pexels-quang-nguyen-vinh-2166711.webp" alt="" />
          </div>
        </Row>
      </Container>
      <div className="background2 d-block d-lg-none">
        <img src="/pexels-quang-nguyen-vinh-2166711.webp" alt="" />
      </div>
    </>
  );
}
