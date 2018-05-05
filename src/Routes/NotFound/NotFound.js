import React from 'react';
import { NavLink } from 'react-router-dom';
import './../routeStyles.css';

const NotFound = (props) => (
    <div className="container">
        <NavLink to="/" className="back-arrow"></NavLink>
        <h1>This page could not be found</h1>
        <h2>What are you doing with your life?</h2>
    </div>
);


export default NotFound;