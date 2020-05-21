import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Header from './components/Header';
import Contacts from './components/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from "./context";



function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="Contatct Manager" />
        <div className="container">
          <Contacts />
        </div>

      </div>
    </Provider>
  );
}

export default App