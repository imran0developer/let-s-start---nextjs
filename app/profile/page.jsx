"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

import {Card} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

function Profile() {
    
    const { data: session } = useSession()  
 
    // checking if sessions exists
    if (session) {
      // rendering components for logged in users
      return (
        <main className='w-full bg-blue-500 min-h-screen flex items-start justify-center'>
        <Card className='bg-aqua lg:h-[660px] w-full mx-6 lg:w-[80%]'>
            <div className='flex items-center'><h3 className='text-start w-full text-[20px] font-semibold'>Profile</h3></div>
                <Image
                        width={100}
                        height={100}
                        src={session.user?.image}
                        className="object-cover rounded-full mx-auto my-4"
                    />
            
            <h3 className='text-center w-full font-semibold'>{session.user?.name}</h3>
            <h3 className='text-center w-full font-light'>{session.user?.email}</h3>
            <h3 className='text-center w-full font-medium mt-4 underline cursor-pointer' onClick={() => signOut()}>Sign out</h3>

        </Card>
        </main>
      )
    }  
    // rendering components for not logged in users
    return (
      <main className=' bg-aqua'>
      </main>
      
      //   <main className='h-[500px] flex items-center justify-center mt-16'>
      //   <Card className='p-8 shadow-lg bg-white rounded-lg'>
      //       <div className="flex flex-col justify-center items-center">
      //           <p className="text-center text-[20px]">Haven't Joined Yet? Log In Now</p>
      //           <Image
      //                   width={100}
      //                   height={100}
      //                   src={'/no_user.svg'}
      //                   className="object-cover rounded-full mx-auto my-4"
      //               />                
      //           <Button className='bg-black' onClick={() => signIn('google')}><Image width={30} height={30} src={'/color_google.svg'} className="mr-4 h-4 w-4" /> Login with Google </Button>
      //           <Button className='bg-black mt-2' onClick={() => signIn('github')}><Image width={30} height={30} src={'/color_github.svg'} className="mr-4 h-4 w-4" /> Login with Github </Button>
      //       </div>
      // </Card>
      // </main>

    )
  
  }

export default Profile;


// import Image from "next/image"
// import Link from "next/link"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// export function Dashboard() {
//   return (
//     <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
//       <div className="flex items-center justify-center py-12">
//         <div className="mx-auto grid w-[350px] gap-6">
//           <div className="grid gap-2 text-center">
//             <h1 className="text-3xl font-bold">Login</h1>
//             <p className="text-balance text-muted-foreground">
//               Enter your email below to login to your account
//             </p>
//           </div>
//           <div className="grid gap-4">
//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="m@example.com"
//                 required
//               />
//             </div>
//             <div className="grid gap-2">
//               <div className="flex items-center">
//                 <Label htmlFor="password">Password</Label>
//                 <Link
//                   href="/forgot-password"
//                   className="ml-auto inline-block text-sm underline"
//                 >
//                   Forgot your password?
//                 </Link>
//               </div>
//               <Input id="password" type="password" required />
//             </div>
//             <Button type="submit" className="w-full">
//               Login
//             </Button>
//             <Button variant="outline" className="w-full">
//               Login with Google
//             </Button>
//           </div>
//           <div className="mt-4 text-center text-sm">
//             Don&apos;t have an account?{" "}
//             <Link href="#" className="underline">
//               Sign up
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="hidden bg-muted lg:block">
//         <Image
//           src="/placeholder.svg"
//           alt="Image"
//           width="1920"
//           height="1080"
//           className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
//         />
//       </div>
//     </div>
//   )
// }
