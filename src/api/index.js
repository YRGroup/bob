import HTTP from './axios'

let http = new HTTP()
let API = {}

// @id:分类id; @page:页码； @per_page:页码
API.getCatPosts = (id) => {
  let params = {
    categories: id,
    page: 1,
    per_page: 1
  }
  return http.getRequest('posts', params)
}

// @id:文章id
API.getPost = (id) => {
  return http.getRequest('posts/' + id)
}
export default API
