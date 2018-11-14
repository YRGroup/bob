class Case {
  constructor(data) {
    this.content = data.content.rendered
    this.date = data.date
    this.title = data.title.rendered
    this.thumbnail = data.thumbnailurl
    this.banner = data.banner
    this.tag = this.formatTags(data.tags)
  }

  formatTags(string) {
    let arr = string.split("/");
    arr.pop();
    return arr.join(" / ");
  }
}
export default Case
