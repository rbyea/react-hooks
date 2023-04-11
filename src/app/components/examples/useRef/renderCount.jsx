import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const renderState = useRef(0);
    const [currentState, useCurrentState] = useState(false);
    const handleRenderState = () => {
        useCurrentState(!currentState);
    };

    useEffect(() => {
        renderState.current++;
    });

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <p>Рендеров: {renderState.current}</p>
            <button className="btn btn-primary" onClick={handleRenderState}>
                Рендер
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
