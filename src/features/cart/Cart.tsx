import ProductDetail from '../../components/productDetail/ProductDetail';
import ProductDetailFooter from '../../components/productDetailFooter/ProductDetailFooter';
import useCart from './useCart';

import { cartLeftStyle, cartRightStyle, cartStyle } from './style';
import { Button } from 'primereact/button';
import CartRightSide from '../../components/cartRightSide/CartRightSide';
const Cart = () => {
  const {
    cart,
    getTotal,
    getQuantity,
    plusQuantity,
    minusQuantity,
    updateCart,
    deleteToCart,
    clearCart,
    createOrder
  } = useCart();
  
  const productDetails = cart.items.map(
    (item) => (
      <div key={item._id}>
        <ProductDetail
          item={item.itemId}
          quantity={getQuantity(item)}
          total={getTotal(item)}
          plusQuantity={plusQuantity}
          minusQuantity={minusQuantity}
        />
        <ProductDetailFooter
          itemOrder={item}
          updateCart={updateCart}
          deleteToCart={deleteToCart}
        />
      </div>
    )
  );
  return(
    <>
      <div style={cartStyle as React.CSSProperties}>
        <div style={cartLeftStyle as React.CSSProperties}>
          {
            cart.items.length > 0
            ? productDetails
            : (<p>Oops, you still have no products in the cart =(</p>)
          }
        </div>
        <div style={cartRightStyle as React.CSSProperties}>
          <CartRightSide
            total={cart.totalAmount}
            createOrder={createOrder}
            clearCart={clearCart}
          />
        </div>
      </div>
    </>
  )
};

export default Cart;