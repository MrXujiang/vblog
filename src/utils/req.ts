import axios from 'axios'
import * as qs from 'qs'

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://zhikume.cn/api/v0' : 'http://zhikume.cn/api/v0'

axios.defaults.baseURL = BASE_URL;
// axios.defaults.withCredentials = true;

// qs 序列化 防止XSRF攻击 可以对深层次的json array进行序列化
axios.interceptors.request.use((config: any): any => {
  // console.log(config)
  if (config.url.indexOf('?') !== -1) {
      config.url += `&t=${new Date().getTime()}`;
  } else {
      config.url += `?t=${new Date().getTime()}`;
  }
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  config.transformRequest = [(data: any, headers: any) => {
      return qs.stringify(data, {
          allowDots: true
      })
  }];
  // `paramsSerializer` 是一个负责 `params` 序列化的函数
  config.paramsSerializer = (params: any) => {
      return qs.stringify(params, {
          arrayFormat: 'repeat'
      })
  };
  return config;
}, (error: any) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((response: any): any => {
  const { data } = response;
  if(data.state === 200) {
    return data
  }else {
    Promise.reject(data.msg);
  }
}, (error: any) => {
  Promise.reject(error);
});

export interface CustomResponse {
  state: number,
  msg: string,
  result: any[] | object
}

export default axios