import { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import ProductCardProps from './props';
import { imageStyle, productCardStyle, stockStyle, titleStyle, dropdownStyle } from './style';

const numbers = [
  { name: '0', code: 0 },
  { name: '1', code: 1 },
  { name: '2', code: 2 },
  { name: '3', code: 3 },
  { name: '4', code: 4 },
  { name: '5', code: 5 }
];

const imageTemplate = (image:string) => (
  <img
    src={image}
    style={imageStyle}
  />
);

const ProductCard = (props:ProductCardProps) => {
  const [ quantity, setQuantity ] = useState(0);
  const [ isAddDisabled, setIsAddDisabled ] = useState(true);
  useEffect(() => {
    if(quantity > 0){
      setIsAddDisabled(false);
    }
    else{
      setIsAddDisabled(true);
    };
  }, [quantity]);
  const onPressButton = () => {
    setQuantity(0);
  }
  return (
    <Card style={productCardStyle}>
      <Carousel
        value={props.images}
        numVisible={1}
        numScroll={1}
        itemTemplate={imageTemplate}
      />
      <p style={titleStyle}>{props.title}</p>
      <p style={stockStyle}>{props.hasStock?'In Stock':'No Stock'}</p>
      <p style={titleStyle}>${props.price}</p>
      <Dropdown
        value={quantity}
        options={numbers}
        onChange={(e) => setQuantity(e.value)}
        optionLabel="name"
        optionValue="code"
        placeholder="Quantity"
        style={dropdownStyle}
      />
      <Button
        label="Add to Cart"
        className="p-button-sm"
        disabled={isAddDisabled}  
        onClick={onPressButton}
      />
    </Card>
  )
};

export default ProductCard;