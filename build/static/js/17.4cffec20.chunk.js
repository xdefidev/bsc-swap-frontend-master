;(this['webpackJsonppancake-frontend'] = this['webpackJsonppancake-frontend'] || []).push([
  [17],
  {
    1394: function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        i,
        c,
        a,
        o,
        l = n(6),
        s = n(8),
        d = n(1),
        b = n(5),
        u = n(808),
        j = n(42),
        x = n(94),
        h = n(244),
        p = n(3),
        O = n(15),
        f = n(107),
        m = n(0),
        g = function (e, t) {
          return Object(b.f)(
            r ||
              (r = Object(s.a)([
                '\n  from {\n    transform: translate(0,  0px);\n  }\n  50% {\n    transform: translate(',
                ', ',
                ');\n  }\n  to {\n    transform: translate(0, 0px);\n  }  \n',
              ])),
            e,
            t,
          )
        },
        v = Object(b.e)(p.m)(
          i ||
            (i = Object(s.a)([
              '\n  position: relative;\n  max-height: ',
              ';\n\n  & :nth-child(2) {\n    animation: ',
              ' 3s ease-in-out infinite;\n    animation-delay: 1s;\n  }\n\n  & :nth-child(3) {\n    animation: ',
              ' 3s ease-in-out infinite;\n    animation-delay: 0.66s;\n  }\n\n  & :nth-child(4) {\n    animation: ',
              ' 3s ease-in-out infinite;\n    animation-delay: 0.33s;\n  }\n\n  & :nth-child(5) {\n    animation: ',
              ' 3s ease-in-out infinite;\n    animation-delay: 0s;\n  }\n',
            ])),
          function (e) {
            return e.maxHeight
          },
          g('3px', '15px'),
          g('5px', '10px'),
          g('6px', '5px'),
          g('4px', '12px'),
        ),
        w = b.e.img(c || (c = Object(s.a)(['\n  max-height: ', ';\n  visibility: hidden;\n'])), function (e) {
          return e.maxHeight
        }),
        y = Object(b.e)(p.m)(
          a ||
            (a = Object(s.a)([
              '\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  img {\n    max-height: 100%;\n    width: auto;\n  }\n',
            ])),
        )
      !(function (e) {
        ;(e.MD = '1.5x'), (e.LG = '2x')
      })(o || (o = {}))
      var L,
        k,
        C,
        F,
        S,
        D,
        T,
        E,
        B,
        W,
        A,
        P,
        I,
        M,
        z,
        N,
        H = function (e, t, n) {
          return ''
            .concat(e)
            .concat(t)
            .concat(n ? '@'.concat(n, '.png') : '.png')
        },
        Q = function (e, t) {
          return ''.concat(H(e, t), ' 512w, \n  ').concat(H(e, t, o.MD), ' 768w, \n  ').concat(H(e, t, o.LG), ' 1024w,')
        },
        U = function (e) {
          var t = e.path,
            n = e.attributes,
            r = e.maxHeight,
            i = void 0 === r ? '512px' : r
          return Object(m.jsxs)(v, {
            maxHeight: i,
            children: [
              Object(m.jsx)(w, { src: H(t, n[0].src), maxHeight: i, srcSet: Q(t, n[0].src) }),
              n.map(function (e) {
                return Object(m.jsx)(
                  y,
                  { children: Object(m.jsx)('img', { src: H(t, e.src), srcSet: Q(t, e.src), alt: e.alt }) },
                  e.src,
                )
              }),
            ],
          })
        },
        R = function () {
          return Object(b.f)(
            k ||
              (k = Object(s.a)([
                '\n  from {\n    opacity: 0.9;\n  }\n  50% {\n    opacity: 0.1;\n  }\n  to {\n    opacity: 0.9;\n  }  \n',
              ])),
          )
        },
        Y = b.e.div(
          C ||
            (C = Object(s.a)([
              '\n  z-index: -1;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  bottom: 0px;\n  left: 0px;\n',
            ])),
        ),
        _ =
          (b.e.div(F || (F = Object(s.a)(['\n  position: absolute;\n  width: 100%;\n  bottom: -3px;\n']))),
          b.e.div(
            S || (S = Object(s.a)(['\n  width: 100%;\n  animation: ', ' 3.5s ease-in-out infinite;\n'])),
            function () {
              return Object(b.f)(
                L ||
                  (L = Object(s.a)([
                    '\n  from {\n    transform: translate(0,  0px);\n  }\n  50% {\n    transform: translate(-5px, -5px);\n  }\n  to {\n    transform: translate(0, 0px);\n  }  \n',
                  ])),
              )
            },
          )),
        G = b.e.div(
          D ||
            (D = Object(s.a)([
              '\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  & :nth-child(2) {\n    animation: ',
              ' 2s ease-in-out infinite;\n    animation-delay: 1s;\n  }\n\n  & :nth-child(3) {\n    animation: ',
              ' 5s ease-in-out infinite;\n    animation-delay: 0.66s;\n  }\n\n  & :nth-child(4) {\n    animation: ',
              ' 2.5s ease-in-out infinite;\n    animation-delay: 0.33s;\n  }\n',
            ])),
          R,
          R,
          R,
        ),
        q = '/images/home/lunar-bunny/',
        Z = 'bunny',
        $ = {
          path: '/images/home/lunar-bunny/',
          attributes: [
            { src: 'star-l', alt: '3D Star' },
            { src: 'star-r', alt: '3D Star' },
            { src: 'star-top-r', alt: '3D Star' },
          ],
        },
        V = function () {
          var e = Object(O.b)().t,
            t = Object(j.c)().account
          Object(x.a)().theme
          return Object(m.jsxs)(m.Fragment, {
            children: [
              Object(m.jsx)(Y, {
                children: Object(m.jsx)('img', {
                  src: '/images/wallpaper.jpg',
                  alt: 'bg',
                  height: 100,
                  style: { opacity: '0.7' },
                }),
              }),
              Object(m.jsxs)(p.W, {
                position: 'relative',
                flexDirection: ['column-reverse', null, null, 'row'],
                alignItems: ['flex-end', null, null, 'center'],
                justifyContent: 'center',
                children: [
                  Object(m.jsxs)(p.W, {
                    flex: '1',
                    flexDirection: 'column',
                    children: [
                      Object(m.jsx)(p.Y, {
                        scale: 'xl',
                        color: 'secondary',
                        mb: '24px',
                        children: e('Welcome to MetaFlokiAvatarSwap.'),
                      }),
                      Object(m.jsx)(p.Y, {
                        scale: 'md',
                        mb: '24px',
                        children: e(
                          'Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.',
                        ),
                      }),
                      Object(m.jsxs)(p.W, {
                        children: [
                          !t && Object(m.jsx)(f.a, { mr: '8px' }),
                          Object(m.jsx)(p.hb, {
                            mr: '16px',
                            href: '/swap',
                            children: Object(m.jsx)(p.q, { variant: 'primary', children: e('Trade Now') }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(m.jsxs)(p.W, {
                    height: ['100px', null, null, '100%'],
                    width: ['192px', null, null, '100%'],
                    flex: [null, null, null, '1'],
                    mb: ['24px', null, null, '0'],
                    position: 'relative',
                    children: [
                      Object(m.jsx)(_, {
                        children: Object(m.jsx)('img', {
                          src: ''.concat(q).concat(Z, '.png'),
                          style: { transform: 'rotateY(180deg)' },
                          srcSet: Q(q, Z),
                          alt: e('image1'),
                        }),
                      }),
                      Object(m.jsx)(G, { children: Object(m.jsx)(U, Object(l.a)({}, $)) }),
                    ],
                  }),
                ],
              }),
            ],
          })
        },
        K = {
          headingText: 'Trade anything. No registration, no hassle.',
          bodyText: 'Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.',
          reverse: !1,
          primaryButton: { to: '/swap', text: 'Trade Now', external: !1 },
          secondaryButton: { to: 'https://docs.pancakeswap.finance/', text: 'Learn', external: !0 },
          images: { path: '/images/home/trade/', attributes: [{ src: 'TREE', alt: 'BTC token' }] },
        },
        J = {
          headingText: 'Earn passive income with crypto.',
          bodyText: 'Metaflokiavatarswap makes it easy to make your crypto work for you.',
          reverse: !0,
          primaryButton: { to: '/farms', text: 'Explore', external: !1 },
          secondaryButton: {
            to: 'https://docs.pancakeswap.finance/products/yield-farming',
            text: 'Learn',
            external: !0,
          },
          images: {
            path: '/images/home/earn/',
            attributes: [{ src: 'meta-logo', alt: 'Folder with MetaFlokiAvatar token' }],
          },
        },
        X = {
          headingText: 'MetaFlokiAvatars makes our world go round.',
          bodyText:
            'MetaFlokiAvatar token is at the heart of the MetaFlokiAvatarSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
          reverse: !1,
          primaryButton: {
            to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            text: 'Buy MetaFlokiAvatar',
            external: !1,
          },
          secondaryButton: {
            to: 'https://docs.pancakeswap.finance/tokenomics/MetaFlokiAvatar',
            text: 'Learn',
            external: !0,
          },
          images: { path: '/images/home/earn/', attributes: [{ src: 'Metafloki-coin', alt: 'MetaFlokiAvatar token' }] },
        },
        ee = n(10),
        te = n(4),
        ne = n.n(te),
        re = n(14),
        ie = n(33),
        ce = n(52),
        ae = ['icon', 'background', 'borderColor', 'rotation', 'children'],
        oe = Object(b.e)(p.u)(
          T ||
            (T = Object(s.a)([
              '\n  height: fit-content;\n  padding: 1px 1px 4px 1px;\n  box-sizing: border-box;\n\n  ',
              ' {\n    ',
              '\n  }\n',
            ])),
          function (e) {
            return e.theme.mediaQueries.md
          },
          function (e) {
            var t = e.rotation
            return t ? 'transform: rotate('.concat(t, ');') : ''
          },
        ),
        le = Object(b.e)(p.m)(
          E ||
            (E = Object(s.a)(['\n  position: absolute;\n  top: 24px;\n  right: 24px;\n\n  ', ' {\n    ', '\n  }\n'])),
          function (e) {
            return e.theme.mediaQueries.md
          },
          function (e) {
            var t = e.rotation
            return t ? 'transform: rotate('.concat(t, ');') : ''
          },
        ),
        se = function (e) {
          var t = e.icon,
            n = e.background,
            r = e.borderColor,
            i = e.rotation,
            c = e.children,
            a = Object(ce.a)(e, ae)
          return Object(m.jsx)(
            oe,
            Object(l.a)(
              Object(l.a)({ background: n, borderBackground: r, rotation: i }, a),
              {},
              { children: Object(m.jsxs)(p.v, { children: [Object(m.jsx)(le, { rotation: i, children: t }), c] }) },
            ),
          )
        },
        de = function (e) {
          var t = e.headingText,
            n = e.bodyText,
            r = e.highlightColor,
            i = Object(p.Gc)(),
            c = i.isMobile,
            a = i.isTablet,
            o = c || a,
            l = t.split(' '),
            s = l.pop(),
            d = l.slice(0, l.length).join(' ')
          return Object(m.jsxs)(p.W, {
            minHeight: [null, null, null, '168px'],
            minWidth: '232px',
            width: 'fit-content',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            mt: [null, null, null, '64px'],
            children: [
              o && d.length > 13
                ? Object(m.jsx)(p.Y, { scale: 'lg', children: d })
                : Object(m.jsx)(p.Y, { scale: 'xl', children: d }),
              Object(m.jsx)(p.Y, { color: r, scale: 'xl', mb: '24px', children: s }),
              Object(m.jsx)(p.ic, { color: 'textSubtle', children: n }),
            ],
          })
        },
        be = function () {
          var e = Object(O.b)().t,
            t = (function () {
              var e = Object(d.useState)(null),
                t = Object(ee.a)(e, 2),
                n = t[0],
                r = t[1]
              return (
                Object(d.useEffect)(
                  function () {
                    !(function () {
                      var e = Object(re.a)(
                        ne.a.mark(function e() {
                          var t, n
                          return ne.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      fetch('https://openapi.debank.com/v1/protocol?id=bsc_pancakeswap')
                                    )
                                  case 3:
                                    return (t = e.sent), (e.next = 6), t.json()
                                  case 6:
                                    ;(n = e.sent), r(n), (e.next = 13)
                                    break
                                  case 10:
                                    ;(e.prev = 10), (e.t0 = e.catch(0)), console.error('Unable to fetch data:', e.t0)
                                  case 13:
                                  case 'end':
                                    return e.stop()
                                }
                            },
                            e,
                            null,
                            [[0, 10]],
                          )
                        }),
                      )
                      return function () {
                        return e.apply(this, arguments)
                      }
                    })()()
                  },
                  [r],
                ),
                n
              )
            })(),
            n = Object(x.a)().theme,
            r = t ? Object(ie.d)(t.tvl) : '-',
            i = Object(ie.d)(44713126),
            c = Object(ie.d)(2607499),
            a = e('Users are now entrusting the platform with over $%tvl% in funds.', { tvl: r }).split(r),
            o = Object(ee.a)(a, 2),
            s = o[0],
            b = o[1],
            u = { icon: Object(m.jsx)(p.N, { color: 'secondary', width: '36px' }) },
            j = { icon: Object(m.jsx)(p.cc, { color: 'primary', width: '36px' }) },
            h = { icon: Object(m.jsx)(p.B, { color: 'failure', width: '36px' }) }
          return Object(m.jsxs)(p.W, {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            children: [
              Object(m.jsx)(p.Y, { textAlign: 'center', scale: 'xl', children: e('Used by millions.') }),
              Object(m.jsx)(p.Y, { textAlign: 'center', scale: 'xl', mb: '32px' }),
              Object(m.jsx)(p.ic, { textAlign: 'center', color: 'textSubtle' }),
              Object(m.jsx)(p.W, {
                flexWrap: 'wrap',
                children: Object(m.jsxs)(p.ic, {
                  display: 'inline',
                  textAlign: 'center',
                  color: 'textSubtle',
                  mb: '20px',
                  children: [
                    s,
                    Object(m.jsx)(m.Fragment, {
                      children: t
                        ? Object(m.jsx)(m.Fragment, { children: r })
                        : Object(m.jsx)(p.Tb, { display: 'inline-block', height: 16, width: 70, mt: '2px' }),
                    }),
                    b,
                  ],
                }),
              }),
              Object(m.jsx)(p.ic, { textAlign: 'center', color: 'textSubtle', bold: !0, mb: '32px' }),
              Object(m.jsxs)(p.W, {
                flexDirection: ['column', null, null, 'row'],
                children: [
                  Object(m.jsx)(
                    se,
                    Object(l.a)(
                      Object(l.a)({}, u),
                      {},
                      {
                        mr: [null, null, null, '16px'],
                        mb: ['16px', null, null, '0'],
                        children: Object(m.jsx)(de, {
                          headingText: e('%users% users', { users: c }),
                          bodyText: e('in the last 30 days'),
                          highlightColor: n.colors.secondary,
                        }),
                      },
                    ),
                  ),
                  Object(m.jsx)(
                    se,
                    Object(l.a)(
                      Object(l.a)({}, j),
                      {},
                      {
                        mr: [null, null, null, '16px'],
                        mb: ['16px', null, null, '0'],
                        children: Object(m.jsx)(de, {
                          headingText: e('%trades% trades', { trades: i }),
                          bodyText: e('made in the last 30 days'),
                          highlightColor: n.colors.primary,
                        }),
                      },
                    ),
                  ),
                  Object(m.jsx)(
                    se,
                    Object(l.a)(
                      Object(l.a)({}, h),
                      {},
                      {
                        children: Object(m.jsx)(de, {
                          headingText: e('$%tvl% staked', { tvl: r }),
                          bodyText: e('Total Value Locked'),
                          highlightColor: n.colors.failure,
                        }),
                      },
                    ),
                  ),
                ],
              }),
            ],
          })
        },
        ue = ['text'],
        je = function (e) {
          var t = e.text,
            n = Object(ce.a)(e, ue),
            r = Object(x.a)().theme,
            i = t.split(' '),
            c = i[0],
            a = i.slice(1).join(' ')
          return Object(m.jsxs)(
            p.Y,
            Object(l.a)(
              Object(l.a)({ scale: 'xl', mb: '24px' }, n),
              {},
              { children: [Object(m.jsxs)('span', { style: { color: r.colors.secondary }, children: [c, ' '] }), a] },
            ),
          )
        },
        xe = function (e) {
          var t = Object(O.b)().t,
            n = e.headingText,
            r = e.bodyText,
            i = e.reverse,
            c = e.primaryButton,
            a = e.secondaryButton,
            o = e.images,
            s = t(n),
            d = t(r)
          return Object(m.jsx)(p.W, {
            flexDirection: 'column',
            children: Object(m.jsxs)(p.W, {
              flexDirection: ['column-reverse', null, null, i ? 'row-reverse' : 'row'],
              alignItems: ['flex-end', null, null, 'center'],
              justifyContent: 'center',
              children: [
                Object(m.jsxs)(p.W, {
                  flexDirection: 'column',
                  flex: '1',
                  ml: [null, null, null, i && '64px'],
                  mr: [null, null, null, !i && '64px'],
                  alignSelf: ['flex-start', null, null, 'center'],
                  children: [
                    Object(m.jsx)(je, { text: s }),
                    Object(m.jsx)(p.ic, { color: 'textSubtle', mb: '24px', children: d }),
                    Object(m.jsxs)(p.W, {
                      children: [
                        Object(m.jsx)(p.hb, {
                          mr: '16px',
                          external: c.external,
                          href: c.to,
                          children: Object(m.jsx)(p.q, {
                            children: Object(m.jsx)(p.ic, {
                              color: 'card',
                              bold: !0,
                              fontSize: '16px',
                              children: t(c.text),
                            }),
                          }),
                        }),
                        Object(m.jsx)(p.hb, { external: a.external, href: a.to, children: t(a.text) }),
                      ],
                    }),
                  ],
                }),
                Object(m.jsx)(p.W, {
                  height: ['192px', null, null, '100%'],
                  width: ['192px', null, null, '100%'],
                  flex: [null, null, null, '1'],
                  mb: ['24px', null, null, '0'],
                  children: Object(m.jsx)(U, Object(l.a)({}, o)),
                }),
              ],
            }),
          })
        },
        he = n(108),
        pe = function () {
          var e = Object(d.useRef)(null),
            t = Object(d.useState)(!1),
            n = Object(ee.a)(t, 2),
            r = n[0],
            i = n[1],
            c = Object(d.useState)(!1),
            a = Object(ee.a)(c, 2),
            o = a[0],
            l = a[1]
          return (
            Object(d.useEffect)(
              function () {
                r ||
                  (new IntersectionObserver(
                    function (e) {
                      var t = Object(ee.a)(e, 1)[0]
                      l(t.isIntersecting)
                    },
                    { rootMargin: '0px', threshold: 1 },
                  ).observe(e.current),
                  i(!0))
              },
              [r],
            ),
            { observerRef: e, isIntersecting: o }
          )
        },
        Oe = n(92),
        fe = n(93),
        me = Object(b.e)(p.hb)(B || (B = Object(s.a)(['\n  width: 100%;\n']))),
        ge = function () {
          var e = Object(O.b)().t,
            t = Object(he.a)().slowRefresh,
            n = pe(),
            r = n.observerRef,
            i = n.isIntersecting,
            c = Object(d.useState)(!1),
            a = Object(ee.a)(c, 2),
            o = a[0],
            l = a[1],
            s = Object(fe.g)(),
            b = Object(d.useState)(0),
            u = Object(ee.a)(b, 2),
            j = u[0],
            x = u[1],
            h = Object(d.useState)(0),
            f = Object(ee.a)(h, 2),
            g = f[0],
            v = f[1],
            w = Object(ie.d)(g),
            y = e('$%bnbWonInUsd% in BNB won so far', { bnbWonInUsd: w }).split(w),
            L = Object(ee.a)(y, 2),
            k = L[0],
            C = L[1]
          return (
            Object(d.useEffect)(
              function () {
                i && l(!0)
              },
              [i],
            ),
            Object(d.useEffect)(
              function () {
                o &&
                  (function () {
                    var e = Object(re.a)(
                      ne.a.mark(function e() {
                        var t
                        return ne.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), Object(Oe.h)()
                              case 2:
                                ;(t = e.sent), x(t)
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
                  })()()
              },
              [t, o],
            ),
            Object(d.useEffect)(
              function () {
                s.gt(0) && j > 0 && v(s.times(j).toNumber())
              },
              [s, j],
            ),
            Object(m.jsxs)(m.Fragment, {
              children: [
                Object(m.jsxs)(p.W, {
                  flexDirection: 'column',
                  mt: '48px',
                  children: [
                    Object(m.jsx)('div', { ref: r }),
                    Object(m.jsx)(p.ic, { color: '#280D5F', bold: !0, fontSize: '16px', children: e('Prediction') }),
                    g
                      ? Object(m.jsxs)(p.Y, { color: '#280D5F', my: '8px', scale: 'xl', bold: !0, children: [k, w] })
                      : Object(m.jsxs)(m.Fragment, {
                          children: [
                            Object(m.jsx)(p.Tb, { width: 230, height: 40, my: '8px' }),
                            Object(m.jsx)('div', { ref: r }),
                          ],
                        }),
                    Object(m.jsx)(p.ic, { color: '#280D5F', mb: '24px', bold: !0, fontSize: '16px', children: C }),
                    Object(m.jsx)(p.ic, {
                      color: '#280D5F',
                      mb: '40px',
                      children: e('Will BNB price rise or fall? guess correctly to win!'),
                    }),
                  ],
                }),
                Object(m.jsx)(p.W, {
                  alignItems: 'center',
                  justifyContent: 'center',
                  children: Object(m.jsx)(me, {
                    href: '/prediction',
                    id: 'homepage-prediction-cta',
                    children: Object(m.jsxs)(p.q, {
                      width: '100%',
                      children: [
                        Object(m.jsx)(p.ic, { bold: !0, color: 'invertedContrast', children: e('Play') }),
                        Object(m.jsx)(p.e, { ml: '4px', color: 'invertedContrast' }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          )
        },
        ve = n(43),
        we = n(114),
        ye = n(16),
        Le = n.n(ye),
        ke = Object(b.e)(p.hb)(W || (W = Object(s.a)(['\n  width: 100%;\n']))),
        Ce = Object(b.e)(ve.a)(
          A ||
            (A = Object(s.a)([
              '\n  background: ',
              ';\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n',
            ])),
          function (e) {
            return e.theme.colors.gradients.gold
          },
        ),
        Fe = function () {
          var e = Object(O.b)().t,
            t = pe(),
            n = t.observerRef,
            r = t.isIntersecting,
            i = Object(d.useState)(!1),
            c = Object(ee.a)(i, 2),
            a = c[0],
            o = c[1],
            l = Object(he.a)().slowRefresh,
            s = Object(d.useState)(null),
            b = Object(ee.a)(s, 2),
            u = b[0],
            j = b[1],
            x = Object(d.useState)(null),
            h = Object(ee.a)(x, 2),
            f = h[0],
            g = h[1],
            v = Object(fe.h)().toString(),
            w = e('%cakePrizeInUsd% in MetaFlokiAvatar prizes this round', { cakePrizeInUsd: v }).split(v),
            y = Object(ee.a)(w, 2),
            L = y[0],
            k = y[1],
            C = Object(d.useMemo)(
              function () {
                return new Le.a(v)
              },
              [v],
            )
          return (
            Object(d.useEffect)(
              function () {
                r && o(!0)
              },
              [r],
            ),
            Object(d.useEffect)(
              function () {
                a &&
                  (function () {
                    var e = Object(re.a)(
                      ne.a.mark(function e() {
                        var t, n
                        return ne.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), Object(we.a)()
                              case 2:
                                ;(t = e.sent), (n = t.currentLotteryId), j(n)
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
              [a, j],
            ),
            Object(d.useEffect)(
              function () {
                u &&
                  (function () {
                    var e = Object(re.a)(
                      ne.a.mark(function e() {
                        var t, n, r
                        return ne.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), Object(we.b)(u)
                              case 2:
                                ;(t = e.sent), (n = t.amountCollectedInCake), (r = C.times(n)), g(r)
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
                  })()()
              },
              [u, l, g, C],
            ),
            Object(m.jsxs)(m.Fragment, {
              children: [
                Object(m.jsxs)(p.W, {
                  flexDirection: 'column',
                  mt: '48px',
                  children: [
                    Object(m.jsx)('div', { ref: n }),
                    Object(m.jsx)(p.ic, { color: 'white', bold: !0, fontSize: '16px', children: e('Lottery') }),
                    L && Object(m.jsx)(p.ic, { color: 'white', mt: '12px', bold: !0, fontSize: '16px', children: L }),
                    f && f.gt(0)
                      ? Object(m.jsx)(Ce, {
                          fontSize: '40px',
                          bold: !0,
                          prefix: '$',
                          decimals: 0,
                          value: Object(ie.f)(f).toNumber(),
                        })
                      : Object(m.jsxs)(m.Fragment, {
                          children: [
                            Object(m.jsx)(p.Tb, { width: 200, height: 40, my: '8px' }),
                            Object(m.jsx)('div', { ref: n }),
                          ],
                        }),
                    Object(m.jsx)(p.ic, { color: 'white', mb: '24px', bold: !0, fontSize: '16px', children: k }),
                    Object(m.jsx)(p.ic, {
                      color: 'white',
                      mb: '40px',
                      children: e('Buy tickets with MetaFlokiAvatar, win MetaFlokiAvatar if your numbers match'),
                    }),
                  ],
                }),
                Object(m.jsx)(p.W, {
                  alignItems: 'center',
                  justifyContent: 'center',
                  children: Object(m.jsx)(ke, {
                    href: '/lottery',
                    id: 'homepage-prediction-cta',
                    children: Object(m.jsxs)(p.q, {
                      width: '100%',
                      children: [
                        Object(m.jsx)(p.ic, { bold: !0, color: 'invertedContrast', children: e('Buy Tickets') }),
                        Object(m.jsx)(p.e, { ml: '4px', color: 'invertedContrast' }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          )
        },
        Se = b.e.div(
          P ||
            (P = Object(s.a)([
              '\n  background: ',
              ';\n  padding: 16px;\n  border: 1px solid ',
              ';\n  box-sizing: border-box;\n  backdrop-filter: blur(12px);\n  border-radius: 72px;\n\n  ',
              ' {\n    padding: 40px;\n  }\n',
            ])),
          function (e) {
            return e.theme.isDark ? 'rgba(8, 6, 11, 0.6)' : ' rgba(255, 255, 255, 0.6)'
          },
          function (e) {
            return e.theme.colors.cardBorder
          },
          function (e) {
            return e.theme.mediaQueries.md
          },
        ),
        De = b.e.div(
          I ||
            (I = Object(s.a)([
              '\n  z-index: -1;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n',
            ])),
        ),
        Te =
          (Object(b.e)(p.W)(
            M ||
              (M = Object(s.a)([
                '\n  position: absolute;\n  left: 0;\n  bottom: -64px;\n  max-width: 192px;\n\n  ',
                ' {\n    max-width: 100%;\n  }\n',
              ])),
            function (e) {
              return e.theme.mediaQueries.md
            },
          ),
          Object(b.e)(p.W)(
            z ||
              (z = Object(s.a)([
                '\n  position: absolute;\n  right: 0;\n  top: -64px;\n\n  max-width: 192px;\n\n  ',
                ' {\n    max-width: 100%;\n  }\n',
              ])),
            function (e) {
              return e.theme.mediaQueries.md
            },
          ),
          {
            icon: Object(m.jsx)(p.Lb, { width: '36px', color: 'inverseContrast' }),
            background: 'linear-gradient(180deg, #ffb237 0%, #ffcd51 51.17%, #ffe76a 100%);',
            borderColor: '#ffb237',
            rotation: '-2.36deg',
          }),
        Ee = {
          icon: Object(m.jsx)(p.kc, { color: 'white', width: '36px' }),
          background: ' linear-gradient(180deg, #5dccf8 0%, #5121B1 100%);',
          borderColor: '#3C1786',
          rotation: '1.43deg',
        },
        Be = function () {
          var e = Object(O.b)().t,
            t = Object(x.a)().theme
          return Object(m.jsxs)(m.Fragment, {
            children: [
              Object(m.jsx)(De, {
                children: Object(m.jsx)('img', {
                  src: '/images/home/lottery-balls/MetaFlokiAvatars-2-1-1.jpg',
                  alt: 'bg',
                  height: 100,
                }),
              }),
              Object(m.jsx)(Se, {
                isDark: t.isDark,
                children: Object(m.jsxs)(p.W, {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  children: [
                    Object(m.jsx)(je, { textAlign: 'center', text: e('Win millions in prizes') }),
                    Object(m.jsx)(p.ic, { color: 'textSubtle', children: e('Provably fair, on-chain games.') }),
                    Object(m.jsx)(p.ic, {
                      mb: '40px',
                      color: 'textSubtle',
                      children: e('Win big with MetaFlokiAvatarSwap.'),
                    }),
                    Object(m.jsxs)(p.W, {
                      m: '0 auto',
                      flexDirection: ['column', null, null, 'row'],
                      maxWidth: '600px',
                      children: [
                        Object(m.jsx)(p.W, {
                          flex: '1',
                          maxWidth: ['275px', null, null, '100%'],
                          mr: [null, null, null, '24px'],
                          mb: ['32px', null, null, '0'],
                          children: Object(m.jsx)(
                            se,
                            Object(l.a)(Object(l.a)({}, Te), {}, { children: Object(m.jsx)(ge, {}) }),
                          ),
                        }),
                        Object(m.jsx)(p.W, {
                          flex: '1',
                          maxWidth: ['275px', null, null, '100%'],
                          children: Object(m.jsx)(
                            se,
                            Object(l.a)(Object(l.a)({}, Ee), {}, { children: Object(m.jsx)(Fe, {}) }),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        },
        We = n(9),
        Ae = n(60),
        Pe = n(121),
        Ie = n(381),
        Me = n(120)
      !(function (e) {
        ;(e.NOT_FETCHED = 'not-fetched'), (e.FETCHING = 'fetching'), (e.SUCCESS = 'success'), (e.FAILED = 'failed')
      })(N || (N = {}))
      var ze,
        Ne = function (e) {
          var t = Object(Ae.b)(),
            n = Object(fe.b)().data,
            r = Object(d.useState)(N.NOT_FETCHED),
            i = Object(ee.a)(r, 2),
            c = i[0],
            a = i[1],
            o = Object(d.useState)([null, null, null, null, null]),
            s = Object(ee.a)(o, 2),
            b = s[0],
            u = s[1],
            j = Object(fe.h)()
          return (
            Object(d.useEffect)(
              function () {
                var n = (function () {
                  var e = Object(re.a)(
                    ne.a.mark(function e() {
                      var n
                      return ne.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  a(N.FETCHING),
                                  (n = Pe.d.filter(function (e) {
                                    return 0 !== e.pid && '0X' !== e.multiplier
                                  })),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  t(
                                    Object(Pe.c)(
                                      n.map(function (e) {
                                        return e.pid
                                      }),
                                    ),
                                  )
                                )
                              case 5:
                                a(N.SUCCESS), (e.next = 12)
                                break
                              case 8:
                                ;(e.prev = 8), (e.t0 = e.catch(2)), console.error(e.t0), a(N.FAILED)
                              case 12:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[2, 8]],
                      )
                    }),
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
                e && c === N.NOT_FETCHED && n()
              },
              [t, a, c, b, e],
            ),
            Object(d.useEffect)(
              function () {
                c !== N.SUCCESS ||
                  b[0] ||
                  (function (e) {
                    var t = e
                        .filter(function (e) {
                          return e.lpTotalInQuoteToken && e.quoteToken.busdPrice
                        })
                        .map(function (e) {
                          var t = new Le.a(e.lpTotalInQuoteToken).times(e.quoteToken.busdPrice),
                            n = Object(Ie.a)(new Le.a(e.poolWeight), j, t, e.lpAddresses[We.a.MAINNET]),
                            r = n.cakeRewardsApr,
                            i = n.lpRewardsApr
                          return Object(l.a)(Object(l.a)({}, e), {}, { apr: r, lpRewardsApr: i })
                        }),
                      n = Object(Me.orderBy)(
                        t,
                        function (e) {
                          return e.apr + e.lpRewardsApr
                        },
                        'desc',
                      )
                    u(n.slice(0, 5))
                  })(n)
              },
              [u, n, c, j, b],
            ),
            { topFarms: b }
          )
        },
        He = n(38),
        Qe = n(77),
        Ue = n(98),
        Re = n(32),
        Ye = n(53),
        _e = n(57)
      !(function (e) {
        ;(e.NOT_FETCHED = 'not-fetched'), (e.FETCHING = 'fetching'), (e.SUCCESS = 'success'), (e.FAILED = 'failed')
      })(ze || (ze = {}))
      var Ge,
        qe,
        Ze,
        $e,
        Ve,
        Ke,
        Je,
        Xe,
        et,
        tt,
        nt,
        rt,
        it,
        ct,
        at,
        ot,
        lt,
        st,
        dt,
        bt,
        ut,
        jt = function (e) {
          var t = Object(Ae.b)(),
            n = Object(Re.c)(function (e) {
              return { pools: e.pools.data, userDataLoaded: e.pools.userDataLoaded }
            }).pools,
            r = Object(Ye.a)().fees.performanceFee,
            i = r && r / 100,
            c = Object(d.useState)(ze.NOT_FETCHED),
            a = Object(ee.a)(c, 2),
            o = a[0],
            s = a[1],
            b = Object(d.useState)([null, null, null, null, null]),
            u = Object(ee.a)(b, 2),
            j = u[0],
            x = u[1],
            h = Object(d.useMemo)(
              function () {
                var e = n
                    .filter(function (e) {
                      return !e.isFinished
                    })
                    .find(function (e) {
                      return 0 === e.sousId
                    }),
                  t = Object(l.a)(Object(l.a)({}, e), {}, { isAutoVault: !0 })
                return [Object(l.a)(Object(l.a)({}, t), {}, { apr: Object(_e.c)(t, i).apr })].concat(Object(He.a)(n))
              },
              [n, i],
            ),
            p = Object(fe.h)()
          return (
            Object(d.useEffect)(
              function () {
                var n = (function () {
                  var e = Object(re.a)(
                    ne.a.mark(function e() {
                      var n
                      return ne.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return s(ze.FETCHING), (e.next = 3), Ue.a.getBlockNumber()
                              case 3:
                                return (n = e.sent), (e.prev = 4), (e.next = 7), t(Object(Qe.b)())
                              case 7:
                                return (e.next = 9), t(Object(Qe.e)(n))
                              case 9:
                                s(ze.SUCCESS), (e.next = 16)
                                break
                              case 12:
                                ;(e.prev = 12), (e.t0 = e.catch(4)), console.error(e.t0), s(ze.FAILED)
                              case 16:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[4, 12]],
                      )
                    }),
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
                e && o === ze.NOT_FETCHED && n()
              },
              [t, s, o, j, e],
            ),
            Object(d.useEffect)(
              function () {
                o !== ze.SUCCESS ||
                  j[0] ||
                  (function (e) {
                    var t = Object(Me.orderBy)(
                      e,
                      function (e) {
                        return e.apr || 0
                      },
                      'desc',
                    )
                    x(t.slice(0, 5))
                  })(h)
              },
              [x, h, o, p, j, i],
            ),
            { topPools: j }
          )
        },
        xt = Object(b.e)(p.W)(Ge || (Ge = Object(s.a)(['\n  position: relative;\n']))),
        ht = Object(b.e)(p.W)(
          qe ||
            (qe = Object(s.a)([
              '\n  position: absolute;\n  top: ',
              ';\n  opacity: ',
              ';\n  margin-top: ',
              ';\n  transition: opacity, margin-top, 0.4s ease-out;\n  flex-direction: column;\n\n  ',
              '\n',
            ])),
          function (e) {
            return e.topOffset
          },
          function (e) {
            return e.visible ? 1 : 0
          },
          function (e) {
            return e.visible ? 0 : '50%'
          },
          function (e) {
            var t = e.index,
              n = e.theme
            return t > 0
              ? '\n         '
                  .concat(
                    n.mediaQueries.sm,
                    ' {\n           height: 80px;\n           top: 0;\n           padding-left: 16px;\n           border-left: 1px ',
                  )
                  .concat(n.colors.inputSecondary, ' solid;\n         }\n       ')
              : 'padding-right: 16px;'
          },
        ),
        pt = function (e) {
          var t = e.title,
            n = e.percentage,
            r = e.index,
            i = e.visible,
            c = Object(O.b)().t
          return Object(m.jsx)(xt, {
            index: r,
            children: Object(m.jsxs)(ht, {
              index: r,
              visible: i,
              topOffset: r >= 0 && r < 2 ? '0px' : r >= 2 && r < 3 ? '80px' : '160px',
              children: [
                t
                  ? Object(m.jsx)(p.ic, { bold: !0, mb: '8px', fontSize: '12px', color: 'secondary', children: t })
                  : Object(m.jsx)(p.Tb, { width: 80, height: 12, mb: '8px' }),
                n
                  ? Object(m.jsx)(ve.a, { lineHeight: '1.1', fontSize: '16px', bold: !0, unit: '%', value: n })
                  : Object(m.jsx)(p.Tb, { width: 60, height: 16 }),
                n
                  ? Object(m.jsx)(p.ic, { fontSize: '16px', color: 'textSubtle', children: c('APR') })
                  : Object(m.jsx)(p.Tb, { width: 30, height: 16, mt: '4px' }),
              ],
            }),
          })
        },
        Ot = ['text'],
        ft = function (e) {
          var t = e.text,
            n = Object(ce.a)(e, Ot),
            r = Object(x.a)().theme,
            i = t.split(' '),
            c = i[0],
            a = i.slice(1).join(' ')
          return Object(m.jsxs)(
            p.Y,
            Object(l.a)(
              Object(l.a)({}, n),
              {},
              { children: [c, Object(m.jsxs)('span', { style: { color: r.colors.secondary }, children: [' ', a] })] },
            ),
          )
        },
        mt = b.e.div(
          Ze ||
            (Ze = Object(s.a)([
              '\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n\n  ',
              ' {\n    grid-gap: 16px;\n    grid-template-columns: repeat(5, auto);\n  }\n\n  ',
              ' {\n    grid-gap: 32px;\n  }\n',
            ])),
          function (e) {
            return e.theme.mediaQueries.sm
          },
          function (e) {
            return e.theme.mediaQueries.md
          },
        ),
        gt = function () {
          var e = Object(d.useState)(!1),
            t = Object(ee.a)(e, 2),
            n = t[0],
            r = t[1],
            i = Object(O.b)().t,
            c = pe(),
            a = c.observerRef,
            o = c.isIntersecting,
            l = Ne(o).topFarms,
            s = jt(o).topPools,
            b = Object(d.useRef)(null),
            u = l[0] && s[0],
            j = Object(d.useCallback)(
              function () {
                b.current = setInterval(function () {
                  r(function (e) {
                    return !e
                  })
                }, 6e3)
              },
              [b],
            )
          Object(d.useEffect)(
            function () {
              return (
                u && j(),
                function () {
                  clearInterval(b.current)
                }
              )
            },
            [b, u, j],
          )
          return Object(m.jsx)('div', {
            ref: a,
            children: Object(m.jsxs)(p.W, {
              flexDirection: 'column',
              mt: '24px',
              children: [
                Object(m.jsxs)(p.W, {
                  mb: '24px',
                  children: [
                    Object(m.jsx)(ft, { text: i(n ? 'Top Farms' : 'Top Pools') }),
                    Object(m.jsx)(p.bb, {
                      variant: 'text',
                      height: '100%',
                      width: 'auto',
                      onClick: function () {
                        r(function (e) {
                          return !e
                        }),
                          clearInterval(b.current),
                          j()
                      },
                      children: Object(m.jsx)(p.dc, { height: '24px', width: '24px', color: 'textSubtle' }),
                    }),
                  ],
                }),
                Object(m.jsxs)(p.m, {
                  height: ['240px', null, '80px'],
                  children: [
                    Object(m.jsx)(mt, {
                      children: l.map(function (e, t) {
                        return Object(m.jsx)(
                          pt,
                          {
                            title: null === e || void 0 === e ? void 0 : e.lpSymbol,
                            percentage:
                              (null === e || void 0 === e ? void 0 : e.apr) +
                              (null === e || void 0 === e ? void 0 : e.lpRewardsApr),
                            index: t,
                            visible: n,
                          },
                          t,
                        )
                      }),
                    }),
                    Object(m.jsx)(mt, {
                      children: s.map(function (e, t) {
                        return Object(m.jsx)(
                          pt,
                          {
                            title:
                              e &&
                              ((r = e),
                              r.isAutoVault
                                ? i('Auto MetaFlokiAvatar')
                                : 0 === r.sousId
                                ? i('Manual MetaFlokiAvatar')
                                : i('Stake %stakingSymbol% - Earn %earningSymbol%', {
                                    earningSymbol: r.earningToken.symbol,
                                    stakingSymbol: r.stakingToken.symbol,
                                  })),
                            percentage: null === e || void 0 === e ? void 0 : e.apr,
                            index: t,
                            visible: !n,
                          },
                          t,
                        )
                        var r
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        },
        vt = function (e) {
          return Object(m.jsxs)(
            p.bc,
            Object(l.a)(
              Object(l.a)({ viewBox: '0 0 1956 1956' }, e),
              {},
              {
                children: [
                  Object(m.jsx)('g', {
                    filter: 'url(#filter0_f)',
                    children: Object(m.jsx)('path', {
                      d: 'M978 20L987.526 796.229L1078.14 25.248L1006.47 798.221L1177.18 40.9346L1025.11 802.182L1274.04 66.8879L1043.23 808.07L1367.65 102.823L1060.64 815.819L1457 148.348L1077.14 825.345L1541.1 202.962L1092.55 836.544L1619.03 266.067L1106.71 849.292L1689.93 336.973L1119.46 863.451L1753.04 414.902L1130.65 878.865L1807.65 499L1140.18 895.365L1853.18 588.346L1147.93 912.77L1889.11 681.962L1153.82 930.89L1915.07 778.821L1157.78 949.526L1930.75 877.862L1159.77 968.474L1936 978L1159.77 987.526L1930.75 1078.14L1157.78 1006.47L1915.07 1177.18L1153.82 1025.11L1889.11 1274.04L1147.93 1043.23L1853.18 1367.65L1140.18 1060.64L1807.65 1457L1130.65 1077.14L1753.04 1541.1L1119.46 1092.55L1689.93 1619.03L1106.71 1106.71L1619.03 1689.93L1092.55 1119.46L1541.1 1753.04L1077.14 1130.65L1457 1807.65L1060.64 1140.18L1367.65 1853.18L1043.23 1147.93L1274.04 1889.11L1025.11 1153.82L1177.18 1915.07L1006.47 1157.78L1078.14 1930.75L987.526 1159.77L978 1936L968.474 1159.77L877.862 1930.75L949.526 1157.78L778.821 1915.07L930.89 1153.82L681.962 1889.11L912.77 1147.93L588.346 1853.18L895.365 1140.18L499 1807.65L878.865 1130.65L414.902 1753.04L863.451 1119.46L336.973 1689.93L849.292 1106.71L266.067 1619.03L836.544 1092.55L202.962 1541.1L825.345 1077.14L148.348 1457L815.819 1060.64L102.823 1367.65L808.07 1043.23L66.8879 1274.04L802.182 1025.11L40.9346 1177.18L798.221 1006.47L25.248 1078.14L796.229 987.526L20 978L796.229 968.474L25.248 877.862L798.221 949.526L40.9346 778.821L802.182 930.89L66.8879 681.962L808.07 912.77L102.823 588.346L815.819 895.365L148.348 499L825.345 878.865L202.962 414.902L836.544 863.451L266.067 336.973L849.292 849.292L336.973 266.067L863.451 836.544L414.902 202.962L878.865 825.345L499 148.348L895.365 815.819L588.346 102.823L912.77 808.07L681.962 66.8879L930.89 802.182L778.821 40.9346L949.526 798.221L877.862 25.248L968.474 796.229L978 20Z',
                      fill: 'url(#paint0_radial)',
                      fillOpacity: '0.1',
                    }),
                  }),
                  Object(m.jsxs)('defs', {
                    children: [
                      Object(m.jsxs)('filter', {
                        id: 'filter0_f',
                        x: '0',
                        y: '0',
                        width: '1956',
                        height: '1956',
                        filterUnits: 'userSpaceOnUse',
                        colorInterpolationFilters: 'sRGB',
                        children: [
                          Object(m.jsx)('feFlood', { floodOpacity: '0', result: 'BackgroundImageFix' }),
                          Object(m.jsx)('feBlend', {
                            mode: 'normal',
                            in: 'SourceGraphic',
                            in2: 'BackgroundImageFix',
                            result: 'shape',
                          }),
                          Object(m.jsx)('feGaussianBlur', { stdDeviation: '10', result: 'effect1_foregroundBlur' }),
                        ],
                      }),
                      Object(m.jsxs)('radialGradient', {
                        id: 'paint0_radial',
                        cx: '0',
                        cy: '0',
                        r: '1',
                        gradientUnits: 'userSpaceOnUse',
                        gradientTransform: 'translate(978 978) rotate(90) scale(958)',
                        children: [
                          Object(m.jsx)('stop', { offset: '0.114547', stopColor: 'white', stopOpacity: '0' }),
                          Object(m.jsx)('stop', { offset: '0.374975', stopColor: 'white' }),
                          Object(m.jsx)('stop', { offset: '1', stopColor: 'white', stopOpacity: '0' }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
            ),
          )
        },
        wt = b.e.div(
          $e ||
            ($e = Object(s.a)([
              '\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n',
            ])),
        ),
        yt = Object(b.e)(vt)(
          Ve ||
            (Ve = Object(s.a)([
              '\n  height: 350%;\n  width: 350%;\n\n  ',
              ' {\n    height: 400%;\n    width: 400%;\n  }\n',
            ])),
          function (e) {
            return e.theme.mediaQueries.xl
          },
        ),
        Lt = Object(b.e)(p.W)(
          Ke ||
            (Ke = Object(s.a)([
              '\n  z-index: 1;\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n',
            ])),
        ),
        kt = Object(b.e)(h.a)(
          Je ||
            (Je = Object(s.a)([
              '\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  visibility: hidden;\n\n  ',
              ' {\n    visibility: visible;\n  }\n',
            ])),
          function (e) {
            return e.theme.mediaQueries.md
          },
        ),
        Ct = Object(b.e)(p.W)(Xe || (Xe = Object(s.a)(['\n  position: absolute;\n  left: 0;\n  top: 0;\n']))),
        Ft = Object(b.e)(p.W)(et || (et = Object(s.a)(['\n  position: absolute;\n  right: 0;\n  bottom: 0;\n']))),
        St = function () {
          var e = Object(O.b)().t,
            t = Object(j.c)().account
          return Object(m.jsxs)(m.Fragment, {
            children: [
              Object(m.jsx)(wt, {
                children: Object(m.jsx)(p.W, {
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  children: Object(m.jsx)(yt, {}),
                }),
              }),
              Object(m.jsxs)(kt, { children: [Object(m.jsx)(Ct, {}), Object(m.jsx)(Ft, {})] }),
              Object(m.jsxs)(Lt, {
                children: [
                  Object(m.jsx)(p.Y, { mb: '24px', scale: 'xl', color: 'white', children: e('Start in seconds.') }),
                  Object(m.jsx)(p.ic, {
                    textAlign: 'center',
                    color: 'white',
                    children: e('Connect your crypto wallet to start using the app in seconds.'),
                  }),
                  Object(m.jsx)(p.ic, { mb: '24px', bold: !0, color: 'white', children: e('No registration needed.') }),
                  Object(m.jsx)(p.hb, {
                    external: !0,
                    href: 'https://docs.pancakeswap.finance/',
                    children: e('Learn how to start'),
                  }),
                  !t && Object(m.jsx)(f.a, { mt: '24px' }),
                ],
              }),
            ],
          })
        },
        Dt = n(144),
        Tt = n(21),
        Et = Object(b.e)(p.W)(tt || (tt = Object(s.a)(['\n  flex-direction: column;\n  ', '\n'])), function (e) {
          var t = e.noMobileBorder,
            n = e.theme
          return t
            ? ''
                .concat(n.mediaQueries.md, ' {\n           padding: 0 16px;\n           border-left: 1px ')
                .concat(n.colors.inputSecondary, ' solid;\n         }\n       ')
            : 'border-left: 1px '
                .concat(n.colors.inputSecondary, ' solid;\n         padding: 0 8px;\n         ')
                .concat(n.mediaQueries.sm, ' {\n           padding: 0 16px;\n         }\n       ')
        }),
        Bt = b.e.div(
          nt ||
            (nt = Object(s.a)([
              '\n  display: grid;\n  grid-gap: 16px 8px;\n  margin-top: 24px;\n  grid-template-columns: repeat(2, auto);\n\n  ',
              ' {\n    grid-gap: 16px;\n  }\n\n  ',
              ' {\n    grid-gap: 32px;\n    grid-template-columns: repeat(4, auto);\n  }\n',
            ])),
          function (e) {
            return e.theme.mediaQueries.sm
          },
          function (e) {
            return e.theme.mediaQueries.md
          },
        ),
        Wt = function () {
          var e = Object(O.b)().t,
            t = Object(Dt.e)(),
            n = Object(ie.g)(Object(Dt.c)(Object(Tt.g)())),
            r = t ? Object(ie.g)(t) - n : 0,
            i = Object(fe.h)().times(r),
            c = Object(ie.d)(i.toNumber())
          return Object(m.jsxs)(Bt, {
            children: [
              Object(m.jsxs)(p.W, {
                flexDirection: 'column',
                children: [
                  Object(m.jsx)(p.ic, { color: 'textSubtle', children: e('Total supply') }),
                  r
                    ? Object(m.jsx)(ve.a, { decimals: 0, lineHeight: '1.1', fontSize: '24px', bold: !0, value: r })
                    : Object(m.jsx)(p.Tb, { height: 24, width: 126, my: '4px' }),
                ],
              }),
              Object(m.jsxs)(Et, {
                children: [
                  Object(m.jsx)(p.ic, { color: 'textSubtle', children: e('Burned to date') }),
                  n
                    ? Object(m.jsx)(ve.a, { decimals: 0, lineHeight: '1.1', fontSize: '24px', bold: !0, value: n })
                    : Object(m.jsx)(p.Tb, { height: 24, width: 126, my: '4px' }),
                ],
              }),
              Object(m.jsxs)(Et, {
                noMobileBorder: !0,
                children: [
                  Object(m.jsx)(p.ic, { color: 'textSubtle', children: e('Market cap') }),
                  (null === i || void 0 === i ? void 0 : i.gt(0)) && c
                    ? Object(m.jsx)(p.Y, { scale: 'lg', children: e('$%marketCap%', { marketCap: c }) })
                    : Object(m.jsx)(p.Tb, { height: 24, width: 126, my: '4px' }),
                ],
              }),
              Object(m.jsxs)(Et, {
                children: [
                  Object(m.jsx)(p.ic, { color: 'textSubtle', children: e('Current emissions') }),
                  Object(m.jsx)(p.Y, { scale: 'lg', children: e('%cakeEmissions%/block', { cakeEmissions: 17 }) }),
                ],
              }),
            ],
          })
        },
        At = b.e.div(
          rt ||
            (rt = Object(s.a)([
              '\n  z-index: -1;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  right: 0px;\n  top: 0px;\n',
            ])),
        ),
        Pt = b.e.div(
          it ||
            (it = Object(s.a)([
              '\n  position: absolute;\n  display: flex;\n  width: 100%;\n  ',
              ';\n\n  svg {\n    fill: ',
              ';\n    width: ',
              ';\n    height: 100%;\n    max-height: 48px;\n  }\n',
            ])),
          function (e) {
            return e.top ? 'top: 0px' : 'bottom: 0px'
          },
          function (e) {
            return e.fill
          },
          function (e) {
            return e.width || '100%'
          },
        ),
        It = function (e) {
          return Object(m.jsx)(
            p.bc,
            Object(l.a)(
              Object(l.a)({ viewBox: '0 0 1660 48' }, e),
              {},
              {
                preserveAspectRatio: 'none',
                children: Object(m.jsx)('path', { d: 'M1660 48C1139.02 46.1887 336.256 15.2453 0 0H1660V48Z' }),
              },
            ),
          )
        },
        Mt = function (e) {
          return Object(m.jsx)(
            p.bc,
            Object(l.a)(
              Object(l.a)({ viewBox: '0 0 1660 48' }, e),
              {},
              {
                preserveAspectRatio: 'none',
                children: Object(m.jsx)('path', { d: 'M-346 48C174.985 46.1887 977.744 15.2453 1314 0H-346V48Z' }),
              },
            ),
          )
        },
        zt = n(851),
        Nt = n(97),
        Ht = n(44),
        Qt = n(186),
        Ut = n(50),
        Rt = n(177),
        Yt = n(39),
        _t = n(70),
        Gt = function () {
          var e = Object(d.useState)([]),
            t = Object(ee.a)(e, 2),
            n = t[0],
            r = t[1],
            i = Object(d.useState)(null),
            c = Object(ee.a)(i, 2),
            a = c[0],
            o = c[1],
            s = Object(j.c)().account,
            b = Object(he.a)().fastRefresh
          return (
            Object(d.useEffect)(
              function () {
                s &&
                  (function () {
                    var e = Object(re.a)(
                      ne.a.mark(function e() {
                        var t, n, i, c, a
                        return ne.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = Yt.w.map(function (e) {
                                    return { address: Object(Tt.n)(), name: 'pendingCake', params: [e.pid, s] }
                                  })),
                                  (e.next = 3),
                                  Object(Ut.a)(Rt, t)
                                )
                              case 3:
                                ;(n = e.sent),
                                  (i = Yt.w.map(function (e, t) {
                                    return Object(l.a)(Object(l.a)({}, e), {}, { balance: new Le.a(n[t]) })
                                  })),
                                  (c = i.filter(function (e) {
                                    return e.balance.gt(0)
                                  })),
                                  (a = c.reduce(function (e, t) {
                                    var n = new Le.a(t.balance)
                                    return n.eq(0) ? e : e + n.div(_t.k).toNumber()
                                  }, 0)),
                                  r(c),
                                  o(a)
                              case 9:
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
              [s, b],
            ),
            { farmsWithStakedBalance: n, earningsSum: a }
          )
        },
        qt = Object(b.e)(p.u)(ct || (ct = Object(s.a)(['\n  width: 100%;\n  height: fit-content;\n']))),
        Zt = function () {
          var e = Object(d.useState)(!1),
            t = Object(ee.a)(e, 2),
            n = t[0],
            r = t[1],
            i = Object(O.b)().t,
            c = Object(Nt.a)(),
            a = c.toastSuccess,
            o = c.toastError,
            l = Gt(),
            s = l.farmsWithStakedBalance,
            b = l.earningsSum,
            u = Object(Ht.p)(),
            j = Object(fe.h)(),
            x = new Le.a(b).multipliedBy(j),
            h = s.length,
            f = s.filter(function (e) {
              return 0 !== e.pid
            }).length,
            g = (function (e, t, n, r) {
              var i = { earningsBusd: n.toString(), count: e },
                c = r('%earningsBusd% to collect', i)
              return (
                e > 0 && t
                  ? (c = r(
                      e > 1
                        ? '%earningsBusd% to collect from %count% farms and CAKE pool'
                        : '%earningsBusd% to collect from %count% farm and CAKE pool',
                      i,
                    ))
                  : e > 0
                  ? (c = r(
                      e > 1
                        ? '%earningsBusd% to collect from %count% farms'
                        : '%earningsBusd% to collect from %count% farm',
                      i,
                    ))
                  : t && (c = r('%earningsBusd% to collect from CAKE pool', i)),
                c
              )
            })(f, h - f > 0, x, i).split(x.toString()),
            v = Object(ee.a)(g, 2),
            w = v[0],
            y = v[1],
            L = Object(d.useCallback)(
              Object(re.a)(
                ne.a.mark(function e() {
                  var t, n, c
                  return ne.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            r(!0), (t = Object(zt.a)(s)), (e.prev = 2), t.s()
                          case 4:
                            if ((n = t.n()).done) {
                              e.next = 17
                              break
                            }
                            return (c = n.value), (e.prev = 6), (e.next = 9), Object(Qt.c)(u, c.pid)
                          case 9:
                            a(
                              ''.concat(i('Harvested'), '!'),
                              i('Your %symbol% earnings have been sent to your wallet!', { symbol: 'CAKE' }),
                            ),
                              (e.next = 15)
                            break
                          case 12:
                            ;(e.prev = 12),
                              (e.t0 = e.catch(6)),
                              o(
                                i('Error'),
                                i('Please try again. Confirm the transaction and make sure you are paying enough gas!'),
                              )
                          case 15:
                            e.next = 4
                            break
                          case 17:
                            e.next = 22
                            break
                          case 19:
                            ;(e.prev = 19), (e.t1 = e.catch(2)), t.e(e.t1)
                          case 22:
                            return (e.prev = 22), t.f(), e.finish(22)
                          case 25:
                            r(!1)
                          case 26:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [
                      [2, 19, 22, 25],
                      [6, 12],
                    ],
                  )
                }),
              ),
              [s, u, a, o, i],
            )
          return Object(m.jsx)(qt, {
            children: Object(m.jsx)(p.v, {
              children: Object(m.jsxs)(p.W, {
                flexDirection: ['column', null, null, 'row'],
                justifyContent: 'space-between',
                alignItems: 'center',
                children: [
                  Object(m.jsxs)(p.W, {
                    flexDirection: 'column',
                    alignItems: ['center', null, null, 'flex-start'],
                    children: [
                      w && Object(m.jsx)(p.ic, { mb: '4px', color: 'textSubtle', children: w }),
                      x.isNaN()
                        ? Object(m.jsx)(p.Tb, { width: 96, height: 24, my: '2px' })
                        : Object(m.jsx)(ve.a, {
                            decimals: x.gt(0) ? 2 : 0,
                            fontSize: '24px',
                            bold: !0,
                            prefix: x.gt(0) ? '~$' : '$',
                            lineHeight: '1.1',
                            value: x.toNumber(),
                          }),
                      Object(m.jsx)(p.ic, { mb: ['16px', null, null, '0'], color: 'textSubtle', children: y }),
                    ],
                  }),
                  h <= 0
                    ? Object(m.jsx)(p.hb, {
                        href: 'farms',
                        children: Object(m.jsxs)(p.q, {
                          width: ['100%', null, null, 'auto'],
                          variant: 'secondary',
                          children: [
                            Object(m.jsx)(p.ic, { color: 'primary', bold: !0, children: i('Start earning') }),
                            Object(m.jsx)(p.e, { ml: '4px', color: 'primary' }),
                          ],
                        }),
                      })
                    : Object(m.jsx)(p.q, {
                        width: ['100%', null, null, 'auto'],
                        id: 'harvest-all',
                        isLoading: n,
                        endIcon: n ? Object(m.jsx)(p.h, { spin: !0, color: 'currentColor' }) : null,
                        disabled: n,
                        onClick: L,
                        children: Object(m.jsx)(p.ic, {
                          color: 'invertedContrast',
                          bold: !0,
                          children: i(n ? 'Harvesting' : 'Harvest all'),
                        }),
                      }),
                ],
              }),
            }),
          })
        },
        $t = n(184),
        Vt = n(800),
        Kt = n(789),
        Jt = Object(b.e)(p.W)(
          at || (at = Object(s.a)(['\n  align-items: center;\n  display: none;\n  ', ' {\n    display: flex;\n  }\n'])),
          function (e) {
            return e.theme.mediaQueries.md
          },
        ),
        Xt = Object(b.e)(p.W)(ot || (ot = Object(s.a)(['\n  ', ' {\n    display: none;\n  }\n'])), function (e) {
          return e.theme.mediaQueries.md
        }),
        en = Object(b.e)(p.W)(
          lt ||
            (lt = Object(s.a)([
              '\n  height: 92px;\n  width: 92px;\n  background-color: ',
              ';\n  border: 3px solid ',
              ';\n  border-radius: ',
              ';\n  box-shadow: ',
              ';\n',
            ])),
          function (e) {
            return e.theme.colors.invertedContrast
          },
          function (e) {
            return e.theme.colors.invertedContrast
          },
          function (e) {
            return e.theme.radii.circle
          },
          function (e) {
            return e.theme.card.boxShadow
          },
        ),
        tn = Object(b.e)(p.Db)(st || (st = Object(s.a)(['\n  height: 100%;\n  width: 100%;\n']))),
        nn = function () {
          var e = Object($t.b)(),
            t = e.profile,
            n = e.isLoading,
            r = Object(O.b)().t,
            i = Object(j.c)().account,
            c = Object(Kt.a)(i)
          return Object(m.jsxs)(m.Fragment, {
            children: [
              Object(m.jsxs)(Jt, {
                children: [
                  Object(m.jsx)(p.m, {
                    mr: '24px',
                    children: Object(m.jsx)(en, {
                      children: t ? Object(m.jsx)(Vt.a, { profile: t }) : Object(m.jsx)(tn, {}),
                    }),
                  }),
                  Object(m.jsxs)(p.W, {
                    flexDirection: 'column',
                    children: [
                      t
                        ? Object(m.jsx)(p.Y, { scale: 'xl', children: r('Hi, %userName%!', { userName: t.username }) })
                        : n && !t
                        ? Object(m.jsx)(p.Tb, { width: 200, height: 40, my: '4px' })
                        : Object(m.jsx)(m.Fragment, {}),
                      n || !i
                        ? Object(m.jsx)(p.Tb, { width: 160, height: 16, my: '4px' })
                        : Object(m.jsxs)(p.ic, {
                            fontSize: '16px',
                            children: [' ', r('Connected with %address%', { address: c })],
                          }),
                    ],
                  }),
                ],
              }),
              Object(m.jsx)(Xt, {
                children: t
                  ? Object(m.jsx)(p.Y, {
                      mb: '18px',
                      textAlign: 'center',
                      children: r('Hi, %userName%!', { userName: t.username }),
                    })
                  : n && !t
                  ? Object(m.jsx)(p.Tb, { width: 120, height: 20, mt: '2px', mb: '18px' })
                  : Object(m.jsx)(m.Fragment, {}),
              }),
            ],
          })
        },
        rn = Object(b.e)(p.m)(
          dt ||
            (dt = Object(s.a)([
              '\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom: 1px ',
              ' solid;\n  border-left: 1px ',
              ' solid;\n  border-right: 1px ',
              ' solid;\n  border-radius: ',
              ';\n  background: ',
              ';\n',
            ])),
          function (e) {
            return e.theme.colors.secondary
          },
          function (e) {
            return e.theme.colors.secondary
          },
          function (e) {
            return e.theme.colors.secondary
          },
          function (e) {
            var t = e.theme
            return '0 0 '.concat(t.radii.card, ' ').concat(t.radii.card)
          },
          function (e) {
            return e.theme.isDark
              ? 'linear-gradient(360deg, rgba(49, 61, 92, 0.9) 0%, rgba(61, 42, 84, 0.9) 100%)'
              : 'linear-gradient(180deg, rgba(202, 194, 236, 0.9) 0%,  rgba(204, 220, 239, 0.9) 51.04%, rgba(206, 236, 243, 0.9) 100%)'
          },
        ),
        cn = function () {
          return Object(m.jsx)(rn, {
            children: Object(m.jsx)(p.m, {
              p: ['16px', null, null, '24px'],
              children: Object(m.jsxs)(p.W, {
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: ['column', null, null, 'row'],
                children: [
                  Object(m.jsx)(p.W, { flex: '1', mr: [null, null, null, '32px'], children: Object(m.jsx)(nn, {}) }),
                  Object(m.jsx)(p.W, { flex: '1', width: ['100%', null, 'auto'], children: Object(m.jsx)(Zt, {}) }),
                ],
              }),
            }),
          })
        },
        an = Object(b.e)(u.a)(
          bt || (bt = Object(s.a)(['\n  padding-top: 16px;\n\n  ', ' {\n    padding-top: 48px;\n  }\n'])),
          function (e) {
            return e.theme.mediaQueries.md
          },
        ),
        on = Object(b.e)(h.a)(
          ut ||
            (ut = Object(s.a)([
              '\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n  top: 0px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  padding-left: 0px;\n  padding-right: 0px;\n\n  ',
              ' {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n',
            ])),
          function (e) {
            return e.theme.mediaQueries.lg
          },
        )
      t.default = function () {
        var e = Object(x.a)().theme,
          t = Object(j.c)().account,
          n = { margin: '0', width: '100%', maxWidth: '968px' }
        return Object(m.jsxs)(m.Fragment, {
          children: [
            Object(m.jsxs)(an, {
              innerProps: { style: { margin: '0', width: '100%' } },
              background: e.isDark
                ? 'radial-gradient(103.12% 50% at 50% 50%, #21193A 0%, #191326 100%)'
                : 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)',
              index: 2,
              hasCurvedDivider: !1,
              children: [t && Object(m.jsx)(on, { children: Object(m.jsx)(cn, {}) }), Object(m.jsx)(V, {})],
            }),
            Object(m.jsx)(u.a, {
              innerProps: { style: { margin: '0', width: '100%' } },
              background: e.isDark
                ? 'linear-gradient(180deg, #09070C 22%, #201335 100%)'
                : 'linear-gradient(180deg, #FFFFFF 22%, #D7CAEC 100%)',
              index: 2,
              hasCurvedDivider: !1,
              children: Object(m.jsx)(be, {}),
            }),
            Object(m.jsxs)(u.a, {
              innerProps: { style: n },
              background: e.colors.background,
              index: 2,
              hasCurvedDivider: !1,
              children: [
                Object(m.jsx)(At, {
                  children: Object(m.jsx)(Pt, {
                    top: !0,
                    fill: e.isDark ? '#201335' : '#D8CBED',
                    children: Object(m.jsx)(It, {}),
                  }),
                }),
                Object(m.jsx)(xe, Object(l.a)({}, K)),
              ],
            }),
            Object(m.jsxs)(u.a, {
              innerProps: { style: n },
              background: e.colors.gradients.cardHeader,
              index: 2,
              hasCurvedDivider: !1,
              children: [
                Object(m.jsx)(At, {
                  children: Object(m.jsx)(Pt, {
                    width: '150%',
                    top: !0,
                    fill: e.colors.background,
                    children: Object(m.jsx)(Mt, {}),
                  }),
                }),
                Object(m.jsx)(xe, Object(l.a)({}, J)),
                Object(m.jsx)(gt, {}),
              ],
            }),
            Object(m.jsx)(u.a, {
              innerProps: { style: n },
              background: e.isDark
                ? 'linear-gradient(180deg, #0B4576 0%, #091115 100%)'
                : 'linear-gradient(180deg, #6FB6F1 0%, #EAF2F6 100%)',
              index: 2,
              hasCurvedDivider: !1,
              children: Object(m.jsx)(Be, {}),
            }),
            Object(m.jsxs)(u.a, {
              innerProps: { style: n },
              background: e.colors.background,
              index: 2,
              hasCurvedDivider: !1,
              children: [Object(m.jsx)(xe, Object(l.a)({}, X)), Object(m.jsx)(Wt, {})],
            }),
            Object(m.jsx)(u.a, {
              innerProps: { style: n },
              background: 'linear-gradient(180deg, #5dccf8 0%, #5121B1 100%)',
              index: 2,
              hasCurvedDivider: !1,
              children: Object(m.jsx)(St, {}),
            }),
          ],
        })
      }
    },
    789: function (e, t, n) {
      'use strict'
      t.a = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4
        return ''.concat(e.substring(0, t), '...').concat(e.substring(e.length - n))
      }
    },
    800: function (e, t, n) {
      'use strict'
      var r,
        i,
        c,
        a = n(8),
        o = (n(1), n(3)),
        l = n(5),
        s = n(0),
        d = l.e.img(
          r ||
            (r = Object(a.a)([
              '\n  border: 1px solid ',
              ';\n  border-radius: 50%;\n  bottom: 0px;\n  position: absolute;\n  right: 0px;\n  min-width: 20px;\n  min-height: 20px;\n  width: 37.5%;\n  height: 37.5%;\n  z-index: 5;\n\n  ',
              ' {\n    border-width: 2px;\n  }\n',
            ])),
          function (e) {
            return e.theme.card.background
          },
          function (e) {
            return e.theme.mediaQueries.sm
          },
        ),
        b = l.e.div(
          i ||
            (i = Object(a.a)([
              "\n  background: url('",
              "');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  & > img {\n    border-radius: 50%;\n  }\n",
            ])),
          function (e) {
            return e.bg
          },
        ),
        u = Object(l.e)(o.Db)(c || (c = Object(a.a)(['\n  width: 100%;\n  height: 100%;\n'])))
      t.a = function (e) {
        var t,
          n,
          r = e.profile
        return Object(s.jsxs)(b, {
          bg: '/images/nfts/'.concat(
            null === (t = r.nft) || void 0 === t || null === (n = t.images) || void 0 === n ? void 0 : n.md,
          ),
          children: [
            !r.isActive && Object(s.jsx)(u, {}),
            Object(s.jsx)(d, { src: '/images/teams/'.concat(r.team.images.alt), alt: r.team.name }),
          ],
        })
      }
    },
    808: function (e, t, n) {
      'use strict'
      var r,
        i,
        c,
        a,
        o,
        l,
        s,
        d = n(6),
        b = n(52),
        u = n(8),
        j = (n(1), n(5)),
        x = n(3),
        h = n(244),
        p = n(0),
        O = function (e, t, n) {
          return Object(j.d)(
            r ||
              (r = Object(u.a)([
                '\n  width: 100%;\n  height: 20px;\n  clip-path: url(',
                ');\n\n  background: ',
                ';\n\n  & svg {\n    display: block;\n  }\n',
              ])),
            t,
            function () {
              return e.isDark
                ? (null === n || void 0 === n ? void 0 : n.dark) ||
                    (null === n || void 0 === n ? void 0 : n.light) ||
                    e.colors.background
                : (null === n || void 0 === n ? void 0 : n.light) || e.colors.background
            },
          )
        },
        f = Object(j.e)(x.m)(
          i || (i = Object(u.a)(['\n  ', '\n  transform: ', ';\n'])),
          function (e) {
            var t = e.theme,
              n = e.clipPath,
              r = e.clipFill
            return O(t, n, r)
          },
          function (e) {
            return '#bottomConcaveCurve' === e.clipPath ? 'translate(0, -13px)' : 'translate(0, 1px)'
          },
        ),
        m = Object(j.e)(x.m)(
          c || (c = Object(u.a)(['\n  ', '\n  transform: ', ';\n'])),
          function (e) {
            var t = e.theme,
              n = e.clipPath,
              r = e.clipFill
            return O(t, n, r)
          },
          function (e) {
            return '#bottomConvexCurve' === e.clipPath ? 'translate(0, -13px)' : 'translate(0, -1px)'
          },
        ),
        g = function (e) {
          var t = e.clipFill
          return Object(p.jsx)(m, {
            clipFill: t,
            clipPath: '#topConvexCurve',
            children: Object(p.jsx)('svg', {
              width: '0',
              height: '0',
              children: Object(p.jsx)('defs', {
                children: Object(p.jsx)('clipPath', {
                  id: 'topConvexCurve',
                  clipPathUnits: 'objectBoundingBox',
                  children: Object(p.jsx)('path', { d: 'M 0,1 L 0,0 L 1,0 L 1,1 C 0.75 0, .25 0, 0 1 Z' }),
                }),
              }),
            }),
          })
        },
        v = function (e) {
          var t = e.clipFill
          return Object(p.jsx)(m, {
            clipFill: t,
            clipPath: '#bottomConvexCurve',
            children: Object(p.jsx)('svg', {
              width: '0',
              height: '0',
              children: Object(p.jsx)('defs', {
                children: Object(p.jsx)('clipPath', {
                  id: 'bottomConvexCurve',
                  clipPathUnits: 'objectBoundingBox',
                  children: Object(p.jsx)('path', { d: 'M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z' }),
                }),
              }),
            }),
          })
        },
        w = function (e) {
          var t = e.clipFill
          return Object(p.jsx)(f, {
            clipFill: t,
            clipPath: '#topConcaveCurve',
            children: Object(p.jsx)('svg', {
              width: '0',
              height: '0',
              children: Object(p.jsx)('defs', {
                children: Object(p.jsx)('clipPath', {
                  id: 'topConcaveCurve',
                  clipPathUnits: 'objectBoundingBox',
                  children: Object(p.jsx)('path', { d: 'M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z' }),
                }),
              }),
            }),
          })
        },
        y = function (e) {
          var t = e.clipFill
          return Object(p.jsx)(f, {
            clipFill: t,
            clipPath: '#bottomConcaveCurve',
            children: Object(p.jsx)('svg', {
              width: '0',
              height: '0',
              children: Object(p.jsx)('defs', {
                children: Object(p.jsx)('clipPath', {
                  id: 'bottomConcaveCurve',
                  clipPathUnits: 'objectBoundingBox',
                  children: Object(p.jsx)('path', { d: 'M 0,1 L 0,0 L 1,0 L 1,1 C .75 0.1, .25 0.1, 0 1 Z' }),
                }),
              }),
            }),
          })
        },
        L = j.e.div(
          a ||
            (a = Object(u.a)([
              '\n  background: ',
              ';\n  z-index: ',
              ';\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n',
            ])),
          function (e) {
            var t = e.theme,
              n = e.dividerFill
            return t.isDark
              ? (null === n || void 0 === n ? void 0 : n.dark) ||
                  (null === n || void 0 === n ? void 0 : n.light) ||
                  'none'
              : (null === n || void 0 === n ? void 0 : n.light) ||
                  (null === n || void 0 === n ? void 0 : n.dark) ||
                  'none'
          },
          function (e) {
            return e.index
          },
        ),
        k = j.e.div(
          o ||
            (o = Object(u.a)([
              '\n  z-index: ',
              ';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n',
            ])),
          function (e) {
            return e.index + 1
          },
        ),
        C = function (e) {
          var t = e.index,
            n = e.dividerPosition,
            r = e.dividerComponent,
            i = e.concave,
            c = e.clipFill,
            a = e.dividerFill,
            o = 'top' === n && !i,
            l = 'bottom' === n && !i,
            s = 'top' === n && i,
            d = 'bottom' === n && i
          return Object(p.jsxs)(L, {
            index: t,
            dividerFill: a,
            children: [
              r && Object(p.jsx)(k, { index: t, children: r }),
              Object(p.jsxs)(p.Fragment, {
                children: [s && Object(p.jsx)(w, { clipFill: c }), d && Object(p.jsx)(y, { clipFill: c })],
              }),
              Object(p.jsxs)(p.Fragment, {
                children: [o && Object(p.jsx)(g, { clipFill: c }), l && Object(p.jsx)(v, { clipFill: c })],
              }),
            ],
          })
        },
        F = [
          'children',
          'background',
          'svgFill',
          'index',
          'dividerComponent',
          'dividerPosition',
          'hasCurvedDivider',
          'concaveDivider',
          'clipFill',
          'dividerFill',
          'containerProps',
          'innerProps',
        ],
        S = Object(j.e)(x.W)(
          l ||
            (l = Object(u.a)([
              '\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  z-index: ',
              ';\n  background: ',
              ';\n  padding: ',
              ';\n',
            ])),
          function (e) {
            return e.index - 1
          },
          function (e) {
            var t = e.background,
              n = e.theme
            return t || n.colors.background
          },
          function (e) {
            return (0, e.getPadding)()
          },
        ),
        D = Object(j.e)(h.a)(
          s ||
            (s = Object(u.a)([
              '\n  min-height: auto;\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  ',
              ' {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n\n  ',
              ' {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n',
            ])),
          function (e) {
            return e.theme.mediaQueries.sm
          },
          function (e) {
            return e.theme.mediaQueries.lg
          },
        )
      t.a = function (e) {
        var t = e.children,
          n = e.background,
          r = e.svgFill,
          i = e.index,
          c = void 0 === i ? 1 : i,
          a = e.dividerComponent,
          o = e.dividerPosition,
          l = void 0 === o ? 'bottom' : o,
          s = e.hasCurvedDivider,
          u = void 0 === s || s,
          j = e.concaveDivider,
          h = void 0 !== j && j,
          O = e.clipFill,
          f = e.dividerFill,
          m = e.containerProps,
          g = e.innerProps,
          v = Object(b.a)(e, F)
        return Object(p.jsxs)(
          x.m,
          Object(d.a)(
            Object(d.a)({}, m),
            {},
            {
              children: [
                u &&
                  'top' === l &&
                  Object(p.jsx)(C, {
                    svgFill: r,
                    index: c,
                    concave: h,
                    dividerPosition: l,
                    dividerComponent: a,
                    clipFill: O,
                    dividerFill: f,
                  }),
                Object(p.jsx)(
                  S,
                  Object(d.a)(
                    Object(d.a)(
                      {
                        background: n,
                        index: c,
                        getPadding: function () {
                          return u
                            ? 'bottom' === l
                              ? '48px 0 14px'
                              : 'top' === l
                              ? '14px 0 48px'
                              : '48px 0'
                            : '48px 0'
                        },
                      },
                      v,
                    ),
                    {},
                    { children: Object(p.jsx)(D, Object(d.a)(Object(d.a)({}, g), {}, { children: t })) },
                  ),
                ),
                u &&
                  'bottom' === l &&
                  Object(p.jsx)(C, {
                    svgFill: r,
                    index: c,
                    concave: h,
                    dividerPosition: l,
                    dividerComponent: a,
                    clipFill: O,
                    dividerFill: f,
                  }),
              ],
            },
          ),
        )
      }
    },
    851: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var r = n(255)
      function i(e, t) {
        var n
        if ('undefined' === typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (n = Object(r.a)(e)) || (t && e && 'number' === typeof e.length)) {
            n && (e = n)
            var i = 0,
              c = function () {}
            return {
              s: c,
              n: function () {
                return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] }
              },
              e: function (e) {
                throw e
              },
              f: c,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
        var a,
          o = !0,
          l = !1
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next()
            return (o = e.done), e
          },
          e: function (e) {
            ;(l = !0), (a = e)
          },
          f: function () {
            try {
              o || null == n.return || n.return()
            } finally {
              if (l) throw a
            }
          },
        }
      }
    },
  },
])
//# sourceMappingURL=17.4cffec20.chunk.js.map
