export const increment = (id) => {
    return {
      type: "INCREMENT",
      id,
    };
  };
  
  export const decrement = (id) => {
    return {
      type: "DECREMENT",
      id,
    };
  };
  
  export const deleteProduct = (id) => {
    console.log("I am Clicked");
    return {
      type: "DELETE_PRODUCT",
      id,
    };
  };