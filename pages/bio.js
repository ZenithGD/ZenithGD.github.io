import React from 'react'
import Layout from '../components/layout/MainLayout'
import Timeline from '../components/ui/timeline/Timeline'
function Bio() {
  return (
    <div className="flex flex-col gap-10 p-32 ">
      <h1 className="text-cyan-200 text-2xl font-bold mb-5">¿Quién soy?</h1>
      <div className='flex gap-10'>
        <p className='flex-1 text-white'>&lsquo;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?&rsquo;</p>
        <div className='flex-1 bg-cyan-900' />
      </div>

      <h1 className="text-cyan-200 text-2xl font-bold mb-5">Roadmap</h1>
      <Timeline />
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
