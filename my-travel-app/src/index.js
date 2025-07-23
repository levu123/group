// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // File CSS mặc định của Create React App
import App from './App.js'; // Hoặc './App.jsx' nếu file của bạn là App.jsx
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);