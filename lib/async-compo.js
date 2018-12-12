const jQuery = require('jquery')
const defaultCompo = require('./default-compo')
const parseUrl = require('./parse-url')
const parseStyle = require('./parse-style')
const parseOption = require('./parse-option')

module.exports = (option) => {
  let {component, loading, error, delay = 200, timeout = 3000} = option
  let url = parseUrl(component)
  
  return () => ({
    component: new Promise((resolve, reject) => {
      jQuery.get(url).then((response) => {
        try {
          // style
          let style = parseStyle(response)
          if (style) {
            jQuery(document.head).append(style)
          }

          // template,script
          resolve(parseOption(response))
        }
        catch (err) {
          reject(err)
        }
      })
    }),
    loading: defaultCompo('loading', loading),
    error: defaultCompo('error', error),
    delay: delay,
    timeout: timeout
  })
}
