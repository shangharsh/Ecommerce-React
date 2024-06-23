import { Card } from "react-bootstrap"
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
const navigate = useNavigate()
const [input, setInput] = useState({
  email: "",
  password: "",
})



  const handleLogin = (e) => {
    e.preventDefault()
    const loggedUser = JSON.parse(localStorage.getItem("users"))
    const checkLogin = () => {
      if(input.email == "" && input.password == ""){
        alert("Email or Password cannot be empty")
      }else if(input.email === loggedUser.email && input.password === loggedUser.password){
        localStorage.setItem("loggedIn", true)
        navigate("/")
        alert("Logged In")
      }else{
        alert("Wrong Email or Password.")
      }
    }
    const toRegister = () => {
      alert("Register First")
      navigate("/register")
    }
    loggedUser?checkLogin():toRegister()
    
}
return (
  <div>
      <h4 className="text-center mt-3">Please Fill The Form To Login.</h4>
      <Card className="container mt-4 w-50">
      <Form noValidate onSubmit={handleLogin}>
      <Row className="mb-3">
        <Form.Group controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupUsername">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
              name="email"
              value={input.email}
              onChange={(e)=> setInput({
                ...input,
                [e.target.name]: e.target.value,
              })}
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
              required
              name="password"
              value={input.password}
              onChange={(e)=> setInput({
                ...input,
                [e.target.name]: e.target.value,
              })}
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
      </Card>
    </div>
  )
}

export default Login