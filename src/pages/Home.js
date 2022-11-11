import { useAuth } from "../context/AuthContext";
import bannerOne from "../assets/images/banner-1.jpg";
import bannerTwo from "../assets/images/banner-2.png";
import bannerThree from "../assets/images/banner-3.png";

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
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={bannerOne} className="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src={bannerTwo} className="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src={bannerThree} className="d-block w-100" alt="..."></img>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <h1>welcome {user?.displayName || user?.email}</h1>
        <h1>Soy el home</h1>
        <button className="button-form" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </section>
  );
}
