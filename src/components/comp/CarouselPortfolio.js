import React from 'react';
import { Carousel } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { portfolioList } from '../../data/list';

const contentClass = 'h-80 rounded-md p-3  bg-gradient-to-r from-violet-500 to-fuchsia-500 pb-10'

const list = portfolioList

const CarouselPortfolio = () => (
  <Carousel autoplay>
    {
        list.map((el,index)=>(
            <div>
                <div 
                    className='h-fit sm:h-80  flex flex-col items-center sm:items-start sm:justify-start sm:flex-row rounded-md p-3  bg-gradient-to-r from-violet-500 to-fuchsia-500 pb-10 text-white'
                    key={index}
                    >
                    <img className='h-48 w-3/4 sm:w-1/2 sm:h-full object-cover' src={el.pic} alt="mon pic" />
                    <div className='px-2'>
                        <p className='font-bold text-3xl'>
                            {el.titre}
                        </p>
                        <p className='text-gray-300 text-justify'>
                            {el.description}    
                        </p>
                        <p className='text-white text-end font-bold'>
                            {el.date}    
                        </p>
                        <div className='flex justify-center'>
                            <a href="https://github.com/fitiavana7" target="_blank" className="bg-white flex justify-center items-center text-black font-semibold py-2 px-4 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg transition-transform">
                                <EyeOutlined />
                                <span className='ml-1'>voir code source</span> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }
  </Carousel>
);
export default CarouselPortfolio;