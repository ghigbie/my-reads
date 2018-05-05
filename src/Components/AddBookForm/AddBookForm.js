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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" name="title" placeholder="Title" />
                    </div>
                    <div>
                        <input type="text" name="authors" placeholder="Author(s)" />
                    </div>
                    <div>
                        <input type="textarea" name="description" placeholder="Description"/>
                    </div>
                    <div>
                        <input type="image" name="image" placeholder="Upload an image" />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-defualt">Add a Book</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddBookForm;