import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'

const Addtocart = () => {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  },[]);

  return (
    <div>
      <h3 className='container text-center'>My Cart</h3>
      <div className="cart container d-flex justify-content-center align-items-center flex-column">
        {cart.length>0?cart.map((item, index)=>{
          return (
            <Card className='w-75 d-flex flex-row mb-2' key={index}>
              
          <Card.Header className='d-flex justify-content-center align-items-center bg-white'>
            <Card.Img variant='left' src={item.thumbnail} width={'100px'}/>
            <div className="itemName ms-5">
            <Card.Text className='m-0'>{item.title}</Card.Text>
            <Card.Text className='m-0'>Brand: <span style={{color:'#f85606'}}>{item.brand}</span> </Card.Text>
            </div>
          </Card.Header>
          <Card.Body className='d-flex justify-content-center align-items-center'>
          <Card.Text style={{color:'#f85606'}} className='m-0 me-4'>{item.price}$ <span className='text-secondary'>(-{item.discountPercentage}%)</span></Card.Text>
          <div className="d-flex justify-content-between align-items-center" style={{width:'100px'}}>
            <Card.Text className='m-0 d-flex flex-row'> {item.quantity}</Card.Text>
          </div>
          </Card.Body>
          <Card.Footer className='d-flex justify-content-center align-items-center bg-white'>
            <Card.Text className='m-0 me-4' style={{color:'#f85606'}}>{(((item.price-(item.price*item.discountPercentage*0.01))*(item.quantity)).toFixed(2))}</Card.Text>
            <Button className='btn btn-light rounded-circle' onClick={()=>{
              // alert("Clicked");
                let newCart = cart.filter(product => product.id !== item.id);
                setCart(newCart);
                localStorage.setItem('cart', JSON.stringify(newCart));
                alert(newCart);
            }}>X</Button>
          </Card.Footer>
          </Card>
          )
        }):<h5 className='text-center text-warning'>Your Cart is empty.</h5>}
        
      </div>
    </div>
  )
}

export default Addtocart