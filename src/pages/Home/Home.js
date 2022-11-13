import { useAuth } from "../../context/AuthContext";
import Carousel from "../../components/Carousel";

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
    <section className="">
      <Carousel />
    </section>
  );
}
