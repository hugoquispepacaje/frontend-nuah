import { OrderPostRequest } from "./OrderRequest";

interface CreateOrderResponse {
  data: {
    order: OrderPostRequest;
  };
}

interface GetOrdersResponse {
  data: {
    orders: OrderPostRequest[];
  };
}

export {
  type CreateOrderResponse,
  type GetOrdersResponse
}