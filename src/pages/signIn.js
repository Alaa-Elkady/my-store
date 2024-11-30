import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserData } from "../userData";
import bubble from "../images/Bubbles.png";
import shoe from "../images/Aire Jordan Nike.png";
import vector from "../images/Vector.png";
import { Link } from "react-router-dom";
const SignInForm = ({ setIsUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [users, setUsers] = useState();
  const [message, setMessage] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/users?${email}`);
      if (!response.ok) {
        setMessage("Network response was not ok");
      } else {
        const data = await response.json();
        setUsers(data);
        setUser(data[0]);
      }
    };

    fetchData();
  }, []);
  const { setUser } = useContext(UserData);
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setMessage(`Welcome, ${user.fname}!`);
      setIsUser(true);
      navigate("/");
    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <div className="SignIn">
      <div>
        <div className="overlay">
          <div className="shoes"></div>
        </div>
        <div className="bubbles">
          <img src={bubble} className="bubble1" />
          <img src={bubble} className="bubble2" />
        </div>
        <div className="text">AIR JORDAN</div>
        <img src={shoe} className="shoe" />
      </div>

      {/* <div className="header">
        <img src={vector} className="vector" />
        <div className="logo">Shoe Kadia</div>
        <div className="signin"></div>
      </div> */}

      <Form onSubmit={handleSubmit} className="form">
      <div className="heading">Welcome Back !</div>
      <div className="subheading">Sign in to continue</div>.
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="inp"
        />

        <input
          className="inp"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {message && <div className="message ">{message}</div>}
        <button variant="primary" type="submit" className="btn">
          Sign In
        </button>
        <div className="signup">Don't have an account? </div>
        <Link to="/signUp" className="signUpBtn">Sign Up</Link>
      </Form>
    </div>
  );
};

export default SignInForm;
