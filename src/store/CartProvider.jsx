import PropTypes from 'prop-types';
import { useMemo, useReducer } from 'react';
import { CartContext } from './cart-context';

const ADD_CART_ITEM = 'ADD_CART_ITEM';
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === ADD_CART_ITEM) {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === REMOVE_CART_ITEM) {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: ADD_CART_ITEM,
      item,
    });
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartAction({
      type: REMOVE_CART_ITEM,
      id,
    });
  };

  const cartContext = useMemo(
    () => ({
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemToCartHandler,
    }),
    [cartState]
  );

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
