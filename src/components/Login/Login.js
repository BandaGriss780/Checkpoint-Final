import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) => setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError("We sent you an email. Check your inbox");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="feedback-form">
      {error}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="email" className="">
            Email
          </label>

          <input className="email" type="text" name="email" placeholder="email@gmail.com" onChange={handleChange}></input>
        </div>
        <div>
          <label>Password</label>
          <input className="pass" type="password" name="password" id="password" onChange={handleChange} />
        </div>

        <div>
          <button className="button-form" type="submit">
            Sign In
          </button>
          <a onClick={handleResetPassword}>Forgot Password?</a>
        </div>
        <div class="google-btn">
          <div class="google-icon-wrapper">
            <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
          </div>
          <p class="btn-text" onClick={handleGoogleSignin}>
            <b>Sign in with google</b>
          </p>
        </div>
      </form>
      {/* <Button variant="info" onClick={handleGoogleSignin}>
        Google loginssss
      </Button>
      <Button variant="danger">Danger</Button>{" "} */}
      <p>
        Don't have an account?
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
