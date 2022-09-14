import { useContext, useState, useEffect } from 'react';
import ShoppingCartContext from '../../context/ShoppingCart/ShoppingCartContext';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import ModalItemProps from './props';
import { imageStyle, modalItemStyle, detailItemStyle, quantityStyle } from './style';
import ItemOrder from '../../models/ItemOrder';

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
      <div style={modalItemStyle as React.CSSProperties}>
        <img
          src={props.item.image.length>0? props.item.image[0]:''}
          style={imageStyle}
        />
        <div style={detailItemStyle as React.CSSProperties}>
          <p style={{fontWeight: 'bold'}}>{props.item.name}</p>
          <p>{props.item.type}</p>
          <p>{props.item.size}</p>
        </div>
        <div style={detailItemStyle as React.CSSProperties}>
          <p style={{fontWeight: 'bold'}}>Each</p>
          <p>${props.item.price}</p>
        </div>
        <div style={quantityStyle as React.CSSProperties}>
          <Button label="-" className="p-button-sm" onClick={()=>minusQuantity()}/>
          <p>{quantity}</p>
          <Button label="+" className="p-button-sm" onClick={()=>plusQuantity()}/>
        </div>
        <div style={detailItemStyle as React.CSSProperties}>
          <p style={{fontWeight: 'bold'}}>Total</p>
          <p>${total}</p>
        </div>
      </div>
    </Dialog>
  );
}

export default ModalItem;