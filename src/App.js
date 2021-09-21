import './App.css';
import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <h1 id="Title" className="FontGradient">Juan Carlos Meza</h1>
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Publications></Publications>
      <Contact></Contact>
    </div>
  );
}

export default App;
