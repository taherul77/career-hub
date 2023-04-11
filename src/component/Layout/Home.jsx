import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import JobDetails from '../JobDetails/JobDetails';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Category></Category>
            <Featured></Featured>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;