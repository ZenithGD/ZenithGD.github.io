import Link from 'next/link'
import React from 'react'
import NavbarButton from '../ui/NavbarButton'

function Navbar() {
    return (
        <div className='z-50 fixed top-0 w-full h-14 flex justify-center gap-4'>
            <NavbarButton href="#" text="A" textStyle="text-red-100 font-bold fromRight"/>
            <NavbarButton href="#" text="A" textStyle="text-red-100 font-bold fromCenter"/>
            <NavbarButton href="#" text="A" textStyle="text-red-100 font-bold fromLeft"/>
        </div>
    )
}

export default Navbar
