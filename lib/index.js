
const asyncCompo = require('./async-compo')

module.exports = (options) => {
  let components = {}

  for (let name in options) {
    let opt = options[name]

    if (typeof opt === 'string') {
      opt = {
        component: opt
      }
    }

    components[name] = asyncCompo(opt)
  }

  return components
}

