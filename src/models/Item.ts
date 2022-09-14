interface Item {
  _id: string;
  name: string;
  type: string;
  color: string;
  size: string;
  price: number;
  stock: number;
  image: string[];
};

export const itemDefault:Item = {
  _id: '',
  name: '',
  type: '',
  color: '',
  size: '',
  price: 0,
  stock: 0,
  image: [],
};

export default Item;