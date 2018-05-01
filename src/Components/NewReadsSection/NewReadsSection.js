import React, { Component } from 'react';
import './NewReadsSection.css';

class NewReadsSection extends Component{
    render(){
        return(
            <div className="reads-row">
                <h4>{this.props.subheader}</h4>
                <hr />
            </div>
        );
    }
}

export default NewReadsSection;

