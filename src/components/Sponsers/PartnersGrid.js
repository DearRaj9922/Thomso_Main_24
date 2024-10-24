import React from 'react';
import './PartnersGrid.css';
import sampleLogo from './images/sample.png';
import visionias from './images/visionias.png'; // Use actual logos for each sponsor
import sbi from './images/sbi.png'; // Use actual logos for each sponsor
import powergrid from './images/powergrid.jpg'; // Use actual logos for each sponsor
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

const PartnersGrid = () => {
    const partners = [
        { name: 'UniAcco', logo: qelica },
        { name: 'UniScholarz',logo: sanjeevani },
        { name: 'UniScholarz', logo: iocl },
        { name: 'UniAcco', logo: horiba },
        { name: 'UniScholarz', logo: canara },
        { name: 'UniScholarz', logo: thdc },
        { name: 'UniAcco', logo: krafton },
        { name: 'UniScholarz', logo: beardo },
        { name: 'UniScholarz', logo: pnb },
    ];

    return (
        <div className="grid-container">
            {partners.map((partner, index) => (
                <div key={index} className="grid-item-wrapper">
                    <div className="grid-item">
                        <img src={partner.logo} alt={`${partner.name} logo`} className="partner-logo" />
                        <div className="partner-type">{partner.type}</div>
                    </div>
                    {index % 3 !== 2 && <div className="vertical-line" />} {/* Vertical line except after the last card in a row */}
                </div>
            ))}
        </div>
    );
};

export default PartnersGrid;


// import React from 'react';
// import './PartnersGrid.css';
// import sampleLogo from './images/sample.png';

// const PartnersGrid = () => {
//     const partners = [
//         { name: 'UniAcco', type: 'BANKING PARTNER', logo: sampleLogo },
//         { name: 'UniScholarz', type: 'EDUCATION PARTNERS', logo: sampleLogo },
//         { name: 'UniScholarz', type: 'ELECTRICITY PARTNERS', logo: sampleLogo },
//         { name: 'UniAcco', type: 'BANKING PARTNER', logo: sampleLogo },
//         { name: 'UniScholarz', type: 'EDUCATION PARTNERS', logo: sampleLogo },
//         { name: 'UniScholarz', type: 'ELECTRICITY PARTNERS', logo: sampleLogo },
//         { name: 'UniAcco', type: 'BANKING PARTNER', logo: sampleLogo },
//         { name: 'UniScholarz', type: 'EDUCATION PARTNERS', logo: sampleLogo },
//         { name: 'UniScholarz', type: 'ELECTRICITY PARTNERS', logo: sampleLogo },
//     ];

//     return (
//         <div className="grid-container">
//             {partners.map((partner, index) => (
//                 <div key={index} className="grid-item-wrapper">
//                     <div className="grid-item">
//                         <img src={partner.logo} alt={`${partner.name} logo`} className="partner-logo" />
//                         <div className="partner-type">{partner.type}</div>
//                     </div>
//                     {index % 3 !== 2 && <div className="vertical-line" />} {/* Vertical line except after the last card in a row */}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default PartnersGrid;
