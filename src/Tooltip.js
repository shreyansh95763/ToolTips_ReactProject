import React, { useState } from 'react';
import './Tooltip.css'; // You can define your tooltip styles in Tooltip.css

const Tooltip = ({ position, text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

      // on mouse hover 
  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

      // on mouse leave
  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const tooltipClassName = `tooltip ${position}`;

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {showTooltip && <div className={tooltipClassName}>{text}</div>}
      {children}
    </div>
  );
};

export default Tooltip;
