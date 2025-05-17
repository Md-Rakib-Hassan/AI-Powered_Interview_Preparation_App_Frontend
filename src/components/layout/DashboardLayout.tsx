import React, { useContext } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;