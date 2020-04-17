import React from "react";
<<<<<<< HEAD
import Carousel from "../components/Carousel/carousel.js"
import LoginForm from "../components/Login/login.js"
import SignupExpander from "../components/Login/expander.js"
import Header from "../components/Header/header.js";
=======
import Header from "../components/Header/header.js"
import LoginForm from "../../src/components/Login/Login.js"
// import SignupExpander from "../components/Login/expander.js"
>>>>>>> c35e737bd39ec6ef4a0b657d2ff5fbee9bdff931

function LoginPage(props) {
  return (
    <div className="container">
    <Header />
    <br />
    <div className="container login-form">
    <LoginForm className="login-form" handleInputChange={props.handleInputChange} login={props.login} email={props.email} password={props.password} /> 
  {/* <SignupExpander /> */}
    </div>
    </div>
  );
}

export default LoginPage;
