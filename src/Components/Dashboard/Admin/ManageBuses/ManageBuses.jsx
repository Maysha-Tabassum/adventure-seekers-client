import { useForm } from "react-hook-form";
import swal from "sweetalert";
import bg from "../../../../assets/images/login/loginBg.jpg";

// background image
const formBg = {
    background: `url(${bg})`,
    backgroundColor: "rgba(0, 0, 0, 0.60)",
    backgroundPosition: "center top",
    backgroundBlendMode: "darken, luminosity",
};
const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        data.role = "admin";
        fetch(`${import.meta.env.VITE_API_KEY}/makeAdmin`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    reset();
                    swal({
                        title: "Greate!",
                        text: "Successfully Make A New Admin!",
                        icon: "success",
                        button: "Close",
                    });
                }
            });
    };
    return (
        <div style={{ width: "100%", minHeight: "100vh" }}>
            <div style={formBg} className="mx-auto form-container my-4">
                <h2 className="text-warning">Make A New Admin</h2>
                <hr className="border" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="form-control my-3 bg-light"
                        {...register("email")}
                        required
                        placeholder="Enter Email"
                    />
                    <button
                        className="btn btn-dark w-100 border border-danger"
                        type="submit"
                    >
                        <span>
                            <i className="fas fa-user-plus text-warning"></i>
                        </span>{" "}
                        Make Admin
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;
