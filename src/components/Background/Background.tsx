import React, { ReactNode } from "react";
import "./Background.scss";

const Background: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="Main-background">
      <div className="flex-container">{children}</div>
    </div>
  );
};

export default Background;
