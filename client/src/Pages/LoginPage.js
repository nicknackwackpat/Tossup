import React from "react";
import TopMenu from "./components/Navbar/navbar.js";
import Carousel from "./components/Carousel/Carousel.js"

function LoginPage() {
  return (
    // <BrowserRouter>
    <div>
    <TopMenu />
    <Carousel />
    Login Stuff
    </div>

    // </BrowserRouter>
  );
}

export default LoginPage;