(function (g) {
  var window = this;
  ("use strict");
  var a8 = function (a) {
      g.oo(
        a,
        "zx",
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(Math.floor(2147483648 * Math.random()) ^ g.eb()).toString(36)
      );
      return a;
    },
    b8 = function (a, b, c) {
      Array.isArray(c) || (c = [String(c)]);
      g.vga(a.B, b, c);
    },
    jvb = function (a) {
      if (a instanceof g.ns) return a;
      if ("function" == typeof a.Bk) return a.Bk(!1);
      if (g.Wa(a)) {
        var b = 0,
          c = new g.ns();
        c.next = function () {
          for (;;) {
            if (b >= a.length) return g.B2;
            if (b in a) return g.os(a[b++]);
            b++;
          }
        };
        return c;
      }
      throw Error("Not implemented");
    },
    kvb = function (a, b, c) {
      if (g.Wa(a)) g.Yb(a, b, c);
      else
        for (a = jvb(a); ; ) {
          var d = a.next();
          if (d.done) break;
          b.call(c, d.value, void 0, a);
        }
    },
    lvb = function (a, b) {
      var c = [];
      kvb(
        b,
        function (d) {
          try {
            var e = g.Mu.prototype.B.call(this, d, !0);
          } catch (f) {
            if ("Storage: Invalid value was encountered" == f) return;
            throw f;
          }
          void 0 === e ? c.push(d) : g.ila(e) && c.push(d);
        },
        a
      );
      return c;
    },
    mvb = function (a, b) {
      lvb(a, b).forEach(function (c) {
        g.Mu.prototype.remove.call(this, c);
      }, a);
    },
    nvb = function (a) {
      if (a.qa) {
        if (a.qa.locationOverrideToken)
          return { locationOverrideToken: a.qa.locationOverrideToken };
        if (null != a.qa.latitudeE7 && null != a.qa.longitudeE7)
          return { latitudeE7: a.qa.latitudeE7, longitudeE7: a.qa.longitudeE7 };
      }
      return null;
    },
    ovb = function (a, b) {
      g.Db(a, b) || a.push(b);
    },
    pvb = function (a) {
      var b = 0,
        c;
      for (c in a) b++;
      return b;
    },
    qvb = function (a, b) {
      return g.hd(a, b);
    },
    rvb = function (a) {
      try {
        return g.Qa.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (
        /^\s*$/.test(a)
          ? 0
          : /^[\],:{}\s\u2028\u2029]*$/.test(
              a
                .replace(/\\["\\\/bfnrtu]/g, "@")
                .replace(
                  /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
            )
      )
        try {
          return eval("(" + a + ")");
        } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    c8 = function (a) {
      if (g.Qa.JSON)
        try {
          return g.Qa.JSON.parse(a);
        } catch (b) {}
      return rvb(a);
    },
    svb = function (a, b, c, d) {
      var e = new g.go(null);
      a && g.ho(e, a);
      b && g.io(e, b);
      c && g.jo(e, c);
      d && (e.C = d);
      return e;
    },
    tvb = function () {
      this.j = d8();
      this.j.fm("/client_streamz/youtube/living_room/mdx/channel/opened", {
        Zf: 3,
        Yf: "channel_type",
      });
    },
    uvb = function (a, b) {
      a.j.Km("/client_streamz/youtube/living_room/mdx/channel/opened", b);
    },
    vvb = function () {
      this.j = d8();
      this.j.fm("/client_streamz/youtube/living_room/mdx/channel/closed", {
        Zf: 3,
        Yf: "channel_type",
      });
    },
    wvb = function (a, b) {
      a.j.Km("/client_streamz/youtube/living_room/mdx/channel/closed", b);
    },
    xvb = function () {
      this.j = d8();
      this.j.fm(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        { Zf: 3, Yf: "channel_type" }
      );
    },
    yvb = function (a, b) {
      a.j.Km(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        b
      );
    },
    zvb = function () {
      this.j = d8();
      this.j.fm("/client_streamz/youtube/living_room/mdx/channel/error", {
        Zf: 3,
        Yf: "channel_type",
      });
    },
    Avb = function (a, b) {
      a.j.Km("/client_streamz/youtube/living_room/mdx/channel/error", b);
    },
    Bvb = function () {
      this.j = d8();
      this.j.fm(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps"
      );
    },
    Cvb = function () {
      this.j = d8();
      this.j.fm(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps"
      );
    },
    e8 = function (a) {
      this.name = this.id = "";
      this.clientName = "UNKNOWN_INTERFACE";
      this.app = "";
      this.type = "REMOTE_CONTROL";
      this.obfuscatedGaiaId = this.avatar = this.username = "";
      this.capabilities = new Set();
      this.compatibleSenderThemes = new Set();
      this.experiments = new Set();
      this.theme = "u";
      new g.ru();
      this.model = this.brand = "";
      this.year = 0;
      this.chipset = this.osVersion = this.os = "";
      this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
      a &&
        ((this.id = a.id || a.name),
        (this.name = a.name),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.app = a.app),
        (this.type = a.type || "REMOTE_CONTROL"),
        (this.username = a.user || ""),
        (this.avatar = a.userAvatarUri || ""),
        (this.obfuscatedGaiaId = a.obfuscatedGaiaId || ""),
        (this.theme = a.theme || "u"),
        Dvb(this, a.capabilities || ""),
        Evb(this, a.compatibleSenderThemes || ""),
        Fvb(this, a.experiments || ""),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"),
        (a = a.deviceInfo)) &&
        ((a = JSON.parse(a)),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"));
    },
    Dvb = function (a, b) {
      a.capabilities.clear();
      g.ts(b.split(","), g.db(qvb, Gvb)).forEach(function (c) {
        a.capabilities.add(c);
      });
    },
    Evb = function (a, b) {
      a.compatibleSenderThemes.clear();
      g.ts(b.split(","), g.db(qvb, Hvb)).forEach(function (c) {
        a.compatibleSenderThemes.add(c);
      });
    },
    Fvb = function (a, b) {
      a.experiments.clear();
      b.split(",").forEach(function (c) {
        a.experiments.add(c);
      });
    },
    f8 = function (a) {
      a = a || {};
      this.name = a.name || "";
      this.id = a.id || a.screenId || "";
      this.token = a.token || a.loungeToken || "";
      this.uuid = a.uuid || a.dialId || "";
      this.idType = a.screenIdType || "normal";
    },
    g8 = function (a, b) {
      return !!b && (a.id == b || a.uuid == b);
    },
    Ivb = function (a) {
      return {
        name: a.name,
        screenId: a.id,
        loungeToken: a.token,
        dialId: a.uuid,
        screenIdType: a.idType,
      };
    },
    Jvb = function (a) {
      return new f8(a);
    },
    Kvb = function (a) {
      return Array.isArray(a) ? g.Yp(a, Jvb) : [];
    },
    h8 = function (a) {
      return a
        ? '{name:"' +
            a.name +
            '",id:' +
            a.id.substr(0, 6) +
            "..,token:" +
            ((a.token ? ".." + a.token.slice(-6) : "-") +
              ",uuid:" +
              (a.uuid ? ".." + a.uuid.slice(-6) : "-") +
              ",idType:" +
              a.idType +
              "}")
        : "null";
    },
    Lvb = function (a) {
      return Array.isArray(a) ? "[" + g.Yp(a, h8).join(",") + "]" : "null";
    },
    Mvb = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (a) {
          var b = (16 * Math.random()) | 0;
          return ("x" == a ? b : (b & 3) | 8).toString(16);
        }
      );
    },
    Nvb = function (a) {
      return g.Yp(a, function (b) {
        return { key: b.id, name: b.name };
      });
    },
    Ovb = function (a, b) {
      return g.Bb(a, function (c) {
        return c || b ? (!c != !b ? !1 : c.id == b.id) : !0;
      });
    },
    i8 = function (a, b) {
      return g.Bb(a, function (c) {
        return g8(c, b);
      });
    },
    Pvb = function () {
      var a = (0, g.eD)();
      a && mvb(a, a.j.Bk(!0));
    },
    j8 = function () {
      var a = g.gD("yt-remote-connected-devices") || [];
      g.Ub(a);
      return a;
    },
    Qvb = function (a) {
      if (0 == a.length) return [];
      var b = a[0].indexOf("#"),
        c = -1 == b ? a[0] : a[0].substring(0, b);
      return g.Yp(a, function (d, e) {
        return 0 == e ? d : d.substring(c.length);
      });
    },
    Rvb = function (a) {
      g.fD("yt-remote-connected-devices", a, 86400);
    },
    k8 = function () {
      if (Svb) return Svb;
      var a = g.gD("yt-remote-device-id");
      a || ((a = Mvb()), g.fD("yt-remote-device-id", a, 31536e3));
      for (var b = j8(), c = 1, d = a; g.Db(b, d); ) c++, (d = a + "#" + c);
      return (Svb = d);
    },
    Tvb = function () {
      var a = j8(),
        b = k8();
      g.iD() && g.Xb(a, b);
      a = Qvb(a);
      if (0 == a.length)
        try {
          g.qna("remote_sid");
        } catch (c) {}
      else
        try {
          g.xC("remote_sid", a.join(","), -1);
        } catch (c) {}
    },
    Uvb = function () {
      return g.gD("yt-remote-session-browser-channel");
    },
    Vvb = function () {
      return g.gD("yt-remote-local-screens") || [];
    },
    Wvb = function () {
      g.fD("yt-remote-lounge-token-expiration", !0, 86400);
    },
    Xvb = function (a) {
      5 < a.length && (a = a.slice(a.length - 5));
      var b = g.Yp(Vvb(), function (d) {
          return d.loungeToken;
        }),
        c = g.Yp(a, function (d) {
          return d.loungeToken;
        });
      g.Zp(c, function (d) {
        return !g.Db(b, d);
      }) && Wvb();
      g.fD("yt-remote-local-screens", a, 31536e3);
    },
    l8 = function (a) {
      a ||
        (g.hD("yt-remote-session-screen-id"),
        g.hD("yt-remote-session-video-id"));
      Tvb();
      a = j8();
      g.Fb(a, k8());
      Rvb(a);
    },
    Yvb = function () {
      if (!m8) {
        var a = g.Vu();
        a && (m8 = new g.Ju(a));
      }
    },
    Zvb = function () {
      Yvb();
      return m8 ? !!m8.get("yt-remote-use-staging-server") : !1;
    },
    n8 = function (a, b) {
      g.QE[a] = !0;
      var c = g.OE();
      c && c.publish.apply(c, arguments);
      g.QE[a] = !1;
    },
    $vb = function () {},
    d8 = function () {
      if (!o8) {
        o8 = new g.jg(new $vb());
        var a = g.TB("client_streamz_web_flush_count", -1);
        -1 !== a && (o8.D = a);
      }
      return o8;
    },
    awb = function () {
      var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
      return a ? parseInt(a[1], 10) : 0;
    },
    bwb = function (a) {
      return (
        !!document.currentScript &&
        (-1 != document.currentScript.src.indexOf("?" + a) ||
          -1 != document.currentScript.src.indexOf("&" + a))
      );
    },
    cwb = function () {
      return "function" == typeof window.__onGCastApiAvailable
        ? window.__onGCastApiAvailable
        : null;
    },
    p8 = function (a) {
      a.length
        ? dwb(a.shift(), function () {
            p8(a);
          })
        : ewb();
    },
    fwb = function (a) {
      return "chrome-extension://" + a + "/cast_sender.js";
    },
    dwb = function (a, b, c) {
      var d = document.createElement("script");
      d.onerror = b;
      c && (d.onload = c);
      g.Hn(d, g.Jv(a));
      (document.head || document.documentElement).appendChild(d);
    },
    gwb = function () {
      var a = awb(),
        b = [];
      if (1 < a) {
        var c = a - 1;
        b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
        b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js");
      }
      return b;
    },
    ewb = function () {
      var a = cwb();
      a && a(!1, "No cast extension found");
    },
    iwb = function () {
      if (hwb) {
        var a = 2,
          b = cwb(),
          c = function () {
            a--;
            0 == a && b && b(!0);
          };
        window.__onGCastApiAvailable = c;
        dwb(
          "//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",
          ewb,
          c
        );
      }
    },
    jwb = function () {
      iwb();
      var a = gwb();
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      p8(a);
    },
    lwb = function () {
      iwb();
      var a = gwb();
      a.push.apply(a, g.pa(kwb.map(fwb)));
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      p8(a);
    },
    q8 = function (a, b, c) {
      g.J.call(this);
      this.K = null != c ? (0, g.cb)(a, c) : a;
      this.Ti = b;
      this.G = (0, g.cb)(this.b1, this);
      this.j = !1;
      this.B = 0;
      this.C = this.pd = null;
      this.D = [];
    },
    r8 = function (a, b, c) {
      g.J.call(this);
      this.D = null != c ? a.bind(c) : a;
      this.Ti = b;
      this.C = null;
      this.j = !1;
      this.B = 0;
      this.pd = null;
    },
    mwb = function (a) {
      a.pd = g.hg(function () {
        a.pd = null;
        a.j && !a.B && ((a.j = !1), mwb(a));
      }, a.Ti);
      var b = a.C;
      a.C = null;
      a.D.apply(null, b);
    },
    s8 = function () {},
    nwb = function () {
      g.xb.call(this, "p");
    },
    owb = function () {
      g.xb.call(this, "o");
    },
    qwb = function () {
      return (pwb = pwb || new g.Gd());
    },
    rwb = function (a) {
      g.xb.call(this, "serverreachability", a);
    },
    t8 = function (a) {
      var b = qwb();
      b.dispatchEvent(new rwb(b, a));
    },
    swb = function (a) {
      g.xb.call(this, "statevent", a);
    },
    u8 = function (a) {
      var b = qwb();
      b.dispatchEvent(new swb(b, a));
    },
    twb = function (a, b, c, d) {
      g.xb.call(this, "timingevent", a);
      this.size = b;
      this.QA = d;
    },
    v8 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.Qa.setTimeout(function () {
        a();
      }, b);
    },
    uwb = function () {},
    w8 = function (a, b, c, d) {
      this.G = a;
      this.D = b;
      this.Ad = c;
      this.Jc = d || 1;
      this.kb = new g.to(this);
      this.Cb = 45e3;
      a = g.yS ? 125 : void 0;
      this.rb = new g.gg(a);
      this.Pa = null;
      this.C = !1;
      this.ma = this.fb = this.S = this.Va = this.Ca = this.Ub = this.ea = null;
      this.va = [];
      this.j = null;
      this.qa = 0;
      this.K = this.Fa = null;
      this.Mb = -1;
      this.Oa = !1;
      this.xb = 0;
      this.eb = null;
      this.wc = this.Ya = this.vc = this.Ja = !1;
      this.B = new vwb();
    },
    vwb = function () {
      this.C = null;
      this.j = "";
      this.B = !1;
    },
    xwb = function (a, b, c) {
      a.Va = 1;
      a.S = a8(b.clone());
      a.ma = c;
      a.Ja = !0;
      wwb(a, null);
    },
    wwb = function (a, b) {
      a.Ca = Date.now();
      x8(a);
      a.fb = a.S.clone();
      b8(a.fb, "t", a.Jc);
      a.qa = 0;
      var c = a.G.Va;
      a.B = new vwb();
      a.j = ywb(a.G, c ? b : null, !a.ma);
      0 < a.xb && (a.eb = new r8((0, g.cb)(a.xS, a, a.j), a.xb));
      a.kb.Ua(a.j, "readystatechange", a.f1);
      b = a.Pa ? g.pd(a.Pa) : {};
      a.ma
        ? (a.Fa || (a.Fa = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.j.send(a.fb, a.Fa, a.ma, b))
        : ((a.Fa = "GET"), a.j.send(a.fb, a.Fa, null, b));
      t8(1);
    },
    zwb = function (a) {
      return a.j ? "GET" == a.Fa && 2 != a.Va && a.G.We : !1;
    },
    Dwb = function (a, b, c) {
      for (var d = !0, e; !a.Oa && a.qa < c.length; )
        if (((e = Awb(a, c)), e == y8)) {
          4 == b && ((a.K = 4), u8(14), (d = !1));
          break;
        } else if (e == Bwb) {
          a.K = 4;
          u8(15);
          d = !1;
          break;
        } else Cwb(a, e);
      zwb(a) && e != y8 && e != Bwb && ((a.B.j = ""), (a.qa = 0));
      4 != b || 0 != c.length || a.B.B || ((a.K = 1), u8(16), (d = !1));
      a.C = a.C && d;
      d ? 0 < c.length && !a.wc && ((a.wc = !0), a.G.sP(a)) : (z8(a), A8(a));
    },
    Awb = function (a, b) {
      var c = a.qa,
        d = b.indexOf("\n", c);
      if (-1 == d) return y8;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return Bwb;
      d += 1;
      if (d + c > b.length) return y8;
      b = b.slice(d, d + c);
      a.qa = d + c;
      return b;
    },
    x8 = function (a) {
      a.Ub = Date.now() + a.Cb;
      Ewb(a, a.Cb);
    },
    Ewb = function (a, b) {
      if (null != a.ea) throw Error("WatchDog timer not null");
      a.ea = v8((0, g.cb)(a.d1, a), b);
    },
    B8 = function (a) {
      a.ea && (g.Qa.clearTimeout(a.ea), (a.ea = null));
    },
    A8 = function (a) {
      a.G.jh() || a.Oa || Fwb(a.G, a);
    },
    z8 = function (a) {
      B8(a);
      g.sb(a.eb);
      a.eb = null;
      a.rb.stop();
      a.kb.Of();
      if (a.j) {
        var b = a.j;
        a.j = null;
        b.abort();
        b.dispose();
      }
    },
    Cwb = function (a, b) {
      try {
        var c = a.G;
        if (0 != c.Ih && (c.j == a || Gwb(c.B, a)))
          if (!a.Ya && Gwb(c.B, a) && 3 == c.Ih) {
            try {
              var d = c.Gf.j.parse(b);
            } catch (x) {
              d = null;
            }
            if (Array.isArray(d) && 3 == d.length) {
              var e = d;
              if (0 == e[0])
                a: {
                  if (!c.ma) {
                    if (c.j)
                      if (c.j.Ca + 3e3 < a.Ca) C8(c), D8(c);
                      else break a;
                    Hwb(c);
                    u8(18);
                  }
                }
              else
                (c.Vd = e[1]),
                  0 < c.Vd - c.eb &&
                    37500 > e[2] &&
                    c.Ya &&
                    0 == c.va &&
                    !c.qa &&
                    (c.qa = v8((0, g.cb)(c.j1, c), 6e3));
              if (1 >= Iwb(c.B) && c.qd) {
                try {
                  c.qd();
                } catch (x) {}
                c.qd = void 0;
              }
            } else E8(c, 11);
          } else if (((a.Ya || c.j == a) && C8(c), !g.dc(b)))
            for (e = c.Gf.j.parse(b), b = 0; b < e.length; b++) {
              var f = e[b];
              c.eb = f[0];
              f = f[1];
              if (2 == c.Ih)
                if ("c" == f[0]) {
                  c.D = f[1];
                  c.wc = f[2];
                  var h = f[3];
                  null != h && (c.yS = h);
                  var l = f[5];
                  null != l &&
                    "number" === typeof l &&
                    0 < l &&
                    (c.kb = 1.5 * l);
                  d = c;
                  var m = a.IN();
                  if (m) {
                    var n = g.Cm(m, "X-Client-Wire-Protocol");
                    if (n) {
                      var p = d.B;
                      !p.j &&
                        (g.gc(n, "spdy") || g.gc(n, "quic") || g.gc(n, "h2")) &&
                        ((p.D = p.G),
                        (p.j = new Set()),
                        p.B && (Jwb(p, p.B), (p.B = null)));
                    }
                    if (d.Ja) {
                      var q = g.Cm(m, "X-HTTP-Session-Id");
                      q && ((d.Me = q), g.oo(d.Pa, d.Ja, q));
                    }
                  }
                  c.Ih = 3;
                  c.G && c.G.ES();
                  c.Yc && (c.Td = Date.now() - a.Ca);
                  d = c;
                  var r = a;
                  d.Kd = Kwb(d, d.Va ? d.wc : null, d.Jc);
                  if (r.Ya) {
                    Lwb(d.B, r);
                    var t = r,
                      v = d.kb;
                    v && t.setTimeout(v);
                    t.ea && (B8(t), x8(t));
                    d.j = r;
                  } else Mwb(d);
                  0 < c.C.length && F8(c);
                } else ("stop" != f[0] && "close" != f[0]) || E8(c, 7);
              else
                3 == c.Ih &&
                  ("stop" == f[0] || "close" == f[0]
                    ? "stop" == f[0]
                      ? E8(c, 7)
                      : c.disconnect()
                    : "noop" != f[0] && c.G && c.G.DS(f),
                  (c.va = 0));
            }
        t8(4);
      } catch (x) {}
    },
    Nwb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    Owb = function (a) {
      this.G = a || 10;
      g.Qa.PerformanceNavigationTiming
        ? ((a = g.Qa.performance.getEntriesByType("navigation")),
          (a =
            0 < a.length &&
            ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)))
        : (a = !!(
            g.Qa.chrome &&
            g.Qa.chrome.loadTimes &&
            g.Qa.chrome.loadTimes() &&
            g.Qa.chrome.loadTimes().wasFetchedViaSpdy
          ));
      this.D = a ? this.G : 1;
      this.j = null;
      1 < this.D && (this.j = new Set());
      this.B = null;
      this.C = [];
    },
    Pwb = function (a) {
      return a.B ? !0 : a.j ? a.j.size >= a.D : !1;
    },
    Iwb = function (a) {
      return a.B ? 1 : a.j ? a.j.size : 0;
    },
    Gwb = function (a, b) {
      return a.B ? a.B == b : a.j ? a.j.has(b) : !1;
    },
    Jwb = function (a, b) {
      a.j ? a.j.add(b) : (a.B = b);
    },
    Lwb = function (a, b) {
      a.B && a.B == b ? (a.B = null) : a.j && a.j.has(b) && a.j.delete(b);
    },
    Qwb = function (a) {
      if (null != a.B) return a.C.concat(a.B.va);
      if (null != a.j && 0 !== a.j.size) {
        var b = a.C;
        a = g.u(a.j.values());
        for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.va);
        return b;
      }
      return g.Jb(a.C);
    },
    Rwb = function (a, b) {
      var c = new uwb();
      if (g.Qa.Image) {
        var d = new Image();
        d.onload = g.db(G8, c, d, "TestLoadImage: loaded", !0, b);
        d.onerror = g.db(G8, c, d, "TestLoadImage: error", !1, b);
        d.onabort = g.db(G8, c, d, "TestLoadImage: abort", !1, b);
        d.ontimeout = g.db(G8, c, d, "TestLoadImage: timeout", !1, b);
        g.Qa.setTimeout(function () {
          if (d.ontimeout) d.ontimeout();
        }, 1e4);
        d.src = a;
      } else b(!1);
    },
    G8 = function (a, b, c, d, e) {
      try {
        (b.onload = null),
          (b.onerror = null),
          (b.onabort = null),
          (b.ontimeout = null),
          e(d);
      } catch (f) {}
    },
    Swb = function () {
      this.j = new s8();
    },
    Twb = function (a, b, c) {
      var d = c || "";
      try {
        g.fo(a, function (e, f) {
          var h = e;
          g.Xa(e) && (h = g.rm(e));
          b.push(d + f + "=" + encodeURIComponent(h));
        });
      } catch (e) {
        throw (b.push(d + "type=" + encodeURIComponent("_badmap")), e);
      }
    },
    H8 = function (a, b, c) {
      return c && c.Z5 ? c.Z5[a] || b : b;
    },
    Uwb = function (a) {
      this.C = [];
      this.wc =
        this.Kd =
        this.Pa =
        this.Jc =
        this.j =
        this.Me =
        this.Ja =
        this.Oa =
        this.S =
        this.Ub =
        this.ea =
          null;
      this.fg = this.fb = 0;
      this.Tf = H8("failFast", !1, a);
      this.Ya = this.qa = this.ma = this.K = this.G = null;
      this.Ad = !0;
      this.Vd = this.eb = -1;
      this.vc = this.va = this.Ca = 0;
      this.Sf = H8("baseRetryDelayMs", 5e3, a);
      this.gg = H8("retryDelaySeedMs", 1e4, a);
      this.Uf = H8("forwardChannelMaxRetries", 2, a);
      this.Ud = H8("forwardChannelRequestTimeoutMs", 2e4, a);
      this.Le = (a && a.Fgb) || void 0;
      this.We = (a && a.Cgb) || !1;
      this.kb = void 0;
      this.Va = (a && a.V$) || !1;
      this.D = "";
      this.B = new Owb(a && a.Vdb);
      this.Gf = new Swb();
      this.Cb = (a && a.neb) || !1;
      this.xb = (a && a.beb) || !1;
      this.Cb && this.xb && (this.xb = !1);
      this.hg = (a && a.Pdb) || !1;
      a && a.peb && (this.Ad = !1);
      this.Yc = (!this.Cb && this.Ad && a && a.Ydb) || !1;
      this.Bd = void 0;
      a && a.tX && 0 < a.tX && (this.Bd = a.tX);
      this.qd = void 0;
      this.Td = 0;
      this.rb = !1;
      this.Mb = this.Fa = null;
    },
    D8 = function (a) {
      a.j && (Vwb(a), a.j.cancel(), (a.j = null));
    },
    Wwb = function (a) {
      D8(a);
      a.ma && (g.Qa.clearTimeout(a.ma), (a.ma = null));
      C8(a);
      a.B.cancel();
      a.K && ("number" === typeof a.K && g.Qa.clearTimeout(a.K), (a.K = null));
    },
    F8 = function (a) {
      Pwb(a.B) || a.K || ((a.K = !0), g.Qf(a.AS, a), (a.Ca = 0));
    },
    Ywb = function (a, b) {
      if (Iwb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
      if (a.K) return (a.C = b.va.concat(a.C)), !0;
      if (1 == a.Ih || 2 == a.Ih || a.Ca >= (a.Tf ? 0 : a.Uf)) return !1;
      a.K = v8((0, g.cb)(a.AS, a, b), Xwb(a, a.Ca));
      a.Ca++;
      return !0;
    },
    $wb = function (a, b) {
      var c;
      b ? (c = b.Ad) : (c = a.fb++);
      var d = a.Pa.clone();
      g.oo(d, "SID", a.D);
      g.oo(d, "RID", c);
      g.oo(d, "AID", a.eb);
      I8(a, d);
      a.S && a.ea && g.so(d, a.S, a.ea);
      c = new w8(a, a.D, c, a.Ca + 1);
      null === a.S && (c.Pa = a.ea);
      b && (a.C = b.va.concat(a.C));
      b = Zwb(a, c, 1e3);
      c.setTimeout(
        Math.round(0.5 * a.Ud) + Math.round(0.5 * a.Ud * Math.random())
      );
      Jwb(a.B, c);
      xwb(c, d, b);
    },
    I8 = function (a, b) {
      a.Oa &&
        g.Tc(a.Oa, function (c, d) {
          g.oo(b, d, c);
        });
      a.G &&
        g.fo({}, function (c, d) {
          g.oo(b, d, c);
        });
    },
    Zwb = function (a, b, c) {
      c = Math.min(a.C.length, c);
      var d = a.G ? (0, g.cb)(a.G.l1, a.G, a) : null;
      a: for (var e = a.C, f = -1; ; ) {
        var h = ["count=" + c];
        -1 == f
          ? 0 < c
            ? ((f = e[0].j), h.push("ofs=" + f))
            : (f = 0)
          : h.push("ofs=" + f);
        for (var l = !0, m = 0; m < c; m++) {
          var n = e[m].j,
            p = e[m].map;
          n -= f;
          if (0 > n) (f = Math.max(0, e[m].j - 100)), (l = !1);
          else
            try {
              Twb(p, h, "req" + n + "_");
            } catch (q) {
              d && d(p);
            }
        }
        if (l) {
          d = h.join("&");
          break a;
        }
      }
      a = a.C.splice(0, c);
      b.va = a;
      return d;
    },
    Mwb = function (a) {
      a.j || a.ma || ((a.vc = 1), g.Qf(a.zS, a), (a.va = 0));
    },
    Hwb = function (a) {
      if (a.j || a.ma || 3 <= a.va) return !1;
      a.vc++;
      a.ma = v8((0, g.cb)(a.zS, a), Xwb(a, a.va));
      a.va++;
      return !0;
    },
    Vwb = function (a) {
      null != a.Fa && (g.Qa.clearTimeout(a.Fa), (a.Fa = null));
    },
    axb = function (a) {
      a.j = new w8(a, a.D, "rpc", a.vc);
      null === a.S && (a.j.Pa = a.ea);
      a.j.xb = 0;
      var b = a.Kd.clone();
      g.oo(b, "RID", "rpc");
      g.oo(b, "SID", a.D);
      g.oo(b, "AID", a.eb);
      g.oo(b, "CI", a.Ya ? "0" : "1");
      !a.Ya && a.Bd && g.oo(b, "TO", a.Bd);
      g.oo(b, "TYPE", "xmlhttp");
      I8(a, b);
      a.S && a.ea && g.so(b, a.S, a.ea);
      a.kb && a.j.setTimeout(a.kb);
      var c = a.j;
      a = a.wc;
      c.Va = 1;
      c.S = a8(b.clone());
      c.ma = null;
      c.Ja = !0;
      wwb(c, a);
    },
    C8 = function (a) {
      null != a.qa && (g.Qa.clearTimeout(a.qa), (a.qa = null));
    },
    Fwb = function (a, b) {
      var c = null;
      if (a.j == b) {
        C8(a);
        Vwb(a);
        a.j = null;
        var d = 2;
      } else if (Gwb(a.B, b)) (c = b.va), Lwb(a.B, b), (d = 1);
      else return;
      if (0 != a.Ih)
        if (b.C)
          if (1 == d) {
            c = b.ma ? b.ma.length : 0;
            b = Date.now() - b.Ca;
            var e = a.Ca;
            d = qwb();
            d.dispatchEvent(new twb(d, c, b, e));
            F8(a);
          } else Mwb(a);
        else {
          var f = b.Mb;
          e = b.getLastError();
          if (
            3 == e ||
            (0 == e && 0 < f) ||
            !((1 == d && Ywb(a, b)) || (2 == d && Hwb(a)))
          )
            switch (
              (c && 0 < c.length && ((b = a.B), (b.C = b.C.concat(c))), e)
            ) {
              case 1:
                E8(a, 5);
                break;
              case 4:
                E8(a, 10);
                break;
              case 3:
                E8(a, 6);
                break;
              default:
                E8(a, 2);
            }
        }
    },
    Xwb = function (a, b) {
      var c = a.Sf + Math.floor(Math.random() * a.gg);
      a.isActive() || (c *= 2);
      return c * b;
    },
    E8 = function (a, b) {
      if (2 == b) {
        var c = null;
        a.G && (c = null);
        var d = (0, g.cb)(a.baa, a);
        c ||
          ((c = new g.go("//www.google.com/images/cleardot.gif")),
          (g.Qa.location && "http" == g.Qa.location.protocol) ||
            g.ho(c, "https"),
          a8(c));
        Rwb(c.toString(), d);
      } else u8(2);
      a.Ih = 0;
      a.G && a.G.CS(b);
      bxb(a);
      Wwb(a);
    },
    bxb = function (a) {
      a.Ih = 0;
      a.Mb = [];
      if (a.G) {
        var b = Qwb(a.B);
        if (0 != b.length || 0 != a.C.length)
          g.Mb(a.Mb, b),
            g.Mb(a.Mb, a.C),
            (a.B.C.length = 0),
            g.Jb(a.C),
            (a.C.length = 0);
        a.G.BS();
      }
    },
    cxb = function (a) {
      if (0 == a.Ih) return a.Mb;
      var b = [];
      g.Mb(b, Qwb(a.B));
      g.Mb(b, a.C);
      return b;
    },
    Kwb = function (a, b, c) {
      var d = g.po(c);
      "" != d.j
        ? (b && g.io(d, b + "." + d.j), g.jo(d, d.D))
        : ((d = g.Qa.location),
          (d = svb(
            d.protocol,
            b ? b + "." + d.hostname : d.hostname,
            +d.port,
            c
          )));
      b = a.Ja;
      c = a.Me;
      b && c && g.oo(d, b, c);
      g.oo(d, "VER", a.yS);
      I8(a, d);
      return d;
    },
    ywb = function (a, b, c) {
      if (b && !a.Va)
        throw Error("Can't create secondary domain capable XhrIo object.");
      b = c && a.We && !a.Le ? new g.vm(new g.ao({ PZ: !0 })) : new g.vm(a.Le);
      b.K = a.Va;
      return b;
    },
    dxb = function () {},
    exb = function () {
      if (g.bf && !g.Nc(10))
        throw Error("Environmental error: no available transport.");
    },
    K8 = function (a, b) {
      g.Gd.call(this);
      this.j = new Uwb(b);
      this.G = a;
      this.B = (b && b.K6) || null;
      a = (b && b.J6) || null;
      b &&
        b.Udb &&
        (a
          ? (a["X-Client-Protocol"] = "webchannel")
          : (a = { "X-Client-Protocol": "webchannel" }));
      this.j.ea = a;
      a = (b && b.kfb) || null;
      b &&
        b.AX &&
        (a
          ? (a["X-WebChannel-Content-Type"] = b.AX)
          : (a = { "X-WebChannel-Content-Type": b.AX }));
      b &&
        b.XU &&
        (a
          ? (a["X-WebChannel-Client-Profile"] = b.XU)
          : (a = { "X-WebChannel-Client-Profile": b.XU }));
      this.j.Ub = a;
      (a = b && b.jfb) && !g.dc(a) && (this.j.S = a);
      this.K = (b && b.V$) || !1;
      this.D = (b && b.bgb) || !1;
      (b = b && b.U5) &&
        !g.dc(b) &&
        ((this.j.Ja = b), g.gd(this.B, b) && g.md(this.B, b));
      this.C = new J8(this);
    },
    fxb = function (a) {
      nwb.call(this);
      a.__headers__ &&
        ((this.headers = a.__headers__),
        (this.statusCode = a.__status__),
        delete a.__headers__,
        delete a.__status__);
      var b = a.__sm__;
      b
        ? (this.data = (this.j = g.Yc(b)) ? g.nd(b, this.j) : b)
        : (this.data = a);
    },
    gxb = function (a) {
      owb.call(this);
      this.status = 1;
      this.errorCode = a;
    },
    J8 = function (a) {
      this.j = a;
    },
    hxb = function (a, b) {
      this.B = a;
      this.j = b;
    },
    ixb = function (a) {
      return cxb(a.j).map(function (b) {
        b = b.map;
        "__data__" in b && ((b = b.__data__), (b = a.B.D ? rvb(b) : b));
        return b;
      });
    },
    L8 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.Qa.setTimeout(function () {
        a();
      }, b);
    },
    N8 = function (a) {
      M8.dispatchEvent(new jxb(M8, a));
    },
    jxb = function (a) {
      g.xb.call(this, "statevent", a);
    },
    O8 = function (a, b, c, d) {
      this.j = a;
      this.D = b;
      this.S = c;
      this.K = d || 1;
      this.B = 45e3;
      this.C = new g.to(this);
      this.G = new g.gg();
      this.G.setInterval(250);
    },
    lxb = function (a, b, c) {
      a.Fx = 1;
      a.Zr = a8(b.clone());
      a.Ju = c;
      a.Ja = !0;
      kxb(a, null);
    },
    mxb = function (a, b, c, d, e) {
      a.Fx = 1;
      a.Zr = a8(b.clone());
      a.Ju = null;
      a.Ja = c;
      e && (a.tZ = !1);
      kxb(a, d);
    },
    kxb = function (a, b) {
      a.Ex = Date.now();
      P8(a);
      a.hs = a.Zr.clone();
      b8(a.hs, "t", a.K);
      a.VF = 0;
      a.ej = a.j.PK(a.j.MB() ? b : null);
      0 < a.NK && (a.TF = new r8((0, g.cb)(a.FS, a, a.ej), a.NK));
      a.C.Ua(a.ej, "readystatechange", a.n1);
      b = a.Iu ? g.pd(a.Iu) : {};
      a.Ju
        ? ((a.UF = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.ej.send(a.hs, a.UF, a.Ju, b))
        : ((a.UF = "GET"),
          a.tZ && !g.Pc && (b.Connection = "close"),
          a.ej.send(a.hs, a.UF, null, b));
      a.j.Nn(1);
    },
    pxb = function (a, b) {
      var c = a.VF,
        d = b.indexOf("\n", c);
      if (-1 == d) return nxb;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return oxb;
      d += 1;
      if (d + c > b.length) return nxb;
      b = b.slice(d, d + c);
      a.VF = d + c;
      return b;
    },
    rxb = function (a, b) {
      a.Ex = Date.now();
      P8(a);
      var c = b ? window.location.hostname : "";
      a.hs = a.Zr.clone();
      g.oo(a.hs, "DOMAIN", c);
      g.oo(a.hs, "t", a.K);
      try {
        a.jo = new ActiveXObject("htmlfile");
      } catch (m) {
        Q8(a);
        a.gs = 7;
        N8(22);
        R8(a);
        return;
      }
      var d = "<html><body>";
      if (b) {
        var e = "";
        for (b = 0; b < c.length; b++) {
          var f = c.charAt(b);
          if ("<" == f) f = e + "\\x3c";
          else if (">" == f) f = e + "\\x3e";
          else {
            if (f in S8) f = S8[f];
            else if (f in qxb) f = S8[f] = qxb[f];
            else {
              var h = f.charCodeAt(0);
              if (31 < h && 127 > h) var l = f;
              else {
                if (256 > h) {
                  if (((l = "\\x"), 16 > h || 256 < h)) l += "0";
                } else (l = "\\u"), 4096 > h && (l += "0");
                l += h.toString(16).toUpperCase();
              }
              f = S8[f] = l;
            }
            f = e + f;
          }
          e = f;
        }
        d += '<script>document.domain="' + e + '"\x3c/script>';
      }
      d += "</body></html>";
      g.Vd("b/12014412");
      c = g.le(d);
      a.jo.open();
      a.jo.write(g.ke(c));
      a.jo.close();
      a.jo.parentWindow.m = (0, g.cb)(a.x9, a);
      a.jo.parentWindow.d = (0, g.cb)(a.zY, a, !0);
      a.jo.parentWindow.rpcClose = (0, g.cb)(a.zY, a, !1);
      c = a.jo.createElement("DIV");
      a.jo.parentWindow.document.body.appendChild(c);
      d = g.ce(a.hs.toString()) || g.ie;
      d = g.Ae(g.ae(d));
      g.Vd("b/12014412");
      d = g.le('<iframe src="' + d + '"></iframe>');
      g.Rba(c, d);
      a.j.Nn(1);
    },
    P8 = function (a) {
      a.OK = Date.now() + a.B;
      sxb(a, a.B);
    },
    sxb = function (a, b) {
      if (null != a.Gx) throw Error("WatchDog timer not null");
      a.Gx = L8((0, g.cb)(a.m1, a), b);
    },
    txb = function (a) {
      a.Gx && (g.Qa.clearTimeout(a.Gx), (a.Gx = null));
    },
    R8 = function (a) {
      a.j.jh() || a.Hu || a.j.WF(a);
    },
    Q8 = function (a) {
      txb(a);
      g.sb(a.TF);
      a.TF = null;
      a.G.stop();
      a.C.Of();
      if (a.ej) {
        var b = a.ej;
        a.ej = null;
        b.abort();
        b.dispose();
      }
      a.jo && (a.jo = null);
    },
    uxb = function (a, b) {
      try {
        a.j.GS(a, b), a.j.Nn(4);
      } catch (c) {}
    },
    wxb = function (a, b, c, d, e) {
      if (0 == d) c(!1);
      else {
        var f = e || 0;
        d--;
        vxb(a, b, function (h) {
          h
            ? c(!0)
            : g.Qa.setTimeout(function () {
                wxb(a, b, c, d, f);
              }, f);
        });
      }
    },
    vxb = function (a, b, c) {
      var d = new Image();
      d.onload = function () {
        try {
          T8(d), c(!0);
        } catch (e) {}
      };
      d.onerror = function () {
        try {
          T8(d), c(!1);
        } catch (e) {}
      };
      d.onabort = function () {
        try {
          T8(d), c(!1);
        } catch (e) {}
      };
      d.ontimeout = function () {
        try {
          T8(d), c(!1);
        } catch (e) {}
      };
      g.Qa.setTimeout(function () {
        if (d.ontimeout) d.ontimeout();
      }, b);
      d.src = a;
    },
    T8 = function (a) {
      a.onload = null;
      a.onerror = null;
      a.onabort = null;
      a.ontimeout = null;
    },
    xxb = function (a) {
      this.j = a;
      this.B = new s8();
    },
    yxb = function (a) {
      var b = U8(a.j, a.nC, "/mail/images/cleardot.gif");
      a8(b);
      wxb(b.toString(), 5e3, (0, g.cb)(a.Q3, a), 3, 2e3);
      a.Nn(1);
    },
    zxb = function (a) {
      var b = a.j.K;
      if (null != b)
        N8(5), b ? (N8(11), V8(a.j, a, !1)) : (N8(12), V8(a.j, a, !0));
      else if (
        ((a.Jj = new O8(a)),
        (a.Jj.Iu = a.QK),
        (b = a.j),
        (b = U8(b, b.MB() ? a.LB : null, a.RK)),
        N8(5),
        !g.bf || g.Nc(10))
      )
        b8(b, "TYPE", "xmlhttp"), mxb(a.Jj, b, !1, a.LB, !1);
      else {
        b8(b, "TYPE", "html");
        var c = a.Jj;
        a = !!a.LB;
        c.Fx = 3;
        c.Zr = a8(b.clone());
        rxb(c, a);
      }
    },
    Axb = function (a, b, c) {
      this.j = 1;
      this.B = [];
      this.C = [];
      this.G = new s8();
      this.ea = a || null;
      this.K = null != b ? b : null;
      this.ma = c || !1;
    },
    Bxb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    Cxb = function (a, b, c, d) {
      g.xb.call(this, "timingevent", a);
      this.size = b;
      this.QA = d;
    },
    Dxb = function (a) {
      g.xb.call(this, "serverreachability", a);
    },
    Fxb = function (a) {
      a.o1(1, 0);
      a.XF = U8(a, null, a.SK);
      Exb(a);
    },
    Gxb = function (a) {
      a.Ks && (a.Ks.abort(), (a.Ks = null));
      a.Ug && (a.Ug.cancel(), (a.Ug = null));
      a.eq && (g.Qa.clearTimeout(a.eq), (a.eq = null));
      W8(a);
      a.Sj && (a.Sj.cancel(), (a.Sj = null));
      a.ls && (g.Qa.clearTimeout(a.ls), (a.ls = null));
    },
    Hxb = function (a, b) {
      if (0 == a.j)
        throw Error("Invalid operation: sending map when state is closed");
      a.B.push(new Bxb(a.q1++, b));
      (2 != a.j && 3 != a.j) || Exb(a);
    },
    Ixb = function (a) {
      var b = 0;
      a.Ug && b++;
      a.Sj && b++;
      return b;
    },
    Exb = function (a) {
      a.Sj || a.ls || ((a.ls = L8((0, g.cb)(a.KS, a), 0)), (a.Ix = 0));
    },
    Lxb = function (a, b) {
      if (1 == a.j) {
        if (!b) {
          a.OB = Math.floor(1e5 * Math.random());
          b = a.OB++;
          var c = new O8(a, "", b);
          c.Iu = a.Bo;
          var d = Jxb(a),
            e = a.XF.clone();
          g.oo(e, "RID", b);
          g.oo(e, "CVER", "1");
          X8(a, e);
          lxb(c, e, d);
          a.Sj = c;
          a.j = 2;
        }
      } else 3 == a.j && (b ? Kxb(a, b) : 0 == a.B.length || a.Sj || Kxb(a));
    },
    Kxb = function (a, b) {
      if (b)
        if (6 < a.Ku) {
          a.B = a.C.concat(a.B);
          a.C.length = 0;
          var c = a.OB - 1;
          b = Jxb(a);
        } else (c = b.S), (b = b.Ju);
      else (c = a.OB++), (b = Jxb(a));
      var d = a.XF.clone();
      g.oo(d, "SID", a.D);
      g.oo(d, "RID", c);
      g.oo(d, "AID", a.Jx);
      X8(a, d);
      c = new O8(a, a.D, c, a.Ix + 1);
      c.Iu = a.Bo;
      c.setTimeout(1e4 + Math.round(1e4 * Math.random()));
      a.Sj = c;
      lxb(c, d, b);
    },
    X8 = function (a, b) {
      a.Hi &&
        (a = a.Hi.OS()) &&
        g.Tc(a, function (c, d) {
          g.oo(b, d, c);
        });
    },
    Jxb = function (a) {
      var b = Math.min(a.B.length, 1e3),
        c = ["count=" + b];
      if (6 < a.Ku && 0 < b) {
        var d = a.B[0].j;
        c.push("ofs=" + d);
      } else d = 0;
      for (var e = {}, f = 0; f < b; e = { Yz: e.Yz }, f++) {
        e.Yz = a.B[f].j;
        var h = a.B[f].map;
        e.Yz = 6 >= a.Ku ? f : e.Yz - d;
        try {
          g.Tc(
            h,
            (function (l) {
              return function (m, n) {
                c.push("req" + l.Yz + "_" + n + "=" + encodeURIComponent(m));
              };
            })(e)
          );
        } catch (l) {
          c.push("req" + e.Yz + "_type=" + encodeURIComponent("_badmap"));
        }
      }
      a.C = a.C.concat(a.B.splice(0, b));
      return c.join("&");
    },
    Mxb = function (a) {
      a.Ug ||
        a.eq ||
        ((a.S = 1), (a.eq = L8((0, g.cb)(a.JS, a), 0)), (a.Hx = 0));
    },
    Oxb = function (a) {
      if (a.Ug || a.eq || 3 <= a.Hx) return !1;
      a.S++;
      a.eq = L8((0, g.cb)(a.JS, a), Nxb(a, a.Hx));
      a.Hx++;
      return !0;
    },
    V8 = function (a, b, c) {
      a.qK = null == a.K ? c : !a.K;
      a.Co = b.cq;
      a.ma || Fxb(a);
    },
    W8 = function (a) {
      null != a.Lu && (g.Qa.clearTimeout(a.Lu), (a.Lu = null));
    },
    Nxb = function (a, b) {
      var c = 5e3 + Math.floor(1e4 * Math.random());
      a.isActive() || (c *= 2);
      return c * b;
    },
    Y8 = function (a, b) {
      if (2 == b || 9 == b) {
        var c = null;
        a.Hi && (c = null);
        var d = (0, g.cb)(a.aaa, a);
        c || ((c = new g.go("//www.google.com/images/cleardot.gif")), a8(c));
        vxb(c.toString(), 1e4, d);
      } else N8(2);
      Pxb(a, b);
    },
    Pxb = function (a, b) {
      a.j = 0;
      a.Hi && a.Hi.LS(b);
      Qxb(a);
      Gxb(a);
    },
    Qxb = function (a) {
      a.j = 0;
      a.Co = -1;
      if (a.Hi)
        if (0 == a.C.length && 0 == a.B.length) a.Hi.TK();
        else {
          var b = g.Jb(a.C),
            c = g.Jb(a.B);
          a.C.length = 0;
          a.B.length = 0;
          a.Hi.TK(b, c);
        }
    },
    U8 = function (a, b, c) {
      var d = g.po(c);
      if ("" != d.j) b && g.io(d, b + "." + d.j), g.jo(d, d.D);
      else {
        var e = window.location;
        d = svb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
      }
      a.NB &&
        g.Tc(a.NB, function (f, h) {
          g.oo(d, h, f);
        });
      g.oo(d, "VER", a.Ku);
      X8(a, d);
      return d;
    },
    Rxb = function () {},
    Sxb = function () {
      this.j = [];
      this.B = [];
    },
    Txb = function (a) {
      g.xb.call(this, "channelMessage");
      this.message = a;
    },
    Uxb = function (a) {
      g.xb.call(this, "channelError");
      this.error = a;
    },
    Vxb = function (a, b) {
      this.action = a;
      this.params = b || {};
    },
    Z8 = function (a, b) {
      g.J.call(this);
      this.j = new g.au(this.p9, 0, this);
      g.L(this, this.j);
      this.Ti = 5e3;
      this.B = 0;
      if ("function" === typeof a) b && (a = (0, g.cb)(a, b));
      else if (a && "function" === typeof a.handleEvent)
        a = (0, g.cb)(a.handleEvent, a);
      else throw Error("Invalid listener argument");
      this.C = a;
    },
    Wxb = function (a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      d =
        void 0 === d
          ? function () {
              return "";
            }
          : d;
      e = void 0 === e ? !1 : e;
      this.Ca = a;
      this.S = b;
      this.C = new g.Iu();
      this.B = new Z8(this.y$, this);
      this.j = null;
      this.qa = !1;
      this.K = null;
      this.ea = "";
      this.ma = this.G = 0;
      this.D = [];
      this.Va = c;
      this.va = d;
      this.Ya = e;
      this.Pa = new tvb();
      this.Fa = new vvb();
      this.Oa = new xvb();
      this.Ja = new zvb();
      this.eb = new Bvb();
      this.fb = new Cvb();
    },
    Xxb = function (a) {
      if (a.j) {
        var b = a.va(),
          c = a.j.Bo || {};
        b
          ? (c["x-youtube-lounge-xsrf-token"] = b)
          : delete c["x-youtube-lounge-xsrf-token"];
        a.j.Bo = c;
      }
    },
    $8 = function (a) {
      this.scheme = "https";
      this.port = this.domain = "";
      this.j = "/api/lounge";
      this.B = !0;
      a = a || document.location.href;
      var b = Number(g.wl(4, a)) || "";
      b && (this.port = ":" + b);
      this.domain = g.xl(a) || "";
      a = g.mc();
      0 <= a.search("MSIE") &&
        ((a = a.match(/MSIE ([\d.]+)/)[1]),
        0 > g.lc(a, "10.0") && (this.B = !1));
    },
    a9 = function (a, b) {
      var c = a.j;
      a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
      return g.Dl(c + b, {});
    },
    Yxb = function (a, b, c, d, e) {
      a = {
        format: "JSON",
        method: "POST",
        context: a,
        timeout: 5e3,
        withCredentials: !1,
        onSuccess: g.db(a.D, d, !0),
        onError: g.db(a.C, e),
        onTimeout: g.db(a.G, e),
      };
      c &&
        ((a.postParams = c),
        (a.headers = { "Content-Type": "application/x-www-form-urlencoded" }));
      return g.oC(b, a);
    },
    Zxb = function (a, b) {
      g.Gd.call(this);
      var c = this;
      this.Hd = a();
      this.Hd.subscribe("handlerOpened", this.w1, this);
      this.Hd.subscribe("handlerClosed", this.t1, this);
      this.Hd.subscribe("handlerError", function (d, e) {
        c.onError(e);
      });
      this.Hd.subscribe("handlerMessage", this.v1, this);
      this.j = b;
    },
    $xb = function (a, b, c) {
      var d = this;
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      var e = void 0 === e ? new exb() : e;
      var f = void 0 === f ? new g.Iu() : f;
      this.pathPrefix = a;
      this.j = b;
      this.Ca = c;
      this.G = f;
      this.ma = null;
      this.ea = this.S = 0;
      this.channel = null;
      this.K = 0;
      this.C = new Z8(function () {
        d.C.isActive();
        var h;
        0 === (null == (h = d.channel) ? void 0 : Iwb(new hxb(h, h.j).j.B)) &&
          d.connect(d.ma, d.S);
      });
      this.D = {};
      this.B = {};
      this.qa = !1;
      this.logger = null;
      this.va = [];
      this.Og = void 0;
      this.Pa = new tvb();
      this.Fa = new vvb();
      this.Oa = new xvb();
      this.Ja = new zvb();
    },
    ayb = function (a) {
      g.yd(a.channel, "m", function () {
        a.K = 3;
        a.C.reset();
        a.ma = null;
        a.S = 0;
        for (var b = g.u(a.va), c = b.next(); !c.done; c = b.next())
          (c = c.value), a.channel && a.channel.send(c);
        a.va = [];
        a.ra("webChannelOpened");
        uvb(a.Pa, "WEB_CHANNEL");
      });
      g.yd(a.channel, "n", function () {
        a.K = 0;
        a.C.isActive() || a.ra("webChannelClosed");
        var b,
          c = null == (b = a.channel) ? void 0 : ixb(new hxb(b, b.j));
        c && (a.va = [].concat(g.pa(c)));
        wvb(a.Fa, "WEB_CHANNEL");
      });
      g.yd(a.channel, "p", function (b) {
        var c = b.data;
        "gracefulReconnect" === c[0]
          ? (a.C.start(), a.channel && a.channel.close())
          : a.ra("webChannelMessage", new Vxb(c[0], c[1]));
        a.Og = b.statusCode;
        yvb(a.Oa, "WEB_CHANNEL");
      });
      g.yd(a.channel, "o", function () {
        401 === a.Og || a.C.start();
        a.ra("webChannelError");
        Avb(a.Ja, "WEB_CHANNEL");
      });
    },
    byb = function (a) {
      var b = a.Ca();
      b
        ? (a.D["x-youtube-lounge-xsrf-token"] = b)
        : delete a.D["x-youtube-lounge-xsrf-token"];
    },
    cyb = function (a) {
      g.Gd.call(this);
      this.j = a();
      this.j.subscribe("webChannelOpened", this.B1, this);
      this.j.subscribe("webChannelClosed", this.z1, this);
      this.j.subscribe("webChannelError", this.onError, this);
      this.j.subscribe("webChannelMessage", this.A1, this);
    },
    dyb = function (a, b, c, d, e) {
      function f() {
        return new Wxb(a9(a, "/bc"), b, !1, c, d);
      }
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      return g.SB("enable_mdx_web_channel_desktop")
        ? new cyb(function () {
            return new $xb(a9(a, "/wc"), b, c);
          })
        : new Zxb(f, e);
    },
    hyb = function () {
      var a = eyb;
      fyb();
      b9.push(a);
      gyb();
    },
    c9 = function (a, b) {
      fyb();
      var c = iyb(a, String(b));
      0 == b9.length
        ? jyb(c)
        : (gyb(),
          g.Yb(b9, function (d) {
            d(c);
          }));
    },
    d9 = function (a) {
      c9("CP", a);
    },
    fyb = function () {
      b9 ||
        ((b9 = g.Ta("yt.mdx.remote.debug.handlers_") || []),
        g.Sa("yt.mdx.remote.debug.handlers_", b9));
    },
    jyb = function (a) {
      var b = (e9 + 1) % 50;
      e9 = b;
      f9[b] = a;
      g9 || (g9 = 49 == b);
    },
    gyb = function () {
      var a = b9;
      if (f9[0]) {
        var b = g9 ? e9 : -1;
        do {
          b = (b + 1) % 50;
          var c = f9[b];
          g.Yb(a, function (d) {
            d(c);
          });
        } while (b != e9);
        f9 = Array(50);
        e9 = -1;
        g9 = !1;
      }
    },
    iyb = function (a, b) {
      var c = (Date.now() - kyb) / 1e3;
      c.toFixed && (c = c.toFixed(3));
      var d = [];
      d.push("[", c + "s", "] ");
      d.push("[", "yt.mdx.remote", "] ");
      d.push(a + ": " + b, "\n");
      return d.join("");
    },
    h9 = function (a) {
      g.lG.call(this);
      this.K = a;
      this.screens = [];
    },
    lyb = function (a, b) {
      var c = a.get(b.uuid) || a.get(b.id);
      if (c)
        return (
          (a = c.name),
          (c.id = b.id || c.id),
          (c.name = b.name),
          (c.token = b.token),
          (c.uuid = b.uuid || c.uuid),
          c.name != a
        );
      a.screens.push(b);
      return !0;
    },
    myb = function (a, b) {
      var c = a.screens.length != b.length;
      a.screens = g.ts(a.screens, function (f) {
        return !!Ovb(b, f);
      });
      for (var d = 0, e = b.length; d < e; d++) c = lyb(a, b[d]) || c;
      return c;
    },
    nyb = function (a, b) {
      var c = a.screens.length;
      a.screens = g.ts(a.screens, function (d) {
        return !(d || b ? (!d != !b ? 0 : d.id == b.id) : 1);
      });
      return a.screens.length < c;
    },
    oyb = function (a, b, c, d, e) {
      g.lG.call(this);
      this.C = a;
      this.S = b;
      this.D = c;
      this.K = d;
      this.G = e;
      this.B = 0;
      this.j = null;
      this.pd = NaN;
    },
    j9 = function (a) {
      h9.call(this, "LocalScreenService");
      this.B = a;
      this.j = NaN;
      i9(this);
      this.info("Initializing with " + Lvb(this.screens));
    },
    pyb = function (a) {
      if (a.screens.length) {
        var b = g.Yp(a.screens, function (d) {
            return d.id;
          }),
          c = a9(a.B, "/pairing/get_lounge_token_batch");
        Yxb(
          a.B,
          c,
          { screen_ids: b.join(",") },
          (0, g.cb)(a.s5, a),
          (0, g.cb)(a.r5, a)
        );
      }
    },
    i9 = function (a) {
      if (g.SB("deprecate_pair_servlet_enabled")) return myb(a, []);
      var b = Kvb(Vvb());
      b = g.ts(b, function (c) {
        return !c.uuid;
      });
      return myb(a, b);
    },
    k9 = function (a, b) {
      Xvb(g.Yp(a.screens, Ivb));
      b && Wvb();
    },
    ryb = function (a, b) {
      g.lG.call(this);
      this.K = b;
      b = (b = g.gD("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
      for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
        var h = d[f].id;
        c[h] = g.Db(b, h);
      }
      this.j = c;
      this.G = a;
      this.C = this.D = NaN;
      this.B = null;
      qyb("Initialized with " + g.rm(this.j));
    },
    syb = function (a, b, c) {
      var d = a9(a.G, "/pairing/get_screen_availability");
      Yxb(
        a.G,
        d,
        { lounge_token: b.token },
        (0, g.cb)(function (e) {
          e = e.screens || [];
          for (var f = e.length, h = 0; h < f; ++h)
            if (e[h].loungeToken == b.token) {
              c("online" == e[h].status);
              return;
            }
          c(!1);
        }, a),
        (0, g.cb)(function () {
          c(!1);
        }, a)
      );
    },
    uyb = function (a, b) {
      a: if (pvb(b) != pvb(a.j)) var c = !1;
      else {
        c = g.fd(b);
        for (var d = c.length, e = 0; e < d; ++e)
          if (!a.j[c[e]]) {
            c = !1;
            break a;
          }
        c = !0;
      }
      c ||
        (qyb("Updated online screens: " + g.rm(a.j)),
        (a.j = b),
        a.ra("screenChange"));
      tyb(a);
    },
    l9 = function (a) {
      isNaN(a.C) || g.lC(a.C);
      a.C = g.jC((0, g.cb)(a.JQ, a), 0 < a.D && a.D < g.eb() ? 2e4 : 1e4);
    },
    qyb = function (a) {
      c9("OnlineScreenService", a);
    },
    vyb = function (a) {
      var b = {};
      g.Yb(a.K(), function (c) {
        c.token
          ? (b[c.token] = c.id)
          : this.eg("Requesting availability of screen w/o lounge token.");
      });
      return b;
    },
    tyb = function (a) {
      a = g.fd(
        g.Uc(a.j, function (b) {
          return b;
        })
      );
      g.Ub(a);
      a.length
        ? g.fD("yt-remote-online-screen-ids", a.join(","), 60)
        : g.hD("yt-remote-online-screen-ids");
    },
    m9 = function (a, b) {
      b = void 0 === b ? !1 : b;
      h9.call(this, "ScreenService");
      this.D = a;
      this.S = b;
      this.j = this.B = null;
      this.C = [];
      this.G = {};
      wyb(this);
    },
    yyb = function (a, b, c, d, e, f) {
      a.info("getAutomaticScreenByIds " + c + " / " + b);
      c || (c = a.G[b]);
      var h = a.Nk(),
        l = c ? i8(h, c) : null;
      (c && (a.S || l)) || (l = i8(h, b));
      if (l) {
        l.uuid = b;
        var m = n9(a, l);
        syb(a.j, m, function (n) {
          e(n ? m : null);
        });
      } else
        c
          ? xyb(
              a,
              c,
              (0, g.cb)(function (n) {
                var p = n9(
                  this,
                  new f8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || "",
                  })
                );
                syb(this.j, p, function (q) {
                  e(q ? p : null);
                });
              }, a),
              f
            )
          : e(null);
    },
    zyb = function (a, b) {
      for (var c = a.screens.length, d = 0; d < c; ++d)
        if (a.screens[d].name == b) return a.screens[d];
      return null;
    },
    Ayb = function (a, b, c) {
      syb(a.j, b, c);
    },
    xyb = function (a, b, c, d) {
      a.info("requestLoungeToken_ for " + b);
      var e = {
        postParams: { screen_ids: b },
        method: "POST",
        context: a,
        onSuccess: function (f, h) {
          f = (h && h.screens) || [];
          f[0] && f[0].screenId == b
            ? c(f[0].loungeToken)
            : d(Error("Missing lounge token in token response"));
        },
        onError: function () {
          d(Error("Request screen lounge token failed"));
        },
      };
      g.oC(a9(a.D, "/pairing/get_lounge_token_batch"), e);
    },
    Byb = function (a) {
      a.screens = a.B.Nk();
      var b = a.G,
        c = {},
        d;
      for (d in b) c[b[d]] = d;
      b = a.screens.length;
      for (d = 0; d < b; ++d) {
        var e = a.screens[d];
        e.uuid = c[e.id] || "";
      }
      a.info("Updated manual screens: " + Lvb(a.screens));
    },
    wyb = function (a) {
      Cyb(a);
      a.B = new j9(a.D);
      a.B.subscribe("screenChange", (0, g.cb)(a.C5, a));
      Byb(a);
      a.S || (a.C = Kvb(g.gD("yt-remote-automatic-screen-cache") || []));
      Cyb(a);
      a.info("Initializing automatic screens: " + Lvb(a.C));
      a.j = new ryb(a.D, (0, g.cb)(a.Nk, a, !0));
      a.j.subscribe(
        "screenChange",
        (0, g.cb)(function () {
          this.ra("onlineScreenChange");
        }, a)
      );
    },
    n9 = function (a, b) {
      var c = a.get(b.id);
      c
        ? ((c.uuid = b.uuid), (b = c))
        : ((c = i8(a.C, b.uuid))
            ? ((c.id = b.id), (c.token = b.token), (b = c))
            : a.C.push(b),
          a.S || Dyb(a));
      Cyb(a);
      a.G[b.uuid] = b.id;
      g.fD("yt-remote-device-id-map", a.G, 31536e3);
      return b;
    },
    Dyb = function (a) {
      a = g.ts(a.C, function (b) {
        return "shortLived" != b.idType;
      });
      g.fD("yt-remote-automatic-screen-cache", g.Yp(a, Ivb));
    },
    Cyb = function (a) {
      a.G = g.gD("yt-remote-device-id-map") || {};
    },
    o9 = function (a, b, c) {
      g.lG.call(this);
      this.Ja = c;
      this.D = a;
      this.B = b;
      this.j = null;
    },
    p9 = function (a, b) {
      a.j = b;
      a.ra("sessionScreen", a.j);
    },
    Eyb = function (a, b) {
      a.j && ((a.j.token = b), n9(a.D, a.j));
      a.ra("sessionScreen", a.j);
    },
    q9 = function (a, b) {
      c9(a.Ja, b);
    },
    r9 = function (a, b, c) {
      o9.call(this, a, b, "CastSession");
      var d = this;
      this.config_ = c;
      this.C = null;
      this.va = (0, g.cb)(this.G1, this);
      this.Fa = (0, g.cb)(this.F9, this);
      this.qa = g.jC(function () {
        Fyb(d, null);
      }, 12e4);
      this.S = this.G = this.K = this.ma = 0;
      this.Ca = !1;
      this.ea = "unknown";
    },
    Hyb = function (a, b) {
      g.lC(a.S);
      a.S = 0;
      0 == b
        ? Gyb(a)
        : (a.S = g.jC(function () {
            Gyb(a);
          }, b));
    },
    Gyb = function (a) {
      Iyb(a, "getLoungeToken");
      g.lC(a.G);
      a.G = g.jC(function () {
        Jyb(a, null);
      }, 3e4);
    },
    Iyb = function (a, b) {
      a.info("sendYoutubeMessage_: " + b + " " + g.rm());
      var c = {};
      c.type = b;
      a.C
        ? a.C.sendMessage(
            "urn:x-cast:com.google.youtube.mdx",
            c,
            function () {},
            (0, g.cb)(function () {
              q9(this, "Failed to send message: " + b + ".");
            }, a)
          )
        : q9(a, "Sending yt message without session: " + g.rm(c));
    },
    Kyb = function (a, b) {
      b
        ? (a.info("onConnectedScreenId_: Received screenId: " + b),
          (a.j && a.j.id == b) ||
            a.aW(
              b,
              function (c) {
                p9(a, c);
              },
              function () {
                return a.yj();
              },
              5
            ))
        : a.yj(Error("Waiting for session status timed out."));
    },
    Myb = function (a, b, c) {
      a.info(
        "onConnectedScreenData_: Received screenData: " + JSON.stringify(b)
      );
      var d = new f8(b);
      Lyb(
        a,
        d,
        function (e) {
          e
            ? ((a.Ca = !0), n9(a.D, d), p9(a, d), (a.ea = "unknown"), Hyb(a, c))
            : (g.VB(
                Error(
                  "CastSession, RemoteScreen from screenData: " +
                    JSON.stringify(b) +
                    " is not online."
                )
              ),
              a.yj());
        },
        5
      );
    },
    Fyb = function (a, b) {
      g.lC(a.qa);
      a.qa = 0;
      b
        ? a.config_.enableCastLoungeToken && b.loungeToken
          ? b.deviceId
            ? (a.j && a.j.uuid == b.deviceId) ||
              (b.loungeTokenRefreshIntervalMs
                ? Myb(
                    a,
                    {
                      name: a.B.friendlyName,
                      screenId: b.screenId,
                      loungeToken: b.loungeToken,
                      dialId: b.deviceId,
                      screenIdType: "shortLived",
                    },
                    b.loungeTokenRefreshIntervalMs
                  )
                : (g.VB(
                    Error(
                      "No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " +
                        JSON.stringify(b) +
                        "."
                    )
                  ),
                  Kyb(a, b.screenId)))
            : (g.VB(
                Error(
                  "No device id presents in mdxSessionStatusData: " +
                    JSON.stringify(b) +
                    "."
                )
              ),
              Kyb(a, b.screenId))
          : Kyb(a, b.screenId)
        : a.yj(Error("Waiting for session status timed out."));
    },
    Jyb = function (a, b) {
      g.lC(a.G);
      a.G = 0;
      var c = null;
      if (b)
        if (b.loungeToken) {
          var d;
          (null == (d = a.j) ? void 0 : d.token) == b.loungeToken &&
            (c = "staleLoungeToken");
        } else c = "missingLoungeToken";
      else c = "noLoungeTokenResponse";
      c
        ? (a.info(
            "Did not receive a new lounge token in onLoungeToken_ with data: " +
              (JSON.stringify(b) + ", error: " + c)
          ),
          (a.ea = c),
          Hyb(a, 3e4))
        : (Eyb(a, b.loungeToken),
          (a.Ca = !1),
          (a.ea = "unknown"),
          Hyb(a, b.loungeTokenRefreshIntervalMs));
    },
    Lyb = function (a, b, c, d) {
      g.lC(a.K);
      a.K = 0;
      Ayb(a.D, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.K = g.jC(function () {
              Lyb(a, b, c, d - 1);
            }, 300));
      });
    },
    Nyb = function (a) {
      g.lC(a.ma);
      a.ma = 0;
      g.lC(a.K);
      a.K = 0;
      g.lC(a.qa);
      a.qa = 0;
      g.lC(a.G);
      a.G = 0;
      g.lC(a.S);
      a.S = 0;
    },
    s9 = function (a, b, c, d) {
      o9.call(this, a, b, "DialSession");
      this.config_ = d;
      this.C = this.ma = null;
      this.Fa = "";
      this.Va = c;
      this.Pa = null;
      this.qa = function () {};
      this.ea = NaN;
      this.Oa = (0, g.cb)(this.H1, this);
      this.G = function () {};
      this.S = this.K = 0;
      this.va = !1;
      this.Ca = "unknown";
    },
    t9 = function (a) {
      var b;
      return !!(
        a.config_.enableDialLoungeToken &&
        (null == (b = a.C) ? 0 : b.getDialAppInfo)
      );
    },
    Oyb = function (a) {
      a.G = a.D.QS(
        a.Fa,
        a.B.label,
        a.B.friendlyName,
        t9(a),
        function (b, c) {
          a.G = function () {};
          a.va = !0;
          p9(a, b);
          "shortLived" == b.idType && 0 < c && u9(a, c);
        },
        function (b) {
          a.G = function () {};
          a.yj(b);
        }
      );
    },
    Pyb = function (a) {
      var b = {};
      b.pairingCode = a.Fa;
      b.theme = a.Va;
      Zvb() && (b.env_useStageMdx = 1);
      return g.Cl(b);
    },
    Qyb = function (a) {
      return new Promise(function (b) {
        a.Fa = Mvb();
        if (a.Pa) {
          var c = new chrome.cast.DialLaunchResponse(!0, Pyb(a));
          b(c);
          Oyb(a);
        } else
          (a.qa = function () {
            g.lC(a.ea);
            a.qa = function () {};
            a.ea = NaN;
            var d = new chrome.cast.DialLaunchResponse(!0, Pyb(a));
            b(d);
            Oyb(a);
          }),
            (a.ea = g.jC(function () {
              a.qa();
            }, 100));
      });
    },
    Syb = function (a, b, c) {
      a.info(
        "initOnConnectedScreenDataPromise_: Received screenData: " +
          JSON.stringify(b)
      );
      var d = new f8(b);
      return new Promise(function (e) {
        Ryb(
          a,
          d,
          function (f) {
            f
              ? ((a.va = !0), n9(a.D, d), p9(a, d), u9(a, c))
              : g.VB(
                  Error(
                    "DialSession, RemoteScreen from screenData: " +
                      JSON.stringify(b) +
                      " is not online."
                  )
                );
            e(f);
          },
          5
        );
      }).then(function (e) {
        return e ? new chrome.cast.DialLaunchResponse(!1) : Qyb(a);
      });
    },
    Tyb = function (a, b) {
      var c = a.ma.receiver.label,
        d = a.B.friendlyName;
      return new Promise(function (e) {
        yyb(
          a.D,
          c,
          b,
          d,
          function (f) {
            f && f.token && p9(a, f);
            e(f);
          },
          function (f) {
            q9(a, "Failed to get DIAL screen: " + f);
            e(null);
          }
        );
      }).then(function (e) {
        return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : Qyb(a);
      });
    },
    Ryb = function (a, b, c, d) {
      g.lC(a.K);
      a.K = 0;
      Ayb(a.D, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.K = g.jC(function () {
              Ryb(a, b, c, d - 1);
            }, 300));
      });
    },
    u9 = function (a, b) {
      a.info("getDialAppInfoWithTimeout_ " + b);
      t9(a) &&
        (g.lC(a.S),
        (a.S = 0),
        0 == b
          ? Uyb(a)
          : (a.S = g.jC(function () {
              Uyb(a);
            }, b)));
    },
    Uyb = function (a) {
      t9(a) &&
        a.C.getDialAppInfo(
          function (b) {
            a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
            b = b.extraData || {};
            var c = null;
            if (b.loungeToken) {
              var d;
              (null == (d = a.j) ? void 0 : d.token) == b.loungeToken &&
                (c = "staleLoungeToken");
            } else c = "missingLoungeToken";
            c
              ? ((a.Ca = c), u9(a, 3e4))
              : ((a.va = !1),
                (a.Ca = "unknown"),
                Eyb(a, b.loungeToken),
                u9(a, b.loungeTokenRefreshIntervalMs));
          },
          function (b) {
            a.info("getDialAppInfo error: " + b);
            a.Ca = "noLoungeTokenResponse";
            u9(a, 3e4);
          }
        );
    },
    Vyb = function (a) {
      g.lC(a.K);
      a.K = 0;
      g.lC(a.S);
      a.S = 0;
      a.G();
      a.G = function () {};
      g.lC(a.ea);
    },
    v9 = function (a, b) {
      o9.call(this, a, b, "ManualSession");
      this.C = g.jC((0, g.cb)(this.Rz, this, null), 150);
    },
    w9 = function (a, b) {
      g.lG.call(this);
      this.config_ = b;
      this.B = a;
      this.ma = b.appId || "233637DE";
      this.D = b.theme || "cl";
      this.ea = b.disableCastApi || !1;
      this.K = b.forceMirroring || !1;
      this.j = null;
      this.S = !1;
      this.C = [];
      this.G = (0, g.cb)(this.A8, this);
    },
    Wyb = function (a, b) {
      return b
        ? g.Bb(
            a.C,
            function (c) {
              return g8(b, c.label);
            },
            a
          )
        : null;
    },
    x9 = function (a) {
      c9("Controller", a);
    },
    eyb = function (a) {
      window.chrome &&
        chrome.cast &&
        chrome.cast.logMessage &&
        chrome.cast.logMessage(a);
    },
    y9 = function (a) {
      return a.S || !!a.C.length || !!a.j;
    },
    z9 = function (a, b, c) {
      b != a.j &&
        (g.sb(a.j),
        (a.j = b)
          ? (c
              ? a.ra("yt-remote-cast2-receiver-resumed", b.B)
              : a.ra("yt-remote-cast2-receiver-selected", b.B),
            b.subscribe("sessionScreen", (0, g.cb)(a.xY, a, b)),
            b.subscribe("sessionFailed", function () {
              return Xyb(a, b);
            }),
            b.j
              ? a.ra("yt-remote-cast2-session-change", b.j)
              : c && a.j.Rz(null))
          : a.ra("yt-remote-cast2-session-change", null));
    },
    Xyb = function (a, b) {
      a.j == b && a.ra("yt-remote-cast2-session-failed");
    },
    Yyb = function (a) {
      var b = a.B.PS(),
        c = a.j && a.j.B;
      a = g.Yp(
        b,
        function (d) {
          c && g8(d, c.label) && (c = null);
          var e = d.uuid ? d.uuid : d.id,
            f = Wyb(this, d);
          f
            ? ((f.label = e), (f.friendlyName = d.name))
            : ((f = new chrome.cast.Receiver(e, d.name)),
              (f.receiverType = chrome.cast.ReceiverType.CUSTOM));
          return f;
        },
        a
      );
      c &&
        (c.receiverType != chrome.cast.ReceiverType.CUSTOM &&
          ((c = new chrome.cast.Receiver(c.label, c.friendlyName)),
          (c.receiverType = chrome.cast.ReceiverType.CUSTOM)),
        a.push(c));
      return a;
    },
    ezb = function (a, b, c, d) {
      d.disableCastApi
        ? A9("Cannot initialize because disabled by Mdx config.")
        : Zyb()
        ? $yb(b, d) &&
          (azb(!0),
          window.chrome && chrome.cast && chrome.cast.isAvailable
            ? bzb(a, c)
            : ((window.__onGCastApiAvailable = function (e, f) {
                e
                  ? bzb(a, c)
                  : (B9("Failed to load cast API: " + f),
                    czb(!1),
                    azb(!1),
                    g.hD("yt-remote-cast-available"),
                    g.hD("yt-remote-cast-receiver"),
                    dzb(),
                    c(!1));
              }),
              d.loadCastApiSetupScript
                ? g.pra(
                    "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"
                  )
                : 0 <= window.navigator.userAgent.indexOf("Android") &&
                  0 <= window.navigator.userAgent.indexOf("Chrome/") &&
                  window.navigator.presentation
                ? 60 <= awb() && jwb()
                : !window.chrome ||
                  !window.navigator.presentation ||
                  0 <= window.navigator.userAgent.indexOf("Edge")
                ? ewb()
                : 89 <= awb()
                ? lwb()
                : (iwb(), p8(kwb.map(fwb)))))
        : A9("Cannot initialize because not running Chrome");
    },
    dzb = function () {
      A9("dispose");
      var a = C9();
      a && a.dispose();
      g.Sa("yt.mdx.remote.cloudview.instance_", null);
      fzb(!1);
      g.TE(gzb);
      gzb.length = 0;
    },
    D9 = function () {
      return !!g.gD("yt-remote-cast-installed");
    },
    hzb = function () {
      var a = g.gD("yt-remote-cast-receiver");
      return a ? a.friendlyName : null;
    },
    izb = function () {
      A9("clearCurrentReceiver");
      g.hD("yt-remote-cast-receiver");
    },
    jzb = function () {
      return D9()
        ? C9()
          ? C9().getCastSession()
          : (B9("getCastSelector: Cast is not initialized."), null)
        : (B9("getCastSelector: Cast API is not installed!"), null);
    },
    kzb = function () {
      D9()
        ? C9()
          ? E9()
            ? (A9("Requesting cast selector."), C9().requestSession())
            : (A9("Wait for cast API to be ready to request the session."),
              gzb.push(g.SE("yt-remote-cast2-api-ready", kzb)))
          : B9("requestCastSelector: Cast is not initialized.")
        : B9("requestCastSelector: Cast API is not installed!");
    },
    F9 = function (a, b) {
      E9()
        ? C9().setConnectedScreenStatus(a, b)
        : B9("setConnectedScreenStatus called before ready.");
    },
    Zyb = function () {
      var a = 0 <= g.mc().search(/ (CrMo|Chrome|CriOS)\//);
      return g.sL || a;
    },
    lzb = function (a, b) {
      C9().init(a, b);
    },
    $yb = function (a, b) {
      var c = !1;
      C9() ||
        ((a = new w9(a, b)),
        a.subscribe("yt-remote-cast2-availability-change", function (d) {
          g.fD("yt-remote-cast-available", d);
          n8("yt-remote-cast2-availability-change", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-selected", function (d) {
          A9("onReceiverSelected: " + d.friendlyName);
          g.fD("yt-remote-cast-receiver", d);
          n8("yt-remote-cast2-receiver-selected", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
          A9("onReceiverResumed: " + d.friendlyName);
          g.fD("yt-remote-cast-receiver", d);
          n8("yt-remote-cast2-receiver-resumed", d);
        }),
        a.subscribe("yt-remote-cast2-session-change", function (d) {
          A9("onSessionChange: " + h8(d));
          d || g.hD("yt-remote-cast-receiver");
          n8("yt-remote-cast2-session-change", d);
        }),
        g.Sa("yt.mdx.remote.cloudview.instance_", a),
        (c = !0));
      A9("cloudview.createSingleton_: " + c);
      return c;
    },
    C9 = function () {
      return g.Ta("yt.mdx.remote.cloudview.instance_");
    },
    bzb = function (a, b) {
      czb(!0);
      azb(!1);
      lzb(a, function (c) {
        c
          ? (fzb(!0), g.UE("yt-remote-cast2-api-ready"))
          : (B9("Failed to initialize cast API."),
            czb(!1),
            g.hD("yt-remote-cast-available"),
            g.hD("yt-remote-cast-receiver"),
            dzb());
        b(c);
      });
    },
    A9 = function (a) {
      c9("cloudview", a);
    },
    B9 = function (a) {
      c9("cloudview", a);
    },
    czb = function (a) {
      A9("setCastInstalled_ " + a);
      g.fD("yt-remote-cast-installed", a);
    },
    E9 = function () {
      return !!g.Ta("yt.mdx.remote.cloudview.apiReady_");
    },
    fzb = function (a) {
      A9("setApiReady_ " + a);
      g.Sa("yt.mdx.remote.cloudview.apiReady_", a);
    },
    azb = function (a) {
      g.Sa("yt.mdx.remote.cloudview.initializing_", a);
    },
    G9 = function (a) {
      this.index = -1;
      this.videoId = this.listId = "";
      this.volume = this.playerState = -1;
      this.muted = !1;
      this.audioTrackId = null;
      this.K = this.S = 0;
      this.trackData = null;
      this.Sk = this.qp = !1;
      this.ma = this.G = this.j = this.D = 0;
      this.C = NaN;
      this.B = !1;
      this.reset(a);
    },
    mzb = function (a) {
      a.audioTrackId = null;
      a.trackData = null;
      a.playerState = -1;
      a.qp = !1;
      a.Sk = !1;
      a.S = 0;
      a.K = g.eb();
      a.D = 0;
      a.j = 0;
      a.G = 0;
      a.ma = 0;
      a.C = NaN;
      a.B = !1;
    },
    H9 = function (a) {
      return a.isPlaying() ? (g.eb() - a.K) / 1e3 : 0;
    },
    I9 = function (a, b) {
      a.S = b;
      a.K = g.eb();
    },
    J9 = function (a) {
      switch (a.playerState) {
        case 1:
        case 1081:
          return (g.eb() - a.K) / 1e3 + a.S;
        case -1e3:
          return 0;
      }
      return a.S;
    },
    K9 = function (a, b, c) {
      var d = a.videoId;
      a.videoId = b;
      a.index = c;
      b != d && mzb(a);
    },
    nzb = function (a) {
      var b = {};
      b.index = a.index;
      b.listId = a.listId;
      b.videoId = a.videoId;
      b.playerState = a.playerState;
      b.volume = a.volume;
      b.muted = a.muted;
      b.audioTrackId = a.audioTrackId;
      b.trackData = g.qd(a.trackData);
      b.hasPrevious = a.qp;
      b.hasNext = a.Sk;
      b.playerTime = a.S;
      b.playerTimeAt = a.K;
      b.seekableStart = a.D;
      b.seekableEnd = a.j;
      b.duration = a.G;
      b.loadedTime = a.ma;
      b.liveIngestionTime = a.C;
      return b;
    },
    M9 = function (a, b) {
      g.lG.call(this);
      this.C = 0;
      this.D = a;
      this.K = [];
      this.G = new Sxb();
      this.B = this.j = null;
      this.ea = (0, g.cb)(this.r7, this);
      this.S = (0, g.cb)(this.kE, this);
      this.ma = (0, g.cb)(this.q7, this);
      this.qa = (0, g.cb)(this.u7, this);
      var c = 0;
      a
        ? ((c = a.getProxyState()),
          3 != c && (a.subscribe("proxyStateChange", this.bR, this), ozb(this)))
        : (c = 3);
      0 != c &&
        (b
          ? this.bR(c)
          : g.jC(
              (0, g.cb)(function () {
                this.bR(c);
              }, this),
              0
            ));
      (a = jzb()) && L9(this, a);
      this.subscribe("yt-remote-cast2-session-change", this.qa);
    },
    N9 = function (a) {
      return new G9(a.D.getPlayerContextData());
    },
    ozb = function (a) {
      g.Yb(
        "nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(
          " "
        ),
        function (b) {
          this.K.push(this.D.subscribe(b, g.db(this.y8, b), this));
        },
        a
      );
    },
    pzb = function (a) {
      g.Yb(
        a.K,
        function (b) {
          this.D.unsubscribeByKey(b);
        },
        a
      );
      a.K.length = 0;
    },
    O9 = function (a) {
      return 1 == a.getState();
    },
    P9 = function (a, b) {
      var c = a.G;
      50 > c.j.length + c.B.length && a.G.B.push(b);
    },
    qzb = function (a, b, c) {
      var d = N9(a);
      I9(d, c);
      -1e3 != d.playerState && (d.playerState = b);
      Q9(a, d);
    },
    R9 = function (a, b, c) {
      a.D.sendMessage(b, c);
    },
    Q9 = function (a, b) {
      pzb(a);
      a.D.setPlayerContextData(nzb(b));
      ozb(a);
    },
    L9 = function (a, b) {
      a.B &&
        (a.B.removeUpdateListener(a.ea),
        a.B.removeMediaListener(a.S),
        a.kE(null));
      a.B = b;
      a.B &&
        (d9("Setting cast session: " + a.B.sessionId),
        a.B.addUpdateListener(a.ea),
        a.B.addMediaListener(a.S),
        a.B.media.length && a.kE(a.B.media[0]));
    },
    rzb = function (a) {
      var b = a.j.media,
        c = a.j.customData;
      if (b && c) {
        var d = N9(a);
        b.contentId != d.videoId &&
          d9("Cast changing video to: " + b.contentId);
        d.videoId = b.contentId;
        d.playerState = c.playerState;
        I9(d, a.j.getEstimatedTime());
        Q9(a, d);
      } else d9("No cast media video. Ignoring state update.");
    },
    S9 = function (a, b, c) {
      return (0, g.cb)(function (d) {
        this.eg(
          "Failed to " + b + " with cast v2 channel. Error code: " + d.code
        );
        d.code != chrome.cast.ErrorCode.TIMEOUT &&
          (this.eg("Retrying " + b + " using MDx browser channel."),
          R9(this, b, c));
      }, a);
    },
    V9 = function (a, b, c, d) {
      d = void 0 === d ? !1 : d;
      g.lG.call(this);
      var e = this;
      this.K = NaN;
      this.Fa = !1;
      this.ea = this.ma = this.va = this.Ca = NaN;
      this.qa = [];
      this.G = this.S = this.D = this.j = this.B = null;
      this.Pa = a;
      this.Oa = d;
      this.qa.push(
        g.XC(window, "beforeunload", function () {
          e.Xy(2);
        })
      );
      this.C = [];
      this.j = new G9();
      this.Va = b.id;
      this.Ja = b.idType;
      this.B = dyb(this.Pa, c, this.VS, "shortLived" == this.Ja, this.Va);
      this.B.Ua("channelOpened", function () {
        szb(e);
      });
      this.B.Ua("channelClosed", function () {
        T9("Channel closed");
        isNaN(e.K) ? l8(!0) : l8();
        e.dispose();
      });
      this.B.Ua("channelError", function (f) {
        l8();
        isNaN(e.hD())
          ? (1 == f &&
              "shortLived" == e.Ja &&
              e.ra("browserChannelAuthError", f),
            T9("Channel error: " + f + " without reconnection"),
            e.dispose())
          : ((e.Fa = !0),
            T9(
              "Channel error: " + f + " with reconnection in " + e.hD() + " ms"
            ),
            U9(e, 2));
      });
      this.B.Ua("channelMessage", function (f) {
        tzb(e, f);
      });
      this.B.Fr(b.token);
      this.subscribe("remoteQueueChange", function () {
        var f = e.j.videoId;
        g.iD() && g.fD("yt-remote-session-video-id", f);
      });
    },
    uzb = function (a) {
      return g.Bb(a.C, function (b) {
        return "LOUNGE_SCREEN" == b.type;
      });
    },
    T9 = function (a) {
      c9("conn", a);
    },
    U9 = function (a, b) {
      a.ra("proxyStateChange", b);
    },
    vzb = function (a) {
      a.K = g.jC(function () {
        T9("Connecting timeout");
        a.Xy(1);
      }, 2e4);
    },
    wzb = function (a) {
      g.lC(a.K);
      a.K = NaN;
    },
    xzb = function (a) {
      g.lC(a.Ca);
      a.Ca = NaN;
    },
    zzb = function (a) {
      yzb(a);
      a.va = g.jC(function () {
        W9(a, "getNowPlaying");
      }, 2e4);
    },
    yzb = function (a) {
      g.lC(a.va);
      a.va = NaN;
    },
    szb = function (a) {
      T9("Channel opened");
      a.Fa &&
        ((a.Fa = !1),
        xzb(a),
        (a.Ca = g.jC(function () {
          T9("Timing out waiting for a screen.");
          a.Xy(1);
        }, 15e3)));
    },
    Bzb = function (a, b) {
      var c = null;
      if (b) {
        var d = uzb(a);
        d &&
          (c = {
            clientName: d.clientName,
            deviceMake: d.brand,
            deviceModel: d.model,
            osVersion: d.osVersion,
          });
      }
      g.Sa("yt.mdx.remote.remoteClient_", c);
      b && (wzb(a), xzb(a));
      c = a.B.Gz() && isNaN(a.K);
      b == c
        ? b && (U9(a, 1), W9(a, "getSubtitlesTrack"))
        : b
        ? (a.VV() && a.j.reset(), U9(a, 1), W9(a, "getNowPlaying"), Azb(a))
        : a.Xy(1);
    },
    Czb = function (a, b) {
      var c = b.params.videoId;
      delete b.params.videoId;
      c == a.j.videoId &&
        (g.jd(b.params) ? (a.j.trackData = null) : (a.j.trackData = b.params),
        a.ra("remotePlayerChange"));
    },
    Dzb = function (a, b, c) {
      var d = b.params.videoId || b.params.video_id,
        e = parseInt(b.params.currentIndex, 10);
      a.j.listId = b.params.listId || a.j.listId;
      K9(a.j, d, e);
      a.ra("remoteQueueChange", c);
    },
    Fzb = function (a, b) {
      b.params = b.params || {};
      Dzb(a, b, "NOW_PLAYING_MAY_CHANGE");
      Ezb(a, b);
      a.ra("autoplayDismissed");
    },
    Ezb = function (a, b) {
      var c = parseInt(b.params.currentTime || b.params.current_time, 10);
      I9(a.j, isNaN(c) ? 0 : c);
      c = parseInt(b.params.state, 10);
      c = isNaN(c) ? -1 : c;
      -1 == c && -1e3 == a.j.playerState && (c = -1e3);
      a.j.playerState = c;
      c = Number(b.params.loadedTime);
      a.j.ma = isNaN(c) ? 0 : c;
      a.j.wl(Number(b.params.duration));
      c = a.j;
      var d = Number(b.params.liveIngestionTime);
      c.C = d;
      c.B = isNaN(d) ? !1 : !0;
      c = a.j;
      d = Number(b.params.seekableStartTime);
      b = Number(b.params.seekableEndTime);
      c.D = isNaN(d) ? 0 : d;
      c.j = isNaN(b) ? 0 : b;
      1 == a.j.playerState ? zzb(a) : yzb(a);
      a.ra("remotePlayerChange");
    },
    Gzb = function (a, b) {
      if (-1e3 != a.j.playerState) {
        var c = 1085;
        switch (parseInt(b.params.adState, 10)) {
          case 1:
            c = 1081;
            break;
          case 2:
            c = 1084;
            break;
          case 0:
            c = 1083;
        }
        a.j.playerState = c;
        b = parseInt(b.params.currentTime, 10);
        I9(a.j, isNaN(b) ? 0 : b);
        a.ra("remotePlayerChange");
      }
    },
    Hzb = function (a, b) {
      var c = "true" == b.params.muted;
      a.j.volume = parseInt(b.params.volume, 10);
      a.j.muted = c;
      a.ra("remotePlayerChange");
    },
    Izb = function (a, b) {
      a.S = b.params.videoId;
      a.ra("nowAutoplaying", parseInt(b.params.timeout, 10));
    },
    Jzb = function (a, b) {
      a.S = b.params.videoId || null;
      a.ra("autoplayUpNext", a.S);
    },
    Kzb = function (a, b) {
      a.G = b.params.autoplayMode;
      a.ra("autoplayModeChange", a.G);
      "DISABLED" == a.G && a.ra("autoplayDismissed");
    },
    Lzb = function (a, b) {
      var c = "true" == b.params.hasNext;
      a.j.qp = "true" == b.params.hasPrevious;
      a.j.Sk = c;
      a.ra("previousNextChange");
    },
    tzb = function (a, b) {
      b = b.message;
      b.params
        ? T9("Received: action=" + b.action + ", params=" + g.rm(b.params))
        : T9("Received: action=" + b.action + " {}");
      switch (b.action) {
        case "loungeStatus":
          b = c8(b.params.devices);
          a.C = g.Yp(b, function (d) {
            return new e8(d);
          });
          b = !!g.Bb(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          Bzb(a, b);
          b = a.WW("mlm");
          a.ra("multiStateLoopEnabled", b);
          break;
        case "loungeScreenDisconnected":
          g.Gb(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          Bzb(a, !1);
          break;
        case "remoteConnected":
          var c = new e8(c8(b.params.device));
          g.Bb(a.C, function (d) {
            return d.equals(c);
          }) || ovb(a.C, c);
          break;
        case "remoteDisconnected":
          c = new e8(c8(b.params.device));
          g.Gb(a.C, function (d) {
            return d.equals(c);
          });
          break;
        case "gracefulDisconnect":
          break;
        case "playlistModified":
          Dzb(a, b, "QUEUE_MODIFIED");
          break;
        case "nowPlaying":
          Fzb(a, b);
          break;
        case "onStateChange":
          Ezb(a, b);
          break;
        case "onAdStateChange":
          Gzb(a, b);
          break;
        case "onVolumeChanged":
          Hzb(a, b);
          break;
        case "onSubtitlesTrackChanged":
          Czb(a, b);
          break;
        case "nowAutoplaying":
          Izb(a, b);
          break;
        case "autoplayDismissed":
          a.ra("autoplayDismissed");
          break;
        case "autoplayUpNext":
          Jzb(a, b);
          break;
        case "onAutoplayModeChanged":
          Kzb(a, b);
          break;
        case "onHasPreviousNextChanged":
          Lzb(a, b);
          break;
        case "requestAssistedSignIn":
          a.ra("assistedSignInRequested", b.params.authCode);
          break;
        case "onLoopModeChanged":
          a.ra("loopModeChange", b.params.loopMode);
          break;
        default:
          T9("Unrecognized action: " + b.action);
      }
    },
    Azb = function (a) {
      g.lC(a.ea);
      a.ea = g.jC(function () {
        a.Xy(1);
      }, 864e5);
    },
    W9 = function (a, b, c) {
      c
        ? T9("Sending: action=" + b + ", params=" + g.rm(c))
        : T9("Sending: action=" + b);
      a.B.sendMessage(b, c);
    },
    Mzb = function (a) {
      h9.call(this, "ScreenServiceProxy");
      this.ih = a;
      this.j = [];
      this.j.push(this.ih.$_s("screenChange", (0, g.cb)(this.L1, this)));
      this.j.push(this.ih.$_s("onlineScreenChange", (0, g.cb)(this.h8, this)));
    },
    Rzb = function (a, b) {
      Yvb();
      if (!m8 || !m8.get("yt-remote-disable-remote-module-for-dev")) {
        b = g.Iv("MDX_CONFIG") || b;
        Pvb();
        Tvb();
        X9 ||
          ((X9 = new $8(b ? b.loungeApiHost : void 0)),
          Zvb() && (X9.j = "/api/loungedev"));
        Y9 ||
          ((Y9 = g.Ta("yt.mdx.remote.deferredProxies_") || []),
          g.Sa("yt.mdx.remote.deferredProxies_", Y9));
        Nzb();
        var c = Z9();
        if (!c) {
          var d = new m9(X9, b ? b.disableAutomaticScreenCache || !1 : !1);
          g.Sa("yt.mdx.remote.screenService_", d);
          c = Z9();
          var e = {};
          b &&
            (e = {
              appId: b.appId,
              disableDial: b.disableDial,
              theme: b.theme,
              loadCastApiSetupScript: b.loadCastApiSetupScript,
              disableCastApi: b.disableCastApi,
              enableDialLoungeToken: b.enableDialLoungeToken,
              enableCastLoungeToken: b.enableCastLoungeToken,
              forceMirroring: b.forceMirroring,
            });
          g.Sa(
            "yt.mdx.remote.enableConnectWithInitialState_",
            b ? b.enableConnectWithInitialState || !1 : !1
          );
          ezb(
            a,
            d,
            function (f) {
              f
                ? $9() && F9($9(), "YouTube TV")
                : d.subscribe("onlineScreenChange", function () {
                    n8("yt-remote-receiver-availability-change");
                  });
            },
            e
          );
        }
        b &&
          !g.Ta("yt.mdx.remote.initialized_") &&
          (g.Sa("yt.mdx.remote.initialized_", !0),
          a$("Initializing: " + g.rm(b)),
          b$.push(
            g.SE("yt-remote-cast2-api-ready", function () {
              n8("yt-remote-api-ready");
            })
          ),
          b$.push(
            g.SE("yt-remote-cast2-availability-change", function () {
              n8("yt-remote-receiver-availability-change");
            })
          ),
          b$.push(
            g.SE("yt-remote-cast2-receiver-selected", function () {
              c$(null);
              n8("yt-remote-auto-connect", "cast-selector-receiver");
            })
          ),
          b$.push(
            g.SE("yt-remote-cast2-receiver-resumed", function () {
              n8("yt-remote-receiver-resumed", "cast-selector-receiver");
            })
          ),
          b$.push(g.SE("yt-remote-cast2-session-change", Ozb)),
          b$.push(
            g.SE("yt-remote-connection-change", function (f) {
              f ? F9($9(), "YouTube TV") : d$() || (F9(null, null), izb());
            })
          ),
          b$.push(
            g.SE("yt-remote-cast2-session-failed", function () {
              n8("yt-remote-connection-failed");
            })
          ),
          (a = Pzb()),
          b.isAuto && (a.id += "#dial"),
          (e = b.capabilities || []),
          g.SB("desktop_enable_autoplay") && e.push("atp"),
          0 < e.length && (a.capabilities = e),
          (a.name = b.device),
          (a.app = b.app),
          (b = b.theme) && (a.theme = b),
          a$(" -- with channel params: " + g.rm(a)),
          a
            ? (g.fD("yt-remote-session-app", a.app),
              g.fD("yt-remote-session-name", a.name))
            : (g.hD("yt-remote-session-app"), g.hD("yt-remote-session-name")),
          g.Sa("yt.mdx.remote.channelParams_", a),
          c.start(),
          $9() || Qzb());
      }
    },
    Szb = function () {
      var a = Z9().ih.$_gos();
      var b = e$();
      b && f$() && (Ovb(a, b) || a.push(b));
      return Nvb(a);
    },
    Uzb = function () {
      var a = Tzb();
      !a &&
        D9() &&
        hzb() &&
        (a = { key: "cast-selector-receiver", name: hzb() });
      return a;
    },
    Tzb = function () {
      var a = Szb(),
        b = e$();
      b || (b = d$());
      return g.Bb(a, function (c) {
        return b && g8(b, c.key) ? !0 : !1;
      });
    },
    e$ = function () {
      var a = $9();
      if (!a) return null;
      var b = Z9().Nk();
      return i8(b, a);
    },
    Ozb = function (a) {
      a$("remote.onCastSessionChange_: " + h8(a));
      if (a) {
        var b = e$();
        if (b && b.id == a.id) {
          if (
            (F9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token))
          )
            g$ && (g$.token = a), (b = f$()) && b.Fr(a);
        } else b && h$(), i$(a, 1);
      } else f$() && h$();
    },
    h$ = function () {
      E9() ? C9().stopSession() : B9("stopSession called before API ready.");
      var a = f$();
      a && (a.disconnect(1), Vzb(null));
    },
    Wzb = function () {
      var a = f$();
      return !!a && 3 != a.getProxyState();
    },
    a$ = function (a) {
      c9("remote", a);
    },
    Z9 = function () {
      if (!Xzb) {
        var a = g.Ta("yt.mdx.remote.screenService_");
        Xzb = a ? new Mzb(a) : null;
      }
      return Xzb;
    },
    $9 = function () {
      return g.Ta("yt.mdx.remote.currentScreenId_");
    },
    Yzb = function (a) {
      g.Sa("yt.mdx.remote.currentScreenId_", a);
    },
    Zzb = function () {
      return g.Ta("yt.mdx.remote.connectData_");
    },
    c$ = function (a) {
      g.Sa("yt.mdx.remote.connectData_", a);
    },
    f$ = function () {
      return g.Ta("yt.mdx.remote.connection_");
    },
    Vzb = function (a) {
      var b = f$();
      c$(null);
      a || Yzb("");
      g.Sa("yt.mdx.remote.connection_", a);
      Y9 &&
        (g.Yb(Y9, function (c) {
          c(a);
        }),
        (Y9.length = 0));
      b && !a
        ? n8("yt-remote-connection-change", !1)
        : !b && a && n8("yt-remote-connection-change", !0);
    },
    d$ = function () {
      var a = g.iD();
      if (!a) return null;
      var b = Z9();
      if (!b) return null;
      b = b.Nk();
      return i8(b, a);
    },
    i$ = function (a, b) {
      $9();
      e$() && e$();
      if (j$) g$ = a;
      else {
        Yzb(a.id);
        var c = g.Ta("yt.mdx.remote.enableConnectWithInitialState_") || !1;
        a = new V9(X9, a, Pzb(), c);
        a.connect(b, Zzb());
        a.subscribe("beforeDisconnect", function (d) {
          n8("yt-remote-before-disconnect", d);
        });
        a.subscribe("beforeDispose", function () {
          f$() && (f$(), Vzb(null));
        });
        a.subscribe("browserChannelAuthError", function () {
          var d = e$();
          d &&
            "shortLived" == d.idType &&
            (E9()
              ? C9().handleBrowserChannelAuthError()
              : B9("refreshLoungeToken called before API ready."));
        });
        Vzb(a);
      }
    },
    Qzb = function () {
      var a = d$();
      a
        ? (a$("Resume connection to: " + h8(a)), i$(a, 0))
        : (l8(),
          izb(),
          a$("Skipping connecting because no session screen found."));
    },
    Nzb = function () {
      var a = Pzb();
      if (g.jd(a)) {
        a = k8();
        var b = g.gD("yt-remote-session-name") || "",
          c = g.gD("yt-remote-session-app") || "";
        a = { device: "REMOTE_CONTROL", id: a, name: b, app: c, mdxVersion: 3 };
        a.authuser = String(g.Iv("SESSION_INDEX", "0"));
        (b = g.Iv("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
        g.Sa("yt.mdx.remote.channelParams_", a);
      }
    },
    Pzb = function () {
      return g.Ta("yt.mdx.remote.channelParams_") || {};
    },
    bAb = function (a, b, c) {
      g.J.call(this);
      var d = this;
      this.module = a;
      this.J = b;
      this.Hc = c;
      this.events = new g.ZK(this);
      this.ea = this.events.V(this.J, "onVolumeChange", function (e) {
        $zb(d, e);
      });
      this.D = !1;
      this.G = new g.QL(64);
      this.j = new g.au(this.LZ, 500, this);
      this.B = new g.au(this.MZ, 1e3, this);
      this.S = new q8(this.yaa, 0, this);
      this.C = {};
      this.ma = new g.au(this.A_, 1e3, this);
      this.K = new r8(this.seekTo, 1e3, this);
      g.L(this, this.events);
      this.events.V(b, "onCaptionsTrackListChanged", this.S7);
      this.events.V(b, "captionschanged", this.o7);
      this.events.V(b, "captionssettingschanged", this.VZ);
      this.events.V(b, "videoplayerreset", this.eJ);
      this.events.V(b, "mdxautoplaycancel", function () {
        d.Hc.lV();
      });
      b.N("enable_mdx_video_play_directly") &&
        this.events.V(b, "videodatachange", function () {
          aAb(d.module) || k$(d) || l$(d, 0);
        });
      a = this.Hc;
      a.isDisposed();
      a.subscribe("proxyStateChange", this.uY, this);
      a.subscribe("remotePlayerChange", this.qE, this);
      a.subscribe("remoteQueueChange", this.eJ, this);
      a.subscribe("previousNextChange", this.rY, this);
      a.subscribe("nowAutoplaying", this.mY, this);
      a.subscribe("autoplayDismissed", this.SX, this);
      g.L(this, this.j);
      g.L(this, this.B);
      g.L(this, this.S);
      g.L(this, this.ma);
      g.L(this, this.K);
      this.VZ();
      this.eJ();
      this.qE();
    },
    $zb = function (a, b) {
      if (k$(a)) {
        a.Hc.unsubscribe("remotePlayerChange", a.qE, a);
        var c = Math.round(b.volume);
        b = !!b.muted;
        var d = N9(a.Hc);
        if (c !== d.volume || b !== d.muted) a.Hc.setVolume(c, b), a.ma.start();
        a.Hc.subscribe("remotePlayerChange", a.qE, a);
      }
    },
    cAb = function (a) {
      a.Ic(0);
      a.j.stop();
      a.Ac(new g.QL(64));
    },
    dAb = function (a, b) {
      if (k$(a) && !a.D) {
        var c = null;
        b && ((c = { style: a.J.getSubtitlesUserSettings() }), g.sd(c, b));
        a.Hc.US(a.J.getVideoData(1).videoId, c);
        a.C = N9(a.Hc).trackData;
      }
    },
    l$ = function (a, b) {
      var c = a.J.getPlaylist();
      if (null == c ? 0 : c.listId) {
        var d = c.index;
        var e = c.listId.toString();
      }
      c = a.J.getVideoData(1);
      a.Hc.playVideo(c.videoId, b, d, e, c.playerParams, c.Ca, nvb(c));
      a.Ac(new g.QL(1));
    },
    eAb = function (a, b) {
      if (b) {
        var c = a.J.getOption("captions", "tracklist", { KW: 1 });
        c && c.length
          ? (a.J.setOption("captions", "track", b), (a.D = !1))
          : (a.J.loadModule("captions"), (a.D = !0));
      } else a.J.setOption("captions", "track", {});
    },
    k$ = function (a) {
      return N9(a.Hc).videoId === a.J.getVideoData(1).videoId;
    },
    m$ = function () {
      g.T.call(this, {
        I: "div",
        T: "ytp-mdx-popup-dialog",
        Y: { role: "dialog" },
        X: [
          {
            I: "div",
            T: "ytp-mdx-popup-dialog-inner-content",
            X: [
              {
                I: "div",
                T: "ytp-mdx-popup-title",
                Aa: "B\u1ea1n \u0111\u00e3 \u0111\u0103ng xu\u1ea5t",
              },
              {
                I: "div",
                T: "ytp-mdx-popup-description",
                Aa: "C\u00e1c video m\u00e0 b\u1ea1n xem c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c th\u00eam v\u00e0o nh\u1eadt k\u00fd xem v\u00e0 g\u00e2y \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn ph\u1ea7n \u0111\u1ec1 xu\u1ea5t tr\u00ean TV. \u0110\u1ec3 tr\u00e1nh \u0111i\u1ec1u n\u00e0y, h\u00e3y h\u1ee7y r\u1ed3i \u0111\u0103ng nh\u1eadp v\u00e0o YouTube tr\u00ean m\u00e1y t\u00ednh.",
              },
              {
                I: "div",
                T: "ytp-mdx-privacy-popup-buttons",
                X: [
                  {
                    I: "button",
                    Na: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                    Aa: "H\u1ee7y",
                  },
                  {
                    I: "button",
                    Na: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                    Aa: "X\u00e1c nh\u1eadn",
                  },
                ],
              },
            ],
          },
        ],
      });
      this.j = new g.VG(this, 250);
      this.cancelButton = this.Ha("ytp-mdx-privacy-popup-cancel");
      this.confirmButton = this.Ha("ytp-mdx-privacy-popup-confirm");
      g.L(this, this.j);
      this.V(this.cancelButton, "click", this.B);
      this.V(this.confirmButton, "click", this.C);
    },
    n$ = function (a) {
      g.T.call(this, {
        I: "div",
        T: "ytp-remote",
        X: [
          {
            I: "div",
            T: "ytp-remote-display-status",
            X: [
              { I: "div", T: "ytp-remote-display-status-icon", X: [g.nua()] },
              {
                I: "div",
                T: "ytp-remote-display-status-text",
                Aa: "{{statustext}}",
              },
            ],
          },
        ],
      });
      this.api = a;
      this.j = new g.VG(this, 250);
      g.L(this, this.j);
      this.V(a, "presentingplayerstatechange", this.onStateChange);
      this.Gc(a.Tb());
    },
    o$ = function (a, b) {
      g.FX.call(this, "Ph\u00e1t tr\u00ean", 1, a, b);
      this.J = a;
      this.au = {};
      this.V(a, "onMdxReceiversChange", this.D);
      this.V(a, "presentingplayerstatechange", this.D);
      this.D();
    },
    fAb = function (a) {
      g.yV.call(this, a);
      this.Dp = { key: Mvb(), name: "M\u00e1y t\u00ednh n\u00e0y" };
      this.Zl = null;
      this.subscriptions = [];
      this.hQ = this.Hc = null;
      this.au = [this.Dp];
      this.Ms = this.Dp;
      this.lf = new g.QL(64);
      this.fX = 0;
      this.Qh = -1;
      this.JE = !1;
      this.IE = this.GA = null;
      if (!g.kS(this.player.W()) && !g.qH(this.player.W())) {
        a = this.player;
        var b = g.eU(a);
        b && (b = b.qn()) && ((b = new o$(a, b)), g.L(this, b));
        b = new n$(a);
        g.L(this, b);
        g.wU(a, b.element, 4);
        this.GA = new m$();
        g.L(this, this.GA);
        g.wU(a, this.GA.element, 4);
        this.JE = !!d$();
      }
    },
    p$ = function (a) {
      a.IE &&
        (a.player.removeEventListener("presentingplayerstatechange", a.IE),
        (a.IE = null));
    },
    gAb = function (a, b, c) {
      a.lf = c;
      a.player.ra("presentingplayerstatechange", new g.$G(c, b));
    },
    q$ = function (a, b) {
      if (b.key !== a.Ms.key)
        if (b.key === a.Dp.key) h$();
        else if (
          (aAb(a) && hAb(a),
          (a.Ms = b),
          !a.player
            .W()
            .N("disable_mdx_connection_in_mdx_module_for_music_web") ||
            !g.qH(a.player.W()))
        ) {
          var c = a.player.getPlaylistId();
          var d = a.player.getVideoData(1);
          var e = d.videoId;
          if (
            (!c && !e) ||
            ((2 === a.player.getAppState() || 1 === a.player.getAppState()) &&
              a.player
                .W()
                .N("should_clear_video_data_on_player_cued_unstarted"))
          )
            d = null;
          else {
            var f = a.player.getPlaylist();
            if (f) {
              var h = [];
              for (var l = 0; l < f.length; l++) h[l] = g.vV(f, l).videoId;
            } else h = [e];
            f = a.player.getCurrentTime(1);
            a = {
              videoIds: h,
              listId: c,
              videoId: e,
              playerParams: d.playerParams,
              clickTrackingParams: d.Ca,
              index: Math.max(a.player.getPlaylistIndex(), 0),
              currentTime: 0 === f ? void 0 : f,
            };
            (d = nvb(d)) && (a.locationInfo = d);
            d = a;
          }
          a$("Connecting to: " + g.rm(b));
          "cast-selector-receiver" == b.key
            ? (c$(d || null),
              (b = d || null),
              E9()
                ? C9().setLaunchParams(b)
                : B9("setLaunchParams called before ready."))
            : !d && Wzb() && $9() == b.key
            ? n8("yt-remote-connection-change", !0)
            : (h$(),
              c$(d || null),
              (d = Z9().Nk()),
              (b = i8(d, b.key)) && i$(b, 1));
        }
    },
    aAb = function (a) {
      var b = a.player.W();
      return !b.N("mdx_enable_privacy_disclosure_ui") ||
        a.isLoggedIn() ||
        a.JE ||
        !a.GA
        ? !1
        : g.vS(b) || g.xS(b);
    },
    hAb = function (a) {
      a.player.Tb().isPlaying()
        ? a.player.pauseVideo()
        : ((a.IE = function (b) {
            !a.JE && g.cH(b, 8) && (a.player.pauseVideo(), p$(a));
          }),
          a.player.addEventListener("presentingplayerstatechange", a.IE));
      a.GA && a.GA.zd();
      f$() || (j$ = !0);
    };
  g.vx.prototype.Xs = g.ba(0, function () {
    return g.Dj(this, 6);
  });
  var qxb = {
      "\x00": "\\0",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\v": "\\x0B",
      '"': '\\"',
      "\\": "\\\\",
      "<": "\\u003C",
    },
    S8 = { "'": "\\'" },
    Gvb = {
      ula: "atp",
      q_a: "ska",
      vXa: "que",
      rPa: "mus",
      p_a: "sus",
      ZAa: "dsp",
      BYa: "seq",
      UNa: "mic",
      hsa: "dpa",
      Ema: "cds",
      iPa: "mlm",
      Ura: "dsdtr",
      RPa: "ntb",
      oab: "vsp",
      Xsa: "scn",
      JXa: "rpe",
      Sra: "dcn",
      Tra: "dcp",
    },
    Hvb = {
      n3: "u",
      CLASSIC: "cl",
      R2: "k",
      B0: "i",
      l0: "cr",
      X2: "m",
      y0: "g",
      aU: "up",
    };
  e8.prototype.equals = function (a) {
    return a ? this.id == a.id : !1;
  };
  var m8,
    Svb = "";
  $vb.prototype.flush = function (a, b) {
    a = void 0 === a ? [] : a;
    b = void 0 === b ? !1 : b;
    if (g.SB("enable_client_streamz_web")) {
      a = g.u(a);
      for (var c = a.next(); !c.done; c = a.next())
        (c = g.Hea(c.value)),
          (c = { serializedIncrementBatch: g.mg(c.j()) }),
          g.zD("streamzIncremented", c, { sendIsolatedPayload: b });
    }
  };
  var o8,
    hwb = bwb("loadCastFramework") || bwb("loadCastApplicationFramework"),
    kwb = [
      "pkedcjkdefgpdelpbcmbmeomcjbeemfm",
      "enhhojjnijigcajfphajepfemndkmdlo",
    ];
  g.gb(q8, g.J);
  g.k = q8.prototype;
  g.k.Z0 = function (a) {
    this.D = arguments;
    this.j = !1;
    this.pd ? (this.C = g.eb() + this.Ti) : (this.pd = g.hg(this.G, this.Ti));
  };
  g.k.stop = function () {
    this.pd && (g.Qa.clearTimeout(this.pd), (this.pd = null));
    this.C = null;
    this.j = !1;
    this.D = [];
  };
  g.k.pause = function () {
    ++this.B;
  };
  g.k.resume = function () {
    this.B &&
      (--this.B,
      !this.B && this.j && ((this.j = !1), this.K.apply(null, this.D)));
  };
  g.k.Ba = function () {
    this.stop();
    q8.Rf.Ba.call(this);
  };
  g.k.b1 = function () {
    this.pd && (g.Qa.clearTimeout(this.pd), (this.pd = null));
    this.C
      ? ((this.pd = g.hg(this.G, this.C - g.eb())), (this.C = null))
      : this.B
      ? (this.j = !0)
      : ((this.j = !1), this.K.apply(null, this.D));
  };
  g.w(r8, g.J);
  g.k = r8.prototype;
  g.k.MK = function (a) {
    this.C = arguments;
    this.pd || this.B ? (this.j = !0) : mwb(this);
  };
  g.k.stop = function () {
    this.pd &&
      (g.Qa.clearTimeout(this.pd),
      (this.pd = null),
      (this.j = !1),
      (this.C = null));
  };
  g.k.pause = function () {
    this.B++;
  };
  g.k.resume = function () {
    this.B--;
    this.B || !this.j || this.pd || ((this.j = !1), mwb(this));
  };
  g.k.Ba = function () {
    g.J.prototype.Ba.call(this);
    this.stop();
  };
  s8.prototype.stringify = function (a) {
    return g.Qa.JSON.stringify(a, void 0);
  };
  s8.prototype.parse = function (a) {
    return g.Qa.JSON.parse(a, void 0);
  };
  g.gb(nwb, g.xb);
  g.gb(owb, g.xb);
  var pwb = null;
  g.gb(rwb, g.xb);
  g.gb(swb, g.xb);
  g.gb(twb, g.xb);
  uwb.prototype.info = function () {};
  uwb.prototype.warning = function () {};
  var Bwb = {},
    y8 = {};
  g.k = w8.prototype;
  g.k.setTimeout = function (a) {
    this.Cb = a;
  };
  g.k.f1 = function (a) {
    a = a.target;
    var b = this.eb;
    b && 3 == g.ym(a) ? b.MK() : this.xS(a);
  };
  g.k.xS = function (a) {
    try {
      if (a == this.j)
        a: {
          var b = g.ym(this.j),
            c = this.j.B,
            d = this.j.getStatus();
          if (
            !(3 > b) &&
            (3 != b ||
              g.yS ||
              (this.j && (this.B.B || g.Am(this.j) || g.Bm(this.j))))
          ) {
            this.Oa || 4 != b || 7 == c || (8 == c || 0 >= d ? t8(3) : t8(2));
            B8(this);
            var e = this.j.getStatus();
            this.Mb = e;
            b: if (zwb(this)) {
              var f = g.Bm(this.j);
              a = "";
              var h = f.length,
                l = 4 == g.ym(this.j);
              if (!this.B.C) {
                if ("undefined" === typeof TextDecoder) {
                  z8(this);
                  A8(this);
                  var m = "";
                  break b;
                }
                this.B.C = new g.Qa.TextDecoder();
              }
              for (c = 0; c < h; c++)
                (this.B.B = !0),
                  (a += this.B.C.decode(f[c], { stream: l && c == h - 1 }));
              f.splice(0, h);
              this.B.j += a;
              this.qa = 0;
              m = this.B.j;
            } else m = g.Am(this.j);
            if ((this.C = 200 == e)) {
              if (this.vc && !this.Ya) {
                b: {
                  if (this.j) {
                    var n = g.Cm(this.j, "X-HTTP-Initial-Response");
                    if (n && !g.dc(n)) {
                      var p = n;
                      break b;
                    }
                  }
                  p = null;
                }
                if ((e = p)) (this.Ya = !0), Cwb(this, e);
                else {
                  this.C = !1;
                  this.K = 3;
                  u8(12);
                  z8(this);
                  A8(this);
                  break a;
                }
              }
              this.Ja
                ? (Dwb(this, b, m),
                  g.yS &&
                    this.C &&
                    3 == b &&
                    (this.kb.Ua(this.rb, "tick", this.e1), this.rb.start()))
                : Cwb(this, m);
              4 == b && z8(this);
              this.C &&
                !this.Oa &&
                (4 == b ? Fwb(this.G, this) : ((this.C = !1), x8(this)));
            } else
              g.yfa(this.j),
                400 == e && 0 < m.indexOf("Unknown SID")
                  ? ((this.K = 3), u8(12))
                  : ((this.K = 0), u8(13)),
                z8(this),
                A8(this);
          }
        }
    } catch (q) {
    } finally {
    }
  };
  g.k.e1 = function () {
    if (this.j) {
      var a = g.ym(this.j),
        b = g.Am(this.j);
      this.qa < b.length &&
        (B8(this), Dwb(this, a, b), this.C && 4 != a && x8(this));
    }
  };
  g.k.cancel = function () {
    this.Oa = !0;
    z8(this);
  };
  g.k.d1 = function () {
    this.ea = null;
    var a = Date.now();
    0 <= a - this.Ub
      ? (2 != this.Va && (t8(3), u8(17)), z8(this), (this.K = 2), A8(this))
      : Ewb(this, this.Ub - a);
  };
  g.k.getLastError = function () {
    return this.K;
  };
  g.k.IN = function () {
    return this.j;
  };
  Owb.prototype.cancel = function () {
    this.C = Qwb(this);
    if (this.B) this.B.cancel(), (this.B = null);
    else if (this.j && 0 !== this.j.size) {
      for (var a = g.u(this.j.values()), b = a.next(); !b.done; b = a.next())
        b.value.cancel();
      this.j.clear();
    }
  };
  g.k = Uwb.prototype;
  g.k.yS = 8;
  g.k.Ih = 1;
  g.k.connect = function (a, b, c, d) {
    u8(0);
    this.Jc = a;
    this.Oa = b || {};
    c && void 0 !== d && ((this.Oa.OSID = c), (this.Oa.OAID = d));
    this.Ya = this.Ad;
    this.Pa = Kwb(this, null, this.Jc);
    F8(this);
  };
  g.k.disconnect = function () {
    Wwb(this);
    if (3 == this.Ih) {
      var a = this.fb++,
        b = this.Pa.clone();
      g.oo(b, "SID", this.D);
      g.oo(b, "RID", a);
      g.oo(b, "TYPE", "terminate");
      I8(this, b);
      a = new w8(this, this.D, a);
      a.Va = 2;
      a.S = a8(b.clone());
      b = !1;
      if (g.Qa.navigator && g.Qa.navigator.sendBeacon)
        try {
          b = g.Qa.navigator.sendBeacon(a.S.toString(), "");
        } catch (c) {}
      !b && g.Qa.Image && ((new Image().src = a.S), (b = !0));
      b || ((a.j = ywb(a.G, null)), a.j.send(a.S));
      a.Ca = Date.now();
      x8(a);
    }
    bxb(this);
  };
  g.k.jh = function () {
    return 0 == this.Ih;
  };
  g.k.getState = function () {
    return this.Ih;
  };
  g.k.AS = function (a) {
    if (this.K)
      if (((this.K = null), 1 == this.Ih)) {
        if (!a) {
          this.fb = Math.floor(1e5 * Math.random());
          a = this.fb++;
          var b = new w8(this, "", a),
            c = this.ea;
          this.Ub && (c ? ((c = g.pd(c)), g.sd(c, this.Ub)) : (c = this.Ub));
          null !== this.S || this.xb || ((b.Pa = c), (c = null));
          var d;
          if (this.Cb)
            a: {
              for (var e = (d = 0); e < this.C.length; e++) {
                b: {
                  var f = this.C[e];
                  if (
                    "__data__" in f.map &&
                    ((f = f.map.__data__), "string" === typeof f)
                  ) {
                    f = f.length;
                    break b;
                  }
                  f = void 0;
                }
                if (void 0 === f) break;
                d += f;
                if (4096 < d) {
                  d = e;
                  break a;
                }
                if (4096 === d || e === this.C.length - 1) {
                  d = e + 1;
                  break a;
                }
              }
              d = 1e3;
            }
          else d = 1e3;
          d = Zwb(this, b, d);
          e = this.Pa.clone();
          g.oo(e, "RID", a);
          g.oo(e, "CVER", 22);
          this.Ja && g.oo(e, "X-HTTP-Session-Id", this.Ja);
          I8(this, e);
          c &&
            (this.xb
              ? (d = "headers=" + g.ye(g.wga(c)) + "&" + d)
              : this.S && g.so(e, this.S, c));
          Jwb(this.B, b);
          this.hg && g.oo(e, "TYPE", "init");
          this.Cb
            ? (g.oo(e, "$req", d),
              g.oo(e, "SID", "null"),
              (b.vc = !0),
              xwb(b, e, null))
            : xwb(b, e, d);
          this.Ih = 2;
        }
      } else
        3 == this.Ih &&
          (a ? $wb(this, a) : 0 == this.C.length || Pwb(this.B) || $wb(this));
  };
  g.k.zS = function () {
    this.ma = null;
    axb(this);
    if (this.Yc && !(this.rb || null == this.j || 0 >= this.Td)) {
      var a = 2 * this.Td;
      this.Fa = v8((0, g.cb)(this.n7, this), a);
    }
  };
  g.k.n7 = function () {
    this.Fa &&
      ((this.Fa = null),
      (this.Ya = !1),
      (this.rb = !0),
      u8(10),
      D8(this),
      axb(this));
  };
  g.k.sP = function (a) {
    this.j == a && this.Yc && !this.rb && (Vwb(this), (this.rb = !0), u8(11));
  };
  g.k.j1 = function () {
    null != this.qa && ((this.qa = null), D8(this), Hwb(this), u8(19));
  };
  g.k.baa = function (a) {
    a ? u8(2) : u8(1);
  };
  g.k.isActive = function () {
    return !!this.G && this.G.isActive(this);
  };
  g.k = dxb.prototype;
  g.k.ES = function () {};
  g.k.DS = function () {};
  g.k.CS = function () {};
  g.k.BS = function () {};
  g.k.isActive = function () {
    return !0;
  };
  g.k.l1 = function () {};
  g.gb(K8, g.Gd);
  K8.prototype.open = function () {
    this.j.G = this.C;
    this.K && (this.j.Va = !0);
    this.j.connect(this.G, this.B || void 0);
  };
  K8.prototype.close = function () {
    this.j.disconnect();
  };
  K8.prototype.send = function (a) {
    var b = this.j;
    if ("string" === typeof a) {
      var c = {};
      c.__data__ = a;
      a = c;
    } else this.D && ((c = {}), (c.__data__ = g.rm(a)), (a = c));
    b.C.push(new Nwb(b.fg++, a));
    3 == b.Ih && F8(b);
  };
  K8.prototype.Ba = function () {
    this.j.G = null;
    delete this.C;
    this.j.disconnect();
    delete this.j;
    K8.Rf.Ba.call(this);
  };
  g.gb(fxb, nwb);
  g.gb(gxb, owb);
  g.gb(J8, dxb);
  J8.prototype.ES = function () {
    this.j.dispatchEvent("m");
  };
  J8.prototype.DS = function (a) {
    this.j.dispatchEvent(new fxb(a));
  };
  J8.prototype.CS = function (a) {
    this.j.dispatchEvent(new gxb(a));
  };
  J8.prototype.BS = function () {
    this.j.dispatchEvent("n");
  };
  var M8 = new g.Gd();
  g.w(jxb, g.xb);
  g.k = O8.prototype;
  g.k.Iu = null;
  g.k.bq = !1;
  g.k.Gx = null;
  g.k.OK = null;
  g.k.Ex = null;
  g.k.Fx = null;
  g.k.Zr = null;
  g.k.hs = null;
  g.k.Ju = null;
  g.k.ej = null;
  g.k.VF = 0;
  g.k.jo = null;
  g.k.UF = null;
  g.k.gs = null;
  g.k.KB = -1;
  g.k.tZ = !0;
  g.k.Hu = !1;
  g.k.NK = 0;
  g.k.TF = null;
  var oxb = {},
    nxb = {};
  g.k = O8.prototype;
  g.k.setTimeout = function (a) {
    this.B = a;
  };
  g.k.n1 = function (a) {
    a = a.target;
    var b = this.TF;
    b && 3 == g.ym(a) ? b.MK() : this.FS(a);
  };
  g.k.FS = function (a) {
    try {
      if (a == this.ej)
        a: {
          var b = g.ym(this.ej),
            c = this.ej.B,
            d = this.ej.getStatus();
          if ((g.bf && !g.Nc(10)) || (g.Pc && !g.Mc("420+"))) {
            if (4 > b) break a;
          } else if (3 > b || (3 == b && !g.Am(this.ej))) break a;
          this.Hu ||
            4 != b ||
            7 == c ||
            (8 == c || 0 >= d ? this.j.Nn(3) : this.j.Nn(2));
          txb(this);
          var e = this.ej.getStatus();
          this.KB = e;
          var f = g.Am(this.ej);
          if ((this.bq = 200 == e)) {
            4 == b && Q8(this);
            if (this.Ja) {
              for (a = !0; !this.Hu && this.VF < f.length; ) {
                var h = pxb(this, f);
                if (h == nxb) {
                  4 == b && ((this.gs = 4), N8(15), (a = !1));
                  break;
                } else if (h == oxb) {
                  this.gs = 4;
                  N8(16);
                  a = !1;
                  break;
                } else uxb(this, h);
              }
              4 == b && 0 == f.length && ((this.gs = 1), N8(17), (a = !1));
              this.bq = this.bq && a;
              a || (Q8(this), R8(this));
            } else uxb(this, f);
            this.bq &&
              !this.Hu &&
              (4 == b ? this.j.WF(this) : ((this.bq = !1), P8(this)));
          } else
            400 == e && 0 < f.indexOf("Unknown SID")
              ? ((this.gs = 3), N8(13))
              : ((this.gs = 0), N8(14)),
              Q8(this),
              R8(this);
        }
    } catch (l) {
    } finally {
    }
  };
  g.k.x9 = function (a) {
    L8((0, g.cb)(this.w9, this, a), 0);
  };
  g.k.w9 = function (a) {
    this.Hu || (txb(this), uxb(this, a), P8(this));
  };
  g.k.zY = function (a) {
    L8((0, g.cb)(this.v9, this, a), 0);
  };
  g.k.v9 = function (a) {
    this.Hu || (Q8(this), (this.bq = a), this.j.WF(this), this.j.Nn(4));
  };
  g.k.cancel = function () {
    this.Hu = !0;
    Q8(this);
  };
  g.k.m1 = function () {
    this.Gx = null;
    var a = Date.now();
    0 <= a - this.OK
      ? (2 != this.Fx && this.j.Nn(3),
        Q8(this),
        (this.gs = 2),
        N8(18),
        R8(this))
      : sxb(this, this.OK - a);
  };
  g.k.getLastError = function () {
    return this.gs;
  };
  g.k = xxb.prototype;
  g.k.QK = null;
  g.k.Jj = null;
  g.k.BJ = !1;
  g.k.NZ = null;
  g.k.iH = null;
  g.k.EO = null;
  g.k.RK = null;
  g.k.Vl = null;
  g.k.cq = -1;
  g.k.LB = null;
  g.k.nC = null;
  g.k.connect = function (a) {
    this.RK = a;
    a = U8(this.j, null, this.RK);
    N8(3);
    this.NZ = Date.now();
    var b = this.j.ea;
    null != b
      ? ((this.LB = b[0]),
        (this.nC = b[1])
          ? ((this.Vl = 1), yxb(this))
          : ((this.Vl = 2), zxb(this)))
      : (b8(a, "MODE", "init"),
        (this.Jj = new O8(this)),
        (this.Jj.Iu = this.QK),
        mxb(this.Jj, a, !1, null, !0),
        (this.Vl = 0));
  };
  g.k.Q3 = function (a) {
    if (a) (this.Vl = 2), zxb(this);
    else {
      N8(4);
      var b = this.j;
      b.Co = b.Ks.cq;
      Y8(b, 9);
    }
    a && this.Nn(2);
  };
  g.k.PK = function (a) {
    return this.j.PK(a);
  };
  g.k.abort = function () {
    this.Jj && (this.Jj.cancel(), (this.Jj = null));
    this.cq = -1;
  };
  g.k.jh = function () {
    return !1;
  };
  g.k.GS = function (a, b) {
    this.cq = a.KB;
    if (0 == this.Vl)
      if (b) {
        try {
          var c = this.B.parse(b);
        } catch (d) {
          a = this.j;
          a.Co = this.cq;
          Y8(a, 2);
          return;
        }
        this.LB = c[0];
        this.nC = c[1];
      } else (a = this.j), (a.Co = this.cq), Y8(a, 2);
    else if (2 == this.Vl)
      if (this.BJ) N8(7), (this.EO = Date.now());
      else if ("11111" == b) {
        if (
          (N8(6),
          (this.BJ = !0),
          (this.iH = Date.now()),
          (a = this.iH - this.NZ),
          !g.bf || g.Nc(10) || 500 > a)
        )
          (this.cq = 200), this.Jj.cancel(), N8(12), V8(this.j, this, !0);
      } else N8(8), (this.iH = this.EO = Date.now()), (this.BJ = !1);
  };
  g.k.WF = function () {
    this.cq = this.Jj.KB;
    if (this.Jj.bq)
      0 == this.Vl
        ? this.nC
          ? ((this.Vl = 1), yxb(this))
          : ((this.Vl = 2), zxb(this))
        : 2 == this.Vl &&
          ((!g.bf || g.Nc(10) ? !this.BJ : 200 > this.EO - this.iH)
            ? (N8(11), V8(this.j, this, !1))
            : (N8(12), V8(this.j, this, !0)));
    else {
      0 == this.Vl ? N8(9) : 2 == this.Vl && N8(10);
      var a = this.j;
      this.Jj.getLastError();
      a.Co = this.cq;
      Y8(a, 2);
    }
  };
  g.k.MB = function () {
    return this.j.MB();
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.Nn = function (a) {
    this.j.Nn(a);
  };
  g.k = Axb.prototype;
  g.k.Bo = null;
  g.k.NB = null;
  g.k.Sj = null;
  g.k.Ug = null;
  g.k.SK = null;
  g.k.XF = null;
  g.k.HS = null;
  g.k.YF = null;
  g.k.OB = 0;
  g.k.q1 = 0;
  g.k.Hi = null;
  g.k.ls = null;
  g.k.eq = null;
  g.k.Lu = null;
  g.k.Ks = null;
  g.k.qK = null;
  g.k.Jx = -1;
  g.k.IS = -1;
  g.k.Co = -1;
  g.k.Ix = 0;
  g.k.Hx = 0;
  g.k.Ku = 8;
  g.gb(Cxb, g.xb);
  g.gb(Dxb, g.xb);
  g.k = Axb.prototype;
  g.k.connect = function (a, b, c, d, e) {
    N8(0);
    this.SK = b;
    this.NB = c || {};
    d && void 0 !== e && ((this.NB.OSID = d), (this.NB.OAID = e));
    this.ma ? (L8((0, g.cb)(this.YU, this, a), 100), Fxb(this)) : this.YU(a);
  };
  g.k.disconnect = function () {
    Gxb(this);
    if (3 == this.j) {
      var a = this.OB++,
        b = this.XF.clone();
      g.oo(b, "SID", this.D);
      g.oo(b, "RID", a);
      g.oo(b, "TYPE", "terminate");
      X8(this, b);
      a = new O8(this, this.D, a);
      a.Fx = 2;
      a.Zr = a8(b.clone());
      new Image().src = a.Zr.toString();
      a.Ex = Date.now();
      P8(a);
    }
    Qxb(this);
  };
  g.k.YU = function (a) {
    this.Ks = new xxb(this);
    this.Ks.QK = this.Bo;
    this.Ks.B = this.G;
    this.Ks.connect(a);
  };
  g.k.jh = function () {
    return 0 == this.j;
  };
  g.k.getState = function () {
    return this.j;
  };
  g.k.KS = function (a) {
    this.ls = null;
    Lxb(this, a);
  };
  g.k.JS = function () {
    this.eq = null;
    this.Ug = new O8(this, this.D, "rpc", this.S);
    this.Ug.Iu = this.Bo;
    this.Ug.NK = 0;
    var a = this.HS.clone();
    g.oo(a, "RID", "rpc");
    g.oo(a, "SID", this.D);
    g.oo(a, "CI", this.qK ? "0" : "1");
    g.oo(a, "AID", this.Jx);
    X8(this, a);
    if (!g.bf || g.Nc(10))
      g.oo(a, "TYPE", "xmlhttp"), mxb(this.Ug, a, !0, this.YF, !1);
    else {
      g.oo(a, "TYPE", "html");
      var b = this.Ug,
        c = !!this.YF;
      b.Fx = 3;
      b.Zr = a8(a.clone());
      rxb(b, c);
    }
  };
  g.k.GS = function (a, b) {
    if (0 != this.j && (this.Ug == a || this.Sj == a))
      if (((this.Co = a.KB), this.Sj == a && 3 == this.j))
        if (7 < this.Ku) {
          try {
            var c = this.G.parse(b);
          } catch (d) {
            c = null;
          }
          if (Array.isArray(c) && 3 == c.length)
            if (((a = c), 0 == a[0]))
              a: {
                if (!this.eq) {
                  if (this.Ug)
                    if (this.Ug.Ex + 3e3 < this.Sj.Ex)
                      W8(this), this.Ug.cancel(), (this.Ug = null);
                    else break a;
                  Oxb(this);
                  N8(19);
                }
              }
            else
              (this.IS = a[1]),
                0 < this.IS - this.Jx &&
                  37500 > a[2] &&
                  this.qK &&
                  0 == this.Hx &&
                  !this.Lu &&
                  (this.Lu = L8((0, g.cb)(this.s1, this), 6e3));
          else Y8(this, 11);
        } else null != b && Y8(this, 11);
      else if ((this.Ug == a && W8(this), !g.dc(b)))
        for (a = this.G.parse(b), b = 0; b < a.length; b++)
          (c = a[b]),
            (this.Jx = c[0]),
            (c = c[1]),
            2 == this.j
              ? "c" == c[0]
                ? ((this.D = c[1]),
                  (this.YF = c[2]),
                  (c = c[3]),
                  null != c ? (this.Ku = c) : (this.Ku = 6),
                  (this.j = 3),
                  this.Hi && this.Hi.NS(),
                  (this.HS = U8(this, this.MB() ? this.YF : null, this.SK)),
                  Mxb(this))
                : "stop" == c[0] && Y8(this, 7)
              : 3 == this.j &&
                ("stop" == c[0]
                  ? Y8(this, 7)
                  : "noop" != c[0] && this.Hi && this.Hi.MS(c),
                (this.Hx = 0));
  };
  g.k.s1 = function () {
    null != this.Lu &&
      ((this.Lu = null), this.Ug.cancel(), (this.Ug = null), Oxb(this), N8(20));
  };
  g.k.WF = function (a) {
    if (this.Ug == a) {
      W8(this);
      this.Ug = null;
      var b = 2;
    } else if (this.Sj == a) (this.Sj = null), (b = 1);
    else return;
    this.Co = a.KB;
    if (0 != this.j)
      if (a.bq)
        if (1 == b) {
          b = Date.now() - a.Ex;
          var c = M8;
          c.dispatchEvent(new Cxb(c, a.Ju ? a.Ju.length : 0, b, this.Ix));
          Exb(this);
          this.C.length = 0;
        } else Mxb(this);
      else {
        c = a.getLastError();
        var d;
        if (!(d = 3 == c || 7 == c || (0 == c && 0 < this.Co))) {
          if ((d = 1 == b))
            this.Sj || this.ls || 1 == this.j || 2 <= this.Ix
              ? (d = !1)
              : ((this.ls = L8(
                  (0, g.cb)(this.KS, this, a),
                  Nxb(this, this.Ix)
                )),
                this.Ix++,
                (d = !0));
          d = !(d || (2 == b && Oxb(this)));
        }
        if (d)
          switch (c) {
            case 1:
              Y8(this, 5);
              break;
            case 4:
              Y8(this, 10);
              break;
            case 3:
              Y8(this, 6);
              break;
            case 7:
              Y8(this, 12);
              break;
            default:
              Y8(this, 2);
          }
      }
  };
  g.k.o1 = function (a) {
    if (!g.Db(arguments, this.j))
      throw Error("Unexpected channel state: " + this.j);
  };
  g.k.aaa = function (a) {
    a ? N8(2) : (N8(1), Pxb(this, 8));
  };
  g.k.PK = function (a) {
    if (a) throw Error("Can't create secondary domain capable XhrIo object.");
    a = new g.vm();
    a.K = !1;
    return a;
  };
  g.k.isActive = function () {
    return !!this.Hi && this.Hi.isActive(this);
  };
  g.k.Nn = function (a) {
    var b = M8;
    b.dispatchEvent(new Dxb(b, a));
  };
  g.k.MB = function () {
    return !(!g.bf || g.Nc(10));
  };
  g.k = Rxb.prototype;
  g.k.NS = function () {};
  g.k.MS = function () {};
  g.k.LS = function () {};
  g.k.TK = function () {};
  g.k.OS = function () {
    return {};
  };
  g.k.isActive = function () {
    return !0;
  };
  g.k = Sxb.prototype;
  g.k.isEmpty = function () {
    return 0 === this.j.length && 0 === this.B.length;
  };
  g.k.clear = function () {
    this.j = [];
    this.B = [];
  };
  g.k.contains = function (a) {
    return g.Db(this.j, a) || g.Db(this.B, a);
  };
  g.k.remove = function (a) {
    var b = this.j;
    var c = (0, g.zcb)(b, a);
    0 <= c ? (g.Eb(b, c), (b = !0)) : (b = !1);
    return b || g.Fb(this.B, a);
  };
  g.k.tm = function () {
    for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
    var c = this.B.length;
    for (b = 0; b < c; ++b) a.push(this.B[b]);
    return a;
  };
  g.w(Txb, g.xb);
  g.w(Uxb, g.xb);
  g.gb(Z8, g.J);
  g.k = Z8.prototype;
  g.k.p9 = function () {
    this.Ti = Math.min(3e5, 2 * this.Ti);
    this.C();
    this.B && this.start();
  };
  g.k.start = function () {
    var a = this.Ti + 15e3 * Math.random();
    g.bu(this.j, a);
    this.B = Date.now() + a;
  };
  g.k.stop = function () {
    this.j.stop();
    this.B = 0;
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.reset = function () {
    this.j.stop();
    this.Ti = 5e3;
  };
  g.gb(Wxb, Rxb);
  g.k = Wxb.prototype;
  g.k.subscribe = function (a, b, c) {
    return this.C.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.C.unsubscribe(a, b, c);
  };
  g.k.Wh = function (a) {
    return this.C.Wh(a);
  };
  g.k.ra = function (a, b) {
    return this.C.ra.apply(this.C, arguments);
  };
  g.k.dispose = function () {
    this.qa ||
      ((this.qa = !0),
      g.sb(this.C),
      this.disconnect(),
      g.sb(this.B),
      (this.B = null),
      (this.va = function () {
        return "";
      }));
  };
  g.k.isDisposed = function () {
    return this.qa;
  };
  g.k.connect = function (a, b, c) {
    if (!this.j || 2 != this.j.getState()) {
      this.ea = "";
      this.B.stop();
      this.K = a || null;
      this.G = b || 0;
      a = this.Ca + "/test";
      b = this.Ca + "/bind";
      var d = new Axb(
          c ? c.firstTestResults : null,
          c ? c.secondTestResults : null,
          this.Va
        ),
        e = this.j;
      e && (e.Hi = null);
      d.Hi = this;
      this.j = d;
      Xxb(this);
      if (this.j) {
        d = g.Iv("ID_TOKEN");
        var f = this.j.Bo || {};
        d
          ? (f["x-youtube-identity-token"] = d)
          : delete f["x-youtube-identity-token"];
        this.j.Bo = f;
      }
      e
        ? ((3 != e.getState() && 0 == Ixb(e)) || e.getState(),
          this.j.connect(a, b, this.S, e.D, e.Jx))
        : c
        ? this.j.connect(a, b, this.S, c.sessionId, c.arrayId)
        : this.j.connect(a, b, this.S);
    }
  };
  g.k.disconnect = function (a) {
    this.ma = a || 0;
    this.B.stop();
    Xxb(this);
    this.j && (3 == this.j.getState() && Lxb(this.j), this.j.disconnect());
    this.ma = 0;
  };
  g.k.sendMessage = function (a, b) {
    a = { _sc: a };
    b && g.sd(a, b);
    this.B.isActive() || 2 == (this.j ? this.j.getState() : 0)
      ? this.D.push(a)
      : this.Gz() && (Xxb(this), Hxb(this.j, a));
  };
  g.k.NS = function () {
    this.B.reset();
    this.K = null;
    this.G = 0;
    if (this.D.length) {
      var a = this.D;
      this.D = [];
      for (var b = 0, c = a.length; b < c; ++b) Hxb(this.j, a[b]);
    }
    this.ra("handlerOpened");
    uvb(this.Pa, "BROWSER_CHANNEL");
  };
  g.k.LS = function (a) {
    var b = 2 == a && 401 == this.j.Co;
    4 == a || b || this.B.start();
    this.ra("handlerError", a, b);
    Avb(this.Ja, "BROWSER_CHANNEL");
  };
  g.k.TK = function (a, b) {
    if (!this.B.isActive()) this.ra("handlerClosed");
    else if (b)
      for (var c = 0, d = b.length; c < d; ++c) {
        var e = b[c].map;
        e && this.D.push(e);
      }
    wvb(this.Fa, "BROWSER_CHANNEL");
    a &&
      this.eb.j.UK(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",
        a.length
      );
    b &&
      this.fb.j.UK(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",
        b.length
      );
  };
  g.k.OS = function () {
    var a = { v: 2 };
    this.ea && (a.gsessionid = this.ea);
    0 != this.G && (a.ui = "" + this.G);
    0 != this.ma && (a.ui = "" + this.ma);
    this.K && g.sd(a, this.K);
    return a;
  };
  g.k.MS = function (a) {
    "S" == a[0]
      ? (this.ea = a[1])
      : "gracefulReconnect" == a[0]
      ? (this.B.start(), this.j.disconnect())
      : this.ra("handlerMessage", new Vxb(a[0], a[1]));
    yvb(this.Oa, "BROWSER_CHANNEL");
  };
  g.k.Gz = function () {
    return !!this.j && 3 == this.j.getState();
  };
  g.k.Fr = function (a) {
    (this.S.loungeIdToken = a) || this.B.stop();
    if (this.Ya && this.j) {
      var b = this.j.Bo || {};
      a
        ? (b["X-YouTube-LoungeId-Token"] = a)
        : delete b["X-YouTube-LoungeId-Token"];
      this.j.Bo = b;
    }
  };
  g.k.Xs = function () {
    return this.S.id;
  };
  g.k.nt = function () {
    return this.B.isActive() ? this.B.B - Date.now() : NaN;
  };
  g.k.Jw = function () {
    var a = this.B;
    g.cu(a.j);
    a.start();
  };
  g.k.y$ = function () {
    this.B.isActive();
    0 == Ixb(this.j) && this.connect(this.K, this.G);
  };
  $8.prototype.D = function (a, b, c, d) {
    b ? a(d) : a({ text: c.responseText });
  };
  $8.prototype.C = function (a, b) {
    a(Error("Request error: " + b.status));
  };
  $8.prototype.G = function (a) {
    a(Error("request timed out"));
  };
  g.w(Zxb, g.Gd);
  g.k = Zxb.prototype;
  g.k.connect = function (a, b, c) {
    this.Hd.connect(a, b, c);
  };
  g.k.disconnect = function (a) {
    this.Hd.disconnect(a);
  };
  g.k.Jw = function () {
    this.Hd.Jw();
  };
  g.k.Xs = function () {
    return this.Hd.Xs();
  };
  g.k.nt = function () {
    return this.Hd.nt();
  };
  g.k.Gz = function () {
    return this.Hd.Gz();
  };
  g.k.w1 = function () {
    this.dispatchEvent("channelOpened");
    var a = this.Hd,
      b = this.j;
    g.fD("yt-remote-session-browser-channel", {
      firstTestResults: [""],
      secondTestResults: !a.j.qK,
      sessionId: a.j.D,
      arrayId: a.j.Jx,
    });
    g.fD("yt-remote-session-screen-id", b);
    a = j8();
    b = k8();
    g.Db(a, b) || a.push(b);
    Rvb(a);
    Tvb();
  };
  g.k.t1 = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.v1 = function (a) {
    this.dispatchEvent(new Txb(a));
  };
  g.k.onError = function (a) {
    this.dispatchEvent(new Uxb(a ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.Hd.sendMessage(a, b);
  };
  g.k.Fr = function (a) {
    this.Hd.Fr(a);
  };
  g.k.dispose = function () {
    this.Hd.dispose();
  };
  g.k = $xb.prototype;
  g.k.connect = function (a, b) {
    a = void 0 === a ? {} : a;
    b = void 0 === b ? 0 : b;
    2 !== this.K &&
      (this.C.stop(),
      (this.ma = a),
      (this.S = b),
      byb(this),
      (a = g.Iv("ID_TOKEN"))
        ? (this.D["x-youtube-identity-token"] = a)
        : delete this.D["x-youtube-identity-token"],
      this.j &&
        ((this.B.device = this.j.device),
        (this.B.name = this.j.name),
        (this.B.app = this.j.app),
        (this.B.id = this.j.id),
        this.j.F6 && (this.B.mdxVersion = "" + this.j.F6),
        this.j.theme && (this.B.theme = this.j.theme),
        this.j.capabilities && (this.B.capabilities = this.j.capabilities),
        this.j.g4 && (this.B.cst = this.j.g4),
        this.j.authuser && (this.B.authuser = this.j.authuser),
        this.j.pageId && (this.B.pageId = this.j.pageId)),
      0 !== this.S ? (this.B.ui = "" + this.S) : delete this.B.ui,
      Object.assign(this.B, this.ma),
      (this.channel = new K8(this.pathPrefix, {
        U5: "gsessionid",
        J6: this.D,
        K6: this.B,
      })),
      this.channel.open(),
      (this.K = 2),
      ayb(this));
  };
  g.k.disconnect = function (a) {
    this.ea = void 0 === a ? 0 : a;
    this.C.stop();
    byb(this);
    this.channel &&
      (0 !== this.ea ? (this.B.ui = "" + this.ea) : delete this.B.ui,
      this.channel.close());
    this.ea = 0;
  };
  g.k.nt = function () {
    return this.C.isActive() ? this.C.B - Date.now() : NaN;
  };
  g.k.Jw = function () {
    var a = this.C;
    g.cu(a.j);
    a.start();
  };
  g.k.sendMessage = function (a, b) {
    this.channel &&
      (byb(this), (a = Object.assign({}, { _sc: a }, b)), this.channel.send(a));
  };
  g.k.Fr = function (a) {
    a || this.C.stop();
    a
      ? (this.D["X-YouTube-LoungeId-Token"] = a)
      : delete this.D["X-YouTube-LoungeId-Token"];
  };
  g.k.Xs = function () {
    return this.j ? this.j.id : "";
  };
  g.k.ra = function (a) {
    return this.G.ra.apply(this.G, [a].concat(g.pa(g.Ja.apply(1, arguments))));
  };
  g.k.subscribe = function (a, b, c) {
    return this.G.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.G.unsubscribe(a, b, c);
  };
  g.k.Wh = function (a) {
    return this.G.Wh(a);
  };
  g.k.dispose = function () {
    this.qa ||
      ((this.qa = !0),
      g.sb(this.G),
      this.disconnect(),
      g.sb(this.C),
      (this.Ca = function () {
        return "";
      }));
  };
  g.k.isDisposed = function () {
    return this.qa;
  };
  g.w(cyb, g.Gd);
  g.k = cyb.prototype;
  g.k.connect = function (a, b) {
    this.j.connect(a, b);
  };
  g.k.disconnect = function (a) {
    this.j.disconnect(a);
  };
  g.k.Jw = function () {
    this.j.Jw();
  };
  g.k.Xs = function () {
    return this.j.Xs();
  };
  g.k.nt = function () {
    return this.j.nt();
  };
  g.k.Gz = function () {
    return 3 === this.j.K;
  };
  g.k.B1 = function () {
    this.dispatchEvent("channelOpened");
  };
  g.k.z1 = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.A1 = function (a) {
    this.dispatchEvent(new Txb(a));
  };
  g.k.onError = function () {
    this.dispatchEvent(new Uxb(401 === this.j.Og ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.j.sendMessage(a, b);
  };
  g.k.Fr = function (a) {
    this.j.Fr(a);
  };
  g.k.dispose = function () {
    this.j.dispose();
  };
  var kyb = Date.now(),
    b9 = null,
    f9 = Array(50),
    e9 = -1,
    g9 = !1;
  g.gb(h9, g.lG);
  h9.prototype.Nk = function () {
    return this.screens;
  };
  h9.prototype.contains = function (a) {
    return !!Ovb(this.screens, a);
  };
  h9.prototype.get = function (a) {
    return a ? i8(this.screens, a) : null;
  };
  h9.prototype.info = function (a) {
    c9(this.K, a);
  };
  g.w(oyb, g.lG);
  g.k = oyb.prototype;
  g.k.start = function () {
    !this.j && isNaN(this.pd) && this.PY();
  };
  g.k.stop = function () {
    this.j && (this.j.abort(), (this.j = null));
    isNaN(this.pd) || (g.lC(this.pd), (this.pd = NaN));
  };
  g.k.Ba = function () {
    this.stop();
    g.lG.prototype.Ba.call(this);
  };
  g.k.PY = function () {
    this.pd = NaN;
    this.j = g.oC(a9(this.C, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: this.S },
      timeout: 5e3,
      onSuccess: (0, g.cb)(this.D1, this),
      onError: (0, g.cb)(this.C1, this),
      onTimeout: (0, g.cb)(this.E1, this),
    });
  };
  g.k.D1 = function (a, b) {
    this.j = null;
    a = b.screen || {};
    a.dialId = this.D;
    a.name = this.K;
    b = -1;
    this.G &&
      a.shortLivedLoungeToken &&
      a.shortLivedLoungeToken.value &&
      a.shortLivedLoungeToken.refreshIntervalMs &&
      ((a.screenIdType = "shortLived"),
      (a.loungeToken = a.shortLivedLoungeToken.value),
      (b = a.shortLivedLoungeToken.refreshIntervalMs));
    this.ra("pairingComplete", new f8(a), b);
  };
  g.k.C1 = function (a) {
    this.j = null;
    a.status && 404 == a.status
      ? this.B >= iAb.length
        ? this.ra("pairingFailed", Error("DIAL polling timed out"))
        : ((a = iAb[this.B]),
          (this.pd = g.jC((0, g.cb)(this.PY, this), a)),
          this.B++)
      : this.ra("pairingFailed", Error("Server error " + a.status));
  };
  g.k.E1 = function () {
    this.j = null;
    this.ra("pairingFailed", Error("Server not responding"));
  };
  var iAb = [2e3, 2e3, 1e3, 1e3, 1e3, 2e3, 2e3, 5e3, 5e3, 1e4];
  g.gb(j9, h9);
  g.k = j9.prototype;
  g.k.start = function () {
    i9(this) && this.ra("screenChange");
    !g.gD("yt-remote-lounge-token-expiration") && pyb(this);
    g.lC(this.j);
    this.j = g.jC((0, g.cb)(this.start, this), 1e4);
  };
  g.k.add = function (a, b) {
    i9(this);
    lyb(this, a);
    k9(this, !1);
    this.ra("screenChange");
    b(a);
    a.token || pyb(this);
  };
  g.k.remove = function (a, b) {
    var c = i9(this);
    nyb(this, a) && (k9(this, !1), (c = !0));
    b(a);
    c && this.ra("screenChange");
  };
  g.k.pK = function (a, b, c, d) {
    var e = i9(this),
      f = this.get(a.id);
    f
      ? (f.name != b && ((f.name = b), k9(this, !1), (e = !0)), c(a))
      : d(Error("no such local screen."));
    e && this.ra("screenChange");
  };
  g.k.Ba = function () {
    g.lC(this.j);
    j9.Rf.Ba.call(this);
  };
  g.k.s5 = function (a) {
    i9(this);
    var b = this.screens.length;
    a = (a && a.screens) || [];
    for (var c = 0, d = a.length; c < d; ++c) {
      var e = a[c],
        f = this.get(e.screenId);
      f && ((f.token = e.loungeToken), --b);
    }
    k9(this, !b);
    b && c9(this.K, "Missed " + b + " lounge tokens.");
  };
  g.k.r5 = function (a) {
    c9(this.K, "Requesting lounge tokens failed: " + a);
  };
  g.w(ryb, g.lG);
  g.k = ryb.prototype;
  g.k.start = function () {
    var a = parseInt(g.gD("yt-remote-fast-check-period") || "0", 10);
    (this.D = g.eb() - 144e5 < a ? 0 : a)
      ? l9(this)
      : ((this.D = g.eb() + 3e5),
        g.fD("yt-remote-fast-check-period", this.D),
        this.JQ());
  };
  g.k.isEmpty = function () {
    return g.jd(this.j);
  };
  g.k.update = function () {
    qyb("Updating availability on schedule.");
    var a = this.K(),
      b = g.Uc(
        this.j,
        function (c, d) {
          return c && !!i8(a, d);
        },
        this
      );
    uyb(this, b);
  };
  g.k.Ba = function () {
    g.lC(this.C);
    this.C = NaN;
    this.B && (this.B.abort(), (this.B = null));
    g.lG.prototype.Ba.call(this);
  };
  g.k.JQ = function () {
    g.lC(this.C);
    this.C = NaN;
    this.B && this.B.abort();
    var a = vyb(this);
    if (pvb(a)) {
      var b = a9(this.G, "/pairing/get_screen_availability");
      this.B = Yxb(
        this.G,
        b,
        { lounge_token: g.fd(a).join(",") },
        (0, g.cb)(this.V8, this, a),
        (0, g.cb)(this.U8, this)
      );
    } else uyb(this, {}), l9(this);
  };
  g.k.V8 = function (a, b) {
    this.B = null;
    var c = g.fd(vyb(this));
    if (g.Wb(c, g.fd(a))) {
      b = b.screens || [];
      c = {};
      for (var d = b.length, e = 0; e < d; ++e)
        c[a[b[e].loungeToken]] = "online" == b[e].status;
      uyb(this, c);
      l9(this);
    } else this.eg("Changing Screen set during request."), this.JQ();
  };
  g.k.U8 = function (a) {
    this.eg("Screen availability failed: " + a);
    this.B = null;
    l9(this);
  };
  g.k.eg = function (a) {
    c9("OnlineScreenService", a);
  };
  g.gb(m9, h9);
  g.k = m9.prototype;
  g.k.start = function () {
    this.B.start();
    this.j.start();
    this.screens.length &&
      (this.ra("screenChange"),
      this.j.isEmpty() || this.ra("onlineScreenChange"));
  };
  g.k.add = function (a, b, c) {
    this.B.add(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.B.remove(a, b, c);
    this.j.update();
  };
  g.k.pK = function (a, b, c, d) {
    this.B.contains(a)
      ? this.B.pK(a, b, c, d)
      : ((a = "Updating name of unknown screen: " + a.name),
        c9(this.K, a),
        d(Error(a)));
  };
  g.k.Nk = function (a) {
    return a
      ? this.screens
      : g.Ib(
          this.screens,
          g.ts(
            this.C,
            function (b) {
              return !this.contains(b);
            },
            this
          )
        );
  };
  g.k.PS = function () {
    return g.ts(
      this.Nk(!0),
      function (a) {
        return !!this.j.j[a.id];
      },
      this
    );
  };
  g.k.QS = function (a, b, c, d, e, f) {
    var h = this;
    this.info("getDialScreenByPairingCode " + a + " / " + b);
    var l = new oyb(this.D, a, b, c, d);
    l.subscribe("pairingComplete", function (m, n) {
      g.sb(l);
      e(n9(h, m), n);
    });
    l.subscribe("pairingFailed", function (m) {
      g.sb(l);
      f(m);
    });
    l.start();
    return (0, g.cb)(l.stop, l);
  };
  g.k.F1 = function (a, b, c, d) {
    g.oC(a9(this.D, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: a },
      timeout: 5e3,
      onSuccess: (0, g.cb)(function (e, f) {
        e = new f8(f.screen || {});
        if (!e.name || zyb(this, e.name)) {
          a: {
            f = e.name;
            for (var h = 2, l = b(f, h); zyb(this, l); ) {
              h++;
              if (20 < h) break a;
              l = b(f, h);
            }
            f = l;
          }
          e.name = f;
        }
        c(n9(this, e));
      }, this),
      onError: (0, g.cb)(function (e) {
        d(Error("pairing request failed: " + e.status));
      }, this),
      onTimeout: (0, g.cb)(function () {
        d(Error("pairing request timed out."));
      }, this),
    });
  };
  g.k.Ba = function () {
    g.sb(this.B);
    g.sb(this.j);
    m9.Rf.Ba.call(this);
  };
  g.k.C5 = function () {
    Byb(this);
    this.ra("screenChange");
    this.j.update();
  };
  m9.prototype.dispose = m9.prototype.dispose;
  g.gb(o9, g.lG);
  g.k = o9.prototype;
  g.k.yj = function (a) {
    this.isDisposed() ||
      (a && (q9(this, "" + a), this.ra("sessionFailed")),
      (this.j = null),
      this.ra("sessionScreen", null));
  };
  g.k.info = function (a) {
    c9(this.Ja, a);
  };
  g.k.RS = function () {
    return null;
  };
  g.k.YQ = function (a) {
    var b = this.B;
    a
      ? ((b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, [])),
        (b.displayStatus.showStop = !0))
      : (b.displayStatus = null);
    chrome.cast.setReceiverDisplayStatus(
      b,
      (0, g.cb)(function () {
        this.info("Updated receiver status for " + b.friendlyName + ": " + a);
      }, this),
      (0, g.cb)(function () {
        q9(this, "Failed to update receiver status for: " + b.friendlyName);
      }, this)
    );
  };
  g.k.Ba = function () {
    this.YQ("");
    o9.Rf.Ba.call(this);
  };
  g.w(r9, o9);
  g.k = r9.prototype;
  g.k.XQ = function (a) {
    if (this.C) {
      if (this.C == a) return;
      q9(this, "Overriding cast session with new session object");
      Nyb(this);
      this.Ca = !1;
      this.ea = "unknown";
      this.C.removeUpdateListener(this.va);
      this.C.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.Fa
      );
    }
    this.C = a;
    this.C.addUpdateListener(this.va);
    this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Fa);
    Iyb(this, "getMdxSessionStatus");
  };
  g.k.Rz = function (a) {
    this.info("launchWithParams no-op for Cast: " + g.rm(a));
  };
  g.k.stop = function () {
    this.C
      ? this.C.stop(
          (0, g.cb)(function () {
            this.yj();
          }, this),
          (0, g.cb)(function () {
            this.yj(Error("Failed to stop receiver app."));
          }, this)
        )
      : this.yj(Error("Stopping cast device without session."));
  };
  g.k.YQ = function () {};
  g.k.Ba = function () {
    this.info("disposeInternal");
    Nyb(this);
    this.C &&
      (this.C.removeUpdateListener(this.va),
      this.C.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.Fa
      ));
    this.C = null;
    o9.prototype.Ba.call(this);
  };
  g.k.F9 = function (a, b) {
    if (!this.isDisposed())
      if (b)
        if (((b = c8(b)), g.Xa(b)))
          switch (
            ((a = "" + b.type),
            (b = b.data || {}),
            this.info("onYoutubeMessage_: " + a + " " + g.rm(b)),
            a)
          ) {
            case "mdxSessionStatus":
              Fyb(this, b);
              break;
            case "loungeToken":
              Jyb(this, b);
              break;
            default:
              q9(this, "Unknown youtube message: " + a);
          }
        else q9(this, "Unable to parse message.");
      else q9(this, "No data in message.");
  };
  g.k.aW = function (a, b, c, d) {
    g.lC(this.ma);
    this.ma = 0;
    yyb(
      this.D,
      this.B.label,
      a,
      this.B.friendlyName,
      (0, g.cb)(function (e) {
        e
          ? b(e)
          : 0 <= d
          ? (q9(
              this,
              "Screen " + a + " appears to be offline. " + d + " retries left."
            ),
            (this.ma = g.jC((0, g.cb)(this.aW, this, a, b, c, d - 1), 300)))
          : c(Error("Unable to fetch screen."));
      }, this),
      c
    );
  };
  g.k.RS = function () {
    return this.C;
  };
  g.k.G1 = function (a) {
    this.isDisposed() || a || (q9(this, "Cast session died."), this.yj());
  };
  g.w(s9, o9);
  g.k = s9.prototype;
  g.k.XQ = function (a) {
    this.C = a;
    this.C.addUpdateListener(this.Oa);
  };
  g.k.Rz = function (a) {
    this.Pa = a;
    this.qa();
  };
  g.k.stop = function () {
    Vyb(this);
    this.C
      ? this.C.stop(
          (0, g.cb)(this.yj, this, null),
          (0, g.cb)(this.yj, this, "Failed to stop DIAL device.")
        )
      : this.yj();
  };
  g.k.Ba = function () {
    Vyb(this);
    this.C && this.C.removeUpdateListener(this.Oa);
    this.C = null;
    o9.prototype.Ba.call(this);
  };
  g.k.H1 = function (a) {
    this.isDisposed() ||
      a ||
      (q9(this, "DIAL session died."),
      this.G(),
      (this.G = function () {}),
      this.yj());
  };
  g.w(v9, o9);
  v9.prototype.stop = function () {
    this.yj();
  };
  v9.prototype.XQ = function () {};
  v9.prototype.Rz = function () {
    g.lC(this.C);
    this.C = NaN;
    var a = i8(this.D.Nk(), this.B.label);
    a ? p9(this, a) : this.yj(Error("No such screen"));
  };
  v9.prototype.Ba = function () {
    g.lC(this.C);
    this.C = NaN;
    o9.prototype.Ba.call(this);
  };
  g.w(w9, g.lG);
  g.k = w9.prototype;
  g.k.init = function (a, b) {
    chrome.cast.timeout.requestSession = 3e4;
    var c = new chrome.cast.SessionRequest(this.ma, [
      chrome.cast.Capability.AUDIO_OUT,
    ]);
    this.ea || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
    var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
    a =
      a || this.K
        ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB
        : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
    var e = (0, g.cb)(this.D8, this);
    c = new chrome.cast.ApiConfig(c, (0, g.cb)(this.vY, this), e, d, a);
    c.customDialLaunchCallback = (0, g.cb)(this.C7, this);
    chrome.cast.initialize(
      c,
      (0, g.cb)(function () {
        this.isDisposed() ||
          (chrome.cast.addReceiverActionListener(this.G),
          hyb(),
          this.B.subscribe("onlineScreenChange", (0, g.cb)(this.SS, this)),
          (this.C = Yyb(this)),
          chrome.cast.setCustomReceivers(
            this.C,
            function () {},
            (0, g.cb)(function (f) {
              this.eg("Failed to set initial custom receivers: " + g.rm(f));
            }, this)
          ),
          this.ra("yt-remote-cast2-availability-change", y9(this)),
          b(!0));
      }, this),
      (0, g.cb)(function (f) {
        this.eg("Failed to initialize API: " + g.rm(f));
        b(!1);
      }, this)
    );
  };
  g.k.D$ = function (a, b) {
    x9("Setting connected screen ID: " + a + " -> " + b);
    if (this.j) {
      var c = this.j.j;
      if (!a || (c && c.id != a))
        x9("Unsetting old screen status: " + this.j.B.friendlyName),
          z9(this, null);
    }
    if (a && b) {
      if (!this.j) {
        c = i8(this.B.Nk(), a);
        if (!c) {
          x9("setConnectedScreenStatus: Unknown screen.");
          return;
        }
        if ("shortLived" == c.idType) {
          x9(
            "setConnectedScreenStatus: Screen with id type to be short lived."
          );
          return;
        }
        a = Wyb(this, c);
        a ||
          (x9("setConnectedScreenStatus: Connected receiver not custom..."),
          (a = new chrome.cast.Receiver(c.uuid ? c.uuid : c.id, c.name)),
          (a.receiverType = chrome.cast.ReceiverType.CUSTOM),
          this.C.push(a),
          chrome.cast.setCustomReceivers(
            this.C,
            function () {},
            (0, g.cb)(function (d) {
              this.eg("Failed to set initial custom receivers: " + g.rm(d));
            }, this)
          ));
        x9("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
        z9(this, new v9(this.B, a), !0);
      }
      this.j.YQ(b);
    } else x9("setConnectedScreenStatus: no screen.");
  };
  g.k.F$ = function (a) {
    this.isDisposed()
      ? this.eg("Setting connection data on disposed cast v2")
      : this.j
      ? this.j.Rz(a)
      : this.eg("Setting connection data without a session");
  };
  g.k.J1 = function () {
    this.isDisposed()
      ? this.eg("Stopping session on disposed cast v2")
      : this.j
      ? (this.j.stop(), z9(this, null))
      : x9("Stopping non-existing session");
  };
  g.k.requestSession = function () {
    chrome.cast.requestSession(
      (0, g.cb)(this.vY, this),
      (0, g.cb)(this.Y8, this)
    );
  };
  g.k.Ba = function () {
    this.B.unsubscribe("onlineScreenChange", (0, g.cb)(this.SS, this));
    window.chrome &&
      chrome.cast &&
      chrome.cast.removeReceiverActionListener(this.G);
    var a = eyb,
      b = g.Ta("yt.mdx.remote.debug.handlers_");
    g.Fb(b || [], a);
    g.sb(this.j);
    g.lG.prototype.Ba.call(this);
  };
  g.k.eg = function (a) {
    c9("Controller", a);
  };
  g.k.xY = function (a, b) {
    this.j == a &&
      (b || z9(this, null), this.ra("yt-remote-cast2-session-change", b));
  };
  g.k.A8 = function (a, b) {
    if (!this.isDisposed())
      if (a)
        switch (
          ((a.friendlyName = chrome.cast.unescape(a.friendlyName)),
          x9(
            "onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b
          ),
          b)
        ) {
          case chrome.cast.ReceiverAction.CAST:
            if (this.j)
              if (this.j.B.label != a.label)
                x9(
                  "onReceiverAction_: Stopping active receiver: " +
                    this.j.B.friendlyName
                ),
                  this.j.stop();
              else {
                x9("onReceiverAction_: Casting to active receiver.");
                this.j.j && this.ra("yt-remote-cast2-session-change", this.j.j);
                break;
              }
            switch (a.receiverType) {
              case chrome.cast.ReceiverType.CUSTOM:
                z9(this, new v9(this.B, a));
                break;
              case chrome.cast.ReceiverType.DIAL:
                z9(this, new s9(this.B, a, this.D, this.config_));
                break;
              case chrome.cast.ReceiverType.CAST:
                z9(this, new r9(this.B, a, this.config_));
                break;
              default:
                this.eg("Unknown receiver type: " + a.receiverType);
            }
            break;
          case chrome.cast.ReceiverAction.STOP:
            this.j && this.j.B.label == a.label
              ? this.j.stop()
              : this.eg("Stopping receiver w/o session: " + a.friendlyName);
        }
      else this.eg("onReceiverAction_ called without receiver.");
  };
  g.k.C7 = function (a) {
    if (this.isDisposed()) return Promise.reject(Error("disposed"));
    var b = a.receiver;
    b.receiverType != chrome.cast.ReceiverType.DIAL &&
      (this.eg("Not DIAL receiver: " + b.friendlyName),
      (b.receiverType = chrome.cast.ReceiverType.DIAL));
    var c = this.j ? this.j.B : null;
    if (!c || c.label != b.label)
      return (
        this.eg(
          "Receiving DIAL launch request for non-clicked DIAL receiver: " +
            b.friendlyName
        ),
        Promise.reject(Error("illegal DIAL launch"))
      );
    if (
      c &&
      c.label == b.label &&
      c.receiverType != chrome.cast.ReceiverType.DIAL
    ) {
      if (this.j.j)
        return (
          x9("Reselecting dial screen."),
          this.ra("yt-remote-cast2-session-change", this.j.j),
          Promise.resolve(new chrome.cast.DialLaunchResponse(!1))
        );
      this.eg(
        'Changing CAST intent from "' +
          c.receiverType +
          '" to "dial" for ' +
          b.friendlyName
      );
      z9(this, new s9(this.B, b, this.D, this.config_));
    }
    b = this.j;
    b.ma = a;
    b.ma.appState == chrome.cast.DialAppState.RUNNING
      ? ((a = b.ma.extraData || {}),
        (c = a.screenId || null),
        t9(b) && a.loungeToken
          ? a.loungeTokenRefreshIntervalMs
            ? (a = Syb(
                b,
                {
                  name: b.B.friendlyName,
                  screenId: a.screenId,
                  loungeToken: a.loungeToken,
                  dialId: b.ma.receiver.label,
                  screenIdType: "shortLived",
                },
                a.loungeTokenRefreshIntervalMs
              ))
            : (g.VB(
                Error(
                  "No loungeTokenRefreshIntervalMs presents in additionalData: " +
                    JSON.stringify(a) +
                    "."
                )
              ),
              (a = Tyb(b, c)))
          : (a = Tyb(b, c)))
      : (a = Qyb(b));
    return a;
  };
  g.k.vY = function (a) {
    var b = this;
    if (!this.isDisposed() && !this.K) {
      x9("New cast session ID: " + a.sessionId);
      var c = a.receiver;
      if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
        if (!this.j)
          if (c.receiverType == chrome.cast.ReceiverType.CAST)
            x9("Got resumed cast session before resumed mdx connection."),
              (c.friendlyName = chrome.cast.unescape(c.friendlyName)),
              z9(this, new r9(this.B, c, this.config_), !0);
          else {
            this.eg(
              "Got non-cast session without previous mdx receiver event, or mdx resume."
            );
            return;
          }
        var d = this.j.B,
          e = i8(this.B.Nk(), d.label);
        e &&
          g8(e, c.label) &&
          d.receiverType != chrome.cast.ReceiverType.CAST &&
          c.receiverType == chrome.cast.ReceiverType.CAST &&
          (x9(
            "onSessionEstablished_: manual to cast session change " +
              c.friendlyName
          ),
          g.sb(this.j),
          (this.j = new r9(this.B, c, this.config_)),
          this.j.subscribe("sessionScreen", (0, g.cb)(this.xY, this, this.j)),
          this.j.subscribe("sessionFailed", function () {
            return Xyb(b, b.j);
          }),
          this.j.Rz(null));
        this.j.XQ(a);
      }
    }
  };
  g.k.I1 = function () {
    return this.j ? this.j.RS() : null;
  };
  g.k.Y8 = function (a) {
    this.isDisposed() ||
      (this.eg("Failed to estabilish a session: " + g.rm(a)),
      a.code != chrome.cast.ErrorCode.CANCEL && z9(this, null),
      this.ra("yt-remote-cast2-session-failed"));
  };
  g.k.D8 = function (a) {
    x9("Receiver availability updated: " + a);
    if (!this.isDisposed()) {
      var b = y9(this);
      this.S = a == chrome.cast.ReceiverAvailability.AVAILABLE;
      y9(this) != b && this.ra("yt-remote-cast2-availability-change", y9(this));
    }
  };
  g.k.SS = function () {
    this.isDisposed() ||
      ((this.C = Yyb(this)),
      x9("Updating custom receivers: " + g.rm(this.C)),
      chrome.cast.setCustomReceivers(
        this.C,
        function () {},
        (0, g.cb)(function () {
          this.eg("Failed to set custom receivers.");
        }, this)
      ),
      this.ra("yt-remote-cast2-availability-change", y9(this)));
  };
  w9.prototype.setLaunchParams = w9.prototype.F$;
  w9.prototype.setConnectedScreenStatus = w9.prototype.D$;
  w9.prototype.stopSession = w9.prototype.J1;
  w9.prototype.getCastSession = w9.prototype.I1;
  w9.prototype.requestSession = w9.prototype.requestSession;
  w9.prototype.init = w9.prototype.init;
  w9.prototype.dispose = w9.prototype.dispose;
  var gzb = [];
  g.k = G9.prototype;
  g.k.reset = function (a) {
    this.listId = "";
    this.index = -1;
    this.videoId = "";
    mzb(this);
    this.volume = -1;
    this.muted = !1;
    a &&
      ((this.index = a.index),
      (this.listId = a.listId),
      (this.videoId = a.videoId),
      (this.playerState = a.playerState),
      (this.volume = a.volume),
      (this.muted = a.muted),
      (this.audioTrackId = a.audioTrackId),
      (this.trackData = a.trackData),
      (this.qp = a.hasPrevious),
      (this.Sk = a.hasNext),
      (this.S = a.playerTime),
      (this.K = a.playerTimeAt),
      (this.D = a.seekableStart),
      (this.j = a.seekableEnd),
      (this.G = a.duration),
      (this.ma = a.loadedTime),
      (this.C = a.liveIngestionTime),
      (this.B = !isNaN(this.C)));
  };
  g.k.isPlaying = function () {
    return 1 == this.playerState;
  };
  g.k.wl = function (a) {
    this.G = isNaN(a) ? 0 : a;
  };
  g.k.getDuration = function () {
    return this.B ? this.G + H9(this) : this.G;
  };
  g.k.clone = function () {
    return new G9(nzb(this));
  };
  g.w(M9, g.lG);
  g.k = M9.prototype;
  g.k.getState = function () {
    return this.C;
  };
  g.k.nt = function () {
    return this.D.getReconnectTimeout();
  };
  g.k.Jw = function () {
    this.D.reconnect();
  };
  g.k.play = function () {
    O9(this)
      ? (this.j ? this.j.play(null, g.Ld, S9(this, "play")) : R9(this, "play"),
        qzb(this, 1, J9(N9(this))),
        this.ra("remotePlayerChange"))
      : P9(this, this.play);
  };
  g.k.pause = function () {
    O9(this)
      ? (this.j
          ? this.j.pause(null, g.Ld, S9(this, "pause"))
          : R9(this, "pause"),
        qzb(this, 2, J9(N9(this))),
        this.ra("remotePlayerChange"))
      : P9(this, this.pause);
  };
  g.k.seekTo = function (a) {
    if (O9(this)) {
      if (this.j) {
        var b = N9(this),
          c = new chrome.cast.media.SeekRequest();
        c.currentTime = a;
        b.isPlaying() || 3 == b.playerState
          ? (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START)
          : (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE);
        this.j.seek(c, g.Ld, S9(this, "seekTo", { newTime: a }));
      } else R9(this, "seekTo", { newTime: a });
      qzb(this, 3, a);
      this.ra("remotePlayerChange");
    } else P9(this, g.db(this.seekTo, a));
  };
  g.k.stop = function () {
    if (O9(this)) {
      this.j
        ? this.j.stop(null, g.Ld, S9(this, "stopVideo"))
        : R9(this, "stopVideo");
      var a = N9(this);
      a.index = -1;
      a.videoId = "";
      mzb(a);
      Q9(this, a);
      this.ra("remotePlayerChange");
    } else P9(this, this.stop);
  };
  g.k.setVolume = function (a, b) {
    if (O9(this)) {
      var c = N9(this);
      if (this.B) {
        if (c.volume != a) {
          var d = Math.round(a) / 100;
          this.B.setReceiverVolumeLevel(
            d,
            (0, g.cb)(function () {
              d9("set receiver volume: " + d);
            }, this),
            (0, g.cb)(function () {
              this.eg("failed to set receiver volume.");
            }, this)
          );
        }
        c.muted != b &&
          this.B.setReceiverMuted(
            b,
            (0, g.cb)(function () {
              d9("set receiver muted: " + b);
            }, this),
            (0, g.cb)(function () {
              this.eg("failed to set receiver muted.");
            }, this)
          );
      } else {
        var e = { volume: a, muted: b };
        -1 != c.volume && (e.delta = a - c.volume);
        R9(this, "setVolume", e);
      }
      c.muted = b;
      c.volume = a;
      Q9(this, c);
    } else P9(this, g.db(this.setVolume, a, b));
  };
  g.k.US = function (a, b) {
    if (O9(this)) {
      var c = N9(this);
      a = { videoId: a };
      b &&
        ((c.trackData = {
          trackName: b.name,
          languageCode: b.languageCode,
          sourceLanguageCode: b.translationLanguage
            ? b.translationLanguage.languageCode
            : "",
          languageName: b.languageName,
          kind: b.kind,
        }),
        (a.style = g.rm(b.style)),
        g.sd(a, c.trackData));
      R9(this, "setSubtitlesTrack", a);
      Q9(this, c);
    } else P9(this, g.db(this.US, a, b));
  };
  g.k.setAudioTrack = function (a, b) {
    O9(this)
      ? ((b = b.getLanguageInfo().getId()),
        R9(this, "setAudioTrack", { videoId: a, audioTrackId: b }),
        (a = N9(this)),
        (a.audioTrackId = b),
        Q9(this, a))
      : P9(this, g.db(this.setAudioTrack, a, b));
  };
  g.k.playVideo = function (a, b, c, d, e, f, h) {
    d = void 0 === d ? null : d;
    e = void 0 === e ? null : e;
    f = void 0 === f ? null : f;
    h = void 0 === h ? null : h;
    var l = N9(this),
      m = { videoId: a };
    void 0 !== c && (m.currentIndex = c);
    K9(l, a, c || 0);
    void 0 !== b && (I9(l, b), (m.currentTime = b));
    d && (m.listId = d);
    e && (m.playerParams = e);
    f && (m.clickTrackingParams = f);
    h && (m.locationInfo = g.rm(h));
    R9(this, "setPlaylist", m);
    d || Q9(this, l);
  };
  g.k.uJ = function (a, b) {
    if (O9(this)) {
      if (a && b) {
        var c = N9(this);
        K9(c, a, b);
        Q9(this, c);
      }
      R9(this, "previous");
    } else P9(this, g.db(this.uJ, a, b));
  };
  g.k.nextVideo = function (a, b) {
    if (O9(this)) {
      if (a && b) {
        var c = N9(this);
        K9(c, a, b);
        Q9(this, c);
      }
      R9(this, "next");
    } else P9(this, g.db(this.nextVideo, a, b));
  };
  g.k.DG = function () {
    if (O9(this)) {
      R9(this, "clearPlaylist");
      var a = N9(this);
      a.reset();
      Q9(this, a);
      this.ra("remotePlayerChange");
    } else P9(this, this.DG);
  };
  g.k.lV = function () {
    O9(this) ? R9(this, "dismissAutoplay") : P9(this, this.lV);
  };
  g.k.dispose = function () {
    if (3 != this.C) {
      var a = this.C;
      this.C = 3;
      this.ra("proxyStateChange", a, this.C);
    }
    g.lG.prototype.dispose.call(this);
  };
  g.k.Ba = function () {
    pzb(this);
    this.D = null;
    this.G.clear();
    L9(this, null);
    g.lG.prototype.Ba.call(this);
  };
  g.k.bR = function (a) {
    if ((a != this.C || 2 == a) && 3 != this.C && 0 != a) {
      var b = this.C;
      this.C = a;
      this.ra("proxyStateChange", b, a);
      if (1 == a)
        for (; !this.G.isEmpty(); )
          (b = a = this.G),
            0 === b.j.length && ((b.j = b.B), b.j.reverse(), (b.B = [])),
            a.j.pop().apply(this);
      else 3 == a && this.dispose();
    }
  };
  g.k.y8 = function (a, b) {
    this.ra(a, b);
  };
  g.k.r7 = function (a) {
    if (!a) this.kE(null), L9(this, null);
    else if (this.B.receiver.volume) {
      a = this.B.receiver.volume;
      var b = N9(this),
        c = Math.round(100 * a.level || 0);
      if (b.volume != c || b.muted != a.muted)
        d9("Cast volume update: " + a.level + (a.muted ? " muted" : "")),
          (b.volume = c),
          (b.muted = !!a.muted),
          Q9(this, b);
    }
  };
  g.k.kE = function (a) {
    d9("Cast media: " + !!a);
    this.j && this.j.removeUpdateListener(this.ma);
    if ((this.j = a))
      this.j.addUpdateListener(this.ma),
        rzb(this),
        this.ra("remotePlayerChange");
  };
  g.k.q7 = function (a) {
    a ? (rzb(this), this.ra("remotePlayerChange")) : this.kE(null);
  };
  g.k.zR = function () {
    R9(this, "sendDebugCommand", { debugCommand: "stats4nerds " });
  };
  g.k.u7 = function () {
    var a = jzb();
    a && L9(this, a);
  };
  g.k.eg = function (a) {
    c9("CP", a);
  };
  g.w(V9, g.lG);
  g.k = V9.prototype;
  g.k.connect = function (a, b) {
    if (b) {
      var c = b.listId,
        d = b.videoId,
        e = b.videoIds,
        f = b.playerParams,
        h = b.clickTrackingParams,
        l = b.index,
        m = { videoId: d },
        n = b.currentTime,
        p = b.locationInfo;
      b = b.loopMode;
      void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
      f && (m.playerParams = f);
      p && (m.locationInfo = p);
      h && (m.clickTrackingParams = h);
      c && (m.listId = c);
      e && 0 < e.length && (m.videoIds = e.join(","));
      void 0 !== l && (m.currentIndex = l);
      this.Oa && (m.loopMode = b || "LOOP_MODE_OFF");
      c && (this.j.listId = c);
      this.j.videoId = d;
      this.j.index = l || 0;
      this.j.state = 3;
      I9(this.j, n);
      this.G = "UNSUPPORTED";
      c = this.Oa ? "setInitialState" : "setPlaylist";
      T9("Connecting with " + c + " and params: " + g.rm(m));
      this.B.connect({ method: c, params: g.rm(m) }, a, Uvb());
    } else T9("Connecting without params"), this.B.connect({}, a, Uvb());
    vzb(this);
  };
  g.k.Fr = function (a) {
    this.B.Fr(a);
  };
  g.k.dispose = function () {
    this.isDisposed() ||
      (g.Sa("yt.mdx.remote.remoteClient_", null),
      this.ra("beforeDispose"),
      U9(this, 3));
    g.lG.prototype.dispose.call(this);
  };
  g.k.Ba = function () {
    wzb(this);
    yzb(this);
    xzb(this);
    g.lC(this.ma);
    this.ma = NaN;
    g.lC(this.ea);
    this.ea = NaN;
    this.D = null;
    g.YC(this.qa);
    this.qa.length = 0;
    this.B.dispose();
    g.lG.prototype.Ba.call(this);
    this.G = this.S = this.C = this.j = this.B = null;
  };
  g.k.WW = function (a) {
    if (!this.C || 0 === this.C.length) return !1;
    for (var b = g.u(this.C), c = b.next(); !c.done; c = b.next())
      if (!c.value.capabilities.has(a)) return !1;
    return !0;
  };
  g.k.f5 = function () {
    var a = 3;
    this.isDisposed() ||
      ((a = 0),
      isNaN(this.hD()) ? this.B.Gz() && isNaN(this.K) && (a = 1) : (a = 2));
    return a;
  };
  g.k.Xy = function (a) {
    T9("Disconnecting with " + a);
    g.Sa("yt.mdx.remote.remoteClient_", null);
    wzb(this);
    this.ra("beforeDisconnect", a);
    1 == a && l8();
    this.B.disconnect(a);
    this.dispose();
  };
  g.k.d5 = function () {
    var a = this.j;
    this.D && ((a = this.j.clone()), K9(a, this.D, a.index));
    return nzb(a);
  };
  g.k.G$ = function (a) {
    var b = this,
      c = new G9(a);
    c.videoId &&
      c.videoId != this.j.videoId &&
      ((this.D = c.videoId),
      g.lC(this.ma),
      (this.ma = g.jC(function () {
        if (b.D) {
          var e = b.D;
          b.D = null;
          b.j.videoId != e && W9(b, "getNowPlaying");
        }
      }, 5e3)));
    var d = [];
    (this.j.listId == c.listId &&
      this.j.videoId == c.videoId &&
      this.j.index == c.index) ||
      d.push("remoteQueueChange");
    (this.j.playerState == c.playerState &&
      this.j.volume == c.volume &&
      this.j.muted == c.muted &&
      J9(this.j) == J9(c) &&
      g.rm(this.j.trackData) == g.rm(c.trackData)) ||
      d.push("remotePlayerChange");
    this.j.reset(a);
    g.Yb(
      d,
      function (e) {
        this.ra(e);
      },
      this
    );
  };
  g.k.VV = function () {
    var a = this.B.Xs(),
      b = g.Bb(this.C, function (c) {
        return "REMOTE_CONTROL" == c.type && c.id != a;
      });
    return b ? b.id : "";
  };
  g.k.hD = function () {
    return this.B.nt();
  };
  g.k.V4 = function () {
    return this.G || "UNSUPPORTED";
  };
  g.k.W4 = function () {
    return this.S || "";
  };
  g.k.K1 = function () {
    !isNaN(this.hD()) && this.B.Jw();
  };
  g.k.C$ = function (a, b) {
    W9(this, a, b);
    Azb(this);
  };
  g.k.VS = function () {
    var a = g.yC("SID", "") || "",
      b = g.yC("SAPISID", "") || "",
      c = g.yC("__Secure-3PAPISID", "") || "";
    if (!a && !b && !c) return "";
    a = g.mg(g.lg(a), 2);
    b = g.mg(g.lg(b), 2);
    c = g.mg(g.lg(c), 2);
    return g.mg(g.lg(a + "," + b + "," + c), 2);
  };
  V9.prototype.subscribe = V9.prototype.subscribe;
  V9.prototype.unsubscribeByKey = V9.prototype.Wh;
  V9.prototype.getProxyState = V9.prototype.f5;
  V9.prototype.disconnect = V9.prototype.Xy;
  V9.prototype.getPlayerContextData = V9.prototype.d5;
  V9.prototype.setPlayerContextData = V9.prototype.G$;
  V9.prototype.getOtherConnectedRemoteId = V9.prototype.VV;
  V9.prototype.getReconnectTimeout = V9.prototype.hD;
  V9.prototype.getAutoplayMode = V9.prototype.V4;
  V9.prototype.getAutoplayVideoId = V9.prototype.W4;
  V9.prototype.reconnect = V9.prototype.K1;
  V9.prototype.sendMessage = V9.prototype.C$;
  V9.prototype.getXsrfToken = V9.prototype.VS;
  V9.prototype.isCapabilitySupportedOnConnectedDevices = V9.prototype.WW;
  g.w(Mzb, h9);
  g.k = Mzb.prototype;
  g.k.Nk = function (a) {
    return this.ih.$_gs(a);
  };
  g.k.contains = function (a) {
    return !!this.ih.$_c(a);
  };
  g.k.get = function (a) {
    return this.ih.$_g(a);
  };
  g.k.start = function () {
    this.ih.$_st();
  };
  g.k.add = function (a, b, c) {
    this.ih.$_a(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.ih.$_r(a, b, c);
  };
  g.k.pK = function (a, b, c, d) {
    this.ih.$_un(a, b, c, d);
  };
  g.k.Ba = function () {
    for (var a = 0, b = this.j.length; a < b; ++a) this.ih.$_ubk(this.j[a]);
    this.j.length = 0;
    this.ih = null;
    h9.prototype.Ba.call(this);
  };
  g.k.L1 = function () {
    this.ra("screenChange");
  };
  g.k.h8 = function () {
    this.ra("onlineScreenChange");
  };
  m9.prototype.$_st = m9.prototype.start;
  m9.prototype.$_gspc = m9.prototype.F1;
  m9.prototype.$_gsppc = m9.prototype.QS;
  m9.prototype.$_c = m9.prototype.contains;
  m9.prototype.$_g = m9.prototype.get;
  m9.prototype.$_a = m9.prototype.add;
  m9.prototype.$_un = m9.prototype.pK;
  m9.prototype.$_r = m9.prototype.remove;
  m9.prototype.$_gs = m9.prototype.Nk;
  m9.prototype.$_gos = m9.prototype.PS;
  m9.prototype.$_s = m9.prototype.subscribe;
  m9.prototype.$_ubk = m9.prototype.Wh;
  var g$ = null,
    j$ = !1,
    X9 = null,
    Y9 = null,
    Xzb = null,
    b$ = [];
  g.w(bAb, g.J);
  g.k = bAb.prototype;
  g.k.Ba = function () {
    g.J.prototype.Ba.call(this);
    this.j.stop();
    this.B.stop();
    this.S.stop();
    var a = this.Hc;
    a.unsubscribe("proxyStateChange", this.uY, this);
    a.unsubscribe("remotePlayerChange", this.qE, this);
    a.unsubscribe("remoteQueueChange", this.eJ, this);
    a.unsubscribe("previousNextChange", this.rY, this);
    a.unsubscribe("nowAutoplaying", this.mY, this);
    a.unsubscribe("autoplayDismissed", this.SX, this);
    this.Hc = this.module = null;
  };
  g.k.Rk = function (a) {
    var b = g.Ja.apply(1, arguments);
    if (2 != this.Hc.C)
      if (k$(this)) {
        if (1081 != N9(this.Hc).playerState || "control_seek" !== a)
          switch (a) {
            case "control_toggle_play_pause":
              N9(this.Hc).isPlaying() ? this.Hc.pause() : this.Hc.play();
              break;
            case "control_play":
              this.Hc.play();
              break;
            case "control_pause":
              this.Hc.pause();
              break;
            case "control_seek":
              this.K.MK(b[0], b[1]);
              break;
            case "control_subtitles_set_track":
              dAb(this, b[0]);
              break;
            case "control_set_audio_track":
              this.setAudioTrack(b[0]);
          }
      } else
        switch (a) {
          case "control_toggle_play_pause":
          case "control_play":
          case "control_pause":
            b = this.J.getCurrentTime();
            l$(this, 0 === b ? void 0 : b);
            break;
          case "control_seek":
            l$(this, b[0]);
            break;
          case "control_subtitles_set_track":
            dAb(this, b[0]);
            break;
          case "control_set_audio_track":
            this.setAudioTrack(b[0]);
        }
  };
  g.k.o7 = function (a) {
    this.S.Z0(a);
  };
  g.k.yaa = function (a) {
    this.Rk("control_subtitles_set_track", g.jd(a) ? null : a);
  };
  g.k.VZ = function () {
    var a = this.J.getOption("captions", "track");
    g.jd(a) || dAb(this, a);
  };
  g.k.Ic = function (a) {
    this.module.Ic(a, this.J.getVideoData().lengthSeconds);
  };
  g.k.S7 = function () {
    g.jd(this.C) || eAb(this, this.C);
    this.D = !1;
  };
  g.k.uY = function (a, b) {
    this.B.stop();
    2 === b && this.MZ();
  };
  g.k.qE = function () {
    if (k$(this)) {
      this.j.stop();
      var a = N9(this.Hc);
      switch (a.playerState) {
        case 1080:
        case 1081:
        case 1084:
        case 1085:
          this.module.Qh = 1;
          break;
        case 1082:
        case 1083:
          this.module.Qh = 0;
          break;
        default:
          this.module.Qh = -1;
      }
      switch (a.playerState) {
        case 1081:
        case 1:
          this.Ac(new g.QL(8));
          this.LZ();
          break;
        case 1085:
        case 3:
          this.Ac(new g.QL(9));
          break;
        case 1083:
        case 0:
          this.Ac(new g.QL(2));
          this.K.stop();
          this.Ic(this.J.getVideoData().lengthSeconds);
          break;
        case 1084:
          this.Ac(new g.QL(4));
          break;
        case 2:
          this.Ac(new g.QL(4));
          this.Ic(J9(a));
          break;
        case -1:
          this.Ac(new g.QL(64));
          break;
        case -1e3:
          this.Ac(
            new g.QL(128, {
              errorCode: "mdx.remoteerror",
              errorMessage:
                "Video n\u00e0y kh\u00f4ng kh\u1ea3 d\u1ee5ng \u0111\u1ec3 ph\u00e1t l\u1ea1i t\u1eeb xa.",
              eH: 2,
            })
          );
      }
      a = N9(this.Hc).trackData;
      var b = this.C;
      (a || b
        ? a &&
          b &&
          a.trackName == b.trackName &&
          a.languageCode == b.languageCode &&
          a.languageName == b.languageName &&
          a.kind == b.kind
        : 1) || ((this.C = a), eAb(this, a));
      a = N9(this.Hc);
      -1 === a.volume ||
        (Math.round(this.J.getVolume()) === a.volume &&
          this.J.isMuted() === a.muted) ||
        this.ma.isActive() ||
        this.A_();
    } else cAb(this);
  };
  g.k.rY = function () {
    this.J.ra("mdxpreviousnextchange");
  };
  g.k.eJ = function () {
    k$(this) || cAb(this);
  };
  g.k.mY = function (a) {
    isNaN(a) || this.J.ra("mdxnowautoplaying", a);
  };
  g.k.SX = function () {
    this.J.ra("mdxautoplaycanceled");
  };
  g.k.setAudioTrack = function (a) {
    k$(this) && this.Hc.setAudioTrack(this.J.getVideoData(1).videoId, a);
  };
  g.k.seekTo = function (a, b) {
    -1 === N9(this.Hc).playerState ? l$(this, a) : b && this.Hc.seekTo(a);
  };
  g.k.A_ = function () {
    var a = this;
    if (k$(this)) {
      var b = N9(this.Hc);
      this.events.Qc(this.ea);
      b.muted ? this.J.mute() : this.J.unMute();
      this.J.setVolume(b.volume);
      this.ea = this.events.V(this.J, "onVolumeChange", function (c) {
        $zb(a, c);
      });
    }
  };
  g.k.LZ = function () {
    this.j.stop();
    if (!this.Hc.isDisposed()) {
      var a = N9(this.Hc);
      a.isPlaying() && this.Ac(new g.QL(8));
      this.Ic(J9(a));
      this.j.start();
    }
  };
  g.k.MZ = function () {
    this.B.stop();
    this.j.stop();
    var a = this.Hc.nt();
    2 == this.Hc.C && !isNaN(a) && this.B.start();
  };
  g.k.Ac = function (a) {
    this.B.stop();
    var b = this.G;
    if (!g.gBa(b, a)) {
      var c = g.aH(a, 2);
      c !== g.aH(this.G, 2) && this.J.ZA(c);
      this.G = a;
      gAb(this.module, b, a);
    }
  };
  g.w(m$, g.T);
  m$.prototype.zd = function () {
    this.j.show();
  };
  m$.prototype.Qb = function () {
    this.j.hide();
  };
  m$.prototype.B = function () {
    n8("mdx-privacy-popup-cancel");
    this.Qb();
  };
  m$.prototype.C = function () {
    n8("mdx-privacy-popup-confirm");
    this.Qb();
  };
  g.w(n$, g.T);
  n$.prototype.onStateChange = function (a) {
    this.Gc(a.state);
  };
  n$.prototype.Gc = function (a) {
    if (3 === this.api.getPresentingPlayerType()) {
      var b = {
        RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name,
      };
      a = g.aH(a, 128)
        ? g.vK("L\u1ed7i tr\u00ean $RECEIVER_NAME", b)
        : a.isPlaying() || a.isPaused()
        ? g.vK("\u0110ang ph\u00e1t tr\u00ean $RECEIVER_NAME", b)
        : g.vK("\u0110\u00e3 k\u1ebft n\u1ed1i v\u1edbi $RECEIVER_NAME", b);
      this.updateValue("statustext", a);
      this.j.show();
    } else this.j.hide();
  };
  g.w(o$, g.FX);
  o$.prototype.D = function () {
    var a = this.J.getOption("remote", "receivers");
    a && 1 < a.length && !this.J.getOption("remote", "quickCast")
      ? ((this.au = g.ac(a, this.j, this)),
        g.GX(this, g.Yp(a, this.j)),
        (a = this.J.getOption("remote", "currentReceiver")),
        (a = this.j(a)),
        this.options[a] && this.Kj(a),
        this.enable(!0))
      : this.enable(!1);
  };
  o$.prototype.j = function (a) {
    return a.key;
  };
  o$.prototype.zk = function (a) {
    return "cast-selector-receiver" === a ? "Truy\u1ec1n..." : this.au[a].name;
  };
  o$.prototype.uh = function (a) {
    g.FX.prototype.uh.call(this, a);
    this.J.setOption("remote", "currentReceiver", this.au[a]);
    this.Pb.Qb();
  };
  g.w(fAb, g.yV);
  g.k = fAb.prototype;
  g.k.create = function () {
    var a = this.player.W(),
      b = g.jS(a);
    a = {
      device: "Desktop",
      app: "youtube-desktop",
      loadCastApiSetupScript: a.N("mdx_load_cast_api_bootstrap_script"),
      enableDialLoungeToken: a.N("enable_dial_short_lived_lounge_token"),
      enableCastLoungeToken: a.N("enable_cast_short_lived_lounge_token"),
    };
    Rzb(b, a);
    this.subscriptions.push(g.SE("yt-remote-before-disconnect", this.m7, this));
    this.subscriptions.push(g.SE("yt-remote-connection-change", this.E8, this));
    this.subscriptions.push(
      g.SE("yt-remote-receiver-availability-change", this.tY, this)
    );
    this.subscriptions.push(g.SE("yt-remote-auto-connect", this.C8, this));
    this.subscriptions.push(g.SE("yt-remote-receiver-resumed", this.B8, this));
    this.subscriptions.push(g.SE("mdx-privacy-popup-confirm", this.W9, this));
    this.subscriptions.push(g.SE("mdx-privacy-popup-cancel", this.V9, this));
    this.tY();
  };
  g.k.load = function () {
    this.player.cancelPlayback();
    g.yV.prototype.load.call(this);
    this.Zl = new bAb(this, this.player, this.Hc);
    var a = (a = Zzb()) ? a.currentTime : 0;
    var b = Wzb() ? new M9(f$(), void 0) : null;
    0 == a && b && (a = J9(N9(b)));
    0 !== a && this.Ic(a);
    gAb(this, this.lf, this.lf);
    this.player.Sp(6);
  };
  g.k.unload = function () {
    this.player.ra("mdxautoplaycanceled");
    this.Ms = this.Dp;
    g.tb(this.Zl, this.Hc);
    this.Hc = this.Zl = null;
    g.yV.prototype.unload.call(this);
    this.player.Sp(5);
    p$(this);
  };
  g.k.Ba = function () {
    g.TE(this.subscriptions);
    g.yV.prototype.Ba.call(this);
  };
  g.k.mE = function (a) {
    var b = g.Ja.apply(1, arguments);
    this.loaded && this.Zl.Rk.apply(this.Zl, [a].concat(g.pa(b)));
  };
  g.k.getAdState = function () {
    return this.Qh;
  };
  g.k.qp = function () {
    return this.Hc ? N9(this.Hc).qp : !1;
  };
  g.k.Sk = function () {
    return this.Hc ? N9(this.Hc).Sk : !1;
  };
  g.k.Ic = function (a, b) {
    this.fX = a || 0;
    this.player.ra("progresssync", a, b);
    this.player.Ta("onVideoProgress", a || 0);
  };
  g.k.getCurrentTime = function () {
    return this.fX;
  };
  g.k.getProgressState = function () {
    var a = N9(this.Hc),
      b = this.player.getVideoData();
    return {
      airingStart: 0,
      airingEnd: 0,
      allowSeeking: 1081 != a.playerState && this.player.Ph(),
      clipEnd: b.clipEnd,
      clipStart: b.clipStart,
      current: this.getCurrentTime(),
      displayedStart: -1,
      duration: a.getDuration(),
      ingestionTime: a.B ? a.C + H9(a) : a.C,
      isAtLiveHead: 1 >= (a.B ? a.j + H9(a) : a.j) - this.getCurrentTime(),
      loaded: a.ma,
      seekableEnd: a.B ? a.j + H9(a) : a.j,
      seekableStart: 0 < a.D ? a.D + H9(a) : a.D,
      offset: 0,
      viewerLivestreamJoinMediaTime: 0,
    };
  };
  g.k.nextVideo = function () {
    this.Hc && this.Hc.nextVideo();
  };
  g.k.uJ = function () {
    this.Hc && this.Hc.uJ();
  };
  g.k.m7 = function (a) {
    1 === a && (this.hQ = this.Hc ? N9(this.Hc) : null);
  };
  g.k.E8 = function () {
    var a = Wzb() ? new M9(f$(), void 0) : null;
    if (a) {
      var b = this.Ms;
      this.loaded && this.unload();
      this.Hc = a;
      this.hQ = null;
      b.key !== this.Dp.key && ((this.Ms = b), this.load());
    } else
      g.sb(this.Hc),
        (this.Hc = null),
        this.loaded &&
          (this.unload(),
          (a = this.hQ) &&
            a.videoId === this.player.getVideoData().videoId &&
            this.player.cueVideoById(a.videoId, J9(a)));
    this.player.ra("videodatachange", "newdata", this.player.getVideoData(), 3);
  };
  g.k.tY = function () {
    var a = [this.Dp],
      b = a.concat,
      c = Szb();
    D9() &&
      g.gD("yt-remote-cast-available") &&
      c.push({ key: "cast-selector-receiver", name: "Cast..." });
    this.au = b.call(a, c);
    a = Uzb() || this.Dp;
    q$(this, a);
    this.player.Ta("onMdxReceiversChange");
  };
  g.k.C8 = function () {
    var a = Uzb();
    q$(this, a);
  };
  g.k.B8 = function () {
    this.Ms = Uzb();
  };
  g.k.W9 = function () {
    this.JE = !0;
    p$(this);
    j$ = !1;
    g$ && i$(g$, 1);
    g$ = null;
  };
  g.k.V9 = function () {
    this.JE = !1;
    p$(this);
    q$(this, this.Dp);
    this.Ms = this.Dp;
    j$ = !1;
    g$ = null;
    this.player.playVideo();
  };
  g.k.Jh = function (a, b) {
    switch (a) {
      case "casting":
        return this.loaded;
      case "receivers":
        return this.au;
      case "currentReceiver":
        return (
          b && ("cast-selector-receiver" === b.key ? kzb() : q$(this, b)),
          this.loaded ? this.Ms : this.Dp
        );
      case "quickCast":
        return 2 === this.au.length &&
          "cast-selector-receiver" === this.au[1].key
          ? (b && kzb(), !0)
          : !1;
    }
  };
  g.k.zR = function () {
    this.Hc.zR();
  };
  g.k.xl = function () {
    return !1;
  };
  g.k.getOptions = function () {
    return ["casting", "receivers", "currentReceiver", "quickCast"];
  };
  g.k.isLoggedIn = function () {
    var a, b;
    return void 0 !==
      (null == (a = g.Iv("PLAYER_CONFIG"))
        ? void 0
        : null == (b = a.args)
        ? void 0
        : b.authuser)
      ? !0
      : !(!g.Iv("SESSION_INDEX") && !g.Iv("LOGGED_IN"));
  };
  g.xV("remote", fAb);
})(_yt_player);
