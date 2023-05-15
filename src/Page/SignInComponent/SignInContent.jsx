import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
export default function SignInContent({
  error,
  formInfo,
  passType,
  onPassType,
  onValidateForm,
  onSubmit,
}) {
  return (
    <>
      <Container>
        <Row className="signin-wrap justify-content-center justify-content-lg-end">
          <Col xs={12} lg={5} className=" signin-content">
            <div className="signin-header">Đăng nhập</div>
            <div className="signin-form-wrap">
              <form
                action=""
                className="signin-form"
                onSubmit={(e) => {
                  onSubmit(e);
                }}
              >
                <div className={`input-mail ${error.email ? "error" : ""}`}>
                  <label htmlFor="email">
                    Địa chỉ email{" "}
                    <span>{error.email ? "Email không hợp lệ" : ""}</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Nhập địa chỉ email"
                    value={formInfo.email}
                    onChange={(e) => {
                      onValidateForm(e);
                    }}
                  />
                </div>
                <div className={`input-pass ${error.pass ? "error" : ""}`}>
                  <label htmlFor="new-password">
                    Mật khẩu{" "}
                    <span>{error.pass ? "Mật khẩu không hợp lệ" : ""}</span>
                  </label>
                  <div className="input-wrap">
                    <input
                      type={passType ? "text" : "password"}
                      id="new-password"
                      placeholder="Nhập mật khẩu"
                      autoComplete="off"
                      value={formInfo.pass}
                      onChange={(e) => {
                        onValidateForm(e);
                      }}
                    />
                    <div
                      className="icon-password"
                      onClick={() => {
                        onPassType();
                      }}
                    >
                      <img
                        src="/eye-outline.svg"
                        alt=""
                        className={passType ? "active" : ""}
                      />
                      <img
                        src="/eye-off-outline.svg"
                        className={passType ? "" : "active"}
                      />
                    </div>
                  </div>
                </div>
                <button type="submit">Đăng nhập</button>
              </form>
            </div>
            <div className="have-acount">
              <div className="acount-text">Chưa có tài khoản?</div>
              <Link
                to="/signup
          "
                className="acount-btn"
              >
                Đăng ký
              </Link>
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
