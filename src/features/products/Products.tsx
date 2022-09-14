import { useEffect, useState } from "react";
import Item, { itemDefault } from "../../models/Item";
import { getItems } from "../../services/items";
import ProductCard from '../../components/productCard/ProductCard';
import { productsContainer } from "./style";
import ModalItem from "../../components/modalItem/ModalItem";

const Products = () => {
  const [ products, setProducts ] = useState<Item[]>([]);
  const [ isModalVisible, setIsModalVisible ] = useState(false);
  const [ itemModal, setItemModal ] = useState<Item>(itemDefault);

  const showModalItem = (item:Item) => {
    setIsModalVisible(true);
    setItemModal(item);
  };

  useEffect(() => {
    getItems()
      .then(
        (response) => {
          setProducts(response.data.items);
        }
      )
      .catch(
        (error) => {
          console.log(error);
        }
      );
  },[]);

  const productCards = products.map(
    (product:Item) => (
      <ProductCard
        key={product._id}
        item={product}
        showModalItem={showModalItem}
      />
    )
  );
  return(
    <>
      <div style={productsContainer}>
        {productCards}
      </div>
      <ModalItem
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
        item={itemModal}
      />
    </>
  )
};

export default Products;