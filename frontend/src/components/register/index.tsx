import "./register.css"
import { Link } from "react-router-dom";
import { useRegister } from "./useRegister";

const Register = () => {
  const { handleSubmit, handleChange, message } = useRegister();
  return (
    <div className="grid-container">
      <div className="register-box panel-color">
          <p>Register</p>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => handleChange(e.target)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => handleChange(e.target)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => handleChange(e.target)}
          />
          <label htmlFor="rePassword">Verify Password:</label>
          <input
            type="password"
            name="rePassword"
            id="rePassword"
            onChange={(e) => handleChange(e.target)}
          />
          <input className="action-color" type="submit" value="Create account" />
          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
        <div>
          <p>I have account and i want to <Link to={"/login"}>login</Link>.</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
