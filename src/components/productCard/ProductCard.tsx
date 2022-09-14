import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import ProductCardProps from './props';
import { imageStyle, productCardStyle, stockStyle, titleStyle } from './style';

const imageTemplate = (image:string) => (
  <img
    src={image}
    style={imageStyle}
  />
);

const ProductCard = (props:ProductCardProps) => (
  <Card style={productCardStyle}>
    <Carousel
      value={props.item.image}
      numVisible={1}
      numScroll={1}
      itemTemplate={imageTemplate}
    />
    <p style={titleStyle}>{props.item.name}</p>
    <p style={stockStyle}>{props.item.stock > 0 ? 'In Stock' : 'No Stock' }</p>
    <p style={titleStyle}>${props.item.price}</p>
    <Button
      label="Add to Cart"
      className="p-button-sm"
      onClick={() => props.showModalItem(props.item)}
    />
  </Card>
);

export default ProductCard;