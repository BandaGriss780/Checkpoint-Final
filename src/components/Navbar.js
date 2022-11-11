import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../GlobalState/CartContext";

import firebaseApp from "../firebase/firebase";
import { getAuth, signOut } from "firebase/auth";

import Admin from "./Admin";
import User from "./User";
const Navbar = ({ user }) => {
  const { qty } = useContext(cartContext);

  const auth = getAuth(firebaseApp);

  return (
    <nav>
      <ul className="right">
        <li>
          <Link to="/">HOME</Link>
        </li>
      </ul>
      <ul className="left">
        <li> <button onClick={() => signOut(auth)}>Log Out</button></li>
        <li>
          {user.role === "admin" ? <Admin user={user} /> : <User user={user} />}
         
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
