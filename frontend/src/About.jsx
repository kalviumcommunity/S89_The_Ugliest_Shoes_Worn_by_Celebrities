import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="container">
      <h1>👟 Title: The Ugliest Shoes Worn By Celebrities 👟</h1>
      <h2>💔 This website displays all the moments when celebrities wore the ugliest shoes in public. 💔</h2>
      <button onClick={() => navigate('/uglyShoelist')} style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        backgroundColor: "#e63946",
        color: "white",
        border: "none",
        borderRadius: "5px",
      }}>
        ✨ Discover More ✨
      </button>
      <div>
      <button onClick={() => navigate('/form')} style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        backgroundColor: "#e63946",
        color: "white",
        border: "none",
        borderRadius: "5px",
      }}>
        ✨ Form ✨
      </button>
      <button onClick={() => navigate('/entity')} style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        backgroundColor: "#e63946",
        color: "white",
        border: "none",
        borderRadius: "5px",
      }}>
        ✨ entity ✨
      </button>
      </div>
    </div>
  );
};

export default About;
