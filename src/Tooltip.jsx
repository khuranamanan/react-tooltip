import React from "react";
import PropTypes from "prop-types";
import "./Tooltip.css";

function Tooltip({
  children,
  tooltipText,
  position,
  bg,
  textColor,
  delay,
  arrow
}) {
  const tooltipStyles = {
    "--tooltip-bg": bg,
    "--tooltip-text-color": textColor,
    "--tooltip-delay": `${delay}ms`
  };

  return (
    <div
      className="tooltip-wrapper"
      data-tooltipText={tooltipText}
      aria-label={tooltipText}
    >
      {children}
      <span
        className={`tooltip-text ${arrow && "tooltip-arrow"}`}
        data-tooltipPosition={position}
        style={tooltipStyles}
      >
        {tooltipText}
      </span>
    </div>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  tooltipText: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  bg: PropTypes.string,
  textColor: PropTypes.string,
  delay: PropTypes.number,
  arrow: PropTypes.bool
};

Tooltip.defaultProps = {
  position: "bottom",
  bg: "black",
  textColor: "white",
  delay: 0,
  arrow: false
};

export default Tooltip;
