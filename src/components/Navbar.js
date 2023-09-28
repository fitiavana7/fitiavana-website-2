import React from 'react';
import { PhoneOutlined } from '@ant-design/icons';


const Navbar = () => {
    return (
        <div className="z-50 fixed h-14 w-full px-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white flex justify-between items-center">
          <p className="text-xl font-bold">{"<"}Fitiavana{"/>"}</p>
          <div>
            <a href="tel:0343244694"> 
                <button className="bg-white flex justify-center items-center text-black font-semibold py-2 px-4 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg transition-transform">
                    <PhoneOutlined />
                    <span className='sm:flex hidden sm:ml-1'>034 32 446 94</span> 
                </button>
            </a>
          </div>
      </div>
    );
};

export default Navbar;