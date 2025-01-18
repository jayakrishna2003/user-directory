import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./UserDetail.css";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchUserDetail } = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const data = await fetchUserDetail(id);
      setUser(data);
    };
    loadUser();
  }, [id, fetchUserDetail]);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  if (!user) return <p className="loading">Loading...</p>;

  return (
    <div className="user-detail-container">
      <h1 className="user-name">{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company.name}</p>
      <p>Website: {user.website}</p>
      <button onClick={() => navigate("/")} className="go-back-btn">Go Back</button>
      <button onClick={toggleTheme} className="toggle-theme-btn">Toggle Theme</button>
    </div>
  );
};

export default UserDetail;