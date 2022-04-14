import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sidenav">
      <Link to={"/home"}>Home</Link>
      <Link to={"/profile"}>Profile</Link>
      <Link to={"/words"}>Magic words</Link>
    </nav>
  );
};

export default Navbar;