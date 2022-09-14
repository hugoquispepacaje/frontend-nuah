import ProductDetailFooterProps from './props';
import { productDetailFooterStyle } from './style';
import { Button } from 'primereact/button';

const ProductDetailFooter = (props:ProductDetailFooterProps) => (
  <div style={productDetailFooterStyle as React.CSSProperties}>
    <Button label="Delete" onClick={() => props.deleteToCart(props.itemOrder)} className="p-button-danger"/>
    <Button label="Update" onClick={() => props.updateCart(props.itemOrder)}/>
  </div>
);

export default ProductDetailFooter;