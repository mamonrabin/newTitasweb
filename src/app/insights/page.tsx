import { blogList } from '@/src/api/blogApi';
import BlogCard from '@/src/card/BlogCard';
import PageHeaderSection from '@/src/utilits/PageHeaderSection';
import React from 'react';

const page = () => {
    return (
        <div>
            <PageHeaderSection title="Insights" pageName="Insights"/>


            <div className='mt-20 pb-20 Container grid lg:grid-cols-3 gap-4'>
                {
                    blogList.map(blog => <BlogCard key={blog.id} blog={blog}/>)
                }
            </div>
           
        </div>
    );
};

export default page;