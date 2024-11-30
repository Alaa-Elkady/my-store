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
  const handleAddToCart = (id) => {
    const product = items.find((i) => i.id == id);
    if (!user.cart.includes(product)) {
      product.qty = 1;
      setCartProduct(product);
      console.log(product);
      user.cart.push(product);
    } else {
      product.qty++;
    }
    navigate(`/cart/${user.id}`);
  };
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
      <Category items={items}/>
    {/* <h3 style={{ textAlign: "center", margin: "20px" }}>
        <i class="bi bi-shop-window" style={{ color: "#dc3545" }}></i> Products
      </h3> */}
      <div className="productsContainer">
        <div className="cards">
          {items.slice(0, itemsToDisplay).map((item) => (
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

            //     <Button
            //       variant="dark"
            //       className="p-2"
            //       onClick={()=>handleAddToCart(item.id)}
            //     >
            //       <i className="bi bi-bag "></i> Add to cart
            //     </Button>
          ))}
        </div>

        <button
          className="displayMore"
          onClick={() => setItemsToDisplay(itemsToDisplay + 3)}
        >
          Load more
        </button>
      </div>
    </div>
    </>
  );
}