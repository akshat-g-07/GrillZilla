import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from "./MenuPage";
import LocationPage from "./LocationPage";
import ChefsPage from "./ChefsPage";
import ClientPage from "./ClientPage";

const Websites = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/locations" element={<LocationPage />} />
        <Route path="/chefs" element={<ChefsPage />} />
        <Route path="/clients" element={<ClientPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Websites;
