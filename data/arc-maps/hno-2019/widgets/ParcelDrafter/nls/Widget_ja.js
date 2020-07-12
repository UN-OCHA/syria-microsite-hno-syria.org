// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/ParcelDrafter/nls/strings":{_widgetLabel:"\u30d1\u30fc\u30bb\u30eb \u30c9\u30e9\u30d5\u30bf\u30fc",newTraverseButtonLabel:"\u65b0\u3057\u3044\u30c8\u30e9\u30d0\u30fc\u30b9\u306e\u958b\u59cb",invalidConfigMsg:"\u7121\u52b9\u306a\u69cb\u6210",geometryServiceURLNotFoundMSG:"\u30b8\u30aa\u30e1\u30c8\u30ea \u30b5\u30fc\u30d3\u30b9\u306e URL \u3092\u53d6\u5f97\u3067\u304d\u307e\u305b\u3093",editTraverseButtonLabel:"\u30c8\u30e9\u30d0\u30fc\u30b9\u306e\u7de8\u96c6",mapTooltipForStartNewTraverse:"\u958b\u59cb\u3059\u308b\u30de\u30c3\u30d7\u4e0a\u306e\u30dd\u30a4\u30f3\u30c8\u307e\u305f\u306f\u4ee5\u4e0b\u306e\u30bf\u30a4\u30d7\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",
mapTooltipForEditNewTraverse:"\u7de8\u96c6\u3059\u308b\u30d1\u30fc\u30bb\u30eb\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",mapTooltipForUpdateStartPoint:"\u30af\u30ea\u30c3\u30af\u3057\u3066\u958b\u59cb\u70b9\u3092\u66f4\u65b0",mapTooltipForScreenDigitization:"\u30af\u30ea\u30c3\u30af\u3057\u3066\u30d1\u30fc\u30bb\u30eb \u30dd\u30a4\u30f3\u30c8\u3092\u8ffd\u52a0",mapTooltipForUpdatingRotaionPoint:"\u30af\u30ea\u30c3\u30af\u3057\u3066\u56de\u8ee2\u30dd\u30a4\u30f3\u30c8\u3092\u66f4\u65b0",
mapTooltipForRotate:"\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u56de\u8ee2",mapTooltipForScale:"\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u30b5\u30a4\u30ba\u5909\u66f4",backButtonTooltip:"\u623b\u308b",newTraverseTitle:"\u65b0\u3057\u3044\u30c8\u30e9\u30d0\u30fc\u30b9",editTraverseTitle:"\u30c8\u30e9\u30d0\u30fc\u30b9\u306e\u7de8\u96c6",clearingDataConfirmationMessage:"\u5909\u66f4\u5185\u5bb9\u306f\u7834\u68c4\u3055\u308c\u307e\u3059\u3002\u7d9a\u884c\u3057\u307e\u3059\u304b\uff1f",unableToFetchParcelMessage:"\u30d1\u30fc\u30bb\u30eb\u3092\u53d6\u5f97\u3067\u304d\u307e\u305b\u3093\u3002",
unableToFetchParcelLinesMessage:"\u30d1\u30fc\u30bb\u30eb \u30e9\u30a4\u30f3\u3092\u53d6\u5f97\u3067\u304d\u307e\u305b\u3093\u3002",planSettings:{planSettingsTitle:"\u8a2d\u5b9a",directionOrAngleTypeLabel:"\u65b9\u5411\u307e\u305f\u306f\u89d2\u5ea6\u306e\u30bf\u30a4\u30d7",directionOrAngleUnitsLabel:"\u65b9\u5411\u307e\u305f\u306f\u89d2\u5ea6\u306e\u5358\u4f4d",distanceAndLengthUnitsLabel:"\u8ddd\u96e2\u3068\u9577\u3055\u306e\u5358\u4f4d",areaUnitsLabel:"\u9762\u7a4d\u5358\u4f4d",circularCurveParameters:"\u5186\u5f27\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",
northAzimuth:"\u5317\u65b9\u4f4d\u89d2",southAzimuth:"\u5357\u65b9\u4f4d\u89d2",quadrantBearing:"\u56db\u5206\u5186\u65b9\u4f4d\u89d2",radiusAndChordLength:"\u534a\u5f84\u3068\u5f26\u306e\u9577\u3055",radiusAndArcLength:"\u534a\u5f84\u3068\u5186\u5f27\u9577",expandGridTooltipText:"\u30b0\u30ea\u30c3\u30c9\u306e\u5c55\u958b",collapseGridTooltipText:"\u30b0\u30ea\u30c3\u30c9\u3092\u305f\u305f\u3080",zoomToLocationTooltipText:"\u4f4d\u7f6e\u306b\u30ba\u30fc\u30e0",onScreenDigitizationTooltipText:"\u30c7\u30b8\u30bf\u30a4\u30ba",
updateRotationPointTooltipText:"\u56de\u8ee2\u30dd\u30a4\u30f3\u30c8\u306e\u66f4\u65b0"},traverseSettings:{bearingLabel:"\u65b9\u4f4d",lengthLabel:"\u9577\u3055",radiusLabel:"\u534a\u5f84",noMiscloseCalculated:"\u9589\u5408\u5dee\u304c\u8a08\u7b97\u3055\u308c\u3066\u3044\u307e\u305b\u3093",traverseMiscloseBearing:"Misclose Bearing",traverseAccuracy:"\u7cbe\u5ea6",accuracyHigh:"\u9ad8",traverseDistance:"Misclose Distance",traverseMiscloseRatio:"Misclose Ratio",traverseStatedArea:"\u8a18\u8f09\u9762\u7a4d",
traverseCalculatedArea:"\u8a08\u7b97\u9762\u7a4d",addButtonTitle:"\u8ffd\u52a0",deleteButtonTitle:"\u524a\u9664"},parcelTools:{rotationToolLabel:"\u89d2\u5ea6",scaleToolLabel:"\u7e2e\u5c3a"},newTraverse:{invalidBearingMessage:"\u7121\u52b9\u306a\u65b9\u4f4d\u3067\u3059\u3002",invalidLengthMessage:"\u7121\u52b9\u306a\u9577\u3055\u3067\u3059\u3002",invalidRadiusMessage:"\u7121\u52b9\u306a\u534a\u5f84\u3067\u3059\u3002",negativeLengthMessage:"\u66f2\u7dda\u306b\u306e\u307f\u6709\u52b9",enterValidValuesMessage:"\u6709\u52b9\u306a\u5024\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
enterValidParcelInfoMessage:"\u4fdd\u5b58\u3059\u308b\u6709\u52b9\u306a\u30d1\u30fc\u30bb\u30eb\u60c5\u5831\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",unableToDrawLineMessage:"\u30e9\u30a4\u30f3\u3092\u63cf\u753b\u3067\u304d\u307e\u305b\u3093\u3002",invalidEndPointMessage:"\u7121\u52b9\u306a\u7d42\u70b9\u3067\u3059\u3002\u30e9\u30a4\u30f3\u3092\u63cf\u753b\u3067\u304d\u307e\u305b\u3093\u3002"},planInfo:{requiredText:"(\u5fc5\u9808)",optionalText:"(\u30aa\u30d7\u30b7\u30e7\u30f3)",
parcelNamePlaceholderText:"\u30d1\u30fc\u30bb\u30eb\u540d",parcelDocumentTypeText:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8 \u30bf\u30a4\u30d7",planNamePlaceholderText:"\u30d7\u30e9\u30f3\u540d",cancelButtonLabel:"\u30ad\u30e3\u30f3\u30bb\u30eb",saveButtonLabel:"\u4fdd\u5b58",saveNonClosedParcelConfirmationMessage:"\u5165\u529b\u3055\u308c\u305f\u30d1\u30fc\u30bb\u30eb\u304c\u9589\u3058\u3066\u3044\u307e\u305b\u3093\u3002\u7d9a\u884c\u3057\u3066\u3001\u30d1\u30fc\u30bb\u30eb \u30e9\u30a4\u30f3\u306e\u307f\u3092\u4fdd\u5b58\u3057\u307e\u3059\u304b\uff1f",
unableToCreatePolygonParcel:"\u30d1\u30fc\u30bb\u30eb \u30dd\u30ea\u30b4\u30f3\u3092\u4f5c\u6210\u3067\u304d\u307e\u305b\u3093\u3002",unableToSavePolygonParcel:"\u30d1\u30fc\u30bb\u30eb \u30dd\u30ea\u30b4\u30f3\u3092\u4fdd\u5b58\u3067\u304d\u307e\u305b\u3093\u3002",unableToSaveParcelLines:"\u30d1\u30fc\u30bb\u30eb \u30e9\u30a4\u30f3\u3092\u4fdd\u5b58\u3067\u304d\u307e\u305b\u3093\u3002",unableToUpdateParcelLines:"\u30d1\u30fc\u30bb\u30eb \u30e9\u30a4\u30f3\u3092\u66f4\u65b0\u3067\u304d\u307e\u305b\u3093\u3002",
parcelSavedSuccessMessage:"\u30d1\u30fc\u30bb\u30eb\u304c\u6b63\u5e38\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3057\u305f\u3002",parcelDeletedSuccessMessage:"\u30d1\u30fc\u30bb\u30eb\u304c\u6b63\u5e38\u306b\u524a\u9664\u3055\u308c\u307e\u3057\u305f\u3002",parcelDeleteErrorMessage:"\u30d1\u30fc\u30bb\u30eb\u306e\u524a\u9664\u4e2d\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002",enterValidParcelNameMessage:"\u6709\u52b9\u306a\u30d1\u30fc\u30bb\u30eb\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
enterValidPlanNameMessage:"\u6709\u52b9\u306a\u30d7\u30e9\u30f3\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",enterValidDocumentTypeMessage:"\u7121\u52b9\u306a\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8 \u30bf\u30a4\u30d7\u3067\u3059\u3002",enterValidStatedAreaNameMessage:"\u6709\u52b9\u306a\u8a18\u8f09\u9762\u7a4d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"},xyInput:{explanation:"\u30d1\u30fc\u30bb\u30eb \u30ec\u30a4\u30e4\u30fc\u306e\u7a7a\u9593\u53c2\u7167\u5185"},
_localized:{}}});