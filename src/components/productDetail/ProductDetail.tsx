import ProductDetailProps from './props';
import { detailItemStyle, imageStyle, productDetailStyle, quantityStyle } from './style';
import { Button } from 'primereact/button';

const ProductDetail = (props:ProductDetailProps) => (
  <div style={productDetailStyle as React.CSSProperties}>
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
      <Button label="-" className="p-button-sm" onClick={()=>props.minusQuantity(props.item)}/>
      <p>{props.quantity}</p>
      <Button label="+" className="p-button-sm" onClick={()=>props.plusQuantity(props.item)}/>
    </div>
    <div style={detailItemStyle as React.CSSProperties}>
      <p style={{fontWeight: 'bold'}}>Total</p>
      <p>${props.total}</p>
    </div>
  </div>
);

export default ProductDetail;