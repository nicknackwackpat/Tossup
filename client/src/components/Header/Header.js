import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./header.css";
// This is the header for all pages except the Home page!

const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid className="mainbkg">
          <h1 className="display-3" color="white">Welcome to TossUp!</h1>
          <p className="lead"></p>
        </Container>
      </Jumbotron> 
      </div>
    )};

export default Header;
