import React from 'react';
import Navigation from '../Navigation/Navigation';

const About = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="">
                <div class="bg-fixed " style={{ "background-image": "url(https://howtodoielts.com/wp-content/uploads/2019/05/cars-compressed.jpg)" }}>
                    <h1 className='text-6xl pt-10 ml-28 text-cyan-400' >Talent solutions for your business
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default About;