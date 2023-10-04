import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Plus from "./pages/Plus";
import Minus from "./pages/Minus";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plus" element={<Plus />} />
        <Route path="/minus" element={<Minus />} />
      </Routes>
    </Router>
  );
};

export default App;
