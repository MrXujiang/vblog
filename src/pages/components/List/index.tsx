import React from 'react';
import ListItem from '../ListItem';
import { formatTime } from 'utils';
import styles from './index.less';

// const data = [
//   {
//     tit: '运营里的三把斧',
//     desc: '将一个接口转换成客户希望的另一个接口，适配器模式使接口不兼容的那些类可以一起工作',
//     time: '3月28, 2020',
//     label: ['社群运营', '用户运营']
//   },
//   {
//     tit: '运营里的二把斧',
//     desc: '将一个接口转换成客户希望的另一个接口，适配器模式使接口不兼容的那些类可以一起工作',
//     time: '3月29, 2020',
//     label: ['社群运营', '用户运营']
//   },
//   {
//     tit: '运营里的三把斧',
//     desc: '将一个接口转换成客户希望的另一个接口，适配器模式使接口不兼容的那些类可以一起工作',
//     time: '3月28, 2020',
//     label: ['社群运营', '用户运营']
//   },
//   {
//     tit: '运营里的二把斧',
//     desc: '将一个接口转换成客户希望的另一个接口，适配器模式使接口不兼容的那些类可以一起工作',
//     time: '3月29, 2020',
//     label: ['社群运营', '用户运营']
//   }
// ]

interface ListItemType {
  author: string,
  title: string,
  desc: string,
  ct: number,
  label: string[],
  type: string,
  uid: string
}

interface Props {
  data: ListItemType[]
}

export default function(props:Props) {
  const { data } = props
  return (
    <div className={styles.list}>
      {
        data && data.map((item, i) => {
          let { title, desc, ct, label, uid, type } = item
          return <ListItem 
                  title={title} 
                  desc={desc} 
                  time={formatTime(ct)} 
                  label={label}
                  type={type}
                  uid={uid}
                  key={uid}
                />
        })
      }
    </div>
  );
}
