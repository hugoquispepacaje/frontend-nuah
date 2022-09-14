import { useEffect, useState } from "react";
import Item from "../../models/Item";
import { getItems } from "../../services/items";
import ProductCard from '../../components/productCard/ProductCard';
import { productsContainer } from "./style";

const Products = () => {
  const [ products, setProducts ] = useState<Item[]>([]);
  useEffect(() => {
    getItems
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
        title={product.name}
        images={product.image}
        hasStock={product.stock > 1}
        price={product.price}
      />
    )
  );
  return(
    <>
      <div style={productsContainer}>
        {productCards}
      </div>
    </>
  )
};

export default Products;