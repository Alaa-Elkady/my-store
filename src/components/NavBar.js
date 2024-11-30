import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import { UserData } from "../userData";
import Offcanvas from "react-bootstrap/Offcanvas";
export default function NavBar({ isUser, setIsUser }) {
  const { user } = useContext(UserData);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              <i className="bi bi-bag"></i>
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

        {isUser == true && (
          <>
            <Link
              href="#"
              className="col"
              style={{ textTransform: "capitalize" }}
              onClick={handleShow}
            >
              <i className="bi bi-person-circle"></i>{" "}
              {user.fname + " " + user.lname}
            </Link>
            <Offcanvas
              show={show}
              onHide={handleClose}
              style={{ backgroundColor: "#0e030340", color: "white" }}
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <div className="pages">
                  <h2 style={{ color: "#dc3545" }}>Pages</h2>
                  <Link>
                    <i className="bi bi-person-circle"></i> My Profile
                  </Link>
                  <Link as={Link} to="/">
                    <i class="bi bi-house"></i> Home
                  </Link>
                  <Link as={Link} to="/products">
                    <i class="bi bi-shop-window"></i> Products
                  </Link>
                  <Link to={"/cart/" + user.id} className="">
                    <i className="bi bi-bag"></i> My Cart
                  </Link>
                  <Link to={`/wishlist/${user.id}`} className="">
                    <i className="bi bi-heart-fill"></i> My Wish List
                  </Link>
                  <Link as={Link} to="/addProduct">
                    <i className="bi bi-bag-plus-fill"></i> Add new product
                  </Link>
                  <Link
                    href="#"
                    onClick={() => {
                      setIsUser(false);
                      navigate("/");
                    }}
                  >
                    <i className="bi bi-box-arrow-right"></i> Logout
                  </Link>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        )}
      </div>
    </div>
  );
}
