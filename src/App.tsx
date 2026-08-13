import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
        </Routes> */}
        <Hero />
      </BrowserRouter>
    </>
  );
}

export default App;
