import React from 'react'
import Layout from '../components/layout/MainLayout'
function Bio() {
    return (
        <div className='min-h-screen'>
            a
        </div>
    )
}

Bio.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Bio
