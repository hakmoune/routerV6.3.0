import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("User", user);
    navigate("/profile", { replace: true });
  };

  return (
    <div className="container">
      Login Page
      <input
        value={user}
        onChange={e => setUser(e.target.value)}
        type="text"
        name="user"
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
}
