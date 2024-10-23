import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();
    console.log(bookings);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_KEY}/bookings/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setBookings(data));
    }, [user?.email]);

    return (
        <div>
            <div className="container p-3 text-start">
                <div className="row">
                    {bookings?.map((booking, index) => (
                        <div className="col-sm-6" key={index}>
                            <div>
                                <div className="tpMain mb-4">
                                    <article className="ticket">
                                        <header className="ticket__wrapper">
                                            <div className="ticket__header"> 🎟 UNIQUE TRAVELS</div>
                                        </header>
                                        <div className="ticket__divider">
                                            <div className="ticket__notch"></div>
                                            <div className="ticket__notch ticket__notch--right"></div>
                                        </div>
                                        <div className="ticket__body">
                                            <section className="ticket__section">
                                                <div>
                                                    <strong>Time: </strong> {booking?.time}
                                                </div>
                                                <div>
                                                    <strong>From: </strong> {booking?.from}
                                                </div>
                                                <div>
                                                    <strong>To: </strong> {booking?.to}{" "}
                                                </div>
                                                <h6>Seats Number</h6>
                                                <p>
                                                    Your seats are together{" "}
                                                    {booking?.selectedSeats?.map((seat, index) => (
                                                        <span
                                                            key={index}
                                                            className="m-1 border px-2 py-1 rounded bg-secondary text-light fw-bold"
                                                        >
                                                            {seat}
                                                        </span>
                                                    ))}
                                                </p>
                                                <p>Luggages: {booking?.luggageNumber}</p>
                                                <p>Snacks: {booking?.snakes}</p>
                                            </section>
                                            <section className="ticket__section">
                                                <h3>Passenger Names</h3>
                                                <div className="text-uppercase">
                                                    {booking?.passengerName}
                                                </div>
                                            </section>
                                            <section className="ticket__section">
                                                <h3>Payment Method</h3>
                                                <p>Trans Id: {booking?.bkashId}</p>
                                                <p>BKash</p>
                                            </section>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyBookings;
