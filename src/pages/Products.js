import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserData } from "../userData";
import Category from "../components/Category";
export default function Products({
  items,
  isUser,
  setCartProduct,
  wishlistProduct,
  setWishlistProduct,
}) {
  const navigate = useNavigate();
  const { user } = useContext(UserData);
  const [itemsToDisplay, setItemsToDisplay] = useState(9);
  const [searchTerm, setSearchTerm] = useState("");
  const handleAddToWishlist = (id) => {
    const product = items.find((i) => i.id == id);
    if (!user.wishlist.includes(product)) {
      user.wishlist.push(product);
      setWishlistProduct(product);
      console.log(wishlistProduct);
    }
    navigate(`/wishlist/${user.id}`);
  };

  return (
    <>
      <div className="page">
        <Category items={items} />

        <div className="productsContainer">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            className="search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="cards">
            {items
              .slice(0, itemsToDisplay)
              .filter((item) => item.name.toLowerCase().includes(searchTerm))
              .map((item) => (
                <div className="productCard">
                  <div className="cardImage">
                    <img className="img" src={item.imageURL} />
                    {isUser == true && (
                      <i
                        class="bi bi-heart"
                        onClick={() => handleAddToWishlist(item.id)}
                      ></i>
                    )}
                  </div>
                  <div
                    className="cardBody"
                    onClick={() => {
                      navigate(`/product/${item.id}`);
                    }}
                  >
                    <div className="cardTitle">{item.name} </div>
                    <h4 className="cardPrice">{item.price} $</h4>
                  </div>
                </div>
              ))}
          </div>
          {itemsToDisplay < items.length && (
            <button
              className="displayMore"
              onClick={() => setItemsToDisplay(itemsToDisplay + 3)}
            >
              Load more
            </button>
          )}
        </div>
      </div>
    </>
  );
}
