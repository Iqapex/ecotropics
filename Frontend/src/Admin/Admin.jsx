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

  // Capitalize Words Helper
  const capitalizeWords = (str) =>
    str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  // Fetch Data
  useEffect(() => {
    if (isAuthenticated) {
      const fetchData = async () => {
        try {
          setError("");
          const response = await fetch(
            `https://zamsof.onrender.com/api/${endpoint}`
          );
          if (!response.ok) throw new Error("Failed to fetch data");

          const result = await response.json();
          setData(result);
        } catch (err) {
          console.error("Error fetching data:", err);
          // setError("Unable to load data. Please try again later.");
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [endpoint, isAuthenticated]);

  // Handle Password Submit
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://zamsof.onrender.com/api/verify-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        }
      );

      const result = await response.json();
      if (result.success) {
        setIsAuthenticated(true);
        setPasswordError("");
      } else setPasswordError("Incorrect password. Please try again.");
    } catch (err) {
      console.error("Error verifying password:", err);
      setPasswordError("Something went wrong. Please try again later.");
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://zamsof.onrender.com/api/${endpoint}/${id}`,
        { method: "DELETE" }
      );

      if (!response.ok) throw new Error("Failed to delete data");

      setData(data.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error deleting data:", err);
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
              <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">Loading...</p>
            </div>
            
            ) : data.length > 0 ? (
              <div className="data-container">
                {data.map((item) => (
                  <div key={item._id} className="data-card">
                    <div className="data-content">
                      {Object.keys(item)
                        .filter((key) => key !== "_id" && key !== "__v")
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
              <div className="no-data-container">
  <div className="no-data-card">
    <h3 className="no-data-title">No Data Available</h3>
    <p className="no-data-message">
      We could not find any {capitalizeWords(endpoint)} data at the moment.
    </p>
    <p className="no-data-hint">Please check back later or add new entries.</p>
  </div>
</div>

            )}
          </main>
        </>
      )}
    </div>
  );
};

export default Admin;
