import React from 'react';
import Banner from '../Components/Banner';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Projects from './Projects';
import Services from './Services';
import About from '../Components/HomeComponent/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About/>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;