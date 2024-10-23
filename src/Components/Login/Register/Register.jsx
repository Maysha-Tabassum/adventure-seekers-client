import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import bg from "../../../assets/images/bg.jpg";
import useAuth from "../../Hooks/useAuth";
import Header from "../../Shared/Header/Header/Header";

const cover = {
    background: `url(${bg})`,
    backgroundSize: "cover",
    minHeight: "100vh",
};

const Register = () => {
    const { handleCreateNewUser, handleGoogleLogin, error } = useAuth();

    // redirect system setting
    const location = useLocation();
    const navigate = useNavigate();

    // login with google provider
    const handleLogInWithGoogle = () => {
        handleGoogleLogin(location, navigate);
    };

    // handle register using register form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        handleRegisterSubmit(data);
    };

    //handle register function
    const handleRegisterSubmit = (data) => {
        const { name, email, password, password1 } = data;
        if (password !== password1) {
            swal({
                title: "Ohhh!",
                text: "Don't match password!",
                icon: "warning",
                button: "Try again",
            });
            return;
        }
        handleCreateNewUser(email, password, name, navigate);
    };

    return (
        <div>
            <Header />
            <div style={cover} className="py-4 bg-color text-center">
                <div className="mx-auto form-container">
                    <h2 className=" text-white">Sign Up</h2>
                    <p className=" text-white">
                        Please fill in this form to create an account!
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="form-control my-3"
                            type="name"
                            {...register("name")}
                            placeholder="Your Name"
                            required
                        />
                        <input
                            className="form-control my-3"
                            type="email"
                            {...register("email")}
                            placeholder="Your Email"
                            required
                        />
                        <input
                            className="form-control my-3"
                            type="password"
                            {...register("password", { required: true })}
                            placeholder="password"
                        />
                        <input
                            className="form-control my-3"
                            type="password"
                            {...register("password1", { required: true })}
                            placeholder="Re Enter password"
                        />
                        {errors.password && (
                            <p className="text-danger text-start my-1">
                                <span>This field is required</span>{" "}
                            </p>
                        )}

                        <button className="my-2 submit-btn" type="submit">
                            REGISTER{" "}
                            <span>
                                <i className="fas fa-sign-in-alt"></i>
                            </span>
                        </button>
                    </form>
                    <div>
                        <p className="text-white">
                            Dont have an account?{" "}
                            <Link to="/login" className="text-decoration-none text-warning">
                                Log In
                            </Link>
                        </p>
                        <div className="d-flex justify-content-around align-items-center mt-4">
                            <button
                                onClick={handleLogInWithGoogle}
                                className="login-with-btn"
                            >
                                <span>
                                    <i className="fab fa-google text-primary me-2"></i>
                                </span>{" "}
                                Login With Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
