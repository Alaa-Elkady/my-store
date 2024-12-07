import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import { UserData } from "../userData";
import Offcanvas from "react-bootstrap/Offcanvas";
export default function NavBar({ isUser, setIsUser }) {
  const { user } = useContext(UserData);
  return (
    <div className="navBar ">
      <div className="logo" as={Link} to="/">
        Shoe Kadia
      </div>

      <div className="links">
        <Link as={Link} to="/" className="link">
        <i class="bi bi-house-door-fill"></i>
        </Link>
        <Link as={Link} to="/products" className="link">
          Products
        </Link>

        {isUser == true && (
          <>
            <Link to={"/cart/" + user.id} className="link">
              <i class="bi bi-cart4"></i>
            </Link>
            <Link to={`/wishlist/${user.id}`} className="link">
              <i className="bi bi-heart-fill"></i>
            </Link>
          </>
        )}

        {isUser == false && (
          <>
            <Link to="/signIn" className="link">
            <i class="bi bi-person-fill"></i>
            </Link>
          
          </>
        )}

      </div>
    </div>
  );
}
