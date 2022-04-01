import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import classes from './Cart.module.css';
import { Modal } from '../UI/Modal/Modal';
import { CartContext } from '../../store/cart-context';
import { CartItem } from './CartItem/CartItem';

export const Cart = ({ onClose }) => {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);

  const totalAmountNormalized = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={() => cartItemAddHandler(item)}
          onRemove={() => cartItemRemoveHandler(item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmountNormalized}</span>
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          className={classes['button--alt']}
          onClick={onClose}
        >
          Close
        </button>
        {hasItems && (
          <button type="button" className={classes.button}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

Cart.propTypes = {
  onClose: PropTypes.func.isRequired,
};
