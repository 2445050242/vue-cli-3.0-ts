import axios from 'axios'

// 超时时间
axios.defaults.timeout = 5000


// http请求拦截器
var loadinginstace
axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})
// http响应拦截器
 axios.interceptors.response.use(data => {
    return data
}, error => {
    return Promise.reject(error)
})
     
export default axios