import Image from 'next/image';
import styles from './page.module.css';
import TripRecommend from '@/containers/TripRecommend/TripRecommend';

export default function Home() {
  return (
    <main className={styles.main}>
      <TripRecommend />
    </main>
  );
}
