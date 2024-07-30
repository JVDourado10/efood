import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Header from "./components/Header";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante" element={<Header />} />
  </Routes>
)
export default Rotas