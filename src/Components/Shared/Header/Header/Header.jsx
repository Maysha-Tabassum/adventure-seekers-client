import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
    const { user, handleLogOut } = useAuth();
    return (
        <div className="heading-bg-color">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        {/* <img src={logo} className="rounded" height={45} alt="logo" /> */}
                        <h4>Unique Travels</h4>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link fw-bold"
                                    aria-current="page"
                                    to="/login"
                                >
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link fw-bold"
                                    aria-current="page"
                                    to="/booking"
                                >
                                    Booking
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link fw-bold"
                                    aria-current="page"
                                    to="/dashboard"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link fw-bold"
                                    aria-current="page"
                                    to="/contact"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        {/* right side navigation */}
                        <div className="btn-group">
                            <button
                                style={{
                                    backgroundColor: "#86a3c1",
                                    border: "2px solid black",
                                }}
                                type="button"
                                className="dropdown-toggle"
                                data-bs-toggle="dropdown"
                                data-bs-display="static"
                                aria-expanded="false"
                            >
                                Profile
                            </button>
                            <ul className="dropdown-menu dropdown-menu-lg-end heading-bg-color">
                                {user?.email && (
                                    <li>
                                        <Link className="dropdown-item fw-bold" to="/dashboard">
                                            Dashboard
                                        </Link>
                                    </li>
                                )}
                                {!user?.email && (
                                    <li>
                                        <Link className="dropdown-item fw-bold" to="/login">
                                            Sign In
                                        </Link>
                                    </li>
                                )}
                                {user?.email && (
                                    <li>
                                        <button
                                            onClick={handleLogOut}
                                            className="dropdown-item fw-bold"
                                            type="button"
                                        >
                                            Log Out
                                        </button>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
