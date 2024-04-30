import NavBar from './Navbar.jsx';
import CarouSel from './Carousel.jsx';
import Categories from './Categories.jsx';
import ProductContainer from './JustForYou.jsx';
import BannerPng from './assets/images/Banner.jpg';
import Button from 'react-bootstrap/button';
import Footer from './Footer.jsx';

function App() {

  return (
    <>
    <NavBar/>
    <div className="heroSection container d-flex justify-content-between align-items-center w-100">
      <Categories/>
      <CarouSel/>
    </div>
    <div className="banner container mt-3">
      <img src={BannerPng} alt="Banner Image" style={{width:'100%'}}/>
    </div>
      <ProductContainer/>
      <div className='d-flex justify-content-center align-items-center'>
      <Button variant="outline-success" className='mt-3' style={{width: '400px'}}>Load More</Button>
      </div>
      <Footer/>
    </>
  )
}

export default App;
