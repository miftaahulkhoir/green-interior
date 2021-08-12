import React from "react";

import Hero from "./hero";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header id="top">
      <Navigation />
      <Hero />
    </header>
  );
};

export default Header;
