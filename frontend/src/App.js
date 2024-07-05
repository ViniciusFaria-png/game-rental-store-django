import React from 'react';
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Games from "./components/Games";
import Manage from "./components/Manage";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route path="/games" element={<Games/>} />
         <Route path="/manage" element={<Manage/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;