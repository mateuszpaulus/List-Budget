import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import pages
import { List } from './pages/List';
import { Budget } from './pages/Budget';
// import components
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='budget' element={<Budget />} />
        </Routes>
    </Router>
  );
}

export default App;
