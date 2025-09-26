import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

export default function SignUpForm() {
  return (
    <div>
        <h2 className='text-3xl font-medium text-neutral-900'>Your gateway to content monetization</h2>
        <p className='mt-2 text-neutral-600'>Sign up now -- whether you want to publish, discover, or support creators. Already have an account ? <Link href="/auth/signin" className='text-blue-400 hover:text-blue-500 underline underline-offset-4'>sign in</Link> </p>
        <form action="" className='my-6 [&>div]:my-4'>
            <div className='[&>label]:my-2'>
                <Label>Username</Label>
                <Input type='text' placeholder='spacetip' />
            </div>
            <div className='[&>label]:my-2'>
                <Label>Email</Label>
                <Input type='email' placeholder='creator@spacetip.com' />
            </div>
            <div className='[&>label]:my-2'>
                <Label>Password</Label>
                <Input type='password' placeholder='********' />
            </div>
            <div>
                <Button className='inline-flex w-full py-4'>Sign up</Button>
            </div>
        </form>
        <div className='flex justify-center items-center gap-2 my-4'>
            <div className='w-full h-[0.5px] bg-neutral-400'></div>
            <p className='text-xs text-neutral-600'>OR</p>
            <div className='w-full h-[0.5px] bg-neutral-400'></div>
        </div>
        <div>
            <Button variant="outline" className='inline-flex w-full py-4'>
                Sign up with Google
            </Button>
        </div>
    </div>
  )
}