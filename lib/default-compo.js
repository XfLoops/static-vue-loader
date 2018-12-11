module.exports = (type, tmpl) => {
  const _defaults = {
    error: '<div>组件加载出错.</div>',
    loading: '<div>组件加载中...</div>'
  }

  return {
    template: tmpl || _defaults[type]
  }
}

