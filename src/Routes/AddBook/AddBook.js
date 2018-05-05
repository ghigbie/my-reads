import React from 'react';
import { NavLink } from 'react-router-dom';
import './../routeStyles.css';

const AddBook = () => (
    <div>
        <NavLink to="/" className="back-arrow"></NavLink>
        Add Book Page
    </div>
);


export default AddBook;