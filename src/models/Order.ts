import ItemOrder from "./ItemOrder";

interface Order {
  _id?: string;
  items: ItemOrder[];
  totalQuantity: number;
  totalAmount: number;
};

export default Order;