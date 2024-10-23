import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../../assets/images/bg.jpg";
import Header from "../../Shared/Header/Header/Header";
import "./BusSeatLayout.css"; // Import your CSS file for styling
const cover = {
    background: `url(${bg})`,
    backgroundSize: "cover",
    minHeight: "100vh",
};
const BusSeatLayout = ({ bus, setConfirmDetails }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [luggageNumber, setLuggageNumber] = useState([]);
    const [snakes, setSnakes] = useState("");
    const [passengerName, setPassengerName] = useState("");
    const totalSeats = bus?.totalSeats;
    const bookedSeats = bus?.bookedSeats ? bus?.bookedSeats : ["2a", "1c"];
    const seatsPerRow = 4;
    const numRows = Math.ceil(totalSeats / seatsPerRow);
    const navigate = useNavigate();
    // console.log(luggageNumber);

    const renderSeats = () => {
        const seats = [];
        let seatNumber = 1;

        for (let row = 1; row <= numRows; row++) {
            const seatsInCurrentRow = row === 1 ? 2 : seatsPerRow;
            const rowSeats = [];

            for (let col = 1; col <= seatsInCurrentRow; col++) {
                if (seatNumber > totalSeats) {
                    break; // Stop if all seats are rendered
                }

                const seatLabel = `${row}${String.fromCharCode(96 + col)}`;
                const isBooked = bookedSeats.includes(seatLabel);
                const isSelected = selectedSeats.includes(seatLabel);

                rowSeats.push(
                    <div
                        key={seatLabel}
                        className={`seat ${isBooked ? "booked" : ""} ${isSelected ? "selected" : ""
                            }`}
                        onClick={() => !isBooked && handleSeatClick(seatLabel)}
                    >
                        {seatLabel}
                    </div>
                );

                seatNumber++;
            }

            seats.push(
                <div key={row} className="seat-row">
                    {rowSeats}
                </div>
            );
        }

        return seats;
    };

    const handleSeatClick = (seatLabel) => {
        if (selectedSeats.includes(seatLabel)) {
            setSelectedSeats(
                selectedSeats.filter((selectedSeat) => selectedSeat !== seatLabel)
            );
        } else {
            setSelectedSeats([...selectedSeats, seatLabel]);
        }
    };

    const handleConfirmDetails = (e) => {
        e.preventDefault();
        let luggagePrice = 0;
        let snakesPrice = 0;

        if (selectedSeats?.length * 2 < luggageNumber) {
            luggagePrice = (luggageNumber - selectedSeats?.length * 2) * 50;
        }
        if (snakes === "Yes") {
            snakesPrice = selectedSeats?.length * 70;
        }

        let confirmDetails = {
            luggageNumber,
            snakes,
            passengerName,
            selectedSeats,
            time: "7:30 AM",
            from: bus?.startCity,
            to: bus?.destination,
            busId: bus?._id,
            price: bus?.pricePerSeat,
            totalPrice:
                bus?.pricePerSeat * selectedSeats?.length + luggagePrice + snakesPrice,
        };

        setConfirmDetails(confirmDetails);
        navigate("/payment");
    };

    return (
        <div>
            <Header />
            <div style={cover}>
                <div className="container py-5">
                    <div className="row bg-secondary p-4 rounded">
                        <div className="col-sm-4">
                            <div className="bus-layout">{renderSeats()}</div>
                        </div>
                        <div className="col-sm-8 text-light">
                            {selectedSeats?.length && (
                                <div className="border p-3 rounded">
                                    <form className="form">
                                        <div className="text-center">
                                            <h4 className="fw-bold text-light">Booked Seats</h4>
                                            <div className="fw-bold d-flex justify-content-center">
                                                {selectedSeats?.map((seat, index) => (
                                                    <span className="seat bg-primary" key={index}>
                                                        {seat}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <label>Enter Name :</label>
                                        <input
                                            className="form-control mb-2"
                                            onChange={(e) => setPassengerName(e.target.value)}
                                            type="text"
                                            name="passenger-name"
                                            placeholder="Enter Name"
                                            autoComplete="off"
                                        />

                                        <div className="my-3">
                                            <label>Luggage No :</label>
                                            <input
                                                className="form-control seatInp"
                                                type="number"
                                                name="passenger-name"
                                                placeholder="Luggage No"
                                                autoComplete="off"
                                                onChange={(e) => setLuggageNumber(e.target.value)}
                                            />
                                            <p className="my-3">
                                                Maximum limit is 1 person with 2 luggage. If you have
                                                more than 2 luggage, you will need to pay 50tk per
                                                luggage.
                                            </p>
                                        </div>

                                        <div className="my-3">
                                            <label>Snacks <small>(Per snack 70 tk)</small></label> <br />
                                            <select
                                                className="form-control seatInp"
                                                onChange={(e) => setSnakes(e.target.value)}
                                            >
                                                <option>Option</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>

                                        <button
                                            onClick={(e) => handleConfirmDetails(e)}
                                            className="btn btn-primary mb-2 "
                                        >
                                            Confirm Details
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusSeatLayout;
