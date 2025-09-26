import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="min-h-screen w-full flex md:p-4">
        <div className="basis-4/12 hidden md:block bg-gradient-to-b from-violet-700 to-violet-900 rounded-3xl py-12">
            <div className='px-12 h-full flex flex-col justify-between'>
                <div>
                    <h2 className='mb-3 text-white text-4xl font-medium'>Turn Your Creative Passion Into Real Income</h2>
                    <p className='text-neutral-100 font-extralight'>A monetization platform that helps creators earn directly from their audience while growing authentic communities.</p>
                </div>
                <p className="text-neutral-100 font-extralight">Have any issues ? kindly contact help@spacetip.com</p>
            </div>
        </div>
        <div className="basis-full md:basis-8/12 w-full bg-white flex justify-center items-center p-12">
            <div className="max-w-lg w-full">
                {children}
            </div>
        </div>
    </div>
  )
}