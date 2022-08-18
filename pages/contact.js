import React from 'react'
import Layout from '../components/layout/MainLayout'

function Contact() {
  return (
    <div className='min-h-screen'>

    </div>
  );
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default Contact
