import Card from 'react-bootstrap/Card';
import { MdStar } from "react-icons/md";
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


function Product() {
  const [prod, setProd] = useState();

useEffect(()=>{
  getProduct();
  // getRating();
},[])

const getProduct = async() =>{
  const response = await axios.get('https://dummyjson.com/products');
  setProd(response.data.products);
}

  return (
    <div className='d-flex flex-wrap justify-content-around gap-3'>
      {console.log(prod)}
      {
        prod?.map((item, index)=>{
          return (
            <Link to='/productdetails' key={index} className='text-decoration-none'>
                <Card style={{ width: '15rem' }} className='gap-3'>
                      <Card.Img variant="top" src={item.thumbnail} style={{
                        width: '10rem',
                        height: '8rem'}} className='mx-auto'/>
                        <Card.Body>
                          <Card.Title>{
                          item.title.length>17? item.title.slice(0,17)+'..':item.title
                          }</Card.Title>
                          <div className="d-flex justify-content-between align-items-center text-secondary">
                          <Card.Text className='m-0 text-decoration-line-through'>
                            {'$'+item.price}
                          </Card.Text>
                          <Card.Text>
                            {-item.discountPercentage+'%'}
                          </Card.Text>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                          <Card.Text className='m-0' style={{color:'#f85606'}}>
                          {'$'+(item.price-(item.price*item.discountPercentage*0.01)).toFixed(2)}
                          </Card.Text>
                          <Card.Text>
                            <MdStar style={{color:'#f85606'}}/>
                            ({item.rating})

                          </Card.Text>
                          </div>
                        </Card.Body>
                  </Card>
            </Link>
                  )})}
    </div>
  );
}
export default Product;
    