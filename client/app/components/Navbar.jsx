import Image from 'next/image'
import React from 'react'
import Logo from './dojo-logo.png'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
        <Image
        src={Logo}
        alt='HelpDesk Logo'
        width={70}
        placeholder='blur'
        quality={100}
        />
        <h1>HelpDesk Tickets</h1>
        <Link href={"/"}>Dashboard</Link>
        <Link href={"/tickets"}>Tickets</Link>
    </nav>
    
  )
}
