import React from "react";
import PropTypes from "prop-types";
import SatutusItem from "./statusItem";

const Statusbar = ({ children, value, onChange }) => {
    const countChildren = React.Children.count(children);

    if (!countChildren) {
        return <div>Нет элементов</div>;
    }
    return (
        <div>
            <div className="wrapper">
                <ul className="step-progress">
                    {React.Children.map(children, (child) => {
                        if (child.type === SatutusItem) {
                            return React.cloneElement(child, {
                                isDone: child.props.value <= value,
                                onClick: onChange
                            });
                        }
                        return child;
                    })}
                </ul>
            </div>
        </div>
    );
};

Statusbar.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    value: PropTypes.number,
    onChange: PropTypes.func
};

export default Statusbar;
