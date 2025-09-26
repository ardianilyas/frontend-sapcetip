import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

export default function SignInForm() {
  return (
    <div>
        <h2 className='text-3xl font-medium text-neutral-900'>Sign in to stay connected</h2>
        <p className='mt-2 text-neutral-600'>Sign in to connect, support, or keep creating -- your journey continues here. Don&apos;t have an account ? <Link href="/auth/signup" className='text-blue-400 hover:text-blue-500 underline underline-offset-4'>sign up</Link> </p>
        <form action="" className='my-6 [&>div]:my-4'>
            <div className='[&>label]:my-2'>
                <Label>Email</Label>
                <Input type='email' placeholder='creator@spacetip.com' />
            </div>
            <div className='[&>label]:my-2'>
                <Label>Password</Label>
                <Input type='password' placeholder='********' />
            </div>
            <div>
                <Button className='inline-flex w-full py-4'>Sign in</Button>
            </div>
        </form>
        <div className='flex justify-center items-center gap-2 my-4'>
            <div className='w-full h-[0.5px] bg-neutral-400'></div>
            <p className='text-xs text-neutral-600'>OR</p>
            <div className='w-full h-[0.5px] bg-neutral-400'></div>
        </div>
        <div>
            <Button variant="outline" className='inline-flex w-full py-4'>
                Sign in with Google
            </Button>
        </div>
    </div>
  )
}