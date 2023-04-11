import React from "react";
import PropTypes from "prop-types";
const LogOutButton = ({ onLogOut }) => {
    React.useEffect(() => {
        console.log("render button");
    });
    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            Logout
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEqual(prevProps, nextProps) {
    if (prevProps.onLogOut !== nextProps.onLogOut) {
        return false;
    }

    return true;
}

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = React.useState(false);
    const handleLocal = React.useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                Inition rerender
            </button>
            <MemoizedLogOutButton onLogOut={handleLocal} />
        </>
    );
};

export default MemoWithUseCallbackExample;
