import React from 'react';

import BackArrow from './../../Components/BackArrow/BackArrow';

const SearchPage = () => (
    <div>
        This is the search page
        <BackArrow />
        <form onSubmit={``}>
            <input type="text" name="search" />
            
        </form>
    </div>
);

export default SearchPage;