import React, {useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal ({largeImageURL,onClose}) {
 useEffect(()=>{
  window.addEventListener('keydown', handleKeyDown);
  return ()=>{
    window.removeEventListener('keydown', handleKeyDown);
  };
 });

 const handleBackdropClick = e => {
  if (e.currentTarget === e.target) {
    onClose();
  }
};

 const  handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>,
    modalRoot,
  );
}
export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
