import React from "react";
import Statusbar from "./statusbar";
import SatutusItem from "./statusItem";
import "./styles.css";

const SomeComponent = () => {
    const [value, setValue] = React.useState(1);

    const handleChangeValue = (index) => {
        setValue(index);
    };

    return (
        <Statusbar value={value} onChange={handleChangeValue}>
            <SatutusItem value={1}>Шаг 1</SatutusItem>
            <SatutusItem value={2}>Шаг 2</SatutusItem>
            <SatutusItem value={3}>Шаг 3</SatutusItem>
            <SatutusItem value={4}>Шаг 4</SatutusItem>
            <SatutusItem value={5}>Шаг 5</SatutusItem>
        </Statusbar>
    );
};

export default SomeComponent;
