import React from "react";
import { deleteEntity } from "./serveces/api";

const DeleteEntity = ({ entityId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await deleteEntity(entityId); // Using `_id` for MongoDB
      onDelete(); // Refresh list after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteEntity;
