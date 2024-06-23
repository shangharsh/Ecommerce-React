import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiShoppingCart } from "react-icons/gi";
import {Link, useNavigate} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  const navigate = useNavigate()

  const userName = JSON.parse(localStorage.getItem("users"))
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn"))

  const handleLogOut = () => {
    localStorage.removeItem("loggedIn")
    navigate("/")
  }

  return (
    <Navbar expand="lg" className="" style={{backgroundColor:'#f85606'}} >
      <Container>
          <Link to='/'>
            <img src='/logo.png' alt="logo" width={100}/>
          </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            
            <Link to='/addtocart' className=' text-white text-decoration-none me-2'>
                <GiShoppingCart style={{ fontSize: '36px' }}/>
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Link to='/productdetails'>
              <Button variant="outline-success" className='btn-light me-2'>Search</Button>
            </Link>
          </Form>
          {isLoggedIn? <>
            {/* <Link className='d-flex justify-content-between align-items-center text-white text-decoration-none'>{userName.fName}{userName.lName}</Link> */}
            <NavDropdown title={userName.fName+userName.lName} id="basic-nav-dropdown" className='text-white'>
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2" onClick={handleLogOut}>Log Out</NavDropdown.Item>
            </NavDropdown>
            </>
            :
            <>
            <Link to='/login' className='d-flex justify-content-between align-items-center text-white text-decoration-none'>Login</Link>
            <span className='ms-2 me-2 text-white d-flex justify-content-between align-items-center'>|</span>
            <Link to='/register' className='d-flex justify-content-between align-items-center text-white text-decoration-none'>Register</Link>
            <span className='ms-2 me-2 text-white d-flex justify-content-between align-items-center'>|</span>
            {/* <NavDropdown title={userName.fName+ +userName.lName} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
            </NavDropdown> */}
            {/* <Link className='d-flex justify-content-between align-items-center text-white text-decoration-none'>{userName.fName}{userName.lName}</Link> */}

            </>
            }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;