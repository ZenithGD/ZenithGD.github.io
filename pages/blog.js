import React from 'react';
import Layout from '../components/layout/MainLayout'

const blogEntries = [
  {
    title: "¡Bienvenidos!",
    brief: "Mi primer post",
  }
]

function Blog() {
    return (
        <div className='min-h-screen'>

        </div>
    );
}

Blog.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Blog;
