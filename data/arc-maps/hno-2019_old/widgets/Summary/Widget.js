// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Summary/ClusterLayer":function(){define("dojo/_base/declare dojo/_base/array dojo/_base/Color esri/layers/GraphicsLayer esri/graphic esri/geometry/geometryEngine esri/geometry/Extent esri/geometry/Point esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol".split(" "),function(e,b,c,a,m,g,z,v,h,B,D,l){return e("ClusterLayer",[a],{constructor:function(a){this.name=a.id;this.displayOnPan=a.displayOnPan||!1;this._map=a.map;this.clusterSize=
a.clusterSize||100;this.color=a.color||"#ff0000";this.countField=a.countField;this._features=[];try{this.setFeatures(a.features)}catch(E){console.log(E)}this.loaded=!0;this.onLoad(this)},setFeatures:function(a){this._map&&this._map.infoWindow.isShowing&&this._map.infoWindow.hide();this._features=a;this._clusterFeatures()},setColor:function(a){this.color=a;this._clusterFeatures()},_clusterFeatures:function(){this.clear();var a=this._features;if(0<a.length){var b=this.clusterSize,e=[],A=this._map.spatialReference,
t=this._map.extent,n=t.normalize();1<n.length&&(t=g.union(n).getExtent());for(var n=new v(t.xmin,t.ymax,A),q=Math.ceil(this._map.height/b),r=Math.ceil(this._map.width/b),p=t.getWidth()/this._map.width*b,b=t.getHeight()/this._map.height*b,t=0;t<q;t++)for(var C=0;C<r;C++){var x=n.x+p*C,u=n.y-b*t,u=new z(x,u-b,x+p,u,A),x=[],y;for(y in a){var d=a[y];u.contains(d.geometry)&&x.push(d)}0<x.length&&(u=this._getClusterCenter(x),e.push({center:u,graphics:x}))}for(var k in e)a=e[k],A=this._getClusterCount(a),
n=a.graphics,q=A.toString(),r=19*q.length,p=this._getSymbolColor(),b=new B(B.STYLE_NULL,new c(0,0,0,0),0),y=new h(h.STYLE_CIRCLE,1.6*r,b,new c([p[0],p[1],p[2],.4])),r=new h(h.STYLE_CIRCLE,r,b,new c([p[0],p[1],p[2],.8])),p=new D,p.family="Arial",p.size="12px",q=new l(q,p,"#ffffff"),q.setOffset(0,-4),n={Count:A,Data:n},1<A?(this.add(new m(a.center,y,n)),this.add(new m(a.center,r,n)),this.add(new m(a.center,q,n))):(a=a.graphics[0].geometry,this.add(new m(a,r,n)),this.add(new m(a,q,n)))}},_getSymbolColor:function(){var a=
c.fromString(this.color),b=c.fromString("#000000");return c.blendColors(a,b,.1).toRgb()},_getClusterCount:function(a){for(var b=0,c=0;c<a.graphics.length;c++)var g=a.graphics[c],b=this.countField&&g.attributes[this.countField]?b+g.attributes[this.countField]:b+1;return b},_getClusterCenter:function(a){var c=0,g=0,e=a.length;b.forEach(a,function(a){c+=a.geometry.x;g+=a.geometry.y},this);return new v(c/e,g/e,a[0].geometry.spatialReference)}})})},"widgets/Summary/c":function(){define(function(){function e(b,
c){this.wrapper=b;this.wrapperId=b.id;this.timeoutTimerId=this.intervalTimerId=null;this.isAnimating=!1;this.animationProgress=this.animationStep=0;this.beforeAnimation=[];this.afterAnimation=[];this.digitsNumber=c.digitsNumber||6;this.direction=c.direction||e.ScrollDirection.Mixed;this.value=c.value||"";this.characterSet=c.characterSet||e.DefaultCharacterSets.allCharacters;this.characterNumber=this.characterSet.length;this.animationDuration=c.animationDuration||50;b=["wrapper","left","inner","right",
"marker"];this.extraClassName={};for(var a=0;a<b.length;a++)this.extraClassName[b[a]]=c.extraClassName?"string"===typeof c.extraClassName?c.extraClassName:c.extraClassName[b[a]]||"":"";this.onLoad=c.onLoad||null;this.onValueChanged=c.onValueChanged||null;var m=this;this.imageLoadCounter=0;this.charsImage=new Image;this.charsImage.onload=function(){m.finishLoading()};this.charsImage.src=c.charsImageUrl;this.markerImage=new Image;this.markerImage.onload=function(){m.finishLoading()};this.markerImage.src=
c.markerImageUrl}e.DefaultCharacterSets={numericUp:"0123456789",numericDown:"9876543210",alphabeticUp:" ABCDEFGHIJKLMNOPQRSTUVWXYZ",alphabeticDown:"ZYXWVUTSRQPONMLKJIHGFEDCBA ",alphanumericUp:"0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZ",alphanumericDown:"9876543210ZYXWVUTSRQPONMLKJIHGFEDCBA ",calculator:"0123456789.,+-*/\x3d ",qwertyKeybord:" QWERTYUIOPASDFGHJKLZXCVBNM1234567890-\x3d[]\\;',./~`!@#$%^\x26*()_+{}|:\"\x3c\x3e?",allCharacters:" ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-\x3d[]\\;',./~`!@#$%^\x26*()_+{}|:\"\x3c\x3e?"};
e.ScrollDirection={Downwards:-1,Mixed:0,Upwards:1};e.prototype.finishLoading=function(){this.imageLoadCounter++;if(2===this.imageLoadCounter&&this.charsImage.width&&this.markerImage.width){this.digitWidth=this.charsImage.width;this.digitHeight=Math.ceil(this.charsImage.height/this.characterNumber);this.offsetHeight=(this.markerImage.height-this.digitHeight)/2;this.makrer=document.createElement("DIV");this.makrer.className="counter_marker"+(this.extraClassName.marker?" ":"")+this.extraClassName.marker;
this.makrer.style.backgroundImage="url('"+this.markerImage.src+"')";this.makrer.style.width=this.digitWidth*this.digitsNumber+this.digitsNumber+"px";this.makrer.style.height=this.markerImage.height+"px";this.wrapper.className=this.wrapper.className+(this.extraClassName.marker?" ":"")+this.extraClassName.marker;this.wrapper.style.width=this.makrer.style.width;this.wrapper.style.height=this.makrer.style.height;this.wrapper.appendChild(this.makrer);for(var b=0,c=0,b=0;b<this.digitsNumber;b++){var a=
document.createElement("DIV");a.id=this.wrapperId+"_"+b;a.className="counter_character";a.className=0===b?a.className+(" counter_character_left"+(this.extraClassName.left?" ":"")+this.extraClassName.left):b===this.digitsNumber-1?a.className+(" counter_character_right"+(this.extraClassName.right?" ":"")+this.extraClassName.right):a.className+(" counter_character_inner"+(this.extraClassName.inner?" ":"")+this.extraClassName.inner);a.style.backgroundImage="url('"+this.charsImage.src+"')";a.style.width=
this.digitWidth+"px";a.style.height=this.markerImage.height+"px";a.style.top=-this.markerImage.height+"px";this.wrapper.appendChild(a);c+=e._parseInt(e._elementCurrentStyle(a,"margin-left"));c+=e._parseInt(e._elementCurrentStyle(a,"margin-right"));c+=e._parseInt(e._elementCurrentStyle(a,"border-left-width"));c+=e._parseInt(e._elementCurrentStyle(a,"border-right-width"));c+=this.digitWidth}this.makrer.style.width=c+"px";this.wrapper.style.width=c+"px";if(null!==this.onLoad)this.onLoad();this.setValue(this.value,
100)}};e.prototype.animate=function(b){this.animationProgress=b?1:this.animationProgress+this.animationStep;1<=this.animationProgress&&(this.animationProgress=1,this.timeoutTimerId&&clearTimeout(this.timeoutTimerId),this.intervalTimerId&&clearTimeout(this.intervalTimerId),this.isAnimating=!1,this.intervalTimerId=this.timeoutTimerId=null);b=0;var c=this.wrapper.id+"_";for(b=0;b<this.beforeAnimation.length;b++){var a=e._getDijitById(this,c+(this.digitsNumber-b-1));if(a){var m=0,m=1>this.animationProgress?
this.beforeAnimation[b]+(this.afterAnimation[b]-this.beforeAnimation[b])*this.animationProgress:this.afterAnimation[b];a.style.backgroundPosition="0px "+e._parseInt(m)+"px"}}};e.prototype.setValue=function(b,c){if(2===this.imageLoadCounter&&this.charsImage.width&&this.markerImage.width){this.timeoutTimerId&&clearTimeout(this.timeoutTimerId);this.intervalTimerId&&clearTimeout(this.intervalTimerId);var a=0,m=this.wrapper.id+"_",g;this.beforeAnimation=[];this.afterAnimation=[];for(a=this.digitsNumber-
1;0<=a;a--)g=e._getDijitById(this,m+(this.digitsNumber-a-1)),this.beforeAnimation[a]=Number(g.style.backgroundPosition.substr(4).replace("px",""));for(var z=this.value.toString?this.value.toString():String(this.value),v=b.toString?b.toString():String(b),a=this.digitsNumber-1;0<=a;a--){g=e._getDijitById(this,m+(this.digitsNumber-a-1));g=-1;0<=z.length-a-1&&(g=z.charAt(z.length-a-1).toUpperCase(),g=this.characterSet.indexOf(g));-1===g&&(g=this.characterSet.indexOf(" "));-1===g&&(g=this.characterSet.indexOf("0"));
-1===g&&(g=0);var h=-1;0<=v.length-a-1&&(h=v.charAt(v.length-a-1).toUpperCase(),h=this.characterSet.indexOf(h));-1===h&&(h=this.characterSet.indexOf(" "));-1===h&&(h=this.characterSet.indexOf("0"));-1===h&&(h=0);this.afterAnimation[a]=Math.round(-this.digitHeight*h+this.offsetHeight);0===this.direction?Math.abs(g-h)>this.characterNumber/2&&(this.beforeAnimation[a]=h<g?this.beforeAnimation[a]+this.digitHeight*this.characterNumber:this.beforeAnimation[a]-this.digitHeight*this.characterNumber):-1===
this.direction?this.beforeAnimation[a]>this.afterAnimation[a]&&(this.beforeAnimation[a]-=this.digitHeight*this.characterNumber):1===this.direction&&this.beforeAnimation[a]<this.afterAnimation[a]&&(this.beforeAnimation[a]+=this.digitHeight*this.characterNumber)}this.value=b;if(null!==this.onValueChanged)this.onValueChanged();c&&0<parseInt(c,10)||(c=1E3);this.isAnimating=!0;b=this.animationDuration;this.animationStep=b/c;this.animationProgress=0;var B=this;c>b&&(this.intervalTimerId=setInterval(function(){B.animate(!1)},
b));this.timeoutTimerId=setTimeout(function(){B.animate(!0)},c)}else if(this.value=b,null!==this.onValueChanged)this.onValueChanged()};e._parseInt=function(b){b=parseInt(b,10);isNaN(b)&&(b=0);return b};e._elementCurrentStyle=function(b,c){if(b.currentStyle){for(var a=0,e="",g=!1,a=0;a<c.length;a++)!c.charAt(a)||"-"===c.charAt(a)&&"-"===c.charAt(a).toString()?g=!0:(e=c.charAt(a).toString?e+(g?c.charAt(a).toString().toUpperCase():c.charAt(a).toString()):e+(g?c.charAt(a).toUpperCase():c.charAt(a)),g=
!1);return b.currentStyle[e]}return getComputedStyle(b,null).getPropertyValue(c)};e._getDijitById=function(b,c){b=b.wrapper.childNodes;for(var a=0;a<b.length;a++){var e=b[a];if(e.id===c)return e}return null};return e})},"widgets/Summary/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Summary/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"panelBottom"\x3e\r\n    \x3c!-- Panel Main --\x3e\r\n    \x3cdiv id\x3d"panelMain"\x3e\r\n      \x3c!-- Panel Container --\x3e\r\n      \x3cdiv id\x3d"panelContainer" data-dojo-attach-point\x3d"containerNode"\x3e\r\n        \x3cdiv id\x3d"panel0" class\x3d"col" data-dojo-attach-point\x3d"panel0Node"\x3e\r\n          \x3cdiv id\x3d"title0" class\x3d"titleCounter" data-dojo-attach-point\x3d"title0Node"\x3e\x3c/div\x3e\r\n          \x3cdiv id\x3d"counter0" class\x3d"counter" data-dojo-attach-point\x3d"counter0Node"\x3e\x3c/div\x3e\r\n          \x3cdiv id\x3d"units0" class\x3d"units" data-dojo-attach-point\x3d"units0Node"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv id\x3d"panel1" class\x3d"col line" data-dojo-attach-point\x3d"panel1Node"\x3e\r\n          \x3cdiv id\x3d"title1" class\x3d"titleCounter" data-dojo-attach-point\x3d"title1Node"\x3e\x3c/div\x3e\r\n          \x3cdiv id\x3d"counter1" class\x3d"counter" data-dojo-attach-point\x3d"counter1Node"\x3e\x3c/div\x3e\r\n          \x3cdiv id\x3d"units1" class\x3d"units" data-dojo-attach-point\x3d"units1Node"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv id\x3d"panel2" class\x3d"col line" data-dojo-attach-point\x3d"panel2Node"\x3e\r\n          \x3cdiv id\x3d"title2" class\x3d"titleCounter" data-dojo-attach-point\x3d"title2Node"\x3e\x3c/div\x3e\r\n          \x3cdiv id\x3d"counter2" class\x3d"counter" data-dojo-attach-point\x3d"counter2Node"\x3e\x3c/div\x3e\r\n          \x3cdiv id\x3d"units2" class\x3d"units" data-dojo-attach-point\x3d"units2Node"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv id\x3d"panel3" class\x3d"col line" data-dojo-attach-point\x3d"panel3Node"\x3e\r\n          \x3cdiv id\x3d"title3" class\x3d"titleCounter" data-dojo-attach-point\x3d"title3Node"\x3e\x3c/div\x3e\r\n          \x3cdiv id\x3d"counter3" class\x3d"counter" data-dojo-attach-point\x3d"counter3Node"\x3e\x3c/div\x3e\r\n          \x3cdiv id\x3d"units3" class\x3d"units" data-dojo-attach-point\x3d"units3Node"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Panel Nav --\x3e\r\n    \x3cdiv id\x3d"panelNav"\x3e\r\n      \x3cul class\x3d"navigation" data-dojo-attach-point\x3d"pagesListNode"\x3e\x3c/ul\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Panel Message --\x3e\r\n    \x3cdiv id\x3d"panelMessage" data-dojo-attach-point\x3d"messageNode"\x3e\r\n      \x3cspan id\x3d"msgText" data-dojo-attach-point\x3d"messageTextNode"\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Panel Footer --\x3e\r\n    \x3cdiv id\x3d"panelFooter" data-dojo-attach-point\x3d"footerNode" class\x3d"jimu-main-background"\x3e\r\n      \x3cdiv id\x3d"panelLabel" data-dojo-attach-point\x3d"labelNode"\x3e\x3c/div\x3e\r\n      \x3cdiv id\x3d"panelClose" data-dojo-attach-event\x3d"onclick:_close"\x3e\x3c/div\x3e\r\n      \x3cdiv id\x3d"panelFooterContent" data-dojo-attach-point\x3d"footerContentNode"\x3e\r\n        \x3cspan id\x3d"labelFilter"\x3e${nls.filter}\x3c/span\x3e\r\n        \x3cdiv id\x3d"panelFilter"\x3e\r\n          \x3cselect id\x3d"selFilter" data-dojo-attach-point\x3d"filterNode"\x3e\x3c/select\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/Summary/css/style.css":".jimu-widget-summary {color: #ffffff !important; background-color: #4c4c4c; left: 0px !important; right: 0px !important; bottom: 0px; height: 140px !important; display: block;}.jimu-widget-summary .panelBottom {position: absolute; width: 100%; height: 140px; left: 0px; top: 0px; text-align: center; padding: 0px;}.jimu-widget-summary #panelMessage {position: absolute; top: 0px; text-align: center; width: 100%; height: 40px; line-height: 40px; display: none;}.jimu-widget-summary #panelMain {position: absolute; width: 100%; height: 80px; left: 0px; top: 0px; text-align: center; padding: 0px;}.jimu-widget-summary #panelContainer {margin: auto; width: 100%; max-width: 880px; height: 80px; overflow: hidden; padding-top: 0px;}.jimu-widget-summary .col {position: relative; width: 219px; height: 80px; padding: 0px; margin-top: 10px; margin-bottom: 0px; display: none; text-align: center; float: left;}.jimu-rtl .jimu-widget-summary .col {float: right;}.jimu-widget-summary .line {border-left: 1px solid #ffffff; border-left: 1px solid rgba(255, 255, 255, 0.5);}.jimu-rtl .jimu-widget-summary .line {border-left: none; border-right: 1px solid #ffffff; border-right: 1px solid rgba(255, 255, 255, 0.5);}.jimu-widget-summary .titleCounter {position: absolute; top: 0px; left: 10px; right: 10px; height: 15px; font-weight: bold; line-height: 15px; letter-spacing: 1px; text-align: right; display: block; overflow: hidden;}.jimu-widget-summary .counter {position: absolute; top: 20px; left: 7px; width: 204px; height: 40px; display: block;}.jimu-widget-summary .units {position: absolute; bottom: 0px; left: 10px; right: 109px; height: 15px; font-weight: normal; line-height: 15px; letter-spacing: 1px; text-align: right; display: block;}.jimu-widget-summary .counter_character {display: inline; float: left; position: relative; margin-left: 0px; margin-right: 0px;}.jimu-widget-summary .counter_character_left {margin-left: 0px; margin-right: 0px;}.jimu-widget-summary .counter_character_inner {margin-left: 0px; margin-right: 0px;}.jimu-widget-summary .counter_character_right {margin-left: 0px; margin-right: 0px;}.jimu-widget-summary .counter_marker {position: relative; z-index: 10;}.jimu-widget-summary #panelNav {position: absolute; width: 100%; height: 20px; left: 0px; bottom: 40px; padding: 0px; line-height: 20px;}.jimu-widget-summary .navigation {list-style-type: none; width: 60px; height: 20px; margin: auto; padding: 0px;}.jimu-widget-summary .navigation li {width: 20px; height: 20px; float: left; background: url(images/dot.png);}.jimu-rtl .jimu-widget-summary .navigation li {float: right;}.jimu-widget-summary .navigation li:hover {background: url(images/doton.png);}.jimu-widget-summary .navigation li.active {background: url(images/doton.png);}.jimu-widget-summary #panelFooter {position: absolute; bottom: 0px; left: 0px; right: 0px; height: 40px; line-height: 40px; background-color: #3d3d3d; background-color: rgba(0, 0, 0, 0.2); border-bottom: 1px solid #353535; border-bottom: 1px solid rgba(0, 0, 0, 0.3);}.jimu-widget-summary #panelLabel {position: absolute; height: 40px; line-height: 40px; padding: 0 0 0 10px; text-align: left; display: block; font-size: 16px;}.jimu-rtl .jimu-widget-summary #panelLabel {text-align: right; padding: 0 10px 0;}.jimu-widget-summary #panelClose {position: absolute; left: auto; right: 0px; width: 24px; height: 40px; line-height: 40px; text-align: center; display: block; cursor: pointer; background-image: url('images/x.png'); background-repeat: no-repeat; background-position: center center; background-size: 18px;}.jimu-rtl .jimu-widget-summary #panelClose {position: absolute; left: 0px; right: auto;}.jimu-widget-summary #panelFooterContent {position: absolute; left: auto; right: 24px; height: 40px; line-height: 40px; text-align: right; display: none;}.jimu-rtl .jimu-widget-summary #panelFooterContent {position: absolute; left: 24px; right: auto; text-align: left;}.jimu-widget-summary #panelFilter {float: right; position: relative; margin: 5px 10px 5px 10px; width: 200px; height: 30px; overflow: hidden; background-color: #353535; background-color: rgba(0, 0, 0, 0.3); z-index: 2; border-radius: 4px;}.jimu-rtl .jimu-widget-summary #panelFilter {float: left;}#labelFilter {display: inline-block;}.jimu-widget-summary #selFilter {position: absolute; left: 0px; top: 0px; margin: 0px; color: #ffffff; outline: transparent; background: transparent; width: 200px; padding: 0px 0px 0px 5px; font-size: 14px; line-height: 1; border: none; border-radius: 0; height: 30px;}.jimu-widget-summary option {background-color: #ffffff; color: #000000;}@media only screen and (max-width: 500px) {#panelLabel {display: none !important;} #labelFilter {display: none !important;}}",
"*now":function(e){e(['dojo/i18n!*preload*widgets/Summary/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare jimu/BaseWidget jimu/LayerInfos/LayerInfos jimu/utils dojo/dom dojo/dom-style dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/_base/event dojo/_base/html dojo/_base/lang dojo/_base/array dojo/_base/xhr dojo/query esri/geometry/geometryEngine esri/graphic esri/layers/FeatureLayer esri/tasks/query dojo/number esri/tasks/StatisticDefinition ./ClusterLayer esri/graphicsUtils dojo/on widgets/Summary/c".split(" "),function(e,b,c,a,m,g,z,v,h,B,D,l,w,E,F,A,t,n,q,r,p,C,
x,u,y){return e([b],{baseClass:"jimu-widget-summary",name:"Summary",clusterLayer:null,counter0:null,counter1:null,counter2:null,counter3:null,fieldCount:0,pageCount:0,page:0,visCount:4,summaryIds:[],summaryFeatures:[],filterExpr:null,postCreate:function(){this.inherited(arguments);this.config.summaryLayer?(this.showFeatureCount=this.config.showFeatureCount,this.featureCountLabel=this.config.featureCountLabel,this.displayCluster=this.config.displayCluster,this.filterField=this.config.summaryLayer.filterField):
this._showMessage(this.nls.missingSummaryLayerInConfig)},startup:function(){this.inherited(arguments);this._updateUI();this._loadCounters();""!==this.filterField&&g.set(this.footerContentNode,"display","block");var d=new C({id:this.label,displayOnPan:!0,map:this.map,clusterSize:120,color:"#6e6e6e",countField:null,features:[]});this.map.addLayer(d);this.clusterLayer=d;this.own(u(this.clusterLayer,"click",l.hitch(this,this._clusterClick)));this.labelNode.innerHTML=a.sanitizeHTML(this.label?this.label:
"");this._getStyleColor(null);this._watchLayerFilters();this.opLayers=this.map.itemInfo.itemData.operationalLayers;this._processOperationalLayers();this.own(u(this.filterNode,"change",l.hitch(this,this._setFilter)))},destroy:function(){this.clusterLayer&&this.map.removeLayer(this.clusterLayer);this._stopRefresh();this.inherited(arguments)},onOpen:function(){this.inherited(arguments);this._updateLayerVisibility();this._appyFilter(!0);this._summarize();this._startRefresh()},onClose:function(){this._updateLayerVisibility();
this._appyFilter(!1);this._stopRefresh();this.inherited(arguments)},resize:function(){"closed"!==this.state&&(this.inherited(arguments),this.resizeTimer&&(clearTimeout(this.resizeTimer),this.resizeTimer=null),this.resizeTimer=setTimeout(l.hitch(this,this._loadPages),600))},onAppConfigChanged:function(d,a,f){switch(a){case "styleChange":this._updateUI(f)}},_updateUI:function(d){this._getStyleColor(d)},setPosition:function(d,k){if("BoxTheme"===this.appConfig.theme.name||"DartTheme"===this.appConfig.theme.name||
"LaunchpadTheme"===this.appConfig.theme.name)this.inherited(arguments);else{this.position={left:"0px",right:"0px",bottom:"0px",height:"140px"};var f=a.getPositionStyle(this.position);f.position="absolute";k=this.map.id;D.place(this.domNode,k);D.setStyle(this.domNode,f);this.started&&this.resize();"TabTheme"===this.appConfig.theme.name&&(f=this.widgetManager.getControllerWidgets()[0],this.widgetManager.minimizeWidget(f.id))}},_getStyleColor:function(d){var a=this.appConfig.theme.name,f=this.appConfig.theme.styles[0];
d&&(f=d);E.get({url:"./themes/"+a+"/manifest.json",handleAs:"json",load:l.hitch(this,function(d){d=d.styles;for(var a=0;a<d.length;a++){var k=d[a];k.name===f&&(g.set(this.footerNode,"background-color",k.styleColor),this.clusterLayer.setColor(k.styleColor))}})})},_clusterClick:function(d){for(var a=d.graphic,f=this.nls.features+": "+a.attributes.Count,a=this._summarizeAttributes(a.attributes.Data),G="",b=0;b<this.fieldCount;b++)if(0!==b||this.config.showFeatureCount)G+=this.aliases[b]+": "+a[b]+"\x3cbr/\x3e\x3cbr/\x3e";
this.map.infoWindow.setTitle(f);this.map.infoWindow.setContent(G);this.map.infoWindow.show(d.mapPoint);B.stop(d)},_loadCounters:function(){var d={digitsNumber:17,direction:y.ScrollDirection.Upwards,characterSet:"0123456789.,- ",charsImageUrl:"widgets/Summary/images/c.png",markerImageUrl:"widgets/Summary/images/m.png"};this.counter0=new y(this.counter0Node,d);this.counter0.value=0;this.counter1=new y(this.counter1Node,d);this.counter1.value=0;this.counter2=new y(this.counter2Node,d);this.counter2.value=
0;this.counter3=new y(this.counter3Node,d);this.counter3.value=0},_watchLayerFilters:function(){this.map.itemId&&c.getInstance(this.map,this.map.itemInfo).then(l.hitch(this,function(d){this.layerInfosObj=d;u(this.layerInfosObj,"layerInfosFilterChanged",l.hitch(this,this._layerFilterChanged))}))},_layerFilterChanged:function(d){w.forEach(d,l.hitch(this,function(d){this.config.summaryLayer.id===d.id&&this._summarize()}))},_processOperationalLayers:function(){if(this.opLayers){var d=this.config.summaryLayer.id;
""!==d?w.some(this.opLayers,l.hitch(this,function(a){if("ArcGISFeatureLayer"===a.layerType){if(a.layerObject&&a.id===d){var f=[];w.forEach(this.config.summaryLayer.fields,function(a){f.push(a.field)});this.targetLayer=a.layerObject;this.opLayer=new n(a.layerObject.url,{outFields:f,infoTemplate:a.layerObject.infoTemplate});this._setLayer();return!0}if(a.featureCollection)for(;0<a.featureCollection.layers.length;)return a=a.featureCollection.layers[0].layerObject,a.id===d&&(this.opLayer=this.targetLayer=
a,this.opLayerIsFeatureCollection=!0),this._setLayer(),!0}})):this._showMessage(this.nls.missingSummaryLayerInConfig)}else this._showMessage(this.nls.missingLayerInWebMap)},_setLayer:function(){this.map.infoWindow.isShowing&&this.map.infoWindow.hide();this._closeMessage();this.targetLayerVisibility=this.targetLayer.visible?!0:!1;this.own(u(this.map,"extent-change",l.hitch(this,this._summarize)));this._configureFields();this._populateFilterValues();this._loadPages();"esriGeometryPoint"===this.opLayer.geometryType&&
this.displayCluster&&this.clusterLayer.setVisibility(!0)},_configureFields:function(){if(this.config.summaryLayer&&this.config.summaryLayer.fields){var a=[this.featureCountLabel],k=[];w.forEach(this.config.summaryLayer.fields,l.hitch(this,function(d){k.push(d);var f=d.label;0===f.length&&(f=this._getFieldAlias(d.field));a.push(f)}));this.fields=[{field:"",type:"COUNT",label:this.featureCountLabel}].concat(k);this.aliases=a;this.fieldCount=this.fields.length}},_populateFilterValues:function(){var a=
this.filterField;if(a){var k=[],f=this._getFilterField(a);if(f&&f.domain&&"codedValue"===f.domain.type){for(var f=f.domain.codedValues,b=0;b<f.length;b++){var c=f[b];k.push({value:c.code,label:c.name})}this._populateOptions(k)}else if(this.opLayerIsFeatureCollection){var e={};w.forEach(this.opLayer.graphics,function(d){d=d.attributes[a];e[d]||(e[d]=!0,k.push({value:d,label:d}))});k.sort(function(a,d){return a.value<d.value?-1:a.value>d.value?1:0});this._populateOptions(k)}else f=new q,f.returnGeometry=
!1,f.returnDistinctValues=!0,f.where="1\x3d1",f.outFields=[a],f.orderByFields=[a],this.opLayer.queryFeatures(f,l.hitch(this,function(d){for(var f=0;f<d.features.length;f++){var b=d.features[f].attributes[a];null!==b&&k.push({value:b,label:b})}this._populateOptions(k)}))}},_getFilterField:function(a){var d;w.some(this.targetLayer.fields,function(f){if(f.name===a)return d=f,!0});return d},_getFieldAlias:function(a){if(this.opLayer.infoTemplate)for(var d=this.opLayer.infoTemplate.info.fieldInfos,f=0;f<
d.length;f++){var b=d[f];if(b.fieldName===a)return b.label}return a},_loadPages:function(){if(this.fields)try{var a=h.getContentBox(this.containerNode).w;this.visCount=Math.floor(a/220);var b=this.fieldCount=this.fields.length;this.config.showFeatureCount||--b;this.pageCount=Math.ceil(b/this.visCount);var f=this.pagesListNode;f.innerHTML="";if(1<this.pageCount)for(g.set(f,"width",20*this.pageCount+"px"),a=0;a<this.pageCount;a++){var c=v.create("li",{id:"pageSum"+a},f);this.own(u(c,"click",l.hitch(this,
this._setPage,a)))}this.page=0;this._setPage(0)}catch(H){console.log(H)}},_setPage:function(a){var d=F("\x3e li",this.pagesListNode);w.forEach(d,function(d){d.id==="pageSum"+a?z.add(d,"active"):z.remove(d,"active")});this.page=a;var d=F("\x3e div",this.containerNode),f=0;w.forEach(d,function(a){f<this.visCount?g.set(a,"display","block"):g.set(a,"display","none");f+=1});this._updateCounters()},_summarize:function(){this.sumTimer&&(clearTimeout(this.sumTimer),this.sumTimer=null);this.sumTimer=setTimeout(l.hitch(this,
this._summarizeFeatures),900)},_summarizeFeatures:function(){this.summaryIds=[];this.summaryFeatures=[];if(this.opLayer){var a=this.map.extent,b=a.normalize();1<b.length&&(a=A.union(b).getExtent());if(this.opLayerIsFeatureCollection){var b=[],f=this.filterField,c;f&&(c=this.filterNode,c=c.options[c.selectedIndex].value);for(var e=0;e<this.opLayer.graphics.length;e++){var g=this.opLayer.graphics[e];a.intersects(g.geometry)&&(f?g.attributes[f].toString()!==c&&""!==c||b.push(g):b.push(g))}this.summaryFeatures=
b;this.displayCluster&&"esriGeometryPoint"===this.targetLayer.geometryType&&this.clusterLayer.setFeatures(b);this.sumData=this._summarizeAttributes(b);this._updateCounters()}else this._queryFeatures(a)}},_queryFeatures:function(a){this.summaryIds=[];this.summaryFeatures=[];var d=new q;d.geometry=a;var f=this.config.summaryLayer.id,b="";this.layerInfosObj.traversal(function(a){if(f===a.id&&a.getFilter())return b=a.getFilter(),!0});d.where=b;this.defQuery&&(this.defQuery.cancel("new"),this.defQuery=
null);this.defQuery=this.opLayer.queryIds(d,l.hitch(this,function(a){this.summaryIds=a;0<this.summaryIds.length?this._queryFeaturesByIds():(this.clusterLayer.setFeatures([]),this.sumData=this._summarizeAttributes(this.summaryFeatures),this._updateCounters())}))},_queryFeaturesByIds:function(){var a=this.opLayer.maxRecordCount||1E3,b=this.summaryIds.slice(0,a);this.summaryIds.splice(0,a);a=new q;a.outSpatialReference=this.map.spatialReference;a.returnGeometry=this.displayCluster&&"esriGeometryPoint"===
this.targetLayer.geometryType?!0:!1;a.objectIds=b;this.opLayer.queryFeatures(a,l.hitch(this,function(a){this.summaryFeatures=this.summaryFeatures.concat(a.features);this.displayCluster&&"esriGeometryPoint"===this.targetLayer.geometryType&&this.clusterLayer.setFeatures(this.summaryFeatures);this.sumData=this._summarizeAttributes(this.summaryFeatures);this._updateCounters();0<this.summaryIds.length&&setTimeout(l.hitch(this,this._queryFeaturesByIds),500)}))},_showMessage:function(a){g.set(this.containerNode,
"display","none");this.messageTextNode.innerHTML=a;g.set(this.messageNode,"display","block")},_summarizeAttributes:function(a){var d=[];w.forEach(this.fields,l.hitch(this,function(b){var f=b.field.replace(/^\s+|\s+$/g,"");"SUM"===b.type?d.push(this._calculateSum(a,f)):"AVG"===b.type?d.push(this._calculateAvg(a,f)):"MAX"===b.type?d.push(this._calculateMax(a,f)):"MIN"===b.type?d.push(this._calculateMin(a,f)):"COUNT"===b.type&&d.push(a.length)}));return d},_calculateSum:function(a,b){for(var d=0,c=0;c<
a.length;c++){var e=a[c].attributes[b];isNaN(e)&&(e=0);d+=e}return d},_calculateAvg:function(a,b){for(var d=a.length,c=0,e=0,k=0;k<a.length;k++){var g=a[k].attributes[b];isNaN(g)&&(g=0);c+=g}1<d&&(e=c/d);return e},_calculateMax:function(a,b){for(var d=0,c=0;c<a.length;c++){var e=a[c].attributes[b];isNaN(e)&&(e=0);0===c?d=e:e>d&&(d=e)}return d},_calculateMin:function(a,b){for(var d=0,c=0;c<a.length;c++){var e=a[c].attributes[b];isNaN(e)&&(e=0);0===c?d=e:e<d&&(d=e)}return d},_updateCounters:function(){for(var a=
this.visCount,b=0;b<a;b++){var c=this.page*a+b;this.config.showFeatureCount||(c+=1);var e=this["panel"+b+"Node"];c<this.fieldCount?(g.set(e,"display","block"),this.sumData&&this._updateCounter(b,c)):g.set(e,"display","none")}},_updateCounter:function(d,b){var c=this.sumData[b],e=c,g="";1E13<=c&&(e=Math.floor(10*c/1E12)/10,g="TRILLIONS");c=this["counter"+d];e=this._formatNumber(e);null!==c&&null!==e&&c.setValue(e);this["title"+d+"Node"].innerHTML=a.sanitizeHTML(this.aliases[b]?this.aliases[b]:"");
this["units"+d+"Node"].innerHTML=g},_formatNumber:function(a){var b;-100<a&&100>a?(b=r.round(100*a)/100,a=r.format(b,{places:2}),0===a%1&&(a=r.format(b,{places:0}))):(b=r.round(a),a=r.format(b,{places:0}));return a},_closeMessage:function(){g.set(this.messageNode,"display","none");g.set(this.containerNode,"display","block")},_populateOptions:function(a){if(0<a.length){var b=this.filterNode;null===b&&console.log("Filter search drop down not configured");v.create("option",{value:"",innerHTML:this.nls.all},
b);for(var d=0;d<a.length;d++){var c=a[d];v.create("option",{value:c.value,innerHTML:c.label},b)}}},_setFilter:function(){var a=this.filterNode,b=this.filterField,c=a.options[a.selectedIndex].value,e;if(this.opLayerIsFeatureCollection){var g=[];w.forEach(this.opLayer.graphics,function(a){if(a.attributes[b].toString()===c||""===c){var d=new t(a.geometry,a.symbol,a.attributes);a.show();g.push(d)}else a.hide()});0<g.length&&((e=x.graphicsExtent(g))?this.map.setExtent(e.expand(2)):0<g.length&&this.map.centerAt(g[0].geometry))}else{var h=
this._getFilterField(b),a=b+" \x3d "+c;h&&"esriFieldTypeString"===h.type&&(a=b+" \x3d '"+c+"'");""===c&&(a="1\x3d1");this.filterExpr=a;this.opLayer.setDefinitionExpression(a);this.targetLayer.setDefinitionExpression(a);a&&(h=new q,h.returnGeometry=!0,h.where=a,h.outSpatialReference=this.map.spatialReference,this.opLayer.queryFeatures(h,l.hitch(this,function(a){e=x.graphicsExtent(a.features);this.map.setExtent(e.expand(1.5))})))}},_appyFilter:function(a){this.filterExpr&&(a?(this.opLayer.setDefinitionExpression(this.filterExpr),
this.targetLayer.setDefinitionExpression(this.filterExpr)):(this.opLayer.setDefinitionExpression("1\x3d1"),this.targetLayer.setDefinitionExpression("1\x3d1")))},_close:function(){this.widgetManager.closeWidget(this.id)},_updateLayerVisibility:function(){this.targetLayer&&("closed"===this.state?(this.displayCluster&&"esriGeometryPoint"===this.targetLayer.geometryType&&this.targetLayer.setVisibility(this.targetLayerVisibility),this.clusterLayer&&this.clusterLayer.setVisibility(!1)):(this.displayCluster&&
"esriGeometryPoint"===this.targetLayer.geometryType&&this.targetLayer.setVisibility(!1),this.clusterLayer&&this.clusterLayer.setVisibility(!0)))},_stopRefresh:function(){this.interval&&(clearInterval(this.interval),this.interval=null)},_startRefresh:function(){this._stopRefresh();if(this.config.refreshInterval){var a=6E4*this.config.refreshInterval;this.interval=setInterval(l.hitch(this,this._summarize),a)}}})});