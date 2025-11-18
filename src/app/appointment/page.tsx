import AppointmentForm from '@/src/form/AppointmentForm';
import PageHeaderSection from '@/src/utilits/PageHeaderSection';
import React from 'react';

const page = () => {
    return (
        <div>
            <PageHeaderSection title="Make Appointment" pageName="Appointment" />
            <div className='lg:mt-20 mt-10 pb-20 Container'>
                <AppointmentForm/>
            </div>
        </div>
    );
};

export default page;