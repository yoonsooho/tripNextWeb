import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './TripSearchListEl.module.css';

interface propsI {
  name: string;
  koreaName: string;
  src: StaticImageData;
  isNew: boolean;
}

const TripSearchListEl = (props: propsI) => {
  return (
    <div className={styles.wraaper}>
      <div className={styles.imageBox}>
        {props.isNew && <p className={styles.newBeige}>New</p>}
        <Image
          src={props.src}
          style={{
            objectFit: 'cover',
            overflow: 'hidden',
            width: '100%',
            height: '250px',
            borderRadius: '10px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.2)',
          }}
          alt={`추천 여행지${props.koreaName}`}
          placeholder="blur"
          loading="lazy"
        />
      </div>
      <div className={styles.titleWraaper}>
        {props.isNew && <p className={styles.new}>새로운 여행지</p>}
        <h2>{props.name}</h2>
        <p>{props.koreaName}</p>
      </div>
    </div>
  );
};

export default TripSearchListEl;
