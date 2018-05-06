import React from 'react';
import './Modal.css';
import PropTypes from 'prop-types';

const Modal = (props) => (
        <div className="modal fade" id={props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-size" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">`${props.title} by ${props.authors}`</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body container">
                <img className='modal-book-image' 
                     src={props.image} 
                     alt={`${props.title} by ${props.author}`}/>
        
                <p className="detailed-description">{props.description}</p>
                
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Buy This Book!</button>
              </div>
            </div>
          </div>
        </div>
);

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired
};

export default Modal;
