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
} from '../PIzzas/PizzasElements';


const Pizza = () => {
    const location = useLocation();
    return (
        <>
            <ProductsContainer>
                <h2>Pizza{location.state.products.map((product, index) => (
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
                ))}</h2>
            </ProductsContainer>
        </>
    );
};

export default Pizza;