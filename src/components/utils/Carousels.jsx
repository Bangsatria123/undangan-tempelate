import Carousel from "react-bootstrap/Carousel";
import image1 from "../images/wedding/4.jpeg"
import image2 from "../images/wedding/5.jpg"
import image3 from "../images/wedding/1.jpg"

function Carousels() {
  return (
    <Carousel fade interval={3000}  controls={false} indicators={false} className="h-screen opacity-45 z-10">
      <Carousel.Item>
        <img src={image1} className="min-h-screen"/>
      </Carousel.Item>
      <Carousel.Item >
        <img src={image2} className="min-h-screen"/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} className="min-h-screen"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;