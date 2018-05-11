import React from 'react';
import PropTypes from 'prop-types';

import BackArrow from './../../Components/BackArrow/BackArrow';

const SearchPage = (props) => (
    <div className="container">
        This is the search page
        <BackArrow />
        <form onSubmit={props.searchBooks}>
            <input type="text" name="search" />
            
        </form>
    </div>
);

SearchPage.propTypes = {
    books: PropTypes.array.isRequired,
    searchBooks: PropTypes.func.isRequired
};

export default SearchPage;