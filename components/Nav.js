'use client'
import React from 'react'
import Link from 'next/link'

const Nav = () => {
    const links = [
        {
            path: '/home',
            name: 'Home'
        },
        {
            path: '/blue',
            name: 'Blue'
        },
        {
            path: '/red',
            name: 'Red'
        },
        {
            path: '/green',
            name: 'Green'
        },
        {
            path: '/green/dark-green',
            name: 'Dark-Green'
        },
        {
            path: '/orange',
            name: 'Orange'
        },
        
    ]

  return (
    <nav>
        <ul>
            {links.map(link=>(<Link href={link.path}><li key={link.path}>{link.name}</li></Link>  ))}
        </ul>
    </nav>
  )
}

export default Nav