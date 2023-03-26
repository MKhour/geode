import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Journal from './components/Journal';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        
          
          <Routes>
              <Route path='/' element={<Layout />} />
              <Route path='journal' element={<Journal/>} />
              {/* <Route path='/about' component={About} /> */}
          </Routes>
          {/* <Outlet /> */}
    
        
      </BrowserRouter>
      
    );
  }
}

export default App;