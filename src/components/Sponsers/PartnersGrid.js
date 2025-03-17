import React from 'react';
import './PartnersGrid.css';

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
import aleem from './images/aleem.jpeg';
import bjas from './images/bjas.jpg';
import iitmemewala from './images/iitmemewala.jpg';
import artisbaazi from './images/artisbaazi.png';
import fintree from './images/fintree.jpg';
import mila from './images/mila.jpeg';
import safexpress from './images/safexpress.jpg';
import posterwa from './images/posterwa.jpg';
import array from './images/array.jpg';
import instax from './images/instax.jpg';
import munjal from './images/munjal.jpg';
import epil from './images/epil.webp';
import explorin from './images/explorin.jpg';
import pahadi from './images/pahadi.jpeg';
import optical from './images/opticalplanet.jpg';
import dubeat from './images/dubeat.jpg';
import eil from './images/eil.png';
import pizlio from './images/pizlio.png';
import secrettemptation from './images/secrettemptation.png';
import remarkskill from './images/remarkskill.jpg';
import shapoorji from './images/shapoorji.jpg';
import abhibus from './images/abhibus.png';
import tattoo from './images/tattoo.jpg';
import uttar from './images/uttar.jpg';
import deepam from './images/deepam.png';
import dehradoongram from './images/dehradoongram.jpg';
import denver from './images/denver.jpg';
import dfc from './images/dfc.png';
import febtech from './images/febtech.jpg';
import fixderma from './images/fixderma.jpg';
import genwear from './images/genwear.jpg';
import hell from './images/hell.jpg';
import sncf from './images/sncf.jpg';
import saytrees from './images/saytrees.png';
import world from './images/world.jpg';
import mediax from './images/mediax.png';
import meraki from './images/meraki.png';
import nbt from './images/nbt.jpg';
import unisol from './images/unisol.png';
import pnb from './images/pnb.jpg';
import escape from './images/escape.png';

const PartnersGrid = () => {
    const partners = [
        
        { name: 'UniAcco', type: 'PLATINUM SPONSOR', logo: powergrid },
      
        { name: 'UniAcco', type: 'DIAMOND SPONSOR', logo: gail },
        { name: 'UniAcco', type: 'DIAMOND SPONSOR', logo: adani },
        { name: 'UniAcco', type: 'MERCHANDISE PARTNER', logo: bonkers },
        { name: 'UniAcco', type: 'RAILWAY DEVELOPMENT PARTNER', logo: rvnl },
        { name: 'UniScholarz', type: 'HYDRO ENERGY PARTNER', logo: thdc },

        { name: 'UniAcco', type: 'BANKING PARTNER', logo: sbi },
        { name: 'UniScholarz', type: 'BANKING PARTNER', logo: canara },
        { name: 'UniScholarz',  type: 'BANKING PARTNER', logo: pnb },
        { name: 'UniScholarz',  type: 'WORKSHOP PARTNER', logo: world },
        { name: 'UniScholarz', type: 'WORKSHOP PARTNER', logo: remarkskill },
         { name: 'UniScholarz', type: 'GOLD SPONSOR', logo: iocl },
         { name: 'UniAcco', type: 'GOLD SPONSOR', logo: horiba },
        { name: 'UniScholarz', type: 'MAJOR SPONSOR', logo: shapoorji },
          { name: 'UniScholarz', type: 'MAJOR SPONSOR',  logo: eil },
        { name: 'UniScholarz',  type: 'MAJOR SPONSOR', logo: epil },
        { name: 'UniScholarz',  type: 'MAJOR SPONSOR', logo: nbt }, 
        { name: 'UniScholarz', type: 'EYEWEAR PARTNER',  logo: optical },
        { name: 'UniScholarz',  type: 'SOCIAL INITIATIVE PARTNER', logo: sncf },
        { name: 'UniAcco', type: 'ORAL HYGIENE PARTNER', logo: sanjeevani },
         { name: 'UniAcco', type: 'CARNIVAL PARTNER', logo: rollsking },
        { name: 'UniScholarz', type: 'PAEGENT PARTNER', logo: pizlio },
         { name: 'UniScholarz',  type: 'GIFTING & SKINCARE PARTNER', logo: fixderma },
        
        { name: 'UniAcco', type: 'SPONSOR', logo: nxtinfra },
       
        { name: 'UniAcco', type: 'Major Sponsor', logo: aleem },
        
       
       
        
        
        { name: 'UniAcco', type: 'MOBILE GAMING TOURNAMENT PARTNER', logo: krafton },
        { name: 'UniScholarz', type: 'GROOMING PARTNER', logo: beardo },
        
        
        { name: 'UniScholarz', type: 'FRAGNANCE PARTNER',  logo: secrettemptation },
        
      
        { name: 'UniScholarz', type: 'Major Sponsor',  logo: dubeat },
        
        { name: 'UniScholarz', type: 'Major Sponsor',  logo: pahadi },
        { name: 'UniScholarz', type: 'Major Sponsor',  logo: explorin },
        
        { name: 'UniScholarz',  type: 'CONTRIBUTION PARTNER', logo: munjal},
        { name: 'UniScholarz', type: 'MOMENTS PARTNER',  logo: instax },
        { name: 'UniScholarz',  type: 'CONTRIBUTION PARTNER', logo: array },
        { name: 'UniScholarz', type: 'COSCON EVENT PARTNER',  logo: posterwa },
        { name: 'UniScholarz', type: 'SUPPLY CHAIN PARTNER',  logo: safexpress },
        { name: 'UniScholarz',  type: 'MIRACLE MAKEUP PARTNER', logo: mila },
        { name: 'UniScholarz',  type: 'MARKETING AND FINANCE CATEGORY PARTNER', logo: fintree },
        { name: 'UniScholarz',  type: 'GULLYWAR EVENT PARTNER', logo: artisbaazi },
        { name: 'UniScholarz',  type: 'Major Sponsor', logo: iitmemewala },
        { name: 'UniScholarz',  type: 'Major Sponsor', logo: bjas },
        { name: 'UniScholarz',  type: 'ZONALS TRAVEL PARTNER', logo: abhibus },
        { name: 'UniScholarz',  type: 'Major Sponsor', logo: tattoo },
        { name: 'UniScholarz',  type: 'TOURISM PARTNER', logo: uttar },
        { name: 'UniScholarz',  type: 'Major Sponsor', logo: deepam },
        { name: 'UniScholarz',  type: 'Major Sponsor', logo: dehradoongram },
        { name: 'UniScholarz',  type: 'PERFUME PARTNER', logo: denver },
        { name: 'UniScholarz',  type: 'FREIGHT PARTNER', logo: dfc },
        { name: 'UniScholarz',  type: 'Major Sponsor', logo: febtech },
       
        { name: 'UniScholarz',  type: 'CAMPUS DIVA EVENT PARTNER', logo: genwear },
        { name: 'UniScholarz',  type: 'ENERGY DRINK PARTNER', logo: hell },
        
        { name: 'UniScholarz',  type: 'Major Sponsor', logo: saytrees },
      
        { name: 'UniScholarz',  type: 'Major Sponsor', logo: mediax },
        { name: 'UniScholarz', type: 'BEAUTY PARTNER', logo: meraki },
        
        
        { name: 'UniScholarz', type: 'MAJOR SPONSOR',  logo: unisol },
        { name: 'UniScholarz',  type: 'FANDOM PARTNER', logo: escape }
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


