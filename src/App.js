import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Navs from "./components/nav"
import Home from "./pages/Home"
import Starred from './pages/Starred';
function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/starred" element={<Starred/>} />
        <Route element={"ooo"} />

      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
