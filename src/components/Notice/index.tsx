import React from 'react';
import styles from './index.less';

const Notice: React.FC = props => {
  return (
    <div className={styles.noticeWrap}>
      <div className={styles.notice}>
        网站简介: 运营之光网站主要传授布道运营知识, 致力于打造最优质的运营内容与分享,
        笔者将传授多年的运营经验以及有意思的运营试验,赶快来学习吧~
      </div>
    </div>
  );
};

export default Notice;
