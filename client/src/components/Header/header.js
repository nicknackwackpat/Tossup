import React from "react";
import { Jumbotron, Container } from "reactstrap";

// This is the header for all pages except the Home page!

const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid className="mainbkg">
        <Container>
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

        </Container>
      </Jumbotron>
      </div>
    )};

export default Header;