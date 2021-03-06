class Case {
  constructor (data) {
    this.content = data.content.rendered
    this.date = data.date
    this.title = data.title.rendered
    this.thumbnail = data.thumbnailurl
    this.sticky = data.sticky
    this.tag = this.formatTags(data.tags)
    this.id = data.id
    this.imgs = this.getBanner(data.content.rendered)
    this.bannerUrl = data.bannerUrl
  }
  setBanner (url) {
    // this.banner = url
  }
  formatTags (str) {
    if (!str) return
    let arr = str.split('/')
    arr.pop()
    return arr.join(' / ')
  }
  getBanner (str) {
    var imgReg = /<img.*?(?:>|\/>)/gi
    // var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i
    var srcReg = /src=['"]?([^'"]*)['"]?/i
    var arr = str.match(imgReg)
    let imgs = []

    if (!(arr && arr.length)) return
    for (var i = 0; i < arr.length; i++) {
      var src = arr[i].match(srcReg)
      // 获取图片地址
      if (src[1]) {
        // alert('已匹配的图片地址' + (i + 1) + '：' + src[1]);
        imgs.push(src[1])
      }
    }
    this.setBanner(imgs[0])
    return imgs
  }
}
export default Case
