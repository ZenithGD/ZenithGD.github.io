import Link from 'next/link'
import React from 'react'

function NavbarButton({href, text, textStyle}) {


    return (
        <Link href={href}>
            <button className='w-28'>
                <p className={textStyle}>{text}</p>
            </button>
        </Link>
    )
}

export default NavbarButton
