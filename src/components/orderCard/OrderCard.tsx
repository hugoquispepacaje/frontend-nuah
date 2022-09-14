import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import OrderCardProps from './props';
import { orderCardStyle, stockStyle, titleStyle } from './style';

const OrderCard = (props:OrderCardProps) => (
  <Card style={orderCardStyle}>
    <p style={titleStyle}>Order Code:</p>
    <p style={titleStyle}>{props.order._id}</p>
    <p style={stockStyle}>Quantity: {props.order.totalQuantity}</p>
    <p style={stockStyle}>Total: ${props.order.totalAmount}</p>
    <Button
      label="Delete Order"
      className="p-button-sm p-button-danger"
      onClick={() => props.deleteOrder(props.order)}
    />
  </Card>
);

export default OrderCard;