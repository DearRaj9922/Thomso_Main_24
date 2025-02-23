import React from 'react';
import './SponsorsGrid.css';
import sampleLogo from './images/sample.png'; // Use actual logos for each sponsor
import visionias from './images/visionias.png';
import hero from './images/hero.png';
import iitraa from './images/iitraa.jpg';



const SponsorsGrid = () => {
    return (
        <div className="sponsors-grid-container">
            <h1>OUR SPONSORS</h1>

            { <h3> IN ASSOCIATION WITH </h3> }
            <div className="sponsors-row">
                <div className="sponsor">
                    <img src={visionias} alt="UniAcco" />
                </div>
                <div className="vertical-divider"></div>
                <div className="sponsor">
                    <img src={iitraa} alt="UniCreds" />
                </div>
                
            </div>

              { <h3> DRIVEN BY </h3> }
            <div className="sponsors-row">
                <div className="sponsor">
                    <img src={hero} alt="UniAcco" />
                </div>
            </div>

             
            
            
        </div>
    );
};

export default SponsorsGrid;
