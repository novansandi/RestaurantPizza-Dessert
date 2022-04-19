import React from "react";
import { useLocation } from "react-router-dom";
import {
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton,
    ProductsContainer,
    ProductWrapper
  } from '../FullMenu/FullMenuElements';
  import { productData, productDataTwo } from '../Products/data';
  


const FullMenu = () => {
    const location = useLocation();
    return (
        <>
        <ProductsContainer>
        <h3>Full Menu</h3>
        
            <h2>Pizza {location.state.productPizzas.map((product, index) => {
                return (
                    <ProductWrapper>
                <ProductCard key={index}>
                    <ProductImg src={product.img} alt={product.alt} />
                    <ProductInfo>
                        <ProductTitle>{product.name}</ProductTitle>
                        <ProductDesc>{product.desc}</ProductDesc>
                        <ProductPrice>{product.price}</ProductPrice>
                        <ProductButton>{product.button}</ProductButton>
                    </ProductInfo>
                </ProductCard>
                </ProductWrapper>
                );
            })}</h2>
            <h2>Dessert {location.state.productDesserts.map((product, index) => {
                return (
                    <ProductWrapper>
                <ProductCard key={index}>
                    <ProductImg src={product.img} alt={product.alt} />
                    <ProductInfo>
                        <ProductTitle>{product.name}</ProductTitle>
                        <ProductDesc>{product.desc}</ProductDesc>
                        <ProductPrice>{product.price}</ProductPrice>
                        <ProductButton>{product.button}</ProductButton>
                    </ProductInfo>
                </ProductCard>
                </ProductWrapper>
                );
            })}</h2>
            
            </ProductsContainer>

        </>
    );
};

export default FullMenu;