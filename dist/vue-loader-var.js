var VueLoader = function(e) {
  var t = {};

  function r(o) {
      if (t[o]) return t[o].exports;
      var n = t[o] = {
          i: o,
          l: !1,
          exports: {}
      };
      return e[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports
  }
  return r.m = e, r.c = t, r.d = function(e, t, o) {
      r.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: o
      })
  }, r.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }), Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }, r.t = function(e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (r.r(o), Object.defineProperty(o, "default", {
              enumerable: !0,
              value: e
          }), 2 & t && "string" != typeof e)
          for (var n in e) r.d(o, n, function(t) {
              return e[t]
          }.bind(null, n));
      return o
  }, r.n = function(e) {
      var t = e && e.__esModule ? function() {
          return e.default
      } : function() {
          return e
      };
      return r.d(t, "a", t), t
  }, r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
  }, r.p = "", r(r.s = 0)
}([function(e, t, r) {
  const o = r(1),
      n = r(2);
  e.exports = (e => {
      var t = {};
      ! function(e) {
          console.log("e", e)
      }([function(e, t) {
          console.log("fn1", e)
      }, function(e, t) {
          console.log("fn2", e)
      }]);
      for (var r in e) t[r] = (() => new Promise((t, c) => {
          o.get(e[r]).then(function(e) {
              try {
                  t(n(e))
              } catch (e) {
                  c(e)
              }
          })
      }));
      return t
  })
}, function(e, t) {
  e.exports = jQuery
}, function(module, exports) {
  function parseOption(compoText) {
      var TEMPLATE = /<template>((.|\n)*?)<\/template>/,
          SCRIPT = /<script>((.|\n)*?)<\/script>/,
          option = {
              template: "Failed to parse the correct component."
          };
      try {
          try {
              var script = compoText.match(SCRIPT)[1];
              option = eval(script)
          } catch (e) {
              return console.error("[vue-loader] script parse error: ", e), option
          }
          try {
              option.template = compoText.match(TEMPLATE)[1]
          } catch (e) {
              return console.error("[vue-loader] template parse error: ", e), option
          }
      } catch (e) {
          return option
      }
      return option
  }
  module.exports = parseOption
}]);