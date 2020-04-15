import React from "react";
import "./Footer.css";
import { Nav, NavLink } from "reactstrap";
import ReactDOM from 'react-dom';
import Center from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <Center>
      <Nav>
        <>
          <NavLink href="https://www.usa.gov/register-to-vote">
            <h4>Register To Vote</h4>
          </NavLink>
        </>
      </Nav>
      </Center>
    </div>
  );
};

export default Footer;
