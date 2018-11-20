import {
  postRequest,
  getRequest
} from './axios'
import axios from 'axios'
let API = {}

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
  let params = {
    post_id: id,
    post_type: 'foogallery'
  }
  // axios.defaults.baseURL = 'http://bob/api/
}
export default API
