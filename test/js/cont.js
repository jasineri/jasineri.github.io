/*
 Controller v0.2.1 | (c) 2024 Nerijus Jasinskas */
(function () {
    function n() {
        var a = jQuery("a").not("#p a");
        a.off("click");
        a.click(function (a) {
            h(a)
        })
    }

    function u(a, d) {
        var b = jQuery("#c");
        b.fadeOut(300, function () {
            v(a.split(".").slice(-0)[0]);
            jQuery(document).trigger(e.j);
            jQuery.fx.off = 0;
            b.html(d);
            b.fadeTo(0, 0, function () {
                location.hash = a;
                k(a);
                b.animate({padding: "10px 50px", opacity: "1.0"}, 250);
                b.animate({padding: "30px 10px", opacity: "1.0"}, 250);
                b.animate({padding: 0}, 500);
                n()
            })
        })
    }

    function v(a) {
        jQuery(".u6").find("a").each(function () {
            var d = jQuery(this);
            0 <= d.attr("href").indexOf(a) ?
                d.addClass("ah") : d.removeClass("ah")
        })
    }

    function w() {
        function a() {
            var e = Math.round(b / d * 100);
            b++;
            100 > e ? setTimeout(a, c) : (e = 100, jQuery("#pb").fadeOut());
            jQuery("#pb").width(e + "%")
        }

        var d = 100, b = 1, c = 50;
        jQuery("#pb").show();
        this.f = function () {
            c = 1;
            d = 10
        };
        a()
    }

    function l(a, d, b) {
        this.g = a;
        this.h = 0;
        this.a = d;
        this.b = 0;
        this.e = b
    }

    function r(a, d) {
        for (var b in f) a == e.c && f[b].a == d && (f[b].b = !0);
        for (b in c) if (a == e.c && c[b].a == d && (c[b].b = !0), a == e.d && (c[b].h = c[b].g == d), !0 == c[b].h && !0 == c[b].b) {
            if (c[b].e) {
                var q = s(f, c[b].e);
                if (q && !q.b) break
            }
            jQuery(document).trigger(e.i, [c[b].a])
        }
    }

    function k(a, d) {
        var b, c;
        a = a.split("/").slice(-1)[0];
        a.length && 0 != a.indexOf("#") || (a = "index.html" + a);
        var f = a.split("#").slice(-0)[0], g = a.split("#").slice(-1)[0];
        b = f.split(".").slice(-0)[0];
        c = g.split(".").slice(-0)[0];
        void 0 != d ? m != c && h(null, g) : (m = b, f != g && m != c ? h(null, g) : (jQuery(document).trigger(e.d, [b]), t(a)))
    }

    function t(a) {
        for (p in c) if (0 <= a.indexOf(c[p].g) && !c[p].b) {
            Common.getScript("../js/" + c[p].a + ".js?v=45");
            c[p].e && (a = s(f, c[p].e)) && !a.b &&
            Common.getScript("../js/" + a.a + ".min.js?v=2", function (a) {
                if (a == f[0].a) var b = 0, c = window.setInterval(function () {
                    b || void 0 == window.d3 || (b = 1, window.clearInterval(c), jQuery(document).trigger(e.c, [a]))
                }, 50); else jQuery(document).trigger(e.c, [a])
            }(a.a));
            break
        }
    }

    function s(a, d) {
        for (p in a) {
            var b = a[p];
            if (d == b.a) return b
        }
    }

    function h(a, d) {
        var b = void 0 != a ? jQuery(a.currentTarget).attr("href") : d;
        if (b.length && !(0 > b.indexOf("html"))) {
            void 0 != a && a.preventDefault();
            t(b);
            var c = new w;
            jQuery.ajax({
                url: 0 <= b.lastIndexOf("/") ?
                    b.replace("/de/", "/de/part/") : "part/" + b, dataType: "html"
            }).done(function (a) {
                c.f();
                u(b, a);
                dataLayer.push({'event':'Pageview','url':b});
                dataLayer.push('consent', 'default', {
                    'ad_user_data': 'granted',
                    'ad_personalization': 'granted',
                    'ad_storage': 'granted',
                    'analytics_storage': 'granted'
                });
                dataLayer.push('consent', 'update', {
                    'ad_user_data': 'granted',
                    'ad_personalization': 'granted',
                    'ad_storage': 'granted',
                    'analytics_storage': 'granted'
                });
            }).error(function () {
                c.f()
            })
        }
    }

    var e = {c: "j", d: "d", i: "b", j: "e"}, m = "", c = [new l("index", "intr", null),
        new l("industries", "sph", null), new l("profile", "srch", "d3")], f = [new function (a, c) {
        this.a = a;
        this.b = c
    }("d3", 0)];
    jQuery(document).on(e.c, function (a, c) {
        r(e.c, c)
    });
    jQuery(document).on(e.d, function (a, c) {
        r(e.d, c)
    });
    jQuery(window).on("hashchange", function () {
        k(location.href, !0)
    });
    Common.getScript("../js/gdpr.js?v=1");
    document.title = "Nerijus Jasinskas Software-Engineering";
    n();
    k(location.href);
    document.getElementById("cy").innerHTML = (new Date).getFullYear()
})();
