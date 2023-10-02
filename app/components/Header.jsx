import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png';
function Header() {
  return (
    <div className='flex items-center justify-between bg-primary-color p-3 md:p-6 shadow-lg'>
        <Link href='/'>
        <Image src={logo} alt='Logo' width={100} height={100} />
        </Link>
        <nav className='flex md:gap-3 text-white'>
            <Link className='font-bold' href="/">Home</Link>
            <Link className='font-bold' href="/about">About</Link>
            <Link className='font-bold' href="/article">Articles</Link>
            <Link className='font-bold' href="/contact">Contact</Link>
        </nav>
        <div className="login bg-yellow px-4 py-2 rounded-full text-primary-color ">
          <Link href="/login">Login</Link>
        </div>
    </div>
  )
}

export default Header