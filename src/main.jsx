import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { MainApp } from './pages/MainApp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter basename='/'>
    <MainApp />
  </HashRouter>,
)
