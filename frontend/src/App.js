import "./App.css";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./components/Books";
import BookPage from "./components/BookPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="/book/:id" element={<BookPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
