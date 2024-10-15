import React from 'react';
import './SponsorsGrid.css';
import sampleLogo from './images/sample.png'; // Use actual logos for each sponsor

const SponsorsGrid = () => {
    return (
        <div className="sponsors-grid-container">
            <h2>OUR SPONSORS</h2>

            <h3>Title Sponsors</h3>
            <div className="sponsors-row">
                <div className="sponsor">
                    <img src={sampleLogo} alt="UniAcco" />
                </div>
                <div className="vertical-divider"></div>
                <div className="sponsor">
                    <img src={sampleLogo} alt="UniCreds" />
                </div>
                <div className="vertical-divider"></div>
                <div className="sponsor">
                    <img src={sampleLogo} alt="UniScholarz" />
                </div>
            </div>

            <h3>Title Sponsors</h3>
            <div className="sponsors-row">
                <div className="sponsor">
                    <img src={sampleLogo} alt="UniAcco" />
                </div>
                <div className="vertical-divider"></div>
                <div className="sponsor">
                    <img src={sampleLogo} alt="UniCreds" />
                </div>
                <div className="vertical-divider"></div>
                <div className="sponsor">
                    <img src={sampleLogo} alt="UniScholarz" />
                </div>
            </div>

            <h3 className='beverage'>Beverage Partners</h3>
            <div className="sponsors-row">
                <div className="sponsor">
                    <img src={sampleLogo} alt="UniAcco" />
                </div>
                <div className="vertical-divider"></div>
                <div className="sponsor">
                    <img src={sampleLogo} alt="UniScholarz" />
                </div>
            </div>
        </div>
    );
};

export default SponsorsGrid;
