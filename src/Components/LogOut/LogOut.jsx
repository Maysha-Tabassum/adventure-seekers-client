import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear user authentication token or any user data stored in localStorage
        localStorage.removeItem("token"); // Assuming you store token with key 'token'

        // You can also clear other relevant data here, like user info
        // localStorage.removeItem("userData");

        // Redirect user to login page after logging out
        navigate("/login");
    }, [navigate]);

    return (
        <div className="container">
            <h2 className="text-center mt-5">Logging Out...</h2>
        </div>
    );
};

export default LogOut;
