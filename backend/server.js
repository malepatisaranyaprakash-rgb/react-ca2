const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const orders = [
  { id: 1, user: "Arun", restaurant: "Spice Hub", totalAmount: 400, status: "Delivered" },
  { id: 2, user: "Meena", restaurant: "Pizza Town", totalAmount: 200, status: "Delivered" },
  { id: 3, user: "Rahul", restaurant: "Spice Hub", totalAmount: 0, status: "Cancelled" }
];

// API
app.get("/api/orders", (req, res) => {
  const { status } = req.query;

  let result = orders;

  if (status) {
    result = result.filter(o => o.status === status);
  }

  res.json(result);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});