import React, { Component } from 'react';
import './AddBookForm.css';

class AddBookForm extends Component{

    render(){
        return(
            <div className="container">
                <div className="add-title">
                    <h3>Add a Book</h3>
                    <h3>(This is a Non-functional Page. I made it for fun : ))</h3>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" 
                               name="title" 
                               placeholder="Enter a book title" 
                               className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                               name="authors" 
                               placeholder="Enter the Author(s)"
                               className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="textarea" 
                               name="description" 
                               placeholder="Enter a Description of a Book"
                               className="form-control"/>
                    </div>
                    
                    <div className="input-group mb-3">
                        <div className="custom-file">
                            <input type="file" 
                                   className="custom-file-input" 
                                   name="image"/>
                            <label className="custom-file-label" 
                                   htmlFor="inputGroupFile02">Upload a Book Image</label>
                        </div>
                        <div className="input-group-append">
                            <span className="input-group-text">Upload</span>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" 
                            className="btn btn-outline-dark" />
                    </div>
                </form>
            </div>
        );
    }
}

export default AddBookForm;