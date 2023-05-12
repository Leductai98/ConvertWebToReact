import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
export default function UserItem() {
  return (
    <Row className="justify-content-center">
      <Col xs={12} md={8} lg={6} className="user__info--background">
        <div className="name-wrap">
          <div className="user-name">
            <div className="name-des">
              <div className="name-header">Tên người dùng</div>
              <div className="name-text">Người dùng 1</div>
            </div>
            <div className="name-edit">Chỉnh sửa</div>
          </div>
          <div className="user-name-edit">
            <div className="name-des">
              <div className="name-header">Tên người dùng</div>
              <input
                type="text"
                id="name-input"
                defaultValue="Người dùng 1"
                autoComplete="off"
              />
            </div>
            <div className="name-edit">Lưu</div>
          </div>
        </div>
        <div className="user-password">
          <div className="password-des">
            <div className="password-header">Mật khẩu</div>
            <div className="password-text">******</div>
          </div>
          <div className="password-edit">Chỉnh sửa</div>
        </div>
        <div className="password-edit-wrap">
          <div className="user-password-edit">
            <div className="password-des">
              <div className="password-header">
                Nhập mật khẩu cũ <span className="error-oldpass" />
              </div>
              <input type="password" id="oldpass-input" />
            </div>
            <div className="edit-wrap">
              <div className="password-edit">Lưu</div>
              <div className="password-edit">Hủy</div>
            </div>
          </div>
          <div className="user-password-edit">
            <div className="password-des">
              <div className="password-header">
                Nhập mật khẩu mới <span className="error-newpass" />
              </div>
              <input type="password" id="newpass-input" />
            </div>
          </div>
        </div>
        <div className="user-email">
          <div className="email-header">Địa chỉ email</div>
          <div className="email-text">leductai9898@gmail.com</div>
        </div>
      </Col>
    </Row>
  );
}
