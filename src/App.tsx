import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
