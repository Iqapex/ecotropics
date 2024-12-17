import { useState } from "react";
import "./AnnualReport.css";

const AnnualReport = () => {
  const [isOpen, setIsOpen] = useState(false);

  const years = [
    { year: "2024", link: "/2024.pdf" },
    { year: "2023", link: "/2023.pdf" },
  ];

  const toggleDropdown = () => {
    console.log("Dropdown toggled");
    setIsOpen(!isOpen);
  };

  const openPDF = (link) => {
    console.log("Opening PDF in new tab:", link);
    window.open(link, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="annual-report-container">
      <div className="annual-report-title">ZAMSOF Annual Report</div>

      <div className="annual-report-actions">
        <button className="view-button" onClick={toggleDropdown}>
          View
        </button>

        {isOpen && (
          <div className="dropdown">
            {years.map((item) => (
              <div key={item.year} className="dropdown-item-container">
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => openPDF(item.link)}
                >
                  View {item.year}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnualReport;
