import { projectList } from '@/src/api/projectApi';
import ProjectCard from '@/src/card/ProjectCard';
import PageHeaderSection from '@/src/utilits/PageHeaderSection';
import React from 'react';

const page = () => {
    return (
        <div>
             <PageHeaderSection title="Our Projects" pageName="our projects"/>

             <div className='mt-20 pb-20 Container grid lg:grid-cols-2 gap-8'>
                {
                    projectList.map(project =><ProjectCard key={project.id} project={project}/>)
                }
             </div>
        </div>
    );
};

export default page;