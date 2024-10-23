
const Busses = () => {
    return (
        <div>
            <div className="card mt-5 buslist">
                <div className="row ml-3">
                    <div className="col-6 col-sm-3 mt-2 font-weight-bold ">Brand</div>
                    <div className="col-6 col-sm-3 mt-2 font-weight-bold ">From</div>
                    <div className="col-6 col-sm-3 mt-2 font-weight-bold ">To</div>
                    <div className="col-6 col-sm-3 mt-2 font-weight-bold ">Price</div>

                    <div className="w-100 d-none d-md-block"></div>

                    <div className="col-6 col-sm-3 mb-4">bus.CompanyName</div>
                    <div className="col-6 col-sm-3 mb-4">bus.startCity</div>
                    <div className="col-6 col-sm-3 mb-4">bus.destination</div>
                    <div className="col-6 col-sm-3 mb-4">bus.pricePerSeat</div>
                    <div className="col-6 col-sm-4 mb-2 ml-0">
                        <button
                            className="btn btn-primary btn-md"
                        // onClick={(bId) => {
                        //   handleSubmit(bus._id);
                        // }}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Busses;
