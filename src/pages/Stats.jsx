import { useEffect, useState } from "react";
import { getAnalytics } from "../api/api";

const Stats = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    getAnalytics().then((data) => {
      setStats(data);
    });
  }, []);

  return (
    <div>
      <h1>Analytics Dashboard</h1>

      <p>Total Orders: {stats.totalOrders}</p>
      <p>Delivered: {stats.delivered}</p>
      <p>Cancelled: {stats.cancelled}</p>
      <p>Total Revenue: {stats.totalRevenue}</p>
    </div>
  );
};

export default Stats;