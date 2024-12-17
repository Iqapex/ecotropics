import { useState } from "react";
import "./AnnualReport.css";

const AnnualReport = () => {
  const [isOpen, setIsOpen] = useState(false);

  const years = [
    { year: "2024", link: "/2023.pdf" },
    { year: "2023", link: "/2023.pdf" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const openPDF = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="annual-report-container">
      <h2 className="annual-report-title">ZAMSOF Annual Report</h2>

      <div className="annual-report-actions">
        <button className="view-button" onClick={toggleDropdown}>
          View Reports
        </button>

        {isOpen && (
          <div className="dropdown">
            {years.map((item) => (
              <button
                key={item.year}
                className="dropdown-item"
                onClick={() => openPDF(item.link)}
              >
                {item.year} Report
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnualReport;
