/*
 Controller v0.2.1 | (c) 2024 Nerijus Jasinskas */
(function () {
    function r() {
        var a = jQuery("a").not("#p a");
        a.off("click");
        a.click(function (a) {
            l(a)
        })
    }

    function v(a, d) {
        function b() {
            document.querySelectorAll(".qs h1, .qk p, .qk li, .qk .an").forEach(function (a) {
                a.animate([{transform: "rotate(-90deg)"}, {transform: "rotate(0deg)"}], {
                    duration: 350,
                    fill: "forwards"
                })
            })
        }

        function c() {
            for (var a = document.querySelectorAll("h1"), b = 0; b < a.length; b++) (function (a) {
                function b(a) {
                    a = a.childNodes;
                    for (var d = 0; d < a.length; d++) {
                        var c = a[d];
                        if (3 === c.nodeType &&
                            0 < c.textContent.trim().length) {
                            for (var h = c.textContent, f = document.createDocumentFragment(), e = 0; e < h.length; e++) {
                                var g = h.charAt(e), k = document.createElement("span");
                                k.className = "mi";
                                k.textContent = " " === g ? "\u00a0" : g;
                                k.style.setProperty("--rx", 200 * Math.random() - 100 + "px");
                                k.style.setProperty("--ry", 200 * Math.random() - 100 + "px");
                                f.appendChild(k)
                            }
                            c.parentNode.replaceChild(f, c)
                        } else 1 === c.nodeType && b(c)
                    }
                }

                b(a)
            })(a[b])
        }

        var f = document.querySelector("#c");
        f.animate([{opacity: 1}, {opacity: 0}], {duration: 300, fill: "forwards"}).onfinish =
            function () {
                w(a.split(".").slice(-0)[0]);
                jQuery(document).trigger(e.j);
                jQuery.fx.off = 0;
                f.innerHTML = d;
                f.style.opacity = "0";
                f.animate([{padding: "0px", opacity: 0}, {padding: "30px 0 0 10px", opacity: 1}], {
                    duration: 500,
                    fill: "forwards"
                }).onfinish = function () {
                    location.hash = a;
                    m(a);
                    f.animate([{padding: "30px 0 0 10px"}, {padding: "0px"}], {
                        duration: 250,
                        fill: "forwards"
                    }).onfinish = function () {
                        b();
                        r();
                        c()
                    }
                };
                window.scrollTo({top: 0, behavior: "smooth"})
            }
    }

    function w(a) {
        document.querySelectorAll(".u6 a").forEach(function (d) {
            0 <=
            (d.getAttribute("href") || "").indexOf(a) ? d.classList.add("ah") : d.classList.remove("ah")
        })
    }

    function x() {
        function a() {
            var f = Math.round(b / d * 100);
            b++;
            100 > f ? setTimeout(a, c) : (f = 100, jQuery("#pb").fadeOut());
            jQuery("#pb").width(f + "%")
        }

        var d = 100, b = 1, c = 50;
        jQuery("#pb").show();
        this.f = function () {
            c = 1;
            d = 10
        };
        a()
    }

    function n(a, d, b) {
        this.g = a;
        this.h = 0;
        this.a = d;
        this.b = 0;
        this.e = b
    }

    function s(a, d) {
        for (var b in g) a == e.c && g[b].a == d && (g[b].b = !0);
        for (b in c) if (a == e.c && c[b].a == d && (c[b].b = !0), a == e.d && (c[b].h = c[b].g ==
            d), !0 == c[b].h && !0 == c[b].b) {
            if (c[b].e) {
                var h = t(g, c[b].e);
                if (h && !h.b) break
            }
            jQuery(document).trigger(e.i, [c[b].a])
        }
    }

    function m(a, d) {
        var b, c;
        a = a.split("/").slice(-1)[0];
        a.length && 0 != a.indexOf("#") || (a = "index.html" + a);
        var f = a.split("#").slice(-0)[0], g = a.split("#").slice(-1)[0];
        b = f.split(".").slice(-0)[0];
        c = g.split(".").slice(-0)[0];
        void 0 != d ? q != c && l(null, g) : (q = b, f != g && q != c ? l(null, g) : (jQuery(document).trigger(e.d, [b]), u(a)))
    }

    function u(a) {
        for (p in c) if (0 <= a.indexOf(c[p].g) && !c[p].b) {
            Common.getScript("../js/" +
                c[p].a + ".js?v=48");
            c[p].e && (a = t(g, c[p].e)) && !a.b && Common.getScript("../js/" + a.a + ".min.js?v=3", function (a) {
                if (a == g[0].a) var b = 0, c = window.setInterval(function () {
                    b || void 0 == window.d3 || (b = 1, window.clearInterval(c), jQuery(document).trigger(e.c, [a]))
                }, 50); else jQuery(document).trigger(e.c, [a])
            }(a.a));
            break
        }
    }

    function t(a, c) {
        for (p in a) {
            var b = a[p];
            if (c == b.a) return b
        }
    }

    function l(a, c) {
        var b = void 0 != a ? jQuery(a.currentTarget).attr("href") : c;
        if (b.length && !(0 > b.indexOf("html"))) {
            void 0 != a && a.preventDefault();
            u(b);
            var e = new x;
            jQuery.ajax({
                url: 0 <= b.lastIndexOf("/") ? b.replace("/de/", "/de/part/") : "part/" + b,
                dataType: "html"
            }).done(function (a) {
                e.f();
                v(b, a);
                (function () {
                    dataLayer.push(arguments)
                })("event", "page_view", {page_location: b})
            }).error(function () {
                e.f()
            })
        }
    }

    var e = {c: "j", d: "d", i: "b", j: "e"}, q = "",
        c = [new n("index", "intr", null), new n("industries", "sph", null), new n("profile", "srch", "d3")],
        g = [new function (a, c) {
            this.a = a;
            this.b = c
        }("d3", 0)];
    jQuery(document).on(e.c, function (a, c) {
        s(e.c, c)
    });
    jQuery(document).on(e.d, function (a,
                                       c) {
        s(e.d, c)
    });
    jQuery(window).on("hashchange", function () {
        m(location.href, !0)
    });
    Common.getScript("../js/gdpr.js?v=1");
    document.title = "Nerijus Jasinskas Software Engineering";
    r();
    m(location.href);
    document.getElementById("cy").innerHTML = (new Date).getFullYear()
})();
