import React from 'react';
import classnames from 'classnames';
import styles from './index.less';

const Banner: React.FC = props => {
  return (
    <div className={styles.bannerWrap}>
        <h1 className={styles.bannerTit}>努力做有价值的运营文章</h1>
        <p className={styles.desc}>这里，只求分享与免费；这里，不隐含扭曲的价值观，而是整合并充盈正能量；</p>
        <div className={classnames(styles.line, styles['line-l30'])}></div>
        <div className={classnames(styles.line, styles['line-l90-d2'])}></div>
    </div>
  );
};

export default Banner;
