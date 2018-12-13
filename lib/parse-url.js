const { urlJoin, getBaseURL } = require('./utils')
const baseURL = getBaseURL()

module.exports = (path) => {
    if (baseURL && path) {
        return urlJoin(baseURL, path)
    }

    return path
}

