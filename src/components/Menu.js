import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();
    return (
        <div className="ui three item menu">
            <a className="item" onClick='navigate(/)' >F1🏎</a> 
            <a className="item" onClick='navigate(/basketball)'>BASKET🏀</a> 
            <a className="item" onClick='navigate(/about)'>ABOUT</a> 
        </div>
    );
};

export default Menu;