import Slider from '../../src/components/Slider';
import Categories from '../../src/components/Categories';
import ProductContainer from '../../src/components/JustForYou';
import Button from 'react-bootstrap/Button';

const Home = () =>{

    return(
        <>
        <div className="heroSection mt-3 container d-flex justify-content-between align-items-center w-100">
        <Categories/>
        <Slider/>
      </div>
      <div className="banner container mt-3">
        <img src='./Banner.jpg' alt="Banner Image" style={{width:'100%'}}/>
      </div>
        <ProductContainer/>
        <div className='d-flex justify-content-center align-items-center'>
          <Button variant="outline-success" className='mt-3' style={{width: '15rem'}}>Load More</Button>
        </div>
        </>
    )
}

export default Home;