import Layout from '../components/layout/MainLayout'
import Hero from '../components/navigation/Hero'
import { wvItem, wvContainer, wvCardRight, wvCardLeft } from '../animation/indexVariants'
import { motion } from "framer-motion"

function Home() {

    return (
        <>
            <Hero />
            <div className="flex flex-col gap-10 p-32 ">

                <motion.div
                    variants={wvContainer} // Pass the variant object into Framer Motion 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    className='w-full text-center'
                >
                    <motion.h1
                        variants={wvItem}
                        className='mb-10 text-4xl font-bold text-cyan-200'
                    >
                        ¡Bienvenido a mi página personal!
                    </motion.h1>
                    <motion.p
                        className="font-light my-5 text-xl text-white"
                        variants={wvItem}
                    >
                        &lsquo;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?&rsquo;
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={wvCardRight} // Pass the variant object into Framer Motion 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <div className="filter drop-shadow-xl bg-gray-850 w-full p-10 rounded-md flex gap-10">
                        <div className='flex-1 '>
                            <h1 className='text-cyan-200 text-2xl mb-5'>Mi biografía</h1>
                            <p className='text-white text-l'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        </div>
                        <div className='flex-1 bg-cyan-900'>

                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={wvCardLeft} // Pass the variant object into Framer Motion 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <div className="filter drop-shadow-xl bg-gray-850 w-full p-10 rounded-md flex gap-10">
                        <div className='flex-1 bg-cyan-900'>

                        </div>
                        <div className='flex-1 '>
                            <h1 className='text-cyan-200 text-2xl mb-5'>¿Quién soy?</h1>
                            <p className='text-white text-l'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home