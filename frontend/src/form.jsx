import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/post`, formData);
            if (response && response.data) {
                alert("User created: " + JSON.stringify(response.data));
            } else {
                console.error("Unexpected response format:", response);
            }
        } catch (error) {
            console.error("Error during form submission:", error);
            if (error.response && error.response.data) {
                alert("Error: " + error.response.data.message);
            } else {
                alert("An unexpected error occurred. Check console logs for details.");
            }
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Age:
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Gender:
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
