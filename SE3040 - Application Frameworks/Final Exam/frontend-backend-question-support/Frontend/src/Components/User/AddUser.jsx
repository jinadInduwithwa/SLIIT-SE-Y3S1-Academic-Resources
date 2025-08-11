import axios from 'axios';
import React, { useState } from 'react';

const AddUser = () => {

    // Initially, input is an object with empty or default values for each field
    const [input, setInput] = useState({
        username: "",
        email: "",
        phone: "",
        bio: "",
        age: 0,
        status: "active",
    });

    // updates the state when an input field's value changes.
    const handleChange = (e) => {
        setInput((prevState) => ({ // update the state with the new value while keeping the other fields unchanged using the spread operator ...prevState
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    //  function called when the form is submitted
    const handleSubmit = async (e) => {
        e.preventDefault(); // prevents the default form submission behavior

        // First, validate the form
        const isValid = validateForm();
        if (!isValid) return;  // If validation fails, prevent the request

        console.log(input);
        await sendRequest();
    };

    // asynchronous function that sends a POST request to http://localhost:5000/users using axios.
    const sendRequest = async () => {
        try {
            await axios.post("http://localhost:5000/users", {
                username: String(input.username),
                email: String(input.email),
                phone: String(input.phone),
                bio: String(input.bio),
                age: Number(input.age),
                status: String(input.status),  // Status is included here
            });
            alert("User added successfully!");
            resetForm();  // reset form after successful submit
        } catch (error) {
            console.error("Error adding user:", error);
            alert("Failed to add user!");
        }
    };

    const resetForm = () => {
        setInput({
            username: "",
            email: "",
            phone: "",
            bio: "",
            age: 0,
            status: "active",  // Reset to default status
        });
    };

    // --------error handling-----------
    const [error, setError] = useState("");

    const validateForm = () => {
        setError("");

        // Check for empty fields
        if (!input.username || !input.email || !input.phone || !input.bio || !input.age) {
            setError("All fields are required.");
            return false;
        }

        // Validate email format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!emailRegex.test(input.email)) {
            setError("Please enter a valid Gmail address.");
            return false;
        }

        // Validate phone format (international number)
        const phoneRegex = /^\+?[1-9]\d{9,14}$/;
        if (!phoneRegex.test(input.phone)) {
            setError("Please enter a valid phone number.");
            return false;
        }

        // Validate age range
        if (input.age < 13 || input.age > 120) {
            setError("Age must be between 13 and 120.");
            return false;
        }

        return true;  // If all validations pass
    }


    return (
        <div>
            <form className='flex flex-col m-5' onSubmit={handleSubmit}>
                <div>
                    <label>Username</label><br />
                    <input type="text" name='username' value={input.username} onChange={handleChange} className='border rounded-full' required />
                </div>
                <div>
                    <label>Email</label><br />
                    <input type="email" name='email' value={input.email} onChange={handleChange} className='border rounded-full' required />
                </div>
                <div>
                    <label>Phone</label><br />
                    <input type="text" name='phone' value={input.phone} onChange={handleChange} className='border rounded-full' required />
                </div>
                <div>
                    <label>Bio</label><br />
                    <input type="text" name='bio' value={input.bio} onChange={handleChange} className='border rounded-full' required />
                </div>
                <div>
                    <label>Age</label><br />
                    <input type="number" name='age' value={input.age} onChange={handleChange} className='border rounded-full' required />
                </div>

                {/* Checkbox or Radio for Status */}
                <div>
                    <label>Status</label><br />
                    <div className='flex flex-row gap-4'>
                        <div>
                            <input
                                type="radio"
                                id="active"
                                name="status"
                                value="active"
                                checked={input.status === "active"}
                                onChange={handleChange}
                            />
                            <label htmlFor="active">Active</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="inactive"
                                name="status"
                                value="inactive"
                                checked={input.status === "inactive"}
                                onChange={handleChange}
                            />
                            <label htmlFor="inactive">Inactive</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="banned"
                                name="status"
                                value="banned"
                                checked={input.status === "banned"}
                                onChange={handleChange}
                            />
                            <label htmlFor="banned">Banned</label>
                        </div>
                    </div>
                </div>

                {/* Error Message */}
                {error && <div className="text-red-500">{error}</div>}

                <div>
                    <button type="submit" className='my-4 p-2 bg-blue-700 text-white rounded-2xl'>Submit</button>
                </div>

            </form>
        </div>
    );
}

export default AddUser;
