import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg from "../../../assets/images/bg.jpg";
import Header from "../../Shared/Header/Header/Header";
const cover = {
    background: `url(${bg})`,
    backgroundSize: "cover",
    minHeight: "100vh",
};

const SelectBus = ({ setFindSelectBus, setDate, date }) => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [buses, setBuses] = useState([]);
    const [searchBus, setSearchBus] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_KEY}/buses`)
            .then((res) => res.json())
            .then((data) => setBuses(data));
    }, []);

    let filterToBuses = [];
    let filterFinalBus = [];

    if (from) {
        filterToBuses = buses?.filter(
            (bus) => bus?.startCity?.toLocaleLowerCase() === from?.toLocaleLowerCase()
        );
    }

    if (from && to) {
        filterFinalBus = buses.filter((bus) => {
            return (
                bus.startCity.toLocaleLowerCase() === from.toLocaleLowerCase() &&
                bus.destination.toLocaleLowerCase() === to.toLocaleLowerCase()
            );
        });
    }

    const handleSearchBus = () => {
        setSearchBus(filterFinalBus);
        setFindSelectBus(filterFinalBus[0]);
    };
    return (
        <div>
            <Header />
            <div style={cover}>
                <div className="container py-5">
                    <div className="">
                        <div className="bg-secondary w-100 p-3 rounded">
                            <div className="row">
                                <div className="col-sm-3">
                                    <select
                                        className="form-control"
                                        value={from}
                                        onChange={(e) => setFrom(e.target.value)}
                                    >
                                        <option value="">FROM</option>
                                        {[...new Set(buses.map((bus) => bus.startCity))]?.map(
                                            (startCity, index) => (
                                                <option value={startCity} key={index}>
                                                    {startCity}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>
                                <div className="col-sm-3">
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
                                <div className="col-sm-3">
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </div>
                                <div className="col-sm-3">
                                    <button
                                        className="btn btn-primary w-100"
                                        onClick={() => handleSearchBus()}
                                    >
                                        Search Bus
                                    </button>
                                </div>
                            </div>

                            {/* show buses  */}
                            {searchBus &&
                                searchBus?.map((bus, index) => (
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
                                            <div className="col-sm-2">
                                                <div>
                                                    <strong>Time:</strong> 7:30 AM
                                                </div>
                                                <Link to="/select-seat">
                                                    <button
                                                        disabled={!from || !to || !date}
                                                        className="btn btn-primary w-100 py-1 mt-2"
                                                    >
                                                        Book Now
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectBus;
