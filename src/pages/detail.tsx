import React, { useState, useEffect } from 'react';
import req, { CustomResponse } from 'utils/req';
import { formatTime } from 'utils';
import styles from './detail.less';

interface Detail {
  author: string,
  content: string,
  ct: number,
  desc: string,
  label: string[],
  title: string,
  type: string,
  uid: string
}

export default function(props:any) {
  const [detail, setDetail] = useState<Detail | null>(null)
  useEffect(() => {
    const { type, id } = props.location.query
    req.get('/articles/get', { params: {
      type, id
    }}).then((res:CustomResponse) => {
      console.log(res)
      res.result && setDetail(res.result)
    })
  }, [])
  return (
    <div className={styles.detailWrap}>
      <div className="cw cw-60">
        <div className={styles.detail}>
          {
            !!detail && 
            <>
              <div className={styles.header}>
                <div className={styles.tit}>{ detail.title }</div>
                <div className={styles.tip}>
                  {
                    !!detail.label &&
                    detail.label.map((item, i) => <span className={styles.label} key={i}>{item}</span>)
                  }
                  <span className={styles.time}>{formatTime(detail.ct)}</span>
                </div>
              </div>
              <div className={styles.content} dangerouslySetInnerHTML={{__html: detail.content}}>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
}
