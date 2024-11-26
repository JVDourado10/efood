import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";

import { useGetRestaurantsQuery } from "./services/api";

const Rotas = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  if(!restaurants || isLoading) return (<p>Carregando...</p>)

  return (
    <Routes>
      <Route path="/" element={<Home restaurants={restaurants} />} />
      <Route
        path="/restaurante/:id"
        element={<Restaurant />}
      />
    </Routes>
  );
};
export default Rotas;
