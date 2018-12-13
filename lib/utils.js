const getBaseURL = () => {
  let url = ''
  if (window && window.document) {
      let scripts = document.getElementsByTagName('script')
      for (let i = scripts.length - 1; i >= 0; i--) {
          url = scripts[i].getAttribute('data-base-url')
          if (url) {
              url = url.substr(-1) === '/' ? url.substring(-1) : url
              break
          }
      }
  }
  return url || ''
}

const urlJoin = (base, seg) => {
  let firstChar = seg.charAt(0)
  // seg: `a/b`
  if (firstChar !== '.' && firstChar !== '/') {
    return base + '/' + seg
  }
  // seg: `/a/b`
  if (firstChar === '/') {
    return base + seg
  }
  // seg: `./a/b`
  if (/^\.\//.test(seg)) {
    return base + seg.substring(1)
  }
  // seg: `(../)*a/b`
  if (/^\.\.\//.test(seg)) {
    let copy = seg
    let baseArr = base.split('/')
    let segArr = seg.split('../')
    let lastSeg = segArr.splice(-1, 1)

    while (segArr.length) {
      segArr.splice(-1, 1)

      if (baseArr.length) {
        let lastValue = baseArr[baseArr.length - 1]
        if (lastValue) {
          baseArr.splice(-1, 1)
        }
        else {
          return copy
        }
      }
      else {
        return copy
      }
    }

    return baseArr.concat(lastSeg).join('/')
  }
}

module.exports = {
  getBaseURL,
  urlJoin
}
