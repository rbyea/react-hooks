import React, { useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const widthOutCallback = React.useRef(0);
    const widthCallback = React.useRef(0);

    const [data, setData] = React.useState({});

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validateWidthOutCallback = (data) => {
        console.log(data);
    };

    const validateWidthCallback = useCallback((data) => {
        console.log(data);
    }, []);

    React.useEffect(() => {
        validateWidthOutCallback(data);
        validateWidthCallback(data);
    }, []);

    React.useEffect(() => {
        widthOutCallback.current++;
    }, [validateWidthOutCallback]);

    React.useEffect(() => {
        widthCallback.current++;
    }, [validateWidthCallback]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Width Out Callback : {widthOutCallback.current}</p>
            <p>Width Callback : {widthCallback.current}</p>
            <label htmlFor="email">Email</label>
            <input
                onChange={handleChange}
                value={data.email || ""}
                name="email"
                type="email"
                className="form-control"
                id="email"
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
