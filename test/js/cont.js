/*
 Controller v0.2.1 | (c) 2024 Nerijus Jasinskas */
(function(){function q(){var a=jQuery("a").not("#p a");a.off("click");a.click(function(a){k(a)})}function u(a,d){function b(a){$(a).animate({k:90},{step:function(a){$(this).css("transform","rotate("+(a-90)+"deg)")}},{duration:750,queue:!1})}var e=jQuery("#c");e.fadeOut(300,function(){v(a.split(".").slice(-0)[0]);jQuery(document).trigger(f.j);jQuery.fx.off=0;e.html(d);e.fadeTo(0,0,function(){location.hash=a;l(a);e.animate({padding:"30px 0 0 10px",opacity:"1.0"},500);e.animate({padding:0},250);$("html").animate({scrollTop:0},
{duration:500,queue:!1});b(".qs h1");0!==a.indexOf("ind")&&0!==a.indexOf("pro")&&b(".qk");q()})})}function v(a){jQuery(".u6").find("a").each(function(){var d=jQuery(this);0<=d.attr("href").indexOf(a)?d.addClass("ah"):d.removeClass("ah")})}function w(){function a(){var c=Math.round(b/d*100);b++;100>c?setTimeout(a,e):(c=100,jQuery("#pb").fadeOut());jQuery("#pb").width(c+"%")}var d=100,b=1,e=50;jQuery("#pb").show();this.f=function(){e=1;d=10};a()}function m(a,d,b){this.g=a;this.h=
0;this.a=d;this.b=0;this.e=b}function r(a,d){for(var b in g)a==f.c&&g[b].a==d&&(g[b].b=!0);for(b in c)if(a==f.c&&c[b].a==d&&(c[b].b=!0),a==f.d&&(c[b].h=c[b].g==d),!0==c[b].h&&!0==c[b].b){if(c[b].e){var e=s(g,c[b].e);if(e&&!e.b)break}jQuery(document).trigger(f.i,[c[b].a])}}function l(a,d){var b,c;a=a.split("/").slice(-1)[0];a.length&&0!=a.indexOf("#")||(a="index.html"+a);var g=a.split("#").slice(-0)[0],h=a.split("#").slice(-1)[0];b=g.split(".").slice(-0)[0];c=h.split(".").slice(-0)[0];void 0!=d?n!=
c&&k(null,h):(n=b,g!=h&&n!=c?k(null,h):(jQuery(document).trigger(f.d,[b]),t(a)))}function t(a){for(p in c)if(0<=a.indexOf(c[p].g)&&!c[p].b){Common.getScript("../js/"+c[p].a+".js?v=48");c[p].e&&(a=s(g,c[p].e))&&!a.b&&Common.getScript("../js/"+a.a+".min.js?v=3",function(a){if(a==g[0].a)var b=0,c=window.setInterval(function(){b||void 0==window.d3||(b=1,window.clearInterval(c),jQuery(document).trigger(f.c,[a]))},50);else jQuery(document).trigger(f.c,[a])}(a.a));break}}function s(a,c){for(p in a){var b=
a[p];if(c==b.a)return b}}function k(a,c){var b=void 0!=a?jQuery(a.currentTarget).attr("href"):c;if(b.length&&!(0>b.indexOf("html"))){void 0!=a&&a.preventDefault();t(b);var e=new w;jQuery.ajax({url:0<=b.lastIndexOf("/")?b.replace("/de/","/de/part/"):"part/"+b,dataType:"html"}).done(function(a){e.f();u(b,a);(function(){dataLayer.push(arguments)})("event","page_view",{page_location:b})}).error(function(){e.f()})}}var f={c:"j",d:"d",i:"b",j:"e"},n="",c=[new m("index","intr",null),new m("industries","sph",
null),new m("profile","srch","d3")],g=[new function(a,c){this.a=a;this.b=c}("d3",0)];jQuery(document).on(f.c,function(a,c){r(f.c,c)});jQuery(document).on(f.d,function(a,c){r(f.d,c)});jQuery(window).on("hashchange",function(){l(location.href,!0)});Common.getScript("../js/gdpr.js?v=1");document.title="Nerijus Jasinskas Software Engineering";q();l(location.href);document.getElementById("cy").innerHTML=(new Date).getFullYear()})();
