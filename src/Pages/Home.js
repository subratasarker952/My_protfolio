import React from 'react';
import Banner from '../Components/Banner';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Project from '../Components/Project';
import Services from '../Components/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Project></Project>
            <Services></Services>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;