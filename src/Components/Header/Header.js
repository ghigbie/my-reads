import React from 'react';

const Header = (props) => {
    return(
        <div>
            <h2>{props.title}</h2>
            <h4>{props.subtitle}</h4>
        </div>
    );
};

export default Header;