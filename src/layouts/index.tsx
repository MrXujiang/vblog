import React from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import Notice from 'components/Notice';
import styles from './index.less';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <Header />
      <Banner />
      {
        props.location.pathname.indexOf('/detail') < 0 &&
        <div className="cw" style={{marginTop: '-42px'}}><Notice /></div>
      }
      <div className={styles.pageContent}>
        { props.children }
      </div>
      <div className={styles.footer}>
        技术支持@<a href="https://juejin.im/user/5b985481f265da0a87264251/posts">趣谈前端-徐小夕</a>
      </div>
    </div>
  );
};

export default BasicLayout;
