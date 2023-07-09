import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import NotFound from "./404";
import Search from "./Search";

export default function App() {
  
  return (
      <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/search" element={<Search />} />
          </Routes>
      </Router>
);
}