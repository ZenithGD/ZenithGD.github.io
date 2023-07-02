import React from 'react';
import MainLayout from '../components/layout/MainLayout'
import WelcomePost from './blog/welcome-post'
import BlogCard from '../components/ui/BlogCard';

const blogIndex = [
  WelcomePost.brief,
  WelcomePost.brief,
  WelcomePost.brief,
  WelcomePost.brief,
]

function Blog() {
    return (
      <div className="flex flex-col gap-10 p-32 ">
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {blogIndex.map((brief, key) => {
            return (
              <BlogCard 
                key={key}
                title={brief.title} 
                subtitle={brief.subtitle} 
                tags={brief.tags} 
                path={brief.path}
                thumbnail={brief.thumbnail}  
              />
            )
          })}
        </div>
      </div>
    );
}

Blog.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default Blog;
