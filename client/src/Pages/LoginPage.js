import React from "react";  
import Carousel from "../components/Carousel/carousel.js"
import LoginForm from "../components/Login/login.js"
import Header from "../components/Header/header.js";
import SignupExpander from "../components/Login/expander.js"


function LoginPage(props) {
  return (
    <div className="container">
    <Header />
    <br />
    <div className="container login-form">
    <LoginForm className="login-form" handleInputChange={props.handleInputChange} login={props.login} email={props.email} password={props.password} /> 
  <SignupExpander />
    </div>
    </div>
  );
}

export default LoginPage;
