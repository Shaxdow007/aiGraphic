import React from "react";
import NavBar from "./components/Header/NavBar";
import Hero from "./components/HeroSection/Hero";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import AiPower from "./components/AiPower/AiPower";
import About from "./components/About/About";
import Gallary from "./components/Gallary/Gallary";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";
import OurClient from "./components/OurClient/OurClient";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <WhatWeDo />
      <AiPower />
      <About />
      <Gallary />
      <Pricing />
      <OurClient />
      <Footer />
    </>
  );
}

export default App;
