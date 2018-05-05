import React from 'react';
import { NavLink } from 'react-router-dom';
import './../routeStyles.css';

const BookInfo = (props) => (
    <div className="container">
        <NavLink to="/" className="back-arrow"></NavLink>
        <h1>More information about a particular book</h1>
    </div>
);


export default BookInfo;