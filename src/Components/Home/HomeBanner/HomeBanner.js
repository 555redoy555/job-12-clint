import React from 'react';
import allVideo from './Audi RS e-tron GT_ Ideas start the future.mp4';
import './HomeBanner.css';
const HomeBanner = () => {


    return (
        <div>
            {/* <video autoPlay muted loop id="myVideo">
                <source
                    src={allVideo}
                    type="video/mp4"
                />
                Your browser does not support HTML5 video.
            </video> */}

            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img style={{ "height": "700px", }} className='img w-100' src="https://wallpaperaccess.com/full/124005.jpg" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            {/* <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p> */}
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img style={{ "height": "700px", }} className='img w-100' src="https://cdn.wallpapersafari.com/54/80/Xj7EHx.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            {/* <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p> */}
                        </div>
                    </div>
                    <div style={{ "height": "700px", }} className='img w-100' class="carousel-item">
                        <img src="https://www.desktopbackground.org/download/o/2010/12/03/120513_car-wallpapers-full-screen-hd-cars-wallpapers-hd_1280x800_h.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            {/* <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p> */}
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div>

            </div>

        </div>
    );

};

export default HomeBanner;