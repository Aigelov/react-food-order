import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classes from './MealItem.module.css';
import { MealItemForm } from './MealItemForm/MealItemForm';
import { CartContext } from '../../../store/cart-context';

export const MealItem = ({ id, name, description, price }) => {
  const { addItem } = useContext(CartContext);

  const priceNormalized = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceNormalized}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

MealItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
