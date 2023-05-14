import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
export default function SignUpContent({
  passType,
  onPassType,
  passAgainType,
  onPassAgainType,
  formInfo,
  error,
  onValidateForm,
  onSubmit,
}) {
  return (
    <>
      <Container>
        <Row className="signup-wrap justify-content-center justify-content-lg-start">
          <Col xs={12} lg={5} className="signup-content">
            <div className="signup-header">Đăng ký</div>
            <div className="signup-form-wrap">
              <form action="" className="signup-form">
                <div className={`input-mail ${error.email ? "error" : ""}`}>
                  <label htmlFor="email">
                    Địa chỉ email{" "}
                    <span>
                      {error.emailExist
                        ? "Email đã tồn tại"
                        : error.email
                        ? "Email không hợp lệ"
                        : ""}
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Nhập địa chỉ email"
                    onChange={(e) => {
                      onValidateForm(e);
                    }}
                    value={formInfo.email}
                  />
                </div>
                <div
                  className={`input-pass ${error.newPassword ? "error" : ""}`}
                >
                  <label htmlFor="new-password">
                    Mật khẩu{" "}
                    <span>
                      {error.newPassword ? "Mật khẩu không hợp lệ" : ""}
                    </span>
                  </label>
                  <div className="input-wrap">
                    <input
                      type={passType ? "text" : "password"}
                      id="new-password"
                      placeholder="Nhập mật khẩu"
                      autoComplete="off"
                      onChange={(e) => {
                        onValidateForm(e);
                      }}
                      value={formInfo.newPassword}
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
                <div
                  className={`input-pass-again ${
                    error.passAgain ? "error" : ""
                  }`}
                >
                  <label htmlFor="pass-again">
                    Nhập lại mật khẩu{" "}
                    <span>
                      {" "}
                      {error.passAgain ? "Mật khẩu không trùng khớp" : ""}
                    </span>
                  </label>
                  <div className="input-wrap">
                    <input
                      type={passAgainType ? "text" : "password"}
                      name=""
                      id="pass-again"
                      placeholder="Nhập lại mật khẩu"
                      autoComplete="off"
                      onChange={(e) => {
                        onValidateForm(e);
                      }}
                      value={formInfo.passAgain}
                    />
                    <div
                      className="icon-password"
                      onClick={() => {
                        onPassAgainType();
                      }}
                    >
                      <img
                        src="/eye-outline.svg"
                        alt=""
                        className={passAgainType ? "active" : ""}
                      />
                      <img
                        src="/eye-off-outline.svg"
                        className={passAgainType ? "" : "active"}
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    onSubmit(e);
                  }}
                  type="submit"
                >
                  Đăng ký
                </button>
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
        <img src="/pexels-quang-nguyen-vinh-2150347.webp" alt="" />
      </div>
    </>
  );
}
