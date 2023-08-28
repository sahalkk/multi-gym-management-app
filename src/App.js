import "./App.css";
import LoginPage from "./LoginPage";
import ProfilePage from "./ProfilePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Dashboard" element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
