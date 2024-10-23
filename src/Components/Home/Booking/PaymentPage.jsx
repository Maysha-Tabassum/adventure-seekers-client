import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import bg from "../../../assets/images/bg.jpg";
import photo from "../../../assets/images/bkash.png";
import useAuth from "../../Hooks/useAuth";
import Header from "../../Shared/Header/Header/Header";
const cover = {
    background: `url(${bg})`,
    backgroundSize: "cover",
    minHeight: "100vh",
};

const PaymentPage = ({ confirmDetails, date, setTransId, transId }) => {
    const { user } = useAuth();
    const [bkashId, setBkashId] = useState("");
    const navigate = useNavigate();

    const handleFinalConfirm = () => {
        setTransId(bkashId);
        confirmDetails.bkashId = bkashId;
        confirmDetails.email = user?.email;

        // post new booking
        fetch(`${import.meta.env.VITE_API_KEY}/bookings`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(confirmDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    navigate("/ticket");

                    // Send mail using nodemailer
                    fetch(`${import.meta.env.VITE_API_KEY}/send-email`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            to: user?.email,
                            subject: "Unique Travels - Booking Details",
                            passengerName: confirmDetails?.passengerName,
                            selectedSeats: confirmDetails?.selectedSeats,
                            snacks: confirmDetails?.snakes,
                            totalPrice: confirmDetails?.totalPrice,
                            time: confirmDetails?.time,
                        }),
                    })
                        .then((response) => {
                            if (response.ok) {
                                return response.json();
                            } else {
                                throw new Error("Failed to send email");
                            }
                        })
                        .then((emailResponse) => {
                            // console.log(emailResponse);
                            swal({
                                title: "Booking Confirmed !",
                                text: "Check your mail",
                                icon: "success",
                                button: "Close",
                            });
                        })
                        .catch((error) => {
                            console.error(error);
                            swal("Error", "Failed to send email", "error");
                        });
                }
            });
    };
    return (
        <div>
            <Header />
            <div style={cover}>
                <div className="container py-5">
                    <div className="row bg-secondary p-4 rounded">
                        <div className="col-sm-4">
                            <div className="border rounded p-2 text-center text-light">
                                <h3>
                                    <strong>Payment Method</strong>
                                </h3>
                                <h5 className="text-warning fw-bold">
                                    PAY FIRST{" "}
                                    <span className="text-info">
                                        {confirmDetails?.totalPrice}
                                    </span>{" "}
                                    Tk
                                </h5>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <img
                                        src={photo}
                                        width={100}
                                        className="rounded"
                                        alt="b photo"
                                    />
                                    <div className="text-start">
                                        <p>Personal</p>
                                        <p>01625650251</p>
                                    </div>
                                </div>

                                <div className="text-start mt-3">
                                    <label>bKash Transaction Id</label>
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setBkashId(e.target.value);
                                            setTransId(e.target.value);
                                        }}
                                        className="form-control mt-2 text-uppercase"
                                        placeholder="HS23H42JD3H2"
                                    />
                                </div>
                                <div>
                                    <button
                                        disabled={!transId}
                                        className="btn btn-primary mt-4"
                                        onClick={() => handleFinalConfirm()}
                                    >
                                        Confirm Booking
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="border rounded p-2 text-light text-center">
                                <div>
                                    <h3 className="fw-bold">Unique Travels</h3>
                                    <h6 className="text-warning">BOOKING DETAILS</h6>
                                </div>
                                <div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="mb-3">UserName</div>
                                            <hr className="border" />
                                            <div className="mb-3">Date</div>
                                            <div className="mb-3">From</div>
                                            <div className="mb-3">To</div>
                                            <hr className="border" />
                                            <div className="mb-3">Passengers</div>
                                            <hr className="border" />
                                            <div className="mb-3">Ticket Price</div>
                                            <div className="mb-3">Snack</div>
                                            <div className="mb-3">Luggage</div>
                                            <hr className="border" />
                                            <div className="mb-3">Total Sum</div>
                                        </div>
                                        <div className="col-sm-6">
                                            {confirmDetails?.passengerName
                                                ? confirmDetails?.passengerName
                                                : "name"}
                                            <hr className="border" />
                                            <div className="mb-3">
                                                {date ? date : "Date not selected"}
                                            </div>
                                            <div className="mb-3">{confirmDetails?.from}</div>
                                            <div className="mb-3">{confirmDetails?.to}</div>
                                            <hr className="border" />
                                            <div className="mb-3">
                                                {confirmDetails?.selectedSeats?.map((seat, index) => (
                                                    <span
                                                        className="text-uppercase mx-1 border  px-2"
                                                        key={index}
                                                    >
                                                        {seat}
                                                    </span>
                                                ))}
                                            </div>
                                            <hr className="border" />
                                            <div className="mb-3">{confirmDetails?.price} Tk</div>
                                            <div className="mb-3">{confirmDetails?.snakes}</div>
                                            <div className="mb-3">
                                                {confirmDetails?.luggageNumber}
                                            </div>
                                            <hr className="border" />
                                            <div className="mb-3">
                                                {confirmDetails?.totalPrice} Tk
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
