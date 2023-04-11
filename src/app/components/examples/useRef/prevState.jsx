import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = React.useRef("");
    const [otherState, setOtherState] = React.useState("false");

    React.useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);

    const handleState = () => {
        setOtherState((prev) => (prev === "false" ? "true" : "false"));
    };

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <p>Предыдущее состояние: {prevState.current}</p>
            <p>Нынешнее состояние: {otherState}</p>

            <button className="btn btn-primary" onClick={handleState}>
                Кнопка
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
