import Sidebar from '@/components/layout/Sidebar';
import React from 'react';
import { CartProvider } from '../Context/CartContext';
import { Search } from '@/components/layout/Search';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="wrapper flex h-screen">
      <CartProvider>
        <div className="sidebar flex-none w-72 h-full fixed">
          <Sidebar />
        </div>
        <main className="content flex-1 ml-72 overflow-auto">
         <div className="bg-white p-3 mb-2">
          <Search/>
         </div>
          <div className="px-5">
            {children}
          </div>
        </main>
      </CartProvider>
    </div>
  );
}

export default Layout;
