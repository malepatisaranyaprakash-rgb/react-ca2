import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const url = "https://t4e-testserver.onrender.com/api";

  const fetchOrders = async () => {
    try {
      const res1 = await axios.post(`${url}/public/token`, {
        studentId: "E0323018",
        set: "setA",
        password: "849794"
      });

      const token = res1.data.token;
      const dataUrl = res1.data.dataUrl;

      const res2 = await axios.get(`${url}${dataUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // ✅ store in state
      setOrders(res2.data.data.orders);

    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  // ✅ auto call when app loads
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <AppContext.Provider value={{ orders }}>
      {children}
    </AppContext.Provider>
  );
};