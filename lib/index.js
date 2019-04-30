
const { normalizeOption } = require('./utils')
const { createAsyncComponent } = require('./async-compo')

module.exports = (components) => {
  let asyncComponents = {}

  for (let name in components) {
    let option = components[name]
    if (typeof option === 'string') {
      option = {
        component: option
      }
    }

    option = normalizeOption(option)
    asyncComponents[name] = createAsyncComponent(option)
  }

  return asyncComponents
}
