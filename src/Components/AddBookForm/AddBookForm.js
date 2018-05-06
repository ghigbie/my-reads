import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import './AddBookForm.css';

class AddBookForm extends Component{
    handleSubmit = (e) =>{
        e.preventDefault();
        const values = serializeForm(e.target, {hash: true});
        console.log('Values: ', values);
    }
    
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" 
                               name="title" 
                               placeholder="Enter a book title" 
                               className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="authors">Author(s)</label>
                        <input type="text" 
                               name="authors" 
                               placeholder="Author(s)"
                               className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="textarea" 
                               name="description" 
                               placeholder="Enter a Description of a Book"
                               className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Upload an Image</label>
                        <div>
                        <input type="file" 
                               name="image" 
                               accept="image/*" 
                               placeholder="Upload an image"/>
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