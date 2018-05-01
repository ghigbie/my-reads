import React from 'react';
import './Header.css';

const Header = (props) => {
    return(
        <div id="header-background">
            <div className="container">
                <h2 id="title">{props.title}</h2>
                <h4 id="subtitle">{props.subtitle}</h4>
            </div>
        </div>
    );
};

export default Header;