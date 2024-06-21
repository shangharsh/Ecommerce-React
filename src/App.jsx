import NavBar from './components/Header.jsx';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Addtocart from './pages/Addtocart.jsx';
import Searchedproduct from './pages/Searchedproduct.jsx';
import Productdetails from './pages/Productdetails.jsx';
import Footer from './components/Footer.jsx';
import SecureRoute from './services/SecureRoute.jsx';

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/addtocart' element={<SecureRoute/>}>
        <Route path='/addtocart' element={<Addtocart/>}/>
      </Route>
      <Route path='/searchedproduct' element={<Searchedproduct/>} />
      <Route path='/productdetails/:id' element={<Productdetails/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
