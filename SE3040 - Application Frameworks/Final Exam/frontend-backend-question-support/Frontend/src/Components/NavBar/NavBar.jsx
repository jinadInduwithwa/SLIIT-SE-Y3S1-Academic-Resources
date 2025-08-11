import React from 'react';
import { Link } from 'react-router-dom'; 

const NavBar = () => {
  return (
    <div className='w-full py-2 flex flex-row gap-3 px-3.5 text-2xl bg-blue-500'>
        <Link to="/"><h6 className='cursor-pointer hover:text-white'>Home</h6></Link>
        <Link to="/add"><h6 className='cursor-pointer hover:text-white'>Add</h6></Link>
    </div>
  );
}

export default NavBar;
