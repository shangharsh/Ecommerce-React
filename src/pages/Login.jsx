import { Card } from "react-bootstrap"
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link, Navigate } from "react-router-dom";

const Login = () => {

  const email = useRef();
  const password = useRef();
  const [users, setUsers] = useState();
  const [login, setLogin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
   const userDetails =  JSON.parse(localStorage.getItem('userDetails'));
   if (userDetails) {
    
     setUsers(userDetails);
   }
   
  //  console.log(userDetails);
};
return (
  <div>
      <h4 className="text-center mt-3">Please Fill The Form To Login.</h4>
      <Card className="container mt-4 w-50">
      <Form noValidate onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupUsername">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              ref={email}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Type Email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="validationCustomPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPassword">*</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Password"
              aria-describedby="inputGroupPrepend"
              ref={password}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Type password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        </Row>
      
      <Row className="mb-3">
        <Form.Group className="d-flex justify-content-center align-items-center">
          <Button className="w-50" type="submit">LOGIN</Button>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group className="d-flex justify-content-center align-items-center">
          <p>Don't have a account? <Link to='/register'>Register Here</Link></p>
        </Form.Group>
      </Row>
    </Form>

    {
      // console.log(users)
      users?.map((item, index)=>{
          if (email.current.value == item['userName'] && password.current.value == item['userPassword']) {
            return (
            <div key={index}>
              {setLogin(true)}
              <Navigate key={index} to='/'/>
            </div>
            )
            // {alert("Login Success")}
          }
          
          // alert(item)
       })
    }
      </Card>
    </div>
  )
}

export default Login