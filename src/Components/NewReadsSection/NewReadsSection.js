import React, { Component } from 'react';

class NewReadsSection extends Component{
    render(){
        return(
            <div>
                <h4>{this.props.subheader}</h4>
                <hr />
            </div>
        );
    }
}