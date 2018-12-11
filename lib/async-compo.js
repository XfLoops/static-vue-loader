const jQuery = require('jquery')
const defaultCompo = require('./default-compo')
const parseOption = require('./parse-option')
const parseStyle = require('./parse-style')

module.exports = (option) => {
  let {component, loading, error, delay = 200, timeout = 3000} = option
  
  return () => ({
    component: new Promise((resolve, reject) => {
      jQuery.get(component).then((response) => {
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





