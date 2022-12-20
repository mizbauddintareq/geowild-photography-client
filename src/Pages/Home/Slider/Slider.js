import { Carousel } from "react-bootstrap";
import slide1 from "../../../assets/slider-img/slide-1.jpg";
import slide2 from "../../../assets/slider-img/slide-2.jpg";
import slide3 from "../../../assets/slider-img/slide-3.jpg";
import slide4 from "../../../assets/slider-img/slide-4.jpg";

const Slider = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item className="position-relative">
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption className="position-absolute top-50 bottom-50">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="position-relative">
          <img className="d-block w-100" src={slide2} alt="First slide" />
          <Carousel.Caption className="position-absolute top-50 bottom-50">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="position-relative">
          <img className="d-block w-100" src={slide3} alt="First slide" />
          <Carousel.Caption className="position-absolute top-50 bottom-50">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
