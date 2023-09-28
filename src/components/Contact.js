import { GlobalOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';
import Titre from './comp/Titre';
import MapImg from "../assets/pic/map.JPG"

const { TextArea } = Input;
const Contact = () => {
    return (
        <div className='p-5 py-8 text-white'>
            <Titre mot="CONTACT"/>
            <div className='p-6 flex flex-col md:flex-row justify-between'>
                <div className='w/3/4 md:w-1/2'>
                    <p className='text-xl'>Allons parler de vos projets , je suis impatient de travailler avec vous !</p>
                    <form action="" className='w-full text-black'>
                        <Input size="large" className='font-bold my-3 placeholder:text-black' placeholder="e-mail" prefix={<UserOutlined />} />
                        <Input size="large" className='font-bold mb-3 placeholder:text-black' placeholder="pays" prefix={<GlobalOutlined />} />
                        <TextArea
                            className='font-bold' 
                            rows={6} 
                            placeholder="vôtre message" 
                            maxLength={250} />
                            <button className="mt-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white flex justify-center items-center font-semibold py-2 px-4 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg transition-transform">
                                <SendOutlined />
                                <span className='ml-1'>envoyer</span> 
                            </button>
                    </form>
                </div>
                <div className='hidden md:block w-1/2 px-6 py-2'>
                    <img src={MapImg} className='rounded-md w-full h-full object-cover' alt="map fitiavana" />
                </div>
            </div>
        </div>
    );
};

export default Contact;