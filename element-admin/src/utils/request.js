import axios from 'axios'
import {Message} from 'element-ui'
import store from '@/store'
import {getToken} from '@/utils/auth'

// 创建一个axios的实例
const service = axios.create({
  // api的base_url
  baseURL: process.env.BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    console.log('request error:' + error)
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => response,
  error => {
    console.log('response err:' + error)
  }
)

export default service
