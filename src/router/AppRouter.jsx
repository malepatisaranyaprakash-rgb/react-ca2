import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Stats from "../pages/Stats";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stats" element={<Stats />} />
    </Routes>
  );
};

export default AppRouter;