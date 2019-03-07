import styles from './index.less';
import Header from '@/layouts/Header'
import { Layout } from 'antd';


function BasicLayout(props) {
  return (
    <Layout className={styles.layout}>
      <Header {...props} />
        {props.children}
    </Layout>
  );
}

export default BasicLayout;
