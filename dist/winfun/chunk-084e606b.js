const t=window.winfun.h;function n(t,n){for(var e,i,u=null,a=!1,c=!1,s=arguments.length;s-- >2;)r.push(arguments[s]);for(;r.length>0;){var f=r.pop();if(f&&void 0!==f.pop)for(s=f.length;s--;)r.push(f[s]);else"boolean"==typeof f&&(f=null),(c="function"!=typeof t)&&(null==f?f="":"number"==typeof f?f=String(f):"string"!=typeof f&&(c=!1)),c&&a?u[u.length-1].vtext+=f:null===u?u=[c?{vtext:f}:f]:u.push(c?{vtext:f}:f),a=c}if(null!=n){if(n.className&&(n.class=n.className),"object"==typeof n.class){for(s in n.class)n.class[s]&&r.push(s);n.class=r.join(" "),r.length=0}null!=n.key&&(e=n.key),null!=n.name&&(i=n.name)}return"function"==typeof t?t(n,u||[],o):{vtag:t,vchildren:u,vtext:void 0,vattrs:n,vkey:e,vname:i,f:void 0,c:!1}}function e(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}Object.setPrototypeOf||Array;var r=[],o={forEach:function(t,n){t.forEach(function(t,r,o){return n(e(t),r,o)})},map:function(t,n){return t.map(function(t,r,o){return function(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}(n(e(t),r,o))})}};function i(t,e){return n("context-consumer",{subscribe:t,renderer:e})}var u=function(t,e){void 0===e&&(e=i);var r=new Map,o=null;function u(t,n){Array.isArray(t)?t.slice().forEach(function(t){n[t]=o[t]}):n[t]=Object.assign({},o),n.forceUpdate()}function a(t){return function(n){r.has(n)||(r.set(n,t),u(t,n))}}function c(t,n){return a(n)(t),function(){r.delete(t)}}return{Provider:function(t,n){return o=t.state,r.forEach(u),n},Consumer:function(t,n){return e(c,n[0])},wrapConsumer:function(t,e){var r=t.is;return function(t){var o=t.children,i=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&(e[r[o]]=t[r[o]])}return e}(t,["children"]);return n(r,Object.assign({ref:a(e)},i),o)}},injectProps:function(t,n){var e=null,r=Object.keys(t.properties).find(function(n){return 1==t.properties[n].elementRef});if(null==r)throw new Error("Please ensure that your Component "+t.is+' has an attribtue with "@Element" decorator. This is required to be able to inject properties.');var o=t.prototype.componentWillLoad;t.prototype.componentWillLoad=function(){if(e=c(this[r],n),o)return o.bind(this)()};var i=t.prototype.componentDidUnload;t.prototype.componentDidUnload=function(){if(e(),i)return i.bind(this)()}}}}(0,(n,e)=>t("context-consumer",{subscribe:n,renderer:e}));export{u as a};