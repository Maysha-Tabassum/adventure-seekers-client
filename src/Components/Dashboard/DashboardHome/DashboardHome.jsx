import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const DashboardHome = () => {
    const { user } = useAuth();
    const [buses, setBuses] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [users, setUsers] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_KEY}/buses`)
            .then((res) => res.json())
            .then((data) => setBuses(data));
    }, []);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_KEY}/bookings`)
            .then((res) => res.json())
            .then((data) => setBookings(data));
    }, []);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_KEY}/users`)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    // find admin or not
    useEffect(() => {
        const url = `${import.meta.env.VITE_API_KEY}/users/${user.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (data?.role) {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, [user.email]);

    return (
        <div>
            <div className="container py-4">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-12">
                        <div className="p-4 rounded box-shadow">
                            <div className="pt-2">
                                {user.photoURL ? (
                                    <img
                                        width="150px"
                                        height="150px"
                                        className="rounded-circle profile-pic"
                                        src={user.photoURL}
                                        alt="user"
                                    />
                                ) : (
                                    <img
                                        width="150px"
                                        height="150px"
                                        className="rounded-circle profile-pic"
                                        src={`https://i.ibb.co/jwLpZMr/user-profile.png`}
                                        alt="user"
                                    />
                                )}
                                <div className="mt-4">
                                    <h3 className="fw-bold text-success text-capitalize">
                                        {user.displayName}
                                    </h3>
                                    <div className="text-capitalize fw-bold">
                                        Role: {isAdmin ? <span>Admin</span> : <span>User</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-7 col-12">
                        <div>
                            {isAdmin && (
                                <div className="row g-3">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div
                                            style={{ backgroundColor: "#321fdb" }}
                                            className="border px-2 rounded"
                                        >
                                            <div className="">
                                                <p style={{ fontSize: "40px" }} className=" text-white">
                                                    {buses.length}
                                                </p>
                                            </div>
                                            <p className="text-light">Total Buses</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div
                                            style={{ backgroundColor: "#e55353" }}
                                            className="border px-2 rounded"
                                        >
                                            <div className="">
                                                <p style={{ fontSize: "40px" }} className=" text-white">
                                                    {bookings.length}
                                                </p>
                                            </div>
                                            <p className="text-light">Total Booking</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div
                                            style={{ backgroundColor: "#5F264A" }}
                                            className="border px-2 rounded"
                                        >
                                            <div className="">
                                                <p style={{ fontSize: "40px" }} className=" text-white">
                                                    {users.length}
                                                </p>
                                            </div>
                                            <p className="text-light">Total Users</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
