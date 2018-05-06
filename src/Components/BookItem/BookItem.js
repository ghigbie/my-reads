import React from 'react';
import { NavLink } from 'react-router-dom';
import './BookItem.css';
import PropTypes from 'prop-types';

import Modal from './../Modal/Modal';

const BookItem = (props) => (
    <div className="card book-item">
        <img className="card-img-top book-image" src={props.image} alt={props.title}/>
        <div className="card-body">
            <h5 className="card-title book-title">{props.title}</h5>
            <h5 className="card-title by-line">{`By ${props.authors}`}</h5>
            <p className="card-text book-description">{`${props.description.substring(0, 188)}...`}</p>
            <button className="book-shelf-changer"></button>
            <button type="button" 
                          className="btn btn-outline-primary btn-bottom" 
                          data-toggle="modal" 
                          data-target={`#${props.id}`}>
                          More Information
                    </button>
           {/* <NavLink to={`/details/${props.id}`} 
                     className="btn btn-outline-primary btn-bottom">More Information</NavLink> */}
            <Modal title={props.title}
                   authors={props.authors}
                   image={props.image}
                   description={props.description}
                   id={props.id}
                   shelf={props.shelf}/>
        </div>
    </div>
);


BookItem.propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired
};

export default BookItem;