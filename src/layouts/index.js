import styles from './index.css';
import Header from '@/layouts/Header'

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
    <Header />
      { props.children }
    </div>
  );
}

export default BasicLayout;
