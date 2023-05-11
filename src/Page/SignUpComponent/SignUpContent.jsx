import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
export default function SignUpContent() {
  return (
    <>
      <Container>
        <Row className="signup-wrap justify-content-center justify-content-lg-start">
          <Col xs={12} lg={5} className="signup-content">
            <div className="signup-header">Đăng ký</div>
            <div className="signup-form-wrap">
              <form action="" className="signup-form">
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
                      <img src="/eye-outline.svg" alt="" />
                      <img src="/eye-off-outline.svg" className="active" />
                    </div>
                  </div>
                </div>
                <div className="input-pass-again">
                  <label htmlFor="pass-again">
                    Nhập lại mật khẩu <span />
                  </label>
                  <div className="input-wrap">
                    <input
                      type="password"
                      name=""
                      id="pass-again"
                      placeholder="Nhập lại mật khẩu"
                      autoComplete="off"
                    />
                    <div className="icon-password">
                      <img src="/eye-outline.svg" alt="" />
                      <img src="/eye-off-outline.svg" className="active" />
                    </div>
                  </div>
                </div>
                <button type="submit">Đăng ký</button>
              </form>
            </div>
            <div className="have-acount">
              <div className="acount-text">Bạn đã có tài khoản?</div>
              <a
                href="/signin
          "
                className="acount-btn"
              >
                Đăng nhập
              </a>
            </div>
          </Col>
          <div className="background d-none d-lg-block">
            <img src="/pexels-quang-nguyen-vinh-2150347.webp" alt="" />
          </div>
        </Row>
      </Container>
      <div className="background2 d-block d-lg-none">
        <img
          src="/pexels-quang-nguyen-vinh-2150347.webp"
          alt=""
        />
      </div>
    </>
  );
}
