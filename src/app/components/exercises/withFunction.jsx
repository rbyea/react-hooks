import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = !!localStorage.getItem("auth");

    const onLogOut = () => {
        console.log("onLogOut");
        localStorage.removeItem("auth");
    };

    const onLogin = () => {
        localStorage.setItem("auth", "token");
        console.log("onLogin");
    };
    return (
        <CardWrapper>
            <Component
                {...props}
                onLogOut={onLogOut}
                isAuth={isAuth}
                onLogin={onLogin}
            />
        </CardWrapper>
    );
};

export default withFunctions;
