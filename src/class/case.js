class Case {
  constructor (data) {
    this.content = data.content.rendered
    this.date = data.date
    this.title = data.title.rendered
  }
}
export default Case
