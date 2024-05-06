import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <footer className="pt-2 pb-2 mt-3 bg-light">
            <div className="container daraz-information d-flex justify-content-between">
                <div className="items w-25 pe-3">
                    <div className="top d-flex flex-column">
                        <p className="m-0 p-0 mb-1 fs-5" style={{color:'#f85606'}}>Customer Care</p>
                        <a className="text-decoration-none text-dark" href="#">Help Center</a>
                        <a className="text-decoration-none text-dark" href="#">How to Buy</a>
                        <a className="text-decoration-none text-dark" href="#">Returns and Refunds</a>
                        <a className="text-decoration-none text-dark" href="#">Contact Us</a>
                    </div>
                    <div className="bottom d-flex flex-column">
                        <p className="m-0 p-0 mb-1 fs-5 mt-3" style={{color:'#f85606'}}>Earn with Daraz</p>
                        <a className="text-decoration-none text-dark" href="#">Daraz University</a>
                        <a className="text-decoration-none text-dark" href="#">Sell on Daraz</a>
                        <a className="text-decoration-none text-dark" href="#">Code of Conducts</a>
                    </div>
                </div>
                <div className="items w-25 pe-3 d-flex flex-column">
                    <p className="m-0 p-0 mb-1 fs-5" style={{color:'#f85606'}}>Daraz</p>
                    <a className="text-decoration-none text-dark" href="#">About Daraz</a>
                    <a className="text-decoration-none text-dark" href="#">Careers</a>
                    <a className="text-decoration-none text-dark" href="#">Daraz Blog</a>
                    <a className="text-decoration-none text-dark" href="#">Terms & Conditions</a>
                    <a className="text-decoration-none text-dark" href="#">Privacy Policy</a>
                    <a className="text-decoration-none text-dark" href="#">Digital Payments</a>
                    <a className="text-decoration-none text-dark" href="#">Daraz Customer University</a>
                    <a className="text-decoration-none text-dark" href="#">Daraz Affilate Program</a>
                    <a className="text-decoration-none text-dark" href="#">Review & Win</a>
                    <a className="text-decoration-none text-dark" href="#">Meet the Winners</a>

                </div>
                <div className="items w-25 pe-3">
                    <p className="m-0 p-0 mb-1 fs-5" style={{color:'#f85606'}}>Daraz International</p>
                    <div className="country d-flex flex-wrap">
                        <a className="text-decoration-none text-dark bg-white ps-2 pe-2 rounded " href="#">Pakistan</a>
                        <a className="text-decoration-none text-dark bg-white ps-2 pe-2 rounded" href="#">Bangladesh</a>
                        <a className="text-decoration-none text-dark bg-white ps-2 pe-2 rounded" href="#">Srilanka</a>
                        <a className="text-decoration-none text-dark bg-white ps-2 pe-2 rounded" href="#">Myanmar</a>
                        <a className="text-decoration-none text-dark bg-white ps-2 pe-2 rounded" href="#">Nepal</a>
                    </div>
                    <p className="m-0 p-0 mb-1 fs-5 mt-3" style={{color:'#f85606'}}>Payment Methods</p>
                    <div className="payMethods d-flex flex-wrap gap-3">
                        <p className="m-0 p-0 bg-white ps-2 pe-2 d-inline rounded">CASH ON DELIVERY</p>
                        <p className="m-0 p-0 bg-white ps-2 pe-2 d-inline rounded">VISA</p>
                        <p className="m-0 p-0 bg-white ps-2 pe-2 d-inline rounded">Mastercard</p>
                        <p className="m-0 p-0 bg-white ps-2 pe-2 d-inline rounded">eSewa</p>
                        <p className="m-0 p-0 bg-white ps-2 pe-2 d-inline rounded">IME Pay</p>
                    </div>
                </div>
                <div className="items pe-3">
                    <div className="happyShopping d-flex flex-column">
                        <span className="material-symbols-outlined rounded d-inline" style={{backgroundColor:'#f85606',width:'100px'}}>
                            <img src="./logo.png" alt="daraz-logo" width={100}/>
                        </span>
                        <div className="iconText d-flex flex-column">
                            <p className="m-0 p-0 happy" style={{color:'#f85606'}}>Happy Shopping</p>
                        </div>
                    </div>
                    <p className="m-0 p-0 mb-1 fs-5 mt-3" style={{color:'#f85606'}}>Follow Us</p>
                    <div className="links d-flex justify-content-between gap-3">
                        <a className="text-decoration-none text-dark" href="#"><i className="fa-brands fa-facebook fs-3 text-primary"></i></a>
                        <a className="text-decoration-none text-dark" href="#"><i className="fa-brands fa-square-instagram fs-3 text-danger"></i></a>
                        <a className="text-decoration-none text-dark" href="#"><i className="fa-brands fa-square-youtube fs-3 text-danger"></i></a>
                        <a className="text-decoration-none text-dark" href="#"><i className="fa-solid fa-globe fs-3" style={{color:'#f85606'}}></i></a>
                    </div>
                </div>
            </div>
        </footer>
  );
}

export default Footer;