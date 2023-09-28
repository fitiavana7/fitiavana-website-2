import { FacebookOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import React from 'react';

const Footer = () => {
    return (
        <div className='flex sm:flex-row flex-col justify-between items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-6'>
            <span className='text-white font-bold text-base mb-2 sm:mb-0'>Fitiavana copyright {new Date().getFullYear()} &copy;</span>
            <div className='text-gray-300 text-4xl'>
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
    );
};

export default Footer;