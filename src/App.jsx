import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./page/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <div className="fixed top-0 w-full z-50">
          <Nav />
        </div>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
