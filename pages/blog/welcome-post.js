import React from 'react'

import Layout from '../../components/layout/MainLayout'

function WelcomePost() {
  return (
    <div>welcome-post</div>
  )
}

WelcomePost.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default WelcomePost