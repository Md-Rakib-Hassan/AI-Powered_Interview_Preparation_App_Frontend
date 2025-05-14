import React, { useContext } from 'react';
import Header from './Header';

const DashboardLayout = ({children}) => {
    

    return (
        <div>
            <Header></Header>
            {children}
        </div>
    );
};

export default DashboardLayout;