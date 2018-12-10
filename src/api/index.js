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
API.getCatPosts = (id, currentPage = 1, per_page = 6) => {
  let params = {
    categories: id,
    page: currentPage,
    per_page: per_page
  }
  return getRequest('posts', params)
}

// @id:文章id
API.getPost = (id) => {
  return getRequest('posts/' + id)
}

// 获 取 相 册 @id:相册id
API.getXcById = (id) => {
  axios.get(origin + '/api/getalbums.php?id=' + id).then(res => {
    console.log(res)
  })
}
export default API
