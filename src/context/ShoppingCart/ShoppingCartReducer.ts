import ItemOrder from '../../models/ItemOrder';
import Order from '../../models/Order';
import { ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM, CLEAR_CART, defaultCart } from '../utils';
import { ShoppingCartAction, ShoppingCartState } from './props';

const saveInStorage = (cart:Order) => {
  cart.items = cart.items.length > 0 ? cart.items : [];
  localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

export const sumItems = (items:ItemOrder[]) => {
  const totalQuantity = items.reduce((total, product) => total + product.quantity, 0);
  const totalAmount = items.reduce((total, product) => total + product.amount, 0);
  const cart = {
    items,
    totalQuantity,
    totalAmount,
  };
  saveInStorage(cart);
  return cart;
}

export const ShoppingCartReducer = (state: ShoppingCartState, action: ShoppingCartAction) => {
  const { payload, type } = action;
  let cart:Order = defaultCart;
  let items:ItemOrder[] = [];
  if(!payload){
    if(type === CLEAR_CART){
      cart = defaultCart;
      return {
        ...state,
        cart
      };
    }
    else{
      return state;
    }
  };
  switch (type) {
    case ADD_ITEM:
      cart = sumItems([ ...state.cart.items, payload]);
      return {
        ...state,
        cart
      };
    case UPDATE_ITEM:
      if(!payload){
        return state;
      };
      items = state.cart.items.map((item) => {
        if (payload?._id === item._id) {
          return payload;
        }
        else {
          return item;
        }
      });
      cart = sumItems(items);
      return {
        ...state,
        cart
      };
    case REMOVE_ITEM:
      if(!payload){
        return state;
      };
      items = state.cart.items.filter(item => item._id !== payload._id);
      cart = sumItems(items);
      return {
        ...state,
        cart
      };
    default:
      return state;
  }
}