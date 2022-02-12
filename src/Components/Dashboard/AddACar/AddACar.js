import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddACar = () => {
    const [productInfo, setProductInfo] = useState({});
    const history = useHistory();

    const handleAddProduct = (e) => {
        e.preventDefault();

        fetch("https://salty-brook-20691.herokuapp.com/cars", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(productInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("Added A product successfully");
                    history.push("/dashboard/addACar");
                }
            });
    };

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...productInfo };
        newLoginData[field] = value;
        setProductInfo(newLoginData);
    };
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-medium my-3">Add a new product</h2>
                        <form onSubmit={handleAddProduct}>
                            <p className="text-lg font-bold">Product Name:</p>
                            <input
                                required
                                type="text"
                                name="name"
                                onBlur={handleOnBlur}
                                className="border-gray-400 border-2 p-1 rounded w-full"
                                placeholder="Enter product name"
                            />
                            {/* <p className="text-lg font-bold mt-4">Short Information:</p>
                            <textarea
                                required
                                type="text"
                                name="shortInfo"
                                onBlur={handleOnBlur}
                                className="border-gray-400 border-2 p-1 rounded w-full"
                                placeholder="Write a short information"
                            /> */}
                            <p className="text-lg font-bold mt-4">Description:</p>
                            <textarea
                                required
                                type="text"
                                name="description"
                                onBlur={handleOnBlur}
                                className="border-gray-400 border-2 p-1 rounded w-full"
                                placeholder="Write a description"
                            />
                            <p className="text-lg font-bold mt-4">Body Type</p>
                            <input
                                required
                                type="text"
                                name="BodyType"
                                onBlur={handleOnBlur}
                                className="border-gray-400 border-2 p-1 rounded w-full"
                                placeholder="Enter price"
                            />
                            <p className="text-lg font-bold mt-4">Fule Type:</p>
                            <input
                                required
                                type="text"
                                name="Fuel"
                                onBlur={handleOnBlur}
                                className="border-gray-400 border-2 p-1 rounded w-full"
                                placeholder="Enter price"
                            />
                            <p className="text-lg font-bold mt-4">Top Speed</p>
                            <input
                                required
                                type="text"
                                name="TopSpeed"
                                onBlur={handleOnBlur}
                                className="border-gray-400 border-2 p-1 rounded w-full"
                                placeholder="Enter price"
                            />
                            <p className="text-lg font-bold mt-4">Price:</p>
                            <input
                                required
                                type="text"
                                name="price"
                                onBlur={handleOnBlur}
                                className="border-gray-400 border-2 p-1 rounded w-full"
                                placeholder="Enter price"
                            />
                            <p className="text-lg font-bold mt-4">Image URL:</p>
                            <input
                                required
                                type="text"
                                name="img"
                                onBlur={handleOnBlur}
                                className="border-gray-400 border-2 p-1 rounded w-full"
                                placeholder="Enter image URL"
                            />
                            <input
                                className="font-bold bg-green-300 py-2 px-4 rounded-lg block my-4 cursor-pointer"
                                type="submit"
                                value="Add Product"
                            />
                        </form>
                    </div>
                </div>
                <div className="col-md-6 col-12 ">
                    <img className='w-100' src="https://image.freepik.com/free-vector/city-driver-concept-illustration_114360-1209.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AddACar;