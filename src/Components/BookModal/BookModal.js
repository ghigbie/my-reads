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

  render() {
    return (
      <div>
        <Button className="btn btn-outline-primary btn-bottom" onClick={this.toggle}>More Information</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.title} by {this.props.authors}</ModalHeader>
          <ModalBody>{this.props.description}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


Modal.propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired
};

export default BookModal;
