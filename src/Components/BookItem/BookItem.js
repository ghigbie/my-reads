import React from 'react';
import './BookItem.css';
import PropTypes from 'prop-types';

const BookItem = (props) => {
    
    return(
        <div className="card book-item">
            <img className="card-img-top book-image" src={props.image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title book-title">{props.title}</h5>
                <h5 className="card-title">{`By ${props.authors}`}</h5>
                <p className="card-text book-description">{`${props.description.substring(0, 188)}...`}</p>
                <a href="#" className="btn btn-outline-primary btn-bottom">More Information</a>
            </div>
        </div>
    );
};

BookItem.propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default BookItem;