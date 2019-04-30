const { Fetch, setStyle } = require('./utils')
const { parseOption, parseStyle, parseURL } = require('./parsers')

const createHelperComponent = (type) => {
  let template = type
  if (type === 'loading') {
    template = '<div>Loading...</div>'
  } else if (type === 'error') {
    template = '<div>Failed to load component.</div>'
  }
  return { template }
}

const createAsyncComponent = (option) => {
  let {component: componentPath, loading, error, delay, timeout} = option
  let url = parseURL(componentPath)
  
  return () => ({
    component: new Promise((resolve, reject) => {
      Fetch(url).then((response) => {
        try {
          // style block
          let style = parseStyle(response)
          if (style) {
            setStyle(style)
          }

          // template & script block
          resolve(parseOption(response))
        } catch (err) {
          reject(err)
        }
      })
    }),
    loading: createHelperComponent(loading),
    error: createHelperComponent(error),
    delay: delay,
    timeout: timeout
  })
}

module.exports = {
  createHelperComponent,
  createAsyncComponent
}