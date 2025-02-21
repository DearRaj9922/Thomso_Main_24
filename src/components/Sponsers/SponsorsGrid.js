import React from 'react';
import './SponsorsGrid.css';
import sampleLogo from './images/sample.png'; // Use actual logos for each sponsor
import visionias from './images/visionias.png'; 
import sbi from './images/sbi.png'; 
import powergrid from './images/powergrid.jpg'; 
import adani from './images/adani.jpg';
import gail from './images/gail.jpg';
import rvnl from './images/rvnl.jpg';
import bonkers from './images/bonkers.png';
import nxtinfra from './images/nxtinfra.jpg';
import rollsking from './images/rollsking.jpg';
import qelica from './images/qelica.jpg';
import sanjeevani from './images/sanjeevani.jpg';
import iocl from './images/iocl.jpg';
import horiba from './images/horiba.jpg';
import canara from './images/canara.png';
import thdc from './images/thdc.jpg';
import krafton from './images/krafton.png';
import beardo from './images/beardo.png';
import pnb from './images/pnb.jpg';
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
