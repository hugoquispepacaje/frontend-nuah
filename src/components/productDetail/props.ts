import Item from "../../models/Item";

interface ProductDetailProps {
  item: Item;
  minusQuantity: (item:Item) => void;
  plusQuantity: (item:Item) => void;
  quantity: number;
  total: number;
}
export default ProductDetailProps;