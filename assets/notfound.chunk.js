(window.webpackJsonp = window.webpackJsonp || []).push([[3], {
    205 : function(t, n) {
        t.exports = function(t, n) {
            if (! (t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
    },
    206 : function(t, n) {
        function o(t, n) {
            for (var e = 0; e < n.length; e++) {
                var o = n[e];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value" in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o)
            }
        }
        t.exports = function(t, n, e) {
            return n && o(t.prototype, n),
            e && o(t, e),
            t
        }
    },
    207 : function(t, n, e) {
        var o = e(212),
        r = e(210);
        t.exports = function(t, n) {
            return ! n || "object" !== o(n) && "function" != typeof n ? r(t) : n
        }
    },
    208 : function(n, t) {
        function e(t) {
            return n.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf: function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            },
            e(t)
        }
        n.exports = e
    },
    209 : function(t, n, e) {
        var o = e(213);
        t.exports = function(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            n && o(t, n)
        }
    },
    210 : function(t, n) {
        t.exports = function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
    },
    211 : function(t, n) {
        t.exports = function(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e,
            t
        }
    },
    212 : function(n, t) {
        function e(t) {
            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
            function(t) {
                return typeof t
            }: function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
            })(t)
        }
        function o(t) {
            return "function" == typeof Symbol && "symbol" === e(Symbol.iterator) ? n.exports = o = function(t) {
                return e(t)
            }: n.exports = o = function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": e(t)
            },
            o(t)
        }
        n.exports = o
    },
    213 : function(e, t) {
        function o(t, n) {
            return e.exports = o = Object.setPrototypeOf ||
            function(t, n) {
                return t.__proto__ = n,
                t
            },
            o(t, n)
        }
        e.exports = o
    },
    223 : function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e(205),
        r = e.n(o),
        c = e(206),
        u = e.n(c),
        i = e(207),
        a = e.n(i),
        f = e(208),
        l = e.n(f),
        s = e(209),
        p = e.n(s),
        y = e(210),
        b = e.n(y),
        m = e(211),
        w = e.n(m),
        d = e(6),
        x = e.n(d),
        h = function(t) {
            function e(t) {
                var n;
                return r()(this, e),
                n = a()(this, l()(e).call(this, t)),
                w()(b()(b()(n)), "goBack",
                function() {
                    window.history.go( - 1)
                }),
                w()(b()(b()(n)), "goIndex",
                function() {
                    window.location.href = "#/"
                }),
                n
            }
            return p()(e, t),
            u()(e, [{
                key: "render",
                value: function() {
                    return x.a.createElement("div", {
                        className: "not-found"
                    },
                    x.a.createElement("h1", {
                        className: "not-found-title"
                    },
                    "404"), x.a.createElement("p", {
                        className: "not-found-text"
                    },
                    "不要悲伤，不要绝望，灰暗的日子依然会来临！"), x.a.createElement("p", {
                        className: "not-found-text"
                    },
                    "现在"), x.a.createElement("span", {
                        onClick: this.goBack,
                        className: "link-style"
                    },
                    "返回上一页"), x.a.createElement("span", null, "或者"), x.a.createElement("span", {
                        onClick: this.goIndex,
                        className: "link-style"
                    },
                    "跳转首页"))
                }
            }]),
            e
        } (x.a.Component);
        n.
    default = h
    }
}]);