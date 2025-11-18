import { serviceList } from '@/src/api/services';
import { exo } from '@/src/app/font';
import ServiceCard from '@/src/card/ServiceCard';
import React from 'react';

const Services = () => {
    return (
        <div className='Container lg:h-[540px] bg-[#1D3131] rounded-tl-[160px] lg:rounded-tl-[160px] rounded-br-[100px] py-25'>
            <div className={`${exo.className} flex items-center justify-center text-center flex-col `}>
                <p className='text-[#3AC2CF] uppercase font-bold text-base'>Service We Provide</p>
                <h2 className='mt-4 md:text-4xl text-3xl font-bold capitalize text-white'>Everything You Need to Dominate Your Market</h2>
            </div>


            <div className='grid lg:grid-cols-3 gap-6 mt-12'>
                 {
                    serviceList.slice(0,3).map(service => <ServiceCard key={service.id} service={service}/>)
                 }
            </div>
        </div>
    );
};

export default Services;