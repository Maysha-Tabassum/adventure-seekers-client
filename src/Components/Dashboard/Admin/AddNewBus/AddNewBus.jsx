import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddBusBus = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        // Here you can submit the data to your backend
        data.bookedSeats = [];
        data.availableSeats = data.totalSeats;
        console.log(data);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_KEY}/buses`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                swal("Success", "Add New Bus!", "success");
                reset();
            } else {
                console.error("Error adding bus");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <div>
            <div className="container my-4">
                <div className="container border rounded p-3 text-start">
                    <h2 className="text-center">Add New Bus</h2>
                    <hr className="border border-dark" />
                    <form onSubmit={handleSubmit(onSubmit, { required: true })}>
                        <div className="mb-3">
                            <label htmlFor="CompanyName" className="form-label">
                                Company Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="CompanyName"
                                {...register("CompanyName", { required: true })}
                            />
                            {errors?.CompanyName && (
                                <div className="invalid-feedback">This field this required</div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="busType" className="form-label">
                                Bus Type
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="busType"
                                {...register("busType", { required: true })}
                            />
                            {errors?.busType && (
                                <div className="invalid-feedback">This field this required</div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="busNumber" className="form-label">
                                Bus Number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="busNumber"
                                {...register("busNumber", { required: true })}
                            />
                            {errors?.busNumber && (
                                <div className="invalid-feedback">This field this required</div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="startCity" className="form-label">
                                Start City
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="startCity"
                                {...register("startCity", { required: true })}
                            />
                            {errors?.startCity && (
                                <div className="invalid-feedback">This field this required</div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="destination" className="form-label">
                                Destination
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="destination"
                                {...register("destination", { required: true })}
                            />
                            {errors?.destination && (
                                <div className="invalid-feedback">This field this required</div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="totalSeats" className="form-label">
                                Total Seats
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="totalSeats"
                                {...register("totalSeats", { required: true })}
                            />
                            {errors?.totalSeats && (
                                <div className="invalid-feedback">This field this required</div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pricePerSeat" className="form-label">
                                Price per Seat
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="pricePerSeat"
                                {...register("pricePerSeat", { required: true })}
                            />
                            {errors?.pricePerSeat && (
                                <div className="invalid-feedback">This field this required</div>
                            )}
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">
                                Add New Bus
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBusBus;
