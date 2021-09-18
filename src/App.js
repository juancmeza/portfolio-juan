import './App.css';
import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <h1 id="Title">Juan Carlos Meza</h1>
      <Nav></Nav>
      <About></About>
      <Projects></Projects>
      <div className="GG-Background">
        <Publications></Publications>
      </div>
      <Contact></Contact>
    </div>
  );
}

export default App;
