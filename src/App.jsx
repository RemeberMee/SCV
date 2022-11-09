import React from "react";
import Header from "../src/components/header/Header";
import Nav from "../src/components/nav/Nav";
import About from "../src/components/about/About";
import Experience from "../src/components/experience/Experience";
import Services from "../src/components/services/Services";
import Portfolio from "../src/components/portfolio/Portfolio";
// import Testimonials from "../src/components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />

      <Contact />
      <Footer />
    </>
  );
};

export default App;
