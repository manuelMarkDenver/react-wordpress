import "./App.css";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./components/Books";
import BookPage from "./components/BookPage";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="/book/:id" element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
