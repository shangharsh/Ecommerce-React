import {useState, useEffect } from 'react'
import { Card } from 'react-bootstrap/esm'
import  Button  from 'react-bootstrap/Button'
import { MdStar } from 'react-icons/md'
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsCashCoin } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { PiKeyReturnFill } from "react-icons/pi";
import { GiHazardSign } from "react-icons/gi";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { Link } from 'react-router-dom';


const Productdetails = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn"))
  const navigate = useNavigate()

  const [activeProd, setActiveProd] = useState();
  const [count, setCount] = useState(1);
  const {id} = useParams();
  useEffect(()=>{
    getData();
  },[])
  const getData = async ()=>{
    const response = await axios.get('https://dummyjson.com/products');
    setActiveProd(response.data.products);
  }
  
  return (
    <>
    {activeProd?.map((item, index)=>{
      if(item.id == id){
        return (
          <Card className='container d-flex flex-row bg-light mt-3' key={index}>
          <Card.Header className='bg-white' style={{width:'40%'}}>
            <Card.Img variant='left' src={item.thumbnail} width={'300px'}/>
          </Card.Header>
          <Card.Body className='bg-white' style={{width:'60%'}}>
            <Card.Text className='fs-4'>
              {item.title}
            </Card.Text>
            <Card.Text>
              <MdStar style={{color:'#f85606'}}/>
              ({item.rating})
            </Card.Text>
            <span className='d-flex mb-2'>Brand:<Card.Text className='text-info ms-1'>{item.brand}</Card.Text></span>
            <Card.Text className='fs-4' style={{color:'#f85606'}}>$ {(item.price-item.price*0.01*item.discountPercentage).toFixed(2)}</Card.Text>
            <div className="d-flex justify-content-between align-items-center w-25 mb-2">
              <Card.Text className='m-0 text-decoration-line-through text-secondary me-2'> ${item.price.toFixed(2)}</Card.Text>
              <Card.Text className='m-0'>-{item.discountPercentage}%</Card.Text>
            </div>
            <div className='d-flex justify-content-between align-items-center mb-3' style={{width:'200px'}}>
              <Card.Text className='m-0'>Quantity</Card.Text>
              <div className="d-flex justify-content-between align-items-center" style={{width:'100px'}}>
                <Button variant='light' onClick={() => setCount(count-1)}>-</Button>
                <Card.Text className='m-0'>{count}</Card.Text>
                <Button variant='light' onClick={() => setCount(count+1)}>+</Button>
              </div>
            </div>
            <div className="btnContainer d-flex justify-content-between align-items-center">
              <Button variant='info' className='text-white w-50 p-2 me-3'>Buy Now</Button>
              <Button className='w-50 p-2 border-0' style={{backgroundColor:'#f85606'}} onClick={()=>{
                if(isLoggedIn){
                  // alert("LoggedIn User")
                let cart = JSON.parse(localStorage.getItem('cart')) || []
                const existingProductIndex = cart.findIndex(product=>product.id === item.id)
                if (existingProductIndex !=-1) {
                  cart[existingProductIndex].quantity +=1;
                }
                else{
                  cart.push({...item, quantity:count})
                }
                localStorage.setItem('cart', JSON.stringify(cart))
                alert(`${item.title} added to your cart!!`)
              }
              else{
                (alert("Please Login First"))
                navigate("/login")
              }
              }}
              >Add to Cart</Button>
            </div>
          </Card.Body>
          <Card.Footer style={{width:'40%'}} className='pt-3'>
            <Card.Text className='m-0 mb-2 text-secondary' style={{fontSize:'14px'}} as='p'>Delivery</Card.Text>
            <div className="location d-flex align-items-center">
            <CiLocationOn className='fs-3 m-0 me-2' />
            <Card.Text className='m-0'>Bharatpur-04, Laxmipur, Chitwan</Card.Text>
            </div>
            <hr />
            <div className="delivery d-flex align-items-center mb-3">
            <CiDeliveryTruck className='me-2 fs-2' />
            <Card.Text className='m-0'>Standard Delivery </Card.Text>
            </div>
            <Card.Text className='d-flex align-items-center m-0'><BsCashCoin className='me-2 fs-4' /> Cash on Delivery Available</Card.Text>
            <hr />
            <div className="service">
              <Card.Text className='text-secondary' style={{fontSize:'14px'}}>Service</Card.Text>
              <div className='d-flex'>
                <FaCheckCircle className='fs-5 me-2 text-primary' />
                <div className="text">
                  <Card.Text className='m-0 text-primary' style={{fontSize:'14px'}}>100% Aunthetic Product from Trusted Brand</Card.Text>
                  <Card.Text style={{fontSize:'12px'}} className='text-secondary mb-2'>or Get 2x Your Money Back</Card.Text>
                </div>
              </div>
              <div className='d-flex me-2'>
                <PiKeyReturnFill className='fs-4 me-2 text-primary' />
                <div className="t">
                  <Card.Text  style={{fontSize:'14px'}} className='m-0 text-primary'>14 Days Free & Easy Return</Card.Text>
                  <Card.Text  style={{fontSize:'12px'}} className='text-secondary mb-2'>Change of Mind Acceptable</Card.Text>
                </div>
              </div>
              <div className='d-flex me-2'>
                <GiHazardSign className='fs-4 me-2' />
                <Card.Text  style={{fontSize:'14px'}} className='m-0'>Warrenty not Available</Card.Text>
              </div>
            </div>
          </Card.Footer>
        </Card>
      )
      }
    })}
    </>
  )
}

export default Productdetails