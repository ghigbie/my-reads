import React from 'react';
import './BookItem.css';
import PropTypes from 'prop-types';

const BookItem = (props) => {
    return(
        <div className="card book-item" style={{width: '18rem'}}>
            <img className="card-img-top" src={props.image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h3>{props.author}</h3>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

BookItem.PropTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default BookItem;