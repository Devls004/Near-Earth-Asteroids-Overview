import React from "react";
import "./styles.css";

interface HeaderProps {
  title: string;
  onClear?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onClear  }) => {
    return (
      <div className="header">
        <div className="header-title">{title}</div>
        <button className="clear-button" onClick={onClear}>
          Clear Filters and Sorters
        </button>
      </div>
    );
  };
  
  export default Header;