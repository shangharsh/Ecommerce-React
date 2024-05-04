import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <div className="container-fluid p-0 m-0" style={{width: '75%'}}>
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='./Slider1.jpg'
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
          className="d-block w-100"
          src='./Slider2.jpg'
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='./Slider3.jpg'
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='./Slider4.jpg'
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='./Slider5.jpg'
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='./Slider6.jpg'
          alt="Sixth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default Slider;