import "./App.css";
import { useState, useEffect } from "react";
import { UserProvider } from "./userData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components and pages
import NavBar from "./components/NavBar";
import Card from "./pages/Products";
import SignUpForm from "./pages/signUp";
import SignInForm from "./pages/signIn";
import AddProductForm from "./pages/addProduct";
import HomePage from "./pages/home";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import RoutesIcons from "./components/rouets";
function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isUser, setIsUser] = useState(false);
  const [fourItems, setFourItems] = useState([]);

  const [wishlistProduct, setWishlistProduct] = useState([]);

  const [cartProduct, setCartProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/products"); // Adjust the path as necessary
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setItems(data);
        setFourItems(data.slice(-4));
        console.log(fourItems);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <UserProvider>
      <Router>
        <NavBar isUser={isUser} setIsUser={setIsUser} />

        <Routes>
          <Route
            path="/signIn"
            element={<SignInForm setIsUser={setIsUser} />}
          />
          <Route
            path="/addProduct"
            element={<AddProductForm items={items} />}
          />
          <Route
            path="/"
            element={<HomePage fourItems={fourItems} isUser={isUser} />}
          />
          <Route path="/signUp" element={<SignUpForm />} />
          <Route
            path="/products"
            element={
              <Card
                items={items}
                isUser={isUser}
                wishlistProduct={wishlistProduct}
                setWishlistProduct={setWishlistProduct}
                setCartProduct={setCartProduct}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <Details
                items={items}
                fourItems={fourItems}
                wishlistProduct={wishlistProduct}
                setWishlistProduct={setWishlistProduct}
                isUser={isUser}
                cartProduct={cartProduct}
                setCartProduct={setCartProduct}
              />
            }
          />
          <Route
            path="/cart/:userId"
            element={<Cart setCartProduct={setCartProduct} />}
          />
          <Route
            path="/wishlist/:userId"
            element={<WishList setWishlistProduct={setWishlistProduct} />}
          />
        </Routes>{isUser===true &&
        <RoutesIcons isUser={isUser} setIsUser={setIsUser} />}
         {/* <Footer isUser={isUser} setIsUser={setIsUser} />  */}
      </Router>
    </UserProvider>
  );
}
export default App;
