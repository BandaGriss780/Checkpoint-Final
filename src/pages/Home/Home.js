import "./styles.css";
import "../../styles/styles.css";
import imageComprar from "../../assets/images/image-comprar.jpg";
import imageCreditcard from "../../assets/images/image-credit-card.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="wrapper">
      <div className="home__wrapper">
        <div className="container home__firstSection">
          <div className="home__title">
            <h2>Welcome to Shop Online.</h2>
            <h3>Find here a lot of products Incredibles and put it into your shop cart in a simple click.</h3>
          </div>
          <div className="home__image">
            <img src={imageComprar} alt=""></img>
          </div>
        </div>

        <div className="container home__secondSection">
          <div className="home__image">
            <img src={imageCreditcard} alt=""></img>
          </div>
          <div className="home__paragraph">
            <p>You can pay with a credit and debit card in untill 12 pays without taxes.</p>
            <div className="home__container__btn">
              <button className="home__btn">
                {" "}
                <Link to="/dashboard">DISCOVER ALL</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
