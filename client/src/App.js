import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { OtherPage } from "./OtherPage";
import { Fib } from "./Fib";

function App() {
  return (
    <BrowserRouter>
      <h1>Fib Calculator Version 2</h1>
      <Link to="/">Home</Link>
      <Link to="/otherpage">Other page</Link>
      <Routes>
        <Route path="/" element={<Fib />} />
        <Route path="/otherpage" element={<OtherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
