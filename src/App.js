import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={"This is "} />
        <Route path="/starred" element={"this is the starred"} />
        <Route element={"ooo"} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
