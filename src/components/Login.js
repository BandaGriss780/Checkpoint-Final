import { useState } from "react";
import firebaseApp from "../firebase/firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const firestore = getFirestore(firebaseApp);

  const auth = getAuth(firebaseApp);

  const registerUser = async (email, password, role) => {
    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((userCredential) => {
      return userCredential;
    });
    const userRef = doc(firestore, `users/${result.user.uid}`);
    setDoc(userRef, { email, role });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const role = e.target.role.value;
    if (isRegistered) {
      registerUser(email, password, role);
    } else {
      signInWithEmailAndPassword(auth, email, password);
    }
  };

  return (
    <div className="feedback-form">
      <h2>{isRegistered ? "Registrate" : "Iniciá sesión"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input className="email" type="text" placeholder="Email" id="email" />
        </label>
        <label>
          Password:
          <input
            className="pass"
            type="password"
            placeholder="Password"
            id="password"
          />
        </label>
        <label>
          Role:
          <select id="role">
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </label>
        <button className="button-form" type="submit">
          {isRegistered ? "Registrame" : "Iniciá mi sesión"}
        </button>
      </form>
      <button onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered
          ? "¿Ya tenés cuenta? Iniciá sesión"
          : "¿No tenés cuenta? Registrate"}
      </button>
    </div>
  );
};

export default Login;
