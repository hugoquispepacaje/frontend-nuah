import Item from "./Item";

interface ItemOrder {
  _id?: string;
  itemId: Item;
  quantity: number;
  amount: number;
};

export default ItemOrder;