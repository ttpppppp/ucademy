import PageNotFound from '@/app/not-found';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React, { use } from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const{userId} = auth();
    if(!userId) return redirect("/sign-in");
  return (
    <div>
      {children}
    </div>
  );
};

export default AdminLayout;
