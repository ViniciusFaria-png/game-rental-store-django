import Carousel from 'react-bootstrap/Carousel';

import slide1 from '../static/slide1.png'
import slide2 from '../static/slide2.png'
import slide3 from '../static/slide3.png'

const Home = () => {
    const slideImgStyle = {
        height: '500px',
        objectFit: 'fill',
        width: '100%',
      };
  return (
  <div className="row">
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 slide-img"
          src={slide1}
          alt="First slide"
          style={slideImgStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide-img"
          src={slide2}
          alt="Second slide"
          style={slideImgStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide-img"
          src={slide3}
          alt="Third slide"
          style={slideImgStyle}
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Home;