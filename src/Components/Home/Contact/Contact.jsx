// import Footer from '../../Shared/Footer/Footer';
import contact from "../../../assets/images/contact1.jpg";
import Header from "../../Shared/Header/Header/Header";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="" style={{ backgroundColor: "#86b3c2" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 p-4">
              <h2 className="text-light text-center fw-bold">Contact Us</h2>
              <section className="contact1">
                <div className="cont">
                  <div className="headof">
                    <h2>Head Office</h2>
                    <ul>
                      <li>
                        9/2, Outer Circular Road, Momen Bagh, Rajarbagh, Dhaka –
                        1217
                      </li>
                      <li>TEL : +88 02 8315380</li>
                      <li>Email : uniquetravels@gmail.com</li>
                      <li>Fax : +088-02-8350003</li>
                    </ul>
                  </div>
                  <div className="headof">
                    <h2>Call Center</h2>
                    <ul>
                      <li>MOB : 09613316557</li>
                      <li>
                        TEL : +88 02 8331302, +88 02 8331303, +88 028331304
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-sm-6 px-0">
              <div className="img-box">
                <img src={contact} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7304.3819604579685!2d90.41062869264931!3d23.740568114708154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b860eb9940e5%3A0xdc49708065faf82!2sRajarbagh%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1692468950077!5m2!1sen!2sbd"
          width="100%"
          style={{ border: 0, height: "400px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
