import React, { useState, useEffect } from 'react';
import List from './components/List';
import req, { CustomResponse } from 'utils/req';
import styles from './index.less';
import { formatMessage } from 'umi-plugin-locale';
export default function() {
  const [list, setList] = useState([])
  useEffect(() => {
    req.get('/articles/all?type=operation').then((res:CustomResponse) => {
      res.result && setList(res.result)
    })
  }, [])
  return (
    <div className={styles.homeWrap}>
      <div className="cw">
        <List data={list} />
      </div>
    </div>
  );
}
