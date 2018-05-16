import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './BookModal.css';
import PropTypes from 'prop-types';

class BookModal extends Component{
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        modal: false
      };  
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  static propTypes = {
    // title: PropTypes.string.isRequired,
    // authors: PropTypes.array.isRequired,
    // image: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div>
        <Button className="btn btn-outline-primary" 
                
                onClick={this.toggle}>More Information</Button>
        <Modal isOpen={this.state.modal} 
               toggle={this.toggle} 
               className="modal-dialog modal-lg modal-size" 
               role="document">
          <ModalHeader toggle={this.toggle}>{this.props.title} by {this.props.authors}</ModalHeader>
          <img className='modal-book-image' 
               src={this.props.image} 
               alt={`The book ${this.props.title} by ${this.props.authors}`}/>
          <ModalBody>{this.props.description}</ModalBody>
          <ModalFooter>
            <Button color="secondary" 
                    onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BookModal;
