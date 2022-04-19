import React, { useState } from "react";
import Feature from "../Feature";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Products from "../Products";
import { productData, productDataTwo } from "../Products/data";
import Sidebar from "../Sidebar";
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';
import { Link } from "react-router-dom";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroBtn><Link to={{
            pathname: `/signup`,
          }}>
            Place Order
          </Link> </HeroBtn>
        </HeroItems>
      </HeroContent>
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer />
    </HeroContainer>
  );

};

export default Hero;