import React, { useState, useEffect } from 'react';
import { Link } from 'umi';
import {
  SearchOutlined,
  CloseOutlined
} from '@ant-design/icons';
import classnames from 'classnames';
import styles from './index.less';

const Header: React.FC = props => {
  const [isShowSearch, setShowSearch] = useState(false)
  const onSearchClick = () => {
    setShowSearch(!isShowSearch)
  }
  useEffect(() => {

  }, [])
  return (
    <div className={styles.headerWrap}>
      <div className="cw">
        <div className={styles.logo}>运营之光</div>
        <div className={styles.menuWrap}>
          <div className={styles.linkItem}><Link to="/">首页</Link></div>
          <div className={styles.linkItem}><Link to="/history">文章归档</Link></div>
          <div className={styles.linkItem}><Link to="/about">关于我</Link></div>
        </div>
        <div className={styles.navRight}>
          <div className={styles.searchBtn} onClick={onSearchClick}>{!isShowSearch ? <SearchOutlined /> : <CloseOutlined />}</div>
        </div>
      </div>
      <div className={classnames(styles.searchWrap, isShowSearch ? styles.isShow : '')}>
        <input type="text" placeholder="请输入搜索内容" />
        <span className={styles.searchBtn}>搜索</span>
      </div>
    </div>
  );
};

export default Header;
