const { expect } = require('chai')
const { parseOption } = require('../lib/parsers')

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

  it('should parse nested <template> block', function () {
    let tmpl = `
      <template><div>hello</div><template>2222222</template></template>
      <script>
        c = {
          data: 123
        }
      </script>
    `
    let result = {
      template: `<div>hello</div><template>2222222</template>`,
      data: 123
    }

    expect(parseOption(tmpl)).to.deep.equal(result)
  })

})


