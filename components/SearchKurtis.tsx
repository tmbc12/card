// components/SearchKurtis.tsx
import React, { useState } from 'react';
import { ProductDetails } from '../types'; // Adjust the import path as necessary

const SearchKurtis: React.FC = () => {
  const [products, setProducts] = useState<ProductDetails[]>([]);

  const searchKurtis = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}?=`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'insomnia/8.6.1',
      },
      body: JSON.stringify({
        search_string: "i need to wear something for the engagement. give me kurtis which are elegant and make me look like a wow",
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch');
    }

    const data = await response.json();
    setProducts(data.product_details);
  };

  return (
    <div>
      <button onClick={searchKurtis}>Search Kurtis</button>
      <div>
        {products.map((product, index) => (
          <div key={index}>
            <img src={product.imageUrl} alt={product.name} style={{ width: 100, height: 100 }} />
            <div>{product.name} - {product.price}</div>
            <a href={product.productUrl} target="_blank" rel="noopener noreferrer">View Product</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchKurtis;
