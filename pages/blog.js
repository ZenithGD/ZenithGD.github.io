import React from 'react';
import Layout from '../components/layout/MainLayout'

function Hobbies() {
    return (
        <div className='min-h-screen'>

        </div>
    );
}
Hobbies.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Hobbies;
