import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import firebaseApp from "./firebase/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);
const App = () => {
  const [user, setUser] = useState(null);

    const firestore = getFirestore(firebaseApp);

    const getUserFirestore = async (uid) => {
        const docRef = doc(firestore, `users/${uid}`);
        const docSnap = await getDoc(docRef);
        const role = docSnap.data().role;
        return role;
    };

    const setUserWithFirestoreRole = (userFromFirebase) => {
      
        getUserFirestore(userFromFirebase.uid).then((role) => {       
            const userWithRole = {
                uid: userFromFirebase.uid,
                email: userFromFirebase.email,
                role: role,
            };
            setUser(userWithRole);
        });
    };

   
    onAuthStateChanged(auth, (userFromFirebase) => {
        if (userFromFirebase) {
            if (!user) {
                setUserWithFirestoreRole(userFromFirebase);
            }
        } else {
            setUser(null);
        }
    });

  return (
    <div>
    
       
       {user ? <Home user={user} /> : <Login />}
        <div>
          <Routes>
            
            {/* <Route path="/cart" element={<Cart />} /> */}
          
            <Route element={<NotFound />} />
          </Routes>
        </div>
     
    </div>
  );
};

export default App;
