import React, { useState } from 'react';
import Header from '../../components/alluser/Header/Header';
import Navbar from '../../components/alluser/Navbar/Navbar';
import Contact from '../../components/alluser/Contact/Contact';
import HomeSection from '../../components/alluser/Home/HomeSection';
import About from '../../components/alluser/About/About';
import Campaign from '../../components/alluser/Campaign/Campaign';
import Request from '../../components/alluser/Request/Request';
import Transaction from '../../components/alluser/Transaction/Transaction';
import BloodBank from '../../components/alluser/BloodBank/BloodBank';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Header isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HomeSection />
            <About />
            <Campaign />
            <Request />
            <Transaction />
            <BloodBank />
            <Contact />
        </>
    );
};

export default Home;
