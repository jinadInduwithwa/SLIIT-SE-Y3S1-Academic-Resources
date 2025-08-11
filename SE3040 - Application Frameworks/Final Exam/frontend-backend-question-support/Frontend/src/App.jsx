import React from 'react';  // Add this import at the top of your file
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import AddUser from './Components/User/AddUser';
import UpdateUser from './Components/User/UpdateUser';

function App() {
  return (
    <div>
      <NavBar />  {/* NavBar is outside the Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<AddUser />} />
        <Route path="update/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
