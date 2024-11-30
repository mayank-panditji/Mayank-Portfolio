import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componenets/Header';
import HomePage from './Pages/HomePage'; 
import Page8 from './Pages/Page8';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/hire" element={<Page8 />} />
      </Routes>
    </Router>
  );
};

export default App;
