import React from "react";
import HeroSection from "./HeroSection.jsx";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iphone 14 pro"
        subtitle="Experience the power of the latest iphone 14 with our most Pro camera ever"
        link="/"
        image={iphone}
      />
      <FeaturedProducts />

      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add studio display and colour-matched magic accessories to your bag
        after configure your Max mini"
        link="/"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
