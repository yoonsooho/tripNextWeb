import TripRecommend from '@/containers/TripRecommend/TripRecommend';
import TripSearchListContainer from '@/containers/TripSearchListContainer/TripSearchListContainer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <TripRecommend />
      <TripSearchListContainer />
    </main>
  );
}
