import React from "react";
import Header from "../secondary/Header";
import Main from "../secondary/Main";
import Section from "../secondary/Section";
import Footer from "../secondary/Footer";

const Homepage = props => {
  console.log(props);

  return (
    <div>
      <Header />
      <Main />
      <Section state={props} />
      <Footer />
    </div>
  );
};

export default Homepage;
