'use client'; 
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export const Search = () => {
    const router = useRouter();
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/search/${query}`);
        setQuery("");
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
               <div className="flex items-center gap-2 ">
               <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Tìm kiếm khóa học"
                    className='text-sm p-2 border border-grayDark rounded-lg w-80 focus:border-red-500'
                    required
                />
                <button type="submit">Tìm kiếm</button>
               </div>
            </form>
        </div>
    );
};
