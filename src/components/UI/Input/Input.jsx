import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.css';

export const Input = forwardRef(({ input, label }, ref) => (
  <div className={classes.input}>
    <label htmlFor={input.id}>{label}</label>
    <input ref={ref} {...input} />
  </div>
));

Input.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};
