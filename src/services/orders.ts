import axios from 'axios';
import { OrderPostRequest } from '../models/OrderRequest';
import { CreateOrderResponse, GetOrdersResponse } from '../models/OrderResponse';
import { urlBackend } from './utiles';
const orderUrl = 'order/';

const createOrder = (order:OrderPostRequest):Promise<CreateOrderResponse> => {
  return axios.post(`${urlBackend}${orderUrl}`, order);
};

const getOrders = ():Promise<GetOrdersResponse> => {
  return axios.get(`${urlBackend}${orderUrl}`);
};

const deleteOrder = (_id:string):Promise<OrderPostRequest> => {
  return axios.delete(`${urlBackend}${orderUrl}/${_id}`);
};

export { createOrder, getOrders, deleteOrder };