import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import About from './Pages/about';
import Navbar from './components/Layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';


<Navbar />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/home" element={<App />}/>
        <Route path="/about" element={<About />}/> 
        {/* <App /> */}
    </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
