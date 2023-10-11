'use client';
import { useState } from 'react';
// import Hawai from '../../../public/img/Hawai.jpg';
import Hawai from '../../../public/img/Hawai.jpg';
import Jeju from '../../../public/img/Jeju.jpg';
import Osaka from '../../../public/img/Osaka.jpg';
import SearchBar from './SearchBar';
import styles from './TripSearchListCompo.module.css';
import TripSearchListEl from './TripSearchListEl';
const TripSearchListCompo = () => {
  const [inputValue, setInputValue] = useState('');
  const [btnFocus, setBtnFoucs] = useState(0);
  const inputValueChange = (value: string) => {
    setInputValue(value);
  };
  const btnArr = [
    { id: 0, title: '전체' },
    { id: 1, title: '국내' },
    { id: 2, title: '해외' },
  ];
  const info = [
    {
      name: 'Hawai',
      koreaName: '하와이',
      src: Hawai,
      isNew: false,
    },
    {
      name: 'Jeju',
      koreaName: '제주',
      src: Jeju,
      isNew: true,
    },
    {
      name: 'Osaka',
      koreaName: '오사카',
      src: Osaka,
      isNew: false,
    },
    {
      name: 'Hawai',
      koreaName: '하와이',
      src: Hawai,
      isNew: false,
    },
    {
      name: 'Jeju',
      koreaName: '제주',
      src: Jeju,
      isNew: true,
    },
    {
      name: 'Osaka',
      koreaName: '오사카',
      src: Osaka,
      isNew: true,
    },
    {
      name: 'Jeju',
      koreaName: '제주',
      src: Jeju,
      isNew: true,
    },
    {
      name: 'Osaka',
      koreaName: '오사카',
      src: Osaka,
      isNew: false,
    },
    {
      name: 'Osaka',
      koreaName: '오사카',
      src: Osaka,
      isNew: true,
    },
    {
      name: 'Osaka',
      koreaName: '오사카',
      src: Osaka,
      isNew: true,
    },
    {
      name: 'Osaka',
      koreaName: '오사카',
      src: Osaka,
      isNew: true,
    },
    {
      name: 'Osaka',
      koreaName: '오사카',
      src: Osaka,
      isNew: true,
    },
    {
      name: 'Osaka',
      koreaName: '오사카',
      src: Osaka,
      isNew: true,
    },
    {
      name: 'Osaka',
      koreaName: '오사카',
      src: Osaka,
      isNew: true,
    },
    {
      name: 'Osaka',
      koreaName: '오사카',
      src: Osaka,
      isNew: true,
    },
    {
      name: 'Osaka',
      koreaName: '오사카',
      src: Osaka,
      isNew: true,
    },
    {
      name: 'Osaka',
      koreaName: '오사카',
      src: Osaka,
      isNew: true,
    },
    {
      name: 'Osaka',
      koreaName: '오사카',
      src: Osaka,
      isNew: true,
    },
    {
      name: 'Osaka',
      koreaName: '오사카',
      src: Osaka,
      isNew: true,
    },
    {
      name: 'Osaka',
      koreaName: '오사카',
      src: Osaka,
      isNew: true,
    },
    {
      name: 'Osaka',
      koreaName: '오사카',
      src: Osaka,
      isNew: true,
    },
    {
      name: 'Osaka',
      koreaName: '오사카',
      src: Osaka,
      isNew: true,
    },
  ];
  return (
    <div className={styles.wrraper}>
      <SearchBar inputValueChange={inputValueChange} />
      <div className={styles.btnBox}>
        {btnArr.map((el, i) => {
          return (
            <button
              className={`${btnFocus === el.id ? styles.focus : null}`}
              onClick={() => setBtnFoucs(i)}
            >
              {el.title}
            </button>
          );
        })}
      </div>
      <div className={styles.ListBox}>
        {info.map((el, i) => {
          return (
            <TripSearchListEl
              name={el.name}
              koreaName={el.koreaName}
              src={el.src}
              isNew={el.isNew}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TripSearchListCompo;
