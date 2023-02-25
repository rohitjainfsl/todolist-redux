import React from "react";
import Header from "./Header";
import Section from "./Section";
import "./tesla.css";

function Home() {
  return (
    <>
      <Header />
      <Section
        carName="Model 3"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        backgroundImg="model-3.jpg"
        arrow={true}
      />

      <Section
        carName="Model S"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        backgroundImg="model-s.jpg"
      />

      <Section
        carName="Model X"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        backgroundImg="model-x.jpg"
      />

      <Section
        carName="Model Y"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        backgroundImg="model-y.jpg"
      />

      <Section
        carName="Solar Panels"
        leftBtn="Order Now"
        rightBtn="Learn More"
        backgroundImg="solar-panel.jpg"
      />

      <Section
        carName="Solar Roof"
        leftBtn="Order Now"
        rightBtn="Learn More"
        backgroundImg="solar-roof.jpg"
      />

      <Section
        carName="Accessories"
        leftBtn="Order Now"
        backgroundImg="accessories.jpg"
      />
    </>
  );
}

export default Home;
