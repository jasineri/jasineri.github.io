/*
 Controller v0.2.0 | (c) 2014 Nerijus Jasinskas */
(function(){function n(){var a=jQuery("a").not("#p a");a.off("click");a.click(function(a){h(a)});jQuery("#submit-btn").each(function(){var a=jQuery(this);a.off("click");a.click(function(a){a.preventDefault();r("")&&x()})});for(var c=["name","address","email","phone","message"],b=0;b<c.length;b++)jQuery("#"+c[b]).each(function(){var a=jQuery(this),d=c[b];a.off();a.focusout(function(){r(d)});a.focusin(function(){var a=jQuery('label[for="'+d+'"] > span.error');a.removeClass("bubl arow");a.hide()})})}
function y(a,c){var b=jQuery("#c");b.fadeOut(300,function(){z(a.split(".").slice(-0)[0]);jQuery(document).trigger(e.j);jQuery.fx.off=0;b.html(c);b.fadeTo(0,0,function(){location.hash=a;k(a);b.fadeTo(500,1);n()})})}function z(a){jQuery("#main-menu").find("a").each(function(){var c=jQuery(this);0<=c.attr("href").indexOf(a)?c.addClass("current"):c.removeClass("current")})}function s(){function a(){var e=Math.round(b/c*100);b++;100>e?setTimeout(a,d):e=100;jQuery("#pbar").width(e+"%")}var c=100,b=1,d=
50;this.d=function(){d=1;c=10};a()}function l(a,c,b){this.g=a;this.h=0;this.a=c;this.b=0;this.f=b}function t(a,c){for(var b in g)a==e.c&&g[b].a==c&&(g[b].b=!0);for(b in d)if(a==e.c&&d[b].a==c&&(d[b].b=!0),a==e.e&&(d[b].h=d[b].g==c),!0==d[b].h&&!0==d[b].b){if(d[b].f){var q=u(g,d[b].f);if(q&&!q.b)break}jQuery(document).trigger(e.i,[d[b].a])}}function k(a,c){var b,d;a=a.split("/").slice(-1)[0];a.length&&0!=a.indexOf("#")||(a="index.html"+a);var g=a.split("#").slice(-0)[0],f=a.split("#").slice(-1)[0];
b=g.split(".").slice(-0)[0];d=f.split(".").slice(-0)[0];void 0!=c?m!=d&&h(null,f):(m=b,g!=f&&m!=d?h(null,f):(jQuery(document).trigger(e.e,[b]),v(a)));jQuery("#homerecads_widget").remove()}function x(){var a=new s;jQuery.ajax({url:"http://code.jasineri.de/test/de/contact2.php",data:{name:jQuery("#name").val(),address:jQuery("#address").val(),email:jQuery("#email").val(),phone:jQuery("#phone").val(),message:jQuery("#message").val()},dataType:"jsonp"}).done(function(c){a.d();w(c)}).error(function(){a.d();
w("err")})}function w(a){if("OK"==a)jQuery("#contact-head").hide(),jQuery("#contact-cont").hide(),jQuery("#contact-sent").fadeIn(300);else for(var c in a)a[c].length&&f(c,a[c])}function v(a){for(p in d)if(0<=a.indexOf(d[p].g)&&!d[p].b){Common.getScript("../js/"+d[p].a+".js?v=44");d[p].f&&(a=u(g,d[p].f))&&!a.b&&Common.getScript("../js/"+a.a+".min.js?v=2",function(a){if(a==g[0].a)var b=0,d=window.setInterval(function(){b||void 0==window.d3||(b=1,window.clearInterval(d),jQuery(document).trigger(e.c,
[a]))},50);else jQuery(document).trigger(e.c,[a])}(a.a));break}}function u(a,c){for(p in a){var b=a[p];if(c==b.a)return b}}function h(a,c){var b=void 0!=a?jQuery(a.currentTarget).attr("href"):c;0<b.indexOf("contact")&&(b="contact.html");if(b.length&&!(0>b.indexOf("html"))){void 0!=a&&a.preventDefault();v(b);var d=new s;jQuery.ajax({url:0<=b.lastIndexOf("/")?b.replace("/de/","/de/part/"):"part/"+b,dataType:"html"}).done(function(a){d.d();y(b,a)}).error(function(){d.d()})}}function f(a,c){var b=jQuery('label[for="'+
a+'"] > span.error');b.hide();b.addClass("bubl arow");b.html(c);b.fadeIn(300)}function r(a){var c=!0;if(!a.length||"name"==a){var b=jQuery("#name").val();b.length?b.match(/^[a-zA-Z ]*$/)||(f("name","Nur Buchstaben und Leerzeichen erlaubt."),c=!1):(f("name","Dieses Feld muss ausgef\u00fcllt werden!"),c=!1)}a.length&&"email"!=a||(b=jQuery("#email").val(),b.length&&b.match(/([\w\-]+\@[\w\-]+\.[\w\-]+)/)||(f("email","Bitte eine richtige E-Mail-Adresse eingeben."),c=!1));a.length&&"phone"!=a||(b=jQuery("#phone").val(),
b.match(/^[0-9\-\+\(\)\/ ]*$/)||(f("phone","Bitte eine richtige Telefonnummer eingeben."),c=!1));a.length&&"message"!=a||(b=jQuery("#message").val(),b.trim().length||(f("message","Dieses Feld muss ausgef\u00fcllt werden!"),c=!1));return c}var e={c:"j",e:"d",i:"b",j:"e"},m="",d=[new l("index","intr",null),new l("industries","sph",null),new l("profile","srch","d3")],g=[new function(a,c){this.a=a;this.b=c}("d3",0)];jQuery(document).on(e.c,function(a,c){t(e.c,c)});jQuery(document).on(e.e,function(a,c){t(e.e,
c)});jQuery(window).on("hashchange",function(){k(location.href,!0)});Common.getScript("../js/gdpr.js?v=1");document.title="Nerijus Jasinskas Software-Engineering";n();k(location.href);document.getElementById("cy").innerHTML=(new Date).getFullYear()})();
