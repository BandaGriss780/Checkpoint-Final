import React from "react";
const Admin = ({ user }) => {
  return (
    <div>
      <p>ADMIN{user.email}</p>
    </div>
  );
};

export default Admin;
