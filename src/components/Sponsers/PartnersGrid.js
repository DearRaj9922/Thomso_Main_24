import React from 'react';
import './PartnersGrid.css';
import sampleLogo from './images/sample.png';

const PartnersGrid = () => {
    const partners = [
        { name: 'UniAcco', type: 'BANKING PARTNER', logo: sampleLogo },
        { name: 'UniScholarz', type: 'EDUCATION PARTNERS', logo: sampleLogo },
        { name: 'UniScholarz', type: 'ELECTRICITY PARTNERS', logo: sampleLogo },
        { name: 'UniAcco', type: 'BANKING PARTNER', logo: sampleLogo },
        { name: 'UniScholarz', type: 'EDUCATION PARTNERS', logo: sampleLogo },
        { name: 'UniScholarz', type: 'ELECTRICITY PARTNERS', logo: sampleLogo },
        { name: 'UniAcco', type: 'BANKING PARTNER', logo: sampleLogo },
        { name: 'UniScholarz', type: 'EDUCATION PARTNERS', logo: sampleLogo },
        { name: 'UniScholarz', type: 'ELECTRICITY PARTNERS', logo: sampleLogo },
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
