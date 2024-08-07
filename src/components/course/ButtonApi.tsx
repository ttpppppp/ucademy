'use client'; // This directive tells Next.js this is a client component

import React, { useState } from 'react';

const ApiButton = () => {
  const [data, setData] = useState(null);

  async function getApi() {
    try {
      const response = await fetch('http://localhost:8080/category'); 
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setData(result);
      console.log(result); 
    } catch (error) {
      console.error('Error:', error); 
    }
  }

  return (
    <div>
      <button onClick={getApi}>Call API</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default ApiButton;
