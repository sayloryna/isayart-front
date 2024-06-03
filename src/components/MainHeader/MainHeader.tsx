import React from "react";
import "./MainHeader.scss";

interface HeaderProps {
  title: string;
}

const MainHeader = ({ title }: HeaderProps): React.ReactElement => {
  return (
    <header className="main-header">
      <h1 className="main-title">{title}</h1>
    </header>
  );
};

export default MainHeader;
