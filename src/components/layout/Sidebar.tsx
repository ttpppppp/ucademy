"use client"
import React, { useState } from 'react';
import { menuItem } from '@/constants';
import { TMenuItem } from '@/types';
import { ActiveLink } from '../common/index';
import { useAuth, UserButton } from '@clerk/nextjs';
import { ModeToggle } from '../common/ModeToggle';
import Link from 'next/link';
import { IconCart, IconUser } from '@/icons';
import { useCart } from '@/app/Context/CartContext';
const Sidebar = () => {
  const {userId} = useAuth();
  const { cartCount } = useCart();
    return (
      <div className="p-5 border-r border-gray-200 bg-white dark:bg-grayDarker dark:border-opacity-10 flex flex-col h-screen">
        <Link href='/' className="logo font-bold text-3xl inline-block mb-5 text-primary">Ucademy</Link>
        <ul className='flex flex-col gap-4'>
          {menuItem.map((item, index) => (
            <MenuItem key={index} url={item.url} title={item.title} icon={item.icon} />
          ))}
        </ul>
        <div className="flex items-center justify-end mt-auto gap-5">
          <ModeToggle></ModeToggle>
          {
            !userId ?
            (<Link href='/sign-in' className='size-10 rounded-lg bg-primary text-white flex items-center justify-center p-2'>
                <IconUser/>
            </Link>) : <UserButton />
          }
          <Link href="/cart" className='relative'>
            <IconCart className='size-6'/>
            <span className='absolute -top-3 -right-2 bg-red-600 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs'>
              {cartCount}
            </span>
          </Link>
        </div>
      </div>
    );
  };
  
function MenuItem({url = "/" ,title = "" , icon}: TMenuItem){
    return(
        <li>
          <ActiveLink url= {url}> 
            {icon} {title}
          </ActiveLink>
        </li>
    )
       
}
export default Sidebar;
