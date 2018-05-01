import React from 'react';
import './Header.css';

const Header = (props) => {
    return(
        <div id="header-background">
            <div className="container">
                <h3 id="title">{props.title}</h3>
                <h5 id="subtitle">{props.subtitle}</h5>
            </div>
        </div>
    );
};

export default Header;