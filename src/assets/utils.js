export function getFirstImg (content) {
  let firstImg = ''
  let reg = /<img.+src=[\'"]([^\'"]+)[\'"].*>/i
  // let reg = /<img.+src=[\'"]([^\'"]+)[\'"]>/i;
  firstImg = content.match(reg)
  return firstImg
}

export function hiddenBody () {
  document.getElementsByTagName('body')[0].style.height = '100vh'
  document.getElementsByTagName('body')[0].style.overflow = 'hidden'
}

export function initBody () {
  document.getElementsByTagName('body')[0].style.height = ''
  document.getElementsByTagName('body')[0].style.overflow = ''
}
