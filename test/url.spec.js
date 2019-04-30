const { expect } = require('chai')
const { normalizeURL } = require('../lib/utils')

describe('normalizeURL', function () {
  it('should handle `a/b` ', function () {
    let base = '/a/b'
    let seg = 'c/d.html'
    expect(normalizeURL(base, seg)).to.be.equal('/a/b/c/d.html')
  })

  it('should handle `/` ', function () {
    let base = '/a/b'
    let seg = '/c/d.html'
    expect(normalizeURL(base, seg)).to.be.equal('/a/b/c/d.html')
  })

  it('should handle `./` ', function () {
    let base = '/a/b'
    let seg = './c/d.html'
    expect(normalizeURL(base, seg)).to.be.equal('/a/b/c/d.html')
  })

  it('should handle `../` ', function () {
    let base = '/a/b'
    let seg = '../c/d.html'
    expect(normalizeURL(base, seg)).to.be.equal('/a/c/d.html')
  })

  it('should handle `../../` ', function () {
    let base = '/a/b'
    let seg = '../../c/d.html'
    expect(normalizeURL(base, seg)).to.be.equal('/c/d.html')
  })

  it('should handle `../../../` ', function () {
    let base = '/a/b'
    let seg = '../../../c/d.html'
    expect(normalizeURL(base, seg)).to.be.equal('../../../c/d.html')
  })

  it('should handle `a/b + ../../../` ', function () {
    let base = 'a/b'
    let seg = '../../../c/d.html'
    expect(normalizeURL(base, seg)).to.be.equal('../../../c/d.html')
  })
})


