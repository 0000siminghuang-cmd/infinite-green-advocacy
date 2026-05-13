import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pathology from './pages/Pathology';
import EPR from './pages/EPR';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pathology" element={<Pathology />} />
          <Route path="epr" element={<EPR />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
