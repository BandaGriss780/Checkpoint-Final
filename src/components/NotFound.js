import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate.push("/");
  };
  return (
    <div className="container">
      <div className="not-found">
        <h1>Not Found</h1>
        <button onClick={goBack}>Go BacK To HOME</button>
      </div>
    </div>
  );
};

export default NotFound;