const { normalizeURL, getBaseURL } = require('./utils')

const TEMPLATE = /<template>((.|\n)*)<\/template>/  // Fix #1
const SCRIPT = /<script>((.|\n)*?)<\/script>/
const STYLE = /<style>((.|\n)*?)<\/style>/

// return vue component option
const parseOption = (compoText) => {
    let option = {}
    try {
      // parse script
      try {
        var script = compoText.match(SCRIPT)[1]
        option = eval(script)
      } catch (e) {
        console.error('[vue-loader] script parse error: ', e)
        return option
      }
      // parse template
      try {
        option.template = compoText.match(TEMPLATE)[1]
      } catch (e) {
        console.error('[vue-loader] template parse error: ', e)
        return option
      }
    } catch (e) {
      return option
    }
  
    return option
}

// return style content
const parseStyle = (compoText) => {
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

// resolve component path
let baseURL
const parseURL = (path) => {
    if (typeof baseURL === 'undefined') {
      baseURL = getBaseURL()
    }
    return baseURL && path ? normalizeURL(baseURL, path) : path
}

module.exports = {
    parseOption,
    parseStyle,
    parseURL
}
