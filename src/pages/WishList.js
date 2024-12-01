import { useContext } from "react";
import { UserData } from "../userData";
import Card from "../components/card";
export default function WishList({ setWishlistProduct }) {
  const { user } = useContext(UserData);
  const wishList = user.wishlist;
  const removeFromWish = (id) => {
    const p = wishList.find((i) => i.id == id);
    if (user.cart.includes(p)) {
      console.log("existed");
    } else {
      const index = wishList.indexOf(p);
      wishList.splice(index, 1);
      p.qty = 1;
      user.cart.push(p);
      setWishlistProduct({ wishList });
    }
  };
  const removeItem = (id) => {
    const p = wishList.find((i) => i.id == id);
    const index = wishList.indexOf(p);
    wishList.splice(index, 1);
    setWishlistProduct({ wishList });
  };
  return (
    <div className="wishList">
      <p className="title">My wishlist</p>
      <p className="subtitle">
        You have {wishList.length} items in your wish list
      </p>
      <div className="cards">
        {wishList.map((item) => (
          <Card
            item={item}
            removeFromWish={removeFromWish}
            removeItem={removeItem}
          />
        ))}
      </div>
    </div>
  );
}
