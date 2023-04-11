import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import TextField from "../../common/form/textField";
import SomeComponent from "./SomeComponent";
import PropTypes from "prop-types";

const FormComponent = ({ children }) => {
    const [data, setData] = React.useState({});

    React.useEffect(() => {
        console.log(data);
    }, [data]);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    return React.Children.map(children, (child) => {
        const config = {
            ...child.props,
            onChange: handleChange,
            value: data[child.props.name] || ""
        };

        return React.cloneElement(child, config);
    });
};

FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <FormComponent>
                <TextField label="text" name="email" />
                <TextField label="password" name="password" type="password" />
            </FormComponent>

            <SomeComponent />
        </CardWrapper>
    );
};

export default ReactChildrenExample;
