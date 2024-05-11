import {B as Kr} from "./browser-polyfill.js";
function En(e, t) {
    const s = Object.create(null)
      , n = e.split(",");
    for (let o = 0; o < n.length; o++)
        s[n[o]] = !0;
    return t ? o=>!!s[o.toLowerCase()] : o=>!!s[o]
}
function xs(e) {
    if (M(e)) {
        const t = {};
        for (let s = 0; s < e.length; s++) {
            const n = e[s]
              , o = oe(n) ? Jr(n) : xs(n);
            if (o)
                for (const i in o)
                    t[i] = o[i]
        }
        return t
    } else {
        if (oe(e))
            return e;
        if (te(e))
            return e
    }
}
const qr = /;(?![^(]*\))/g
  , Zr = /:([^]+)/
  , Gr = /\/\*.*?\*\//gs;
function Jr(e) {
    const t = {};
    return e.replace(Gr, "").split(qr).forEach(s=>{
        if (s) {
            const n = s.split(Zr);
            n.length > 1 && (t[n[0].trim()] = n[1].trim())
        }
    }
    ),
    t
}
function Ns(e) {
    let t = "";
    if (oe(e))
        t = e;
    else if (M(e))
        for (let s = 0; s < e.length; s++) {
            const n = Ns(e[s]);
            n && (t += n + " ")
        }
    else if (te(e))
        for (const s in e)
            e[s] && (t += s + " ");
    return t.trim()
}
function Yv(e) {
    if (!e)
        return null;
    let {class: t, style: s} = e;
    return t && !oe(t) && (e.class = Ns(t)),
    s && (e.style = xs(s)),
    e
}
const Xr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Qr = En(Xr);
function hi(e) {
    return !!e || e === ""
}
function ea(e, t) {
    if (e.length !== t.length)
        return !1;
    let s = !0;
    for (let n = 0; s && n < e.length; n++)
        s = cs(e[n], t[n]);
    return s
}
function cs(e, t) {
    if (e === t)
        return !0;
    let s = io(e)
      , n = io(t);
    if (s || n)
        return s && n ? e.getTime() === t.getTime() : !1;
    if (s = Jt(e),
    n = Jt(t),
    s || n)
        return e === t;
    if (s = M(e),
    n = M(t),
    s || n)
        return s && n ? ea(e, t) : !1;
    if (s = te(e),
    n = te(t),
    s || n) {
        if (!s || !n)
            return !1;
        const o = Object.keys(e).length
          , i = Object.keys(t).length;
        if (o !== i)
            return !1;
        for (const r in e) {
            const a = e.hasOwnProperty(r)
              , c = t.hasOwnProperty(r);
            if (a && !c || !a && c || !cs(e[r], t[r]))
                return !1
        }
    }
    return String(e) === String(t)
}
function Sn(e, t) {
    return e.findIndex(s=>cs(s, t))
}
const Hv = e=>oe(e) ? e : e == null ? "" : M(e) || te(e) && (e.toString === _i || !B(e.toString)) ? JSON.stringify(e, bi, 2) : String(e)
  , bi = (e,t)=>t && t.__v_isRef ? bi(e, t.value) : Dt(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((s,[n,o])=>(s[`${n} =>`] = o,
    s), {})
} : Ot(t) ? {
    [`Set(${t.size})`]: [...t.values()]
} : te(t) && !M(t) && !Ti(t) ? String(t) : t
  , ne = {}
  , St = []
  , Me = ()=>{}
  , ta = ()=>!1
  , sa = /^on[^a-z]/
  , Os = e=>sa.test(e)
  , Dn = e=>e.startsWith("onUpdate:")
  , me = Object.assign
  , Cn = (e,t)=>{
    const s = e.indexOf(t);
    s > -1 && e.splice(s, 1)
}
  , na = Object.prototype.hasOwnProperty
  , Z = (e,t)=>na.call(e, t)
  , M = Array.isArray
  , Dt = e=>ls(e) === "[object Map]"
  , Ot = e=>ls(e) === "[object Set]"
  , io = e=>ls(e) === "[object Date]"
  , B = e=>typeof e == "function"
  , oe = e=>typeof e == "string"
  , Jt = e=>typeof e == "symbol"
  , te = e=>e !== null && typeof e == "object"
  , yi = e=>te(e) && B(e.then) && B(e.catch)
  , _i = Object.prototype.toString
  , ls = e=>_i.call(e)
  , oa = e=>ls(e).slice(8, -1)
  , Ti = e=>ls(e) === "[object Object]"
  , An = e=>oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , Ts = En(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Ps = e=>{
    const t = Object.create(null);
    return s=>t[s] || (t[s] = e(s))
}
  , ia = /-(\w)/g
  , je = Ps(e=>e.replace(ia, (t,s)=>s ? s.toUpperCase() : ""))
  , ra = /\B([A-Z])/g
  , yt = Ps(e=>e.replace(ra, "-$1").toLowerCase())
  , Ls = Ps(e=>e.charAt(0).toUpperCase() + e.slice(1))
  , Zs = Ps(e=>e ? `on${Ls(e)}` : "")
  , Xt = (e,t)=>!Object.is(e, t)
  , vs = (e,t)=>{
    for (let s = 0; s < e.length; s++)
        e[s](t)
}
  , ws = (e,t,s)=>{
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: s
    })
}
  , Es = e=>{
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , aa = e=>{
    const t = oe(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let ro;
const ca = ()=>ro || (ro = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let Se;
class vi {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = Se,
        !t && Se && (this.index = (Se.scopes || (Se.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const s = Se;
            try {
                return Se = this,
                t()
            } finally {
                Se = s
            }
        }
    }
    on() {
        Se = this
    }
    off() {
        Se = this.parent
    }
    stop(t) {
        if (this._active) {
            let s, n;
            for (s = 0,
            n = this.effects.length; s < n; s++)
                this.effects[s].stop();
            for (s = 0,
            n = this.cleanups.length; s < n; s++)
                this.cleanups[s]();
            if (this.scopes)
                for (s = 0,
                n = this.scopes.length; s < n; s++)
                    this.scopes[s].stop(!0);
            if (!this.detached && this.parent && !t) {
                const o = this.parent.scopes.pop();
                o && o !== this && (this.parent.scopes[this.index] = o,
                o.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function la(e) {
    return new vi(e)
}
function ua(e, t=Se) {
    t && t.active && t.effects.push(e)
}
function fa() {
    return Se
}
function zv(e) {
    Se && Se.cleanups.push(e)
}
const In = e=>{
    const t = new Set(e);
    return t.w = 0,
    t.n = 0,
    t
}
  , $i = e=>(e.w & nt) > 0
  , wi = e=>(e.n & nt) > 0
  , ma = ({deps: e})=>{
    if (e.length)
        for (let t = 0; t < e.length; t++)
            e[t].w |= nt
}
  , da = e=>{
    const {deps: t} = e;
    if (t.length) {
        let s = 0;
        for (let n = 0; n < t.length; n++) {
            const o = t[n];
            $i(o) && !wi(o) ? o.delete(e) : t[s++] = o,
            o.w &= ~nt,
            o.n &= ~nt
        }
        t.length = s
    }
}
  , Ss = new WeakMap;
let Yt = 0
  , nt = 1;
const on = 30;
let Pe;
const ht = Symbol("")
  , rn = Symbol("");
class kn {
    constructor(t, s=null, n) {
        this.fn = t,
        this.scheduler = s,
        this.active = !0,
        this.deps = [],
        this.parent = void 0,
        ua(this, n)
    }
    run() {
        if (!this.active)
            return this.fn();
        let t = Pe
          , s = tt;
        for (; t; ) {
            if (t === this)
                return;
            t = t.parent
        }
        try {
            return this.parent = Pe,
            Pe = this,
            tt = !0,
            nt = 1 << ++Yt,
            Yt <= on ? ma(this) : ao(this),
            this.fn()
        } finally {
            Yt <= on && da(this),
            nt = 1 << --Yt,
            Pe = this.parent,
            tt = s,
            this.parent = void 0,
            this.deferStop && this.stop()
        }
    }
    stop() {
        Pe === this ? this.deferStop = !0 : this.active && (ao(this),
        this.onStop && this.onStop(),
        this.active = !1)
    }
}
function ao(e) {
    const {deps: t} = e;
    if (t.length) {
        for (let s = 0; s < t.length; s++)
            t[s].delete(e);
        t.length = 0
    }
}
let tt = !0;
const Ei = [];
function Pt() {
    Ei.push(tt),
    tt = !1
}
function Lt() {
    const e = Ei.pop();
    tt = e === void 0 ? !0 : e
}
function we(e, t, s) {
    if (tt && Pe) {
        let n = Ss.get(e);
        n || Ss.set(e, n = new Map);
        let o = n.get(s);
        o || n.set(s, o = In()),
        Si(o)
    }
}
function Si(e, t) {
    let s = !1;
    Yt <= on ? wi(e) || (e.n |= nt,
    s = !$i(e)) : s = !e.has(Pe),
    s && (e.add(Pe),
    Pe.deps.push(e))
}
function Ke(e, t, s, n, o, i) {
    const r = Ss.get(e);
    if (!r)
        return;
    let a = [];
    if (t === "clear")
        a = [...r.values()];
    else if (s === "length" && M(e)) {
        const c = Number(n);
        r.forEach((l,f)=>{
            (f === "length" || f >= c) && a.push(l)
        }
        )
    } else
        switch (s !== void 0 && a.push(r.get(s)),
        t) {
        case "add":
            M(e) ? An(s) && a.push(r.get("length")) : (a.push(r.get(ht)),
            Dt(e) && a.push(r.get(rn)));
            break;
        case "delete":
            M(e) || (a.push(r.get(ht)),
            Dt(e) && a.push(r.get(rn)));
            break;
        case "set":
            Dt(e) && a.push(r.get(ht));
            break
        }
    if (a.length === 1)
        a[0] && an(a[0]);
    else {
        const c = [];
        for (const l of a)
            l && c.push(...l);
        an(In(c))
    }
}
function an(e, t) {
    const s = M(e) ? e : [...e];
    for (const n of s)
        n.computed && co(n);
    for (const n of s)
        n.computed || co(n)
}
function co(e, t) {
    (e !== Pe || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
function ga(e, t) {
    var s;
    return (s = Ss.get(e)) === null || s === void 0 ? void 0 : s.get(t)
}
const pa = En("__proto__,__v_isRef,__isVue")
  , Di = new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e !== "arguments" && e !== "caller").map(e=>Symbol[e]).filter(Jt))
  , ha = xn()
  , ba = xn(!1, !0)
  , ya = xn(!0)
  , lo = _a();
function _a() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t=>{
        e[t] = function(...s) {
            const n = K(this);
            for (let i = 0, r = this.length; i < r; i++)
                we(n, "get", i + "");
            const o = n[t](...s);
            return o === -1 || o === !1 ? n[t](...s.map(K)) : o
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t=>{
        e[t] = function(...s) {
            Pt();
            const n = K(this)[t].apply(this, s);
            return Lt(),
            n
        }
    }
    ),
    e
}
function Ta(e) {
    const t = K(this);
    return we(t, "has", e),
    t.hasOwnProperty(e)
}
function xn(e=!1, t=!1) {
    return function(n, o, i) {
        if (o === "__v_isReactive")
            return !e;
        if (o === "__v_isReadonly")
            return e;
        if (o === "__v_isShallow")
            return t;
        if (o === "__v_raw" && i === (e ? t ? Ma : xi : t ? ki : Ii).get(n))
            return n;
        const r = M(n);
        if (!e) {
            if (r && Z(lo, o))
                return Reflect.get(lo, o, i);
            if (o === "hasOwnProperty")
                return Ta
        }
        const a = Reflect.get(n, o, i);
        return (Jt(o) ? Di.has(o) : pa(o)) || (e || we(n, "get", o),
        t) ? a : fe(a) ? r && An(o) ? a : a.value : te(a) ? e ? Ni(a) : Pn(a) : a
    }
}
const va = Ci()
  , $a = Ci(!0);
function Ci(e=!1) {
    return function(s, n, o, i) {
        let r = s[n];
        if (kt(r) && fe(r) && !fe(o))
            return !1;
        if (!e && (!Ds(o) && !kt(o) && (r = K(r),
        o = K(o)),
        !M(s) && fe(r) && !fe(o)))
            return r.value = o,
            !0;
        const a = M(s) && An(n) ? Number(n) < s.length : Z(s, n)
          , c = Reflect.set(s, n, o, i);
        return s === K(i) && (a ? Xt(o, r) && Ke(s, "set", n, o) : Ke(s, "add", n, o)),
        c
    }
}
function wa(e, t) {
    const s = Z(e, t);
    e[t];
    const n = Reflect.deleteProperty(e, t);
    return n && s && Ke(e, "delete", t, void 0),
    n
}
function Ea(e, t) {
    const s = Reflect.has(e, t);
    return (!Jt(t) || !Di.has(t)) && we(e, "has", t),
    s
}
function Sa(e) {
    return we(e, "iterate", M(e) ? "length" : ht),
    Reflect.ownKeys(e)
}
const Ai = {
    get: ha,
    set: va,
    deleteProperty: wa,
    has: Ea,
    ownKeys: Sa
}
  , Da = {
    get: ya,
    set(e, t) {
        return !0
    },
    deleteProperty(e, t) {
        return !0
    }
}
  , Ca = me({}, Ai, {
    get: ba,
    set: $a
})
  , Nn = e=>e
  , Ms = e=>Reflect.getPrototypeOf(e);
function ms(e, t, s=!1, n=!1) {
    e = e.__v_raw;
    const o = K(e)
      , i = K(t);
    s || (t !== i && we(o, "get", t),
    we(o, "get", i));
    const {has: r} = Ms(o)
      , a = n ? Nn : s ? Mn : Qt;
    if (r.call(o, t))
        return a(e.get(t));
    if (r.call(o, i))
        return a(e.get(i));
    e !== o && e.get(t)
}
function ds(e, t=!1) {
    const s = this.__v_raw
      , n = K(s)
      , o = K(e);
    return t || (e !== o && we(n, "has", e),
    we(n, "has", o)),
    e === o ? s.has(e) : s.has(e) || s.has(o)
}
function gs(e, t=!1) {
    return e = e.__v_raw,
    !t && we(K(e), "iterate", ht),
    Reflect.get(e, "size", e)
}
function uo(e) {
    e = K(e);
    const t = K(this);
    return Ms(t).has.call(t, e) || (t.add(e),
    Ke(t, "add", e, e)),
    this
}
function fo(e, t) {
    t = K(t);
    const s = K(this)
      , {has: n, get: o} = Ms(s);
    let i = n.call(s, e);
    i || (e = K(e),
    i = n.call(s, e));
    const r = o.call(s, e);
    return s.set(e, t),
    i ? Xt(t, r) && Ke(s, "set", e, t) : Ke(s, "add", e, t),
    this
}
function mo(e) {
    const t = K(this)
      , {has: s, get: n} = Ms(t);
    let o = s.call(t, e);
    o || (e = K(e),
    o = s.call(t, e)),
    n && n.call(t, e);
    const i = t.delete(e);
    return o && Ke(t, "delete", e, void 0),
    i
}
function go() {
    const e = K(this)
      , t = e.size !== 0
      , s = e.clear();
    return t && Ke(e, "clear", void 0, void 0),
    s
}
function ps(e, t) {
    return function(n, o) {
        const i = this
          , r = i.__v_raw
          , a = K(r)
          , c = t ? Nn : e ? Mn : Qt;
        return !e && we(a, "iterate", ht),
        r.forEach((l,f)=>n.call(o, c(l), c(f), i))
    }
}
function hs(e, t, s) {
    return function(...n) {
        const o = this.__v_raw
          , i = K(o)
          , r = Dt(i)
          , a = e === "entries" || e === Symbol.iterator && r
          , c = e === "keys" && r
          , l = o[e](...n)
          , f = s ? Nn : t ? Mn : Qt;
        return !t && we(i, "iterate", c ? rn : ht),
        {
            next() {
                const {value: p, done: g} = l.next();
                return g ? {
                    value: p,
                    done: g
                } : {
                    value: a ? [f(p[0]), f(p[1])] : f(p),
                    done: g
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Ge(e) {
    return function(...t) {
        return e === "delete" ? !1 : this
    }
}
function Aa() {
    const e = {
        get(i) {
            return ms(this, i)
        },
        get size() {
            return gs(this)
        },
        has: ds,
        add: uo,
        set: fo,
        delete: mo,
        clear: go,
        forEach: ps(!1, !1)
    }
      , t = {
        get(i) {
            return ms(this, i, !1, !0)
        },
        get size() {
            return gs(this)
        },
        has: ds,
        add: uo,
        set: fo,
        delete: mo,
        clear: go,
        forEach: ps(!1, !0)
    }
      , s = {
        get(i) {
            return ms(this, i, !0)
        },
        get size() {
            return gs(this, !0)
        },
        has(i) {
            return ds.call(this, i, !0)
        },
        add: Ge("add"),
        set: Ge("set"),
        delete: Ge("delete"),
        clear: Ge("clear"),
        forEach: ps(!0, !1)
    }
      , n = {
        get(i) {
            return ms(this, i, !0, !0)
        },
        get size() {
            return gs(this, !0)
        },
        has(i) {
            return ds.call(this, i, !0)
        },
        add: Ge("add"),
        set: Ge("set"),
        delete: Ge("delete"),
        clear: Ge("clear"),
        forEach: ps(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(i=>{
        e[i] = hs(i, !1, !1),
        s[i] = hs(i, !0, !1),
        t[i] = hs(i, !1, !0),
        n[i] = hs(i, !0, !0)
    }
    ),
    [e, s, t, n]
}
const [Ia,ka,xa,Na] = Aa();
function On(e, t) {
    const s = t ? e ? Na : xa : e ? ka : Ia;
    return (n,o,i)=>o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? n : Reflect.get(Z(s, o) && o in n ? s : n, o, i)
}
const Oa = {
    get: On(!1, !1)
}
  , Pa = {
    get: On(!1, !0)
}
  , La = {
    get: On(!0, !1)
}
  , Ii = new WeakMap
  , ki = new WeakMap
  , xi = new WeakMap
  , Ma = new WeakMap;
function Fa(e) {
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
        return 0
    }
}
function Ra(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Fa(oa(e))
}
function Pn(e) {
    return kt(e) ? e : Ln(e, !1, Ai, Oa, Ii)
}
function Wa(e) {
    return Ln(e, !1, Ca, Pa, ki)
}
function Ni(e) {
    return Ln(e, !0, Da, La, xi)
}
function Ln(e, t, s, n, o) {
    if (!te(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const i = o.get(e);
    if (i)
        return i;
    const r = Ra(e);
    if (r === 0)
        return e;
    const a = new Proxy(e,r === 2 ? n : s);
    return o.set(e, a),
    a
}
function Ct(e) {
    return kt(e) ? Ct(e.__v_raw) : !!(e && e.__v_isReactive)
}
function kt(e) {
    return !!(e && e.__v_isReadonly)
}
function Ds(e) {
    return !!(e && e.__v_isShallow)
}
function Oi(e) {
    return Ct(e) || kt(e)
}
function K(e) {
    const t = e && e.__v_raw;
    return t ? K(t) : e
}
function Pi(e) {
    return ws(e, "__v_skip", !0),
    e
}
const Qt = e=>te(e) ? Pn(e) : e
  , Mn = e=>te(e) ? Ni(e) : e;
function Li(e) {
    tt && Pe && (e = K(e),
    Si(e.dep || (e.dep = In())))
}
function Mi(e, t) {
    e = K(e);
    const s = e.dep;
    s && an(s)
}
function fe(e) {
    return !!(e && e.__v_isRef === !0)
}
function Bt(e) {
    return Fi(e, !1)
}
function Kv(e) {
    return Fi(e, !0)
}
function Fi(e, t) {
    return fe(e) ? e : new Ba(e,t)
}
class Ba {
    constructor(t, s) {
        this.__v_isShallow = s,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = s ? t : K(t),
        this._value = s ? t : Qt(t)
    }
    get value() {
        return Li(this),
        this._value
    }
    set value(t) {
        const s = this.__v_isShallow || Ds(t) || kt(t);
        t = s ? t : K(t),
        Xt(t, this._rawValue) && (this._rawValue = t,
        this._value = s ? t : Qt(t),
        Mi(this))
    }
}
function Ua(e) {
    return fe(e) ? e.value : e
}
const ja = {
    get: (e,t,s)=>Ua(Reflect.get(e, t, s)),
    set: (e,t,s,n)=>{
        const o = e[t];
        return fe(o) && !fe(s) ? (o.value = s,
        !0) : Reflect.set(e, t, s, n)
    }
};
function Ri(e) {
    return Ct(e) ? e : new Proxy(e,ja)
}
class Va {
    constructor(t, s, n) {
        this._object = t,
        this._key = s,
        this._defaultValue = n,
        this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return ga(K(this._object), this._key)
    }
}
function qv(e, t, s) {
    const n = e[t];
    return fe(n) ? n : new Va(e,t,s)
}
var Wi;
class Ya {
    constructor(t, s, n, o) {
        this._setter = s,
        this.dep = void 0,
        this.__v_isRef = !0,
        this[Wi] = !1,
        this._dirty = !0,
        this.effect = new kn(t,()=>{
            this._dirty || (this._dirty = !0,
            Mi(this))
        }
        ),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !o,
        this.__v_isReadonly = n
    }
    get value() {
        const t = K(this);
        return Li(t),
        (t._dirty || !t._cacheable) && (t._dirty = !1,
        t._value = t.effect.run()),
        t._value
    }
    set value(t) {
        this._setter(t)
    }
}
Wi = "__v_isReadonly";
function Ha(e, t, s=!1) {
    let n, o;
    const i = B(e);
    return i ? (n = e,
    o = Me) : (n = e.get,
    o = e.set),
    new Ya(n,o,i || !o,s)
}
function st(e, t, s, n) {
    let o;
    try {
        o = n ? e(...n) : e()
    } catch (i) {
        Fs(i, t, s)
    }
    return o
}
function ke(e, t, s, n) {
    if (B(e)) {
        const i = st(e, t, s, n);
        return i && yi(i) && i.catch(r=>{
            Fs(r, t, s)
        }
        ),
        i
    }
    const o = [];
    for (let i = 0; i < e.length; i++)
        o.push(ke(e[i], t, s, n));
    return o
}
function Fs(e, t, s, n=!0) {
    const o = t ? t.vnode : null;
    if (t) {
        let i = t.parent;
        const r = t.proxy
          , a = s;
        for (; i; ) {
            const l = i.ec;
            if (l) {
                for (let f = 0; f < l.length; f++)
                    if (l[f](e, r, a) === !1)
                        return
            }
            i = i.parent
        }
        const c = t.appContext.config.errorHandler;
        if (c) {
            st(c, null, 10, [e, r, a]);
            return
        }
    }
    za(e, s, o, n)
}
function za(e, t, s, n=!0) {
    console.error(e)
}
let es = !1
  , cn = !1;
const pe = [];
let Ue = 0;
const At = [];
let ze = null
  , mt = 0;
const Bi = Promise.resolve();
let Fn = null;
function Ka(e) {
    const t = Fn || Bi;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function qa(e) {
    let t = Ue + 1
      , s = pe.length;
    for (; t < s; ) {
        const n = t + s >>> 1;
        ts(pe[n]) < e ? t = n + 1 : s = n
    }
    return t
}
function Rn(e) {
    (!pe.length || !pe.includes(e, es && e.allowRecurse ? Ue + 1 : Ue)) && (e.id == null ? pe.push(e) : pe.splice(qa(e.id), 0, e),
    Ui())
}
function Ui() {
    !es && !cn && (cn = !0,
    Fn = Bi.then(Vi))
}
function Za(e) {
    const t = pe.indexOf(e);
    t > Ue && pe.splice(t, 1)
}
function Ga(e) {
    M(e) ? At.push(...e) : (!ze || !ze.includes(e, e.allowRecurse ? mt + 1 : mt)) && At.push(e),
    Ui()
}
function po(e, t=es ? Ue + 1 : 0) {
    for (; t < pe.length; t++) {
        const s = pe[t];
        s && s.pre && (pe.splice(t, 1),
        t--,
        s())
    }
}
function ji(e) {
    if (At.length) {
        const t = [...new Set(At)];
        if (At.length = 0,
        ze) {
            ze.push(...t);
            return
        }
        for (ze = t,
        ze.sort((s,n)=>ts(s) - ts(n)),
        mt = 0; mt < ze.length; mt++)
            ze[mt]();
        ze = null,
        mt = 0
    }
}
const ts = e=>e.id == null ? 1 / 0 : e.id
  , Ja = (e,t)=>{
    const s = ts(e) - ts(t);
    if (s === 0) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return s
}
;
function Vi(e) {
    cn = !1,
    es = !0,
    pe.sort(Ja);
    const t = Me;
    try {
        for (Ue = 0; Ue < pe.length; Ue++) {
            const s = pe[Ue];
            s && s.active !== !1 && st(s, null, 14)
        }
    } finally {
        Ue = 0,
        pe.length = 0,
        ji(),
        es = !1,
        Fn = null,
        (pe.length || At.length) && Vi()
    }
}
function Xa(e, t, ...s) {
    if (e.isUnmounted)
        return;
    const n = e.vnode.props || ne;
    let o = s;
    const i = t.startsWith("update:")
      , r = i && t.slice(7);
    if (r && r in n) {
        const f = `${r === "modelValue" ? "model" : r}Modifiers`
          , {number: p, trim: g} = n[f] || ne;
        g && (o = s.map(v=>oe(v) ? v.trim() : v)),
        p && (o = s.map(Es))
    }
    let a, c = n[a = Zs(t)] || n[a = Zs(je(t))];
    !c && i && (c = n[a = Zs(yt(t))]),
    c && ke(c, e, 6, o);
    const l = n[a + "Once"];
    if (l) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[a])
            return;
        e.emitted[a] = !0,
        ke(l, e, 6, o)
    }
}
function Yi(e, t, s=!1) {
    const n = t.emitsCache
      , o = n.get(e);
    if (o !== void 0)
        return o;
    const i = e.emits;
    let r = {}
      , a = !1;
    if (!B(e)) {
        const c = l=>{
            const f = Yi(l, t, !0);
            f && (a = !0,
            me(r, f))
        }
        ;
        !s && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    return !i && !a ? (te(e) && n.set(e, null),
    null) : (M(i) ? i.forEach(c=>r[c] = null) : me(r, i),
    te(e) && n.set(e, r),
    r)
}
function Rs(e, t) {
    return !e || !Os(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    Z(e, t[0].toLowerCase() + t.slice(1)) || Z(e, yt(t)) || Z(e, t))
}
let ge = null
  , Ws = null;
function Cs(e) {
    const t = ge;
    return ge = e,
    Ws = e && e.type.__scopeId || null,
    t
}
function Zv(e) {
    Ws = e
}
function Gv() {
    Ws = null
}
function Qa(e, t=ge, s) {
    if (!t || e._n)
        return e;
    const n = (...o)=>{
        n._d && Do(-1);
        const i = Cs(t);
        let r;
        try {
            r = e(...o)
        } finally {
            Cs(i),
            n._d && Do(1)
        }
        return r
    }
    ;
    return n._n = !0,
    n._c = !0,
    n._d = !0,
    n
}
function Gs(e) {
    const {type: t, vnode: s, proxy: n, withProxy: o, props: i, propsOptions: [r], slots: a, attrs: c, emit: l, render: f, renderCache: p, data: g, setupState: v, ctx: C, inheritAttrs: S} = e;
    let R, I;
    const W = Cs(e);
    try {
        if (s.shapeFlag & 4) {
            const k = o || n;
            R = We(f.call(k, k, p, i, v, g, C)),
            I = c
        } else {
            const k = t;
            R = We(k.length > 1 ? k(i, {
                attrs: c,
                slots: a,
                emit: l
            }) : k(i, null)),
            I = t.props ? c : ec(c)
        }
    } catch (k) {
        Zt.length = 0,
        Fs(k, e, 1),
        R = he(xe)
    }
    let N = R;
    if (I && S !== !1) {
        const k = Object.keys(I)
          , {shapeFlag: $} = N;
        k.length && $ & 7 && (r && k.some(Dn) && (I = tc(I, r)),
        N = ot(N, I))
    }
    return s.dirs && (N = ot(N),
    N.dirs = N.dirs ? N.dirs.concat(s.dirs) : s.dirs),
    s.transition && (N.transition = s.transition),
    R = N,
    Cs(W),
    R
}
const ec = e=>{
    let t;
    for (const s in e)
        (s === "class" || s === "style" || Os(s)) && ((t || (t = {}))[s] = e[s]);
    return t
}
  , tc = (e,t)=>{
    const s = {};
    for (const n in e)
        (!Dn(n) || !(n.slice(9)in t)) && (s[n] = e[n]);
    return s
}
;
function sc(e, t, s) {
    const {props: n, children: o, component: i} = e
      , {props: r, children: a, patchFlag: c} = t
      , l = i.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (s && c >= 0) {
        if (c & 1024)
            return !0;
        if (c & 16)
            return n ? ho(n, r, l) : !!r;
        if (c & 8) {
            const f = t.dynamicProps;
            for (let p = 0; p < f.length; p++) {
                const g = f[p];
                if (r[g] !== n[g] && !Rs(l, g))
                    return !0
            }
        }
    } else
        return (o || a) && (!a || !a.$stable) ? !0 : n === r ? !1 : n ? r ? ho(n, r, l) : !0 : !!r;
    return !1
}
function ho(e, t, s) {
    const n = Object.keys(t);
    if (n.length !== Object.keys(e).length)
        return !0;
    for (let o = 0; o < n.length; o++) {
        const i = n[o];
        if (t[i] !== e[i] && !Rs(s, i))
            return !0
    }
    return !1
}
function nc({vnode: e, parent: t}, s) {
    for (; t && t.subTree === e; )
        (e = t.vnode).el = s,
        t = t.parent
}
const oc = e=>e.__isSuspense;
function ic(e, t) {
    t && t.pendingBranch ? M(e) ? t.effects.push(...e) : t.effects.push(e) : Ga(e)
}
function rc(e, t) {
    if (ae) {
        let s = ae.provides;
        const n = ae.parent && ae.parent.provides;
        n === s && (s = ae.provides = Object.create(n)),
        s[e] = t
    }
}
function Ht(e, t, s=!1) {
    const n = ae || ge;
    if (n) {
        const o = n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides;
        if (o && e in o)
            return o[e];
        if (arguments.length > 1)
            return s && B(t) ? t.call(n.proxy) : t
    }
}
function Jv(e, t) {
    return Wn(e, null, t)
}
const bs = {};
function It(e, t, s) {
    return Wn(e, t, s)
}
function Wn(e, t, {immediate: s, deep: n, flush: o, onTrack: i, onTrigger: r}=ne) {
    const a = fa() === (ae == null ? void 0 : ae.scope) ? ae : null;
    let c, l = !1, f = !1;
    if (fe(e) ? (c = ()=>e.value,
    l = Ds(e)) : Ct(e) ? (c = ()=>e,
    n = !0) : M(e) ? (f = !0,
    l = e.some(N=>Ct(N) || Ds(N)),
    c = ()=>e.map(N=>{
        if (fe(N))
            return N.value;
        if (Ct(N))
            return pt(N);
        if (B(N))
            return st(N, a, 2)
    }
    )) : B(e) ? t ? c = ()=>st(e, a, 2) : c = ()=>{
        if (!(a && a.isUnmounted))
            return p && p(),
            ke(e, a, 3, [g])
    }
    : c = Me,
    t && n) {
        const N = c;
        c = ()=>pt(N())
    }
    let p, g = N=>{
        p = I.onStop = ()=>{
            st(N, a, 4)
        }
    }
    , v;
    if (is)
        if (g = Me,
        t ? s && ke(t, a, 3, [c(), f ? [] : void 0, g]) : c(),
        o === "sync") {
            const N = Xc();
            v = N.__watcherHandles || (N.__watcherHandles = [])
        } else
            return Me;
    let C = f ? new Array(e.length).fill(bs) : bs;
    const S = ()=>{
        if (I.active)
            if (t) {
                const N = I.run();
                (n || l || (f ? N.some((k,$)=>Xt(k, C[$])) : Xt(N, C))) && (p && p(),
                ke(t, a, 3, [N, C === bs ? void 0 : f && C[0] === bs ? [] : C, g]),
                C = N)
            } else
                I.run()
    }
    ;
    S.allowRecurse = !!t;
    let R;
    o === "sync" ? R = S : o === "post" ? R = ()=>ve(S, a && a.suspense) : (S.pre = !0,
    a && (S.id = a.uid),
    R = ()=>Rn(S));
    const I = new kn(c,R);
    t ? s ? S() : C = I.run() : o === "post" ? ve(I.run.bind(I), a && a.suspense) : I.run();
    const W = ()=>{
        I.stop(),
        a && a.scope && Cn(a.scope.effects, I)
    }
    ;
    return v && v.push(W),
    W
}
function ac(e, t, s) {
    const n = this.proxy
      , o = oe(e) ? e.includes(".") ? Hi(n, e) : ()=>n[e] : e.bind(n, n);
    let i;
    B(t) ? i = t : (i = t.handler,
    s = t);
    const r = ae;
    xt(this);
    const a = Wn(o, i.bind(n), s);
    return r ? xt(r) : bt(),
    a
}
function Hi(e, t) {
    const s = t.split(".");
    return ()=>{
        let n = e;
        for (let o = 0; o < s.length && n; o++)
            n = n[s[o]];
        return n
    }
}
function pt(e, t) {
    if (!te(e) || e.__v_skip || (t = t || new Set,
    t.has(e)))
        return e;
    if (t.add(e),
    fe(e))
        pt(e.value, t);
    else if (M(e))
        for (let s = 0; s < e.length; s++)
            pt(e[s], t);
    else if (Ot(e) || Dt(e))
        e.forEach(s=>{
            pt(s, t)
        }
        );
    else if (Ti(e))
        for (const s in e)
            pt(e[s], t);
    return e
}
function zi() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Un(()=>{
        e.isMounted = !0
    }
    ),
    Ji(()=>{
        e.isUnmounting = !0
    }
    ),
    e
}
const Ie = [Function, Array]
  , cc = {
    name: "BaseTransition",
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: Ie,
        onEnter: Ie,
        onAfterEnter: Ie,
        onEnterCancelled: Ie,
        onBeforeLeave: Ie,
        onLeave: Ie,
        onAfterLeave: Ie,
        onLeaveCancelled: Ie,
        onBeforeAppear: Ie,
        onAppear: Ie,
        onAfterAppear: Ie,
        onAppearCancelled: Ie
    },
    setup(e, {slots: t}) {
        const s = Mt()
          , n = zi();
        let o;
        return ()=>{
            const i = t.default && Bn(t.default(), !0);
            if (!i || !i.length)
                return;
            let r = i[0];
            if (i.length > 1) {
                for (const S of i)
                    if (S.type !== xe) {
                        r = S;
                        break
                    }
            }
            const a = K(e)
              , {mode: c} = a;
            if (n.isLeaving)
                return Js(r);
            const l = bo(r);
            if (!l)
                return Js(r);
            const f = ss(l, a, n, s);
            ns(l, f);
            const p = s.subTree
              , g = p && bo(p);
            let v = !1;
            const {getTransitionKey: C} = l.type;
            if (C) {
                const S = C();
                o === void 0 ? o = S : S !== o && (o = S,
                v = !0)
            }
            if (g && g.type !== xe && (!dt(l, g) || v)) {
                const S = ss(g, a, n, s);
                if (ns(g, S),
                c === "out-in")
                    return n.isLeaving = !0,
                    S.afterLeave = ()=>{
                        n.isLeaving = !1,
                        s.update.active !== !1 && s.update()
                    }
                    ,
                    Js(r);
                c === "in-out" && l.type !== xe && (S.delayLeave = (R,I,W)=>{
                    const N = qi(n, g);
                    N[String(g.key)] = g,
                    R._leaveCb = ()=>{
                        I(),
                        R._leaveCb = void 0,
                        delete f.delayedLeave
                    }
                    ,
                    f.delayedLeave = W
                }
                )
            }
            return r
        }
    }
}
  , Ki = cc;
function qi(e, t) {
    const {leavingVNodes: s} = e;
    let n = s.get(t.type);
    return n || (n = Object.create(null),
    s.set(t.type, n)),
    n
}
function ss(e, t, s, n) {
    const {appear: o, mode: i, persisted: r=!1, onBeforeEnter: a, onEnter: c, onAfterEnter: l, onEnterCancelled: f, onBeforeLeave: p, onLeave: g, onAfterLeave: v, onLeaveCancelled: C, onBeforeAppear: S, onAppear: R, onAfterAppear: I, onAppearCancelled: W} = t
      , N = String(e.key)
      , k = qi(s, e)
      , $ = (F,z)=>{
        F && ke(F, n, 9, z)
    }
      , j = (F,z)=>{
        const Y = z[1];
        $(F, z),
        M(F) ? F.every(q=>q.length <= 1) && Y() : F.length <= 1 && Y()
    }
      , V = {
        mode: i,
        persisted: r,
        beforeEnter(F) {
            let z = a;
            if (!s.isMounted)
                if (o)
                    z = S || a;
                else
                    return;
            F._leaveCb && F._leaveCb(!0);
            const Y = k[N];
            Y && dt(e, Y) && Y.el._leaveCb && Y.el._leaveCb(),
            $(z, [F])
        },
        enter(F) {
            let z = c
              , Y = l
              , q = f;
            if (!s.isMounted)
                if (o)
                    z = R || c,
                    Y = I || l,
                    q = W || f;
                else
                    return;
            let L = !1;
            const ee = F._enterCb = be=>{
                L || (L = !0,
                be ? $(q, [F]) : $(Y, [F]),
                V.delayedLeave && V.delayedLeave(),
                F._enterCb = void 0)
            }
            ;
            z ? j(z, [F, ee]) : ee()
        },
        leave(F, z) {
            const Y = String(e.key);
            if (F._enterCb && F._enterCb(!0),
            s.isUnmounting)
                return z();
            $(p, [F]);
            let q = !1;
            const L = F._leaveCb = ee=>{
                q || (q = !0,
                z(),
                ee ? $(C, [F]) : $(v, [F]),
                F._leaveCb = void 0,
                k[Y] === e && delete k[Y])
            }
            ;
            k[Y] = e,
            g ? j(g, [F, L]) : L()
        },
        clone(F) {
            return ss(F, t, s, n)
        }
    };
    return V
}
function Js(e) {
    if (Bs(e))
        return e = ot(e),
        e.children = null,
        e
}
function bo(e) {
    return Bs(e) ? e.children ? e.children[0] : void 0 : e
}
function ns(e, t) {
    e.shapeFlag & 6 && e.component ? ns(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Bn(e, t=!1, s) {
    let n = []
      , o = 0;
    for (let i = 0; i < e.length; i++) {
        let r = e[i];
        const a = s == null ? r.key : String(s) + String(r.key != null ? r.key : i);
        r.type === $e ? (r.patchFlag & 128 && o++,
        n = n.concat(Bn(r.children, t, a))) : (t || r.type !== xe) && n.push(a != null ? ot(r, {
            key: a
        }) : r)
    }
    if (o > 1)
        for (let i = 0; i < n.length; i++)
            n[i].patchFlag = -2;
    return n
}
function Xv(e) {
    return B(e) ? {
        setup: e,
        name: e.name
    } : e
}
const zt = e=>!!e.type.__asyncLoader
  , Bs = e=>e.type.__isKeepAlive;
function lc(e, t) {
    Zi(e, "a", t)
}
function uc(e, t) {
    Zi(e, "da", t)
}
function Zi(e, t, s=ae) {
    const n = e.__wdc || (e.__wdc = ()=>{
        let o = s;
        for (; o; ) {
            if (o.isDeactivated)
                return;
            o = o.parent
        }
        return e()
    }
    );
    if (Us(t, n, s),
    s) {
        let o = s.parent;
        for (; o && o.parent; )
            Bs(o.parent.vnode) && fc(n, t, s, o),
            o = o.parent
    }
}
function fc(e, t, s, n) {
    const o = Us(t, e, n, !0);
    jn(()=>{
        Cn(n[t], o)
    }
    , s)
}
function Us(e, t, s=ae, n=!1) {
    if (s) {
        const o = s[e] || (s[e] = [])
          , i = t.__weh || (t.__weh = (...r)=>{
            if (s.isUnmounted)
                return;
            Pt(),
            xt(s);
            const a = ke(t, s, e, r);
            return bt(),
            Lt(),
            a
        }
        );
        return n ? o.unshift(i) : o.push(i),
        i
    }
}
const qe = e=>(t,s=ae)=>(!is || e === "sp") && Us(e, (...n)=>t(...n), s)
  , mc = qe("bm")
  , Un = qe("m")
  , dc = qe("bu")
  , Gi = qe("u")
  , Ji = qe("bum")
  , jn = qe("um")
  , gc = qe("sp")
  , pc = qe("rtg")
  , hc = qe("rtc");
function bc(e, t=ae) {
    Us("ec", e, t)
}
function Qv(e, t) {
    const s = ge;
    if (s === null)
        return e;
    const n = Vs(s) || s.proxy
      , o = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
        let[r,a,c,l=ne] = t[i];
        r && (B(r) && (r = {
            mounted: r,
            updated: r
        }),
        r.deep && pt(a),
        o.push({
            dir: r,
            instance: n,
            value: a,
            oldValue: void 0,
            arg: c,
            modifiers: l
        }))
    }
    return e
}
function ct(e, t, s, n) {
    const o = e.dirs
      , i = t && t.dirs;
    for (let r = 0; r < o.length; r++) {
        const a = o[r];
        i && (a.oldValue = i[r].value);
        let c = a.dir[n];
        c && (Pt(),
        ke(c, s, 8, [e.el, a, e, t]),
        Lt())
    }
}
const Vn = "components";
function e$(e, t) {
    return Qi(Vn, e, !0, t) || e
}
const Xi = Symbol();
function t$(e) {
    return oe(e) ? Qi(Vn, e, !1) || e : e || Xi
}
function Qi(e, t, s=!0, n=!1) {
    const o = ge || ae;
    if (o) {
        const i = o.type;
        if (e === Vn) {
            const a = qc(i, !1);
            if (a && (a === t || a === je(t) || a === Ls(je(t))))
                return i
        }
        const r = yo(o[e] || i[e], t) || yo(o.appContext[e], t);
        return !r && n ? i : r
    }
}
function yo(e, t) {
    return e && (e[t] || e[je(t)] || e[Ls(je(t))])
}
function s$(e, t, s, n) {
    let o;
    const i = s && s[n];
    if (M(e) || oe(e)) {
        o = new Array(e.length);
        for (let r = 0, a = e.length; r < a; r++)
            o[r] = t(e[r], r, void 0, i && i[r])
    } else if (typeof e == "number") {
        o = new Array(e);
        for (let r = 0; r < e; r++)
            o[r] = t(r + 1, r, void 0, i && i[r])
    } else if (te(e))
        if (e[Symbol.iterator])
            o = Array.from(e, (r,a)=>t(r, a, void 0, i && i[a]));
        else {
            const r = Object.keys(e);
            o = new Array(r.length);
            for (let a = 0, c = r.length; a < c; a++) {
                const l = r[a];
                o[a] = t(e[l], l, a, i && i[a])
            }
        }
    else
        o = [];
    return s && (s[n] = o),
    o
}
function n$(e, t) {
    for (let s = 0; s < t.length; s++) {
        const n = t[s];
        if (M(n))
            for (let o = 0; o < n.length; o++)
                e[n[o].name] = n[o].fn;
        else
            n && (e[n.name] = n.key ? (...o)=>{
                const i = n.fn(...o);
                return i && (i.key = n.key),
                i
            }
            : n.fn)
    }
    return e
}
function o$(e, t, s={}, n, o) {
    if (ge.isCE || ge.parent && zt(ge.parent) && ge.parent.isCE)
        return t !== "default" && (s.name = t),
        he("slot", s, n && n());
    let i = e[t];
    i && i._c && (i._d = !1),
    lr();
    const r = i && er(i(s))
      , a = fr($e, {
        key: s.key || r && r.key || `_${t}`
    }, r || (n ? n() : []), r && e._ === 1 ? 64 : -2);
    return !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    a
}
function er(e) {
    return e.some(t=>Is(t) ? !(t.type === xe || t.type === $e && !er(t.children)) : !0) ? e : null
}
const ln = e=>e ? gr(e) ? Vs(e) || e.proxy : ln(e.parent) : null
  , Kt = me(Object.create(null), {
    $: e=>e,
    $el: e=>e.vnode.el,
    $data: e=>e.data,
    $props: e=>e.props,
    $attrs: e=>e.attrs,
    $slots: e=>e.slots,
    $refs: e=>e.refs,
    $parent: e=>ln(e.parent),
    $root: e=>ln(e.root),
    $emit: e=>e.emit,
    $options: e=>Yn(e),
    $forceUpdate: e=>e.f || (e.f = ()=>Rn(e.update)),
    $nextTick: e=>e.n || (e.n = Ka.bind(e.proxy)),
    $watch: e=>ac.bind(e)
})
  , Xs = (e,t)=>e !== ne && !e.__isScriptSetup && Z(e, t)
  , yc = {
    get({_: e}, t) {
        const {ctx: s, setupState: n, data: o, props: i, accessCache: r, type: a, appContext: c} = e;
        let l;
        if (t[0] !== "$") {
            const v = r[t];
            if (v !== void 0)
                switch (v) {
                case 1:
                    return n[t];
                case 2:
                    return o[t];
                case 4:
                    return s[t];
                case 3:
                    return i[t]
                }
            else {
                if (Xs(n, t))
                    return r[t] = 1,
                    n[t];
                if (o !== ne && Z(o, t))
                    return r[t] = 2,
                    o[t];
                if ((l = e.propsOptions[0]) && Z(l, t))
                    return r[t] = 3,
                    i[t];
                if (s !== ne && Z(s, t))
                    return r[t] = 4,
                    s[t];
                un && (r[t] = 0)
            }
        }
        const f = Kt[t];
        let p, g;
        if (f)
            return t === "$attrs" && we(e, "get", t),
            f(e);
        if ((p = a.__cssModules) && (p = p[t]))
            return p;
        if (s !== ne && Z(s, t))
            return r[t] = 4,
            s[t];
        if (g = c.config.globalProperties,
        Z(g, t))
            return g[t]
    },
    set({_: e}, t, s) {
        const {data: n, setupState: o, ctx: i} = e;
        return Xs(o, t) ? (o[t] = s,
        !0) : n !== ne && Z(n, t) ? (n[t] = s,
        !0) : Z(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (i[t] = s,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: s, ctx: n, appContext: o, propsOptions: i}}, r) {
        let a;
        return !!s[r] || e !== ne && Z(e, r) || Xs(t, r) || (a = i[0]) && Z(a, r) || Z(n, r) || Z(Kt, r) || Z(o.config.globalProperties, r)
    },
    defineProperty(e, t, s) {
        return s.get != null ? e._.accessCache[t] = 0 : Z(s, "value") && this.set(e, t, s.value, null),
        Reflect.defineProperty(e, t, s)
    }
};
let un = !0;
function _c(e) {
    const t = Yn(e)
      , s = e.proxy
      , n = e.ctx;
    un = !1,
    t.beforeCreate && _o(t.beforeCreate, e, "bc");
    const {data: o, computed: i, methods: r, watch: a, provide: c, inject: l, created: f, beforeMount: p, mounted: g, beforeUpdate: v, updated: C, activated: S, deactivated: R, beforeDestroy: I, beforeUnmount: W, destroyed: N, unmounted: k, render: $, renderTracked: j, renderTriggered: V, errorCaptured: F, serverPrefetch: z, expose: Y, inheritAttrs: q, components: L, directives: ee, filters: be} = t;
    if (l && Tc(l, n, null, e.appContext.config.unwrapInjectedRef),
    r)
        for (const X in r) {
            const Q = r[X];
            B(Q) && (n[X] = Q.bind(s))
        }
    if (o) {
        const X = o.call(s, s);
        te(X) && (e.data = Pn(X))
    }
    if (un = !0,
    i)
        for (const X in i) {
            const Q = i[X]
              , Ve = B(Q) ? Q.bind(s, s) : B(Q.get) ? Q.get.bind(s, s) : Me
              , _t = !B(Q) && B(Q.set) ? Q.set.bind(s) : Me
              , Ye = $t({
                get: Ve,
                set: _t
            });
            Object.defineProperty(n, X, {
                enumerable: !0,
                configurable: !0,
                get: ()=>Ye.value,
                set: Ce=>Ye.value = Ce
            })
        }
    if (a)
        for (const X in a)
            tr(a[X], n, s, X);
    if (c) {
        const X = B(c) ? c.call(s) : c;
        Reflect.ownKeys(X).forEach(Q=>{
            rc(Q, X[Q])
        }
        )
    }
    f && _o(f, e, "c");
    function ce(X, Q) {
        M(Q) ? Q.forEach(Ve=>X(Ve.bind(s))) : Q && X(Q.bind(s))
    }
    if (ce(mc, p),
    ce(Un, g),
    ce(dc, v),
    ce(Gi, C),
    ce(lc, S),
    ce(uc, R),
    ce(bc, F),
    ce(hc, j),
    ce(pc, V),
    ce(Ji, W),
    ce(jn, k),
    ce(gc, z),
    M(Y))
        if (Y.length) {
            const X = e.exposed || (e.exposed = {});
            Y.forEach(Q=>{
                Object.defineProperty(X, Q, {
                    get: ()=>s[Q],
                    set: Ve=>s[Q] = Ve
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    $ && e.render === Me && (e.render = $),
    q != null && (e.inheritAttrs = q),
    L && (e.components = L),
    ee && (e.directives = ee)
}
function Tc(e, t, s=Me, n=!1) {
    M(e) && (e = fn(e));
    for (const o in e) {
        const i = e[o];
        let r;
        te(i) ? "default"in i ? r = Ht(i.from || o, i.default, !0) : r = Ht(i.from || o) : r = Ht(i),
        fe(r) && n ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: ()=>r.value,
            set: a=>r.value = a
        }) : t[o] = r
    }
}
function _o(e, t, s) {
    ke(M(e) ? e.map(n=>n.bind(t.proxy)) : e.bind(t.proxy), t, s)
}
function tr(e, t, s, n) {
    const o = n.includes(".") ? Hi(s, n) : ()=>s[n];
    if (oe(e)) {
        const i = t[e];
        B(i) && It(o, i)
    } else if (B(e))
        It(o, e.bind(s));
    else if (te(e))
        if (M(e))
            e.forEach(i=>tr(i, t, s, n));
        else {
            const i = B(e.handler) ? e.handler.bind(s) : t[e.handler];
            B(i) && It(o, i, e)
        }
}
function Yn(e) {
    const t = e.type
      , {mixins: s, extends: n} = t
      , {mixins: o, optionsCache: i, config: {optionMergeStrategies: r}} = e.appContext
      , a = i.get(t);
    let c;
    return a ? c = a : !o.length && !s && !n ? c = t : (c = {},
    o.length && o.forEach(l=>As(c, l, r, !0)),
    As(c, t, r)),
    te(t) && i.set(t, c),
    c
}
function As(e, t, s, n=!1) {
    const {mixins: o, extends: i} = t;
    i && As(e, i, s, !0),
    o && o.forEach(r=>As(e, r, s, !0));
    for (const r in t)
        if (!(n && r === "expose")) {
            const a = vc[r] || s && s[r];
            e[r] = a ? a(e[r], t[r]) : t[r]
        }
    return e
}
const vc = {
    data: To,
    props: ft,
    emits: ft,
    methods: ft,
    computed: ft,
    beforeCreate: ye,
    created: ye,
    beforeMount: ye,
    mounted: ye,
    beforeUpdate: ye,
    updated: ye,
    beforeDestroy: ye,
    beforeUnmount: ye,
    destroyed: ye,
    unmounted: ye,
    activated: ye,
    deactivated: ye,
    errorCaptured: ye,
    serverPrefetch: ye,
    components: ft,
    directives: ft,
    watch: wc,
    provide: To,
    inject: $c
};
function To(e, t) {
    return t ? e ? function() {
        return me(B(e) ? e.call(this, this) : e, B(t) ? t.call(this, this) : t)
    }
    : t : e
}
function $c(e, t) {
    return ft(fn(e), fn(t))
}
function fn(e) {
    if (M(e)) {
        const t = {};
        for (let s = 0; s < e.length; s++)
            t[e[s]] = e[s];
        return t
    }
    return e
}
function ye(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function ft(e, t) {
    return e ? me(me(Object.create(null), e), t) : t
}
function wc(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const s = me(Object.create(null), e);
    for (const n in t)
        s[n] = ye(e[n], t[n]);
    return s
}
function Ec(e, t, s, n=!1) {
    const o = {}
      , i = {};
    ws(i, js, 1),
    e.propsDefaults = Object.create(null),
    sr(e, t, o, i);
    for (const r in e.propsOptions[0])
        r in o || (o[r] = void 0);
    s ? e.props = n ? o : Wa(o) : e.type.props ? e.props = o : e.props = i,
    e.attrs = i
}
function Sc(e, t, s, n) {
    const {props: o, attrs: i, vnode: {patchFlag: r}} = e
      , a = K(o)
      , [c] = e.propsOptions;
    let l = !1;
    if ((n || r > 0) && !(r & 16)) {
        if (r & 8) {
            const f = e.vnode.dynamicProps;
            for (let p = 0; p < f.length; p++) {
                let g = f[p];
                if (Rs(e.emitsOptions, g))
                    continue;
                const v = t[g];
                if (c)
                    if (Z(i, g))
                        v !== i[g] && (i[g] = v,
                        l = !0);
                    else {
                        const C = je(g);
                        o[C] = mn(c, a, C, v, e, !1)
                    }
                else
                    v !== i[g] && (i[g] = v,
                    l = !0)
            }
        }
    } else {
        sr(e, t, o, i) && (l = !0);
        let f;
        for (const p in a)
            (!t || !Z(t, p) && ((f = yt(p)) === p || !Z(t, f))) && (c ? s && (s[p] !== void 0 || s[f] !== void 0) && (o[p] = mn(c, a, p, void 0, e, !0)) : delete o[p]);
        if (i !== a)
            for (const p in i)
                (!t || !Z(t, p)) && (delete i[p],
                l = !0)
    }
    l && Ke(e, "set", "$attrs")
}
function sr(e, t, s, n) {
    const [o,i] = e.propsOptions;
    let r = !1, a;
    if (t)
        for (let c in t) {
            if (Ts(c))
                continue;
            const l = t[c];
            let f;
            o && Z(o, f = je(c)) ? !i || !i.includes(f) ? s[f] = l : (a || (a = {}))[f] = l : Rs(e.emitsOptions, c) || (!(c in n) || l !== n[c]) && (n[c] = l,
            r = !0)
        }
    if (i) {
        const c = K(s)
          , l = a || ne;
        for (let f = 0; f < i.length; f++) {
            const p = i[f];
            s[p] = mn(o, c, p, l[p], e, !Z(l, p))
        }
    }
    return r
}
function mn(e, t, s, n, o, i) {
    const r = e[s];
    if (r != null) {
        const a = Z(r, "default");
        if (a && n === void 0) {
            const c = r.default;
            if (r.type !== Function && B(c)) {
                const {propsDefaults: l} = o;
                s in l ? n = l[s] : (xt(o),
                n = l[s] = c.call(null, t),
                bt())
            } else
                n = c
        }
        r[0] && (i && !a ? n = !1 : r[1] && (n === "" || n === yt(s)) && (n = !0))
    }
    return n
}
function nr(e, t, s=!1) {
    const n = t.propsCache
      , o = n.get(e);
    if (o)
        return o;
    const i = e.props
      , r = {}
      , a = [];
    let c = !1;
    if (!B(e)) {
        const f = p=>{
            c = !0;
            const [g,v] = nr(p, t, !0);
            me(r, g),
            v && a.push(...v)
        }
        ;
        !s && t.mixins.length && t.mixins.forEach(f),
        e.extends && f(e.extends),
        e.mixins && e.mixins.forEach(f)
    }
    if (!i && !c)
        return te(e) && n.set(e, St),
        St;
    if (M(i))
        for (let f = 0; f < i.length; f++) {
            const p = je(i[f]);
            vo(p) && (r[p] = ne)
        }
    else if (i)
        for (const f in i) {
            const p = je(f);
            if (vo(p)) {
                const g = i[f]
                  , v = r[p] = M(g) || B(g) ? {
                    type: g
                } : Object.assign({}, g);
                if (v) {
                    const C = Eo(Boolean, v.type)
                      , S = Eo(String, v.type);
                    v[0] = C > -1,
                    v[1] = S < 0 || C < S,
                    (C > -1 || Z(v, "default")) && a.push(p)
                }
            }
        }
    const l = [r, a];
    return te(e) && n.set(e, l),
    l
}
function vo(e) {
    return e[0] !== "$"
}
function $o(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : ""
}
function wo(e, t) {
    return $o(e) === $o(t)
}
function Eo(e, t) {
    return M(t) ? t.findIndex(s=>wo(s, e)) : B(t) && wo(t, e) ? 0 : -1
}
const or = e=>e[0] === "_" || e === "$stable"
  , Hn = e=>M(e) ? e.map(We) : [We(e)]
  , Dc = (e,t,s)=>{
    if (t._n)
        return t;
    const n = Qa((...o)=>Hn(t(...o)), s);
    return n._c = !1,
    n
}
  , ir = (e,t,s)=>{
    const n = e._ctx;
    for (const o in e) {
        if (or(o))
            continue;
        const i = e[o];
        if (B(i))
            t[o] = Dc(o, i, n);
        else if (i != null) {
            const r = Hn(i);
            t[o] = ()=>r
        }
    }
}
  , rr = (e,t)=>{
    const s = Hn(t);
    e.slots.default = ()=>s
}
  , Cc = (e,t)=>{
    if (e.vnode.shapeFlag & 32) {
        const s = t._;
        s ? (e.slots = K(t),
        ws(t, "_", s)) : ir(t, e.slots = {})
    } else
        e.slots = {},
        t && rr(e, t);
    ws(e.slots, js, 1)
}
  , Ac = (e,t,s)=>{
    const {vnode: n, slots: o} = e;
    let i = !0
      , r = ne;
    if (n.shapeFlag & 32) {
        const a = t._;
        a ? s && a === 1 ? i = !1 : (me(o, t),
        !s && a === 1 && delete o._) : (i = !t.$stable,
        ir(t, o)),
        r = t
    } else
        t && (rr(e, t),
        r = {
            default: 1
        });
    if (i)
        for (const a in o)
            !or(a) && !(a in r) && delete o[a]
}
;
function ar() {
    return {
        app: null,
        config: {
            isNativeTag: ta,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Ic = 0;
function kc(e, t) {
    return function(n, o=null) {
        B(n) || (n = Object.assign({}, n)),
        o != null && !te(o) && (o = null);
        const i = ar()
          , r = new Set;
        let a = !1;
        const c = i.app = {
            _uid: Ic++,
            _component: n,
            _props: o,
            _container: null,
            _context: i,
            _instance: null,
            version: Qc,
            get config() {
                return i.config
            },
            set config(l) {},
            use(l, ...f) {
                return r.has(l) || (l && B(l.install) ? (r.add(l),
                l.install(c, ...f)) : B(l) && (r.add(l),
                l(c, ...f))),
                c
            },
            mixin(l) {
                return i.mixins.includes(l) || i.mixins.push(l),
                c
            },
            component(l, f) {
                return f ? (i.components[l] = f,
                c) : i.components[l]
            },
            directive(l, f) {
                return f ? (i.directives[l] = f,
                c) : i.directives[l]
            },
            mount(l, f, p) {
                if (!a) {
                    const g = he(n, o);
                    return g.appContext = i,
                    f && t ? t(g, l) : e(g, l, p),
                    a = !0,
                    c._container = l,
                    l.__vue_app__ = c,
                    Vs(g.component) || g.component.proxy
                }
            },
            unmount() {
                a && (e(null, c._container),
                delete c._container.__vue_app__)
            },
            provide(l, f) {
                return i.provides[l] = f,
                c
            }
        };
        return c
    }
}
function dn(e, t, s, n, o=!1) {
    if (M(e)) {
        e.forEach((g,v)=>dn(g, t && (M(t) ? t[v] : t), s, n, o));
        return
    }
    if (zt(n) && !o)
        return;
    const i = n.shapeFlag & 4 ? Vs(n.component) || n.component.proxy : n.el
      , r = o ? null : i
      , {i: a, r: c} = e
      , l = t && t.r
      , f = a.refs === ne ? a.refs = {} : a.refs
      , p = a.setupState;
    if (l != null && l !== c && (oe(l) ? (f[l] = null,
    Z(p, l) && (p[l] = null)) : fe(l) && (l.value = null)),
    B(c))
        st(c, a, 12, [r, f]);
    else {
        const g = oe(c)
          , v = fe(c);
        if (g || v) {
            const C = ()=>{
                if (e.f) {
                    const S = g ? Z(p, c) ? p[c] : f[c] : c.value;
                    o ? M(S) && Cn(S, i) : M(S) ? S.includes(i) || S.push(i) : g ? (f[c] = [i],
                    Z(p, c) && (p[c] = f[c])) : (c.value = [i],
                    e.k && (f[e.k] = c.value))
                } else
                    g ? (f[c] = r,
                    Z(p, c) && (p[c] = r)) : v && (c.value = r,
                    e.k && (f[e.k] = r))
            }
            ;
            r ? (C.id = -1,
            ve(C, s)) : C()
        }
    }
}
const ve = ic;
function xc(e) {
    return Nc(e)
}
function Nc(e, t) {
    const s = ca();
    s.__VUE__ = !0;
    const {insert: n, remove: o, patchProp: i, createElement: r, createText: a, createComment: c, setText: l, setElementText: f, parentNode: p, nextSibling: g, setScopeId: v=Me, insertStaticContent: C} = e
      , S = (u,m,b,T=null,_=null,E=null,A=!1,w=null,D=!!m.dynamicChildren)=>{
        if (u === m)
            return;
        u && !dt(u, m) && (T = Tt(u),
        Ce(u, _, E, !0),
        u = null),
        m.patchFlag === -2 && (D = !1,
        m.dynamicChildren = null);
        const {type: y, ref: d, shapeFlag: h} = m;
        switch (y) {
        case us:
            R(u, m, b, T);
            break;
        case xe:
            I(u, m, b, T);
            break;
        case Qs:
            u == null && W(m, b, T, A);
            break;
        case $e:
            L(u, m, b, T, _, E, A, w, D);
            break;
        default:
            h & 1 ? $(u, m, b, T, _, E, A, w, D) : h & 6 ? ee(u, m, b, T, _, E, A, w, D) : (h & 64 || h & 128) && y.process(u, m, b, T, _, E, A, w, D, Ze)
        }
        d != null && _ && dn(d, u && u.ref, E, m || u, !m)
    }
      , R = (u,m,b,T)=>{
        if (u == null)
            n(m.el = a(m.children), b, T);
        else {
            const _ = m.el = u.el;
            m.children !== u.children && l(_, m.children)
        }
    }
      , I = (u,m,b,T)=>{
        u == null ? n(m.el = c(m.children || ""), b, T) : m.el = u.el
    }
      , W = (u,m,b,T)=>{
        [u.el,u.anchor] = C(u.children, m, b, T, u.el, u.anchor)
    }
      , N = ({el: u, anchor: m},b,T)=>{
        let _;
        for (; u && u !== m; )
            _ = g(u),
            n(u, b, T),
            u = _;
        n(m, b, T)
    }
      , k = ({el: u, anchor: m})=>{
        let b;
        for (; u && u !== m; )
            b = g(u),
            o(u),
            u = b;
        o(m)
    }
      , $ = (u,m,b,T,_,E,A,w,D)=>{
        A = A || m.type === "svg",
        u == null ? j(m, b, T, _, E, A, w, D) : z(u, m, _, E, A, w, D)
    }
      , j = (u,m,b,T,_,E,A,w)=>{
        let D, y;
        const {type: d, props: h, shapeFlag: x, transition: P, dirs: U} = u;
        if (D = u.el = r(u.type, E, h && h.is, h),
        x & 8 ? f(D, u.children) : x & 16 && F(u.children, D, null, T, _, E && d !== "foreignObject", A, w),
        U && ct(u, null, T, "created"),
        V(D, u, u.scopeId, A, T),
        h) {
            for (const H in h)
                H !== "value" && !Ts(H) && i(D, H, null, h[H], E, u.children, T, _, Oe);
            "value"in h && i(D, "value", null, h.value),
            (y = h.onVnodeBeforeMount) && Re(y, T, u)
        }
        U && ct(u, null, T, "beforeMount");
        const J = (!_ || _ && !_.pendingBranch) && P && !P.persisted;
        J && P.beforeEnter(D),
        n(D, m, b),
        ((y = h && h.onVnodeMounted) || J || U) && ve(()=>{
            y && Re(y, T, u),
            J && P.enter(D),
            U && ct(u, null, T, "mounted")
        }
        , _)
    }
      , V = (u,m,b,T,_)=>{
        if (b && v(u, b),
        T)
            for (let E = 0; E < T.length; E++)
                v(u, T[E]);
        if (_) {
            let E = _.subTree;
            if (m === E) {
                const A = _.vnode;
                V(u, A, A.scopeId, A.slotScopeIds, _.parent)
            }
        }
    }
      , F = (u,m,b,T,_,E,A,w,D=0)=>{
        for (let y = D; y < u.length; y++) {
            const d = u[y] = w ? Qe(u[y]) : We(u[y]);
            S(null, d, m, b, T, _, E, A, w)
        }
    }
      , z = (u,m,b,T,_,E,A)=>{
        const w = m.el = u.el;
        let {patchFlag: D, dynamicChildren: y, dirs: d} = m;
        D |= u.patchFlag & 16;
        const h = u.props || ne
          , x = m.props || ne;
        let P;
        b && lt(b, !1),
        (P = x.onVnodeBeforeUpdate) && Re(P, b, m, u),
        d && ct(m, u, b, "beforeUpdate"),
        b && lt(b, !0);
        const U = _ && m.type !== "foreignObject";
        if (y ? Y(u.dynamicChildren, y, w, b, T, U, E) : A || Q(u, m, w, null, b, T, U, E, !1),
        D > 0) {
            if (D & 16)
                q(w, m, h, x, b, T, _);
            else if (D & 2 && h.class !== x.class && i(w, "class", null, x.class, _),
            D & 4 && i(w, "style", h.style, x.style, _),
            D & 8) {
                const J = m.dynamicProps;
                for (let H = 0; H < J.length; H++) {
                    const ie = J[H]
                      , Ae = h[ie]
                      , vt = x[ie];
                    (vt !== Ae || ie === "value") && i(w, ie, Ae, vt, _, u.children, b, T, Oe)
                }
            }
            D & 1 && u.children !== m.children && f(w, m.children)
        } else
            !A && y == null && q(w, m, h, x, b, T, _);
        ((P = x.onVnodeUpdated) || d) && ve(()=>{
            P && Re(P, b, m, u),
            d && ct(m, u, b, "updated")
        }
        , T)
    }
      , Y = (u,m,b,T,_,E,A)=>{
        for (let w = 0; w < m.length; w++) {
            const D = u[w]
              , y = m[w]
              , d = D.el && (D.type === $e || !dt(D, y) || D.shapeFlag & 70) ? p(D.el) : b;
            S(D, y, d, null, T, _, E, A, !0)
        }
    }
      , q = (u,m,b,T,_,E,A)=>{
        if (b !== T) {
            if (b !== ne)
                for (const w in b)
                    !Ts(w) && !(w in T) && i(u, w, b[w], null, A, m.children, _, E, Oe);
            for (const w in T) {
                if (Ts(w))
                    continue;
                const D = T[w]
                  , y = b[w];
                D !== y && w !== "value" && i(u, w, y, D, A, m.children, _, E, Oe)
            }
            "value"in T && i(u, "value", b.value, T.value)
        }
    }
      , L = (u,m,b,T,_,E,A,w,D)=>{
        const y = m.el = u ? u.el : a("")
          , d = m.anchor = u ? u.anchor : a("");
        let {patchFlag: h, dynamicChildren: x, slotScopeIds: P} = m;
        P && (w = w ? w.concat(P) : P),
        u == null ? (n(y, b, T),
        n(d, b, T),
        F(m.children, b, d, _, E, A, w, D)) : h > 0 && h & 64 && x && u.dynamicChildren ? (Y(u.dynamicChildren, x, b, _, E, A, w),
        (m.key != null || _ && m === _.subTree) && zn(u, m, !0)) : Q(u, m, b, d, _, E, A, w, D)
    }
      , ee = (u,m,b,T,_,E,A,w,D)=>{
        m.slotScopeIds = w,
        u == null ? m.shapeFlag & 512 ? _.ctx.activate(m, b, T, A, D) : be(m, b, T, _, E, A, D) : at(u, m, D)
    }
      , be = (u,m,b,T,_,E,A)=>{
        const w = u.component = Yc(u, T, _);
        if (Bs(u) && (w.ctx.renderer = Ze),
        Hc(w),
        w.asyncDep) {
            if (_ && _.registerDep(w, ce),
            !u.el) {
                const D = w.subTree = he(xe);
                I(null, D, m, b)
            }
            return
        }
        ce(w, u, m, b, _, E, A)
    }
      , at = (u,m,b)=>{
        const T = m.component = u.component;
        if (sc(u, m, b))
            if (T.asyncDep && !T.asyncResolved) {
                X(T, m, b);
                return
            } else
                T.next = m,
                Za(T.update),
                T.update();
        else
            m.el = u.el,
            T.vnode = m
    }
      , ce = (u,m,b,T,_,E,A)=>{
        const w = ()=>{
            if (u.isMounted) {
                let {next: d, bu: h, u: x, parent: P, vnode: U} = u, J = d, H;
                lt(u, !1),
                d ? (d.el = U.el,
                X(u, d, A)) : d = U,
                h && vs(h),
                (H = d.props && d.props.onVnodeBeforeUpdate) && Re(H, P, d, U),
                lt(u, !0);
                const ie = Gs(u)
                  , Ae = u.subTree;
                u.subTree = ie,
                S(Ae, ie, p(Ae.el), Tt(Ae), u, _, E),
                d.el = ie.el,
                J === null && nc(u, ie.el),
                x && ve(x, _),
                (H = d.props && d.props.onVnodeUpdated) && ve(()=>Re(H, P, d, U), _)
            } else {
                let d;
                const {el: h, props: x} = m
                  , {bm: P, m: U, parent: J} = u
                  , H = zt(m);
                if (lt(u, !1),
                P && vs(P),
                !H && (d = x && x.onVnodeBeforeMount) && Re(d, J, m),
                lt(u, !0),
                h && Rt) {
                    const ie = ()=>{
                        u.subTree = Gs(u),
                        Rt(h, u.subTree, u, _, null)
                    }
                    ;
                    H ? m.type.__asyncLoader().then(()=>!u.isUnmounted && ie()) : ie()
                } else {
                    const ie = u.subTree = Gs(u);
                    S(null, ie, b, T, u, _, E),
                    m.el = ie.el
                }
                if (U && ve(U, _),
                !H && (d = x && x.onVnodeMounted)) {
                    const ie = m;
                    ve(()=>Re(d, J, ie), _)
                }
                (m.shapeFlag & 256 || J && zt(J.vnode) && J.vnode.shapeFlag & 256) && u.a && ve(u.a, _),
                u.isMounted = !0,
                m = b = T = null
            }
        }
          , D = u.effect = new kn(w,()=>Rn(y),u.scope)
          , y = u.update = ()=>D.run();
        y.id = u.uid,
        lt(u, !0),
        y()
    }
      , X = (u,m,b)=>{
        m.component = u;
        const T = u.vnode.props;
        u.vnode = m,
        u.next = null,
        Sc(u, m.props, T, b),
        Ac(u, m.children, b),
        Pt(),
        po(),
        Lt()
    }
      , Q = (u,m,b,T,_,E,A,w,D=!1)=>{
        const y = u && u.children
          , d = u ? u.shapeFlag : 0
          , h = m.children
          , {patchFlag: x, shapeFlag: P} = m;
        if (x > 0) {
            if (x & 128) {
                _t(y, h, b, T, _, E, A, w, D);
                return
            } else if (x & 256) {
                Ve(y, h, b, T, _, E, A, w, D);
                return
            }
        }
        P & 8 ? (d & 16 && Oe(y, _, E),
        h !== y && f(b, h)) : d & 16 ? P & 16 ? _t(y, h, b, T, _, E, A, w, D) : Oe(y, _, E, !0) : (d & 8 && f(b, ""),
        P & 16 && F(h, b, T, _, E, A, w, D))
    }
      , Ve = (u,m,b,T,_,E,A,w,D)=>{
        u = u || St,
        m = m || St;
        const y = u.length
          , d = m.length
          , h = Math.min(y, d);
        let x;
        for (x = 0; x < h; x++) {
            const P = m[x] = D ? Qe(m[x]) : We(m[x]);
            S(u[x], P, b, null, _, E, A, w, D)
        }
        y > d ? Oe(u, _, E, !0, !1, h) : F(m, b, T, _, E, A, w, D, h)
    }
      , _t = (u,m,b,T,_,E,A,w,D)=>{
        let y = 0;
        const d = m.length;
        let h = u.length - 1
          , x = d - 1;
        for (; y <= h && y <= x; ) {
            const P = u[y]
              , U = m[y] = D ? Qe(m[y]) : We(m[y]);
            if (dt(P, U))
                S(P, U, b, null, _, E, A, w, D);
            else
                break;
            y++
        }
        for (; y <= h && y <= x; ) {
            const P = u[h]
              , U = m[x] = D ? Qe(m[x]) : We(m[x]);
            if (dt(P, U))
                S(P, U, b, null, _, E, A, w, D);
            else
                break;
            h--,
            x--
        }
        if (y > h) {
            if (y <= x) {
                const P = x + 1
                  , U = P < d ? m[P].el : T;
                for (; y <= x; )
                    S(null, m[y] = D ? Qe(m[y]) : We(m[y]), b, U, _, E, A, w, D),
                    y++
            }
        } else if (y > x)
            for (; y <= h; )
                Ce(u[y], _, E, !0),
                y++;
        else {
            const P = y
              , U = y
              , J = new Map;
            for (y = U; y <= x; y++) {
                const Ee = m[y] = D ? Qe(m[y]) : We(m[y]);
                Ee.key != null && J.set(Ee.key, y)
            }
            let H, ie = 0;
            const Ae = x - U + 1;
            let vt = !1
              , so = 0;
            const Wt = new Array(Ae);
            for (y = 0; y < Ae; y++)
                Wt[y] = 0;
            for (y = P; y <= h; y++) {
                const Ee = u[y];
                if (ie >= Ae) {
                    Ce(Ee, _, E, !0);
                    continue
                }
                let Fe;
                if (Ee.key != null)
                    Fe = J.get(Ee.key);
                else
                    for (H = U; H <= x; H++)
                        if (Wt[H - U] === 0 && dt(Ee, m[H])) {
                            Fe = H;
                            break
                        }
                Fe === void 0 ? Ce(Ee, _, E, !0) : (Wt[Fe - U] = y + 1,
                Fe >= so ? so = Fe : vt = !0,
                S(Ee, m[Fe], b, null, _, E, A, w, D),
                ie++)
            }
            const no = vt ? Oc(Wt) : St;
            for (H = no.length - 1,
            y = Ae - 1; y >= 0; y--) {
                const Ee = U + y
                  , Fe = m[Ee]
                  , oo = Ee + 1 < d ? m[Ee + 1].el : T;
                Wt[y] === 0 ? S(null, Fe, b, oo, _, E, A, w, D) : vt && (H < 0 || y !== no[H] ? Ye(Fe, b, oo, 2) : H--)
            }
        }
    }
      , Ye = (u,m,b,T,_=null)=>{
        const {el: E, type: A, transition: w, children: D, shapeFlag: y} = u;
        if (y & 6) {
            Ye(u.component.subTree, m, b, T);
            return
        }
        if (y & 128) {
            u.suspense.move(m, b, T);
            return
        }
        if (y & 64) {
            A.move(u, m, b, Ze);
            return
        }
        if (A === $e) {
            n(E, m, b);
            for (let h = 0; h < D.length; h++)
                Ye(D[h], m, b, T);
            n(u.anchor, m, b);
            return
        }
        if (A === Qs) {
            N(u, m, b);
            return
        }
        if (T !== 2 && y & 1 && w)
            if (T === 0)
                w.beforeEnter(E),
                n(E, m, b),
                ve(()=>w.enter(E), _);
            else {
                const {leave: h, delayLeave: x, afterLeave: P} = w
                  , U = ()=>n(E, m, b)
                  , J = ()=>{
                    h(E, ()=>{
                        U(),
                        P && P()
                    }
                    )
                }
                ;
                x ? x(E, U, J) : J()
            }
        else
            n(E, m, b)
    }
      , Ce = (u,m,b,T=!1,_=!1)=>{
        const {type: E, props: A, ref: w, children: D, dynamicChildren: y, shapeFlag: d, patchFlag: h, dirs: x} = u;
        if (w != null && dn(w, null, b, u, !0),
        d & 256) {
            m.ctx.deactivate(u);
            return
        }
        const P = d & 1 && x
          , U = !zt(u);
        let J;
        if (U && (J = A && A.onVnodeBeforeUnmount) && Re(J, m, u),
        d & 6)
            qs(u.component, b, T);
        else {
            if (d & 128) {
                u.suspense.unmount(b, T);
                return
            }
            P && ct(u, null, m, "beforeUnmount"),
            d & 64 ? u.type.remove(u, m, b, _, Ze, T) : y && (E !== $e || h > 0 && h & 64) ? Oe(y, m, b, !1, !0) : (E === $e && h & 384 || !_ && d & 16) && Oe(D, m, b),
            T && zs(u)
        }
        (U && (J = A && A.onVnodeUnmounted) || P) && ve(()=>{
            J && Re(J, m, u),
            P && ct(u, null, m, "unmounted")
        }
        , b)
    }
      , zs = u=>{
        const {type: m, el: b, anchor: T, transition: _} = u;
        if (m === $e) {
            Ks(b, T);
            return
        }
        if (m === Qs) {
            k(u);
            return
        }
        const E = ()=>{
            o(b),
            _ && !_.persisted && _.afterLeave && _.afterLeave()
        }
        ;
        if (u.shapeFlag & 1 && _ && !_.persisted) {
            const {leave: A, delayLeave: w} = _
              , D = ()=>A(b, E);
            w ? w(u.el, E, D) : D()
        } else
            E()
    }
      , Ks = (u,m)=>{
        let b;
        for (; u !== m; )
            b = g(u),
            o(u),
            u = b;
        o(m)
    }
      , qs = (u,m,b)=>{
        const {bum: T, scope: _, update: E, subTree: A, um: w} = u;
        T && vs(T),
        _.stop(),
        E && (E.active = !1,
        Ce(A, u, m, b)),
        w && ve(w, m),
        ve(()=>{
            u.isUnmounted = !0
        }
        , m),
        m && m.pendingBranch && !m.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === m.pendingId && (m.deps--,
        m.deps === 0 && m.resolve())
    }
      , Oe = (u,m,b,T=!1,_=!1,E=0)=>{
        for (let A = E; A < u.length; A++)
            Ce(u[A], m, b, T, _)
    }
      , Tt = u=>u.shapeFlag & 6 ? Tt(u.component.subTree) : u.shapeFlag & 128 ? u.suspense.next() : g(u.anchor || u.el)
      , fs = (u,m,b)=>{
        u == null ? m._vnode && Ce(m._vnode, null, null, !0) : S(m._vnode || null, u, m, null, null, null, b),
        po(),
        ji(),
        m._vnode = u
    }
      , Ze = {
        p: S,
        um: Ce,
        m: Ye,
        r: zs,
        mt: be,
        mc: F,
        pc: Q,
        pbc: Y,
        n: Tt,
        o: e
    };
    let Ft, Rt;
    return t && ([Ft,Rt] = t(Ze)),
    {
        render: fs,
        hydrate: Ft,
        createApp: kc(fs, Ft)
    }
}
function lt({effect: e, update: t}, s) {
    e.allowRecurse = t.allowRecurse = s
}
function zn(e, t, s=!1) {
    const n = e.children
      , o = t.children;
    if (M(n) && M(o))
        for (let i = 0; i < n.length; i++) {
            const r = n[i];
            let a = o[i];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[i] = Qe(o[i]),
            a.el = r.el),
            s || zn(r, a)),
            a.type === us && (a.el = r.el)
        }
}
function Oc(e) {
    const t = e.slice()
      , s = [0];
    let n, o, i, r, a;
    const c = e.length;
    for (n = 0; n < c; n++) {
        const l = e[n];
        if (l !== 0) {
            if (o = s[s.length - 1],
            e[o] < l) {
                t[n] = o,
                s.push(n);
                continue
            }
            for (i = 0,
            r = s.length - 1; i < r; )
                a = i + r >> 1,
                e[s[a]] < l ? i = a + 1 : r = a;
            l < e[s[i]] && (i > 0 && (t[n] = s[i - 1]),
            s[i] = n)
        }
    }
    for (i = s.length,
    r = s[i - 1]; i-- > 0; )
        s[i] = r,
        r = t[r];
    return s
}
const Pc = e=>e.__isTeleport
  , qt = e=>e && (e.disabled || e.disabled === "")
  , So = e=>typeof SVGElement < "u" && e instanceof SVGElement
  , gn = (e,t)=>{
    const s = e && e.to;
    return oe(s) ? t ? t(s) : null : s
}
  , Lc = {
    __isTeleport: !0,
    process(e, t, s, n, o, i, r, a, c, l) {
        const {mc: f, pc: p, pbc: g, o: {insert: v, querySelector: C, createText: S, createComment: R}} = l
          , I = qt(t.props);
        let {shapeFlag: W, children: N, dynamicChildren: k} = t;
        if (e == null) {
            const $ = t.el = S("")
              , j = t.anchor = S("");
            v($, s, n),
            v(j, s, n);
            const V = t.target = gn(t.props, C)
              , F = t.targetAnchor = S("");
            V && (v(F, V),
            r = r || So(V));
            const z = (Y,q)=>{
                W & 16 && f(N, Y, q, o, i, r, a, c)
            }
            ;
            I ? z(s, j) : V && z(V, F)
        } else {
            t.el = e.el;
            const $ = t.anchor = e.anchor
              , j = t.target = e.target
              , V = t.targetAnchor = e.targetAnchor
              , F = qt(e.props)
              , z = F ? s : j
              , Y = F ? $ : V;
            if (r = r || So(j),
            k ? (g(e.dynamicChildren, k, z, o, i, r, a),
            zn(e, t, !0)) : c || p(e, t, z, Y, o, i, r, a, !1),
            I)
                F || ys(t, s, $, l, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const q = t.target = gn(t.props, C);
                q && ys(t, q, null, l, 0)
            } else
                F && ys(t, j, V, l, 1)
        }
        cr(t)
    },
    remove(e, t, s, n, {um: o, o: {remove: i}}, r) {
        const {shapeFlag: a, children: c, anchor: l, targetAnchor: f, target: p, props: g} = e;
        if (p && i(f),
        (r || !qt(g)) && (i(l),
        a & 16))
            for (let v = 0; v < c.length; v++) {
                const C = c[v];
                o(C, t, s, !0, !!C.dynamicChildren)
            }
    },
    move: ys,
    hydrate: Mc
};
function ys(e, t, s, {o: {insert: n}, m: o}, i=2) {
    i === 0 && n(e.targetAnchor, t, s);
    const {el: r, anchor: a, shapeFlag: c, children: l, props: f} = e
      , p = i === 2;
    if (p && n(r, t, s),
    (!p || qt(f)) && c & 16)
        for (let g = 0; g < l.length; g++)
            o(l[g], t, s, 2);
    p && n(a, t, s)
}
function Mc(e, t, s, n, o, i, {o: {nextSibling: r, parentNode: a, querySelector: c}}, l) {
    const f = t.target = gn(t.props, c);
    if (f) {
        const p = f._lpa || f.firstChild;
        if (t.shapeFlag & 16)
            if (qt(t.props))
                t.anchor = l(r(e), t, a(e), s, n, o, i),
                t.targetAnchor = p;
            else {
                t.anchor = r(e);
                let g = p;
                for (; g; )
                    if (g = r(g),
                    g && g.nodeType === 8 && g.data === "teleport anchor") {
                        t.targetAnchor = g,
                        f._lpa = t.targetAnchor && r(t.targetAnchor);
                        break
                    }
                l(p, t, f, s, n, o, i)
            }
        cr(t)
    }
    return t.anchor && r(t.anchor)
}
const i$ = Lc;
function cr(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let s = e.children[0].el;
        for (; s !== e.targetAnchor; )
            s.nodeType === 1 && s.setAttribute("data-v-owner", t.uid),
            s = s.nextSibling;
        t.ut()
    }
}
const $e = Symbol(void 0)
  , us = Symbol(void 0)
  , xe = Symbol(void 0)
  , Qs = Symbol(void 0)
  , Zt = [];
let Le = null;
function lr(e=!1) {
    Zt.push(Le = e ? null : [])
}
function Fc() {
    Zt.pop(),
    Le = Zt[Zt.length - 1] || null
}
let os = 1;
function Do(e) {
    os += e
}
function ur(e) {
    return e.dynamicChildren = os > 0 ? Le || St : null,
    Fc(),
    os > 0 && Le && Le.push(e),
    e
}
function r$(e, t, s, n, o, i) {
    return ur(dr(e, t, s, n, o, i, !0))
}
function fr(e, t, s, n, o) {
    return ur(he(e, t, s, n, o, !0))
}
function Is(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function dt(e, t) {
    return e.type === t.type && e.key === t.key
}
const js = "__vInternal"
  , mr = ({key: e})=>e ?? null
  , $s = ({ref: e, ref_key: t, ref_for: s})=>e != null ? oe(e) || fe(e) || B(e) ? {
    i: ge,
    r: e,
    k: t,
    f: !!s
} : e : null;
function dr(e, t=null, s=null, n=0, o=null, i=e === $e ? 0 : 1, r=!1, a=!1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && mr(t),
        ref: t && $s(t),
        scopeId: Ws,
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
        shapeFlag: i,
        patchFlag: n,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null,
        ctx: ge
    };
    return a ? (Kn(c, s),
    i & 128 && e.normalize(c)) : s && (c.shapeFlag |= oe(s) ? 8 : 16),
    os > 0 && !r && Le && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && Le.push(c),
    c
}
const he = Rc;
function Rc(e, t=null, s=null, n=0, o=null, i=!1) {
    if ((!e || e === Xi) && (e = xe),
    Is(e)) {
        const a = ot(e, t, !0);
        return s && Kn(a, s),
        os > 0 && !i && Le && (a.shapeFlag & 6 ? Le[Le.indexOf(e)] = a : Le.push(a)),
        a.patchFlag |= -2,
        a
    }
    if (Zc(e) && (e = e.__vccOpts),
    t) {
        t = Wc(t);
        let {class: a, style: c} = t;
        a && !oe(a) && (t.class = Ns(a)),
        te(c) && (Oi(c) && !M(c) && (c = me({}, c)),
        t.style = xs(c))
    }
    const r = oe(e) ? 1 : oc(e) ? 128 : Pc(e) ? 64 : te(e) ? 4 : B(e) ? 2 : 0;
    return dr(e, t, s, n, o, r, i, !0)
}
function Wc(e) {
    return e ? Oi(e) || js in e ? me({}, e) : e : null
}
function ot(e, t, s=!1) {
    const {props: n, ref: o, patchFlag: i, children: r} = e
      , a = t ? Uc(n || {}, t) : n;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: a,
        key: a && mr(a),
        ref: t && t.ref ? s && o ? M(o) ? o.concat($s(t)) : [o, $s(t)] : $s(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: r,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== $e ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && ot(e.ssContent),
        ssFallback: e.ssFallback && ot(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}
function Bc(e=" ", t=0) {
    return he(us, null, e, t)
}
function a$(e="", t=!1) {
    return t ? (lr(),
    fr(xe, null, e)) : he(xe, null, e)
}
function We(e) {
    return e == null || typeof e == "boolean" ? he(xe) : M(e) ? he($e, null, e.slice()) : typeof e == "object" ? Qe(e) : he(us, null, String(e))
}
function Qe(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : ot(e)
}
function Kn(e, t) {
    let s = 0;
    const {shapeFlag: n} = e;
    if (t == null)
        t = null;
    else if (M(t))
        s = 16;
    else if (typeof t == "object")
        if (n & 65) {
            const o = t.default;
            o && (o._c && (o._d = !1),
            Kn(e, o()),
            o._c && (o._d = !0));
            return
        } else {
            s = 32;
            const o = t._;
            !o && !(js in t) ? t._ctx = ge : o === 3 && ge && (ge.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        B(t) ? (t = {
            default: t,
            _ctx: ge
        },
        s = 32) : (t = String(t),
        n & 64 ? (s = 16,
        t = [Bc(t)]) : s = 8);
    e.children = t,
    e.shapeFlag |= s
}
function Uc(...e) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
        const n = e[s];
        for (const o in n)
            if (o === "class")
                t.class !== n.class && (t.class = Ns([t.class, n.class]));
            else if (o === "style")
                t.style = xs([t.style, n.style]);
            else if (Os(o)) {
                const i = t[o]
                  , r = n[o];
                r && i !== r && !(M(i) && i.includes(r)) && (t[o] = i ? [].concat(i, r) : r)
            } else
                o !== "" && (t[o] = n[o])
    }
    return t
}
function Re(e, t, s, n=null) {
    ke(e, t, 7, [s, n])
}
const jc = ar();
let Vc = 0;
function Yc(e, t, s) {
    const n = e.type
      , o = (t ? t.appContext : e.appContext) || jc
      , i = {
        uid: Vc++,
        vnode: e,
        type: n,
        parent: t,
        appContext: o,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new vi(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(o.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: nr(n, o),
        emitsOptions: Yi(n, o),
        emit: null,
        emitted: null,
        propsDefaults: ne,
        inheritAttrs: n.inheritAttrs,
        ctx: ne,
        data: ne,
        props: ne,
        attrs: ne,
        slots: ne,
        refs: ne,
        setupState: ne,
        setupContext: null,
        suspense: s,
        suspenseId: s ? s.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return i.ctx = {
        _: i
    },
    i.root = t ? t.root : i,
    i.emit = Xa.bind(null, i),
    e.ce && e.ce(i),
    i
}
let ae = null;
const Mt = ()=>ae || ge
  , xt = e=>{
    ae = e,
    e.scope.on()
}
  , bt = ()=>{
    ae && ae.scope.off(),
    ae = null
}
;
function gr(e) {
    return e.vnode.shapeFlag & 4
}
let is = !1;
function Hc(e, t=!1) {
    is = t;
    const {props: s, children: n} = e.vnode
      , o = gr(e);
    Ec(e, s, o, t),
    Cc(e, n);
    const i = o ? zc(e, t) : void 0;
    return is = !1,
    i
}
function zc(e, t) {
    const s = e.type;
    e.accessCache = Object.create(null),
    e.proxy = Pi(new Proxy(e.ctx,yc));
    const {setup: n} = s;
    if (n) {
        const o = e.setupContext = n.length > 1 ? hr(e) : null;
        xt(e),
        Pt();
        const i = st(n, e, 0, [e.props, o]);
        if (Lt(),
        bt(),
        yi(i)) {
            if (i.then(bt, bt),
            t)
                return i.then(r=>{
                    Co(e, r, t)
                }
                ).catch(r=>{
                    Fs(r, e, 0)
                }
                );
            e.asyncDep = i
        } else
            Co(e, i, t)
    } else
        pr(e, t)
}
function Co(e, t, s) {
    B(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : te(t) && (e.setupState = Ri(t)),
    pr(e, s)
}
let Ao;
function pr(e, t, s) {
    const n = e.type;
    if (!e.render) {
        if (!t && Ao && !n.render) {
            const o = n.template || Yn(e).template;
            if (o) {
                const {isCustomElement: i, compilerOptions: r} = e.appContext.config
                  , {delimiters: a, compilerOptions: c} = n
                  , l = me(me({
                    isCustomElement: i,
                    delimiters: a
                }, r), c);
                n.render = Ao(o, l)
            }
        }
        e.render = n.render || Me
    }
    xt(e),
    Pt(),
    _c(e),
    Lt(),
    bt()
}
function Kc(e) {
    return new Proxy(e.attrs,{
        get(t, s) {
            return we(e, "get", "$attrs"),
            t[s]
        }
    })
}
function hr(e) {
    const t = n=>{
        e.exposed = n || {}
    }
    ;
    let s;
    return {
        get attrs() {
            return s || (s = Kc(e))
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function Vs(e) {
    if (e.exposed)
        return e.exposeProxy || (e.exposeProxy = new Proxy(Ri(Pi(e.exposed)),{
            get(t, s) {
                if (s in t)
                    return t[s];
                if (s in Kt)
                    return Kt[s](e)
            },
            has(t, s) {
                return s in t || s in Kt
            }
        }))
}
function qc(e, t=!0) {
    return B(e) ? e.displayName || e.name : e.name || t && e.__name
}
function Zc(e) {
    return B(e) && "__vccOpts"in e
}
const $t = (e,t)=>Ha(e, t, is);
function c$() {
    return Gc().slots
}
function Gc() {
    const e = Mt();
    return e.setupContext || (e.setupContext = hr(e))
}
function qn(e, t, s) {
    const n = arguments.length;
    return n === 2 ? te(t) && !M(t) ? Is(t) ? he(e, null, [t]) : he(e, t) : he(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Is(s) && (s = [s]),
    he(e, t, s))
}
const Jc = Symbol("")
  , Xc = ()=>Ht(Jc)
  , Qc = "3.2.47"
  , el = "http://www.w3.org/2000/svg"
  , gt = typeof document < "u" ? document : null
  , Io = gt && gt.createElement("template")
  , tl = {
    insert: (e,t,s)=>{
        t.insertBefore(e, s || null)
    }
    ,
    remove: e=>{
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e,t,s,n)=>{
        const o = t ? gt.createElementNS(el, e) : gt.createElement(e, s ? {
            is: s
        } : void 0);
        return e === "select" && n && n.multiple != null && o.setAttribute("multiple", n.multiple),
        o
    }
    ,
    createText: e=>gt.createTextNode(e),
    createComment: e=>gt.createComment(e),
    setText: (e,t)=>{
        e.nodeValue = t
    }
    ,
    setElementText: (e,t)=>{
        e.textContent = t
    }
    ,
    parentNode: e=>e.parentNode,
    nextSibling: e=>e.nextSibling,
    querySelector: e=>gt.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, s, n, o, i) {
        const r = s ? s.previousSibling : t.lastChild;
        if (o && (o === i || o.nextSibling))
            for (; t.insertBefore(o.cloneNode(!0), s),
            !(o === i || !(o = o.nextSibling)); )
                ;
        else {
            Io.innerHTML = n ? `<svg>${e}</svg>` : e;
            const a = Io.content;
            if (n) {
                const c = a.firstChild;
                for (; c.firstChild; )
                    a.appendChild(c.firstChild);
                a.removeChild(c)
            }
            t.insertBefore(a, s)
        }
        return [r ? r.nextSibling : t.firstChild, s ? s.previousSibling : t.lastChild]
    }
};
function sl(e, t, s) {
    const n = e._vtc;
    n && (t = (t ? [t, ...n] : [...n]).join(" ")),
    t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t
}
function nl(e, t, s) {
    const n = e.style
      , o = oe(s);
    if (s && !o) {
        if (t && !oe(t))
            for (const i in t)
                s[i] == null && pn(n, i, "");
        for (const i in s)
            pn(n, i, s[i])
    } else {
        const i = n.display;
        o ? t !== s && (n.cssText = s) : t && e.removeAttribute("style"),
        "_vod"in e && (n.display = i)
    }
}
const ko = /\s*!important$/;
function pn(e, t, s) {
    if (M(s))
        s.forEach(n=>pn(e, t, n));
    else if (s == null && (s = ""),
    t.startsWith("--"))
        e.setProperty(t, s);
    else {
        const n = ol(e, t);
        ko.test(s) ? e.setProperty(yt(n), s.replace(ko, ""), "important") : e[n] = s
    }
}
const xo = ["Webkit", "Moz", "ms"]
  , en = {};
function ol(e, t) {
    const s = en[t];
    if (s)
        return s;
    let n = je(t);
    if (n !== "filter" && n in e)
        return en[t] = n;
    n = Ls(n);
    for (let o = 0; o < xo.length; o++) {
        const i = xo[o] + n;
        if (i in e)
            return en[t] = i
    }
    return t
}
const No = "http://www.w3.org/1999/xlink";
function il(e, t, s, n, o) {
    if (n && t.startsWith("xlink:"))
        s == null ? e.removeAttributeNS(No, t.slice(6, t.length)) : e.setAttributeNS(No, t, s);
    else {
        const i = Qr(t);
        s == null || i && !hi(s) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : s)
    }
}
function rl(e, t, s, n, o, i, r) {
    if (t === "innerHTML" || t === "textContent") {
        n && r(n, o, i),
        e[t] = s ?? "";
        return
    }
    if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
        e._value = s;
        const c = s ?? "";
        (e.value !== c || e.tagName === "OPTION") && (e.value = c),
        s == null && e.removeAttribute(t);
        return
    }
    let a = !1;
    if (s === "" || s == null) {
        const c = typeof e[t];
        c === "boolean" ? s = hi(s) : s == null && c === "string" ? (s = "",
        a = !0) : c === "number" && (s = 0,
        a = !0)
    }
    try {
        e[t] = s
    } catch {}
    a && e.removeAttribute(t)
}
function et(e, t, s, n) {
    e.addEventListener(t, s, n)
}
function al(e, t, s, n) {
    e.removeEventListener(t, s, n)
}
function cl(e, t, s, n, o=null) {
    const i = e._vei || (e._vei = {})
      , r = i[t];
    if (n && r)
        r.value = n;
    else {
        const [a,c] = ll(t);
        if (n) {
            const l = i[t] = ml(n, o);
            et(e, a, l, c)
        } else
            r && (al(e, a, r, c),
            i[t] = void 0)
    }
}
const Oo = /(?:Once|Passive|Capture)$/;
function ll(e) {
    let t;
    if (Oo.test(e)) {
        t = {};
        let n;
        for (; n = e.match(Oo); )
            e = e.slice(0, e.length - n[0].length),
            t[n[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : yt(e.slice(2)), t]
}
let tn = 0;
const ul = Promise.resolve()
  , fl = ()=>tn || (ul.then(()=>tn = 0),
tn = Date.now());
function ml(e, t) {
    const s = n=>{
        if (!n._vts)
            n._vts = Date.now();
        else if (n._vts <= s.attached)
            return;
        ke(dl(n, s.value), t, 5, [n])
    }
    ;
    return s.value = e,
    s.attached = fl(),
    s
}
function dl(e, t) {
    if (M(t)) {
        const s = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = ()=>{
            s.call(e),
            e._stopped = !0
        }
        ,
        t.map(n=>o=>!o._stopped && n && n(o))
    } else
        return t
}
const Po = /^on[a-z]/
  , gl = (e,t,s,n,o=!1,i,r,a,c)=>{
    t === "class" ? sl(e, n, o) : t === "style" ? nl(e, s, n) : Os(t) ? Dn(t) || cl(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : pl(e, t, n, o)) ? rl(e, t, n, i, r, a, c) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n),
    il(e, t, n, o))
}
;
function pl(e, t, s, n) {
    return n ? !!(t === "innerHTML" || t === "textContent" || t in e && Po.test(t) && B(s)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Po.test(t) && oe(s) ? !1 : t in e
}
const Je = "transition"
  , Ut = "animation"
  , br = (e,{slots: t})=>qn(Ki, _r(e), t);
br.displayName = "Transition";
const yr = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
}
  , hl = br.props = me({}, Ki.props, yr)
  , ut = (e,t=[])=>{
    M(e) ? e.forEach(s=>s(...t)) : e && e(...t)
}
  , Lo = e=>e ? M(e) ? e.some(t=>t.length > 1) : e.length > 1 : !1;
function _r(e) {
    const t = {};
    for (const L in e)
        L in yr || (t[L] = e[L]);
    if (e.css === !1)
        return t;
    const {name: s="v", type: n, duration: o, enterFromClass: i=`${s}-enter-from`, enterActiveClass: r=`${s}-enter-active`, enterToClass: a=`${s}-enter-to`, appearFromClass: c=i, appearActiveClass: l=r, appearToClass: f=a, leaveFromClass: p=`${s}-leave-from`, leaveActiveClass: g=`${s}-leave-active`, leaveToClass: v=`${s}-leave-to`} = e
      , C = bl(o)
      , S = C && C[0]
      , R = C && C[1]
      , {onBeforeEnter: I, onEnter: W, onEnterCancelled: N, onLeave: k, onLeaveCancelled: $, onBeforeAppear: j=I, onAppear: V=W, onAppearCancelled: F=N} = t
      , z = (L,ee,be)=>{
        Xe(L, ee ? f : a),
        Xe(L, ee ? l : r),
        be && be()
    }
      , Y = (L,ee)=>{
        L._isLeaving = !1,
        Xe(L, p),
        Xe(L, v),
        Xe(L, g),
        ee && ee()
    }
      , q = L=>(ee,be)=>{
        const at = L ? V : W
          , ce = ()=>z(ee, L, be);
        ut(at, [ee, ce]),
        Mo(()=>{
            Xe(ee, L ? c : i),
            He(ee, L ? f : a),
            Lo(at) || Fo(ee, n, S, ce)
        }
        )
    }
    ;
    return me(t, {
        onBeforeEnter(L) {
            ut(I, [L]),
            He(L, i),
            He(L, r)
        },
        onBeforeAppear(L) {
            ut(j, [L]),
            He(L, c),
            He(L, l)
        },
        onEnter: q(!1),
        onAppear: q(!0),
        onLeave(L, ee) {
            L._isLeaving = !0;
            const be = ()=>Y(L, ee);
            He(L, p),
            vr(),
            He(L, g),
            Mo(()=>{
                L._isLeaving && (Xe(L, p),
                He(L, v),
                Lo(k) || Fo(L, n, R, be))
            }
            ),
            ut(k, [L, be])
        },
        onEnterCancelled(L) {
            z(L, !1),
            ut(N, [L])
        },
        onAppearCancelled(L) {
            z(L, !0),
            ut(F, [L])
        },
        onLeaveCancelled(L) {
            Y(L),
            ut($, [L])
        }
    })
}
function bl(e) {
    if (e == null)
        return null;
    if (te(e))
        return [sn(e.enter), sn(e.leave)];
    {
        const t = sn(e);
        return [t, t]
    }
}
function sn(e) {
    return aa(e)
}
function He(e, t) {
    t.split(/\s+/).forEach(s=>s && e.classList.add(s)),
    (e._vtc || (e._vtc = new Set)).add(t)
}
function Xe(e, t) {
    t.split(/\s+/).forEach(n=>n && e.classList.remove(n));
    const {_vtc: s} = e;
    s && (s.delete(t),
    s.size || (e._vtc = void 0))
}
function Mo(e) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(e)
    }
    )
}
let yl = 0;
function Fo(e, t, s, n) {
    const o = e._endId = ++yl
      , i = ()=>{
        o === e._endId && n()
    }
    ;
    if (s)
        return setTimeout(i, s);
    const {type: r, timeout: a, propCount: c} = Tr(e, t);
    if (!r)
        return n();
    const l = r + "end";
    let f = 0;
    const p = ()=>{
        e.removeEventListener(l, g),
        i()
    }
      , g = v=>{
        v.target === e && ++f >= c && p()
    }
    ;
    setTimeout(()=>{
        f < c && p()
    }
    , a + 1),
    e.addEventListener(l, g)
}
function Tr(e, t) {
    const s = window.getComputedStyle(e)
      , n = C=>(s[C] || "").split(", ")
      , o = n(`${Je}Delay`)
      , i = n(`${Je}Duration`)
      , r = Ro(o, i)
      , a = n(`${Ut}Delay`)
      , c = n(`${Ut}Duration`)
      , l = Ro(a, c);
    let f = null
      , p = 0
      , g = 0;
    t === Je ? r > 0 && (f = Je,
    p = r,
    g = i.length) : t === Ut ? l > 0 && (f = Ut,
    p = l,
    g = c.length) : (p = Math.max(r, l),
    f = p > 0 ? r > l ? Je : Ut : null,
    g = f ? f === Je ? i.length : c.length : 0);
    const v = f === Je && /\b(transform|all)(,|$)/.test(n(`${Je}Property`).toString());
    return {
        type: f,
        timeout: p,
        propCount: g,
        hasTransform: v
    }
}
function Ro(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map((s,n)=>Wo(s) + Wo(e[n])))
}
function Wo(e) {
    return Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function vr() {
    return document.body.offsetHeight
}
const $r = new WeakMap
  , wr = new WeakMap
  , Er = {
    name: "TransitionGroup",
    props: me({}, hl, {
        tag: String,
        moveClass: String
    }),
    setup(e, {slots: t}) {
        const s = Mt()
          , n = zi();
        let o, i;
        return Gi(()=>{
            if (!o.length)
                return;
            const r = e.moveClass || `${e.name || "v"}-move`;
            if (!wl(o[0].el, s.vnode.el, r))
                return;
            o.forEach(Tl),
            o.forEach(vl);
            const a = o.filter($l);
            vr(),
            a.forEach(c=>{
                const l = c.el
                  , f = l.style;
                He(l, r),
                f.transform = f.webkitTransform = f.transitionDuration = "";
                const p = l._moveCb = g=>{
                    g && g.target !== l || (!g || /transform$/.test(g.propertyName)) && (l.removeEventListener("transitionend", p),
                    l._moveCb = null,
                    Xe(l, r))
                }
                ;
                l.addEventListener("transitionend", p)
            }
            )
        }
        ),
        ()=>{
            const r = K(e)
              , a = _r(r);
            let c = r.tag || $e;
            o = i,
            i = t.default ? Bn(t.default()) : [];
            for (let l = 0; l < i.length; l++) {
                const f = i[l];
                f.key != null && ns(f, ss(f, a, n, s))
            }
            if (o)
                for (let l = 0; l < o.length; l++) {
                    const f = o[l];
                    ns(f, ss(f, a, n, s)),
                    $r.set(f, f.el.getBoundingClientRect())
                }
            return he(c, null, i)
        }
    }
}
  , _l = e=>delete e.mode;
Er.props;
const l$ = Er;
function Tl(e) {
    const t = e.el;
    t._moveCb && t._moveCb(),
    t._enterCb && t._enterCb()
}
function vl(e) {
    wr.set(e, e.el.getBoundingClientRect())
}
function $l(e) {
    const t = $r.get(e)
      , s = wr.get(e)
      , n = t.left - s.left
      , o = t.top - s.top;
    if (n || o) {
        const i = e.el.style;
        return i.transform = i.webkitTransform = `translate(${n}px,${o}px)`,
        i.transitionDuration = "0s",
        e
    }
}
function wl(e, t, s) {
    const n = e.cloneNode();
    e._vtc && e._vtc.forEach(r=>{
        r.split(/\s+/).forEach(a=>a && n.classList.remove(a))
    }
    ),
    s.split(/\s+/).forEach(r=>r && n.classList.add(r)),
    n.style.display = "none";
    const o = t.nodeType === 1 ? t : t.parentNode;
    o.appendChild(n);
    const {hasTransform: i} = Tr(n);
    return o.removeChild(n),
    i
}
const Nt = e=>{
    const t = e.props["onUpdate:modelValue"] || !1;
    return M(t) ? s=>vs(t, s) : t
}
;
function El(e) {
    e.target.composing = !0
}
function Bo(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const u$ = {
    created(e, {modifiers: {lazy: t, trim: s, number: n}}, o) {
        e._assign = Nt(o);
        const i = n || o.props && o.props.type === "number";
        et(e, t ? "change" : "input", r=>{
            if (r.target.composing)
                return;
            let a = e.value;
            s && (a = a.trim()),
            i && (a = Es(a)),
            e._assign(a)
        }
        ),
        s && et(e, "change", ()=>{
            e.value = e.value.trim()
        }
        ),
        t || (et(e, "compositionstart", El),
        et(e, "compositionend", Bo),
        et(e, "change", Bo))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, modifiers: {lazy: s, trim: n, number: o}}, i) {
        if (e._assign = Nt(i),
        e.composing || document.activeElement === e && e.type !== "range" && (s || n && e.value.trim() === t || (o || e.type === "number") && Es(e.value) === t))
            return;
        const r = t ?? "";
        e.value !== r && (e.value = r)
    }
}
  , f$ = {
    deep: !0,
    created(e, t, s) {
        e._assign = Nt(s),
        et(e, "change", ()=>{
            const n = e._modelValue
              , o = rs(e)
              , i = e.checked
              , r = e._assign;
            if (M(n)) {
                const a = Sn(n, o)
                  , c = a !== -1;
                if (i && !c)
                    r(n.concat(o));
                else if (!i && c) {
                    const l = [...n];
                    l.splice(a, 1),
                    r(l)
                }
            } else if (Ot(n)) {
                const a = new Set(n);
                i ? a.add(o) : a.delete(o),
                r(a)
            } else
                r(Sr(e, i))
        }
        )
    },
    mounted: Uo,
    beforeUpdate(e, t, s) {
        e._assign = Nt(s),
        Uo(e, t, s)
    }
};
function Uo(e, {value: t, oldValue: s}, n) {
    e._modelValue = t,
    M(t) ? e.checked = Sn(t, n.props.value) > -1 : Ot(t) ? e.checked = t.has(n.props.value) : t !== s && (e.checked = cs(t, Sr(e, !0)))
}
const m$ = {
    deep: !0,
    created(e, {value: t, modifiers: {number: s}}, n) {
        const o = Ot(t);
        et(e, "change", ()=>{
            const i = Array.prototype.filter.call(e.options, r=>r.selected).map(r=>s ? Es(rs(r)) : rs(r));
            e._assign(e.multiple ? o ? new Set(i) : i : i[0])
        }
        ),
        e._assign = Nt(n)
    },
    mounted(e, {value: t}) {
        jo(e, t)
    },
    beforeUpdate(e, t, s) {
        e._assign = Nt(s)
    },
    updated(e, {value: t}) {
        jo(e, t)
    }
};
function jo(e, t) {
    const s = e.multiple;
    if (!(s && !M(t) && !Ot(t))) {
        for (let n = 0, o = e.options.length; n < o; n++) {
            const i = e.options[n]
              , r = rs(i);
            if (s)
                M(t) ? i.selected = Sn(t, r) > -1 : i.selected = t.has(r);
            else if (cs(rs(i), t)) {
                e.selectedIndex !== n && (e.selectedIndex = n);
                return
            }
        }
        !s && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}
function rs(e) {
    return "_value"in e ? e._value : e.value
}
function Sr(e, t) {
    const s = t ? "_trueValue" : "_falseValue";
    return s in e ? e[s] : t
}
const Sl = ["ctrl", "shift", "alt", "meta"]
  , Dl = {
    stop: e=>e.stopPropagation(),
    prevent: e=>e.preventDefault(),
    self: e=>e.target !== e.currentTarget,
    ctrl: e=>!e.ctrlKey,
    shift: e=>!e.shiftKey,
    alt: e=>!e.altKey,
    meta: e=>!e.metaKey,
    left: e=>"button"in e && e.button !== 0,
    middle: e=>"button"in e && e.button !== 1,
    right: e=>"button"in e && e.button !== 2,
    exact: (e,t)=>Sl.some(s=>e[`${s}Key`] && !t.includes(s))
}
  , d$ = (e,t)=>(s,...n)=>{
    for (let o = 0; o < t.length; o++) {
        const i = Dl[t[o]];
        if (i && i(s, t))
            return
    }
    return e(s, ...n)
}
  , Cl = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , g$ = (e,t)=>s=>{
    if (!("key"in s))
        return;
    const n = yt(s.key);
    if (t.some(o=>o === n || Cl[o] === n))
        return e(s)
}
  , p$ = {
    beforeMount(e, {value: t}, {transition: s}) {
        e._vod = e.style.display === "none" ? "" : e.style.display,
        s && t ? s.beforeEnter(e) : jt(e, t)
    },
    mounted(e, {value: t}, {transition: s}) {
        s && t && s.enter(e)
    },
    updated(e, {value: t, oldValue: s}, {transition: n}) {
        !t != !s && (n ? t ? (n.beforeEnter(e),
        jt(e, !0),
        n.enter(e)) : n.leave(e, ()=>{
            jt(e, !1)
        }
        ) : jt(e, t))
    },
    beforeUnmount(e, {value: t}) {
        jt(e, t)
    }
};
function jt(e, t) {
    e.style.display = t ? e._vod : "none"
}
const Al = me({
    patchProp: gl
}, tl);
let Vo;
function Il() {
    return Vo || (Vo = xc(Al))
}
const h$ = (...e)=>{
    const t = Il().createApp(...e)
      , {mount: s} = t;
    return t.mount = n=>{
        const o = kl(n);
        if (!o)
            return;
        const i = t._component;
        !B(i) && !i.render && !i.template && (i.template = o.innerHTML),
        o.innerHTML = "";
        const r = s(o, !1, o instanceof SVGElement);
        return o instanceof Element && (o.removeAttribute("v-cloak"),
        o.setAttribute("data-v-app", "")),
        r
    }
    ,
    t
}
;
function kl(e) {
    return oe(e) ? document.querySelector(e) : e
}
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const hn = typeof window < "u"
  , xl = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol"
  , it = e=>xl ? Symbol(e) : e
  , Nl = (e,t,s)=>Ol({
    l: e,
    k: t,
    s
})
  , Ol = e=>JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027")
  , ue = e=>typeof e == "number" && isFinite(e)
  , Pl = e=>Jn(e) === "[object Date]"
  , ks = e=>Jn(e) === "[object RegExp]"
  , Ys = e=>G(e) && Object.keys(e).length === 0;
function Ll(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e),
    t && console.warn(t.stack))
}
const _e = Object.assign;
let Yo;
const Zn = ()=>Yo || (Yo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ho(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const Ml = Object.prototype.hasOwnProperty;
function Gn(e, t) {
    return Ml.call(e, t)
}
const le = Array.isArray
  , de = e=>typeof e == "function"
  , O = e=>typeof e == "string"
  , re = e=>typeof e == "boolean"
  , se = e=>e !== null && typeof e == "object"
  , Dr = Object.prototype.toString
  , Jn = e=>Dr.call(e)
  , G = e=>Jn(e) === "[object Object]"
  , Fl = e=>e == null ? "" : le(e) || G(e) && e.toString === Dr ? JSON.stringify(e, null, 2) : String(e);
/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Cr = {
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
    __EXTEND_POINT__: 15
};
function Ar(e, t, s={}) {
    const {domain: n, messages: o, args: i} = s
      , r = e
      , a = new SyntaxError(String(r));
    return a.code = e,
    t && (a.location = t),
    a.domain = n,
    a
}
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ir = {
    I18nInit: "i18n:init",
    FunctionTranslate: "function:translate"
};
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const rt = [];
rt[0] = {
    w: [0],
    i: [3, 0],
    ["["]: [4],
    o: [7]
};
rt[1] = {
    w: [1],
    ["."]: [2],
    ["["]: [4],
    o: [7]
};
rt[2] = {
    w: [2],
    i: [3, 0],
    [0]: [3, 0]
};
rt[3] = {
    i: [3, 0],
    [0]: [3, 0],
    w: [1, 1],
    ["."]: [2, 1],
    ["["]: [4, 1],
    o: [7, 1]
};
rt[4] = {
    ["'"]: [5, 0],
    ['"']: [6, 0],
    ["["]: [4, 2],
    ["]"]: [1, 3],
    o: 8,
    l: [4, 0]
};
rt[5] = {
    ["'"]: [4, 0],
    o: 8,
    l: [5, 0]
};
rt[6] = {
    ['"']: [4, 0],
    o: 8,
    l: [6, 0]
};
const Rl = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Wl(e) {
    return Rl.test(e)
}
function Bl(e) {
    const t = e.charCodeAt(0)
      , s = e.charCodeAt(e.length - 1);
    return t === s && (t === 34 || t === 39) ? e.slice(1, -1) : e
}
function Ul(e) {
    if (e == null)
        return "o";
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
        return "w"
    }
    return "i"
}
function jl(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Wl(t) ? Bl(t) : "*" + t
}
function Vl(e) {
    const t = [];
    let s = -1, n = 0, o = 0, i, r, a, c, l, f, p;
    const g = [];
    g[0] = ()=>{
        r === void 0 ? r = a : r += a
    }
    ,
    g[1] = ()=>{
        r !== void 0 && (t.push(r),
        r = void 0)
    }
    ,
    g[2] = ()=>{
        g[0](),
        o++
    }
    ,
    g[3] = ()=>{
        if (o > 0)
            o--,
            n = 4,
            g[0]();
        else {
            if (o = 0,
            r === void 0 || (r = jl(r),
            r === !1))
                return !1;
            g[1]()
        }
    }
    ;
    function v() {
        const C = e[s + 1];
        if (n === 5 && C === "'" || n === 6 && C === '"')
            return s++,
            a = "\\" + C,
            g[0](),
            !0
    }
    for (; n !== null; )
        if (s++,
        i = e[s],
        !(i === "\\" && v())) {
            if (c = Ul(i),
            p = rt[n],
            l = p[c] || p.l || 8,
            l === 8 || (n = l[0],
            l[1] !== void 0 && (f = g[l[1]],
            f && (a = i,
            f() === !1))))
                return;
            if (n === 7)
                return t
        }
}
const zo = new Map;
function Yl(e, t) {
    return se(e) ? e[t] : null
}
function Hl(e, t) {
    if (!se(e))
        return null;
    let s = zo.get(t);
    if (s || (s = Vl(t),
    s && zo.set(t, s)),
    !s)
        return null;
    const n = s.length;
    let o = e
      , i = 0;
    for (; i < n; ) {
        const r = o[s[i]];
        if (r === void 0)
            return null;
        o = r,
        i++
    }
    return o
}
const zl = e=>e
  , Kl = e=>""
  , ql = "text"
  , Zl = e=>e.length === 0 ? "" : e.join("")
  , Gl = Fl;
function Ko(e, t) {
    return e = Math.abs(e),
    t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}
function Jl(e) {
    const t = ue(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (ue(e.named.count) || ue(e.named.n)) ? ue(e.named.count) ? e.named.count : ue(e.named.n) ? e.named.n : t : t
}
function Xl(e, t) {
    t.count || (t.count = e),
    t.n || (t.n = e)
}
function Ql(e={}) {
    const t = e.locale
      , s = Jl(e)
      , n = se(e.pluralRules) && O(t) && de(e.pluralRules[t]) ? e.pluralRules[t] : Ko
      , o = se(e.pluralRules) && O(t) && de(e.pluralRules[t]) ? Ko : void 0
      , i = I=>I[n(s, I.length, o)]
      , r = e.list || []
      , a = I=>r[I]
      , c = e.named || {};
    ue(e.pluralIndex) && Xl(s, c);
    const l = I=>c[I];
    function f(I) {
        const W = de(e.messages) ? e.messages(I) : se(e.messages) ? e.messages[I] : !1;
        return W || (e.parent ? e.parent.message(I) : Kl)
    }
    const p = I=>e.modifiers ? e.modifiers[I] : zl
      , g = G(e.processor) && de(e.processor.normalize) ? e.processor.normalize : Zl
      , v = G(e.processor) && de(e.processor.interpolate) ? e.processor.interpolate : Gl
      , C = G(e.processor) && O(e.processor.type) ? e.processor.type : ql
      , R = {
        list: a,
        named: l,
        plural: i,
        linked: (I,...W)=>{
            const [N,k] = W;
            let $ = "text"
              , j = "";
            W.length === 1 ? se(N) ? (j = N.modifier || j,
            $ = N.type || $) : O(N) && (j = N || j) : W.length === 2 && (O(N) && (j = N || j),
            O(k) && ($ = k || $));
            let V = f(I)(R);
            return $ === "vnode" && le(V) && j && (V = V[0]),
            j ? p(j)(V, $) : V
        }
        ,
        message: f,
        type: C,
        interpolate: v,
        normalize: g
    };
    return R
}
let as = null;
function eu(e) {
    as = e
}
function tu(e, t, s) {
    as && as.emit(Ir.I18nInit, {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: s
    })
}
const su = nu(Ir.FunctionTranslate);
function nu(e) {
    return t=>as && as.emit(e, t)
}
function ou(e, t, s) {
    return [...new Set([s, ...le(t) ? t : se(t) ? Object.keys(t) : O(t) ? [t] : [s]])]
}
function kr(e, t, s) {
    const n = O(s) ? s : Xn
      , o = e;
    o.__localeChainCache || (o.__localeChainCache = new Map);
    let i = o.__localeChainCache.get(n);
    if (!i) {
        i = [];
        let r = [s];
        for (; le(r); )
            r = qo(i, r, t);
        const a = le(t) || !G(t) ? t : t.default ? t.default : null;
        r = O(a) ? [a] : a,
        le(r) && qo(i, r, !1),
        o.__localeChainCache.set(n, i)
    }
    return i
}
function qo(e, t, s) {
    let n = !0;
    for (let o = 0; o < t.length && re(n); o++) {
        const i = t[o];
        O(i) && (n = iu(e, t[o], s))
    }
    return n
}
function iu(e, t, s) {
    let n;
    const o = t.split("-");
    do {
        const i = o.join("-");
        n = ru(e, i, s),
        o.splice(-1, 1)
    } while (o.length && n === !0);
    return n
}
function ru(e, t, s) {
    let n = !1;
    if (!e.includes(t) && (n = !0,
    t)) {
        n = t[t.length - 1] !== "!";
        const o = t.replace(/!/g, "");
        e.push(o),
        (le(s) || G(s)) && s[o] && (n = s[o])
    }
    return n
}
const au = "9.2.2"
  , Hs = -1
  , Xn = "en-US"
  , Zo = ""
  , Go = e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function cu() {
    return {
        upper: (e,t)=>t === "text" && O(e) ? e.toUpperCase() : t === "vnode" && se(e) && "__v_isVNode"in e ? e.children.toUpperCase() : e,
        lower: (e,t)=>t === "text" && O(e) ? e.toLowerCase() : t === "vnode" && se(e) && "__v_isVNode"in e ? e.children.toLowerCase() : e,
        capitalize: (e,t)=>t === "text" && O(e) ? Go(e) : t === "vnode" && se(e) && "__v_isVNode"in e ? Go(e.children) : e
    }
}
let lu, xr;
function uu(e) {
    xr = e
}
let Nr;
function fu(e) {
    Nr = e
}
let Or = null;
const Jo = e=>{
    Or = e
}
  , mu = ()=>Or;
let Pr = null;
const Xo = e=>{
    Pr = e
}
  , du = ()=>Pr;
let Qo = 0;
function gu(e={}) {
    const t = O(e.version) ? e.version : au
      , s = O(e.locale) ? e.locale : Xn
      , n = le(e.fallbackLocale) || G(e.fallbackLocale) || O(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s
      , o = G(e.messages) ? e.messages : {
        [s]: {}
    }
      , i = G(e.datetimeFormats) ? e.datetimeFormats : {
        [s]: {}
    }
      , r = G(e.numberFormats) ? e.numberFormats : {
        [s]: {}
    }
      , a = _e({}, e.modifiers || {}, cu())
      , c = e.pluralRules || {}
      , l = de(e.missing) ? e.missing : null
      , f = re(e.missingWarn) || ks(e.missingWarn) ? e.missingWarn : !0
      , p = re(e.fallbackWarn) || ks(e.fallbackWarn) ? e.fallbackWarn : !0
      , g = !!e.fallbackFormat
      , v = !!e.unresolving
      , C = de(e.postTranslation) ? e.postTranslation : null
      , S = G(e.processor) ? e.processor : null
      , R = re(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , I = !!e.escapeParameter
      , W = de(e.messageCompiler) ? e.messageCompiler : lu
      , N = de(e.messageResolver) ? e.messageResolver : xr || Yl
      , k = de(e.localeFallbacker) ? e.localeFallbacker : Nr || ou
      , $ = se(e.fallbackContext) ? e.fallbackContext : void 0
      , j = de(e.onWarn) ? e.onWarn : Ll
      , V = e
      , F = se(V.__datetimeFormatters) ? V.__datetimeFormatters : new Map
      , z = se(V.__numberFormatters) ? V.__numberFormatters : new Map
      , Y = se(V.__meta) ? V.__meta : {};
    Qo++;
    const q = {
        version: t,
        cid: Qo,
        locale: s,
        fallbackLocale: n,
        messages: o,
        modifiers: a,
        pluralRules: c,
        missing: l,
        missingWarn: f,
        fallbackWarn: p,
        fallbackFormat: g,
        unresolving: v,
        postTranslation: C,
        processor: S,
        warnHtmlMessage: R,
        escapeParameter: I,
        messageCompiler: W,
        messageResolver: N,
        localeFallbacker: k,
        fallbackContext: $,
        onWarn: j,
        __meta: Y
    };
    return q.datetimeFormats = i,
    q.numberFormats = r,
    q.__datetimeFormatters = F,
    q.__numberFormatters = z,
    __INTLIFY_PROD_DEVTOOLS__ && tu(q, t, Y),
    q
}
function Qn(e, t, s, n, o) {
    const {missing: i, onWarn: r} = e;
    if (i !== null) {
        const a = i(e, s, t, o);
        return O(a) ? a : t
    } else
        return t
}
function Vt(e, t, s) {
    const n = e;
    n.__localeChainCache = new Map,
    e.localeFallbacker(e, s, t)
}
let Lr = Cr.__EXTEND_POINT__;
const nn = ()=>++Lr
  , wt = {
    INVALID_ARGUMENT: Lr,
    INVALID_DATE_ARGUMENT: nn(),
    INVALID_ISO_DATE_ARGUMENT: nn(),
    __EXTEND_POINT__: nn()
};
function Et(e) {
    return Ar(e, null, void 0)
}
const ei = ()=>""
  , Be = e=>de(e);
function ti(e, ...t) {
    const {fallbackFormat: s, postTranslation: n, unresolving: o, messageCompiler: i, fallbackLocale: r, messages: a} = e
      , [c,l] = bn(...t)
      , f = re(l.missingWarn) ? l.missingWarn : e.missingWarn
      , p = re(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn
      , g = re(l.escapeParameter) ? l.escapeParameter : e.escapeParameter
      , v = !!l.resolvedMessage
      , C = O(l.default) || re(l.default) ? re(l.default) ? i ? c : ()=>c : l.default : s ? i ? c : ()=>c : ""
      , S = s || C !== ""
      , R = O(l.locale) ? l.locale : e.locale;
    g && pu(l);
    let[I,W,N] = v ? [c, R, a[R] || {}] : Mr(e, c, R, r, p, f)
      , k = I
      , $ = c;
    if (!v && !(O(k) || Be(k)) && S && (k = C,
    $ = k),
    !v && (!(O(k) || Be(k)) || !O(W)))
        return o ? Hs : c;
    let j = !1;
    const V = ()=>{
        j = !0
    }
      , F = Be(k) ? k : Fr(e, c, W, k, $, V);
    if (j)
        return k;
    const z = yu(e, W, N, l)
      , Y = Ql(z)
      , q = hu(e, F, Y)
      , L = n ? n(q, c) : q;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const ee = {
            timestamp: Date.now(),
            key: O(c) ? c : Be(k) ? k.key : "",
            locale: W || (Be(k) ? k.locale : ""),
            format: O(k) ? k : Be(k) ? k.source : "",
            message: L
        };
        ee.meta = _e({}, e.__meta, mu() || {}),
        su(ee)
    }
    return L
}
function pu(e) {
    le(e.list) ? e.list = e.list.map(t=>O(t) ? Ho(t) : t) : se(e.named) && Object.keys(e.named).forEach(t=>{
        O(e.named[t]) && (e.named[t] = Ho(e.named[t]))
    }
    )
}
function Mr(e, t, s, n, o, i) {
    const {messages: r, onWarn: a, messageResolver: c, localeFallbacker: l} = e
      , f = l(e, n, s);
    let p = {}, g, v = null;
    const C = "translate";
    for (let S = 0; S < f.length && (g = f[S],
    p = r[g] || {},
    (v = c(p, t)) === null && (v = p[t]),
    !(O(v) || de(v))); S++) {
        const R = Qn(e, t, g, i, C);
        R !== t && (v = R)
    }
    return [v, g, p]
}
function Fr(e, t, s, n, o, i) {
    const {messageCompiler: r, warnHtmlMessage: a} = e;
    if (Be(n)) {
        const l = n;
        return l.locale = l.locale || s,
        l.key = l.key || t,
        l
    }
    if (r == null) {
        const l = ()=>n;
        return l.locale = s,
        l.key = t,
        l
    }
    const c = r(n, bu(e, s, o, n, a, i));
    return c.locale = s,
    c.key = t,
    c.source = n,
    c
}
function hu(e, t, s) {
    return t(s)
}
function bn(...e) {
    const [t,s,n] = e
      , o = {};
    if (!O(t) && !ue(t) && !Be(t))
        throw Et(wt.INVALID_ARGUMENT);
    const i = ue(t) ? String(t) : (Be(t),
    t);
    return ue(s) ? o.plural = s : O(s) ? o.default = s : G(s) && !Ys(s) ? o.named = s : le(s) && (o.list = s),
    ue(n) ? o.plural = n : O(n) ? o.default = n : G(n) && _e(o, n),
    [i, o]
}
function bu(e, t, s, n, o, i) {
    return {
        warnHtmlMessage: o,
        onError: r=>{
            throw i && i(r),
            r
        }
        ,
        onCacheKey: r=>Nl(t, s, r)
    }
}
function yu(e, t, s, n) {
    const {modifiers: o, pluralRules: i, messageResolver: r, fallbackLocale: a, fallbackWarn: c, missingWarn: l, fallbackContext: f} = e
      , g = {
        locale: t,
        modifiers: o,
        pluralRules: i,
        messages: v=>{
            let C = r(s, v);
            if (C == null && f) {
                const [,,S] = Mr(f, v, t, a, c, l);
                C = r(S, v)
            }
            if (O(C)) {
                let S = !1;
                const I = Fr(e, v, t, C, v, ()=>{
                    S = !0
                }
                );
                return S ? ei : I
            } else
                return Be(C) ? C : ei
        }
    };
    return e.processor && (g.processor = e.processor),
    n.list && (g.list = n.list),
    n.named && (g.named = n.named),
    ue(n.plural) && (g.pluralIndex = n.plural),
    g
}
function si(e, ...t) {
    const {datetimeFormats: s, unresolving: n, fallbackLocale: o, onWarn: i, localeFallbacker: r} = e
      , {__datetimeFormatters: a} = e
      , [c,l,f,p] = yn(...t)
      , g = re(f.missingWarn) ? f.missingWarn : e.missingWarn;
    re(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
    const v = !!f.part
      , C = O(f.locale) ? f.locale : e.locale
      , S = r(e, o, C);
    if (!O(c) || c === "")
        return new Intl.DateTimeFormat(C,p).format(l);
    let R = {}, I, W = null;
    const N = "datetime format";
    for (let j = 0; j < S.length && (I = S[j],
    R = s[I] || {},
    W = R[c],
    !G(W)); j++)
        Qn(e, c, I, g, N);
    if (!G(W) || !O(I))
        return n ? Hs : c;
    let k = `${I}__${c}`;
    Ys(p) || (k = `${k}__${JSON.stringify(p)}`);
    let $ = a.get(k);
    return $ || ($ = new Intl.DateTimeFormat(I,_e({}, W, p)),
    a.set(k, $)),
    v ? $.formatToParts(l) : $.format(l)
}
const Rr = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];
function yn(...e) {
    const [t,s,n,o] = e
      , i = {};
    let r = {}, a;
    if (O(t)) {
        const c = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!c)
            throw Et(wt.INVALID_ISO_DATE_ARGUMENT);
        const l = c[3] ? c[3].trim().startsWith("T") ? `${c[1].trim()}${c[3].trim()}` : `${c[1].trim()}T${c[3].trim()}` : c[1].trim();
        a = new Date(l);
        try {
            a.toISOString()
        } catch {
            throw Et(wt.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (Pl(t)) {
        if (isNaN(t.getTime()))
            throw Et(wt.INVALID_DATE_ARGUMENT);
        a = t
    } else if (ue(t))
        a = t;
    else
        throw Et(wt.INVALID_ARGUMENT);
    return O(s) ? i.key = s : G(s) && Object.keys(s).forEach(c=>{
        Rr.includes(c) ? r[c] = s[c] : i[c] = s[c]
    }
    ),
    O(n) ? i.locale = n : G(n) && (r = n),
    G(o) && (r = o),
    [i.key || "", a, i, r]
}
function ni(e, t, s) {
    const n = e;
    for (const o in s) {
        const i = `${t}__${o}`;
        n.__datetimeFormatters.has(i) && n.__datetimeFormatters.delete(i)
    }
}
function oi(e, ...t) {
    const {numberFormats: s, unresolving: n, fallbackLocale: o, onWarn: i, localeFallbacker: r} = e
      , {__numberFormatters: a} = e
      , [c,l,f,p] = _n(...t)
      , g = re(f.missingWarn) ? f.missingWarn : e.missingWarn;
    re(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
    const v = !!f.part
      , C = O(f.locale) ? f.locale : e.locale
      , S = r(e, o, C);
    if (!O(c) || c === "")
        return new Intl.NumberFormat(C,p).format(l);
    let R = {}, I, W = null;
    const N = "number format";
    for (let j = 0; j < S.length && (I = S[j],
    R = s[I] || {},
    W = R[c],
    !G(W)); j++)
        Qn(e, c, I, g, N);
    if (!G(W) || !O(I))
        return n ? Hs : c;
    let k = `${I}__${c}`;
    Ys(p) || (k = `${k}__${JSON.stringify(p)}`);
    let $ = a.get(k);
    return $ || ($ = new Intl.NumberFormat(I,_e({}, W, p)),
    a.set(k, $)),
    v ? $.formatToParts(l) : $.format(l)
}
const Wr = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];
function _n(...e) {
    const [t,s,n,o] = e
      , i = {};
    let r = {};
    if (!ue(t))
        throw Et(wt.INVALID_ARGUMENT);
    const a = t;
    return O(s) ? i.key = s : G(s) && Object.keys(s).forEach(c=>{
        Wr.includes(c) ? r[c] = s[c] : i[c] = s[c]
    }
    ),
    O(n) ? i.locale = n : G(n) && (r = n),
    G(o) && (r = o),
    [i.key || "", a, i, r]
}
function ii(e, t, s) {
    const n = e;
    for (const o in s) {
        const i = `${t}__${o}`;
        n.__numberFormatters.has(i) && n.__numberFormatters.delete(i)
    }
}
typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Zn().__INTLIFY_PROD_DEVTOOLS__ = !1);
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const _u = "9.2.2";
function Tu() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Zn().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
let Br = Cr.__EXTEND_POINT__;
const Te = ()=>++Br
  , De = {
    UNEXPECTED_RETURN_TYPE: Br,
    INVALID_ARGUMENT: Te(),
    MUST_BE_CALL_SETUP_TOP: Te(),
    NOT_INSLALLED: Te(),
    NOT_AVAILABLE_IN_LEGACY_MODE: Te(),
    REQUIRED_VALUE: Te(),
    INVALID_VALUE: Te(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Te(),
    NOT_INSLALLED_WITH_PROVIDE: Te(),
    UNEXPECTED_ERROR: Te(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: Te(),
    BRIDGE_SUPPORT_VUE_2_ONLY: Te(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Te(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Te(),
    __EXTEND_POINT__: Te()
};
function Ne(e, ...t) {
    return Ar(e, null, void 0)
}
const Tn = it("__transrateVNode")
  , vn = it("__datetimeParts")
  , $n = it("__numberParts")
  , vu = it("__setPluralRules");
it("__intlifyMeta");
const $u = it("__injectWithOption");
function wn(e) {
    if (!se(e))
        return e;
    for (const t in e)
        if (Gn(e, t))
            if (!t.includes("."))
                se(e[t]) && wn(e[t]);
            else {
                const s = t.split(".")
                  , n = s.length - 1;
                let o = e;
                for (let i = 0; i < n; i++)
                    s[i]in o || (o[s[i]] = {}),
                    o = o[s[i]];
                o[s[n]] = e[t],
                delete e[t],
                se(o[s[n]]) && wn(o[s[n]])
            }
    return e
}
function Ur(e, t) {
    const {messages: s, __i18n: n, messageResolver: o, flatJson: i} = t
      , r = G(s) ? s : le(n) ? {} : {
        [e]: {}
    };
    if (le(n) && n.forEach(a=>{
        if ("locale"in a && "resource"in a) {
            const {locale: c, resource: l} = a;
            c ? (r[c] = r[c] || {},
            Gt(l, r[c])) : Gt(l, r)
        } else
            O(a) && Gt(JSON.parse(a), r)
    }
    ),
    o == null && i)
        for (const a in r)
            Gn(r, a) && wn(r[a]);
    return r
}
const _s = e=>!se(e) || le(e);
function Gt(e, t) {
    if (_s(e) || _s(t))
        throw Ne(De.INVALID_VALUE);
    for (const s in e)
        Gn(e, s) && (_s(e[s]) || _s(t[s]) ? t[s] = e[s] : Gt(e[s], t[s]))
}
function jr(e) {
    return e.type
}
function wu(e, t, s) {
    let n = se(t.messages) ? t.messages : {};
    "__i18nGlobal"in s && (n = Ur(e.locale.value, {
        messages: n,
        __i18n: s.__i18nGlobal
    }));
    const o = Object.keys(n);
    o.length && o.forEach(i=>{
        e.mergeLocaleMessage(i, n[i])
    }
    );
    {
        if (se(t.datetimeFormats)) {
            const i = Object.keys(t.datetimeFormats);
            i.length && i.forEach(r=>{
                e.mergeDateTimeFormat(r, t.datetimeFormats[r])
            }
            )
        }
        if (se(t.numberFormats)) {
            const i = Object.keys(t.numberFormats);
            i.length && i.forEach(r=>{
                e.mergeNumberFormat(r, t.numberFormats[r])
            }
            )
        }
    }
}
function ri(e) {
    return he(us, null, e, 0)
}
const ai = "__INTLIFY_META__";
let ci = 0;
function li(e) {
    return (t,s,n,o)=>e(s, n, Mt() || void 0, o)
}
const Eu = ()=>{
    const e = Mt();
    let t = null;
    return e && (t = jr(e)[ai]) ? {
        [ai]: t
    } : null
}
;
function Vr(e={}, t) {
    const {__root: s} = e
      , n = s === void 0;
    let o = re(e.inheritLocale) ? e.inheritLocale : !0;
    const i = Bt(s && o ? s.locale.value : O(e.locale) ? e.locale : Xn)
      , r = Bt(s && o ? s.fallbackLocale.value : O(e.fallbackLocale) || le(e.fallbackLocale) || G(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value)
      , a = Bt(Ur(i.value, e))
      , c = Bt(G(e.datetimeFormats) ? e.datetimeFormats : {
        [i.value]: {}
    })
      , l = Bt(G(e.numberFormats) ? e.numberFormats : {
        [i.value]: {}
    });
    let f = s ? s.missingWarn : re(e.missingWarn) || ks(e.missingWarn) ? e.missingWarn : !0
      , p = s ? s.fallbackWarn : re(e.fallbackWarn) || ks(e.fallbackWarn) ? e.fallbackWarn : !0
      , g = s ? s.fallbackRoot : re(e.fallbackRoot) ? e.fallbackRoot : !0
      , v = !!e.fallbackFormat
      , C = de(e.missing) ? e.missing : null
      , S = de(e.missing) ? li(e.missing) : null
      , R = de(e.postTranslation) ? e.postTranslation : null
      , I = s ? s.warnHtmlMessage : re(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , W = !!e.escapeParameter;
    const N = s ? s.modifiers : G(e.modifiers) ? e.modifiers : {};
    let k = e.pluralRules || s && s.pluralRules, $;
    $ = (()=>{
        n && Xo(null);
        const d = {
            version: _u,
            locale: i.value,
            fallbackLocale: r.value,
            messages: a.value,
            modifiers: N,
            pluralRules: k,
            missing: S === null ? void 0 : S,
            missingWarn: f,
            fallbackWarn: p,
            fallbackFormat: v,
            unresolving: !0,
            postTranslation: R === null ? void 0 : R,
            warnHtmlMessage: I,
            escapeParameter: W,
            messageResolver: e.messageResolver,
            __meta: {
                framework: "vue"
            }
        };
        d.datetimeFormats = c.value,
        d.numberFormats = l.value,
        d.__datetimeFormatters = G($) ? $.__datetimeFormatters : void 0,
        d.__numberFormatters = G($) ? $.__numberFormatters : void 0;
        const h = gu(d);
        return n && Xo(h),
        h
    }
    )(),
    Vt($, i.value, r.value);
    function V() {
        return [i.value, r.value, a.value, c.value, l.value]
    }
    const F = $t({
        get: ()=>i.value,
        set: d=>{
            i.value = d,
            $.locale = i.value
        }
    })
      , z = $t({
        get: ()=>r.value,
        set: d=>{
            r.value = d,
            $.fallbackLocale = r.value,
            Vt($, i.value, d)
        }
    })
      , Y = $t(()=>a.value)
      , q = $t(()=>c.value)
      , L = $t(()=>l.value);
    function ee() {
        return de(R) ? R : null
    }
    function be(d) {
        R = d,
        $.postTranslation = d
    }
    function at() {
        return C
    }
    function ce(d) {
        d !== null && (S = li(d)),
        C = d,
        $.missing = S
    }
    const X = (d,h,x,P,U,J)=>{
        V();
        let H;
        if (__INTLIFY_PROD_DEVTOOLS__)
            try {
                Jo(Eu()),
                n || ($.fallbackContext = s ? du() : void 0),
                H = d($)
            } finally {
                Jo(null),
                n || ($.fallbackContext = void 0)
            }
        else
            H = d($);
        if (ue(H) && H === Hs) {
            const [ie,Ae] = h();
            return s && g ? P(s) : U(ie)
        } else {
            if (J(H))
                return H;
            throw Ne(De.UNEXPECTED_RETURN_TYPE)
        }
    }
    ;
    function Q(...d) {
        return X(h=>Reflect.apply(ti, null, [h, ...d]), ()=>bn(...d), "translate", h=>Reflect.apply(h.t, h, [...d]), h=>h, h=>O(h))
    }
    function Ve(...d) {
        const [h,x,P] = d;
        if (P && !se(P))
            throw Ne(De.INVALID_ARGUMENT);
        return Q(h, x, _e({
            resolvedMessage: !0
        }, P || {}))
    }
    function _t(...d) {
        return X(h=>Reflect.apply(si, null, [h, ...d]), ()=>yn(...d), "datetime format", h=>Reflect.apply(h.d, h, [...d]), ()=>Zo, h=>O(h))
    }
    function Ye(...d) {
        return X(h=>Reflect.apply(oi, null, [h, ...d]), ()=>_n(...d), "number format", h=>Reflect.apply(h.n, h, [...d]), ()=>Zo, h=>O(h))
    }
    function Ce(d) {
        return d.map(h=>O(h) || ue(h) || re(h) ? ri(String(h)) : h)
    }
    const Ks = {
        normalize: Ce,
        interpolate: d=>d,
        type: "vnode"
    };
    function qs(...d) {
        return X(h=>{
            let x;
            const P = h;
            try {
                P.processor = Ks,
                x = Reflect.apply(ti, null, [P, ...d])
            } finally {
                P.processor = null
            }
            return x
        }
        , ()=>bn(...d), "translate", h=>h[Tn](...d), h=>[ri(h)], h=>le(h))
    }
    function Oe(...d) {
        return X(h=>Reflect.apply(oi, null, [h, ...d]), ()=>_n(...d), "number format", h=>h[$n](...d), ()=>[], h=>O(h) || le(h))
    }
    function Tt(...d) {
        return X(h=>Reflect.apply(si, null, [h, ...d]), ()=>yn(...d), "datetime format", h=>h[vn](...d), ()=>[], h=>O(h) || le(h))
    }
    function fs(d) {
        k = d,
        $.pluralRules = k
    }
    function Ze(d, h) {
        const x = O(h) ? h : i.value
          , P = u(x);
        return $.messageResolver(P, d) !== null
    }
    function Ft(d) {
        let h = null;
        const x = kr($, r.value, i.value);
        for (let P = 0; P < x.length; P++) {
            const U = a.value[x[P]] || {}
              , J = $.messageResolver(U, d);
            if (J != null) {
                h = J;
                break
            }
        }
        return h
    }
    function Rt(d) {
        const h = Ft(d);
        return h ?? (s ? s.tm(d) || {} : {})
    }
    function u(d) {
        return a.value[d] || {}
    }
    function m(d, h) {
        a.value[d] = h,
        $.messages = a.value
    }
    function b(d, h) {
        a.value[d] = a.value[d] || {},
        Gt(h, a.value[d]),
        $.messages = a.value
    }
    function T(d) {
        return c.value[d] || {}
    }
    function _(d, h) {
        c.value[d] = h,
        $.datetimeFormats = c.value,
        ni($, d, h)
    }
    function E(d, h) {
        c.value[d] = _e(c.value[d] || {}, h),
        $.datetimeFormats = c.value,
        ni($, d, h)
    }
    function A(d) {
        return l.value[d] || {}
    }
    function w(d, h) {
        l.value[d] = h,
        $.numberFormats = l.value,
        ii($, d, h)
    }
    function D(d, h) {
        l.value[d] = _e(l.value[d] || {}, h),
        $.numberFormats = l.value,
        ii($, d, h)
    }
    ci++,
    s && hn && (It(s.locale, d=>{
        o && (i.value = d,
        $.locale = d,
        Vt($, i.value, r.value))
    }
    ),
    It(s.fallbackLocale, d=>{
        o && (r.value = d,
        $.fallbackLocale = d,
        Vt($, i.value, r.value))
    }
    ));
    const y = {
        id: ci,
        locale: F,
        fallbackLocale: z,
        get inheritLocale() {
            return o
        },
        set inheritLocale(d) {
            o = d,
            d && s && (i.value = s.locale.value,
            r.value = s.fallbackLocale.value,
            Vt($, i.value, r.value))
        },
        get availableLocales() {
            return Object.keys(a.value).sort()
        },
        messages: Y,
        get modifiers() {
            return N
        },
        get pluralRules() {
            return k || {}
        },
        get isGlobal() {
            return n
        },
        get missingWarn() {
            return f
        },
        set missingWarn(d) {
            f = d,
            $.missingWarn = f
        },
        get fallbackWarn() {
            return p
        },
        set fallbackWarn(d) {
            p = d,
            $.fallbackWarn = p
        },
        get fallbackRoot() {
            return g
        },
        set fallbackRoot(d) {
            g = d
        },
        get fallbackFormat() {
            return v
        },
        set fallbackFormat(d) {
            v = d,
            $.fallbackFormat = v
        },
        get warnHtmlMessage() {
            return I
        },
        set warnHtmlMessage(d) {
            I = d,
            $.warnHtmlMessage = d
        },
        get escapeParameter() {
            return W
        },
        set escapeParameter(d) {
            W = d,
            $.escapeParameter = d
        },
        t: Q,
        getLocaleMessage: u,
        setLocaleMessage: m,
        mergeLocaleMessage: b,
        getPostTranslationHandler: ee,
        setPostTranslationHandler: be,
        getMissingHandler: at,
        setMissingHandler: ce,
        [vu]: fs
    };
    return y.datetimeFormats = q,
    y.numberFormats = L,
    y.rt = Ve,
    y.te = Ze,
    y.tm = Rt,
    y.d = _t,
    y.n = Ye,
    y.getDateTimeFormat = T,
    y.setDateTimeFormat = _,
    y.mergeDateTimeFormat = E,
    y.getNumberFormat = A,
    y.setNumberFormat = w,
    y.mergeNumberFormat = D,
    y[$u] = e.__injectWithOption,
    y[Tn] = qs,
    y[vn] = Tt,
    y[$n] = Oe,
    y
}
const eo = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        validator: e=>e === "parent" || e === "global",
        default: "parent"
    },
    i18n: {
        type: Object
    }
};
function Su({slots: e}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n,o)=>n = [...n, ...le(o.children) ? o.children : [o]], []) : t.reduce((s,n)=>{
        const o = e[n];
        return o && (s[n] = o()),
        s
    }
    , {})
}
function Yr(e) {
    return $e
}
const ui = {
    name: "i18n-t",
    props: _e({
        keypath: {
            type: String,
            required: !0
        },
        plural: {
            type: [Number, String],
            validator: e=>ue(e) || !isNaN(e)
        }
    }, eo),
    setup(e, t) {
        const {slots: s, attrs: n} = t
          , o = e.i18n || to({
            useScope: e.scope,
            __useComponent: !0
        });
        return ()=>{
            const i = Object.keys(s).filter(p=>p !== "_")
              , r = {};
            e.locale && (r.locale = e.locale),
            e.plural !== void 0 && (r.plural = O(e.plural) ? +e.plural : e.plural);
            const a = Su(t, i)
              , c = o[Tn](e.keypath, a, r)
              , l = _e({}, n)
              , f = O(e.tag) || se(e.tag) ? e.tag : Yr();
            return qn(f, l, c)
        }
    }
};
function Du(e) {
    return le(e) && !O(e[0])
}
function Hr(e, t, s, n) {
    const {slots: o, attrs: i} = t;
    return ()=>{
        const r = {
            part: !0
        };
        let a = {};
        e.locale && (r.locale = e.locale),
        O(e.format) ? r.key = e.format : se(e.format) && (O(e.format.key) && (r.key = e.format.key),
        a = Object.keys(e.format).reduce((g,v)=>s.includes(v) ? _e({}, g, {
            [v]: e.format[v]
        }) : g, {}));
        const c = n(e.value, r, a);
        let l = [r.key];
        le(c) ? l = c.map((g,v)=>{
            const C = o[g.type]
              , S = C ? C({
                [g.type]: g.value,
                index: v,
                parts: c
            }) : [g.value];
            return Du(S) && (S[0].key = `${g.type}-${v}`),
            S
        }
        ) : O(c) && (l = [c]);
        const f = _e({}, i)
          , p = O(e.tag) || se(e.tag) ? e.tag : Yr();
        return qn(p, f, l)
    }
}
const fi = {
    name: "i18n-n",
    props: _e({
        value: {
            type: Number,
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, eo),
    setup(e, t) {
        const s = e.i18n || to({
            useScope: "parent",
            __useComponent: !0
        });
        return Hr(e, t, Wr, (...n)=>s[$n](...n))
    }
}
  , mi = {
    name: "i18n-d",
    props: _e({
        value: {
            type: [Number, Date],
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, eo),
    setup(e, t) {
        const s = e.i18n || to({
            useScope: "parent",
            __useComponent: !0
        });
        return Hr(e, t, Rr, (...n)=>s[vn](...n))
    }
};
function Cu(e, t) {
    const s = e;
    if (e.mode === "composition")
        return s.__getInstance(t) || e.global;
    {
        const n = s.__getInstance(t);
        return n != null ? n.__composer : e.global.__composer
    }
}
function Au(e) {
    const t = r=>{
        const {instance: a, modifiers: c, value: l} = r;
        if (!a || !a.$)
            throw Ne(De.UNEXPECTED_ERROR);
        const f = Cu(e, a.$)
          , p = di(l);
        return [Reflect.apply(f.t, f, [...gi(p)]), f]
    }
    ;
    return {
        created: (r,a)=>{
            const [c,l] = t(a);
            hn && e.global === l && (r.__i18nWatcher = It(l.locale, ()=>{
                a.instance && a.instance.$forceUpdate()
            }
            )),
            r.__composer = l,
            r.textContent = c
        }
        ,
        unmounted: r=>{
            hn && r.__i18nWatcher && (r.__i18nWatcher(),
            r.__i18nWatcher = void 0,
            delete r.__i18nWatcher),
            r.__composer && (r.__composer = void 0,
            delete r.__composer)
        }
        ,
        beforeUpdate: (r,{value: a})=>{
            if (r.__composer) {
                const c = r.__composer
                  , l = di(a);
                r.textContent = Reflect.apply(c.t, c, [...gi(l)])
            }
        }
        ,
        getSSRProps: r=>{
            const [a] = t(r);
            return {
                textContent: a
            }
        }
    }
}
function di(e) {
    if (O(e))
        return {
            path: e
        };
    if (G(e)) {
        if (!("path"in e))
            throw Ne(De.REQUIRED_VALUE, "path");
        return e
    } else
        throw Ne(De.INVALID_VALUE)
}
function gi(e) {
    const {path: t, locale: s, args: n, choice: o, plural: i} = e
      , r = {}
      , a = n || {};
    return O(s) && (r.locale = s),
    ue(o) && (r.plural = o),
    ue(i) && (r.plural = i),
    [t, a, r]
}
function Iu(e, t, ...s) {
    const n = G(s[0]) ? s[0] : {}
      , o = !!n.useI18nComponentName;
    (re(n.globalInstall) ? n.globalInstall : !0) && (e.component(o ? "i18n" : ui.name, ui),
    e.component(fi.name, fi),
    e.component(mi.name, mi)),
    e.directive("t", Au(t))
}
const ku = it("global-vue-i18n");
function xu(e={}, t) {
    const s = re(e.globalInjection) ? e.globalInjection : !0
      , n = !0
      , o = new Map
      , [i,r] = Nu(e)
      , a = it("");
    function c(p) {
        return o.get(p) || null
    }
    function l(p, g) {
        o.set(p, g)
    }
    function f(p) {
        o.delete(p)
    }
    {
        const p = {
            get mode() {
                return "composition"
            },
            get allowComposition() {
                return n
            },
            async install(g, ...v) {
                g.__VUE_I18N_SYMBOL__ = a,
                g.provide(g.__VUE_I18N_SYMBOL__, p),
                s && Bu(g, p.global),
                Iu(g, p, ...v);
                const C = g.unmount;
                g.unmount = ()=>{
                    p.dispose(),
                    C()
                }
            },
            get global() {
                return r
            },
            dispose() {
                i.stop()
            },
            __instances: o,
            __getInstance: c,
            __setInstance: l,
            __deleteInstance: f
        };
        return p
    }
}
function to(e={}) {
    const t = Mt();
    if (t == null)
        throw Ne(De.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
        throw Ne(De.NOT_INSLALLED);
    const s = Ou(t)
      , n = Lu(s)
      , o = jr(t)
      , i = Pu(e, o);
    if (i === "global")
        return wu(n, e, o),
        n;
    if (i === "parent") {
        let c = Mu(s, t, e.__useComponent);
        return c == null && (c = n),
        c
    }
    const r = s;
    let a = r.__getInstance(t);
    if (a == null) {
        const c = _e({}, e);
        "__i18n"in o && (c.__i18n = o.__i18n),
        n && (c.__root = n),
        a = Vr(c),
        Fu(r, t),
        r.__setInstance(t, a)
    }
    return a
}
function Nu(e, t, s) {
    const n = la();
    {
        const o = n.run(()=>Vr(e));
        if (o == null)
            throw Ne(De.UNEXPECTED_ERROR);
        return [n, o]
    }
}
function Ou(e) {
    {
        const t = Ht(e.isCE ? ku : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t)
            throw Ne(e.isCE ? De.NOT_INSLALLED_WITH_PROVIDE : De.UNEXPECTED_ERROR);
        return t
    }
}
function Pu(e, t) {
    return Ys(e) ? "__i18n"in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}
function Lu(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}
function Mu(e, t, s=!1) {
    let n = null;
    const o = t.root;
    let i = t.parent;
    for (; i != null; ) {
        const r = e;
        if (e.mode === "composition" && (n = r.__getInstance(i)),
        n != null || o === i)
            break;
        i = i.parent
    }
    return n
}
function Fu(e, t, s) {
    Un(()=>{}
    , t),
    jn(()=>{
        e.__deleteInstance(t)
    }
    , t)
}
const Ru = ["locale", "fallbackLocale", "availableLocales"]
  , Wu = ["t", "rt", "d", "n", "tm"];
function Bu(e, t) {
    const s = Object.create(null);
    Ru.forEach(n=>{
        const o = Object.getOwnPropertyDescriptor(t, n);
        if (!o)
            throw Ne(De.UNEXPECTED_ERROR);
        const i = fe(o.value) ? {
            get() {
                return o.value.value
            },
            set(r) {
                o.value.value = r
            }
        } : {
            get() {
                return o.get && o.get()
            }
        };
        Object.defineProperty(s, n, i)
    }
    ),
    e.config.globalProperties.$i18n = s,
    Wu.forEach(n=>{
        const o = Object.getOwnPropertyDescriptor(t, n);
        if (!o || !o.value)
            throw Ne(De.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${n}`, o)
    }
    )
}
uu(Hl);
fu(kr);
Tu();
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = Zn();
    e.__INTLIFY__ = !0,
    eu(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
const b$ = (e,t)=>{
    const s = e.__vccOpts || e;
    for (const [n,o] of t)
        s[n] = o;
    return s
}
  , Uu = {
    message: "Web Activity Time Tracker - Block Sites, Web Analytics & Pomodoro"
}
  , ju = {
    message: "Track time of your web activity, limit and block distracting websites. Monitor your web usage."
}
  , Vu = {
    message: "Settings"
}
  , Yu = {
    message: "Today"
}
  , Hu = {
    message: "Total time"
}
  , zu = {
    message: "Daily"
}
  , Ku = {
    message: "No data"
}
  , qu = {
    message: "No data for the selected period"
}
  , Zu = {
    message: "Show all the websites"
}
  , Gu = {
    message: "Sorting by"
}
  , Ju = {
    message: "Usage Time"
}
  , Xu = {
    message: "session"
}
  , Qu = {
    message: "sessions"
}
  , ef = {
    message: "Sessions"
}
  , tf = {
    message: "days"
}
  , sf = {
    message: "Aggregate data since"
}
  , nf = {
    message: "websites"
}
  , of = {
    message: "You cannot open a local file due to security protocol"
}
  , rf = {
    message: "Document"
}
  , af = {
    message: "Limit"
}
  , cf = {
    message: "d"
}
  , lf = {
    message: "h"
}
  , uf = {
    message: "m"
}
  , ff = {
    message: "s"
}
  , mf = {
    message: "The first active day"
}
  , df = {
    message: "Number of active days"
}
  , gf = {
    message: "Total number of days"
}
  , pf = {
    message: "All the time today"
}
  , hf = {
    message: "Average time for active days"
}
  , bf = {
    message: "Average daily usage"
}
  , yf = {
    message: "The most active day"
}
  , _f = {
    message: "The most inactive day"
}
  , Tf = {
    message: "Today is included in the statistics. Click to exclude."
}
  , vf = {
    message: "Today is excluded from the statistics. Click to include."
}
  , $f = {
    message: "Average time on selected days"
}
  , wf = {
    message: "Export to CSV"
}
  , Ef = {
    message: "This week"
}
  , Sf = {
    message: "This month"
}
  , Df = {
    message: "Last month"
}
  , Cf = {
    message: "Settings"
}
  , Af = {
    message: "WhiteList"
}
  , If = {
    message: "Limits"
}
  , kf = {
    message: "Notifications"
}
  , xf = {
    message: "Pomodoro"
}
  , Nf = {
    message: "Pomodoro Settings"
}
  , Of = {
    message: "Pomodoro",
    description: "The Pomodoro method is a time management technique based on alternating periods of focused work and rest. According to the classics of the Pomodoro method, the work period lasts 25 minutes, the rest period is 5 minutes."
}
  , Pf = {
    message: "When Pomodoro mode is on and operation mode is active, you will see this icon",
    description: "During rest periods, you will see this extension icon"
}
  , Lf = {
    message: "During Pomodoro mode, the extension continues to take into account the time you spent on the sites, all limits and notifications work."
}
  , Mf = {
    message: "After clicking 'Stop', work and rest time is reset to zero."
}
  , Ff = {
    message: "Period of work"
}
  , Rf = {
    message: "Period of rest"
}
  , Wf = {
    message: "Number of repetitions"
}
  , Bf = {
    message: "Run"
}
  , Uf = {
    message: "Stop"
}
  , jf = {
    message: "Pomodoro Mode is enabled"
}
  , Vf = {
    message: "Sound after complete period"
}
  , Yf = {
    message: "Click to listen"
}
  , Hf = {
    message: "Sound"
}
  , zf = {
    message: "About"
}
  , Kf = {
    message: "Display time tracker in icon",
    description: "You are able to see current 'spent time' information in short format on the extension icon"
}
  , qf = {
    message: "You can postpone the blocking for 5 minutes only once during the day"
}
  , Zf = {
    message: "Allow deferring block for 5 minutes",
    description: "After the site is blocked, you can postpone the blocking for 5 minutes during the day only once"
}
  , Gf = {
    message: "Stop the tracker if there is no action for",
    description: "These are any actions with the mouse or keyboard"
}
  , Jf = {
    message: "Exporting your web activity data to CSV",
    description: "You can export your web activity for any date range"
}
  , Xf = {
    message: "seconds"
}
  , Qf = {
    message: "minute"
}
  , em = {
    message: "minutes"
}
  , tm = {
    message: "Activity and spent time for these websites will not be tracked"
}
  , sm = {
    message: "Add Website"
}
  , nm = {
    message: "Enter website name..."
}
  , om = {
    message: "Enter notification message..."
}
  , im = {
    message: "Daily access restrictions for the websites",
    description: "Set the maximum time allowed to visit the website per day. After this time, the site will be blocked."
}
  , rm = {
    message: "If you set the blocking time to 0 hours 0 minutes, the website will be blocked immediately"
}
  , am = {
    message: "Save"
}
  , cm = {
    message: "Daily Summary Notifications",
    description: "At the end of each day, you will receive a notification with a summary of your daily usage"
}
  , lm = {
    message: "Notifications for websites",
    description: "Show notifications every time you spend a selected period of time on the website"
}
  , um = {
    message: "Notification message",
    description: "You will see this message in notification for websites every time"
}
  , fm = {
    message: "Notification time with summary information about your daily usage"
}
  , mm = {
    message: "Leave your feedback or report an issue on "
}
  , dm = {
    message: "You can also ask questions and leave your suggestions"
}
  , gm = {
    message: "support form"
}
  , pm = {
    message: "Do you enjoy Web Activity Time Tracker?"
}
  , hm = {
    message: "Leave a review!"
}
  , bm = {
    message: "Would you like to block shorts, comments, recommended videos, subscriptions, and other YouTube distractions? We've created another extension that will help you watch YouTube without distractions.",
    description: "Install"
}
  , ym = {
    message: "You've reached your limit for today on "
}
  , _m = {
    message: "Total usage time for today "
}
  , Tm = {
    message: " compared to yesterday "
}
  , vm = {
    message: "Most visited website "
}
  , $m = {
    message: "Dashboard"
}
  , wm = {
    message: "This is a chart of time during the day by the hour"
}
  , Em = {
    message: "Enjoying the extension?",
    description: "Rate Web Activity Time Tracker"
}
  , Sm = {
    message: "Remove all data",
    description: "You can delete all data and statistics of visited websites for all time"
}
  , Dm = {
    message: "Remove"
}
  , Cm = {
    message: "Are you sure you want to delete all data?"
}
  , Am = {
    message: "Cancel"
}
  , Im = {
    message: "Backup and restore",
    description: "You can download a backup copy of all data for all visited sites"
}
  , km = {
    message: "Backup"
}
  , xm = {
    message: "Restore"
}
  , Nm = {
    message: "Welcome to Web Activity Time Tracker",
    description: "Web Activity Time Tracker is <b>open-source</b>, <b>free</b> and <b>no ads</b> extension, which can help you track the time you spent on browsing websites and the count of visit."
}
  , Om = {
    message: "Get started"
}
  , Pm = {
    message: "You can quickly start using the extension in just 3 easy steps"
}
  , Lm = {
    message: "Pin the icon"
}
  , Mm = {
    message: "To use this extension more conveniently, you can pin the icon to toolbar. Click the icon"
}
  , Fm = {
    message: "and then click the pin icon"
}
  , Rm = {
    message: "Browse any websites",
    description: "When you visit any website, you will see that the time is displayed on the icon, just like here"
}
  , Wm = {
    message: "View your data on the popup page and on the dashboard",
    description: "Click on the extension icon to open a popup page and you will be able to read the data visualized using a pie chart, for today, for all time or by day. In the popup window, you can open the dashboard and it will show you today's time by the clock. And you can set a daily time limit for any websites, notifications for websites, or export data to CSV."
}
  , Bm = {
    message: "Close"
}
  , Um = {
    message: "Use the extension"
}
  , jm = {
    message: "Next"
}
  , Vm = {
    message: "Show changelog",
    description: "Show the list of changes after updating extension"
}
  , Ym = {
    message: "Hourly"
}
  , Hm = {
    message: "Intervals"
}
  , zm = {
    message: "Only time intervals greater than",
    description: "are shown"
}
  , Km = {
    message: "Completely Blocked",
    description: "Completely Block"
}
  , qm = {
    message: "Try my other apps"
}
  , Zm = {
    message: "Clean YouTube",
    description: "Chrome extension that can hide YouTube shorts, recomended videos, comments, feed, homepage recommendations and other distractions. Watch YouTube free of distractions."
}
  , Gm = {
    message: "TrackerJam",
    description: "Automatic web tracker for teams. Detailed reports for each team member, detailing time spent on websites, track any URL's inside domain, productivity scores, top domains with categories and etc."
}
  , Jm = {
    message: "Dark theme"
}
  , Xm = {
    extName: Uu,
    extDescription: ju,
    settings: Vu,
    today: Yu,
    allTime: Hu,
    byDays: zu,
    noData: Ku,
    noDataForPeriod: qu,
    showAll: Zu,
    sortBy: Gu,
    usageTime: Ju,
    session: Xu,
    someSession: Qu,
    sessions: ef,
    days: tf,
    aggregate: sf,
    websites: nf,
    cannotOpenFile: of,
    document: rf,
    limit: af,
    d: cf,
    h: lf,
    m: uf,
    s: ff,
    firstActiveDay: mf,
    numberOfActiveDays: df,
    totalNumberOfDays: gf,
    todayTime: pf,
    averageTime: hf,
    averageDailyUsage: bf,
    mostActiveDay: yf,
    mostInactiveDay: _f,
    todayInclude: Tf,
    todayEcclude: vf,
    averageTimeByDays: $f,
    exportToCsv: wf,
    week: Ef,
    month: Sf,
    lastMonth: Df,
    generalSettings: Cf,
    whiteListSettings: Af,
    limitsSettings: If,
    notificationsSettings: kf,
    pomodoroMode: xf,
    pomodoroSettings: Nf,
    pomodoro: Of,
    pomodoroExplanationIcon: Pf,
    pomodoroExplanationTime: Lf,
    pomodoroExplanationStop: Mf,
    pomodoroWork: Ff,
    pomodoroRest: Rf,
    pomodoroFrequency: Wf,
    start: Bf,
    stop: Uf,
    pomodoroIsEnabled: jf,
    pomodoroSoundAfter: Vf,
    clickToPreview: Yf,
    sound: Hf,
    aboutSettings: zf,
    viewTimeInBadge: Kf,
    deferringDescription: qf,
    allowDeferringBlock: Zf,
    intervalInactivity: Gf,
    exportToCsvSetting: Jf,
    sec: Xf,
    min: Qf,
    "2min": {
        message: "minutes"
    },
    mins: em,
    whiteList: tm,
    addWebsite: sm,
    enterWebsite: nm,
    enterNotification: om,
    limits: im,
    limitsTip: rm,
    save: am,
    showDailyNotifacation: cm,
    notificationTime: lm,
    notificationMessage: um,
    notificationTimeSetting: fm,
    github: mm,
    question: dm,
    supportForm: gm,
    doYouEnjoy: pm,
    review: hm,
    promoClearYoutube: bm,
    block: ym,
    "5mins": {
        message: "+ 5 minutes"
    },
    todayUsageTime: _m,
    comparedToYesterday: Tm,
    mostVisited: vm,
    dashboard: $m,
    timeChartDescription: wm,
    enjoyAndReview: Em,
    removeAllData: Sm,
    remove: Dm,
    removeAllDataConfirm: Cm,
    cancel: Am,
    backupAndRestore: Im,
    backup: km,
    restore: xm,
    welcome: Nm,
    getStarted: Om,
    welcomeStart: Pm,
    pinIcon: Lm,
    pinIconPart1: Mm,
    pinIconPart2: Fm,
    browse: Rm,
    seeData: Wm,
    close: Bm,
    useExtension: Um,
    next: jm,
    showChangelog: Vm,
    byHours: Ym,
    intervals: Hm,
    intervalsChart: zm,
    completelyBlocked: Km,
    tryMyOtherApps: qm,
    clearYoutube: Zm,
    trackerjam: Gm,
    darkTheme: Jm
}
  , Qm = {
    message: "Web Activity Time Tracker - Блокировка сайтов и Веб аналитика"
}
  , ed = {
    message: "Отслеживайте время вашей веб-активности и блокируйте отвлекающие сайты. Следите за тем, сколько времени вы проводите на сайтах."
}
  , td = {
    message: "Настройки"
}
  , sd = {
    message: "Сегодня"
}
  , nd = {
    message: "За все время"
}
  , od = {
    message: "По дням"
}
  , id = {
    message: "Нет данных"
}
  , rd = {
    message: "Нет данных за выбранный период"
}
  , ad = {
    message: "Показать все сайты"
}
  , cd = {
    message: "Сортировать по"
}
  , ld = {
    message: "Время использования"
}
  , ud = {
    message: "сессия"
}
  , fd = {
    message: "сессий"
}
  , md = {
    message: "Сессии"
}
  , dd = {
    message: "дней"
}
  , gd = {
    message: "Данные с "
}
  , pd = {
    message: "сайтов"
}
  , hd = {
    message: "Вы не можете открыть локальный файл из-за правил безопасности"
}
  , bd = {
    message: "Документ"
}
  , yd = {
    message: "Лимит"
}
  , _d = {
    message: "д"
}
  , Td = {
    message: "ч"
}
  , vd = {
    message: "мин"
}
  , $d = {
    message: "сек"
}
  , wd = {
    message: "Первый активный день"
}
  , Ed = {
    message: "Всего активных дней"
}
  , Sd = {
    message: "Всего дней"
}
  , Dd = {
    message: "Общее время сегодня"
}
  , Cd = {
    message: "Среднее время по активным дням"
}
  , Ad = {
    message: "Среднее ежедневное использование"
}
  , Id = {
    message: "Самый активный день"
}
  , kd = {
    message: "Самый неактивный день"
}
  , xd = {
    message: "Сегодняшний день включен в статистику. Нажмите, если хотите исключить из статистики."
}
  , Nd = {
    message: "Сегодняшний день исключен из статистику. Нажмите, если хотите включить в статистику."
}
  , Od = {
    message: "Среднее время по выбранным дням"
}
  , Pd = {
    message: "Экспортировать в CSV"
}
  , Ld = {
    message: "Эта неделя"
}
  , Md = {
    message: "Этот месяц"
}
  , Fd = {
    message: "Последний месяц"
}
  , Rd = {
    message: "Настройки"
}
  , Wd = {
    message: "Белый список"
}
  , Bd = {
    message: "Лимиты"
}
  , Ud = {
    message: "Уведомления"
}
  , jd = {
    message: "Pomodoro"
}
  , Vd = {
    message: "Настройки Pomodoro"
}
  , Yd = {
    message: "Pomodoro",
    description: "Метод Pomodoro — это техника тайм-менеджмента, завязанная на чередовании периодов сфокусированной работы и отдыха. По классике метода помодоро период работы длится 25 минут, период отдыха 5 минут."
}
  , Hd = {
    message: "Когда режим Pomodoro включен и активен режим работы, то вы будете видеть эту иконку",
    description: "В периоды отдыха вы будете видеть эту иконку расширения"
}
  , zd = {
    message: "Во время режима Pomodoro, расширение продолжает учитывать время, которые вы провели на сайтах,работают все лимиты и уведомления."
}
  , Kd = {
    message: "После нажатия 'Остановить', время работы и отдыха обнуляется."
}
  , qd = {
    message: "Период работы"
}
  , Zd = {
    message: "Период отдыха"
}
  , Gd = {
    message: "Количество повторов"
}
  , Jd = {
    message: "Запустить"
}
  , Xd = {
    message: "Остановить"
}
  , Qd = {
    message: "Режим Pomodoro включен"
}
  , eg = {
    message: "Воспроизведение после завершения периода"
}
  , tg = {
    message: "Нажмите для прослушивания"
}
  , sg = {
    message: "Мелодия"
}
  , ng = {
    message: "О программе"
}
  , og = {
    message: "Показывать индикатор времени",
    description: "Вы можете увидеть текущее затраченное время в сокращенном формате на значке расширения"
}
  , ig = {
    message: "Вы можете отложить блокировку на 5 минут только один раз в течение дня"
}
  , rg = {
    message: "Разрешить отсрочку блокировки на 5 минут",
    description: "После того, как сайт будет заблокирован, вы можете один раз в течение дня отложить блокировку на 5 минут"
}
  , ag = {
    message: "Остановить трекер, если нет никаких действий в течение:",
    description: "Это любые действия с помощью мыши или клавиатуры"
}
  , cg = {
    message: "Экспорт данных вашей веб-активности в формат CSV",
    description: "Вы можете экспортировать свою веб-активность для любого диапазона дат"
}
  , lg = {
    message: "секунд"
}
  , ug = {
    message: "минута"
}
  , fg = {
    message: "минут"
}
  , mg = {
    message: "Активность и время для этих сайтов отслеживаться не будут"
}
  , dg = {
    message: "Добавить сайт"
}
  , gg = {
    message: "Введите сайт..."
}
  , pg = {
    message: "Введите текст уведомления..."
}
  , hg = {
    message: "Ежедневные ограничения доступа к сайтам",
    description: "Установите максимальное время, разрешенное для посещения сайта в день. По истечении этого времени сайт будет заблокирован."
}
  , bg = {
    message: "Если вы установите время блокировки на 0 часов 0 минут, сайт будет немедленно заблокирован"
}
  , yg = {
    message: "Сохранить"
}
  , _g = {
    message: "Ежедневные итоговые уведомления",
    description: "В конце каждого дня вы будете получать уведомление с краткой информацией о вашем ежедневном использовании"
}
  , Tg = {
    message: "Время показа уведомления с краткой информацией о вашем ежедневном использовании"
}
  , vg = {
    message: "Уведомления для сайтов",
    description: "Показывать уведомления каждый раз, когда вы проводите указанный период времени на сайте"
}
  , $g = {
    message: "Текст уведомления",
    description: "Вы будете видеть это сообщение в уведомлении для сайтов"
}
  , wg = {
    message: "Если у вас есть вопрос или вы хотели бы сообщить о проблеме, вы можете сделать это на"
}
  , Eg = {
    message: "Также вы можете задать вопросы или оставить свои предложения "
}
  , Sg = {
    message: "поддержка"
}
  , Dg = {
    message: "Вам нравится Web Activity Time Tracker?"
}
  , Cg = {
    message: "Оставьте отзыв!"
}
  , Ag = {
    message: "Вы достигли лимита использования сегодня на "
}
  , Ig = {
    message: "Общее время использования на сегодняшний день "
}
  , kg = {
    message: " по сравнению со вчерашним днем "
}
  , xg = {
    message: "Самый посещаемый сайт "
}
  , Ng = {
    message: "Дашборд"
}
  , Og = {
    message: "Это график времени в течение дня по часам"
}
  , Pg = {
    message: "Вам нравится расширение?",
    description: "Оцените Web Activity Time Tracker"
}
  , Lg = {
    message: "Хотели бы вы блокировать шортсы, комментарии, рекомендованные видео, подписки и другие отвлекающие элементы YouTube? Мы создали еще одно расширение, которое поможет вам смотреть YouTube без отвлекающих факторов.",
    description: "Установить"
}
  , Mg = {
    message: "Удалить все данные",
    description: "Вы можете удалить все данные и статистику посещенных сайтов за все время"
}
  , Fg = {
    message: "Удалить"
}
  , Rg = {
    message: "Вы уверены, что хотите удалить все данные, включая статистику посещенных сайтов?"
}
  , Wg = {
    message: "Отмена"
}
  , Bg = {
    message: "Резервное копирование и восстановление",
    description: "Вы можете скачать резервную копию всех данных по всем посещенным сайтам"
}
  , Ug = {
    message: "Скачать резервную копию"
}
  , jg = {
    message: "Восстановить из резервной копиии"
}
  , Vg = {
    message: "Добро пожаловать в Web Activity Time Tracker",
    description: "Web Activity Time Tracker это <b>бесплатное</b>, <b>без рекламы</b> и <b>с открытым исходным кодом</b> расширение, которое поможем вам отслеживать время, потраченное вами на просмотр веб-сайтов, и покажет количество посещений."
}
  , Yg = {
    message: "Руководство"
}
  , Hg = {
    message: "Вы можете быстро начать использовать расширение всего за 3 простых шага"
}
  , zg = {
    message: "Закрепите значок"
}
  , Kg = {
    message: "Чтобы более удобно использовать это расширение, вы можете прикрепить значок к панели инструментов. Нажмите на значок"
}
  , qg = {
    message: "и затем нажмите на значок закрепления"
}
  , Zg = {
    message: "Просматривайте любые веб-сайты",
    description: "При посещении любого веб-сайта вы увидите, что время отображается на значке, точно так же, как здесь"
}
  , Gg = {
    message: "Просматривайте ваши данные на всплывающей странице и на панели мониторинга",
    description: "Нажмите на значок расширения, чтобы открыть всплывающую страницу, и вы сможете увидеть данные посещения сайтов за сегодня, за все время и по дням. Во всплывающем окне вы можете открыть панель мониторинга, и вы увидите сегодняшнее время по часам. Там же вы можете установить ежедневное ограничение по времени для любых веб-сайтов, уведомления для веб-сайтов или экспортировать данные в CSV."
}
  , Jg = {
    message: "Закрыть"
}
  , Xg = {
    message: "Начать пользоваться"
}
  , Qg = {
    message: "Продолжить"
}
  , ep = {
    message: "Показывать список изменений",
    description: "Показывать список изменений после обновления расширения"
}
  , tp = {
    message: "По часам"
}
  , sp = {
    message: "Интервалы",
    description: "Отображаются только временные интервалы, превышающие 5 секунд"
}
  , np = {
    message: "Отображаются только временные интервалы, превышающие",
    description: ""
}
  , op = {
    message: "Полностью заблокирован",
    description: "Полностью заблокировать"
}
  , ip = {
    message: "Попробуйте другие мои приложения"
}
  , rp = {
    message: "Clean YouTube",
    description: "Расширение для Chrome, которое может скрывать шортс YouTube, рекомендуемые видео, комментарии, ленту новостей, рекомендации по домашней странице и другие отвлекающие факторы. Смотрите YouTube без отвлекающих факторов."
}
  , ap = {
    message: "TrackerJam",
    description: "Автоматический веб-трекер для команд. Подробные отчеты для каждого члена команды, детализация времени, проведенного на веб-сайтах, отслеживание любых URL внутри домена, показатели продуктивности, топ доменов с категориями и т.д."
}
  , cp = {
    message: "Темная тема"
}
  , lp = {
    extName: Qm,
    extDescription: ed,
    settings: td,
    today: sd,
    allTime: nd,
    byDays: od,
    noData: id,
    noDataForPeriod: rd,
    showAll: ad,
    sortBy: cd,
    usageTime: ld,
    session: ud,
    someSession: fd,
    sessions: md,
    days: dd,
    aggregate: gd,
    websites: pd,
    cannotOpenFile: hd,
    document: bd,
    limit: yd,
    d: _d,
    h: Td,
    m: vd,
    s: $d,
    firstActiveDay: wd,
    numberOfActiveDays: Ed,
    totalNumberOfDays: Sd,
    todayTime: Dd,
    averageTime: Cd,
    averageDailyUsage: Ad,
    mostActiveDay: Id,
    mostInactiveDay: kd,
    todayInclude: xd,
    todayEcclude: Nd,
    averageTimeByDays: Od,
    exportToCsv: Pd,
    week: Ld,
    month: Md,
    lastMonth: Fd,
    generalSettings: Rd,
    whiteListSettings: Wd,
    limitsSettings: Bd,
    notificationsSettings: Ud,
    pomodoroMode: jd,
    pomodoroSettings: Vd,
    pomodoro: Yd,
    pomodoroExplanationIcon: Hd,
    pomodoroExplanationTime: zd,
    pomodoroExplanationStop: Kd,
    pomodoroWork: qd,
    pomodoroRest: Zd,
    pomodoroFrequency: Gd,
    start: Jd,
    stop: Xd,
    pomodoroIsEnabled: Qd,
    pomodoroSoundAfter: eg,
    clickToPreview: tg,
    sound: sg,
    aboutSettings: ng,
    viewTimeInBadge: og,
    deferringDescription: ig,
    allowDeferringBlock: rg,
    intervalInactivity: ag,
    exportToCsvSetting: cg,
    sec: lg,
    min: ug,
    "2min": {
        message: "минуты"
    },
    mins: fg,
    whiteList: mg,
    addWebsite: dg,
    enterWebsite: gg,
    enterNotification: pg,
    limits: hg,
    limitsTip: bg,
    save: yg,
    showDailyNotifacation: _g,
    notificationTimeSetting: Tg,
    notificationTime: vg,
    notificationMessage: $g,
    github: wg,
    question: Eg,
    supportForm: Sg,
    doYouEnjoy: Dg,
    review: Cg,
    block: Ag,
    "5mins": {
        message: "+ 5 минут"
    },
    todayUsageTime: Ig,
    comparedToYesterday: kg,
    mostVisited: xg,
    dashboard: Ng,
    timeChartDescription: Og,
    enjoyAndReview: Pg,
    promoClearYoutube: Lg,
    removeAllData: Mg,
    remove: Fg,
    removeAllDataConfirm: Rg,
    cancel: Wg,
    backupAndRestore: Bg,
    backup: Ug,
    restore: jg,
    welcome: Vg,
    getStarted: Yg,
    welcomeStart: Hg,
    pinIcon: zg,
    pinIconPart1: Kg,
    pinIconPart2: qg,
    browse: Zg,
    seeData: Gg,
    close: Jg,
    useExtension: Xg,
    next: Qg,
    showChangelog: ep,
    byHours: tp,
    intervals: sp,
    intervalsChart: np,
    completelyBlocked: op,
    tryMyOtherApps: ip,
    clearYoutube: rp,
    trackerjam: ap,
    darkTheme: cp
}
  , up = {
    message: "Web Activity Time Tracker - Blockieren Sie Websites und Webanalysen"
}
  , fp = {
    message: "Verfolgen und begrenzen Sie die Zeit Ihrer Webaktivitäten und blockieren Sie den Zugang zu den Websites. Überwachen Sie Ihre Internetnutzung."
}
  , mp = {
    message: "Einstellungen"
}
  , dp = {
    message: "Heute"
}
  , gp = {
    message: "Gesamte Zeit"
}
  , pp = {
    message: "Täglich"
}
  , hp = {
    message: "Keine Daten verfügbar"
}
  , bp = {
    message: "Keine Daten für den ausgewählten Zeitraum"
}
  , yp = {
    message: "Alle Websites anzeigen"
}
  , _p = {
    message: "Sortieren nach"
}
  , Tp = {
    message: "Verwendungszeit"
}
  , vp = {
    message: "Sitzung"
}
  , $p = {
    message: "Sitzungen"
}
  , wp = {
    message: "Sitzungen"
}
  , Ep = {
    message: "Tage"
}
  , Sp = {
    message: "Gesammelte Daten seit"
}
  , Dp = {
    message: "Webseiten"
}
  , Cp = {
    message: "Aufgrund des Sicherheitsprotokolls können Sie eine lokale Datei nicht öffnen"
}
  , Ap = {
    message: "Dokument"
}
  , Ip = {
    message: "Limit"
}
  , kp = {
    message: "d"
}
  , xp = {
    message: "h"
}
  , Np = {
    message: "m"
}
  , Op = {
    message: "s"
}
  , Pp = {
    message: "Der erste aktive Tag"
}
  , Lp = {
    message: "Gesamtzahl der aktiven Tage"
}
  , Mp = {
    message: "Alle Tage"
}
  , Fp = {
    message: "Gesamtzeit heute"
}
  , Rp = {
    message: "Durchschnittliche Zeit an aktiven Tagen"
}
  , Wp = {
    message: "Durchschnittliche tägliche Nutzung"
}
  , Bp = {
    message: "Der aktivste Tag"
}
  , Up = {
    message: "Der inaktivste Tag"
}
  , jp = {
    message: "Der heutige Tag ist in der Statistik enthalten. Aus der Statistik ausschließen."
}
  , Vp = {
    message: "Der heutige Tag ist aus der Statistik ausgeschlossen. In die Statistik einbeziehen."
}
  , Yp = {
    message: "Durchschnittliche Zeit für ausgewählte Tage"
}
  , Hp = {
    message: "Als CSV exportieren"
}
  , zp = {
    message: "Diese Woche"
}
  , Kp = {
    message: "Diesen Monat"
}
  , qp = {
    message: "Letzter Monat"
}
  , Zp = {
    message: "Einstellungen"
}
  , Gp = {
    message: "Weiße Liste"
}
  , Jp = {
    message: "Beschränkungen"
}
  , Xp = {
    message: "Benachrichtigungen"
}
  , Qp = {
    message: "Pomodoro"
}
  , eh = {
    message: "Pomodoro Einstellungen"
}
  , th = {
    message: "Pomodoro",
    description: "Die Pomodoro-Methode ist eine Zeitmanagementtechnik, die auf dem Wechsel von konzentrierten Arbeits- und Ruhephasen basiert. Bei der klassischen Pomodoro-Methode dauert die Arbeitsphase 25 Minuten und die Ruhephase 5 Minuten."
}
  , sh = {
    message: "Wenn der Pomodoro-Modus aktiviert ist und der Betriebsmodus aktiv ist, sehen Sie dieses Symbol",
    description: "Während der Ruhezeiten sehen Sie dieses Erweiterungssymbol"
}
  , nh = {
    message: "Während des Pomodoro-Modus berücksichtigt die Erweiterung weiterhin die Zeit, die Sie auf den Seiten verbracht haben, alle Grenzen und Benachrichtigungen funktionieren."
}
  , oh = {
    message: "Nach dem Drücken von 'Stop' werden die Betriebs- und Ruhezeiten auf Null zurückgesetzt."
}
  , ih = {
    message: "Zeitraum der Arbeit"
}
  , rh = {
    message: "Ruhezeit"
}
  , ah = {
    message: "Anzahl der Wiederholungen"
}
  , ch = {
    message: "Starten Sie"
}
  , lh = {
    message: "Stop"
}
  , uh = {
    message: "Der Pomodoro-Modus ist aktiviert"
}
  , fh = {
    message: "Ton nach vollständiger Periode"
}
  , mh = {
    message: "Zum Anhören klicken"
}
  , dh = {
    message: "Ton"
}
  , gh = {
    message: "Über die Erweiterung"
}
  , ph = {
    message: "Zeitindikator anzeigen",
    description: 'Die aktuellen Informationen zur "verbrauchten Zeit" im Kurzformat anzeigen'
}
  , hh = {
    message: "Die Sperre kann nur einmal pro Tag um 5 Minuten verschoben werden"
}
  , bh = {
    message: "Verzögerung der Sperre um 5 Minuten zulassen",
    description: "Nachdem die Site gesperrt wurde, können Sie die Sperrung einmal täglich um 5 Minuten verschieben"
}
  , yh = {
    message: "Zeiterfassung stoppen, bei Inaktivität für:",
    description: "Betrifft alle Aktionen mit der Maus oder der Tastatur"
}
  , _h = {
    message: "Ihre Webaktivitätsdaten als CSV-Datei exportieren",
    description: "Ihre Webaktivitäten für einen beliebigen Zeitraum exportieren"
}
  , Th = {
    message: "Sekunden"
}
  , vh = {
    message: "Minute"
}
  , $h = {
    message: "Minuten"
}
  , wh = {
    message: "Aktivität und Zeit für diese Websites werden nicht erfasst."
}
  , Eh = {
    message: "Website hinzufügen"
}
  , Sh = {
    message: "Namen der Website eingeben..."
}
  , Dh = {
    message: "Text für die Benachrichtigung eingeben..."
}
  , Ch = {
    message: "Tägliche Zugriffsbeschränkungen für Websites",
    description: "Legen Sie die maximale Zeit fest, die pro Tag für den Besuch der Website zulässig ist. Nach dieser Zeit wird die Website gesperrt."
}
  , Ah = {
    message: "Setzen Sie die Blockierungszeit auf 0 Stunden 0 Minuten, um die Website sofort zu blockieren."
}
  , Ih = {
    message: "Speichern"
}
  , kh = {
    message: "Tägliche Zusammenfassung als Benachrichtigung",
    description: "Am Ende jedes Tages erhalten Sie eine Benachrichtigung mit einer Zusammenfassung Ihrer täglichen Nutzung."
}
  , xh = {
    message: "Benachrichtigungen für Websites",
    description: "Jedes Mal eine Benachrichtigung anzeigen, wenn Sie den angegebenen Zeitraum auf einer Website verbringen."
}
  , Nh = {
    message: "Benachrichtigungstext",
    description: "Dieser Text wird in der Benachrichtigung für Websites angezeigt"
}
  , Oh = {
    message: "Tägliche Zusammenfassung um folgende Uhrzeit anzeigen:"
}
  , Ph = {
    message: "Feedback zur Erweiterung geben oder ein Problem melden: "
}
  , Lh = {
    message: "Eine Frage stellen oder Verbesserungen vorschlagen: "
}
  , Mh = {
    message: "Unterstützungsformular"
}
  , Fh = {
    message: "Gefällt Ihnen diese Erweiterung?"
}
  , Rh = {
    message: "Schreiben Sie eine Bewertung!"
}
  , Wh = {
    message: "Sie haben Ihr tägliches Nutzungslimit erreicht für "
}
  , Bh = {
    message: "Bisherige Gesamtnutzungszeit "
}
  , Uh = {
    message: " im Vergleich zu gestern "
}
  , jh = {
    message: "Die meistbesuchte Website "
}
  , Vh = {
    message: "Übersicht"
}
  , Yh = {
    message: "Dies ist eine stundenweise Zeitleiste für den Tag"
}
  , Hh = {
    message: "Gefällt Ihnen diese Erweiterung?",
    description: "Web Activity Time Tracker bewerten"
}
  , zh = {
    message: "Alle Daten entfernen",
    description: "Alle Daten und Statistiken der besuchten Websites für immer löschen."
}
  , Kh = {
    message: "Löschen"
}
  , qh = {
    message: "Sind Sie sicher, dass Sie alle Daten löschen möchten?"
}
  , Zh = {
    message: "Abbrechen"
}
  , Gh = {
    message: "Sicherung und Wiederherstellen",
    description: "Sie können eine Sicherungskopie aller Daten für alle besuchten Websites herunterladen"
}
  , Jh = {
    message: "Sicherung"
}
  , Xh = {
    message: "Wiederherstellen"
}
  , Qh = {
    message: "Willkommen bei Web Activity Time Tracker",
    description: "Web Activity Time Tracker ist eine <b>open-source</b>, <b>kostenlose</b> und <b>werbefreie</b> Erweiterung, mit der Sie die Zeit, die Sie für das Durchsuchen von Websites aufgewendet haben, und die Anzahl der Besuche nachverfolgen können."
}
  , eb = {
    message: "Anleitung"
}
  , tb = {
    message: "Sie können die Erweiterung in nur 3 einfachen Schritten schnell verwenden"
}
  , sb = {
    message: "Pin das Symbol"
}
  , nb = {
    message: "Um diese Erweiterung bequemer zu verwenden, können Sie das Symbol an die Symbolleiste anheften. Klicken Sie auf das Symbol"
}
  , ob = {
    message: "und klicken Sie dann auf das Pin-Symbol"
}
  , ib = {
    message: "Durchsuchen Sie alle Websites",
    description: "Wenn Sie eine Website besuchen, werden Sie sehen, dass die Uhrzeit auf dem Symbol angezeigt wird, genau wie hier"
}
  , rb = {
    message: "Zeigen Sie Ihre Daten auf der Popup-Seite und im Dashboard an",
    description: "Klicken Sie auf das Erweiterungssymbol, um eine Popup-Seite zu öffnen, und Sie können die mit einem Kreisdiagramm gerenderten Daten für heute, für alle Zeiten oder für Tage lesen. In einem Popup-Fenster können Sie das Dashboard öffnen, und es zeigt Ihnen die heutige Zeit nach Stunden an. Und Sie können ein tägliches Zeitlimit für alle Websites festlegen, Benachrichtigungen für Websites festlegen oder Daten in CSV exportieren."
}
  , ab = {
    message: "Schließen"
}
  , cb = {
    message: "Verwenden Sie die Erweiterung"
}
  , lb = {
    message: "Weiter"
}
  , ub = {
    message: "Änderungsliste anzeigen",
    description: "Zeigen Sie die Liste der Änderungen nach dem Aktualisieren der Erweiterung an"
}
  , fb = {
    message: "Stundenweise"
}
  , mb = {
    message: "Intervalle"
}
  , db = {
    message: "Nur Zeitintervalle größer als",
    description: "werden angezeigt"
}
  , gb = {
    message: "Möchten Sie Kurzfilme, Kommentare, empfohlene Videos, Abonnements und andere YouTube-Ablenkungen blockieren? Wir haben eine weitere Erweiterung erstellt, mit der Sie YouTube ohne Ablenkung ansehen können.",
    description: "Install"
}
  , pb = {
    message: "Vollständig blockiert",
    description: "Vollständig blockieren"
}
  , hb = {
    message: "Probieren Sie meine anderen Apps aus"
}
  , bb = {
    message: "Clean YouTube",
    description: "Chrome-Erweiterung, die YouTube-Shorts, empfohlene Videos, Kommentare, Feeds, Homepage-Empfehlungen und andere Ablenkungen ausblenden kann. Sieh dir YouTube ohne Ablenkungen an."
}
  , yb = {
    message: "TrackerJam",
    description: "Automatischer Web-Tracker für Teams. Detaillierte Berichte für jedes Teammitglied, mit detaillierten Angaben zur auf Websites verbrachten Zeit, Verfolgung aller URLs innerhalb der Domain, Produktivitätsbewertungen, Top-Domains mit Kategorien usw."
}
  , _b = {
    message: "Dunkles Thema"
}
  , Tb = {
    extName: up,
    extDescription: fp,
    settings: mp,
    today: dp,
    allTime: gp,
    byDays: pp,
    noData: hp,
    noDataForPeriod: bp,
    showAll: yp,
    sortBy: _p,
    usageTime: Tp,
    session: vp,
    someSession: $p,
    sessions: wp,
    days: Ep,
    aggregate: Sp,
    websites: Dp,
    cannotOpenFile: Cp,
    document: Ap,
    limit: Ip,
    d: kp,
    h: xp,
    m: Np,
    s: Op,
    firstActiveDay: Pp,
    numberOfActiveDays: Lp,
    totalNumberOfDays: Mp,
    todayTime: Fp,
    averageTime: Rp,
    averageDailyUsage: Wp,
    mostActiveDay: Bp,
    mostInactiveDay: Up,
    todayInclude: jp,
    todayEcclude: Vp,
    averageTimeByDays: Yp,
    exportToCsv: Hp,
    week: zp,
    month: Kp,
    lastMonth: qp,
    generalSettings: Zp,
    whiteListSettings: Gp,
    limitsSettings: Jp,
    notificationsSettings: Xp,
    pomodoroMode: Qp,
    pomodoroSettings: eh,
    pomodoro: th,
    pomodoroExplanationIcon: sh,
    pomodoroExplanationTime: nh,
    pomodoroExplanationStop: oh,
    pomodoroWork: ih,
    pomodoroRest: rh,
    pomodoroFrequency: ah,
    start: ch,
    stop: lh,
    pomodoroIsEnabled: uh,
    pomodoroSoundAfter: fh,
    clickToPreview: mh,
    sound: dh,
    aboutSettings: gh,
    viewTimeInBadge: ph,
    deferringDescription: hh,
    allowDeferringBlock: bh,
    intervalInactivity: yh,
    exportToCsvSetting: _h,
    sec: Th,
    min: vh,
    "2min": {
        message: "Minuten"
    },
    mins: $h,
    whiteList: wh,
    addWebsite: Eh,
    enterWebsite: Sh,
    enterNotification: Dh,
    limits: Ch,
    limitsTip: Ah,
    save: Ih,
    showDailyNotifacation: kh,
    notificationTime: xh,
    notificationMessage: Nh,
    notificationTimeSetting: Oh,
    github: Ph,
    question: Lh,
    supportForm: Mh,
    doYouEnjoy: Fh,
    review: Rh,
    block: Wh,
    "5mins": {
        message: "+ 5 Minuten"
    },
    todayUsageTime: Bh,
    comparedToYesterday: Uh,
    mostVisited: jh,
    dashboard: Vh,
    timeChartDescription: Yh,
    enjoyAndReview: Hh,
    removeAllData: zh,
    remove: Kh,
    removeAllDataConfirm: qh,
    cancel: Zh,
    backupAndRestore: Gh,
    backup: Jh,
    restore: Xh,
    welcome: Qh,
    getStarted: eb,
    welcomeStart: tb,
    pinIcon: sb,
    pinIconPart1: nb,
    pinIconPart2: ob,
    browse: ib,
    seeData: rb,
    close: ab,
    useExtension: cb,
    next: lb,
    showChangelog: ub,
    byHours: fb,
    intervals: mb,
    intervalsChart: db,
    promoClearYoutube: gb,
    completelyBlocked: pb,
    tryMyOtherApps: hb,
    clearYoutube: bb,
    trackerjam: yb,
    darkTheme: _b
}
  , vb = {
    message: "Web Activity Time Tracker - 阻止网站、网络分析和番茄钟"
}
  , $b = {
    message: "追踪和限制您的网站活动时间，并阻止访问网站。监控您的网站使用情况"
}
  , wb = {
    message: "设置"
}
  , Eb = {
    message: "今天"
}
  , Sb = {
    message: "总时间"
}
  , Db = {
    message: "每天"
}
  , Cb = {
    message: "无数据"
}
  , Ab = {
    message: "所选时间段内无数据"
}
  , Ib = {
    message: "显示所有网站"
}
  , kb = {
    message: "排序"
}
  , xb = {
    message: "使用时间"
}
  , Nb = {
    message: "会话"
}
  , Ob = {
    message: "会话"
}
  , Pb = {
    message: "会话"
}
  , Lb = {
    message: "天"
}
  , Mb = {
    message: "汇总数据自"
}
  , Fb = {
    message: "网站"
}
  , Rb = {
    message: "由于安全协议，您无法打开本地文件"
}
  , Wb = {
    message: "文件"
}
  , Bb = {
    message: "限制"
}
  , Ub = {
    message: "d"
}
  , jb = {
    message: "h"
}
  , Vb = {
    message: "m"
}
  , Yb = {
    message: "s"
}
  , Hb = {
    message: "第一个活动日"
}
  , zb = {
    message: "活动天数"
}
  , Kb = {
    message: "总天数"
}
  , qb = {
    message: "今天所有的时间"
}
  , Zb = {
    message: "活动日的平均时间"
}
  , Gb = {
    message: "平均每日使用量"
}
  , Jb = {
    message: "最活跃的一天"
}
  , Xb = {
    message: "最不活跃的一天"
}
  , Qb = {
    message: "今天包含在统计数据中。点击以排除。"
}
  , ey = {
    message: "今天不包含在统计数据中。点击以包含。"
}
  , ty = {
    message: "所选日期的平均时间"
}
  , sy = {
    message: "导出 CSV"
}
  , ny = {
    message: "本周"
}
  , oy = {
    message: "本月"
}
  , iy = {
    message: "上月"
}
  , ry = {
    message: "设置"
}
  , ay = {
    message: "白名单"
}
  , cy = {
    message: "限制"
}
  , ly = {
    message: "通知"
}
  , uy = {
    message: "Pomodoro"
}
  , fy = {
    message: "Pomodoro 设置"
}
  , my = {
    message: "Pomodoro",
    description: "Pomodoro 工作法是一种时间管理技术，以交替集中工作和休息为基础。根据经典的 Pomodoro 方法，工作时间为 25 分钟，休息时间为 5 分钟。"
}
  , dy = {
    message: "启用 Pomodoro 模式并激活操作模式后，您将看到以下图标",
    description: "在休息时间，您会看到这个扩展图标"
}
  , gy = {
    message: "在 Pomodoro 模式下，扩展会继续考虑你在网站上花费的时间、所有限制和通知。"
}
  , py = {
    message: "按下 '停止' 键后，运行时间和休息时间将重置为零"
}
  , hy = {
    message: "工作期限"
}
  , by = {
    message: "休息时间"
}
  , yy = {
    message: "重复次数"
}
  , _y = {
    message: "启动"
}
  , Ty = {
    message: "停止"
}
  , vy = {
    message: "番茄钟模式已启用"
}
  , $y = {
    message: "完整时段后的声音"
}
  , wy = {
    message: "点击收听"
}
  , Ey = {
    message: "声音"
}
  , Sy = {
    message: "关于"
}
  , Dy = {
    message: "在图标中显示时间跟踪器",
    description: "您可以在扩展程序图标上以简短格式查看当前的“花费时间”信息。"
}
  , Cy = {
    message: "您一天只能将拦截推迟 5 分钟一次。"
}
  , Ay = {
    message: "允许推迟拦截 5 分钟",
    description: "站点被拦截后，您一天中只能将拦截推迟 5 分钟一次。"
}
  , Iy = {
    message: "如果没有操作，则停止跟踪器：",
    description: "可以是使用鼠标或键盘进行的任何操作"
}
  , ky = {
    message: "将您的网站活动数据导出为 CSV 格式",
    description: "您可以导出任何日期范围内的网站活动。"
}
  , xy = {
    message: "秒"
}
  , Ny = {
    message: "分钟"
}
  , Oy = {
    message: "分钟"
}
  , Py = {
    message: "这些网站的活动和花费时间将不会被跟踪。"
}
  , Ly = {
    message: "添加网站"
}
  , My = {
    message: "输入网站名称..."
}
  , Fy = {
    message: "输入通知消息..."
}
  , Ry = {
    message: "网站的每日访问限制",
    description: "设置每天允许访问网站的最长时间。超过此时间后，该网站将被拦截。"
}
  , Wy = {
    message: "如果您将拦截时间设置为 0 小时 0 分钟，那么该网站将立即被拦截。"
}
  , By = {
    message: "保存"
}
  , Uy = {
    message: "每日摘要通知",
    description: "每天结束时，您将收到一条通知，其中包含您的每日使用情况摘要。"
}
  , jy = {
    message: "网站通知",
    description: "每次在网站上花费特定时间时显示通知。"
}
  , Vy = {
    message: "通知消息",
    description: "每次在网站通知中，您都会看到这条消息。"
}
  , Yy = {
    message: "包含有关您日常使用情况的摘要信息的通知时间："
}
  , Hy = {
    message: "在以下位置留下您的反馈或报告问题："
}
  , zy = {
    message: "您还可以提问并留下您的建议。"
}
  , Ky = {
    message: "支持表单"
}
  , qy = {
    message: "您喜欢 Web Activity Time Tracker 吗？"
}
  , Zy = {
    message: "留下评论吧！"
}
  , Gy = {
    message: "您今天已达到限制在 "
}
  , Jy = {
    message: "今天的总使用时间"
}
  , Xy = {
    message: " 与昨天相比 "
}
  , Qy = {
    message: "访问最多的网站 "
}
  , e_ = {
    message: "仪表板"
}
  , t_ = {
    message: "这是按小时显示一天时间的图表。"
}
  , s_ = {
    message: "喜欢这个扩展程序吗？",
    description: "给 Web Activity Time Tracker 评分"
}
  , n_ = {
    message: "删除所有数据",
    description: "您可以删除所有访问过网站的所有数据和统计信息。"
}
  , o_ = {
    message: "删除"
}
  , i_ = {
    message: "您确定要删除所有数据吗？"
}
  , r_ = {
    message: "取消"
}
  , a_ = {
    message: "备份和恢复",
    description: "您可以下载所有访问过网站的所有数据的备份副本。"
}
  , c_ = {
    message: "备份"
}
  , l_ = {
    message: "恢复"
}
  , u_ = {
    message: "欢迎使用 Web Activity Time Tracker",
    description: "Web Activity Time Tracker  是一款<b>开源</b>、<b>免费</b>且<b>无广告</b>的扩展程序，它可以帮助您跟踪在浏览网站上花费的时间和访问次数。"
}
  , f_ = {
    message: "开始使用"
}
  , m_ = {
    message: "您可以通过三个简单的步骤快速开始使用扩展程序："
}
  , d_ = {
    message: "固定图标"
}
  , g_ = {
    message: "为了更方便地使用此扩展程序，您可以将图标固定到工具栏上。点击图标："
}
  , p_ = {
    message: "然后点击固定图标。"
}
  , h_ = {
    message: "浏览任何网站",
    description: "当您访问任何网站时，您会看到时间显示在图标上，就像这里一样："
}
  , b_ = {
    message: "在弹出页面和仪表板上查看您的数据",
    description: "点击扩展图标以打开弹出页面，您将能够使用饼图读取数据可视化信息，包括今天、所有时间或按天分类。在弹出窗口中，您可以打开仪表板，它将按时钟显示您今天的时间。您还可以为任何网站设置每日时间限制、网站通知或导出数据到 CSV。"
}
  , y_ = {
    message: "关闭"
}
  , __ = {
    message: "使用扩展程序"
}
  , T_ = {
    message: "接下来"
}
  , v_ = {
    message: "显示更新日志",
    description: "显示更新扩展程序后的更改列表"
}
  , $_ = {
    message: "每小时"
}
  , w_ = {
    message: "时间间隔"
}
  , E_ = {
    message: "只有时间间隔大于",
    description: "展示"
}
  , S_ = {
    message: "您想屏蔽短片、评论、推荐视频、订阅和其他 YouTube 干扰内容吗？ 我们创建了另一个扩展程序，可帮助您不受干扰地观看 YouTube",
    description: "安装"
}
  , D_ = {
    message: "完全封锁",
    description: "完全封锁"
}
  , C_ = {
    message: "试试我的其他应用程序"
}
  , A_ = {
    message: "Clean YouTube",
    description: "Chrome扩展程序，可以隐藏YouTube短片，推荐视频，评论，feed，主页推荐和其他分心。 观看YouTube免费分心。"
}
  , I_ = {
    message: "TrackerJam",
    description: "团队自动网络跟踪器。为每个团队成员提供详细报告，包括在网站上花费的时间、域内任何 URL 的跟踪、工作效率评分、顶级域分类等。"
}
  , k_ = {
    message: "黑暗主题"
}
  , x_ = {
    extName: vb,
    extDescription: $b,
    settings: wb,
    today: Eb,
    allTime: Sb,
    byDays: Db,
    noData: Cb,
    noDataForPeriod: Ab,
    showAll: Ib,
    sortBy: kb,
    usageTime: xb,
    session: Nb,
    someSession: Ob,
    sessions: Pb,
    days: Lb,
    aggregate: Mb,
    websites: Fb,
    cannotOpenFile: Rb,
    document: Wb,
    limit: Bb,
    d: Ub,
    h: jb,
    m: Vb,
    s: Yb,
    firstActiveDay: Hb,
    numberOfActiveDays: zb,
    totalNumberOfDays: Kb,
    todayTime: qb,
    averageTime: Zb,
    averageDailyUsage: Gb,
    mostActiveDay: Jb,
    mostInactiveDay: Xb,
    todayInclude: Qb,
    todayEcclude: ey,
    averageTimeByDays: ty,
    exportToCsv: sy,
    week: ny,
    month: oy,
    lastMonth: iy,
    generalSettings: ry,
    whiteListSettings: ay,
    limitsSettings: cy,
    notificationsSettings: ly,
    pomodoroMode: uy,
    pomodoroSettings: fy,
    pomodoro: my,
    pomodoroExplanationIcon: dy,
    pomodoroExplanationTime: gy,
    pomodoroExplanationStop: py,
    pomodoroWork: hy,
    pomodoroRest: by,
    pomodoroFrequency: yy,
    start: _y,
    stop: Ty,
    pomodoroIsEnabled: vy,
    pomodoroSoundAfter: $y,
    clickToPreview: wy,
    sound: Ey,
    aboutSettings: Sy,
    viewTimeInBadge: Dy,
    deferringDescription: Cy,
    allowDeferringBlock: Ay,
    intervalInactivity: Iy,
    exportToCsvSetting: ky,
    sec: xy,
    min: Ny,
    "2min": {
        message: "分钟"
    },
    mins: Oy,
    whiteList: Py,
    addWebsite: Ly,
    enterWebsite: My,
    enterNotification: Fy,
    limits: Ry,
    limitsTip: Wy,
    save: By,
    showDailyNotifacation: Uy,
    notificationTime: jy,
    notificationMessage: Vy,
    notificationTimeSetting: Yy,
    github: Hy,
    question: zy,
    supportForm: Ky,
    doYouEnjoy: qy,
    review: Zy,
    block: Gy,
    "5mins": {
        message: "再加 5 分钟"
    },
    todayUsageTime: Jy,
    comparedToYesterday: Xy,
    mostVisited: Qy,
    dashboard: e_,
    timeChartDescription: t_,
    enjoyAndReview: s_,
    removeAllData: n_,
    remove: o_,
    removeAllDataConfirm: i_,
    cancel: r_,
    backupAndRestore: a_,
    backup: c_,
    restore: l_,
    welcome: u_,
    getStarted: f_,
    welcomeStart: m_,
    pinIcon: d_,
    pinIconPart1: g_,
    pinIconPart2: p_,
    browse: h_,
    seeData: b_,
    close: y_,
    useExtension: __,
    next: T_,
    showChangelog: v_,
    byHours: $_,
    intervals: w_,
    intervalsChart: E_,
    promoClearYoutube: S_,
    completelyBlocked: D_,
    tryMyOtherApps: C_,
    clearYoutube: A_,
    trackerjam: I_,
    darkTheme: k_
}
  , N_ = {
    message: "Web Activity Time Tracker - Bloquear sitios, análisis web y Pomodoro"
}
  , O_ = {
    message: "Controla el tiempo de tu actividad web, limita y bloquea los sitios web que te distraen. Monitoriza tu uso de la web."
}
  , P_ = {
    message: "Ajustes"
}
  , L_ = {
    message: "Hoy"
}
  , M_ = {
    message: "Tiempo total"
}
  , F_ = {
    message: "Diario"
}
  , R_ = {
    message: "Sin datos"
}
  , W_ = {
    message: "No hay datos para el periodo seleccionado"
}
  , B_ = {
    message: "Mostrar todos los sitios web"
}
  , U_ = {
    message: "Clasificación por"
}
  , j_ = {
    message: "Tiempo de uso"
}
  , V_ = {
    message: "sesión"
}
  , Y_ = {
    message: "sesiones"
}
  , H_ = {
    message: "Sesiones"
}
  , z_ = {
    message: "días"
}
  , K_ = {
    message: "Datos agregados desde"
}
  , q_ = {
    message: "sitios web"
}
  , Z_ = {
    message: "No se puede abrir un archivo local debido al protocolo de seguridad"
}
  , G_ = {
    message: "Documento"
}
  , J_ = {
    message: "Límite"
}
  , X_ = {
    message: "d"
}
  , Q_ = {
    message: "h"
}
  , eT = {
    message: "m"
}
  , tT = {
    message: "s"
}
  , sT = {
    message: "El primer día activo"
}
  , nT = {
    message: "Número de días activos"
}
  , oT = {
    message: "Número total de días"
}
  , iT = {
    message: "Todo el tiempo hoy"
}
  , rT = {
    message: "Tiempo medio de los días activos"
}
  , aT = {
    message: "Uso medio diario"
}
  , cT = {
    message: "El día más activo"
}
  , lT = {
    message: "El día más inactivo"
}
  , uT = {
    message: "Hoy está incluido en las estadísticas. Haga clic para excluir."
}
  , fT = {
    message: "El día de hoy está excluido de las estadísticas. Haga clic para incluir."
}
  , mT = {
    message: "Tiempo medio en los días seleccionados"
}
  , dT = {
    message: "Exportar a CSV"
}
  , gT = {
    message: "Esta semana"
}
  , pT = {
    message: "Este mes"
}
  , hT = {
    message: "El mes pasado"
}
  , bT = {
    message: "Ajustes"
}
  , yT = {
    message: "ListaBlanca"
}
  , _T = {
    message: "Límites"
}
  , TT = {
    message: "Notificaciones"
}
  , vT = {
    message: "Pomodoro"
}
  , $T = {
    message: "Ajustes Pomodoro"
}
  , wT = {
    message: "Pomodoro",
    description: "El método Pomodoro es una técnica de gestión del tiempo basada en la alternancia de periodos de trabajo concentrado y de descanso. Según los clásicos del método Pomodoro, el periodo de trabajo dura 25 minutos, el de descanso 5 minutos."
}
  , ET = {
    message: "Cuando el modo Pomodoro está activado y el modo de funcionamiento está activo, verá este icono",
    description: "Durante los periodos de descanso, verá este icono de extensión"
}
  , ST = {
    message: "Durante el modo Pomodoro, la extensión sigue teniendo en cuenta el tiempo que pasó en los sitios, todos los límites y las notificaciones de trabajo."
}
  , DT = {
    message: "Tras pulsar 'Parar', el tiempo de trabajo y de descanso se pone a cero."
}
  , CT = {
    message: "Período de trabajo"
}
  , AT = {
    message: "Periodo de descanso"
}
  , IT = {
    message: "Número de repeticiones"
}
  , kT = {
    message: "Ejecutar"
}
  , xT = {
    message: "Stop"
}
  , NT = {
    message: "Modo Pomodoro activado"
}
  , OT = {
    message: "Sonido tras periodo completo"
}
  , PT = {
    message: "Haga clic para escuchar"
}
  , LT = {
    message: "Sonido"
}
  , MT = {
    message: "Acerca de"
}
  , FT = {
    message: "Mostrar el cronómetro en un icono",
    description: "En el icono de extensión puede ver la información actual sobre el 'tiempo transcurrido' en formato abreviado"
}
  , RT = {
    message: "Puedes posponer el bloqueo durante 5 minutos sólo una vez al día"
}
  , WT = {
    message: "Permitir el bloqueo diferido durante 5 minutos",
    description: "Una vez bloqueado el sitio, puede posponer el bloqueo durante 5 minutos a lo largo del día una sola vez"
}
  , BT = {
    message: "Detener el rastreador si no hay ninguna acción para",
    description: "Se trata de cualquier acción con el ratón o el teclado"
}
  , UT = {
    message: "Exportación de los datos de actividad web a CSV",
    description: "Puede exportar su actividad web para cualquier intervalo de fechas"
}
  , jT = {
    message: "segundos"
}
  , VT = {
    message: "minuto"
}
  , YT = {
    message: "minutos"
}
  , HT = {
    message: "La actividad y el tiempo de permanencia en estos sitios web no se rastrearán."
}
  , zT = {
    message: "Añadir sitio web"
}
  , KT = {
    message: "Introduzca el nombre del sitio web..."
}
  , qT = {
    message: "Introducir mensaje de notificación..."
}
  , ZT = {
    message: "Restricciones diarias de acceso a los sitios web",
    description: "Establezca el tiempo máximo permitido para visitar el sitio web al día. Transcurrido este tiempo, el sitio se bloqueará."
}
  , GT = {
    message: "Si establece el tiempo de bloqueo en 0 horas 0 minutos, el sitio web se bloqueará inmediatamente"
}
  , JT = {
    message: "Guardar"
}
  , XT = {
    message: "Notificaciones diarias resumidas",
    description: "Al final de cada día, recibirás una notificación con un resumen de tu uso diario"
}
  , QT = {
    message: "Notificaciones para sitios web",
    description: "Mostrar notificaciones cada vez que pase un periodo de tiempo seleccionado en el sitio web."
}
  , ev = {
    message: "Mensaje de notificación",
    description: "Verás este mensaje en la notificación de sitios web cada vez que"
}
  , tv = {
    message: "Hora de notificación con información resumida sobre su uso diario"
}
  , sv = {
    message: "Deje su opinión o informe de un problema en"
}
  , nv = {
    message: "También puede hacer preguntas y dejar sus sugerencias"
}
  , ov = {
    message: "formulario de asistencia"
}
  , iv = {
    message: "¿Te gusta Web Activity Time Tracker?"
}
  , rv = {
    message: "Deja tu opinión"
}
  , av = {
    message: "¿Te gustaría bloquear los cortos, los comentarios, los vídeos recomendados, las suscripciones y otras distracciones de YouTube? Hemos creado otra extensión que te ayudará a ver YouTube sin distracciones.",
    description: "Instale"
}
  , cv = {
    message: "Has alcanzado tu límite por hoy en"
}
  , lv = {
    message: "Tiempo total de uso para hoy "
}
  , uv = {
    message: " en comparación con ayer "
}
  , fv = {
    message: "Sitio web más visitado "
}
  , mv = {
    message: "Cuadro de mandos"
}
  , dv = {
    message: "Este es un gráfico del tiempo durante el día por horas"
}
  , gv = {
    message: "¿Disfrutando de la ampliación?",
    description: "Valora Web Activity Time Tracker"
}
  , pv = {
    message: "Eliminar todos los datos",
    description: "Puede borrar todos los datos y estadísticas de los sitios web visitados para siempre"
}
  , hv = {
    message: "Eliminar"
}
  , bv = {
    message: "¿Estás seguro de que quieres borrar todos los datos?"
}
  , yv = {
    message: "Cancelar"
}
  , _v = {
    message: "Copia de seguridad y restauración",
    description: "Puedes descargar una copia de seguridad de todos los datos de todos los sitios visitados"
}
  , Tv = {
    message: "Copia de seguridad"
}
  , vv = {
    message: "Restaurar"
}
  , $v = {
    message: "Bienvenido a Web Activity Time Tracker",
    description: "Web Activity Time Tracker es una extensión de código abierto, gratuita y sin publicidad, que puede ayudarte a controlar el tiempo que pasas navegando por páginas web y el recuento de visitas."
}
  , wv = {
    message: "Empezar"
}
  , Ev = {
    message: "Puede empezar a utilizar rápidamente la extensión en sólo 3 sencillos pasos"
}
  , Sv = {
    message: "Anclar el icono"
}
  , Dv = {
    message: "Para utilizar esta extensión más cómodamente, puede fijar el icono a la barra de herramientas. Haga clic en el icono"
}
  , Cv = {
    message: "y, a continuación, haga clic en el icono de la chincheta"
}
  , Av = {
    message: "Navegar por cualquier sitio web",
    description: "Cuando visite cualquier sitio web, verá que la hora aparece en el icono, como aquí"
}
  , Iv = {
    message: "Visualiza tus datos en la página emergente y en el cuadro de mandos",
    description: "Haz clic en el icono de la extensión para abrir una página emergente y podrás leer los datos visualizados mediante un gráfico circular, para hoy, para todo el tiempo o por día. En la ventana emergente, puedes abrir el panel de control y te mostrará el tiempo de hoy según el reloj. Y puedes establecer un límite de tiempo diario para cualquier sitio web, notificaciones para sitios web o exportar los datos a CSV."
}
  , kv = {
    message: "Cerrar"
}
  , xv = {
    message: "Utilizar la extensión"
}
  , Nv = {
    message: "Siguiente"
}
  , Ov = {
    message: "Mostrar el registro de cambios",
    description: "Mostrar la lista de cambios tras actualizar la extensión"
}
  , Pv = {
    message: "Por hora"
}
  , Lv = {
    message: "Intervalos"
}
  , Mv = {
    message: "Sólo los intervalos de tiempo superiores a",
    description: "se muestran"
}
  , Fv = {
    message: "Completamente bloqueado",
    description: "Completamente bloqueado"
}
  , Rv = {
    message: "Pruebe mis otras aplicaciones"
}
  , Wv = {
    message: "Clean YouTube",
    description: "Extensión de Chrome que puede ocultar los cortos de YouTube, los vídeos recomendados, los comentarios, el feed, las recomendaciones de la página de inicio y otras distracciones. Vea YouTube sin distracciones."
}
  , Bv = {
    message: "TrackerJam",
    description: "Rastreador web automático para equipos. Informes detallados para cada miembro del equipo, detallando el tiempo empleado en sitios web, seguimiento de cualquier URL dentro del dominio, puntuaciones de productividad, dominios principales con categorías y etc."
}
  , Uv = {
    message: "Tema oscuro"
}
  , jv = {
    extName: N_,
    extDescription: O_,
    settings: P_,
    today: L_,
    allTime: M_,
    byDays: F_,
    noData: R_,
    noDataForPeriod: W_,
    showAll: B_,
    sortBy: U_,
    usageTime: j_,
    session: V_,
    someSession: Y_,
    sessions: H_,
    days: z_,
    aggregate: K_,
    websites: q_,
    cannotOpenFile: Z_,
    document: G_,
    limit: J_,
    d: X_,
    h: Q_,
    m: eT,
    s: tT,
    firstActiveDay: sT,
    numberOfActiveDays: nT,
    totalNumberOfDays: oT,
    todayTime: iT,
    averageTime: rT,
    averageDailyUsage: aT,
    mostActiveDay: cT,
    mostInactiveDay: lT,
    todayInclude: uT,
    todayEcclude: fT,
    averageTimeByDays: mT,
    exportToCsv: dT,
    week: gT,
    month: pT,
    lastMonth: hT,
    generalSettings: bT,
    whiteListSettings: yT,
    limitsSettings: _T,
    notificationsSettings: TT,
    pomodoroMode: vT,
    pomodoroSettings: $T,
    pomodoro: wT,
    pomodoroExplanationIcon: ET,
    pomodoroExplanationTime: ST,
    pomodoroExplanationStop: DT,
    pomodoroWork: CT,
    pomodoroRest: AT,
    pomodoroFrequency: IT,
    start: kT,
    stop: xT,
    pomodoroIsEnabled: NT,
    pomodoroSoundAfter: OT,
    clickToPreview: PT,
    sound: LT,
    aboutSettings: MT,
    viewTimeInBadge: FT,
    deferringDescription: RT,
    allowDeferringBlock: WT,
    intervalInactivity: BT,
    exportToCsvSetting: UT,
    sec: jT,
    min: VT,
    "2min": {
        message: "minutos"
    },
    mins: YT,
    whiteList: HT,
    addWebsite: zT,
    enterWebsite: KT,
    enterNotification: qT,
    limits: ZT,
    limitsTip: GT,
    save: JT,
    showDailyNotifacation: XT,
    notificationTime: QT,
    notificationMessage: ev,
    notificationTimeSetting: tv,
    github: sv,
    question: nv,
    supportForm: ov,
    doYouEnjoy: iv,
    review: rv,
    promoClearYoutube: av,
    block: cv,
    "5mins": {
        message: "+ 5 minutos"
    },
    todayUsageTime: lv,
    comparedToYesterday: uv,
    mostVisited: fv,
    dashboard: mv,
    timeChartDescription: dv,
    enjoyAndReview: gv,
    removeAllData: pv,
    remove: hv,
    removeAllDataConfirm: bv,
    cancel: yv,
    backupAndRestore: _v,
    backup: Tv,
    restore: vv,
    welcome: $v,
    getStarted: wv,
    welcomeStart: Ev,
    pinIcon: Sv,
    pinIconPart1: Dv,
    pinIconPart2: Cv,
    browse: Av,
    seeData: Iv,
    close: kv,
    useExtension: xv,
    next: Nv,
    showChangelog: Ov,
    byHours: Pv,
    intervals: Lv,
    intervalsChart: Mv,
    completelyBlocked: Fv,
    tryMyOtherApps: Rv,
    clearYoutube: Wv,
    trackerjam: Bv,
    darkTheme: Uv
}
  , zr = {
    en: Xm,
    ru: lp,
    de: Tb,
    zh: x_,
    es: jv
}
  , pi = xu({
    legacy: !1,
    locale: Kr.i18n.getUILanguage(),
    fallbackLocale: "en",
    globalInjection: !0,
    messages: zr
});
function y$() {
    let e = pi.global.locale.value;
    return Object.keys(zr).indexOf(e) == -1 && (e = "en"),
    pi.global.getLocaleMessage(e)
}
export {Ka as $, xs as A, t$ as B, f$ as C, m$ as D, u$ as E, $e as F, fe as G, It as H, Kv as I, Ji as J, K, qn as L, Oi as M, Qc as N, Pn as O, c$ as P, qv as Q, jn as R, n$ as S, br as T, Yv as U, Wc as V, Uc as W, i$ as X, g$ as Y, d$ as Z, b$ as _, dr as a, dc as a0, fa as a1, zv as a2, Jv as a3, y$ as a4, Bc as b, r$ as c, Xv as d, he as e, Qv as f, o$ as g, Gv as h, to as i, $t as j, Un as k, e$ as l, fr as m, Ns as n, lr as o, Zv as p, s$ as q, Bt as r, a$ as s, Hv as t, Ua as u, p$ as v, Qa as w, h$ as x, pi as y, l$ as z};
