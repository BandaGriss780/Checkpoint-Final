import { useAuth } from "../context/AuthContext";

export function Home() {
  
  const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }

  };

  return (
    <div className="">
      
      <div>
        <h1>welcome {user.displayName || user.email}</h1>
        <h1>Soy el home</h1>
        <button className="button-form" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
