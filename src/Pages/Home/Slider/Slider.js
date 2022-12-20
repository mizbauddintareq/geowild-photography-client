import { Button, Carousel } from "react-bootstrap";
import slide1 from "../../../assets/slider-img/slide-1.jpg";
import slide2 from "../../../assets/slider-img/slide-2.jpg";
import slide3 from "../../../assets/slider-img/slide-3.jpg";
import slide4 from "../../../assets/slider-img/slide-4.jpg";
const Slider = () => {
  return (
    <div className="mb-5 fw-bold">
      <Carousel fade>
        <Carousel.Item className="position-relative">
          <img className="d-block w-100" src={slide4} alt="First slide" />
          <Carousel.Caption className="position-absolute top-50 bottom-0 slider-info">
            <h1 className="text-uppercase">
              Capture Every Moment In The Wild World
            </h1>
            <p>
              We support a diverse, international community of changemakers —
              National Geographic Explorers — who use the power of science,
              exploration, education, and storytelling to illuminate and protect
              the wonder of our world.
            </p>
            <Button variant="light" className="fw-bold">
              Explore
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="position-relative">
          <img className="d-block w-100" src={slide2} alt="First slide" />
          <Carousel.Caption className="position-absolute top-50 bottom-0 slider-info">
            <h1>EXPLORE OUR BOLD & INNOVATIVE PROJECTS</h1>
            <p>
              National Geographic Explorers are infinitely curious people who
              are passionate about our planet and making it a better place.
              Follow their stories and their work.
            </p>
            <Button variant="light" className="fw-bold">
              Learn More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="position-relative">
          <img className="d-block w-100" src={slide3} alt="First slide" />
          <Carousel.Caption className="position-absolute top-50 bottom-0 slider-info">
            <h1>EXPLORATION HAPPENS BECAUSE OF YOUR SUPPORT</h1>
            <p>
              You can help further the work of National Geographic Explorers
              around the world by making a tax-deductible donation to the
              National Geographic Society.
            </p>
            <Button variant="light" className="fw-bold">
              Discover
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
