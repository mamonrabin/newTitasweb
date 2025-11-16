import AboutUs from '@/src/components/aboutPage/AboutUs';
import Consulation from '@/src/components/aboutPage/Consulation';
import HowWoek from '@/src/components/aboutPage/HowWoek';
import Philosophy from '@/src/components/aboutPage/Philosophy';
import Results from '@/src/components/aboutPage/Results';
import TechnicalArsenal from '@/src/components/aboutPage/TechnicalArsenal';
import PageHeaderSection from '@/src/utilits/PageHeaderSection';
import React from 'react';

const page = () => {
    return (
        <div>
            <PageHeaderSection title="The Vision Behind Titasweb" pageName="about us"/>
          <div className='Container pb-30'>
            <div>
                <AboutUs/>
                <Results/>
                <Philosophy/>
                <TechnicalArsenal/>
                <HowWoek/>
                <Consulation/>
            </div>
          </div>
        </div>
    );
};

export default page;