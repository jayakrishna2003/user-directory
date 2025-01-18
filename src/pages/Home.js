import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./Home.css";

const Home = () => {
  const { users, fetchUsers } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const filteredUsers = users
    .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  return (
    <div className="home-container">
      <h1 className="title">User Directory</h1>
      <div className="controls">
        <input
          type="text"
          className="search-bar"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="sort-buttons">
          <button onClick={() => setSortOrder("asc")}>Sort A-Z</button>
          <button onClick={() => setSortOrder("desc")}>Sort Z-A</button>
        </div>
      </div>
      <ul className="user-list">
        {filteredUsers.map((user) => (
          <li key={user.id} className="user-item">
            <Link to={`/user/${user.id}`} className="user-link">
              {user.name}
            </Link>
            <span className="user-info"> - {user.email} ({user.address.city})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
