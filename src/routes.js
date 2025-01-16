import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novo-video" element={<div>Nova Página de Vídeo</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
