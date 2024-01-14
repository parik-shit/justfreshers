import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'


export  function Logo() {
  return (
   <Link href="/">
    <div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
        <Image 
        src = "/justfreshers.png"
        alt = "Logo"
        height = {300}
        width = {300}/>
    </div>
   </Link>
  )
}