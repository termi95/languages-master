import "./login.css";

function Login() {
  return (
    <>
      <div className="grid-container">
        <div className="login-box panel-color">
            <form>
                <label htmlFor="login">Login:</label>
                <input type="text" name="login" id="login" />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />
                <input className="action-color" type="submit" value="login" />
            </form>
        </div>
      </div>
    </>
  );
}

export default Login;
