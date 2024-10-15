// import { response } from 'express';
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  // const [inputs, setInputs] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },

    });

    if (response.status !== 200) {
      alert("Please try again ");
    } else {
      alert("Registration Successful");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sing up</h1>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="Username"
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
        Already have an Account
        <Link to={"/login"} className="link">
          Login
        </Link>
      </h6>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
