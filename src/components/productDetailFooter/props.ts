import ItemOrder from "../../models/ItemOrder";

interface ProductDetailFooterProps {
  updateCart: (itemOrder:ItemOrder) => void;
  deleteToCart: (itemOrder:ItemOrder) => void;
  itemOrder: ItemOrder;
}
export default ProductDetailFooterProps;