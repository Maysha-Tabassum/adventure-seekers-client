import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link, Outlet } from "react-router-dom";
import leftArrow from "../../../assets/images/icons/double-left-arrow.png";
import rightArrow from "../../../assets/images/icons/double-right-arrow.png";
import useAuth from "../../Hooks/useAuth";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, handleLogOut } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [istoggle, setIsToggle] = useState(false);

  const navigate = useNavigate();
  const handleLogOutButton = () => {
    handleLogOut();
    navigate("/");
  };

  // find admin or not
  useEffect(() => {
    const url = `${import.meta.env.VITE_API_KEY}/users/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user.email]);
  return (
    <div>
      <div
        style={{ backgroundColor: "#86a3c1", margin: "0" }}
        className="w-100 d-flex align-items-center"
      >
        {istoggle == true ? (
          <div
            className="ms-4"
            style={{ cursor: "pointer" }}
            onClick={() => setIsToggle(false)}
          >
            <img height={25} width={25} src={rightArrow} alt="icon" />
          </div>
        ) : (
          <div
            className="ms-4"
            style={{ cursor: "pointer" }}
            onClick={() => setIsToggle(true)}
          >
            <img height={25} src={leftArrow} alt="icon" />
          </div>
        )}
        <h1 className="text-center text-white mx-auto dash-header">
          {isAdmin ? "Admin" : "User"} Dashboard
        </h1>
      </div>

      {/* dashboard side bar menu  */}
      <div style={{ margin: "0" }} className="w-100 row">
        {istoggle == false && (
          <div
            style={{ backgroundColor: "#86a3c1", padding: "0" }}
            className="col-lg-2 border-end col-md-2 col-2 text-start"
          >
            {isAdmin ? (
              <ul className="dashboard-items">
                <li>
                  <Link
                    to="/"
                    className="text-decoration-none text-white ms-lg-4"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-decoration-none text-white ms-lg-4"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/addNewBus"
                    className="text-decoration-none text-white ms-lg-4"
                  >
                    Add Bus
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manageBuses"
                    className="text-decoration-none text-white ms-lg-4"
                  >
                    Manage Busses
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/dashboard/makeAdmin`}
                    className="text-decoration-none text-white ms-lg-4"
                  >
                    Make Admin
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="dashboard-items">
                <li>
                  <Link
                    to="/"
                    className="text-decoration-none text-white ms-lg-4"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-decoration-none text-white ms-lg-4"
                  >
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link
                    to={`/dashboard/myBooking`}
                    className="text-decoration-none text-white ms-lg-4"
                  >
                    My Booking
                  </Link>
                </li>
              </ul>
            )}
          </div>
        )}

        {/* dashboard components show */}
        {istoggle == false ? (
          <div className="col-lg-10 col-md-10 col-10 bg-light px-0 text-center">
            <Outlet />
          </div>
        ) : (
          <div className="col-lg-12 col-md-12 col-12 bg-light px-0 text-center">
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
