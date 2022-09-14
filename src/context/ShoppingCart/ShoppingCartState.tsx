import { useReducer, useMemo } from 'react';
import ShoppingCartContext, { initialState } from './ShoppingCartContext';
import { ShoppingCartReducer } from './ShoppingCartReducer';
import { ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM, CLEAR_CART, defaultCart } from '../utils';
import { ShoppingCartStateProps } from './props';
import ItemOrder from '../../models/ItemOrder';

const ShoppingCartState = (props:ShoppingCartStateProps) => {
  const [state, dispatch] = useReducer(ShoppingCartReducer, initialState);
  const { children } = props;
  const addItem = (item:ItemOrder) => {
    try {
      dispatch({ type: ADD_ITEM, payload: item });
    } catch (error) {
      console.error(error);
    }
  };
  const updateItem = (item:ItemOrder) => {
    try {
      dispatch({ type: UPDATE_ITEM, payload: item });
    } catch (error) {
      console.error(error);
    }
  };
  const removeItem = (item:ItemOrder) => {
    try {
      dispatch({ type: REMOVE_ITEM, payload: item });
    } catch (error) {
      console.error(error);
    }
  };
  const clearCart = () => {
    try {
      dispatch({ type: CLEAR_CART });
    } catch (error) {
      console.error(error);
    }
  };

  const value = useMemo(() => ({
    ...state,
    addItem,
    updateItem,
    removeItem,
    clearCart,
  }), [state.cart]);
  return (
    <ShoppingCartContext.Provider
      value={value}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartState;