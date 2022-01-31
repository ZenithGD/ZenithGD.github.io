import Hero from '../components/navigation/Hero'
import Navbar from '../components/navigation/Navbar'
import { wvItem, wvContainer, wvCardRight } from '../animation/indexVariants'
import { motion } from "framer-motion"
import LinkCard from '../components/navigation/LinkCard'

export default function Home() {
    return (
        <div className='bg-gray-800'>
            <Navbar />
            <Hero />
            <div className="flex flex-col p-20 ">

                <motion.div
                    variants={wvContainer} // Pass the variant object into Framer Motion 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    className='w-full text-center pb-20'
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
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={wvCardRight} // Pass the variant object into Framer Motion 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <LinkCard
                        title="¿Quién soy?"
                        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    />
                </motion.div>

            </div>
        </div>
    )
}
