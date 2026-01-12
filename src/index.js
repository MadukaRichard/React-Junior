import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './sqiassignment/Nav'
import reportWebVitals from './reportWebVitals';
import Hero from './sqiassignment/Hero';
import Hero2 from './sqiassignment/Hero2';
import Footer from './sqiassignment/Footer';
import News from './sqiassignment/News';
import Courses from './sqiassignment/Courses';
import Ready from './sqiassignment/Ready';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Nav/>
    <Hero/>
    <Hero2/>
    <App/>
    <Courses/> 
    <Ready/>
    <News/> 
    <Footer/>
    </>
    
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
