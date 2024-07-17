import React from 'react';
import { menuItem } from '@/constants';
import { TMenuItem } from '@/types';
import { ActiveLink } from '../common/index';
import { UserButton } from '@clerk/nextjs';
import { ModeToggle } from '../common/ModeToggle';

const Sidebar = () => {
    return (
      <div className="p-5 border-r border-gray-200 bg-white dark:bg-grayDarker dark:border-opacity-10 flex flex-col">
        <a href='/' className="logo font-bold text-3xl inline-block mb-5 text-primary">Ucademy</a>
        <ul className='flex flex-col gap-4'>
          {menuItem.map((item, index) => (
            <MenuItem key={index} url={item.url} title={item.title} icon={item.icon} />
          ))}
        </ul>
        <div className="flex items-center justify-end mt-auto gap-5">
          <ModeToggle></ModeToggle>
          <UserButton />
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
