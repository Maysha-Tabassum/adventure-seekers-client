import axios from "axios";
import { useState } from "react";
import Dropzone from "react-dropzone";

const ImageUploader = () => {
    const [imageUrl, setImageUrl] = useState("");
    console.log(imageUrl);

    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append("key", "73a19b2742e85486f987144c3c6fb939");
        formData.append("image", file);

        try {
            const response = await axios.post(
                "https://api.imgbb.com/1/upload",
                formData
            );
            console.log(response.data);
            setImageUrl(response.data.data.url);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div>
                {imageUrl && <img src={imageUrl} width={100} alt="Uploaded Image" />}
                <div
                    className="border mx-auto my-2 p-2"
                    style={{ width: "200px", cursor: "pointer" }}
                >
                    <Dropzone onDrop={(acceptedFiles) => uploadImage(acceptedFiles[0])}>
                        {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <span>
                                    <b>Upload Photo</b>{" "}
                                    <i className="fas fa-camera ms-2 fs-5 text-info"></i>
                                </span>
                            </div>
                        )}
                    </Dropzone>
                </div>
            </div>
        </div>
    );
};

export default ImageUploader;
