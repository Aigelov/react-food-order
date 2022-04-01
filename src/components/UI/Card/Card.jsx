import React from 'react';
import PropTypes from 'prop-types';
import classes from './Card.module.css';

export const Card = ({ children }) => (
  <div className={classes.card}>{children}</div>
);

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
