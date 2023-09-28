import React from 'react';
import CarouselPortfolio from './comp/CarouselPortfolio';
import Titre from './comp/Titre';

const Portfolio = () => {
    return (
        <div className='text-white px-5 pt-10'>
            <Titre mot="portfolio"/>
            <div className='py-8'>
                <CarouselPortfolio />
            </div>
        </div>
    );
};

export default Portfolio;