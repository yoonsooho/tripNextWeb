'use client';
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import styles from './TripRecommend.module.css';
// Import Swiper styles
import 'swiper/css';
import Hawai from '../../../public/img/Hawai.jpg';
import Jeju from '../../../public/img/Jeju.jpg';
import Osaka from '../../../public/img/Osaka.jpg';
import Image from 'next/image';
import TripRecommendBox from '@/components/TripRecommendBox/TripRecommendBox';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TripRecommend = () => {
  //   SwiperCore.use([Navigation]);
  const swiperRef = useRef();
  const recommendInfo = [
    {
      name: 'Hawai',
      koreaName: '하와이',
      src: Hawai,
    },
    {
      name: 'Jeju',
      koreaName: '제주',
      src: Jeju,
    },
    {
      name: 'Osaka',
      koreaName: '오사카',
      src: Osaka,
    },
    {
      name: 'Osaka',
      koreaName: '오사카',
      src: Osaka,
    },
  ];
  return (
    <div className={styles.swiperSlideWrapper}>
      <h3 className={styles.title}>추천 여행지</h3>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false }}
      >
        {recommendInfo.map((el, i) => {
          return (
            <SwiperSlide key={i} className={styles.swiperSlide}>
              <TripRecommendBox name={el.name} koreaName={el.koreaName} src={el.src} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TripRecommend;
