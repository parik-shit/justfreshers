import React from 'react'
import { Logo } from './logo'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import localFont from "next/font/local"
import { LogIn } from 'lucide-react';



const Navbar = () => {
  return (
    <div className='fixed top-0 w-full h-18 px-4 border-b shadow-sm bg-white flex items-center'>
        <div className='md:max-w-screen-3xl mx-auto flex items-center w-full justify-between'>
            <Logo />
            <div className='space-x-4 md:block md:w-auto flex items-center justify-between w-full'>
                <Button size="icon" variant = 'outline'  asChild>
                    <Link href='./sign-in'>
                    <LogIn />
                    </Link>
                   </Button>
                {/* <Button size="lg" className='bg-rose-600 'asChild><Link href='/sign-up'>Get access for free</Link></Button> */}
            </div>
        </div>
      
    </div>
  )
}

export default Navbar

