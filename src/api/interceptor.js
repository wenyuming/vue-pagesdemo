import axios from 'axios'
// function getQueryString(name) {
//   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
//   var r = window.location.search.substr(1).match(reg)
//   if (r != null) { return unescape(r[2]) }
//   return null
// }
let v = this
console.log(v, 'v')
axios.defaults.timeout = 5000
axios.interceptors.request.use(config => {
  // config.headers.common['X-Requested-With'] = 'XMLHttpRequest'
  // config.headers.common['Accept'] = 'application/json'
  // config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
  // config.headers.common['Origin'] = v.config.baseserverURI
  return config
}, error => {
  return Promise.reject(error)
})

// http响应拦截器
axios.interceptors.response.use(res => { // 响应成功关闭loading
  // console.info(res.data.datas.host);
  if (res.data.code === 302) {
    window.location.href = `${process.env.loginRewrite}`
  }
  return res
}, error => {
  if (error.message === 'Network Error') {
    return Promise.reject(error)
  }
})

export default axios
