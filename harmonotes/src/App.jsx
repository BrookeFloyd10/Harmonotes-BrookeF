import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Library from './pages/Library'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'

function App() {
  return (
    <div id="body-container"> 
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
