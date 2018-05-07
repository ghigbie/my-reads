import React, { Component } from 'react';
//import { NavLink } from 'react-router-dom';
import './BookItem.css';
import PropTypes from 'prop-types';

import DropdownButton from './../DropdownButton/DropdownButton';
import BookModal from './../BookModal/BookModal';

class BookItem extends Component{
    changeBookShelf(){
        alert('change book shelf called, yeah!');
    }
    
    render(){
        return(
    
    <div className="card book-item">
        <img className="card-img-top book-image" src={this.props.image} alt={this.props.title}/>
        <div className="card-body">
            <h5 className="card-title book-title">{this.props.title}</h5>
            <h5 className="card-title by-line by-line">{`By ${this.props.authors}`}</h5>
            <p className="card-text book-description">{`${this.props.description.substring(0, 188)}...`}</p>
            <div className="btn-bottom-right">
                <DropdownButton sectionTitles={this.props.sectionTitles}
                                changeShelf={this.props.changeShelf}/>
            </div>
            <div className="btn-bottom">
                <BookModal title={this.props.title}
                           authors={this.props.authors}
                           image={this.props.image}
                           description={this.props.description}
                           id={this.props.id}
                           shelf={this.props.shelf}/>
            </div>
        </div>
    </div>
);
}
}


BookItem.propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,
    sectionTitles: PropTypes.array.isRequired
};

export default BookItem;