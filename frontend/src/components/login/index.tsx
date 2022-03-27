import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import Register from "../register";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }).then((res) => {
        if (res.status === 200) {
          setUsername("");
          setPassword("");

          setMessage("User created successfully");
        } else {
          setMessage("Some error occured");
        }
        setTimeout(() => setMessage(""), 5000);
      });
    } catch (err) {}
  };

  let handleChange = (e: HTMLInputElement) => {
    if (e.name === "username") {
      setUsername(e.value);
    } else if (e.name === "password") {
      setPassword(e.value);
    }
  };

  return (
    <div className="grid-container">
      <div className="login-box panel-color">
        <form onSubmit={handleSubmit}>
          <label htmlFor="login">Login:</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => handleChange(e.target)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => handleChange(e.target)}
          />
          <input className="action-color" type="submit" value="username" />
          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
        <div>
          <Link to={"/register"}>register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
