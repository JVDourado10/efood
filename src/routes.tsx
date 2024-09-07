import { Routes, Route } from "react-router-dom";

import Home, { RestaurantType } from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import { useEffect, useState } from "react";

const Rotas = () => {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setRestaurants(res));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home restaurants={restaurants} />} />
      <Route
        path="/restaurante/:id"
        element={<Restaurant restaurants={restaurants} />}
      />
    </Routes>
  );
};
export default Rotas;
