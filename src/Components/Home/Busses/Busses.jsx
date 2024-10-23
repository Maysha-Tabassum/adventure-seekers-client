import React from "react";
import { useNavigate } from "react-router-dom";

const Busses = ({ buses }) => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleSubmit = (busId) => {
        // Navigate to the booking page with the selected bus ID
        navigate(`/booking/${busId}`);
    };

    return (
        <div>
            <div className="card mt-5 buslist">
                <div className="row ml-3">
                    {/* Header Row */}
                    <div className="col-6 col-sm-3 mt-2 font-weight-bold">Brand</div>
                    <div className="col-6 col-sm-3 mt-2 font-weight-bold">From</div>
                    <div className="col-6 col-sm-3 mt-2 font-weight-bold">To</div>
                    <div className="col-6 col-sm-3 mt-2 font-weight-bold">Price</div>

                    <div className="w-100 d-none d-md-block"></div>

                    {/* Map through the buses and display each one */}
                    {buses.map((bus, index) => (
                        <React.Fragment key={bus._id}>
                            <div className="col-6 col-sm-3 mb-4">{bus.CompanyName}</div>
                            <div className="col-6 col-sm-3 mb-4">{bus.startCity}</div>
                            <div className="col-6 col-sm-3 mb-4">{bus.destination}</div>
                            <div className="col-6 col-sm-3 mb-4">{bus.pricePerSeat} Tk</div>
                            <div className="col-6 col-sm-4 mb-2 ml-0">
                                <button
                                    className="btn btn-primary btn-md"
                                    onClick={() => handleSubmit(bus._id)} // Use the bus ID for booking
                                >
                                    Book Now
                                </button>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Busses;
