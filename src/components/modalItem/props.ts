import Item from "../../models/Item";

interface ModalItemProps {
  item: Item;
  isVisible: boolean;
  setIsVisible: (isVisible:boolean) => void;
}
export default ModalItemProps;