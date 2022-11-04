import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
