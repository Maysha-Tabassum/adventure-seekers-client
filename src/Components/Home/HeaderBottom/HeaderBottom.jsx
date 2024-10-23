import { Link } from "react-router-dom";
import bg from "../../../assets/images/bg.jpg";
import Header from "../../Shared/Header/Header/Header";
import "./HeaderBottom.css";

const cover = {
    background: `url(${bg})`,
    backgroundSize: "cover",
    height: "100vh",
};

const HeaderBottom = () => {
    return (
        <div>
            <Header />
            <div style={cover}>
                <div className="mytext1 text-center pt-5"> Unique Travels </div>
                <Link to="/login">
                    <button className="getStarted">Get Started!</button>
                </Link>
            </div>
        </div>
    );
};

export default HeaderBottom;
