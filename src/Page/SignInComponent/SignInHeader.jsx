import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
export default function SignInHeader() {
  return (
    <Container>
      <div className="header-signin">
        <div className="header-icon-signin">
          <NavLink to="/" className="nav__icon-signin">
            <img src="/Group (4).png" alt="" />
          </NavLink>
        </div>
      </div>
    </Container>
  );
}
