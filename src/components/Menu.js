import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    
    return (
        <div className="ui three item menu">
            <a className="item" href="./" >F1🏎</a> 
            <a className="item" href='./basketball'>BASKET🏀</a> 
            <a className="item" href="./">ABOUT</a> 
        </div>
    );
};

export default Menu;