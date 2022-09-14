import Order from "../models/Order";

const ADD_ITEM:string = "ADD_ITEM";
const UPDATE_ITEM:string = "UPDATE_ITEM";
const REMOVE_ITEM:string = "REMOVE_ITEM";
const CLEAR_CART:string = "CLEAR_CART";

const defaultCart:Order = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0
}

export {
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM,
  CLEAR_CART,
  defaultCart
};

