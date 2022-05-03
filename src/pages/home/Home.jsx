import React from "react";
import About from "./components/about/About";
import Introduction from "./components/hero/components/Introduction";
import Navbar from "./components/hero/components/Navbar";
import Numbers from "./components/numbers/Numbers";
import OurServices from "./components/ourServices/OurServices";
import Testimonial from "./components/testimonials/Testimonial";
import homeStyles from "./styles/hero.module.css";

function Home() {
  return (
    <div>
      <header>
        <Navbar />
        <Introduction />
      </header>
      <About />
      <OurServices />
      <Testimonial />
      <Numbers />
    </div>
  );
}

export default Home;
