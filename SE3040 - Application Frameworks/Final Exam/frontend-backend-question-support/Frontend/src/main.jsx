import React from 'react';  // Import React
import ReactDOM from 'react-dom/client'; // React 18 uses `react-dom/client`
import App from './App'; // Assuming you have an App component
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
