import React from "react";
import { Component } from "react";
import Header from "./Components/Header/Header.js";
import Main from "./Components/Main/Main.js";
import Footer from "./Components/Footer/Footer.js";
import Series from "./Components/Series/Series.js";
import Movies from "./Components/Movies/Movies.js";
import Nav from "./Components/Nav/Nav.js";
import Carousel from "./Components/Carousel/Carousel.js";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
    text-decoration:none;
    list-style:none;
    scroll-behavior:smooth;
  }
`;

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Nav />
        <Carousel />
        <Movies />
        <Series />
        <Footer />
        <GlobalStyles />
      </>
    );
  }
}
