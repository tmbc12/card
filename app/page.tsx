// pages/index.tsx
import React from 'react';
import SearchKurtis from '../components/SearchKurtis';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Our Fashion Store</h1>
      <SearchKurtis />
    </div>
  );
};

export default HomePage;
