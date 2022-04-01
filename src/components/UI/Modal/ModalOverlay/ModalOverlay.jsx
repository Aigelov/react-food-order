import React from 'react';
import PropTypes from 'prop-types';
import classes from '../Modal.module.css';

export const ModalOverlay = ({ children }) => (
  <div className={classes.modal}>
    <div>{children}</div>
  </div>
);

ModalOverlay.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
