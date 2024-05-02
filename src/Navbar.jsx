import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiShoppingCart } from "react-icons/gi";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="" style={{backgroundColor:'#f85606'}} >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src='./logo.png' alt="logo" width={100}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='d-flex justify-content-between align-items-center text-white'>Login</Nav.Link>
            <Nav.Link href="#action2" className='d-flex justify-content-between align-items-center text-white'>Sign Up</Nav.Link>
            <Nav.Link href="#action3" className=' text-white'>
                <GiShoppingCart style={{ fontSize: '36px' }}/>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='btn-light'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;