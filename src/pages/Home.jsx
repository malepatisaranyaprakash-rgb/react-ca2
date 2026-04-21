import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { orders } = useContext(AppContext);

  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    setFilteredOrders(orders);
  }, [orders]);

  return (
    <div>
      <h1>Orders</h1>

      {filteredOrders.length > 0 ? (
        filteredOrders.map((order, index) => (
          <div key={index}>
            <h3>{order.user}</h3>
            <p>Restaurant: {order.restaurant}</p>
            <p>Total Amount: {order.totalAmount}</p>
            <p>Status: {order.status}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;