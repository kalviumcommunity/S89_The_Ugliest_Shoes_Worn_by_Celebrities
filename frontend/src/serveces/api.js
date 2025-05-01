const BASE_URL = "http://localhost:3000"; // Adjusted for your backend port

export const fetchEntities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/get`);
    return response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const updateEntity = async (id, data) => {
  try {
    await fetch(`${BASE_URL}/put/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export const deleteEntity = async (id) => {
  try {
    await fetch(`${BASE_URL}/delete/${id}`, { method: "DELETE" });
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
