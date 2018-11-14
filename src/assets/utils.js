export function getFirstImg(content) {
  let firstImg = ''
  let reg = /<img.+src=[\'"]([^\'"]+)[\'"].*>/i;
  // let reg = /<img.+src=[\'"]([^\'"]+)[\'"]>/i;
  firstImg = content.match(reg)
  return firstImg
}
