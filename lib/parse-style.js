// 解析样式
const parseStyle = (compoText) => {
  let STYLE = /<style>((.|\n)*?)<\/style>/
  let cssText = ''

  try {
    cssText = compoText.match(STYLE)
    cssText = cssText && cssText[0]
  } catch (e) {
    console.error('[vue-loader] css parse error: ', e)
    return cssText
  }
  return cssText
}

module.exports = parseStyle







