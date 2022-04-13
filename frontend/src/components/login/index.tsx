import "./login.css";
import { Link } from "react-router-dom";
import { useLogin } from "./useLogin";

const Login = () => {
  const { handleSubmit, handleChange, message } = useLogin();
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
};

export default Login;
