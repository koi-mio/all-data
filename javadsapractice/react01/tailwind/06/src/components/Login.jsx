import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    console.log("login is successfully....");
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h1>Login</h1>
      <hr />
      <hr />
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
      />
      <hr />
      {""}
      <hr />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
