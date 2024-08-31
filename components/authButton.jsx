"use client"
import React from 'react'
import { Button } from '@/components/ui/button';
import { project } from '@/app/config/config';
import Link from 'next/link';

export const AuthButton = () => {

  const cta = "Login/Signup";
  return (
    <main>
    <Link href="/profile/login"><Button className='bg-primary'>{cta}</Button></Link>
    </main>
  )
}
