import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
