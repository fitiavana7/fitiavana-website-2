import React from 'react';

const Titre = ({mot}) => {
    return (
        <p className='text-white text-5xl md:text-6xl font-bold text-center'>{mot.toUpperCase()}</p>
    );
};

export default Titre;