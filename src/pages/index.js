import styles from './index.less';
import { Carousel } from 'antd';
import { formatMessage } from 'umi-plugin-locale';

export default function() {
  return (
<Carousel autoplay autoplaySpeed="62" effect="fade" className={styles.carousel}>
    <div className={styles.carouselImage1}></div>
    <div className={styles.carouselImage2}></div>
    <div className={styles.carouselImage3}></div>
  </Carousel>
  );
}
