import React, { createContext, useReducer } from "react";
import { ProductReducer } from "./ProductReducer";

// import dslr from "../assets/dslr.jpg";
// import computer from "../assets/computer.jpg";
// import habibi from "../assets/habibi.jpg";
// import headphones from "../assets/headphones.jpg";
// import iphone from "../assets/iphone.jpg";
// import notebook from "../assets/notebook.jpg";
// import shoes from "../assets/shoes.jpg";
// import tablet from "../assets/tablet.jpg";

const myProducts = [
  { id: 1, name: "DSLR", price: 600, status: "new" },
  { id: 2, name: "Computer", price: 1000, status: "hot" },
  { id: 3, name: "Habibi", price: 300, status: "new" },
  { id: 4, name: "Head Phones", price: 450, status: "hot" },
  { id: 5, name: "Iphone", price: 999, status: "new" },
  { id: 6, name: "Shoes", price: 150, status: "hot" },
  { id: 7, name: "Notebook", price: 550, status: "new" },
  { id: 8, name: "Tablet", price: 200, status: "new" },
];

export const productsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [state] = useReducer(ProductReducer, myProducts);

  return (
    <productsContext.Provider value={[...state]}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;