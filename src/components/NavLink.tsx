import Link from 'next/link'
import React from 'react'

type Props = {
    children: React.ReactNode,
    href: string,
}

export default function NavLink({ children, href }: Props) {
  return (
    <Link href={href} className="transition-all ease-in-out font-light text-neutral-600 hover:text-violet-500 dark:text-neutral-100">
        {children}
    </Link>
  )
}