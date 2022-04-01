import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './HeaderCartButton.module.css';
import { CartIcon } from '../../Cart/CartIcon/CartIcon';
import { CartContext } from '../../../store/cart-context';

export const HeaderCartButton = ({ onShowCart }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const { items } = useContext(CartContext);
  const numberOfCartItems = items.reduce(
    (curNumber, item) => curNumber + item.amount,
    0
  );

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button type="button" className={btnClasses} onClick={onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

HeaderCartButton.propTypes = {
  onShowCart: PropTypes.func.isRequired,
};
