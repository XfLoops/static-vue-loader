const Util = {}

Util.getBaseURL = () => {
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

Util.normalizeURL = (base, seg) => {
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

Util.normalizeOption = (option) => {
  let defaultOpt = {
    loading: 'loading',
    error: 'error',
    delay: 200,
    timeout: 3000
  }
  return Object.assign({}, defaultOpt, option)
}

Util.Fetch = (url) => {
  if (window.fetch) {
    return fetch(url).then(res => res.text())
  }
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onload = () => resolve(xhr.responseText)
    xhr.onerror = err => reject(err)
    xhr.send()
  })
}

// https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro
Util.setStyle = (style) => {
  let div = document.createElement('DIV')
  div.innerHTML = style
  document.head.appendChild(div.firstChild)
}

module.exports = Util
