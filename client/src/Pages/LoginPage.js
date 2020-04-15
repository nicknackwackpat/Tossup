import React from "react";
import TopMenu from "../components/Navbar/navbar.js";
import Carousel from "../components/Carousel/carousel.js"
import LoginForm from "../components/Login/login.js"
import SignupExpander from "../components/Login/expander.js"
import Footer from "../components/Footer/footer.js"

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
