import React from "react";
import { Jumbotron } from "reactstrap";
import "./header.css";
import { Row, Col } from 'reactstrap';
// import "../../styles.css";

// This is the header for all pages except the Home page!

const Header = () => {
  return (
    <div>
      <Jumbotron fluid className="mainbkg" id="#grad">
        <Row>
          <Col xs="6" className="header-right">
          <img className="header-img" 
          src="https://i.imgur.com/EQBHicX.png " alt="podium-guy" />
          </Col>
          <Col xs="6">
          <h1 className="header-style">TossUp!</h1>
          <p className="lead"></p>
          </Col>
      </Row>
      </Jumbotron>
      </div>
    )};

export default Header;