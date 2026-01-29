import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen'; 
import MoreScreen from './MoreScreen'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} /> {/* Default route for HomeScreen */}
        <Route path="/more" element={<MoreScreen />} /> {/* Route for MoreScreen */}
      </Routes>
    </Router>
  );
}

export default App;