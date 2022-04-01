import React from 'react';
import PropTypes from 'prop-types';
import classes from '../Modal.module.css';

export const Backdrop = ({ onClose }) => (
  <div className={classes.backdrop} onClick={onClose} aria-hidden="true" />
);

Backdrop.propTypes = {
  onClose: PropTypes.func.isRequired,
};
