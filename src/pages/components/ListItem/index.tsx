import React from 'react';
import { Link } from 'umi';
import Bg from '@/assets/bg.png'
import styles from './index.less';

interface Props {
  title: string,
  desc: string,
  time: string,
  label: string[],
  type: string,
  uid: string
}

export default function(props:Props) {
  const { title, desc, time, label, type, uid } = props
  return (
    <div className={styles.listItem}>
      <Link to={`/detail?type=${type}&id=${uid}`}>
        <div className={styles.topImg}>
          <img src={Bg} alt=""/>
          <p>{ title }</p>
        </div>
        <div className={styles.descWrap}>
          <div className={styles.desc}>{ desc }</div>
          <div className={styles.time}>{ time }</div>
        </div>
      </Link>
      {
        label && label.length && 
        <div className={styles.ft}>
          <div className={styles.labelWrap}>
            {
              label.map((item, i) => {
                return <div className={styles.label} key={i}>{ item }</div>
              })
            }
          </div>
        </div>
      }
    </div>
  );
}
