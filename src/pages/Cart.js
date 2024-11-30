import { Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { UserData } from "../userData";
import { Link } from "react-router-dom";
export default function Cart({ setCartProduct }) {
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
    setCartProduct({ cart });
  };
  return (
    <div className="cartPage">
      <div className="title">SHOPPING BAG</div>
      <table className="cart">
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Qty</th>
          <th>subtotal</th>
        </tr>
        {cart.map((item) => (
          <tr className="item-container">
            <td className="item-info">
              <img src={item.imageURL} className="img" />

              <div className="item-text">
                <div className="pName">{item.name}</div>
                <i
                  class="bi bi-trash"
                  onClick={() => removeFromCart(item.index)}
                ></i>
              </div>
            </td>
            <td>
              {item.price} <strong>EGP</strong>
            </td>
            <td className="quantity">
              <i
                className="bi bi-plus-lg"
                onClick={() => setQty(item.qty++)}
              ></i>

              <p >{item.qty}</p>

              <i class="bi bi-dash" onClick={() => setQty(item.qty--)}></i>
            </td>
            <td>
              {item.price * item.qty} <strong>EGP</strong>
            </td>
          </tr>
        ))}
      </table>
      <Link to='/products' className="back">
      continue to shopping
      </Link>
      <footer className="footer">
        <div className="d-flex">
          <h3>Total Price : </h3>
          <p className="m-2"> {total}EGP </p>
        </div>
        <Button className="p-2 m-2" variant="dark">
          <i class="bi bi-bag"></i> Buy
        </Button>
      </footer>
    </div>
  );
}
