import { Card } from "react-bootstrap"
import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link} from "react-router-dom";

const Register = () => {
  const fName = useRef();
  const lName = useRef();
  const uAddress = useRef();
  const userPassword = useRef();
  const userEmail = useRef();
const [users, setUsers] = useState([]);
const handleSubmit = (e) => {
  e.preventDefault();
  let item = {
    fName:fName.current.value,
    lName:lName.current.value,
    uAddress:uAddress.current.value,
    userName:userEmail.current.value,
    userPassword:userPassword.current.value
  };
  setUsers(prevUsers => [...prevUsers, item]);
  let userDetails = JSON.parse(localStorage.getItem('userDetails'))||[];
  userDetails.push({...item});
  localStorage.setItem('userDetails', JSON.stringify(userDetails));
}

  return (
    <div>
      {/* {console.log(users)} */}
      <h4 className="text-center mt-3">Please Fill the form to Register</h4>
      <Card className="container mt-4 w-75">
      <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            // defaultValue="Mark"
            ref={fName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            // defaultValue="Otto"
            ref={lName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Address Here"
            // defaultValue="Otto"
            ref={uAddress}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupUsername">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              ref={userEmail}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustomPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPassword">*</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Password"
              aria-describedby="inputGroupPrepend"
              ref={userPassword}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        </Row>
      
        <Row className="mb-3">
          <Form.Group className="d-flex justify-content-center align-items-center">
            <Button className="w-50" type="submit">SIGN UP</Button>
          </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group className="d-flex justify-content-center align-items-center">
          <p>Already Registered? <Link to='/login'>Login Here</Link></p>
        </Form.Group>
      </Row>
    </Form>
      </Card>
    </div>
  )
}

export default Register