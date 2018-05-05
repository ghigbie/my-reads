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
                    <input type="text" name="title" placeholder="Title" />
                    <input type="text" name="authors" placeholder="Author(s)" />
                    <input type="textarea" name="description" placeholder="Description"/>
                </form>
            </div>
        );
    }
}

export default AddBookForm;