// status-item.jsx
import React from "react";
import "./styles.css";
import PropsTypes from "prop-types";

const SatutusItem = ({ children, isDone, onClick, value }) => {
    const className = `step-progress-item ${isDone ? "is-done" : "current"}`;
    const handleClick = () => {
        onClick && onClick(value);
    };
    return (
        <div className={className} onClick={handleClick}>
            <strong>{children}</strong>
        </div>
    );
};

SatutusItem.propTypes = {
    children: PropsTypes.string.isRequired,
    isDone: PropsTypes.bool,
    value: PropsTypes.number.isRequired,
    onClick: PropsTypes.func
};

export default SatutusItem;
