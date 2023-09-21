(function (g) {
  var window = this; /*
 SPDX-License-Identifier: Apache-2.0 */
  /*

 Copyright 2017 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
  ("use strict");
  var Hlb = function (a) {
      a.mutedAutoplay = !1;
      a.endSeconds = NaN;
      a.limitedPlaybackDurationInSeconds = NaN;
      g.kT(a);
    },
    Ilb = function () {
      return {
        I: "svg",
        Y: {
          height: "100%",
          version: "1.1",
          viewBox: "0 0 110 26",
          width: "100%",
        },
        X: [
          {
            I: "path",
            Bc: !0,
            T: "ytp-svg-fill",
            Y: {
              d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z",
            },
          },
        ],
      };
    },
    Jlb = function (a, b) {
      var c = m5;
      m5 = b;
      try {
        return a();
      } finally {
        m5 = c;
      }
    },
    Klb = function (a, b) {
      var c = g.Ja.apply(2, arguments),
        d;
      b = null != (d = b) ? d : {};
      return { type: a, props: b, children: c };
    },
    Llb = function (a) {
      return a.children;
    },
    Mlb = function (a) {
      var b = {},
        c;
      for (c in a)
        (b = { kQ: b.kQ, cP: b.cP }),
          (b.kQ = n5[c]),
          (b.cP = a[c]),
          (n5[c] = (function (d) {
            return function () {
              var e = g.Ja.apply(0, arguments);
              d.kQ.apply(null, g.pa(e));
              d.cP.apply(null, g.pa(e));
            };
          })(b));
    },
    Nlb = function () {},
    o5 = function (a, b) {
      for (; a.length > b; ) a.pop();
    },
    Olb = function (a) {
      a = Array(a);
      o5(a, 0);
      return a;
    },
    Plb = function (a, b, c) {
      if (null == c) a.removeAttribute(b);
      else {
        var d =
          0 === b.lastIndexOf("xml:", 0)
            ? "http://www.w3.org/XML/1998/namespace"
            : 0 === b.lastIndexOf("xlink:", 0)
            ? "http://www.w3.org/1999/xlink"
            : null;
        d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c);
      }
    },
    Rlb = function (a, b, c) {
      a = a.style;
      if ("string" === typeof c) a.cssText = c;
      else {
        a.cssText = "";
        for (var d in c)
          Qlb.call(c, d) &&
            ((b = c[d]),
            0 <= d.indexOf("-") ? a.setProperty(d, b) : (a[d] = b));
      }
    },
    Slb = function (a, b, c) {
      var d = typeof c;
      "object" === d || "function" === d ? (a[b] = c) : Plb(a, b, c);
    },
    p5 = function () {
      var a = new Nlb();
      a.__default = Slb;
      a.style = Rlb;
      return a;
    },
    Tlb = function (a, b, c, d) {
      (d[b] || d.__default)(a, b, c);
    },
    Ulb = function (a) {
      this.created = [];
      this.j = [];
      this.node = a;
    },
    Vlb = function (a, b) {
      this.j = null;
      this.B = a;
      this.key = b;
      this.text = void 0;
    },
    q5 = function (a, b, c) {
      b = new Vlb(b, c);
      return (a.__incrementalDOMData = b);
    },
    r5 = function (a, b) {
      if (a.__incrementalDOMData) return a.__incrementalDOMData;
      var c = 1 === a.nodeType ? a.localName : a.nodeName,
        d = 1 === a.nodeType ? a.getAttribute("key") : null;
      b = q5(a, c, 1 === a.nodeType ? d || b : null);
      if (1 === a.nodeType && ((a = a.attributes), (c = a.length))) {
        d = b.j || (b.j = Olb(2 * c));
        for (var e = 0, f = 0; e < c; e += 1, f += 2) {
          var h = a[e],
            l = h.value;
          d[f] = h.name;
          d[f + 1] = l;
        }
      }
      return b;
    },
    Wlb = function (a, b, c, d, e) {
      return b == c && d == e;
    },
    v5 = function (a) {
      for (var b = s5, c = t5(); c !== a; ) {
        var d = c.nextSibling;
        b.removeChild(c);
        u5.j.push(c);
        c = d;
      }
    },
    t5 = function () {
      return w5 ? w5.nextSibling : s5.firstChild;
    },
    Xlb = function (a, b) {
      w5 = t5();
      if (x5 && w5) q5(w5, a, b);
      else {
        var c;
        a: {
          if ((c = w5)) {
            do {
              var d = c,
                e = a,
                f = b,
                h = r5(d, f);
              if (y5(d, e, h.B, f, h.key)) break a;
            } while (b && (c = c.nextSibling));
          }
          c = null;
        }
        c ||
          ("#text" === a
            ? ((a = z5.createTextNode("")), q5(a, "#text", null))
            : ((c = z5),
              (d = s5),
              "function" === typeof a
                ? (c = new a())
                : (c = (d =
                    "svg" === a
                      ? "http://www.w3.org/2000/svg"
                      : "math" === a
                      ? "http://www.w3.org/1998/Math/MathML"
                      : null == d || "foreignObject" === r5(d).B
                      ? null
                      : d.namespaceURI)
                    ? c.createElementNS(d, a)
                    : c.createElement(a)),
              q5(c, a, b),
              (a = c)),
          u5.created.push(a),
          (c = a));
        a = c;
        if (a !== w5) {
          if (0 <= A5.indexOf(a))
            for (b = s5, c = a.nextSibling, d = w5; null !== d && d !== a; )
              (e = d.nextSibling), b.insertBefore(d, c), (d = e);
          else s5.insertBefore(a, w5);
          w5 = a;
        }
      }
    },
    Ylb = function (a, b) {
      Xlb(a, b);
      s5 = w5;
      w5 = null;
      return s5;
    },
    $lb = function (a, b) {
      b = void 0 === b ? {} : b;
      var c = void 0 === b.matches ? Wlb : b.matches,
        d = void 0 === b.W5 ? !1 : b.W5;
      return function (e, f, h) {
        var l = u5,
          m = z5,
          n = A5,
          p = B5,
          q = w5,
          r = s5,
          t = y5,
          v = x5;
        z5 = e.ownerDocument;
        u5 = new Ulb(e);
        y5 = c;
        B5 = [];
        w5 = null;
        var x = (s5 = e.parentNode),
          B,
          G = Zlb.call(e);
        if (
          (B =
            11 === G.nodeType || 9 === G.nodeType ? G.activeElement : null) &&
          e.contains(B)
        ) {
          for (G = []; B !== x; )
            G.push(B), (B = B.parentNode || (x ? B.host : null));
          x = G;
        } else x = [];
        A5 = x;
        x5 = d;
        try {
          return a(e, f, h);
        } finally {
          (e = u5),
            C5 && 0 < e.j.length && C5(e.j),
            (z5 = m),
            (u5 = l),
            (y5 = t),
            (B5 = p),
            (w5 = q),
            (s5 = r),
            (A5 = n),
            (x5 = v);
        }
      };
    },
    amb = function (a, b, c, d) {
      D5.push(Tlb);
      D5.push(a);
      D5.push(b);
      D5.push(c);
      D5.push(d);
    },
    bmb = function (a) {
      Xlb("#text", null);
      var b = w5;
      var c = r5(b);
      if (c.text !== a) {
        c = c.text = a;
        for (var d = 1; d < arguments.length; d += 1) c = (0, arguments[d])(c);
        b.data !== c && (b.data = c);
      }
    },
    cmb = function (a) {
      for (var b in a) E5.attributes[b] = a[b](E5.attributes[b]);
    },
    emb = function (a) {
      dmb.push(a);
      a.attributes && cmb(a.attributes);
      a.aZ && Mlb(a.aZ);
    },
    fmb = function (a) {
      var b;
      return void 0 !== (null == (b = a.prototype) ? void 0 : b.Mw);
    },
    gmb = function (a, b) {
      if (a.Fm && a.Mr) {
        var c = a.Fm[b];
        a = a.Mr[b];
        c.JI &&
          c.cE &&
          ((b = c.JI.length - 1),
          F5(c.JI, a, b),
          F5(c.cE, a, b),
          c.JI.pop(),
          c.cE.pop(),
          (b = c.JI[a]),
          null != b && b.Mr && (b.Mr[c.cE[a]] = a));
      }
    },
    hmb = function (a, b) {
      if (a.Fm && a.Mr) {
        F5(a.Fm, b, a.Fm.length - 1);
        F5(a.Mr, b, a.Mr.length - 1);
        a.Fm.pop();
        a.Mr.pop();
        var c = a.Fm[b];
        a = a.Mr[b];
        if (null == c ? 0 : c.cE) c.cE[a] = b;
      }
    },
    F5 = function (a, b, c) {
      -1 === c && (c = a.length - 1);
      var d = a[b];
      a[b] = a[c];
      a[c] = d;
    },
    G5 = function (a) {
      function b() {
        return void imb(c);
      }
      var c = jmb(!0);
      kmb(c, function () {
        return void a(b, c);
      });
    },
    lmb = function (a) {
      if (H5) {
        var b;
        (b = H5).uC || (b.uC = []);
        H5.uC.push(a);
      }
    },
    kmb = function (a, b) {
      var c = H5;
      H5 = a;
      try {
        return b();
      } finally {
        H5 = c;
      }
    },
    jmb = function (a) {
      var b = {};
      if ((void 0 === a || a) && H5) {
        var c;
        (c = H5).ZP || (c.ZP = []);
        H5.ZP.push(b);
      }
      return b;
    },
    mmb = function (a) {
      var b;
      null == (b = a.ZP) || b.forEach(imb);
      if (a.uC) {
        b = g.u(a.uC);
        for (var c = b.next(); !c.done; c = b.next()) (c = c.value), c();
        a.uC = [];
      }
    },
    imb = function (a) {
      if (!a.isDisposed) {
        a.isDisposed = !0;
        var b;
        null == (b = a.E7) || b.call(a);
        mmb(a);
      }
    },
    I5 = function (a) {
      if (0 !== a.state && !a.isDisposed) {
        if (1 === a.state && a.Fm)
          for (var b = g.u(a.Fm), c = b.next(); !c.done; c = b.next())
            (c = c.value), null != c.gF && I5(c);
        2 === a.state && null != a.gF && a.gF(a);
        a.state = 0;
      }
    },
    nmb = function (a, b) {
      return kmb(a, function () {
        return b(void 0);
      });
    },
    pmb = function (a, b) {
      omb(function () {
        a.b$ = 0;
        mmb(a);
        var c = nmb(a, b);
        if (a.Fm && a.Mr)
          for (var d = a.b$; d < a.Fm.length; d++) {
            var e = a,
              f = d;
            gmb(e, f);
            hmb(e, f);
          }
        return c;
      });
    },
    omb = function (a) {
      if (null != J5) a();
      else {
        J5 = [];
        try {
          a();
          for (var b = g.u(J5), c = b.next(); !c.done; c = b.next())
            I5(c.value);
        } finally {
          J5 = null;
        }
      }
    },
    qmb = function (a) {
      pmb(a, a.fn);
    },
    smb = function (a) {
      var b = jmb();
      b.value = null;
      b.E7 = rmb.bind(null, b);
      b.fn = a;
      b.gF = qmb;
      b.pfb = !0;
      b.state = 2;
      return b;
    },
    tmb = function (a) {
      a = smb(a);
      I5(a);
    },
    umb = function (a) {
      a = smb(a);
      J5 ? J5.push(a) : I5(a);
    },
    rmb = function (a) {
      if (a.Fm)
        for (var b = 0; b < a.Fm.length; b++) {
          var c = a,
            d = b;
          gmb(c, d);
          hmb(c, d);
        }
    },
    xmb = function (a, b, c) {
      if (
        Object.hasOwnProperty.call(vmb, a) &&
        ((a = vmb[a]),
        Object.hasOwnProperty.call(a, b) && ((a = a[b]), a instanceof Array))
      ) {
        for (var d = null, e = !1, f = 0, h = a.length; f < h; ++f) {
          var l = a[f],
            m = l.ai;
          if (!m) return l.Ed;
          null === d && (d = {});
          m = Object.hasOwnProperty.call(d, m) ? d[m] : (d[m] = c(m));
          if (m === l.Ci) return l.Ed;
          null == m && (e = !0);
        }
        if (e) return null;
      }
      b = wmb[b];
      return "number" === typeof b ? b : null;
    },
    K5 = function () {
      this.UW = "";
    },
    zmb = function (a, b, c) {
      if (null === c || void 0 === c) return c;
      var d = xmb(a.tagName.toLowerCase(), b, function () {
        throw Error("Contingent attribute/property lookups are not supported.");
      });
      if (null === d) return c;
      d = ymb[d];
      var e;
      if (null == (e = d.Jt) ? 0 : e.call(d, c)) {
        if (d.Wr) return d.Wr(c);
        throw Error("Value Handler's unwrap function does not exist.");
      }
      c = c && c.zn ? c.Ok() : c;
      return d.uq ? d.uq(a.tagName, b, String(c)) : c;
    },
    Amb = function (a, b) {
      var c = L5;
      null == a.ys &&
        null != a.hG &&
        G5(function (d) {
          a.ys = d;
          tmb(function () {
            for (var e = a.hG, f = [], h = 0; h < e.length; h++) {
              var l = e[h],
                m = b[l]();
              f[h] !== m && ((f[h] = m), c(a, l, m));
            }
          });
        });
    },
    Bmb = function (a) {
      var b = document.createTextNode("");
      G5(function (c) {
        b.nU = !0;
        b.ys = c;
        tmb(function () {
          var d = a();
          null == d && (d = "");
          var e = typeof d;
          if ("object" === e || "function" === e)
            throw Error(
              "Invalid text node kind: " +
                e +
                ". Text nodes must be primitives like numbers, strings, or null, but an object type was passed"
            );
          b.textContent = String(d);
        });
      });
      return b;
    },
    L5 = function (a, b, c) {
      !1 === c && Cmb.has(b)
        ? Plb(a, b, null)
        : "idomKey" !== b &&
          "skip" !== b &&
          "skipchildren" !== b &&
          "children" !== b &&
          "el" !== b &&
          (b.startsWith("on")
            ? ":" === b[2]
              ? (a["on" + b.slice(3)] = c.a5(0))
              : Dmb(a, b, c)
            : "function" !== typeof c || null != a.ys
            ? (E5.B4 && (c = zmb(a, b, c)),
              "style" === b
                ? Emb(a, b, c)
                : b.startsWith("prop:")
                ? (a[b.slice(5)] = c)
                : Dmb(a, b, c))
            : (a.hG || (a.hG = []), a.hG.push(b)));
    },
    Fmb = function (a, b) {
      if (null == b ? 0 : b.el) {
        var c = b.el;
        if ("function" === typeof c) c(a);
        else {
          var d;
          null == (d = c.F8) || d.call(c, a);
          a._disposeRef ||
            ((a._disposeRef = function () {
              var e;
              null == (e = c.z9) || e.call(c);
              delete a._disposeRef;
            }),
            lmb(function () {
              var e;
              return void (null == (e = a._disposeRef) ? void 0 : e.call(a));
            }));
        }
      }
    },
    Imb = function (a, b, c) {
      c = ((void 0 === c ? 0 : c) ? Gmb : Hmb)(a, function () {
        M5(b);
      });
      null != c || (c = a);
    },
    M5 = function (a) {
      if (void 0 !== a && null !== a)
        if (Array.isArray(a)) {
          a = g.u(a);
          for (var b = a.next(); !b.done; b = a.next()) M5(b.value);
        } else if (a instanceof g.Xd || a instanceof g.$d || a instanceof g.ee)
          bmb(a.toString());
        else if (a instanceof Node) {
          if (t5() !== a)
            throw Error(
              "Encountered a real dom node where a vdom node was expected. Real dom nodes should only come from the reactive renderer, and they can't be passed in JSX expressions directly. Tag name: " +
                a.tagName
            );
          w5 = t5();
        } else if (
          ((b = typeof a), "boolean" === b || "number" === b || "string" === b)
        )
          bmb(a);
        else if ("function" === typeof a) {
          b = s5;
          var c = t5();
          (c && c.nU) || b.insertBefore(Bmb(a), c);
          w5 = t5();
        } else {
          if ("string" === typeof a.type) {
            a.gq || Ylb(a.type, a.props.idomKey);
            b = s5;
            for (var d in a.props)
              if (a.props[d] !== Jmb) {
                var e = a.props[d],
                  f = B5;
                f.push(d);
                f.push(e);
              }
            d = E5.attributes;
            d = void 0 === d ? Kmb : d;
            e = s5;
            var h = r5(e);
            f = d;
            d = B5;
            h = h.j || (h.j = Olb(d.length));
            for (var l = !h.length || !1, m = 0; m < d.length; m += 2) {
              var n = d[m];
              if (l) h[m] = n;
              else if (h[m] !== n) break;
              var p = d[m + 1];
              if (l || h[m + 1] !== p) (h[m + 1] = p), amb(e, n, p, f);
            }
            if (m < d.length || m < h.length) {
              for (m = l = m; m < h.length; m += 2) N5[h[m]] = h[m + 1];
              for (m = l; m < d.length; m += 2)
                (l = d[m]),
                  (n = d[m + 1]),
                  N5[l] !== n && amb(e, l, n, f),
                  (h[m] = l),
                  (h[m + 1] = n),
                  delete N5[l];
              o5(h, d.length);
              for (c in N5) amb(e, c, void 0, f), delete N5[c];
            }
            c = Lmb;
            Lmb = e = D5.length;
            for (f = c; f < e; f += 5)
              (0, D5[f])(D5[f + 1], D5[f + 2], D5[f + 3], D5[f + 4]);
            Lmb = c;
            o5(D5, c);
            o5(d, 0);
            Amb(b, a.props);
            (a.props.skip || a.props.skipchildren) && s5.hasChildNodes()
              ? (w5 = s5.lastChild)
              : M5(a.children);
            v5(null);
            w5 = s5;
            s5 = s5.parentNode;
            a.gq && (a.gq = !1);
            Fmb(b, a.props);
            return b;
          }
          a.type === Llb ? M5(a.children) : E5.PN(a) || E5.bZ(a);
        }
    },
    Mmb = function (a) {
      var b = O5;
      try {
        return (O5 = !1), a();
      } finally {
        O5 = b;
      }
    },
    Nmb = function (a) {
      var b = O5;
      try {
        return (O5 = !0), a();
      } finally {
        O5 = b;
      }
    },
    P5 = function (a) {
      this.props = a;
      this.C = !1;
    },
    Pmb = function () {
      if (O5) throw Error(Omb);
      return Q5;
    },
    R5 = function (a) {
      P5.call(this, a);
      var b = this;
      this.zz = [];
      this.D = 0;
      G5(function (c, d) {
        b.G = c;
        b.K = d;
      });
      lmb(function () {
        Qmb(b, b.el);
      });
    },
    Qmb = function (a, b) {
      if (!a.C && b) {
        a.C = !0;
        n5.UG(a);
        try {
          a.UG();
        } catch (e) {
          var c, d;
          null == (d = E5.rD) ||
            d.call(E5, null == (c = a.j) ? void 0 : c.ey, e);
        }
        a.el = null;
        b.__instance && delete b.__instance;
      }
    },
    Rmb = function (a) {
      for (var b = 0; b < a.length; b++) {
        var c = void 0,
          d = void 0,
          e = void 0,
          f = a[b];
        f &&
          (null == (e = f._disposeRef) || e.call(f),
          null == (d = f.ys) || d.call(f),
          f.__instance &&
            ((d = f.__instance), Qmb(d, f), null == (c = d.G) || c.call(d)),
          Rmb(f.childNodes));
      }
    },
    Tmb = function (a) {
      1 === Smb.push(a) &&
        requestAnimationFrame(function () {
          setTimeout(function () {
            var b = [].concat(g.pa(Smb));
            Smb = [];
            b = g.u(b);
            for (var c = b.next(); !c.done; c = b.next()) {
              c = c.value;
              try {
                Rmb(c);
              } catch (e) {
                var d = (c = void 0);
                null == (d = (c = E5).rD) || d.call(c, "unknown", e);
              }
            }
          });
        });
    },
    T5 = function (a, b) {
      return S5.apply(null, [a, b].concat(g.pa(g.Ja.apply(2, arguments))));
    },
    U5 = function (a, b) {
      var c = S5;
      S5 = a;
      try {
        return b();
      } finally {
        S5 = c;
      }
    },
    Umb = function (a) {
      a = document.createTextNode(String(a));
      a.nU = !0;
      return a;
    },
    V5 = function (a) {
      a = typeof a;
      return "string" === a || "number" === a || "boolean" === a;
    },
    Vmb = function (a, b) {
      a.parentElement && a.parentElement.replaceChild(b, a);
      return b;
    },
    Wmb = function (a, b) {
      var c = a[0].parentElement;
      if (c)
        if (a[0].previousSibling || a[a.length - 1].nextSibling) {
          c.insertBefore(b, a[0]);
          for (var d = a.length - 1; 0 <= d; d--) c.removeChild(a[d]);
        } else (c.textContent = ""), c.appendChild(b);
      return b;
    },
    Xmb = function (a, b) {
      if (a[0].parentElement)
        for (
          var c = a[0].parentElement,
            d = b.length,
            e = a.length,
            f = d,
            h = 0,
            l = 0,
            m = a[e - 1].nextSibling,
            n = null;
          h < e || l < f;

        )
          if (a[h] === b[l]) h++, l++;
          else {
            for (; a[e - 1] === b[f - 1]; ) e--, f--;
            if (e === h)
              for (
                var p = f < d ? (l ? b[l - 1].nextSibling : b[f - l]) : m;
                l < f;

              )
                c.insertBefore(b[l++], p);
            else if (f === l)
              for (; h < e; ) (n && n.has(a[h])) || c.removeChild(a[h]), h++;
            else if (a[h] === b[f - 1] && b[l] === a[e - 1])
              (p = a[--e].nextSibling),
                c.insertBefore(b[l++], a[h++].nextSibling),
                c.insertBefore(b[--f], p),
                (a[e] = b[f]);
            else {
              if (!n) for (n = new Map(), p = l; p < f; ) n.set(b[p], p++);
              p = n.get(a[h]);
              if (null == p) c.removeChild(a[h]), h++;
              else if (l < p && p < f) {
                for (
                  var q = h, r = 1, t = void 0;
                  ++q < e && q < f && null != (t = n.get(a[q])) && t === p + r;

                )
                  r++;
                if (r > p - l)
                  for (q = a[h]; l < p; ) c.insertBefore(b[l++], q);
                else c.replaceChild(b[l++], a[h++]);
              } else h++;
            }
          }
      return b;
    },
    $mb = function (a) {
      var b = m5,
        c;
      tmb(function () {
        var d = Jlb(function () {
          return U5(W5, a);
        }, b);
        d = Ymb(c, d);
        Zmb(c, d);
        c = d;
      });
      return c;
    },
    Zmb = function (a, b) {
      if (a) {
        a = Array.isArray(a) ? a[0] : a;
        var c = a.uy,
          d = a.ys;
        a.ys = void 0;
        a = Array.isArray(b) ? b[0] : b;
        a.uy = c;
        a.uy && (a.uy.OX = a === b ? 1 : b.length);
        a.ys = d;
      }
    },
    Ymb = function (a, b) {
      for (; "function" === typeof b; ) b = b();
      if (null == b ? 0 : b.type)
        throw Error("Encountered a VNode when only real nodes are expected.");
      null == a
        ? (a =
            null == b
              ? document.createTextNode("")
              : V5(b)
              ? Umb(b)
              : b instanceof Node
              ? b
              : 0 === b.length
              ? document.createTextNode("")
              : X5(b))
        : a instanceof Node
        ? null == b
          ? (a = Vmb(a, document.createTextNode("")))
          : V5(b)
          ? a.textContent !== String(b) && (a.textContent = String(b))
          : (a =
              b instanceof Node
                ? Vmb(a, b)
                : 0 === b.length
                ? Vmb(a, document.createTextNode(""))
                : Xmb([a], X5(b)))
        : (a =
            null == b
              ? Wmb(a, document.createTextNode(""))
              : V5(b)
              ? Wmb(a, Umb(b))
              : b instanceof Node
              ? Xmb(a, [b])
              : 0 === b.length
              ? Wmb(a, document.createTextNode(""))
              : Xmb(a, X5(b)));
      return a;
    },
    X5 = function (a, b) {
      b = void 0 === b ? [] : b;
      if (null == a) return b;
      V5(a) && (a = Umb(a));
      if (a instanceof Node) return anb(b, a), b;
      if (Array.isArray(a)) {
        a = g.u(a);
        for (var c = a.next(); !c.done; c = a.next()) X5(c.value, b);
        return b;
      }
      if ("function" === typeof a) return X5($mb(a), b);
      if (null == a ? 0 : a.type) {
        var d = a;
        a = U5(W5, function () {
          return T5.apply(null, [d.type, d.props].concat(g.pa(d.children)));
        });
        return X5(a, b);
      }
      throw Error("Unrecognized JSXResult type in flattening.");
    },
    anb = function (a, b) {
      Array.isArray(a) ? a.push(b) : a.appendChild(b);
    },
    cnb = function (a) {
      var b = a.type;
      if (!b.l6) return !1;
      a.props.children = a.children[0];
      var c,
        d = null != (c = a.props.idomKey) ? c : a.type,
        e;
      if (t5() && (null == (e = t5().uy) ? void 0 : e.key) === d) {
        c = t5().uy;
        if (!c) throw Error("Reactive data has been lost.");
        if (!b.x_) {
          for (a = 0; a < c.OX; a++) w5 = t5();
          return !0;
        }
        b = b.x_(a.props);
        a = a.props;
        if ((c = c.props)) (c.children = a.children), (c.A4 = a.A4);
        M5(b);
        return !0;
      }
      a = bnb(a.type, a.props);
      a = Array.isArray(a) ? a : [a];
      a = g.u(a);
      for (b = a.next(); !b.done; b = a.next())
        s5.insertBefore(b.value, t5()), (w5 = t5());
      return !0;
    },
    bnb = function (a, b) {
      var c;
      G5(function (d) {
        c = U5(W5, function () {
          return Nmb(function () {
            return a(b);
          });
        });
        var e = Array.isArray(c) ? c[0] : c,
          f,
          h = null != (f = null == b ? void 0 : b.idomKey) ? f : a;
        f = c !== e;
        var l = a.x_;
        e.ys = d;
        e.uy = { key: h, props: l ? b : void 0, OX: f ? c.length : 1 };
        l ||
          dnb(e) ||
          (e.__incrementalDOMData || (e.__incrementalDOMData = {}),
          (e.__incrementalDOMData.key = h));
      });
      return c;
    },
    dnb = function (a) {
      var b;
      return null == (b = a.__incrementalDOMData) ? void 0 : b.key;
    },
    fnb = function (a, b) {
      var c = g.Ja.apply(2, arguments);
      if (a === Llb) return c;
      if ("function" === typeof a) {
        var d = b;
        0 < c.length &&
          (null != d || (d = {}),
          1 === c.length ? (d.children = c[0]) : (d.children = c));
        c = enb(a, d);
        !1 === c && (c = bnb(a, d));
        return c;
      }
      d = document.createElement(a);
      for (var e in b) L5(d, e, b[e]);
      Amb(d, b);
      X5(c, d);
      Fmb(d, b);
      return d;
    },
    enb = function (a, b) {
      if (a.ifb || a.l6) return !1;
      var c = new R5(null != b ? b : {});
      c.B = a;
      var d = Mmb(function () {
        return c.Mw(b);
      });
      if (!(d instanceof HTMLElement)) return d;
      d.__instance = c;
      c.el = d;
      c.j = a;
      a.ey = d.tagName.toLowerCase();
      Fmb(d, { el: c.HL });
      n5.CC(c);
      return d;
    },
    gnb = function (a) {
      umb(function () {
        var b = a();
        b && lmb(b);
      });
    },
    hnb = function (a) {
      var b = null,
        c;
      return {
        value: null,
        F8: function (d) {
          if (c && d !== c) {
            var e;
            null == (e = b) || e();
            c._disposeRef = void 0;
          }
          c = d;
          b = a(d) || null;
        },
        z9: function () {
          var d;
          null == (d = b) || d();
        },
      };
    },
    knb = function (a) {
      var b = Pmb();
      if (null == b) throw Error(inb);
      var c = b.D++;
      b.zz || (b.zz = []);
      var d = b.zz;
      d[c] || (d[c] = { key: a, host: b });
      if (a !== d[c].key) throw Error(jnb);
      return d[c];
    },
    lnb = function (a, b) {
      return (
        !a ||
        a.length !== (null == b ? void 0 : b.length) ||
        a.some(function (c, d) {
          return c !== b[d];
        })
      );
    },
    Y5 = function (a, b) {
      mnb(a, b);
    },
    nnb = function (a) {
      O5
        ? gnb(a)
        : mnb(function () {
            return Mmb(a);
          }, []);
    },
    mnb = function (a, b) {
      var c = knb("setLifecycle"),
        d = Pmb();
      lnb(c.Ig, b) &&
        ((c.Ig = b), (c.HY = a), d.sy || (d.sy = []), d.sy.push(c));
    },
    pnb = function (a) {
      var b = [].concat(g.pa(a));
      a.length = 0;
      a = g.u(b);
      for (b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        onb(b);
        var c = b.HY;
        b.HY = null;
        if ((c = null == c ? void 0 : c())) b.GY = c;
      }
    },
    onb = function (a) {
      var b = a.GY;
      a.GY = null;
      null == b || b();
    },
    Z5 = function (a) {
      var b = [];
      if (O5) return a();
      var c = knb("useMemoInternal");
      lnb(c.Ig, b) && ((c.Ig = b), (c.value = a()));
      return c.value;
    },
    $5 = function () {
      var a = Z5(function () {
        return hnb(function (b) {
          a.value = b;
          return function () {
            a.value = null;
          };
        });
      });
      return a;
    },
    qnb = function (a) {
      return {
        a5: function () {
          return function (b) {
            !0 !== a(b) && b.stopPropagation();
          };
        },
      };
    },
    rnb = function () {
      return Z5(function () {
        var a = null;
        return {
          get value() {
            return a;
          },
          set value(b) {
            if (null !== Q5)
              throw Error("Can't update local vars during rendering");
            a = b;
          },
        };
      });
    },
    a6 = function (a) {
      var b = Pmb(),
        c = Z5(function () {
          return { value: "function" === typeof a ? a() : a };
        });
      return [
        c.value,
        function (d) {
          if (null !== Q5) throw Error("Can't set state during rendering");
          c.value = "function" === typeof d ? d(c.value) : d;
          b.IL = { dP: b.state, mO: !0 };
          U5(Klb, function () {
            if (b.el) {
              var e,
                f = {
                  props: b.props,
                  type: b.j,
                  children: null != (e = b.props.children) ? e : [],
                };
              try {
                Imb(b.el, f, !0);
              } catch (m) {
                var h, l;
                null == (l = E5.rD) ||
                  l.call(E5, null == (h = b.j) ? void 0 : h.ey, m);
              }
            }
          });
        },
      ];
    },
    snb = function (a) {
      function b() {
        var l = g.tU(a.J)
          ? "\u1ea8n ph\u1ea7n video ng\u1eafn kh\u00e1c"
          : "\u1ea8n ph\u1ea7n Video kh\u00e1c";
        e(l);
      }
      var c = g.u(a6("\u1ea8n ph\u1ea7n Video kh\u00e1c")),
        d = c.next().value,
        e = c.next().value;
      Y5(
        function () {
          var l = a.J;
          l.addEventListener("videodatachange", b);
          return function () {
            l.removeEventListener("videodatachange", b);
          };
        },
        [a.J]
      );
      var f = Z5(function () {
          return new g.pG(g.CG()).element;
        }),
        h = $5();
      nnb(function () {
        h.value.appendChild(f);
      });
      return T5(
        "button",
        {
          class: "ytp-button ytp-collapse",
          "aria-label": d,
          "on:click": qnb(function () {
            a.action && a.action();
          }),
        },
        T5("div", { class: "ytp-collapse-icon", el: h, skip: !0 })
      );
    },
    tnb = function (a) {
      function b() {
        var h = g.tU(a.J) ? "Video ng\u1eafn kh\u00e1c" : "Video kh\u00e1c";
        e(h);
      }
      var c = g.u(a6("Video kh\u00e1c")),
        d = c.next().value,
        e = c.next().value,
        f = $5();
      Y5(
        function () {
          a.CQ && (a.CQ.value = f.value);
        },
        [a.CQ]
      );
      Y5(
        function () {
          var h = a.J;
          h.addEventListener("videodatachange", b);
          return function () {
            h.removeEventListener("videodatachange", b);
          };
        },
        [a.J]
      );
      return T5(
        "button",
        {
          el: f,
          class: "ytp-button ytp-expand",
          "on:click": qnb(function () {
            a.action && a.action();
          }),
        },
        d
      );
    },
    unb = function (a, b) {
      var c = rnb();
      Y5(
        function () {
          var d = new g.p2(a, b);
          d.B = !0;
          c.value = d;
          return function () {
            var e;
            null == (e = c.value) || e.dispose();
          };
        },
        [a, b]
      );
      return c;
    },
    vnb = function (a) {
      function b(x) {
        a: {
          var B = g.u([1, 16, 32]);
          for (var G = B.next(); !G.done; G = B.next())
            if (g.aH(x, G.value)) {
              B = !0;
              break a;
            }
          B = !1;
        }
        if (!B) {
          var F;
          null != (F = p.value) &&
            F.vD() &&
            h(g.aH(x, 4) && !g.aH(x, 2) && !g.aH(x, 1024));
        }
      }
      function c() {
        b(a.J.Tb());
      }
      function d(x) {
        b(x.state);
      }
      var e = g.u(a6(!1)),
        f = e.next().value,
        h = e.next().value,
        l = g.u(a6(!1));
      e = l.next().value;
      var m = l.next().value,
        n = $5(),
        p = unb(a.J, a.ub),
        q = $5();
      l = rnb();
      var r = rnb();
      Y5(
        function () {
          var x = a.J,
            B = g.tU(x) ? 157212 : 172777;
          r.value = new g.J();
          x.zb(q.value, r.value, B);
          x.addEventListener("presentingplayerstatechange", d);
          x.addEventListener("videodatachange", c);
          B = "0" === x.W().controlsType;
          g.mu(x.getRootNode(), "ytp-pause-overlay-controls-hidden", B);
          return function () {
            x.removeEventListener("videodatachange", c);
            x.removeEventListener("presentingplayerstatechange", d);
            var G;
            null == (G = r.value) || G.dispose();
          };
        },
        [a.J]
      );
      Y5(
        function () {
          var x;
          null == (x = p.value) || x.Ga(n.value);
        },
        [p]
      );
      var t = a.J;
      if (f)
        if ((g.mu(t.getRootNode(), "ytp-expand-pause-overlay", !e), e))
          l.value.focus();
        else {
          var v = p.value;
          g.q2(v);
          v.show();
          q.value.focus();
        }
      q.value && t.Xa(q.value, f && !e);
      return T5(
        "ytp-pause-overlay",
        { el: q, class: "ytp-pause-overlay", "aria-hidden": !f },
        T5(snb, {
          J: a.J,
          ub: a.ub,
          action: function () {
            m(!0);
          },
        }),
        T5(tnb, {
          J: a.J,
          ub: a.ub,
          action: function () {
            m(!1);
          },
          CQ: l,
        }),
        T5("div", { el: n, skip: !0 })
      );
    },
    wnb = function (a) {
      g.T.call(this, { I: "div", T: "ytp-related-on-error-overlay" });
      var b = this;
      this.api = a;
      this.K = this.B = 0;
      this.G = new g.ZK(this);
      this.j = [];
      this.suggestionData = [];
      this.columns = this.containerWidth = 0;
      this.title = new g.T({
        I: "h2",
        T: "ytp-related-title",
        Aa: "{{title}}",
      });
      this.previous = new g.T({
        I: "button",
        Na: ["ytp-button", "ytp-previous"],
        Y: {
          "aria-label":
            "Hi\u1ec3n th\u1ecb c\u00e1c video \u0111\u1ec1 xu\u1ea5t tr\u01b0\u1edbc \u0111\u00f3",
        },
        X: [g.yG()],
      });
      this.qa = new g.o2(function (f) {
        b.suggestions.element.scrollLeft = -f;
      });
      this.D = this.C = 0;
      this.S = !0;
      this.next = new g.T({
        I: "button",
        Na: ["ytp-button", "ytp-next"],
        Y: { "aria-label": "Hi\u1ec7n th\u00eam video \u0111\u1ec1 xu\u1ea5t" },
        X: [g.zG()],
      });
      g.L(this, this.G);
      a = a.W();
      this.ea = a.D;
      g.L(this, this.title);
      this.title.Ga(this.element);
      this.suggestions = new g.T({ I: "div", T: "ytp-suggestions" });
      g.L(this, this.suggestions);
      this.suggestions.Ga(this.element);
      g.L(this, this.previous);
      this.previous.Ga(this.element);
      this.previous.Ua("click", this.L0, this);
      g.L(this, this.qa);
      for (var c = { Dz: 0 }; 16 > c.Dz; c = { Dz: c.Dz }, c.Dz++) {
        var d = new g.T({
          I: "a",
          T: "ytp-suggestion-link",
          Y: { href: "{{link}}", target: a.ea, "aria-label": "{{aria_label}}" },
          X: [
            {
              I: "div",
              T: "ytp-suggestion-image",
              X: [
                {
                  I: "div",
                  Y: { "data-is-live": "{{is_live}}" },
                  T: "ytp-suggestion-duration",
                  Aa: "{{duration}}",
                },
              ],
            },
            {
              I: "div",
              T: "ytp-suggestion-title",
              Y: { title: "{{hover_title}}" },
              Aa: "{{title}}",
            },
            { I: "div", T: "ytp-suggestion-author", Aa: "{{views_or_author}}" },
          ],
        });
        g.L(this, d);
        d.Ga(this.suggestions.element);
        var e = d.Ha("ytp-suggestion-link");
        g.yr(e, "transitionDelay", c.Dz / 20 + "s");
        this.G.V(
          e,
          "click",
          (function (f) {
            return function (h) {
              var l = f.Dz,
                m = b.suggestionData[l],
                n = m.sessionData;
              g.eS(b.api.W()) &&
              b.api.N(
                "web_player_log_click_before_generating_ve_conversion_params"
              )
                ? (b.api.wb(b.j[l].element),
                  (l = m.Qk()),
                  (m = {}),
                  g.XRa(b.api, m, "emb_rel_err"),
                  (l = g.Dl(l, m)),
                  g.QU(l, b.api, h))
                : g.PU(h, b.api, b.ea, n || void 0) &&
                  b.api.Ao(m.videoId, n, m.playlistId);
            };
          })(c)
        );
        this.j.push(d);
      }
      g.L(this, this.next);
      this.next.Ga(this.element);
      this.next.Ua("click", this.K0, this);
      this.G.V(this.api, "videodatachange", this.onVideoDataChange);
      this.resize(this.api.tb().getPlayerSize());
      this.onVideoDataChange();
      this.show();
    },
    xnb = function (a, b) {
      if (
        a.api
          .W()
          .N("web_player_log_click_before_generating_ve_conversion_params")
      )
        for (
          var c = Math.floor(-a.C / (a.D + a.B)),
            d = Math.min(c + a.columns, a.suggestionData.length) - 1;
          c <= d;
          c++
        )
          a.api.Xa(a.j[c].element, b);
    },
    ynb = function (a) {
      a.next.element.style.bottom = a.K + "px";
      a.previous.element.style.bottom = a.K + "px";
      var b = a.C,
        c = a.containerWidth - a.suggestionData.length * (a.D + a.B);
      g.mu(a.element, "ytp-scroll-min", 0 <= b);
      g.mu(a.element, "ytp-scroll-max", b <= c);
    },
    znb = function (a) {
      for (var b = 0; b < a.suggestionData.length; b++) {
        var c = a.suggestionData[b],
          d = a.j[b],
          e = c.shortViewCount ? c.shortViewCount : c.author,
          f = c.Qk(),
          h = a.api.W();
        if (
          g.eS(h) &&
          !h.N("web_player_log_click_before_generating_ve_conversion_params")
        ) {
          var l = {};
          g.cU(a.api, "addEmbedsConversionTrackingParams", [l]);
          f = g.Dl(f, g.FP(l, "emb_rel_err"));
        }
        d.element.style.display = "";
        l = d.Ha("ytp-suggestion-title");
        g.Bu.test(c.title)
          ? (l.dir = "rtl")
          : g.ceb.test(c.title) && (l.dir = "ltr");
        l = d.Ha("ytp-suggestion-author");
        g.Bu.test(e) ? (l.dir = "rtl") : g.ceb.test(e) && (l.dir = "ltr");
        d.update({
          views_or_author: e,
          duration: c.isLivePlayback
            ? "Tr\u1ef1c ti\u1ebfp"
            : c.lengthSeconds
            ? g.jH(c.lengthSeconds)
            : "",
          link: f,
          hover_title: c.title,
          title: c.title,
          aria_label: c.ariaLabel || null,
          is_live: c.isLivePlayback,
        });
        e = d.Ha("ytp-suggestion-image");
        f = c.Lg();
        e.style.backgroundImage = f ? "url(" + f + ")" : "";
        h.N("web_player_log_click_before_generating_ve_conversion_params") &&
          (a.api.qg(d.element, d),
          (c = (c = c.sessionData) && c.itct) && a.api.Gg(d.element, c));
      }
      for (; b < a.j.length; b++) a.j[b].element.style.display = "none";
      ynb(a);
    },
    b6 = function (a) {
      g.UV.call(this, a);
      var b = this;
      this.j = null;
      var c = a.W(),
        d = {
          I: "svg",
          Y: {
            fill: "#fff",
            height: "100%",
            viewBox: "0 0 24 24",
            width: "100%",
          },
          X: [
            { I: "path", Y: { d: "M0 0h24v24H0V0z", fill: "none" } },
            {
              I: "path",
              Y: {
                d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z",
              },
            },
          ],
        };
      g.mS(c) &&
        (d = {
          I: "svg",
          Y: {
            fill: "none",
            height: "100%",
            viewBox: "0 0 25 25",
            width: "100%",
          },
          X: [
            {
              I: "g",
              Y: { "clip-path": "url(#clip0)", fill: "#fff" },
              X: [
                {
                  I: "path",
                  Y: {
                    d: "M12.57.98C6.21.98 1.05 6.14 1.05 12.5c0 6.36 5.16 11.52 11.52 11.52 6.36 0 11.52-5.16 11.52-11.52C24.09 6.14 18.93.98 12.57.98zm0 18.34c-3.77 0-6.82-3.05-6.82-6.82 0-3.77 3.05-6.82 6.82-6.82 3.77 0 6.82 3.05 6.82 6.82 0 3.77-3.05 6.82-6.82 6.82z",
                  },
                },
                {
                  I: "path",
                  Y: {
                    d: "M12.57 6.52c-3.29 0-5.98 2.68-5.98 5.98 0 3.3 2.68 5.98 5.98 5.98 3.3 0 5.98-2.68 5.98-5.98 0-3.3-2.69-5.98-5.98-5.98zm-2.25 9.38V9.1l5.88 3.4-5.88 3.4z",
                  },
                },
              ],
            },
            {
              I: "defs",
              X: [
                {
                  I: "clipPath",
                  Y: { id: "clip0" },
                  X: [
                    {
                      I: "path",
                      Y: {
                        d: "M0 0h24v24H0z",
                        fill: "#fff",
                        transform: "translate(.57 .5)",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        });
      var e = { target: c.ea },
        f = ["ytp-small-redirect"];
      c.C
        ? f.push("no-link")
        : ((c = g.CS(c)),
          (e.href = c),
          (e["aria-label"] =
            "Truy c\u1eadp v\u00e0o YouTube \u0111\u1ec3 t\u00ecm ki\u1ebfm nhi\u1ec1u video h\u01a1n"));
      var h = new g.T({ I: "a", Na: f, Y: e, X: [d] });
      h.Ga(this.element);
      a.zb(h.element, this, 178053);
      this.V(h.element, "click", function (l) {
        Anb(b, l, h.element);
      });
      g.L(this, h);
      a.W().C ||
        ((this.j = new wnb(a)), this.j.Ga(this.element), g.L(this, this.j));
      this.V(a, "videodatachange", function () {
        b.show();
      });
      this.resize(this.api.tb().getPlayerSize());
    },
    Anb = function (a, b, c) {
      b.preventDefault();
      a.api.wb(c);
      b = c.getAttribute("href");
      c = {};
      g.cU(a.api, "addEmbedsConversionTrackingParams", [c]);
      b = g.jd(c) ? b : g.Dl(b, c);
      g.In(b);
    },
    Bnb = function (a, b) {
      a.Ha("ytp-error-content").style.paddingTop = "0px";
      var c = a.Ha("ytp-error-content"),
        d = c.clientHeight;
      a.j && a.j.resize(b, b.height - d);
      c.style.paddingTop =
        (b.height - (a.j ? a.j.element.clientHeight : 0)) / 2 - d / 2 + "px";
    },
    Enb = function (a, b) {
      var c = a.api.W(),
        d;
      b.reason &&
        (Cnb(b.reason) ? (d = g.xG(b.reason)) : (d = g.VV(g.wG(b.reason))),
        a.oe(d, "content"));
      var e;
      b.subreason &&
        (Cnb(b.subreason)
          ? (e = g.xG(b.subreason))
          : (e = g.VV(g.wG(b.subreason))),
        a.oe(e, "subreason"));
      if (b.proceedButton && b.proceedButton.buttonRenderer) {
        d = a.Ha("ytp-error-content-wrap-subreason");
        b = b.proceedButton.buttonRenderer;
        var f = g.lf("A");
        if (
          b.text &&
          b.text.simpleText &&
          ((e = b.text.simpleText),
          (f.textContent = e),
          !Dnb(d, e) && (!c.C || c.embedsErrorLinks))
        ) {
          var h;
          c =
            null == (h = g.S(null == b ? void 0 : b.navigationEndpoint, g.IG))
              ? void 0
              : h.url;
          var l;
          h =
            null == (l = g.S(null == b ? void 0 : b.navigationEndpoint, g.IG))
              ? void 0
              : l.target;
          c &&
            (f.setAttribute("href", c),
            a.api.zb(f, a, 178424),
            a.V(f, "click", function (m) {
              Anb(a, m, f);
            }));
          h && f.setAttribute("target", h);
          l = g.lf("DIV");
          l.appendChild(f);
          d.appendChild(l);
        }
      }
    },
    Cnb = function (a) {
      if (a.runs)
        for (var b = 0; b < a.runs.length; b++)
          if (a.runs[b].navigationEndpoint) return !0;
      return !1;
    },
    Dnb = function (a, b) {
      a = g.Xe("A", a);
      for (var c = 0; c < a.length; c++) if (a[c].textContent === b) return !0;
      return !1;
    },
    c6 = function (a, b) {
      g.T.call(this, {
        I: "a",
        Na: ["ytp-impression-link"],
        Y: {
          target: "{{target}}",
          href: "{{url}}",
          "aria-label": "Xem tr\u00ean YouTube",
        },
        X: [
          {
            I: "div",
            T: "ytp-impression-link-content",
            Y: { "aria-hidden": "true" },
            X: [
              { I: "div", T: "ytp-impression-link-text", Aa: "Xem tr\u00ean" },
              { I: "div", T: "ytp-impression-link-logo", X: [Ilb()] },
            ],
          },
        ],
      });
      this.api = a;
      this.ub = b;
      this.updateValue("target", a.W().ea);
      this.api.zb(this.element, this, 96714);
      this.V(this.api, "presentingplayerstatechange", this.Xi);
      this.V(this.api, "videoplayerreset", this.j);
      this.V(this.element, "click", this.onClick);
      this.j();
    },
    Fnb = function (a) {
      var b = {};
      g.cU(a.api, "addEmbedsConversionTrackingParams", [b]);
      return g.Dl(a.api.getVideoUrl(), g.FP(b, "emb_imp_woyt"));
    },
    d6 = function (a) {
      g.T.call(this, {
        I: "div",
        Na: ["ytp-mobile-a11y-hidden-seek-button"],
        X: [
          {
            I: "button",
            Na: ["ytp-mobile-a11y-hidden-seek-button-rewind", "ytp-button"],
            Y: {
              "aria-label": "Tua l\u1ea1i 10 gi\u00e2y",
              "aria-hidden": "false",
            },
          },
          {
            I: "button",
            Na: ["ytp-mobile-a11y-hidden-seek-button-forward", "ytp-button"],
            Y: {
              "aria-label": "Tua \u0111i 10 gi\u00e2y",
              "aria-hidden": "false",
            },
          },
        ],
      });
      this.api = a;
      this.j = this.Ha("ytp-mobile-a11y-hidden-seek-button-rewind");
      this.forwardButton = this.Ha(
        "ytp-mobile-a11y-hidden-seek-button-forward"
      );
      this.api.zb(this.j, this, 141902);
      this.api.zb(this.forwardButton, this, 141903);
      this.V(this.api, "presentingplayerstatechange", this.Xi);
      this.V(this.j, "click", this.B);
      this.V(this.forwardButton, "click", this.C);
      this.Xi();
    },
    e6 = function (a) {
      g.T.call(this, {
        I: "div",
        T: "ytp-muted-autoplay-endscreen-overlay",
        X: [
          {
            I: "div",
            T: "ytp-muted-autoplay-end-panel",
            X: [
              {
                I: "button",
                Na: ["ytp-muted-autoplay-end-text", "ytp-button"],
                Aa: "{{text}}",
              },
            ],
          },
        ],
      });
      this.api = a;
      this.D = this.Ha("ytp-muted-autoplay-end-panel");
      this.B = !1;
      this.api.zb(this.element, this, 52428);
      this.V(this.api, "presentingplayerstatechange", this.C);
      this.V(a, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
      this.Ua("click", this.onClick);
      this.hide();
    },
    f6 = function (a) {
      var b = a.W();
      g.T.call(this, {
        I: "a",
        Na: ["ytp-watermark", "yt-uix-sessionlink"],
        Y: {
          target: b.ea,
          href: "{{url}}",
          "aria-label": g.vK("Xem tr\u00ean $WEBSITE", { WEBSITE: g.rS(b) }),
          "data-sessionlink": "feature=player-watermark",
        },
        X: [Ilb()],
      });
      this.api = a;
      this.j = null;
      this.B = !1;
      this.state = a.Tb();
      a.zb(this.element, this, 76758);
      this.V(a, "videodatachange", this.B_);
      this.V(a, "videodatachange", this.onVideoDataChange);
      this.V(a, "presentingplayerstatechange", this.onStateChange);
      this.V(a, "appresize", this.Nb);
      this.Gc(this.state);
      this.onVideoDataChange();
      this.Nb(a.tb().getPlayerSize());
    },
    Inb = function (a) {
      g.T.call(this, {
        I: "div",
        T: "ytp-muted-autoplay-overlay",
        X: [
          {
            I: "div",
            T: "ytp-muted-autoplay-bottom-buttons",
            X: [
              {
                I: "button",
                Na: ["ytp-muted-autoplay-equalizer", "ytp-button"],
                Y: {
                  "aria-label":
                    "Ch\u1ec9 b\u00e1o cho bi\u1ebft video \u0111ang ph\u00e1t \u1edf ch\u1ebf \u0111\u1ed9 t\u1eaft ti\u1ebfng",
                },
                X: [
                  {
                    I: "div",
                    Na: ["ytp-muted-autoplay-equalizer-icon"],
                    X: [
                      {
                        I: "svg",
                        Y: {
                          height: "100%",
                          version: "1.1",
                          viewBox: "-4 -4 24 24",
                          width: "100%",
                        },
                        X: [
                          {
                            I: "g",
                            Y: { fill: "#fff" },
                            X: [
                              {
                                I: "rect",
                                T: "ytp-equalizer-bar-left",
                                Y: { height: "9", width: "4", x: "1", y: "7" },
                              },
                              {
                                I: "rect",
                                T: "ytp-equalizer-bar-middle",
                                Y: { height: "14", width: "4", x: "6", y: "2" },
                              },
                              {
                                I: "rect",
                                T: "ytp-equalizer-bar-right",
                                Y: {
                                  height: "12",
                                  width: "4",
                                  x: "11",
                                  y: "4",
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });
      var b = this;
      this.api = a;
      this.bottomButtons = this.Ha("ytp-muted-autoplay-bottom-buttons");
      this.Ha("ytp-muted-autoplay-equalizer");
      this.C = new g.au(this.S5, 4e3, this);
      this.B = !1;
      a.zb(this.element, this, 39306);
      this.V(a, "presentingplayerstatechange", this.JK);
      this.V(a, "onMutedAutoplayStarts", function () {
        Gnb(b);
        b.JK();
        Hnb(b);
        b.B = !1;
      });
      this.V(a, "onAutoplayBlocked", this.onAutoplayBlocked);
      this.Ua("click", this.onClick);
      this.V(a, "onMutedAutoplayEnds", this.onMutedAutoplayEnds);
      this.hide();
      g.iU(a.app) && (Gnb(this), this.JK(), Hnb(this));
    },
    Hnb = function (a) {
      a.Ib && a.j && (a.j.show(), a.C.start());
    },
    Gnb = function (a) {
      a.watermark ||
        ((a.watermark = new f6(a.api)),
        g.L(a, a.watermark),
        a.watermark.Ga(a.bottomButtons, 0),
        g.mu(a.watermark.element, "ytp-muted-autoplay-watermark", !0),
        (a.j = new g.VG(a.watermark, 0, !0, 100)),
        g.L(a, a.j));
    },
    g6 = function (a, b) {
      g.T.call(this, {
        I: "div",
        T: "ytp-pause-overlay",
        Y: { tabIndex: "-1" },
      });
      var c = this;
      this.api = a;
      this.C = new g.ZK(this);
      this.D = new g.VG(
        this,
        1e3,
        !1,
        100,
        function () {
          c.j.B = !1;
        },
        function () {
          c.j.B = !0;
        }
      );
      this.B = !1;
      this.expandButton = new g.T({
        I: "button",
        Na: ["ytp-button", "ytp-expand"],
        Aa: g.tU(this.api) ? "Video ng\u1eafn kh\u00e1c" : "Video kh\u00e1c",
      });
      "0" === a.W().controlsType &&
        g.iu(a.getRootNode(), "ytp-pause-overlay-controls-hidden");
      g.L(this, this.C);
      g.L(this, this.D);
      var d = new g.T({
        I: "button",
        Na: ["ytp-button", "ytp-collapse"],
        Y: {
          "aria-label": g.tU(this.api)
            ? "\u1ea8n ph\u1ea7n video ng\u1eafn kh\u00e1c"
            : "\u1ea8n ph\u1ea7n Video kh\u00e1c",
        },
        X: [{ I: "div", T: "ytp-collapse-icon", X: [g.CG()] }],
      });
      g.L(this, d);
      d.Ga(this.element);
      d.Ua("click", this.G, this);
      g.L(this, this.expandButton);
      this.expandButton.Ga(this.element);
      this.expandButton.Ua("click", this.K, this);
      this.j = new g.p2(a, b);
      g.L(this, this.j);
      this.j.B = !1;
      this.j.Ga(this.element);
      g.tU(this.api)
        ? this.api.zb(this.element, this, 157212)
        : this.api.zb(this.element, this, 172777);
      this.C.V(this.api, "presentingplayerstatechange", this.Sa);
      this.C.V(this.api, "videodatachange", this.Sa);
      this.hide();
    },
    h6 = function (a) {
      g.T.call(this, {
        I: "div",
        Na: ["ytp-player-content", "ytp-iv-player-content"],
        X: [
          {
            I: "div",
            T: "ytp-countdown-timer",
            X: [
              {
                I: "svg",
                Y: {
                  height: "100%",
                  version: "1.1",
                  viewBox: "0 0 72 72",
                  width: "100%",
                },
                X: [
                  {
                    I: "circle",
                    T: "ytp-svg-countdown-timer-ring",
                    Y: {
                      cx: "-36",
                      cy: "36",
                      "fill-opacity": "0",
                      r: "33.5",
                      stroke: "#FFFFFF",
                      "stroke-dasharray": "211",
                      "stroke-dashoffset": "-211",
                      "stroke-width": "4",
                      transform: "rotate(-90)",
                    },
                  },
                  {
                    I: "circle",
                    T: "ytp-svg-countdown-timer-background",
                    Y: {
                      cx: "-36",
                      cy: "36",
                      "fill-opacity": "0",
                      r: "33.5",
                      stroke: "#FFFFFF",
                      "stroke-opacity": "0.3",
                      "stroke-width": "4",
                      transform: "rotate(-90)",
                    },
                  },
                ],
              },
              { I: "span", T: "ytp-countdown-timer-time", Aa: "{{duration}}" },
            ],
          },
        ],
      });
      this.api = a;
      this.K = this.Ha("ytp-svg-countdown-timer-ring");
      this.j = null;
      this.D = this.C = 0;
      this.B = !1;
      this.G = 0;
      this.api.zb(this.element, this, 159628);
    },
    Knb = function (a) {
      a.j ||
        ((a.C = 5e3),
        (a.D = (0, g.OD)()),
        (a.j = new g.Zt(function () {
          Jnb(a);
        }, null)),
        Jnb(a));
    },
    Jnb = function (a) {
      if (!a.B) {
        var b = Math.min((0, g.OD)() - a.D, a.C);
        var c = a.C - b;
        b = 0 === a.C ? 0 : Math.max(c / a.C, 0);
        c = Math.round(c / 1e3);
        a.K.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
        a.updateValue("duration", c);
        0 >= b && a.j ? i6(a) : a.j && a.j.start();
      }
    },
    i6 = function (a) {
      a.j && (a.j.dispose(), (a.j = null), (a.B = !1));
    },
    Mnb = function (a) {
      g.yV.call(this, a);
      this.J = a;
      this.j = new g.ZK(this);
      this.B = null;
      this.S = !1;
      this.countdownTimer = null;
      this.ea = !1;
      Lnb(this);
      g.L(this, this.j);
      this.load();
    },
    Onb = function (a) {
      var b = g.ocb(a.J);
      b !== a.ea &&
        ((a.ea = b),
        a.G && (a.G.dispose(), (a.G = null)),
        a.C && (a.C.dispose(), (a.C = null)),
        a.D && (a.D.dispose(), (a.D = null)),
        a.B && (a.B.stop(), a.B.dispose(), (a.B = null)),
        b &&
          ((b = g.eU(a.J)),
          g.tU(a.J) &&
            ((a.D = new g.T({
              I: "div",
              T: "ytp-pause-overlay-backdrop",
              Y: { tabIndex: "-1" },
            })),
            g.L(a, a.D),
            g.wU(a.J, a.D.element, 4),
            (a.B = new g.VG(a.D, 1e3, !1, 100)),
            g.L(a, a.B),
            a.D.hide()),
          (a.G = new g.T({
            I: "div",
            T: "ytp-pause-overlay-container",
            Y: { tabIndex: "-1" },
          })),
          g.L(a, a.G),
          a.J.N("embeds_web_enable_keto_pause_overlay")
            ? Imb(a.G.element, T5(vnb, { J: a.J, ub: b }))
            : ((a.C = new g6(a.J, b)), g.L(a, a.C), a.C.Ga(a.G.element)),
          g.wU(a.J, a.G.element, 4),
          Nnb(a, a.J.Tb())));
    },
    Nnb = function (a, b) {
      a.B &&
        ((!g.aH(b, 4) && !g.aH(b, 2)) || g.aH(b, 1024)
          ? a.B.hide()
          : a.B.show());
    },
    Lnb = function (a) {
      var b = a.J;
      a = !!g.tU(b);
      g.mu(b.getRootNode(), "ytp-shorts-mode", a);
      if ((b = b.getVideoData())) b.cU = a;
    },
    j6 = function (a, b) {
      a = {
        adSource: "EMBEDS_AD_SOURCE_YOUTUBE",
        breakType:
          0 === a.J.getCurrentTime()
            ? "EMBEDS_AD_BREAK_TYPE_PRE_ROLL"
            : 0 === a.J.getPlayerState()
            ? "EMBEDS_AD_BREAK_TYPE_POST_ROLL"
            : "EMBEDS_AD_BREAK_TYPE_MID_ROLL",
        embedUrl: g.Rea(a.J.W().loaderUrl),
        eventType: b,
        youtubeHost: g.xl(a.J.W().Ja) || "",
      };
      g.zD("embedsAdEvent", a);
    };
  var m5;
  var n5 = {
    Jdb: function () {},
    Kdb: function () {},
    Ffb: function () {},
    Odb: function () {},
    EU: function () {},
    Ldb: function () {},
    q4: function () {},
    CC: function () {},
    UG: function () {},
    r4: function () {},
  };
  var Qlb = Object.prototype.hasOwnProperty;
  Nlb.prototype = Object.create(null);
  var Kmb = p5();
  var C5 = null;
  var Zlb =
    ("undefined" !== typeof Node && Node.prototype.getRootNode) ||
    function () {
      for (var a = this, b = a; a; ) (b = a), (a = a.parentNode);
      return b;
    };
  var u5 = null,
    w5 = null,
    s5 = null,
    z5 = null,
    A5 = [],
    y5 = Wlb,
    B5 = [],
    x5 = !1,
    Hmb = (function (a) {
      return $lb(function (b, c, d) {
        s5 = w5 = b;
        w5 = null;
        c(d);
        (null != a && a.Gfb) || (v5(null), (w5 = s5), (s5 = s5.parentNode));
        return b;
      }, a);
    })(),
    Gmb = (function (a) {
      return $lb(function (b, c, d) {
        var e = { nextSibling: b };
        w5 = e;
        c(d);
        s5 && v5(b.nextSibling);
        return e === w5 ? null : w5;
      }, a);
    })();
  var D5 = [],
    Lmb = 0;
  var N5 = new Nlb();
  var E5 = {
      ZG: !1,
      attributes: p5(),
      rD: function (a, b) {
        throw b;
      },
      bZ: function () {
        throw Error("renderComponent not implemented");
      },
      PN: function () {
        return !1;
      },
      r$: function (a) {
        if (E5.ZG) return a;
      },
      B4: g.Bcb,
    },
    dmb = [];
  var H5 = null;
  var J5 = null;
  var Cmb = new Set(
    "allowfullscreen async autofocus autoplay checked controls default defer disabled formnovalidate hidden ismap itemscope jsshadow jsslot loop multiple muted novalidate open playsinline readonly required reversed scoped seamless selected spellcheck sortable typemustmatch".split(
      " "
    )
  );
  var wmb = {
      align: 1,
      alt: 1,
      "aria-activedescendant": 10,
      "aria-atomic": 1,
      "aria-autocomplete": 1,
      "aria-busy": 1,
      "aria-checked": 1,
      "aria-controls": 10,
      "aria-current": 1,
      "aria-disabled": 1,
      "aria-dropeffect": 1,
      "aria-expanded": 1,
      "aria-haspopup": 1,
      "aria-hidden": 1,
      "aria-invalid": 1,
      "aria-label": 1,
      "aria-labelledby": 10,
      "aria-level": 1,
      "aria-live": 1,
      "aria-multiline": 1,
      "aria-multiselectable": 1,
      "aria-orientation": 1,
      "aria-owns": 10,
      "aria-posinset": 1,
      "aria-pressed": 1,
      "aria-readonly": 1,
      "aria-relevant": 1,
      "aria-required": 1,
      "aria-selected": 1,
      "aria-setsize": 1,
      "aria-sort": 1,
      "aria-valuemax": 1,
      "aria-valuemin": 1,
      "aria-valuenow": 1,
      "aria-valuetext": 1,
      async: 8,
      autocapitalize: 1,
      autocomplete: 1,
      autocorrect: 1,
      autofocus: 1,
      autoplay: 1,
      bgcolor: 1,
      border: 1,
      cellpadding: 1,
      cellspacing: 1,
      checked: 1,
      cite: 3,
      class: 1,
      color: 1,
      cols: 1,
      colspan: 1,
      contenteditable: 1,
      controls: 1,
      datetime: 1,
      dir: 8,
      disabled: 1,
      download: 1,
      draggable: 1,
      enctype: 1,
      face: 1,
      for: 10,
      formenctype: 1,
      frameborder: 1,
      height: 1,
      hidden: 1,
      href: 4,
      hreflang: 1,
      id: 10,
      ismap: 1,
      itemid: 1,
      itemprop: 1,
      itemref: 1,
      itemscope: 1,
      itemtype: 1,
      label: 1,
      lang: 1,
      list: 10,
      loading: 8,
      loop: 1,
      max: 1,
      maxlength: 1,
      media: 1,
      min: 1,
      minlength: 1,
      multiple: 1,
      muted: 1,
      name: 10,
      nonce: 1,
      open: 1,
      placeholder: 1,
      poster: 3,
      preload: 1,
      rel: 1,
      required: 1,
      reversed: 1,
      role: 1,
      rows: 1,
      rowspan: 1,
      selected: 1,
      shape: 1,
      size: 1,
      sizes: 1,
      slot: 1,
      span: 1,
      spellcheck: 1,
      src: 4,
      srcset: 11,
      start: 1,
      step: 1,
      style: 5,
      summary: 1,
      tabindex: 1,
      target: 8,
      title: 1,
      translate: 1,
      type: 1,
      valign: 1,
      value: 1,
      width: 1,
      wrap: 1,
    },
    vmb = {
      a: { href: [{ Ed: 3 }] },
      area: { href: [{ Ed: 3 }] },
      audio: { src: [{ Ed: 3 }] },
      button: { formaction: [{ Ed: 3 }], formmethod: [{ Ed: 1 }] },
      form: { action: [{ Ed: 3 }], method: [{ Ed: 1 }] },
      iframe: { srcdoc: [{ Ed: 2 }] },
      img: { src: [{ Ed: 3 }] },
      input: {
        accept: [{ Ed: 1 }],
        formaction: [{ Ed: 3 }],
        formmethod: [{ Ed: 1 }],
        pattern: [{ Ed: 1 }],
        readonly: [{ Ed: 1 }],
        src: [{ Ed: 3 }],
      },
      link: {
        href: [
          { Ed: 3, ai: "rel", Ci: "alternate" },
          { Ed: 3, ai: "rel", Ci: "author" },
          { Ed: 3, ai: "rel", Ci: "bookmark" },
          { Ed: 3, ai: "rel", Ci: "canonical" },
          { Ed: 3, ai: "rel", Ci: "cite" },
          { Ed: 3, ai: "rel", Ci: "help" },
          { Ed: 3, ai: "rel", Ci: "icon" },
          { Ed: 3, ai: "rel", Ci: "license" },
          { Ed: 3, ai: "rel", Ci: "next" },
          { Ed: 3, ai: "rel", Ci: "prefetch" },
          { Ed: 3, ai: "rel", Ci: "dns-prefetch" },
          { Ed: 3, ai: "rel", Ci: "prerender" },
          { Ed: 3, ai: "rel", Ci: "preconnect" },
          { Ed: 3, ai: "rel", Ci: "preload" },
          { Ed: 3, ai: "rel", Ci: "prev" },
          { Ed: 3, ai: "rel", Ci: "search" },
          { Ed: 3, ai: "rel", Ci: "subresource" },
        ],
      },
      script: { defer: [{ Ed: 1 }] },
      source: { src: [{ Ed: 3 }] },
      textarea: { readonly: [{ Ed: 1 }] },
      video: { src: [{ Ed: 3 }] },
    };
  g.Yu.getInstance();
  K5.prototype.toString = function () {
    return this.UW;
  };
  var Pnb = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
    k6 = {},
    ymb =
      ((k6[1] = { uq: null, Jt: null, Wr: null }),
      (k6[2] = {
        uq: function () {
          return g.ie.toString();
        },
        Jt: function (a) {
          return a instanceof g.je;
        },
        Wr: function (a) {
          return g.ke(a);
        },
      }),
      (k6[3] = {
        uq: function (a, b, c) {
          return Pnb.test(c) ? c : g.ie.toString();
        },
        Jt: function (a) {
          return a instanceof g.$d;
        },
        Wr: function (a) {
          return g.ae(a);
        },
      }),
      (k6[4] = {
        uq: function () {
          return g.ie.toString();
        },
        Jt: function (a) {
          return a instanceof g.Xd;
        },
        Wr: function (a) {
          return g.Yd(a);
        },
      }),
      (k6[5] = { uq: null, Jt: null, Wr: null }),
      (k6[7] = { uq: null, Jt: null, Wr: null }),
      (k6[8] = { uq: null, Jt: null, Wr: null }),
      (k6[10] = {
        uq: null,
        Jt: function (a) {
          return a instanceof K5 || a instanceof g.Qd;
        },
        Wr: function (a) {
          if (a instanceof g.Qd) a = g.Rd(a);
          else {
            if (!(a instanceof K5 && a.constructor === K5))
              throw Error("Unwrap non-TrustedId");
            a = a.UW;
          }
          return a;
        },
      }),
      k6);
  var Qnb = p5(),
    Dmb = Qnb.__default,
    Emb = Qnb.style;
  var Jmb = Symbol("ATTR_TAG_VALUE");
  var Rnb = {};
  emb({
    attributes:
      ((Rnb.__default = function () {
        return L5;
      }),
      (Rnb.style = function () {
        return L5;
      }),
      Rnb),
  });
  var O5 = !1;
  P5.prototype.CC = function () {};
  P5.prototype.q4 = function () {};
  P5.prototype.UG = function () {};
  P5.prototype.r4 = function () {};
  var Q5 = null;
  g.w(R5, P5);
  R5.prototype.Mw = function (a) {
    var b = this,
      c = Q5;
    Q5 = this;
    this.D = 0;
    try {
      return kmb(this.K, function () {
        return b.B(a);
      });
    } finally {
      g.Ccb ? (Q5 = c) : (Q5 = null);
    }
  };
  var Omb =
    "Reactive components are not allowed to use useState or other memoization based hooks.";
  var Smb = [];
  var Snb = p5();
  E5.bZ = function (a) {
    try {
      var b = a.type,
        c = b.ey;
      if (fmb(b) || E5.ZG) {
        0 < a.children.length && (a.props.children = a.children);
        if (E5.ZG) {
          var d;
          (d = a.props).idomKey || (d.idomKey = E5.r$(b));
        }
        d = !1;
        if (c) {
          var e = Ylb(c, a.props.idomKey);
          a.gq = !0;
          var f = e.__instance;
        }
        if (!f) {
          d = !0;
          var h = a.props;
          if (fmb(b)) var l = new b(h);
          else (l = new R5(h)), (l.B = b);
          l.j = b;
          l.IL = { dP: l.state, mO: !1 };
          f = l;
          f.props = null;
          e && ((e.__instance = f), (f.el = e));
        }
        var m,
          n = null != (m = f.IL) ? m : { dP: f.state, mO: !1 },
          p = n.mO,
          q = n.dP;
        f.IL = void 0;
        b.Z4 && (q = b.Z4(a.props, q));
        c = !d && !p && !1;
        f.props = a.props;
        f.state = q;
        if (c) w5 = s5.lastChild;
        else {
          n5.EU(f);
          var r = f.Mw(f.props);
          if (f.HL) {
            if (r.props.el && r.props.el !== f.HL)
              throw Error(
                "A value returned by useElement was assigned to the el attribute of the root element of the " +
                  (f.B.name +
                    " component, which is already referenced with useRootElement. Remove the el attribute. See go/client-only-wiz/dev/core/dom.md#a-value-returned-by-useelement-can-not-be-passed-to-the-el-property-of-the-root-element-if-the-component-calls-userootelement")
              );
            r.props.el = f.HL;
          }
          if (r) {
            f.props.idomKey && (r.props.idomKey = f.props.idomKey);
            r.gq = a.gq;
            var t = M5(r);
            a.gq = r.gq;
            if (!b.ey)
              if (t)
                (b.ey = t.tagName.toLowerCase()),
                  (t.__instance = f),
                  (f.el = t);
              else {
                var v;
                if (null == (v = f.zz) ? 0 : v.length) {
                  var x;
                  null == (x = E5.rD) ||
                    x.call(
                      E5,
                      "unknown",
                      Error(
                        "A component used hooks, but failed to return a host element"
                      )
                    );
                }
              }
          }
          f.CC();
          n5.CC(f);
        }
      } else M5(b(a.props));
    } catch (F) {
      b = F;
      var B, G;
      null == (G = E5.rD) ||
        G.call(E5, null == (B = a.type) ? void 0 : B.ey, b);
    }
    a.gq && (v5(null), (w5 = s5), (s5 = s5.parentNode), (a.gq = !1));
  };
  E5.ZG = !0;
  E5.attributes = Snb;
  for (var Tnb = g.u(dmb), Unb = Tnb.next(); !Unb.done; Unb = Tnb.next()) {
    var Vnb = Unb.value;
    Vnb.attributes && cmb(Vnb.attributes);
  }
  (function () {
    var a = C5;
    C5 = function (b) {
      null == a || a(b);
      Tmb(b);
    };
  })();
  var S5 = Klb;
  var W5;
  E5.PN = cnb;
  W5 = fnb;
  E5.PN = cnb;
  var jnb =
      "Hook called out of order. Hooks must be invoked unconditionally and in the same order every render. This could happen if you conditionally invoke a hook.",
    inb =
      "A valid hook context was not found. Please ensure you are using components from TSX and not invoking the component function  directly";
  emb({
    aZ: {
      EU: function (a) {
        var b;
        (null == (b = a.sy) ? 0 : b.length) && pnb(a.sy);
      },
      CC: function (a) {
        var b;
        (null == (b = a.sy) ? 0 : b.length) && pnb(a.sy);
      },
      UG: function (a) {
        var b;
        (null == (b = a.zz) ? 0 : b.length) && a.zz.forEach(onb);
      },
    },
  });
  g.w(wnb, g.T);
  g.k = wnb.prototype;
  g.k.hide = function () {
    this.S = !0;
    g.T.prototype.hide.call(this);
    xnb(this, !1);
  };
  g.k.show = function () {
    this.S = !1;
    g.T.prototype.show.call(this);
    xnb(this, !0);
  };
  g.k.isHidden = function () {
    return this.S;
  };
  g.k.K0 = function () {
    this.scrollTo(this.C - this.containerWidth);
  };
  g.k.L0 = function () {
    this.scrollTo(this.C + this.containerWidth);
  };
  g.k.resize = function (a, b) {
    var c = this.api.W(),
      d = 16 / 9,
      e = 650 <= a.width,
      f = 480 > a.width || 290 > a.height,
      h = Math.min(this.suggestionData.length, this.j.length);
    if (150 >= Math.min(a.width, a.height) || 0 === h || !c.Ud) this.hide();
    else {
      var l;
      if (e) {
        var m = (l = 28);
        this.B = 16;
      } else this.B = m = l = 8;
      if (f) {
        var n = 6;
        e = 14;
        var p = 12;
        f = 24;
        c = 12;
      } else (n = 8), (e = 18), (p = 16), (f = 36), (c = 16);
      a = a.width - (48 + l + m);
      l = Math.ceil(a / 150);
      l = Math.min(3, l);
      m = a / l - this.B;
      var q = Math.floor(m / d);
      b &&
        q + 100 > b &&
        50 < m &&
        ((q = Math.max(b, 50 / d)),
        (l = Math.ceil(a / (d * (q - 100) + this.B))),
        (m = a / l - this.B),
        (q = Math.floor(m / d)));
      50 > m || g.sU(this.api) ? this.hide() : this.show();
      for (b = 0; b < h; b++) {
        d = this.j[b];
        var r = d.Ha("ytp-suggestion-image");
        r.style.width = m + "px";
        r.style.height = q + "px";
        d.Ha("ytp-suggestion-title").style.width = m + "px";
        d.Ha("ytp-suggestion-author").style.width = m + "px";
        d = d.Ha("ytp-suggestion-duration");
        d.style.display = d && 100 > m ? "none" : "";
      }
      h = e + n + p + 4;
      this.K = h + c + (q - f) / 2;
      this.suggestions.element.style.height = q + h + "px";
      this.D = m;
      this.containerWidth = a;
      this.columns = l;
      this.C = 0;
      this.suggestions.element.scrollLeft = -0;
      ynb(this);
    }
  };
  g.k.onVideoDataChange = function () {
    var a = this.api.getVideoData(),
      b = this.api.W();
    this.ea = a.Sd ? !1 : b.D;
    a.suggestions
      ? (this.suggestionData = g.ts(a.suggestions, function (c) {
          return c && !c.playlistId;
        }))
      : (this.suggestionData.length = 0);
    znb(this);
    a.Sd
      ? this.title.update({
          title: g.vK("Video kh\u00e1c t\u1eeb $DNI_RELATED_CHANNEL", {
            DNI_RELATED_CHANNEL: a.author,
          }),
        })
      : this.title.update({ title: "Xem th\u00eam video tr\u00ean YouTube" });
  };
  g.k.scrollTo = function (a) {
    a = g.ne(
      a,
      this.containerWidth - this.suggestionData.length * (this.D + this.B),
      0
    );
    this.qa.start(this.C, a, 1e3);
    this.C = a;
    ynb(this);
    xnb(this, !0);
  };
  g.w(b6, g.UV);
  b6.prototype.show = function () {
    g.UV.prototype.show.call(this);
    Bnb(this, this.api.tb().getPlayerSize());
  };
  b6.prototype.resize = function (a) {
    g.UV.prototype.resize.call(this, a);
    this.j &&
      (Bnb(this, a),
      g.mu(
        this.element,
        "related-on-error-overlay-visible",
        !this.j.isHidden()
      ));
  };
  b6.prototype.B = function (a) {
    g.UV.prototype.B.call(this, a);
    var b = this.api.getVideoData();
    if (b.bC || b.playerErrorMessageRenderer)
      (a = b.bC)
        ? Enb(this, a)
        : b.playerErrorMessageRenderer &&
          Enb(this, b.playerErrorMessageRenderer);
    else {
      var c;
      a.Xm &&
        (b.Xx
          ? Cnb(b.Xx)
            ? (c = g.xG(b.Xx))
            : (c = g.VV(g.wG(b.Xx)))
          : (c = g.VV(a.Xm)),
        this.oe(c, "subreason"));
    }
  };
  g.w(c6, g.T);
  c6.prototype.Xi = function () {
    this.api.Tb().isCued() || (this.hide(), this.api.Xa(this.element, !1));
  };
  c6.prototype.j = function () {
    var a = this.api.getVideoData(),
      b = this.api.W(),
      c = this.api.getVideoData().Sd,
      d = b.Vd,
      e = !b.Ud,
      f = this.ub.zg(),
      h = g.mS(b);
    b = b.C;
    d || f || c || e || h || b || g.tU(this.api) || !a.videoId
      ? (this.hide(), this.api.Xa(this.element, !1))
      : ((a = Fnb(this)), this.updateValue("url", a), this.show());
  };
  c6.prototype.onClick = function (a) {
    this.api.N("web_player_log_click_before_generating_ve_conversion_params") &&
      this.api.wb(this.element);
    var b = Fnb(this);
    g.QU(b, this.api, a);
    this.api.N("web_player_log_click_before_generating_ve_conversion_params") ||
      this.api.wb(this.element);
  };
  c6.prototype.show = function () {
    this.api.Tb().isCued() &&
      (g.T.prototype.show.call(this),
      this.api.Wj(this.element) && this.api.Xa(this.element, !0));
  };
  g.w(d6, g.T);
  d6.prototype.Xi = function () {
    var a = this.api.Tb();
    !this.api.Ph() || (g.aH(a, 2) && g.pU(this.api)) || g.aH(a, 64)
      ? (this.api.Xa(this.j, !1),
        this.api.Xa(this.forwardButton, !1),
        this.hide())
      : (this.show(),
        this.api.Xa(this.j, !0),
        this.api.Xa(this.forwardButton, !0));
  };
  d6.prototype.B = function () {
    this.api.seekBy(-10 * this.api.getPlaybackRate());
    this.api.wb(this.j);
  };
  d6.prototype.C = function () {
    this.api.seekBy(10 * this.api.getPlaybackRate());
    this.api.wb(this.forwardButton);
  };
  g.w(e6, g.T);
  e6.prototype.C = function () {
    var a = this.api.Tb(),
      b = this.api.getVideoData();
    this.api.W().N("embeds_enable_muted_autoplay") &&
      b.mutedAutoplay &&
      (g.aH(a, 2) && !this.Ib
        ? (this.show(),
          this.j ||
            ((this.j = new g.SV(this.api)),
            g.L(this, this.j),
            this.j.Ga(this.D, 0),
            this.j.show()),
          (a = this.api.getVideoData()),
          this.updateValue("text", a.bS),
          g.mu(this.element, "ytp-muted-autoplay-show-end-panel", !0),
          this.api.Xa(this.element, this.Ib),
          this.api.Ta("onMutedAutoplayEnds"))
        : this.hide());
  };
  e6.prototype.onClick = function () {
    if (!this.B) {
      this.j && (this.j.Ba(), (this.j = null));
      g.mu(this.api.getRootNode(), "ytp-muted-autoplay", !1);
      var a = this.api.getVideoData(),
        b = this.api.getCurrentTime();
      Hlb(a);
      this.api.loadVideoById(a.videoId, b);
      this.api.Zz();
      this.api.wb(this.element);
      this.hide();
      this.B = !0;
    }
  };
  e6.prototype.onMutedAutoplayStarts = function () {
    this.B = !1;
    this.j && (this.j.Ba(), (this.j = null));
  };
  g.w(f6, g.T);
  g.k = f6.prototype;
  g.k.B_ = function () {
    var a = this.api.getVideoData(),
      b = this.api.getVideoData(1).Sd,
      c = this.api.W();
    b = c.Vd && !g.aH(this.state, 2) && !(b && c.qa);
    a.mutedAutoplay || g.sG(this, b);
    this.api.Xa(this.element, b);
  };
  g.k.onStateChange = function (a) {
    this.Gc(a.state);
  };
  g.k.Gc = function (a) {
    this.state !== a && (this.state = a);
    this.B_();
  };
  g.k.onVideoDataChange = function () {
    var a = this.api.W();
    a.C && g.iu(this.element, "ytp-no-hover");
    this.api.getVideoData().videoId && !a.C
      ? ((a = this.api.getVideoUrl(!0, !1, !1, !0)),
        this.updateValue("url", a),
        this.j || (this.j = this.Ua("click", this.onClick)))
      : this.j &&
        (this.updateValue("url", null), this.Qc(this.j), (this.j = null));
  };
  g.k.onClick = function (a) {
    this.api.N("web_player_log_click_before_generating_ve_conversion_params") &&
      this.api.wb(this.element);
    var b = this.api.getVideoUrl(!g.kH(a), !1, !0, !0);
    if (
      this.api.N("web_player_log_click_before_generating_ve_conversion_params")
    ) {
      var c = {};
      g.cU(this.api, "addEmbedsConversionTrackingParams", [c]);
      b = g.Dl(b, g.FP(c, "emb_yt_watermark"));
    }
    g.QU(b, this.api, a);
    this.api.N("web_player_log_click_before_generating_ve_conversion_params") ||
      this.api.wb(this.element);
  };
  g.k.Nb = function (a) {
    if (((a = 480 > a.width) && !this.B) || (!a && this.B)) {
      var b = new g.T(Ilb()),
        c = this.Ha("ytp-watermark");
      g.mu(c, "ytp-watermark-small", a);
      g.of(c);
      b.Ga(c);
      this.B = a;
    }
  };
  g.w(Inb, g.T);
  g.k = Inb.prototype;
  g.k.JK = function () {
    var a = this.api.Tb(),
      b = this.api.getVideoData();
    this.api.W().N("embeds_enable_muted_autoplay") &&
    b.mutedAutoplay &&
    !g.aH(a, 2)
      ? this.Ib ||
        (g.T.prototype.show.call(this), this.api.Xa(this.element, this.Ib))
      : this.hide();
  };
  g.k.S5 = function () {
    this.j && this.j.hide();
  };
  g.k.onAutoplayBlocked = function () {
    this.hide();
    Hlb(this.api.getVideoData());
  };
  g.k.onClick = function () {
    if (!this.B) {
      g.mu(this.api.getRootNode(), "ytp-muted-autoplay", !1);
      var a = this.api.getVideoData(),
        b = this.api.getCurrentTime();
      Hlb(a);
      this.api.loadVideoById(a.videoId, b);
      this.api.Zz();
      this.api.wb(this.element);
      this.api.Ta("onMutedAutoplayEnds");
      this.B = !0;
    }
  };
  g.k.onMutedAutoplayEnds = function () {
    this.watermark && (this.watermark.Ba(), (this.watermark = null));
  };
  g.w(g6, g.T);
  g6.prototype.hide = function () {
    g.ku(this.api.getRootNode(), "ytp-expand-pause-overlay");
    g.T.prototype.hide.call(this);
  };
  g6.prototype.G = function () {
    this.B = !0;
    g.ku(this.api.getRootNode(), "ytp-expand-pause-overlay");
    g.tU(this.api) && this.api.Xa(this.element, !1);
    this.expandButton.focus();
  };
  g6.prototype.K = function () {
    this.B = !1;
    g.iu(this.api.getRootNode(), "ytp-expand-pause-overlay");
    g.tU(this.api) && this.api.Xa(this.element, !0);
    this.focus();
  };
  g6.prototype.Sa = function () {
    var a = this.api.Tb();
    g.aH(a, 1) ||
      g.aH(a, 16) ||
      g.aH(a, 32) ||
      (!g.aH(a, 4) || g.aH(a, 2) || g.aH(a, 1024)
        ? (this.B || this.api.Xa(this.element, !1), this.D.hide())
        : this.j.vD() &&
          (this.B ||
            (g.iu(this.api.getRootNode(), "ytp-expand-pause-overlay"),
            g.q2(this.j),
            this.j.show(),
            this.api.Xa(this.element, !0)),
          this.D.show()));
  };
  g.w(h6, g.T);
  h6.prototype.show = function () {
    g.T.prototype.show.call(this);
    this.api.Xa(this.element, !0);
  };
  h6.prototype.Ba = function () {
    i6(this);
    g.T.prototype.Ba.call(this);
  };
  g.w(Mnb, g.yV);
  g.k = Mnb.prototype;
  g.k.xl = function () {
    return !1;
  };
  g.k.create = function () {
    var a = this.J.W(),
      b = g.eU(this.J),
      c,
      d = null == (c = this.J.getVideoData()) ? void 0 : c.clientPlaybackNonce;
    d && g.hI({ clientPlaybackNonce: d });
    Onb(this);
    a.N("embeds_enable_muted_autoplay") &&
      ((this.ma = new Inb(this.J)),
      g.L(this, this.ma),
      g.wU(this.J, this.ma.element, 4),
      (this.va = new e6(this.J)),
      g.L(this, this.va),
      g.wU(this.J, this.va.element, 4));
    a.Vd &&
      ((this.watermark = new f6(this.J)),
      g.L(this, this.watermark),
      g.wU(this.J, this.watermark.element, 8));
    this.K = new c6(this.J, b);
    g.L(this, this.K);
    g.wU(this.J, this.K.element, 8);
    g.iU(this.J.app) && (this.onMutedAutoplayStarts(), this.K.hide());
    a.B &&
      ((this.qa = new d6(this.J)),
      g.L(this, this.qa),
      g.wU(this.J, this.qa.element, 4));
    this.j.V(this.J, "appresize", this.Nb);
    this.j.V(this.J, "presentingplayerstatechange", this.Xi);
    this.j.V(this.J, "videodatachange", this.onVideoDataChange);
    this.j.V(this.J, "videoplayerreset", this.zw);
    this.j.V(this.J, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
    this.j.V(this.J, "onAdStart", this.onAdStart);
    this.j.V(this.J, "onAdComplete", this.onAdComplete);
    this.j.V(this.J, "onAdSkip", this.onAdSkip);
    this.j.V(this.J, "onAdStateChange", this.onAdStateChange);
    if ((this.S = g.OC(g.nS(a))))
      (this.countdownTimer = new h6(this.J)),
        g.L(this, this.countdownTimer),
        g.wU(this.J, this.countdownTimer.element, 4),
        this.countdownTimer.hide(),
        this.j.V(this.J, g.pK("embeds"), this.onCueRangeEnter),
        this.j.V(this.J, g.qK("embeds"), this.onCueRangeExit);
    this.Ac(this.J.Tb());
    this.player.Fg("embed");
    var e;
    null != (e = this.J.W().webPlayerContextConfig) &&
      e.embedsEnableOverridingVisitorDataPlayerVars &&
      (a = g.Iv("IDENTITY_MEMENTO")) &&
      this.J.Ta("onMementoChange", a);
  };
  g.k.onCueRangeEnter = function (a) {
    "countdown timer" === a.getId() &&
      this.countdownTimer &&
      (this.countdownTimer.show(), Knb(this.countdownTimer));
  };
  g.k.onCueRangeExit = function (a) {
    "countdown timer" === a.getId() &&
      this.countdownTimer &&
      (i6(this.countdownTimer), this.countdownTimer.hide());
  };
  g.k.Nb = function () {
    var a = this.J.tb().getPlayerSize();
    this.Kg && this.Kg.resize(a);
  };
  g.k.zw = function () {
    Lnb(this);
  };
  g.k.Xi = function (a) {
    this.Ac(a.state);
  };
  g.k.Ac = function (a) {
    g.aH(a, 128)
      ? (this.Kg ||
          ((this.Kg = new b6(this.J)),
          g.L(this, this.Kg),
          g.wU(this.J, this.Kg.element, 4)),
        this.Kg.B(a.Ah),
        this.Kg.show(),
        g.iu(this.J.getRootNode(), "ytp-embed-error"))
      : this.Kg &&
        (this.Kg.dispose(),
        (this.Kg = null),
        g.ku(this.J.getRootNode(), "ytp-embed-error"));
    if (this.countdownTimer && this.countdownTimer.j)
      if (g.aH(a, 64)) this.countdownTimer.hide(), i6(this.countdownTimer);
      else if (a.isPaused()) {
        var b = this.countdownTimer;
        b.B || ((b.B = !0), (b.G = (0, g.OD)()));
      } else
        a.isPlaying() &&
          this.countdownTimer.B &&
          ((b = this.countdownTimer),
          b.B && ((b.D += (0, g.OD)() - b.G), (b.B = !1), Jnb(b)));
    Nnb(this, a);
  };
  g.k.onMutedAutoplayStarts = function () {
    this.J.getVideoData().mutedAutoplay &&
      this.ma &&
      g.mu(this.J.getRootNode(), "ytp-muted-autoplay", !0);
  };
  g.k.onVideoDataChange = function (a, b) {
    var c = this.OD !== b.videoId;
    a = !c && "dataloaded" === a;
    var d = { isShortsModeEnabled: !!g.tU(this.J) };
    g.zD("embedsVideoDataDidChange", {
      clientPlaybackNonce: b.clientPlaybackNonce,
      isReload: a,
      runtimeEnabledFeatures: d,
    });
    c &&
      ((this.OD = b.videoId),
      this.countdownTimer &&
        (this.countdownTimer.show(), this.countdownTimer.hide()),
      this.S &&
        (this.J.mf("embeds"),
        b.isAd() ||
          5 > b.limitedPlaybackDurationInSeconds ||
          g.sU(this.J) ||
          ((b = Math.max(
            1e3 * (b.startSeconds + b.limitedPlaybackDurationInSeconds - 5),
            0
          )),
          (b = new g.oK(b, b + 5e3, {
            id: "countdown timer",
            namespace: "embeds",
          })),
          this.J.xf([b]))),
      Lnb(this),
      Onb(this));
    this.J.W().C && this.C && this.C.detach();
  };
  g.k.onAdStart = function () {
    j6(this, "EMBEDS_AD_EVENT_TYPE_AD_STARTED");
  };
  g.k.onAdComplete = function () {
    j6(this, "EMBEDS_AD_EVENT_TYPE_AD_COMPLETED");
  };
  g.k.onAdSkip = function () {
    j6(this, "EMBEDS_AD_EVENT_TYPE_AD_SKIPPED");
  };
  g.k.onAdStateChange = function (a) {
    2 === a && j6(this, "EMBEDS_AD_EVENT_TYPE_AD_PAUSED");
  };
  g.xV("embed", Mnb);
})(_yt_player);
