import { createContext } from "react";
import ItemOrder from "../../models/ItemOrder";
import Order from "../../models/Order";
import { defaultCart } from "../utils";
import { ShoppingCartState } from "./props";

const getInitialCart = () => {
  const cartStorage = localStorage.getItem('shoppingCart');
  let cart:Order = defaultCart;
  if(cartStorage){
    cart = JSON.parse(cartStorage);
  }
  return cart;
}

export const initialState:ShoppingCartState = {
  cart: getInitialCart(),
  addItem: (item:ItemOrder) => item || null,
  updateItem: (item:ItemOrder) => item || null,
  removeItem: (item:ItemOrder) => item || null,
  clearCart: () => null,
};

const ShoppingCartContext = createContext(initialState);

export default ShoppingCartContext;