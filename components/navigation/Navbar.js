import Link from 'next/link'
import React from 'react'
import NavbarButton from '../ui/NavbarButton'

function Navbar() {
    return (
        <div className='z-50 fixed top-0 w-full h-14 flex justify-center gap-4'>
            <NavbarButton href="bio" text="Bio" textStyle="text-red-100 font-bold fromRight"/>
            <NavbarButton href="hobbies" text="Hobbies" textStyle="text-red-100 font-bold fromCenter"/>
            <NavbarButton href="career" text="Career" textStyle="text-red-100 font-bold fromCenter"/>
            <NavbarButton href="contact" text="Contact" textStyle="text-red-100 font-bold fromLeft"/>
        </div>
    )
}

export default Navbar
