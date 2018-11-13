import HTTP from './axios'

let http = new HTTP()
let API = {}

// @id:分类id; @page:页码； @per_page:每页数量
API.getCatPosts = (id) => {
  let params = {
    categories: id,
    page: 1,
    per_page: 10
  }
  return http.getRequest('posts', params)
}

// @id:文章id
API.getPost = (id) => {
  return http.getRequest('posts/' + id)
}
export default API
