import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import { FacebookOutlined, GithubOutlined, InstagramOutlined, LinkedinFilled, LinkedinOutlined} from '@ant-design/icons';
import { Tooltip } from 'antd';
import "./flottant.css"

import ProfilePic from "../assets/pic/fitiavana.jpg"

const Landing = () => {
    useEffect(() => {
        const typewriter = new Typewriter('#typewriter', {
          strings: ['FITIAVANA ANDRIAHERILANTO'],
          autoStart: true,
          loop : true
        });
    
        return () => {
          typewriter.stop(); 
        };
      }, []);
    return (
         <div className='w-full h-screen flex justify-between items-center px-5'>
            <div className='w-full sm:w-2/3'>
                <p className='text-white text-3xl font-bold' id='typewriter'></p>
                <p className='mt-1 text-gray-300 text-xl'>Fullstack developper from Madagascar</p>
                <div className='text-gray-300 text-4xl mt-5'>
                    <Tooltip className='mr-3 hover:text-white' title="Fitiavana Aina Andriaherilanto">
                        <a href="https://www.facebook.com/fitiavana.andriaherilanto/" target="_blank"><FacebookOutlined/></a>
                    </Tooltip>
                    <Tooltip className='mr-3 hover:text-white' title="Fitiavana_hr">
                        <a href="https://instagram.com/fitiavana_hr" target="_blank"><InstagramOutlined/></a>
                    </Tooltip>
                    <Tooltip className='mr-3 hover:text-white' title="Fitiavana7">
                        <a href="https://github.com/fitiavana7" target="_blank"><GithubOutlined/></a>
                    </Tooltip>
                    <Tooltip className='hover:text-white' title="Fitiavana Andriaherilanto">
                        <a href="https://www.linkedin.com/in/fitiavana-andriaherilanto" target="_blank"><LinkedinOutlined/></a>
                    </Tooltip>
                </div>
            </div>
            <div className='sm:block hidden sm:w-1/3'>
                <img 
                    src={ProfilePic} 
                    className="rounded-full w-full lg:w-3/4 transform hover:rotate-45 transition-transform duration-300 ease-in-out border-4 border-blue-500 animate-float" 
                    alt="profile picture" 
                />
            </div>
         </div>
    );
};

export default Landing;