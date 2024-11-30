import { Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { UserData } from "../userData";
export default function Cart({setCartProduct}) {
  const { user } = useContext(UserData);
  const cart = user.cart;
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(0);
  const totalPrice = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].qty;
    }
    setTotal(total);
  };
  useEffect(() => {
    totalPrice();
  }, [cart]);
  const removeFromCart = (index) => {
    cart.splice(index, 1);
    setCartProduct({cart});
  };
  return (
    <>
      <h3 style={{ textAlign: "center", margin: "20px" }}>
        <i class="bi bi-basket" style={{ color: "#dc3545" }}></i> My Cart
      </h3>
      {cart.map((item) => (
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
              <div
                className="col"
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button variant="danger" onClick={() => setQty(item.qty++)}>
                  <i class="bi bi-plus-lg"></i>
                </Button>
                <p style={{ marginTop: "5px" }}>{item.qty}</p>
                <Button variant="danger" onClick={() => setQty(item.qty--)}>
                  <i class="bi bi-dash"></i>
                </Button>
              </div>
              <div className="col">
                <Button variant="dark" onClick={() => removeFromCart(item.index)}>
                  <i class="bi bi-trash"></i> Remove
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <footer className="footer">
        <h3>Total Price : </h3>
        <h5 className="m-2"> {total} EGP </h5>
        <Button className="p-2 m-2" variant="dark">
          <i class="bi bi-bag"></i> Buy
        </Button>
      </footer>
    </>
  );
}
