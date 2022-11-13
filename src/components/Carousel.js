import Carousel from "react-bootstrap/Carousel";
import bannerOne from "../../assets/images/banner-1.jpg";
import bannerTwo from "../../assets/images/banner-2.png";
import bannerThree from "../../assets/images/banner-3.png";

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={bannerOne} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bannerTwo} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bannerThree} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
