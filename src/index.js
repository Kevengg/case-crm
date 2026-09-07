import React from 'react';
import ReactDOM from 'react-dom/client';
import './defaults/index.css';
import DefaultApp from './defaults/App.tsx';
import reportWebVitals from './reportWebVitals';
import App from './App.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
if (process.env.DEFAULT === "true") {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  root.render(
    <React.StrictMode>
      <DefaultApp />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
