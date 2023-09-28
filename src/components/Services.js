import React from 'react';
import { Card } from 'antd';
import { ServicesList } from '../data/list';
import Titre from './comp/Titre';
const { Meta } = Card;

const list = ServicesList

const Services = () => {
    return (
        <div className='text-white px-5 pt-10'>
            <Titre mot="mes services"/>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8'>
            {
                list.map((el,index)=>(
                    <Card
                    key={index}
                        hoverable
                        className='w-full'
                        cover={
                        <img 
                            alt="pic" 
                            className='w-full h-52 object-cover' 
                            src={el.pic}
                        />
                        }
                    >
                        <Meta 
                            title={el.titre} 
                            description={el.description} 
                        />
                    </Card>
                ))
            }
            </div>
        </div>
    );
};

export default Services;