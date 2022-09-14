import { OrderPostRequest } from "../../models/OrderRequest";

interface OrderCardProps {
  order: OrderPostRequest;
  deleteOrder: (order:OrderPostRequest) => void;
}
export default OrderCardProps;