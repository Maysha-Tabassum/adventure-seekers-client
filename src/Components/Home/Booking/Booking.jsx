import { useEffect, useState } from "react";
import bg from "../../../assets/images/bg.jpg";
import Header from "../../Shared/Header/Header/Header";
import BusSeatLayout from "./BusSeatLayout";
import FinalTicket from "./FinalTicket";
import PaymentPage from "./PaymentPage";

const cover = {
    background: `url(${bg})`,
    backgroundSize: "cover",
    minHeight: "100vh",
};

const Booking = () => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [buses, setBuses] = useState([]);
    const [findSelectBus, setFindSelectBus] = useState(null);
    const [confirmDetails, setConfirmDetails] = useState("");
    const [transId, setTransId] = useState("");

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_KEY}/buses`)
            .then((res) => res.json())
            .then((data) => setBuses(data));
    }, []);

    // filter to buses
    let filterToBuses = [];
    if (from) {
        filterToBuses = buses?.filter(
            (bus) => bus?.startCity?.toLocaleLowerCase() === from?.toLocaleLowerCase()
        );
    }

    const handleSelectBus = (busId) => {
        const bookBus = buses?.find((bus) => bus?._id === busId);
        setFindSelectBus(bookBus);
        setTo(bookBus?.destination);
    };
    return (
        <div>
            <Header />
            <div style={cover}>
                <div className="container py-5">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link py-1 active"
                                id="pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-home"
                                type="button"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                            >
                                Select Bus
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link py-1"
                                id="pills-selectSeats-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-selectSeats"
                                type="button"
                                role="tab"
                                disabled={findSelectBus === null}
                                aria-controls="pills-selectSeats"
                                aria-selected="false"
                            >
                                Select Seat
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link py-1"
                                id="pills-payment-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-payment"
                                type="button"
                                disabled={!confirmDetails}
                                role="tab"
                                aria-controls="pills-payment"
                                aria-selected="false"
                            >
                                Payment
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link py-1"
                                id="pills-ticket-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-ticket"
                                type="button"
                                disabled={!transId}
                                role="tab"
                                aria-controls="pills-ticket"
                                aria-selected="false"
                            >
                                Ticket
                            </button>
                        </li>
                    </ul>

                    {/* nav tab content  */}
                    <div className="tab-content" id="pills-tabContent">
                        <div
                            className="tab-pane fade show active"
                            id="pills-home"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                        >
                            <div className="">
                                <div className="bg-secondary w-100 p-3 rounded">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <select
                                                className="form-control"
                                                value={from}
                                                onChange={(e) => setFrom(e.target.value)}
                                            >
                                                <option value="">FROM</option>
                                                {buses?.map((bus, index) => (
                                                    <option value={bus?.startCity} key={index}>
                                                        {bus?.startCity}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-sm-4">
                                            <select
                                                className="form-control"
                                                value={to}
                                                onChange={(e) => setTo(e.target.value)}
                                            >
                                                <option value="">TO</option>
                                                {filterToBuses?.map((bus, index) => (
                                                    <option value={bus?.destination} key={index}>
                                                        {bus?.destination}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-sm-4">
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    {/* show buses  */}
                                    {filterToBuses &&
                                        filterToBuses?.map((bus, index) => (
                                            <div
                                                className="mt-4 container bg-light rounded p-2 mb-1"
                                                key={index}
                                            >
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h5>Brand</h5>
                                                        <p>{bus?.CompanyName}</p>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <h5>From</h5>
                                                        <p>{bus?.startCity}</p>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <h5>To</h5>
                                                        <p>{bus?.destination}</p>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <h5>
                                                            Price <small>(per seat)</small>
                                                        </h5>
                                                        <p>{bus?.pricePerSeat} Tk</p>
                                                    </div>
                                                    <div className="col-sm-2 d-flex align-items-center">
                                                        <button
                                                            disabled={!from || !to || !date}
                                                            className="btn btn-primary w-100"
                                                            onClick={() => handleSelectBus(bus?._id)}
                                                        >
                                                            Book Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-selectSeats"
                            role="tabpanel"
                            aria-labelledby="pills-selectSeats-tab"
                        >
                            <div className="bg-secondary w-100 p-3 rounded">
                                <BusSeatLayout
                                    bus={findSelectBus}
                                    setConfirmDetails={setConfirmDetails}
                                />
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-payment"
                            role="tabpanel"
                            aria-labelledby="pills-payment-tab"
                        >
                            <div className="bg-secondary w-100 p-3 rounded">
                                <PaymentPage
                                    confirmDetails={confirmDetails}
                                    date={date}
                                    setTransId={setTransId}
                                />
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-ticket"
                            role="tabpanel"
                            aria-labelledby="pills-ticket-tab"
                        >
                            <div className="p-3 rounded">
                                <FinalTicket confirmDetails={confirmDetails} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
