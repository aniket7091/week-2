
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../src/components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Todos from './pages/Todos/Todos';
import About from './pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/todos" element={<Todos/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
