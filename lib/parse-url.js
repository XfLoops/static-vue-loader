function getBaseURL () {
    let scripts = document.getElementsByTagName('script')
    let url

    for (let i = scripts.length - 1; i >= 0; i--) {
        url = scripts[i].getAttribute('data-base-url')
        if (url) {
            return url
        }
    }
    return ''
}

const baseURL = getBaseURL()

module.exports = (path) => {
    return baseURL + path
}

