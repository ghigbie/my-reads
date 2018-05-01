import React, { Component } from 'react';

class ReadsSubsection extends Component{
    render(){
        return(
            <div>
                <h4>{this.props.title}</h4>
                <hr />
                <div className="books-container">
                
                </div>
            </div>
        );
    };
}

export default ReadsSubsection;