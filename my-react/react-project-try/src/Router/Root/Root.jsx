import React from 'react';
import Navbar from '../../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer';


const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;