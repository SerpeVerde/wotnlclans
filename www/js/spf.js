/* SPF 24 (v2.4.0) | (c) 2012-2016 Google Inc. | License: MIT */
(function(){function l(a,b,c){var d=Array.prototype.slice.call(arguments,2);return function(){var c=d.slice();c.push.apply(c,arguments);return a.apply(b,c)}}function aa(a,b){if(a){var c=Array.prototype.slice.call(arguments,1);try{return a.apply(null,c)}catch(d){return d}}}function m(a,b){if(document.createEvent){var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!0,!0,b);return document.dispatchEvent(c)}return!0}
var n=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function ba(){};function r(a,b){return t[a]=b}var t=window._spf_state||{};window._spf_state=t;var ca={"animation-class":"spf-animate","animation-duration":425,"cache-lifetime":6E5,"cache-max":50,"cache-unified":!1,"link-class":"spf-link","nolink-class":"spf-nolink","navigate-limit":20,"navigate-lifetime":864E5,"reload-identifier":null,"request-timeout":0,"url-identifier":"?spf=__type__"},v={};"config"in t||r("config",v);v=t.config;n();function da(a,b){var c=b||document;return c.querySelectorAll?c.querySelectorAll(a):[]}function ea(a,b,c){for(;a;){if(b(a))return a;if(c&&a==c)break;a=a.parentNode}return null}function fa(a,b,c){b=b||document;var d=b.createElement("iframe");d.id=a||"";d.src='javascript:""';d.style.display="none";c&&(d.onload=l(c,null,d));b.body.appendChild(d);return d};function ga(a,b,c){var d=null,e=window.history.state;if(e){var d={},f;for(f in e)d[f]=e[f]}if(b)for(f in d=d||{},b)d[f]=b[f];ha(!0,a,d,c)}function ha(a,b,c,d){if(b||c){b=b||window.location.href;c=c||{};var e=n();r("history-timestamp",e);c["spf-timestamp"]=e;if(a)ia(c,b);else if(a=ja().contentWindow.history.pushState,"function"==typeof a)a.call(window.history,c,"",b);else throw Error("history.pushState is not a function.");r("history-url",b);d&&(d=t["history-callback"])&&d(b,c)}}
function ka(a){var b=window.location.href;if(t["history-ignore-pop"])r("history-ignore-pop",!1);else if(a.state){a=a.state;var c=a["spf-timestamp"];b==t["history-url"]?(r("history-timestamp",c),ia(a,b)):(a["spf-back"]=c<parseInt(t["history-timestamp"],10),a["spf-current"]=t["history-url"],r("history-timestamp",c),r("history-url",b),(c=t["history-callback"])&&c(b,a))}}
function ia(a,b){var c=ja().contentWindow.history.replaceState;if("function"==typeof c)c.call(window.history,a,"",b);else throw Error("history.replaceState is not a function");}function ja(){var a=document.getElementById("history-iframe");a||(a=fa("history-iframe"));return a};function w(a,b){if(a.forEach)a.forEach(b,void 0);else for(var c=0,d=a.length;c<d;c++)c in a&&b.call(void 0,a[c],c,a)}function la(a,b){if(a.every)return a.every(b,void 0);for(var c=0,d=a.length;c<d;c++)if(c in a&&!b.call(void 0,a[c],c,a))return!1;return!0}function ma(a,b){if(a.some)return a.some(b,void 0);for(var c=0,d=a.length;c<d;c++)if(c in a&&b.call(void 0,a[c],c,a))return!0;return!1}
function na(a,b){if(a.filter)return a.filter(b,void 0);var c=[];w(a,function(a,e,f){b.call(void 0,a,e,f)&&c.push(a)});return c}function oa(a,b){if(a.map)return a.map(b,void 0);var c=[];c.length=a.length;w(a,function(a,e,f){c[e]=b.call(void 0,a,e,f)});return c}function x(a){return"[object Array]"==Object.prototype.toString.call(a)?a:[a]};function pa(a){var b=y();a in b&&delete b[a]}function ra(){var a=y(),b;for(b in a)sa(a[b])||delete a[b];a=y();b=parseInt(v["cache-max"],10);b=isNaN(b)?Infinity:b;b=Object.keys(a).length-b;if(!(0>=b))for(var c=0;c<b;c++){var d=Infinity,e,f;for(f in a)a[f].count<d&&(e=f,d=a[f].count);delete a[e]}}function sa(a){if(!(a&&"data"in a))return!1;var b=a.life,b=isNaN(b)?Infinity:b;a=a.time;return n()-a<b}function ta(a){var b=parseInt(t["cache-counter"],10)||0;b++;r("cache-counter",b);a.count=b}
function y(a){return!a&&"cache-storage"in t?t["cache-storage"]:r("cache-storage",a||{})};function ua(a){return a.classList?a.classList:a.className&&a.className.match(/\S+/g)||[]}function va(a,b){if(b){if(a.classList)return a.classList.contains(b);var c=ua(a);return ma(c,function(a){return a==b})}return!1}function z(a,b){b&&(a.classList?a.classList.add(b):va(a,b)||(a.className+=" "+b))}function A(a,b){if(b)if(a.classList)a.classList.remove(b);else{var c=ua(a),c=na(c,function(a){return a!=b});a.className=c.join(" ")}};function wa(a){var b=document.body;b.dataset?b.dataset.spfName=a:b.setAttribute("data-"+"spfName".replace(/([A-Z])/g,"-$1").toLowerCase(),a)};function B(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}function xa(a){return"[object String]"==Object.prototype.toString.call(a)}var ya=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")};function C(a,b){var c=a.split(b),d=1==c.length;return[c[0],d?"":b,d?"":c.slice(1).join(b)]};function za(a){a.data&&xa(a.data)&&0==a.data.lastIndexOf(Aa,0)&&Ba(a.data.substring(Aa.length))}function Ba(a){var b=D[a];b&&(delete D[a],b())}function Ca(a){window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a)}function Da(a){window.removeEventListener?window.removeEventListener("message",a,!1):window.detachEvent&&window.detachEvent("onmessage",a)}
var Ea=function(){function a(){b=!1}if(!window.postMessage)return!1;var b=!0;Ca(a);window.postMessage("","*");Da(a);return b}(),Aa="spf:",D={};"async-defers"in t||r("async-defers",D);D=t["async-defers"];Ea&&("async-listener"in t&&Da(t["async-listener"]),Ca(za),r("async-listener",za));function Fa(a,b){a&&b&&(a in E||(E[a]=[]),E[a].push(b))}function Ga(a,b){a in E&&b&&la(E[a],function(a,d,e){return a==b?(e[d]=null,!1):!0})}function Ha(a){a in E&&w(E[a],function(a,c,d){d[c]=null;a&&a()})}var E={};"ps-s"in t||r("ps-s",E);E=t["ps-s"];function F(a,b,c){var d=G[a];return a&&b?(d||(d=G[a]={items:[],j:0,i:0,o:1}),d.items.push({t:b,p:c||0})):d&&d.items.length||0}function H(a,b){var c=G[a];if(c){var d=!!c.j||!!c.i;0<c.o&&(b||!d)&&Ia(a,b)}}function J(a){(a=G[a])&&a.o--}function K(a,b){var c=G[a];c&&(c.o++,H(a,b))}function Ja(a){var b=G[a];b&&(Ka(b),delete G[a])}
function Ia(a,b){var c=G[a];if(c&&(Ka(c),0<c.o&&c.items.length)){var d=c.items[0];if(d){var e=l(function(a,b){b();a()},null,l(Ia,null,a,b));b?(c.items.shift(),e(d.t)):La(c,d,e)}}}function La(a,b,c){b.p?(c=l(c,null,ba),a.i=setTimeout(c,b.p),b.p=0):(a.items.shift(),c=l(c,null,b.t),(b=(b=v["advanced-task-scheduler"])&&b.addTask)?a.j=b(c):a.i=setTimeout(c,0))}function Ka(a){if(a.j){var b=v["advanced-task-scheduler"];(b=b&&b.cancelTask)&&b(a.j);a.j=0}a.i&&(clearTimeout(a.i),a.i=0)}var G={};function L(a){var b=document.createElement("a");b.href=a;b.href=b.href;a={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:b.port,pathname:b.pathname,search:b.search,hash:b.hash,L:b.L,K:b.K};a.origin=a.protocol+"//"+a.host;a.pathname&&"/"==a.pathname[0]||(a.pathname="/"+a.pathname);return a}function M(a,b){var c=L(a);return b?c.href:C(c.href,"#")[0]}
function Ma(a,b){var c=C(a,"#");a=c[0];w(b,function(b){a=a.replace(new RegExp("([?&])"+b+"(?:=[^&]*)?(?:(?=[&])|$)","g"),function(a,b){return"?"==b?b:""})});B(a,"?")&&(a=a.slice(0,-1));return a+c[1]+c[2]}function Na(a){var b=v["advanced-persistent-parameters"]||"",c=C(a,"#");a=c[0];var d=-1!=a.indexOf("?")?"&":"?";return a+(b?d+b:"")+c[1]+c[2]};function Oa(a,b,c,d){var e=a==N;b=O(a,b);var f=c||"^"+b,k=P(a,f),g;c&&(g=Q(a,c))&&b!=g&&(m(e?"spfjsbeforeunload":"spfcssbeforeunload",{name:c,url:g}),Pa(a,c,g),Fa(k,l(Ra,null,a,c,g)));e=P(a,b);if((e=R[e])&&f!=e){var h=P(a,e);delete S[h];h=P(a,b);delete R[h];(h=P(a,e))&&k&&h in E&&(E[k]=(E[k]||[]).concat(E[h]),delete E[h])}h=P(a,b);R[h]=f;Sa(a,f,b);Fa(k,d);d=l(Ta,null,a);Ua(a,b)?(e&&f!=e&&(a=Va(a,b))&&a.setAttribute("name",c||""),d()):(a=Wa(a,b,d,void 0,void 0,g))&&c&&a.setAttribute("name",c)}
function Xa(a,b){var c=Q(a,b);Pa(a,b,c);Ra(a,b,c)}function Pa(a,b,c){var d=P(a,b);delete S[d];c&&(c=P(a,c),delete R[c]);a=P(a,b);delete E[a]}function Ra(a,b,c){var d=a==N;c&&(m(d?"spfjsunload":"spfcssunload",{name:b,url:c}),Ya(a,c))}function Ta(a){var b=P(a,""),c;for(c in E)0==c.indexOf(b)&&la(c.substring(b.length).split("|"),l(Za,null,a))&&Ha(c)}
function Wa(a,b,c,d,e,f){function k(){Ua(a,b,e)&&$a(ab,a,b,e);g&&p&&p.parentNode&&h==document&&p.parentNode.removeChild(p);c&&setTimeout(c,0);return null}var g=a==N;b=O(a,b);$a(bb,a,b,e);var h=d||document,p=h.createElement(g?"script":"link");if(!b)return k();d=cb(b);p.className=P(a,d);"onload"in p?p.onerror=p.onload=k:p.onreadystatechange=function(){/^c|loade/.test(p.readyState)&&k()};d=h.getElementsByTagName("head")[0]||h.body;g?(p.async=!0,p.src=b,d.insertBefore(p,d.firstChild)):(p.rel="stylesheet",
p.href=b,(f=f?Va(a,f,d):null)?d.insertBefore(p,f):d.appendChild(p));return p}function Ya(a,b){b=O(a,b);var c=Va(a,b,void 0);c&&c.parentNode&&c.parentNode.removeChild(c);c=P(a,b);delete db[c]}function Va(a,b,c){b=cb(b);a="."+P(a,b);return da(a,c)[0]}function eb(a){var b=a==N,c=[];w(da(b?"script[src]":'link[rel~="stylesheet"]'),function(d){var e=b?d.src:d.href,e=O(a,e);if(!Ua(a,e)){$a(ab,a,e);var f=cb(e),f=P(a,f);z(d,f);if(f=d.getAttribute("name")){var k=P(a,e);R[k]=f;Sa(a,f,e)}c.push(d)}})}
function fb(a,b,c){if(b&&(b=O(a,b),c||!Ua(a,b)))if(c&&a==gb)hb(b);else{var d=cb(b),e=P(a,d),f=P(a,"prefetch"),d=document.getElementById(f);if(!d)d=fa(f,null,function(a){a.title=f;H(f,!0)});else if(!c&&d.contentWindow.document.getElementById(e))return;a=l(ib,null,d,a,b,e,f);d.title?a():F(f,a)}}
function ib(a,b,c,d,e){var f=b==N,k=b==T;a=a.contentWindow.document;var g=a.getElementById(d);g&&g.parentNode.removeChild(g);f?(g=a.createElement("object"),jb?a.createElement("script").src=c:g.data=c,g.id=d,a.body.appendChild(g)):k?(g=Wa(b,c,null,a,e),g.id=d):(g=a.createElement("img"),jb&&(c=c+"#"+n()),g.src=c,g.id=d,a.body.appendChild(g))}function hb(a){var b=new Image;jb&&(a=a+"#"+n());b.src=a}
function kb(a,b,c){for(var d=a==N,e=Q(a,c),f=b.replace(/\s/g,""),f=f||"",k=0,g=0,h=f.length;g<h;++g)k=31*k+f.charCodeAt(g),k%=4294967296;f="hash-"+k;Sa(a,c,f);!lb(a,f)&&(b=mb(a,b))&&($a(ab,a,f),b&&!d&&(d=cb(f),d=P(a,d),b.className=d,b.setAttribute("name",c)),(e=e&&e[0])&&Ya(a,e))}
function mb(a,b){b=ya(b);if(!b)return null;var c=document.getElementsByTagName("head")[0]||document.body,d;a==N?(d=document.createElement("script"),d.text=b,c.appendChild(d),c.removeChild(d)):(d=document.createElement("style"),c.appendChild(d),"styleSheet"in d?d.styleSheet.cssText=b:d.appendChild(document.createTextNode(b)));return d}
function O(a,b){var c="rsrc-p-"+a;if(b){var d=b.indexOf("//");if(0>d){if(0==b.lastIndexOf("hash-",0))return b;c=t[c]||"";if(xa(c))b=c+b;else for(var e in c)b=b.replace(e,c[e]);a!=gb&&(b=0>b.indexOf("."+a)?b+"."+a:b);b=M(b)}else 0==d&&(b=M(b))}return b}function P(a,b,c){return a+"-"+b+(c?"-"+c:"")}function cb(a){return a?String(a).replace(/[^\w]/g,""):""}function $a(a,b,c,d){b=P(b,c,d);db[b]=a}function Ua(a,b,c){a=P(a,b,c);return db[a]}function lb(a,b){var c=Ua(a,b);return""==b||c==ab}
function Sa(a,b,c){a=P(a,b);S[a]=c}function Q(a,b){var c=P(a,b);return S[c]}function Za(a,b){var c=Q(a,b);return void 0!=c&&lb(a,c)}var db={},R={},S={},jb=-1!=navigator.userAgent.indexOf(" Trident/"),bb=1,ab=2,T="css",gb="img",N="js";"rsrc-s"in t||r("rsrc-s",db);db=t["rsrc-s"];"rsrc-n"in t||r("rsrc-n",R);R=t["rsrc-n"];"rsrc-u"in t||r("rsrc-u",S);S=t["rsrc-u"];function nb(a){a=x(a);w(a,function(a){fb(gb,a,!0)})};function ob(a,b,c){Oa(N,a,b,c)}function pb(a){Xa(N,a)}function qb(a,b){Wa(N,a,b)}function rb(a){a=x(a);w(a,function(a){fb(N,a)})}function sb(a,b,c){a=x(a);a=na(a,function(a){return!!a});var d=[];w(a,function(a){void 0==Q(N,a)&&d.push(a)});var e=!d.length;if(b){var f=la(a,l(Za,null,N));e&&f?b():(a=P(N,a.sort().join("|")),Fa(a,b))}c&&!e&&c(d)}function tb(a,b){a=x(a);w(a,function(a){if(a){var b=ub[a]||a,b=O(N,b),e=Q(N,a);e&&b!=e&&vb(a)}});sb(a,b,wb)}
function wb(a){w(a,function(a){function c(){ob(e,a)}var d=U[a],e=ub[a]||a;d?tb(d,c):c()})}function vb(a){a=x(a);w(a,function(a){var c=[],d;for(d in U){var e=U[d],e=x(e);w(e,function(e){e==a&&c.push(d)})}w(c,function(a){vb(a)});pb(a)})}function xb(a,b){kb(N,a,b)}function yb(a){mb(N,a)}var U={};"js-d"in t||r("js-d",U);var U=t["js-d"],ub={};"js-u"in t||r("js-u",ub);ub=t["js-u"];function zb(a,b,c){Oa(T,a,b,c)}function Ab(a,b){Wa(T,a,b)}function Bb(a){a=x(a);w(a,function(a){fb(T,a)})};function Cb(a,b,c){if(b){b=[];var d,e=0;c&&(a+="\r\n");var f=a.indexOf(Db,e);for(-1<f&&(e=f+Db.length);-1<(f=a.indexOf(Eb,e));)d=ya(a.substring(e,f)),e=f+Eb.length,d&&b.push(JSON.parse(d));f=a.indexOf(Fb,e);-1<f&&(d=ya(a.substring(e,f)),e=f+Fb.length,d&&b.push(JSON.parse(d)));d="";a.length>e&&(d=a.substring(e),c&&B(d,"\r\n")&&(d=d.substring(0,d.length-2)));b=Gb(b);return{n:b,c:d}}a=JSON.parse(a);b=Gb(x(a));return{n:b,c:""}}
function V(a,b,c,d){var e=c&&0==c.type.lastIndexOf("navigate",0),f=c&&c.reverse,k=c&&!!c.position,g=c&&c.f,h=b.name||"",p="process "+M(a),q=!v["experimental-process-async"],u;u=0;b.timing||(b.timing={});b.title&&(document.title=b.title);e&&b.url&&M(b.url)!=M(window.location.href)&&ga(b.url+window.location.hash);b.head&&(u=l(function(a,b){var c=W(a);Hb(c);Ib(c);J(p);Jb(c,function(){b.spfProcessHead=n();K(p,q)})},null,b.head,b.timing),u=F(p,u));b.attr&&(u=l(function(a,b){for(var c in a){var d=document.getElementById(c);
if(d){var e=a[c],f=void 0;for(f in e){var g=e[f];"class"==f?d.className=g:"style"==f?d.style.cssText=g:(d.setAttribute(f,g),"value"==f&&(d[f]=g))}}}b.spfProcessAttr=n()},null,b.attr,b.timing),u=F(p,u));var I=b.body||{},Tc=u,Qa;for(Qa in I)u=l(function(a,b){var d=document.getElementById(a);if(d){!e||k||g||(r("nav-scroll-position",null),r("nav-scroll-url",null),window.scroll(0,0),g=!0,c&&(c.f=!0));var u=W(b);Ib(u);var I=function(){J(p);Jb(u,function(){K(p,q)})},qa=v["animation-class"];Kb&&va(d,qa)?
(d=new Lb(d,u.html,qa,h,!!f),J(p),H(d.key,!0),F(d.key,l(Mb,null,d),0),F(d.key,l(Nb,null,d),17),F(d.key,l(Ob,null,d),d.duration),F(d.key,l(function(){I();K(p,q)},null),0),H(d.key)):(qa=v["experimental-html-handler"])?(J(p),qa(u.html,d,function(){I();K(p,q)})):(d.innerHTML=u.html,I())}},null,Qa,I[Qa],b.timing),u=F(p,u);I=u-Tc;b.foot?(u=l(function(a,b,c){c&&(b.spfProcessBody=n());a=W(a);Ib(a);J(p);Jb(a,function(){b.spfProcessFoot=n();K(p,q)})},null,b.foot,b.timing,I),u=F(p,u)):I&&(u=l(function(a){a.spfProcessBody=
n()},null,b.timing),u=F(p,u));d&&(u=F(p,l(d,null,a,b)));H(p,q)}function Pb(a,b,c,d){c="preprocess "+M(a);var e;b.head&&(e=l(function(a){a=W(a);Hb(a);Qb(a);Rb(a)},null,b.head),F(c,e));var f=b.body||{},k;for(k in f)f[k]&&(e=l(function(a,b){var c=W(b);Qb(c);Rb(c)},null,k,f[k]),F(c,e));b.foot&&(e=l(function(a){a=W(a);Qb(a);Rb(a)},null,b.foot),F(c,e));d&&F(c,l(d,null,a,b));H(c)}
function Mb(a){z(a.element,a.k);z(a.element,a.u);z(a.element,a.G);z(a.element,a.C);z(a.element,a.D);a.h=document.createElement("div");a.h.className=a.J;var b=a.element,c=a.h;if(c){for(var d;d=b.firstChild;)c.appendChild(d);b.appendChild(c)}a.g=document.createElement("div");a.g.className=a.I;a.g.innerHTML=a.H;a.reverse?(b=a.h,b.parentNode.insertBefore(a.g,b)):(b=a.h,b.parentNode.insertBefore(a.g,b.nextSibling))}function Nb(a){A(a.element,a.C);A(a.element,a.D);z(a.element,a.r);z(a.element,a.s)}
function Ob(a){a.element.removeChild(a.h);var b=a.g,c,d=b.parentNode;if(d&&11!=d.nodeType)if(b.removeNode)b.removeNode(!1);else{for(;c=b.firstChild;)d.insertBefore(c,b);d.removeChild(b)}A(a.element,a.r);A(a.element,a.s);A(a.element,a.u);A(a.element,a.G);A(a.element,a.k)}function Gb(a){w(x(a),function(a){if(a){a.head&&(a.head=W(a.head));if(a.body)for(var c in a.body)a.body[c]=W(a.body[c]);a.foot&&(a.foot=W(a.foot))}});return a}
function W(a){var b=new Sb;if(!a)return b;if(!xa(a))return a.scripts&&w(a.scripts,function(a){b.scripts.push({url:a.url||"",text:a.text||"",name:a.name||"",async:a.async||!1})}),a.styles&&w(a.styles,function(a){b.styles.push({url:a.url||"",text:a.text||"",name:a.name||""})}),a.links&&w(a.links,function(a){"spf-preconnect"==a.rel&&b.links.push({url:a.url||"",rel:a.rel||""})}),b.html=a.html||"",b;a=a.replace(Tb,function(a,d,e,f){if("script"==d){d=(d=e.match(Ub))?d[1]:"";var k=e.match(Vb),k=k?k[1]:"",
g=Wb.test(e);e=Xb.exec(e);return(e=!e||-1!=e[1].indexOf("/javascript")||-1!=e[1].indexOf("/x-javascript")||-1!=e[1].indexOf("/ecmascript"))?(b.scripts.push({url:k,text:f,name:d,async:g}),""):a}return"style"==d&&(d=(d=e.match(Ub))?d[1]:"",e=Xb.exec(e),e=!e||-1!=e[1].indexOf("text/css"))?(b.styles.push({url:"",text:f,name:d}),""):a});a=a.replace(Yb,function(a,d){var e=d.match(Zb),e=e?e[1]:"";if("stylesheet"==e){var e=(e=d.match(Ub))?e[1]:"",f=d.match($b),f=f?f[1]:"";b.styles.push({url:f,text:"",name:e});
return""}return"spf-preconnect"==e?(f=(f=d.match($b))?f[1]:"",b.links.push({url:f,rel:e}),""):a});b.html=a;return b}function Jb(a,b){if(0>=a.scripts.length)b&&b();else{var c=-1,d=function(){c++;if(c<a.scripts.length){var e=a.scripts[c],f=function(){};e.url?f=e.name?l(ob,null,e.url,e.name):l(qb,null,e.url):e.text&&(f=e.name?l(xb,null,e.text,e.name):l(yb,null,e.text));e.url&&!e.async?f(d):(f(),d())}else b&&b()};d()}}
function Rb(a){0>=a.scripts.length||(a=oa(a.scripts,function(a){return a.url}),rb(a))}function Ib(a){0>=a.styles.length||w(a.styles,function(a){a.url?a.name?zb(a.url,a.name):Ab(a.url):a.text&&(a.name?kb(T,a.text,a.name):mb(T,a.text))})}function Qb(a){0>=a.styles.length||(a=oa(a.styles,function(a){return a.url}),Bb(a))}function Hb(a){0>=a.links.length||(a=oa(a.links,function(a){return"spf-preconnect"==a.rel?a.url:""}),nb(a))}
function Lb(a,b,c,d,e){var f=parseInt(v["animation-duration"],10);this.element=a;this.H=b;this.duration=f;this.reverse=e;b=document.body;b=(b.dataset?b.dataset.spfName:b.getAttribute("data-"+"spfName".replace(/([A-Z])/g,"-$1").toLowerCase()))||"";f=parseInt(t.uid,10)||0;f++;this.key=a["spf-key"]||(a["spf-key"]=""+r("uid",f));this.u=b&&c+"-from-"+b;this.G=d&&c+"-to-"+d;this.h=null;this.J=c+"-old";this.g=null;this.I=c+"-new";this.k=c+(e?"-reverse":"-forward");this.C=c+"-start";this.D=this.k+"-start";
this.r=c+"-end";this.s=this.k+"-end"}function Sb(){this.html="";this.scripts=[];this.styles=[];this.links=[]}
var Kb=function(){var a=document.createElement("div");return"transition"in a.style?!0:ma(["webkit","Moz","Ms","O","Khtml"],function(b){return b+"Transition"in a.style})}(),Yb=/\x3clink([\s\S]*?)\x3e/ig,Tb=/\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/ig,Wb=/(?:\s|^)async(?:\s|=|$)/i,$b=/(?:\s|^)href\s*=\s*["']?([^\s"']+)/i,Ub=/(?:\s|^)name\s*=\s*["']?([^\s"']+)/i,Zb=/(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i,Vb=/(?:\s|^)src\s*=\s*["']?([^\s"']+)/i,Xb=/(?:\s|^)type\s*=\s*["']([^"']+)["']/i,Db=
"[\r\n",Eb=",\r\n",Fb="]\r\n";function ac(a,b,c,d){var e=d||{},f=!1,k=0,g,h=new XMLHttpRequest;h.open(a,b,!0);h.timing={};var p=h.abort;h.abort=function(){clearTimeout(g);h.onreadystatechange=null;p.call(h)};h.onreadystatechange=function(){var a=h.timing;if(h.readyState==bc){a.responseStart=a.responseStart||n();if("json"==h.responseType)f=!1;else if(-1<(h.getResponseHeader("Transfer-Encoding")||"").toLowerCase().indexOf("chunked"))f=!0;else{var a=h.getResponseHeader("X-Firefox-Spdy"),c=window.chrome&&chrome.loadTimes&&chrome.loadTimes(),
c=c&&c.wasFetchedViaSpdy;f=!(!a&&!c)}e.A&&e.A(h)}else h.readyState==cc?f&&e.l&&(a=h.responseText.substring(k),k=h.responseText.length,e.l(h,a)):h.readyState==dc&&(a.responseEnd=a.responseEnd||n(),window.performance&&window.performance.getEntriesByName&&(h.resourceTiming=window.performance.getEntriesByName(b).pop()),f&&e.l&&h.responseText.length>k&&(a=h.responseText.substring(k),k=h.responseText.length,e.l(h,a)),clearTimeout(g),e.w&&e.w(h))};"responseType"in h&&"json"==e.responseType&&(h.responseType=
"json");a="POST"==a;if(e.headers)for(var q in e.headers)h.setRequestHeader(q,e.headers[q]),"content-type"==q.toLowerCase()&&(a=!1);a&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");0<e.F&&(g=setTimeout(function(){h.abort();e.B&&e.B(h)},e.F));h.timing.fetchStart=n();h.send(c);return h}var bc=2,cc=3,dc=4;function ec(a,b){var c=b||{};c.method=((c.method||"GET")+"").toUpperCase();c.type=c.type||"request";var d=a,e=v["url-identifier"]||"";if(e){var e=e.replace("__type__",c.type||""),f=C(d,"#"),k=C(f[0],"?"),d=k[0],g=k[1],k=k[2],h=f[1],f=f[2];if(0==e.lastIndexOf("?",0))g&&(e=e.replace("?","&")),k+=e;else{if(0==e.lastIndexOf(".",0))if(B(d,"/"))e="index"+e;else{var p=d.lastIndexOf(".");-1<p&&(d=d.substring(0,p))}else B(d,"/")&&0==e.lastIndexOf("/",0)&&(e=e.substring(1));d+=e}d=d+g+k+h+f}e=M(d);d={};d.spfUrl=
e;d.startTime=n();d.fetchStart=d.startTime;g=fc(a,c.current,null,c.type,!1);g=gc(g,c.current);d.spfPrefetched=!!g&&"prefetch"==g.type;d.spfCached=!!g;if(g){var c=l(hc,null,a,c,d,g.key,g.response),q;q=window._spf_state=window._spf_state||{};e=parseInt(q.uid,10)||0;e++;q=q.uid=e;D[q]=c;Ea?window.postMessage(Aa+q,"*"):window.setTimeout(l(Ba,null,q),0);return null}g={};if(k=v["request-headers"])for(q in k)h=k[q],g[q]=null==h?"":h;if(c.headers)for(q in c.headers)h=c.headers[q],g[q]=null==h?"":h;null!=
c.b&&(g["X-SPF-Referer"]=c.b);null!=c.current&&(g["X-SPF-Previous"]=c.current);if(q=v["advanced-header-identifier"])g["X-SPF-Request"]=q.replace("__type__",c.type),g.Accept="application/json";q=new ic;k=l(jc,null,a,c,d,q);q={headers:g,F:v["request-timeout"],A:l(kc,null,a,q),l:l(lc,null,a,c,d,q),w:k,B:k};v["advanced-response-type-json"]&&(q.responseType="json");return"POST"==c.method?ac("POST",e,c.q,q):ac("GET",e,null,q)}
function hc(a,b,c,d,e){var f=!1;c.responseStart=c.responseEnd=n();b.type&&0==b.type.lastIndexOf("navigate",0)&&(c.navigationStart=c.startTime,v["cache-unified"]||(pa(d),f=!0));b.e&&"multipart"==e.type&&w(e.parts,function(d){d.timing||(d.timing={});d.timing.spfCached=!!c.spfCached;d.timing.spfPrefetched=!!c.spfPrefetched;b.e(a,d)});mc(a,b,c,e,f)}function kc(a,b,c){a=-1!=(c.getResponseHeader("X-SPF-Response-Type")||"").toLowerCase().indexOf("multipart");b.v=a}
function lc(a,b,c,d,e,f,k){if(d.v){f=d.c+f;var g;try{g=Cb(f,!0,k)}catch(h){e.abort();b.d&&b.d(a,h,e);return}b.e&&w(g.n,function(d){d.timing||(d.timing={});d.timing.spfCached=!!c.spfCached;d.timing.spfPrefetched=!!c.spfPrefetched;b.e(a,d)});d.complete=d.complete.concat(g.n);d.c=g.c}}
function jc(a,b,c,d,e){if(e.timing)for(var f in e.timing)c[f]=e.timing[f];if(e.resourceTiming)if("load"==b.type)for(var k in e.resourceTiming)c[k]=e.resourceTiming[k];else if(window.performance&&window.performance.timing&&(f=window.performance.timing.navigationStart,f+e.resourceTiming.startTime>=c.startTime))for(var g in e.resourceTiming)k=e.resourceTiming[g],void 0!==k&&(B(g,"Start")||B(g,"End")||"startTime"==g)&&(c[g]=f+Math.round(k));"load"!=b.type&&(c.navigationStart=c.startTime);d.complete.length&&
(d.c=ya(d.c),d.c&&lc(a,b,c,d,e,"",!0));var h;if("json"==e.responseType){if(!e.response){b.d&&b.d(a,Error("JSON response parsing failed"),e);return}h=Gb(x(e.response))}else try{h=Cb(e.responseText).n}catch(p){b.d&&b.d(a,p,e);return}if(b.e&&1<h.length)for(d=d.complete.length;d<h.length;d++)e=h[d],e.timing||(e.timing={}),e.timing.spfCached=!!c.spfCached,e.timing.spfPrefetched=!!c.spfPrefetched,b.e(a,e);if(1<h.length){var q;w(h,function(a){a.cacheType&&(q=a.cacheType)});h={parts:h,type:"multipart"};q&&
(h.cacheType=q)}else h=1==h.length?h[0]:{};mc(a,b,c,h,!0)}function mc(a,b,c,d,e){if(e&&"POST"!=b.method&&(e=fc(a,b.current,d.cacheType,b.type,!0))){d.cacheKey=e;var f={response:d,type:b.type||""},k=parseInt(v["cache-lifetime"],10),g=parseInt(v["cache-max"],10);0>=k||0>=g||(g=y(),f={data:f,life:k,time:n(),count:0},ta(f),g[e]=f,setTimeout(ra,1E3))}d.timing=c;b.m&&b.m(a,d)}
function fc(a,b,c,d,e){a=M(a);var f;v["cache-unified"]?f=a:"navigate-back"==d||"navigate-forward"==d?f="history "+a:"navigate"==d?f=(e?"history ":"prefetch ")+a:"prefetch"==d&&(f=e?"prefetch "+a:"");b&&"url"==c?f+=" previous "+b:b&&"path"==c&&(f+=" previous "+L(b).pathname);return f||""}
function gc(a,b){var c=[];b&&(c.push(a+" previous "+b),c.push(a+" previous "+L(b).pathname));c.push(a);var d=null;ma(c,function(a){var b;a:{b=y();if(a in b){b=b[a];if(sa(b)){ta(b);b=b.data;break a}pa(a)}b=void 0}b&&(d={key:a,response:b.response,type:b.type});return!!b});return d}function ic(){this.v=!1;this.c="";this.complete=[]};function nc(a){return ea(a,function(a){return va(a,v["link-class"])})}function oc(a){return ea(a,function(a){return va(a,v["nolink-class"])})}function pc(a,b){return ea(a,function(a){return a.href&&"img"!=a.tagName.toLowerCase()},b)}function qc(a){if(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||0<a.button)return null;var b=nc(a.target);return!b||v["nolink-class"]&&oc(a.target)?null:(a=pc(a.target,b))?a.href:null}function rc(a){return L(a).origin!=L(window.location.href).origin?!1:!0}
function sc(){if(!t["nav-init"])return!1;var a=parseInt(t["nav-counter"],10)||0;a++;var b=parseInt(v["navigate-limit"],10),b=isNaN(b)?Infinity:b;if(a>b)return!1;a=parseInt(t["nav-init-time"],10);a--;a=n()-a;b=parseInt(v["navigate-lifetime"],10);b=isNaN(b)?Infinity:b;return a>b?!1:!0}function tc(a,b){var c=b||window.location.href;if(-1!=a.indexOf("#")){var d=M(a),c=M(c);if(d==c)return!1}return!0}
function uc(a){if(!a.defaultPrevented){var b=qc(a);b&&(b=Na(b),rc(b)&&sc()&&m("spfclick",{url:b,target:a.target})&&(vc(b,{},new wc),a.preventDefault()))}}function xc(a){var b=qc(a);b&&setTimeout(function(){yc(b)},0)}function zc(){var a;a=t["nav-scroll-position"]||null;var b=t["nav-scroll-url"]||"";a=a&&b==window.location.href?a:null;Ac();a&&window.scroll.apply(null,a)}
function Bc(a,b){var c=new wc({current:b&&b["spf-current"],history:!0,position:b&&b["spf-position"],b:b&&b["spf-referer"],reverse:!(!b||!b["spf-back"])}),d=v["reload-identifier"];d&&(a=Ma(a,[d]));rc(a)?sc()?m("spfhistory",{url:a,referer:c.b,previous:c.current})&&(c.position&&(r("nav-scroll-position",[window.pageXOffset,window.pageYOffset]),r("nav-scroll-url",window.location.href)),vc(a,{},c)):X(a,Dc):X(a,Cc)}
function vc(a,b,c){Ec();if(tc(a,c.current))if(Fc(a,c.b,c.current,b)){r("nav-counter",(parseInt(t["nav-counter"],10)||0)+1);Gc(a);var d=M(a),e="preprocess "+M(d),f;for(f in G)e!=f&&0==f.lastIndexOf("preprocess",0)&&Ja(f);d=Hc()[d];r("nav-request",d);r("nav-promote",null);r("nav-promote-time",null);d&&4!=d.readyState?(d="preprocess "+M(a),e="promote "+M(a),r("nav-promote",a),r("nav-promote-time",n()),Ja(d),H(e,!0),c.history||Ic(a,c.b,l(Y,null,b))):(d=l(Y,null,b),e=l(Jc,null,b,c),f=l(Kc,null,b,c),v["advanced-navigate-persist-timing"]||
Lc(),c.type="navigate",c.history&&(c.type+=c.reverse?"-back":"-forward"),b=ec(a,{method:b.method,headers:b.headers,e:e,d:d,m:f,q:b.postData,type:c.type,current:c.current,b:c.b}),r("nav-request",b),c.history||Ic(a,c.b,d))}else X(a,Mc);else c.history||Ic(a,c.b,l(Y,null,b)),Nc(a,c)}function Nc(a,b){if(b.position)Ac(),window.scroll.apply(null,b.position),b.f=!0;else{var c=C(a,"#");if(c[2]){if(c=document.getElementById(c[2]))Ac(),c.scrollIntoView(),b.f=!0}else b.f||(Ac(),window.scroll(0,0),b.f=!0)}}
function Ic(a,b,c){try{ga(null,{"spf-position":[window.pageXOffset,window.pageYOffset]}),M(a,!0)!=window.location.href&&ha(!1,a,{"spf-referer":b},void 0)}catch(d){Ec(),c(a,d)}}function Y(a,b,c,d){r("nav-request",null);Oc(b,c,a,void 0,d)&&X(b,Pc,c)}function Jc(a,b,c,d){if(Qc(c,d,a))if(d.reload)X(c,Rc);else if(d.redirect)Sc(a,d.redirect);else try{V(c,d,b,function(){Uc(c,d,a)})}catch(e){Y(a,c,e)}else X(c,Vc)}
function Kc(a,b,c,d){r("nav-request",null);if(t["nav-promote"]==b.a){var e=d.timing||{};e.navigationStart=t["nav-promote-time"];e.spfPrefetched=!0}var f="multipart"==d.type;if(!f){if(!Wc(c,d,a)){X(c,Xc);return}if(d.reload){X(c,Rc);return}if(d.redirect){Sc(a,d.redirect);return}}try{V(c,f?{}:d,b,function(){var e=d.name||"";f&&w(d.parts,function(a){e=a.name||e});wa(e);Nc(c,b);Yc(c,d,a)})}catch(k){Y(a,c,k)}}function Sc(a,b){try{b+=window.location.hash,ga(b,null,!0)}catch(c){Ec(),Y(a,b,c)}}
function Ec(){var a=t["nav-request"];a&&(a.abort(),r("nav-request",null))}function Z(a,b){var c;a&&(c=Array.prototype.slice.call(arguments),c[0]=a,c=aa.apply(null,c));return!1!==c}
function X(a,b,c){c=c?c.message:"";Ec();Gc();var d=b;c&&(d+=" Message: "+c);m("spfreload",{url:a,reason:d});var e=window.location.href;v["experimental-remove-history"]&&e==a&&(r("history-ignore-pop",!0),window.history.back());setTimeout(function(){var c=v["reload-identifier"];if(c){var d={};d[c]=encodeURIComponent(b);var c=a,g=C(c,"#"),c=g[0],h=-1!=c.indexOf("?")?"&":"?",p;for(p in d)c+=h+p,d[p]&&(c+="="+d[p]),h="&";a=c+g[1]+g[2]}window.location.href=a;tc(a,e)||window.location.reload()},0)}
function Zc(a,b,c){c.a=c.a||a;if(Fc(a,void 0,void 0,b,!0)){var d=l($c,null,!1,b,c),e=l(ad,null,!1,b,c),f=l(bd,null,!1,b,c);c.type="load";ec(a,{method:b.method,headers:b.headers,e:e,d:d,m:f,q:b.postData,type:c.type})}}function yc(a,b){a=Na(a);cd(a,b||{},new wc)}
function cd(a,b,c){c.a=c.a||a;if(Fc(a,void 0,void 0,b,!0)){var d=l($c,null,!0,b,c),e=l(ad,null,!0,b,c),f=l(bd,null,!0,b,c);c.type="prefetch";b=ec(a,{method:b.method,headers:b.headers,e:e,d:d,m:f,q:b.postData,type:c.type,current:c.current});a=M(a);Hc()[a]=b}}function $c(a,b,c,d,e){a&&dd(d);a&&t["nav-promote"]==c.a?Y(b,d,e):Oc(d,e,b,!0)}
function ad(a,b,c,d,e){if(Qc(d,e,b,!0)){if(e.reload){if(!a)return;if(t["nav-promote"]==c.a){X(d,Rc);return}}if(e.redirect)ed(a,b,c,e.redirect);else{if(a){var f=l(Jc,null,b,c,d,e),k="promote "+M(c.a);F(k,f);if(t["nav-promote"]==c.a){H(k,!0);return}}(a?Pb:V)(d,e,c,function(){Uc(d,e,b,!0)})}}}
function bd(a,b,c,d,e){var f="multipart"==e.type;if(!f){if(!Wc(d,e,b,!0)){X(d,Xc);return}if(e.reload){if(!a)return;if(t["nav-promote"]==c.a){X(d,Rc);return}}if(e.redirect){ed(a,b,c,e.redirect);return}}var k="promote "+M(c.a);if(a){dd(d);if(t["nav-promote"]==c.a){F(k,l(Kc,null,b,c,d,e));H(k,!0);return}Ja(k)}k=a?Pb:V;try{k(d,f?{}:e,c,function(){Yc(d,e,b,!0)})}catch(g){$c(a,b,c,d,g)}}function ed(a,b,c,d){a=a?cd:Zc;var e={};w([fd,gd,hd,id,jd,kd],function(a){e[a]=b[a]});a(d,e,c)}
function Oc(a,b,c,d,e){a={url:a,err:b,xhr:e};(c=Z((c||{})[fd],a))&&!d&&(c=m("spferror",a));return c}function Fc(a,b,c,d,e){a={url:a,referer:b,previous:c};(d=Z((d||{})[gd],a))&&!e&&(d=m("spfrequest",a));return d}function Qc(a,b,c,d){a={url:a,part:b};(c=Z((c||{})[hd],a))&&!d&&(c=m("spfpartprocess",a));return c}function Uc(a,b,c,d){a={url:a,part:b};Z((c||{})[id],a)&&!d&&m("spfpartdone",a)}function Wc(a,b,c,d){a={url:a,response:b};(c=Z((c||{})[jd],a))&&!d&&(c=m("spfprocess",a));return c}
function Yc(a,b,c,d){a={url:a,response:b};Z((c||{})[kd],a)&&!d&&m("spfdone",a)}function dd(a){a=M(a);var b=Hc(),c=b[a];c&&c.abort();delete b[a]}function Gc(a){var b=Hc();a=a&&M(a);for(var c in b)a!=c&&dd(c)}var Lc,ld=window.performance&&(window.performance.clearResourceTimings||window.performance.webkitClearResourceTimings||window.performance.mozClearResourceTimings||window.performance.msClearResourceTimings||window.performance.oClearResourceTimings);Lc=ld?l(ld,window.performance):ba;
function Hc(){return"nav-prefetches"in t?t["nav-prefetches"]:r("nav-prefetches",{})}function Ac(){r("nav-scroll-position",null);r("nav-scroll-url",null)}function wc(a){a=a||{};this.current=a.history&&a.current?a.current:window.location.href;this.history=!!a.history;this.a=a.a||"";this.position=a.position||null;this.b=void 0!=a.b?a.b:window.location.href;this.reverse=!!a.reverse;this.f=!!a.f;this.type=a.type||""}
var fd="onError",gd="onRequest",hd="onPartProcess",id="onPartDone",jd="onProcess",kd="onDone",Dc="1",Mc="2",Vc="3",Xc="4",Rc="5",Cc="9",Pc="10";function md(){eb(N);eb(T);"complete"==document.readyState&&(document.removeEventListener?document.removeEventListener("DOMContentLoaded",md,!1):document.detachEvent&&document.detachEvent("onreadystatechange",md))}document.addEventListener?document.addEventListener("DOMContentLoaded",md,!1):document.attachEvent&&document.attachEvent("onreadystatechange",md);md();
var nd={init:function(a){var b=!("function"!=typeof window.history.pushState&&!ja().contentWindow.history.pushState);a=a||{};for(var c in ca)v[c]=c in a?a[c]:ca[c];for(c in a)c in ca||(v[c]=a[c]);if(b){c=Oc;if(!t["history-init"]&&window.addEventListener){a=window.location.href;window.addEventListener("popstate",ka,!1);r("history-init",!0);r("history-callback",Bc);r("history-error-callback",c);r("history-listener",ka);r("history-url",a);r("history-timestamp",n());var d={"spf-referer":document.referrer};
try{ga(a,d)}catch(e){c&&c(a,e)}}!t["nav-init"]&&document.addEventListener&&(r("nav-init",!0),r("nav-init-time",n()),r("nav-counter",0),document.addEventListener("click",uc,!1),r("nav-listener",uc),!v["experimental-prefetch-mousedown"]||"ontouchstart"in window||0<window.navigator.maxTouchPoints||0<window.navigator.msMaxTouchPoints||(document.addEventListener("mousedown",xc,!1),r("nav-mousedown-listener",xc)),document.addEventListener("scroll",zc,!1),r("nav-scroll-listener",zc))}return b},dispose:function(){"undefined"!=
typeof History&&History.prototype.pushState&&(Ec(),t["nav-init"]&&(document.removeEventListener&&(document.removeEventListener("click",t["nav-listener"],!1),document.removeEventListener("mousedown",t["nav-mousedown-listener"],!1),document.removeEventListener("scroll",t["nav-scroll-listener"],!1)),r("nav-listener",null),r("nav-mousedown-listener",null),r("nav-scroll-listener",null),r("nav-scroll-position",null),r("nav-scroll-url",null),r("nav-init",!1),r("nav-init-time",null),r("nav-counter",null)),
t["history-init"]&&(window.removeEventListener&&window.removeEventListener("popstate",t["history-listener"],!1),r("history-init",!1),r("history-callback",null),r("history-error-callback",null),r("history-listener",null),r("history-url",null),r("history-timestamp",0)));for(var a in v)delete v[a]},navigate:function(a,b){a&&(a=Na(a),rc(a)?sc()?vc(a,b||{},new wc):X(a,Dc):X(a,Cc))},load:function(a,b){a=Na(a);Zc(a,b||{},new wc)},prefetch:yc,process:function(a,b){function c(a,c,d,e){a==c&&b&&b(e)}var d=
window.location.href;if("multipart"==a.type){var e=a.parts,f=e.length-1;w(e,function(a,b){V(d,a,null,l(c,null,b,f))})}else V(d,a,null,l(c,null,0,0))}},od={cache:{remove:pa,clear:function(){y({})}},script:{load:ob,get:qb,ready:sb,done:function(a){Sa(N,a,"");Ta(N)},require:tb,declare:function(a,b){if(a){for(var c in a)U[c]=a[c];if(b)for(c in b)ub[c]=b[c]}},path:function(a){r("rsrc-p-"+N,a)},unload:pb,ignore:function(a,b){a=x(a);var c=P(N,a.sort().join("|"));Ga(c,b)},unrequire:vb,prefetch:rb},style:{load:zb,
get:Ab,unload:function(a){Xa(T,a)},path:function(a){r("rsrc-p-"+T,a)},prefetch:Bb}},pd=this.spf=this.spf||{},qd;for(qd in nd)pd[qd]=nd[qd];for(var rd in od)for(var sd in od[rd])pd[rd]=pd[rd]||{},pd[rd][sd]=od[rd][sd];m("spfready");if(typeof define=='function'&&define.amd)define(spf);else if(typeof exports=='object')for(var f in spf)exports[f]=spf[f];})();
