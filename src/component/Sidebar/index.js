import React from "react";
import {SidebarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink,SidebtnWrap,SidebarRoute} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizzas</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SidebtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SidebtnWrap>
        </SidebarContainer>
    );
};

export default Sidebar;