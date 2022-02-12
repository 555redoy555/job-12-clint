import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="bg-slate-900 py-5 px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    <div>
                        <h3 className="font-bold text-white text-xl mb-2">Our address</h3>
                        <p className="font-medium text-white">
                            2546 Wexford Way, Branchville, South Carolina, USA
                        </p>
                        <p className="mb-0 text-white">Saturday - Thursday: 11 AM – 07 PM</p>
                        <p className='text-white' >Friday and Holiday: 10 AM – 08 PM</p>
                        <p className="mb-0 text-whites">
                            <span className="font-bold text-white">Phone:</span>
                            <samp className='text-white' >01710101010,
                                01710101010</samp>
                        </p>
                        <p>
                            <span className="font-bold text-white">Email:</span>
                            <span className='text-white'>Cars@gmail.com</span>
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-xl mb-2">Payment methods</h3>
                        <div className="text-center  flex flex-wrap gap-3">
                            <img
                                className="rounded-lg"
                                src="https://i.ibb.co/NFqvDxW/mastercard.png"
                                alt=""
                            />
                            <img
                                className="rounded-lg"
                                src="https://i.ibb.co/dGMthDc/paypal.png"
                                alt=""
                            />
                            <img
                                className="rounded-lg"
                                src="https://i.ibb.co/L50S6bP/visa.png"
                                alt=""
                            />
                            <img
                                className="rounded-lg"
                                src="https://i.ibb.co/qNyHV53/ipay.png"
                                alt=""
                            />
                            <img
                                className="rounded-lg"
                                src="https://i.ibb.co/BggzDdY/gpay.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold text-white  text-xl mb-2">Contact us:</h5>
                        <input
                            className="my-2 p-1 w-3/4 border-2 border-gray-500 rounded"
                            type="email"
                            placeholder="Enter your email"
                        />
                        <br />
                        <input
                            className="my-2 p-1 w-3/4 border-2 border-gray-500 rounded"
                            type="text"
                            placeholder="Enter your question or suggestion"
                        />
                        <br />
                        <button className="bg-green-500 text-white my-2 py-1 px-3 rounded-lg">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;