import React from 'react';
import PropTypes from 'prop-types';
import classes from './Header.module.css';
import mealsImg from '../../../assets/meals3.jpg';
import { HeaderCartButton } from '../HeaderCartButton/HeaderCartButton';

export const Header = ({ onShowCart }) => (
  <>
    <header className={classes.header}>
      <h1>React Meals</h1>
      <HeaderCartButton onShowCart={onShowCart} />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImg} alt="A table full of delicious food!" />
    </div>
  </>
);

Header.propTypes = {
  onShowCart: PropTypes.func.isRequired,
};
