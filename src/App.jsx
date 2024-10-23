import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Components/Context/AuthProvider";
import AddBusBus from "./Components/Dashboard/Admin/AddNewBus/AddNewBus";
import MakeAdmin from "./Components/Dashboard/Admin/MakeAdmin/MakeAdmin";
import ManageBuses from "./Components/Dashboard/Admin/ManageBuses/ManageBuses";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Components/Dashboard/DashboardHome/DashboardHome";
import MyBookings from "./Components/Dashboard/MyBookings/MyBookings";
import BusSeatLayout from "./Components/Home/Booking/BusSeatLayout";
import FinalTicket from "./Components/Home/Booking/FinalTicket";
import PaymentPage from "./Components/Home/Booking/PaymentPage";
import SelectBus from "./Components/Home/Booking/SelectBus";
import Contact from "./Components/Home/Contact/Contact";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Register from "./Components/Login/Register/Register";
import NotFound from "./Components/NoFound/NotFound";
import Footer from "./Components/Shared/Footer/Footer";
import Booking from "./Components/Home/Booking/Booking";
import LogOut from "./Components/LogOut/LogOut";

function App() {
  const [date, setDate] = useState("");
  const [findSelectBus, setFindSelectBus] = useState(null);
  const [confirmDetails, setConfirmDetails] = useState("");
  const [transId, setTransId] = useState("");
  const [running, setRunning] = useState("");
  // console.log(running);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setRunning(data));
  }, []);

  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/selectBus"
              element={
                <SelectBus
                  setFindSelectBus={setFindSelectBus}
                  setDate={setDate}
                  date={date}
                />
              }
            />
            <Route
              path="/select-seat"
              element={
                <BusSeatLayout
                  bus={findSelectBus}
                  setConfirmDetails={setConfirmDetails}
                />
              }
            />
            <Route
              path="/payment"
              element={
                <PaymentPage
                  confirmDetails={confirmDetails}
                  date={date}
                  setTransId={setTransId}
                  transId={transId}
                />
              }
            />
            <Route
              path="/ticket"
              element={
                <FinalTicket
                  confirmDetails={confirmDetails}
                  transId={transId}
                />
              }
            />
            {/* <Route path="/booking" element={<Booking />} /> */}

            <Route
              path="/booking"
              element={
                <SelectBus
                  setFindSelectBus={setFindSelectBus}
                  setDate={setDate}
                  date={date}
                />

              }
            />
            {/* Dashboard nested private route setup */}
            <Route
              path="/dashboard"
              element={
                <Dashboard />
              }
            >
              {/* outlet route component setup */}
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path="/dashboard/addNewBus" element={<AddBusBus />} />
              <Route path="/dashboard/manageBuses" element={<ManageBuses />} />
              <Route path="/dashboard/myBooking" element={<MyBookings />} />
              <Route path="/dashboard/makeAdmin" element={<MakeAdmin />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

