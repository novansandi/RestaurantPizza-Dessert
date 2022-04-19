import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebtnWrap, SidebarRoute } from './SidebarElements';
import { productData, productDataTwo } from '../Products/data';
import './Sidebar.css';
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to={{
                    pathname: `/pizza`,
                    state: {
                        products: productData,
                    }
                }}>Pizzas</SidebarLink>
                <SidebarLink to={{
                    pathname: `/dessert`,
                    state: {
                        products: productDataTwo,
                    }
                }}>Desserts</SidebarLink>
                <SidebarLink to={{
                    pathname: `/fullmenu`,
                    state: {
                        productPizzas: productData,
                        productDesserts: productDataTwo
                    }
                }}>Full Menu</SidebarLink>
            </SidebarMenu>
            <SidebtnWrap>
                <SidebarRoute to="signup">Order Now</SidebarRoute>
            </SidebtnWrap>
        </SidebarContainer>
    );
};


export default Sidebar;