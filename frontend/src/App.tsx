import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import Profile from "./components/profile";
import MagicWordHeader from "./components/magic-word";
import { MagicWordProvider } from "./components/magic-word/MagicWordProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route
            path="magic-word"
            element={
              <MagicWordProvider>
                <MagicWordHeader />
              </MagicWordProvider>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
