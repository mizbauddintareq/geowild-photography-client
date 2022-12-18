import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import slide1 from "../../../assets/slider-img/slide-1.jpg";
import slide2 from "../../../assets/slider-img/slide-2.jpg";
import slide3 from "../../../assets/slider-img/slide-3.jpg";
import slide4 from "../../../assets/slider-img/slide-4.jpg";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={4000}
      bullets={false}
      animation="fallAnimation"
    >
      <div data-src={slide1} />
      <div data-src={slide2} />
      <div data-src={slide3} />
      <div data-src={slide4} />
    </AutoplaySlider>
  );
};

export default Slider;
