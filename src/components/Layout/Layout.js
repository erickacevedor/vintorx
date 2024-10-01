import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const Layout = ({ children }) => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Nav />
            <main className="flex-grow-1">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;