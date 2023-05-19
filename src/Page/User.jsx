import React, { useState, useEffect } from "react";
import "../assets/css/user_info.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import UserItem from "./UserComponent/UserItem";
export default function User() {
  document.title = "Thông tin tài khoản - Tai";
  const [userLogin, setUserLogin] = useState({});
  const [userList, setUserList] = useState([]);
  const [newName, setNewName] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [nameError, setNameError] = useState("");
  const [oldPassError, setOldPassError] = useState(false);
  const [newPassError, setNewPassError] = useState(false);
  const [editName, setEditName] = useState(false);
  const [editPass, setEditPass] = useState(false);
  const [passType, setPassType] = useState(false);
  const [newPassType, setNewPassType] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("login") !== null) {
      setUserLogin(JSON.parse(localStorage.getItem("login")));
      setNewName(JSON.parse(localStorage.getItem("login")).name);
    }
    if (localStorage.getItem("user") !== null) {
      setUserList(JSON.parse(localStorage.getItem("user")));
    }
  }, [localStorage.getItem("login"), localStorage.getItem("user")]);
  const handleEditName = () => {
    setEditName(!editName);
    setNameError("");
  };
  const handleNewName = (e) => {
    setNewName(e.target.value);
  };
  const handleSaveName = () => {
    if (newName == "") {
      setNameError("Không được để trống");
    } else {
      if (
        userList.some(
          (item) => item.email != userLogin.email && item.name == newName
        )
      ) {
        setNameError("Đã được sử dụng");
      } else {
        setEditName(!editName);
        localStorage.setItem(
          "login",
          JSON.stringify({ ...userLogin, name: newName })
        );
        let result = userList;
        result = result.filter((item) => item.email !== userLogin.email);
        result.push({ ...userLogin, name: newName });
        localStorage.setItem("user", JSON.stringify(result));
        let paymentList = JSON.parse(localStorage.getItem("payment")) ?? [];
        paymentList.forEach((item) => {
          if (item.user == userLogin.name) {
            item.user = newName;
          }
        });
        localStorage.setItem("payment", JSON.stringify(paymentList));
        let favoriteList = JSON.parse(localStorage.getItem("favorite")) ?? [];
        favoriteList.forEach((item) => {
          if (item.user == userLogin.name) {
            item.user = newName;
          }
        });
        localStorage.setItem("favorite", JSON.stringify(favoriteList));
      }
    }
  };
  const handleEditPass = () => {
    setEditPass(!editPass);
    setOldPassError(false);
    setNewPassError(false);
  };
  const handlePass = (e) => {
    if (e.target.id == "oldpass-input") {
      setOldPass(e.target.value);
    }
    if (e.target.id == "newpass-input") {
      setNewPass(e.target.value);
    }
  };
  const handleSavePass = () => {
    if (oldPass != userLogin.pass) {
      setOldPassError(true);
      setOldPass("");
    } else {
      setOldPassError(false);
      if (newPass.length < 6) {
        setNewPassError(true);
      } else {
        setNewPassError(false);
        setEditPass(false);
        localStorage.setItem(
          "login",
          JSON.stringify({ ...userLogin, pass: newPass })
        );
        let result = userList;
        result.forEach((item) => {
          if (item.email == userLogin.email) {
            item.pass = newPass;
          }
        });
        localStorage.setItem("user", JSON.stringify(result));
        setOldPass("");
        setNewPass("");
      }
    }
  };
  const handlePassType = () => {
    setPassType(!passType);
  };
  const handleNewPassType = () => {
    setNewPassType(!newPassType);
  };
  return (
    <Container className="manage__content">
      <Row>
        <Col xs={12} className="manage-wrap">
          <div className="manage-header">Tài khoản</div>
          <div className="manage-content">
            <div
              className="manage-content-header"
              style={{ textAlign: "center" }}
            >
              Thông tin tài khoản
            </div>
            <div className="manage-list">
              <UserItem
                data={userLogin}
                nameError={nameError}
                editName={editName}
                editPass={editPass}
                onEditName={handleEditName}
                onEditPass={handleEditPass}
                newName={newName}
                onNewName={handleNewName}
                onSaveName={handleSaveName}
                oldPassError={oldPassError}
                newPassError={newPassError}
                oldPass={oldPass}
                newPass={newPass}
                onPass={handlePass}
                onSavePass={handleSavePass}
                passType={passType}
                newPassType={newPassType}
                onPassType={handlePassType}
                onNewPassType={handleNewPassType}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
