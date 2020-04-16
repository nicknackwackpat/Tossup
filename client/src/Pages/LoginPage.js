import React from "react";
import Carousel from "../components/Carousel/carousel.js"
import LoginForm from "../components/Login/login.js"
import SignupExpander from "../components/Login/expander.js"

function LoginPage(props) {
  return (
    <div>
    <Carousel />
    <br />
    <LoginForm handleInputChange={props.handleInputChange} login={props.login} email={props.email} password={props.password} />  <SignupExpander />
    </div>
  );
}

export default LoginPage;
