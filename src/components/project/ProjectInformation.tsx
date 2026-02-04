import { exo } from '@/src/app/font';
import React from 'react';
import { BiSolidLayer } from 'react-icons/bi';
import { BsCalendarDate } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

const ProjectInformation = () => {
    return (
        <div>
            <div className='border border-gray-300 rounded-md px-6 py-4'>
                <h2 className={`${exo.className} text-xl font-bold border-b pb-2 border-[#2B748A]/20`}>Project Information</h2>

                <div className='flex flex-col gap-4 mt-6'>
                    <div className='flex items-center gap-3 border-b pb-6 border-[#2B748A]/20'>
                        <p className='w-12 h-12 rounded-full text-[#2B748A] flex items-center justify-center border border-gray-200'><FaUser /></p>
                        <div>
                            <p className='text-gray-500'>Client:</p>
                            <h2 className='font-bold text-lg'>Rahva Raamat</h2>
                        </div>
                    </div>

                    <div className='flex items-center gap-3 border-b pb-6 border-[#2B748A]/20'>
                        <p className='w-12 h-12 rounded-full text-[#2B748A] flex items-center justify-center border border-gray-200'><BiSolidLayer /></p>
                        <div>
                            <p className='text-gray-500'>Service:</p>
                            <h2 className='font-bold text-lg'>E-commerce Excellence</h2>
                        </div>
                    </div>

                     <div className='flex items-center gap-3 border-b pb-6 border-[#2B748A]/20'>
                        <p className='w-12 h-12 rounded-full text-[#2B748A] flex items-center justify-center border border-gray-200'><BsCalendarDate /></p>
                        <div>
                            <p className='text-gray-500'>Date:</p>
                            <h2 className='font-bold text-lg'>Completed 2026</h2>
                        </div>
                    </div>

                    <div className='flex items-center gap-3'>
                        <p className='w-12 h-12 rounded-full text-[#2B748A] flex items-center justify-center border border-gray-200'><BsCalendarDate /></p>
                        <div>
                            <p className='text-gray-500'>Location:</p>
                            <h2 className='font-bold text-lg'>Dhaka Bangladesh</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectInformation;