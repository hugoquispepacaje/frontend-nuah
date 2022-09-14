interface ItemOrderPostRequest {
  _id?: string;
  itemId: string;
  quantity: number;
  amount: number;
};

interface OrderPostRequest {
  _id?: string;
  items: ItemOrderPostRequest[];
  totalQuantity: number;
  totalAmount: number;
};

const orderRequestDefault:OrderPostRequest = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
}
export {
  type OrderPostRequest,
  type ItemOrderPostRequest,
  orderRequestDefault
}