/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'
import { useLogin } from '../hooks/useLogin'
import { useForm } from 'react-hook-form'
import { loginSchema, LoginSchema } from '../validators/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { handleApiError } from '@/lib/api-error'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export default function SignInForm() {
    const { mutate, isPending } = useLogin();
    const router = useRouter();

    const { 
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });

    const onSubmit = (data: LoginSchema) => {
        mutate(data, {
            onSuccess: (res) => {
                toast.success(res.message);
                router.push("/");
            },
            onError: (err: any) => handleApiError(err),
        })
    }

    return (
        <div>
            <h2 className='text-3xl font-medium text-neutral-900'>Sign in to stay connected</h2>
            <p className='mt-2 text-neutral-600'>Sign in to connect, support, or keep creating -- your journey continues here. Don&apos;t have an account ? <Link href="/auth/signup" className='text-blue-400 hover:text-blue-500 underline underline-offset-4'>sign up</Link> </p>
            <form onSubmit={handleSubmit(onSubmit)} className='my-6 [&>div]:my-4'>
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
                    <Button disabled={isPending} className='inline-flex w-full py-4'>{isPending ? "Signing in..." : "Sign in"}</Button>
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