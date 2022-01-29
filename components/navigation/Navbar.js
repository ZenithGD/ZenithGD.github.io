import Link from 'next/link'
import React from 'react'
import NavbarButton from '../ui/NavbarButton'

function Navbar() {
    return (
        <div className='fixed z-50 top-0 w-full h-14 flex justify-center gap-4'>
            <NavbarButton href="bio" text="Bio" textStyle="font-normal text-xl text-cyan-100 font-bold fromRight"/>
            <NavbarButton href="hobbies" text="Hobbies" textStyle="font-normal text-xl text-cyan-100 font-bold fromCenter"/>
            <NavbarButton href="career" text="Career" textStyle="font-normal text-xl text-cyan-100 font-bold fromCenter"/>
            <NavbarButton href="contact" text="Contact" textStyle="font-normal text-xl text-cyan-100 font-bold fromLeft"/>
        </div>
    )
}

export default Navbar
