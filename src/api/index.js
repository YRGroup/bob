import {
  postRequest,
  getRequest
} from './axios'
import axios from 'axios'
let API = {}
let origin = ''
// 环境的切换
if (process.env.NODE_ENV === 'development') {
  origin = 'http://bob'
} else if (process.env.NODE_ENV === 'debug') {
  origin = 'http://bob'
} else if (process.env.NODE_ENV === 'production') {
  origin = window.location.origin
}
// @id:分类id; @page:页码； @per_page:每页数量
API.getCatPosts = (id, currentPage) => {
  let params = {
    categories: id,
    page: currentPage || 1,
    per_page: 6
  }
  return getRequest('posts', params)
}

// @id:文章id
API.getPost = (id) => {
  return getRequest('posts/' + id)
}
// 获 取 相 册
API.getXcById = (id) => {
  axios.get(origin + '/api/getalbums.php?id=' + id).then(res => {
    console.log(res)
  })
}
export default API
