import React, { useContext } from "react";
import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "./UserContext";
import { UserContext } from "./UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("wrong credentials");
    }
  }
  if (redirect) {
    return <Navigate to={"/blogPage"} />;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="UserName"
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <h6>
          Haven't you register?create Account
          <Link to={"/register"} 
          className="link">
            Register
          </Link>
        </h6>

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
