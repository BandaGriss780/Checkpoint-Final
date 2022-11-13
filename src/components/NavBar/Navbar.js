import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../GlobalState/CartContext";
import "./styles.css";
import "../../styles/styles.css";

const Navbar = () => {
  const { qty } = useContext(cartContext);
  return (
    <nav className="navbar__container shadow">
      <div className="navbar__logo">
        <Link className="" to="/">
          HOME
        </Link>
      </div>
      <div className="navbar__item">
        <div className="navbar__item__list">
          <ul className="navbar__item__list__products">
            <li className="navbar__item__list__li">
              <Link className="" to="/Products">
                All Products
              </Link>
            </li>
            <li className="navbar__item__list__li">
              <Link className="" to="/">
                Components
              </Link>
            </li>
            <li className="navbar__item__list__li">
              <Link className="" to="/">
                PC complete
              </Link>
            </li>
            <li className="navbar__item__list__li">
              <Link className="" to="/">
                GPU
              </Link>
            </li>
            <li className="navbar__item__list__li">
              <Link className="" to="/">
                OUTLET
              </Link>
            </li>
          </ul>
          <ul className="navbar__item__list__login">
            <li className="navbar__item__list__li">
              <Link className="" to="/login">
                Login
              </Link>
            </li>
            <li className="navbar__item__list__cart">
              <Link className="" to="/cart">
                <span className="shopping-cart">
                  <i className="fas fa-cart-plus ps-4 pe-0"></i>
                  <span className="cart-count">{qty}</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
