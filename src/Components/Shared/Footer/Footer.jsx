import moment from "moment";
import { Link } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
import "./Footer.css";

const Footer = () => {
    // const { user } = useAuth();
    return (
        <div className="footer-container">
            <div className="container mx-auto row text-white text-start">
                <div className="col-lg-3 col-md-6 col-12">
                    <h5 className="mb-4 text-dark">About Us</h5>
                    <p className="text-color">
                        Bus Ticket Travels offers seamless and convenient transportation
                        solutions, connecting passengers to their destinations with
                        comfortable buses, hassle-free booking, and a user-friendly
                        experience.
                    </p>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-start">
                    <h5 className="mb-4 text-dark">Quick Links</h5>
                    <p>
                        <Link className="text-decoration-none text-color link-text" to="/">
                            Home
                        </Link>
                    </p>
                    <p>
                        <Link
                            className="text-decoration-none text-color link-text"
                            to="/contact"
                        >
                            Contact
                        </Link>
                    </p>
                    <p>
                        <Link
                            className="text-decoration-none text-color link-text"
                            to="/booking"
                        >
                            Booking
                        </Link>
                    </p>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-start">
                    <h5 className="mb-4 text-dark">Contact Info</h5>
                    <p className="text-color link-text">
                        <span>
                            <i className="fas fa-map-marker-alt me-2"></i>
                        </span>{" "}
                        Rajarbagh, Dhaka – 1217
                    </p>
                    <p className="text-color link-text">
                        <span>
                            <i className="fas fa-phone-alt me-2"></i>
                        </span>{" "}
                        +88 02 8315380
                    </p>
                    <p className="text-color link-text">
                        <span>
                            <i className="fas fa-envelope me-2"></i>
                        </span>{" "}
                        uniquetravels@gmail.com
                    </p>
                    <p className="text-color link-text">
                        <span>
                            <i className="fas fa-fax me-2"></i>
                        </span>{" "}
                        Fax : +088-02-8350003
                    </p>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-start">
                    <h5 className="mb-4 text-dark">Business Hour</h5>
                    <div className="d-flex justify-content-lg-between ftr-border text-color">
                        <p>Monday-Friday:</p>
                        <p>9am - 5pm.</p>
                    </div>
                    <div className="d-flex justify-content-lg-between ftr-border text-color">
                        <p>Saturday:</p>
                        <p>10am - 2pm.</p>
                    </div>
                    <div className="d-flex justify-content-lg-between ftr-border text-color">
                        <p>Sunday:</p>
                        <p>Closed.</p>
                    </div>
                </div>
            </div>

            {/* footer bottom  */}

            <div className="footer-bottom py-4">
                <div className="text-center">
                    <p className="text-light">
                        Copyright &copy; {moment().format("YYYY")}. All rights reserved ||
                        Unique Travels
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
