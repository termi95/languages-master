import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="home" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
