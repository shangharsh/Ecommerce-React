import Carousel from 'react-bootstrap/Carousel';
import Slider1 from './assets/images/Slider1.jpg'
import Slider2 from './assets/images/Slider2.jpg'
import Slider3 from './assets/images/Slider3.jpg'
import Slider4 from './assets/images/Slider4.jpg'
import Slider5 from './assets/images/Slider5.jpg'
import Slider6 from './assets/images/Slider6.jpg'

function Slider() {
  return (
    <div className="container-fluid p-0 m-0" style={{width: '75%'}}>
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slider1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
          className="d-block w-100"
          src={Slider2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider5}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider6}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default Slider;