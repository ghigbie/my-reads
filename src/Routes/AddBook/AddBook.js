import React from 'react';
import PropTypes from 'prop-types';

import BackArrow from './../../Components/BackArrow/BackArrow';
import AddBookForm from './../../Components/AddBookForm/AddBookForm';

const AddBook = (props) => (
    <div className="container">
        <BackArrow />
        <AddBookForm addBook={props.addBook}/>
    </div>
);

AddBook.proptypes = {
    addBook: PropTypes.func.isRequired
};


export default AddBook;