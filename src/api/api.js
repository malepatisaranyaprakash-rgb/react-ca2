const BASE_URL = "http://localhost:5000/api";

// GET all orders (with optional query)
export const getOrders = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE_URL}/orders?${query}`);
  return res.json();
};

// GET single order
export const getOrderById = async (id) => {
  const res = await fetch(`${BASE_URL}/orders/${id}`);
  return res.json();
};

// UPDATE order status
export const updateOrderStatus = async (id, status) => {
  const res = await fetch(`${BASE_URL}/orders/${id}/status`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  return res.json();
};

// ANALYTICS
export const getAnalytics = async () => {
  const res = await fetch(`${BASE_URL}/orders/analytics`);
  return res.json();
};