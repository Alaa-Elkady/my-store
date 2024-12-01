import { Button } from "react-bootstrap";
export default function Card({ item, removeFromWish, removeItem }) {
  return (
    <div className="productCard">
      <div className="removeWish" onClick={() => removeItem(item.id)}>
        <i class="bi bi-x-lg"></i>
      </div>
      <div className="cardImage">
        <img className="img" src={item.imageURL} />
      </div>
      <div className="cardBody">
        <div className="cardTitle">{item.name} </div>
        <h4 className="cardPrice">{item.price} EGP</h4>
      </div>
      <Button onClick={() => removeFromWish(item.id)}>ADD TO CART</Button>
    </div>
  );
}
