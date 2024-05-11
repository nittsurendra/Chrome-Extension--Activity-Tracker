var kc = Object.defineProperty;
var xc = (Oe, pe, ye) =>
  pe in Oe
    ? kc(Oe, pe, { enumerable: !0, configurable: !0, writable: !0, value: ye })
    : (Oe[pe] = ye);
var H = (Oe, pe, ye) => (xc(Oe, typeof pe != "symbol" ? pe + "" : pe, ye), ye);
(function () {
  "use strict";
  var Oe =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
  function pe(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var ye = { exports: {} };
  (function (e, t) {
    (function (s, n) {
      n(e);
    })(
      typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Oe,
      function (s) {
        var n, o;
        if (
          !(
            (o = (n = globalThis.chrome) == null ? void 0 : n.runtime) !=
              null && o.id
          )
        )
          throw new Error(
            "This script should only be loaded in a browser extension."
          );
        if (
          typeof globalThis.browser > "u" ||
          Object.getPrototypeOf(globalThis.browser) !== Object.prototype
        ) {
          const a = "The message port closed before a response was received.",
            i = (r) => {
              const c = {
                alarms: {
                  clear: { minArgs: 0, maxArgs: 1 },
                  clearAll: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                },
                bookmarks: {
                  create: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getChildren: { minArgs: 1, maxArgs: 1 },
                  getRecent: { minArgs: 1, maxArgs: 1 },
                  getSubTree: { minArgs: 1, maxArgs: 1 },
                  getTree: { minArgs: 0, maxArgs: 0 },
                  move: { minArgs: 2, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeTree: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                browserAction: {
                  disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                  getBadgeText: { minArgs: 1, maxArgs: 1 },
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  openPopup: { minArgs: 0, maxArgs: 0 },
                  setBadgeBackgroundColor: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setBadgeText: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                },
                browsingData: {
                  remove: { minArgs: 2, maxArgs: 2 },
                  removeCache: { minArgs: 1, maxArgs: 1 },
                  removeCookies: { minArgs: 1, maxArgs: 1 },
                  removeDownloads: { minArgs: 1, maxArgs: 1 },
                  removeFormData: { minArgs: 1, maxArgs: 1 },
                  removeHistory: { minArgs: 1, maxArgs: 1 },
                  removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                  removePasswords: { minArgs: 1, maxArgs: 1 },
                  removePluginData: { minArgs: 1, maxArgs: 1 },
                  settings: { minArgs: 0, maxArgs: 0 },
                },
                commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                contextMenus: {
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeAll: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                cookies: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 1, maxArgs: 1 },
                  getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
                devtools: {
                  inspectedWindow: {
                    eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                  },
                  panels: {
                    create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                    elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } },
                  },
                },
                downloads: {
                  cancel: { minArgs: 1, maxArgs: 1 },
                  download: { minArgs: 1, maxArgs: 1 },
                  erase: { minArgs: 1, maxArgs: 1 },
                  getFileIcon: { minArgs: 1, maxArgs: 2 },
                  open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  pause: { minArgs: 1, maxArgs: 1 },
                  removeFile: { minArgs: 1, maxArgs: 1 },
                  resume: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                extension: {
                  isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                  isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
                },
                history: {
                  addUrl: { minArgs: 1, maxArgs: 1 },
                  deleteAll: { minArgs: 0, maxArgs: 0 },
                  deleteRange: { minArgs: 1, maxArgs: 1 },
                  deleteUrl: { minArgs: 1, maxArgs: 1 },
                  getVisits: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                },
                i18n: {
                  detectLanguage: { minArgs: 1, maxArgs: 1 },
                  getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
                },
                identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                management: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getSelf: { minArgs: 0, maxArgs: 0 },
                  setEnabled: { minArgs: 2, maxArgs: 2 },
                  uninstallSelf: { minArgs: 0, maxArgs: 1 },
                },
                notifications: {
                  clear: { minArgs: 1, maxArgs: 1 },
                  create: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                pageAction: {
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                permissions: {
                  contains: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  request: { minArgs: 1, maxArgs: 1 },
                },
                runtime: {
                  getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                  getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                  openOptionsPage: { minArgs: 0, maxArgs: 0 },
                  requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                  sendMessage: { minArgs: 1, maxArgs: 3 },
                  sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                  setUninstallURL: { minArgs: 1, maxArgs: 1 },
                },
                sessions: {
                  getDevices: { minArgs: 0, maxArgs: 1 },
                  getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                  restore: { minArgs: 0, maxArgs: 1 },
                },
                storage: {
                  local: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                  managed: {
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  },
                  sync: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                },
                tabs: {
                  captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                  create: { minArgs: 1, maxArgs: 1 },
                  detectLanguage: { minArgs: 0, maxArgs: 1 },
                  discard: { minArgs: 0, maxArgs: 1 },
                  duplicate: { minArgs: 1, maxArgs: 1 },
                  executeScript: { minArgs: 1, maxArgs: 2 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 0 },
                  getZoom: { minArgs: 0, maxArgs: 1 },
                  getZoomSettings: { minArgs: 0, maxArgs: 1 },
                  goBack: { minArgs: 0, maxArgs: 1 },
                  goForward: { minArgs: 0, maxArgs: 1 },
                  highlight: { minArgs: 1, maxArgs: 1 },
                  insertCSS: { minArgs: 1, maxArgs: 2 },
                  move: { minArgs: 2, maxArgs: 2 },
                  query: { minArgs: 1, maxArgs: 1 },
                  reload: { minArgs: 0, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeCSS: { minArgs: 1, maxArgs: 2 },
                  sendMessage: { minArgs: 2, maxArgs: 3 },
                  setZoom: { minArgs: 1, maxArgs: 2 },
                  setZoomSettings: { minArgs: 1, maxArgs: 2 },
                  update: { minArgs: 1, maxArgs: 2 },
                },
                topSites: { get: { minArgs: 0, maxArgs: 0 } },
                webNavigation: {
                  getAllFrames: { minArgs: 1, maxArgs: 1 },
                  getFrame: { minArgs: 1, maxArgs: 1 },
                },
                webRequest: {
                  handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
                },
                windows: {
                  create: { minArgs: 0, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 1 },
                  getLastFocused: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
              };
              if (Object.keys(c).length === 0)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill"
                );
              class l extends WeakMap {
                constructor(T, I = void 0) {
                  super(I), (this.createItem = T);
                }
                get(T) {
                  return (
                    this.has(T) || this.set(T, this.createItem(T)), super.get(T)
                  );
                }
              }
              const f = (y) =>
                  y && typeof y == "object" && typeof y.then == "function",
                g =
                  (y, T) =>
                  (...I) => {
                    r.runtime.lastError
                      ? y.reject(new Error(r.runtime.lastError.message))
                      : T.singleCallbackArg ||
                        (I.length <= 1 && T.singleCallbackArg !== !1)
                      ? y.resolve(I[0])
                      : y.resolve(I);
                  },
                u = (y) => (y == 1 ? "argument" : "arguments"),
                h = (y, T) =>
                  function (D, ...F) {
                    if (F.length < T.minArgs)
                      throw new Error(
                        `Expected at least ${T.minArgs} ${u(
                          T.minArgs
                        )} for ${y}(), got ${F.length}`
                      );
                    if (F.length > T.maxArgs)
                      throw new Error(
                        `Expected at most ${T.maxArgs} ${u(
                          T.maxArgs
                        )} for ${y}(), got ${F.length}`
                      );
                    return new Promise((j, X) => {
                      if (T.fallbackToNoCallback)
                        try {
                          D[y](...F, g({ resolve: j, reject: X }, T));
                        } catch (O) {
                          console.warn(
                            `${y} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                            O
                          ),
                            D[y](...F),
                            (T.fallbackToNoCallback = !1),
                            (T.noCallback = !0),
                            j();
                        }
                      else
                        T.noCallback
                          ? (D[y](...F), j())
                          : D[y](...F, g({ resolve: j, reject: X }, T));
                    });
                  },
                b = (y, T, I) =>
                  new Proxy(T, {
                    apply(D, F, j) {
                      return I.call(F, y, ...j);
                    },
                  });
              let _ = Function.call.bind(Object.prototype.hasOwnProperty);
              const w = (y, T = {}, I = {}) => {
                  let D = Object.create(null),
                    F = {
                      has(X, O) {
                        return O in y || O in D;
                      },
                      get(X, O, Q) {
                        if (O in D) return D[O];
                        if (!(O in y)) return;
                        let M = y[O];
                        if (typeof M == "function")
                          if (typeof T[O] == "function") M = b(y, y[O], T[O]);
                          else if (_(I, O)) {
                            let be = h(O, I[O]);
                            M = b(y, y[O], be);
                          } else M = M.bind(y);
                        else if (
                          typeof M == "object" &&
                          M !== null &&
                          (_(T, O) || _(I, O))
                        )
                          M = w(M, T[O], I[O]);
                        else if (_(I, "*")) M = w(M, T[O], I["*"]);
                        else
                          return (
                            Object.defineProperty(D, O, {
                              configurable: !0,
                              enumerable: !0,
                              get() {
                                return y[O];
                              },
                              set(be) {
                                y[O] = be;
                              },
                            }),
                            M
                          );
                        return (D[O] = M), M;
                      },
                      set(X, O, Q, M) {
                        return O in D ? (D[O] = Q) : (y[O] = Q), !0;
                      },
                      defineProperty(X, O, Q) {
                        return Reflect.defineProperty(D, O, Q);
                      },
                      deleteProperty(X, O) {
                        return Reflect.deleteProperty(D, O);
                      },
                    },
                    j = Object.create(y);
                  return new Proxy(j, F);
                },
                v = (y) => ({
                  addListener(T, I, ...D) {
                    T.addListener(y.get(I), ...D);
                  },
                  hasListener(T, I) {
                    return T.hasListener(y.get(I));
                  },
                  removeListener(T, I) {
                    T.removeListener(y.get(I));
                  },
                }),
                A = new l((y) =>
                  typeof y != "function"
                    ? y
                    : function (I) {
                        const D = w(
                          I,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } }
                        );
                        y(D);
                      }
                ),
                R = new l((y) =>
                  typeof y != "function"
                    ? y
                    : function (I, D, F) {
                        let j = !1,
                          X,
                          O = new Promise((Fe) => {
                            X = function (ae) {
                              (j = !0), Fe(ae);
                            };
                          }),
                          Q;
                        try {
                          Q = y(I, D, X);
                        } catch (Fe) {
                          Q = Promise.reject(Fe);
                        }
                        const M = Q !== !0 && f(Q);
                        if (Q !== !0 && !M && !j) return !1;
                        const be = (Fe) => {
                          Fe.then(
                            (ae) => {
                              F(ae);
                            },
                            (ae) => {
                              let gt;
                              ae &&
                              (ae instanceof Error ||
                                typeof ae.message == "string")
                                ? (gt = ae.message)
                                : (gt = "An unexpected error occurred"),
                                F({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: gt,
                                });
                            }
                          ).catch((ae) => {
                            console.error(
                              "Failed to send onMessage rejected reply",
                              ae
                            );
                          });
                        };
                        return be(M ? Q : O), !0;
                      }
                ),
                S = ({ reject: y, resolve: T }, I) => {
                  r.runtime.lastError
                    ? r.runtime.lastError.message === a
                      ? T()
                      : y(new Error(r.runtime.lastError.message))
                    : I && I.__mozWebExtensionPolyfillReject__
                    ? y(new Error(I.message))
                    : T(I);
                },
                p = (y, T, I, ...D) => {
                  if (D.length < T.minArgs)
                    throw new Error(
                      `Expected at least ${T.minArgs} ${u(
                        T.minArgs
                      )} for ${y}(), got ${D.length}`
                    );
                  if (D.length > T.maxArgs)
                    throw new Error(
                      `Expected at most ${T.maxArgs} ${u(
                        T.maxArgs
                      )} for ${y}(), got ${D.length}`
                    );
                  return new Promise((F, j) => {
                    const X = S.bind(null, { resolve: F, reject: j });
                    D.push(X), I.sendMessage(...D);
                  });
                },
                L = {
                  devtools: { network: { onRequestFinished: v(A) } },
                  runtime: {
                    onMessage: v(R),
                    onMessageExternal: v(R),
                    sendMessage: p.bind(null, "sendMessage", {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: p.bind(null, "sendMessage", {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                V = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };
              return (
                (c.privacy = {
                  network: { "*": V },
                  services: { "*": V },
                  websites: { "*": V },
                }),
                w(r, L, c)
              );
            };
          s.exports = i(chrome);
        } else s.exports = globalThis.browser;
      }
    );
  })(ye);
  var So = ye.exports;
  const E = pe(So);
  function Do(e) {
    return !(
      e == null ||
      e == null ||
      !e.url ||
      !e.id ||
      (!e.url.startsWith("http:") &&
        !e.url.startsWith("https:") &&
        !e.url.startsWith("file:")) ||
      e.url.startsWith("chrome://") ||
      e.url.startsWith("chrome-extension://")
    );
  }
  function dt(e) {
    let t;
    return e == null
      ? ""
      : e.startsWith("file:")
      ? e
      : (e.indexOf("//") > -1 ? (t = e.split("/")[2]) : (t = e.split("/")[0]),
        (t = t.split(":")[0]),
        (t = t.split("?")[0]),
        t);
  }
  /*!
   * shared v9.2.2
   * (c) 2022 kazuya kawaguchi
   * Released under the MIT License.
   */ const Mt = typeof window < "u",
    Io = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
    Te = (e) => (Io ? Symbol(e) : e),
    Eo = (e, t, s) => Oo({ l: e, k: t, s }),
    Oo = (e) =>
      JSON.stringify(e)
        .replace(/\u2028/g, "\\u2028")
        .replace(/\u2029/g, "\\u2029")
        .replace(/\u0027/g, "\\u0027"),
    Y = (e) => typeof e == "number" && isFinite(e),
    ko = (e) => Wt(e) === "[object Date]",
    ft = (e) => Wt(e) === "[object RegExp]",
    pt = (e) => k(e) && Object.keys(e).length === 0;
  function xo(e, t) {
    typeof console < "u" &&
      (console.warn("[intlify] " + e), t && console.warn(t.stack));
  }
  const G = Object.assign;
  let Is;
  const Ft = () =>
    Is ||
    (Is =
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : {});
  function Es(e) {
    return e
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  }
  const Co = Object.prototype.hasOwnProperty;
  function Pt(e, t) {
    return Co.call(e, t);
  }
  const U = Array.isArray,
    q = (e) => typeof e == "function",
    $ = (e) => typeof e == "string",
    P = (e) => typeof e == "boolean",
    N = (e) => e !== null && typeof e == "object",
    Os = Object.prototype.toString,
    Wt = (e) => Os.call(e),
    k = (e) => Wt(e) === "[object Object]",
    No = (e) =>
      e == null
        ? ""
        : U(e) || (k(e) && e.toString === Os)
        ? JSON.stringify(e, null, 2)
        : String(e);
  /*!
   * message-compiler v9.2.2
   * (c) 2022 kazuya kawaguchi
   * Released under the MIT License.
   */ const ks = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    __EXTEND_POINT__: 15,
  };
  function xs(e, t, s = {}) {
    const { domain: n, messages: o, args: a } = s,
      i = e,
      r = new SyntaxError(String(i));
    return (r.code = e), t && (r.location = t), (r.domain = n), r;
  }
  /*!
   * devtools-if v9.2.2
   * (c) 2022 kazuya kawaguchi
   * Released under the MIT License.
   */ const Cs = {
    I18nInit: "i18n:init",
    FunctionTranslate: "function:translate",
  };
  /*!
   * core-base v9.2.2
   * (c) 2022 kazuya kawaguchi
   * Released under the MIT License.
   */ const Ae = [];
  (Ae[0] = { w: [0], i: [3, 0], ["["]: [4], o: [7] }),
    (Ae[1] = { w: [1], ["."]: [2], ["["]: [4], o: [7] }),
    (Ae[2] = { w: [2], i: [3, 0], [0]: [3, 0] }),
    (Ae[3] = {
      i: [3, 0],
      [0]: [3, 0],
      w: [1, 1],
      ["."]: [2, 1],
      ["["]: [4, 1],
      o: [7, 1],
    }),
    (Ae[4] = {
      ["'"]: [5, 0],
      ['"']: [6, 0],
      ["["]: [4, 2],
      ["]"]: [1, 3],
      o: 8,
      l: [4, 0],
    }),
    (Ae[5] = { ["'"]: [4, 0], o: 8, l: [5, 0] }),
    (Ae[6] = { ['"']: [4, 0], o: 8, l: [6, 0] });
  const Ro = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
  function Lo(e) {
    return Ro.test(e);
  }
  function Mo(e) {
    const t = e.charCodeAt(0),
      s = e.charCodeAt(e.length - 1);
    return t === s && (t === 34 || t === 39) ? e.slice(1, -1) : e;
  }
  function Fo(e) {
    if (e == null) return "o";
    switch (e.charCodeAt(0)) {
      case 91:
      case 93:
      case 46:
      case 34:
      case 39:
        return e;
      case 95:
      case 36:
      case 45:
        return "i";
      case 9:
      case 10:
      case 13:
      case 160:
      case 65279:
      case 8232:
      case 8233:
        return "w";
    }
    return "i";
  }
  function Po(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e))
      ? !1
      : Lo(t)
      ? Mo(t)
      : "*" + t;
  }
  function Wo(e) {
    const t = [];
    let s = -1,
      n = 0,
      o = 0,
      a,
      i,
      r,
      c,
      l,
      f,
      g;
    const u = [];
    (u[0] = () => {
      i === void 0 ? (i = r) : (i += r);
    }),
      (u[1] = () => {
        i !== void 0 && (t.push(i), (i = void 0));
      }),
      (u[2] = () => {
        u[0](), o++;
      }),
      (u[3] = () => {
        if (o > 0) o--, (n = 4), u[0]();
        else {
          if (((o = 0), i === void 0 || ((i = Po(i)), i === !1))) return !1;
          u[1]();
        }
      });
    function h() {
      const b = e[s + 1];
      if ((n === 5 && b === "'") || (n === 6 && b === '"'))
        return s++, (r = "\\" + b), u[0](), !0;
    }
    for (; n !== null; )
      if ((s++, (a = e[s]), !(a === "\\" && h()))) {
        if (
          ((c = Fo(a)),
          (g = Ae[n]),
          (l = g[c] || g.l || 8),
          l === 8 ||
            ((n = l[0]),
            l[1] !== void 0 && ((f = u[l[1]]), f && ((r = a), f() === !1))))
        )
          return;
        if (n === 7) return t;
      }
  }
  const Ns = new Map();
  function Uo(e, t) {
    return N(e) ? e[t] : null;
  }
  function Vo(e, t) {
    if (!N(e)) return null;
    let s = Ns.get(t);
    if ((s || ((s = Wo(t)), s && Ns.set(t, s)), !s)) return null;
    const n = s.length;
    let o = e,
      a = 0;
    for (; a < n; ) {
      const i = o[s[a]];
      if (i === void 0) return null;
      (o = i), a++;
    }
    return o;
  }
  const Bo = (e) => e,
    Yo = (e) => "",
    jo = "text",
    zo = (e) => (e.length === 0 ? "" : e.join("")),
    Ho = No;
  function Rs(e, t) {
    return (
      (e = Math.abs(e)),
      t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
    );
  }
  function qo(e) {
    const t = Y(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (Y(e.named.count) || Y(e.named.n))
      ? Y(e.named.count)
        ? e.named.count
        : Y(e.named.n)
        ? e.named.n
        : t
      : t;
  }
  function Go(e, t) {
    t.count || (t.count = e), t.n || (t.n = e);
  }
  function Ko(e = {}) {
    const t = e.locale,
      s = qo(e),
      n =
        N(e.pluralRules) && $(t) && q(e.pluralRules[t]) ? e.pluralRules[t] : Rs,
      o = N(e.pluralRules) && $(t) && q(e.pluralRules[t]) ? Rs : void 0,
      a = (v) => v[n(s, v.length, o)],
      i = e.list || [],
      r = (v) => i[v],
      c = e.named || {};
    Y(e.pluralIndex) && Go(s, c);
    const l = (v) => c[v];
    function f(v) {
      const A = q(e.messages)
        ? e.messages(v)
        : N(e.messages)
        ? e.messages[v]
        : !1;
      return A || (e.parent ? e.parent.message(v) : Yo);
    }
    const g = (v) => (e.modifiers ? e.modifiers[v] : Bo),
      u =
        k(e.processor) && q(e.processor.normalize) ? e.processor.normalize : zo,
      h =
        k(e.processor) && q(e.processor.interpolate)
          ? e.processor.interpolate
          : Ho,
      b = k(e.processor) && $(e.processor.type) ? e.processor.type : jo,
      w = {
        list: r,
        named: l,
        plural: a,
        linked: (v, ...A) => {
          const [R, S] = A;
          let p = "text",
            L = "";
          A.length === 1
            ? N(R)
              ? ((L = R.modifier || L), (p = R.type || p))
              : $(R) && (L = R || L)
            : A.length === 2 && ($(R) && (L = R || L), $(S) && (p = S || p));
          let V = f(v)(w);
          return p === "vnode" && U(V) && L && (V = V[0]), L ? g(L)(V, p) : V;
        },
        message: f,
        type: b,
        interpolate: h,
        normalize: u,
      };
    return w;
  }
  let Ze = null;
  function Zo(e) {
    Ze = e;
  }
  function Jo(e, t, s) {
    Ze &&
      Ze.emit(Cs.I18nInit, {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: s,
      });
  }
  const Xo = Qo(Cs.FunctionTranslate);
  function Qo(e) {
    return (t) => Ze && Ze.emit(e, t);
  }
  function ea(e, t, s) {
    return [
      ...new Set([s, ...(U(t) ? t : N(t) ? Object.keys(t) : $(t) ? [t] : [s])]),
    ];
  }
  function Ls(e, t, s) {
    const n = $(s) ? s : Ut,
      o = e;
    o.__localeChainCache || (o.__localeChainCache = new Map());
    let a = o.__localeChainCache.get(n);
    if (!a) {
      a = [];
      let i = [s];
      for (; U(i); ) i = Ms(a, i, t);
      const r = U(t) || !k(t) ? t : t.default ? t.default : null;
      (i = $(r) ? [r] : r),
        U(i) && Ms(a, i, !1),
        o.__localeChainCache.set(n, a);
    }
    return a;
  }
  function Ms(e, t, s) {
    let n = !0;
    for (let o = 0; o < t.length && P(n); o++) {
      const a = t[o];
      $(a) && (n = ta(e, t[o], s));
    }
    return n;
  }
  function ta(e, t, s) {
    let n;
    const o = t.split("-");
    do {
      const a = o.join("-");
      (n = sa(e, a, s)), o.splice(-1, 1);
    } while (o.length && n === !0);
    return n;
  }
  function sa(e, t, s) {
    let n = !1;
    if (!e.includes(t) && ((n = !0), t)) {
      n = t[t.length - 1] !== "!";
      const o = t.replace(/!/g, "");
      e.push(o), (U(s) || k(s)) && s[o] && (n = s[o]);
    }
    return n;
  }
  const na = "9.2.2",
    ht = -1,
    Ut = "en-US",
    Fs = "",
    Ps = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
  function oa() {
    return {
      upper: (e, t) =>
        t === "text" && $(e)
          ? e.toUpperCase()
          : t === "vnode" && N(e) && "__v_isVNode" in e
          ? e.children.toUpperCase()
          : e,
      lower: (e, t) =>
        t === "text" && $(e)
          ? e.toLowerCase()
          : t === "vnode" && N(e) && "__v_isVNode" in e
          ? e.children.toLowerCase()
          : e,
      capitalize: (e, t) =>
        t === "text" && $(e)
          ? Ps(e)
          : t === "vnode" && N(e) && "__v_isVNode" in e
          ? Ps(e.children)
          : e,
    };
  }
  let aa, Ws;
  function ia(e) {
    Ws = e;
  }
  let Us;
  function ra(e) {
    Us = e;
  }
  let Vs = null;
  const Bs = (e) => {
      Vs = e;
    },
    ca = () => Vs;
  let Ys = null;
  const js = (e) => {
      Ys = e;
    },
    la = () => Ys;
  let zs = 0;
  function ma(e = {}) {
    const t = $(e.version) ? e.version : na,
      s = $(e.locale) ? e.locale : Ut,
      n =
        U(e.fallbackLocale) ||
        k(e.fallbackLocale) ||
        $(e.fallbackLocale) ||
        e.fallbackLocale === !1
          ? e.fallbackLocale
          : s,
      o = k(e.messages) ? e.messages : { [s]: {} },
      a = k(e.datetimeFormats) ? e.datetimeFormats : { [s]: {} },
      i = k(e.numberFormats) ? e.numberFormats : { [s]: {} },
      r = G({}, e.modifiers || {}, oa()),
      c = e.pluralRules || {},
      l = q(e.missing) ? e.missing : null,
      f = P(e.missingWarn) || ft(e.missingWarn) ? e.missingWarn : !0,
      g = P(e.fallbackWarn) || ft(e.fallbackWarn) ? e.fallbackWarn : !0,
      u = !!e.fallbackFormat,
      h = !!e.unresolving,
      b = q(e.postTranslation) ? e.postTranslation : null,
      _ = k(e.processor) ? e.processor : null,
      w = P(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
      v = !!e.escapeParameter,
      A = q(e.messageCompiler) ? e.messageCompiler : aa,
      R = q(e.messageResolver) ? e.messageResolver : Ws || Uo,
      S = q(e.localeFallbacker) ? e.localeFallbacker : Us || ea,
      p = N(e.fallbackContext) ? e.fallbackContext : void 0,
      L = q(e.onWarn) ? e.onWarn : xo,
      V = e,
      y = N(V.__datetimeFormatters) ? V.__datetimeFormatters : new Map(),
      T = N(V.__numberFormatters) ? V.__numberFormatters : new Map(),
      I = N(V.__meta) ? V.__meta : {};
    zs++;
    const D = {
      version: t,
      cid: zs,
      locale: s,
      fallbackLocale: n,
      messages: o,
      modifiers: r,
      pluralRules: c,
      missing: l,
      missingWarn: f,
      fallbackWarn: g,
      fallbackFormat: u,
      unresolving: h,
      postTranslation: b,
      processor: _,
      warnHtmlMessage: w,
      escapeParameter: v,
      messageCompiler: A,
      messageResolver: R,
      localeFallbacker: S,
      fallbackContext: p,
      onWarn: L,
      __meta: I,
    };
    return (
      (D.datetimeFormats = a),
      (D.numberFormats = i),
      (D.__datetimeFormatters = y),
      (D.__numberFormatters = T),
      __INTLIFY_PROD_DEVTOOLS__ && Jo(D, t, I),
      D
    );
  }
  function Vt(e, t, s, n, o) {
    const { missing: a, onWarn: i } = e;
    if (a !== null) {
      const r = a(e, s, t, o);
      return $(r) ? r : t;
    } else return t;
  }
  function Je(e, t, s) {
    const n = e;
    (n.__localeChainCache = new Map()), e.localeFallbacker(e, s, t);
  }
  let Hs = ks.__EXTEND_POINT__;
  const Bt = () => ++Hs,
    Pe = {
      INVALID_ARGUMENT: Hs,
      INVALID_DATE_ARGUMENT: Bt(),
      INVALID_ISO_DATE_ARGUMENT: Bt(),
      __EXTEND_POINT__: Bt(),
    };
  function We(e) {
    return xs(e, null, void 0);
  }
  const qs = () => "",
    de = (e) => q(e);
  function Gs(e, ...t) {
    const {
        fallbackFormat: s,
        postTranslation: n,
        unresolving: o,
        messageCompiler: a,
        fallbackLocale: i,
        messages: r,
      } = e,
      [c, l] = Yt(...t),
      f = P(l.missingWarn) ? l.missingWarn : e.missingWarn,
      g = P(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn,
      u = P(l.escapeParameter) ? l.escapeParameter : e.escapeParameter,
      h = !!l.resolvedMessage,
      b =
        $(l.default) || P(l.default)
          ? P(l.default)
            ? a
              ? c
              : () => c
            : l.default
          : s
          ? a
            ? c
            : () => c
          : "",
      _ = s || b !== "",
      w = $(l.locale) ? l.locale : e.locale;
    u && ua(l);
    let [v, A, R] = h ? [c, w, r[w] || {}] : Ks(e, c, w, i, g, f),
      S = v,
      p = c;
    if (
      (!h && !($(S) || de(S)) && _ && ((S = b), (p = S)),
      !h && (!($(S) || de(S)) || !$(A)))
    )
      return o ? ht : c;
    let L = !1;
    const V = () => {
        L = !0;
      },
      y = de(S) ? S : Zs(e, c, A, S, p, V);
    if (L) return S;
    const T = fa(e, A, R, l),
      I = Ko(T),
      D = ga(e, y, I),
      F = n ? n(D, c) : D;
    if (__INTLIFY_PROD_DEVTOOLS__) {
      const j = {
        timestamp: Date.now(),
        key: $(c) ? c : de(S) ? S.key : "",
        locale: A || (de(S) ? S.locale : ""),
        format: $(S) ? S : de(S) ? S.source : "",
        message: F,
      };
      (j.meta = G({}, e.__meta, ca() || {})), Xo(j);
    }
    return F;
  }
  function ua(e) {
    U(e.list)
      ? (e.list = e.list.map((t) => ($(t) ? Es(t) : t)))
      : N(e.named) &&
        Object.keys(e.named).forEach((t) => {
          $(e.named[t]) && (e.named[t] = Es(e.named[t]));
        });
  }
  function Ks(e, t, s, n, o, a) {
    const {
        messages: i,
        onWarn: r,
        messageResolver: c,
        localeFallbacker: l,
      } = e,
      f = l(e, n, s);
    let g = {},
      u,
      h = null;
    const b = "translate";
    for (
      let _ = 0;
      _ < f.length &&
      ((u = f[_]),
      (g = i[u] || {}),
      (h = c(g, t)) === null && (h = g[t]),
      !($(h) || q(h)));
      _++
    ) {
      const w = Vt(e, t, u, a, b);
      w !== t && (h = w);
    }
    return [h, u, g];
  }
  function Zs(e, t, s, n, o, a) {
    const { messageCompiler: i, warnHtmlMessage: r } = e;
    if (de(n)) {
      const l = n;
      return (l.locale = l.locale || s), (l.key = l.key || t), l;
    }
    if (i == null) {
      const l = () => n;
      return (l.locale = s), (l.key = t), l;
    }
    const c = i(n, da(e, s, o, n, r, a));
    return (c.locale = s), (c.key = t), (c.source = n), c;
  }
  function ga(e, t, s) {
    return t(s);
  }
  function Yt(...e) {
    const [t, s, n] = e,
      o = {};
    if (!$(t) && !Y(t) && !de(t)) throw We(Pe.INVALID_ARGUMENT);
    const a = Y(t) ? String(t) : (de(t), t);
    return (
      Y(s)
        ? (o.plural = s)
        : $(s)
        ? (o.default = s)
        : k(s) && !pt(s)
        ? (o.named = s)
        : U(s) && (o.list = s),
      Y(n) ? (o.plural = n) : $(n) ? (o.default = n) : k(n) && G(o, n),
      [a, o]
    );
  }
  function da(e, t, s, n, o, a) {
    return {
      warnHtmlMessage: o,
      onError: (i) => {
        throw (a && a(i), i);
      },
      onCacheKey: (i) => Eo(t, s, i),
    };
  }
  function fa(e, t, s, n) {
    const {
        modifiers: o,
        pluralRules: a,
        messageResolver: i,
        fallbackLocale: r,
        fallbackWarn: c,
        missingWarn: l,
        fallbackContext: f,
      } = e,
      u = {
        locale: t,
        modifiers: o,
        pluralRules: a,
        messages: (h) => {
          let b = i(s, h);
          if (b == null && f) {
            const [, , _] = Ks(f, h, t, r, c, l);
            b = i(_, h);
          }
          if ($(b)) {
            let _ = !1;
            const v = Zs(e, h, t, b, h, () => {
              _ = !0;
            });
            return _ ? qs : v;
          } else return de(b) ? b : qs;
        },
      };
    return (
      e.processor && (u.processor = e.processor),
      n.list && (u.list = n.list),
      n.named && (u.named = n.named),
      Y(n.plural) && (u.pluralIndex = n.plural),
      u
    );
  }
  function Js(e, ...t) {
    const {
        datetimeFormats: s,
        unresolving: n,
        fallbackLocale: o,
        onWarn: a,
        localeFallbacker: i,
      } = e,
      { __datetimeFormatters: r } = e,
      [c, l, f, g] = jt(...t),
      u = P(f.missingWarn) ? f.missingWarn : e.missingWarn;
    P(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
    const h = !!f.part,
      b = $(f.locale) ? f.locale : e.locale,
      _ = i(e, o, b);
    if (!$(c) || c === "") return new Intl.DateTimeFormat(b, g).format(l);
    let w = {},
      v,
      A = null;
    const R = "datetime format";
    for (
      let L = 0;
      L < _.length && ((v = _[L]), (w = s[v] || {}), (A = w[c]), !k(A));
      L++
    )
      Vt(e, c, v, u, R);
    if (!k(A) || !$(v)) return n ? ht : c;
    let S = `${v}__${c}`;
    pt(g) || (S = `${S}__${JSON.stringify(g)}`);
    let p = r.get(S);
    return (
      p || ((p = new Intl.DateTimeFormat(v, G({}, A, g))), r.set(S, p)),
      h ? p.formatToParts(l) : p.format(l)
    );
  }
  const Xs = [
    "localeMatcher",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName",
    "formatMatcher",
    "hour12",
    "timeZone",
    "dateStyle",
    "timeStyle",
    "calendar",
    "dayPeriod",
    "numberingSystem",
    "hourCycle",
    "fractionalSecondDigits",
  ];
  function jt(...e) {
    const [t, s, n, o] = e,
      a = {};
    let i = {},
      r;
    if ($(t)) {
      const c = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
      if (!c) throw We(Pe.INVALID_ISO_DATE_ARGUMENT);
      const l = c[3]
        ? c[3].trim().startsWith("T")
          ? `${c[1].trim()}${c[3].trim()}`
          : `${c[1].trim()}T${c[3].trim()}`
        : c[1].trim();
      r = new Date(l);
      try {
        r.toISOString();
      } catch {
        throw We(Pe.INVALID_ISO_DATE_ARGUMENT);
      }
    } else if (ko(t)) {
      if (isNaN(t.getTime())) throw We(Pe.INVALID_DATE_ARGUMENT);
      r = t;
    } else if (Y(t)) r = t;
    else throw We(Pe.INVALID_ARGUMENT);
    return (
      $(s)
        ? (a.key = s)
        : k(s) &&
          Object.keys(s).forEach((c) => {
            Xs.includes(c) ? (i[c] = s[c]) : (a[c] = s[c]);
          }),
      $(n) ? (a.locale = n) : k(n) && (i = n),
      k(o) && (i = o),
      [a.key || "", r, a, i]
    );
  }
  function Qs(e, t, s) {
    const n = e;
    for (const o in s) {
      const a = `${t}__${o}`;
      n.__datetimeFormatters.has(a) && n.__datetimeFormatters.delete(a);
    }
  }
  function en(e, ...t) {
    const {
        numberFormats: s,
        unresolving: n,
        fallbackLocale: o,
        onWarn: a,
        localeFallbacker: i,
      } = e,
      { __numberFormatters: r } = e,
      [c, l, f, g] = zt(...t),
      u = P(f.missingWarn) ? f.missingWarn : e.missingWarn;
    P(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
    const h = !!f.part,
      b = $(f.locale) ? f.locale : e.locale,
      _ = i(e, o, b);
    if (!$(c) || c === "") return new Intl.NumberFormat(b, g).format(l);
    let w = {},
      v,
      A = null;
    const R = "number format";
    for (
      let L = 0;
      L < _.length && ((v = _[L]), (w = s[v] || {}), (A = w[c]), !k(A));
      L++
    )
      Vt(e, c, v, u, R);
    if (!k(A) || !$(v)) return n ? ht : c;
    let S = `${v}__${c}`;
    pt(g) || (S = `${S}__${JSON.stringify(g)}`);
    let p = r.get(S);
    return (
      p || ((p = new Intl.NumberFormat(v, G({}, A, g))), r.set(S, p)),
      h ? p.formatToParts(l) : p.format(l)
    );
  }
  const tn = [
    "localeMatcher",
    "style",
    "currency",
    "currencyDisplay",
    "currencySign",
    "useGrouping",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "compactDisplay",
    "notation",
    "signDisplay",
    "unit",
    "unitDisplay",
    "roundingMode",
    "roundingPriority",
    "roundingIncrement",
    "trailingZeroDisplay",
  ];
  function zt(...e) {
    const [t, s, n, o] = e,
      a = {};
    let i = {};
    if (!Y(t)) throw We(Pe.INVALID_ARGUMENT);
    const r = t;
    return (
      $(s)
        ? (a.key = s)
        : k(s) &&
          Object.keys(s).forEach((c) => {
            tn.includes(c) ? (i[c] = s[c]) : (a[c] = s[c]);
          }),
      $(n) ? (a.locale = n) : k(n) && (i = n),
      k(o) && (i = o),
      [a.key || "", r, a, i]
    );
  }
  function sn(e, t, s) {
    const n = e;
    for (const o in s) {
      const a = `${t}__${o}`;
      n.__numberFormatters.has(a) && n.__numberFormatters.delete(a);
    }
  }
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" &&
    (Ft().__INTLIFY_PROD_DEVTOOLS__ = !1);
  function pa(e, t) {
    const s = Object.create(null),
      n = e.split(",");
    for (let o = 0; o < n.length; o++) s[n[o]] = !0;
    return t ? (o) => !!s[o.toLowerCase()] : (o) => !!s[o];
  }
  function Ht(e) {
    if (B(e)) {
      const t = {};
      for (let s = 0; s < e.length; s++) {
        const n = e[s],
          o = we(n) ? ya(n) : Ht(n);
        if (o) for (const a in o) t[a] = o[a];
      }
      return t;
    } else {
      if (we(e)) return e;
      if (re(e)) return e;
    }
  }
  const ha = /;(?![^(]*\))/g,
    $a = /:([^]+)/,
    ba = /\/\*.*?\*\//gs;
  function ya(e) {
    const t = {};
    return (
      e
        .replace(ba, "")
        .split(ha)
        .forEach((s) => {
          if (s) {
            const n = s.split($a);
            n.length > 1 && (t[n[0].trim()] = n[1].trim());
          }
        }),
      t
    );
  }
  function qt(e) {
    let t = "";
    if (we(e)) t = e;
    else if (B(e))
      for (let s = 0; s < e.length; s++) {
        const n = qt(e[s]);
        n && (t += n + " ");
      }
    else if (re(e)) for (const s in e) e[s] && (t += s + " ");
    return t.trim();
  }
  const Ta = {},
    Gt = () => {},
    Aa = () => !1,
    wa = /^on[^a-z]/,
    _a = (e) => wa.test(e),
    nn = Object.assign,
    va = (e, t) => {
      const s = e.indexOf(t);
      s > -1 && e.splice(s, 1);
    },
    Sa = Object.prototype.hasOwnProperty,
    $t = (e, t) => Sa.call(e, t),
    B = Array.isArray,
    Xe = (e) => bt(e) === "[object Map]",
    Da = (e) => bt(e) === "[object Set]",
    ie = (e) => typeof e == "function",
    we = (e) => typeof e == "string",
    Kt = (e) => typeof e == "symbol",
    re = (e) => e !== null && typeof e == "object",
    Ia = (e) => re(e) && ie(e.then) && ie(e.catch),
    Ea = Object.prototype.toString,
    bt = (e) => Ea.call(e),
    Oa = (e) => bt(e).slice(8, -1),
    ka = (e) => bt(e) === "[object Object]",
    Zt = (e) =>
      we(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Qe = (e, t) => !Object.is(e, t);
  let ce;
  class xa {
    constructor(t = !1) {
      (this.detached = t),
        (this._active = !0),
        (this.effects = []),
        (this.cleanups = []),
        (this.parent = ce),
        !t &&
          ce &&
          (this.index = (ce.scopes || (ce.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    run(t) {
      if (this._active) {
        const s = ce;
        try {
          return (ce = this), t();
        } finally {
          ce = s;
        }
      }
    }
    on() {
      ce = this;
    }
    off() {
      ce = this.parent;
    }
    stop(t) {
      if (this._active) {
        let s, n;
        for (s = 0, n = this.effects.length; s < n; s++) this.effects[s].stop();
        for (s = 0, n = this.cleanups.length; s < n; s++) this.cleanups[s]();
        if (this.scopes)
          for (s = 0, n = this.scopes.length; s < n; s++)
            this.scopes[s].stop(!0);
        if (!this.detached && this.parent && !t) {
          const o = this.parent.scopes.pop();
          o &&
            o !== this &&
            ((this.parent.scopes[this.index] = o), (o.index = this.index));
        }
        (this.parent = void 0), (this._active = !1);
      }
    }
  }
  function Ca(e) {
    return new xa(e);
  }
  function Na(e, t = ce) {
    t && t.active && t.effects.push(e);
  }
  function Ra() {
    return ce;
  }
  const Jt = (e) => {
      const t = new Set(e);
      return (t.w = 0), (t.n = 0), t;
    },
    on = (e) => (e.w & _e) > 0,
    an = (e) => (e.n & _e) > 0,
    La = ({ deps: e }) => {
      if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= _e;
    },
    Ma = (e) => {
      const { deps: t } = e;
      if (t.length) {
        let s = 0;
        for (let n = 0; n < t.length; n++) {
          const o = t[n];
          on(o) && !an(o) ? o.delete(e) : (t[s++] = o),
            (o.w &= ~_e),
            (o.n &= ~_e);
        }
        t.length = s;
      }
    },
    Xt = new WeakMap();
  let et = 0,
    _e = 1;
  const Qt = 30;
  let le;
  const ke = Symbol(""),
    es = Symbol("");
  class rn {
    constructor(t, s = null, n) {
      (this.fn = t),
        (this.scheduler = s),
        (this.active = !0),
        (this.deps = []),
        (this.parent = void 0),
        Na(this, n);
    }
    run() {
      if (!this.active) return this.fn();
      let t = le,
        s = ve;
      for (; t; ) {
        if (t === this) return;
        t = t.parent;
      }
      try {
        return (
          (this.parent = le),
          (le = this),
          (ve = !0),
          (_e = 1 << ++et),
          et <= Qt ? La(this) : cn(this),
          this.fn()
        );
      } finally {
        et <= Qt && Ma(this),
          (_e = 1 << --et),
          (le = this.parent),
          (ve = s),
          (this.parent = void 0),
          this.deferStop && this.stop();
      }
    }
    stop() {
      le === this
        ? (this.deferStop = !0)
        : this.active &&
          (cn(this), this.onStop && this.onStop(), (this.active = !1));
    }
  }
  function cn(e) {
    const { deps: t } = e;
    if (t.length) {
      for (let s = 0; s < t.length; s++) t[s].delete(e);
      t.length = 0;
    }
  }
  let ve = !0;
  const ln = [];
  function mn() {
    ln.push(ve), (ve = !1);
  }
  function un() {
    const e = ln.pop();
    ve = e === void 0 ? !0 : e;
  }
  function te(e, t, s) {
    if (ve && le) {
      let n = Xt.get(e);
      n || Xt.set(e, (n = new Map()));
      let o = n.get(s);
      o || n.set(s, (o = Jt())), gn(o);
    }
  }
  function gn(e, t) {
    let s = !1;
    et <= Qt ? an(e) || ((e.n |= _e), (s = !on(e))) : (s = !e.has(le)),
      s && (e.add(le), le.deps.push(e));
  }
  function Se(e, t, s, n, o, a) {
    const i = Xt.get(e);
    if (!i) return;
    let r = [];
    if (t === "clear") r = [...i.values()];
    else if (s === "length" && B(e)) {
      const c = Number(n);
      i.forEach((l, f) => {
        (f === "length" || f >= c) && r.push(l);
      });
    } else
      switch ((s !== void 0 && r.push(i.get(s)), t)) {
        case "add":
          B(e)
            ? Zt(s) && r.push(i.get("length"))
            : (r.push(i.get(ke)), Xe(e) && r.push(i.get(es)));
          break;
        case "delete":
          B(e) || (r.push(i.get(ke)), Xe(e) && r.push(i.get(es)));
          break;
        case "set":
          Xe(e) && r.push(i.get(ke));
          break;
      }
    if (r.length === 1) r[0] && ts(r[0]);
    else {
      const c = [];
      for (const l of r) l && c.push(...l);
      ts(Jt(c));
    }
  }
  function ts(e, t) {
    const s = B(e) ? e : [...e];
    for (const n of s) n.computed && dn(n);
    for (const n of s) n.computed || dn(n);
  }
  function dn(e, t) {
    (e !== le || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
  }
  const Fa = pa("__proto__,__v_isRef,__isVue"),
    fn = new Set(
      Object.getOwnPropertyNames(Symbol)
        .filter((e) => e !== "arguments" && e !== "caller")
        .map((e) => Symbol[e])
        .filter(Kt)
    ),
    Pa = hn(),
    Wa = hn(!0),
    pn = Ua();
  function Ua() {
    const e = {};
    return (
      ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
        e[t] = function (...s) {
          const n = x(this);
          for (let a = 0, i = this.length; a < i; a++) te(n, "get", a + "");
          const o = n[t](...s);
          return o === -1 || o === !1 ? n[t](...s.map(x)) : o;
        };
      }),
      ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
        e[t] = function (...s) {
          mn();
          const n = x(this)[t].apply(this, s);
          return un(), n;
        };
      }),
      e
    );
  }
  function Va(e) {
    const t = x(this);
    return te(t, "has", e), t.hasOwnProperty(e);
  }
  function hn(e = !1, t = !1) {
    return function (n, o, a) {
      if (o === "__v_isReactive") return !e;
      if (o === "__v_isReadonly") return e;
      if (o === "__v_isShallow") return t;
      if (o === "__v_raw" && a === (e ? (t ? ni : _n) : t ? si : wn).get(n))
        return n;
      const i = B(n);
      if (!e) {
        if (i && $t(pn, o)) return Reflect.get(pn, o, a);
        if (o === "hasOwnProperty") return Va;
      }
      const r = Reflect.get(n, o, a);
      return (Kt(o) ? fn.has(o) : Fa(o)) || (e || te(n, "get", o), t)
        ? r
        : me(r)
        ? i && Zt(o)
          ? r
          : r.value
        : re(r)
        ? e
          ? Sn(r)
          : vn(r)
        : r;
    };
  }
  const Ba = Ya();
  function Ya(e = !1) {
    return function (s, n, o, a) {
      let i = s[n];
      if (Ue(i) && me(i) && !me(o)) return !1;
      if (
        !e &&
        (!St(o) && !Ue(o) && ((i = x(i)), (o = x(o))), !B(s) && me(i) && !me(o))
      )
        return (i.value = o), !0;
      const r = B(s) && Zt(n) ? Number(n) < s.length : $t(s, n),
        c = Reflect.set(s, n, o, a);
      return (
        s === x(a) && (r ? Qe(o, i) && Se(s, "set", n, o) : Se(s, "add", n, o)),
        c
      );
    };
  }
  function ja(e, t) {
    const s = $t(e, t);
    e[t];
    const n = Reflect.deleteProperty(e, t);
    return n && s && Se(e, "delete", t, void 0), n;
  }
  function za(e, t) {
    const s = Reflect.has(e, t);
    return (!Kt(t) || !fn.has(t)) && te(e, "has", t), s;
  }
  function Ha(e) {
    return te(e, "iterate", B(e) ? "length" : ke), Reflect.ownKeys(e);
  }
  const qa = { get: Pa, set: Ba, deleteProperty: ja, has: za, ownKeys: Ha },
    Ga = {
      get: Wa,
      set(e, t) {
        return !0;
      },
      deleteProperty(e, t) {
        return !0;
      },
    },
    ss = (e) => e,
    yt = (e) => Reflect.getPrototypeOf(e);
  function Tt(e, t, s = !1, n = !1) {
    e = e.__v_raw;
    const o = x(e),
      a = x(t);
    s || (t !== a && te(o, "get", t), te(o, "get", a));
    const { has: i } = yt(o),
      r = n ? ss : s ? ns : st;
    if (i.call(o, t)) return r(e.get(t));
    if (i.call(o, a)) return r(e.get(a));
    e !== o && e.get(t);
  }
  function At(e, t = !1) {
    const s = this.__v_raw,
      n = x(s),
      o = x(e);
    return (
      t || (e !== o && te(n, "has", e), te(n, "has", o)),
      e === o ? s.has(e) : s.has(e) || s.has(o)
    );
  }
  function wt(e, t = !1) {
    return (
      (e = e.__v_raw), !t && te(x(e), "iterate", ke), Reflect.get(e, "size", e)
    );
  }
  function $n(e) {
    e = x(e);
    const t = x(this);
    return yt(t).has.call(t, e) || (t.add(e), Se(t, "add", e, e)), this;
  }
  function bn(e, t) {
    t = x(t);
    const s = x(this),
      { has: n, get: o } = yt(s);
    let a = n.call(s, e);
    a || ((e = x(e)), (a = n.call(s, e)));
    const i = o.call(s, e);
    return (
      s.set(e, t), a ? Qe(t, i) && Se(s, "set", e, t) : Se(s, "add", e, t), this
    );
  }
  function yn(e) {
    const t = x(this),
      { has: s, get: n } = yt(t);
    let o = s.call(t, e);
    o || ((e = x(e)), (o = s.call(t, e))), n && n.call(t, e);
    const a = t.delete(e);
    return o && Se(t, "delete", e, void 0), a;
  }
  function Tn() {
    const e = x(this),
      t = e.size !== 0,
      s = e.clear();
    return t && Se(e, "clear", void 0, void 0), s;
  }
  function _t(e, t) {
    return function (n, o) {
      const a = this,
        i = a.__v_raw,
        r = x(i),
        c = t ? ss : e ? ns : st;
      return (
        !e && te(r, "iterate", ke),
        i.forEach((l, f) => n.call(o, c(l), c(f), a))
      );
    };
  }
  function vt(e, t, s) {
    return function (...n) {
      const o = this.__v_raw,
        a = x(o),
        i = Xe(a),
        r = e === "entries" || (e === Symbol.iterator && i),
        c = e === "keys" && i,
        l = o[e](...n),
        f = s ? ss : t ? ns : st;
      return (
        !t && te(a, "iterate", c ? es : ke),
        {
          next() {
            const { value: g, done: u } = l.next();
            return u
              ? { value: g, done: u }
              : { value: r ? [f(g[0]), f(g[1])] : f(g), done: u };
          },
          [Symbol.iterator]() {
            return this;
          },
        }
      );
    };
  }
  function De(e) {
    return function (...t) {
      return e === "delete" ? !1 : this;
    };
  }
  function Ka() {
    const e = {
        get(a) {
          return Tt(this, a);
        },
        get size() {
          return wt(this);
        },
        has: At,
        add: $n,
        set: bn,
        delete: yn,
        clear: Tn,
        forEach: _t(!1, !1),
      },
      t = {
        get(a) {
          return Tt(this, a, !1, !0);
        },
        get size() {
          return wt(this);
        },
        has: At,
        add: $n,
        set: bn,
        delete: yn,
        clear: Tn,
        forEach: _t(!1, !0),
      },
      s = {
        get(a) {
          return Tt(this, a, !0);
        },
        get size() {
          return wt(this, !0);
        },
        has(a) {
          return At.call(this, a, !0);
        },
        add: De("add"),
        set: De("set"),
        delete: De("delete"),
        clear: De("clear"),
        forEach: _t(!0, !1),
      },
      n = {
        get(a) {
          return Tt(this, a, !0, !0);
        },
        get size() {
          return wt(this, !0);
        },
        has(a) {
          return At.call(this, a, !0);
        },
        add: De("add"),
        set: De("set"),
        delete: De("delete"),
        clear: De("clear"),
        forEach: _t(!0, !0),
      };
    return (
      ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
        (e[a] = vt(a, !1, !1)),
          (s[a] = vt(a, !0, !1)),
          (t[a] = vt(a, !1, !0)),
          (n[a] = vt(a, !0, !0));
      }),
      [e, s, t, n]
    );
  }
  const [Za, Ja, Xa, Qa] = Ka();
  function An(e, t) {
    const s = t ? (e ? Qa : Xa) : e ? Ja : Za;
    return (n, o, a) =>
      o === "__v_isReactive"
        ? !e
        : o === "__v_isReadonly"
        ? e
        : o === "__v_raw"
        ? n
        : Reflect.get($t(s, o) && o in n ? s : n, o, a);
  }
  const ei = { get: An(!1, !1) },
    ti = { get: An(!0, !1) },
    wn = new WeakMap(),
    si = new WeakMap(),
    _n = new WeakMap(),
    ni = new WeakMap();
  function oi(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function ai(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : oi(Oa(e));
  }
  function vn(e) {
    return Ue(e) ? e : Dn(e, !1, qa, ei, wn);
  }
  function Sn(e) {
    return Dn(e, !0, Ga, ti, _n);
  }
  function Dn(e, t, s, n, o) {
    if (!re(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
    const a = o.get(e);
    if (a) return a;
    const i = ai(e);
    if (i === 0) return e;
    const r = new Proxy(e, i === 2 ? n : s);
    return o.set(e, r), r;
  }
  function tt(e) {
    return Ue(e) ? tt(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function Ue(e) {
    return !!(e && e.__v_isReadonly);
  }
  function St(e) {
    return !!(e && e.__v_isShallow);
  }
  function In(e) {
    return tt(e) || Ue(e);
  }
  function x(e) {
    const t = e && e.__v_raw;
    return t ? x(t) : e;
  }
  const st = (e) => (re(e) ? vn(e) : e),
    ns = (e) => (re(e) ? Sn(e) : e);
  function En(e) {
    ve && le && ((e = x(e)), gn(e.dep || (e.dep = Jt())));
  }
  function On(e, t) {
    e = x(e);
    const s = e.dep;
    s && ts(s);
  }
  function me(e) {
    return !!(e && e.__v_isRef === !0);
  }
  function nt(e) {
    return ii(e, !1);
  }
  function ii(e, t) {
    return me(e) ? e : new ri(e, t);
  }
  class ri {
    constructor(t, s) {
      (this.__v_isShallow = s),
        (this.dep = void 0),
        (this.__v_isRef = !0),
        (this._rawValue = s ? t : x(t)),
        (this._value = s ? t : st(t));
    }
    get value() {
      return En(this), this._value;
    }
    set value(t) {
      const s = this.__v_isShallow || St(t) || Ue(t);
      (t = s ? t : x(t)),
        Qe(t, this._rawValue) &&
          ((this._rawValue = t), (this._value = s ? t : st(t)), On(this));
    }
  }
  var kn;
  class ci {
    constructor(t, s, n, o) {
      (this._setter = s),
        (this.dep = void 0),
        (this.__v_isRef = !0),
        (this[kn] = !1),
        (this._dirty = !0),
        (this.effect = new rn(t, () => {
          this._dirty || ((this._dirty = !0), On(this));
        })),
        (this.effect.computed = this),
        (this.effect.active = this._cacheable = !o),
        (this.__v_isReadonly = n);
    }
    get value() {
      const t = x(this);
      return (
        En(t),
        (t._dirty || !t._cacheable) &&
          ((t._dirty = !1), (t._value = t.effect.run())),
        t._value
      );
    }
    set value(t) {
      this._setter(t);
    }
  }
  kn = "__v_isReadonly";
  function li(e, t, s = !1) {
    let n, o;
    const a = ie(e);
    return (
      a ? ((n = e), (o = Gt)) : ((n = e.get), (o = e.set)),
      new ci(n, o, a || !o, s)
    );
  }
  function Ve(e, t, s, n) {
    let o;
    try {
      o = n ? e(...n) : e();
    } catch (a) {
      xn(a, t, s);
    }
    return o;
  }
  function Dt(e, t, s, n) {
    if (ie(e)) {
      const a = Ve(e, t, s, n);
      return (
        a &&
          Ia(a) &&
          a.catch((i) => {
            xn(i, t, s);
          }),
        a
      );
    }
    const o = [];
    for (let a = 0; a < e.length; a++) o.push(Dt(e[a], t, s, n));
    return o;
  }
  function xn(e, t, s, n = !0) {
    const o = t ? t.vnode : null;
    if (t) {
      let a = t.parent;
      const i = t.proxy,
        r = s;
      for (; a; ) {
        const l = a.ec;
        if (l) {
          for (let f = 0; f < l.length; f++) if (l[f](e, i, r) === !1) return;
        }
        a = a.parent;
      }
      const c = t.appContext.config.errorHandler;
      if (c) {
        Ve(c, null, 10, [e, i, r]);
        return;
      }
    }
    mi(e, s, o, n);
  }
  function mi(e, t, s, n = !0) {
    console.error(e);
  }
  let It = !1,
    os = !1;
  const ue = [];
  let Ie = 0;
  const Be = [];
  let he = null,
    xe = 0;
  const ui = Promise.resolve();
  function gi(e) {
    let t = Ie + 1,
      s = ue.length;
    for (; t < s; ) {
      const n = (t + s) >>> 1;
      ot(ue[n]) < e ? (t = n + 1) : (s = n);
    }
    return t;
  }
  function di(e) {
    (!ue.length || !ue.includes(e, It && e.allowRecurse ? Ie + 1 : Ie)) &&
      (e.id == null ? ue.push(e) : ue.splice(gi(e.id), 0, e), Cn());
  }
  function Cn() {
    !It && !os && ((os = !0), ui.then(Nn));
  }
  function fi(e) {
    B(e)
      ? Be.push(...e)
      : (!he || !he.includes(e, e.allowRecurse ? xe + 1 : xe)) && Be.push(e),
      Cn();
  }
  function pi(e) {
    if (Be.length) {
      const t = [...new Set(Be)];
      if (((Be.length = 0), he)) {
        he.push(...t);
        return;
      }
      for (
        he = t, he.sort((s, n) => ot(s) - ot(n)), xe = 0;
        xe < he.length;
        xe++
      )
        he[xe]();
      (he = null), (xe = 0);
    }
  }
  const ot = (e) => (e.id == null ? 1 / 0 : e.id),
    hi = (e, t) => {
      const s = ot(e) - ot(t);
      if (s === 0) {
        if (e.pre && !t.pre) return -1;
        if (t.pre && !e.pre) return 1;
      }
      return s;
    };
  function Nn(e) {
    (os = !1), (It = !0), ue.sort(hi);
    const t = Gt;
    try {
      for (Ie = 0; Ie < ue.length; Ie++) {
        const s = ue[Ie];
        s && s.active !== !1 && Ve(s, null, 14);
      }
    } finally {
      (Ie = 0),
        (ue.length = 0),
        pi(),
        (It = !1),
        (ue.length || Be.length) && Nn();
    }
  }
  let Ee = null,
    $i = null;
  const bi = (e) => e.__isSuspense;
  function yi(e, t) {
    t && t.pendingBranch
      ? B(e)
        ? t.effects.push(...e)
        : t.effects.push(e)
      : fi(e);
  }
  function Ti(e, t, s = !1) {
    const n = se || Ee;
    if (n) {
      const o =
        n.parent == null
          ? n.vnode.appContext && n.vnode.appContext.provides
          : n.parent.provides;
      if (o && e in o) return o[e];
      if (arguments.length > 1) return s && ie(t) ? t.call(n.proxy) : t;
    }
  }
  const Et = {};
  function as(e, t, s) {
    return Ai(e, t, s);
  }
  function Ai(
    e,
    t,
    { immediate: s, deep: n, flush: o, onTrack: a, onTrigger: i } = Ta
  ) {
    const r = Ra() === (se == null ? void 0 : se.scope) ? se : null;
    let c,
      l = !1,
      f = !1;
    if (
      (me(e)
        ? ((c = () => e.value), (l = St(e)))
        : tt(e)
        ? ((c = () => e), (n = !0))
        : B(e)
        ? ((f = !0),
          (l = e.some((A) => tt(A) || St(A))),
          (c = () =>
            e.map((A) => {
              if (me(A)) return A.value;
              if (tt(A)) return Ye(A);
              if (ie(A)) return Ve(A, r, 2);
            })))
        : ie(e)
        ? t
          ? (c = () => Ve(e, r, 2))
          : (c = () => {
              if (!(r && r.isUnmounted)) return g && g(), Dt(e, r, 3, [u]);
            })
        : (c = Gt),
      t && n)
    ) {
      const A = c;
      c = () => Ye(A());
    }
    let g,
      u = (A) => {
        g = w.onStop = () => {
          Ve(A, r, 4);
        };
      },
      h = f ? new Array(e.length).fill(Et) : Et;
    const b = () => {
      if (w.active)
        if (t) {
          const A = w.run();
          (n || l || (f ? A.some((R, S) => Qe(R, h[S])) : Qe(A, h))) &&
            (g && g(),
            Dt(t, r, 3, [A, h === Et ? void 0 : f && h[0] === Et ? [] : h, u]),
            (h = A));
        } else w.run();
    };
    b.allowRecurse = !!t;
    let _;
    o === "sync"
      ? (_ = b)
      : o === "post"
      ? (_ = () => Ln(b, r && r.suspense))
      : ((b.pre = !0), r && (b.id = r.uid), (_ = () => di(b)));
    const w = new rn(c, _);
    return (
      t
        ? s
          ? b()
          : (h = w.run())
        : o === "post"
        ? Ln(w.run.bind(w), r && r.suspense)
        : w.run(),
      () => {
        w.stop(), r && r.scope && va(r.scope.effects, w);
      }
    );
  }
  function Ye(e, t) {
    if (!re(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
    if ((t.add(e), me(e))) Ye(e.value, t);
    else if (B(e)) for (let s = 0; s < e.length; s++) Ye(e[s], t);
    else if (Da(e) || Xe(e))
      e.forEach((s) => {
        Ye(s, t);
      });
    else if (ka(e)) for (const s in e) Ye(e[s], t);
    return e;
  }
  function wi(e, t, s = se, n = !1) {
    if (s) {
      const o = s[e] || (s[e] = []),
        a =
          t.__weh ||
          (t.__weh = (...i) => {
            if (s.isUnmounted) return;
            mn(), Ri(s);
            const r = Dt(t, s, e, i);
            return Li(), un(), r;
          });
      return n ? o.unshift(a) : o.push(a), a;
    }
  }
  const Rn =
      (e) =>
      (t, s = se) =>
        wi(e, (...n) => t(...n), s),
    _i = Rn("m"),
    vi = Rn("um"),
    Si = Symbol();
  function Di() {
    return {
      app: null,
      config: {
        isNativeTag: Aa,
        performance: !1,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {},
      },
      mixins: [],
      components: {},
      directives: {},
      provides: Object.create(null),
      optionsCache: new WeakMap(),
      propsCache: new WeakMap(),
      emitsCache: new WeakMap(),
    };
  }
  const Ln = yi,
    Ii = (e) => e.__isTeleport,
    is = Symbol(void 0),
    Mn = Symbol(void 0),
    Ei = Symbol(void 0);
  let je = null;
  function rs(e) {
    return e ? e.__v_isVNode === !0 : !1;
  }
  const Fn = "__vInternal",
    Pn = ({ key: e }) => e ?? null,
    Ot = ({ ref: e, ref_key: t, ref_for: s }) =>
      e != null
        ? we(e) || me(e) || ie(e)
          ? { i: Ee, r: e, k: t, f: !!s }
          : e
        : null;
  function Oi(
    e,
    t = null,
    s = null,
    n = 0,
    o = null,
    a = e === is ? 0 : 1,
    i = !1,
    r = !1
  ) {
    const c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e,
      props: t,
      key: t && Pn(t),
      ref: t && Ot(t),
      scopeId: $i,
      slotScopeIds: null,
      children: s,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: a,
      patchFlag: n,
      dynamicProps: o,
      dynamicChildren: null,
      appContext: null,
      ctx: Ee,
    };
    return (
      r
        ? (ls(c, s), a & 128 && e.normalize(c))
        : s && (c.shapeFlag |= we(s) ? 8 : 16),
      !i &&
        je &&
        (c.patchFlag > 0 || a & 6) &&
        c.patchFlag !== 32 &&
        je.push(c),
      c
    );
  }
  const ze = ki;
  function ki(e, t = null, s = null, n = 0, o = null, a = !1) {
    if (((!e || e === Si) && (e = Ei), rs(e))) {
      const r = cs(e, t, !0);
      return (
        s && ls(r, s),
        !a && je && (r.shapeFlag & 6 ? (je[je.indexOf(e)] = r) : je.push(r)),
        (r.patchFlag |= -2),
        r
      );
    }
    if ((Fi(e) && (e = e.__vccOpts), t)) {
      t = xi(t);
      let { class: r, style: c } = t;
      r && !we(r) && (t.class = qt(r)),
        re(c) && (In(c) && !B(c) && (c = nn({}, c)), (t.style = Ht(c)));
    }
    const i = we(e) ? 1 : bi(e) ? 128 : Ii(e) ? 64 : re(e) ? 4 : ie(e) ? 2 : 0;
    return Oi(e, t, s, n, o, i, a, !0);
  }
  function xi(e) {
    return e ? (In(e) || Fn in e ? nn({}, e) : e) : null;
  }
  function cs(e, t, s = !1) {
    const { props: n, ref: o, patchFlag: a, children: i } = e,
      r = t ? Ni(n || {}, t) : n;
    return {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: r,
      key: r && Pn(r),
      ref:
        t && t.ref
          ? s && o
            ? B(o)
              ? o.concat(Ot(t))
              : [o, Ot(t)]
            : Ot(t)
          : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: i,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== is ? (a === -1 ? 16 : a | 16) : a,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: e.transition,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && cs(e.ssContent),
      ssFallback: e.ssFallback && cs(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  }
  function Ci(e = " ", t = 0) {
    return ze(Mn, null, e, t);
  }
  function ls(e, t) {
    let s = 0;
    const { shapeFlag: n } = e;
    if (t == null) t = null;
    else if (B(t)) s = 16;
    else if (typeof t == "object")
      if (n & 65) {
        const o = t.default;
        o && (o._c && (o._d = !1), ls(e, o()), o._c && (o._d = !0));
        return;
      } else {
        s = 32;
        const o = t._;
        !o && !(Fn in t)
          ? (t._ctx = Ee)
          : o === 3 &&
            Ee &&
            (Ee.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
      }
    else
      ie(t)
        ? ((t = { default: t, _ctx: Ee }), (s = 32))
        : ((t = String(t)), n & 64 ? ((s = 16), (t = [Ci(t)])) : (s = 8));
    (e.children = t), (e.shapeFlag |= s);
  }
  function Ni(...e) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s];
      for (const o in n)
        if (o === "class")
          t.class !== n.class && (t.class = qt([t.class, n.class]));
        else if (o === "style") t.style = Ht([t.style, n.style]);
        else if (_a(o)) {
          const a = t[o],
            i = n[o];
          i &&
            a !== i &&
            !(B(a) && a.includes(i)) &&
            (t[o] = a ? [].concat(a, i) : i);
        } else o !== "" && (t[o] = n[o]);
    }
    return t;
  }
  Di();
  let se = null;
  const ms = () => se || Ee,
    Ri = (e) => {
      (se = e), e.scope.on();
    },
    Li = () => {
      se && se.scope.off(), (se = null);
    };
  let Mi = !1;
  function Fi(e) {
    return ie(e) && "__vccOpts" in e;
  }
  const at = (e, t) => li(e, t, Mi);
  function Wn(e, t, s) {
    const n = arguments.length;
    return n === 2
      ? re(t) && !B(t)
        ? rs(t)
          ? ze(e, null, [t])
          : ze(e, t)
        : ze(e, null, t)
      : (n > 3
          ? (s = Array.prototype.slice.call(arguments, 2))
          : n === 3 && rs(s) && (s = [s]),
        ze(e, t, s));
  }
  /*!
   * vue-i18n v9.2.2
   * (c) 2022 kazuya kawaguchi
   * Released under the MIT License.
   */ const Pi = "9.2.2";
  function Wi() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" &&
      (Ft().__INTLIFY_PROD_DEVTOOLS__ = !1);
  }
  let Un = ks.__EXTEND_POINT__;
  const Z = () => ++Un,
    ee = {
      UNEXPECTED_RETURN_TYPE: Un,
      INVALID_ARGUMENT: Z(),
      MUST_BE_CALL_SETUP_TOP: Z(),
      NOT_INSLALLED: Z(),
      NOT_AVAILABLE_IN_LEGACY_MODE: Z(),
      REQUIRED_VALUE: Z(),
      INVALID_VALUE: Z(),
      CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Z(),
      NOT_INSLALLED_WITH_PROVIDE: Z(),
      UNEXPECTED_ERROR: Z(),
      NOT_COMPATIBLE_LEGACY_VUE_I18N: Z(),
      BRIDGE_SUPPORT_VUE_2_ONLY: Z(),
      MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Z(),
      NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Z(),
      __EXTEND_POINT__: Z(),
    };
  function ne(e, ...t) {
    return xs(e, null, void 0);
  }
  const us = Te("__transrateVNode"),
    gs = Te("__datetimeParts"),
    ds = Te("__numberParts"),
    Ui = Te("__setPluralRules");
  Te("__intlifyMeta");
  const Vi = Te("__injectWithOption");
  function fs(e) {
    if (!N(e)) return e;
    for (const t in e)
      if (Pt(e, t))
        if (!t.includes(".")) N(e[t]) && fs(e[t]);
        else {
          const s = t.split("."),
            n = s.length - 1;
          let o = e;
          for (let a = 0; a < n; a++)
            s[a] in o || (o[s[a]] = {}), (o = o[s[a]]);
          (o[s[n]] = e[t]), delete e[t], N(o[s[n]]) && fs(o[s[n]]);
        }
    return e;
  }
  function Vn(e, t) {
    const { messages: s, __i18n: n, messageResolver: o, flatJson: a } = t,
      i = k(s) ? s : U(n) ? {} : { [e]: {} };
    if (
      (U(n) &&
        n.forEach((r) => {
          if ("locale" in r && "resource" in r) {
            const { locale: c, resource: l } = r;
            c ? ((i[c] = i[c] || {}), it(l, i[c])) : it(l, i);
          } else $(r) && it(JSON.parse(r), i);
        }),
      o == null && a)
    )
      for (const r in i) Pt(i, r) && fs(i[r]);
    return i;
  }
  const kt = (e) => !N(e) || U(e);
  function it(e, t) {
    if (kt(e) || kt(t)) throw ne(ee.INVALID_VALUE);
    for (const s in e)
      Pt(e, s) && (kt(e[s]) || kt(t[s]) ? (t[s] = e[s]) : it(e[s], t[s]));
  }
  function Bn(e) {
    return e.type;
  }
  function Bi(e, t, s) {
    let n = N(t.messages) ? t.messages : {};
    "__i18nGlobal" in s &&
      (n = Vn(e.locale.value, { messages: n, __i18n: s.__i18nGlobal }));
    const o = Object.keys(n);
    o.length &&
      o.forEach((a) => {
        e.mergeLocaleMessage(a, n[a]);
      });
    {
      if (N(t.datetimeFormats)) {
        const a = Object.keys(t.datetimeFormats);
        a.length &&
          a.forEach((i) => {
            e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
          });
      }
      if (N(t.numberFormats)) {
        const a = Object.keys(t.numberFormats);
        a.length &&
          a.forEach((i) => {
            e.mergeNumberFormat(i, t.numberFormats[i]);
          });
      }
    }
  }
  function Yn(e) {
    return ze(Mn, null, e, 0);
  }
  const jn = "__INTLIFY_META__";
  let zn = 0;
  function Hn(e) {
    return (t, s, n, o) => e(s, n, ms() || void 0, o);
  }
  const Yi = () => {
    const e = ms();
    let t = null;
    return e && (t = Bn(e)[jn]) ? { [jn]: t } : null;
  };
  function qn(e = {}, t) {
    const { __root: s } = e,
      n = s === void 0;
    let o = P(e.inheritLocale) ? e.inheritLocale : !0;
    const a = nt(s && o ? s.locale.value : $(e.locale) ? e.locale : Ut),
      i = nt(
        s && o
          ? s.fallbackLocale.value
          : $(e.fallbackLocale) ||
            U(e.fallbackLocale) ||
            k(e.fallbackLocale) ||
            e.fallbackLocale === !1
          ? e.fallbackLocale
          : a.value
      ),
      r = nt(Vn(a.value, e)),
      c = nt(k(e.datetimeFormats) ? e.datetimeFormats : { [a.value]: {} }),
      l = nt(k(e.numberFormats) ? e.numberFormats : { [a.value]: {} });
    let f = s
        ? s.missingWarn
        : P(e.missingWarn) || ft(e.missingWarn)
        ? e.missingWarn
        : !0,
      g = s
        ? s.fallbackWarn
        : P(e.fallbackWarn) || ft(e.fallbackWarn)
        ? e.fallbackWarn
        : !0,
      u = s ? s.fallbackRoot : P(e.fallbackRoot) ? e.fallbackRoot : !0,
      h = !!e.fallbackFormat,
      b = q(e.missing) ? e.missing : null,
      _ = q(e.missing) ? Hn(e.missing) : null,
      w = q(e.postTranslation) ? e.postTranslation : null,
      v = s ? s.warnHtmlMessage : P(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
      A = !!e.escapeParameter;
    const R = s ? s.modifiers : k(e.modifiers) ? e.modifiers : {};
    let S = e.pluralRules || (s && s.pluralRules),
      p;
    (p = (() => {
      n && js(null);
      const m = {
        version: Pi,
        locale: a.value,
        fallbackLocale: i.value,
        messages: r.value,
        modifiers: R,
        pluralRules: S,
        missing: _ === null ? void 0 : _,
        missingWarn: f,
        fallbackWarn: g,
        fallbackFormat: h,
        unresolving: !0,
        postTranslation: w === null ? void 0 : w,
        warnHtmlMessage: v,
        escapeParameter: A,
        messageResolver: e.messageResolver,
        __meta: { framework: "vue" },
      };
      (m.datetimeFormats = c.value),
        (m.numberFormats = l.value),
        (m.__datetimeFormatters = k(p) ? p.__datetimeFormatters : void 0),
        (m.__numberFormatters = k(p) ? p.__numberFormatters : void 0);
      const d = ma(m);
      return n && js(d), d;
    })()),
      Je(p, a.value, i.value);
    function V() {
      return [a.value, i.value, r.value, c.value, l.value];
    }
    const y = at({
        get: () => a.value,
        set: (m) => {
          (a.value = m), (p.locale = a.value);
        },
      }),
      T = at({
        get: () => i.value,
        set: (m) => {
          (i.value = m), (p.fallbackLocale = i.value), Je(p, a.value, m);
        },
      }),
      I = at(() => r.value),
      D = at(() => c.value),
      F = at(() => l.value);
    function j() {
      return q(w) ? w : null;
    }
    function X(m) {
      (w = m), (p.postTranslation = m);
    }
    function O() {
      return b;
    }
    function Q(m) {
      m !== null && (_ = Hn(m)), (b = m), (p.missing = _);
    }
    const M = (m, d, fe, K, Ds, Lt) => {
      V();
      let Ke;
      if (__INTLIFY_PROD_DEVTOOLS__)
        try {
          Bs(Yi()), n || (p.fallbackContext = s ? la() : void 0), (Ke = m(p));
        } finally {
          Bs(null), n || (p.fallbackContext = void 0);
        }
      else Ke = m(p);
      if (Y(Ke) && Ke === ht) {
        const [Oc, My] = d();
        return s && u ? K(s) : Ds(Oc);
      } else {
        if (Lt(Ke)) return Ke;
        throw ne(ee.UNEXPECTED_RETURN_TYPE);
      }
    };
    function be(...m) {
      return M(
        (d) => Reflect.apply(Gs, null, [d, ...m]),
        () => Yt(...m),
        "translate",
        (d) => Reflect.apply(d.t, d, [...m]),
        (d) => d,
        (d) => $(d)
      );
    }
    function Fe(...m) {
      const [d, fe, K] = m;
      if (K && !N(K)) throw ne(ee.INVALID_ARGUMENT);
      return be(d, fe, G({ resolvedMessage: !0 }, K || {}));
    }
    function ae(...m) {
      return M(
        (d) => Reflect.apply(Js, null, [d, ...m]),
        () => jt(...m),
        "datetime format",
        (d) => Reflect.apply(d.d, d, [...m]),
        () => Fs,
        (d) => $(d)
      );
    }
    function gt(...m) {
      return M(
        (d) => Reflect.apply(en, null, [d, ...m]),
        () => zt(...m),
        "number format",
        (d) => Reflect.apply(d.n, d, [...m]),
        () => Fs,
        (d) => $(d)
      );
    }
    function gc(m) {
      return m.map((d) => ($(d) || Y(d) || P(d) ? Yn(String(d)) : d));
    }
    const dc = { normalize: gc, interpolate: (m) => m, type: "vnode" };
    function fc(...m) {
      return M(
        (d) => {
          let fe;
          const K = d;
          try {
            (K.processor = dc), (fe = Reflect.apply(Gs, null, [K, ...m]));
          } finally {
            K.processor = null;
          }
          return fe;
        },
        () => Yt(...m),
        "translate",
        (d) => d[us](...m),
        (d) => [Yn(d)],
        (d) => U(d)
      );
    }
    function pc(...m) {
      return M(
        (d) => Reflect.apply(en, null, [d, ...m]),
        () => zt(...m),
        "number format",
        (d) => d[ds](...m),
        () => [],
        (d) => $(d) || U(d)
      );
    }
    function hc(...m) {
      return M(
        (d) => Reflect.apply(Js, null, [d, ...m]),
        () => jt(...m),
        "datetime format",
        (d) => d[gs](...m),
        () => [],
        (d) => $(d) || U(d)
      );
    }
    function $c(m) {
      (S = m), (p.pluralRules = S);
    }
    function bc(m, d) {
      const fe = $(d) ? d : a.value,
        K = vo(fe);
      return p.messageResolver(K, m) !== null;
    }
    function yc(m) {
      let d = null;
      const fe = Ls(p, i.value, a.value);
      for (let K = 0; K < fe.length; K++) {
        const Ds = r.value[fe[K]] || {},
          Lt = p.messageResolver(Ds, m);
        if (Lt != null) {
          d = Lt;
          break;
        }
      }
      return d;
    }
    function Tc(m) {
      const d = yc(m);
      return d ?? (s ? s.tm(m) || {} : {});
    }
    function vo(m) {
      return r.value[m] || {};
    }
    function Ac(m, d) {
      (r.value[m] = d), (p.messages = r.value);
    }
    function wc(m, d) {
      (r.value[m] = r.value[m] || {}),
        it(d, r.value[m]),
        (p.messages = r.value);
    }
    function _c(m) {
      return c.value[m] || {};
    }
    function vc(m, d) {
      (c.value[m] = d), (p.datetimeFormats = c.value), Qs(p, m, d);
    }
    function Sc(m, d) {
      (c.value[m] = G(c.value[m] || {}, d)),
        (p.datetimeFormats = c.value),
        Qs(p, m, d);
    }
    function Dc(m) {
      return l.value[m] || {};
    }
    function Ic(m, d) {
      (l.value[m] = d), (p.numberFormats = l.value), sn(p, m, d);
    }
    function Ec(m, d) {
      (l.value[m] = G(l.value[m] || {}, d)),
        (p.numberFormats = l.value),
        sn(p, m, d);
    }
    zn++,
      s &&
        Mt &&
        (as(s.locale, (m) => {
          o && ((a.value = m), (p.locale = m), Je(p, a.value, i.value));
        }),
        as(s.fallbackLocale, (m) => {
          o && ((i.value = m), (p.fallbackLocale = m), Je(p, a.value, i.value));
        }));
    const z = {
      id: zn,
      locale: y,
      fallbackLocale: T,
      get inheritLocale() {
        return o;
      },
      set inheritLocale(m) {
        (o = m),
          m &&
            s &&
            ((a.value = s.locale.value),
            (i.value = s.fallbackLocale.value),
            Je(p, a.value, i.value));
      },
      get availableLocales() {
        return Object.keys(r.value).sort();
      },
      messages: I,
      get modifiers() {
        return R;
      },
      get pluralRules() {
        return S || {};
      },
      get isGlobal() {
        return n;
      },
      get missingWarn() {
        return f;
      },
      set missingWarn(m) {
        (f = m), (p.missingWarn = f);
      },
      get fallbackWarn() {
        return g;
      },
      set fallbackWarn(m) {
        (g = m), (p.fallbackWarn = g);
      },
      get fallbackRoot() {
        return u;
      },
      set fallbackRoot(m) {
        u = m;
      },
      get fallbackFormat() {
        return h;
      },
      set fallbackFormat(m) {
        (h = m), (p.fallbackFormat = h);
      },
      get warnHtmlMessage() {
        return v;
      },
      set warnHtmlMessage(m) {
        (v = m), (p.warnHtmlMessage = m);
      },
      get escapeParameter() {
        return A;
      },
      set escapeParameter(m) {
        (A = m), (p.escapeParameter = m);
      },
      t: be,
      getLocaleMessage: vo,
      setLocaleMessage: Ac,
      mergeLocaleMessage: wc,
      getPostTranslationHandler: j,
      setPostTranslationHandler: X,
      getMissingHandler: O,
      setMissingHandler: Q,
      [Ui]: $c,
    };
    return (
      (z.datetimeFormats = D),
      (z.numberFormats = F),
      (z.rt = Fe),
      (z.te = bc),
      (z.tm = Tc),
      (z.d = ae),
      (z.n = gt),
      (z.getDateTimeFormat = _c),
      (z.setDateTimeFormat = vc),
      (z.mergeDateTimeFormat = Sc),
      (z.getNumberFormat = Dc),
      (z.setNumberFormat = Ic),
      (z.mergeNumberFormat = Ec),
      (z[Vi] = e.__injectWithOption),
      (z[us] = fc),
      (z[gs] = hc),
      (z[ds] = pc),
      z
    );
  }
  const ps = {
    tag: { type: [String, Object] },
    locale: { type: String },
    scope: {
      type: String,
      validator: (e) => e === "parent" || e === "global",
      default: "parent",
    },
    i18n: { type: Object },
  };
  function ji({ slots: e }, t) {
    return t.length === 1 && t[0] === "default"
      ? (e.default ? e.default() : []).reduce(
          (n, o) => (n = [...n, ...(U(o.children) ? o.children : [o])]),
          []
        )
      : t.reduce((s, n) => {
          const o = e[n];
          return o && (s[n] = o()), s;
        }, {});
  }
  function Gn(e) {
    return is;
  }
  const Kn = {
    name: "i18n-t",
    props: G(
      {
        keypath: { type: String, required: !0 },
        plural: { type: [Number, String], validator: (e) => Y(e) || !isNaN(e) },
      },
      ps
    ),
    setup(e, t) {
      const { slots: s, attrs: n } = t,
        o = e.i18n || hs({ useScope: e.scope, __useComponent: !0 });
      return () => {
        const a = Object.keys(s).filter((g) => g !== "_"),
          i = {};
        e.locale && (i.locale = e.locale),
          e.plural !== void 0 &&
            (i.plural = $(e.plural) ? +e.plural : e.plural);
        const r = ji(t, a),
          c = o[us](e.keypath, r, i),
          l = G({}, n),
          f = $(e.tag) || N(e.tag) ? e.tag : Gn();
        return Wn(f, l, c);
      };
    },
  };
  function zi(e) {
    return U(e) && !$(e[0]);
  }
  function Zn(e, t, s, n) {
    const { slots: o, attrs: a } = t;
    return () => {
      const i = { part: !0 };
      let r = {};
      e.locale && (i.locale = e.locale),
        $(e.format)
          ? (i.key = e.format)
          : N(e.format) &&
            ($(e.format.key) && (i.key = e.format.key),
            (r = Object.keys(e.format).reduce(
              (u, h) => (s.includes(h) ? G({}, u, { [h]: e.format[h] }) : u),
              {}
            )));
      const c = n(e.value, i, r);
      let l = [i.key];
      U(c)
        ? (l = c.map((u, h) => {
            const b = o[u.type],
              _ = b ? b({ [u.type]: u.value, index: h, parts: c }) : [u.value];
            return zi(_) && (_[0].key = `${u.type}-${h}`), _;
          }))
        : $(c) && (l = [c]);
      const f = G({}, a),
        g = $(e.tag) || N(e.tag) ? e.tag : Gn();
      return Wn(g, f, l);
    };
  }
  const Jn = {
      name: "i18n-n",
      props: G(
        {
          value: { type: Number, required: !0 },
          format: { type: [String, Object] },
        },
        ps
      ),
      setup(e, t) {
        const s = e.i18n || hs({ useScope: "parent", __useComponent: !0 });
        return Zn(e, t, tn, (...n) => s[ds](...n));
      },
    },
    Xn = {
      name: "i18n-d",
      props: G(
        {
          value: { type: [Number, Date], required: !0 },
          format: { type: [String, Object] },
        },
        ps
      ),
      setup(e, t) {
        const s = e.i18n || hs({ useScope: "parent", __useComponent: !0 });
        return Zn(e, t, Xs, (...n) => s[gs](...n));
      },
    };
  function Hi(e, t) {
    const s = e;
    if (e.mode === "composition") return s.__getInstance(t) || e.global;
    {
      const n = s.__getInstance(t);
      return n != null ? n.__composer : e.global.__composer;
    }
  }
  function qi(e) {
    const t = (i) => {
      const { instance: r, modifiers: c, value: l } = i;
      if (!r || !r.$) throw ne(ee.UNEXPECTED_ERROR);
      const f = Hi(e, r.$),
        g = Qn(l);
      return [Reflect.apply(f.t, f, [...eo(g)]), f];
    };
    return {
      created: (i, r) => {
        const [c, l] = t(r);
        Mt &&
          e.global === l &&
          (i.__i18nWatcher = as(l.locale, () => {
            r.instance && r.instance.$forceUpdate();
          })),
          (i.__composer = l),
          (i.textContent = c);
      },
      unmounted: (i) => {
        Mt &&
          i.__i18nWatcher &&
          (i.__i18nWatcher(),
          (i.__i18nWatcher = void 0),
          delete i.__i18nWatcher),
          i.__composer && ((i.__composer = void 0), delete i.__composer);
      },
      beforeUpdate: (i, { value: r }) => {
        if (i.__composer) {
          const c = i.__composer,
            l = Qn(r);
          i.textContent = Reflect.apply(c.t, c, [...eo(l)]);
        }
      },
      getSSRProps: (i) => {
        const [r] = t(i);
        return { textContent: r };
      },
    };
  }
  function Qn(e) {
    if ($(e)) return { path: e };
    if (k(e)) {
      if (!("path" in e)) throw ne(ee.REQUIRED_VALUE, "path");
      return e;
    } else throw ne(ee.INVALID_VALUE);
  }
  function eo(e) {
    const { path: t, locale: s, args: n, choice: o, plural: a } = e,
      i = {},
      r = n || {};
    return (
      $(s) && (i.locale = s),
      Y(o) && (i.plural = o),
      Y(a) && (i.plural = a),
      [t, r, i]
    );
  }
  function Gi(e, t, ...s) {
    const n = k(s[0]) ? s[0] : {},
      o = !!n.useI18nComponentName;
    (P(n.globalInstall) ? n.globalInstall : !0) &&
      (e.component(o ? "i18n" : Kn.name, Kn),
      e.component(Jn.name, Jn),
      e.component(Xn.name, Xn)),
      e.directive("t", qi(t));
  }
  const Ki = Te("global-vue-i18n");
  function Zi(e = {}, t) {
    const s = P(e.globalInjection) ? e.globalInjection : !0,
      n = !0,
      o = new Map(),
      [a, i] = Ji(e),
      r = Te("");
    function c(g) {
      return o.get(g) || null;
    }
    function l(g, u) {
      o.set(g, u);
    }
    function f(g) {
      o.delete(g);
    }
    {
      const g = {
        get mode() {
          return "composition";
        },
        get allowComposition() {
          return n;
        },
        async install(u, ...h) {
          (u.__VUE_I18N_SYMBOL__ = r),
            u.provide(u.__VUE_I18N_SYMBOL__, g),
            s && ar(u, g.global),
            Gi(u, g, ...h);
          const b = u.unmount;
          u.unmount = () => {
            g.dispose(), b();
          };
        },
        get global() {
          return i;
        },
        dispose() {
          a.stop();
        },
        __instances: o,
        __getInstance: c,
        __setInstance: l,
        __deleteInstance: f,
      };
      return g;
    }
  }
  function hs(e = {}) {
    const t = ms();
    if (t == null) throw ne(ee.MUST_BE_CALL_SETUP_TOP);
    if (
      !t.isCE &&
      t.appContext.app != null &&
      !t.appContext.app.__VUE_I18N_SYMBOL__
    )
      throw ne(ee.NOT_INSLALLED);
    const s = Xi(t),
      n = er(s),
      o = Bn(t),
      a = Qi(e, o);
    if (a === "global") return Bi(n, e, o), n;
    if (a === "parent") {
      let c = tr(s, t, e.__useComponent);
      return c == null && (c = n), c;
    }
    const i = s;
    let r = i.__getInstance(t);
    if (r == null) {
      const c = G({}, e);
      "__i18n" in o && (c.__i18n = o.__i18n),
        n && (c.__root = n),
        (r = qn(c)),
        sr(i, t),
        i.__setInstance(t, r);
    }
    return r;
  }
  function Ji(e, t, s) {
    const n = Ca();
    {
      const o = n.run(() => qn(e));
      if (o == null) throw ne(ee.UNEXPECTED_ERROR);
      return [n, o];
    }
  }
  function Xi(e) {
    {
      const t = Ti(e.isCE ? Ki : e.appContext.app.__VUE_I18N_SYMBOL__);
      if (!t)
        throw ne(e.isCE ? ee.NOT_INSLALLED_WITH_PROVIDE : ee.UNEXPECTED_ERROR);
      return t;
    }
  }
  function Qi(e, t) {
    return pt(e)
      ? "__i18n" in t
        ? "local"
        : "global"
      : e.useScope
      ? e.useScope
      : "local";
  }
  function er(e) {
    return e.mode === "composition" ? e.global : e.global.__composer;
  }
  function tr(e, t, s = !1) {
    let n = null;
    const o = t.root;
    let a = t.parent;
    for (; a != null; ) {
      const i = e;
      if (
        (e.mode === "composition" && (n = i.__getInstance(a)),
        n != null || o === a)
      )
        break;
      a = a.parent;
    }
    return n;
  }
  function sr(e, t, s) {
    _i(() => {}, t),
      vi(() => {
        e.__deleteInstance(t);
      }, t);
  }
  const nr = ["locale", "fallbackLocale", "availableLocales"],
    or = ["t", "rt", "d", "n", "tm"];
  function ar(e, t) {
    const s = Object.create(null);
    nr.forEach((n) => {
      const o = Object.getOwnPropertyDescriptor(t, n);
      if (!o) throw ne(ee.UNEXPECTED_ERROR);
      const a = me(o.value)
        ? {
            get() {
              return o.value.value;
            },
            set(i) {
              o.value.value = i;
            },
          }
        : {
            get() {
              return o.get && o.get();
            },
          };
      Object.defineProperty(s, n, a);
    }),
      (e.config.globalProperties.$i18n = s),
      or.forEach((n) => {
        const o = Object.getOwnPropertyDescriptor(t, n);
        if (!o || !o.value) throw ne(ee.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${n}`, o);
      });
  }
  if ((ia(Vo), ra(Ls), Wi(), __INTLIFY_PROD_DEVTOOLS__)) {
    const e = Ft();
    (e.__INTLIFY__ = !0), Zo(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
  }
  const to = {
      en: {
        extName: {
          message:
            "Web Activity Time Tracker - Block Sites, Web Analytics & Pomodoro",
        },
        extDescription: {
          message:
            "Track time of your web activity, limit and block distracting websites. Monitor your web usage.",
        },
        settings: { message: "Settings" },
        today: { message: "Today" },
        allTime: { message: "Total time" },
        byDays: { message: "Daily" },
        noData: { message: "No data" },
        noDataForPeriod: { message: "No data for the selected period" },
        showAll: { message: "Show all the websites" },
        sortBy: { message: "Sorting by" },
        usageTime: { message: "Usage Time" },
        session: { message: "session" },
        someSession: { message: "sessions" },
        sessions: { message: "Sessions" },
        days: { message: "days" },
        aggregate: { message: "Aggregate data since" },
        websites: { message: "websites" },
        cannotOpenFile: {
          message: "You cannot open a local file due to security protocol",
        },
        document: { message: "Document" },
        limit: { message: "Limit" },
        d: { message: "d" },
        h: { message: "h" },
        m: { message: "m" },
        s: { message: "s" },
        firstActiveDay: { message: "The first active day" },
        numberOfActiveDays: { message: "Number of active days" },
        totalNumberOfDays: { message: "Total number of days" },
        todayTime: { message: "All the time today" },
        averageTime: { message: "Average time for active days" },
        averageDailyUsage: { message: "Average daily usage" },
        mostActiveDay: { message: "The most active day" },
        mostInactiveDay: { message: "The most inactive day" },
        todayInclude: {
          message: "Today is included in the statistics. Click to exclude.",
        },
        todayEcclude: {
          message: "Today is excluded from the statistics. Click to include.",
        },
        averageTimeByDays: { message: "Average time on selected days" },
        exportToCsv: { message: "Export to CSV" },
        week: { message: "This week" },
        month: { message: "This month" },
        lastMonth: { message: "Last month" },
        generalSettings: { message: "Settings" },
        whiteListSettings: { message: "WhiteList" },
        limitsSettings: { message: "Limits" },
        notificationsSettings: { message: "Notifications" },
        pomodoroMode: { message: "Pomodoro" },
        pomodoroSettings: { message: "Pomodoro Settings" },
        pomodoro: {
          message: "Pomodoro",
          description:
            "The Pomodoro method is a time management technique based on alternating periods of focused work and rest. According to the classics of the Pomodoro method, the work period lasts 25 minutes, the rest period is 5 minutes.",
        },
        pomodoroExplanationIcon: {
          message:
            "When Pomodoro mode is on and operation mode is active, you will see this icon",
          description: "During rest periods, you will see this extension icon",
        },
        pomodoroExplanationTime: {
          message:
            "During Pomodoro mode, the extension continues to take into account the time you spent on the sites, all limits and notifications work.",
        },
        pomodoroExplanationStop: {
          message:
            "After clicking 'Stop', work and rest time is reset to zero.",
        },
        pomodoroWork: { message: "Period of work" },
        pomodoroRest: { message: "Period of rest" },
        pomodoroFrequency: { message: "Number of repetitions" },
        start: { message: "Run" },
        stop: { message: "Stop" },
        pomodoroIsEnabled: { message: "Pomodoro Mode is enabled" },
        pomodoroSoundAfter: { message: "Sound after complete period" },
        clickToPreview: { message: "Click to listen" },
        sound: { message: "Sound" },
        aboutSettings: { message: "About" },
        viewTimeInBadge: {
          message: "Display time tracker in icon",
          description:
            "You are able to see current 'spent time' information in short format on the extension icon",
        },
        deferringDescription: {
          message:
            "You can postpone the blocking for 5 minutes only once during the day",
        },
        allowDeferringBlock: {
          message: "Allow deferring block for 5 minutes",
          description:
            "After the site is blocked, you can postpone the blocking for 5 minutes during the day only once",
        },
        intervalInactivity: {
          message: "Stop the tracker if there is no action for",
          description: "These are any actions with the mouse or keyboard",
        },
        exportToCsvSetting: {
          message: "Exporting your web activity data to CSV",
          description: "You can export your web activity for any date range",
        },
        sec: { message: "seconds" },
        min: { message: "minute" },
        "2min": { message: "minutes" },
        mins: { message: "minutes" },
        whiteList: {
          message:
            "Activity and spent time for these websites will not be tracked",
        },
        addWebsite: { message: "Add Website" },
        enterWebsite: { message: "Enter website name..." },
        enterNotification: { message: "Enter notification message..." },
        limits: {
          message: "Daily access restrictions for the websites",
          description:
            "Set the maximum time allowed to visit the website per day. After this time, the site will be blocked.",
        },
        limitsTip: {
          message:
            "If you set the blocking time to 0 hours 0 minutes, the website will be blocked immediately",
        },
        save: { message: "Save" },
        showDailyNotifacation: {
          message: "Daily Summary Notifications",
          description:
            "At the end of each day, you will receive a notification with a summary of your daily usage",
        },
        notificationTime: {
          message: "Notifications for websites",
          description:
            "Show notifications every time you spend a selected period of time on the website",
        },
        notificationMessage: {
          message: "Notification message",
          description:
            "You will see this message in notification for websites every time",
        },
        notificationTimeSetting: {
          message:
            "Notification time with summary information about your daily usage",
        },
        github: { message: "Leave your feedback or report an issue on " },
        question: {
          message: "You can also ask questions and leave your suggestions",
        },
        supportForm: { message: "support form" },
        doYouEnjoy: { message: "Do you enjoy Web Activity Time Tracker?" },
        review: { message: "Leave a review!" },
        promoClearYoutube: {
          message:
            "Would you like to block shorts, comments, recommended videos, subscriptions, and other YouTube distractions? We've created another extension that will help you watch YouTube without distractions.",
          description: "Install",
        },
        block: { message: "You've reached your limit for today on " },
        "5mins": { message: "+ 5 minutes" },
        todayUsageTime: { message: "Total usage time for today " },
        comparedToYesterday: { message: " compared to yesterday " },
        mostVisited: { message: "Most visited website " },
        dashboard: { message: "Dashboard" },
        timeChartDescription: {
          message: "This is a chart of time during the day by the hour",
        },
        enjoyAndReview: {
          message: "Enjoying the extension?",
          description: "Rate Web Activity Time Tracker",
        },
        removeAllData: {
          message: "Remove all data",
          description:
            "You can delete all data and statistics of visited websites for all time",
        },
        remove: { message: "Remove" },
        removeAllDataConfirm: {
          message: "Are you sure you want to delete all data?",
        },
        cancel: { message: "Cancel" },
        backupAndRestore: {
          message: "Backup and restore",
          description:
            "You can download a backup copy of all data for all visited sites",
        },
        backup: { message: "Backup" },
        restore: { message: "Restore" },
        welcome: {
          message: "Welcome to Web Activity Time Tracker",
          description:
            "Web Activity Time Tracker is <b>open-source</b>, <b>free</b> and <b>no ads</b> extension, which can help you track the time you spent on browsing websites and the count of visit.",
        },
        getStarted: { message: "Get started" },
        welcomeStart: {
          message:
            "You can quickly start using the extension in just 3 easy steps",
        },
        pinIcon: { message: "Pin the icon" },
        pinIconPart1: {
          message:
            "To use this extension more conveniently, you can pin the icon to toolbar. Click the icon",
        },
        pinIconPart2: { message: "and then click the pin icon" },
        browse: {
          message: "Browse any websites",
          description:
            "When you visit any website, you will see that the time is displayed on the icon, just like here",
        },
        seeData: {
          message: "View your data on the popup page and on the dashboard",
          description:
            "Click on the extension icon to open a popup page and you will be able to read the data visualized using a pie chart, for today, for all time or by day. In the popup window, you can open the dashboard and it will show you today's time by the clock. And you can set a daily time limit for any websites, notifications for websites, or export data to CSV.",
        },
        close: { message: "Close" },
        useExtension: { message: "Use the extension" },
        next: { message: "Next" },
        showChangelog: {
          message: "Show changelog",
          description: "Show the list of changes after updating extension",
        },
        byHours: { message: "Hourly" },
        intervals: { message: "Intervals" },
        intervalsChart: {
          message: "Only time intervals greater than",
          description: "are shown",
        },
        completelyBlocked: {
          message: "Completely Blocked",
          description: "Completely Block",
        },
        tryMyOtherApps: { message: "Try my other apps" },
        clearYoutube: {
          message: "Clean YouTube",
          description:
            "Chrome extension that can hide YouTube shorts, recomended videos, comments, feed, homepage recommendations and other distractions. Watch YouTube free of distractions.",
        },
        trackerjam: {
          message: "TrackerJam",
          description:
            "Automatic web tracker for teams. Detailed reports for each team member, detailing time spent on websites, track any URL's inside domain, productivity scores, top domains with categories and etc.",
        },
        darkTheme: { message: "Dark theme" },
      },
      ru: {
        extName: {
          message:
            "Web Activity Time Tracker - Блокировка сайтов и Веб аналитика",
        },
        extDescription: {
          message:
            "Отслеживайте время вашей веб-активности и блокируйте отвлекающие сайты. Следите за тем, сколько времени вы проводите на сайтах.",
        },
        settings: { message: "Настройки" },
        today: { message: "Сегодня" },
        allTime: { message: "За все время" },
        byDays: { message: "По дням" },
        noData: { message: "Нет данных" },
        noDataForPeriod: { message: "Нет данных за выбранный период" },
        showAll: { message: "Показать все сайты" },
        sortBy: { message: "Сортировать по" },
        usageTime: { message: "Время использования" },
        session: { message: "сессия" },
        someSession: { message: "сессий" },
        sessions: { message: "Сессии" },
        days: { message: "дней" },
        aggregate: { message: "Данные с " },
        websites: { message: "сайтов" },
        cannotOpenFile: {
          message:
            "Вы не можете открыть локальный файл из-за правил безопасности",
        },
        document: { message: "Документ" },
        limit: { message: "Лимит" },
        d: { message: "д" },
        h: { message: "ч" },
        m: { message: "мин" },
        s: { message: "сек" },
        firstActiveDay: { message: "Первый активный день" },
        numberOfActiveDays: { message: "Всего активных дней" },
        totalNumberOfDays: { message: "Всего дней" },
        todayTime: { message: "Общее время сегодня" },
        averageTime: { message: "Среднее время по активным дням" },
        averageDailyUsage: { message: "Среднее ежедневное использование" },
        mostActiveDay: { message: "Самый активный день" },
        mostInactiveDay: { message: "Самый неактивный день" },
        todayInclude: {
          message:
            "Сегодняшний день включен в статистику. Нажмите, если хотите исключить из статистики.",
        },
        todayEcclude: {
          message:
            "Сегодняшний день исключен из статистику. Нажмите, если хотите включить в статистику.",
        },
        averageTimeByDays: { message: "Среднее время по выбранным дням" },
        exportToCsv: { message: "Экспортировать в CSV" },
        week: { message: "Эта неделя" },
        month: { message: "Этот месяц" },
        lastMonth: { message: "Последний месяц" },
        generalSettings: { message: "Настройки" },
        whiteListSettings: { message: "Белый список" },
        limitsSettings: { message: "Лимиты" },
        notificationsSettings: { message: "Уведомления" },
        pomodoroMode: { message: "Pomodoro" },
        pomodoroSettings: { message: "Настройки Pomodoro" },
        pomodoro: {
          message: "Pomodoro",
          description:
            "Метод Pomodoro — это техника тайм-менеджмента, завязанная на чередовании периодов сфокусированной работы и отдыха. По классике метода помодоро период работы длится 25 минут, период отдыха 5 минут.",
        },
        pomodoroExplanationIcon: {
          message:
            "Когда режим Pomodoro включен и активен режим работы, то вы будете видеть эту иконку",
          description:
            "В периоды отдыха вы будете видеть эту иконку расширения",
        },
        pomodoroExplanationTime: {
          message:
            "Во время режима Pomodoro, расширение продолжает учитывать время, которые вы провели на сайтах,работают все лимиты и уведомления.",
        },
        pomodoroExplanationStop: {
          message:
            "После нажатия 'Остановить', время работы и отдыха обнуляется.",
        },
        pomodoroWork: { message: "Период работы" },
        pomodoroRest: { message: "Период отдыха" },
        pomodoroFrequency: { message: "Количество повторов" },
        start: { message: "Запустить" },
        stop: { message: "Остановить" },
        pomodoroIsEnabled: { message: "Режим Pomodoro включен" },
        pomodoroSoundAfter: {
          message: "Воспроизведение после завершения периода",
        },
        clickToPreview: { message: "Нажмите для прослушивания" },
        sound: { message: "Мелодия" },
        aboutSettings: { message: "О программе" },
        viewTimeInBadge: {
          message: "Показывать индикатор времени",
          description:
            "Вы можете увидеть текущее затраченное время в сокращенном формате на значке расширения",
        },
        deferringDescription: {
          message:
            "Вы можете отложить блокировку на 5 минут только один раз в течение дня",
        },
        allowDeferringBlock: {
          message: "Разрешить отсрочку блокировки на 5 минут",
          description:
            "После того, как сайт будет заблокирован, вы можете один раз в течение дня отложить блокировку на 5 минут",
        },
        intervalInactivity: {
          message: "Остановить трекер, если нет никаких действий в течение:",
          description: "Это любые действия с помощью мыши или клавиатуры",
        },
        exportToCsvSetting: {
          message: "Экспорт данных вашей веб-активности в формат CSV",
          description:
            "Вы можете экспортировать свою веб-активность для любого диапазона дат",
        },
        sec: { message: "секунд" },
        min: { message: "минута" },
        "2min": { message: "минуты" },
        mins: { message: "минут" },
        whiteList: {
          message: "Активность и время для этих сайтов отслеживаться не будут",
        },
        addWebsite: { message: "Добавить сайт" },
        enterWebsite: { message: "Введите сайт..." },
        enterNotification: { message: "Введите текст уведомления..." },
        limits: {
          message: "Ежедневные ограничения доступа к сайтам",
          description:
            "Установите максимальное время, разрешенное для посещения сайта в день. По истечении этого времени сайт будет заблокирован.",
        },
        limitsTip: {
          message:
            "Если вы установите время блокировки на 0 часов 0 минут, сайт будет немедленно заблокирован",
        },
        save: { message: "Сохранить" },
        showDailyNotifacation: {
          message: "Ежедневные итоговые уведомления",
          description:
            "В конце каждого дня вы будете получать уведомление с краткой информацией о вашем ежедневном использовании",
        },
        notificationTimeSetting: {
          message:
            "Время показа уведомления с краткой информацией о вашем ежедневном использовании",
        },
        notificationTime: {
          message: "Уведомления для сайтов",
          description:
            "Показывать уведомления каждый раз, когда вы проводите указанный период времени на сайте",
        },
        notificationMessage: {
          message: "Текст уведомления",
          description:
            "Вы будете видеть это сообщение в уведомлении для сайтов",
        },
        github: {
          message:
            "Если у вас есть вопрос или вы хотели бы сообщить о проблеме, вы можете сделать это на",
        },
        question: {
          message:
            "Также вы можете задать вопросы или оставить свои предложения ",
        },
        supportForm: { message: "поддержка" },
        doYouEnjoy: { message: "Вам нравится Web Activity Time Tracker?" },
        review: { message: "Оставьте отзыв!" },
        block: { message: "Вы достигли лимита использования сегодня на " },
        "5mins": { message: "+ 5 минут" },
        todayUsageTime: {
          message: "Общее время использования на сегодняшний день ",
        },
        comparedToYesterday: { message: " по сравнению со вчерашним днем " },
        mostVisited: { message: "Самый посещаемый сайт " },
        dashboard: { message: "Дашборд" },
        timeChartDescription: {
          message: "Это график времени в течение дня по часам",
        },
        enjoyAndReview: {
          message: "Вам нравится расширение?",
          description: "Оцените Web Activity Time Tracker",
        },
        promoClearYoutube: {
          message:
            "Хотели бы вы блокировать шортсы, комментарии, рекомендованные видео, подписки и другие отвлекающие элементы YouTube? Мы создали еще одно расширение, которое поможет вам смотреть YouTube без отвлекающих факторов.",
          description: "Установить",
        },
        removeAllData: {
          message: "Удалить все данные",
          description:
            "Вы можете удалить все данные и статистику посещенных сайтов за все время",
        },
        remove: { message: "Удалить" },
        removeAllDataConfirm: {
          message:
            "Вы уверены, что хотите удалить все данные, включая статистику посещенных сайтов?",
        },
        cancel: { message: "Отмена" },
        backupAndRestore: {
          message: "Резервное копирование и восстановление",
          description:
            "Вы можете скачать резервную копию всех данных по всем посещенным сайтам",
        },
        backup: { message: "Скачать резервную копию" },
        restore: { message: "Восстановить из резервной копиии" },
        welcome: {
          message: "Добро пожаловать в Web Activity Time Tracker",
          description:
            "Web Activity Time Tracker это <b>бесплатное</b>, <b>без рекламы</b> и <b>с открытым исходным кодом</b> расширение, которое поможем вам отслеживать время, потраченное вами на просмотр веб-сайтов, и покажет количество посещений.",
        },
        getStarted: { message: "Руководство" },
        welcomeStart: {
          message:
            "Вы можете быстро начать использовать расширение всего за 3 простых шага",
        },
        pinIcon: { message: "Закрепите значок" },
        pinIconPart1: {
          message:
            "Чтобы более удобно использовать это расширение, вы можете прикрепить значок к панели инструментов. Нажмите на значок",
        },
        pinIconPart2: { message: "и затем нажмите на значок закрепления" },
        browse: {
          message: "Просматривайте любые веб-сайты",
          description:
            "При посещении любого веб-сайта вы увидите, что время отображается на значке, точно так же, как здесь",
        },
        seeData: {
          message:
            "Просматривайте ваши данные на всплывающей странице и на панели мониторинга",
          description:
            "Нажмите на значок расширения, чтобы открыть всплывающую страницу, и вы сможете увидеть данные посещения сайтов за сегодня, за все время и по дням. Во всплывающем окне вы можете открыть панель мониторинга, и вы увидите сегодняшнее время по часам. Там же вы можете установить ежедневное ограничение по времени для любых веб-сайтов, уведомления для веб-сайтов или экспортировать данные в CSV.",
        },
        close: { message: "Закрыть" },
        useExtension: { message: "Начать пользоваться" },
        next: { message: "Продолжить" },
        showChangelog: {
          message: "Показывать список изменений",
          description:
            "Показывать список изменений после обновления расширения",
        },
        byHours: { message: "По часам" },
        intervals: {
          message: "Интервалы",
          description:
            "Отображаются только временные интервалы, превышающие 5 секунд",
        },
        intervalsChart: {
          message: "Отображаются только временные интервалы, превышающие",
          description: "",
        },
        completelyBlocked: {
          message: "Полностью заблокирован",
          description: "Полностью заблокировать",
        },
        tryMyOtherApps: { message: "Попробуйте другие мои приложения" },
        clearYoutube: {
          message: "Clean YouTube",
          description:
            "Расширение для Chrome, которое может скрывать шортс YouTube, рекомендуемые видео, комментарии, ленту новостей, рекомендации по домашней странице и другие отвлекающие факторы. Смотрите YouTube без отвлекающих факторов.",
        },
        trackerjam: {
          message: "TrackerJam",
          description:
            "Автоматический веб-трекер для команд. Подробные отчеты для каждого члена команды, детализация времени, проведенного на веб-сайтах, отслеживание любых URL внутри домена, показатели продуктивности, топ доменов с категориями и т.д.",
        },
        darkTheme: { message: "Темная тема" },
      },
      de: {
        extName: {
          message:
            "Web Activity Time Tracker - Blockieren Sie Websites und Webanalysen",
        },
        extDescription: {
          message:
            "Verfolgen und begrenzen Sie die Zeit Ihrer Webaktivitäten und blockieren Sie den Zugang zu den Websites. Überwachen Sie Ihre Internetnutzung.",
        },
        settings: { message: "Einstellungen" },
        today: { message: "Heute" },
        allTime: { message: "Gesamte Zeit" },
        byDays: { message: "Täglich" },
        noData: { message: "Keine Daten verfügbar" },
        noDataForPeriod: {
          message: "Keine Daten für den ausgewählten Zeitraum",
        },
        showAll: { message: "Alle Websites anzeigen" },
        sortBy: { message: "Sortieren nach" },
        usageTime: { message: "Verwendungszeit" },
        session: { message: "Sitzung" },
        someSession: { message: "Sitzungen" },
        sessions: { message: "Sitzungen" },
        days: { message: "Tage" },
        aggregate: { message: "Gesammelte Daten seit" },
        websites: { message: "Webseiten" },
        cannotOpenFile: {
          message:
            "Aufgrund des Sicherheitsprotokolls können Sie eine lokale Datei nicht öffnen",
        },
        document: { message: "Dokument" },
        limit: { message: "Limit" },
        d: { message: "d" },
        h: { message: "h" },
        m: { message: "m" },
        s: { message: "s" },
        firstActiveDay: { message: "Der erste aktive Tag" },
        numberOfActiveDays: { message: "Gesamtzahl der aktiven Tage" },
        totalNumberOfDays: { message: "Alle Tage" },
        todayTime: { message: "Gesamtzeit heute" },
        averageTime: { message: "Durchschnittliche Zeit an aktiven Tagen" },
        averageDailyUsage: { message: "Durchschnittliche tägliche Nutzung" },
        mostActiveDay: { message: "Der aktivste Tag" },
        mostInactiveDay: { message: "Der inaktivste Tag" },
        todayInclude: {
          message:
            "Der heutige Tag ist in der Statistik enthalten. Aus der Statistik ausschließen.",
        },
        todayEcclude: {
          message:
            "Der heutige Tag ist aus der Statistik ausgeschlossen. In die Statistik einbeziehen.",
        },
        averageTimeByDays: {
          message: "Durchschnittliche Zeit für ausgewählte Tage",
        },
        exportToCsv: { message: "Als CSV exportieren" },
        week: { message: "Diese Woche" },
        month: { message: "Diesen Monat" },
        lastMonth: { message: "Letzter Monat" },
        generalSettings: { message: "Einstellungen" },
        whiteListSettings: { message: "Weiße Liste" },
        limitsSettings: { message: "Beschränkungen" },
        notificationsSettings: { message: "Benachrichtigungen" },
        pomodoroMode: { message: "Pomodoro" },
        pomodoroSettings: { message: "Pomodoro Einstellungen" },
        pomodoro: {
          message: "Pomodoro",
          description:
            "Die Pomodoro-Methode ist eine Zeitmanagementtechnik, die auf dem Wechsel von konzentrierten Arbeits- und Ruhephasen basiert. Bei der klassischen Pomodoro-Methode dauert die Arbeitsphase 25 Minuten und die Ruhephase 5 Minuten.",
        },
        pomodoroExplanationIcon: {
          message:
            "Wenn der Pomodoro-Modus aktiviert ist und der Betriebsmodus aktiv ist, sehen Sie dieses Symbol",
          description:
            "Während der Ruhezeiten sehen Sie dieses Erweiterungssymbol",
        },
        pomodoroExplanationTime: {
          message:
            "Während des Pomodoro-Modus berücksichtigt die Erweiterung weiterhin die Zeit, die Sie auf den Seiten verbracht haben, alle Grenzen und Benachrichtigungen funktionieren.",
        },
        pomodoroExplanationStop: {
          message:
            "Nach dem Drücken von 'Stop' werden die Betriebs- und Ruhezeiten auf Null zurückgesetzt.",
        },
        pomodoroWork: { message: "Zeitraum der Arbeit" },
        pomodoroRest: { message: "Ruhezeit" },
        pomodoroFrequency: { message: "Anzahl der Wiederholungen" },
        start: { message: "Starten Sie" },
        stop: { message: "Stop" },
        pomodoroIsEnabled: { message: "Der Pomodoro-Modus ist aktiviert" },
        pomodoroSoundAfter: { message: "Ton nach vollständiger Periode" },
        clickToPreview: { message: "Zum Anhören klicken" },
        sound: { message: "Ton" },
        aboutSettings: { message: "Über die Erweiterung" },
        viewTimeInBadge: {
          message: "Zeitindikator anzeigen",
          description:
            'Die aktuellen Informationen zur "verbrauchten Zeit" im Kurzformat anzeigen',
        },
        deferringDescription: {
          message:
            "Die Sperre kann nur einmal pro Tag um 5 Minuten verschoben werden",
        },
        allowDeferringBlock: {
          message: "Verzögerung der Sperre um 5 Minuten zulassen",
          description:
            "Nachdem die Site gesperrt wurde, können Sie die Sperrung einmal täglich um 5 Minuten verschieben",
        },
        intervalInactivity: {
          message: "Zeiterfassung stoppen, bei Inaktivität für:",
          description: "Betrifft alle Aktionen mit der Maus oder der Tastatur",
        },
        exportToCsvSetting: {
          message: "Ihre Webaktivitätsdaten als CSV-Datei exportieren",
          description:
            "Ihre Webaktivitäten für einen beliebigen Zeitraum exportieren",
        },
        sec: { message: "Sekunden" },
        min: { message: "Minute" },
        "2min": { message: "Minuten" },
        mins: { message: "Minuten" },
        whiteList: {
          message:
            "Aktivität und Zeit für diese Websites werden nicht erfasst.",
        },
        addWebsite: { message: "Website hinzufügen" },
        enterWebsite: { message: "Namen der Website eingeben..." },
        enterNotification: {
          message: "Text für die Benachrichtigung eingeben...",
        },
        limits: {
          message: "Tägliche Zugriffsbeschränkungen für Websites",
          description:
            "Legen Sie die maximale Zeit fest, die pro Tag für den Besuch der Website zulässig ist. Nach dieser Zeit wird die Website gesperrt.",
        },
        limitsTip: {
          message:
            "Setzen Sie die Blockierungszeit auf 0 Stunden 0 Minuten, um die Website sofort zu blockieren.",
        },
        save: { message: "Speichern" },
        showDailyNotifacation: {
          message: "Tägliche Zusammenfassung als Benachrichtigung",
          description:
            "Am Ende jedes Tages erhalten Sie eine Benachrichtigung mit einer Zusammenfassung Ihrer täglichen Nutzung.",
        },
        notificationTime: {
          message: "Benachrichtigungen für Websites",
          description:
            "Jedes Mal eine Benachrichtigung anzeigen, wenn Sie den angegebenen Zeitraum auf einer Website verbringen.",
        },
        notificationMessage: {
          message: "Benachrichtigungstext",
          description:
            "Dieser Text wird in der Benachrichtigung für Websites angezeigt",
        },
        notificationTimeSetting: {
          message: "Tägliche Zusammenfassung um folgende Uhrzeit anzeigen:",
        },
        github: {
          message: "Feedback zur Erweiterung geben oder ein Problem melden: ",
        },
        question: {
          message: "Eine Frage stellen oder Verbesserungen vorschlagen: ",
        },
        supportForm: { message: "Unterstützungsformular" },
        doYouEnjoy: { message: "Gefällt Ihnen diese Erweiterung?" },
        review: { message: "Schreiben Sie eine Bewertung!" },
        block: {
          message: "Sie haben Ihr tägliches Nutzungslimit erreicht für ",
        },
        "5mins": { message: "+ 5 Minuten" },
        todayUsageTime: { message: "Bisherige Gesamtnutzungszeit " },
        comparedToYesterday: { message: " im Vergleich zu gestern " },
        mostVisited: { message: "Die meistbesuchte Website " },
        dashboard: { message: "Übersicht" },
        timeChartDescription: {
          message: "Dies ist eine stundenweise Zeitleiste für den Tag",
        },
        enjoyAndReview: {
          message: "Gefällt Ihnen diese Erweiterung?",
          description: "Web Activity Time Tracker bewerten",
        },
        removeAllData: {
          message: "Alle Daten entfernen",
          description:
            "Alle Daten und Statistiken der besuchten Websites für immer löschen.",
        },
        remove: { message: "Löschen" },
        removeAllDataConfirm: {
          message: "Sind Sie sicher, dass Sie alle Daten löschen möchten?",
        },
        cancel: { message: "Abbrechen" },
        backupAndRestore: {
          message: "Sicherung und Wiederherstellen",
          description:
            "Sie können eine Sicherungskopie aller Daten für alle besuchten Websites herunterladen",
        },
        backup: { message: "Sicherung" },
        restore: { message: "Wiederherstellen" },
        welcome: {
          message: "Willkommen bei Web Activity Time Tracker",
          description:
            "Web Activity Time Tracker ist eine <b>open-source</b>, <b>kostenlose</b> und <b>werbefreie</b> Erweiterung, mit der Sie die Zeit, die Sie für das Durchsuchen von Websites aufgewendet haben, und die Anzahl der Besuche nachverfolgen können.",
        },
        getStarted: { message: "Anleitung" },
        welcomeStart: {
          message:
            "Sie können die Erweiterung in nur 3 einfachen Schritten schnell verwenden",
        },
        pinIcon: { message: "Pin das Symbol" },
        pinIconPart1: {
          message:
            "Um diese Erweiterung bequemer zu verwenden, können Sie das Symbol an die Symbolleiste anheften. Klicken Sie auf das Symbol",
        },
        pinIconPart2: { message: "und klicken Sie dann auf das Pin-Symbol" },
        browse: {
          message: "Durchsuchen Sie alle Websites",
          description:
            "Wenn Sie eine Website besuchen, werden Sie sehen, dass die Uhrzeit auf dem Symbol angezeigt wird, genau wie hier",
        },
        seeData: {
          message:
            "Zeigen Sie Ihre Daten auf der Popup-Seite und im Dashboard an",
          description:
            "Klicken Sie auf das Erweiterungssymbol, um eine Popup-Seite zu öffnen, und Sie können die mit einem Kreisdiagramm gerenderten Daten für heute, für alle Zeiten oder für Tage lesen. In einem Popup-Fenster können Sie das Dashboard öffnen, und es zeigt Ihnen die heutige Zeit nach Stunden an. Und Sie können ein tägliches Zeitlimit für alle Websites festlegen, Benachrichtigungen für Websites festlegen oder Daten in CSV exportieren.",
        },
        close: { message: "Schließen" },
        useExtension: { message: "Verwenden Sie die Erweiterung" },
        next: { message: "Weiter" },
        showChangelog: {
          message: "Änderungsliste anzeigen",
          description:
            "Zeigen Sie die Liste der Änderungen nach dem Aktualisieren der Erweiterung an",
        },
        byHours: { message: "Stundenweise" },
        intervals: { message: "Intervalle" },
        intervalsChart: {
          message: "Nur Zeitintervalle größer als",
          description: "werden angezeigt",
        },
        promoClearYoutube: {
          message:
            "Möchten Sie Kurzfilme, Kommentare, empfohlene Videos, Abonnements und andere YouTube-Ablenkungen blockieren? Wir haben eine weitere Erweiterung erstellt, mit der Sie YouTube ohne Ablenkung ansehen können.",
          description: "Install",
        },
        completelyBlocked: {
          message: "Vollständig blockiert",
          description: "Vollständig blockieren",
        },
        tryMyOtherApps: { message: "Probieren Sie meine anderen Apps aus" },
        clearYoutube: {
          message: "Clean YouTube",
          description:
            "Chrome-Erweiterung, die YouTube-Shorts, empfohlene Videos, Kommentare, Feeds, Homepage-Empfehlungen und andere Ablenkungen ausblenden kann. Sieh dir YouTube ohne Ablenkungen an.",
        },
        trackerjam: {
          message: "TrackerJam",
          description:
            "Automatischer Web-Tracker für Teams. Detaillierte Berichte für jedes Teammitglied, mit detaillierten Angaben zur auf Websites verbrachten Zeit, Verfolgung aller URLs innerhalb der Domain, Produktivitätsbewertungen, Top-Domains mit Kategorien usw.",
        },
        darkTheme: { message: "Dunkles Thema" },
      },
      zh: {
        extName: {
          message: "Web Activity Time Tracker - 阻止网站、网络分析和番茄钟",
        },
        extDescription: {
          message:
            "追踪和限制您的网站活动时间，并阻止访问网站。监控您的网站使用情况",
        },
        settings: { message: "设置" },
        today: { message: "今天" },
        allTime: { message: "总时间" },
        byDays: { message: "每天" },
        noData: { message: "无数据" },
        noDataForPeriod: { message: "所选时间段内无数据" },
        showAll: { message: "显示所有网站" },
        sortBy: { message: "排序" },
        usageTime: { message: "使用时间" },
        session: { message: "会话" },
        someSession: { message: "会话" },
        sessions: { message: "会话" },
        days: { message: "天" },
        aggregate: { message: "汇总数据自" },
        websites: { message: "网站" },
        cannotOpenFile: { message: "由于安全协议，您无法打开本地文件" },
        document: { message: "文件" },
        limit: { message: "限制" },
        d: { message: "d" },
        h: { message: "h" },
        m: { message: "m" },
        s: { message: "s" },
        firstActiveDay: { message: "第一个活动日" },
        numberOfActiveDays: { message: "活动天数" },
        totalNumberOfDays: { message: "总天数" },
        todayTime: { message: "今天所有的时间" },
        averageTime: { message: "活动日的平均时间" },
        averageDailyUsage: { message: "平均每日使用量" },
        mostActiveDay: { message: "最活跃的一天" },
        mostInactiveDay: { message: "最不活跃的一天" },
        todayInclude: { message: "今天包含在统计数据中。点击以排除。" },
        todayEcclude: { message: "今天不包含在统计数据中。点击以包含。" },
        averageTimeByDays: { message: "所选日期的平均时间" },
        exportToCsv: { message: "导出 CSV" },
        week: { message: "本周" },
        month: { message: "本月" },
        lastMonth: { message: "上月" },
        generalSettings: { message: "设置" },
        whiteListSettings: { message: "白名单" },
        limitsSettings: { message: "限制" },
        notificationsSettings: { message: "通知" },
        pomodoroMode: { message: "Pomodoro" },
        pomodoroSettings: { message: "Pomodoro 设置" },
        pomodoro: {
          message: "Pomodoro",
          description:
            "Pomodoro 工作法是一种时间管理技术，以交替集中工作和休息为基础。根据经典的 Pomodoro 方法，工作时间为 25 分钟，休息时间为 5 分钟。",
        },
        pomodoroExplanationIcon: {
          message: "启用 Pomodoro 模式并激活操作模式后，您将看到以下图标",
          description: "在休息时间，您会看到这个扩展图标",
        },
        pomodoroExplanationTime: {
          message:
            "在 Pomodoro 模式下，扩展会继续考虑你在网站上花费的时间、所有限制和通知。",
        },
        pomodoroExplanationStop: {
          message: "按下 '停止' 键后，运行时间和休息时间将重置为零",
        },
        pomodoroWork: { message: "工作期限" },
        pomodoroRest: { message: "休息时间" },
        pomodoroFrequency: { message: "重复次数" },
        start: { message: "启动" },
        stop: { message: "停止" },
        pomodoroIsEnabled: { message: "番茄钟模式已启用" },
        pomodoroSoundAfter: { message: "完整时段后的声音" },
        clickToPreview: { message: "点击收听" },
        sound: { message: "声音" },
        aboutSettings: { message: "关于" },
        viewTimeInBadge: {
          message: "在图标中显示时间跟踪器",
          description:
            "您可以在扩展程序图标上以简短格式查看当前的“花费时间”信息。",
        },
        deferringDescription: { message: "您一天只能将拦截推迟 5 分钟一次。" },
        allowDeferringBlock: {
          message: "允许推迟拦截 5 分钟",
          description: "站点被拦截后，您一天中只能将拦截推迟 5 分钟一次。",
        },
        intervalInactivity: {
          message: "如果没有操作，则停止跟踪器：",
          description: "可以是使用鼠标或键盘进行的任何操作",
        },
        exportToCsvSetting: {
          message: "将您的网站活动数据导出为 CSV 格式",
          description: "您可以导出任何日期范围内的网站活动。",
        },
        sec: { message: "秒" },
        min: { message: "分钟" },
        "2min": { message: "分钟" },
        mins: { message: "分钟" },
        whiteList: { message: "这些网站的活动和花费时间将不会被跟踪。" },
        addWebsite: { message: "添加网站" },
        enterWebsite: { message: "输入网站名称..." },
        enterNotification: { message: "输入通知消息..." },
        limits: {
          message: "网站的每日访问限制",
          description:
            "设置每天允许访问网站的最长时间。超过此时间后，该网站将被拦截。",
        },
        limitsTip: {
          message:
            "如果您将拦截时间设置为 0 小时 0 分钟，那么该网站将立即被拦截。",
        },
        save: { message: "保存" },
        showDailyNotifacation: {
          message: "每日摘要通知",
          description:
            "每天结束时，您将收到一条通知，其中包含您的每日使用情况摘要。",
        },
        notificationTime: {
          message: "网站通知",
          description: "每次在网站上花费特定时间时显示通知。",
        },
        notificationMessage: {
          message: "通知消息",
          description: "每次在网站通知中，您都会看到这条消息。",
        },
        notificationTimeSetting: {
          message: "包含有关您日常使用情况的摘要信息的通知时间：",
        },
        github: { message: "在以下位置留下您的反馈或报告问题：" },
        question: { message: "您还可以提问并留下您的建议。" },
        supportForm: { message: "支持表单" },
        doYouEnjoy: { message: "您喜欢 Web Activity Time Tracker 吗？" },
        review: { message: "留下评论吧！" },
        block: { message: "您今天已达到限制在 " },
        "5mins": { message: "再加 5 分钟" },
        todayUsageTime: { message: "今天的总使用时间" },
        comparedToYesterday: { message: " 与昨天相比 " },
        mostVisited: { message: "访问最多的网站 " },
        dashboard: { message: "仪表板" },
        timeChartDescription: { message: "这是按小时显示一天时间的图表。" },
        enjoyAndReview: {
          message: "喜欢这个扩展程序吗？",
          description: "给 Web Activity Time Tracker 评分",
        },
        removeAllData: {
          message: "删除所有数据",
          description: "您可以删除所有访问过网站的所有数据和统计信息。",
        },
        remove: { message: "删除" },
        removeAllDataConfirm: { message: "您确定要删除所有数据吗？" },
        cancel: { message: "取消" },
        backupAndRestore: {
          message: "备份和恢复",
          description: "您可以下载所有访问过网站的所有数据的备份副本。",
        },
        backup: { message: "备份" },
        restore: { message: "恢复" },
        welcome: {
          message: "欢迎使用 Web Activity Time Tracker",
          description:
            "Web Activity Time Tracker  是一款<b>开源</b>、<b>免费</b>且<b>无广告</b>的扩展程序，它可以帮助您跟踪在浏览网站上花费的时间和访问次数。",
        },
        getStarted: { message: "开始使用" },
        welcomeStart: {
          message: "您可以通过三个简单的步骤快速开始使用扩展程序：",
        },
        pinIcon: { message: "固定图标" },
        pinIconPart1: {
          message:
            "为了更方便地使用此扩展程序，您可以将图标固定到工具栏上。点击图标：",
        },
        pinIconPart2: { message: "然后点击固定图标。" },
        browse: {
          message: "浏览任何网站",
          description:
            "当您访问任何网站时，您会看到时间显示在图标上，就像这里一样：",
        },
        seeData: {
          message: "在弹出页面和仪表板上查看您的数据",
          description:
            "点击扩展图标以打开弹出页面，您将能够使用饼图读取数据可视化信息，包括今天、所有时间或按天分类。在弹出窗口中，您可以打开仪表板，它将按时钟显示您今天的时间。您还可以为任何网站设置每日时间限制、网站通知或导出数据到 CSV。",
        },
        close: { message: "关闭" },
        useExtension: { message: "使用扩展程序" },
        next: { message: "接下来" },
        showChangelog: {
          message: "显示更新日志",
          description: "显示更新扩展程序后的更改列表",
        },
        byHours: { message: "每小时" },
        intervals: { message: "时间间隔" },
        intervalsChart: { message: "只有时间间隔大于", description: "展示" },
        promoClearYoutube: {
          message:
            "您想屏蔽短片、评论、推荐视频、订阅和其他 YouTube 干扰内容吗？ 我们创建了另一个扩展程序，可帮助您不受干扰地观看 YouTube",
          description: "安装",
        },
        completelyBlocked: { message: "完全封锁", description: "完全封锁" },
        tryMyOtherApps: { message: "试试我的其他应用程序" },
        clearYoutube: {
          message: "Clean YouTube",
          description:
            "Chrome扩展程序，可以隐藏YouTube短片，推荐视频，评论，feed，主页推荐和其他分心。 观看YouTube免费分心。",
        },
        trackerjam: {
          message: "TrackerJam",
          description:
            "团队自动网络跟踪器。为每个团队成员提供详细报告，包括在网站上花费的时间、域内任何 URL 的跟踪、工作效率评分、顶级域分类等。",
        },
        darkTheme: { message: "黑暗主题" },
      },
      es: {
        extName: {
          message:
            "Web Activity Time Tracker - Bloquear sitios, análisis web y Pomodoro",
        },
        extDescription: {
          message:
            "Controla el tiempo de tu actividad web, limita y bloquea los sitios web que te distraen. Monitoriza tu uso de la web.",
        },
        settings: { message: "Ajustes" },
        today: { message: "Hoy" },
        allTime: { message: "Tiempo total" },
        byDays: { message: "Diario" },
        noData: { message: "Sin datos" },
        noDataForPeriod: {
          message: "No hay datos para el periodo seleccionado",
        },
        showAll: { message: "Mostrar todos los sitios web" },
        sortBy: { message: "Clasificación por" },
        usageTime: { message: "Tiempo de uso" },
        session: { message: "sesión" },
        someSession: { message: "sesiones" },
        sessions: { message: "Sesiones" },
        days: { message: "días" },
        aggregate: { message: "Datos agregados desde" },
        websites: { message: "sitios web" },
        cannotOpenFile: {
          message:
            "No se puede abrir un archivo local debido al protocolo de seguridad",
        },
        document: { message: "Documento" },
        limit: { message: "Límite" },
        d: { message: "d" },
        h: { message: "h" },
        m: { message: "m" },
        s: { message: "s" },
        firstActiveDay: { message: "El primer día activo" },
        numberOfActiveDays: { message: "Número de días activos" },
        totalNumberOfDays: { message: "Número total de días" },
        todayTime: { message: "Todo el tiempo hoy" },
        averageTime: { message: "Tiempo medio de los días activos" },
        averageDailyUsage: { message: "Uso medio diario" },
        mostActiveDay: { message: "El día más activo" },
        mostInactiveDay: { message: "El día más inactivo" },
        todayInclude: {
          message:
            "Hoy está incluido en las estadísticas. Haga clic para excluir.",
        },
        todayEcclude: {
          message:
            "El día de hoy está excluido de las estadísticas. Haga clic para incluir.",
        },
        averageTimeByDays: {
          message: "Tiempo medio en los días seleccionados",
        },
        exportToCsv: { message: "Exportar a CSV" },
        week: { message: "Esta semana" },
        month: { message: "Este mes" },
        lastMonth: { message: "El mes pasado" },
        generalSettings: { message: "Ajustes" },
        whiteListSettings: { message: "ListaBlanca" },
        limitsSettings: { message: "Límites" },
        notificationsSettings: { message: "Notificaciones" },
        pomodoroMode: { message: "Pomodoro" },
        pomodoroSettings: { message: "Ajustes Pomodoro" },
        pomodoro: {
          message: "Pomodoro",
          description:
            "El método Pomodoro es una técnica de gestión del tiempo basada en la alternancia de periodos de trabajo concentrado y de descanso. Según los clásicos del método Pomodoro, el periodo de trabajo dura 25 minutos, el de descanso 5 minutos.",
        },
        pomodoroExplanationIcon: {
          message:
            "Cuando el modo Pomodoro está activado y el modo de funcionamiento está activo, verá este icono",
          description:
            "Durante los periodos de descanso, verá este icono de extensión",
        },
        pomodoroExplanationTime: {
          message:
            "Durante el modo Pomodoro, la extensión sigue teniendo en cuenta el tiempo que pasó en los sitios, todos los límites y las notificaciones de trabajo.",
        },
        pomodoroExplanationStop: {
          message:
            "Tras pulsar 'Parar', el tiempo de trabajo y de descanso se pone a cero.",
        },
        pomodoroWork: { message: "Período de trabajo" },
        pomodoroRest: { message: "Periodo de descanso" },
        pomodoroFrequency: { message: "Número de repeticiones" },
        start: { message: "Ejecutar" },
        stop: { message: "Stop" },
        pomodoroIsEnabled: { message: "Modo Pomodoro activado" },
        pomodoroSoundAfter: { message: "Sonido tras periodo completo" },
        clickToPreview: { message: "Haga clic para escuchar" },
        sound: { message: "Sonido" },
        aboutSettings: { message: "Acerca de" },
        viewTimeInBadge: {
          message: "Mostrar el cronómetro en un icono",
          description:
            "En el icono de extensión puede ver la información actual sobre el 'tiempo transcurrido' en formato abreviado",
        },
        deferringDescription: {
          message:
            "Puedes posponer el bloqueo durante 5 minutos sólo una vez al día",
        },
        allowDeferringBlock: {
          message: "Permitir el bloqueo diferido durante 5 minutos",
          description:
            "Una vez bloqueado el sitio, puede posponer el bloqueo durante 5 minutos a lo largo del día una sola vez",
        },
        intervalInactivity: {
          message: "Detener el rastreador si no hay ninguna acción para",
          description: "Se trata de cualquier acción con el ratón o el teclado",
        },
        exportToCsvSetting: {
          message: "Exportación de los datos de actividad web a CSV",
          description:
            "Puede exportar su actividad web para cualquier intervalo de fechas",
        },
        sec: { message: "segundos" },
        min: { message: "minuto" },
        "2min": { message: "minutos" },
        mins: { message: "minutos" },
        whiteList: {
          message:
            "La actividad y el tiempo de permanencia en estos sitios web no se rastrearán.",
        },
        addWebsite: { message: "Añadir sitio web" },
        enterWebsite: { message: "Introduzca el nombre del sitio web..." },
        enterNotification: { message: "Introducir mensaje de notificación..." },
        limits: {
          message: "Restricciones diarias de acceso a los sitios web",
          description:
            "Establezca el tiempo máximo permitido para visitar el sitio web al día. Transcurrido este tiempo, el sitio se bloqueará.",
        },
        limitsTip: {
          message:
            "Si establece el tiempo de bloqueo en 0 horas 0 minutos, el sitio web se bloqueará inmediatamente",
        },
        save: { message: "Guardar" },
        showDailyNotifacation: {
          message: "Notificaciones diarias resumidas",
          description:
            "Al final de cada día, recibirás una notificación con un resumen de tu uso diario",
        },
        notificationTime: {
          message: "Notificaciones para sitios web",
          description:
            "Mostrar notificaciones cada vez que pase un periodo de tiempo seleccionado en el sitio web.",
        },
        notificationMessage: {
          message: "Mensaje de notificación",
          description:
            "Verás este mensaje en la notificación de sitios web cada vez que",
        },
        notificationTimeSetting: {
          message:
            "Hora de notificación con información resumida sobre su uso diario",
        },
        github: { message: "Deje su opinión o informe de un problema en" },
        question: {
          message: "También puede hacer preguntas y dejar sus sugerencias",
        },
        supportForm: { message: "formulario de asistencia" },
        doYouEnjoy: { message: "¿Te gusta Web Activity Time Tracker?" },
        review: { message: "Deja tu opinión" },
        promoClearYoutube: {
          message:
            "¿Te gustaría bloquear los cortos, los comentarios, los vídeos recomendados, las suscripciones y otras distracciones de YouTube? Hemos creado otra extensión que te ayudará a ver YouTube sin distracciones.",
          description: "Instale",
        },
        block: { message: "Has alcanzado tu límite por hoy en" },
        "5mins": { message: "+ 5 minutos" },
        todayUsageTime: { message: "Tiempo total de uso para hoy " },
        comparedToYesterday: { message: " en comparación con ayer " },
        mostVisited: { message: "Sitio web más visitado " },
        dashboard: { message: "Cuadro de mandos" },
        timeChartDescription: {
          message: "Este es un gráfico del tiempo durante el día por horas",
        },
        enjoyAndReview: {
          message: "¿Disfrutando de la ampliación?",
          description: "Valora Web Activity Time Tracker",
        },
        removeAllData: {
          message: "Eliminar todos los datos",
          description:
            "Puede borrar todos los datos y estadísticas de los sitios web visitados para siempre",
        },
        remove: { message: "Eliminar" },
        removeAllDataConfirm: {
          message: "¿Estás seguro de que quieres borrar todos los datos?",
        },
        cancel: { message: "Cancelar" },
        backupAndRestore: {
          message: "Copia de seguridad y restauración",
          description:
            "Puedes descargar una copia de seguridad de todos los datos de todos los sitios visitados",
        },
        backup: { message: "Copia de seguridad" },
        restore: { message: "Restaurar" },
        welcome: {
          message: "Bienvenido a Web Activity Time Tracker",
          description:
            "Web Activity Time Tracker es una extensión de código abierto, gratuita y sin publicidad, que puede ayudarte a controlar el tiempo que pasas navegando por páginas web y el recuento de visitas.",
        },
        getStarted: { message: "Empezar" },
        welcomeStart: {
          message:
            "Puede empezar a utilizar rápidamente la extensión en sólo 3 sencillos pasos",
        },
        pinIcon: { message: "Anclar el icono" },
        pinIconPart1: {
          message:
            "Para utilizar esta extensión más cómodamente, puede fijar el icono a la barra de herramientas. Haga clic en el icono",
        },
        pinIconPart2: {
          message: "y, a continuación, haga clic en el icono de la chincheta",
        },
        browse: {
          message: "Navegar por cualquier sitio web",
          description:
            "Cuando visite cualquier sitio web, verá que la hora aparece en el icono, como aquí",
        },
        seeData: {
          message:
            "Visualiza tus datos en la página emergente y en el cuadro de mandos",
          description:
            "Haz clic en el icono de la extensión para abrir una página emergente y podrás leer los datos visualizados mediante un gráfico circular, para hoy, para todo el tiempo o por día. En la ventana emergente, puedes abrir el panel de control y te mostrará el tiempo de hoy según el reloj. Y puedes establecer un límite de tiempo diario para cualquier sitio web, notificaciones para sitios web o exportar los datos a CSV.",
        },
        close: { message: "Cerrar" },
        useExtension: { message: "Utilizar la extensión" },
        next: { message: "Siguiente" },
        showChangelog: {
          message: "Mostrar el registro de cambios",
          description:
            "Mostrar la lista de cambios tras actualizar la extensión",
        },
        byHours: { message: "Por hora" },
        intervals: { message: "Intervalos" },
        intervalsChart: {
          message: "Sólo los intervalos de tiempo superiores a",
          description: "se muestran",
        },
        completelyBlocked: {
          message: "Completamente bloqueado",
          description: "Completamente bloqueado",
        },
        tryMyOtherApps: { message: "Pruebe mis otras aplicaciones" },
        clearYoutube: {
          message: "Clean YouTube",
          description:
            "Extensión de Chrome que puede ocultar los cortos de YouTube, los vídeos recomendados, los comentarios, el feed, las recomendaciones de la página de inicio y otras distracciones. Vea YouTube sin distracciones.",
        },
        trackerjam: {
          message: "TrackerJam",
          description:
            "Rastreador web automático para equipos. Informes detallados para cada miembro del equipo, detallando el tiempo empleado en sitios web, seguimiento de cualquier URL dentro del dominio, puntuaciones de productividad, dominios principales con categorías y etc.",
        },
        darkTheme: { message: "Tema oscuro" },
      },
    },
    so = Zi({
      legacy: !1,
      locale: E.i18n.getUILanguage(),
      fallbackLocale: "en",
      globalInjection: !0,
      messages: to,
    });
  function rt() {
    let e = so.global.locale.value;
    return (
      Object.keys(to).indexOf(e) == -1 && (e = "en"),
      so.global.getLocaleMessage(e)
    );
  }
  function $s(e) {
    return (
      ($s =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                typeof Symbol == "function" &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      $s(e)
    );
  }
  function He(e) {
    if (e === null || e === !0 || e === !1) return NaN;
    var t = Number(e);
    return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
  }
  function oe(e, t) {
    if (t.length < e)
      throw new TypeError(
        e +
          " argument" +
          (e > 1 ? "s" : "") +
          " required, but only " +
          t.length +
          " present"
      );
  }
  function $e(e) {
    oe(1, arguments);
    var t = Object.prototype.toString.call(e);
    return e instanceof Date || ($s(e) === "object" && t === "[object Date]")
      ? new Date(e.getTime())
      : typeof e == "number" || t === "[object Number]"
      ? new Date(e)
      : ((typeof e == "string" || t === "[object String]") &&
          typeof console < "u" &&
          (console.warn(
            "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
          ),
          console.warn(new Error().stack)),
        new Date(NaN));
  }
  function ir(e, t) {
    oe(2, arguments);
    var s = $e(e),
      n = He(t);
    if (isNaN(n)) return new Date(NaN);
    if (!n) return s;
    var o = s.getDate(),
      a = new Date(s.getTime());
    a.setMonth(s.getMonth() + n + 1, 0);
    var i = a.getDate();
    return o >= i ? a : (s.setFullYear(a.getFullYear(), a.getMonth(), o), s);
  }
  function rr(e, t) {
    oe(2, arguments);
    var s = $e(e).getTime(),
      n = He(t);
    return new Date(s + n);
  }
  var cr = {};
  function no() {
    return cr;
  }
  function lr(e, t) {
    var s, n, o, a, i, r, c, l;
    oe(1, arguments);
    var f = no(),
      g = He(
        (s =
          (n =
            (o =
              (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0
                ? a
                : t == null ||
                  (i = t.locale) === null ||
                  i === void 0 ||
                  (r = i.options) === null ||
                  r === void 0
                ? void 0
                : r.weekStartsOn) !== null && o !== void 0
              ? o
              : f.weekStartsOn) !== null && n !== void 0
            ? n
            : (c = f.locale) === null ||
              c === void 0 ||
              (l = c.options) === null ||
              l === void 0
            ? void 0
            : l.weekStartsOn) !== null && s !== void 0
          ? s
          : 0
      );
    if (!(g >= 0 && g <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var u = $e(e),
      h = u.getDay(),
      b = (h < g ? 7 : 0) + h - g;
    return u.setDate(u.getDate() - b), u.setHours(0, 0, 0, 0), u;
  }
  function mr(e) {
    oe(1, arguments);
    var t = $e(e);
    return t.setHours(0, 0, 0, 0), t;
  }
  function ct(e, t) {
    oe(2, arguments);
    var s = He(t);
    return rr(e, s * 1e3);
  }
  var ur = 36e5;
  function gr(e, t) {
    return oe(2, arguments), $e(e).getTime() - $e(t).getTime();
  }
  var oo = {
      ceil: Math.ceil,
      round: Math.round,
      floor: Math.floor,
      trunc: function (t) {
        return t < 0 ? Math.ceil(t) : Math.floor(t);
      },
    },
    dr = "trunc";
  function fr(e) {
    return e ? oo[e] : oo[dr];
  }
  function pr(e, t, s) {
    oe(2, arguments);
    var n = gr(e, t) / ur;
    return fr(s == null ? void 0 : s.roundingMethod)(n);
  }
  function ao(e) {
    oe(1, arguments);
    var t = $e(e),
      s = t.getMonth();
    return (
      t.setFullYear(t.getFullYear(), s + 1, 0), t.setHours(23, 59, 59, 999), t
    );
  }
  function io(e) {
    oe(1, arguments);
    var t = $e(e);
    return t.setDate(1), t.setHours(0, 0, 0, 0), t;
  }
  function hr(e, t) {
    var s, n, o, a, i, r, c, l;
    oe(1, arguments);
    var f = no(),
      g = He(
        (s =
          (n =
            (o =
              (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0
                ? a
                : t == null ||
                  (i = t.locale) === null ||
                  i === void 0 ||
                  (r = i.options) === null ||
                  r === void 0
                ? void 0
                : r.weekStartsOn) !== null && o !== void 0
              ? o
              : f.weekStartsOn) !== null && n !== void 0
            ? n
            : (c = f.locale) === null ||
              c === void 0 ||
              (l = c.options) === null ||
              l === void 0
            ? void 0
            : l.weekStartsOn) !== null && s !== void 0
          ? s
          : 0
      );
    if (!(g >= 0 && g <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var u = $e(e),
      h = u.getDay(),
      b = (h < g ? -7 : 0) + 6 - (h - g);
    return u.setDate(u.getDate() + b), u.setHours(23, 59, 59, 999), u;
  }
  function $r() {
    return mr(Date.now());
  }
  function br() {
    var e = new Date(),
      t = e.getFullYear(),
      s = e.getMonth(),
      n = e.getDate(),
      o = new Date(0);
    return o.setFullYear(t, s, n + 1), o.setHours(0, 0, 0, 0), o;
  }
  function yr() {
    var e = new Date(),
      t = e.getFullYear(),
      s = e.getMonth(),
      n = e.getDate(),
      o = new Date(0);
    return o.setFullYear(t, s, n - 1), o.setHours(0, 0, 0, 0), o;
  }
  function ro(e, t) {
    oe(2, arguments);
    var s = He(t);
    return ir(e, -s);
  }
  function J() {
    return new Date().toLocaleDateString("en-US");
  }
  function Tr() {
    return $r().getTime();
  }
  lr(new Date()),
    hr(new Date()),
    io(new Date()),
    ao(new Date()),
    io(ro(new Date(), 1)),
    ao(ro(new Date(), 1));
  function bs(e, t) {
    return (
      e.getFullYear() == t.getFullYear() &&
      e.getMonth() == t.getMonth() &&
      e.getDate() == t.getDate() &&
      e.getHours() == t.getHours() &&
      e.getMinutes() == t.getMinutes() &&
      e.getSeconds() == t.getSeconds()
    );
  }
  function Ce(...e) {}
  const co = { log: Ce };
  class lo {
    constructor() {
      H(this, "url", "");
      H(this, "favicon", "");
      H(this, "summaryTime", 0);
      H(this, "counter", 0);
      H(this, "days", []);
    }
    init(t) {
      this.url = t;
    }
    incSummaryTime() {
      this.summaryTime += 1;
      const t = this.days.find((s) => s.date == J());
      t === void 0 ? this.addNewDay().incSummaryTime() : t.incSummaryTime();
    }
    incCounter() {
      this.counter += 1;
      const t = this.days.find((s) => s.date == J());
      t === void 0 ? this.addNewDay().incCounter() : t.incCounter();
    }
    addNewDay() {
      const t = new mo();
      return t.init(J()), this.days.push(t), t;
    }
    deserialize(t) {
      var s;
      return (
        (this.url = t.url),
        (this.counter = t.counter),
        (this.favicon = t.favicon),
        (this.summaryTime = t.summaryTime),
        ((s = t.days) == null ? void 0 : s.length) > 0 &&
          (this.days = t.days.map((n) => new mo().deserialize(n))),
        this
      );
    }
    setFavicon(t) {
      this.favicon = t;
    }
  }
  class mo {
    constructor() {
      H(this, "counter", 0);
      H(this, "date", "");
      H(this, "summary", 0);
    }
    init(t) {
      this.date = t;
    }
    incSummaryTime() {
      this.summary += 1;
    }
    incCounter() {
      this.counter += 1;
    }
    deserialize(t) {
      return (
        (this.counter = t.counter),
        (this.date = t.date),
        (this.summary = t.summary),
        this
      );
    }
  }
  class ys {
    constructor() {
      H(this, "domain", "");
      H(this, "intervals", []);
      H(this, "day", "");
    }
    init(t, s) {
      (this.domain = s), (this.intervals = []), (this.day = t);
    }
    addInterval() {
      const t = this.getCurrentStringDate();
      this.intervals.push(t + "-" + t),
        co.log(`Add interval ${this.domain} - ${t} - ${t}`);
    }
    closeInterval() {
      const t = this.getCurrentStringDate(),
        s = this.intervals[this.intervals.length - 1];
      s != null &&
        s.split("-")[0] == s.split("-")[1] &&
        (this.intervals.pop(),
        this.intervals.push(s.split("-")[0] + "-" + t),
        co.log(`Close interval ${this.domain} - ${s.split("-")[0]} - ${t}`));
    }
    deserialize(t) {
      return (
        (this.domain = t.domain),
        (this.day = t.day),
        (this.intervals = t.intervals),
        this
      );
    }
    getCurrentStringDate() {
      const t = new Date();
      return t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
    }
  }
  var xt = ((e) => (
    (e["Sound 1"] = "1.mp3"),
    (e["Sound 2"] = "2.mp3"),
    (e["Sound 3"] = "3.mp3"),
    (e["Sound 4"] = "4.mp3"),
    (e["Sound 5"] = "5.mp3"),
    (e["Sound 6"] = "6.mp3"),
    (e["Sound 7"] = "7.mp3"),
    (e["Sound 8"] = "8.mp3"),
    (e["Sound 9"] = "9.mp3"),
    (e["Sound 10"] = "10.mp3"),
    (e["Sound 11"] = "11.mp3"),
    (e["Sound 12"] = "12.mp3"),
    (e["Sound 13"] = "13.mp3"),
    e
  ))(xt || {});
  const uo = 60,
    Ts = 1440,
    As = 1e3,
    Ar = 60 * (60 * As);
  function wr(e) {
    const t = Tr() + e;
    return t > Date.now() ? t : t + Ts;
  }
  var C = ((e) => (
      (e.BLACK_LIST = "black_list"),
      (e.RESTRICTION_LIST = "restriction_list"),
      (e.NOTIFICATION_LIST = "notification_list"),
      (e.NOTIFICATION_MESSAGE = "notification_message"),
      (e.INTERVAL_INACTIVITY = "inactivity_interval"),
      (e.DARK_MODE = "night_mode"),
      (e.VIEW_TIME_IN_BADGE = "view_time_in_badge"),
      (e.SHOW_CHANGELOG = "show_changelog"),
      (e.BLOCK_DEFERRAL = "view_block_deferral"),
      (e.BLOCK_DEFERRAL_TIME = "view_block_deferral_time"),
      (e.DAILY_SUMMARY_NOTIFICATION_TIME = "daily-summary-notification-time"),
      (e.DAILY_NOTIFICATION = "daily_notification"),
      (e.REVIEW_DATE = "review_date"),
      (e.REVIEW_PROMPT_AT = "review_prompt_at"),
      (e.INSTALL_DATE = "install-date"),
      (e.PROMO_CLEAR_YOUTUBE_ON_LIMITS = "promo-clear-youtube-on-limits"),
      (e.PROMO_CLEAR_YOUTUBE_ON_BLOCK = "promo-clear-youtube-on-block"),
      (e.IS_POMODORO_ENABLED = "is-pomodoro-enabled"),
      (e.POMODORO_START_TIME = "pomodoro-start-time"),
      (e.POMODORO_INTERVAL_WORK = "pomodoro-interval-work"),
      (e.POMODORO_AUDIO_AFTER_WORK = "pomodoro-audio-after-work"),
      (e.POMODORO_AUDIO_AFTER_REST = "pomodoro-audio-after-rest"),
      (e.POMODORO_AUDIO_AFTER_FINISHED = "pomodoro-audio-after-finished"),
      (e.POMODORO_INTERVAL_REST = "pomodoro-interval-rest"),
      (e.POMODORO_FREQUENCY = "pomodoro-frequency"),
      e
    ))(C || {}),
    Ne = ((e) => (
      (e.TABS = "tabs"), (e.TIMEINTERVAL_LIST = "time_interval"), e
    ))(Ne || {});
  function _r(e) {
    switch (e) {
      case "tabs":
        return new lo();
      case "time_interval":
        return new ys();
    }
  }
  const vr = "You have spent a lot of time on this site",
    Sr = 30,
    Dr = 5e3,
    Ir = !1,
    Er = !0,
    Or = !0,
    kr = (20 * Ar) / 1e3,
    xr = !0,
    Cr = !1,
    Nr = !1,
    Rr = !1,
    Lr = 25 * uo,
    Mr = 5 * uo,
    Fr = 3,
    Pr = xt["Sound 3"],
    Wr = xt["Sound 8"],
    Ur = xt["Sound 10"];
  function Vr(e) {
    switch (e) {
      case "black_list":
        return [];
      case "restriction_list":
        return [];
      case "notification_list":
        return [];
      case "notification_message":
        return vr;
      case "inactivity_interval":
        return Sr;
      case "night_mode":
        return Ir;
      case "view_time_in_badge":
        return Er;
      case "view_block_deferral":
        return Or;
      case "view_block_deferral_time":
        return [];
      case "daily-summary-notification-time":
        return kr;
      case "daily_notification":
        return xr;
      case "show_changelog":
        return Cr;
      case "promo-clear-youtube-on-block":
      case "promo-clear-youtube-on-limits":
        return Nr;
      case "is-pomodoro-enabled":
        return Rr;
      case "pomodoro-interval-work":
        return Lr;
      case "pomodoro-interval-rest":
        return Mr;
      case "pomodoro-frequency":
        return Fr;
      case "pomodoro-audio-after-work":
        return Pr;
      case "pomodoro-audio-after-rest":
        return Wr;
      case "pomodoro-audio-after-finished":
        return Ur;
    }
  }
  function Br(e) {
    for (const t in e) if (e.hasOwnProperty(t)) return !1;
    return JSON.stringify(e) === JSON.stringify({});
  }
  function lt(e, t) {
    if (e === t) return !0;
    var s = function (n) {
      return n.indexOf("www.") > -1 ? n.split("www.")[1] : n;
    };
    return s(e) === s(t);
  }
  function Yr(e, t) {
    return ((e / t) * 100).toFixed(2);
  }
  class jr {
    async getDeserializeList(t) {
      return new Promise(async (s) => {
        const o = (await E.storage.local.get(t))[t];
        if (o != null) {
          let a = [];
          for (let i = 0; i < o.length; i++) {
            const r = _r(t);
            a.push(r.deserialize(o[i]));
          }
          return s(a);
        } else s([]);
      });
    }
    async saveTabs(t) {
      return await E.storage.local.set({ [Ne.TABS]: t });
    }
    async saveIntervalList(t) {
      return await E.storage.local.set({ [Ne.TIMEINTERVAL_LIST]: t });
    }
    async saveValue(t, s) {
      return await E.storage.local.set({ [t]: s });
    }
    async getValue(t, s) {
      let n = await E.storage.local.get(t);
      return Br(n) && s != null ? (await this.saveValue(t, s), s) : n[t];
    }
  }
  function ge() {
    return new jr();
  }
  const Le = class {
    constructor() {
      H(this, "_settings", new Map());
      if (Le.instance) throw new Error("Error - use Settings.getInstance()");
    }
    static getInstance() {
      return (Le.instance = Le.instance || new Le()), Le.instance;
    }
    async getSetting(t) {
      return this._settings.has(t)
        ? this._settings.get(t)
        : await this.getValue(t);
    }
    async reloadSetting(t) {
      await this.getValue(t);
    }
    async getValue(t) {
      const n = await ge().getValue(t, Vr(t));
      return this._settings.set(t, n), n;
    }
  };
  let W = Le;
  H(W, "instance");
  async function go(e) {
    const t = await W.getInstance().getSetting(C.BLACK_LIST),
      s = Object.values(t);
    return (s == null ? void 0 : s.find((n) => lt(dt(n), dt(e)))) !== void 0;
  }
  class zr {
    constructor() {
      H(this, "tabs");
      this.tabs = [];
    }
    async initAsync() {
      this.tabs = await ge().getDeserializeList(Ne.TABS);
    }
    getTabs() {
      return this.tabs;
    }
    removeAllTabs() {
      this.tabs = [];
    }
    getTodayTabs() {
      return this.tabs.filter((t) => t.days.find((s) => s.date === J()));
    }
    getTab(t) {
      var s;
      return (s = this.tabs) == null ? void 0 : s.find((n) => n.url === t);
    }
    async addTab(t) {
      const s = this.getTab(t);
      if (!(await go(t)) && !s) {
        const o = new lo();
        return o.init(t), this.tabs.push(o), o;
      }
    }
  }
  let ws = null;
  async function fo() {
    let e = new zr();
    return await e.initAsync(), e;
  }
  async function Ct() {
    return ws == null && (ws = await fo()), ws;
  }
  async function Hr() {
    return fo();
  }
  var Nt = ((e) => (
      (e.default = "/128x128.png"),
      (e.pomodoroWorkingTime = "/assets/icons/pomodoro.png"),
      (e.pomodoroRestTime = "/assets/icons/pomodoro-rest.png"),
      e
    ))(Nt || {}),
    Re = ((e) => (
      (e.red = "#fdb8b8"),
      (e.green = "#6ec05e"),
      (e.blue = "#1a73e8"),
      (e.none = "#000"),
      e
    ))(Re || {});
  async function qe(e) {
    e.color != "#000" &&
      (await E.action.setBadgeBackgroundColor({ color: e.color })),
      await E.action.setBadgeText({ tabId: e.tabId, text: e.text }),
      e.icon
        ? (await E.action.setIcon({ path: e.icon }),
          await E.action.setBadgeText({ tabId: e.tabId, text: e.text }))
        : await E.action.setIcon({ path: "/128x128.png" });
  }
  async function _s() {
    async function e(s) {
      if (s == null) return;
      const n = ge(),
        o = await n.getDeserializeList(Ne.TIMEINTERVAL_LIST),
        a = o == null ? void 0 : o.find((i) => i.domain === s && i.day == J());
      a == null || a.closeInterval(), await n.saveIntervalList(o);
    }
    async function t(s) {
      if (s == null) return;
      const n = ge();
      let o = await n.getDeserializeList(Ne.TIMEINTERVAL_LIST);
      o == null && (o = []);
      const a =
        o == null ? void 0 : o.find((i) => i.domain === s && i.day == J());
      if (a != null)
        if (a.day == J()) a.addInterval();
        else {
          const i = new ys();
          i.init(J(), s), i.addInterval(), o.push(i);
        }
      else {
        const i = new ys();
        i.init(J(), s), i.addInterval(), o.push(i);
      }
      await n.saveIntervalList(o);
    }
    return { closeInterval: e, addInterval: t };
  }
  const Me = class {
    constructor() {
      H(this, "_activeTabUrl");
      H(this, "_activeTabDomain");
      if (Me.instance) throw new Error("Error - use ActiveTab.getInstance()");
      (this._activeTabUrl = null), (this._activeTabDomain = null);
    }
    static getInstance() {
      return (Me.instance = Me.instance || new Me()), Me.instance;
    }
    setActiveTab(t) {
      (this._activeTabUrl = t),
        (this._activeTabDomain = t != null ? dt(t) : null);
    }
    getActiveTabUrl() {
      return this._activeTabUrl;
    }
    getActiveTabDomain() {
      return this._activeTabDomain;
    }
  };
  let Rt = Me;
  H(Rt, "instance");
  async function qr(e) {
    const t = await W.getInstance().getSetting(C.BLOCK_DEFERRAL_TIME),
      s = Object.values(t),
      n = s == null ? void 0 : s.find((o) => lt(o.domain, e));
    return (
      n != null &&
        Ce(
          `Deferring time ${e} ${new Date(n.time)} diff ${pr(
            new Date(n.time),
            new Date()
          )}`
        ),
      n != null && n.time > Date.now()
    );
  }
  async function Gr(e, t) {
    const s = await W.getInstance().getSetting(C.RESTRICTION_LIST),
      n = Object.values(s),
      o = n == null ? void 0 : n.find((a) => lt(a.domain, e));
    if (o != null) {
      const a = t.days.find((i) => i.date == J());
      if (a != null && a.summary >= o.time)
        return (
          Ce(
            `Limit Exceeded: website ${e} limit ${o.time} summary time ${a.summary}`
          ),
          (await qr(e))
            ? { IsLimitExceeded: !1, LimitTime: null }
            : { IsLimitExceeded: !0, LimitTime: o.time }
        );
    }
    return { IsLimitExceeded: !1, LimitTime: null };
  }
  function Kr(e, t, s, n, o) {
    return `?domain=${e}&url=${t}&summaryTime=${s}&summaryCounter=${n}&favicon=${o}`;
  }
  const Zr =
    'data:image/svg+xml,%3Csvg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="%23000000"%3E%3Cg id="SVGRepo_bgCarrier" stroke-width="0"%3E%3C/g%3E%3Cg id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"%3E%3C/g%3E%3Cg id="SVGRepo_iconCarrier"%3E%3Crect x="0" fill="none" width="20" height="20"%3E%3C/rect%3E%3Cg%3E%3Cpath d="M9 0C4.03 0 0 4.03 0 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm7.5 6.48c-.274.896-.908 1.64-1.75 2.05-.45-1.69-1.658-3.074-3.27-3.75.13-.444.41-.83.79-1.09-.43-.28-1-.42-1.34.07-.53.69 0 1.61.21 2v.14c-.555-.337-.99-.84-1.24-1.44-.966-.03-1.922.208-2.76.69-.087-.565-.032-1.142.16-1.68.733.07 1.453-.23 1.92-.8.46-.52-.13-1.18-.59-1.58h.36c1.36-.01 2.702.335 3.89 1 1.36 1.005 2.194 2.57 2.27 4.26.24 0 .7-.55.91-.92.172.34.32.69.44 1.05zM9 16.84c-2.05-2.08.25-3.75-1-5.24-.92-.85-2.29-.26-3.11-1.23-.282-1.473.267-2.982 1.43-3.93.52-.44 4-1 5.42.22.83.715 1.415 1.674 1.67 2.74.46.035.918-.066 1.32-.29.41 2.98-3.15 6.74-5.73 7.73zM5.15 2.09c.786-.3 1.676-.028 2.16.66-.42.38-.94.63-1.5.72.02-.294.085-.584.19-.86l-.85-.52z"%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E';
  async function Jr(e, t, s, n, o) {
    const a =
        o == null || o == "" || o.startsWith("chrome://favicon/") ? Zr : o,
      i = E.runtime.getURL("src/block.html") + Kr(e, t, s, n, a),
      r = await E.tabs.query({ currentWindow: !0, active: !0 });
    await E.tabs.update(r[0].id, { url: i });
  }
  function Xr(e) {
    const t = e,
      s = Number((e / 60).toFixed(0)),
      n = Number((e / (60 * 60)).toFixed(1));
    return t < 60 ? `${t}s` : s < 60 ? `${s}m` : `${n}h`;
  }
  function po(e) {
    const t = e % 86400;
    let s = Math.floor(t / 3600);
    const n = e % 3600;
    let o = Math.floor(n / 60);
    function a(i, r, c = !1) {
      return `${c ? Qr(i) : i} ${r}`;
    }
    return `${a(s, rt().h.message)} ${a(o, rt().m.message, !0)}`;
  }
  function Qr(e) {
    return e < 10 ? `0${e}` : e;
  }
  function ec() {
    async function e(s, n) {
      const o = await W.getInstance().getSetting(C.NOTIFICATION_LIST),
        a = Object.values(o),
        i = a == null ? void 0 : a.find((r) => lt(r.domain, s));
      if (i != null) {
        const r = n.days.find((c) => c.date == J());
        if (
          r != null &&
          r.summary != 0 &&
          (r.summary == i.time || r.summary % i.time == 0)
        )
          return (
            Ce(
              `Time for notification: website ${s} time ${i.time} summary time ${r.summary}`
            ),
            !0
          );
      }
      return !1;
    }
    async function t(s) {
      const n = await W.getInstance().getSetting(C.NOTIFICATION_LIST),
        o = Object.values(n);
      return (o == null ? void 0 : o.find((i) => lt(i.domain, s))) != null;
    }
    return { isNeedToShowNotification: e, isDomainInNotificationsLimit: t };
  }
  var vs = ((e) => (
    (e.DailySummaryNotification = "daily-summary-notification"),
    (e.WebSiteNotification = "website-notification"),
    e
  ))(vs || {});
  async function ho(e, t, s) {
    return (
      await E.notifications.clear(e),
      await new Promise((n) => setTimeout(n, 3 * As)),
      E.notifications.create(e, {
        type: "basic",
        title: t,
        message: s,
        iconUrl: E.runtime.getURL("128x128.png"),
        isClickable: !1,
      })
    );
  }
  const Ge = Rt.getInstance();
  let mt;
  async function tc() {
    setInterval(sc, 1e3), setInterval(oc, Dr);
  }
  async function sc() {
    var s;
    const e = await Ct(),
      t = await E.windows.getLastFocused({ populate: !0 });
    if (t.focused) {
      const n = (s = t.tabs) == null ? void 0 : s.find((o) => o.active === !0);
      if (Do(n)) {
        const o = dt(n.url);
        if ((await go(o)) && (await yo()))
          await qe({
            tabId: n == null ? void 0 : n.id,
            text: "n/a",
            color: Re.green,
          });
        else {
          if (mt != null && mt.activeDomain == o && !bo(o)) {
            await $o(n, o, mt.tab);
            return;
          }
          let a = e.getTab(o);
          a == null && (a = await e.addTab(o)),
            a != null && (await $o(n, o, a));
        }
      } else await Ss();
    } else await Ss();
  }
  async function Ss() {
    (await _s()).closeInterval(Ge.getActiveTabDomain()),
      Ge.setActiveTab(null),
      (mt = null);
  }
  async function nc(e, t, s, n) {
    function o() {
      return e === "idle" && t.audible;
    }
    mt = { tab: n, activeDomain: s };
    const a = o();
    if (e === "active" || a) {
      const i = await Gr(s, n);
      if (i.IsLimitExceeded) {
        const c = n.days.at(-1).counter;
        await Jr(s, t.url, i.LimitTime, c, t.favIconUrl);
        return;
      }
      if (
        (bo(s) &&
          (n.incCounter(),
          (await _s()).closeInterval(Ge.getActiveTabDomain()),
          Ge.setActiveTab(t.url),
          (await _s()).addInterval(Ge.getActiveTabDomain())),
        n.favicon == "" && t.favIconUrl != null && n.setFavicon(t.favIconUrl),
        await ec().isNeedToShowNotification(s, n))
      ) {
        const c = await W.getInstance().getSetting(C.NOTIFICATION_MESSAGE),
          l = `${s} notification`;
        await ho(vs.WebSiteNotification, l, c);
      }
      n.incSummaryTime();
      const r = await W.getInstance().getSetting(C.VIEW_TIME_IN_BADGE);
      (await yo()) &&
        (r
          ? await qe({
              tabId: t == null ? void 0 : t.id,
              text: Xr(n.days.at(-1).summary),
              color: Re.blue,
            })
          : await qe({
              tabId: t == null ? void 0 : t.id,
              text: null,
              color: Re.none,
            }));
    } else await Ss();
  }
  async function $o(e, t, s) {
    const n = await W.getInstance().getSetting(C.INTERVAL_INACTIVITY),
      o = Number(n),
      a = await E.idle.queryState(o);
    await nc(a, e, t, s);
  }
  function bo(e) {
    return e != Ge.getActiveTabDomain();
  }
  async function oc() {
    const e = ge(),
      s = (await Ct()).getTabs();
    await e.saveTabs(s);
  }
  async function yo() {
    return !(await W.getInstance().getSetting(C.IS_POMODORO_ENABLED));
  }
  async function ac() {
    const e = await Hr();
    if (e.getTabs().length == 0) return null;
    const s = To(J(), e),
      n = To(yr().toLocaleDateString("en-US"), e);
    return {
      time: s == null ? 0 : s.time,
      mostVisitedSite: s == null ? void 0 : s.mostVisitedSite,
      mostVisitedSiteTime: s == null ? void 0 : s.mostVisitedSiteTime,
      timeYesterDay: n == null ? 0 : n.time,
      percentageFromYesterday:
        s == null ? "0%" : n == null ? "100%" : `${Yr(s.time, n.time)}%`,
    };
  }
  function To(e, t) {
    var f;
    const s = t.getTabs();
    if (s.length == 0) return null;
    const n = s.filter((g) => g.days.find((u) => u.date === e));
    if (n.length == 0) return null;
    const o = n.sort(function (g, u) {
        return (
          u.days.find((h) => h.date === e).summary -
          g.days.find((h) => h.date === e).summary
        );
      }),
      a =
        o == null
          ? void 0
          : o.map(function (g) {
              return g.days.find((u) => u.date === e).summary;
            }),
      i =
        a != null && a.length > 0
          ? a.reduce(function (g, u) {
              return g + u;
            })
          : 0,
      r = o[0],
      c = r.url,
      l = (f = r.days.find((g) => g.date === e)) == null ? void 0 : f.summary;
    return { time: i, mostVisitedSite: c, mostVisitedSiteTime: l };
  }
  async function ic() {
    if (await W.getInstance().getSetting(C.DAILY_NOTIFICATION)) {
      const t = await ac();
      if (t == null) return;
      const s = `${rt().todayUsageTime.message}${po(t.time)}`,
        n =
          t.mostVisitedSite == null
            ? ""
            : `${t.mostVisitedSite} ${rt().mostVisited.message}${po(
                t.mostVisitedSiteTime
              )}`,
        o = [
          `${t.percentageFromYesterday}${rt().comparedToYesterday.message}`,
          n,
        ].join(`
`);
      return await ho(vs.DailySummaryNotification, s, o);
    }
  }
  async function rc() {
    const e = ge();
    let t = await e.getDeserializeList(Ne.TIMEINTERVAL_LIST);
    t == null && (t = []);
    const s = [];
    t.forEach((n) => {
      new Date(n.day) < new Date(J()) && s.push(t.indexOf(n));
    }),
      s.forEach((n) => {
        n > -1 && t.splice(n, 1);
      }),
      await e.saveIntervalList(t);
  }
  var ut = ((e) => (
    (e.RescheduleJobs = "reschedule-jobs"),
    (e.ClearAllData = "clear-data"),
    (e.Restore = "restore-data"),
    (e.PlayAudio = "play-audio"),
    e
  ))(ut || {});
  function cc() {
    E.alarms.onAlarm.addListener(async (e) => {
      switch ((Ce(`[schedule-jobs] Alarm ${e.name} triggered`, e), e.name)) {
        case "@alarm/daily-summary-notification": {
          await ic();
          break;
        }
        case "@alarm/remove-old-time-intervals": {
          await rc();
          break;
        }
      }
      Ce(`[schedule-jobs] ${e.name} finished`);
    }),
      E.runtime.onMessage.addListener((e) => {
        e == ut.RescheduleJobs && Ao();
      }),
      Ao();
  }
  async function Ao() {
    const e = await W.getInstance().getSetting(
      C.DAILY_SUMMARY_NOTIFICATION_TIME
    );
    await E.alarms.clear("@alarm/daily-summary-notification");
    const t = wr(e * As);
    E.alarms.create("@alarm/daily-summary-notification", {
      when: t,
      periodInMinutes: Ts,
    }),
      await lc("@alarm/remove-old-time-intervals", {
        when: br().getTime(),
        periodInMinutes: Ts,
      });
  }
  async function lc(e, t) {
    (await E.alarms.get(e).catch(() => {})) == null &&
      (Ce(
        `[schedule-jobs] ${e} start time ${
          t.when != null ? new Date(t.when) : null
        }`
      ),
      E.alarms.create(e, t));
  }
  async function mc() {
    const e = "src/offscreen.html",
      t = E.runtime.getURL(e);
    (await chrome.offscreen.hasDocument()) ||
      (await chrome.offscreen.createDocument({
        url: t,
        reasons: ["AUDIO_PLAYBACK"],
        justification: "Play audio sounds",
      }));
  }
  async function uc() {
    let e;
    ((b) => {
      (b.work = "WORK"), (b.rest = "REST"), (b.finished = "FINISH");
    })(e || (e = {}));
    function t(b) {
      let _;
      for (let w = 1; w <= c; w++) {
        let v = b == "WORK" ? w - 1 : w;
        const A = i * v,
          R = (r + 1) * (w - 1),
          S = ct(a, A + R);
        _ = ct(a, A + R + i);
        const p = l >= S && (ct(l, -1) <= _ || l <= _);
        if (p)
          return {
            period: b,
            isTargetPeriod: p,
            isTargetPeriodFinishedNow: bs(ct(l, -1), _) || bs(l, _),
          };
      }
      return {
        period: "FINISH",
        isTargetPeriod: !1,
        isTargetPeriodFinishedNow: !1,
      };
    }
    async function s(b) {
      function _() {
        switch (b) {
          case "WORK":
            return C.POMODORO_AUDIO_AFTER_WORK;
          case "REST":
            return C.POMODORO_AUDIO_AFTER_REST;
          case "FINISH":
            return C.POMODORO_AUDIO_AFTER_FINISHED;
        }
      }
      const w = await n.getValue(_());
      await mc(),
        await E.runtime.sendMessage({
          message: ut.PlayAudio,
          sound: w,
          offscreen: !0,
        });
    }
    const n = ge();
    if (!(await W.getInstance().getSetting(C.IS_POMODORO_ENABLED))) return;
    const a = new Date(await W.getInstance().getSetting(C.POMODORO_START_TIME)),
      i = await W.getInstance().getSetting(C.POMODORO_INTERVAL_WORK),
      r = await W.getInstance().getSetting(C.POMODORO_INTERVAL_REST),
      c = await W.getInstance().getSetting(C.POMODORO_FREQUENCY),
      l = new Date(),
      f = ct(a, i * c + r * c),
      g = await E.tabs.query({ active: !0 });
    if (l >= f) {
      bs(l, f) && (await s("FINISH")),
        await n.saveValue(C.IS_POMODORO_ENABLED, !1),
        await n.saveValue(C.POMODORO_START_TIME, null),
        await qe({
          tabId: g[0].id,
          text: null,
          color: Re.none,
          icon: Nt.default,
        });
      return;
    }
    let u = t("WORK");
    const h = u.isTargetPeriod;
    return (
      h
        ? await qe({
            tabId: g[0].id,
            text: null,
            color: Re.none,
            icon: Nt.pomodoroWorkingTime,
          })
        : ((u = t("REST")),
          u.isTargetPeriod &&
            (await qe({
              tabId: g[0].id,
              text: null,
              color: Re.none,
              icon: Nt.pomodoroRestTime,
            }))),
      u.isTargetPeriodFinishedNow && (await s(u.period)),
      { isWork: h }
    );
  }
  let wo;
  (self.onerror = (e) => {
    console.error("Unhandled error:", e);
  }),
    E.storage.onChanged.addListener(async (e, t) => {
      for (var s in e)
        if (
          (Object.values(C).includes(s) &&
            (await W.getInstance().reloadSetting(s)),
          s == C.IS_POMODORO_ENABLED)
        ) {
          const n = e[C.IS_POMODORO_ENABLED].newValue;
          _o(n);
        }
    }),
    E.runtime.setUninstallURL("https://webtracker.online/goodbye.html"),
    E.runtime.onInstalled.addListener(async (e) => {
      if (e.reason == "install") {
        await ge().saveValue(C.INSTALL_DATE, J());
        const s = E.runtime.getURL("src/welcome.html");
        await E.tabs.create({ url: s, active: !0 });
      }
      e.reason == "update" &&
        (await W.getInstance().getSetting(C.SHOW_CHANGELOG)) &&
        (await E.tabs.create({
          url: "https://webtracker.online/releasenotes.html",
          active: !0,
        }));
    }),
    E.runtime.onStartup.addListener(() => {}),
    E.windows.onFocusChanged.addListener(() => {});
  async function _o(e) {
    e == null && (e = await ge().getValue(C.IS_POMODORO_ENABLED)),
      e == !0 ? (wo = setInterval(uc, 1e3)) : clearInterval(wo);
  }
  _o(),
    cc(),
    tc(),
    E.runtime.onMessage.addListener(async (e) => {
      if (e == ut.ClearAllData) {
        const t = ge();
        (await Ct()).removeAllTabs(), await t.saveTabs([]);
      }
      e.message == ut.Restore &&
        (await ge().saveTabs(e.data), (await Ct()).initAsync());
    });
})();
