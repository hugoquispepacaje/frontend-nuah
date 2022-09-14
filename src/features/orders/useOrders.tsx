import { useEffect, useState } from 'react';
import { OrderPostRequest } from '../../models/OrderRequest';
import {
  getOrders as getOrderAxios,
  deleteOrder as deleteOrderAxios,
} from '../../services/orders';

const useOrders = () => {
  const [ orders, setOrders ] = useState<OrderPostRequest[]>([]);
  const getOrders = () => {
    getOrderAxios()
      .then(
        (response)=>{
          setOrders(response.data.orders);
        }
      )
      .catch(
        (error)=>{
          console.log(error);
        }
      )
  }
  useEffect(() => {
    getOrders();
  }, []);

  const deleteOrder = (order:OrderPostRequest) => {
    if(!order._id) return;
    deleteOrderAxios(order._id)
      .then(
        (response) => {
          alert('Order removed successfully.');
          getOrders();
        }
      )
      .catch(
        (error) => console.log(error)
      )
  };

  return {
    getOrders,
    orders,
    deleteOrder
  }
};

export default useOrders;