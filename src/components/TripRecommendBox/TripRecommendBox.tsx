'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './TripRecommendBox.module.css';

interface propsI {
  name: string;
  koreaName: string;
  src: StaticImageData;
  isNew: boolean;
}

const TripRecommendBox = (props: propsI) => {
  return (
    <div className={styles.wraaper}>
      {props.isNew && <p className={styles.newBeige}>New</p>}
      <Image
        src={props.src}
        fill
        style={{
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          overflow: 'hidden',
          borderRadius: '10px',
        }}
        alt={`추천 여행지${props.koreaName}`}
        placeholder="blur"
        loading="lazy"
      />
      <div className={styles.titleWraaper}>
        <h2>{props.name}</h2>
        <div>{props.koreaName}</div>
      </div>
    </div>
  );
};

export default TripRecommendBox;
