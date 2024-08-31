"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Logo from '../../components/logo';
import { AuthButton } from '../../components/authButton';
import { useSession } from 'next-auth/react';

function Navbar(){
  const [isClick, setIsClick] = useState(false);

  const [delayedSession, setDelayedSession] = useState(null);

  const { data: session } = useSession();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedSession(session);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, [session]);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  // Use these variants to get the desired layout 
  // if you wish to do any change, please copy paste the style!
  const nav = {
    normal: "bg-white dark:bg-gray-900 w-full lg:px-32 pt-4", // A normal navbar
    rounded:"bg-white dark:bg-gray-900 w-[90%] lg:w-[60%] mx-auto mt-2 lg:mt-8 rounded-2xl lg:p-1 fixed top-0 left-0 right-0 z-50 shadow-lg border border-gray-300" // A rounded floating navbar with shadow
  }

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'Documentation', href: '/docs' },
    // { text: 'Profile', href: '/profile' }, // Profile button will reflect when the user has logged in
    
  ];

  return (
   
    <nav className={nav.normal}>
    <div className="sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0 pl-4 lg:pl-0 ml-0">
            <Logo color={'white'}></Logo>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href} className="dark:text-white text-black hover:bg-black dark:hover:bg-white  hover:text-white dark:hover:text-black rounded-lg p-2">
                {item.text}
              </Link>
            ))}

            {delayedSession ? (
            <Link href="/profile" className="text-white hover:bg-white block text-[16px] hover:text-black rounded-lg p-2">
              Profile
            </Link>
          ):
          <div className='flex'>
            <div className='block lg:hidden w-[16px] h-[16px]'></div>
            <AuthButton></AuthButton>
          </div>
          }

          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="inline-flex items-center justify-center mr-4 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={toggleNavbar}>
            {isClick ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
    {/* Mobile */}
    {isClick && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href} className="text-white hover:bg-white block text-[16px] hover:text-black rounded-lg p-4">
              {item.text}
            </Link>
          ))}
          {delayedSession ? (
            <Link href="/profile" className="text-white hover:bg-white block text-[16px] hover:text-black rounded-lg p-4">
              Profile
            </Link>
          ):
          <div className='flex w-full pr-2'>
            <div className='w-[16px] h-[16px]'></div>
            <AuthButton></AuthButton>
          </div>
          }          
        </div>
      </div>
    )}
  </nav>

  )
}
export default Navbar;