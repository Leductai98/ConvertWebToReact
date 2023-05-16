import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
export default function SignUpHeader() {
  return (
    <Container>
      <div className="header-signup">
        <div className="header-icon-signup">
          <NavLink to="/" className="nav__icon-singup">
            <img src="/Group (4).png" alt="" />
          </NavLink>
        </div>
      </div>
    </Container>
  );
}
