import React from 'react'

import Layout from '../../components/layout/MainLayout'

const brief = {
  path: "blog/welcome-post",
  title: "¡Bienvenidos a mi portfolio!",
  subtitle: "El primer post.",
  tags: [ "blog" ],
  thumbnail: "/blogThumbnails/kitten.jpg"
} 

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

WelcomePost.brief = brief

export default WelcomePost