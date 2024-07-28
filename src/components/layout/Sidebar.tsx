"use client"
import React from 'react';
import { menuItem } from '@/constants';
import { TMenuItem } from '@/types';
import { ActiveLink } from '../common/index';
import { useAuth, UserButton } from '@clerk/nextjs';
import { ModeToggle } from '../common/ModeToggle';
import Link from 'next/link';
import { IconCart, IconUser } from '@/icons';

const Sidebar = () => {
  const {userId} = useAuth();
    return (
      <div className="p-5 border-r border-gray-200 bg-white dark:bg-grayDarker dark:border-opacity-10 flex flex-col">
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
          <Link href="/cart">
            <IconCart className='size-6'/>
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
