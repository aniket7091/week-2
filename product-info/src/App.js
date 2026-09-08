import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProductInfo from './pages/ProductInfo/ProductInfo';


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductInfo/>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
