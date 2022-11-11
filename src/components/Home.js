import Banner from "./Banner";
import Products from "./Products";
import Navbar from "./Navbar"
import firebaseApp from "../firebase/firebase";
import { getAuth, signOut } from "firebase/auth";

const Home = ({ user }) => {
    const auth = getAuth(firebaseApp);
    return (
        <div>
           <Navbar user={user}/>
            <Banner/>
            <Products/>
        </div>
    );
};

export default Home;

