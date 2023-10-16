import Card from './pages/FirstActivity'
import Home from './pages/Home'
import Search from './pages/SecondActitvity'
import UseApi from './pages/ThirdActivity'
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {

    
      

  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home/>}   />
          <Route path = '/first' element = {<Card/>}   />
          <Route path = '/second' element = {<Search/>}  />
          <Route path = '/third' element = {<UseApi/>}  />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App

     


   {/* <div className="container">
        <h1>Search ID</h1>
        <input 
        type='text'
        placeholder='Enter ID number'
        onChange={({ target: { value } }) => setIdInput(value)}
        />
      </div>
      <DisplayStudent students={filterStudents}/> */}
