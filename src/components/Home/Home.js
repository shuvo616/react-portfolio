import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

import Header from '../Header/Header';
import MyEducation from '../MyEducation/MyEducation';
import MyProject from '../MyProject/MyProject';
import Service from '../Service/Service';
import Skill from '../Skill/Skill'


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <MyProject></MyProject>
            <Skill></Skill>
            <MyEducation></MyEducation>
            <Footer></Footer>
        </div>
    );
};

export default Home;