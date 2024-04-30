import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdStar } from "react-icons/md";
import {useState, useEffect} from 'react';
import axios from 'axios';


function Product() {
  const [prod, setProd] = useState();
  const [rating, setRating] = useState();

useEffect(()=>{
  getProduct();
  // calcRating()
},[])

const getProduct = async() =>{
  const response = await axios.get('https://dummyjson.com/products');
  setProd(response.data.products);
}

// const calcRating = () => {
//   for(let i = 0; i< rating; i++){
//     [...setRating(1)];
//   }
// }


  return (
    <div className='d-flex flex-wrap justify-content-between gap-3'>
      {
        prod?.map((item, index)=>{
          return (
            <a href="#" key={index} className='text-decoration-none'>
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
                            {item.discountPercentage+'%'}
                          </Card.Text>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                          <Card.Text className='m-0'>
                          {'$'+(item.price-(item.price*item.discountPercentage*0.01)).toFixed(2)}
                          </Card.Text>
                          <Card.Text>
                            {item.rating}
                            {/* {[...item.rating.toFixed(0)].map((star, index)=>{
                              return (
                                <>
                                <MdStar key={index} />
                                </>
                              )
                            })} */}
                          </Card.Text>
                          </div>
                          <div className="d-flex justify-content-between align-items-center mt-2">
                            <Button variant="primary">Add to Cart</Button>
                            <Button variant="primary">View</Button>
                            {/* <Button variant="light"><GiShoppingCart style={{fontSize: '25px' }}/></Button>
                            <Button variant="light"> <ImEye/></Button> */}
                          </div>
                        </Card.Body>
                  </Card>
            </a>
                  )})}
    </div>
  );
}
export default Product;
    