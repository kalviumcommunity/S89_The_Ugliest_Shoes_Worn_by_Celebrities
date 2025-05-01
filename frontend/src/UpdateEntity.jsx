import React, { useState } from "react";
import { updateEntity } from "./serveces/api";

const UpdateEntity = ({ entity, onUpdate }) => {
  const [name, setName] = useState(entity.name);
  const [age, setAge] = useState(entity.age);
  const [gender, setGender] = useState(entity.gender);

  const handleUpdate = async () => {
    try {
      await updateEntity(entity._id, { name, age, gender }); // Using `_id` for MongoDB
      onUpdate(); // Refresh list after update
      if(updateEntity){
        console.log("The entity is updated successfully");
        alert("the entity is updated successfully");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Name"
      />
      <input 
        type="number" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
        placeholder="Age"
      />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateEntity;
