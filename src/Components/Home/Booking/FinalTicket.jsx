import React from "react";
import bg from "../../../assets/images/bg.jpg";
import Header from "../../Shared/Header/Header/Header";
import "./FinalTicket.css";
const cover = {
  background: `url(${bg})`,
  backgroundSize: "cover",
  minHeight: "100vh",
};

const FinalTicket = ({ confirmDetails, transId }) => {
  return (
    <div>
      <Header />
      <div style={cover}>
        <div className="container py-5">
          <div className="d-flex align-items-center justify-content-center">
            <div className="tpMain ">
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
                      <strong>From: </strong> {confirmDetails?.from}
                    </div>
                    <div>
                      <strong>To: </strong> {confirmDetails?.to}{" "}
                    </div>
                    <h6>Seats Number</h6>
                    <p>
                      Your seats are together{" "}
                      {confirmDetails?.selectedSeats?.map((seat, index) => (
                        <span
                          key={index}
                          className="m-1 border px-2 py-1 rounded bg-secondary text-light fw-bold"
                        >
                          {seat}
                        </span>
                      ))}
                    </p>
                    <p>Luggages: {confirmDetails?.luggageNumber}</p>
                    <p>Snacks: {confirmDetails?.snakes}</p>
                  </section>
                  <section className="ticket__section">
                    <h3>Passenger Names</h3>
                    <div className="text-uppercase">
                      {confirmDetails?.passengerName}
                    </div>
                  </section>
                  <section className="ticket__section">
                    <h3>Payment Method</h3>
                    <p>BKash</p>
                    <div>
                      <b>TansId:</b>{" "}
                      <span className="text-uppercase">{transId}</span>
                    </div>
                  </section>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalTicket;
