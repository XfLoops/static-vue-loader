const { expect } = require('chai')
const parseOption = require('../lib/parse-option')

describe('parseOption', function () {
  
  it('should parse <template> and <script> block', function () {
    let tmpl = `
      <template><div>hello</div></template>
      <script>
        c = {
          data: 123
        }
      </script>
    `
    let result = {
      template: `<div>hello</div>`,
      data: 123
    }

    expect(parseOption(tmpl)).to.deep.equal(result)
  })


})


