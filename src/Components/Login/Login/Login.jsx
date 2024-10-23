import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import bg from "../../../assets/images/bg.jpg";
import useAuth from "../../Hooks/useAuth";
import Header from "../../Shared/Header/Header/Header";
import "./Login.css";

const cover = {
  background: `url(${bg})`,
  backgroundSize: "cover",
  minHeight: "100vh",
};
const Login = () => {
  const { handleGoogleLogin, handleUserLogin } = useAuth();

  // redirect process setting
  const location = useLocation();
  const navigate = useNavigate();

  // login with google provider
  const handleLogInWithGoogle = () => {
    handleGoogleLogin(location, navigate);
  };

  // handle login using login form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;

    handleUserLogin(email, password, location, navigate);
  };

  return (
    <div>
      <Header />
      <div style={cover} className="py-4 text-center">
        <div className="mx-auto form-container my-3">
          <h2 className="text-white">Sign In</h2>
          <p className="text-white">
            Please fill in this form to create an account!
          </p>
          <hr className="border" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control my-3"
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-warning d-block text-start my-1">
                This field is required
              </span>
            )}
            <input
              className="form-control my-3"
              type="password"
              {...register("password", { required: true })}
              placeholder="password"
            />
            {errors.password && (
              <span className="text-warning d-block text-start my-1">
                This field is required
              </span>
            )}
            <button className="my-2 submit-btn" type="submit">
              LOG IN{" "}
              <span>
                <i className="fas fa-sign-in-alt"></i>
              </span>
            </button>
          </form>
          <div>
            <p className="text-white">
              Donot have an account?{" "}
              <Link
                to="/register"
                className="text-decoration-none text-warning"
              >
                Sign Up
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

export default Login;
