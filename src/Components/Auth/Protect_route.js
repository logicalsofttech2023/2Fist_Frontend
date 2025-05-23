import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protect_route = (props) => {
    let { ComponentName } = props;
    let navigate = useNavigate();

    let login_status = localStorage.getItem("loginstatus");
    useEffect(() => {
        // console.log("protect run")
        const intervalId = setInterval(() => {
            if (!login_status) {
                navigate("/login");
            }
        }, 50);
        return () => clearInterval(intervalId);
    }, [login_status]);

    return <ComponentName />
};
export default Protect_route;
