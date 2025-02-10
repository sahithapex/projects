import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/Store";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Provider store={store}>
          <Toaster />
          <App />
        </Provider>
      </BrowserRouter>
  
  </StrictMode>,
)


