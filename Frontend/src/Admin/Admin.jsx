import { useState, useEffect } from "react";
import "./Admin.css";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [endpoint, setEndpoint] = useState("donation");
  const [activeLink, setActiveLink] = useState("donation");

  const capitalizeWords = (str) =>
    str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  useEffect(() => {
    if (isAuthenticated) {
      const fetchData = async () => {
        try {
          setError("");
          const response = await fetch(`https://zamsof.onrender.com/api/${endpoint}`);
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
          setError("Unable to load data. Please try again later.");
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [endpoint, isAuthenticated]);

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://zamsof.onrender.com/api/verify-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const result = await response.json();

      if (result.success) {
        setIsAuthenticated(true);
        setPasswordError("");
      } else {
        setPasswordError("Incorrect password. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying password:", error);
      setPasswordError("Something went wrong. Please try again later.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/${endpoint}/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete data");
      }

      const updatedData = data.filter((item) => item._id !== id);
      setData(updatedData);
    } catch (error) {
      console.error("Error deleting data:", error);
      alert("Failed to delete the item. Please try again.");
    }
  };

  const menuItems = [
    { name: "Donation", path: "donation" },
    { name: "Volunteer", path: "volunteer" },
    { name: "Partner", path: "partner" },
    { name: "Contact Us", path: "contact" },
    { name: "Join Us", path: "joinus" },
  ];

  return (
    <div className="admin-container">
      {!isAuthenticated ? (
        <div className="password-container">
          <form onSubmit={handlePasswordSubmit} className="password-form">
            <h2>Admin Login</h2>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password-input"
            />
            <button type="submit" className="password-submit-btn">
              Submit
            </button>
            {passwordError && <p className="error-message">{passwordError}</p>}
          </form>
        </div>
      ) : (
        <>
          <aside className="sidebar">
            <h2 className="sidebar-header">Admin Panel</h2>
            <nav>
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className={`sidebar-link ${
                    activeLink === item.path ? "active" : ""
                  }`}
                  onClick={() => {
                    setEndpoint(item.path);
                    setActiveLink(item.path);
                    setLoading(true);
                  }}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </aside>

          <main className="admin-main">
            <h2>{capitalizeWords(endpoint)} Data</h2>
            {error && <p className="error-message">{error}</p>}
            {loading ? (
              <p>Loading...</p>
            ) : data.length > 0 ? (
              <div className="data-container">
                {data.map((item) => (
                  <div key={item._id} className="data-card">
                    <div className="data-content">
                      {Object.keys(item)
                        .filter((key) => key !== "_id" && key !== "__v") // Exclude `_id` and `__v`
                        .map((key) => (
                          <div key={key} className="data-item">
                            <strong>{capitalizeWords(key)}:</strong> {item[key]}
                          </div>
                        ))}
                    </div>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(item._id)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p>No {capitalizeWords(endpoint)} data available yet.</p>
            )}
          </main>
        </>
      )}
    </div>
  );
};

export default Admin;

