import React from 'react';
import './App.css';
import Header from './pages/Header';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import About from './pages/About';
import Skill from './pages/Skill';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Landing />
      <About />
      <Skill />
      <Contact />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

// 986504