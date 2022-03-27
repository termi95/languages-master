import { useState } from "react";
import "./login.css";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          login: login,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      // if (res.status === 200) {
      //   setLogin("");
      //   setPassword("");

      //   setMessage("User created successfully");
      // } else {
      //   setMessage("Some error occured");
      // }
    } catch (err) {
      console.log(err);
    }
  };

  let handleChange = (e: HTMLInputElement) => {
    if (e.name === "login") {
      setLogin(e.value);
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
            name="login"
            id="login"
            onChange={(e) => handleChange(e.target)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => handleChange(e.target)}
          />
          <input className="action-color" type="submit" value="login" />
          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
    </div>
  );
}

export default Login;
