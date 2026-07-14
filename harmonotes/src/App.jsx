import { useState } from 'react'
import { Routes, Route, Link } from 'react-router'
import Header from './components/layout/Header'
import Home from './pages/Home'
import About from './pages/About'
import Library from './pages/Library'
import Dashboard from './pages/Dashboard'
import Footer from './components/layout/Footer'
import './App.css'

const App= () => {
  return (
    <div className="body-container"> 
      <Header />
      
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/library" element={<Library />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
