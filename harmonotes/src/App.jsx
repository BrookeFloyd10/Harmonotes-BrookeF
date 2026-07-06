import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Library from './pages/Library';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <div id="body-container"> 
      <Header />
      <main>
        
        <Home />
        <Dashboard />
        <About />
        <Library />

      </main>

      <Footer />
    </div>
  );
}

export default App;
