import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
export default function UserItem({
  data,
  nameError,
  editName,
  editPass,
  onEditName,
  onEditPass,
  newName,
  onNewName,
  onSaveName,
  oldPassError,
  newPassError,
  oldPass,
  newPass,
  onPass,
  onSavePass,
  passType,
  newPassType,
  onPassType,
  onNewPassType,
}) {
  return (
    <Row className="justify-content-center">
      <Col xs={12} md={8} lg={6} className="user__info--background">
        <div className="name-wrap">
          <div className={`user-name ${editName ? "disabled" : ""}`}>
            <div className="name-des">
              <div className="name-header">Tên người dùng</div>
              <div className="name-text">{data.name}</div>
            </div>
            <div
              className="name-edit"
              onClick={() => {
                onEditName();
              }}
            >
              Chỉnh sửa
            </div>
          </div>
          <div className={`user-name-edit ${editName ? "active" : ""}`}>
            <div className="name-des">
              <div className="name-header">
                Tên người dùng{" "}
                <span className="error-oldpass">{nameError}</span>
              </div>
              <input
                type="text"
                id="name-input"
                autoComplete="off"
                className={nameError.length ? "error" : ""}
                value={newName}
                onChange={(e) => {
                  onNewName(e);
                }}
              />
            </div>
            <div
              className="name-edit"
              onClick={() => {
                onSaveName();
              }}
            >
              Lưu
            </div>
          </div>
        </div>
        <div className={`user-password ${editPass ? "disabled" : ""}`}>
          <div className="password-des">
            <div className="password-header">Mật khẩu</div>
            <div className="password-text">******</div>
          </div>
          <div
            className="password-edit"
            onClick={() => {
              onEditPass();
            }}
          >
            Chỉnh sửa
          </div>
        </div>
        <div className={`password-edit-wrap ${editPass ? "active" : ""}`}>
          <div className="user-password-edit">
            <div className="password-des">
              <div className="password-header">
                Nhập mật khẩu cũ{" "}
                <span
                  className="error-oldpass"
                  style={{
                    display: `${!oldPassError ? "none" : "inline-block"}`,
                  }}
                >
                  Mật khẩu không đúng
                </span>
              </div>
              <div className="pass-wrap">
                <input
                  type={passType ? "text" : "password"}
                  id="oldpass-input"
                  className={oldPassError ? "error" : ""}
                  value={oldPass}
                  onChange={(e) => {
                    onPass(e);
                  }}
                />{" "}
                <div
                  className="icon-password-user"
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
            <div className="edit-wrap">
              <div
                className="password-edit"
                onClick={() => {
                  onSavePass();
                }}
              >
                Lưu
              </div>
              <div
                className="password-edit"
                onClick={() => {
                  onEditPass();
                }}
              >
                Hủy
              </div>
            </div>
          </div>
          <div className="user-password-edit">
            <div className="password-des">
              <div className="password-header">
                Nhập mật khẩu mới{" "}
                <span
                  className="error-newpass"
                  style={{
                    display: `${!newPassError ? "none" : "inline-block"}`,
                  }}
                >
                  Tối thiểu 6 ký tự
                </span>
              </div>
              <div className="pass-wrap">
                <input
                  type={newPassType ? "text" : "password"}
                  id="newpass-input"
                  className={newPassError ? "error" : ""}
                  value={newPass}
                  onChange={(e) => {
                    onPass(e);
                  }}
                />{" "}
                <div
                  className="icon-password-user"
                  onClick={() => {
                    onNewPassType();
                  }}
                >
                  <img
                    src="/eye-outline.svg"
                    alt=""
                    className={newPassType ? "active" : ""}
                  />
                  <img
                    src="/eye-off-outline.svg"
                    className={newPassType ? "" : "active"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="user-email">
          <div className="email-header">Địa chỉ email</div>
          <div className="email-text">{data.email}</div>
        </div>
      </Col>
    </Row>
  );
}
