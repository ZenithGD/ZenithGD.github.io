import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/navigation/Hero'
import Navbar from '../components/navigation/Navbar'

export default function Home() {
    return (
        <div className="bg-gray-800 flex flex-col">
            <Navbar />
            <Hero />
        </div>
    )
}
