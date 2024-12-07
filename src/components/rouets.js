import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserData } from "../userData";
export default function RoutesIcons({ setIsUser, isUser }) {
  const navigate = useNavigate();
  const { user } = useContext(UserData);
  return (
    <div className="routesIcons">
      {isUser == true && (
        <>
          <Link as={Link} to="/">
            <i class="bi bi-house"></i>
          </Link>
          <Link as={Link} to="/products">
            <i class="bi bi-shop-window"></i>
          </Link>
          <Link to={"/cart/" + user.id} className="">
            <i className="bi bi-bag"></i>
          </Link>
          <Link to={`/wishlist/${user.id}`} className="">
            <i className="bi bi-heart-fill"></i>
          </Link>
          <Link as={Link} to="/addProduct">
            <i className="bi bi-bag-plus-fill"></i>
          </Link>
          <Link
            href="#"
            onClick={() => {
              setIsUser(false);
              navigate("/");
            }}
          >
            <i className="bi bi-box-arrow-right"></i> 
          </Link>
        </>
      )}
    </div>
  );
}
