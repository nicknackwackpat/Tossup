import React from "react";
import "./footer.css";
import { Nav, NavLink } from "reactstrap";


const Footer = () => {
  return (
    <div className="footer">
      <Nav>
        <>
        <h5>© 2020 TossUp! All Rights Reserved.</h5>
          <NavLink href="https://www.usa.gov/register-to-vote">
            <h4>Register To Vote</h4>
          </NavLink>
        </>
      </Nav>
    </div>
  );

  
};

export default Footer;
