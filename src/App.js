import React from 'react'
import { ThemeProvider } from 'styled-components';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from "./pages/Home"
import Starred from './pages/Starred';
import Show from './pages/Show';
const theme={
  mainColors:{
    blue:'#2400ff',
    gray:'#c6c6c6',
    dark:'#353535',
  },
}
function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/starred" element={<Starred/>} />
        <Route element={"ooo"} />
        <Route path="/show/:id" element={<Show/>}/>    
        
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
