import React from 'react';
import './Header.css';

const Header = (props) => {
    return(
        <nav className="navbar navbar-inverse"
             id="header-background">
            <div className="container">
                <div className="row extra-margin">
                    <div className="col-sm-8">
                        <h2 id="title">{props.title}</h2>
                        <span><h4 id="subtitle">{props.subtitle}</h4></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;