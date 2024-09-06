import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./componants/navbar";
import Nav2 from "./componants/nav2";
import Products from "./componants/products";
import Footer from "./componants/footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Nav2></Nav2>
      <Products></Products>
      <Footer></Footer>
    </>
  );
}

export default App;
