import React from 'react';
import { Navbar } from "../../components";
import { Features, Footer, Header, WhatGPT3 } from "../../containers"
import "./Landing.css"

function Landing() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
                <Header />
      </div>
      <WhatGPT3 />
            <Features />
            <Footer /> {/* */}
    </div>
  );
}

export default Landing;
