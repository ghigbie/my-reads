import React from 'react';
import './Modal.css';

const Modal = (props) => (
        <div className="modal fade" id={props.modalID} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-size" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">{`${props.year} ${props.make} ${props.model}`}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body container">
                <img className='modal-car-image' 
                     src={props.image} 
                     alt={`Image of ${props.year} ${props.make} ${props.model}`}/>
        
                <p className="detailed-description">{props.description}</p>
                
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Buy This Car!</button>
              </div>
            </div>
          </div>
        </div>
);

export default Modal;
