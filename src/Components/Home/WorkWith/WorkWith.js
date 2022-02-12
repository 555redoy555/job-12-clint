import React from 'react';
import { Container } from 'react-bootstrap';

const WorkWith = () => {
    return (
        <div >
            <div class=" bg-fixed  bg-cover backdrop-contrast-50  " style={{ "background-image": "url(https://i.pinimg.com/originals/65/3a/b9/653ab9dd1ef121f163c484d03322f1a9.jpg)" }}>
                <Container className='backdrop-contrast-50'>
                    <h1 className='text-2xl text-amber-500 mx-28 pt-10 pb-4' >
                        A partner who's with you all the way
                    </h1>
                    <h1 className='text-4xl text-white mx-28 font-bold'>
                        Areas of Expertise
                    </h1>

                    <div className="grid grid-cols-3 gap-4 mx-28 mt-20  ">
                        <div className=" bg-slate-50 rounded-xl">
                            <div className="bg-slate-50 text-2xl font-bold text-blue-900  hover:text-orange-600">
                                <h1 className='mt-2 ms-4'>
                                    Technology
                                </h1>
                            </div>
                            <div className="mt-10 m-4 mb-3 text-slate-400 font-sans">
                                Vaco delivers the strategic guidance and top tech talent that companies need. From evaluation to implementation, we offer solutions that work.
                            </div>
                        </div>
                        <div className=" bg-slate-50 rounded-xl">
                            <div className=" g-3  bg-slate-50 text-2xl font-bold text-blue-900  hover:text-orange-600">
                                <h1 className='mt-2 ms-4'>
                                    Accounting & Finance
                                </h1>
                            </div>
                            <div className="mt-10 m-4 mb-3 text-slate-400 font-sans">
                                Our accounting and finance solutions bring the expertise you need, from strategic project advisory to proven direct hire candidates.
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-xl">
                            <div className=" g-3  bg-slate-50 text-2xl font-bold text-blue-900  hover:text-orange-600">
                                <h1 className='mt-2 m-4'>
                                    Operations
                                </h1>
                            </div>
                            <div className="mt-10 ms-4 mb-3 text-slate-400 font-sans">
                                Operations icon
                                Operations
                                Knowing the best and brightest is our specialty. Vaco’s experts have the strategic staffing and direct hire solutions you need.
                            </div>
                        </div>

                    </div>
                    <h1 className='text-4xl text-white pt-20 mx-28 font-bold'>
                        How We Deliver
                    </h1>
                    <div className="grid grid-cols-4 gap-4 mx-28 mt-20 pb-20  ">
                        <div className=" bg-slate-50 rounded-xl">
                            <div className="bg-slate-50 text-2xl font-bold text-blue-900  hover:text-orange-600">
                                <h1 className='mt-2 ms-4'>
                                    Consulting
                                </h1>
                            </div>
                            <div className="mt-10 m-4 mb-3 text-slate-400 font-sans">
                                For complex business challenges and ambitious goals.
                            </div>
                        </div>
                        <div className=" bg-slate-50 rounded-xl">
                            <div className=" g-3  bg-slate-50 text-2xl font-bold text-blue-900  hover:text-orange-600">
                                <h1 className='mt-2 ms-4'>
                                    Direct Hire
                                </h1>
                            </div>
                            <div className="mt-10 m-4 mb-3 text-slate-400 font-sans">
                                From at-a-moment’s-notice leaders to long-term visionaries.
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-xl">
                            <div className=" g-3  bg-slate-50 text-2xl font-bold text-blue-900  hover:text-orange-600">
                                <h1 className='mt-2 m-4'>
                                    Managed Services
                                </h1>
                            </div>
                            <div className="mt-10 ms-4 mb-3 text-slate-400 font-sans">
                                Because creating capacity internally creates more value externally.
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-xl">
                            <div className=" g-3  bg-slate-50 text-2xl font-bold text-blue-900  hover:text-orange-600">
                                <h1 className='mt-2 m-4'>
                                    Strategic Staffing
                                </h1>
                            </div>
                            <div className="mt-10 ms-4 mb-3 text-slate-400 font-sans">
                                For finding the right talent at the right time.
                            </div>
                        </div>

                    </div>
                </Container>
            </div>
        </div>
    );
};

export default WorkWith;