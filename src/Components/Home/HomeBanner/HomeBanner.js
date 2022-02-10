import React from 'react';
import allVideo from './Audi RS e-tron GT_ Ideas start the future.mp4';
import './HomeBanner.css';
const HomeBanner = () => {


    return (
        <div>
            <video autoPlay muted loop id="myVideo">
                <source
                    src={allVideo}
                    type="video/mp4"
                />
                Your browser does not support HTML5 video.
            </video>
            <div class="content">
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore latine molestiae, ad mutat oblique delicatissimi pro.</p>

            </div>
        </div>
    );

};

export default HomeBanner;