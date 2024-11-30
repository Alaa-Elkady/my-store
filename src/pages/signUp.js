import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bubble from "../images/Bubbles.png";
import shoe from "../images/Aire Jordan Nike.png";
import vector from "../images/Vector.png";
const SignUpForm = () => {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [nuser, setUser] = useState();
  const [message, setMessage] = useState("");
  useEffect(() => {
    const postData = async () => {
      if (nuser) {
        try {
          // Simulate a POST request
          const response = await fetch("http://localhost:8000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(nuser),
          });
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const result = await response.json();

          setMessage("Account created successfully! .... Please, sign in .");
        } catch (error) {
          setMessage("Failed to create account.");
        }
      }
    };

    postData();
  }, [nuser]);

  const handleSignup = (event) => {
    event.preventDefault();
    const user = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
    };

    setUser(user);

    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="SignUp">
      {/* background  */}
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

      <div className="header">
        <img src={vector} className="vector" />
        <div className="logo">Shoe Kadia</div>
        <div className="signin"></div>
      </div>
      <div>
        <Form onSubmit={handleSignup} className="form">
          <div className="heading">Welcome !</div>
          <div className="subheading">Sign up to get started</div>
          <input
            type="text"
            className="inp"
            placeholder="First Name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
          <input
            type="text"
            className="inp"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            required
          />
          <input
            type="email"
            className="inp"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="inp"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {message && <div className="message ">{message}</div>}
          <button className="btn" type="submit">
            Sign Up
          </button>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
