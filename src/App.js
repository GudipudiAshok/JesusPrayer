// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';


function App() {
  const [activeTab, setActiveTab] = useState('home'); // Default tab

  return (
    <div className="App">
    <Header setActiveTab={setActiveTab} activeTab={activeTab} />

      {activeTab === 'home' && <Home />}
      {activeTab === 'about' && <About />}
    </div>
  );
}

export default App;
