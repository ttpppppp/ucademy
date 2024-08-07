"use client"; // Đảm bảo đây là Client Component

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchResults = ({ params }: { params: { slug: string } }) => {
  const [results, setResults] = useState<any[]>([]);
  const slug = params.slug; // Sử dụng tham số từ props

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get('http://localhost:8080/category');
        // Truy cập thuộc tính `data` để lấy mảng kết quả
        if (Array.isArray(response.data.data)) {
          setResults(response.data.data);
        } else {
          console.error('Expected an array but got:', response.data.data);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchResults();
  }, []); // Danh sách phụ thuộc rỗng

  return (
    <div>
      <h1>Search Results for: {slug}</h1>
      <ul>
        {results.map((item) => (
          <li key={item.categoryId}>{item.categoryName}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
