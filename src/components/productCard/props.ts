import Item from "../../models/Item";

interface ProductCardProps {
  item: Item;
  showModalItem: (item:Item) => void;
}
export default ProductCardProps;