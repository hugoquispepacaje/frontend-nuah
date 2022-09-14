import ItemOrder from "../../models/ItemOrder";
import Order from "../../models/Order";

interface ShoppingCartState {
  cart: Order;
  addItem: (item: ItemOrder) => void;
  updateItem: (item: ItemOrder) => void;
  removeItem: (item: ItemOrder) => void;
  clearCart: () => void;
}

interface ShoppingCartAction {
  type: string;
  payload?: ItemOrder;
}

interface ShoppingCartStateProps {
  children: JSX.Element;
}

export {
  type ShoppingCartState,
  type ShoppingCartAction,
  type ShoppingCartStateProps,
};
