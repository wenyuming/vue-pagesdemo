import axios from './interceptor.js'

export default {
  get (url, data = null) {
    if (!url) {
      console.log('API function call requires url argument')
      return
    }
    let loginInfo = {}
    // loginInfo._user = localStorage.getItem('_user')
    loginInfo._token = localStorage.getItem('_token')
    loginInfo._user_id = localStorage.getItem('_user_id')
    return axios.get(url, {
      params: {...data, ...loginInfo}
    })
  },
  post (url, data = null) {
    if (!url) {
      console.log('API function call requires url argument')
      return
    }
    let loginInfo = {}
    // loginInfo._user = localStorage.getItem('_user')
    loginInfo._token = localStorage.getItem('_token')
    loginInfo._user_id = localStorage.getItem('_user_id')
    return axios.post(url, {...data, ...loginInfo})
  }
}
