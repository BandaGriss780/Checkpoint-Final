import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../GlobalState/CartContext";
import "./styles.css";

const Navbar = () => {
  const { qty } = useContext(cartContext);
  return (
    <nav className="navbar navbar-expand-lg shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          HOME
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse row" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <span className="shopping-cart">
                  <i className="fas fa-cart-plus ps-4 pe-0"></i>
                  <span className="cart-count">{qty}</span>
                </span>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Products">
                All Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Components
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                PC complete
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                GPU
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                OUTLET
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
