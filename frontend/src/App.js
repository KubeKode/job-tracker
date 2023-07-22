import "./App.css";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={HomePage} />
          <Route path="/profile" element={Profile} />
        </Routes>
        <Profile />
      </div>
    </Router>
  );
}

export default App;
