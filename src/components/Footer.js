import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserData } from "../userData";
export default function Footer({ isUser, setIsUser }) {
  const navigate = useNavigate();
  const { user } = useContext(UserData);
  return (
    // <div className="Page-footer">
    //   <div>
    //     {" "}
    //     <h3><i class="bi bi-shop-window" ></i> My Store</h3>
    //     <div className="pages">
     
    //       <Link as={Link} to="/">
    //         <i class="bi bi-house"></i> Home
    //       </Link>
    //       <Link as={Link} to="/products">
    //         <i class="bi bi-shop-window"></i> Products
    //       </Link>

    //      {isUser == true && ( <Link as={Link} to="/addProduct">
    //         <i className="bi bi-bag-plus-fill"></i> Add new product
    //       </Link>)}
     
    //     </div>
    //   </div>
    //   <p>&copy; 2024 My Store. All rights reserved.</p>
    // </div>
    <footer className="creative-footer">
      
            <div className="footer-container">
                <div className="footer-section">
                    <h2>Contact Us</h2>
                    <p>Email: support@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className="footer-section">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Follow Us</h2>
                    <div className="social-media">
                        <a href="#" className="social-icon">Facebook</a>
                        <a href="#" className="social-icon">Twitter</a>
                        <a href="#" className="social-icon">Instagram</a>
                    </div>
                </div>
                <div className="footer-logo">
            Shoe Kadia
        </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; 2024 My Store. All Rights Reserved.</p>
            </div>
        </footer>
  );
}
