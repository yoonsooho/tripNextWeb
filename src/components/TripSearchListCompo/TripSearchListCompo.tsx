'use client';
import { useState } from 'react';
import SearchBar from './SearchBar';

const TripSearchListCompo = () => {
  const [inputValue, setInputValue] = useState('');
  const inputValueChange = (value: string) => {
    setInputValue(value);
  };
  return (
    <div>
      <SearchBar inputValueChange={inputValueChange} />
    </div>
  );
};

export default TripSearchListCompo;
