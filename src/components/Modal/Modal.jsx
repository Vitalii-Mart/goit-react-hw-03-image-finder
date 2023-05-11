import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {Overlay,ModalStyled, } from './Modal.styled';


const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { large, tags } = this.props;

    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalStyled>
          <img src={large} alt={tags} />
        </ModalStyled>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  large: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Modal;


