import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";

export function Profile() {
  const navigate = useNavigate();
  const user = localStorage.getItem("User");

  /*useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);*/

  /*if (!user) {
    return <Navigate to="/login" />;
  }*/

  const handleClick = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      {!user ? (
        <Navigate to="/login" />
      ) : (
        <div className="container">
          Profile Page: <strong>{user}</strong>
          <button onClick={handleClick}>Logout</button>
        </div>
      )}
    </div>
  );
}
