import { h } from '../winfun.core.js';

/*!
 * StencilStateTunnel: Core, ES5
 * Built with http://stenciljs.com
 */
function o(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)T.push(arguments[f]);for(;T.length>0;){var c=T.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)T.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u;}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&T.push(f);t.class=T.join(" "),T.length=0;}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name);}return "function"==typeof n?n(t,i||[],P):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,f:void 0,c:!1}}function u(n){return {vtag:n.vtag,vchildren:n.vchildren,vtext:n.vtext,vattrs:n.vattrs,vkey:n.vkey,vname:n.vname}}undefined&&undefined.Nn||(Object.setPrototypeOf||Array);var T=[],P={forEach:function(n,t){n.forEach(function(n,e,r){return t(u(n),e,r)});},map:function(n,t){return n.map(function(n,e,r){return function i(n){return {vtag:n.vtag,vchildren:n.vchildren,vtext:n.vtext,vattrs:n.vattrs,vkey:n.vkey,vname:n.vname}}(t(u(n),e,r))})}};

// StencilStateTunnel: Host Data, ES Module/ES5 Target

// StencilStateTunnel: Custom Elements Define Library, ES Module/ES5 Target

/*! Built with http://stenciljs.com */
var __rest = function (e, r) { var t = {}; for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]); if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var o$$1 = 0;
    for (n = Object.getOwnPropertySymbols(e); o$$1 < n.length; o$$1++)
        r.indexOf(n[o$$1]) < 0 && (t[n[o$$1]] = e[n[o$$1]]);
} return t; };
function defaultConsumerRender(e, r) { return o("context-consumer", { subscribe: e, renderer: r }); }
function createProviderConsumer(e, r) {
    if (r === void 0) { r = defaultConsumerRender; }
    var t = new Map, n = e;
    function o$$1(e, r) { Array.isArray(e) ? e.slice().forEach(function (e) { r[e] = n[e]; }) : r[e] = Object.assign({}, n), r.forceUpdate(); }
    function i(e) { return function (r) { t.has(r) || (t.set(r, e), o$$1(e, r)); }; }
    function s(e, r) { return i(r)(e), function () { t.delete(e); }; }
    return { Provider: function (_a, r) {
            var e = _a.state;
            return n = e, t.forEach(o$$1), r;
        }, Consumer: function (e, t) { return r(s, t[0]); }, wrapConsumer: function (e, r) { var t = e.is; return function (e) { var n = e.children, o$$1 = __rest(e, ["children"]); return o(t, Object.assign({ ref: i(r) }, o$$1), n); }; }, injectProps: function (e, r) { var t = null; var n = Object.keys(e.properties).find(function (r) { return 1 == e.properties[r].elementRef; }); if (null == n)
            throw new Error("Please ensure that your Component " + e.is + " has an attribtue with \"@Element\" decorator. " + "This is required to be able to inject properties."); var o$$1 = e.prototype.componentWillLoad; e.prototype.componentWillLoad = function () { if (t = s(this[n], r), o$$1)
            return o$$1.bind(this)(); }; var i = e.prototype.componentDidUnload; e.prototype.componentDidUnload = function () { if (t(), i)
            return i.bind(this)(); }; } };
}

// StencilStateTunnel: ES Module

var Tunnel = createProviderConsumer(null, (subscribe, child) => (h("context-consumer", { subscribe: subscribe, renderer: child })));

export { Tunnel as a };
