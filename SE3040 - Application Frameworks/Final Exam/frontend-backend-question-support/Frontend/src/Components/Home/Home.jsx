import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'; 


// useState: For managing state (users and search text).
// useEffect: Normally used to run logic on component load.

// ------------ Fetch all data -----------------------------
const fetchAllUsers = async () => {
    try {
        const res = await axios.get("http://localhost:5000/users");
        return res.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        return { users: [] };
    }
}

// fetch Searched Data
const fetchSearchedUsers = async (searchQuery) => {
    try {
        const res = await axios.get(`http://localhost:5000/users/search?query=${encodeURIComponent(searchQuery)}`); // encodeURIComponent() to safely encode the input
        return res.data;
    } catch (error) {
        console.log("Error searching users: ",error);
        return{ users: []};
        
    }
};

// ------------ delete user ------------
const deleteHandler = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/users/${_id}`);
        // Refetch users after deletion
        fetchAllUsers().then((data) => setUsers(data.users));
    } catch (error) {
        console.error("Error deleting user:", error);
    }
};




function Home () {
    
    //-------- Fetch all users on initial load -----------------------------------------
    const [users, setUsers] = useState([]); // set retrive users. start with empty array
    const [searchText, setSearchText] = useState(""); // Tracks search input

    // Fetch all users on initial load
    useEffect(() => {
        fetchAllUsers().then((data) => setUsers(data.users));
    }, []);

    const handleSearch = async (e) => {
        const query = e.target.value; //value of the input field (or any form element) that triggered the event
        setSearchText(query) // updates the component's state (searchText).

        if (query.trim() === "") { // If the input is empty, Fetch all users again
            fetchAllUsers().then((data) => setUsers(data.users))    
        }else{ // Otherwise
            fetchSearchedUsers(query).then((data) => setUsers(data.users)) // Call the search API and show matching users.
        }
    };

    return (
    <div>
      <h1 className='text-red-700 font-bold text-center text-2xl py-4'>Users</h1>

        <div className="w-full max-w-md mx-auto pb-6">
            <input
            type="text"
            placeholder="Search by name or email..."
            value={searchText}
            onChange={handleSearch}
            className="w-full p-2 border border-gray-400 rounded"
            />
        </div>

      <div>
       {users && users.map((user) => (
        <div key={user._id} className="p-4 bg-gray-400 shadow-lg  w-full md:w-1/4 rounded-md flex flex-col gap-2 m-4">
            <p><strong>Name:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Bio:</strong> {user.bio}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <div className='flex flex-row gap-4'>
                <Link className="bg-blue-600 p-2 hover:bg-blue-800" to={`update/${user._id}`}>update</Link>
                <button className="bg-blue-600 p-2 hover:bg-blue-800" onClick={() => deleteHandler(user._id)}>Delete</button>
            </div>
        </div>
        ))}
      </div>
      
    </div>
  )
}

export default Home
