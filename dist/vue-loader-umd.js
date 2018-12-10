! function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t(require("jQuery")) : "function" == typeof define && define.amd ? define(["jQuery"], t) : "object" == typeof exports ? exports.VueLoader = t(require("jQuery")) : e.VueLoader = t(e.jQuery)
}(window, function(__WEBPACK_EXTERNAL_MODULE__1__) {
  return function(e) {
      var t = {};

      function o(r) {
          if (t[r]) return t[r].exports;
          var n = t[r] = {
              i: r,
              l: !1,
              exports: {}
          };
          return e[r].call(n.exports, n, n.exports, o), n.l = !0, n.exports
      }
      return o.m = e, o.c = t, o.d = function(e, t, r) {
          o.o(e, t) || Object.defineProperty(e, t, {
              enumerable: !0,
              get: r
          })
      }, o.r = function(e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
              value: "Module"
          }), Object.defineProperty(e, "__esModule", {
              value: !0
          })
      }, o.t = function(e, t) {
          if (1 & t && (e = o(e)), 8 & t) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var r = Object.create(null);
          if (o.r(r), Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e
              }), 2 & t && "string" != typeof e)
              for (var n in e) o.d(r, n, function(t) {
                  return e[t]
              }.bind(null, n));
          return r
      }, o.n = function(e) {
          var t = e && e.__esModule ? function() {
              return e.default
          } : function() {
              return e
          };
          return o.d(t, "a", t), t
      }, o.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
      }, o.p = "", o(o.s = 0)
  }([function(e, t, o) {
      const r = o(1),
          n = o(2);
      e.exports = (e => {
          var t = {};
          ! function(e) {
              console.log("e", e)
          }([function(e, t) {
              console.log("fn1", e)
          }, function(e, t) {
              console.log("fn2", e)
          }]);
          for (var o in e) t[o] = (() => new Promise((t, u) => {
              r.get(e[o]).then(function(e) {
                  try {
                      t(n(e))
                  } catch (e) {
                      u(e)
                  }
              })
          }));
          return t
      })
  }, function(e, t) {
      e.exports = __WEBPACK_EXTERNAL_MODULE__1__
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
  }])
});