import { Button } from "react-bootstrap";
import { useContext} from "react";
import { UserData } from "../userData";
export default function WishList({setWishlistProduct}) {
  const { user } = useContext(UserData);
  const wishList = user.wishlist;
  const removeFromWish = (id) => {
    const p = wishList.find((i) => i.id == id);
    if (user.cart.includes(p)) {
      console.log("existed");
    } else {
      const index =wishList.indexOf(p)
      wishList.splice(index,1)
      p.qty=1;
      user.cart.push(p);
      setWishlistProduct({wishList})
    }
  };
  return (
    <div>
      <h3 style={{ textAlign: "center", margin: "20px" }}>
        <i class="bi bi-heart-fill" style={{ color: "#dc3545" }}></i> My wish
        list
      </h3>
      {wishList.map((item) => (
        <div
          style={{
            borderBottom: "1px solid #dc3545",
            paddingBottom: "20px",
            width: "90%",
            margin: "auto",
            paddingTop: "20px",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <img src={item.imageURL} className="w-50" />
              </div>
              <div className="col">
                <h3 style={{ color: "#dc3545", fontSize: "18px" }}>
                  {item.name}
                </h3>
                <p>{item.category}</p>
                <p>
                  {item.price} <strong>EGP</strong>
                </p>
              </div>

              <div className="col">
                <Button variant="dark" onClick={()=>removeFromWish(item.id)}>
                  <i className="bi bi-bag "></i> Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
