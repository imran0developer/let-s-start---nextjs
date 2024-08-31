"use client"
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const Login = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center py-12">
        <div className="mx-auto grid w-[400px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/profile/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full border hover:border-black font-semibold text-black bg-primary hover:bg-primary-foreground  text-primary-foreground border-primary-foreground">
              Login
            </Button>
            <h1 className="w-full text-center text-1xl font-medium">OR</h1>

        <Button className={cn('text-black border font-medium border-black hover:bg-primary hover:text-primary-foreground')} onClick={() => signIn('google')}><Image width={30} height={30} src={'/color_google.svg'} className="mr-4 h-4 w-4" /> Continue with Google </Button>
        <Button className={cn('text-black border font-medium border-black hover:bg-primary hover:text-primary-foreground')} onClick={() => signIn('github')}><Image width={30} height={30} src={'/color_github.svg'} className="mr-4 h-4 w-4" /> Continue with Github </Button> 

          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/profile/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
        </div>
  )
}

export default Login