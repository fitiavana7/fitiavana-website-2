import React from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';

const Main = () => {
    return (
        <>
            <Navbar/>
            <Landing/>
            <Services/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Main;