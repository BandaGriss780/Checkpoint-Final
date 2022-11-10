import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../GlobalState/CartContext";
import "./styles.css";

const Navbar = () => {
  const { qty } = useContext(cartContext);
  return (
    <nav className="navbar__container">
      <div className="navbar__logo">
        <Link to="/">HOME</Link>
      </div>
      <div className="navbar__menu">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/cart">
            <span className="shopping-cart">
              <i className="fas fa-cart-plus ps-4 pe-0"></i>
              <span className="cart-count">{qty}</span>
            </span>
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
