import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Products from "./components/Products";

import { Login } from "./components/Login";
import { Register } from "./components/Register";

import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Banner />
        <div>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<NotFound />} />
          </Routes>
        </div>
      </AuthProvider>
    </div>
  );
};

export default App;
