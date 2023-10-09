'use client';
import Image from 'next/image';
import React from 'react';
import styles from './TripRecommendBox.module.css';

interface propsI {
  name: string;
  koreaName: string;
  src: any;
}

const TripRecommendBox = (props: propsI) => {
  return (
    <div className={styles.wraaper}>
      <Image
        src={props.src}
        fill
        style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
        alt={`추천 여행지${props.koreaName}`}
        placeholder="blur"
        loading="lazy"
      />
      <div className={styles.titleWraaper}>
        <div>{props.name}</div>
        <div>{props.koreaName}</div>
      </div>
    </div>
  );
};

export default TripRecommendBox;
