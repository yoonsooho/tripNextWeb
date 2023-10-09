import TripSearchListCompo from '@/components/TripSearchListCompo/TripSearchListCompo';
import React from 'react';
import styles from './TripSearchListContainer.module.css';

const TripSearchListContainer = () => {
  return (
    <div className={styles.wrraper}>
      <h1 className={styles.title}>어디로 여행을 떠나시나요?</h1>
      <TripSearchListCompo />
    </div>
  );
};

export default TripSearchListContainer;
