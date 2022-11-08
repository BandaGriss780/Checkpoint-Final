import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../GlobalState/CartContext";

const Navbar = () => {
  const { qty } = useContext(cartContext);
  return (
    <nav>
       
      <ul className="right">
        <li>
          <Link to="/">HOME</Link>
        </li>
        
      </ul>
      <ul className="left"><li>
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
      </ul>
    </nav>
  );
};

export default Navbar;