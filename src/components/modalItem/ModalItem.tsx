import { useContext, useState, useEffect } from 'react';
import ShoppingCartContext from '../../context/ShoppingCart/ShoppingCartContext';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import ModalItemProps from './props';
import ItemOrder from '../../models/ItemOrder';
import ProductDetail from '../productDetail/ProductDetail';

const ModalItem = (props:ModalItemProps) => {
  const [ quantity, setQuantity ] = useState(1);
  const [ total, setTotal ] = useState(props.item.price);
  const [ isAdd, setIsAdd ] = useState(true);
  const { cart, addItem, updateItem } = useContext(ShoppingCartContext);

  useEffect(() => {
    if(!props.item._id) return;
    const itemOrder = cart.items.find((item)=>item._id === props.item._id);
    if(itemOrder){
      setTotal(itemOrder.amount);
      setQuantity(itemOrder.quantity)
      setIsAdd(false);
      return;
    }
    setIsAdd(true);
    setTotal(props.item.price);
    setQuantity(1);
  }, [props.isVisible]);

  const addToCart = () => {
    const itemOrder:ItemOrder = {
      _id: props.item._id,
      itemId: props.item,
      quantity: quantity,
      amount: total
    };
    addItem(itemOrder);
    props.setIsVisible(false);
  };

  const updateCart = () => {
    const itemOrder:ItemOrder = {
      _id: props.item._id,
      itemId: props.item,
      quantity: quantity,
      amount: total
    };
    updateItem(itemOrder);
    props.setIsVisible(false);
  };

  const onHide = () => {
    props.setIsVisible(false);
  };

  const renderFooter = () => {
    return (
        <div>
            <Button label="Cancel" icon="pi pi-times" onClick={() => onHide()} className="p-button-text" />
            <Button label={isAdd ? 'Add' : 'Update'} icon="pi pi-check" onClick={() => isAdd ? addToCart() : updateCart()} autoFocus />
        </div>
    );
  }
  const minusQuantity = () => {
    if(quantity<2) return;
    const newQuantity = quantity-1;
    setQuantity(newQuantity);
    setTotal(newQuantity*props.item.price)
  }
  const plusQuantity = () => {
    if(quantity>9) return;
    const newQuantity = quantity+1;
    setQuantity(newQuantity);
    setTotal(newQuantity*props.item.price)
  }
  return (
    <Dialog header="Add to Cart" visible={props.isVisible} style={{ width: '90vw' }} footer={renderFooter()} onHide={() => onHide()}>
      <ProductDetail
        item={props.item}
        minusQuantity={minusQuantity}
        plusQuantity={plusQuantity}
        quantity={quantity}
        total={total}
      />
    </Dialog>
  );
}

export default ModalItem;