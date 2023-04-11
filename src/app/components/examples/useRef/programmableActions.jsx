import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputEmail = React.useRef();

    const handleFocus = () => {
        inputEmail.current.focus();
    };

    const handleWidthInput = () => {
        inputEmail.current.style.width = "100px";
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>

            <label htmlFor="email">Email</label>
            <input
                type="email"
                ref={inputEmail}
                className="form-control"
                id="email"
            />

            <button className="btn btn-primary" onClick={handleFocus}>
                Фокус
            </button>
            <button className="btn btn-secondary" onClick={handleWidthInput}>
                Изменить ширину
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
