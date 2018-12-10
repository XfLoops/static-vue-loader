const jQuery = require('jquery')
const parseOption = require('./parse-option')

module.exports = (config) => {
  var components = {}
  
  var a = function (e) {
    console.log('e', e)
  }([function (e, a) {
    console.log('fn1', e)
  }, function (e, b) {
    console.log('fn2', e)
  }])
  


  for (var compoName in config) {
    components[compoName] = () => new Promise((resolve, reject) => {
      jQuery.get(config[compoName]).then(function (response) {
        try {
          resolve(parseOption(response))
        }
        catch (err) {
          reject(err)
        }
      })
    })
  }

  return components
}

