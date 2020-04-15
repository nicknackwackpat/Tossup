import React from "react";
import "./footer.css";
import { Nav, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Nav>
        <>
          <NavLink href="https://www.usa.gov/register-to-vote">
            <h4>Register To Vote</h4>
          </NavLink>
        </>
      </Nav>
    </div>
  );
};

export default Footer;
