import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TextTransformProvider } from "./contexts/TextTransformContext";
import Menu from "./components/Menu";

import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <TextTransformProvider>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </TextTransformProvider>
  );
}
