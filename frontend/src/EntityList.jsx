import React, { useState, useEffect } from "react";
import UpdateEntity from "./UpdateEntity";
import DeleteEntity from "./DeleteEntity";
import { fetchEntities } from "./serveces/api"; // Ensure correct path

const EntityList = () => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    loadEntities();
  }, []);

  const loadEntities = async () => {
    const data = await fetchEntities();
    setEntities(data);
  };

  return (
    <div>
      <h2>Entity List</h2>
      {entities.length > 0 ? (
        entities.map((entity) => (
          <div key={entity._id}> {/* MongoDB uses `_id` instead of `id` */}
            <p>{entity.name}</p>
            <UpdateEntity entity={entity} onUpdate={loadEntities} />
            <DeleteEntity entityId={entity._id} onDelete={loadEntities} />
          </div>
        ))
      ) : (
        <p>No entities found.</p>
      )}
    </div>
  );
};

export default EntityList;
