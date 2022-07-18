
import axios from 'axios';
import { Message } from 'element-ui'; //引入单个消息弹窗组件
import local from '@/utils/local';
import router from '@/router'   //引入路由，index是关键词，会自动匹配

/* const BASE_URL = ''

//创建axios实例
const service = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': contentType,
    }
}) */

//设置统一的服务器地址
// axios.defaults.baseURL = 'http://192.168.110.22:16573';
// axios.defaults.baseURL = 'http://192.168.110.43:16573';
axios.defaults.baseURL = 'http://192.168.110.31:8089/api/app/kskt-mes';

//请求拦截(Ajax发送出去之前)
axios.interceptors.request.use(config => {
  //从本地拿到令牌
  let token = local.get('token') || ''
  if (token) {
    //将令牌挂到config.headers.Authorization上，后面所有的请求都必须携带令牌
    config.headers.Authorization = token;
    config.headers.token = token
  }
  /* if(config.method === 'get') {
      config.data = {unused: 0 }
  }
  config.headers["Content-Type"] = "application/json;charset=UTF-8" */
  return config;
}, err => {
  return Promise.reject(err)
})

//响应拦截接收数据之前)
axios.interceptors.response.use(response => {
  let { code, msg } = response.data;
  if (code !== undefined && msg !== undefined) {
    /* // 统一设置设置提示，成功和失败
    if(code === 0 || code == 200){
        Message({
            message: msg,
            type: 'success'
        })
    }else{
        Message({
            message: msg,
            type: 'error'
        })
    } */
  }
  return response;
}, (err) => {
  //如果错误码是401，说明令牌是假的，未授权
  if (err.response.status === 401) {
    router.push('/pc-login')
  }
  return Promise.reject(err)
})

//暴露出去
export default axios