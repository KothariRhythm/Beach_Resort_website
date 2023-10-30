import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/rooms/' Component={Rooms}/>
        <Route path='/rooms/:slug' Component={SingleRoom}/>
        <Route path='/*' Component={Error}/>
      </Routes>
    </div>
  );
}

export default App;
