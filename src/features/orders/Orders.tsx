import { Button } from "primereact/button";
import OrderCard from "../../components/orderCard/OrderCard";
import { ordersContainer } from "./style";
import useOrders from "./useOrders";

const Orders = () => {
  const { orders, getOrders, deleteOrder } = useOrders();
  const orderCards = orders.map(
    (order) => (
      <OrderCard
        key={order._id}
        order={order}
        deleteOrder={deleteOrder}
      />
    )
  );
  return(
    <>
      <div style={ordersContainer}>
        <Button
          label="Refresh"
          onClick={() => getOrders()}
          icon="pi pi-refresh"
        />
      </div>
      <div style={ordersContainer}>
        
        {
          orders.length > 0
            ? orderCards
            : (<p style={{marginTop: '2rem'}}>You have no orders yet</p>)
        }
      </div>
    </>
  )
};

export default Orders;