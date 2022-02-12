import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import HomeBanner from './HomeBanner/HomeBanner';
import HomeProducts from './HomeProducts/HomeProducts';
import InSport from './InSport/InSport';
import Review from './Review/Review';

const Home = () => {
    return (
        <div style={{ "backgroundColor": "#D4D4D4" }} >
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <HomeProducts></HomeProducts>
            <InSport></InSport>
            <Review></Review>
            <Footer></Footer>
        </div>


    );
};

export default Home;