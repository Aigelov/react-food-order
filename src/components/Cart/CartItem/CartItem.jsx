import React from 'react';
import PropTypes from 'prop-types';
import classes from './CartItem.module.css';

export const CartItem = ({ name, amount, price, onAdd, onRemove }) => {
  const priceNormalized = `$${price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{priceNormalized}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onRemove}>
          −
        </button>
        <button type="button" onClick={onAdd}>
          +
        </button>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
