import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Navbar from "../src/components/NavBar/Navbar";
import { Home } from "./pages/Home/Home";
import NotFound from "./components/NotFound";
import Products from "./components/Products";

import { Login } from "../src/components/Login/Login";
import { Register } from "../src/components/Register/Register";

import { AuthProvider } from "./context/AuthContext";
import { Footer } from "./pages/Footer/Footer";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<NotFound />} />
        </Routes>

        <Footer />
      </AuthProvider>
    </div>
  );
};

export default App;
