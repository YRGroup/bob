import axios from 'axios'
const baseRestUrl = 'http://bob/wp-json/wp/v2/'
class HTTP {
  constructor () {
    this.baseRestUrl = baseRestUrl
  }
  getRequest (url, params) {
    // console.log(11)
    return new Promise((resolve, reject) => {
      axios.get(this.baseRestUrl + url, {
        params: params
      })
        .then(function (res) {
          resolve(res)
        })
        .catch(function (err) {
          reject(err)
        })
    })
  }

  postRequest (url, params) {
    return new Promise((resolve, reject) => {
      axios.post(this.baseRestUrl + url, params)
        .then(function (res) {
          resolve(res)
        })
        .catch(function (err) {
          reject(err)
        })
    })
  }
}
export default HTTP
