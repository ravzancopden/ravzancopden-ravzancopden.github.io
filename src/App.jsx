import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './header/header';
import Home from './home/home';
import Contact from './contact/contact';
import About from './about/about';
import Posts from './posts/posts';
import "./App.css";

function App()  
 {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
