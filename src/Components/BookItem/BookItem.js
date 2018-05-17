import React from 'react';
//import { NavLink } from 'react-router-dom';
import './BookItem.css';
import PropTypes from 'prop-types';

import DropdownButton from './../DropdownButton/DropdownButton';
import BookModal from './../BookModal/BookModal';

const BookItem = (props) =>
    (<div className="card book-item">
        <img className="card-img-top book-image" 
             src={props.image} 
             alt={`the book ${props.title} by ${props.authors && props.authors.toString().replace(/,/g, ', ')}`} />
        <div className="card-body">
            <h5 className="card-title book-title">{props.title}</h5>
            <h5 className="card-title by-line by-line">{`By ${props.authors && props.authors.toString().replace(/,/g, ', ')}`}</h5>
            <p className="card-text book-description">{`${props.description && props.description.substring(0, 188)}...`}</p>
            <div className="btn-bottom-right">
                <DropdownButton sectionTitles={props.sectionTitles}
                                isSearch={props.isSearch}
                                id={props.id}
                                shelf={props.shelf}
                                changeShelf={props.changeShelf}/>
            </div>
            <div className="btn-bottom">
                <BookModal title={props.title}
                           authors={props.authors}
                           image={props.image}
                           description={props.description}
                           id={props.id}
                           shelf={props.shelf}/>
            </div>
        </div>
    </div>);



BookItem.propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    sectionTitles: PropTypes.array.isRequired
};

export default BookItem;