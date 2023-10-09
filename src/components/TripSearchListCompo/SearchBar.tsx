'use client';
import React from 'react';
import styles from './SearchBar.module.css';
import Image from 'next/image';
import searchIcon from '../../../public/img/search_icon.png';

interface propsI {
  inputValueChange: any;
}

const SearchBar = (props: propsI) => {
  return (
    <div className={styles.wrraper}>
      <input
        className={styles.input}
        onChange={(e) => {
          props.inputValueChange(e.target.value);
        }}
        placeholder="국가나 도시명으로 검색해보세요"
      />
      <Image src={searchIcon} alt="돋보기" className={styles.searchIcon} />
    </div>
  );
};

export default SearchBar;
