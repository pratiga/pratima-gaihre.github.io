import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home';

function App() {
  return (
  <> 
  <Routes><Route path="/" element={<Layout />} />
      <Route path="/" element={<Home />} />
      
     </Routes> 
  </>
  );
}

export default App;
