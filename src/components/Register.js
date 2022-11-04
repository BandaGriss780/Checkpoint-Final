import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
export function Register() {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="feedback-form">
      <h2>Register</h2>
      {error && <Alert message={error} />}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
           className="email"
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="email@gmail.com"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
           className="pass" 
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="*************"
          />
        </div>

        <button className="button-form">Register</button>
      </form>
      <p>
        Already have an Account?
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
