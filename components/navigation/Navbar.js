import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import NavbarButton from '../ui/NavbarButton'

function Navbar() {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setScroll(window.pageYOffset > window.innerHeight)
            );
        }
    }, []);

    return (
        <div className={`z-50 fixed transition-all duration-200 top-0 w-full h-14 flex justify-center gap-4 ${scroll ? 'bg-gray-850 filter drop-shadow-md' : ''}`}>
            <Link href="bio">
                <button className='w-28'>
                    <p className="text-xl text-cyan-100 font-bold fromRight">Bio</p>
                </button>
            </Link>
            <Link href="hobbies">
                <button className='w-28'>
                    <p className="text-xl text-cyan-100 font-bold fromCenter">Hobbies</p>
                </button>
            </Link>
            <Link href="career">
                <button className='w-28'>
                    <p className="text-xl text-cyan-100 font-bold fromCenter">Career</p>
                </button>
            </Link>
            <Link href="contact">
                <button className='w-28'>
                    <p className="text-xl text-cyan-100 font-bold fromLeft">Contact</p>
                </button>
            </Link>
        </div>
    )
}

export default Navbar
