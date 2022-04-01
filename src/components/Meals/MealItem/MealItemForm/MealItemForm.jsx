import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './MealItemForm.module.css';
import { Input } from '../../../UI/Input/Input';

export const MealItemForm = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: `amount_${id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
        ref={amountInputRef}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1 - 5)</p>}
    </form>
  );
};

MealItemForm.propTypes = {
  id: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
