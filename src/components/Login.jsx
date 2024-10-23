import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const submitHandled = (e)=>{
    e.preventDefault()
    setUser({username, password})

  }
  console.log("username", username )
  console.log("password", password )
 
  return (
    <>
      <div>
        <h2>User Login</h2>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={
            submitHandled
          }
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Login;
