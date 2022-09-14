import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import CartRightSideProps from './props';
import { totalContainerStyle, buttonContainerStyle } from './style';
const CartRightSide = (props: CartRightSideProps) => {
  const [ dummyInput, setDummyInput ] = useState('');
  return(
    <div>
      <div style={buttonContainerStyle as React.CSSProperties}>
        <h5>Enter Promo Code</h5>
        <InputText value={dummyInput} onChange={(e) => setDummyInput(e.target.value)} />
      </div>
      <div style={totalContainerStyle as React.CSSProperties}>
        <p style={{fontWeight: 'bold'}}>Total</p>
        <p>${props.total}</p>
      </div>
      <div style={buttonContainerStyle as React.CSSProperties}>
        <Button
          label="Clear Cart"
          onClick={() => props.clearCart()}
          className="p-button-danger p-button-sm"
          />
        <Button
          label="Create Order"
          className="p-button-sm p-button-success"
          onClick={() => props.createOrder()}
        />
      </div>
    </div>
  );
}

export default CartRightSide;