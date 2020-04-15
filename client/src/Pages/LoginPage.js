import React from "react";
import TopMenu from "../components/Navbar/Navbar.js";
import Carousel from "../components/Carousel/Carousel.js"
import LoginForm from "../components/Login/Login.js"
import SignupExpander from "../components/Login/Expander.js"
import Footer from "./../components/Footer/Footer.js"

function LoginPage() {
  return (
    <div>
    <TopMenu />
    <Carousel />
    <br />
    <LoginForm />  <SignupExpander />
    <Footer/>
    </div>
  );
}

export default LoginPage;
