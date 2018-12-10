// 解析组件
function parseOption (compoText) {
  var TEMPLATE = /<template>((.|\n)*?)<\/template>/
  var SCRIPT = /<script>((.|\n)*?)<\/script>/
  var option = {
    template: 'Failed to parse the correct component.'
  }

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

module.exports = parseOption


