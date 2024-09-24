
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';
import { ShopContextProvider } from './context/ShopContext';
import FooterPage from './components/FooterPage';

function App() {


  return (
    <div>
      <Router>
        <ShopContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <FooterPage />
        </ShopContextProvider>
      </Router>
    </div>
  )
}

export default App;
