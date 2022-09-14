import { useContext, useState, useEffect } from 'react';
import ShoppingCartContext from '../../context/ShoppingCart/ShoppingCartContext';
import Item from '../../models/Item';
import ItemOrder from '../../models/ItemOrder';
import { ItemOrderPostRequest, OrderPostRequest } from '../../models/OrderRequest'
import Order from '../../models/Order';
import { createOrder as createOrderAxios } from '../../services/orders';
const useCart = () => {
  const { cart, updateItem, removeItem, clearCart } = useContext(ShoppingCartContext);
  const [ quantities, setQuantities ] = useState<any[]>([]);
  const [ totals, setTotals ] = useState<any[]>([]);

  useEffect(() => {
    setQuantities(cart.items.map(
      (item) => ({
        _id: item._id,
        quantity: item.quantity
      })
    ))
    setTotals(cart.items.map(
      (item) => ({
        _id: item._id,
        total: item.amount
      })
    ))
  }, [cart]);

  const getTotal = (item:ItemOrder) => {
    const total = totals.find((total)=>total._id === item._id);
    return total ? total.total : 0;
  };

  const getQuantity = (item:ItemOrder) => {
    const quantity = quantities.find((quantity)=>quantity._id === item._id);
    return quantity ? quantity.quantity : 0;
  };
  
  const plusQuantity = (item:Item) => {
    let newQuantity = 0;
    const newQuantities = quantities.map((quantity) => {
      if (item._id === quantity._id) {
        newQuantity = quantity.quantity + 1;
        return {
          _id: quantity._id,
          quantity: newQuantity
        };
      }
      else {
        return quantity;
      }
    });
    if(newQuantity>10) return;
    const newTotals = totals.map((total) => {
      if (item._id === total._id) {
        return {
          _id: total._id,
          total: newQuantity * item.price
        };
      }
      else {
        return total;
      }
    });
    setTotals(newTotals);
    setQuantities(newQuantities);
  }
  const minusQuantity = (item:Item) => {
    let newQuantity = 0;
    const newQuantities = quantities.map((quantity) => {
      if (item._id === quantity._id) {
        newQuantity = quantity.quantity - 1;
        return {
          _id: quantity._id,
          quantity: newQuantity
        };
      }
      else {
        return quantity;
      }
    });
    if(newQuantity<1) return;
    const newTotals = totals.map((total) => {
      if (item._id === total._id) {
        return {
          _id: total._id,
          total: newQuantity * item.price
        };
      }
      else {
        return total;
      }
    });
    setTotals(newTotals);
    setQuantities(newQuantities);
  }
  
  const updateCart = (itemOrder: ItemOrder) => {
    updateItem({
      ...itemOrder,
      quantity: getQuantity(itemOrder),
      amount: getTotal(itemOrder)
    });
  };

  const deleteToCart = (itemOrder: ItemOrder) => {
    removeItem(itemOrder);
  }

  const getFormatOrder = (cart:Order) : OrderPostRequest => {
    const items:ItemOrderPostRequest[] = cart.items.map(
      (item) => ({
        itemId: item.itemId._id,
        quantity: item.quantity,
        amount: item.amount,
      })
    );
    return {
      totalQuantity: cart.totalQuantity,
      totalAmount: cart.totalAmount,
      items
    }
  };

  const createOrder = () => {
    if(cart.totalQuantity === 0){
      alert('The cart is empty');
      return;
    };
    const order:OrderPostRequest = getFormatOrder(cart);
    createOrderAxios(order).then(
      (response) => {
        alert('Order entered correctly.');
        clearCart();
      }
    ).catch(
      (error)=>{
        alert(error);
      }
    )
  }

  return {
    cart,
    getTotal,
    getQuantity,
    plusQuantity,
    minusQuantity,
    updateCart,
    deleteToCart,
    clearCart,
    createOrder
  };
};

export default useCart;