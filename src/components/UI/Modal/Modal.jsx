import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop } from './Backdrop/Backdrop';
import { ModalOverlay } from './ModalOverlay/ModalOverlay';

const portalElement = document.querySelector('#overlays');

export const Modal = ({ children, onClose }) => (
  <>
    {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
    {ReactDOM.createPortal(
      <ModalOverlay>{children}</ModalOverlay>,
      portalElement
    )}
  </>
);

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClose: PropTypes.func.isRequired,
};
