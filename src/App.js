import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const HatsPage = () => {
  return(
    <div>
      <h1>hats page</h1>
      <p>Hi</p>
    </div>
  ) 
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="hats" element={<HatsPage />} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
