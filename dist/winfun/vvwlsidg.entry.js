const t=window.winfun.h;import{a as e}from"./chunk-084e606b.js";var a,r=(function(t){var e=function(){this.version="1.3.5";var t={mergeCDATA:!0,grokAttr:!0,grokText:!0,normalize:!0,xmlns:!0,namespaceKey:"_ns",textKey:"_text",valueKey:"_value",attrKey:"_attr",cdataKey:"_cdata",attrsAsObject:!0,stripAttrPrefix:!0,stripElemPrefix:!0,childrenAsArray:!0},a=new RegExp(/(?!xmlns)^.*:/),r=new RegExp(/^\s+|\s+$/g);return this.grokType=function(t){return/^\s*$/.test(t)?null:/^(?:true|false)$/i.test(t)?"true"===t.toLowerCase():isFinite(t)?parseFloat(t):t},this.parseString=function(t,e){return this.parseXML(this.stringToXML(t),e)},this.parseXML=function(s,n){for(var i in n)t[i]=n[i];var c={},l=0,o="";if(t.xmlns&&s.namespaceURI&&(c[t.namespaceKey]=s.namespaceURI),s.attributes&&s.attributes.length>0){for(var u={};l<s.attributes.length;l++){var p=s.attributes.item(l);m={};var d;d=t.stripAttrPrefix?p.name.replace(a,""):p.name,m[t.valueKey]=t.grokAttr?this.grokType(p.value.replace(r,"")):p.value.replace(r,""),t.xmlns&&p.namespaceURI&&(m[t.namespaceKey]=p.namespaceURI),t.attrsAsObject?u[d]=m:c[t.attrKey+d]=m}t.attrsAsObject&&(c[t.attrKey]=u)}if(s.hasChildNodes())for(var y,h,m,g=0;g<s.childNodes.length;g++)4===(y=s.childNodes.item(g)).nodeType?t.mergeCDATA?o+=y.nodeValue:c.hasOwnProperty(t.cdataKey)?(c[t.cdataKey].constructor!==Array&&(c[t.cdataKey]=[c[t.cdataKey]]),c[t.cdataKey].push(y.nodeValue)):t.childrenAsArray?(c[t.cdataKey]=[],c[t.cdataKey].push(y.nodeValue)):c[t.cdataKey]=y.nodeValue:3===y.nodeType?o+=y.nodeValue:1===y.nodeType&&(0===l&&(c={}),h=t.stripElemPrefix?y.nodeName.replace(a,""):y.nodeName,m=e.parseXML(y),c.hasOwnProperty(h)?(c[h].constructor!==Array&&(c[h]=[c[h]]),c[h].push(m)):(t.childrenAsArray?(c[h]=[],c[h].push(m)):c[h]=m,l++));else o||(t.childrenAsArray?(c[t.textKey]=[],c[t.textKey].push(null)):c[t.textKey]=null);if(o)if(t.grokText){var f=this.grokType(o.replace(r,""));null!=f&&(c[t.textKey]=f)}else c[t.textKey]=t.normalize?o.replace(r,"").replace(/\s+/g," "):o.replace(r,"");return c},this.xmlToString=function(t){try{return t.xml?t.xml:(new XMLSerializer).serializeToString(t)}catch(t){return null}},this.stringToXML=function(t){try{var e=null;return window.DOMParser?e=(new DOMParser).parseFromString(t,"text/xml"):((e=new ActiveXObject("Microsoft.XMLDOM")).async=!1,e.loadXML(t),e)}catch(t){return null}},this}.call({});null!==t&&t.exports&&(t.exports=e)}(a={exports:{}}),a.exports);function s(t){const e=t._attr;return Object.keys(e).reduce((t,a)=>(t[a]=e[a]._value,t),{})}class n{constructor(){this.src="http://c3420952.r52.cf0.rackcdn.com/toprateddata.xml"}async componentWillLoad(){this.data=await async function(t){const e=await fetch(t);return r.parseString(await e.text()).PackData.map(t=>Object.assign({},s(t),{players:t.PlayerData.map(t=>Object.assign({},s(t),{data:t.P.map(s),get(t){return this.data.find(e=>e.id===t)}}))[0],clubs:t.ClubData.map(t=>Object.assign({},s(t),{data:t.C.map(s),get(t){return this.data.find(e=>e.id===t)}}))[0],stadiums:t.StadiumData.map(t=>Object.assign({},s(t),{data:t.S.map(s),get(t){return this.data.find(e=>e.id===t)}}))[0]}))[0]}(this.src)}render(){return t(e.Provider,{state:this.data},t("slot",null))}static get is(){return"winfun-data"}static get encapsulation(){return"shadow"}static get properties(){return{data:{state:!0},src:{type:String,attr:"src"}}}}export{n as WinfunData};