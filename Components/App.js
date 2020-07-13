import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './home';
class App extends Component {
  render()
  {
  return (
    <BrowserRouter>
  <Home></Home>
     </BrowserRouter>
  );
}
}

export default App;
