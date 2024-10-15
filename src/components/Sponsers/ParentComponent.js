import React from 'react';
import SponsorsGrid from './SponsorsGrid';
import PartnersGrid from './PartnersGrid';
import Footer from "./Footer/MunFooter";
import './ParentComponent.css'; 
import Eventsnavbar from "./EventNavbar/Eventsnavbar.js";
const ParentComponent = () => {
    return (
        <div className="parent-container">
            <main className="main-content">
                <Eventsnavbar />
                <SponsorsGrid />
                <PartnersGrid />
                <Footer />

            </main>
        </div>
    );
};

export default ParentComponent;
