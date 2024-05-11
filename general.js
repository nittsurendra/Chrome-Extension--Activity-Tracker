var Y = Object.defineProperty;
var B = (e,t,n)=>t in e ? Y(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var f = (e,t,n)=>(B(e, typeof t != "symbol" ? t + "" : t, n),
n);
import {B as E} from "./browser-polyfill.js";
import {y as g, G as j, r as N, I as G, a3 as K, j as z, a4 as I} from "./i18n.js";
const Ve = "/assets/icons/48x48.png";
var q = (e=>(e[e.Today = 0] = "Today",
e[e.All = 1] = "All",
e[e.ByDays = 2] = "ByDays",
e[e.Dashboard = 3] = "Dashboard",
e))(q || {})
  , x = (e=>(e[e.UsageTime = 0] = "UsageTime",
e[e.Sessions = 1] = "Sessions",
e))(x || {})
  , u = (e=>(e[e.Dashboard = 0] = "Dashboard",
e[e.WebsiteStats = 1] = "WebsiteStats",
e[e.GeneralSettings = 2] = "GeneralSettings",
e[e.WhiteList = 3] = "WhiteList",
e[e.Limits = 4] = "Limits",
e[e.Notifications = 5] = "Notifications",
e[e.Pomodoro = 6] = "Pomodoro",
e[e.About = 7] = "About",
e))(u || {})
  , J = (e=>(e[e.Limits = 0] = "Limits",
e[e.Notifications = 1] = "Notifications",
e))(J || {})
  , Q = (e=>(e[e.WebSite = 0] = "WebSite",
e[e.Document = 1] = "Document",
e))(Q || {});
function y(e) {
    return y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    y(e)
}
function A(e) {
    if (e === null || e === !0 || e === !1)
        return NaN;
    var t = Number(e);
    return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
}
function v(e, t) {
    if (t.length < e)
        throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
}
function T(e) {
    v(1, arguments);
    var t = Object.prototype.toString.call(e);
    return e instanceof Date || y(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),
    console.warn(new Error().stack)),
    new Date(NaN))
}
function X(e, t) {
    v(2, arguments);
    var n = T(e)
      , s = A(t);
    if (isNaN(s))
        return new Date(NaN);
    if (!s)
        return n;
    var o = n.getDate()
      , a = new Date(n.getTime());
    a.setMonth(n.getMonth() + s + 1, 0);
    var r = a.getDate();
    return o >= r ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), o),
    n)
}
var Z = {};
function k() {
    return Z
}
function P(e, t) {
    var n, s, o, a, r, i, c, d;
    v(1, arguments);
    var _ = k()
      , h = A((n = (s = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (r = t.locale) === null || r === void 0 || (i = r.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : _.weekStartsOn) !== null && s !== void 0 ? s : (c = _.locale) === null || c === void 0 || (d = c.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
    if (!(h >= 0 && h <= 6))
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var l = T(e)
      , O = l.getDay()
      , m = (O < h ? 7 : 0) + O - h;
    return l.setDate(l.getDate() - m),
    l.setHours(0, 0, 0, 0),
    l
}
var We = 6e4
  , Ye = 36e5
  , Be = 1e3;
function $(e) {
    v(1, arguments);
    var t = T(e)
      , n = t.getMonth();
    return t.setFullYear(t.getFullYear(), n + 1, 0),
    t.setHours(23, 59, 59, 999),
    t
}
function H(e) {
    v(1, arguments);
    var t = T(e);
    return t.setDate(1),
    t.setHours(0, 0, 0, 0),
    t
}
function ee(e, t) {
    var n, s, o, a, r, i, c, d;
    v(1, arguments);
    var _ = k()
      , h = A((n = (s = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (r = t.locale) === null || r === void 0 || (i = r.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : _.weekStartsOn) !== null && s !== void 0 ? s : (c = _.locale) === null || c === void 0 || (d = c.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
    if (!(h >= 0 && h <= 6))
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var l = T(e)
      , O = l.getDay()
      , m = (O < h ? -7 : 0) + 6 - (O - h);
    return l.setDate(l.getDate() + m),
    l.setHours(23, 59, 59, 999),
    l
}
function L(e, t) {
    v(2, arguments);
    var n = A(t);
    return X(e, -n)
}
function b() {
    return new Date().toLocaleDateString("en-US")
}
const te = [new Date, new Date]
  , ne = [P(new Date), ee(new Date)]
  , se = [H(new Date), $(new Date)]
  , ae = [H(L(new Date, 1)), $(L(new Date, 1))];
function je() {
    return [{
        label: g.global.t("today.message"),
        range: te
    }, {
        label: g.global.t("week.message"),
        range: ne
    }, {
        label: g.global.t("month.message"),
        range: se
    }, {
        label: g.global.t("lastMonth.message"),
        range: ae
    }]
}
function Ge(e, t) {
    return e.getFullYear() == t.getFullYear() && e.getMonth() == t.getMonth() && e.getDate() == t.getDate() && e.getHours() == t.getHours() && e.getMinutes() == t.getMinutes() && e.getSeconds() == t.getSeconds()
}
function oe(...e) {}
const F = {
    log: oe
};
class re {
    constructor() {
        f(this, "url", "");
        f(this, "favicon", "");
        f(this, "summaryTime", 0);
        f(this, "counter", 0);
        f(this, "days", [])
    }
    init(t) {
        this.url = t
    }
    incSummaryTime() {
        this.summaryTime += 1;
        const t = this.days.find(n=>n.date == b());
        t === void 0 ? this.addNewDay().incSummaryTime() : t.incSummaryTime()
    }
    incCounter() {
        this.counter += 1;
        const t = this.days.find(n=>n.date == b());
        t === void 0 ? this.addNewDay().incCounter() : t.incCounter()
    }
    addNewDay() {
        const t = new U;
        return t.init(b()),
        this.days.push(t),
        t
    }
    deserialize(t) {
        var n;
        return this.url = t.url,
        this.counter = t.counter,
        this.favicon = t.favicon,
        this.summaryTime = t.summaryTime,
        ((n = t.days) == null ? void 0 : n.length) > 0 && (this.days = t.days.map(s=>new U().deserialize(s))),
        this
    }
    setFavicon(t) {
        this.favicon = t
    }
}
class U {
    constructor() {
        f(this, "counter", 0);
        f(this, "date", "");
        f(this, "summary", 0)
    }
    init(t) {
        this.date = t
    }
    incSummaryTime() {
        this.summary += 1
    }
    incCounter() {
        this.counter += 1
    }
    deserialize(t) {
        return this.counter = t.counter,
        this.date = t.date,
        this.summary = t.summary,
        this
    }
}
class ie {
    constructor() {
        f(this, "domain", "");
        f(this, "intervals", []);
        f(this, "day", "")
    }
    init(t, n) {
        this.domain = n,
        this.intervals = [],
        this.day = t
    }
    addInterval() {
        const t = this.getCurrentStringDate();
        this.intervals.push(t + "-" + t),
        F.log(`Add interval ${this.domain} - ${t} - ${t}`)
    }
    closeInterval() {
        const t = this.getCurrentStringDate()
          , n = this.intervals[this.intervals.length - 1];
        n != null && n.split("-")[0] == n.split("-")[1] && (this.intervals.pop(),
        this.intervals.push(n.split("-")[0] + "-" + t),
        F.log(`Close interval ${this.domain} - ${n.split("-")[0]} - ${t}`))
    }
    deserialize(t) {
        return this.domain = t.domain,
        this.day = t.day,
        this.intervals = t.intervals,
        this
    }
    getCurrentStringDate() {
        const t = new Date;
        return t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds()
    }
}
var p = (e=>(e["Sound 1"] = "1.mp3",
e["Sound 2"] = "2.mp3",
e["Sound 3"] = "3.mp3",
e["Sound 4"] = "4.mp3",
e["Sound 5"] = "5.mp3",
e["Sound 6"] = "6.mp3",
e["Sound 7"] = "7.mp3",
e["Sound 8"] = "8.mp3",
e["Sound 9"] = "9.mp3",
e["Sound 10"] = "10.mp3",
e["Sound 11"] = "11.mp3",
e["Sound 12"] = "12.mp3",
e["Sound 13"] = "13.mp3",
e))(p || {});
const w = 60
  , M = 60 * w
  , le = 1e3
  , ue = 60 * le
  , ce = 60 * ue;
function C(e) {
    const t = new Date(e);
    return t.setMinutes(t.getMinutes() - t.getTimezoneOffset()),
    t
}
function Ke(e, t) {
    return (C(t).valueOf() - C(e).valueOf()) / 864e5 + 1
}
var de = (e=>(e.BLACK_LIST = "black_list",
e.RESTRICTION_LIST = "restriction_list",
e.NOTIFICATION_LIST = "notification_list",
e.NOTIFICATION_MESSAGE = "notification_message",
e.INTERVAL_INACTIVITY = "inactivity_interval",
e.DARK_MODE = "night_mode",
e.VIEW_TIME_IN_BADGE = "view_time_in_badge",
e.SHOW_CHANGELOG = "show_changelog",
e.BLOCK_DEFERRAL = "view_block_deferral",
e.BLOCK_DEFERRAL_TIME = "view_block_deferral_time",
e.DAILY_SUMMARY_NOTIFICATION_TIME = "daily-summary-notification-time",
e.DAILY_NOTIFICATION = "daily_notification",
e.REVIEW_DATE = "review_date",
e.REVIEW_PROMPT_AT = "review_prompt_at",
e.INSTALL_DATE = "install-date",
e.PROMO_CLEAR_YOUTUBE_ON_LIMITS = "promo-clear-youtube-on-limits",
e.PROMO_CLEAR_YOUTUBE_ON_BLOCK = "promo-clear-youtube-on-block",
e.IS_POMODORO_ENABLED = "is-pomodoro-enabled",
e.POMODORO_START_TIME = "pomodoro-start-time",
e.POMODORO_INTERVAL_WORK = "pomodoro-interval-work",
e.POMODORO_AUDIO_AFTER_WORK = "pomodoro-audio-after-work",
e.POMODORO_AUDIO_AFTER_REST = "pomodoro-audio-after-rest",
e.POMODORO_AUDIO_AFTER_FINISHED = "pomodoro-audio-after-finished",
e.POMODORO_INTERVAL_REST = "pomodoro-interval-rest",
e.POMODORO_FREQUENCY = "pomodoro-frequency",
e))(de || {})
  , S = (e=>(e.TABS = "tabs",
e.TIMEINTERVAL_LIST = "time_interval",
e))(S || {});
function fe(e) {
    switch (e) {
    case "tabs":
        return new re;
    case "time_interval":
        return new ie
    }
}
var _e = (e=>(e[e.Seconds_30 = 30] = "Seconds_30",
e[e.Seconds_45 = 45] = "Seconds_45",
e[e.Min_1 = 60] = "Min_1",
e[e.Min_2 = 120] = "Min_2",
e[e.Min_5 = 300] = "Min_5",
e[e.Min_10 = 600] = "Min_10",
e[e.Min_20 = 1200] = "Min_20",
e[e.Min_30 = 1800] = "Min_30",
e))(_e || {});
const he = "You have spent a lot of time on this site"
  , Oe = 30
  , me = !1
  , ge = !0
  , De = !0
  , ve = 20 * ce / 1e3
  , we = !0
  , Ee = !1
  , Te = !1
  , Me = !1
  , Ae = 25 * w
  , pe = 5 * w
  , be = 3
  , Re = p["Sound 3"]
  , ye = p["Sound 8"]
  , Se = p["Sound 10"];
function Ne(e) {
    switch (e) {
    case "black_list":
        return [];
    case "restriction_list":
        return [];
    case "notification_list":
        return [];
    case "notification_message":
        return he;
    case "inactivity_interval":
        return Oe;
    case "night_mode":
        return me;
    case "view_time_in_badge":
        return ge;
    case "view_block_deferral":
        return De;
    case "view_block_deferral_time":
        return [];
    case "daily-summary-notification-time":
        return ve;
    case "daily_notification":
        return we;
    case "show_changelog":
        return Ee;
    case "promo-clear-youtube-on-block":
    case "promo-clear-youtube-on-limits":
        return Te;
    case "is-pomodoro-enabled":
        return Me;
    case "pomodoro-interval-work":
        return Ae;
    case "pomodoro-interval-rest":
        return pe;
    case "pomodoro-frequency":
        return be;
    case "pomodoro-audio-after-work":
        return Re;
    case "pomodoro-audio-after-rest":
        return ye;
    case "pomodoro-audio-after-finished":
        return Se
    }
}
function Ie(e) {
    for (const t in e)
        if (e.hasOwnProperty(t))
            return !1;
    return JSON.stringify(e) === JSON.stringify({})
}
function ze(e, t) {
    if (e === t)
        return !0;
    var n = function(s) {
        return s.indexOf("www.") > -1 ? s.split("www.")[1] : s
    };
    return n(e) === n(t)
}
function qe(e, t) {
    return (e / t * 100).toFixed(2)
}
class Le {
    async getDeserializeList(t) {
        return new Promise(async n=>{
            const o = (await E.storage.local.get(t))[t];
            if (o != null) {
                let a = [];
                for (let r = 0; r < o.length; r++) {
                    const i = fe(t);
                    a.push(i.deserialize(o[r]))
                }
                return n(a)
            } else
                n([])
        }
        )
    }
    async saveTabs(t) {
        return await E.storage.local.set({
            [S.TABS]: t
        })
    }
    async saveIntervalList(t) {
        return await E.storage.local.set({
            [S.TIMEINTERVAL_LIST]: t
        })
    }
    async saveValue(t, n) {
        return await E.storage.local.set({
            [t]: n
        })
    }
    async getValue(t, n) {
        let s = await E.storage.local.get(t);
        return Ie(s) && n != null ? (await this.saveValue(t, n),
        n) : s[t]
    }
}
function Fe() {
    return new Le
}
const D = class {
    constructor() {
        f(this, "_settings", new Map);
        if (D.instance)
            throw new Error("Error - use Settings.getInstance()")
    }
    static getInstance() {
        return D.instance = D.instance || new D,
        D.instance
    }
    async getSetting(t) {
        return this._settings.has(t) ? this._settings.get(t) : await this.getValue(t)
    }
    async reloadSetting(t) {
        await this.getValue(t)
    }
    async getValue(t) {
        const s = await Fe().getValue(t, Ne(t));
        return this._settings.set(t, s),
        s
    }
}
;
let R = D;
f(R, "instance");
const Ue = ()=>{}
;
function xe(e, t, n) {
    let s;
    j(n) ? s = {
        evaluating: n
    } : s = n || {};
    const {lazy: o=!1, evaluating: a=void 0, shallow: r=!0, onError: i=Ue} = s
      , c = N(!o)
      , d = r ? G(t) : N(t);
    let _ = 0;
    return K(async h=>{
        if (!c.value)
            return;
        _++;
        const l = _;
        let O = !1;
        a && Promise.resolve().then(()=>{
            a.value = !0
        }
        );
        try {
            const m = await e(W=>{
                h(()=>{
                    a && (a.value = !1),
                    O || W()
                }
                )
            }
            );
            l === _ && (d.value = m)
        } catch (m) {
            i(m)
        } finally {
            a && l === _ && (a.value = !1),
            O = !0
        }
    }
    ),
    o ? z(()=>(c.value = !0,
    d.value)) : d
}
function Je(e, t) {
    return e * M + t * w
}
function Qe(e) {
    const t = Math.floor(e / M)
      , n = e % M
      , s = Math.floor(n / w);
    return {
        hours: t,
        minutes: s
    }
}
function Ce(e) {
    let t = Math.floor(e / 3600 / 24);
    const n = e % (3600 * 24);
    let s = Math.floor(n / 3600);
    const o = e % 3600;
    let a = Math.floor(o / 60)
      , r = o % 60;
    function i(l, O, m=!1) {
        return l > 0 ? `${m ? V(l) : l} ${O}` : ""
    }
    const c = i(t, g.global.t("d.message"))
      , d = i(s, g.global.t("h.message"), c != "")
      , _ = i(a, g.global.t("m.message"), d != "")
      , h = i(r, g.global.t("s.message"), _ != "");
    return `${c} ${d} ${_} ${h}`
}
function Xe(e) {
    const t = e % 86400;
    let n = Math.floor(t / 3600);
    const s = e % 3600;
    let o = Math.floor(s / 60);
    function a(r, i, c=!1) {
        return `${c ? V(r) : r} ${i}`
    }
    return `${a(n, I().h.message)} ${a(o, I().m.message, !0)}`
}
function V(e) {
    return e < 10 ? `0${e}` : e
}
function Ze(e) {
    const t = e.split(":");
    return Number(t[0]) * M + Number(t[1]) * w + Number(t[2])
}
function Pe(e) {
    const t = Math.floor(e * w);
    return Ce(t)
}
function et(e) {
    switch (e) {
    case u.Dashboard:
        return "dashboard";
    case u.WebsiteStats:
        return "website-stats";
    case u.GeneralSettings:
        return "settings";
    case u.About:
        return "about";
    case u.Limits:
        return "limits";
    case u.WhiteList:
        return "whitelist";
    case u.Notifications:
        return "notifications";
    case u.Pomodoro:
        return "pomodoro"
    }
}
function tt(e) {
    switch (e) {
    case "dashboard":
        return u.Dashboard;
    case "website-stats":
        return u.WebsiteStats;
    case "settings":
        return u.GeneralSettings;
    case "about":
        return u.About;
    case "limits":
        return u.Limits;
    case "whitelist":
        return u.WhiteList;
    case "notifications":
        return u.Notifications;
    case "pomodoro":
        return u.Pomodoro
    }
}
const nt = "/assets/icons/close.svg"
  , st = "https://chromewebstore.google.com/detail/web-activity-time-tracker/hhfnghjdeddcfegfekjeihfmbjenlomm/reviews"
  , at = "https://chromewebstore.google.com/detail/web-activity-time-tracker/hhfnghjdeddcfegfekjeihfmbjenlomm/support"
  , ot = "https://chromewebstore.google.com/detail/clean-youtube-update-yout/kalhfjomailhflienkfajocjodgjipie";
export {xe as $, F as A, De as B, st as C, me as D, ot as E, at as F, S as G, Ze as H, Me as I, Pe as J, tt as K, J as L, T as M, he as N, y as O, p as P, X as Q, P as R, de as S, ne as T, k as U, ge as V, Ye as W, We as X, Be as Y, L as Z, nt as _, je as a, et as a0, qe as a1, x as a2, re as a3, Ke as a4, ee as a5, ue as a6, oe as a7, Xe as a8, R as b, Ce as c, Ge as d, u as e, q as f, Ve as g, Oe as h, Fe as i, Ee as j, _e as k, b as l, Q as m, ze as n, Je as o, Qe as p, we as q, v as r, ve as s, A as t, Ae as u, pe as v, be as w, Re as x, ye as y, Se as z};
