import React from "react";
import "./footer.css";
import { Nav, NavLink } from "reactstrap";


const Footer = () => {
  return (
    <div className="footer">
      <Nav>
        <>
        <h5>© 2020 TossUp! All Rights Reserved.</h5>
          <NavLink href="https://www.usa.gov/register-to-vote" target="_blank" rel="noopener noreferrer">
            <h5>Register To Vote here!</h5>
          </NavLink>
          
        </>
      </Nav>
    </div>
  );

  
};

export default Footer;
