import { useState, useEffect } from "react";
import "./Admin.css";

const Admin = () => {
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
    const fetchData = async () => {
      try {
        setError("");
        const response = await fetch(`http://localhost:4000/api/${endpoint}`);
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
  }, [endpoint]);

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
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
              <div key={item.id} className="data-card">
                <div className="data-content">
                  {Object.keys(item).map((key) => (
                    <div key={key} className="data-item">
                      <strong>{capitalizeWords(key)}:</strong> {item[key]}
                    </div>
                  ))}
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
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
    </div>
  );
};

export default Admin;
