"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useRegister } from '../hooks/useRegister'
import { useForm } from 'react-hook-form'
import { registerSchema, RegisterSchema } from '../validators/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { handleApiError } from '@/lib/api-error'

export default function SignUpForm() {
    const router = useRouter();
    const { mutate, isPending } = useRegister();

    const { 
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) });

    const onSubmit = (data: RegisterSchema) => {
        mutate(data, {
            onSuccess: (res) => {
                toast.success(res.message);
                router.push("/auth/signin");
            },
            onError: (err) => handleApiError(err),
        })
    }

    return (
        <div>
            <h2 className='text-3xl font-medium text-neutral-900'>Your gateway to content monetization</h2>
            <p className='mt-2 text-neutral-600'>Sign up now -- whether you want to publish, discover, or support creators. Already have an account ? <Link href="/auth/signin" className='text-blue-400 hover:text-blue-500 underline underline-offset-4'>sign in</Link> </p>
            <form onSubmit={handleSubmit(onSubmit)} className='my-6 [&>div]:my-4'>
                <div className='[&>label]:my-2'>
                    <Label>Username</Label>
                    <Input type='text' {...register('name')} placeholder='spacetip' />
                    {errors.name && <p className='mt-1 text-xs text-red-500'>{errors.name.message}</p>}
                </div>
                <div className='[&>label]:my-2'>
                    <Label>Email</Label>
                    <Input type='email' {...register("email")} placeholder='creator@spacetip.com' />
                    {errors.email && <p className='mt-1 text-xs text-red-500'>{errors.email.message}</p>}
                </div>
                <div className='[&>label]:my-2'>
                    <Label>Password</Label>
                    <Input type='password' {...register("password")} placeholder='********' />
                    {errors.password && <p className='mt-1 text-xs text-red-500'>{errors.password.message}</p>}
                </div>
                <div>
                    <Button disabled={isPending} className='inline-flex w-full py-4'>
                        {isPending ? "Signing up..." : "Sign up"}
                    </Button>
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