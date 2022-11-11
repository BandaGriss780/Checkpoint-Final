import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Navbar from "../src/components/NavBar/Navbar";
import { Home } from "../src/pages/Home";
import NotFound from "./components/NotFound";
import Products from "./components/Products";

import { Login } from "../src/components/Login/Login";
import { Register } from "../src/components/Register/Register";

import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Home />
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
