import React from "react";
import "./styles.css";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
      <div className="header">
        <div className="header-title">{title}</div>
      </div>
    );
  };
  
  export default Header;