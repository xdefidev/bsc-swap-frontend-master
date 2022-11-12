;(this['webpackJsonppancake-frontend'] = this['webpackJsonppancake-frontend'] || []).push([
  [26],
  {
    1388: function (e, t, n) {
      'use strict'
      n.r(t)
      var c,
        r,
        i,
        o,
        s,
        a,
        l,
        b,
        u,
        j,
        d,
        x,
        p,
        h,
        O,
        f,
        m,
        g,
        v,
        w,
        y,
        k = n(10),
        C = n(1),
        S = n(42),
        B = n(272),
        A = n(3),
        L = n(60),
        E = n(20),
        I = n(6),
        N = n(32),
        P = n(66),
        W = n(120),
        U = n(92),
        D = function () {
          var e = Object(N.c)(function (e) {
            return e.predictions.rounds
          })
          return Object.keys(e).reduce(function (t, n) {
            return Object(I.a)(Object(I.a)({}, t), {}, Object(E.a)({}, n, Object(U.m)(e[n])))
          }, {})
        },
        z = function () {
          var e = D()
          return Object(W.orderBy)(Object.values(e), ['epoch'], ['asc'])
        },
        R = function (e, t) {
          var n = Object(N.c)(function (e) {
            return e.predictions.ledgers
          })
          return n[e] && n[e][t] ? Object(U.m)(n[e][t]) : null
        },
        F = function () {
          return Object(N.c)(function (e) {
            return e.predictions.isHistoryPaneOpen
          })
        },
        T = function () {
          return Object(N.c)(function (e) {
            return e.predictions.isChartPaneOpen
          })
        },
        H = function () {
          return Object(N.c)(function (e) {
            return e.predictions.currentEpoch
          })
        },
        Y = function () {
          return Object(N.c)(function (e) {
            return e.predictions.intervalSeconds
          })
        },
        M = function () {
          return Object(N.c)(function (e) {
            return e.predictions.status
          })
        },
        q = function () {
          return Object(N.c)(function (e) {
            return e.predictions.historyFilter
          })
        },
        V = function () {
          return Object(N.c)(function (e) {
            return e.predictions.bufferSeconds
          })
        },
        _ = function () {
          return Object(N.c)(function (e) {
            return e.predictions.isFetchingHistory
          })
        },
        Q = function (e) {
          var t = Object(N.c)(function (e) {
            return e.predictions.history
          })
          return t ? t[e] : []
        },
        $ = function () {
          var e = Object(N.c)(function (e) {
            return e.predictions.lastOraclePrice
          })
          return Object(C.useMemo)(
            function () {
              return P.a.BigNumber.from(e)
            },
            [e],
          )
        },
        J = function () {
          var e = (function () {
              var e = H()
              return D()[e]
            })(),
            t = Y()
          if (e) return e.lockTimestamp ? e.lockTimestamp : e.startTimestamp + t
        },
        G = n(99),
        Z = n(367),
        K = n(216),
        X = n(4),
        ee = n.n(X),
        te = n(14),
        ne = n(265),
        ce = n(41),
        re = function () {
          var e = Object(C.useState)(P.a.BigNumber.from(0)),
            t = Object(k.a)(e, 2),
            n = t[0],
            c = t[1],
            r = Object(ne.a)(),
            i = r.lastUpdated,
            o = r.setLastUpdated
          return (
            Object(C.useEffect)(
              function () {
                ;(function () {
                  var e = Object(te.a)(
                    ee.a.mark(function e() {
                      var t, n
                      return ee.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (t = Object(ce.i)()), (e.next = 3), t.latestAnswer()
                            case 3:
                              ;(n = e.sent), c(n)
                            case 5:
                            case 'end':
                              return e.stop()
                          }
                      }, e)
                    }),
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()()
              },
              [i, c],
            ),
            { price: n, lastUpdated: i, refresh: o }
          )
        },
        ie = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
            t = re(),
            n = t.price,
            c = t.refresh,
            r = Object(L.b)()
          Object(C.useEffect)(
            function () {
              c()
              var t = setInterval(function () {
                c()
              }, 1e3 * e)
              return function () {
                clearInterval(t)
              }
            },
            [e, c],
          ),
            Object(C.useEffect)(
              function () {
                r(Object(Z.l)(n.toJSON()))
              },
              [n, r],
            )
        },
        oe = n(68),
        se = function () {
          var e = Object(C.useRef)(null),
            t = Object(L.b)(),
            n = Object(S.c)().account,
            c = H(),
            r = Object(N.c)(function (e) {
              var t = Object(W.minBy)(Object.values(e.predictions.rounds), 'epoch')
              return null === t || void 0 === t ? void 0 : t.epoch
            }),
            i = M()
          Object(C.useEffect)(
            function () {
              return (
                e.current && clearInterval(e.current),
                i !== oe.c.INITIAL &&
                  (e.current = setInterval(
                    Object(te.a)(
                      ee.a.mark(function e() {
                        var i, o
                        return ee.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                ;(i = [c, c - 1, c - 2]),
                                  t(Object(Z.f)(i)),
                                  t(Object(Z.e)()),
                                  n &&
                                    ((o = Object(W.range)(r, c + 1)),
                                    t(Object(Z.d)({ account: n, epochs: o })),
                                    t(Object(Z.b)({ account: n, epochs: o })))
                              case 4:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      }),
                    ),
                    1e4,
                  )),
                function () {
                  e.current && clearInterval(e.current)
                }
              )
            },
            [e, n, i, c, r, t],
          )
        },
        ae = n(8),
        le = n(5),
        be = le.e.div(
          c ||
            (c = Object(ae.a)([
              '\n  background: ',
              ';\n  height: calc(100vh - 64px);\n  min-height: calc(100vh - 64px);\n  overflow: hidden;\n  position: relative;\n',
            ])),
          function (e) {
            return e.theme.colors.gradients.violetAlt
          },
        ),
        ue = n(775),
        je = n(15),
        de = n(0),
        xe = Object(le.f)(
          r ||
            (r = Object(ae.a)([
              '\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0) scaleY(5);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  75% {\n    transform: translate3d(0, 10px, 0) scaleY(0.95);\n  }\n\n  90% {\n    transform: translate3d(0, -5px, 0) scaleY(0.985);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n',
            ])),
        ),
        pe = Object(le.f)(
          i ||
            (i = Object(ae.a)([
              '\n  20% {\n    transform: translate3d(0, 10px, 0) scaleY(0.985);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0) scaleY(3);\n  }\n',
            ])),
        ),
        he = Object(le.d)(o || (o = Object(ae.a)(['\n  animation: ', ' 1s;\n'])), xe),
        Oe = Object(le.d)(s || (s = Object(ae.a)(['\n  animation: ', ' 1s;\n'])), pe),
        fe = le.e.div(
          a ||
            (a = Object(ae.a)([
              '\n  align-items: center;\n  bottom: 72px;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  position: absolute;\n  width: 100%;\n  z-index: 50;\n\n  &.popup-enter-active {\n    ',
              '\n  }\n\n  &.popup-enter-done {\n    bottom: 72px;\n  }\n\n  &.popup-exit-done {\n    bottom: -2000px;\n  }\n\n  &.popup-exit-active {\n    ',
              '\n  }\n\n  ',
              ' {\n    bottom: 16px;\n    justify-content: flex-end;\n\n    &.popup-enter-done {\n      bottom: 16px;\n    }\n  }\n',
            ])),
          he,
          Oe,
          function (e) {
            return e.theme.mediaQueries.md
          },
        ),
        me = le.e.div(
          l ||
            (l = Object(ae.a)([
              '\n  align-items: center;\n  background-color: ',
              ';\n  border-radius: 32px;\n  color: #ffffff;\n  display: flex;\n  max-width: 320px;\n  padding: 16px 8px;\n',
            ])),
          function (e) {
            return e.theme.colors.secondary
          },
        ),
        ge = function () {
          var e = Object(C.useState)(!1),
            t = Object(k.a)(e, 2),
            n = t[0],
            c = t[1],
            r = Object(je.b)().t,
            i = Object(C.useRef)(null),
            o = Object(C.useRef)(null),
            s = Object(S.c)().account,
            a = M(),
            l = F(),
            b = Object(L.b)()
          return (
            Object(C.useEffect)(
              function () {
                var e = !1
                return (
                  s &&
                    (o.current = setInterval(
                      Object(te.a)(
                        ee.a.mark(function t() {
                          var n, r
                          return ee.a.wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), Object(U.b)({ user: s.toLowerCase(), claimed: !1 })
                                case 2:
                                  ;(n = t.sent),
                                    e ||
                                      ((r = n.filter(function (e) {
                                        return e.position === e.round.position
                                      })),
                                      l || c(r.length > 0))
                                case 4:
                                case 'end':
                                  return t.stop()
                              }
                          }, t)
                        }),
                      ),
                      3e4,
                    )),
                  function () {
                    clearInterval(o.current), (e = !0)
                  }
                )
              },
              [s, o, a, c, l],
            ),
            Object(C.useEffect)(
              function () {
                l && c(!1)
              },
              [l, c],
            ),
            Object(de.jsx)(ue.a, {
              in: n,
              unmountOnExit: !0,
              nodeRef: i,
              timeout: 1e3,
              classNames: 'popup',
              children: Object(de.jsx)(fe, {
                ref: i,
                children: Object(de.jsxs)(me, {
                  children: [
                    Object(de.jsx)(A.rc, { width: '64px', style: { flex: 'none' }, mr: '8px' }),
                    Object(de.jsx)(A.q, {
                      style: { flex: 1 },
                      onClick: function () {
                        b(Object(Z.k)(!0))
                      },
                      children: r('Collect Winnings'),
                    }),
                    Object(de.jsx)(A.bb, {
                      variant: 'text',
                      onClick: function () {
                        c(!1), clearInterval(o.current)
                      },
                      children: Object(de.jsx)(A.L, { color: 'primary', width: '24px' }),
                    }),
                  ],
                }),
              }),
            })
          )
        },
        ve = Object(C.createContext)(void 0),
        we = function (e) {
          var t = e.children,
            n = Object(C.useState)(null),
            c = Object(k.a)(n, 2),
            r = c[0],
            i = c[1]
          return Object(de.jsx)(ve.Provider, {
            value: {
              swiper: r,
              setSwiper: i,
              destroySwiper: function () {
                r && (r.destroy(), i(null))
              },
            },
            children: t,
          })
        },
        ye = n(1044),
        ke = n(222),
        Ce = n.n(ke),
        Se = n(1045),
        Be = n.n(Se),
        Ae = (function () {
          var e = Object(te.a)(
            ee.a.mark(function e() {
              return ee.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        'return',
                        new Promise(function (e) {
                          return Object.defineProperty(window, 'TradingView', {
                            configurable: !0,
                            set: function (t) {
                              ;(this.tv = t), e(t)
                            },
                          })
                        }),
                      )
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )
          return function () {
            return e.apply(this, arguments)
          }
        })(),
        Le = function (e, t, n) {
          new e.widget({
            autosize: !0,
            height: '100%',
            symbol: 'BINANCE:BNBUSDT',
            interval: '5',
            timezone: 'Etc/UTC',
            theme: t.isDark ? 'dark' : 'light',
            style: '1',
            locale: n,
            toolbar_bg: '#f1f3f6',
            enable_publishing: !1,
            allow_symbol_change: !0,
            container_id: 'tradingview_b239c',
          })
        },
        Ee = function () {
          var e = Object(je.b)().currentLanguage,
            t = Object(le.g)()
          return (
            Object(C.useEffect)(
              function () {
                window.TradingView
                  ? Le(window.TradingView, t, e.code)
                  : Ae().then(function (n) {
                      Le(n, t, e.code)
                    })
              },
              [t, e],
            ),
            Object(de.jsx)(A.m, {
              overflow: 'hidden',
              className: 'tradingview_container',
              children: Object(de.jsx)('div', { id: 'tradingview_b239c' }),
            })
          )
        },
        Ie = n(107),
        Ne = n(214),
        Pe = n(33),
        We = function (e) {
          return '$'.concat(Object(Pe.e)(e || 0, 3, 3))
        },
        Ue = function (e) {
          return e ? e.toLocaleString(void 0, { minimumFractionDigits: 3, maximumFractionDigits: 3 }) : '0'
        },
        De = function (e, t) {
          return 0 === e || 0 === t ? 0 : e / t
        },
        ze = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
          if (!e || !e.round) return 0
          var n = e.round,
            c = n.bullAmount,
            r = n.bearAmount,
            i = n.totalAmount,
            o = De(i, e.position === oe.a.BULL ? c : r)
          return e.amount * o * t
        },
        Re = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
          if (!e || !e.round) return 0
          var n = ze(e, t)
          return n - e.amount
        },
        Fe = n(52),
        Te = n(37),
        He = n(93),
        Ye = n(97),
        Me = n(44),
        qe = n(126),
        Ve = Object(le.e)(A.zb)(b || (b = Object(ae.a)(['\n  overflow: visible;\n']))),
        _e = le.e.div(
          u ||
            (u = Object(ae.a)([
              '\n  position: absolute;\n  top: -116px; // line up bunny at the top of the modal\n  left: 0px;\n  text-align: center;\n  width: 100%;\n',
            ])),
        ),
        Qe = function (e) {
          var t = e.payout,
            n = e.betAmount,
            c = e.epoch,
            r = e.onDismiss,
            i = e.onSuccess,
            o = Object(C.useState)(!1),
            s = Object(k.a)(o, 2),
            a = s[0],
            l = s[1],
            b = Object(S.c)().account,
            u = Object(je.b)().t,
            j = Object(Ye.a)(),
            d = j.toastSuccess,
            x = j.toastError,
            p = Object(qe.a)().callWithGasPrice,
            h = Object(Me.t)(),
            O = Object(He.g)(),
            f = Object(L.b)(),
            m = parseFloat(t),
            g = parseFloat(n),
            v = (function () {
              var e = Object(te.a)(
                ee.a.mark(function e() {
                  var t, n, o
                  return ee.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), p(h, 'claim', [[c]])
                          case 3:
                            return (t = e.sent), l(!0), (e.next = 7), t.wait()
                          case 7:
                            if (((n = e.sent), !i)) {
                              e.next = 11
                              break
                            }
                            return (e.next = 11), i()
                          case 11:
                            return (e.next = 13), f(Object(Z.b)({ account: b, epochs: [c] }))
                          case 13:
                            r(),
                              l(!1),
                              d(
                                u('Winnings collected!'),
                                Object(de.jsxs)(A.m, {
                                  children: [
                                    Object(de.jsx)(A.ic, {
                                      as: 'p',
                                      mb: '8px',
                                      children: u('Your prizes have been sent to your wallet'),
                                    }),
                                    n.transactionHash &&
                                      Object(de.jsx)(A.ib, {
                                        href: Object(Te.e)(n.transactionHash, 'transaction'),
                                        children: u('View on BscScan'),
                                      }),
                                  ],
                                }),
                              ),
                              (e.next = 22)
                            break
                          case 18:
                            ;(e.prev = 18),
                              (e.t0 = e.catch(0)),
                              console.error('Unable to claim winnings', e.t0),
                              x(
                                u('Error'),
                                (null === e.t0 || void 0 === e.t0 || null === (o = e.t0.data) || void 0 === o
                                  ? void 0
                                  : o.message) ||
                                  u(
                                    'Please try again. Confirm the transaction and make sure you are paying enough gas!',
                                  ),
                              )
                          case 22:
                            return (e.prev = 22), l(!1), e.finish(22)
                          case 25:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 18, 22, 25]],
                  )
                }),
              )
              return function () {
                return e.apply(this, arguments)
              }
            })()
          return Object(de.jsxs)(Ve, {
            minWidth: '288px',
            position: 'relative',
            mt: '124px',
            children: [
              Object(de.jsx)(_e, {
                children: Object(de.jsx)('img', {
                  src: '/images/decorations/prize-bunny.png',
                  alt: 'bunny decoration',
                  height: '124px',
                  width: '168px',
                }),
              }),
              Object(de.jsxs)(A.Ab, {
                children: [
                  Object(de.jsx)(A.Cb, { children: Object(de.jsx)(A.Y, { children: u('Collect Winnings') }) }),
                  Object(de.jsx)(A.yb, { onDismiss: r }),
                ],
              }),
              Object(de.jsxs)(A.xb, {
                p: '24px',
                children: [
                  Object(de.jsx)(A.rc, { width: '96px', mx: 'auto', mb: '24px' }),
                  Object(de.jsxs)(A.W, {
                    alignItems: 'start',
                    justifyContent: 'space-between',
                    mb: '8px',
                    children: [
                      Object(de.jsx)(A.ic, { children: u('Your position') }),
                      Object(de.jsxs)(A.m, {
                        style: { textAlign: 'right' },
                        children: [
                          Object(de.jsx)(A.ic, { children: ''.concat(g.toFixed(4), ' BNB') }),
                          Object(de.jsx)(A.ic, {
                            fontSize: '12px',
                            color: 'textSubtle',
                            children: '~$'.concat(O.times(g).toFormat(2)),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(de.jsxs)(A.W, {
                    alignItems: 'start',
                    justifyContent: 'space-between',
                    mb: '24px',
                    children: [
                      Object(de.jsx)(A.ic, { children: u('Your winnings') }),
                      Object(de.jsxs)(A.m, {
                        style: { textAlign: 'right' },
                        children: [
                          Object(de.jsx)(A.ic, { children: ''.concat(t, ' BNB') }),
                          Object(de.jsx)(A.ic, {
                            fontSize: '12px',
                            color: 'textSubtle',
                            children: '~$'.concat(O.times(m).toFormat(2)),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(de.jsx)(A.q, {
                    width: '100%',
                    mb: '8px',
                    onClick: v,
                    isLoading: a,
                    endIcon: a ? Object(de.jsx)(A.h, { spin: !0, color: 'currentColor' }) : null,
                    children: u('Confirm'),
                  }),
                ],
              }),
            ],
          })
        },
        $e = ['payout', 'betAmount', 'epoch', 'hasClaimed', 'onSuccess', 'children'],
        Je = function (e) {
          var t = e.payout,
            n = e.betAmount,
            c = e.epoch,
            r = e.hasClaimed,
            i = e.onSuccess,
            o = e.children,
            s = Object(Fe.a)(e, $e),
            a = Object(A.Hc)(Object(de.jsx)(Qe, { payout: t, betAmount: n, epoch: c, onSuccess: i }), !1),
            l = Object(k.a)(a, 1)[0]
          return Object(de.jsx)(A.q, Object(I.a)(Object(I.a)({ onClick: l, disabled: r }, s), {}, { children: o }))
        },
        Ge = ['epoch', 'onSuccess', 'children'],
        Ze = function (e) {
          var t = e.epoch,
            n = e.onSuccess,
            c = e.children,
            r = Object(Fe.a)(e, Ge),
            i = Object(C.useState)(!1),
            o = Object(k.a)(i, 2),
            s = o[0],
            a = o[1],
            l = Object(je.b)().t,
            b = Object(Me.t)(),
            u = Object(qe.a)().callWithGasPrice,
            j = Object(Ye.a)(),
            d = j.toastSuccess,
            x = j.toastError,
            p = (function () {
              var e = Object(te.a)(
                ee.a.mark(function e() {
                  var c
                  return ee.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), u(b, 'claim', [[t]])
                        case 2:
                          return (c = e.sent), a(!0), (e.next = 6), c.wait()
                        case 6:
                          if (!e.sent.status) {
                            e.next = 15
                            break
                          }
                          if (!n) {
                            e.next = 11
                            break
                          }
                          return (e.next = 11), n()
                        case 11:
                          a(!1), d(l('Position reclaimed!')), (e.next = 17)
                          break
                        case 15:
                          a(!1),
                            x(
                              l('Error'),
                              l('Please try again. Confirm the transaction and make sure you are paying enough gas!'),
                            )
                        case 17:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              return function () {
                return e.apply(this, arguments)
              }
            })()
          return Object(de.jsx)(
            A.q,
            Object(I.a)(
              Object(I.a)(
                { onClick: p, isLoading: s, endIcon: s ? Object(de.jsx)(A.h, { spin: !0, color: 'white' }) : null },
                r,
              ),
              {},
              { children: c || l('Reclaim Position') },
            ),
          )
        },
        Ke = n(370),
        Xe = function (e) {
          return '$'.concat(Object(Pe.b)(e, 3, 8))
        },
        et = function (e) {
          var t = e || P.a.BigNumber.from(0)
          return Object(Pe.b)(t, 4)
        },
        tt = function (e) {
          return e.toString().padStart(2, '0')
        },
        nt = function (e) {
          var t = Object(Ke.a)(e),
            n = t.hours,
            c = t.minutes,
            r = t.seconds,
            i = ''.concat(tt(c), ':').concat(tt(r))
          return n > 0 ? ''.concat(tt(n), ':').concat(i) : i
        },
        ct = function (e, t) {
          var n = 1e3 * (e.closeTimestamp + t),
            c = Date.now()
          return null !== n && c > n && !e.oracleCalled
        },
        rt = function (e, t) {
          if (!e) return P.a.FixedNumber.from(0)
          if (e.eq(0) || t.eq(0)) return P.a.FixedNumber.from(0)
          var n = P.a.FixedNumber.from(e),
            c = P.a.FixedNumber.from(t)
          return n.divUnsafe(c)
        },
        it = function (e, t) {
          if (!e || !t) return P.a.FixedNumber.from(0)
          var n = (function (e, t) {
              if (!e || !t) return P.a.FixedNumber.from(0)
              var n = t.bullAmount,
                c = t.bearAmount,
                r = t.rewardAmount,
                i = e.amount,
                o = e.position,
                s = P.a.FixedNumber.from(Object(Pe.a)(i)),
                a = rt(r, o === oe.a.BULL ? n : c)
              return s.mulUnsafe(a)
            })(e, t),
            c = P.a.FixedNumber.from(Object(Pe.a)(e.amount))
          return n.subUnsafe(c)
        },
        ot = function (e, t) {
          return e && t ? e.sub(t) : P.a.BigNumber.from(0)
        },
        st = ['bg', 'startIcon', 'children', 'onClick'],
        at = ['betPosition', 'children'],
        lt = Object(le.e)(A.W)(
          j || (j = Object(ae.a)(['\n  background-color: ', ';\n  display: inline-flex;\n'])),
          function (e) {
            var t = e.bg
            return e.theme.colors[t]
          },
        ),
        bt = function (e) {
          var t = e.bg,
            n = void 0 === t ? 'success' : t,
            c = e.startIcon,
            r = e.children,
            i = e.onClick,
            o = Object(Fe.a)(e, st),
            s = c || Object(de.jsx)(A.g, { color: 'white' })
          return Object(de.jsxs)(
            lt,
            Object(I.a)(
              Object(I.a)(
                {
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px',
                  bg: n,
                  py: '4px',
                  px: '8px',
                  onClick: i,
                  style: { cursor: i ? 'pointer' : 'normal' },
                },
                o,
              ),
              {},
              {
                children: [
                  s,
                  Object(de.jsx)(A.ic, { textTransform: 'uppercase', color: 'white', ml: '4px', children: r }),
                ],
              },
            ),
          )
        },
        ut = function (e) {
          var t = e.betPosition,
            n = e.children,
            c = Object(Fe.a)(e, at),
            r = t === oe.a.BULL,
            i = r ? Object(de.jsx)(A.g, { color: 'white' }) : Object(de.jsx)(A.c, { color: 'white' })
          return Object(de.jsx)(
            bt,
            Object(I.a)(Object(I.a)({ bg: r ? 'success' : 'failure', startIcon: i }, c), {}, { children: n }),
          )
        },
        jt = ['children'],
        dt = ['totalAmount'],
        xt = ['positionLabel', 'multiplier', 'amount'],
        pt = ['lockPrice'],
        ht = ['isNext', 'hasEntered', 'isLive', 'children'],
        Ot = ['totalAmount'],
        ft = ['lockPrice'],
        mt = function (e) {
          return e ? et(e) : '0'
        },
        gt = function (e) {
          var t = e.children,
            n = Object(Fe.a)(e, jt)
          return Object(de.jsx)(
            A.W,
            Object(I.a)(Object(I.a)({ alignItems: 'center', justifyContent: 'space-between' }, n), {}, { children: t }),
          )
        },
        vt = function (e) {
          var t = e.totalAmount,
            n = Object(Fe.a)(e, dt),
            c = Object(je.b)().t
          return Object(de.jsxs)(
            gt,
            Object(I.a)(
              Object(I.a)({}, n),
              {},
              {
                children: [
                  Object(de.jsxs)(A.ic, { bold: !0, children: [c('Prize Pool'), ':'] }),
                  Object(de.jsx)(A.ic, { bold: !0, children: ''.concat(mt(t), ' BNB') }),
                ],
              },
            ),
          )
        },
        wt = function (e) {
          var t = e.positionLabel,
            n = e.multiplier,
            c = e.amount,
            r = Object(Fe.a)(e, xt),
            i = Object(je.b)().t,
            o = ''.concat(n.toLocaleString(void 0, { maximumFractionDigits: 2 }), 'x')
          return Object(de.jsxs)(
            gt,
            Object(I.a)(
              Object(I.a)({ height: '18px' }, r),
              {},
              {
                children: [
                  Object(de.jsxs)(A.ic, { fontSize: '12px', textTransform: 'uppercase', children: [t, ':'] }),
                  Object(de.jsxs)(A.W, {
                    alignItems: 'center',
                    children: [
                      Object(de.jsx)(A.ic, {
                        fontSize: '12px',
                        lineHeight: '18px',
                        bold: !0,
                        children: i('%multiplier% Payout', { multiplier: o }),
                      }),
                      Object(de.jsx)(A.ic, { mx: '4px', children: '|' }),
                      Object(de.jsx)(A.ic, {
                        fontSize: '12px',
                        lineHeight: '18px',
                        children: ''.concat(Ue(c), ' BNB'),
                      }),
                    ],
                  }),
                ],
              },
            ),
          )
        },
        yt = function (e) {
          var t = e.lockPrice,
            n = Object(Fe.a)(e, pt),
            c = Object(je.b)().t
          return Object(de.jsxs)(
            gt,
            Object(I.a)(
              Object(I.a)({}, n),
              {},
              {
                children: [
                  Object(de.jsxs)(A.ic, { fontSize: '14px', children: [c('Locked Price'), ':'] }),
                  Object(de.jsx)(A.ic, { fontSize: '14px', children: Xe(t) }),
                ],
              },
            ),
          )
        },
        kt = Object(le.e)(A.m)(
          d || (d = Object(ae.a)(['\n  background: ', ';\n  border-radius: 16px;\n  padding: 2px;\n'])),
          function (e) {
            var t = e.theme,
              n = e.betPosition,
              c = e.isNext,
              r = e.isLive,
              i = e.hasEntered
            return c
              ? 'linear-gradient(180deg, #53DEE9 0%, #5dccf8 100%)'
              : i || r
              ? t.colors.secondary
              : n === oe.a.BULL
              ? t.colors.success
              : n === oe.a.BEAR
              ? t.colors.failure
              : t.colors.cardBorder
          },
        ),
        Ct = le.e.div(
          x || (x = Object(ae.a)(['\n  background: ', ';\n  border-radius: 14px;\n  padding: 16px;\n'])),
          function (e) {
            return e.theme.card.background
          },
        ),
        St = function (e) {
          var t = e.isNext,
            n = void 0 !== t && t,
            c = e.hasEntered,
            r = void 0 !== c && c,
            i = e.isLive,
            o = void 0 !== i && i,
            s = e.children,
            a = Object(Fe.a)(e, ht)
          return Object(de.jsx)(
            kt,
            Object(I.a)(
              Object(I.a)({ isNext: n, hasEntered: r, isLive: o }, a),
              {},
              { children: Object(de.jsx)(Ct, { children: s }) },
            ),
          )
        },
        Bt = function (e) {
          return e ? Ue(e) : '0'
        },
        At = function (e) {
          var t = e.totalAmount,
            n = Object(Fe.a)(e, Ot),
            c = Object(je.b)().t
          return Object(de.jsxs)(
            gt,
            Object(I.a)(
              Object(I.a)({}, n),
              {},
              {
                children: [
                  Object(de.jsxs)(A.ic, { bold: !0, children: [c('Prize Pool'), ':'] }),
                  Object(de.jsx)(A.ic, { bold: !0, children: ''.concat(Bt(t), ' BNB') }),
                ],
              },
            ),
          )
        },
        Lt = function (e) {
          var t = e.lockPrice,
            n = Object(Fe.a)(e, ft),
            c = Object(je.b)().t
          return Object(de.jsxs)(
            gt,
            Object(I.a)(
              Object(I.a)({}, n),
              {},
              {
                children: [
                  Object(de.jsxs)(A.ic, { fontSize: '14px', children: [c('Locked Price'), ':'] }),
                  Object(de.jsx)(A.ic, { fontSize: '14px', children: We(t) }),
                ],
              },
            ),
          )
        },
        Et = ['round', 'hasFailed', 'children'],
        It = function (e) {
          var t = e.round,
            n = e.hasFailed,
            c = void 0 !== n && n,
            r = e.children,
            i = Object(Fe.a)(e, Et),
            o = t.lockPrice,
            s = t.closePrice,
            a = t.totalAmount,
            l = (function (e, t) {
              return e ? (e.eq(t) ? oe.a.HOUSE : e.gt(t) ? oe.a.BULL : oe.a.BEAR) : null
            })(s, o),
            b = l === oe.a.BULL,
            u = Object(je.b)().t,
            j = ot(s, o)
          return Object(de.jsxs)(
            St,
            Object(I.a)(
              Object(I.a)({ betPosition: l }, i),
              {},
              {
                children: [
                  Object(de.jsx)(A.ic, {
                    color: 'textSubtle',
                    fontSize: '12px',
                    bold: !0,
                    textTransform: 'uppercase',
                    mb: '8px',
                    children: u('Closed Price'),
                  }),
                  c
                    ? Object(de.jsx)(A.ic, {
                        bold: !0,
                        textTransform: 'uppercase',
                        color: 'textDisabled',
                        mb: '16px',
                        fontSize: '24px',
                        children: u('Canceled'),
                      })
                    : Object(de.jsxs)(A.W, {
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: '16px',
                        children: [
                          s
                            ? Object(de.jsx)(A.ic, {
                                color: b ? 'success' : 'failure',
                                bold: !0,
                                fontSize: '24px',
                                children: Xe(s),
                              })
                            : Object(de.jsx)(A.Tb, { height: '34px', my: '1px' }),
                          Object(de.jsx)(ut, { betPosition: l, children: Xe(j) }),
                        ],
                      }),
                  o && Object(de.jsx)(yt, { lockPrice: o }),
                  Object(de.jsx)(vt, { totalAmount: a }),
                  r,
                ],
              },
            ),
          )
        },
        Nt = ['round', 'children'],
        Pt = function (e) {
          var t = e.round,
            n = e.children,
            c = Object(Fe.a)(e, Nt),
            r = t.lockPrice,
            i = t.closePrice,
            o = t.totalAmount,
            s = i > r ? oe.a.BULL : oe.a.BEAR,
            a = s === oe.a.BULL,
            l = Object(je.b)().t,
            b = i - r
          return Object(de.jsxs)(
            St,
            Object(I.a)(
              Object(I.a)({ betPosition: s }, c),
              {},
              {
                children: [
                  Object(de.jsx)(A.ic, {
                    color: 'textSubtle',
                    fontSize: '12px',
                    bold: !0,
                    textTransform: 'uppercase',
                    mb: '8px',
                    children: l('Closed Price'),
                  }),
                  t.failed
                    ? Object(de.jsx)(A.ic, {
                        bold: !0,
                        textTransform: 'uppercase',
                        color: 'textDisabled',
                        mb: '16px',
                        fontSize: '24px',
                        children: l('Canceled'),
                      })
                    : Object(de.jsxs)(A.W, {
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: '16px',
                        children: [
                          Object(de.jsx)(A.ic, {
                            color: a ? 'success' : 'failure',
                            bold: !0,
                            fontSize: '24px',
                            children: We(i),
                          }),
                          Object(de.jsx)(ut, { betPosition: s, children: We(b) }),
                        ],
                      }),
                  r && Object(de.jsx)(Lt, { lockPrice: r }),
                  Object(de.jsx)(At, { totalAmount: o }),
                  n,
                ],
              },
            ),
          )
        },
        Wt = function (e) {
          var t = Object(C.useState)(!1),
            n = Object(k.a)(t, 2),
            c = n[0],
            r = n[1],
            i = Object(S.c)().account
          return (
            Object(C.useEffect)(
              function () {
                i &&
                  (function () {
                    var t = Object(te.a)(
                      ee.a.mark(function t() {
                        var n, c
                        return ee.a.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (n = Object(ce.u)()), (t.next = 3), n.refundable(e, i)
                              case 3:
                                if (!t.sent) {
                                  t.next = 11
                                  break
                                }
                                return (t.next = 7), n.ledger(e, i)
                              case 7:
                                ;(c = t.sent), r(!1 === c.claimed), (t.next = 12)
                                break
                              case 11:
                                r(!1)
                              case 12:
                              case 'end':
                                return t.stop()
                            }
                        }, t)
                      }),
                    )
                    return function () {
                      return t.apply(this, arguments)
                    }
                  })()()
              },
              [i, e, r],
            ),
            { isRefundable: c, setIsRefundable: r }
          )
        },
        Ut = Object(le.e)(A.m)(
          p ||
            (p = Object(ae.a)([
              '\n  border: 2px solid ',
              ';\n  border-radius: 16px;\n  margin-bottom: 24px;\n  padding: 16px;\n',
            ])),
          function (e) {
            return e.theme.colors.textDisabled
          },
        ),
        Dt = le.e.hr(h || (h = Object(ae.a)(['\n  border: 1px solid ', ';\n'])), function (e) {
          return e.theme.colors.cardBorder
        }),
        zt = function (e) {
          var t = e.bet,
            n = e.result,
            c = Object(je.b)().t,
            r = Object(L.b)(),
            i = Object(S.c)().account,
            o = Wt(t.round.epoch).isRefundable,
            s = Object(He.g)(),
            a = !t.claimed && t.position === t.round.position,
            l = Object(A.Jc)(
              Object(de.jsx)(A.ic, {
                as: 'p',
                children: c('Includes your original position and your winnings, minus the %fee% fee.', { fee: '3%' }),
              }),
              { placement: 'auto' },
            ),
            b = l.targetRef,
            u = l.tooltip,
            j = l.tooltipVisible,
            d = n === U.a.WIN,
            x = d ? Re(t, Ne.c) : t.amount,
            p = x + t.amount,
            h = function () {
              switch (n) {
                case U.a.WIN:
                  return 'warning'
                case U.a.LOSE:
                  return 'textSubtle'
                case U.a.CANCELED:
                  return 'textDisabled'
                default:
                  return 'text'
              }
            },
            O = (function () {
              var e = Object(te.a)(
                ee.a.mark(function e() {
                  return ee.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          r(Object(Z.h)({ account: i, betId: t.id })),
                            r(Object(Z.d)({ account: i, epochs: [t.round.epoch] }))
                        case 2:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              return function () {
                return e.apply(this, arguments)
              }
            })()
          return Object(de.jsxs)(de.Fragment, {
            children: [
              Object(de.jsxs)(A.W, {
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: '8px',
                children: [
                  Object(de.jsx)(A.Y, { children: c('Your History') }),
                  Object(de.jsxs)(A.W, {
                    alignItems: 'center',
                    children: [
                      Object(de.jsx)(A.Y, {
                        as: 'h3',
                        color: h(),
                        textTransform: 'uppercase',
                        bold: !0,
                        mr: '4px',
                        children: (function () {
                          switch (n) {
                            case U.a.WIN:
                              return c('Win')
                            case U.a.LOSE:
                              return c('Lose')
                            case U.a.CANCELED:
                              return c('Canceled')
                            default:
                              return ''
                          }
                        })(),
                      }),
                      (function () {
                        switch (n) {
                          case U.a.WIN:
                            return Object(de.jsx)(A.Nb, { color: h() })
                          case U.a.LOSE:
                          case U.a.CANCELED:
                            return Object(de.jsx)(A.k, { color: h() })
                          default:
                            return null
                        }
                      })(),
                    ],
                  }),
                ],
              }),
              Object(de.jsxs)(Ut, {
                children: [
                  n === U.a.WIN &&
                    !a &&
                    Object(de.jsx)(Je, {
                      payout: Ue(x),
                      betAmount: t.amount.toString(),
                      epoch: t.round.epoch,
                      hasClaimed: !a,
                      width: '100%',
                      mb: '16px',
                      onSuccess: O,
                      children: t.claimed ? c('Already Collected') : c('Collect Winnings'),
                    }),
                  t.claimed &&
                    Object(de.jsx)(A.W, {
                      justifyContent: 'center',
                      children: Object(de.jsx)(A.ib, {
                        href: Object(Te.e)(t.claimedHash, 'transaction'),
                        mb: '16px',
                        children: c('View on BscScan'),
                      }),
                    }),
                  n === U.a.CANCELED && o && Object(de.jsx)(Ze, { epoch: t.round.epoch, width: '100%', mb: '16px' }),
                  Object(de.jsxs)(A.W, {
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: '16px',
                    children: [
                      Object(de.jsxs)(A.ic, { children: [c('Your direction'), ':'] }),
                      Object(de.jsx)(ut, {
                        betPosition: t.position,
                        children: t.position === oe.a.BULL ? c('Up') : c('Down'),
                      }),
                    ],
                  }),
                  Object(de.jsxs)(A.W, {
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: '16px',
                    children: [
                      Object(de.jsx)(A.ic, { children: c('Your position') }),
                      Object(de.jsx)(A.ic, { children: ''.concat(Ue(t.amount), ' BNB') }),
                    ],
                  }),
                  Object(de.jsxs)(A.W, {
                    alignItems: 'start',
                    justifyContent: 'space-between',
                    children: [
                      Object(de.jsxs)(A.ic, { bold: !0, children: [c(d ? 'Your winnings' : 'Your Result'), ':'] }),
                      Object(de.jsxs)(A.m, {
                        style: { textAlign: 'right' },
                        children: [
                          Object(de.jsx)(A.ic, {
                            bold: !0,
                            color: (function () {
                              switch (n) {
                                case U.a.WIN:
                                  return 'success'
                                case U.a.LOSE:
                                  return 'failure'
                                case U.a.CANCELED:
                                default:
                                  return 'text'
                              }
                            })(),
                            children: ''.concat(d ? '+' : '-').concat(Ue(x), ' BNB'),
                          }),
                          Object(de.jsx)(A.ic, {
                            fontSize: '12px',
                            color: 'textSubtle',
                            children: '~$'.concat(Ue(s.times(x).toNumber())),
                          }),
                        ],
                      }),
                    ],
                  }),
                  d &&
                    Object(de.jsxs)(de.Fragment, {
                      children: [
                        Object(de.jsx)(Dt, {}),
                        Object(de.jsxs)(A.W, {
                          alignItems: 'start',
                          justifyContent: 'space-between',
                          children: [
                            Object(de.jsxs)(A.ic, {
                              fontSize: '14px',
                              color: 'textSubtle',
                              children: [c('Amount to collect'), ':'],
                            }),
                            Object(de.jsxs)(A.W, {
                              justifyContent: 'end',
                              children: [
                                Object(de.jsx)(A.ic, {
                                  fontSize: '14px',
                                  color: 'textSubtle',
                                  children: ''.concat(Ue(p), ' BNB'),
                                }),
                                Object(de.jsx)('span', {
                                  ref: b,
                                  children: Object(de.jsx)(A.db, { color: 'textSubtle', ml: '4px' }),
                                }),
                              ],
                            }),
                            j && u,
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          })
        },
        Rt = le.e.div(
          O ||
            (O = Object(ae.a)(['\n  background-color: ', ';\n  border-bottom: 2px solid ', ';\n  padding: 24px;\n'])),
          function (e) {
            return e.theme.colors.dropdown
          },
          function (e) {
            return e.theme.colors.cardBorder
          },
        ),
        Ft = function (e) {
          var t = e.bet,
            n = e.result,
            c = Object(je.b)().t,
            r = t.round,
            i = r.totalAmount,
            o = r.bullAmount,
            s = r.bearAmount,
            a = De(i, o),
            l = De(i, s)
          return Object(de.jsxs)(Rt, {
            children: [
              n === U.a.CANCELED &&
                Object(de.jsx)(A.ic, {
                  as: 'p',
                  color: 'failure',
                  mb: '24px',
                  children: c(
                    'This round was automatically canceled due to an error. If you entered a position, please reclaim your funds below.',
                  ),
                }),
              n !== U.a.LIVE && Object(de.jsx)(zt, { bet: t, result: n }),
              Object(de.jsx)(A.Y, { mb: '8px', children: c('Round History') }),
              Object(de.jsxs)(Pt, {
                round: t.round,
                mb: '24px',
                children: [
                  Object(de.jsx)(wt, { positionLabel: c('Up'), multiplier: a, amount: o }),
                  Object(de.jsx)(wt, { positionLabel: c('Down'), multiplier: l, amount: s }),
                ],
              }),
              Object(de.jsxs)(A.W, {
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: '8px',
                children: [
                  Object(de.jsx)(A.ic, { children: c('Opening Block') }),
                  Object(de.jsx)(A.hb, {
                    href: Object(Te.e)(t.round.lockBlock, 'block'),
                    external: !0,
                    children: t.round.lockBlock,
                  }),
                ],
              }),
              Object(de.jsxs)(A.W, {
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  Object(de.jsx)(A.ic, { children: c('Closing Block') }),
                  Object(de.jsx)(A.hb, {
                    href: Object(Te.e)(t.round.closeBlock, 'block'),
                    external: !0,
                    children: t.round.closeBlock,
                  }),
                ],
              }),
            ],
          })
        },
        Tt = Object(le.e)(A.W).attrs({ alignItems: 'center', p: '16px' })(
          f ||
            (f = Object(ae.a)(['\n  background-color: ', ';\n  border-bottom: 2px solid ', ';\n  cursor: pointer;\n'])),
          function (e) {
            return e.theme.card.background
          },
          function (e) {
            return e.theme.colors.cardBorder
          },
        ),
        Ht = Object(le.e)(A.m)(m || (m = Object(ae.a)(['\n  flex: 1;\n']))),
        Yt = function (e) {
          var t,
            n = e.bet,
            c = Object(C.useState)(!1),
            r = Object(k.a)(c, 2),
            i = r[0],
            o = r[1],
            s = n.amount,
            a = n.round,
            l = Object(je.b)().t,
            b = H(),
            u = M(),
            j = Object(L.b)(),
            d = Object(S.c)().account,
            x = Object(U.f)(n, b),
            p = (function (e) {
              switch (e) {
                case U.a.WIN:
                  return 'success'
                case U.a.LOSE:
                  return 'failure'
                case U.a.CANCELED:
                  return 'textDisabled'
                default:
                  return 'text'
              }
            })(x),
            h = (t = x) === U.a.LOSE ? '-' : t === U.a.WIN ? '+' : '',
            O = a.epoch === b,
            f = u === oe.c.LIVE && a.epoch === b - 1,
            m = !n.claimed && n.position === n.round.position,
            g = x === U.a.WIN ? Re(n, Ne.c) : s,
            v = (function () {
              var e = Object(te.a)(
                ee.a.mark(function e() {
                  return ee.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          j(Object(Z.h)({ account: d, betId: n.id })),
                            j(Object(Z.d)({ account: d, epochs: [n.round.epoch] }))
                        case 2:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              return function () {
                return e.apply(this, arguments)
              }
            })()
          return Object(de.jsxs)(de.Fragment, {
            children: [
              Object(de.jsxs)(Tt, {
                onClick: function () {
                  return o(!i)
                },
                role: 'button',
                children: [
                  Object(de.jsx)(A.m, {
                    width: '48px',
                    children: Object(de.jsxs)(A.ic, {
                      textAlign: 'center',
                      children: [
                        Object(de.jsx)(A.ic, { fontSize: '12px', color: 'textSubtle', children: l('Round') }),
                        Object(de.jsx)(A.ic, { bold: !0, lineHeight: 1, children: a.epoch.toLocaleString() }),
                      ],
                    }),
                  }),
                  Object(de.jsx)(Ht, {
                    px: '24px',
                    children: O
                      ? Object(de.jsxs)(A.W, {
                          alignItems: 'center',
                          children: [
                            Object(de.jsx)(A.zc, { color: 'primary', mr: '6px', width: '24px' }),
                            Object(de.jsx)(A.ic, { color: 'primary', bold: !0, children: l('Starting Soon') }),
                          ],
                        })
                      : f
                      ? Object(de.jsxs)(A.W, {
                          alignItems: 'center',
                          children: [
                            Object(de.jsx)(A.Jb, { color: 'secondary', mr: '6px', width: '24px' }),
                            Object(de.jsx)(A.ic, { color: 'secondary', bold: !0, children: l('Live Now') }),
                          ],
                        })
                      : Object(de.jsxs)(de.Fragment, {
                          children: [
                            Object(de.jsx)(A.ic, { fontSize: '12px', color: 'textSubtle', children: l('Your Result') }),
                            Object(de.jsx)(A.ic, {
                              bold: !0,
                              color: p,
                              lineHeight: 1,
                              children: x === U.a.CANCELED ? l('Canceled') : ''.concat(h).concat(Ue(g)),
                            }),
                          ],
                        }),
                  }),
                  x === U.a.WIN &&
                    m &&
                    Object(de.jsx)(Je, {
                      hasClaimed: !m,
                      epoch: n.round.epoch,
                      payout: Ue(g),
                      onSuccess: v,
                      betAmount: n.amount.toString(),
                      scale: 'sm',
                      mr: '8px',
                      children: l('Collect'),
                    }),
                  x === U.a.CANCELED &&
                    m &&
                    Object(de.jsx)(Ze, { epoch: n.round.epoch, scale: 'sm', mr: '8px', children: l('Reclaim') }),
                  !O &&
                    !f &&
                    Object(de.jsx)(A.bb, {
                      variant: 'text',
                      scale: 'sm',
                      children: i ? Object(de.jsx)(A.J, {}) : Object(de.jsx)(A.G, {}),
                    }),
                ],
              }),
              i && Object(de.jsx)(Ft, { bet: n, result: Object(U.f)(n, b) }),
            ],
          })
        },
        Mt = le.e.label(
          g ||
            (g = Object(ae.a)([
              '\n  align-items: center;\n  cursor: pointer;\n  display: inline-flex;\n  margin-right: 16px;\n',
            ])),
        ),
        qt = Object(le.e)(A.m)(
          v || (v = Object(ae.a)(['\n  background: ', ';\n  flex: none;\n  padding: 16px;\n'])),
          function (e) {
            return e.theme.colors.gradients.bubblegum
          },
        ),
        Vt = le.e.div(
          w ||
            (w = Object(ae.a)([
              '\n  width: 100%;\n  & > div {\n    width: 100%;\n  }\n\n  & button {\n    width: 100%;\n  }\n',
            ])),
        ),
        _t = function (e) {
          switch (e) {
            case oe.b.COLLECTED:
              return !0
            case oe.b.UNCOLLECTED:
              return !1
            case oe.b.ALL:
            default:
              return
          }
        }
      !(function (e) {
        ;(e[(e.ROUNDS = 0)] = 'ROUNDS'), (e[(e.PNL = 1)] = 'PNL')
      })(y || (y = {}))
      var Qt,
        $t,
        Jt,
        Gt,
        Zt,
        Kt,
        Xt,
        en,
        tn,
        nn,
        cn,
        rn,
        on,
        sn,
        an,
        ln,
        bn,
        un,
        jn,
        dn,
        xn,
        pn,
        hn,
        On,
        fn,
        mn,
        gn,
        vn,
        wn,
        yn,
        kn,
        Cn,
        Sn,
        Bn,
        An,
        Ln,
        En,
        In,
        Nn,
        Pn,
        Wn = function (e) {
          var t = e.activeTab,
            n = e.setActiveTab,
            c = q(),
            r = _(),
            i = Object(je.b)().t,
            o = Object(L.b)(),
            s = Object(S.c)().account,
            a = function (e) {
              return Object(te.a)(
                ee.a.mark(function t() {
                  return ee.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (e === c) {
                            t.next = 4
                            break
                          }
                          return (t.next = 3), o(Object(Z.c)({ account: s, claimed: _t(e) }))
                        case 3:
                          o(Object(Z.j)(e))
                        case 4:
                        case 'end':
                          return t.stop()
                      }
                  }, t)
                }),
              )
            },
            l = (function () {
              var e = Object(te.a)(
                ee.a.mark(function e(t) {
                  return ee.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return n(t), (e.next = 3), a(oe.b.ALL)()
                        case 3:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()
          return Object(de.jsxs)(qt, {
            children: [
              Object(de.jsxs)(A.W, {
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: '16px',
                children: [
                  Object(de.jsx)(A.Y, { as: 'h3', size: 'md', children: i('History') }),
                  Object(de.jsx)(A.q, {
                    onClick: function () {
                      o(Object(Z.k)(!1))
                    },
                    variant: 'text',
                    endIcon: Object(de.jsx)(A.e, { color: 'primary' }),
                    px: '0',
                    children: i('Close'),
                  }),
                ],
              }),
              Object(de.jsx)(Vt, {
                children: Object(de.jsxs)(A.r, {
                  activeIndex: t,
                  scale: 'sm',
                  variant: 'subtle',
                  onItemClick: l,
                  children: [
                    Object(de.jsx)(A.s, { children: i('Rounds') }),
                    Object(de.jsx)(A.s, { children: i('PNL') }),
                  ],
                }),
              }),
              t === y.ROUNDS &&
                Object(de.jsxs)(de.Fragment, {
                  children: [
                    Object(de.jsx)(A.ic, { color: 'textSubtle', fontSize: '12px', mb: '8px', children: i('Filter') }),
                    Object(de.jsxs)(A.W, {
                      alignItems: 'center',
                      children: [
                        Object(de.jsxs)(Mt, {
                          children: [
                            Object(de.jsx)(A.Qb, {
                              scale: 'sm',
                              checked: c === oe.b.ALL,
                              disabled: r || !s,
                              onChange: a(oe.b.ALL),
                            }),
                            Object(de.jsx)(A.ic, { ml: '4px', children: i('All') }),
                          ],
                        }),
                        Object(de.jsxs)(Mt, {
                          children: [
                            Object(de.jsx)(A.Qb, {
                              scale: 'sm',
                              checked: c === oe.b.COLLECTED,
                              disabled: r || !s,
                              onChange: a(oe.b.COLLECTED),
                            }),
                            Object(de.jsx)(A.ic, { ml: '4px', children: i('Collected') }),
                          ],
                        }),
                        Object(de.jsxs)(Mt, {
                          children: [
                            Object(de.jsx)(A.Qb, {
                              scale: 'sm',
                              checked: c === oe.b.UNCOLLECTED,
                              disabled: r || !s,
                              onChange: a(oe.b.UNCOLLECTED),
                            }),
                            Object(de.jsx)(A.ic, { ml: '4px', children: i('Uncollected') }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          })
        },
        Un = n(390),
        Dn = n(80),
        zn = n.n(Dn),
        Rn = n(852),
        Fn = n.n(Rn),
        Tn = n(103),
        Hn = (function () {
          var e = Object(te.a)(
            ee.a.mark(function e() {
              var t,
                n,
                c,
                r = arguments
              return ee.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = r.length > 0 && void 0 !== r[0] ? r[0] : 0),
                        (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                        (e.next = 4),
                        zn()(
                          Tn.c,
                          Object(Dn.gql)(
                            Qt ||
                              (Qt = Object(ae.a)([
                                '\n      query getV1BetHistory($skip: Int!, $where: Bet_filter) {\n        bets(first: 1000, skip: $skip, where: $where, orderBy: createdAt, orderDirection: desc) {\n          hash\n          amount\n          position\n          claimed\n          claimedAmount\n          claimedHash\n          round {\n            epoch\n            position\n            failed\n            totalAmount\n            lockPrice\n            closePrice\n            totalBets\n            totalAmount\n          }\n        }\n      }\n    ',
                              ])),
                          ),
                          { skip: t, where: n },
                        )
                      )
                    case 4:
                      return (c = e.sent), e.abrupt('return', c.bets)
                    case 6:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )
          return function () {
            return e.apply(this, arguments)
          }
        })(),
        Yn = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return new Promise(function (t, n) {
            var c = {},
              r = (function () {
                var i = Object(te.a)(
                  ee.a.mark(function i(o) {
                    var s
                    return ee.a.wrap(
                      function (i) {
                        for (;;)
                          switch ((i.prev = i.next)) {
                            case 0:
                              return (i.prev = 0), (i.next = 3), Hn(o, e)
                            case 3:
                              ;(s = i.sent),
                                (c[o] = s),
                                0 === s.length ? t(Fn()(Object.values(c))) : r(o + 1e3),
                                (i.next = 11)
                              break
                            case 8:
                              ;(i.prev = 8), (i.t0 = i.catch(0)), n(i.t0)
                            case 11:
                            case 'end':
                              return i.stop()
                          }
                      },
                      i,
                      null,
                      [[0, 8]],
                    )
                  }),
                )
                return function (e) {
                  return i.apply(this, arguments)
                }
              })()
            r(0)
          })
        },
        Mn = n(38),
        qn = Object(le.e)(A.zb)($t || ($t = Object(ae.a)(['\n  overflow: visible;\n']))),
        Vn = le.e.div(
          Jt ||
            (Jt = Object(ae.a)([
              '\n  position: absolute;\n  top: -116px; // line up bunny at the top of the modal\n  left: 0px;\n  text-align: center;\n  width: 100%;\n',
            ])),
        ),
        _n = function (e) {
          var t = e.onDismiss,
            n = Object(C.useState)(!1),
            c = Object(k.a)(n, 2),
            r = c[0],
            i = c[1],
            o = Object(C.useState)([]),
            s = Object(k.a)(o, 2),
            a = s[0],
            l = s[1],
            b = Object(je.b)().t,
            u = Object(S.c)().account
          return (
            Object(C.useEffect)(
              function () {
                var e = (function () {
                  var e = Object(te.a)(
                    ee.a.mark(function e() {
                      var t
                      return ee.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return i(!0), (e.prev = 1), (e.next = 4), Yn({ user: u.toLowerCase() })
                              case 4:
                                ;(t = e.sent), l(t), (e.next = 11)
                                break
                              case 8:
                                ;(e.prev = 8), (e.t0 = e.catch(1)), console.error('Unable to fetch history', e.t0)
                              case 11:
                                return (e.prev = 11), i(!1), e.finish(11)
                              case 14:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[1, 8, 11, 14]],
                      )
                    }),
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
                u && e()
              },
              [u, l, i],
            ),
            Object(de.jsxs)(qn, {
              minWidth: '288px',
              position: 'relative',
              mt: '124px',
              children: [
                Object(de.jsx)(Vn, {
                  children: Object(de.jsx)('img', {
                    src: '/images/decorations/prize-bunny.png',
                    alt: 'bunny decoration',
                    height: '124px',
                    width: '168px',
                  }),
                }),
                Object(de.jsxs)(A.Ab, {
                  children: [
                    Object(de.jsx)(A.Cb, { children: Object(de.jsx)(A.Y, { children: b('Collect Winnings') }) }),
                    Object(de.jsx)(A.yb, { onDismiss: t }),
                  ],
                }),
                Object(de.jsxs)(A.xb, {
                  p: '24px',
                  children: [
                    Object(de.jsx)(A.ic, {
                      as: 'p',
                      fontSize: '14px',
                      children: b('You have no unclaimed v0.1 prizes.'),
                    }),
                    Object(de.jsx)(A.ic, {
                      as: 'p',
                      fontSize: '14px',
                      mb: '24px',
                      children: b('Download your v0.1 Prediction history below.'),
                    }),
                    Object(de.jsx)(A.q, {
                      onClick: function () {
                        var e = [
                            'Round',
                            'Result',
                            'Your Position',
                            'Bet Amount',
                            'Transaction',
                            'Claimed Transaction',
                            'Lock Price',
                            'Close Price',
                            'Total Bets',
                            'Total Amount',
                            'Round Failed',
                          ].join(','),
                          t = a.reduce(function (e, t) {
                            return [].concat(Object(Mn.a)(e), [
                              [
                                t.round.epoch,
                                t.round.position,
                                t.position,
                                t.amount,
                                t.hash,
                                t.claimedHash || '',
                                t.round.lockPrice,
                                t.round.closePrice,
                                t.round.totalBets,
                                t.round.totalAmount,
                                t.round.failed,
                              ].join(','),
                            ])
                          }, []),
                          n = document.createElement('a'),
                          c = new Blob([''.concat(e, '\n').concat(t.join('\n'))], { type: 'text/csv;charset=utf-8;' })
                        ;(n.href = URL.createObjectURL(c)),
                          (n.target = '_blank'),
                          (n.download = 'pancakeswap-prediction-v1-history.csv'),
                          document.body.appendChild(n),
                          n.click(),
                          document.body.removeChild(n)
                      },
                      isLoading: r,
                      endIcon: r ? Object(de.jsx)(A.h, { spin: !0, width: '24px', color: 'white' }) : null,
                      children: b('Download .CSV'),
                    }),
                  ],
                }),
              ],
            })
          )
        },
        Qn = Object(le.e)(A.W)(
          Gt ||
            (Gt = Object(ae.a)([
              '\n  align-items: center;\n  background-color: ',
              ';\n  border-bottom: 1px solid ',
              ';\n  cursor: pointer;\n  justify-content: space-between;\n  padding: 16px;\n',
            ])),
          function (e) {
            return e.theme.card.background
          },
          function (e) {
            return e.theme.colors.cardBorder
          },
        ),
        $n = function () {
          var e = Object(C.useState)(!1),
            t = Object(k.a)(e, 2),
            n = t[0],
            c = t[1],
            r = Object(C.useState)({ payout: '0', betAmount: '0', epoch: 0 }),
            i = Object(k.a)(r, 2),
            o = i[0],
            s = i[1],
            a = Object(je.b)().t,
            l = Object(S.c)().account,
            b = o.payout,
            u = o.betAmount,
            j = o.epoch,
            d = Object(A.Hc)(Object(de.jsx)(Qe, { payout: b, betAmount: u, epoch: j }), !1),
            x = Object(k.a)(d, 1)[0],
            p = Object(A.Hc)(Object(de.jsx)(_n, {})),
            h = Object(k.a)(p, 1)[0],
            O = (function () {
              var e = Object(te.a)(
                ee.a.mark(function e() {
                  var t, n, r, i, o, a, b, u
                  return ee.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), c(!0), (e.next = 4), Yn({ user: l.toLowerCase(), claimed: !1 })
                          case 4:
                            ;(t = e.sent),
                              (n = t.filter(function (e) {
                                return e.round.position === e.position || !0 === e.round.failed
                              })).length > 0
                                ? ((r = Object(k.a)(n, 1)),
                                  (i = r[0]),
                                  (o = i.amount ? parseFloat(i.amount) : 0),
                                  (a = i.round.totalAmount ? parseFloat(i.round.totalAmount) : 0),
                                  (b = De(a, o)),
                                  (u = a * b),
                                  s({ betAmount: o.toString(), payout: u.toString(), epoch: Number(i.round.epoch) }),
                                  setTimeout(function () {
                                    return x()
                                  }))
                                : h(),
                              (e.next = 12)
                            break
                          case 9:
                            ;(e.prev = 9), (e.t0 = e.catch(0)), console.error('Unable to check v1 history', e.t0)
                          case 12:
                            return (e.prev = 12), c(!1), e.finish(12)
                          case 15:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 9, 12, 15]],
                  )
                }),
              )
              return function () {
                return e.apply(this, arguments)
              }
            })()
          return Object(de.jsxs)(Qn, {
            onClick: l ? O : void 0,
            children: [
              Object(de.jsxs)(A.m, {
                style: { flex: 1 },
                children: [
                  Object(de.jsx)(A.ic, { children: a('Showing history for Prediction v0.2') }),
                  Object(de.jsxs)(A.W, {
                    alignItems: 'center',
                    children: [
                      Object(de.jsx)(A.ic, { color: 'primary', children: a('Check for unclaimed v0.1 winnings') }),
                      Object(de.jsx)(A.I, { color: 'primary', width: '24px' }),
                    ],
                  }),
                ],
              }),
              n && Object(de.jsx)(A.m, { px: '16px', children: Object(de.jsx)(Un.a, {}) }),
            ],
          })
        },
        Jn = function (e) {
          var t = e.hasBetHistory,
            n = e.bets,
            c = Object(je.b)().t
          return t
            ? Object(de.jsxs)(de.Fragment, {
                children: [
                  Object(de.jsx)($n, {}),
                  Object(W.orderBy)(n, ['round.epoch'], ['desc']).map(function (e) {
                    return Object(de.jsx)(Yt, { bet: e }, e.id)
                  }),
                ],
              })
            : Object(de.jsxs)(de.Fragment, {
                children: [
                  Object(de.jsx)($n, {}),
                  Object(de.jsxs)(A.m, {
                    p: '24px',
                    children: [
                      Object(de.jsx)(A.Y, {
                        size: 'lg',
                        textAlign: 'center',
                        mb: '8px',
                        children: c('No prediction history available'),
                      }),
                      Object(de.jsx)(A.ic, {
                        as: 'p',
                        textAlign: 'center',
                        children: c(
                          'If you are sure you should see history here, make sure you\u2019re connected to the correct wallet and try again.',
                        ),
                      }),
                    ],
                  }),
                ],
              })
        },
        Gn = Object(le.f)(
          Zt ||
            (Zt = Object(ae.a)([
              '\n  from {\n    stroke-dasharray: 0, 339.292\n  }\n  to {\n    stroke-dasharray: ',
              ' 339.292;\n  }\n',
            ])),
          function (e) {
            return e.length
          },
        ),
        Zn = Object(le.f)(
          Kt ||
            (Kt = Object(ae.a)([
              '\n  from {\n    stroke-dashoffset: 0\n  }\n  to {\n    stroke-dashoffset: ',
              ';\n  }\n',
            ])),
          function (e) {
            return -e.offset
          },
        ),
        Kn = le.e.svg(
          Xt || (Xt = Object(ae.a)(['\n  width: 128px;\n  height: 128px;\n  transform: rotate(-90deg);\n'])),
        ),
        Xn = le.e.circle(
          en || (en = Object(ae.a)(['\n  fill: none;\n  stroke-width: 16;\n  stroke-dasharray: ', ';\n'])),
          function (e) {
            return ''.concat(e.length, ' 339.292')
          },
        ),
        ec = Object(le.e)(Xn)(tn || (tn = Object(ae.a)(['\n  stroke: #ed4b9e;\n  animation: ', ' 1s ease;\n'])), Gn),
        tc = Object(le.e)(Xn)(
          nn ||
            (nn = Object(ae.a)([
              '\n  stroke: #31d0aa;\n  stroke-dashoffset: ',
              ';\n  animation: ',
              ' 1s ease, ',
              ' 1s ease;\n',
            ])),
          function (e) {
            return -e.offset
          },
          Gn,
          Zn,
        ),
        nc = le.e.div(cn || (cn = Object(ae.a)(['\n  position: relative;\n  width: 128px;\n  height: 128px;\n']))),
        cc = le.e.div(
          rn ||
            (rn = Object(ae.a)([
              '\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 2;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n',
            ])),
        ),
        rc = 339.292,
        ic = function (e) {
          var t = e.lost,
            n = e.won,
            c = Object(je.b)().t,
            r = ((100 * n) / (t + n)).toFixed(2),
            i = (t / (n + t)) * rc,
            o = rc - i
          return Object(de.jsxs)(nc, {
            children: [
              Object(de.jsxs)(Kn, {
                viewBox: '0 0 128 128',
                children: [
                  Object(de.jsx)(ec, { r: '54', cx: '64', cy: '64', length: i }),
                  Object(de.jsx)(tc, { r: '54', cx: '64', cy: '64', length: o, offset: i }),
                ],
              }),
              Object(de.jsxs)(cc, {
                children: [
                  Object(de.jsx)(A.ic, { small: !0, lineHeight: '1', children: c('Won') }),
                  Object(de.jsxs)(A.ic, { bold: !0, fontSize: '20px', lineHeight: '1', children: [n, '/', n + t] }),
                  Object(de.jsxs)(A.ic, { small: !0, lineHeight: '1', color: 'textSubtle', children: [r, '%'] }),
                ],
              }),
            ],
          })
        },
        oc = { won: 'success', lost: 'failure', entered: 'text' },
        sc = { won: '+', lost: '-', entered: '' },
        ac = function (e) {
          var t = e.type,
            n = e.summary,
            c = e.bnbBusdPrice,
            r = Object(je.b)().t,
            i = oc[t],
            o = n[t],
            s = o.rounds,
            a = o.amount,
            l = ((100 * s) / n.entered.rounds).toFixed(2),
            b = t.charAt(0).toUpperCase() + t.slice(1),
            u = 'won' === t ? n[t].payout : a
          return Object(de.jsxs)(de.Fragment, {
            children: [
              Object(de.jsx)(A.ic, { mt: '16px', bold: !0, color: 'textSubtle', children: r(b) }),
              Object(de.jsxs)(A.W, {
                children: [
                  Object(de.jsxs)(A.W, {
                    flex: '2',
                    flexDirection: 'column',
                    children: [
                      Object(de.jsxs)(A.ic, {
                        bold: !0,
                        fontSize: '20px',
                        color: i,
                        children: [s, ' ', r('Rounds').toLocaleLowerCase()],
                      }),
                      Object(de.jsx)(A.ic, {
                        fontSize: '12px',
                        color: 'textSubtle',
                        children: 'entered' === t ? r('Total').toLocaleLowerCase() : ''.concat(l, '%'),
                      }),
                    ],
                  }),
                  Object(de.jsxs)(A.W, {
                    flex: '3',
                    flexDirection: 'column',
                    children: [
                      Object(de.jsx)(A.ic, {
                        bold: !0,
                        fontSize: '20px',
                        color: i,
                        children: ''.concat(sc[t]).concat(Ue(u), ' BNB'),
                      }),
                      Object(de.jsx)(A.ic, {
                        fontSize: '12px',
                        color: 'textSubtle',
                        children: '~$'.concat(Ue(c.times(u).toNumber())),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        },
        lc = le.e.div(
          on ||
            (on = Object(ae.a)([
              '\n  background-color: ',
              ';\n  height: 1px;\n  margin: 24px auto;\n  width: 100%;\n',
            ])),
          function (e) {
            return e.theme.colors.backgroundDisabled
          },
        ),
        bc = {
          won: { rounds: 0, amount: 0, payout: 0, bestRound: { id: '0', payout: 0, multiplier: 0 } },
          lost: { rounds: 0, amount: 0 },
          entered: { rounds: 0, amount: 0 },
        },
        uc = function (e) {
          var t = e.hasBetHistory,
            n = e.bets,
            c = Object(je.b)().t,
            r = Object(S.c)().account,
            i = H(),
            o = Object(He.g)(),
            s = (function (e, t) {
              return e.reduce(function (e, n) {
                var c = Object(U.f)(n, t)
                if (c === U.a.WIN) {
                  var r = Re(n, Ne.c),
                    i = e.won.bestRound
                  if (r > i.payout) {
                    var o = n.round,
                      s = o.bullAmount,
                      a = o.bearAmount,
                      l = o.totalAmount,
                      b = De(l, n.position === oe.a.BULL ? s : a)
                    i = { id: n.round.id, payout: r, multiplier: b }
                  }
                  return {
                    won: {
                      rounds: e.won.rounds + 1,
                      amount: e.won.amount + n.amount,
                      payout: e.won.payout + r,
                      bestRound: i,
                    },
                    entered: { rounds: e.entered.rounds + 1, amount: e.entered.amount + n.amount },
                    lost: e.lost,
                  }
                }
                return c === U.a.LOSE
                  ? {
                      lost: { rounds: e.lost.rounds + 1, amount: e.lost.amount + n.amount },
                      entered: { rounds: e.entered.rounds + 1, amount: e.entered.amount + n.amount },
                      won: e.won,
                    }
                  : e
              }, bc)
            })(n, i),
            a = s.won.payout - s.lost.amount,
            l = a > 0,
            b = s.entered.amount / s.entered.rounds,
            u = a / s.entered.rounds,
            j = u > 0,
            d = 0 !== s.won.bestRound.payout
          return t
            ? Object(de.jsxs)(A.m, {
                p: '16px',
                children: [
                  Object(de.jsx)(A.ic, {
                    bold: !0,
                    fontSize: '24px',
                    color: 'secondary',
                    pb: '24px',
                    children: c('Your history'),
                  }),
                  Object(de.jsxs)(A.W, {
                    children: [
                      Object(de.jsx)(ic, { lost: s.lost.rounds, won: s.won.rounds }),
                      Object(de.jsxs)(A.W, {
                        flexDirection: 'column',
                        justifyContent: 'center',
                        pl: '24px',
                        children: [
                          Object(de.jsx)(A.ic, { bold: !0, color: 'textSubtle', children: c('Net results') }),
                          Object(de.jsx)(A.ic, {
                            bold: !0,
                            fontSize: '24px',
                            lineHeight: '1',
                            color: l ? 'success' : 'failure',
                            children: ''.concat(l ? '+' : '').concat(Ue(a), ' BNB'),
                          }),
                          Object(de.jsx)(A.ic, {
                            small: !0,
                            color: 'textSubtle',
                            children: '~$'.concat(Ue(o.times(a).toNumber())),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(de.jsxs)(A.m, {
                    pl: '8px',
                    children: [
                      Object(de.jsx)(A.ic, {
                        mt: '24px',
                        bold: !0,
                        color: 'textSubtle',
                        children: c('Average return / round'),
                      }),
                      Object(de.jsx)(A.ic, {
                        bold: !0,
                        color: j ? 'success' : 'failure',
                        children: ''.concat(j ? '+' : '').concat(Ue(u), ' BNB'),
                      }),
                      Object(de.jsx)(A.ic, {
                        small: !0,
                        color: 'textSubtle',
                        children: '~$'.concat(Ue(o.times(u).toNumber())),
                      }),
                      d &&
                        Object(de.jsxs)(de.Fragment, {
                          children: [
                            Object(de.jsx)(A.ic, {
                              mt: '16px',
                              bold: !0,
                              color: 'textSubtle',
                              children: c('Best round: #%roundId%', { roundId: s.won.bestRound.id }),
                            }),
                            Object(de.jsxs)(A.W, {
                              alignItems: 'flex-end',
                              children: [
                                Object(de.jsx)(A.ic, {
                                  bold: !0,
                                  color: 'success',
                                  children: '+'.concat(Ue(s.won.bestRound.payout), ' BNB'),
                                }),
                                Object(de.jsxs)(A.ic, {
                                  ml: '4px',
                                  small: !0,
                                  color: 'textSubtle',
                                  children: ['(', s.won.bestRound.multiplier.toFixed(2), 'x)'],
                                }),
                              ],
                            }),
                            Object(de.jsx)(A.ic, {
                              small: !0,
                              color: 'textSubtle',
                              children: '~$'.concat(Ue(o.times(s.won.bestRound.payout).toNumber())),
                            }),
                          ],
                        }),
                      Object(de.jsx)(A.ic, {
                        mt: '16px',
                        bold: !0,
                        color: 'textSubtle',
                        children: c('Average position entered / round'),
                      }),
                      Object(de.jsx)(A.ic, { bold: !0, children: ''.concat(Ue(b), ' BNB') }),
                      Object(de.jsx)(A.ic, {
                        small: !0,
                        color: 'textSubtle',
                        children: '~$'.concat(Ue(o.times(b).toNumber())),
                      }),
                      Object(de.jsx)(lc, {}),
                      Object(de.jsx)(ac, { type: 'won', summary: s, bnbBusdPrice: o }),
                      Object(de.jsx)(ac, { type: 'lost', summary: s, bnbBusdPrice: o }),
                      Object(de.jsx)(ac, { type: 'entered', summary: s, bnbBusdPrice: o }),
                      Object(de.jsx)(A.W, {
                        justifyContent: 'center',
                        mt: '24px',
                        children: Object(de.jsx)(A.hb, {
                          href: ''.concat(Object(Te.e)(r, 'address'), '#internaltx'),
                          mb: '16px',
                          external: !0,
                          children: Object(de.jsxs)(A.q, {
                            mt: '8px',
                            width: '100%',
                            children: [c('View Reclaimed & Won'), Object(de.jsx)(A.Fb, { color: 'white', ml: '4px' })],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : Object(de.jsxs)(A.m, {
                p: '24px',
                children: [
                  Object(de.jsx)(A.Y, {
                    size: 'lg',
                    textAlign: 'center',
                    mb: '8px',
                    children: c('No prediction history available'),
                  }),
                  Object(de.jsx)(A.ic, {
                    as: 'p',
                    textAlign: 'center',
                    children: c(
                      'If you are sure you should see history here, make sure you\u2019re connected to the correct wallet and try again.',
                    ),
                  }),
                ],
              })
        },
        jc = le.e.div(
          sn ||
            (sn = Object(ae.a)([
              '\n  background-color: ',
              ';\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n',
            ])),
          function (e) {
            return e.theme.card.background
          },
        ),
        dc = le.e.div(
          an || (an = Object(ae.a)(['\n  flex: 1;\n  height: 100%;\n  overflow-y: auto;\n  position: relative;\n'])),
        ),
        xc = le.e.div(
          ln ||
            (ln = Object(ae.a)([
              '\n  align-items: center;\n  background-color: ',
              ';\n  display: flex;\n  left: 0;\n  height: 100%;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  width: 100%;\n',
            ])),
          function (e) {
            return e.theme.card.background
          },
        ),
        pc = function () {
          var e = Object(S.c)().account,
            t = Object(L.b)(),
            n = F(),
            c = _(),
            r = q(),
            i = H(),
            o = Object(je.b)().t,
            s = Q(e),
            a = Object(C.useState)(y.ROUNDS),
            l = Object(k.a)(a, 2),
            b = l[0],
            u = l[1]
          Object(C.useEffect)(
            function () {
              e && n && t(Object(Z.c)({ account: e }))
            },
            [e, i, n, t],
          )
          var j = r === oe.b.UNCOLLECTED ? Object(U.i)(s) : s,
            d = j && j.length > 0,
            x = null
          switch (b) {
            case y.PNL:
              x = Object(de.jsx)(uc, { hasBetHistory: d, bets: j })
              break
            case y.ROUNDS:
            default:
              x = Object(de.jsx)(Jn, { hasBetHistory: d, bets: j })
          }
          return (
            e ||
              (x = Object(de.jsxs)(A.W, {
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                mt: '32px',
                children: [
                  Object(de.jsx)(Ie.a, {}),
                  Object(de.jsx)(A.ic, {
                    mt: '8px',
                    children: o('Connect your wallet to view your prediction history'),
                  }),
                ],
              })),
            Object(de.jsxs)(jc, {
              children: [
                Object(de.jsx)(Wn, { activeTab: b, setActiveTab: u }),
                Object(de.jsx)(dc, {
                  children: c ? Object(de.jsx)(xc, { children: Object(de.jsx)(A.Wb, { size: 72 }) }) : x,
                }),
              ],
            })
          )
        },
        hc = n(1387),
        Oc = n(1380),
        fc = n(1381),
        mc = n(1398),
        gc = n(1382),
        vc = (n(1047), n(94)),
        wc = ['isActive'],
        yc = ['isActive'],
        kc = function (e) {
          var t = e.isActive,
            n = Object(Fe.a)(e, wc),
            c = Object(le.g)().colors[t ? 'failure' : 'tertiary']
          return Object(de.jsxs)(
            A.bc,
            Object(I.a)(
              Object(I.a)({ height: '65px', width: '240px', viewBox: '0 0 240 65' }, n),
              {},
              {
                children: [
                  Object(de.jsx)('g', {
                    filter: 'url(#filter0_i)',
                    children: Object(de.jsx)('path', {
                      d: 'M10.0001 15.7243L10.0003 1H234L234 15.7247C234 22.4864 229.749 28.5181 223.381 30.7923L138.48 61.1141C127.823 64.9203 116.177 64.9203 105.519 61.1141L20.6188 30.7924C14.2508 28.5181 10.0001 22.4862 10.0001 15.7243Z',
                      fill: c,
                    }),
                  }),
                  Object(de.jsx)('defs', {
                    children: Object(de.jsxs)('filter', {
                      id: 'filter0_i',
                      x: '10.0001',
                      y: '1',
                      width: '224',
                      height: '62.9688',
                      filterUnits: 'userSpaceOnUse',
                      colorInterpolationFilters: 'sRGB',
                      children: [
                        Object(de.jsx)('feFlood', { floodOpacity: '0', result: 'BackgroundImageFix' }),
                        Object(de.jsx)('feBlend', {
                          mode: 'normal',
                          in: 'SourceGraphic',
                          in2: 'BackgroundImageFix',
                          result: 'shape',
                        }),
                        Object(de.jsx)('feColorMatrix', {
                          in: 'SourceAlpha',
                          type: 'matrix',
                          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                          result: 'hardAlpha',
                        }),
                        Object(de.jsx)('feOffset', {}),
                        Object(de.jsx)('feGaussianBlur', { stdDeviation: '1' }),
                        Object(de.jsx)('feComposite', { in2: 'hardAlpha', operator: 'arithmetic', k2: '-1', k3: '1' }),
                        Object(de.jsx)('feColorMatrix', {
                          type: 'matrix',
                          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0',
                        }),
                        Object(de.jsx)('feBlend', { mode: 'normal', in2: 'shape', result: 'effect1_innerShadow' }),
                      ],
                    }),
                  }),
                ],
              },
            ),
          )
        },
        Cc = function (e) {
          var t = e.isActive,
            n = Object(Fe.a)(e, yc),
            c = Object(le.g)().colors[t ? 'success' : 'tertiary']
          return Object(de.jsxs)(
            A.bc,
            Object(I.a)(
              Object(I.a)({ height: '65px', width: '240px', viewBox: '0 0 240 65' }, n),
              {},
              {
                children: [
                  Object(de.jsx)('g', {
                    filter: 'url(#filter0_i)',
                    children: Object(de.jsx)('path', {
                      d: 'M10.0001 49.2757L10.0003 64H234L234 49.2753C234 42.5136 229.749 36.4819 223.381 34.2077L138.48 3.8859C127.823 0.0796983 116.177 0.0796931 105.519 3.8859L20.6188 34.2076C14.2508 36.4819 10.0001 42.5138 10.0001 49.2757Z',
                      fill: c,
                    }),
                  }),
                  Object(de.jsx)('defs', {
                    children: Object(de.jsxs)('filter', {
                      id: 'filter0_i',
                      x: '10.0001',
                      y: '1.03125',
                      width: '224',
                      height: '62.9688',
                      filterUnits: 'userSpaceOnUse',
                      colorInterpolationFilters: 'sRGB',
                      children: [
                        Object(de.jsx)('feFlood', { floodOpacity: '0', result: 'BackgroundImageFix' }),
                        Object(de.jsx)('feBlend', {
                          mode: 'normal',
                          in: 'SourceGraphic',
                          in2: 'BackgroundImageFix',
                          result: 'shape',
                        }),
                        Object(de.jsx)('feColorMatrix', {
                          in: 'SourceAlpha',
                          type: 'matrix',
                          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                          result: 'hardAlpha',
                        }),
                        Object(de.jsx)('feOffset', {}),
                        Object(de.jsx)('feGaussianBlur', { stdDeviation: '1' }),
                        Object(de.jsx)('feComposite', { in2: 'hardAlpha', operator: 'arithmetic', k2: '-1', k3: '1' }),
                        Object(de.jsx)('feColorMatrix', {
                          type: 'matrix',
                          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0',
                        }),
                        Object(de.jsx)('feBlend', { mode: 'normal', in2: 'shape', result: 'effect1_innerShadow' }),
                      ],
                    }),
                  }),
                ],
              },
            ),
          )
        },
        Sc = function (e) {
          var t = e.amount,
            n = e.hasClaimed,
            c = void 0 !== n && n,
            r = Object(je.b)().t,
            i = Object(A.Jc)(
              Object(de.jsx)('div', { style: { whiteSpace: 'nowrap' }, children: ''.concat(et(t), ' BNB') }),
              { placement: 'bottom' },
            ),
            o = i.targetRef,
            s = i.tooltipVisible,
            a = i.tooltip
          return Object(de.jsxs)(de.Fragment, {
            children: [
              Object(de.jsxs)('span', {
                ref: o,
                children: [
                  Object(de.jsx)(A.gc, {
                    variant: 'secondary',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    outline: !c,
                    startIcon: c ? Object(de.jsx)(A.D, { width: '18px' }) : Object(de.jsx)(A.E, { width: '18px' }),
                    children: r(c ? 'Claimed' : 'Entered'),
                  }),
                  ' ',
                ],
              }),
              ' ',
              s && a,
            ],
          })
        },
        Bc = le.e.div(bn || (bn = Object(ae.a)(['\n  height: 65px;\n  margin: 0 auto;\n  width: 240px;\n']))),
        Ac = le.e.div(
          un ||
            (un = Object(ae.a)([
              '\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  height: 100%;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  width: 100%;\n',
            ])),
        ),
        Lc = le.e.div(jn || (jn = Object(ae.a)(['\n  position: absolute;\n  z-index: 10;\n']))),
        Ec = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'textSubtle'
          return function (t, n) {
            return n ? 'textDisabled' : t ? 'white' : e
          }
        },
        Ic = function (e) {
          var t = e.betAmount,
            n = e.multiplier,
            c = e.hasEntered,
            r = void 0 !== c && c,
            i = e.hasClaimed,
            o = void 0 !== i && i,
            s = e.betPosition,
            a = void 0 === s ? oe.a.BULL : s,
            l = e.isDisabled,
            b = void 0 !== l && l,
            u = e.isActive,
            j = void 0 !== u && u,
            d = Object(je.b)().t,
            x = Ec('success')(j, b),
            p = Ec('failure')(j, b),
            h = Ec()(j, b),
            O = Object(de.jsx)(A.m, {
              children: Object(de.jsxs)(A.W, {
                justifyContent: 'center',
                height: '14px',
                children: [
                  Object(de.jsx)(A.ic, {
                    fontSize: '14px',
                    color: h,
                    bold: !0,
                    lineHeight: '14x',
                    children: void 0 !== n ? ''.concat(n, 'x') : '-',
                  }),
                  Object(de.jsx)(A.ic, {
                    fontSize: '14px',
                    color: h,
                    lineHeight: '14x',
                    ml: '4px',
                    children: d('Payout'),
                  }),
                ],
              }),
            }),
            f = function (e) {
              return r
                ? Object(de.jsx)(Lc, { style: e, children: Object(de.jsx)(Sc, { amount: t, hasClaimed: o }) })
                : null
            }
          return a === oe.a.BEAR
            ? Object(de.jsx)(A.m, {
                mt: '-1px',
                position: 'relative',
                children: Object(de.jsxs)(Bc, {
                  children: [
                    Object(de.jsx)(kc, { isActive: j }),
                    f({ bottom: 0, right: 0 }),
                    Object(de.jsxs)(Ac, {
                      children: [
                        !b && O,
                        Object(de.jsx)(A.ic, {
                          bold: !0,
                          fontSize: '20px',
                          mb: '8px',
                          color: p,
                          textTransform: 'uppercase',
                          children: d('Down'),
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : Object(de.jsx)(A.m, {
                mb: '-1px',
                position: 'relative',
                children: Object(de.jsxs)(Bc, {
                  children: [
                    Object(de.jsx)(Cc, { isActive: j }),
                    f({ top: 0, left: 0 }),
                    Object(de.jsxs)(Ac, {
                      children: [
                        Object(de.jsx)(A.ic, {
                          bold: !0,
                          fontSize: '20px',
                          lineHeight: '21px',
                          color: x,
                          textTransform: 'uppercase',
                          children: d('Up'),
                        }),
                        !b && O,
                      ],
                    }),
                  ],
                }),
              })
        },
        Nc = '37px',
        Pc = function (e, t) {
          var n = 'calc('.concat(Nc, ' + 1px)')
          switch (t) {
            case 'calculating':
              return 'linear-gradient(transparent '
                .concat(n, ', ')
                .concat(e.colors.cardBorder, ' ')
                .concat(n, '), ')
                .concat(e.colors.gradients.cardHeader)
            case 'canceled':
              return 'linear-gradient('
                .concat(e.colors.warning, ' ')
                .concat(n, ', ')
                .concat(e.colors.cardBorder, ' ')
                .concat(n, ')')
            case 'next':
              return 'linear-gradient('
                .concat(e.colors.secondary, ' ')
                .concat(n, ', ')
                .concat(e.colors.cardBorder, ' ')
                .concat(n, ')')
            case 'expired':
            case 'soon':
            default:
              return e.colors.cardBorder
          }
        },
        Wc = function (e, t) {
          switch (e) {
            case 'expired':
              return 'textDisabled'
            case 'next':
              return 'white'
            case 'live':
              return 'secondary'
            case 'canceled':
            case 'calculating':
              return 'text'
            default:
              return t
          }
        },
        Uc = le.e.div(
          dn ||
            (dn = Object(ae.a)([
              '\n  align-items: center;\n  background: ',
              ';\n  display: flex;\n  justify-content: space-between;\n  height: ',
              ';\n  padding: ',
              ';\n',
            ])),
          function (e) {
            return (function (e, t) {
              switch (t) {
                case 'calculating':
                  return e.colors.gradients.cardHeader
                case 'live':
                  return 'transparent'
                case 'canceled':
                  return e.colors.warning
                case 'next':
                  return e.colors.secondary
                case 'expired':
                case 'soon':
                default:
                  return e.colors.cardBorder
              }
            })(e.theme, e.status)
          },
          Nc,
          function (e) {
            return 'live' === e.status ? '16px' : '8px'
          },
        ),
        Dc = le.e.div(xn || (xn = Object(ae.a)(['\n  justify-self: center;\n']))),
        zc = function (e) {
          var t = e.status,
            n = e.title,
            c = e.epoch,
            r = e.icon,
            i = Wc(t, 'text'),
            o = 'live' === t
          return Object(de.jsxs)(Uc, {
            status: t,
            children: [
              Object(de.jsxs)(A.W, {
                alignItems: 'center',
                children: [
                  r,
                  Object(de.jsx)(A.ic, {
                    color: i,
                    bold: o,
                    textTransform: o ? 'uppercase' : 'capitalize',
                    lineHeight: '21px',
                    children: n,
                  }),
                ],
              }),
              Object(de.jsx)(Dc, {
                children: Object(de.jsx)(A.ic, {
                  fontSize: o ? '14px' : '12px',
                  color: Wc(t, 'textSubtle'),
                  textAlign: 'center',
                  children: '#'.concat(c),
                }),
              }),
            ],
          })
        },
        Rc = ['epoch', 'payout', 'betAmount', 'isBottom'],
        Fc = Object(le.e)(A.W)(
          pn ||
            (pn = Object(ae.a)([
              '\n  background-color: ',
              ';\n  left: 0;\n  position: absolute;\n  width: 100%;\n  z-index: 30;\n\n  ',
              '\n',
            ])),
          function (e) {
            return e.theme.colors.secondary
          },
          function (e) {
            return e.isBottom
              ? '\n      border-radius: 0 0 16px 16px;\n      bottom: 0;\n    '
              : '\n      top: 37px; // Card header height\n    '
          },
        ),
        Tc = function (e) {
          var t = e.epoch,
            n = e.payout,
            c = e.betAmount,
            r = e.isBottom,
            i = void 0 !== r && r,
            o = Object(Fe.a)(e, Rc),
            s = Object(je.b)().t
          return (function (e) {
            return (
              Object(N.c)(function (e) {
                return e.predictions.claimableStatuses
              })[e] || !1
            )
          })(t)
            ? Object(de.jsxs)(
                Fc,
                Object(I.a)(
                  Object(I.a)({ alignItems: 'center', p: '16px', isBottom: i }, o),
                  {},
                  {
                    children: [
                      Object(de.jsx)(A.rc, { width: '64px', style: { flex: 'none' }, mr: '8px' }),
                      Object(de.jsx)(Je, {
                        payout: n,
                        betAmount: c,
                        epoch: t,
                        hasClaimed: !1,
                        width: '100%',
                        children: s('Collect Winnings'),
                      }),
                    ],
                  },
                ),
              )
            : null
        },
        Hc = function (e) {
          var t = e.round,
            n = Object(je.b)().t,
            c = Object(vc.a)().theme,
            r = Wt(t.epoch),
            i = r.isRefundable,
            o = r.setIsRefundable,
            s = t.epoch,
            a = (function () {
              var e = Object(te.a)(
                ee.a.mark(function e() {
                  return ee.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          o(!1)
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              return function () {
                return e.apply(this, arguments)
              }
            })()
          return Object(de.jsxs)(A.u, {
            borderBackground: Pc(c, 'canceled'),
            children: [
              Object(de.jsx)(zc, {
                status: 'canceled',
                icon: Object(de.jsx)(A.k, { mr: '4px', width: '21px' }),
                title: n('Canceled'),
                epoch: t.epoch,
              }),
              Object(de.jsxs)(A.v, {
                p: '16px',
                children: [
                  Object(de.jsx)(Ic, { isDisabled: !0 }),
                  Object(de.jsx)(St, {
                    children: Object(de.jsxs)(A.W, {
                      flexDirection: 'column',
                      alignItems: 'center',
                      children: [
                        Object(de.jsx)(A.ic, {
                          bold: !0,
                          color: i ? 'text' : 'textDisabled',
                          children: n('Round Canceled'),
                        }),
                        i && Object(de.jsx)(Ze, { epoch: s, onSuccess: a, width: '100%', my: '8px' }),
                        Object(de.jsx)(A.ib, {
                          href: 'https://docs.pancakeswap.finance/products/prediction',
                          external: !0,
                          children: n('Learn More'),
                        }),
                      ],
                    }),
                  }),
                  Object(de.jsx)(Ic, { betPosition: oe.a.BEAR, isDisabled: !0 }),
                ],
              }),
            ],
          })
        },
        Yc = function (e) {
          var t = e.round,
            n = e.hasEnteredUp,
            c = e.hasEnteredDown,
            r = Object(je.b)().t,
            i = Object(vc.a)().theme,
            o = Object(A.Jc)(
              r(
                'This round\u2019s closing transaction has been submitted to the blockchain, and is awaiting confirmation.',
              ),
              { placement: 'bottom' },
            ),
            s = o.targetRef,
            a = o.tooltip,
            l = o.tooltipVisible
          return Object(de.jsxs)(de.Fragment, {
            children: [
              Object(de.jsxs)(A.u, {
                borderBackground: Pc(i, 'calculating'),
                children: [
                  Object(de.jsx)(zc, {
                    status: 'calculating',
                    icon: Object(de.jsx)(A.zc, { mr: '4px', width: '21px' }),
                    title: r('Calculating'),
                    epoch: t.epoch,
                  }),
                  Object(de.jsxs)(A.v, {
                    p: '16px',
                    children: [
                      Object(de.jsx)(Ic, { isDisabled: !0, hasEntered: n }),
                      Object(de.jsx)(St, {
                        children: Object(de.jsxs)(A.W, {
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          children: [
                            Object(de.jsx)(A.Wb, { size: 96 }),
                            Object(de.jsxs)(A.W, {
                              mt: '8px',
                              ref: s,
                              children: [
                                Object(de.jsx)(A.qc, { children: r('Calculating') }),
                                Object(de.jsx)(A.db, { ml: '4px' }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(de.jsx)(Ic, { betPosition: oe.a.BEAR, isDisabled: !0, hasEntered: c }),
                    ],
                  }),
                ],
              }),
              l && a,
            ],
          })
        },
        Mc = Object(le.e)(A.u)(
          hn ||
            (hn = Object(ae.a)([
              '\n  opacity: 0.7;\n  transition: opacity 300ms;\n\n  &:hover {\n    opacity: 1;\n  }\n',
            ])),
        ),
        qc = function (e) {
          var t = e.round,
            n = e.betAmount,
            c = e.hasEnteredUp,
            r = e.hasEnteredDown,
            i = e.hasClaimedUp,
            o = e.hasClaimedDown,
            s = e.bullMultiplier,
            a = e.bearMultiplier,
            l = Object(je.b)().t,
            b = Object(vc.a)().theme,
            u = Object(S.c)().account,
            j = t.epoch,
            d = t.lockPrice,
            x = t.closePrice,
            p = x > d ? oe.a.BULL : oe.a.BEAR,
            h = R(u, j),
            O = V(),
            f = it(h, t).toUnsafeFloat().toFixed(4),
            m = ct(t, O)
          return m
            ? Object(de.jsx)(Hc, { round: t })
            : x
            ? Object(de.jsxs)(A.m, {
                position: 'relative',
                children: [
                  Object(de.jsxs)(Mc, {
                    borderBackground: Pc(b, 'expired'),
                    children: [
                      Object(de.jsx)(zc, {
                        status: 'expired',
                        icon: Object(de.jsx)(A.k, { mr: '4px', width: '21px', color: 'textDisabled' }),
                        title: l('Expired'),
                        epoch: t.epoch,
                      }),
                      Object(de.jsxs)(A.v, {
                        p: '16px',
                        style: { position: 'relative' },
                        children: [
                          Object(de.jsx)(Ic, {
                            betAmount: n,
                            multiplier: s,
                            isActive: p === oe.a.BULL,
                            hasEntered: c,
                            hasClaimed: i,
                          }),
                          Object(de.jsx)(It, { round: t, hasFailed: m }),
                          Object(de.jsx)(Ic, {
                            betAmount: n,
                            multiplier: a,
                            betPosition: oe.a.BEAR,
                            isActive: p === oe.a.BEAR,
                            hasEntered: r,
                            hasClaimed: o,
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(de.jsx)(Tc, { epoch: j, payout: f, betAmount: n ? Object(Pe.b)(n, 4) : '0', isBottom: r }),
                ],
              })
            : Object(de.jsx)(Yc, { round: t, hasEnteredDown: r, hasEnteredUp: c })
        },
        Vc = n(391),
        _c = ['lockTimestamp', 'closeTimestamp'],
        Qc = function (e) {
          var t = e.lockTimestamp,
            n = e.closeTimestamp,
            c = Object(Fe.a)(e, _c),
            r = 1e3 * t,
            i = 1e3 * n,
            o = ((Date.now() - r) / (i - r)) * 100,
            s = o <= 100 ? o : 100
          return Object(de.jsx)(A.Ob, Object(I.a)({ primaryStep: s }, c))
        },
        $c = function (e) {
          var t = e.round,
            n = e.betAmount,
            c = e.hasEnteredUp,
            r = e.hasEnteredDown,
            i = e.bullMultiplier,
            o = e.bearMultiplier,
            s = Object(je.b)().t,
            a = t.lockPrice,
            l = t.totalAmount,
            b = t.lockTimestamp,
            u = t.closeTimestamp,
            j = $(),
            d = V(),
            x = a && j.gt(a),
            p = x ? 'success' : 'failure',
            h = ot(j, a),
            O = parseFloat(Object(Pe.b)(j, 3, 8)),
            f = ct(t, d),
            m = Object(Vc.useCountUp)({ start: 0, end: O, duration: 1, decimals: 3 }),
            g = m.countUp,
            v = m.update,
            w = Object(A.Jc)(s('Last price from Chainlink Oracle'), { placement: 'bottom' }),
            y = w.targetRef,
            k = w.tooltip,
            S = w.tooltipVisible,
            B = Object(C.useRef)(v)
          return (
            Object(C.useEffect)(
              function () {
                B.current(O)
              },
              [O, B],
            ),
            f
              ? Object(de.jsx)(Hc, { round: t })
              : Object(de.jsxs)(A.u, {
                  isActive: !0,
                  children: [
                    Object(de.jsx)(zc, {
                      status: 'live',
                      icon: Object(de.jsx)(A.Jb, { mr: '4px', width: '24px', color: 'secondary' }),
                      title: s('Live'),
                      epoch: t.epoch,
                    }),
                    Object(de.jsx)(Qc, { variant: 'flat', scale: 'sm', lockTimestamp: b, closeTimestamp: u }),
                    Object(de.jsxs)(A.v, {
                      p: '16px',
                      children: [
                        Object(de.jsx)(Ic, { betAmount: n, multiplier: i, hasEntered: c, isActive: x }),
                        Object(de.jsxs)(St, {
                          betPosition: x ? oe.a.BULL : oe.a.BEAR,
                          children: [
                            Object(de.jsx)(A.ic, {
                              color: 'textSubtle',
                              fontSize: '12px',
                              bold: !0,
                              textTransform: 'uppercase',
                              mb: '8px',
                              children: s('Last Price'),
                            }),
                            Object(de.jsxs)(A.W, {
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              mb: '16px',
                              height: '36px',
                              children: [
                                Object(de.jsx)('div', {
                                  ref: y,
                                  children: Object(de.jsx)(A.qc, {
                                    bold: !0,
                                    color: p,
                                    fontSize: '24px',
                                    style: { minHeight: '36px' },
                                    children: j.gt(0)
                                      ? '$'.concat(g)
                                      : Object(de.jsx)(A.Tb, { height: '36px', width: '94px' }),
                                  }),
                                }),
                                Object(de.jsx)(ut, { betPosition: x ? oe.a.BULL : oe.a.BEAR, children: Xe(h) }),
                              ],
                            }),
                            a && Object(de.jsx)(yt, { lockPrice: a }),
                            Object(de.jsx)(vt, { totalAmount: l }),
                          ],
                        }),
                        Object(de.jsx)(Ic, {
                          betAmount: n,
                          multiplier: o,
                          betPosition: oe.a.BEAR,
                          hasEntered: r,
                          isActive: !x,
                        }),
                      ],
                    }),
                    S && k,
                  ],
                })
          )
        },
        Jc = le.e.div(
          On ||
            (On = Object(ae.a)([
              '\n  align-items: center;\n  backface-visibility: hidden;\n  display: flex;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  transition: z-index 600ms;\n  width: 100%;\n\n  & > div {\n    flex: 1;\n  }\n',
            ])),
        ),
        Gc = Object(le.e)(Jc)(fn || (fn = Object(ae.a)(['\n  transform: rotateY(180deg);\n']))),
        Zc = le.e.div(
          mn ||
            (mn = Object(ae.a)([
              '\n  height: 100%;\n  position: relative;\n  transform: rotateY(',
              'deg);\n  transform-style: preserve-3d;\n  transition: transform 600ms;\n\n  ',
              ' {\n    z-index: ',
              ';\n  }\n\n  ',
              ' {\n    z-index: ',
              ';\n  }\n',
            ])),
          function (e) {
            return e.isFlipped ? 180 : 0
          },
          Jc,
          function (e) {
            return e.isFlipped ? 5 : 10
          },
          Gc,
          function (e) {
            return e.isFlipped ? 10 : 5
          },
        ),
        Kc = le.e.div(gn || (gn = Object(ae.a)(['\n  perspective: 1000px;\n  z-index: auto;\n']))),
        Xc = function (e) {
          var t = e.isFlipped,
            n = e.height,
            c = (function (e) {
              if (2 !== e.length) throw new Error('CardFlip: Two children are required')
              return e
            })(e.children),
            r = Object(k.a)(c, 2),
            i = r[0],
            o = r[1]
          return Object(de.jsx)(Kc, {
            style: { height: n },
            children: Object(de.jsxs)(Zc, {
              isFlipped: t,
              children: [Object(de.jsx)(Jc, { children: i }), Object(de.jsx)(Gc, { children: o })],
            }),
          })
        },
        er = n(95),
        tr = n(144),
        nr = function () {
          var e = Object(C.useContext)(ve)
          if (void 0 === e) throw new Error('Swiper not found')
          return e
        },
        cr = Object(le.e)(A.W).attrs({ alignItems: 'center' })(vn || (vn = Object(ae.a)(['\n  flex: 1;\n']))),
        rr = Object(er.parseUnits)('0.01', 18),
        ir = [10, 25, 50, 75],
        or = function (e) {
          var t = parseFloat(e)
          return Number.isNaN(t) ? P.a.BigNumber.from(0) : Object(er.parseUnits)(e)
        },
        sr = function (e) {
          var t = e.position,
            n = e.togglePosition,
            c = e.epoch,
            r = e.onBack,
            i = e.onSuccess,
            o = Object(C.useState)(''),
            s = Object(k.a)(o, 2),
            a = s[0],
            l = s[1],
            b = Object(C.useState)(!1),
            u = Object(k.a)(b, 2),
            j = u[0],
            d = u[1],
            x = Object(C.useState)(null),
            p = Object(k.a)(x, 2),
            h = p[0],
            O = p[1],
            f = Object(C.useState)(0),
            m = Object(k.a)(f, 2),
            g = m[0],
            v = m[1],
            w = Object(S.c)().account,
            y = nr().swiper,
            B = Object(tr.d)().balance,
            L = (function () {
              var e = Object(N.c)(function (e) {
                return e.predictions.minBetAmount
              })
              return Object(C.useMemo)(
                function () {
                  return P.a.BigNumber.from(e)
                },
                [e],
              )
            })(),
            E = Object(je.b)().t,
            I = Object(Ye.a)().toastError,
            W = Object(qe.a)().callWithGasPrice,
            U = Object(Me.t)(),
            D = Object(C.useMemo)(
              function () {
                return P.a.BigNumber.from(B.toString())
              },
              [B],
            ),
            z = Object(C.useMemo)(
              function () {
                return D.gt(rr) ? D.sub(rr) : rr
              },
              [D],
            ),
            R = Object(Pe.a)(D),
            F = or(a),
            T = w && F.gt(0) && null !== h,
            H = function (e) {
              if (e > 0) {
                var t = P.a.FixedNumber.from(z),
                  n = P.a.FixedNumber.from(100),
                  c = P.a.FixedNumber.from(e.toFixed(18)).divUnsafe(n),
                  r = t.mulUnsafe(c)
                l(Object(Pe.c)(r))
              } else l('')
              v(e)
            },
            Y = (function (e, t, n) {
              return (e.gt(0) ? e.lte(t) : t.gt(0))
                ? e.eq(0)
                  ? { key: 'Enter an amount', disabled: !0 }
                  : { key: 'Confirm', disabled: e.lt(n) }
                : { key: 'Insufficient BNB balance', disabled: !0 }
            })(F, z, L),
            M = Y.key,
            q = Y.disabled,
            V = (function () {
              var e = Object(te.a)(
                ee.a.mark(function e() {
                  var n, r, o
                  return ee.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t === oe.a.BULL ? 'betBull' : 'betBear'),
                              (e.prev = 1),
                              (e.next = 4),
                              W(U, n, [c], { value: F.toString() })
                            )
                          case 4:
                            return (r = e.sent), d(!0), (e.next = 8), r.wait()
                          case 8:
                            ;(o = e.sent), i(F.toString(), o.transactionHash), (e.next = 15)
                            break
                          case 12:
                            ;(e.prev = 12),
                              (e.t0 = e.catch(1)),
                              I(
                                E('Error'),
                                E('Please try again. Confirm the transaction and make sure you are paying enough gas!'),
                              )
                          case 15:
                            return (e.prev = 15), d(!1), e.finish(15)
                          case 18:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[1, 12, 15, 18]],
                  )
                }),
              )
              return function () {
                return e.apply(this, arguments)
              }
            })()
          return (
            Object(C.useEffect)(
              function () {
                var e = or(a)
                e.gt(0) && e.lte(z)
                  ? e.gt(0) && e.lt(L)
                    ? O({
                        key: 'A minimum amount of %num% %token% is required',
                        data: { num: Object(Pe.a)(L), token: 'BNB' },
                      })
                    : O(null)
                  : O({ key: 'Insufficient BNB balance' })
              },
              [a, z, L, O],
            ),
            Object(de.jsxs)(A.u, {
              onMouseOver: function () {
                y.keyboard.disable(), y.mousewheel.disable(), y.detachEvents()
              },
              onMouseOut: function () {
                y.keyboard.enable(), y.mousewheel.enable(), y.attachEvents()
              },
              children: [
                Object(de.jsx)(A.x, {
                  p: '16px',
                  children: Object(de.jsxs)(A.W, {
                    alignItems: 'center',
                    children: [
                      Object(de.jsx)(A.bb, {
                        variant: 'text',
                        scale: 'sm',
                        onClick: function () {
                          l(''), v(0), r()
                        },
                        mr: '8px',
                        children: Object(de.jsx)(A.b, { width: '24px' }),
                      }),
                      Object(de.jsx)(cr, {
                        children: Object(de.jsx)(A.Y, { scale: 'md', children: E('Set Position') }),
                      }),
                      Object(de.jsx)(ut, {
                        betPosition: t,
                        onClick: n,
                        children: t === oe.a.BULL ? E('Up') : E('Down'),
                      }),
                    ],
                  }),
                }),
                Object(de.jsxs)(A.v, {
                  py: '16px',
                  children: [
                    Object(de.jsxs)(A.W, {
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: '8px',
                      children: [
                        Object(de.jsxs)(A.ic, {
                          textAlign: 'right',
                          color: 'textSubtle',
                          children: [E('Commit'), ':'],
                        }),
                        Object(de.jsxs)(A.W, {
                          alignItems: 'center',
                          children: [
                            Object(de.jsx)(A.j, { mr: '4px  ' }),
                            Object(de.jsx)(A.ic, { bold: !0, textTransform: 'uppercase', children: 'BNB' }),
                          ],
                        }),
                      ],
                    }),
                    Object(de.jsx)(A.i, {
                      value: a,
                      onUserInput: function (e) {
                        var t = or(e)
                        if (t.eq(0)) v(0)
                        else {
                          var n = P.a.FixedNumber.from(t),
                            c = P.a.FixedNumber.from(z),
                            r = P.a.FixedNumber.from(100),
                            i = n.divUnsafe(c).mulUnsafe(r).toUnsafeFloat()
                          v(i > 100 ? 100 : i)
                        }
                        l(e)
                      },
                      isWarning: T,
                      inputProps: { disabled: !w || j },
                    }),
                    T &&
                      Object(de.jsx)(A.ic, {
                        color: 'failure',
                        fontSize: '12px',
                        mt: '4px',
                        textAlign: 'right',
                        children: E(h.key, h.data),
                      }),
                    Object(de.jsx)(A.ic, {
                      textAlign: 'right',
                      mb: '16px',
                      color: 'textSubtle',
                      fontSize: '12px',
                      style: { height: '18px' },
                      children: w && E('Balance: %balance%', { balance: R }),
                    }),
                    Object(de.jsx)(A.Ub, {
                      name: 'balance',
                      min: 0,
                      max: 100,
                      value: g,
                      onValueChanged: H,
                      valueLabel: w ? ''.concat(g.toFixed(g > 0 ? 1 : 0), '%') : '',
                      step: 0.01,
                      disabled: !w || j,
                      mb: '4px',
                      className: !w || j ? '' : 'swiper-no-swiping',
                    }),
                    Object(de.jsxs)(A.W, {
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: '16px',
                      children: [
                        ir.map(function (e) {
                          return Object(de.jsx)(
                            A.q,
                            {
                              scale: 'xs',
                              variant: 'tertiary',
                              onClick: function () {
                                H(e)
                              },
                              disabled: !w || j,
                              style: { flex: 1 },
                              children: ''.concat(e, '%'),
                            },
                            e,
                          )
                        }),
                        Object(de.jsx)(A.q, {
                          scale: 'xs',
                          variant: 'tertiary',
                          onClick: function () {
                            return H(100)
                          },
                          disabled: !w || j,
                          children: E('Max'),
                        }),
                      ],
                    }),
                    Object(de.jsx)(A.m, {
                      mb: '8px',
                      children: w
                        ? Object(de.jsx)(A.q, {
                            width: '100%',
                            disabled: !w || q,
                            onClick: V,
                            isLoading: j,
                            endIcon: j ? Object(de.jsx)(A.h, { color: 'currentColor', spin: !0 }) : null,
                            children: E(M),
                          })
                        : Object(de.jsx)(Ie.a, { width: '100%' }),
                    }),
                    Object(de.jsx)(A.ic, {
                      as: 'p',
                      fontSize: '12px',
                      lineHeight: 1,
                      color: 'textSubtle',
                      children: E('You won\u2019t be able to remove or change your position once you enter it.'),
                    }),
                  ],
                }),
              ],
            })
          )
        },
        ar = function (e) {
          var t = e.round,
            n = e.betAmount,
            c = e.hasEnteredUp,
            r = e.hasEnteredDown,
            i = e.bullMultiplier,
            o = e.bearMultiplier,
            s = Object(C.useState)({ isSettingPosition: !1, position: oe.a.BULL }),
            a = Object(k.a)(s, 2),
            l = a[0],
            b = a[1],
            u = Object(je.b)().t,
            j = Object(vc.a)().theme,
            d = Object(Ye.a)().toastSuccess,
            x = Object(S.c)().account,
            p = Object(L.b)(),
            h = l.isSettingPosition,
            O = l.position,
            f = Date.now() > 1e3 * (t.lockTimestamp + Ne.d),
            m = O === oe.a.BULL ? u('Up').toUpperCase() : u('Down').toUpperCase(),
            g = Object(A.Jc)(
              Object(de.jsx)('div', { style: { whiteSpace: 'nowrap' }, children: ''.concat(et(n), ' BNB') }),
              { placement: 'top' },
            ),
            v = g.targetRef,
            w = g.tooltipVisible,
            y = g.tooltip,
            B = !c && !r && null === t.lockPrice,
            E = function () {
              return b(function (e) {
                return Object(I.a)(Object(I.a)({}, e), {}, { isSettingPosition: !1 })
              })
            },
            N = function (e) {
              b(function (t) {
                return Object(I.a)(Object(I.a)({}, t), {}, { isSettingPosition: !0, position: e })
              })
            },
            P = (function () {
              var e = Object(te.a)(
                ee.a.mark(function e() {
                  return ee.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), p(Object(Z.d)({ account: x, epochs: [t.epoch] }))
                        case 2:
                          E(), d(u('Success!'), u('%position% position entered', { position: m }))
                        case 4:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              return function () {
                return e.apply(this, arguments)
              }
            })()
          return Object(de.jsxs)(Xc, {
            isFlipped: h,
            height: '404px',
            children: [
              Object(de.jsxs)(A.u, {
                borderBackground: Pc(j, 'next'),
                children: [
                  Object(de.jsx)(zc, {
                    status: 'next',
                    epoch: t.epoch,
                    icon: Object(de.jsx)(A.Jb, { color: 'white', mr: '4px', width: '21px' }),
                    title: u('Next'),
                  }),
                  Object(de.jsxs)(A.v, {
                    p: '16px',
                    children: [
                      Object(de.jsx)(Ic, { betAmount: n, multiplier: i, hasEntered: c }),
                      Object(de.jsx)(St, {
                        isNext: B,
                        isLive: !B,
                        children: B
                          ? Object(de.jsxs)(de.Fragment, {
                              children: [
                                Object(de.jsx)(vt, { totalAmount: t.totalAmount, mb: '8px' }),
                                Object(de.jsx)(A.q, {
                                  variant: 'success',
                                  width: '100%',
                                  onClick: function () {
                                    return N(oe.a.BULL)
                                  },
                                  mb: '4px',
                                  disabled: !B || f,
                                  children: u('Enter UP'),
                                }),
                                Object(de.jsx)(A.q, {
                                  variant: 'danger',
                                  width: '100%',
                                  onClick: function () {
                                    return N(oe.a.BEAR)
                                  },
                                  disabled: !B || f,
                                  children: u('Enter DOWN'),
                                }),
                              ],
                            })
                          : Object(de.jsxs)(de.Fragment, {
                              children: [
                                Object(de.jsx)('div', {
                                  ref: v,
                                  children: Object(de.jsx)(A.q, {
                                    disabled: !0,
                                    startIcon:
                                      O === oe.a.BULL
                                        ? Object(de.jsx)(A.g, { color: 'currentColor' })
                                        : Object(de.jsx)(A.c, { color: 'currentColor' }),
                                    width: '100%',
                                    mb: '8px',
                                    children: u('%position% Entered', { position: m }),
                                  }),
                                }),
                                Object(de.jsx)(vt, { totalAmount: t.totalAmount }),
                                w && y,
                              ],
                            }),
                      }),
                      Object(de.jsx)(Ic, { betAmount: n, multiplier: o, betPosition: oe.a.BEAR, hasEntered: r }),
                    ],
                  }),
                ],
              }),
              Object(de.jsx)(sr, {
                onBack: E,
                onSuccess: P,
                position: O,
                togglePosition: function () {
                  b(function (e) {
                    return Object(I.a)(
                      Object(I.a)({}, e),
                      {},
                      { position: e.position === oe.a.BULL ? oe.a.BEAR : oe.a.BULL },
                    )
                  })
                },
                epoch: t.epoch,
              }),
            ],
          })
        },
        lr = n(271),
        br = function () {
          return Math.floor(Date.now() / 1e3)
        },
        ur = function (e) {
          var t = Object(C.useState)(function () {
              return e - br()
            }),
            n = Object(k.a)(t, 2),
            c = n[0],
            r = n[1],
            i = Object(C.useState)(!1),
            o = Object(k.a)(i, 2),
            s = o[0],
            a = o[1],
            l = Object(lr.a)(),
            b = Object(C.useCallback)(
              function () {
                return a(!0)
              },
              [a],
            ),
            u = Object(C.useCallback)(
              function () {
                return a(!1)
              },
              [a],
            )
          return (
            Object(C.useEffect)(
              function () {
                var e
                return (
                  !s &&
                    c > 0 &&
                    (e = setTimeout(function () {
                      r(function (e) {
                        return e - 1
                      })
                    }, 1e3)),
                  function () {
                    clearTimeout(e)
                  }
                )
              },
              [c, s, r],
            ),
            Object(C.useEffect)(
              function () {
                r(e - br())
              },
              [e, r],
            ),
            Object(C.useEffect)(
              function () {
                l ? (r(e - br()), u()) : b()
              },
              [b, u, e, r, l],
            ),
            { secondsRemaining: c, pause: b, unpause: u }
          )
        },
        jr = function (e) {
          var t = e.round,
            n = Y(),
            c = ur(t.startTimestamp + n + Ne.d).secondsRemaining,
            r = nt(c),
            i = Object(je.b)().t,
            o = Object(vc.a)().theme
          return Object(de.jsxs)(A.u, {
            borderBackground: Pc(o, 'soon'),
            children: [
              Object(de.jsx)(zc, {
                status: 'soon',
                icon: Object(de.jsx)(A.zc, { mr: '4px', width: '21px' }),
                title: i('Later'),
                epoch: t.epoch,
              }),
              Object(de.jsxs)(A.v, {
                p: '16px',
                children: [
                  Object(de.jsx)(Ic, { isDisabled: !0 }),
                  Object(de.jsx)(St, {
                    children: Object(de.jsxs)(A.ic, {
                      textAlign: 'center',
                      children: [
                        Object(de.jsx)(A.ic, { bold: !0, children: i('Entry starts') }),
                        Object(de.jsx)(A.ic, { fontSize: '24px', bold: !0, children: '~'.concat(r) }),
                      ],
                    }),
                  }),
                  Object(de.jsx)(Ic, { betPosition: oe.a.BEAR, isDisabled: !0 }),
                ],
              }),
            ],
          })
        },
        dr = function (e) {
          var t = e.round,
            n = t.epoch,
            c = t.lockPrice,
            r = t.closePrice,
            i = t.totalAmount,
            o = t.bullAmount,
            s = t.bearAmount,
            a = H(),
            l = Object(S.c)().account,
            b = R(l, n),
            u = !!b && b.amount.gt(0),
            j = u && b.position === oe.a.BULL,
            d = u && b.position === oe.a.BEAR,
            x = u && b.claimed && b.position === oe.a.BULL,
            p = u && b.claimed && b.position === oe.a.BEAR,
            h = rt(i, o),
            O = rt(i, s),
            f = h.toUnsafeFloat().toFixed(h.isZero() ? 0 : 2),
            m = O.toUnsafeFloat().toFixed(O.isZero() ? 0 : 2)
          return n === a && null === c
            ? Object(de.jsx)(ar, {
                round: t,
                hasEnteredDown: d,
                hasEnteredUp: j,
                betAmount: null === b || void 0 === b ? void 0 : b.amount,
                bullMultiplier: f,
                bearMultiplier: m,
              })
            : null === r && n === a - 1
            ? Object(de.jsx)($c, {
                betAmount: null === b || void 0 === b ? void 0 : b.amount,
                hasEnteredDown: d,
                hasEnteredUp: j,
                round: t,
                bullMultiplier: f,
                bearMultiplier: m,
              })
            : n > a
            ? Object(de.jsx)(jr, { round: t })
            : Object(de.jsx)(qc, {
                round: t,
                hasEnteredDown: d,
                hasEnteredUp: j,
                hasClaimedDown: p,
                hasClaimedUp: x,
                betAmount: null === b || void 0 === b ? void 0 : b.amount,
                bullMultiplier: f,
                bearMultiplier: m,
              })
        },
        xr = Object(le.e)(A.m)(
          wn ||
            (wn = Object(ae.a)([
              '\n  margin-top: -24px;\n  position: absolute;\n  top: 50%;\n  z-index: 30;\n\n  & > svg {\n    height: 48px;\n    width: 48px;\n  }\n\n  ',
              ' {\n    margin-top: -32px;\n\n    & > svg {\n      height: 64px;\n      width: 64px;\n    }\n  }\n',
            ])),
          function (e) {
            return e.theme.mediaQueries.lg
          },
        ),
        pr = Object(le.e)(A.ic)(
          yn ||
            (yn = Object(ae.a)([
              '\n  font-size: 16px;\n  line-height: 21px;\n\n  ',
              ' {\n    font-size: 20px;\n    line-height: 22px;\n  }\n',
            ])),
          function (e) {
            return e.theme.mediaQueries.lg
          },
        ),
        hr = Object(le.e)(A.ic)(
          kn ||
            (kn = Object(ae.a)([
              '\n  height: 18px;\n  justify-self: start;\n  width: 70px;\n\n  ',
              ' {\n    text-align: center;\n  }\n',
            ])),
          function (e) {
            return e.theme.mediaQueries.lg
          },
        ),
        Or = Object(le.e)(A.ic)(
          Cn || (Cn = Object(ae.a)(['\n  ', ' {\n    text-align: center;\n    width: 32px;\n  }\n'])),
          function (e) {
            return e.theme.mediaQueries.lg
          },
        ),
        fr = Object(le.e)(A.W)(
          Sn ||
            (Sn = Object(ae.a)([
              '\n  background-color: ',
              ';\n  box-shadow: ',
              ';\n  align-items: ',
              ';\n  border-radius: ',
              ';\n  flex-direction: column;\n  overflow: initial;\n  padding: ',
              ';\n\n  ',
              ' {\n    align-items: center;\n    border-radius: ',
              ';\n    flex-direction: row;\n    padding: ',
              ';\n  }\n',
            ])),
          function (e) {
            return e.theme.card.background
          },
          function (e) {
            return e.theme.shadows.level1
          },
          function (e) {
            return 'right' === e.dir ? 'flex-end' : 'flex-start'
          },
          function (e) {
            return 'right' === e.dir ? '8px 8px 8px 24px' : '8px 8px 24px 8px'
          },
          function (e) {
            return 'right' === e.dir ? '0 28px 0 8px' : '0 8px 0 24px'
          },
          function (e) {
            return e.theme.mediaQueries.lg
          },
          function (e) {
            return e.theme.radii.card
          },
          function (e) {
            return 'right' === e.dir ? '8px 40px 8px 8px' : '8px 8px 8px 40px'
          },
        ),
        mr = function () {
          var e = $(),
            t = parseFloat(Object(Pe.b)(e, 3, 8)),
            n = Object(Vc.useCountUp)({ start: 0, end: t, duration: 1, decimals: 3 }),
            c = n.countUp,
            r = n.update,
            i = Object(C.useRef)(r)
          return (
            Object(C.useEffect)(
              function () {
                i.current(t)
              },
              [t, i],
            ),
            Object(de.jsxs)(A.m, {
              pl: '24px',
              position: 'relative',
              display: 'inline-block',
              children: [
                Object(de.jsx)(xr, { left: 0, children: Object(de.jsx)(A.l, {}) }),
                Object(de.jsxs)(fr, {
                  dir: 'left',
                  children: [
                    Object(de.jsx)(pr, { bold: !0, textTransform: 'uppercase', children: 'BNBUSDT' }),
                    Object(de.jsx)(hr, { fontSize: '12px', children: '$'.concat(c) }),
                  ],
                }),
              ],
            })
          )
        },
        gr = function (e) {
          var t = e.interval,
            n = e.unit,
            c = J(),
            r = ur(c + Ne.d).secondsRemaining,
            i = nt(r),
            o = Object(je.b)().t
          return Object(de.jsxs)(A.m, {
            pr: '24px',
            position: 'relative',
            children: [
              Object(de.jsxs)(fr, {
                dir: 'right',
                children: [
                  Object(de.jsx)(pr, { bold: !0, color: 'secondary', children: 0 === r ? o('Closing') : i }),
                  Object(de.jsx)(Or, { fontSize: '12px', children: ''.concat(t).concat(o(n)) }),
                ],
              }),
              Object(de.jsx)(xr, { right: 0, children: Object(de.jsx)(A.Kb, {}) }),
            ],
          })
        },
        vr = Object(le.e)(A.W)(
          Bn ||
            (Bn = Object(ae.a)([
              '\n  align-items: center;\n  display: none;\n  justify-content: space-between;\n  overflow: initial;\n  position: relative;\n  width: 128px;\n\n  box-shadow: ',
              ';\n  border-radius: ',
              ';\n  background-color: ',
              ';\n\n  ',
              ' {\n    display: flex;\n  }\n',
            ])),
          function (e) {
            return e.theme.shadows.level1
          },
          function (e) {
            return e.theme.radii.default
          },
          function (e) {
            return e.theme.card.background
          },
          function (e) {
            return e.theme.mediaQueries.lg
          },
        ),
        wr = le.e.div(
          An ||
            (An = Object(ae.a)(['\n  cursor: pointer;\n  left: 50%;\n  margin-left: -32px;\n  position: absolute;\n'])),
        ),
        yr = function () {
          var e = nr().swiper,
            t = H(),
            n = z()
          return Object(de.jsxs)(vr, {
            children: [
              Object(de.jsx)(A.bb, {
                variant: 'text',
                scale: 'sm',
                onClick: function () {
                  e.slidePrev()
                },
                children: Object(de.jsx)(A.b, { color: 'primary', width: '24px' }),
              }),
              Object(de.jsx)(wr, {
                onClick: function () {
                  var c = n.findIndex(function (e) {
                    return e.epoch === t
                  })
                  e.slideTo(c - 1), e.update()
                },
                children: Object(de.jsx)(A.o, { width: '64px' }),
              }),
              Object(de.jsx)(A.bb, {
                variant: 'text',
                scale: 'sm',
                onClick: function () {
                  e.slideNext()
                },
                children: Object(de.jsx)(A.e, { color: 'primary', width: '24px' }),
              }),
            ],
          })
        },
        kr = function () {
          var e = _(),
            t = Object(L.b)(),
            n = Object(S.c)().account
          return Object(de.jsx)(A.bb, {
            variant: 'subtle',
            ml: '8px',
            onClick: function () {
              t(Object(Z.k)(!0))
            },
            isLoading: e,
            disabled: !n,
            children: e
              ? Object(de.jsx)(A.h, { spin: !0, color: 'white' })
              : Object(de.jsx)(A.ab, { width: '24px', color: 'white' }),
          })
        },
        Cr = le.e.div(
          Ln || (Ln = Object(ae.a)(['\n  flex: none;\n  width: auto;\n\n  ', ' {\n    width: 270px;\n  }\n'])),
          function (e) {
            return e.theme.mediaQueries.lg
          },
        ),
        Sr = le.e.div(
          En ||
            (En = Object(ae.a)([
              '\n  order: 1;\n  margin: 0 8px 0 0;\n\n  ',
              ' {\n    order: 2;\n    margin: 0 0 0 8px;\n  }\n',
            ])),
          function (e) {
            return e.theme.mediaQueries.lg
          },
        ),
        Br = le.e.div(In || (In = Object(ae.a)(['\n  order: 2;\n\n  ', ' {\n    order: 1;\n  }\n'])), function (e) {
          return e.theme.mediaQueries.lg
        }),
        Ar = le.e.div(
          Nn || (Nn = Object(ae.a)(['\n  display: none;\n  order: 3;\n\n  ', ' {\n    display: initial;\n  }\n'])),
          function (e) {
            return e.theme.mediaQueries.lg
          },
        ),
        Lr = function () {
          return Object(de.jsxs)(cr, {
            alignItems: 'center',
            p: '16px',
            children: [
              Object(de.jsx)(Cr, { children: Object(de.jsx)(mr, {}) }),
              Object(de.jsx)(cr, { justifyContent: 'center', children: Object(de.jsx)(yr, {}) }),
              Object(de.jsx)(Cr, {
                children: Object(de.jsxs)(A.W, {
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  children: [
                    Object(de.jsx)(Br, { children: Object(de.jsx)(gr, { interval: '5', unit: 'm' }) }),
                    Object(de.jsx)(Sr, {
                      children: Object(de.jsx)(A.bb, {
                        variant: 'subtle',
                        as: 'a',
                        href: 'https://docs.pancakeswap.finance/products/prediction',
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        children: Object(de.jsx)(A.Z, { width: '24px', color: 'white' }),
                      }),
                    }),
                    Object(de.jsx)(Ar, { children: Object(de.jsx)(kr, {}) }),
                  ],
                }),
              }),
            ],
          })
        },
        Er = n(252),
        Ir = function () {
          var e = H(),
            t = z(),
            n = Object(S.c)().account,
            c = Object(Er.a)(e),
            r = nr().swiper,
            i = Object(L.b)()
          Object(C.useEffect)(
            function () {
              if (r && void 0 !== e && void 0 !== c && e !== c) {
                var n = t.findIndex(function (t) {
                  return t.epoch === e
                })
                r.slideTo(n - 1), r.update()
              }
            },
            [c, e, t, r, n, i],
          )
        },
        Nr = function (e, t) {
          var n = nr().swiper,
            c = Object(Er.a)(t)
          Object(C.useEffect)(
            function () {
              n && t !== c && n.activeIndex !== e && n.slideTo(e, 0.1)
            },
            [n, c, t, e],
          )
        }
      hc.a.use([Oc.a, fc.a])
      var Pr,
        Wr,
        Ur,
        Dr,
        zr,
        Rr,
        Fr,
        Tr,
        Hr,
        Yr,
        Mr,
        qr,
        Vr,
        _r,
        Qr,
        $r = le.e.div(
          Pn ||
            (Pn = Object(ae.a)([
              '\n  .swiper-wrapper {\n    align-items: center;\n    display: flex;\n  }\n\n  .swiper-slide {\n    width: 320px;\n  }\n',
            ])),
        ),
        Jr = function (e) {
          var t = e.view,
            n = nr().setSwiper,
            c = z(),
            r = H(),
            i = r > 0 ? r - 1 : r,
            o = c.find(function (e) {
              return e.epoch === i
            }),
            s = c.indexOf(o)
          return (
            Ir(),
            Nr(s, t),
            Object(de.jsxs)(A.m, {
              overflow: 'hidden',
              children: [
                Object(de.jsx)(Lr, {}),
                Object(de.jsx)($r, {
                  children: Object(de.jsx)(mc.a, {
                    initialSlide: s,
                    onSwiper: n,
                    spaceBetween: 16,
                    slidesPerView: 'auto',
                    freeMode: !0,
                    freeModeSticky: !0,
                    centeredSlides: !0,
                    freeModeMomentumRatio: 0.25,
                    freeModeMomentumVelocityRatio: 0.5,
                    mousewheel: !0,
                    keyboard: !0,
                    resizeObserver: !0,
                    children: c.map(function (e) {
                      return Object(de.jsx)(gc.a, { children: Object(de.jsx)(dr, { round: e }) }, e.epoch)
                    }),
                  }),
                }),
              ],
            })
          )
        },
        Gr = Object(le.e)(A.q)(
          Pr ||
            (Pr = Object(ae.a)([
              '\n  background-color: ',
              ';\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  bottom: 12px;\n  color: ',
              ';\n  display: none;\n  left: 32px;\n  position: absolute;\n  z-index: 50;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    background-color: ',
              ';\n    opacity: 1;\n  }\n\n  ',
              ' {\n    display: inline-flex;\n  }\n',
            ])),
          function (e) {
            return e.theme.card.background
          },
          function (e) {
            return e.theme.colors.text
          },
          function (e) {
            return e.theme.card.background
          },
          function (e) {
            return e.theme.mediaQueries.lg
          },
        ),
        Zr = le.e.div(
          Wr ||
            (Wr = Object(ae.a)([
              '\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 12px 0;\n  flex: 1;\n  overflow: hidden;\n',
            ])),
        ),
        Kr = le.e.div(Ur || (Ur = Object(ae.a)(['\n  overflow: hidden;\n  position: relative;\n']))),
        Xr = le.e.div(
          Dr ||
            (Dr = Object(ae.a)([
              '\n  flex: none;\n  overflow: hidden;\n  transition: width 200ms ease-in-out;\n  width: ',
              ';\n',
            ])),
          function (e) {
            return e.isHistoryPaneOpen ? '384px' : 0
          },
        ),
        ei = le.e.div(
          zr || (zr = Object(ae.a)(['\n  display: none;\n\n  ', ' {\n    display: flex;\n    height: 100%;\n  }\n'])),
          function (e) {
            return e.theme.mediaQueries.lg
          },
        ),
        ti = le.e.div(
          Rr ||
            (Rr = Object(ae.a)([
              '\n  align-items: center;\n  display: flex;\n  max-width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n\n  & > div {\n    flex: 1;\n    overflow: hidden;\n  }\n',
            ])),
        ),
        ni = le.e.div(
          Fr ||
            (Fr = Object(ae.a)([
              '\n  background: ',
              ';\n  cursor: row-resize;\n  height: 12px;\n  position: relative;\n\n  &:before {\n    background-color: ',
              ";\n    border-radius: 8px;\n    content: '';\n    height: 4px;\n    left: 50%;\n    margin-left: -32px;\n    position: absolute;\n    top: 4px;\n    width: 64px;\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.dropdown
          },
          function (e) {
            return e.theme.colors.textSubtle
          },
        ),
        ci = function () {
          var e = Object(C.useRef)(),
            t = Object(C.useRef)(),
            n = Object(C.useRef)(),
            c = F(),
            r = T(),
            i = Object(L.b)(),
            o = Object(je.b)().t
          M()
          return (
            Object(C.useEffect)(
              function () {
                var e = Ce()(function () {
                    var e = t.current.getBoundingClientRect().height
                    i(Object(Z.i)(e > 100))
                  }, 50),
                  c = Object(ye.a)({
                    dragInterval: 1,
                    snapOffset: 100,
                    onDrag: e,
                    rowGutters: [{ track: 1, element: n.current }],
                  })
                return function () {
                  c.destroy()
                }
              },
              [n, t, i],
            ),
            Object(de.jsxs)(de.Fragment, {
              children: [
                !r &&
                  Object(de.jsx)(Gr, {
                    variant: 'tertiary',
                    scale: 'sm',
                    startIcon: r ? Object(de.jsx)(A.c, {}) : Object(de.jsx)(A.B, {}),
                    onClick: function () {
                      var t = !r
                      t &&
                        ((e.current.style.transition = 'grid-template-rows 150ms'),
                        (e.current.style.gridTemplateRows = '1.2fr 12px .8fr'),
                        Be()(function () {
                          e.current.style.transition = ''
                        }, 150)),
                        i(Object(Z.i)(t))
                    },
                    children: o(r ? 'Close' : 'Charts'),
                  }),
                Object(de.jsxs)(ei, {
                  children: [
                    Object(de.jsxs)(Zr, {
                      ref: e,
                      children: [
                        Object(de.jsx)(ti, { children: Object(de.jsx)(Jr, {}) }),
                        Object(de.jsx)(ni, { ref: n }),
                        Object(de.jsx)(Kr, { ref: t, children: Object(de.jsx)(Ee, {}) }),
                      ],
                    }),
                    Object(de.jsx)(Xr, { isHistoryPaneOpen: c, children: Object(de.jsx)(pc, {}) }),
                  ],
                }),
              ],
            })
          )
        },
        ri = le.e.div(Tr || (Tr = Object(ae.a)(['\n  flex: none;\n']))),
        ii = le.e.div(Hr || (Hr = Object(ae.a)(['\n  flex: 1;\n  text-align: center;\n']))),
        oi = le.e.div(
          Yr ||
            (Yr = Object(ae.a)([
              '\n  align-items: center;\n  background-color: ',
              ';\n  display: flex;\n  flex: none;\n  height: 64px;\n\n  ',
              ' {\n    display: none;\n  }\n',
            ])),
          function (e) {
            return e.theme.card.background
          },
          function (e) {
            return e.theme.mediaQueries.lg
          },
        ),
        si = function () {
          var e = nr().swiper,
            t = F(),
            n = T(),
            c = M(),
            r = (function (e, t) {
              return e ? 2 : t ? 1 : 0
            })(t, n),
            i = Object(L.b)(),
            o = Object(S.c)().account
          return Object(de.jsxs)(oi, {
            children: [
              Object(de.jsx)(ri, {
                children: Object(de.jsx)(A.bb, {
                  variant: 'text',
                  onClick: function () {
                    return e.slidePrev()
                  },
                  disabled: c !== oe.c.LIVE,
                  children: Object(de.jsx)(A.b, { width: '24px', color: 'primary' }),
                }),
              }),
              Object(de.jsx)(ii, {
                children: Object(de.jsxs)(A.r, {
                  activeIndex: r,
                  scale: 'sm',
                  variant: 'subtle',
                  onItemClick: function (e) {
                    switch (e) {
                      case 2:
                        i(Object(Z.k)(!0))
                        break
                      case 1:
                        i(Object(Z.i)(!0)), i(Object(Z.k)(!1))
                        break
                      case 0:
                      default:
                        i(Object(Z.k)(!1)), i(Object(Z.i)(!1))
                    }
                  },
                  children: [
                    Object(de.jsx)(A.s, { children: Object(de.jsx)(A.A, { color: 'currentColor' }) }),
                    Object(de.jsx)(A.s, { children: Object(de.jsx)(A.B, { color: 'currentColor' }) }),
                    Object(de.jsx)(A.s, { disabled: !o, children: Object(de.jsx)(A.ab, { color: 'currentColor' }) }),
                  ],
                }),
              }),
              Object(de.jsx)(ri, {
                children: Object(de.jsx)(A.bb, {
                  variant: 'text',
                  onClick: function () {
                    return e.slideNext()
                  },
                  disabled: c !== oe.c.LIVE,
                  children: Object(de.jsx)(A.e, { width: '24px', color: 'primary' }),
                }),
              }),
            ],
          })
        },
        ai = le.e.div(Mr || (Mr = Object(ae.a)(['\n  flex: none;\n']))),
        li = le.e.div(qr || (qr = Object(ae.a)(['\n  flex: 1;\n  height: 100%;\n']))),
        bi = function () {
          return Object(de.jsxs)(A.W, {
            flexDirection: 'column',
            height: '100%',
            children: [
              Object(de.jsx)(ai, { children: Object(de.jsx)(Lr, {}) }),
              Object(de.jsx)(li, { children: Object(de.jsx)(Ee, {}) }),
            ],
          })
        }
      !(function (e) {
        ;(e.POSITIONS = 'positions'), (e.HISTORY = 'history'), (e.CHART = 'chart')
      })(Vr || (Vr = {}))
      var ui,
        ji,
        di = le.e.div(
          _r ||
            (_r = Object(ae.a)([
              '\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-height: 100%;\n\n  ',
              ' {\n    display: none;\n  }\n',
            ])),
          function (e) {
            return e.theme.mediaQueries.xl
          },
        ),
        xi = le.e.div(
          Qr ||
            (Qr = Object(ae.a)([
              '\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  visibility: ',
              ';\n',
            ])),
          function (e) {
            return e.isVisible ? 'visible' : 'hidden'
          },
        ),
        pi = function () {
          var e = (function (e, t) {
            return e ? Vr.HISTORY : t ? Vr.CHART : Vr.POSITIONS
          })(F(), T())
          M()
          return Object(de.jsxs)(di, {
            children: [
              Object(de.jsxs)(A.m, {
                height: '100%',
                overflow: 'hidden',
                position: 'relative',
                children: [
                  Object(de.jsx)(xi, {
                    isVisible: e === Vr.POSITIONS,
                    children: Object(de.jsx)(A.W, {
                      alignItems: 'center',
                      height: '100%',
                      children: Object(de.jsx)(Jr, { view: e }),
                    }),
                  }),
                  Object(de.jsx)(xi, { isVisible: e === Vr.CHART, children: Object(de.jsx)(bi, {}) }),
                  Object(de.jsx)(xi, { isVisible: e === Vr.HISTORY, children: Object(de.jsx)(pc, {}) }),
                ],
              }),
              Object(de.jsx)(si, {}),
            ],
          })
        },
        hi = Object(le.e)(A.Ab)(
          ui || (ui = Object(ae.a)(['\n  background: ', ';\n  padding-bottom: 24px;\n  padding-top: 24px;\n'])),
          function (e) {
            return e.theme.colors.gradients.bubblegum
          },
        ),
        Oi = function (e) {
          var t = e.onSuccess,
            n = e.onDismiss,
            c = Object(C.useState)(!1),
            r = Object(k.a)(c, 2),
            i = r[0],
            o = r[1],
            s = Object(C.useState)(!1),
            a = Object(k.a)(s, 2),
            l = a[0],
            b = a[1],
            u = Object(je.b)().t
          return Object(de.jsxs)(A.zb, {
            title: u('Welcome!'),
            minWidth: '320px',
            children: [
              Object(de.jsx)(hi, {
                children: Object(de.jsx)(A.Cb, {
                  children: Object(de.jsx)(A.Y, { scale: 'lg', children: u('Welcome!') }),
                }),
              }),
              Object(de.jsxs)(A.xb, {
                p: '24px',
                maxWidth: '400px',
                children: [
                  Object(de.jsxs)(A.m, {
                    maxHeight: '300px',
                    overflowY: 'auto',
                    children: [
                      Object(de.jsx)(A.Y, { as: 'h3', mb: '24px', children: u('This Product is in beta.') }),
                      Object(de.jsx)(A.ic, {
                        as: 'p',
                        color: 'textSubtle',
                        mb: '24px',
                        children: u('Once you enter a position, you cannot cancel or adjust it.'),
                      }),
                      Object(de.jsx)('label', {
                        htmlFor: 'checkbox',
                        style: { display: 'block', cursor: 'pointer', marginBottom: '24px' },
                        children: Object(de.jsxs)(A.W, {
                          alignItems: 'center',
                          children: [
                            Object(de.jsx)('div', {
                              style: { flex: 'none' },
                              children: Object(de.jsx)(A.C, {
                                id: 'checkbox',
                                scale: 'sm',
                                checked: i,
                                onChange: function () {
                                  o(!i)
                                },
                              }),
                            }),
                            Object(de.jsx)(A.ic, {
                              ml: '8px',
                              children: u(
                                'I understand that I am using this product at my own risk. Any losses incurred due to my actions are my own responsibility.',
                              ),
                            }),
                          ],
                        }),
                      }),
                      Object(de.jsx)('label', {
                        htmlFor: 'checkbox1',
                        style: { display: 'block', cursor: 'pointer', marginBottom: '24px' },
                        children: Object(de.jsxs)(A.W, {
                          alignItems: 'center',
                          children: [
                            Object(de.jsx)('div', {
                              style: { flex: 'none' },
                              children: Object(de.jsx)(A.C, {
                                id: 'checkbox1',
                                scale: 'sm',
                                checked: l,
                                onChange: function () {
                                  b(!l)
                                },
                              }),
                            }),
                            Object(de.jsx)(A.ic, {
                              ml: '8px',
                              children: u(
                                'I understand that this product is still in beta. I am participating at my own risk',
                              ),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(de.jsx)(A.q, {
                    width: '100%',
                    onClick: function () {
                      t(), n()
                    },
                    disabled: !i || !l,
                    children: u('Continue'),
                  }),
                ],
              }),
            ],
          })
        },
        fi = 'pcs_chart_do_not_show',
        mi = le.e.ul(
          ji ||
            (ji = Object(ae.a)([
              '\n  color: ',
              ';\n  list-style-position: outside;\n  margin-left: 16px;\n\n  & > li {\n    font-size: 14px;\n    line-height: 1.5;\n  }\n',
            ])),
          function (e) {
            return e.theme.colors.textSubtle
          },
        ),
        gi = function (e) {
          var t = e.onDismiss,
            n = Object(K.a)(!1, { localStorageKey: fi }),
            c = Object(k.a)(n, 2),
            r = c[0],
            i = c[1],
            o = Object(je.b)().t
          return Object(de.jsx)(A.zb, {
            minWidth: '320px',
            children: Object(de.jsxs)(A.xb, {
              p: '24px',
              maxWidth: '400px',
              children: [
                Object(de.jsx)(A.W, {
                  justifyContent: 'center',
                  mb: '32px',
                  children: Object(de.jsx)(A.cb, { src: '/images/chartwarning.svg', width: 190, height: 118 }),
                }),
                Object(de.jsxs)(A.Y, { as: 'h3', size: 'sm', children: [o('Warning'), ':'] }),
                Object(de.jsxs)(A.Y, {
                  as: 'h4',
                  size: 'sm',
                  mb: '24px',
                  children: [o('Prices shown on cards and charts are different'), ':'],
                }),
                Object(de.jsxs)(A.ic, {
                  as: 'p',
                  fontSize: '14px',
                  color: 'textSubtle',
                  children: [o('The price you see come from difference places'), ':'],
                }),
                Object(de.jsxs)(mi, {
                  children: [
                    Object(de.jsx)('li', {
                      children: o('Prices on cards come from Chainlink\u2019s verifiable price oracle.'),
                    }),
                    Object(de.jsx)('li', {
                      children: o(
                        "Prices on charts come from Binance.com. Chart's are provided for your reference only.",
                      ),
                    }),
                  ],
                }),
                Object(de.jsx)(A.ic, {
                  as: 'p',
                  mb: '16px',
                  fontSize: '14px',
                  color: 'textSubtle',
                  children: o("Only the price from Chainlink (shown on the cards) determines the round's result."),
                }),
                Object(de.jsx)(A.ib, {
                  href: 'https://docs.pancakeswap.finance/products/prediction/prediction-faq#what-are-you-using-for-your-price-feed',
                  external: !0,
                  mb: '24px',
                  children: o('Learn More'),
                }),
                Object(de.jsx)(A.m, {
                  children: Object(de.jsx)(A.q, {
                    width: '100%',
                    onClick: function () {
                      t()
                    },
                    mb: '16px',
                    children: o('I understand'),
                  }),
                }),
                Object(de.jsx)('label', {
                  htmlFor: 'checkbox',
                  style: { display: 'block', cursor: 'pointer', marginBottom: '24px' },
                  children: Object(de.jsxs)(A.W, {
                    alignItems: 'center',
                    children: [
                      Object(de.jsx)('div', {
                        style: { flex: 'none' },
                        children: Object(de.jsx)(A.C, {
                          id: 'checkbox',
                          scale: 'sm',
                          checked: r,
                          onChange: function () {
                            return i(!r)
                          },
                        }),
                      }),
                      Object(de.jsx)(A.ic, { ml: '8px', children: o("Don't show this again") }),
                    ],
                  }),
                }),
              ],
            }),
          })
        }
      t.default = function () {
        var e = Object(A.Gc)().isDesktop,
          t = Object(K.a)(!1, { localStorageKey: 'pancake_predictions_accepted_risk-2' }),
          n = Object(k.a)(t, 2),
          c = n[0],
          r = n[1],
          i = Object(S.c)().account,
          o = (M(), T()),
          s = Object(L.b)(),
          a = Object(G.b)(),
          l = Object(A.Hc)(
            Object(de.jsx)(Oi, {
              onSuccess: function () {
                return r(!0)
              },
            }),
            !1,
          ),
          b = Object(k.a)(l, 1)[0],
          u = Object(A.Hc)(Object(de.jsx)(gi, {}), !1),
          j = Object(k.a)(u, 1)[0],
          d = Object(C.useRef)(b),
          x = Object(C.useRef)(j)
        return (
          Object(C.useEffect)(
            function () {
              c || d.current()
            },
            [c, d],
          ),
          Object(C.useEffect)(
            function () {
              o && !0 !== JSON.parse(localStorage.getItem(fi)) && x.current()
            },
            [x, o],
          ),
          Object(C.useEffect)(
            function () {
              a > 0 && s(Object(Z.g)(i))
            },
            [a, s, i],
          ),
          se(),
          ie(),
          Object(de.jsxs)(de.Fragment, {
            children: [
              Object(de.jsx)(B.a, {
                children: Object(de.jsx)('script', {
                  src: 'https://s3.tradingview.com/tv.js',
                  type: 'text/javascript',
                  id: 'tradingViewWidget',
                }),
              }),
              Object(de.jsx)(we, {
                children: Object(de.jsxs)(be, {
                  children: [e ? Object(de.jsx)(ci, {}) : Object(de.jsx)(pi, {}), Object(de.jsx)(ge, {})],
                }),
              }),
            ],
          })
        )
      }
    },
  },
])
//# sourceMappingURL=26.3b2f8ef9.chunk.js.map
