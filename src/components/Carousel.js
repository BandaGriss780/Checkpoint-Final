import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";

const data = [
  {
    image: require("../assets/images/banner-1.jpg"),
  },
  {
    image: require("../assets/images/banner-2.png"),
  },
  {
    image: require("../assets/images/banner-3.png"),
  },
  {
    image: require("../assets/images/banner-4.png"),
  },
  {
    image: require("../assets/images/banner-5.jpg"),
    caption: "View more",
  },
];

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((slide, i) => {
        return (
          <Carousel.Item>
            <img className="d-block w-100 img-fluid" src={slide.image} alt="slider products" />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default HomeCarousel;
