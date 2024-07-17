"use client"
import { ActiveLinkProps } from '@/types';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ActiveLink = ({url , children} : ActiveLinkProps) => {
  const pathName  = usePathname();
  const isActive = url === pathName;
  
  return (
    <Link href={url} className ={`flex gap-3 items-center transition-all p-3 rounded-md cursor-pointer dark:text-grayDark
    ${isActive ? "!text-white bg-primary svg-animation" : " hover:!text-primary hover:!bg-primary hover:!bg-opacity-10"}`}>
        {children}
    </Link>
  )
}

export default ActiveLink