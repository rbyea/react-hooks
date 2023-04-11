import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factroial(n) {
    return n ? n * factroial(n - 1) : 1;
}

function runFactoria(n) {
    console.log("run Factorial");
    return factroial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = React.useState(100);
    const fact = React.useMemo(() => runFactoria(value), [value]);

    const [btnColor, setBtnColor] = React.useState(true);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Result fact : {fact}</p>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prevStata) => prevStata + 10)}
                >
                    Increment
                </button>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prevStata) => prevStata - 10)}
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={`btn btn-${btnColor ? "primary" : "secondary"}`}
                    onClick={() => setBtnColor((prev) => !prev)}
                >
                    Toggle color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
